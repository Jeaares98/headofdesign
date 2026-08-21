# Salto Campaign OS — Tool Architecture

## Surfaces
- Campaign Game: next move, chapter, level, quests and progress.
- Admin / BI: idea intake, activity tracking, platform connections and recommendations.
- Login: private production routes; begin with a single-admin magic link.

## Data flow
`Ideas + Activities + Platform APIs + Bookings → Normalized events → Metrics → Score → Story beat → Quests → Measurement loop`

Every metric keeps source (`api`, `manual`, `import`), external ID, timestamp and confidence. Manual corrections never overwrite raw data silently.

## Core entities
`users`, `campaigns`, `chapters`, `quests`, `ideas`, `activities`, `activity_platforms`, `metric_snapshots`, `conversions`, `story_decisions`, `recommendations`, `platform_connections`, `sync_runs`.

## Intelligence
1. Deterministic: baseline, engagement, conversion, effort score and WINNER / SIGNAL / WEAK / DEAD.
2. Narrative: selects the next story beat from evidence.
3. Generative: creates at most one useful quest per lane and explains why.
4. Human control: JEAAARES accepts, edits, postpones or rejects recommendations.

## Platforms
Core: Instagram, TikTok, YouTube Shorts and X. LinkedIn is selected for founder, employer, business or press angles. Bilibili is an optional China experiment requiring localized editing, subtitles, account/partner operations and a validated audience hypothesis.

Publishing and analytics are separate. Start with analytics ingestion and a publishing checklist. Add automatic publishing only where APIs, permissions and review workflows are reliable.

## Phases
1. Admin UI, manual tracking and deterministic scoring.
2. Postgres persistence and production authentication.
3. Social analytics connectors and bookings via tracked links.
4. Scheduled syncs, alerts, data-quality monitoring and audit trail.
5. AI recommendations grounded only in stored evidence.
