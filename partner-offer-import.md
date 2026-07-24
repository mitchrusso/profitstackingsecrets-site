# Partner Offer Import

When the Google Form response sheet has approved rows:

1. Open the linked Google Sheet.
2. Choose `File > Download > Comma Separated Values (.csv)`.
3. Save the CSV locally.
4. Run:

```bash
node scripts/import-partner-offers.mjs /path/to/Profit-Stacking-Secrets-responses.csv
npm run build
```

The importer writes approved/submitted rows into `src/lib/submitted-offers.ts`.
Those offers automatically appear on `/offers`, their matching `/categories/[slug]` page, individual `/offers/[slug]` pages, and `sitemap.xml`.
