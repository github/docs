---
title: Configuring settings for GitHub Copilot in the cloud
shortTitle: Configuring agent settings
allowTitleToDifferFromFilename: true
intro: 'Learn how to configure settings for {% data variables.copilot.copilot_in_the_cloud_short %}'
versions:
  feature: copilot
contentType: how-tos
category:
  - Configure Copilot
redirect_from:
  - /copilot/how-tos/use-copilot-agents/coding-agent/configuring-agent-settings
---

<a name="configuring-plugins-for-github-copilot-cloud-agent"></a>
<a name="configuring-plugins-for-copilot-cloud-agent"></a>

## Configuring plugins for {% data variables.copilot.copilot_in_the_cloud_short %}

To configure plugins for {% data variables.copilot.copilot_in_the_cloud_short %}, add the marketplace and plugin to `.github/copilot/settings.json` in the repository. For example:

```json copy
{
  "extraKnownMarketplaces": {
    "MARKETPLACE-NAME": {
      "source": {
        "source": "github",
        "repo": "OWNER/REPOSITORY"
      }
    }
  },
  "enabledPlugins": {
    "PLUGIN-NAME@MARKETPLACE-NAME": true
  }
}
```

Replace `OWNER/REPOSITORY` with the marketplace repository, `MARKETPLACE-NAME` with the `name` in its `marketplace.json` file, and `PLUGIN-NAME` with the plugin name. Commit the settings file to share this configuration. There is no local override for these settings. For the supported settings, see [AUTOTITLE](/copilot/reference/copilot-cli-reference/cli-config-dir-reference#repository-settings-githubcopilotsettingsjson).

## Enabling or disabling built-in code quality and security validation tools

{% data reusables.copilot.cloud-agent-validation-tools-intro %}

Optionally, you can choose to disable these tools to help {% data variables.product.prodname_copilot_short %} work faster or avoid conflicts with other code quality or security products you're using.

You must be a repository administrator to configure these settings.

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
1. {% data reusables.user-settings.code-planning-automation %} click **{% data variables.product.prodname_copilot_short %}** then **{% data variables.copilot.copilot_cloud_agent_short_cap_c %}**.
1. On the "{% data variables.copilot.copilot_in_the_cloud_short %}" page, in the "Validation tools" section, toggle the tool, or tools, you want to enable or disable.

## Allowing {% data variables.product.prodname_actions %} workflows to run automatically when {% data variables.product.prodname_copilot_short %} pushes

{% data reusables.copilot.cloud-agent-workflow-run-approval-default %}

> [!WARNING] Allowing {% data variables.product.prodname_actions %} workflows to run without approval may allow unreviewed code written by {% data variables.product.prodname_copilot_short %} to gain write access to your repository or access your {% data variables.product.prodname_actions %} secrets.

You must be a repository administrator to configure these settings.

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
1. {% data reusables.user-settings.code-planning-automation %} click **{% data variables.product.prodname_copilot_short %}** then **{% data variables.copilot.copilot_cloud_agent_short %}**.
1. On the "{% data variables.copilot.copilot_in_the_cloud_short %}" page, in the "Policies" section, disable the **Require approval for workflow runs** setting.
