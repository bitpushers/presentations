---
theme: default
title: Project Walkthrough — Panel Presentation
info: |
  Panel presentation: one project, end to end.
  Problem, ownership, key decisions and tradeoffs, outcome.
class: text-center
highlighter: shiki
lineNumbers: false
drawings:
  persist: false
transition: slide-left
mdc: true
---

# One project, end to end

## Problem → ownership → tradeoffs → outcome

<div class="pt-12 opacity-70 text-sm">
Panel presentation · 30 minutes · 20 slides
</div>

<!--
SLIDE 1 — 30 seconds.
Name, current role, one sentence on what the project was.
Do not read the title card aloud. Establish who you are and start moving.
-->

---

# What I'll cover

<div class="grid grid-cols-2 gap-8 pt-8 text-left">
<div>

**The problem**
<br><span class="opacity-60 text-sm">What was broken, and why it mattered</span>

**What I owned**
<br><span class="opacity-60 text-sm">Scope, authority, team shape</span>

</div>
<div>

**The decisions**
<br><span class="opacity-60 text-sm">Three forks, and what I gave up at each</span>

**The outcome**
<br><span class="opacity-60 text-sm">Measured results, and what I'd redo</span>

</div>
</div>

<!--
SLIDE 2 — 45 seconds. Signpost the arc, then get out. Reviewers remember structure.
-->

---

# Context

<div class="text-left pt-6">

- **Where:** <span class="opacity-50">company, team, product surface</span>
- **When:** <span class="opacity-50">dates — start and end</span>
- **My title then:** <span class="opacity-50">and what it actually meant day to day</span>
- **Team:** <span class="opacity-50">headcount, disciplines, who I reported to</span>

</div>

<!--
SLIDE 3 — 1 minute. Enough for the panel to place the work. Nothing more.
-->

---

# The problem

<div class="text-2xl pt-8 text-left">

> <span class="opacity-50">One sentence. If it needs two sentences, it isn't the problem yet.</span>

</div>

<div class="pt-10 text-left text-sm opacity-70">

**Cost of leaving it alone:** <span class="opacity-50">money, risk, customer harm, engineer hours — pick the real one</span>

</div>

<!--
SLIDE 4 — 1.5 minutes. This is the slide that earns attention. Spend the time.
Strong version: a specific number and who felt the pain.
-->

---

# Why it was hard

```mermaid
flowchart LR
  A["Legacy system"] --> B["Undocumented behavior"]
  B --> C["Downstream dependents"]
  C --> D["Change is expensive"]
  D --> A
```

<div class="pt-6 text-left text-sm opacity-70">
Replace the four nodes with the real constraint loop. Name the specific thing that made this a problem rather than a task.
</div>

<!--
SLIDE 5 — 1.5 minutes. The loop diagram says "this wasn't laziness, it was a trap" better than prose.
Mermaid syntax lives in a fenced block — edit the labels, keep the shape.
-->

---

# What I owned

<div class="grid grid-cols-2 gap-10 pt-6 text-left">
<div>

### Mine
- <span class="opacity-50">Decision A</span>
- <span class="opacity-50">Decision B</span>
- <span class="opacity-50">People / hiring / mentoring</span>
- <span class="opacity-50">The number that moved</span>

</div>
<div>

### Not mine
- <span class="opacity-50">Adjacent team's system</span>
- <span class="opacity-50">Budget / headcount approval</span>
- <span class="opacity-50">Policy or legal constraint</span>

</div>
</div>

<!--
SLIDE 6 — 2 minutes. The "not mine" column is the credibility slide.
Panel is testing whether you overclaim. Naming the boundary precisely is the answer.
-->

---

# Starting state

<div class="text-left pt-6">

- <span class="opacity-50">What existed when I picked it up</span>
- <span class="opacity-50">What was already in flight</span>
- <span class="opacity-50">The first thing I did in week one</span>

</div>

<!--
SLIDE 7 — 1 minute.
-->

---

# Constraint map

```mermaid
flowchart TB
  subgraph Fixed["Fixed"]
    F1["Deadline"]
    F2["Compliance"]
  end
  subgraph Movable["Movable"]
    M1["Scope"]
    M2["Headcount"]
  end
  Fixed --> D["Design space"]
  Movable --> D
```

<div class="pt-4 text-left text-sm opacity-70">
The point of this slide: what you could trade and what you could not. Set up the decisions that follow.
</div>

<!--
SLIDE 8 — 1.5 minutes.
-->

---

# Decision 1 — <span class="opacity-50">the fork</span>

<div class="grid grid-cols-2 gap-8 pt-4 text-left">
<div class="border-l-4 border-green-500 pl-4">

### Chose
<span class="opacity-50">Option, in one line</span>

- <span class="opacity-50">Why it won</span>
- <span class="opacity-50">What it cost</span>

</div>
<div class="border-l-4 border-gray-400 pl-4 opacity-70">

### Rejected
<span class="opacity-50">Option, in one line</span>

- <span class="opacity-50">Why it lost</span>
- <span class="opacity-50">What it would have bought</span>

</div>
</div>

<!--
SLIDE 9 — 2 minutes. Repeat this shape for slides 10 and 11.
Rule: every "chose" slide names what it cost. A decision with no cost isn't a decision.
-->

---

# Decision 2 — <span class="opacity-50">the fork</span>

<div class="grid grid-cols-2 gap-8 pt-4 text-left">
<div class="border-l-4 border-green-500 pl-4">

### Chose
<span class="opacity-50">Option, in one line</span>

- <span class="opacity-50">Why it won</span>
- <span class="opacity-50">What it cost</span>

</div>
<div class="border-l-4 border-gray-400 pl-4 opacity-70">

### Rejected
<span class="opacity-50">Option, in one line</span>

- <span class="opacity-50">Why it lost</span>

</div>
</div>

<!--
SLIDE 10 — 2 minutes.
-->

---

# Decision 3 — <span class="opacity-50">the fork</span>

<div class="grid grid-cols-2 gap-8 pt-4 text-left">
<div class="border-l-4 border-green-500 pl-4">

### Chose
<span class="opacity-50">Option, in one line</span>

- <span class="opacity-50">Why it won</span>
- <span class="opacity-50">What it cost</span>

</div>
<div class="border-l-4 border-gray-400 pl-4 opacity-70">

### Rejected
<span class="opacity-50">Option, in one line</span>

- <span class="opacity-50">Why it lost</span>

</div>
</div>

<!--
SLIDE 11 — 2 minutes.
If a decision was reversed later, say so on that slide, not in the Q&A.
-->

---

# Tradeoff ledger

| Dimension | Bought | Paid |
| --- | --- | --- |
| <span class="opacity-50">Speed</span> | <span class="opacity-50">what shipped sooner</span> | <span class="opacity-50">what got deferred</span> |
| <span class="opacity-50">Simplicity</span> | <span class="opacity-50">what got easier</span> | <span class="opacity-50">what capability was lost</span> |
| <span class="opacity-50">Reversibility</span> | <span class="opacity-50">what stays cheap to undo</span> | <span class="opacity-50">what got locked in</span> |

<!--
SLIDE 12 — 1.5 minutes. The single best slide for a technical panel.
Everything on it should be a sentence you can defend under questioning.
-->

---

# How it actually went

```mermaid
gantt
  dateFormat YYYY-MM-DD
  axisFormat %b
  section Discovery
  Problem framing      :a1, 2025-01-06, 21d
  section Build
  Spike                :a2, after a1, 14d
  Production path      :a3, after a2, 45d
  section Landing
  Rollout              :a4, after a3, 21d
```

<!--
SLIDE 13 — 1.5 minutes. Plan vs. reality, honestly. The gap is the interesting part; annotate it aloud.
-->

---

# The moment it nearly failed

<div class="text-left pt-8 text-xl">

<span class="opacity-50">The problem that surfaced, the day you found out, and what it looked like from inside.</span>

</div>

<div class="pt-10 text-left">

- <span class="opacity-50">Signal you ignored or missed</span>
- <span class="opacity-50">How it surfaced</span>
- <span class="opacity-50">What you changed — in the design, or in how you worked</span>

</div>

<!--
SLIDE 14 — 2 minutes. Do not skip this slide. Panels read "nothing went wrong" as either inexperience
or evasion. One real failure, narrated plainly, is worth more than any success metric.
-->

---

# Outcome

<div class="grid grid-cols-3 gap-6 pt-10 text-center">

<div>
<div class="text-5xl font-bold opacity-40">—</div>
<div class="pt-3 text-sm opacity-60">primary metric</div>
</div>

<div>
<div class="text-5xl font-bold opacity-40">—</div>
<div class="pt-3 text-sm opacity-60">secondary metric</div>
</div>

<div>
<div class="text-5xl font-bold opacity-40">—</div>
<div class="pt-3 text-sm opacity-60">time or cost saved</div>
</div>

</div>

<div class="pt-12 text-left text-sm opacity-70">
Baseline → result, with the measurement window. A number without a baseline is decoration.
</div>

<!--
SLIDE 15 — 2 minutes. This is where an interviewer will push hardest. Know the denominator.
-->

---

# What survived me

<div class="text-left pt-6">

- <span class="opacity-50">System still running, and what it does</span>
- <span class="opacity-50">Who picked it up, and what they inherited</span>
- <span class="opacity-50">What I'd build differently knowing what I know now</span>

</div>

<!--
SLIDE 16 — 1.5 minutes. "Survived me" is a stronger claim than "shipped."
-->

---

# What this taught me

<div class="text-left pt-8 text-lg">

1. <span class="opacity-50">A belief you hold about engineering that this project changed.</span>
2. <span class="opacity-50">Something about how you work with people, not systems.</span>
3. <span class="opacity-50">What you now look for before taking on a project.</span>

</div>

<!--
SLIDE 17 — 1.5 minutes. Bridge to "why this is relevant to you" without saying that phrase.
-->

---

# Why it matters here

<div class="text-left pt-8 text-xl">

<span class="opacity-50">Two or three sentences connecting the project to the problems this team actually has — the domains, the constraints, the kind of systems they build.</span>

</div>

<!--
SLIDE 18 — 1 minute. Do not stretch. If the connection is thin, cut this slide and let the panel draw it.
-->

---

# Questions

<div class="pt-16 opacity-70">
<span class="opacity-50">Appendix below: extra detail you'd only show if asked.</span>
</div>

<!--
SLIDE 19 — hand off. Then stop talking.
-->

---

# Appendix — architecture

```mermaid
flowchart LR
  U["Interface"] --> S["Service"]
  S --> Q["Queue"]
  Q --> W["Worker"]
  W --> DB[("Store")]
```

<!--
SLIDE 20 — only if asked. Jump here with the slide number, answer, jump back.
Keep the appendix small: two or three slides of real detail you already know cold.
-->
