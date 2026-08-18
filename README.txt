AKHADA GYM FIXED BUILD

Replace the existing index.html in the GitHub Pages repository with this index.html.
Keep the existing manifest.webmanifest, icon-192.png, icon-512.png and service-worker.js files.

Fixes included:
1. Removes the JavaScript/source-code text leak by loading the previous AKHADA build as HTML instead of nesting it inside a script tag.
2. Diet Save closes/clears the diet form after saving.
3. Diet/plan PDF action is repaired so the generated print/PDF page includes saved food information when present in localStorage.
4. Add Member button has a fallback opener.
5. Main app uses the full available viewport width and removes the right-side layout gap.
6. Overdue Members popup gets a PDF button that opens a print-ready overdue-members report.
