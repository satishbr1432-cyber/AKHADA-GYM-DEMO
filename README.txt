AKHADA PWA V27 — Mobile Trial

1. Upload this folder to a static HTTPS host (Netlify, GitHub Pages, Cloudflare Pages, etc.).
2. Open the HTTPS site in Safari on iPhone.
3. Tap Share -> Add to Home Screen.
4. Open "AKHADA Gym" from the Home Screen. It will launch in standalone app mode.

Important:
- This PWA is a trial shell around the existing V27 HTML app.
- Current app data is browser/device localStorage data. It is not a cloud database.
- Clearing site data/browser storage can remove locally stored records.
- For multi-device/cloud data, a backend/database must be added later.


AKHADA V28 FINAL PATCHES
- GymCRM-inspired mobile interface retained.
- Safari navigation/service-worker fix retained; cache bumped to V28.
- Added single Day/Night Mode toggle with persistent preference.
- ID Type + ID Number is unique across Members, Staff and Trainers.
- Primary mobile number is unique across Members, Staff, Trainers and Inquiries.
- Member/Staff/Trainer/Inquiry forms remain isolated so profile/photo fields do not overwrite each other.


BLANK TEST BUILD
- Demo Member/Trainer/Staff/Inquiry/Payment/Expense local data is cleared on first load.
- Use this build for fresh mobile testing.
- Theme preference is preserved.
