---
title: 'Extraction errors in the database'
intro: 'You can check whether or not extraction errors affect the health of the {% data variables.product.prodname_codeql %} database created.'
allowTitleToDifferFromFilename: true
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
---

{% data reusables.code-scanning.beta %}
{% data reusables.code-scanning.codeql-action-version-ghes %}

The {% data variables.product.prodname_codeql %} team constantly works on critical extraction errors to make sure that all source files can be scanned. However, the {% data variables.product.prodname_codeql %} extractors do occasionally generate errors during database creation. {% data variables.product.prodname_codeql %} provides information about extraction errors and warnings generated during database creation in a log file.
The extraction diagnostics information gives an indication of overall database health. Most extractor errors do not significantly impact the analysis. A small number of extractor errors is healthy and typically indicates a good state of analysis.

However, if you see extractor errors in the overwhelming majority of files that were compiled during database creation, you should look into the errors in more detail to try to understand why some source files weren't extracted properly.
