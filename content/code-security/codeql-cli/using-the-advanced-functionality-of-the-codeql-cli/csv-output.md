---
title: CodeQL CLI CSV output
intro: 'You can output results from the {% data variables.product.prodname_codeql_cli %} in CSV format to share with other systems.'
product: '{% data reusables.gated-features.codeql %}'
allowTitleToDifferFromFilename: true
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
topics:
  - Advanced Security
  - Code scanning
  - CodeQL
---

## About CSV output

You can save analysis results from the {% data variables.product.prodname_codeql_cli %} in a number of different formats, including SARIF and CSV. We do generally recommend SARIF because it is a standard output for static analysis tools and easier to parse. You can also upload SARIF files to {% data variables.product.product_name %}. However, CSV format may be useful if you need to further process the analysis results using your own tools. For more information on selecting a file format for your analysis results, see "[AUTOTITLE](/code-security/codeql-cli/codeql-cli-manual/database-analyze)."

For more information about the SARIF format, see [AUTOTITLE](/code-security/codeql-cli/using-the-advanced-functionality-of-the-codeql-cli/sarif-output).

If you choose to generate results in CSV format, then each line in the output file corresponds to an alert. Each line is a comma-separated list with the following information.

**Property**|**Description**|**Example**
-----|-----|-----
Name | Name of the query that identified the result. | `Inefficient regular expression`
Description | Description of the query.| `A regular expression that requires exponential time to match certain inputs can be a performance bottleneck, and may be vulnerable to denial-of-service attacks.`
Severity | Severity of the query.| `error`
Message | Alert message.| `This part of the regular expression may cause exponential backtracking on strings containing many repetitions of '\\\\'.`
Path | Path of the file containing the alert. | `/vendor/codemirror/markdown.js`
Start line | Line of the file where the code that triggered the alert begins. | `617`
Start column | Column of the start line that marks the start of the alert code. Not included when equal to 1. | `32`
End line | Line of the file where the code that triggered the alert ends. Not included when the same value as the start line. | `64`
End column | Where available, the column of the end line that marks the end of the alert code. Otherwise the end line is repeated. | `617`
