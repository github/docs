---
title: 'Accessing logs'
shortTitle: 'Access logs'
versions:
  fpt: '*'
  ghec: '*'
  ghes: '*'
topics:
  - Advanced Security
  - Code scanning
  - CodeQL
type: reference
intro: 'If you need to troubleshoot problems with {% data variables.product.prodname_codeql %} for {% data variables.product.prodname_vscode %}, there are several logs you can access.'
allowTitleToDifferFromFilename: true
---

## About logs

Progress and error messages are displayed as notifications in the bottom right corner of the {% data variables.product.prodname_vscode %} workspace. These link to more detailed logs and error messages in the "Output" window.

You can access the following logs:

* {% data variables.product.prodname_codeql %} Extension

* {% data variables.product.prodname_codeql %} Language Server

* {% data variables.product.prodname_codeql %} Query Server

* {% data variables.product.prodname_codeql %} Tests

{% note %}

**Note:** The {% data variables.product.prodname_codeql %} Language Server log contains more advanced debug logs for  {% data variables.product.prodname_codeql %} language maintainers. You should only need these to provide details in a bug report.

{% endnote %}

## Accessing logs

1. In {% data variables.product.prodname_vscode %}, open the "Output" window.

1. Use the dropdown to select the log view you need. For example, "{% data variables.product.prodname_codeql %} Extension Log".

    ![Screenshot of the "Output" window in VS Code (as highlighted in dark orange). The dropdown is also highlighted, with "CodeQL Extension Log" selected.](/assets/images/help/security/codeql-for-vs-code-access-logs.png)
  