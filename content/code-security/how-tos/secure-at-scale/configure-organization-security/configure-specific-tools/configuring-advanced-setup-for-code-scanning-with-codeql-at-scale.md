---
title: Configuring advanced setup for code scanning with CodeQL at scale
shortTitle: CodeQL advanced setup at scale
intro: Establish a highly customizable {% data variables.product.prodname_code_scanning %} setup at scale with a script.
permissions: '{% data reusables.permissions.security-org-enable %}'
product: '{% data reusables.gated-features.code-scanning %}'
redirect_from:
  - /code-security/code-scanning/automatically-scanning-your-code-for-vulnerabilities-and-errors/configuring-advanced-setup-for-code-scanning-with-codeql-at-scale
  - /code-security/code-scanning/creating-an-advanced-setup-for-code-scanning/configuring-advanced-setup-for-code-scanning-with-codeql-at-scale
versions:
  fpt: '*'
  ghec: '*'
  ghes: '*'
topics:
  - Code Security
  - Code scanning
allowTitleToDifferFromFilename: true
contentType: how-tos
---

## Using a script to enable advanced setup

For repositories that are not eligible for default setup, you can use a bulk configuration script to enable advanced setup across multiple repositories.

> [!NOTE] To successfully execute the script, {% data variables.product.prodname_actions %} must be enabled for the {% ifversion fpt %}organization{% elsif ghec %}organization or enterprise{% elsif ghes %}instance{% endif %}.

1. Identify a group of repositories that can be analyzed using the same {% data variables.product.prodname_code_scanning %} configuration. For example, all repositories that build Java artifacts using the production environment.
1. Create and test a {% data variables.product.prodname_actions %} workflow to call the {% data variables.product.prodname_codeql %} action with the appropriate configuration. For more information, see [AUTOTITLE](/code-security/code-scanning/automatically-scanning-your-code-for-vulnerabilities-and-errors/configuring-advanced-setup-for-code-scanning#configuring-advanced-setup-for-code-scanning-with-codeql).
1. Use one of the example scripts or create a custom script to add the workflow to each repository in the group.
   * GitHub CLI extension: [`advanced-security/gh-add-files`](https://github.com/advanced-security/gh-add-files)
   * Python example: [`Malwarebytes/ghas-cli`](https://github.com/Malwarebytes/ghas-cli) repository
   * NodeJS example: [`nickliffen/ghas-enablement`](https://github.com/NickLiffen/ghas-enablement) repository
   * PowerShell example: [`jhutchings1/Create-ActionsPRs`](https://github.com/jhutchings1/Create-ActionsPRs) repository

## Next steps

{% data reusables.code-scanning.beta-model-packs %}

If your codebase depends on a library or framework that is not recognized by the standard queries in {% data variables.product.prodname_codeql %}, you can extend the {% data variables.product.prodname_codeql %} coverage in your bulk configuration script by specifying published {% data variables.product.prodname_codeql %} model packs. For more information, see [AUTOTITLE](/code-security/code-scanning/creating-an-advanced-setup-for-code-scanning/customizing-your-advanced-setup-for-code-scanning#extending-codeql-coverage-with-codeql-model-packs).
