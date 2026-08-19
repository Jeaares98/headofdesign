# End-to-End Design Workflow v0.2

## Objective
Turn a vague product/design request into an implementation-ready design outcome without requiring step-by-step supervision.

## Flow
1. Brief framing
2. Design intelligence research
3. Product/UX hypothesis
4. Visual direction
5. Figma execution when a target file is available
6. Design critique
7. Developer handoff
8. Visual QA
9. Learning capture

## 1. Brief framing
Infer what can safely be inferred. Do not block on missing detail unless a decision is irreversible, expensive, or materially changes the product direction.

Capture:
- user / audience
- job to be done
- business goal
- primary action
- emotional target
- constraints
- platform
- success signal

## 2. Design intelligence research
Use current sources when the task benefits from freshness. Research patterns, not aesthetics alone.

Output a small mechanism set:
- pattern
- source
- user need
- behavioral mechanism
- emotional effect
- adaptation opportunity
- risk

## 3. Product/UX hypothesis
Before visual work, define:
- core user flow
- information hierarchy
- friction to remove
- trust requirements
- motivation/retention opportunities
- edge cases

## 4. Visual direction
Choose a coherent direction instead of mixing trends.

Specify:
- composition
- typography role
- spacing rhythm
- color role
- imagery/art direction
- component personality
- motion language

## 5. Figma execution
If a valid editable target is available, move from recommendations into editable design.

Rules:
- inspect existing structure and system first
- preserve useful tokens/components
- use auto layout for structural relationships
- make states explicit
- create reusable patterns where repetition exists
- return created/mutated node IDs during tool execution

## 6. Design critique gate
Run the work through `skills/ui-ux-critique`.

Critical categories must score >= 8/10:
- clarity
- hierarchy
- usability
- brand fit
- technical feasibility

If any critical score is below 8, revise before handoff.

## 7. Developer handoff
Produce implementation-ready specifications. See `handoff/DEVELOPER_HANDOFF.md`.

## 8. Visual QA
After implementation, compare intended design with rendered result.

Check:
- structure
- spacing
- typography
- colors
- states
- responsiveness
- motion
- accessibility

Fix high-impact gaps before polishing minor differences.

## 9. Learning capture
When a new repeatable insight is discovered, store it using `knowledge/design-intelligence/MECHANISM_TEMPLATE.md`.

Do not store generic observations. Store mechanisms that can guide future decisions.
