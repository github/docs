---
title: 'Two CodeQL workflows'
allowTitleToDifferFromFilename: true
intro: 'If you see two workflows named "{% data variables.product.prodname_codeql %}", one workflow may be a pre-existing {% data variables.product.prodname_codeql %} workflow file which has been disabled by default setup.'
versions:
  feature: code-scanning-without-workflow
---

{% data reusables.code-scanning.beta %}
{% data reusables.code-scanning.codeql-action-version-ghes %}

Default setup overrides existing {% data variables.product.prodname_codeql %} setups by disabling any existing {% data variables.product.prodname_codeql %} workflows, and blocking any {% data variables.product.prodname_codeql %} analysis API uploads. This behavior stops you using {% data variables.product.prodname_actions %} minutes to run workflows for {% data variables.product.prodname_codeql %} advanced setup when only the results from default setup will be used. For more information about switching between advanced and default setups, see "[AUTOTITLE](/code-security/code-scanning/troubleshooting-code-scanning/results-are-different-than-expected)."

Optionally, if you are certain you no longer need the pre-existing workflow file, you can delete the file from your repository. For more information, see "[AUTOTITLE](/repositories/working-with-files/managing-files/deleting-files-in-a-repository)."

{% data reusables.code-scanning.troubleshooting-multiple-configurations %}
