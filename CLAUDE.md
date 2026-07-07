# CLAUDE.md

> Operating DNA (canonical lives in sampu-codex; synced here, do not hand-edit):
@SAMPU_DNA.md

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
