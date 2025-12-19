---
title: Setting up the GitHub MCP Server
intro: 'Learn how to configure the GitHub Model Context Protocol (MCP) server.'
shortTitle: Set up the GitHub MCP Server
versions:
  feature: copilot
defaultTool: vscode
topics:
  - Copilot
redirect_from:
  - /copilot/how-tos/use-copilot-extensions/build-a-copilot-agent/communicate-with-copilot-platform
  - /copilot/how-tos/use-copilot-extensions/build-a-copilot-agent/communicate-with-github
  - /copilot/how-tos/use-copilot-extensions/create-a-copilot-extension/configure-app-for-extension
  - /copilot/how-tos/use-copilot-extensions/create-a-copilot-extension/host-your-extension
  - /copilot/how-tos/use-copilot-extensions/set-up-copilot-extensions
  - /copilot/how-tos/provide-context/install-copilot-extensions/install-extensions
  - /copilot/how-tos/provide-context/install-copilot-extensions/install-personal-extensions
contentType: how-tos
category: 
  - Integrate Copilot with your tools
---

The {% data variables.product.github %} MCP server is available to all {% data variables.product.github %} users regardless of plan type. However, specific tools within the MCP server inherit the same access requirements as their corresponding {% data variables.product.github %} features. If a feature requires a paid {% data variables.product.github %} or {% data variables.product.prodname_copilot_short %} license, the equivalent MCP tool will require the same subscription. For example, tools that interact with {% data variables.product.prodname_copilot_short %} Coding Agent require a paid {% data variables.product.prodname_copilot_short %} license.

For the latest information and updates, see the [{% data variables.product.github %} MCP server repository](https://github.com/github/github-mcp-server).

{% vscode %}

{% data reusables.copilot.mcp.about-github-mcp-server %}

## Prerequisites

* A {% data variables.product.github %} account.
* {% data variables.product.prodname_vscode %}.
* {% data reusables.copilot.mcp-policy-requirement %}

## Setting up the {% data variables.product.github %} MCP server in {% data variables.product.prodname_vscode %}

The {% data variables.product.github %} MCP server in {% data variables.product.prodname_vscode %} can be configured remotely or locally. The remote {% data variables.product.github %} MCP server is hosted by {% data variables.product.github %} and is the recommended option for most users. The local {% data variables.product.github %} MCP server is hosted on your machine and is recommended for users who want to customize their setup or have specific security requirements.

The steps below describe remote configuration through the MCP marketplace in {% data variables.product.prodname_vscode %}'s extension panel. The MCP marketplace is powered by the {% data variables.product.github %} MCP Registry. See [MCP Registry](https://github.com/mcp).

For information on manually configuring the remote or local {% data variables.product.github %} MCP server, see the [{% data variables.product.github %} MCP server documentation](https://github.com/mcp/io.github.github/github-mcp-server?ref_product=copilot&ref_type=engagement&ref_style=text).

1. In {% data variables.product.prodname_vscode %}, open the extensions panel by clicking the extensions icon in the sidebar or pressing <kbd>Ctrl</kbd>+<kbd>Shift</kbd>+<kbd>X</kbd> (Windows/Linux) / <kbd>Command</kbd>+<kbd>Shift</kbd>+<kbd>X</kbd> (Mac).
1. In the extensions search bar, click the filter icon and select **MCP Server** from the dropdown.
1. If it is your first time using the MCP Servers Marketplace, follow the prompts on screen to enable the Marketplace.
1. In the search bar, type `github` and select the {% data variables.product.github %} MCP server from the search results.
1. On the {% data variables.product.github %} MCP server configuration page, click **Install**.
1. To check that the {% data variables.product.github %} MCP server is configured correctly, open the command palette by pressing <kbd>Ctrl</kbd>+<kbd>Shift</kbd>+<kbd>P</kbd> (Windows/Linux) / <kbd>Command</kbd>+<kbd>Shift</kbd>+<kbd>P</kbd> (Mac).
1. Type and select **MCP: List Servers**. You should see `github` listed as a configured server.

{% endvscode %}

{% visualstudio %}

{% data reusables.copilot.mcp.about-github-mcp-server %}

## Prerequisites

* **Access to {% data variables.product.prodname_copilot_short %}**. {% data reusables.copilot.subscription-prerequisite %}
* **{% data variables.product.prodname_vs %} version 17.14 or later**. For more information on installing {% data variables.product.prodname_vs %}, see the [{% data variables.product.prodname_vs %} downloads page](https://visualstudio.microsoft.com/downloads/).
* **Sign in to {% data variables.product.company_short %} from {% data variables.product.prodname_vs %}**.
* {% data reusables.copilot.mcp-policy-requirement %}

## Setting up the {% data variables.product.github %} MCP server in {% data variables.product.prodname_vs %}

The instructions below guide you through setting up the {% data variables.product.github %} MCP server in {% data variables.product.prodname_vs %}. Other MCP-compatible editors may have similar steps, but the exact process may vary.

The remote {% data variables.product.github %} MCP server uses one-click OAuth authentication by default, but you can also manually configure it to use a {% data variables.product.pat_generic %} (PAT) for authentication. If you use OAuth, the MCP server can only access the scopes you approve during sign-in. In organization-owned contexts, access may also be limited by admin policies that control which scopes and apps are permitted. If you use a PAT, the MCP server will have access to the scopes granted by the PAT, which is also subject to any PAT restrictions configured by the organization.

> [!NOTE]
> If you are an {% data variables.product.prodname_emu %}, then PAT is disabled by default, unless enabled by an enterprise administrator. If PAT is disabled, you won't be able to use PAT authentication. If you have OAuth access policy restrictions, you will need the OAuth App for each client (MCP host application) to be enabled (except {% data variables.product.prodname_vscode %} and {% data variables.product.prodname_vs %}).

For information on setting up the {% data variables.product.github %} MCP server locally, see the [GitHub MCP server documentation](https://github.com/mcp/io.github.github/github-mcp-server?ref_product=copilot&ref_type=engagement&ref_style=text).

### Remote MCP server configuration with OAuth

You do not need to create a PAT or install any additional software to use the remote {% data variables.product.github %} MCP server with OAuth. You can set it up directly in {% data variables.product.prodname_vs %}.

1. In the {% data variables.product.prodname_vs %} menu bar, click **View**, then click **{% data variables.copilot.copilot_chat %}**.
1. At the bottom of the chat panel, select **Agent** from the mode dropdown.
1. In the {% data variables.copilot.copilot_chat_short %} window, click the tools icon, then click the plus icon in the tool picker window.
1. In the "Configure MCP server" pop-up window, fill out the fields.
    1. For "Server ID", type `github`.
    1. For "Type", select "HTTP/SSE" from the dropdown.
    1. For "URL", type `https://api.githubcopilot.com/mcp/`.
1. Click **Save**. The configuration in the `mcp.json` file should look like this:

      ```json copy
          {
            "servers": {
              "github": {
                "url": "https://api.githubcopilot.com/mcp/"
              }
            }
          }
      ```

1. In the `mcp.json` file, click **Auth** from the CodeLens above the server to authenticate to the server. A pop-up will come up allowing you to authenticate with your {% data variables.product.github %} account.

### Remote MCP server configuration with PAT

To configure the remote {% data variables.product.github %} MCP server with a PAT, ensure you have created a PAT with the necessary scopes for the access you want to grant to the MCP server. For more information, see [AUTOTITLE](/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token).

1. In the {% data variables.product.prodname_vs %} menu bar, click **View**, then click **{% data variables.copilot.copilot_chat %}**.
1. At the bottom of the chat panel, select **Agent** from the mode dropdown.
1. In the {% data variables.copilot.copilot_chat_short %} window, click the tools icon, then click the plus icon in the tool picker window.
1. In the "Configure MCP server" pop-up window, fill out the fields.
    1. For "Server ID", type `github`.
    1. For "Type", select "HTTP/SSE" from the dropdown.
    1. For "URL", type `https://api.githubcopilot.com/mcp/`.
    1. Add a new header under "Headers", called "Authorization" and set to the value `Bearer YOUR_GITHUB_PAT`, replacing "YOUR_GITHUB_PAT" with your PAT.
1. Click **Save**. The configuration in the `mcp.json` file should look like this:

    ```json copy
      {
        "servers": {
            "github": {
                "url": "https://api.githubcopilot.com/mcp/",
                "requestInit": {
                    "headers": {
                        "Authorization": "Bearer YOUR_GITHUB_PAT"
                    }
                }
            }
        }
      }
    ```

For more information on configuring MCP servers in {% data variables.product.prodname_vs %}, see [Use MCP servers in {% data variables.product.prodname_vs %} (Preview)](https://learn.microsoft.com/en-us/visualstudio/ide/mcp-servers?view=vs-2022) in the {% data variables.product.prodname_vs %} documentation.

{% endvisualstudio %}

{% jetbrains %}

{% data reusables.copilot.mcp.about-github-mcp-server %}

## Prerequisites

* **Access to {% data variables.product.prodname_copilot_short %}**. {% data reusables.copilot.subscription-prerequisite %}
* **A compatible JetBrains IDE**. {% data variables.product.prodname_copilot %} is compatible with the following IDEs:

  {% data reusables.copilot.jetbrains-compatible-ides %}
{% data reusables.copilot.jetbrains-plugin-prerequisites %}
* {% data reusables.copilot.mcp-policy-requirement %}

## Setting up the {% data variables.product.github %} MCP server in JetBrains IDEs

The instructions below guide you through setting up the {% data variables.product.github %} MCP server in JetBrains IDEs. Other MCP-compatible editors may have similar steps, but the exact process may vary.

The remote {% data variables.product.github %} MCP server uses one-click OAuth authentication by default, but you can also manually configure it to use a {% data variables.product.pat_generic %} (PAT) for authentication. If you use OAuth, the MCP server can only access the scopes you approve during sign-in. In organization-owned contexts, access may also be limited by admin policies that control which scopes and apps are permitted. If you use a PAT, the MCP server will have access to the scopes granted by the PAT, which is also subject to any PAT restrictions configured by the organization.

> [!NOTE]
> If you are an {% data variables.product.prodname_emu %}, then PAT is disabled by default, unless enabled by an enterprise administrator. If PAT is disabled, you won't be able to use PAT authentication. If you have OAuth access policy restrictions, you will need the OAuth App for each client (MCP host application) to be enabled (except {% data variables.product.prodname_vscode %} and {% data variables.product.prodname_vs %}).

For information on setting up the {% data variables.product.github %} MCP server locally, see the [GitHub MCP server documentation](https://github.com/mcp/io.github.github/github-mcp-server?ref_product=copilot&ref_type=engagement&ref_style=text).

### Remote MCP server configuration with OAuth

You do not need to create a PAT or install any additional software to use the remote {% data variables.product.github %} MCP server with OAuth. You can set it up directly in JetBrains IDEs.

{% data reusables.copilot.jetbrains-mcp-setup-steps %}
1. In the `mcp.json` file, add the following configuration:

    {% data reusables.copilot.github-mcp-oauth-config-other-ides %}

1. In the "{% data variables.product.prodname_copilot %}" popup that says the "MCP server definition wants to authenticate to {% data variables.product.github %}, click **Allow**.
1. If you have not yet authorized the {% data variables.product.prodname_copilot %} plugin, in the browser popup, click **Continue** next to your personal account.

### Remote MCP server configuration with PAT

To configure the remote {% data variables.product.github %} MCP server with a PAT, ensure you have created a PAT with the necessary scopes for the access you want to grant to the MCP server. For more information, see [AUTOTITLE](/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token).

{% data reusables.copilot.jetbrains-mcp-setup-steps %}
1. In the `mcp.json` file, add the following configuration, replacing `YOUR_GITHUB_PAT` with the PAT you created:

  ```json copy
    {
      "servers": {
          "github": {
              "url": "https://api.githubcopilot.com/mcp/",
              "requestInit": {
                  "headers": {
                      "Authorization": "Bearer YOUR_GITHUB_PAT"
                  }
              }
          }
      }
    }
  ```

{% endjetbrains %}

{% xcode %}

{% data reusables.copilot.mcp.about-github-mcp-server %}

## Prerequisites

* **Access to {% data variables.product.prodname_copilot_short %}**. {% data reusables.copilot.subscription-prerequisite %}
* **{% data variables.product.prodname_copilot %} for Xcode extension**. See [AUTOTITLE](/copilot/configuring-github-copilot/installing-the-github-copilot-extension-in-your-environment).
* {% data reusables.copilot.mcp-policy-requirement %}

## Setting up the {% data variables.product.github %} MCP server in Xcode

The instructions below guide you through setting up the {% data variables.product.github %} MCP server in Xcode. Other MCP-compatible editors may have similar steps, but the exact process may vary.

The remote {% data variables.product.github %} MCP server uses one-click OAuth authentication by default, but you can also manually configure it to use a {% data variables.product.pat_generic %} (PAT) for authentication. If you use OAuth, the MCP server can only access the scopes you approve during sign-in. In organization-owned contexts, access may also be limited by admin policies that control which scopes and apps are permitted. If you use a PAT, the MCP server will have access to the scopes granted by the PAT, which is also subject to any PAT restrictions configured by the organization.

> [!NOTE]
> If you are an {% data variables.product.prodname_emu %}, then PAT is disabled by default, unless enabled by an enterprise administrator. If PAT is disabled, you won't be able to use PAT authentication. If you have OAuth access policy restrictions, you will need the OAuth App for each client (MCP host application) to be enabled (except {% data variables.product.prodname_vscode %} and {% data variables.product.prodname_vs %}).

For information on setting up the {% data variables.product.github %} MCP server locally, see the [GitHub MCP server documentation](https://github.com/mcp/io.github.github/github-mcp-server?ref_product=copilot&ref_type=engagement&ref_style=text).

### Remote MCP server configuration with OAuth

You do not need to create a PAT or install any additional software to use the remote {% data variables.product.github %} MCP server with OAuth. You can set it up directly in Xcode.

{% data reusables.copilot.xcode-mcp-setup-steps %}
1. Add the following configuration:

    {% data reusables.copilot.github-mcp-oauth-config-other-ides %}

1. In the "{% data variables.product.prodname_copilot %}" popup that says the "MCP Server Definition wants to authenticate to {% data variables.product.github %}", click **Continue**.
1. If you have not yet authorized the {% data variables.product.prodname_copilot %} plugin, in the browser popup, click **Continue** next to your personal account.

### Remote MCP server configuration with PAT

To configure the remote {% data variables.product.github %} MCP server with a PAT, ensure you have created a PAT with the necessary scopes for the access you want to grant to the MCP server. For more information, see [AUTOTITLE](/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token).

{% data reusables.copilot.xcode-mcp-setup-steps %}
1. Add the following configuration, replacing `YOUR_GITHUB_PAT` with the PAT you created:

```json copy
  {
    "servers": {
        "github": {
            "url": "https://api.githubcopilot.com/mcp/",
            "requestInit": {
                "headers": {
                    "Authorization": "Bearer YOUR_GITHUB_PAT"
                }
            }
        }
    }
  }
```

{% endxcode %}

{% eclipse %}

{% data reusables.copilot.mcp.about-github-mcp-server %}

## Prerequisites

{% data reusables.copilot.eclipse-prerequisites %}
* **Latest version of the {% data variables.product.prodname_copilot %} extension**. Download this from the [Eclipse Marketplace](https://aka.ms/copiloteclipse?ref_product=copilot&ref_type=engagement&ref_style=text). For more information, see [AUTOTITLE](/copilot/managing-copilot/configure-personal-settings/installing-the-github-copilot-extension-in-your-environment?tool=eclipse).
* **Sign in to {% data variables.product.company_short %} from Eclipse**.

## Setting up the {% data variables.product.github %} MCP server in Eclipse

The instructions below guide you through setting up the {% data variables.product.github %} MCP server in Eclipse. Other MCP-compatible editors may have similar steps, but the exact process may vary.

The remote {% data variables.product.github %} MCP server uses one-click OAuth authentication by default, but you can also manually configure it to use a {% data variables.product.pat_generic %} (PAT) for authentication. If you use OAuth, the MCP server can only access the scopes you approve during sign-in. In organization-owned contexts, access may also be limited by admin policies that control which scopes and apps are permitted. If you use a PAT, the MCP server will have access to the scopes granted by the PAT, which is also subject to any PAT restrictions configured by the organization.

> [!NOTE]
> If you are an {% data variables.product.prodname_emu %}, then PAT is disabled by default, unless enabled by an enterprise administrator. If PAT is disabled, you won't be able to use PAT authentication. If you have OAuth access policy restrictions, you will need the OAuth App for each client (MCP host application) to be enabled (except {% data variables.product.prodname_vscode %} and {% data variables.product.prodname_vs %}).

For information on setting up the {% data variables.product.github %} MCP server locally, see the [GitHub MCP server repository](https://github.com/github/github-mcp-server#usage-in-other-mcp-hosts-1).

### Remote MCP server configuration with OAuth

You do not need to create a PAT or install any additional software to use the remote {% data variables.product.github %} MCP server with OAuth. You can set it up directly in Eclipse.

{% data reusables.copilot.eclipse-mcp-setup-steps %}
1. Add the following configuration under "Server Configurations":

    {% data reusables.copilot.github-mcp-oauth-config-other-ides %}

1. Click **Apply**.
1. In the "{% data variables.product.prodname_copilot %}" popup that says the "MCP Server Definition wants to authenticate to {% data variables.product.github %}", click **OK**.
1. If you have not yet authorized the {% data variables.product.prodname_copilot %} plugin, in the browser popup, click **Continue** next to your personal account.

### Remote MCP server configuration with PAT

To configure the remote {% data variables.product.github %} MCP server with a PAT, ensure you have created a PAT with the necessary scopes for the access you want to grant to the MCP server. For more information, see [AUTOTITLE](/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token).

{% data reusables.copilot.eclipse-mcp-setup-steps %}
1. Add the following configuration under "Server Configurations", replacing `YOUR_GITHUB_PAT` with the PAT you created:

  ```json copy
    {
      "servers": {
          "github": {
              "url": "https://api.githubcopilot.com/mcp/",
              "requestInit": {
                  "headers": {
                      "Authorization": "Bearer YOUR_GITHUB_PAT"
                  }
              }
          }
      }
    }
  ```

{% endeclipse %}

## Enterprise configuration

If you are using {% data variables.product.prodname_ghe_server %} or {% data variables.product.prodname_ghe_cloud %} with data residency, additional configuration is required. For more information, see [AUTOTITLE](/copilot/how-tos/provide-context/use-mcp/enterprise-configuration).

## Next steps

* To learn how to use the {% data variables.product.github %} MCP server in {% data variables.product.prodname_vscode %}, see [AUTOTITLE](/copilot/how-tos/provide-context/use-mcp/use-the-github-mcp-server).
* For information on configuring individual toolsets with read-only or read/write access, see [AUTOTITLE](/copilot/how-tos/provide-context/use-mcp/configure-toolsets).
