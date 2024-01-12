---
title: 'Phase 3: Pilot programs'
intro: 'You may benefit from beginning with a few high-impact projects and teams with which to pilot an initial rollout. This will allow an initial group within your company to get familiar with GHAS, learn how to enable and configure GHAS, and build a solid foundation on GHAS before rolling out to the remainder of your company.'
versions:
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Advanced Security
shortTitle: 3. Pilot programs
---

{% note %}

This article is part of a series on adopting {% data variables.product.prodname_GH_advanced_security %} at scale. For the previous article in this series, see "[AUTOTITLE](/code-security/adopting-github-advanced-security-at-scale/phase-2-preparing-to-enable-at-scale)."

{% endnote %}

## About pilot programs

We recommend you identify a few high-impact projects or teams to use in a pilot rollout of GHAS. This allows an initial group within your company to get familiar with GHAS and builds a solid foundation for GHAS before you roll it out to the remainder of your company.

The steps in this phase will help you enable GHAS on your enterprise, begin using its features, and review your results. If you’re working with {% data variables.product.prodname_professional_services %}, they can provide additional assistance through this process through onboarding sessions, GHAS workshops, and troubleshooting as needed.

Before you start your pilot projects, we recommend that you schedule some meetings for your teams, such as an initial meeting, midpoint review, and a wrap-up session when the pilot is complete. These meetings will help you all make adjustments as needed and ensure your teams are prepared and supported to complete the pilot successfully.

{% ifversion ghes %}

If you haven't already enabled GHAS for your {% data variables.product.prodname_ghe_server %} instance, see "[AUTOTITLE](/admin/code-security/managing-github-advanced-security-for-your-enterprise/enabling-github-advanced-security-for-your-enterprise)."

{% endif %}

You need to enable GHAS for each pilot project, either by enabling the GHAS features for each repository or for all repositories in any organizations taking part in the pilot. For more information, see "[AUTOTITLE](/repositories/managing-your-repositorys-settings-and-features/enabling-features-for-your-repository/managing-security-and-analysis-settings-for-your-repository)" or "[AUTOTITLE](/organizations/keeping-your-organization-secure/managing-security-settings-for-your-organization/managing-security-and-analysis-settings-for-your-organization)"

## Piloting {% data variables.product.prodname_code_scanning %}

{% ifversion ghes %}

To enable {% data variables.product.prodname_code_scanning %} on your {% data variables.product.prodname_ghe_server %} instance, see "[AUTOTITLE](/admin/code-security/managing-github-advanced-security-for-your-enterprise/configuring-code-scanning-for-your-appliance)."

{% elsif ghae %}

To enable {% data variables.product.prodname_code_scanning %} using {% data variables.product.prodname_actions %} you must make runners available to run workflows in {% data variables.product.prodname_ghe_managed %}, see "[AUTOTITLE](/admin/github-actions/getting-started-with-github-actions-for-your-enterprise/getting-started-with-github-actions-for-github-ae)."

{% endif %}
{% ifversion default-setup-ghas-enablement %}
You can quickly configure default setup for {% data variables.product.prodname_code_scanning %} across multiple repositories in an organization using security overview. For more information, see "[AUTOTITLE](/code-security/code-scanning/enabling-code-scanning/configuring-default-setup-for-code-scanning-at-scale#configuring-default-setup-for-a-subset-of-repositories-in-an-organization)."

You can also choose to enable {% data variables.product.prodname_code_scanning %} for all repositories in an organization, but we recommend configuring {% data variables.product.prodname_code_scanning %} on a subset of high-impact repositories for your pilot program.

{% data reusables.advanced-security.enable-default-setup-first %}
{% else %}
You can run {% data variables.product.prodname_code_scanning %} on a repository by creating a {% data variables.product.prodname_actions %} workflow to run the [{% data variables.product.prodname_codeql %} action](https://github.com/github/codeql-action/). For more information about {% data variables.product.prodname_actions %}, see:
- "[AUTOTITLE](/actions/learn-github-actions)"
- "[AUTOTITLE](/actions/learn-github-actions/understanding-github-actions)"
- "[AUTOTITLE](/actions/using-workflows/events-that-trigger-workflows)"
- "[AUTOTITLE](/actions/using-workflows/workflow-syntax-for-github-actions#filter-pattern-cheat-sheet)"

We recommend enabling {% data variables.product.prodname_code_scanning %} on a repository-by-repository basis as part of your pilot program. For more information, see "[AUTOTITLE](/code-security/code-scanning/creating-an-advanced-setup-for-code-scanning/configuring-advanced-setup-for-code-scanning)."

If you want to enable {% data variables.product.prodname_code_scanning %} for many repositories, you may want to script the process.

For an example of a script that opens pull requests to add a {% data variables.product.prodname_actions %} workflow to multiple repositories, see the [`jhutchings1/Create-ActionsPRs`](https://github.com/jhutchings1/Create-ActionsPRs) repository for an example using PowerShell, or [`nickliffen/ghas-enablement`](https://github.com/NickLiffen/ghas-enablement) for teams who do not have PowerShell and instead would like to use NodeJS.

When running initial code scans, you may find that no results are found or that an unusual number of results are returned. You may want to adjust what is flagged in future scans. For more information, see "[AUTOTITLE](/code-security/code-scanning/creating-an-advanced-setup-for-code-scanning/customizing-your-advanced-setup-for-code-scanning)."
{% endif %}

If your company wants to use other third-party code analysis tools with {% data variables.product.prodname_dotcom %} {% data variables.product.prodname_code_scanning %}, you can use actions to run those tools within {% data variables.product.prodname_dotcom %}. Alternatively, you can upload results, which are generated by third-party tools as SARIF files, to {% data variables.product.prodname_code_scanning %}. For more information, see "[AUTOTITLE](/code-security/code-scanning/integrating-with-code-scanning)."

## Piloting {% data variables.product.prodname_secret_scanning %}

{% data variables.product.prodname_dotcom %} scans repositories for known types of secrets, to prevent fraudulent use of secrets that were committed accidentally.

{% ifversion ghes %}

To enable secret scanning for your {% data variables.product.prodname_ghe_server %} instance, see "[AUTOTITLE](/admin/code-security/managing-github-advanced-security-for-your-enterprise/configuring-secret-scanning-for-your-appliance)."

{% endif %}

You need to enable secret scanning for each pilot project, either by enabling the feature for each repository or for all repositories in any organizations taking part in the project. For more information, see "[AUTOTITLE](/repositories/managing-your-repositorys-settings-and-features/enabling-features-for-your-repository/managing-security-and-analysis-settings-for-your-repository)" or "[AUTOTITLE](/organizations/keeping-your-organization-secure/managing-security-settings-for-your-organization/managing-security-and-analysis-settings-for-your-organization)."

If you have collated any custom patterns specific to your enterprise, especially any related to the projects piloting {% data variables.product.prodname_secret_scanning %}, you can configure those. For more information, see "[AUTOTITLE](/code-security/secret-scanning/defining-custom-patterns-for-secret-scanning)."

To learn how to view and close alerts for secrets checked into your repository, see "[AUTOTITLE](/code-security/secret-scanning/managing-alerts-from-secret-scanning)."

{% note %}

For the next article in this series, see "[AUTOTITLE](/code-security/adopting-github-advanced-security-at-scale/phase-4-create-internal-documentation)."

{% endnote %}
