---
title: Configure secrets and variables for Copilot cloud agent
shortTitle: Configure secrets and variables
intro: 'Securely pass secrets and variables to {% data variables.copilot.copilot_cloud_agent %} so it can access private resources and configure MCP servers.'
versions:
  feature: copilot
contentType: how-tos
category:
  - Configure Copilot
---

## About secrets and variables for {% data variables.copilot.copilot_cloud_agent %}

When you delegate a task to {% data variables.copilot.copilot_cloud_agent %}, it works in its own ephemeral development environment, powered by {% data variables.product.prodname_actions %}. You may want to pass secrets and variables to the agent to:

* Give {% data variables.product.prodname_copilot_short %} access to private resources, such as internal package registries, when it builds, tests, or validates your code in the agent's environment.
* Configure MCP servers, by passing API keys, tokens, or other configuration to the servers. For more information, see [AUTOTITLE](/copilot/how-tos/use-copilot-agents/cloud-agent/extend-cloud-agent-with-mcp).
* Set environment variables that are available to scripts and tools that {% data variables.product.prodname_copilot_short %} runs in its environment, including in `copilot-setup-steps.yml`. For more information, see [AUTOTITLE](/copilot/how-tos/use-copilot-agents/cloud-agent/customize-the-agent-environment).

{% data variables.copilot.copilot_cloud_agent %} has its own dedicated **Agents** secrets and variables, alongside the existing **Actions**, **Codespaces**, and **Dependabot** types. You can configure Agents secrets and variables at:

* The **organization level**, so a single secret or variable can be shared across any or all repositories in your organization.
* The **repository level**, for configuration that only applies to a single repository.

Variables and secrets that you configure are exposed to {% data variables.product.prodname_copilot_short %} as environment variables, except secrets and variables prefixed with `COPILOT_MCP_`, which are only available to MCP servers.

> [!NOTE]
> If you previously configured secrets or variables in the `copilot` environment in a repository's {% data variables.product.prodname_actions %} settings, those secrets and variables have been automatically migrated to the new repository-level **Agents** type. You don't need to take any action, and you can manage them from the new location going forward.

## Configuring repository-level secrets and variables

You must be a repository administrator to configure Agents secrets and variables for a repository.

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
1. In the "Security" section of the sidebar, click **Secrets and variables**, then click **Agents**.
1. To add a secret, click the **Secrets** tab, then click **New repository secret**. To add a variable, click the **Variables** tab, then click **New repository variable**.
1. Fill in the "Name" and "Value" (or "Secret") fields, and then click **Add secret** or **Add variable**.

## Configuring organization-level secrets and variables

You must be an organization owner to configure Agents secrets and variables for an organization.

{% data reusables.organizations.navigate-to-org %}
{% data reusables.organizations.org_settings %}
1. In the "Security" section of the sidebar, click **Secrets and variables**, then click **Agents**.
1. To add a secret, click the **Secrets** tab, then click **New organization secret**. To add a variable, click the **Variables** tab, then click **New organization variable**.
1. Fill in the "Name" and "Value" (or "Secret") fields.
1. Under "Repository access", choose which repositories in your organization can access the secret or variable:

   * **All repositories**: any repository in the organization can access the secret or variable.
   * **Private repositories**: any private or internal repository in the organization can access the secret or variable.
   * **Selected repositories**: only the repositories you specify can access the secret or variable.

1. Click **Add secret** or **Add variable**.

## Using secrets and variables

Once configured, Agents secrets and variables are automatically available to {% data variables.copilot.copilot_cloud_agent %} when it works on a task in the repository. They are exposed to the agent as environment variables in its development environment, so they can be used by scripts and tools that {% data variables.product.prodname_copilot_short %} runs, including by your `copilot-setup-steps.yml` workflow.

Secret values are masked in {% data variables.copilot.copilot_cloud_agent %} session logs.

> [!NOTE]
> {% data variables.copilot.copilot_cloud_agent %} does not have access to {% data variables.product.prodname_actions %}, {% data variables.product.prodname_codespaces %}, or {% data variables.product.prodname_dependabot %} secrets and variables. Only Agents secrets and variables are passed to the agent.

## Naming requirements for secrets and variables

Names must:

* Only contain alphanumeric characters (`[A-Z]`, `[0-9]`) or underscores (`_`). Spaces are not allowed.
* Not start with the `GITHUB_` prefix.
* Not start with a number.

Names are case-insensitive. Lowercase letters are converted to uppercase. Names must be unique at the level at which they are created.

If a variable or secret with the same name exists at multiple levels, the value at the lowest level takes precedence. For example, a repository-level secret will override an organization-level secret with the same name.

For secrets and variables that you want to pass to MCP servers, the name must begin with the prefix `COPILOT_MCP_`. Only Agents secrets and variables with this prefix are available to your MCP configuration. For more information, see [AUTOTITLE](/copilot/how-tos/use-copilot-agents/cloud-agent/extend-cloud-agent-with-mcp).

## Further reading

* [AUTOTITLE](/copilot/how-tos/use-copilot-agents/cloud-agent/customize-the-agent-environment)
* [AUTOTITLE](/copilot/how-tos/use-copilot-agents/cloud-agent/extend-cloud-agent-with-mcp)
