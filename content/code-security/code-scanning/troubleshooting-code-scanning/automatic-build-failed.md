---
title: Automatic build failed for a compiled language
shortTitle: Automatic build failed
allowTitleToDifferFromFilename: true
intro: 'If automatic build fails, you can configure {% data variables.product.prodname_code_scanning %} to use specific build steps for compiled languages.'
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
redirect_from:
  - /code-security/code-scanning/troubleshooting-code-scanning/automatic-build-failed-for-a-compiled-language
---

{% data reusables.code-scanning.codeql-action-version-ghes %}

If an automatic build of code for a compiled language within your project fails, you can try {% ifversion codeql-no-build %}changing to the `manual` build mode or {% endif %}removing the `autobuild` step from your {% data variables.product.prodname_code_scanning %} workflow and adding specific build steps. If you're not already using advanced setup, you'll need to enable it first to create a workflow you can edit.

## Further reading

* "[AUTOTITLE](/code-security/code-scanning/creating-an-advanced-setup-for-code-scanning)."{% ifversion codeql-no-build %}
* "[CodeQL build modes](/code-security/code-scanning/creating-an-advanced-setup-for-code-scanning/codeql-code-scanning-for-compiled-languages#codeql-build-modes)"{% elsif ghes %}
* "[Adding build steps for a compiled language](/code-security/code-scanning/creating-an-advanced-setup-for-code-scanning/codeql-code-scanning-for-compiled-languages#adding-build-steps-for-a-compiled-language)."{% endif %}
