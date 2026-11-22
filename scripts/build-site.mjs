#!/usr/bin/env node
// Builds every deck under decks/ into site/, one directory per deck, plus an index page.
import { execFileSync } from 'node:child_process'
import { cpSync, existsSync, mkdirSync, readdirSync, readFileSync, rmSync, writeFileSync } from 'node:fs'
import { dirname, join, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..')
const decksDir = join(root, 'decks')
const siteDir = join(root, 'site')
const base = (process.env.BASE_PATH || '/presentations').replace(/\/$/, '')

const pkg = JSON.parse(readFileSync(join(root, 'package.json'), 'utf8'))

rmSync(siteDir, { recursive: true, force: true })
mkdirSync(siteDir, { recursive: true })

const decks = readdirSync(decksDir, { withFileTypes: true })
  .filter((e) => e.isDirectory() && existsSync(join(decksDir, e.name, 'slides.md')))
  .map((e) => e.name)
  .sort()

if (!decks.length) {
  console.error('No decks found under decks/*/slides.md')
  process.exit(1)
}

const built = []

for (const deck of decks) {
  const deckPath = join(decksDir, deck)
  console.log(`\n▶ building ${deck} → ${base}/${deck}/`)
  execFileSync(
    'pnpm',
    [
      '--dir', deckPath,
      'exec', 'slidev', 'build', join(deckPath, 'slides.md'),
      '--base', `${base}/${deck}/`,
      '--out', join(siteDir, deck),
    ],
    { stdio: 'inherit', cwd: root }
  )
  built.push({ deck, ...readFrontmatter(join(deckPath, 'slides.md')) })
}

writeFileSync(join(siteDir, 'index.html'), renderIndex(built), 'utf8')
writeFileSync(join(siteDir, '.nojekyll'), '', 'utf8')
console.log(`\n✓ site built: ${built.length} deck(s) → site/`)

// Minimal headmatter reader: we only want `title` and `info`.
function readFrontmatter(file) {
  const text = readFileSync(file, 'utf8')
  const m = /^---\n([\s\S]*?)\n---/.exec(text)
  const fm = m ? m[1] : ''
  const title = (/^title:\s*(.+)$/m.exec(fm) || [])[1]
  const info = (/^info:[^\n]*\n((?:\s{2,}.*\n)+)/.exec(fm) || [])[1]
  return {
    title: title ? title.trim().replace(/^["']|["']$/g, '') : null,
    info: info ? info.replace(/\s+/g, ' ').trim() : null,
  }
}

function esc(s) {
  return String(s).replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' })[c])
}

function renderIndex(items) {
  const cards = items
    .map(
      ({ deck, title, info }) => `      <a class="card" href="${base}/${esc(deck)}/">
        <h2>${esc(title || deck)}</h2>
        <p>${esc(info || '')}</p>
        <span class="go">Open deck →</span>
      </a>`
    )
    .join('\n')

  return `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${esc(pkg.name || 'presentations')}</title>
<style>
  :root { color-scheme: dark; }
  * { box-sizing: border-box; }
  body {
    margin: 0; padding: 3rem 1.5rem; background: #0d1117; color: #e6edf3;
    font: 16px/1.6 ui-sans-serif, -apple-system, "Segoe UI", system-ui, sans-serif;
  }
  main { max-width: 52rem; margin: 0 auto; }
  h1 { font-size: 1.1rem; font-weight: 600; letter-spacing: .08em; text-transform: uppercase; color: #7d8590; margin: 0 0 2rem; }
  .card { display: block; padding: 1.25rem 1.5rem; margin-bottom: 1rem; border: 1px solid #30363d;
          border-radius: 10px; text-decoration: none; color: inherit; transition: border-color .15s, background .15s; }
  .card:hover { border-color: #58a6ff; background: #161b22; }
  .card h2 { margin: 0 0 .35rem; font-size: 1.25rem; font-weight: 600; }
  .card p { margin: 0 0 .75rem; color: #9198a1; font-size: .9rem; }
  .go { color: #58a6ff; font-size: .85rem; }
</style>
</head>
<body>
  <main>
    <h1>Presentations</h1>
${cards}
  </main>
</body>
</html>
`
}
