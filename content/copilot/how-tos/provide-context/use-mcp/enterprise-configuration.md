---
title: Configuring the GitHub MCP Server for GitHub Enterprise
intro: 'Learn how to configure the GitHub Model Context Protocol (MCP) server to work with {% data variables.product.prodname_ghe_server %} or {% data variables.enterprise.data_residency %}.'
shortTitle: Enterprise configuration
versions:
  feature: copilot
defaultTool: vscode
topics:
  - Copilot
contentType: how-tos
category:
  - Configure Copilot
---

The {% data variables.product.github %} MCP server can be configured to work with {% data variables.product.prodname_ghe_server %} and {% data variables.enterprise.data_residency %}. The configuration steps differ depending on whether you are using the remote or local MCP server.

## About enterprise MCP server configuration

The {% data variables.product.github %} MCP server supports two enterprise deployment types:

* **[{% data variables.enterprise.data_residency %}](#configuring-the-remote-mcp-server-for-github-enterprise-cloud-with-data-residency)**: Supports both remote and local MCP server configurations
* **[{% data variables.product.prodname_ghe_server %}](#configuring-the-local-mcp-server-for-enterprise)**: Supports **only local MCP server configuration**

> [!IMPORTANT]
> {% data variables.product.prodname_ghe_server %} does **not** support remote MCP server hosting. If you are using {% data variables.product.prodname_ghe_server %}, you **must** use the local MCP server configuration described in [Configuring the local MCP server for enterprise](#configuring-the-local-mcp-server-for-enterprise). Skip the remote MCP server configuration section below.

## Prerequisites

* A {% data variables.product.prodname_ghe_server %} instance or {% data variables.product.prodname_ghe_cloud %} account with {% data variables.enterprise.data_residency_short %}
* The {% data variables.product.github %} MCP server configured in your editor. See [AUTOTITLE](/copilot/how-tos/provide-context/use-mcp/set-up-the-github-mcp-server).

## Configuring the remote MCP server for {% data variables.enterprise.data_residency %}

> [!NOTE]
> This section applies **only** to {% data variables.enterprise.data_residency %}. If you are using {% data variables.product.prodname_ghe_server %}, skip to [Configuring the local MCP server for enterprise](#configuring-the-local-mcp-server-for-enterprise).

{% vscode %}

{% data variables.enterprise.data_residency %} can use the remote MCP server. To configure it, you need to update the MCP server URL to point to your {% data variables.product.prodname_ghe_cloud %} instance.

For example, if your {% data variables.product.prodname_ghe_cloud %} instance is `https://octocorp.ghe.com`, the MCP server URL would be `https://copilot-api.octocorp.ghe.com/mcp`.

1. In {% data variables.product.prodname_vscode %}, open the command palette by pressing <kbd>Ctrl</kbd>+<kbd>Shift</kbd>+<kbd>P</kbd> (Windows/Linux) / <kbd>Command</kbd>+<kbd>Shift</kbd>+<kbd>P</kbd> (Mac).
1. Type and select **MCP: Open User Configuration**.
1. In the settings file, locate the `servers` section. If you have already configured the {% data variables.product.github %} MCP server, you will see a `github` entry.
1. Update the `url` field to point to your {% data variables.product.prodname_ghe_cloud %} instance.

   **Option A: With PAT authentication**

   ```json copy
   {
     "servers": {
       "github": {
         "type": "http",
         "url": "https://copilot-api.{% data variables.enterprise.data_residency_domain %}/mcp",
         "headers": {
           "Authorization": "Bearer ${input:github_mcp_pat}"
         }
       }
     },
     "inputs": [
       {
         "type": "promptString",
         "id": "github_mcp_pat",
         "description": "GitHub PAT",
         "password": true
       }
     ]
   }
   ```

   **Option B: With OAuth authentication**

   ```json copy
   {
     "servers": {
       "github": {
         "type": "http",
         "url": "https://copilot-api.{% data variables.enterprise.data_residency_domain %}/mcp"
       }
     }
   }
   ```

   Replace `{% data variables.enterprise.data_residency_domain %}` with your {% data variables.enterprise.data_residency_site %} subdomain.

1. Save the file.
1. When using OAuth with {% data variables.enterprise.data_residency %}, configure your {% data variables.product.prodname_vscode_shortname %} settings to point to your {% data variables.product.prodname_ghe_cloud %} instance. Add the following to your [{% data variables.product.prodname_vscode_shortname %} user settings](https://code.visualstudio.com/docs/configure/settings#_user-settings):

    ```json
    {
      "github-enterprise.uri": "https://copilot-api.{% data variables.enterprise.data_residency_domain %}/mcp"
    }
    ```

1. Restart {% data variables.product.prodname_vscode %} or reload the window for the changes to take effect.

{% endvscode %}

{% visualstudio %}

{% data variables.product.prodname_ghe_cloud %} with data residency can use the remote MCP server. To configure it, you need to update the MCP server URL to point to your {% data variables.product.prodname_ghe_cloud %} instance.

For example, if your {% data variables.product.prodname_ghe_cloud %} instance is `https://octocorp.ghe.com`, the MCP server URL would be `https://copilot-api.octocorp.ghe.com/mcp`.

1. In the {% data variables.product.prodname_vs %} menu bar, click **View**, then click **{% data variables.copilot.copilot_chat %}**.
1. At the bottom of the chat panel, select **Agent** from the mode dropdown.
1. In the {% data variables.copilot.copilot_chat_short %} window, click the tools icon, then click the plus icon in the tool picker window.
1. In the "Configure MCP server" pop-up window, fill out the fields.
    1. For "Server ID", type `github`.
    1. For "Type", select "HTTP/SSE" from the dropdown.
    1. For "URL", type `https://copilot-api.YOURSUBDOMAIN.ghe.com/mcp`, replacing `YOURSUBDOMAIN` with your {% data variables.product.prodname_ghe_cloud %} subdomain.
    1. Add a new header under "Headers", called "Authorization" and set to the value `Bearer YOUR_GITHUB_PAT`, replacing "YOUR_GITHUB_PAT" with your {% data variables.product.pat_generic %}.
1. Click **Save**.

{% endvisualstudio %}

{% jetbrains %}

{% data variables.product.prodname_ghe_cloud %} with data residency can use the remote MCP server. To configure it, you need to update the MCP server URL to point to your {% data variables.product.prodname_ghe_cloud %} instance.

For example, if your {% data variables.product.prodname_ghe_cloud %} instance is `https://octocorp.ghe.com`, the MCP server URL would be `https://copilot-api.octocorp.ghe.com/mcp`.

{% data reusables.copilot.jetbrains-mcp-setup-steps %}
1. In the `mcp.json` file, add the following configuration, replacing `YOURSUBDOMAIN` with your {% data variables.product.prodname_ghe_cloud %} subdomain and `YOUR_GITHUB_PAT` with your {% data variables.product.pat_generic %}:

   ```json copy
   {
     "servers": {
       "github": {
         "url": "https://copilot-api.YOURSUBDOMAIN.ghe.com/mcp",
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

{% data variables.product.prodname_ghe_cloud %} with data residency can use the remote MCP server. To configure it, you need to update the MCP server URL to point to your {% data variables.product.prodname_ghe_cloud %} instance.

For example, if your {% data variables.product.prodname_ghe_cloud %} instance is `https://octocorp.ghe.com`, the MCP server URL would be `https://copilot-api.octocorp.ghe.com/mcp`.

{% data reusables.copilot.xcode-mcp-setup-steps %}
1. Add the following configuration, replacing `YOURSUBDOMAIN` with your {% data variables.product.prodname_ghe_cloud %} subdomain and `YOUR_GITHUB_PAT` with your {% data variables.product.pat_generic %}:

   ```json copy
   {
     "servers": {
       "github": {
         "url": "https://copilot-api.YOURSUBDOMAIN.ghe.com/mcp",
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

{% data variables.product.prodname_ghe_cloud %} with data residency can use the remote MCP server. To configure it, you need to update the MCP server URL to point to your {% data variables.product.prodname_ghe_cloud %} instance.

For example, if your {% data variables.product.prodname_ghe_cloud %} instance is `https://octocorp.ghe.com`, the MCP server URL would be `https://copilot-api.octocorp.ghe.com/mcp`.

{% data reusables.copilot.eclipse-mcp-setup-steps %}
1. Add the following configuration under "Server Configurations", replacing `YOURSUBDOMAIN` with your {% data variables.product.prodname_ghe_cloud %} subdomain and `YOUR_GITHUB_PAT` with your {% data variables.product.pat_generic %}:

   ```json copy
   {
     "servers": {
       "github": {
         "url": "https://copilot-api.YOURSUBDOMAIN.ghe.com/mcp",
         "requestInit": {
           "headers": {
             "Authorization": "Bearer YOUR_GITHUB_PAT"
           }
         }
       }
     }
   }
   ```

1. Click **Apply**.

{% endeclipse %}

## Configuring the local MCP server for enterprise

Both {% data variables.product.prodname_ghe_server %} and {% data variables.product.prodname_ghe_cloud %} with data residency support the local MCP server. You can configure the local server using either the `GITHUB_HOST` environment variable or the `--gh-host` command-line flag.

### Important considerations

* **For {% data variables.product.prodname_ghe_server %}**: Prefix the hostname with the `https://` URI scheme, as it otherwise defaults to `http://`, which {% data variables.product.prodname_ghe_server %} does not support.
* **For {% data variables.product.prodname_ghe_cloud %} with data residency**: Use `https://YOURSUBDOMAIN.ghe.com` as the hostname.

### Configuration with Docker

{% vscode %}

To configure the local MCP server with Docker in {% data variables.product.prodname_vscode %}:

1. In {% data variables.product.prodname_vscode %}, open the command palette by pressing <kbd>Ctrl</kbd>+<kbd>Shift</kbd>+<kbd>P</kbd> (Windows/Linux) / <kbd>Command</kbd>+<kbd>Shift</kbd>+<kbd>P</kbd> (Mac).
1. Type and select **MCP: Open User Configuration**.
1. In the settings file, locate the `servers` section or create it if it doesn't exist.
1. Add the following configuration:

   **For {% data variables.product.prodname_ghe_server %}:**

   ```json copy
   {
     "inputs": [
       {
         "type": "promptString",
         "id": "github_token",
         "description": "GitHub PAT",
         "password": true
       }
     ],
     "servers": {
       "github": {
         "command": "docker",
         "args": [
           "run",
           "-i",
           "--rm",
           "-e",
           "GITHUB_PERSONAL_ACCESS_TOKEN",
           "-e",
           "GITHUB_HOST",
           "ghcr.io/github/github-mcp-server"
         ],
         "env": {
           "GITHUB_PERSONAL_ACCESS_TOKEN": "${input:github_token}",
           "GITHUB_HOST": "https://YOUR_GHES_HOSTNAME"
         }
       }
     }
   }
   ```

   Replace `YOUR_GHES_HOSTNAME` with your {% data variables.product.prodname_ghe_server %} hostname (for example, `https://github.example.com`).

   **For {% data variables.product.prodname_ghe_cloud %} with data residency:**

   ```json copy
   {
     "inputs": [
       {
         "type": "promptString",
         "id": "github_token",
         "description": "GitHub PAT",
         "password": true
       }
     ],
     "servers": {
       "github": {
         "command": "docker",
         "args": [
           "run",
           "-i",
           "--rm",
           "-e",
           "GITHUB_PERSONAL_ACCESS_TOKEN",
           "-e",
           "GITHUB_HOST",
           "ghcr.io/github/github-mcp-server"
         ],
         "env": {
           "GITHUB_PERSONAL_ACCESS_TOKEN": "${input:github_token}",
           "GITHUB_HOST": "https://YOURSUBDOMAIN.ghe.com"
         }
       }
     }
   }
   ```

   Replace `YOURSUBDOMAIN` with your {% data variables.product.prodname_ghe_cloud %} subdomain.

1. Save the file.
1. Restart {% data variables.product.prodname_vscode %} or reload the window for the changes to take effect.

{% endvscode %}

{% visualstudio %}

To configure the local MCP server with Docker in {% data variables.product.prodname_vs %}, you need to manually edit the `mcp.json` file.

1. Open the `mcp.json` file in {% data variables.product.prodname_vs %}. The file is typically located in your user profile directory.
1. Add the following configuration:

   **For {% data variables.product.prodname_ghe_server %}:**

   ```json copy
   {
     "mcp": {
       "inputs": [
         {
           "type": "promptString",
           "id": "github_token",
           "description": "GitHub PAT",
           "password": true
         }
       ],
       "servers": {
         "github": {
           "command": "docker",
           "args": [
             "run",
             "-i",
             "--rm",
             "-e",
             "GITHUB_PERSONAL_ACCESS_TOKEN",
             "-e",
             "GITHUB_HOST",
             "ghcr.io/github/github-mcp-server"
           ],
           "env": {
             "GITHUB_PERSONAL_ACCESS_TOKEN": "${input:github_token}",
             "GITHUB_HOST": "https://YOUR_GHES_HOSTNAME"
           }
         }
       }
     }
   }
   ```

   Replace `YOUR_GHES_HOSTNAME` with your {% data variables.product.prodname_ghe_server %} hostname (for example, `https://github.example.com`).

   **For {% data variables.product.prodname_ghe_cloud %} with data residency:**

   ```json copy
   {
     "mcp": {
       "inputs": [
         {
           "type": "promptString",
           "id": "github_token",
           "description": "GitHub PAT",
           "password": true
         }
       ],
       "servers": {
         "github": {
           "command": "docker",
           "args": [
             "run",
             "-i",
             "--rm",
             "-e",
             "GITHUB_PERSONAL_ACCESS_TOKEN",
             "-e",
             "GITHUB_HOST",
             "ghcr.io/github/github-mcp-server"
           ],
           "env": {
             "GITHUB_PERSONAL_ACCESS_TOKEN": "${input:github_token}",
             "GITHUB_HOST": "https://YOURSUBDOMAIN.ghe.com"
           }
         }
       }
     }
   }
   ```

   Replace `YOURSUBDOMAIN` with your {% data variables.product.prodname_ghe_cloud %} subdomain.

1. Save the file.

{% endvisualstudio %}

{% jetbrains %}

To configure the local MCP server with Docker in JetBrains IDEs:

{% data reusables.copilot.jetbrains-mcp-setup-steps %}
1. Add the following configuration:

   **For {% data variables.product.prodname_ghe_server %}:**

   ```json copy
   {
     "inputs": [
       {
         "type": "promptString",
         "id": "github_token",
         "description": "GitHub PAT",
         "password": true
       }
     ],
     "servers": {
       "github": {
         "command": "docker",
         "args": [
           "run",
           "-i",
           "--rm",
           "-e",
           "GITHUB_PERSONAL_ACCESS_TOKEN",
           "-e",
           "GITHUB_HOST",
           "ghcr.io/github/github-mcp-server"
         ],
         "env": {
           "GITHUB_PERSONAL_ACCESS_TOKEN": "${input:github_token}",
           "GITHUB_HOST": "https://YOUR_GHES_HOSTNAME"
         }
       }
     }
   }
   ```

   Replace `YOUR_GHES_HOSTNAME` with your {% data variables.product.prodname_ghe_server %} hostname (for example, `https://github.example.com`).

   **For {% data variables.product.prodname_ghe_cloud %} with data residency:**

   ```json copy
   {
     "inputs": [
       {
         "type": "promptString",
         "id": "github_token",
         "description": "GitHub PAT",
         "password": true
       }
     ],
     "servers": {
       "github": {
         "command": "docker",
         "args": [
           "run",
           "-i",
           "--rm",
           "-e",
           "GITHUB_PERSONAL_ACCESS_TOKEN",
           "-e",
           "GITHUB_HOST",
           "ghcr.io/github/github-mcp-server"
         ],
         "env": {
           "GITHUB_PERSONAL_ACCESS_TOKEN": "${input:github_token}",
           "GITHUB_HOST": "https://YOURSUBDOMAIN.ghe.com"
         }
       }
     }
   }
   ```

   Replace `YOURSUBDOMAIN` with your {% data variables.product.prodname_ghe_cloud %} subdomain.

{% endjetbrains %}

{% xcode %}

To configure the local MCP server with Docker in Xcode:

{% data reusables.copilot.xcode-mcp-setup-steps %}
1. Add the following configuration:

   **For {% data variables.product.prodname_ghe_server %}:**

   ```json copy
   {
     "inputs": [
       {
         "type": "promptString",
         "id": "github_token",
         "description": "GitHub PAT",
         "password": true
       }
     ],
     "servers": {
       "github": {
         "command": "docker",
         "args": [
           "run",
           "-i",
           "--rm",
           "-e",
           "GITHUB_PERSONAL_ACCESS_TOKEN",
           "-e",
           "GITHUB_HOST",
           "ghcr.io/github/github-mcp-server"
         ],
         "env": {
           "GITHUB_PERSONAL_ACCESS_TOKEN": "${input:github_token}",
           "GITHUB_HOST": "https://YOUR_GHES_HOSTNAME"
         }
       }
     }
   }
   ```

   Replace `YOUR_GHES_HOSTNAME` with your {% data variables.product.prodname_ghe_server %} hostname (for example, `https://github.example.com`).

   **For {% data variables.product.prodname_ghe_cloud %} with data residency:**

   ```json copy
   {
     "inputs": [
       {
         "type": "promptString",
         "id": "github_token",
         "description": "GitHub PAT",
         "password": true
       }
     ],
     "servers": {
       "github": {
         "command": "docker",
         "args": [
           "run",
           "-i",
           "--rm",
           "-e",
           "GITHUB_PERSONAL_ACCESS_TOKEN",
           "-e",
           "GITHUB_HOST",
           "ghcr.io/github/github-mcp-server"
         ],
         "env": {
           "GITHUB_PERSONAL_ACCESS_TOKEN": "${input:github_token}",
           "GITHUB_HOST": "https://YOURSUBDOMAIN.ghe.com"
         }
       }
     }
   }
   ```

   Replace `YOURSUBDOMAIN` with your {% data variables.product.prodname_ghe_cloud %} subdomain.

{% endxcode %}

{% eclipse %}

To configure the local MCP server with Docker in Eclipse:

{% data reusables.copilot.eclipse-mcp-setup-steps %}
1. Add the following configuration under "Server Configurations":

   **For {% data variables.product.prodname_ghe_server %}:**

   ```json copy
   {
     "inputs": [
       {
         "type": "promptString",
         "id": "github_token",
         "description": "GitHub PAT",
         "password": true
       }
     ],
     "servers": {
       "github": {
         "command": "docker",
         "args": [
           "run",
           "-i",
           "--rm",
           "-e",
           "GITHUB_PERSONAL_ACCESS_TOKEN",
           "-e",
           "GITHUB_HOST",
           "ghcr.io/github/github-mcp-server"
         ],
         "env": {
           "GITHUB_PERSONAL_ACCESS_TOKEN": "${input:github_token}",
           "GITHUB_HOST": "https://YOUR_GHES_HOSTNAME"
         }
       }
     }
   }
   ```

   Replace `YOUR_GHES_HOSTNAME` with your {% data variables.product.prodname_ghe_server %} hostname (for example, `https://github.example.com`).

   **For {% data variables.product.prodname_ghe_cloud %} with data residency:**

   ```json copy
   {
     "inputs": [
       {
         "type": "promptString",
         "id": "github_token",
         "description": "GitHub PAT",
         "password": true
       }
     ],
     "servers": {
       "github": {
         "command": "docker",
         "args": [
           "run",
           "-i",
           "--rm",
           "-e",
           "GITHUB_PERSONAL_ACCESS_TOKEN",
           "-e",
           "GITHUB_HOST",
           "ghcr.io/github/github-mcp-server"
         ],
         "env": {
           "GITHUB_PERSONAL_ACCESS_TOKEN": "${input:github_token}",
           "GITHUB_HOST": "https://YOURSUBDOMAIN.ghe.com"
         }
       }
     }
   }
   ```

   Replace `YOURSUBDOMAIN` with your {% data variables.product.prodname_ghe_cloud %} subdomain.

1. Click **Apply**.

{% endeclipse %}

### Configuration when building from source

If you are building the MCP server from source instead of using Docker, you can set the `GITHUB_HOST` environment variable or use the `--gh-host` command-line flag:

**Using environment variable:**

```bash
export GITHUB_HOST="https://YOUR_GHES_OR_GHEC_HOSTNAME"
./github-mcp-server stdio
```

**Using command-line flag:**

```bash
./github-mcp-server --gh-host \
  "https://YOUR_GHES_OR_GHEC_HOSTNAME" stdio
```

Replace `YOUR_GHES_OR_GHEC_HOSTNAME` with your {% data variables.product.prodname_ghe_server %} hostname (for example, `https://github.example.com`) or {% data variables.product.prodname_ghe_cloud %} hostname (for example, `https://octocorp.ghe.com`).

## Next steps

* To learn how to use the {% data variables.product.github %} MCP server, see [AUTOTITLE](/copilot/how-tos/provide-context/use-mcp/use-the-github-mcp-server).
* To learn how to configure toolsets for the {% data variables.product.github %} MCP server, see [AUTOTITLE](/copilot/how-tos/provide-context/use-mcp/configure-toolsets).
