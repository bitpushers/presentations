# Panel walkthrough deck

30-minute panel: walk through one project you contributed to substantially. 15–20 slides on
problem, ownership, decisions and tradeoffs, outcome. Diagrams welcome.

Live: https://bitpushers.github.io/presentations/panel-walkthrough/

## Working on it

From the repo root:

```bash
pnpm dev panel-walkthrough
```

`slides.md` is the deck. Slides are separated by `---`. Anything wrapped in
`<span class="opacity-50">…</span>` is a placeholder prompt — replace the text, keep the styling
if you like the grey, drop it if you don't.

## Timing

20 slides in 30 minutes *including* Q&A means about 1 to 1.5 minutes per slide. The comment at the
bottom of each slide is the budget for that slide. Slides carry the claim and the diagram; the
detail is spoken.

If the panel runs long, slide 18 ("Why it matters here") is the first cut — it's the one that
reads as a stretch if the connection is thin.

## Structure

| # | Slide | Job |
|---|-------|-----|
| 1 | Title | Who you are, in one line |
| 2 | What I'll cover | Signpost the arc |
| 3 | Context | Place the work |
| 4 | The problem | Earn attention — one sentence, real cost |
| 5 | Why it was hard | The constraint loop |
| 6 | What I owned | Mine vs. not mine — the credibility slide |
| 7 | Starting state | |
| 8 | Constraint map | What could and couldn't be traded |
| 9–11 | Three decisions | Chose / rejected, each with its cost |
| 12 | Tradeoff ledger | The slide a technical panel will interrogate |
| 13 | How it actually went | Plan vs. reality |
| 14 | The moment it nearly failed | Do not cut this one |
| 15 | Outcome | Baseline → result |
| 16 | What survived me | |
| 17 | What this taught me | |
| 18 | Why it matters here | Bridge to the team |
| 19 | Questions | Hand off, then stop talking |
| 20 | Appendix | Only if asked |
