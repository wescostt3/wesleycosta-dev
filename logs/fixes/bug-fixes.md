# Bug Fixes Log - AI Engineer Portfolio

Record of bugs encountered, investigated, and solved during development.

## [Fixed] - 2026-05-26
### Tech Stack animation loading
- **Issue**: Progress bars for skill percentages animated immediately on initial load, even if the section was below the viewport.
- **Resolution**: Bound the progress bar width transition to the Intersection Observer inside `app.js`. Now, the bars animate smoothly only when the Tech Stack section scroll-enters the viewport.

### Mobile menu close action
- **Issue**: The dropdown mobile nav menu remained open after selecting a page anchor link.
- **Resolution**: Added event listeners to close the mobile menu automatically upon clicking any section anchor link.
