# Motion Design Skill

## Purpose
Use motion to make interfaces easier to understand, more responsive, and more memorable.

## Motion must serve at least one role
- orientation
- state change
- causality
- hierarchy
- continuity
- progress
- feedback
- delight

## Review framework
For every significant animation define:
- trigger
- start state
- end state
- duration
- easing intent
- interruption behavior
- reduced-motion behavior
- performance considerations

## Rules
- Prefer short and responsive motion for frequent interactions.
- Reserve expressive motion for high-value moments.
- Preserve spatial continuity when navigating between related objects.
- Never delay a primary task solely to show animation.
- Avoid animating many unrelated properties simultaneously.
- Respect `prefers-reduced-motion` in implementation.

## Inspiration sources
Study interaction experiments and implementation techniques from modern frontend ecosystems such as CodePen and component libraries, but validate performance and accessibility before production use.

## Output
When specifying motion provide implementation-ready descriptions and, where useful, suggested CSS/JS animation primitives or library categories without forcing a dependency unnecessarily.
