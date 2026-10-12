---
title: Configuring Dependabot on self-hosted runners
intro: You can configure self-hosted runners that {% data variables.product.prodname_dependabot %} uses to access your private registries and internal network resources.
shortTitle: Configure on self-hosted runners
permissions: '{% data reusables.permissions.dependabot-actions %}'
versions:
  feature: dependabot-on-actions-self-hosted
redirect_from:
  - /code-security/dependabot/working-with-dependabot/managing-dependabot-on-self-hosted-runners
  - /code-security/dependabot/maintain-dependencies/managing-dependabot-on-self-hosted-runners
  - /code-security/how-tos/secure-your-supply-chain/manage-your-dependency-security/managing-dependabot-on-self-hosted-runners
contentType: how-tos
category:
  - Secure your dependencies
---

## Prerequisites

* {% data variables.product.prodname_dependabot %} is installed and enabled.
* {% data variables.product.prodname_actions %} is enabled and in use.

{% data reusables.dependabot.dependabot-on-actions-enterprise-policy-condition %}

## Adding self-hosted runners for {% data variables.product.prodname_dependabot %} updates

1. Provision self-hosted runners, at the repository or organization level. For more information, see [AUTOTITLE](/actions/concepts/runners/self-hosted-runners) and [AUTOTITLE](/actions/how-tos/manage-runners/self-hosted-runners/add-runners).
1. Configure your environment and runners to meet the requirements for {% data variables.product.prodname_dependabot %}. See [Requirements for using {% data variables.product.prodname_dependabot %} with self-hosted runners](/code-security/reference/supply-chain-security/dependabot-on-actions#requirements-for-using-dependabot-with-self-hosted-runners).{% ifversion dependabot-repository-runner-settings %}
1. Assign the default `dependabot` label or a custom label to each runner you want {% data variables.product.prodname_dependabot %} to use. See [AUTOTITLE](/actions/how-tos/manage-runners/self-hosted-runners/apply-labels).{% elsif dependabot-self-hosted-labels %}
1. If you are configuring self-hosted runners for your organization, you can create and assign a custom label for your runners. Otherwise, if you are configuring self-hosted runners for a standalone repository, you need to apply the `dependabot` label. See [AUTOTITLE](/actions/how-tos/manage-runners/self-hosted-runners/apply-labels).{% else %}
1. Assign a `dependabot` label to each runner you want {% data variables.product.prodname_dependabot %} to use. For more information, see [AUTOTITLE](/actions/how-tos/manage-runners/self-hosted-runners/apply-labels#assigning-a-label-to-a-self-hosted-runner).{% endif %}
1. Optionally, enable workflows triggered by {% data variables.product.prodname_dependabot %} to use more than read-only permissions and to have access to any secrets that are normally available. For more information, see [AUTOTITLE](/code-security/reference/supply-chain-security/troubleshoot-dependabot/dependabot-on-actions).

## Configuring self-hosted runners for {% data variables.product.prodname_dependabot_updates %}

{% ifversion dependabot-repository-runner-settings %}
> [!WARNING]
> Before selecting **Labeled runner**, make sure a runner has the label you plan to use. If you specify a runner group, make sure the group exists and the repository can access it. See [AUTOTITLE](/code-security/concepts/supply-chain-security/dependabot-on-actions#how-runner-settings-interact).

Once you have configured self-hosted runners for {% data variables.product.prodname_dependabot_updates %}, you can select them at the organization or repository level.
{% else %}
> [!WARNING]
> Before enabling "{% data variables.product.prodname_dependabot %} on self-hosted runners", ensure that your self-hosted runners or {% data variables.actions.hosted_runners %} are configured with the runner label used by {% data variables.product.prodname_dependabot %} (by default, `dependabot`). When this setting is enabled, {% data variables.product.prodname_dependabot %} jobs will only run on runners with this label. If no runners with this label are available, jobs will remain queued indefinitely. See [AUTOTITLE](/code-security/concepts/supply-chain-security/dependabot-on-actions#how-runner-settings-interact).

Once you have configured self-hosted runners for {% data variables.product.prodname_dependabot_updates %}, you can enable or disable {% data variables.product.prodname_dependabot_updates %} on self-hosted runners at the organization or repository level.
{% endif %}

> [!NOTE]
> Changing the runner setting does not trigger a new {% data variables.product.prodname_dependabot %} run.

### For your private{% ifversion ghec %} or internal{% endif %} repository

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
{% data reusables.repositories.navigate-to-code-security-and-analysis %}
{% ifversion dependabot-repository-runner-settings %}
1. Under "Dependency scanning", in the "{% data variables.product.prodname_dependabot %} version updates" section, next to "Runner type", click {% octicon "pencil" aria-label="Edit runner type" %}.
1. From the "Runner type" dropdown menu, select **Labeled runner**.
1. Optionally, enter a runner group name and a custom runner label. If you do not enter a label, {% data variables.product.prodname_dependabot %} uses the `dependabot` label.
1. Click **Save runner selection**.
{% else %}
1. Under "Dependabot", to the right of "{% data variables.product.prodname_dependabot %} on self-hosted runners", click **Enable** to enable the feature or **Disable** to disable it.
{% endif %}

    > [!NOTE] If you cannot change the runner setting, your organization may restrict actions and self-hosted runners for the repository. Contact your organization owner for more information.

### For your organization

You can enable {% data variables.product.prodname_dependabot %} on self-hosted runners for all existing private{% ifversion ghec %} or internal{% endif %} repositories in an organization. Only repositories already configured to run {% data variables.product.prodname_dependabot %} on {% data variables.product.prodname_actions %} will be updated to run {% data variables.product.prodname_dependabot %} on self-hosted runners the next time a {% data variables.product.prodname_dependabot %} job is triggered.

{% data reusables.profile.access_org %}
{% data reusables.profile.org_settings %}
{% data reusables.security-configurations.display-global-settings %}{% ifversion dependabot-self-hosted-labels %}
1. In the "{% data variables.product.prodname_dependabot %}" section, next to "Runner type", click {% octicon "pencil" aria-label="Edit runner type" %}.
1. Select the "Runner type" dropdown menu, then click **Labeled runner** and provide any additional information. If you applied a custom label to your self-hosted runners, type that label in the "Runner label" text box.
1. To enable the feature for all new repositories in the organization, click **Save runner selection**.{% else %}
1. Under "{% data variables.product.prodname_dependabot %}", select "{% data variables.product.prodname_dependabot %} on self-hosted runners" to enable the feature for all new repositories in the organization.{% endif %}
