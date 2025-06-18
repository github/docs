---
title: Extending Copilot coding agent with the Model Context Protocol (MCP)
shortTitle: Extend coding agent with MCP
allowTitleToDifferFromFilename: true
intro: "Learn how to use the Model Context Protocol (MCP) to extend the capabilities of {% data variables.copilot.copilot_coding_agent %}."
versions:
  feature: copilot
topics:
  - Copilot
type: how_to
redirect_from:
  - /copilot/customizing-copilot/using-model-context-protocol/extending-copilot-coding-agent-with-mcp
  - /copilot/customizing-copilot/extending-copilot-coding-agent-with-mcp
  - /early-access/copilot/coding-agent/extending-copilot-coding-agent-with-model-context-protocol
---

> [!NOTE]
> {% data reusables.copilot.coding-agent.preview-note-text %}
>
> For more information about {% data variables.copilot.copilot_coding_agent %}, see [AUTOTITLE](/copilot/using-github-copilot/coding-agent/about-assigning-tasks-to-copilot).

{% data reusables.copilot.coding-agent.mcp-brief-intro %}

The agent can use tools provided by local MCP servers. For example, the [Playwright MCP server](https://github.com/microsoft/playwright-mcp) provides tools to interact with web pages and pull in additional context when executing on the requested task.

For more information on MCP, see [the official MCP documentation](https://modelcontextprotocol.io/introduction). For information on some of the currently available MCP servers, see [the MCP servers repository](https://github.com/modelcontextprotocol/servers/tree/main).

> [!NOTE]
> * {% data variables.copilot.copilot_coding_agent %} only supports tools provided by MCP servers. It does not support resources or prompts.
> * {% data variables.copilot.copilot_coding_agent %} currently only supports local MCP servers. To learn more about transport types, see the [official MCP documentation](https://modelcontextprotocol.io/docs/concepts/transports).

## Staying safe with MCP servers

Once you've configured an MCP server, {% data variables.product.prodname_copilot_short %} will be able to use the tools provided by the server autonomously, and will not ask for your approval before using them.

We recommend that you restrict your servers to read-only tools. You can use the `tools` configuration option to only expose known, safe tools to {% data variables.product.prodname_copilot_short %}.

## About setting up MCP servers in a repository

As a repository administrator, you can configure MCP servers for use within your repository. This is done via a JSON-formatted configuration that specifies the details of the MCP servers you want to use. You enter the JSON configuration directly into the settings for the repository on {% data variables.product.prodname_dotcom_the_website %}.

Once MCP servers are configured for use within a repository, the tools specified in the configuration will be available to {% data variables.copilot.copilot_coding_agent %} on each assigned task.

### Creating your JSON MCP configuration

You configure MCP servers using a special JSON format. The JSON must contain an `mcpServers` object, where the key is the name of the MCP server (for example, `playwright`), and the value is an object with the configuration for that MCP server.

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

* `command` (`string`): The command to run to start the MCP server.
* `args` (`string[]`): The arguments to pass to the `command`.
* `tools` (`string[]`): The tools from the MCP server to enable. You may be able to find a list of tools in the server's documentation, or in its code. We recommend that you allowlist specific tools, but you can also enable all tools by including `*` in the array.
* `type` (`string`): Optional field. {% data variables.copilot.copilot_coding_agent %} only accepts `"local"`.
* `env` (`object`): The environment variables to pass to the server. This object should map the name of the environment variable that should be exposed to your MCP server to either of the following:
  * The name of a {% data variables.product.prodname_actions %} secret you have configured, beginning with `COPILOT_MCP_`.
  * A string value.

## Example configurations

### Example: Playwright

The [Playwright MCP server](https://github.com/microsoft/playwright-mcp) provides tools which allow {% data variables.product.prodname_copilot_short %} to browse the internet.

```json copy
{
  "mcpServers": {
    "playwright": {
      "command": "docker",
      "args": ["run", "-i", "--rm", "--init", "mcp/playwright"],
      "tools": ["*"]
    }
  }
}
```

### Example: Sentry

The [Sentry MCP server](https://github.com/getsentry/sentry-mcp) gives {% data variables.product.prodname_copilot_short %} authenticated access to exceptions recorded in [Sentry](https://sentry.io).

```javascript copy
// If you copy and paste this example, you will need to remove the comments prefixed with `//`, which are not valid JSON.
{
  "mcpServers": {
    "sentry": {
      "command": "npx",
      // We can use the $SENTRY_HOST environment variable which is passed to
      // the server because of the `env` value below.
      "args": ["@sentry/mcp-server@latest", "--host=$SENTRY_HOST"],
      "tools": ["get_issue_details", "get_issue_summary"],
      "env": {
        // We can specify an environment variable value as a string...
        "SENTRY_HOST": "https://contoso.sentry.io",
        // or refer to a {% data variables.product.prodname_actions %} secret with a name starting with
        // `COPILOT_MCP_`
        "SENTRY_AUTH_TOKEN": "COPILOT_MCP_SENTRY_AUTH_TOKEN"
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

The [Azure MCP server](https://github.com/Azure/azure-mcp) creates a seamless connection between {% data variables.product.prodname_copilot_short %} and key Azure services such as Azure Cosmos DB and the Azure Storage platform.

To use the Azure MCP with {% data variables.copilot.copilot_coding_agent %}, you must update the repository's `copilot-setup-steps.yml` file to include an Azure login workflow step.

1. Configure OIDC in a Microsoft Entra application, trusting {% data variables.product.github %}. See [Use the Azure Login action with OpenID Connect](https://learn.microsoft.com/en-us/azure/developer/github/connect-from-azure-openid-connect).
1. Add a `.github/workflows/copilot-setup-steps.yml` Actions workflow file in your repository if you do not already have one.
1. Add an Azure login step to the `copilot-setup-steps` workflow job.

   ```yaml copy
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
       environment: Copilot
       steps:
         - name: Azure login
           uses: azure/login@a1b2c3d4e5f6a7b8c9d0e1f2a3b4c5d6e7f8a9b0
           with:
             client-id: ${{ secrets.AZURE_CLIENT_ID }}
             tenant-id: ${{ secrets.AZURE_TENANT_ID }}
             subscription-id: ${{ secrets.AZURE_SUBSCRIPTION_ID }}
   ```

   This configuration ensures the `azure/login` action is executed when {% data variables.copilot.copilot_coding_agent %} runs.

1. In your repository’s {% data variables.product.prodname_copilot_short %} environment, add secrets for your `AZURE_CLIENT_ID`, `AZURE_TENANT_ID` and `AZURE_SUBSCRIPTION_ID`.
1. Configure the Azure MCP server by adding an `azure` object to your MCP configuration.

   ```json copy
   {
     "mcpServers": {
       "Azure MCP Server": {
         "command": "npx",
         "args": [
           "-y",
           "@azure/mcp@latest",
           "server",
           "start"
         ]
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

## Adding your configuration to your repository

Repository administrators can configure MCP servers by following these steps:

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
1. In the "Code & automation" section of the sidebar, click **{% data variables.product.prodname_copilot_short %}** then **{% data variables.copilot.copilot_agent_short %}**.
1. Add your configuration in the **MCP configuration** section.
1. Click **Save**.

   Your configuration will be validated to ensure proper syntax.

1. If your MCP server requires a key or secret, add a secret to your {% data variables.product.prodname_copilot_short %} environment. Only secrets with names prefixed with `COPILOT_MCP_` will be available to your MCP configuration. See [Setting up a {% data variables.product.prodname_copilot_short %} environment for {% data variables.copilot.copilot_coding_agent %}](#setting-up-a-copilot-environment-for-copilot-coding-agent).

### Setting up a {% data variables.product.prodname_copilot_short %} environment for {% data variables.copilot.copilot_coding_agent %}

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

The {% data variables.product.github %} MCP server is enabled by default, giving {% data variables.product.prodname_copilot_short %} access to {% data variables.product.github %} data like issues and pull requests.

By default, the MCP server connects to {% data variables.product.github %} with a specially scoped token that only has read-only access to the current repository.

If you want to allow {% data variables.product.prodname_copilot_short %} to access data outside the current repository, you can give it a {% data variables.product.pat_generic %} with wider access.

1. Create a {% data variables.product.pat_generic %} with the appropriate permissions. We recommend using a {% data variables.product.pat_v2 %}, where you can limit the token's access to read-only permissions on specific repositories. For more information on {% data variables.product.pat_generic_plural %}, see [AUTOTITLE](/authentication/keeping-your-account-and-data-secure/managing-your-personal-access-tokens).
{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
1. In the "Code & automation" section of the sidebar, click **{% data variables.product.prodname_copilot_short %}** then **{% data variables.copilot.copilot_agent_short %}**.
1. Add your configuration in the **MCP configuration** section.
1. Click **Save**.
{% data reusables.actions.sidebar-environment %}
1. Click the `copilot` environment.
1. Under "Environment secrets", click **Add environment secret**.
1. Call the secret `COPILOT_MCP_GITHUB_PERSONAL_ACCESS_TOKEN`, enter your {% data variables.product.pat_generic %} in the "Value" field, then click **Add secret**.

For information on using the {% data variables.product.github %} MCP server in other environments, see [AUTOTITLE](/copilot/customizing-copilot/using-model-context-protocol/using-the-github-mcp-server).

## Best practices

* Enabling third-party MCP servers for use may impact the performance of the agent and the quality of the outputs. Review the third-party MCP server thoroughly and ensure that it meets your organization’s requirements.

* By default, {% data variables.copilot.copilot_coding_agent %} does not have access to write MCP server tools. However, some MCP servers do contain such tools. Be sure to review the tools available in the MCP server you want to use. Update the `tools` field in the MCP configuration with only the necessary tooling.

* Carefully review the configured MCP servers prior to saving the configuration to ensure the correct servers are configured for use.

## Further reading

* [AUTOTITLE](/copilot/customizing-copilot/customizing-the-development-environment-for-copilot-coding-agent)
* [AUTOTITLE](/copilot/customizing-copilot/extending-copilot-chat-with-mcp)
