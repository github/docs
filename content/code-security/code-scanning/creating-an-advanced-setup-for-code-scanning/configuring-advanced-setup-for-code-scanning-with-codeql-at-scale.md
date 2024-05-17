---
title: Configuring {% ifversion code-scanning-without-workflow %}advanced setup for {% endif %}code scanning with CodeQL at scale
shortTitle: CodeQL {% ifversion code-scanning-without-workflow %}advanced setup{% else %}code scanning{% endif %} at scale
intro: 'You can use a script to configure {% ifversion code-scanning-without-workflow %}advanced setup for {% endif %}{% data variables.product.prodname_code_scanning %} for a specific group of repositories in your organization.'
product: '{% data reusables.gated-features.code-scanning %}'
redirect_from:
  - /code-security/code-scanning/automatically-scanning-your-code-for-vulnerabilities-and-errors/configuring-advanced-setup-for-code-scanning-with-codeql-at-scale
versions:
  fpt: '*'
  ghec: '*'
  ghes: '*'
type: how_to
topics:
  - Advanced Security
  - Code scanning
allowTitleToDifferFromFilename: true
---

## About enabling {% ifversion code-scanning-without-workflow %}advanced setup for {% endif %}{% data variables.product.prodname_code_scanning %} with {% data variables.product.prodname_codeql %} at scale

{% ifversion code-scanning-without-workflow %}If you need to configure a highly customizable {% data variables.product.prodname_code_scanning %} setup for many repositories in your organization, or if repositories in your organization are ineligible for default setup, you can enable {% data variables.product.prodname_code_scanning %} at scale with advanced setup.{% endif %}

To enable {% ifversion code-scanning-without-workflow %}advanced setup{% else %}{% data variables.product.prodname_code_scanning %}{% endif %} across multiple repositories, you can write a bulk configuration script. To successfully execute the script, {% data variables.product.prodname_actions %} must be enabled for the {% ifversion fpt %}organization{% elsif ghec %}organization or enterprise{% elsif ghes %}site{% endif %}.

{% ifversion code-scanning-without-workflow %}
Alternatively, if you do not need granular control over the {% data variables.product.prodname_code_scanning %} configuration for many repositories in your organization, you can quickly and easily configure {% data variables.product.prodname_code_scanning %} at scale with default setup. For more information, see "[AUTOTITLE](/code-security/code-scanning/enabling-code-scanning/configuring-default-setup-for-code-scanning-at-scale)."
{% endif %}

## Using a script to enable {% ifversion code-scanning-without-workflow %}advanced setup{% else %}{% data variables.product.prodname_code_scanning %}{% endif %}

{% ifversion code-scanning-without-workflow %}For repositories that are not eligible for default setup, you can use a bulk configuration script to enable advanced setup across multiple repositories.{% endif %}

1. Identify a group of repositories that can be analyzed using the same {% data variables.product.prodname_code_scanning %} configuration. For example, all repositories that build Java artifacts using the production environment.
1. Create and test a {% data variables.product.prodname_actions %} workflow to call the {% data variables.product.prodname_codeql %} action with the appropriate configuration. For more information, see {% ifversion code-scanning-without-workflow %}"[AUTOTITLE](/code-security/code-scanning/automatically-scanning-your-code-for-vulnerabilities-and-errors/configuring-advanced-setup-for-code-scanning#configuring-advanced-setup-for-code-scanning-with-codeql)."{% else %}"[AUTOTITLE](/code-security/code-scanning/automatically-scanning-your-code-for-vulnerabilities-and-errors/configuring-advanced-setup-for-code-scanning#configuring-code-scanning-using-the-codeql-action)."{% endif %}
1. Use one of the example scripts or create a custom script to add the workflow to each repository in the group.
   - PowerShell example: [`jhutchings1/Create-ActionsPRs`](https://github.com/jhutchings1/Create-ActionsPRs) repository
   - NodeJS example: [`nickliffen/ghas-enablement`](https://github.com/NickLiffen/ghas-enablement) repository
   - Python example: [`Malwarebytes/ghas-cli`](https://github.com/Malwarebytes/ghas-cli) repository

{% ifversion codeql-model-packs-org %}

### Extending {% data variables.product.prodname_codeql %} coverage with model packs

{% data reusables.code-scanning.beta-model-packs %}

If your codebase depends on a library or framework that is not recognized by the standard queries in {% data variables.product.prodname_codeql %}, you can extend the {% data variables.product.prodname_codeql %} coverage in your bulk configuration script by specifying published {% data variables.product.prodname_codeql %} model packs. For more information, see "[AUTOTITLE](/code-security/code-scanning/creating-an-advanced-setup-for-code-scanning/customizing-your-advanced-setup-for-code-scanning#extending-codeql-coverage-with-codeql-model-packs)."

Alternatively, if you do not need granular control over the {% data variables.product.prodname_code_scanning %} configuration for many repositories in your organization, you can quickly and easily configure model packs with {% data variables.product.prodname_code_scanning %} at scale with default setup. For more information, see "[AUTOTITLE](/code-security/code-scanning/managing-your-code-scanning-configuration/editing-your-configuration-of-default-setup#extending-codeql-coverage-with-codeql-model-packs-in-default-setup)."

{% endif %}
