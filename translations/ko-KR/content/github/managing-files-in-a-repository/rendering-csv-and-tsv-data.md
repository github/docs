---
title: Rendering CSV and TSV data
redirect_from:
  - /articles/rendering-csv-and-tsv-data
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
---

GitHub supports rendering tabular data in the form of *.csv* (comma-separated) and .*tsv* (tab-separated) files.

![Rendered CSV sample](/assets/images/help/repository/rendered_csv.png)

When viewed, any _.csv_ or _.tsv_ file committed to a {% data variables.product.product_name %} repository automatically renders as an interactive table, complete with headers and row numbering. By default, we'll always assume the first row is your header row.

You can link to a particular row by clicking the row number, or select multiple rows by holding down the shift key. Just copy the URL and send it to a friend.

### Searching data

If you want to find a certain value in your dataset, you can start typing in the search bar directly above the file. The rows will filter automatically:

![Searching for values](/assets/images/help/repository/searching_csvs.gif)

### Handling errors

Occasionally, you may discover that your CSV or TSV file isn't rendering. In those instances, an error box appears at the bottom of your raw text, suggesting what the error may be.

![CSV render error message](/assets/images/help/repository/csv_render_error.png)

Common errors include:

* Mismatched column counts. You must have the same number of separators in each row, even if the cell is blank
* Exceeding the file size. Our rendering only works for files up to 512KB. Anything bigger than that slows down the browser.
