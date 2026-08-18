AKHADA FIXED BUILD
===================

Upload/replace:
- index.html
- service-worker.js

This build keeps the existing AKHADA application and adds a compatibility layer for:
1. Weekly diet save -> editor is cleared after save.
2. Diet PDF -> includes saved food names, quantities and calories where available.
3. Workout PDF -> routed through the same PDF handler.
4. Add Member -> directly calls openModal('member').
5. Member Gym IDs -> missing IDs are generated as AKH-M-0001 style IDs and persisted.
6. Overdue Members -> Download PDF button is added once to the popup.
7. Mobile layout -> full-width page with no desktop side margin.
8. Font cleanup -> removes accidental/extra font styling.

IMPORTANT:
The app stores data in browser localStorage. Existing member/diet data remains in the browser.
After replacing files on GitHub Pages, reload the site once with the old page closed.
If an iPhone/iPad home-screen PWA still shows an older version, remove the old home-screen app and add it again after the new GitHub Pages version is live.
