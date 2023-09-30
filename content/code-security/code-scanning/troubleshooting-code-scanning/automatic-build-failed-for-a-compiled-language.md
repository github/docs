---
title: 'Automatic build failed for a compiled language'
shortTitle: 'Automatic build failed'
allowTitleToDifferFromFilename: true
intro: 'If automatic build fails, you can configure {% data variables.product.prodname_code_scanning %} to use specific build steps for compiled languages.'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
---

{% data reusables.code-scanning.beta %}
{% data reusables.code-scanning.codeql-action-version-ghes %}

If an automatic build of code for a compiled language within your project fails, you can try removing the `autobuild` step from your {% data variables.product.prodname_code_scanning %} workflow and adding specific build steps. If you're not already using advanced setup, you'll need to enable it first to create a workflow you can edit. For more information about advanced setup, see "[AUTOTITLE](/code-security/code-scanning/creating-an-advanced-setup-for-code-scanning)." For more information about specifically replacing the `autobuild` step, see "[AUTOTITLE](/code-security/code-scanning/creating-an-advanced-setup-for-code-scanning/codeql-code-scanning-for-compiled-languages#adding-build-steps-for-a-compiled-language)."
