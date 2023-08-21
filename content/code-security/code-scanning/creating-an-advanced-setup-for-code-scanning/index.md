---
title: Creating {% ifversion code-scanning-without-workflow %}an advanced setup for {% else %}a workflow {% endif %}for {% data variables.product.prodname_code_scanning %}
shortTitle: '{% ifversion code-scanning-without-workflow %}Create advanced setup{% else %}Create workflow {% data variables.product.prodname_code_scanning %}{% endif %}'
intro: '{% ifversion code-scanning-without-workflow %}For more granular control over your {% data variables.product.prodname_code_scanning %} configuration, you can secure your code with advanced setup for {% data variables.product.prodname_code_scanning %}.{% else %}Create and customize a {% data variables.product.prodname_actions %} workflow to control the analysis of your codebase.{% endif %}'
product: '{% data reusables.gated-features.code-scanning %}'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Advanced Security
  - Code scanning
children:
  - /configuring-advanced-setup-for-code-scanning
  - /customizing-your-advanced-setup-for-code-scanning
  - /codeql-code-scanning-for-compiled-languages
  - /configuring-advanced-setup-for-code-scanning-with-codeql-at-scale
  - /recommended-hardware-resources-for-running-codeql
  - /running-codeql-code-scanning-in-a-container
---
