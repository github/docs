---
title: Configuring larger runners for default setup
shortTitle: Configure larger runners
intro: 'You can run {% data variables.product.prodname_code_scanning %} default setup more quickly on bigger codebases using {% data variables.actions.hosted_runners %}.'
product: '{% data reusables.gated-features.code-scanning %}'
permissions: '{% data reusables.actions.larger-runner-permissions %}'
versions:
  feature: default-setup-larger-runners
topics:
  - Code scanning
  - CodeQL
  - Actions
---

{% data reusables.code-scanning.beta-larger-runners-support %}

## About {% data variables.actions.hosted_runners %} for default setup

{% data reusables.actions.about-larger-runners %} For more information about {% data variables.actions.hosted_runners %}, see "[AUTOTITLE](/actions/using-github-hosted-runners/about-larger-runners/about-larger-runners)."

Consider configuring {% data variables.actions.hosted_runners %} for default setup if:
* Your scans with standard {% data variables.product.prodname_dotcom %}-hosted runners are taking too long.
* Your scans with standard {% data variables.product.prodname_dotcom %}-hosted runners are returning memory or disk errors.
* You want to customize aspects of your {% data variables.product.prodname_code_scanning %} runner like the runner size, runner image, and job concurrency without using self-hosted runners.

{% warning %}

**Warning:** Currently, Swift analysis is not available on {% data variables.actions.hosted_runners %} for default setup. Additionally, if your repository has access to a runner with the `code-scanning` label, such as a {% data variables.actions.hosted_runner %} provisioned for default setup, default setup workflows will _only_ use runners labeled `code-scanning`. If you would like to configure default setup on {% data variables.actions.hosted_runners %} _and_ analyze Swift, you have two options:
  * Provision a self-hosted macOS runner with the `code-scanning` label in addition to your {% data variables.actions.hosted_runner %}. For more information, see {% ifversion ghec %}"[AUTOTITLE](/admin/code-security/managing-github-advanced-security-for-your-enterprise/configuring-code-scanning-for-your-appliance)."{% else %}"[AUTOTITLE](/actions/hosting-your-own-runners/managing-self-hosted-runners/adding-self-hosted-runners#adding-a-self-hosted-runner-to-a-repository)."{% endif %}
  * Ensure any repositories containing Swift _do not_ have access to runners with the label `code-scanning`. Default setup workflows for that repository will only use standard runners.

{% endwarning %}

{% ifversion ghec %}

## Provisioning enterprise-level {% data variables.actions.hosted_runners %} for default setup

1. Add a {% data variables.actions.hosted_runner %} to your enterprise. For more information, see "[AUTOTITLE](/actions/using-github-hosted-runners/about-larger-runners/managing-larger-runners#adding-a-larger-runner-to-an-enterprise)."
   * To add the `code-scanning` label to your {% data variables.actions.hosted_runner %}, name the runner `code-scanning`. An enterprise can only have one {% data variables.actions.hosted_runner %} named `code-scanning`, and that runner will handle all {% data variables.product.prodname_code_scanning %} jobs for all organizations and repositories within your enterprise that:
     * _Have access_ to the enterprise-level runner, and
     * _Don't have access_ to an organization-level {% data variables.actions.hosted_runner %} named `code-scanning`. If an organization or repository also has access to an organization-level {% data variables.actions.hosted_runner %} named `code-scanning`, each {% data variables.product.prodname_code_scanning %} job will be randomly assigned to either the organization-level or enterprise-level runner.
{% data reusables.actions.org-access-to-github-hosted-runners %}
1. To analyze repositories with default setup, grant the desired repositories access to the runner group your {% data variables.actions.hosted_runner %} is assigned to. For more information, see "[AUTOTITLE](/actions/using-github-hosted-runners/about-larger-runners/managing-larger-runners#allowing-repositories-to-access-larger-runners)."
1. You can now configure default setup for your enterprise, organizations, and repositories, and your {% data variables.actions.hosted_runner %} will automatically pick up {% data variables.product.prodname_code_scanning %} jobs as previously specified. For more information on configuring default setup, see "[AUTOTITLE](/code-security/code-scanning/enabling-code-scanning/configuring-default-setup-for-code-scanning)" and "[AUTOTITLE](/code-security/code-scanning/enabling-code-scanning/configuring-default-setup-for-code-scanning-at-scale)."
{% endif %}

## Provisioning organization-level {% data variables.actions.hosted_runners %} for default setup

1. Add a {% data variables.actions.hosted_runner %} to your organization. For more information, see "[AUTOTITLE](/actions/using-github-hosted-runners/about-larger-runners/managing-larger-runners#adding-a-larger-runner-to-an-organization)."
   * To add the `code-scanning` label to your {% data variables.actions.hosted_runner %}, name the runner `code-scanning`. An organization can only have one {% data variables.actions.hosted_runner %} with the `code-scanning` label, and that runner will handle all {% data variables.product.prodname_code_scanning %} jobs from repositories within your organization with access to the runner's group.
1. By default, all repositories in your organization have access to organization-level runners, meaning every repository can use your {% data variables.actions.hosted_runner %}. For information on granting only select repositories access to a {% data variables.actions.hosted_runner %}, see "[AUTOTITLE](/actions/using-github-hosted-runners/about-larger-runners/managing-larger-runners#allowing-repositories-to-access-larger-runners)."
1. You can now configure default setup for your organization and repositories, and your {% data variables.actions.hosted_runner %} will automatically pick up {% data variables.product.prodname_code_scanning %} jobs. For more information on configuring default setup, see "[AUTOTITLE](/code-security/code-scanning/enabling-code-scanning/configuring-default-setup-for-code-scanning)" and "[AUTOTITLE](/code-security/code-scanning/enabling-code-scanning/configuring-default-setup-for-code-scanning-at-scale)."
