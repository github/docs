---
title: Extending GitHub Copilot coding agent with the Model Context Protocol (MCP)
shortTitle: Extend coding agent with MCP
allowTitleToDifferFromFilename: true
intro: 'Learn how to use the Model Context Protocol (MCP) to extend the capabilities of {% data variables.copilot.copilot_coding_agent %}.'
versions:
  feature: copilot
topics:
  - Copilot
redirect_from:
  - /copilot/customizing-copilot/using-model-context-protocol/extending-copilot-coding-agent-with-mcp
  - /copilot/customizing-copilot/extending-copilot-coding-agent-with-mcp
  - /early-access/copilot/coding-agent/extending-copilot-coding-agent-with-model-context-protocol
  - /copilot/using-github-copilot/coding-agent/extending-copilot-coding-agent-with-mcp
  - /copilot/how-tos/agents/copilot-coding-agent/extending-copilot-coding-agent-with-mcp
  - /copilot/how-tos/agents/copilot-coding-agent/extend-coding-agent-with-mcp
  - /copilot/how-tos/agents/coding-agent/extend-coding-agent-with-mcp
contentType: how-tos
category: 
  - Integrate Copilot with your tools
---

## Prerequisite

Before setting up an MCP server for {% data variables.copilot.copilot_coding_agent %}, read [AUTOTITLE](/copilot/concepts/coding-agent/mcp-and-coding-agent) to make sure you understand the concepts around MCP servers and {% data variables.copilot.copilot_coding_agent %}.

## Introduction

As a repository administrator, you can configure MCP servers for use within your repository. You do this using a JSON-formatted configuration that specifies the details of the MCP servers you want to use. You enter the JSON configuration directly into the settings for the repository on {% data variables.product.prodname_dotcom_the_website %}.

Organization and enterprise administrators can also configure MCP servers as part of {% data variables.copilot.custom_agents_short %} using the YAML frontmatter. For more information, see [AUTOTITLE](/copilot/reference/custom-agents-configuration#mcp-server-configuration-details).

> [!WARNING]
> Once you've configured an MCP server, {% data variables.product.prodname_copilot_short %} will be able to use the tools provided by the server autonomously, and will not ask for your approval before using them.

{% data reusables.copilot.mcp.coding-agent-limitations %}

## Adding an MCP configuration to your repository

Repository administrators can configure MCP servers by following these steps:

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
1. In the "Code & automation" section of the sidebar, click **{% data variables.product.prodname_copilot_short %}** then **{% data variables.copilot.copilot_coding_agent_short_cap_c %}**.
1. Add your configuration in the **MCP configuration** section.

   The following sections in this article explain how to write the JSON configuration that you need to enter here.

1. Click **Save**.

   Your configuration will be validated to ensure proper syntax.

1. If your MCP server requires a variable, key, or secret, add a variable or secret to your {% data variables.product.prodname_copilot_short %} environment. Only variables and secrets with names prefixed with `COPILOT_MCP_` will be available to your MCP configuration. See [Setting up a {% data variables.product.prodname_copilot_short %} environment for {% data variables.copilot.copilot_coding_agent %}](#setting-up-a-copilot-environment-for-copilot-coding-agent).

## Writing a JSON configuration for MCP servers

You configure MCP servers using a special JSON format. The JSON must contain an `mcpServers` object, where the key is the name of the MCP server (for example, `sentry`), and the value is an object with the configuration for that MCP server.

```json copy
{
  "mcpServers": {
    "MCP SERVER 1": {
      "command": "VALUE",
      "args": [ VALUES ],
      ...
    },
    "MCP SERVER 2": {
      "command": "VALUE",
      "args": [ VALUES ],
      ...
    },
    ...
  }
}
```

The configuration object can contain the following keys:

**Required keys for local and remote MCP servers**
* `tools` (`string[]`): The tools from the MCP server to enable. You may be able to find a list of tools in the server's documentation, or in its code. We strongly recommend that you allowlist specific read-only tools, since the agent will be able to use these tools autonomously and will not ask you for approval first. You can also enable all tools by including `*` in the array.
* `type` (`string`): {% data variables.copilot.copilot_coding_agent %} accepts `"local"`, `"stdio"`, `"http"`, or `"sse"`.

**Local MCP specific keys**
* `command` (`string`): Required. The command to run to start the MCP server.
* `args` (`string[]`): Required. The arguments to pass to the `command`.
* `env` (`object`): Optional. The environment variables to pass to the server. This object should map the name of the environment variable that should be exposed to your MCP server to either of the following:
  * The name of a secret you have configured in your {% data variables.product.prodname_copilot_short %} environment, beginning with `COPILOT_MCP_`.
  * The name of a variable you have configured in your {% data variables.product.prodname_copilot_short %} environment, beginning with `COPILOT_MCP_`.

**Remote MCP specific keys**
* `url` (`string`): Required. The MCP server's URL.
* `headers` (`object`): Optional. The headers to attach to requests to the server. This object should map the name of header keys to either of the following:
  * The name of a secret you have configured in your {% data variables.product.prodname_copilot_short %} environment, beginning with `COPILOT_MCP_` preceded by a `$`.
  * The name of a variable you have configured in your {% data variables.product.prodname_copilot_short %} environment, beginning with `COPILOT_MCP_` preceded by a `$`.
  * A string value.

Note that all `string` and `string[]` fields besides `tools` & `type` support substitution with a variable or secret you have configured in your {% data variables.product.prodname_copilot_short %} environment, beginning with `COPILOT_MCP_` preceded by a `$`.

## Example configurations

### Example: Sentry

The [Sentry MCP server](https://github.com/getsentry/sentry-mcp) gives {% data variables.product.prodname_copilot_short %} authenticated access to exceptions recorded in [Sentry](https://sentry.io).

```javascript copy
// If you copy and paste this example, you will need to remove the comments prefixed with `//`, which are not valid JSON.
{
  "mcpServers": {
    "sentry": {
      "type": "local",
      "command": "npx",
      // We can use the $SENTRY_HOST environment variable which is passed to
      // the server because of the `env` value below.
      "args": ["@sentry/mcp-server@latest", "--host=$SENTRY_HOST"],
      "tools": ["get_issue_details", "get_issue_summary"],
      "env": {
        // We can specify an environment variable value as
        // a variable in your {% data variables.product.prodname_copilot_short %} environment
        // where `COPILOT_MCP_SENTRY_HOST` = "https://contoso.sentry.io"...
        "SENTRY_HOST": "COPILOT_MCP_SENTRY_HOST",
        // or refer to a secret with a name starting with
        // `COPILOT_MCP_`.
        "SENTRY_ACCESS_TOKEN": "COPILOT_MCP_SENTRY_ACCESS_TOKEN"
      }
    }
  }
}
```

### Example: Notion

The [Notion MCP server](https://github.com/makenotion/notion-mcp-server) gives {% data variables.product.prodname_copilot_short %} authenticated access to notes and other content from [Notion](https://notion.so).

```javascript copy
// If you copy and paste this example, you will need to remove the comments prefixed with `//`, which are not valid JSON.
{
  "mcpServers": {
    "notionApi": {
      "type": "local",
      "command": "docker",
      "args": [
        "run",
        "--rm",
        "-i",
        "-e",
        // We can use the $NOTION_API_KEY environment variable which is passed to
        // the server because of the `env` value below.
        "OPENAPI_MCP_HEADERS={\"Authorization\": \"Bearer $NOTION_API_KEY\", \"Notion-Version\": \"2022-06-28\"}",
       "mcp/notion"
      ],
      "env": {
        // The value of the `COPILOT_MCP_NOTION_API_KEY` secret will be passed to the
        // server command as an environment variable called `NOTION_API_KEY`
        "NOTION_API_KEY": "COPILOT_MCP_NOTION_API_KEY"
      },
      "tools": ["*"]
    }
  }
}
```

### Example: Azure

The [Azure MCP Server](https://github.com/Azure/azure-mcp) allows {% data variables.product.prodname_copilot_short %} to understand your Azure-specific files and Azure resources within your subscription when making code changes.

To automatically configure your repository with a `copilot-setup-steps.yml` file to authenticate with Azure, plus secrets for authentication, clone the repository locally then run the [Azure Developer CLI](https://learn.microsoft.com/en-us/azure/developer/azure-developer-cli/?ref_product=copilot&ref_type=engagement&ref_style=button)'s `azd coding-agent config` command in the root of the repository.

Once you've run the command and merged the created pull request, you can add the MCP configuration to your repository.

  ```json copy
   {
     "mcpServers": {
       "Azure": {
        "type": "local",
        "command": "npx",
        "args": [
          "-y",
          "@azure/mcp@latest",
          "server",
          "start"
         ],
        "tools": ["*"]
       }
     }
   }
   ```

### Example: Cloudflare

The [Cloudflare MCP server](https://github.com/cloudflare/mcp-server-cloudflare) creates connections between your Cloudflare services, including processing documentation and data analysis.

```json copy
{
  "mcpServers": {
    "cloudflare": {
      "type": "sse",
      "url": "https://docs.mcp.cloudflare.com/sse",
      "tools": ["*"]
    }
  }
}
```

### Example: Azure DevOps

The [Azure DevOps MCP server](https://github.com/microsoft/azure-devops-mcp) creates a seamless connection between {% data variables.product.prodname_copilot_short %} and your Azure DevOps services, including work items, pipelines or documentation.

To use the Azure DevOps MCP server with {% data variables.copilot.copilot_coding_agent %}, you must update the repository's copilot-setup-steps.yml file to include an Azure login workflow step.

1. Configure OIDC in a Microsoft Entra application, trusting {% data variables.product.github %}. See [Use the Azure Login action with OpenID Connect](https://learn.microsoft.com/en-us/azure/developer/github/connect-from-azure-openid-connect).
1. Setup access to Azure DevOps organization and projects for the application identity. See [Add organization users and manage access](https://learn.microsoft.com/en-us/azure/devops/organizations/accounts/add-organization-users).
1. Add a `.github/workflows/copilot-setup-steps.yml` Actions workflow file in your repository if you do not already have one.
1. Add an Azure login step to the `copilot-setup-steps` workflow job.

   ```yaml copy
   {% data reusables.actions.actions-not-certified-by-github-comment %}
   on:
     workflow_dispatch:
   permissions:
     id-token: write
     contents: read
   jobs:
     copilot-setup-steps:
       runs-on: ubuntu-latest
       permissions:
         id-token: write
         contents: read
       environment: copilot
       steps:
         - name: Azure login
           uses: azure/login@a457da9ea143d694b1b9c7c869ebb04ebe844ef5
           with:
             client-id: {% raw %}${{ secrets.AZURE_CLIENT_ID }}{% endraw %}
             tenant-id: {% raw %}${{ secrets.AZURE_TENANT_ID }}{% endraw %}
             allow-no-subscriptions: true
   ```

   This configuration ensures the `azure/login` action is executed when {% data variables.copilot.copilot_coding_agent %} runs.
1. In your repository’s {% data variables.product.prodname_copilot_short %} environment, add secrets for your `AZURE_CLIENT_ID` and `AZURE_TENANT_ID`.
1. Configure the Azure DevOps MCP server by adding an `ado` object to your MCP configuration with defined tools you want {% data variables.copilot.copilot_coding_agent %} to use.

  ```json copy
  {
    "mcpServers": {
      "ado": {
        "type": "local",
        "command": "npx",
        "args": ["-y", "@azure-devops/mcp", "<your-azure-devops-organization>", "-a", "azcli"],
        "tools": ["wit_get_work_item", "wit_get_work_items_batch_by_ids", ...]
      }
    }
  }
   ```

## Reusing your MCP configuration from {% data variables.product.prodname_vscode %}

If you have already configured MCP servers in {% data variables.product.prodname_vscode_shortname %}, you can leverage a similar configuration for {% data variables.copilot.copilot_coding_agent %}.

Depending on how {% data variables.product.prodname_vscode_shortname %} is configured, you may be able to find your MCP settings in your repository's `.vscode/mcp.json` file, or in your machine's private `settings.json` file.

To adapt the configuration for {% data variables.copilot.copilot_coding_agent %}, you will need to:

1. Add a `tools` key for each MCP server, specifying which tools will be available to {% data variables.product.prodname_copilot_short %}.
1. If you've configured `inputs`, switch to using `env` directly.
1. If you've configured an `envFile`, switch to using `env` directly.
1. Update any references to `inputs` in your `args` configuration to refer to environment variables from `env` instead.

For more information on MCP in {% data variables.product.prodname_vscode_shortname %}, see the [{% data variables.product.prodname_vscode_shortname %} docs](https://code.visualstudio.com/docs/copilot/chat/mcp-servers).

## Setting up a {% data variables.product.prodname_copilot_short %} environment for {% data variables.copilot.copilot_coding_agent %}

Some MCP servers will require keys or secrets. To leverage those servers in {% data variables.copilot.copilot_coding_agent %}, you can add secrets to an environment for {% data variables.product.prodname_copilot_short %}. This ensures the secrets are properly recognized and passed to the applicable MCP server that you have configured.

You must be a repository administrator to configure a {% data variables.product.prodname_copilot_short %} environment for your repository.

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
{% data reusables.actions.sidebar-environment %}
{% data reusables.actions.new-environment %}
1. Call the new environment `copilot` and click **Configure environment**.
1. Under "Environment secrets", click **Add environment secret**.
1. Give the secret a name beginning `COPILOT_MCP_`, add the secret value, then click **Add secret**.

## Validating your MCP configuration

Once you've set up your MCP configuration, you should test it to make sure it is set up correctly.

1. Create an issue in the repository, then assign it to {% data variables.product.prodname_copilot_short %}.
1. Wait a few seconds, and {% data variables.product.prodname_copilot_short %} will leave an 👀 reaction on the issue.
1. Wait a few more seconds, and {% data variables.product.prodname_copilot_short %} will create a pull request, which will appear in the issue's timeline.
1. Click the created pull request in the timeline, and wait until a "Copilot started work" timeline event appears.
1. Click **View session** to open the {% data variables.copilot.copilot_coding_agent %} logs.
1. Click the ellipsis button (**...**) at the top right of the log viewer, then click **{% data variables.product.prodname_copilot_short %}** in the sidebar.
1. Click the **Start MCP Servers** step to expand the logs.
1. If your MCP servers have been started successfully, you will see their tools listed at the bottom of the logs.

If your MCP servers require any dependencies that are not installed on the {% data variables.product.prodname_actions %} runner by default, such as `uv` and `pipx`, or that need special setup steps, you may need to create a `copilot-setup-steps.yml` Actions workflow file to install them. For more information, see [AUTOTITLE](/copilot/customizing-copilot/customizing-the-development-environment-for-copilot-coding-agent).

## Customizing the built-in {% data variables.product.github %} MCP server

The {% data variables.product.github %} MCP server is enabled by default and connects to {% data variables.product.github %} with a specially scoped token that only has read-only access to the current repository.

If you want to allow {% data variables.product.prodname_copilot_short %} to access data outside the current repository, you can give it a {% data variables.product.pat_generic %} with wider access.

1. Create a {% data variables.product.pat_generic %} with the appropriate permissions. We recommend using a {% data variables.product.pat_v2 %}, where you can limit the token's access to read-only permissions on specific repositories. For more information on {% data variables.product.pat_generic_plural %}, see [AUTOTITLE](/authentication/keeping-your-account-and-data-secure/managing-your-personal-access-tokens).
{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
1. In the "Code & automation" section of the sidebar, click **{% data variables.product.prodname_copilot_short %}** then **{% data variables.copilot.copilot_coding_agent_short_cap_c %}**.
1. Add your configuration in the **MCP configuration** section. For example, you can add the following:

   ```javascript copy
    // If you copy and paste this example, you will need to remove the comments prefixed with `//`, which are not valid JSON.
    {
      "mcpServers": {
        "github-mcp-server": {
          "type": "http",
          // Remove "/readonly" to enable wider access to all tools.
          // Then, use the "X-MCP-Toolsets" header to specify which toolsets you'd like to include.
          // Use the "tools" field to select individual tools from the toolsets.
          "url": "https://api.githubcopilot.com/mcp/readonly",
          "tools": ["*"],
          "headers": {
            "X-MCP-Toolsets": "repos,issues,users,pull_requests,code_security,secret_protection,actions,web_search"
          }
        }
      }
    }
   ```

   For more information on toolsets, refer to the [README](https://github.com/github/github-mcp-server?tab=readme-ov-file#available-toolsets) in the {% data variables.product.github %} Remote MCP Server documentation.

1. Click **Save**.
{% data reusables.actions.sidebar-environment %}
1. Click the `copilot` environment.
1. Under "Environment secrets", click **Add environment secret**.
1. Call the secret `COPILOT_MCP_GITHUB_PERSONAL_ACCESS_TOKEN`, enter your {% data variables.product.pat_generic %} in the "Value" field, then click **Add secret**.

For information on using the {% data variables.product.github %} MCP server in other environments, see [AUTOTITLE](/copilot/customizing-copilot/using-model-context-protocol/using-the-github-mcp-server).

## Next steps

* [AUTOTITLE](/copilot/how-tos/use-copilot-agents/coding-agent/create-custom-agents)
* [AUTOTITLE](/copilot/customizing-copilot/customizing-the-development-environment-for-copilot-coding-agent)
* [AUTOTITLE](/copilot/customizing-copilot/extending-copilot-chat-with-mcp)
