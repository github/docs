---
title: Managing Dependabot on self-hosted runners
intro: 'You can configure {% data variables.product.prodname_actions %} self-hosted runners that {% data variables.product.prodname_dependabot %} uses to access your private registries and internal network resources.'
shortTitle: Manage Dependabot on self-hosted runners
permissions: 'Organization owners and repository administrators can configure {% data variables.product.prodname_dependabot %} to run on self-hosted runners.'
versions:
  feature: dependabot-on-actions-self-hosted
type: how_to
topics:
  - Dependabot
  - Security updates
  - Version updates
  - Actions
  - Dependencies
  - Repositories
---

{% data reusables.dependabot.dependabot-on-actions-opt-in-note %}

## About {% data variables.product.prodname_dependabot %} on {% data variables.product.prodname_actions %} self-hosted runners

You can help users of your organization and repositories to create and maintain secure code by setting up {% data variables.product.prodname_dependabot %} security and version updates. With {% data variables.product.prodname_dependabot_updates %}, developers can configure repositories so that their dependencies are updated and kept secure automatically. Running {% data variables.product.prodname_dependabot %} on {% data variables.product.prodname_actions %} allows for better performance, and increased visibility and control of {% data variables.product.prodname_dependabot %} jobs.

To have greater control over {% data variables.product.prodname_dependabot %} access to your private registries and internal network resources, you can configure {% data variables.product.prodname_dependabot %} to run on {% data variables.product.prodname_actions %} self-hosted runners.

For security reasons, when running {% data variables.product.prodname_dependabot %} on {% data variables.product.prodname_actions %} self-hosted runners, {% data variables.product.prodname_dependabot_updates %} will not be run on public repositories.

For more information about configuring {% data variables.product.prodname_dependabot %} access to private registries when using {% data variables.product.company_short %}-hosted runners, see "[AUTOTITLE](/code-security/dependabot/working-with-dependabot/guidance-for-the-configuration-of-private-registries-for-dependabot)." For information about which ecosystems are supported as private registries, see "[AUTOTITLE](/code-security/dependabot/working-with-dependabot/removing-dependabot-access-to-public-registries)."

## Prerequisites

You must have {% data variables.product.prodname_dependabot %} installed and enabled, and {% data variables.product.prodname_actions %} enabled and in use. The "{% data variables.product.prodname_dependabot %} on {% data variables.product.prodname_actions %} Runners" setting for your organization should also be enabled. For more information, see "[AUTOTITLE](/code-security/dependabot/working-with-dependabot/about-dependabot-on-github-actions-runners)."

If {% data variables.product.prodname_actions %} is not enabled for your organization or repository, then the organization or repository level setting to enable "{% data variables.product.prodname_dependabot %} on {% data variables.product.prodname_actions %} runners" will not be visible in the web UI.

Your organization may have configured a policy to restrict actions and self-hosted runners from running in specific repositories, which in turn will not allow {% data variables.product.prodname_dependabot %} to run on {% data variables.product.prodname_actions %} self-hosted runners. In this case, the organization or repository level setting to enable "{% data variables.product.prodname_dependabot %} on self-hosted runners" will not be visible in the web UI. For more information, see "[AUTOTITLE](/organizations/managing-organization-settings/disabling-or-limiting-github-actions-for-your-organization)."

{% data reusables.dependabot.dependabot-on-actions-enterprise-policy-condition %}

## Configuring self-hosted runners for {% data variables.product.prodname_dependabot_updates %}

After you configure your organization or repository to run {% data variables.product.prodname_dependabot %} on {% data variables.product.prodname_actions %}, and before you enable {% data variables.product.prodname_dependabot %} on self-hosted runners, you need to configure self-hosted runners for {% data variables.product.prodname_dependabot_updates %}.

### System requirements for {% data variables.product.prodname_dependabot %} runners

{% data reusables.dependabot.dependabot-runners-system-requirements %}

### Network requirements for {% data variables.product.prodname_dependabot %} runners

{% data reusables.dependabot.dependabot-runners-network-requirements %}

### Certificate configuration for {% data variables.product.prodname_dependabot %} runners

If {% data variables.product.prodname_dependabot %} needs to interact with registries that use self-signed certificates, those certificates must also be installed on the self-hosted runners that run {% data variables.product.prodname_dependabot %} jobs. This security hardens the connection. You must also configure Node.js to use the certificate, because most actions are written in JavaScript and run using Node.js, which does not use the operating system certificate store.

### Adding self-hosted runners for {% data variables.product.prodname_dependabot %} updates

1. Provision self-hosted runners, at the repository or organization level. For more information, see "[AUTOTITLE](/actions/hosting-your-own-runners/managing-self-hosted-runners/about-self-hosted-runners)" and "[AUTOTITLE](/actions/hosting-your-own-runners/managing-self-hosted-runners/adding-self-hosted-runners)."

1. Set up the self-hosted runners with the requirements described above. For example, on a VM running Ubuntu 20.04 you would:
   * Install Docker and ensure that the runner users have access to Docker. For more information, see the Docker documentation.
     * [Install Docker Engine on Ubuntu](https://docs.docker.com/engine/install/ubuntu/)
     * Recommended approach: [Run the Docker daemon as a non-root user (Rootless mode)](https://docs.docker.com/engine/security/rootless/)
     * Alternative approach: [Manage Docker as a non-root user](https://docs.docker.com/engine/install/linux-postinstall/#manage-docker-as-a-non-root-user)
   * Verify that the runners have access to the public internet and can only access the internal networks that {% data variables.product.prodname_dependabot %} needs.
   * Install any self-signed certificates for registries that {% data variables.product.prodname_dependabot %} will need to interact with.

1. Assign a `dependabot` label to each runner you want {% data variables.product.prodname_dependabot %} to use. For more information, see "[AUTOTITLE](/actions/hosting-your-own-runners/managing-self-hosted-runners/using-labels-with-self-hosted-runners#assigning-a-label-to-a-self-hosted-runner)."

1. Optionally, enable workflows triggered by {% data variables.product.prodname_dependabot %} to use more than read-only permissions and to have access to any secrets that are normally available. For more information, see "[AUTOTITLE](/code-security/dependabot/working-with-dependabot/automating-dependabot-with-github-actions#responding-to-events)."

## Enabling self-hosted runners for {% data variables.product.prodname_dependabot_updates %}

Once you have configured self-hosted runners for {% data variables.product.prodname_dependabot_updates %}, you can enable or disable {% data variables.product.prodname_dependabot_updates %} on self-hosted runners at the organization or repository level.

Note, disabling and re-enabling the "{% data variables.product.prodname_dependabot %} on self-hosted runners" settings will not trigger a new {% data variables.product.prodname_dependabot %} run.

### Enabling or disabling for your repository

You can manage {% data variables.product.prodname_dependabot %} on self-hosted runners for your {% ifversion ghec %}private or internal{% else %}private{% endif %} repository.

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
{% data reusables.repositories.navigate-to-code-security-and-analysis %}
1. Under "Dependabot", to the right of "{% data variables.product.prodname_dependabot %} on self-hosted runners", click **Enable**  to enable the feature or **Disable** to disable it.

### Enabling or disabling for your organization

You can enable {% data variables.product.prodname_dependabot %} on self-hosted runners for all existing {% ifversion ghec %}private or internal{% else %}private{% endif %} repositories in an organization. Only repositories already configured to run {% data variables.product.prodname_dependabot %} on {% data variables.product.prodname_actions %} will be updated to run {% data variables.product.prodname_dependabot %} on self-hosted runners the next time a {% data variables.product.prodname_dependabot %} job is triggered.

> [!NOTE] You need to enable self-hosted runners for your organization if you use {% data variables.actions.hosted_runners %}. For more information, see "[AUTOTITLE](/code-security/dependabot/working-with-dependabot/about-dependabot-on-github-actions-runners#enabling-or-disabling-dependabot-on-larger-runners)."

{% data reusables.profile.access_org %}
{% data reusables.profile.org_settings %}
1. In the "Security" section of the sidebar, click **{% octicon "codescan" aria-hidden="true" %} Code security** then **Global settings**.
1. Under "Dependabot", select "{% data variables.product.prodname_dependabot %} on self-hosted runners" to enable the feature or deselect to disable it. This action enables or disables the feature for all new repositories in the organization.

For more information, see "[AUTOTITLE](/code-security/securing-your-organization/enabling-security-features-in-your-organization/configuring-global-security-settings-for-your-organization)."
