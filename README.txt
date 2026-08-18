AKHADA V48.3 – ALL-ROLE LOGIN RECOVERY

Login recovery now works for the currently selected role:
Owner / Manager / Trainer / Member.

The recovery button is intentionally simple:
Forgot Login ID / PIN?

Recovery resets only that role's local login ID and PIN to the trial defaults:
Owner: owner / 123456
Manager: manager / 123456
Trainer: trainer / 123456
Member: member / 123456

Recovery does NOT delete gym data such as members, payments, attendance,
staff, plans, measurements, expenses or other localStorage records.

Deploy the files in the repository root. If an older service worker is active,
reload the GitHub Pages site after deployment.
