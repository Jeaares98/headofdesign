# Developer Handoff Standard

## Purpose
Translate design intent into implementation decisions with as little ambiguity as possible.

## Required handoff
For substantial UI work provide:

### Structure
- page/screen hierarchy
- sections
- component tree
- repeated patterns that should become reusable components

### Behavior
For each interactive component capture:
- default state
- hover state
- focus state
- pressed state
- loading state
- success state
- error state
- disabled state
- empty state where relevant

### Responsive behavior
Define what changes rather than only giving breakpoint screenshots:
- stacking
- reordering
- hiding/showing
- width constraints
- typography scaling
- navigation behavior
- touch adaptations

### Tokens
Prefer semantic tokens:
- surface/background
- text roles
- borders
- radius
- spacing
- typography
- motion duration/easing

Avoid unexplained one-off values.

### Motion
For meaningful animation specify:
- trigger
- property
- start/end state
- duration
- easing
- interruption behavior
- reduced-motion alternative

### Accessibility
Include:
- semantic role
- keyboard behavior
- focus visibility
- contrast concerns
- target size
- labels / accessible names
- reduced motion handling

## Handoff quality gate
A developer should be able to implement the experience without guessing the product logic.

If implementation requires guessing about state, hierarchy, responsiveness, or interaction behavior, the handoff is incomplete.
