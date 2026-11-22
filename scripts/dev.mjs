#!/usr/bin/env node
// Runs the Slidev dev server for one deck: `pnpm dev <deck>` (defaults to the only deck).
import { execFileSync } from 'node:child_process'
import { existsSync, readdirSync, readFileSync } from 'node:fs'
import { dirname, join, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..')
const decksDir = join(root, 'decks')

const available = readdirSync(decksDir, { withFileTypes: true })
  .filter((e) => e.isDirectory() && existsSync(join(decksDir, e.name, 'slides.md')))
  .map((e) => e.name)

const deck = process.argv[2] || available[0]

if (!deck || !available.includes(deck)) {
  console.error(`Unknown deck: ${process.argv[2] ?? '(none)'}\nAvailable: ${available.join(', ')}`)
  process.exit(1)
}

const title = (/^title:\s*(.+)$/m.exec(readFileSync(join(decksDir, deck, 'slides.md'), 'utf8')) || [])[1]
console.log(`▶ ${deck}${title ? ` — ${title.trim()}` : ''}`)

execFileSync('pnpm', ['--dir', join(decksDir, deck), 'exec', 'slidev'], { stdio: 'inherit', cwd: join(decksDir, deck) })
