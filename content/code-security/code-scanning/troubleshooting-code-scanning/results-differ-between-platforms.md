---
title: 'Results differ between platforms'
intro: 'You may see different results depending on whether you run the {% data variables.code-scanning.codeql_workflow %} on Linux, macOS, or Windows.'
allowTitleToDifferFromFilename: true
product: '{% data reusables.gated-features.code-scanning %}'
versions:
  fpt: '*'
  ghec: '*'
---

{% data reusables.code-scanning.beta %}

If you are analyzing code written in Python, you may see different results depending on whether you run the {% data variables.code-scanning.codeql_workflow %} on Linux, macOS, or Windows.

On {% data variables.product.company_short %}-hosted runners that use Linux, the {% data variables.code-scanning.codeql_workflow %} tries to install and analyze Python dependencies, which could lead to more results. To disable the auto-install, add `setup-python-dependencies: false` to the "Initialize CodeQL" step of the workflow. For more information about configuring the analysis of Python dependencies, see "[AUTOTITLE](/code-security/code-scanning/automatically-scanning-your-code-for-vulnerabilities-and-errors/customizing-code-scanning)."
