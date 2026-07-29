# CLAUDE.md

> Operating DNA (canonical lives in sampu-codex; synced here, do not hand-edit):
@SAMPU_DNA.md

> Founder & product delivery capability (canonical lives in sampu-codex; synced here, do not hand-edit):
@founder-product-delivery-capability.md

> Design doctrine (canonical lives in sampu-codex; synced here, do not hand-edit):
@design-doctrine.md

> The Doctrine — the full operating philosophy, loaded when a decision is hard:
> `.claude/rules/doctrine.md`

## Engineering Standards

> Concrete feedback loop for this repo. The universal method (agentic engineering — smart-zone hygiene, independent issues, TDD, deep modules) lives in the parent Sampu Dynamics constitution. Run these before calling any change done (Gate 1).

- **Stack:** Next.js (App Router) + TypeScript
- **Run (dev):** `npm run dev`
- **Typecheck:** `npm run typecheck` (= `tsc --noEmit`)
- **Test:** _none configured — add one (Gate 1)_
- **Lint / format:** `npm run lint`
- **Build:** `npm run build`  (prod start: `npm run start`)
- **Never:** secrets in code/commits; force-push to `main`; "done" on a red check or an un-run feature.


## Coding workflow — the Sampu spine

All work in this repo follows the Sampu coding workflow (canon: `standards/coding-workflow.md` in [sampu-codex](https://github.com/Sandz472/sampu-codex); adopted 2026-07-29). The loop: grill → spec → tickets → `groom-ticket` at pickup (six-field mini-knowledge-graph gate, never bulk-labeled) → one fresh session per ticket with `Implement issue #N` as the entire prompt → finish line per this file's Engineering Standards → founder merges and verifies the issue closed → write back what was learned. Work larger than one agent session goes through `wayfinder`; hard bugs through `diagnosing-bugs`; business logic, money, and data integrity through TDD. Tickets point at code and canon — they never copy them.
