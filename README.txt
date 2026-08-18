AKHADA V33 – Mobile UI / Trial Fix

This build keeps the existing AKHADA trial data and screens, and fixes the mobile shell:
- Bottom navigation is exactly: Home, Members, Check-in, Billing, More.
- Duplicate More/Reports mobile buttons are removed.
- Owner, Manager and Trainer retain Dashboard/Home access.
- More opens the proper More page.
- Theme launcher is removed from the page edge.
- Theme remains available from More -> Settings -> Theme.
- Role selection remains a dropdown on the trial login screen.
- Service-worker cache version bumped to force the new build to refresh after deployment.

Trial data is stored locally in the browser/device using the existing app storage. No server account is required in trial mode.
