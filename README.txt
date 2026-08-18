AKHADA V49 – FINAL REPAIR LOADER

Upload index.html from this folder to the root of the existing AKHADA-GYM-DEMO
GitHub Pages repository and replace the current index.html.

This replacement keeps the existing application by loading the last working
repository version from a fixed Git commit, then repairs the broken V46–V48
JavaScript block and applies the final UI fixes.

Included fixes:
1. Raw JavaScript/code no longer appears on the page.
2. Diet Plan: Save Weekly Diet persists the current diet data, closes the
   popup, and shows a small “✓ Saved” blink.
3. Add Member gets a reliable fallback click handler.
4. Owner/ Admin gets a Member Permissions panel under Staff & Permissions.
5. Member permissions are stored separately in localStorage.
6. Existing staff, batch, notification, photo, salary and progress fixes from
   the previous build are preserved.

Important:
- This index intentionally loads the previous application from a fixed public
  GitHub commit, because the current repository write connector is unavailable.
- Keep manifest.webmanifest, icon files and other existing files unchanged.
- After upload, open the GitHub Pages site in a private/incognito tab once to
  avoid an old cached page/service-worker copy.
