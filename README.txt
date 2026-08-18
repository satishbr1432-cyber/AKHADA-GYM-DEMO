AKHADA V41 - MULTI-RECORD PERSISTENCE FIX
Purpose:
- Prevent new Members, Trainers, Staff, Inquiries, Payments, Expenses, Check-ins etc. from overwriting the previous record.
- Known collection keys now append new object records and update an existing record only when a stable ID matches.
- Existing array writes are preserved.
- Includes window.akhadaV41RunRecordCheck() for testing record counts.
- Trial remains localStorage-based; production database/auth will replace local persistence later.
Testing:
1. Add 3+ records in each module.
2. Reload.
3. Verify all records remain.
4. Edit one record and verify only that record changes.
5. Export and compare with Excel.
