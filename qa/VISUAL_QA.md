# Visual QA Gate

## Goal
Validate that the implemented product preserves design intent and works under real conditions.

## Priority order
1. Broken flows or interaction logic
2. Layout and hierarchy errors
3. Responsive failures
4. Accessibility failures
5. Typography and spacing differences
6. Decorative polish

## Review checklist

### Layout
- hierarchy matches intended reading order
- containers and alignment are consistent
- content does not overlap or clip
- long text and real data do not break the layout

### Typography
- correct type roles
- readable line lengths
- sensible wrapping
- weights communicate hierarchy

### Components and states
- all important states exist
- controls behave consistently
- loading/error/empty states are intentional

### Responsive
Test narrow, medium, and wide layouts.
Check touch targets and density, not only visual similarity.

### Motion
- animation communicates state or causality
- no unnecessary delay
- reduced-motion path exists when relevant

### Accessibility
- keyboard path works
- focus is visible
- content remains understandable without animation
- text/interface contrast is sufficient
- controls have understandable labels

## Severity
- P0: blocks core task or creates serious accessibility issue
- P1: materially harms comprehension or usability
- P2: noticeable design-system or polish gap
- P3: optional refinement

Fix P0/P1 before declaring the implementation ready.
