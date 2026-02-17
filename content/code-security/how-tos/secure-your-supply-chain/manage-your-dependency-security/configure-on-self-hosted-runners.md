---
title: Configuring Dependabot on self-hosted runners
intro: You can configure self-hosted runners that {% data variables.product.prodname_dependabot %} uses to access your private registries and internal network resources.
shortTitle: Configure on self-hosted runners
permissions: '{% data reusables.permissions.dependabot-actions %}'
versions:
  feature: dependabot-on-actions-self-hosted
topics:
  - Dependabot
  - Security updates
  - Version updates
  - Actions
  - Dependencies
  - Repositories
redirect_from:
  - /code-security/dependabot/working-with-dependabot/managing-dependabot-on-self-hosted-runners
  - /code-security/dependabot/maintain-dependencies/managing-dependabot-on-self-hosted-runners
  - /code-security/how-tos/secure-your-supply-chain/manage-your-dependency-security/managing-dependabot-on-self-hosted-runners
contentType: how-tos
---

## Prerequisites

* {% data variables.product.prodname_dependabot %} is installed and enabled.
* {% data variables.product.prodname_actions %} is enabled and in use.

{% data reusables.dependabot.dependabot-on-actions-enterprise-policy-condition %}

## Adding self-hosted runners for {% data variables.product.prodname_dependabot %} updates

1. Provision self-hosted runners, at the repository or organization level. For more information, see [AUTOTITLE](/actions/hosting-your-own-runners/managing-self-hosted-runners/about-self-hosted-runners) and [AUTOTITLE](/actions/hosting-your-own-runners/managing-self-hosted-runners/adding-self-hosted-runners).
1. Configure your environment and runners to meet the requirements for {% data variables.product.prodname_dependabot %}. See [Requirements for using {% data variables.product.prodname_dependabot %} with self-hosted runners](/code-security/reference/supply-chain-security/dependabot-on-actions#requirements-for-using-dependabot-with-self-hosted-runners).{% ifversion dependabot-self-hosted-labels %}
1. If you are configuring self-hosted runners for your organization, you can create and assign a custom label for your runners. Otherwise, if you are configuring self-hosted runners for a standalone repository, you need to apply the `dependabot` label. See [AUTOTITLE](/actions/how-tos/manage-runners/self-hosted-runners/apply-labels).{% else %}
1. Assign a `dependabot` label to each runner you want {% data variables.product.prodname_dependabot %} to use. For more information, see [AUTOTITLE](/actions/hosting-your-own-runners/managing-self-hosted-runners/using-labels-with-self-hosted-runners#assigning-a-label-to-a-self-hosted-runner).{% endif %}
1. Optionally, enable workflows triggered by {% data variables.product.prodname_dependabot %} to use more than read-only permissions and to have access to any secrets that are normally available. For more information, see [AUTOTITLE](/code-security/dependabot/troubleshooting-dependabot/troubleshooting-dependabot-on-github-actions#restrictions-when-dependabot-triggers-events).

## Enabling self-hosted runners for {% data variables.product.prodname_dependabot_updates %}

Once you have configured self-hosted runners for {% data variables.product.prodname_dependabot_updates %}, you can enable or disable {% data variables.product.prodname_dependabot_updates %} on self-hosted runners at the organization or repository level.

> [!NOTE]
> Disabling and re-enabling the "{% data variables.product.prodname_dependabot %} on self-hosted runners" setting does not trigger a new {% data variables.product.prodname_dependabot %} run.

### For your private{% ifversion ghec %} or internal{% endif %} repository

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
{% data reusables.repositories.navigate-to-code-security-and-analysis %}
1. Under "Dependabot", to the right of "{% data variables.product.prodname_dependabot %} on self-hosted runners", click **Enable** to enable the feature or **Disable** to disable it.

    > [!NOTE] If you do not see the option to enable {% data variables.product.prodname_dependabot %} on self-hosted runners, your organization may have configured a policy to restrict actions and self-hosted runners from running in specific repositories. Contact your organization owner for more information.

### For your organization

You can enable {% data variables.product.prodname_dependabot %} on self-hosted runners for all existing private{% ifversion ghec %} or internal{% endif %} repositories in an organization. Only repositories already configured to run {% data variables.product.prodname_dependabot %} on {% data variables.product.prodname_actions %} will be updated to run {% data variables.product.prodname_dependabot %} on self-hosted runners the next time a {% data variables.product.prodname_dependabot %} job is triggered.

{% data reusables.profile.access_org %}
{% data reusables.profile.org_settings %}
{% data reusables.security-configurations.display-global-settings %}{% ifversion dependabot-self-hosted-labels %}
1. In the "{% data variables.product.prodname_dependabot %}" section, next to "Runner type", click {% octicon "pencil" aria-label="Edit runner type" %}.
1. Select the "Runner type" dropdown menu, then click **Labeled runner** and provide any additional information. If you applied a custom label to your self-hosted runners, type that label in the "Runner label" text box.
1. To enable the feature for all new repositories in the organization, click **Save runner selection**.{% else %}
1. Under "{% data variables.product.prodname_dependabot %}", select "{% data variables.product.prodname_dependabot %} on self-hosted runners" to enable the feature for all new repositories in the organization.{% endif %}
