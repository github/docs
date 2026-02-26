---
title: Authenticating GitHub Copilot CLI
shortTitle: Authenticate Copilot CLI
intro: Authenticate {% data variables.copilot.copilot_cli_short %} so that you can use {% data variables.product.prodname_copilot_short %} directly from the command line.
product: '{% data reusables.gated-features.copilot-cli %}'
versions:
  feature: copilot
topics:
  - Copilot
  - CLI
contentType: how-tos
category:
  - Configure Copilot CLI
---

## About authentication

{% data variables.copilot.copilot_cli %} supports three authentication methods. The method you use depends on whether you are working interactively or in an automated environment.

* **OAuth device flow**: The default and recommended method for interactive use. When you run `/login` in {% data variables.copilot.copilot_cli_short %}, the CLI generates a one-time code and directs you to authenticate in your browser. This is the simplest way to authenticate.
* **Environment variables**: Recommended for CI/CD pipelines, containers, and non-interactive environments. You set a supported token as an environment variable (`COPILOT_GITHUB_TOKEN`, `GH_TOKEN`, or `GITHUB_TOKEN`), and the CLI uses it automatically without prompting.
* **{% data variables.product.prodname_cli %} fallback**: If you have {% data variables.product.prodname_cli %} (`gh`) (note: the `gh` CLI, not `copilot`) installed and authenticated, {% data variables.copilot.copilot_cli_short %} can use its token automatically. This is the lowest priority method and activates only when no other credentials are found.

Once authenticated, {% data variables.copilot.copilot_cli_short %} remembers your login and automatically uses the token for all {% data variables.product.prodname_copilot_short %} API requests. You can log in with multiple accounts, and the CLI will remember the last-used account. Token lifetime and expiration depend on how the token was created on your account or organization settings.

### Supported token types

| Token type                 | Prefix        | Supported | Notes                                                  |
|----------------------------|---------------|-----------|--------------------------------------------------------|
| OAuth token (device flow)  | `gho_`        | Yes       | Default method via `copilot login`                     |
| Fine-grained PAT           | `github_pat_` | Yes       | Must include required permissions **Copilot Requests** |
| GitHub App user-to-server  | `ghu_`        | Yes       | Via environment variable                               |
| Classic PAT                | `ghp_`        | No        | Not supported by {% data variables.copilot.copilot_cli_short %} |

### How Copilot CLI stores credentials

By default, the CLI stores your OAuth token in your operating system's keychain under the service name `copilot-cli`:

| Platform | Keychain |
|---|---|
| macOS | Keychain Access |
| Windows | Credential Manager |
| Linux | libsecret (GNOME Keyring, KWallet) |

If the system keychain is unavailable—for example, on a headless Linux server without `libsecret` installed—the CLI prompts you to store the token in a plaintext configuration file at `~/.copilot/config.json`.

When you run a command, {% data variables.copilot.copilot_cli_short %} checks for credentials in the following order:

1. `COPILOT_GITHUB_TOKEN` environment variable
1. `GH_TOKEN` environment variable
1. `GITHUB_TOKEN` environment variable
1. OAuth token from the system keychain
1. GitHub CLI (`gh auth token`) fallback

> [!NOTE]
> An environment variable silently overrides a stored OAuth token. If you set `GH_TOKEN` for another tool, the CLI uses that token instead of the OAuth token from `copilot login`. To avoid unexpected behavior, unset environment variables you do not intend the CLI to use.

## Authenticating with OAuth

The OAuth device flow is the default authentication method for interactive use. You can authenticate by running `/login` from {% data variables.copilot.copilot_cli_short %} or `copilot login` from your terminal.

### Authenticate with `/login`

1. From {% data variables.copilot.copilot_cli_short %}, run `/login`.

   ```bash copy
   /login
   ```

1. Select the account you want to authenticate with. For {% data variables.product.prodname_ghe_cloud %} with data residency, enter the hostname of your instance

   ```text
   What account do you want to log into?
    1. {% data variables.product.prodname_dotcom_the_website %}
    2. {% data variables.product.prodname_ghe_cloud %} with data residency (*.ghe.com)
   ```

1. The CLI displays a one-time user code and automatically copies it to your clipboard and opens your browser.

   ```text
   Waiting for authorization...
   Enter one-time code: 1234-5678 at https://github.com/login/device
   Press any key to copy to clipboard and open browser...
   ```

1. Navigate to the verification URL at `https://github.com/login/device` if your browser did not open automatically.
1. Paste the one-time code in the field on the page.
1. If your organization uses SAML SSO, click **Authorize** next to each organization you want to grant access to.
1. Review the requested permissions and click **Authorize GitHub Copilot CLI**.
1. Return to your terminal. The CLI displays a success message when authentication is complete.

   ```text
   Signed in successfully as Octocat. You can now use {% data variables.product.prodname_copilot_short %}.
   ```

### Authenticate with `copilot login`

1. From the terminal, run `copilot login`. If you are using {% data variables.product.prodname_ghe_cloud %} with data residency, pass the hostname of your instance.

   ```bash copy
   copilot login
   ```

   For {% data variables.product.prodname_ghe_cloud %}:

   ```bash copy
   copilot login --host HOSTNAME
   ```

   The CLI displays a one-time user code and automatically copies it to your clipboard and opens your browser.

   ```text
   To authenticate, visit https://github.com/login/device and enter code 1234-5678.
   ```

1. Navigate to the verification URL at `https://github.com/login/device` if your browser did not open automatically.
1. Paste the one-time code in the field on the page.
1. If your organization uses SAML SSO, click **Authorize** next to each organization you want to grant access to.
1. Review the requested permissions and click **Authorize GitHub Copilot CLI**.
1. Return to your terminal. The CLI displays a success message when authentication is complete.

   ```text
   Signed in successfully as Octocat.
   ```

## Authenticating with environment variables

For non-interactive environments, you can authenticate by setting an environment variable with a supported token. This is ideal for CI/CD pipelines, containers, or headless servers.

{% data reusables.copilot.copilot-cli-pat-steps %}

## Authenticating with {% data variables.product.prodname_cli %}

If you have {% data variables.product.prodname_cli %} installed and authenticated, {% data variables.copilot.copilot_cli_short %} can use its token as a fallback. This method has the lowest priority and activates only when no environment variables are set and no stored token is found.

1. Verify that {% data variables.product.prodname_cli %} is authenticated.

    ```bash copy
    gh auth status
    ```

    If you use {% data variables.product.prodname_ghe_cloud %} with data residency, verify the correct hostname is authenticated.

    ```bash copy
    gh auth status --hostname HOSTNAME
    ```

1. Run `copilot`. The Copilot CLI uses the {% data variables.product.prodname_cli %} token automatically.
1. Run `/user` to verify your authenticated account in the CLI.

## Switching between accounts

{% data variables.copilot.copilot_cli_short %} supports multiple accounts. You can list available accounts and switch between them from within the CLI. 
To list available accounts, run `/user list` from the {% data variables.copilot.copilot_cli_short %} prompt. 
To switch to a different account, type `/user switch` on the prompt.

To add another account, run `copilot login` from a new terminal session, or run the login command from within the CLI and authorize with the other account.

## Signing out and removing credentials

To sign out, type `/logout` at the {% data variables.copilot.copilot_cli_short %} prompt. This removes the locally stored token but does not revoke it on {% data variables.product.github %}.

To revoke the OAuth app authorization on {% data variables.product.github %} and prevent it from being used elsewhere, follow these steps.

1. Navigate to **Settings** > **Applications** > **Authorized OAuth Apps**.
1. Navigate to your settings page:
   1. In the upper-right corner of any page on {% data variables.product.prodname_dotcom %}, click your profile picture. 
   1. Click **Settings**.
1. In the left sidebar, click **Applications**.
1. Under **Authorized OAuth Apps**, click {% octicon "kebab-horizontal" aria-label="The horizontal kebab icon" %} next to **GitHub CLI** to expand the menu and select **Revoke**.
