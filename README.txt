AKHADA V60 FINAL FIX BUILD
===========================

Replace these files in the GitHub Pages repository:
- index.html
- service-worker.js

This build keeps the existing stable AKHADA application as the base and adds
the requested final fixes:

1. Diet editor clears after Save Weekly Diet.
2. Saved diet keeps the weekly food list.
3. Member Profiles & Plans shows the complete diet food list.
4. Diet/Workout downloads use the browser print sheet so iPhone can save as PDF.
5. Add Member opens the member form.
6. Missing Gym IDs are generated as AKH-M-0001, AKH-M-0002, etc. and persisted.
7. Overdue Members includes Download PDF / Print.
8. Mobile layout uses the full available width.
9. Service-worker cache version is bumped to v60-final to prevent the previous
   cached build from returning.

IMPORTANT:
The app stores its records in browser localStorage. Existing records are not
deleted by this build.
