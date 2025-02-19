---
title: Context passing for your agent
intro: 'Learn how to use context passing with your {% data variables.product.prodname_copilot_agent_short %}.'
versions:
  feature: copilot-extensions
topics:
  - Copilot
shortTitle: Context passing
type: how_to
---

## About context passing

{% data variables.product.prodname_copilot_extensions %} can access certain contextual information using context passing.
Context passing allows agents to receive relevant details about a user’s current file, selected text, and repository.
It happens automatically when you interact with an extension, but requires your explicit authorization through {% data variables.product.prodname_github_app %} permissions for use in any organization-owned repositories.

Different clients, such as {% data variables.product.prodname_copilot_chat %} in {% data variables.product.prodname_vscode %}, {% data variables.product.prodname_vs %}, and {% data variables.product.github %}, provide context through different reference types.
For example, IDEs send information such as file contents and selections, while {% data variables.product.prodname_copilot_chat_dotcom_short %} includes the current URL for the page being viewed.

## Prerequisites

{% data reusables.copilot.copilot-extensions.agents-copilot-platform-prerequisites %}

## Understanding context passing

Context passing enables agents to receive information about the user’s active workspace.
Your agent receives server-sent events (SSEs) that contain a list of messages from the user as well as references to the user’s current environment.
Depending on the client, different types of context are provided.

The following table shows the reference types that are passed to {% data variables.product.prodname_copilot_extensions %} based on the client or IDE you are using.

{% rowheaders %}

| Client or IDE   | client.file | client.selection | github.repository | github.current-url | Additional contexts                               |
| ------------------ | ----------- | ---------------- | ----------------- | ------------------ | ------------------------------------------------- |
| {% data variables.product.prodname_vscode %} | Yes           | Yes                | Yes                 |      No              | Repository owner and branch                       |
| {% data variables.product.prodname_vs %}      | Yes           | Yes                | Yes                 |         No           | Repository owner and branch                       |
| {% data variables.product.prodname_dotcom_the_website %}         |    No         |        No          | Yes                 | Yes                  | Repository information and other {% data variables.product.github %} resources |

{% endrowheaders %}

### Reference types for {% data variables.product.prodname_copilot_chat_short %} in IDEs

The following reference types can be passed to your agent from an IDE:
* `client.file`: Represents the full content of the currently active file in the IDE.
* `client.selection`: Represents the selected portion of text the user highlighted in the active file.
* `github.repository`: Provides information about the active repository.

### Reference types for {% data variables.product.prodname_copilot_chat_dotcom_short %}

The following reference types can be passed to your agent from {% data variables.product.github %}:
* `github.current-url`: Represents the URL of the current {% data variables.product.github %} page the user is viewing.
* `github.repository`: Provides information about the active repository.

## Example references

The following code shows an example object for `client.file`:

```json
{
    // The reference type.
    "type": "client.file",
    "data": {
        // The full content of the active file. 
        "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        "language": "plaintext"
    },
    "id": "relative-path/to/file",
    // `is_implicit` indicates whether the reference was automatically provided by the client (true) or manually attached by the user (false).
    "is_implicit": true,
    "metadata": {
        "display_name": "https://github.com/example-user/example-repository",
        "display_icon": "",
        "display_url": ""
    }
}
```

The following code shows an example object for `client.selection`:

```json
{
    // The reference type.
    "type": "client.selection",
    "data": {
        // The currently selected portion of text.
        "content": "<current selection>",
        "end": {
            "col": 80,
            "line": 10
        },
        "start": {
            "col": 0,
            "line": 0
        }
    },
    "id": "relative-path/to/file",
    // `is_implicit` indicates whether the reference was automatically provided by the client (true) or manually attached by the user (false).
    "is_implicit": true,
    "metadata": {
        "display_name": "https://github.com/example-user/example-repository",
        "display_icon": "",
        "display_url": ""
    }
}
```

The following code shows an example object for `github.repository`:

```json
{
    // The reference type.
    "type": "github.repository",
    "data": {
        "type": "repository",
        "id": "abc-123",
        "name": "example-repository",
        "ownerLogin": "example-user",
        "ownerType": "",
        "readmePath": "",
        "description": "",
        "commitOID": "",
        "ref": "",
        "refInfo": {
            "name": "",
            "type": ""
        },
        "visibility": "",
        "languages": null
    },
    "id": "example-user/example-repository",
    // `is_implicit` is always false for github.repository.
    "is_implicit": false,
    "metadata": {
        "display_name": "https://github.com/example-user/example-repository",
        "display_icon": "",
        "display_url": ""
    }
}
```

The following code shows an example object for `github.current-url`:

```json
{
    // The reference type.
    "type": "github.current-url",
    "data": {
        // The GitHub URL the user was on while chatting with the agent.
        "url": "https://github.com/example-user/example-repository"
    },
    "id": "https://github.com/example-user/example-repository",
    // `is_implicit` is always true for github.current-url.
    "is_implicit": true,
    "metadata": {
        "display_name": "https://github.com/example-user/example-repository",
        "display_icon": "",
        "display_url": ""
    }
}
```

## Setting up context passing

To enable context passing through an IDE client, the **{% data variables.product.prodname_copilot_short %} Editor Context** permission must be configured for your agent.
This permission only controls access for the `client.file` and `client.selection` reference types.
Users that install and use the agent will be clearly informed that the agent has read access to {% data variables.product.prodname_copilot_short %} Editor Context which includes content such as active file and current selection.

`github.current-url` and `github.repository` are unaffected by the {% data variables.product.prodname_copilot_short %} Editor Context. These reference types rely on authorization filtering to ensure third party agents only receive references they have access to. For information on managing the privacy of `github.current-url` and `github.repository`, see [Privacy controls](#privacy-controls).

Follow these steps to set the necessary permissions for context passing from IDEs to your agent:

{% data reusables.apps.settings-step-personal-orgs %}
{% data reusables.user-settings.developer_settings %}
{% data reusables.user-settings.github_apps %}
1. In the list of {% data variables.product.prodname_github_apps %}, click the {% data variables.product.prodname_github_app %} you want to configure for context passing.
1. In the navigation menu on the left, select **Permissions & events**.
1. Under **Account Permissions**, select **Read-only** access for **{% data variables.product.prodname_copilot_short %} Editor Context**.

## Privacy controls

In cases where you don't want to share certain context details with the agent, you can redact and remove reference types in multiple ways.

### Chat in IDEs

* If an agent doesn't have the {% data variables.product.prodname_copilot_short %} Editor Context read-access permission, all `client.*` references are removed.
* If an agent doesn't have read access to a repository, all `client.*` references are removed and the `github.repository` reference is redacted.
> [!NOTE] {% data variables.product.prodname_vs %} and {% data variables.product.prodname_vscode %} provides an option to exclude content from the current file. The `client.*` reference types are removed if the user has excluded content from the current file.

### Chat in {% data variables.product.github %}

* If an agent doesn't have read access to the repository associated with the current {% data variables.product.github %} URL, the `github.current-url` and `github.repository` references are redacted.
* If repository information cannot be extracted from the current {% data variables.product.github %} URL, `github.current-url` is redacted.

### Redacted references

When a reference is redacted due to insufficient permissions, it is replaced with a placeholder indicating the type of information that was excluded.
In the following example, the `type` field indicates that the reference has been redacted and the `data.type` field reveals the original reference type.

```json
{
    "role": "user",
    "content": "Current Date and Time (UTC): 2024-10-22 00:43:14\nCurrent User's Login: monalisa\n",
    "name": "_session",
    "copilot_references": [
        {
            "type": "github.redacted",
            "data": {
                "type": "github.current-url"
            },
            "id": "example-id",
            "is_implicit": true,
            "metadata": {
                "display_name": "",
                "display_icon": "",
                "display_url": ""
            }
        }
    ],
    "copilot_confirmations": null
}
```

### Context Exclusions

To safeguard sensitive information, certain scenarios automatically prevent the passing of context to agents.
If an organization has set content exclusion rules for {% data variables.product.prodname_copilot_short %}, files that fall under these rules will not be included in the context passed to agents.

For more information on content exlusion rules, see [AUTOTITLE](/copilot/managing-copilot/configuring-and-auditing-content-exclusion/excluding-content-from-github-copilot).

#### Large Files

Files exceeding the size limit set by the client will not be sent. The reference will include metadata indicating that the file was too large to process.

#### Hidden Files

Files beginning with a dot, such as `.env` and `.config`, are excluded by default to prevent unintentional sharing of sensitive configurations. In {% data variables.product.prodname_vscode_shortname %}, you can specify files or directories in a `.copilotignore` file to prevent them from being sent to {% data variables.product.prodname_copilot_short %} agents. This client-side mechanism offers granular control over which files are excluded.
