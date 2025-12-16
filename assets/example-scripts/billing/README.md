# Actions Cost Summary Script

The script can be found here: https://gist.github.com/docs-bot/98cb03ec43b716b1f8e03bcc091d069c.

This script processes GitHub Actions billing data to generate cost summaries by SKU (Stock Keeping Unit).

This script is referenced in the Billing tutorial: content/billing/tutorials/estimate-actions-costs.md

## Purpose

The script analyzes [summarized usage reports](https://docs.github.com/en/billing/reference/billing-reports#summarized-usage-report) from GitHub billing and creates CSV summaries that help you understand:

- Which Actions SKUs are being used
- Total costs per SKU
- Free minutes usage per SKU

Optionally, the script can generate per-organization breakdowns to analyze usage across different organizations.

## Requirements

- Python 3.x (uses only standard library modules)

## Use the script

### Basic usage

Generate a single SKU summary file:

```bash
python3 summarize_actions_costs.py input_file.csv
```

This creates `input_file_sku.csv` containing:
- Each distinct SKU that starts with `actions_`
- Sum of all costs (`net_amount`) for each SKU
- Sum of free minutes used (where `net_amount` is 0) for each SKU

### Per-organization summaries

Generate both the SKU summary and individual files for each organization:

```bash
python3 summarize_actions_costs.py input_file.csv --by-org
```

This creates:
- `input_file_sku.csv` - Overall SKU summary across all organizations
- `input_file.organization_name.csv` - Individual summary for each organization

Each organization file contains the same SKU-level breakdown (costs and free minutes) but filtered to that specific organization's usage.

## Output format

All output CSV files have the following format:

```csv
sku,total_net_amount,free_minutes_quantity
actions_linux,10800.30,248594.00
actions_macos,24424.38,10294.00
...
```

- **sku**: The SKU identifier (only those starting with `actions_`)
- **total_net_amount**: Sum of all costs for this SKU
- **free_minutes_quantity**: Sum of quantity used when no cost was incurred (free tier usage)

## Notes

- The script only processes rows where the `product` is `actions`
- Only SKUs starting with `actions_` are included in the output
- Organization names are sanitized for safe filenames (removes special characters, path separators, and limits length)
- Empty organization names are saved as `unknown`
- The script validates required CSV columns before processing
- Malformed rows are skipped with a warning message
- CSV injection protection is applied to output fields
- Maximum of 1000 organizations when using `--by-org` to prevent resource exhaustion
