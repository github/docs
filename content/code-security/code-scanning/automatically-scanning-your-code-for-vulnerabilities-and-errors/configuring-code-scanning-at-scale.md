---
title: Configuring code scanning at scale using CodeQL
shortTitle: Configure CodeQL at scale
intro: 'You can configure {% data variables.product.prodname_code_scanning %} for eligible repositories in your organization using default setup for {% data variables.product.prodname_codeql %} or use a script to configure advanced setup for a specific group of repositories.'
product: '{% data reusables.gated-features.code-scanning %}'
versions:
  feature: org-enable-code-scanning
type: how_to
topics:
  - Advanced Security
  - Code scanning
allowTitleToDifferFromFilename: true
---

## About configuring {% data variables.product.prodname_code_scanning %} in multiple repositories

There are two ways to configure {% data variables.product.prodname_code_scanning %} in multiple repositories at the same time. The best method to use depends on the analysis needs of the repositories.

1. The repositories are eligible for default setup for {% data variables.product.prodname_codeql %} and owned by an organization.
2. The group of repositories has similar configuration needs for {% data variables.product.prodname_codeql %} advanced setup.

In addition, {% data variables.product.prodname_actions %} must be enabled for the {% ifversion fpt %}organization{% elsif ghec or ghae %}organization or enterprise{% elsif ghes %}site{% endif %}.

<!-- Anchor to maintain the UI link to this heading -->
<a name="eligible-repositories-default-setup"></a>

## Eligible repositories for {% data variables.product.prodname_codeql %} default setup

{% data reusables.code-scanning.beta-org-enable-all %}

You can use the organization settings page for "Code security and analysis" to enable {% data variables.product.prodname_code_scanning %} for any repositories in the organization that are eligible for {% data variables.product.prodname_codeql %} default setup. 

### Eligibility criteria for organization-level enablement

A repository must meet all the following criteria to be eligible for default setup, otherwise you need to use advanced set up.

- {% data variables.product.prodname_code_scanning_caps %} is not already enabled.
- {% data variables.product.prodname_actions %} are enabled.
- Uses JavaScript/TypeScript, Python, or Ruby.
- Does not use any other languages supported by {% data variables.product.prodname_codeql %}, but may include other languages, such as R. For more information on {% data variables.product.prodname_codeql %}-supported languages, see "[AUTOTITLE](/code-security/code-scanning/automatically-scanning-your-code-for-vulnerabilities-and-errors/about-code-scanning-with-codeql#about-codeql)."
- {% ifversion fpt %}Publicly visible.
   {%- elsif ghec %}Publicly visible, or {% data variables.product.prodname_GH_advanced_security %} is enabled.
   {%- elsif ghes or ghae %}{% data variables.product.prodname_GH_advanced_security %} is enabled.{% endif %}

For more information about default setup, see "[AUTOTITLE](/code-security/code-scanning/automatically-scanning-your-code-for-vulnerabilities-and-errors/configuring-code-scanning-for-a-repository#configuring-code-scanning-automatically)." For information on editing security and analysis settings for an organization, see "[AUTOTITLE](/organizations/keeping-your-organization-secure/managing-security-settings-for-your-organization/managing-security-and-analysis-settings-for-your-organization)."

{% ifversion security-overview-org-risk-coverage %}

### Finding repositories that are eligible for default setup

The security coverage page, part of security overview, makes it easy to filter the repositories in your organization to show repositories that are eligible for default setup.

{%- ifversion ghec %}
- `code-scanning-default-setup:eligible is:public` shows repositories that have languages suitable for default setup and are eligible because they are visible to the public.
- `code-scanning-default-setup:eligible advanced-security:enabled` shows private or internal repositories that have languages suitable for default setup and are eligible because they have {% data variables.product.prodname_GH_advanced_security %} enabled.
- `code-scanning-default-setup:eligible is:private,internal advanced-security:not-enabled` shows private or internal repositories that have languages suitable for default setup but do not have {% data variables.product.prodname_GH_advanced_security %} enabled. Once you enable {% data variables.product.prodname_GH_advanced_security %} for these repositories, they can also be added to default setup.
{%- elsif ghes or ghae %}
- `code-scanning-default-setup:eligible advanced-security:enabled` shows which repositories can be added to default setup immediately.
- `code-scanning-default-setup:eligible advanced-security:not-enabled` shows which repositories have languages suitable for default setup but do not have {% data variables.product.prodname_GH_advanced_security %} enabled. Once you enable {% data variables.product.prodname_GH_advanced_security %} for these repositories, they can also be added to default setup.
{%- endif %}
- `code-scanning-default-setup:not-eligible` shows repositories that either have advanced setup configured already, or where the languages not are suitable for default setup.

For more information about the security coverage page, see "[AUTOTITLE](/code-security/security-overview/assessing-adoption-code-security)."

{% endif %}

## Using a script to configure advanced setup

For repositories that are not eligible for default setup, you can use a bulk configuration script to configure advanced setup across multiple repositories. 

1. Identify a group of repositories that can be analyzed using the same {% data variables.product.prodname_code_scanning %} configuration. For example, all repositories that build Java artifacts using the production environment.
2. Create and test a {% data variables.product.prodname_actions %} workflow to call the {% data variables.product.prodname_codeql %} action with the appropriate configuration. For more information, see "[AUTOTITLE](/code-security/code-scanning/automatically-scanning-your-code-for-vulnerabilities-and-errors/configuring-code-scanning-for-a-repository#creating-an-advanced-setup)."
3. Use one of the example scripts create a custom script to add the workflow to each repository in the group.
   - PowerShell example: [`jhutchings1/Create-ActionsPRs`](https://github.com/jhutchings1/Create-ActionsPRs) repository
   - NodeJS example: [`nickliffen/ghas-enablement`](https://github.com/NickLiffen/ghas-enablement) repository
