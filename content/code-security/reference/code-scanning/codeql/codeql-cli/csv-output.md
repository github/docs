---
title: CodeQL CLI CSV output
intro: Understand CSV results from the {% data variables.product.prodname_codeql_cli %}.
product: '{% data reusables.gated-features.codeql %}'
allowTitleToDifferFromFilename: true
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
topics:
  - Code Security
  - Code scanning
  - CodeQL
redirect_from:
  - /code-security/codeql-cli/using-the-advanced-functionality-of-the-codeql-cli/csv-output
contentType: reference
---

When you save analysis results from the {% data variables.product.prodname_codeql_cli %} in CSV format, each line corresponds to an alert, containing a comma-separated list with the following information:

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
