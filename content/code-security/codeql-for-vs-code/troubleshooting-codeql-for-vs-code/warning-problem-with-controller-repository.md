---
title: 'Problem with controller repository'
versions:
  feature: codeql-vs-code-mrva
topics:
  - Advanced Security
  - Code scanning
  - CodeQL
type: reference
intro: 'If you see this warning, update your controller repository to a private repository.'
allowTitleToDifferFromFilename: true
redirect_from:
  - /code-security/codeql-for-vs-code/troubleshooting-variant-analysis
---

## About this warning

```text
Publicly visible controller repository can't be used to analyze private repositories. NUMBER private repositories were not analyzed.
```

If you run variant analysis on a custom list of repositories, you may receive this warning as a banner in {% data variables.product.prodname_vscode %}, where NUMBER is the number of private repositories that have not been analyzed.

## Confirming the cause of the problem

When you run variant analysis, you'll see any errors and warnings displayed in the "Variant Analysis Results" view.

## Fixing the problem

To analyze private repositories, you should edit your settings to update your controller repository to a private repository. For information on how to edit the controller repository, see "[AUTOTITLE](/code-security/codeql-for-vs-code/using-the-advanced-functionality-of-the-codeql-for-vs-code-extension/customizing-settings#configuring-settings-for-variant-analysis)."
