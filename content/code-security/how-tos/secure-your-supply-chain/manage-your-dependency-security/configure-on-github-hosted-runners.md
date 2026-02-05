---
title: Configuring Dependabot on GitHub-hosted runners
intro: Enable {% data variables.product.prodname_dependabot %} on {% data variables.product.github %}-hosted runners to more easily identify {% data variables.product.prodname_dependabot %} job errors and manually detect and troubleshoot failed runs.
shortTitle: Configure on GitHub-hosted runners
permissions: '{% data reusables.permissions.dependabot-actions %}'
versions:
  feature: dependabot-on-actions-opt-in
topics:
  - Dependabot
  - Security updates
  - Version updates
  - Actions
  - Dependencies
  - Repositories
contentType: how-tos
---

## Enabling or disabling {% data variables.product.prodname_dependabot %} on standard {% data variables.product.github %}-hosted runners

You can configure {% data variables.product.prodname_dependabot %} on standard {% data variables.product.github %}-hosted runners:
* [For your repository](#for-your-repository)
* [For your organization](#for-your-organization)

If you restrict access to your organization's or repository's private resources, you may need to update your list of allowed IP addresses prior to enabling {% data variables.product.prodname_dependabot %} on {% data variables.product.prodname_actions %} runners. You can update your IP allow list to use the {% data variables.product.prodname_dotcom %}-hosted runners IP addresses (instead of the {% data variables.product.prodname_dependabot %} IP addresses), sourced from the [meta](/rest/meta) REST API endpoint.

>[!WARNING] You should not rely on the {% data variables.product.prodname_actions %} IP addresses for authentication to private registries. These {% data variables.product.prodname_actions %} addresses are not only used by {% data variables.product.prodname_dotcom %}, and should not be trusted for authentication. Instead, use a self-hosted runner to ensure greater control over your network access. For more information, see [AUTOTITLE](/code-security/dependabot/maintain-dependencies/managing-dependabot-on-self-hosted-runners).

### For your repository

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
{% data reusables.repositories.navigate-to-code-security-and-analysis %}
1. Under "Dependabot", to the right of "{% data variables.product.prodname_dependabot %} on Actions runners", click **Enable** to enable the feature or **Disable** to disable it.

    {% data reusables.dependabot.no-ubuntu-latest-label-self-hosted %}

### For your organization

Only repositories meeting the following criteria will be updated to run {% data variables.product.prodname_dependabot %} on {% data variables.product.prodname_actions %} the next time a {% data variables.product.prodname_dependabot %} job is triggered.

  * {% data variables.product.prodname_dependabot %} is enabled in the repository.
  * {% data variables.product.prodname_actions %} is enabled in the repository.

If a repository in your organization has {% data variables.product.prodname_dependabot %} enabled but {% data variables.product.prodname_actions %} disabled, {% data variables.product.prodname_dependabot %} will not run on {% data variables.product.prodname_actions %}, but will continue to run using the built-in {% data variables.product.prodname_dependabot %} application.

{% data reusables.profile.access_org %}
{% data reusables.profile.org_settings %}
{% data reusables.security-configurations.display-global-settings %}{% ifversion dependabot-self-hosted-labels %}
1. In the "{% data variables.product.prodname_dependabot %}" section, next to "Runner type", confirm that you have selected "Standard {% data variables.product.github %} runner". If not, click {% octicon "pencil" aria-label="Edit runner type" %} and update your configuration.{% else %}
1. Under "Dependabot", select "{% data variables.product.prodname_dependabot %} on Actions runners" to enable the feature or deselect to disable it.{% endif %}

    {% data reusables.dependabot.no-ubuntu-latest-label-self-hosted %}

## Enabling or disabling {% data variables.product.prodname_dependabot %} on {% data variables.actions.hosted_runners %}

If you run into {% data variables.product.prodname_dependabot %} timeouts and out-of-memory errors, you may want to use {% data variables.actions.hosted_runners %}, as you can configure these runners to have more resources. You can only enable {% data variables.actions.hosted_runners %} for {% data variables.product.prodname_dependabot %} **for an organization**.

1. Add a {% data variables.actions.hosted_runner %} to your organization and ensure the name specified is `dependabot`. For more information, see [AUTOTITLE](/actions/using-github-hosted-runners/about-larger-runners/managing-larger-runners#adding-a-larger-runner-to-an-organization).
1. Opt in the organization to self-hosted runners. For more information, see [AUTOTITLE](/code-security/how-tos/secure-your-supply-chain/manage-your-dependency-security/configure-on-self-hosted-runners#for-your-organization). This step is required, as it ensures that future {% data variables.product.prodname_dependabot %} jobs will run on the larger {% data variables.product.prodname_dotcom %}-hosted runner that has the `dependabot` name.

    {% data reusables.dependabot.no-ubuntu-latest-label-self-hosted %}
