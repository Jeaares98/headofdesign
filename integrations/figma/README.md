# Figma Integration

## Purpose
Figma is the execution and inspection layer for the Head of Design agent.

Use it to:
- inspect existing screens and component systems
- review hierarchy, spacing, typography, color, interaction structure, and accessibility
- create or revise screens
- build reusable components and variables
- hand design intent to implementation with explicit states and tokens

## Operating rules
1. Inspect before writing when a file already exists.
2. Reuse existing components, variables, and styles before inventing new ones.
3. Prefer Auto Layout for structured containers.
4. Treat design tokens as product infrastructure, not decoration.
5. Preserve real content constraints and long/short states.
6. Validate desktop/mobile behavior when relevant.
7. Document component purpose and important interaction behavior.
8. Motion must communicate state, causality, hierarchy, progress, or delight.
9. Always consider reduced motion and accessibility.
10. After meaningful changes, run the Head of Design critique before treating work as final.

## Read workflow
1. Identify the target file and node/page.
2. Read page/node structure.
3. Inspect relevant variables, components, and libraries.
4. Capture visual evidence when useful.
5. Produce a design diagnosis before changing the canvas.

## Write workflow
1. Define the desired outcome.
2. Reuse design-system assets where possible.
3. Make incremental changes.
4. Verify each major step.
5. Check hierarchy, responsiveness, states, accessibility, and content resilience.
6. Score the result against `AGENTS.md`.

## Design-to-code workflow
When implementation follows design:
- preserve existing project conventions
- map Figma components to code components where possible
- translate variables/tokens instead of hardcoding values
- specify interaction and motion behavior explicitly
- verify the implemented UI visually against Figma

## Connection status
The ChatGPT/Figma connector is available for the owner account. Repository instructions must never contain personal access tokens, API keys, or private credentials.
