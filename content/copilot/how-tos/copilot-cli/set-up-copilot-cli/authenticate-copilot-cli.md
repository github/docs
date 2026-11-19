---
title: Authenticating GitHub Copilot CLI
shortTitle: Authenticate Copilot CLI
intro: Authenticate {% data variables.copilot.copilot_cli_short %} so that you can use {% data variables.product.prodname_copilot_short %} directly from the command line.
product: '{% data reusables.gated-features.copilot-cli %}'
versions:
  feature: copilot
contentType: how-tos
category:
  - Configure Copilot CLI
docsTeamMetrics:
  - copilot-cli
---

## About authentication

{% data variables.product.github %} authentication is not required if you use your own LLM provider API keys (BYOK) or sign in with a Microsoft Entra account.

Authentication is required for any other {% data variables.copilot.copilot_cli %} usage.

When authentication is required, {% data variables.copilot.copilot_cli_short %} supports several methods. The method you use depends on whether you are working interactively or in an automated environment.

* **OAuth**: The default and recommended method for interactive use. There are two OAuth flows. The browser (web) flow opens your browser to authorize the sign-in and completes it on a local loopback callback. The device code flow displays a one-time code that you enter in your browser. The browser flow is the default on a local desktop, and known remote or headless environments (including SSH, {% data variables.product.prodname_github_codespaces %}, dev containers, and CI) default to the device code flow. See [Authenticating with OAuth](#authenticating-with-oauth).
* **Environment variables**: Recommended for CI/CD pipelines, containers, and non-interactive environments. You set a supported token as an environment variable (`COPILOT_GITHUB_TOKEN`, `GH_TOKEN`, or `GITHUB_TOKEN`), and the CLI uses it automatically without prompting. See [Authenticating with environment variables](#authenticating-with-environment-variables).
* **{% data variables.product.prodname_cli %} fallback**: If you have {% data variables.product.prodname_cli %} (`gh`) (note: the `gh` CLI, not `copilot`) installed and authenticated, {% data variables.copilot.copilot_cli_short %} can use its token automatically. This is the lowest priority method and activates only when no other credentials are found. See [Authenticating with {% data variables.product.prodname_cli %}](#authenticating-with-github-cli).

Once authenticated, {% data variables.copilot.copilot_cli_short %} remembers your login and automatically uses the token for all {% data variables.product.prodname_copilot_short %} API requests. You can log in with multiple accounts, and the CLI will remember the last-used account. Token lifetime and expiration depend on how the token was created on your account or organization settings.

## Using {% data variables.copilot.copilot_cli_short %} without {% data variables.product.github %} authentication

{% data variables.product.github %} authentication is **not required** if you use either of the following for AI model requests:

* **Your own LLM provider API keys (BYOK)**: {% data variables.copilot.copilot_cli_short %} connects directly to your configured provider without a {% data variables.product.github %} account or token.
* **A Microsoft Entra account**: If your Microsoft Entra tenant uses OpenID Connect (OIDC) to connect to {% data variables.product.github %} {% data variables.product.prodname_emus %}, you can use your Microsoft Entra account to sign in on Windows or macOS. If a Microsoft 365 Copilot license exists for that Microsoft Entra user, model requests can go to Microsoft 365 Copilot. See [Authenticating with Microsoft Entra](#authenticating-with-microsoft-entra).

However, without {% data variables.product.github %} authentication, the following features are **not available**:

* `/delegate`: Requires {% data variables.copilot.copilot_cloud_agent %}, which runs on {% data variables.product.github %}'s servers
* {% data variables.product.github %} MCP server: Requires authentication to access {% data variables.product.github %} APIs
* {% data variables.product.github %} Code Search: Requires authentication to query {% data variables.product.github %}'s search index

You can combine BYOK or Microsoft Entra authentication with {% data variables.product.github %} authentication to get the best of both: your preferred model for AI responses, plus access to {% data variables.product.github %}-hosted features like `/delegate` and code search.

### Offline mode

 If you set the `COPILOT_OFFLINE` environment variable to `true`, {% data variables.copilot.copilot_cli_short %} runs without contacting {% data variables.product.github %}'s servers. In offline mode:

* No {% data variables.product.github %} authentication is attempted.
* The CLI only makes network requests to your configured BYOK provider.
* Telemetry is fully disabled.

Offline mode is **only fully air-gapped** if your BYOK provider is local or otherwise within the same isolated environment (for example, a model running on-premises with no external network access). If `COPILOT_PROVIDER_BASE_URL` points to a remote or internet-accessible endpoint, prompts and code context will still be sent over the network to that provider. Without offline mode, even when using BYOK without {% data variables.product.github %} authentication, telemetry is still sent normally.

### Supported token types

| Token type                 | Prefix        | Supported | Notes                                                  |
|----------------------------|---------------|-----------|--------------------------------------------------------|
| OAuth token (browser or device flow) | `gho_` | Yes    | Default method via `copilot login`                     |
| Fine-grained PAT           | `github_pat_` | Yes       | Must be owned by your personal account (not an organization) with the **{% data variables.product.prodname_copilot_short %} Requests** account permission |
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
> * An environment variable silently overrides a stored OAuth token. If you set `GH_TOKEN` for another tool, the CLI uses that token instead of the OAuth token from `copilot login`. To avoid unexpected behavior, unset environment variables you do not intend the CLI to use. There is one exception: in {% data variables.product.prodname_github_codespaces %}, the `GITHUB_TOKEN` that is injected automatically does not take precedence over an account you signed in with using `/login`. A `GITHUB_TOKEN`, `COPILOT_GITHUB_TOKEN`, or `GH_TOKEN` that you export explicitly still does.
> * When you configure BYOK provider environment variables (for example, `COPILOT_PROVIDER_BASE_URL`, `COPILOT_PROVIDER_API_KEY`), {% data variables.copilot.copilot_cli_short %} uses these for AI model requests regardless of your {% data variables.product.github %} authentication status. {% data variables.product.github %} tokens are only needed for {% data variables.product.github %}-hosted features.

## Authenticating with OAuth

OAuth is the default authentication method for interactive use. You can authenticate by running `/login` from {% data variables.copilot.copilot_cli_short %} or `copilot login` from your terminal. Both offer a browser (web) flow and a device code flow.

### Authenticate with `/login`

1. From {% data variables.copilot.copilot_cli_short %}, run `/login`.

   ```bash copy
   /login
   ```

1. Select the account you want to authenticate with. For {% data variables.product.prodname_ghe_cloud %} with data residency, enter the hostname of your instance. If you select **Your organization (Microsoft Entra)**, {% data variables.copilot.copilot_cli_short %} automatically signs you in with your existing Microsoft Entra account.

   ```text
   What account do you want to log into?
    1. {% data variables.product.prodname_dotcom_the_website %}
    2. {% data variables.product.prodname_ghe_cloud %} with data residency (*.ghe.com)
    3. Your organization (Microsoft Entra)
   ```

1. Choose how you want to sign in. The recommended option is listed first, and depends on your environment: the browser flow on a local terminal, or the device code flow in a remote or headless environment. The following example shows the prompt in a local terminal:

   ```text
   How do you want to sign in?
    1. Sign in with your browser (recommended)
    2. Sign in with a device code
   ```

1. Complete the flow you selected.

   * **Browser**: {% data variables.copilot.copilot_cli_short %} opens your browser so that you can authorize the sign-in. If your browser does not open automatically, the terminal displays a URL that you can visit instead.

   * **Device code**: The CLI displays a one-time user code, and can copy it to your clipboard and open your browser for you.

     ```text
     Waiting for authorization...
     Enter one-time code: 1234-5678 at https://github.com/login/device
     Press any key to copy to clipboard and open browser...
     ```

     Navigate to the verification URL at `https://github.com/login/device` if your browser did not open automatically, then paste the one-time code in the field on the page.

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

1. Authorize the sign-in.

   On a local desktop, `copilot login` uses the browser flow by default. It opens your browser to authorize the sign-in and captures the result on a local loopback callback.

   ```text
   Opening your browser to authenticate...
   If it doesn't open automatically, visit:
   URL
   Waiting for authorization...
   ```

   Known remote or headless environments (including SSH, {% data variables.product.prodname_github_codespaces %}, dev containers, and CI) use the device code flow instead. The CLI displays a one-time code and, when supported by the environment, can copy it to your clipboard and open a browser.

   ```text
   To authenticate, visit https://github.com/login/device and enter code 1234-5678
   Waiting for authorization...
   ```

   To force a particular flow, add the `--web-flow` or `--device-code` option.

1. Navigate to the URL displayed in your terminal if your browser did not open automatically. For the device code flow, paste the one-time code in the field on the page.
1. If your organization uses SAML SSO, click **Authorize** next to each organization you want to grant access to.
1. Review the requested permissions and click **Authorize GitHub Copilot CLI**.
1. Return to your terminal. The CLI displays a success message when authentication is complete.

   ```text
   Signed in successfully as Octocat.
   ```

## Authenticating with Microsoft Entra

> [!NOTE]
> Using Microsoft Entra with {% data variables.copilot.copilot_cli_short %} is in {% data variables.release-phases.public_preview %} and subject to change.

Authentication with a Microsoft Entra account is supported on Windows and macOS in {% data variables.copilot.copilot_cli_short %} version 1.0.113 and later.

### Prerequisites for using {% data variables.product.github %} {% data variables.product.prodname_emus %}

Your Microsoft Entra tenant must use OIDC to connect to {% data variables.product.github %} {% data variables.product.prodname_emus %}. For more information, see [AUTOTITLE](/enterprise-cloud@latest/admin/managing-iam/configuring-authentication-for-enterprise-managed-users/about-enterprise-managed-authorization).

### Prerequisites for using Microsoft 365 Copilot models

{% data variables.copilot.copilot_cli_short %} supports Microsoft 365 Copilot licenses for [Frontier](https://learn.microsoft.com/microsoft-365/admin/manage/get-started-frontier?view=o365-worldwide) customers only. To use this feature, you must have:

* A Microsoft Entra account with access to Microsoft 365 Copilot through your organization.
* An administrator must enable the following settings in the [Microsoft 365 admin center](https://admin.cloud.microsoft.com/):
  * The Microsoft Copilot **Code** spending policy for [usage-based billing](https://learn.microsoft.com/microsoft-365/copilot/usage-based-billing-overview-copilot-credits). Your organization's [Billing Administrator](https://learn.microsoft.com/entra/identity/role-based-access-control/permissions-reference#billing-administrator) or [Global Administrator](https://learn.microsoft.com/entra/identity/role-based-access-control/permissions-reference#global-administrator) can enable this policy.
  * The **Copilot Frontier** setting. Your organization's [AI Administrator](https://learn.microsoft.com/entra/identity/role-based-access-control/permissions-reference#ai-administrator) or Global Administrator can update this setting.
  * The **GitHub Copilot access (Frontier)** setting, which is disabled by default. Your organization's Global Administrator can update this setting.

### Signing in with your organization

1. Run `/login` in {% data variables.copilot.copilot_cli_short %}.
1. Select **Your organization (Microsoft Entra)**. {% data variables.copilot.copilot_cli_short %} automatically signs you in with your existing Microsoft Entra account.

After you sign in, models permitted by your entitlements appear in the `/model` picker. For more information on how this works with Microsoft 365 Copilot, see [AUTOTITLE](/copilot/concepts/copilot-surfaces/copilot-cli#using-microsoft-365-copilot-models).

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
1. Under **Authorized OAuth Apps**, click {% octicon "kebab-horizontal" aria-label="The horizontal kebab icon" %} next to **{% data variables.copilot.copilot_cli %}** to expand the menu and select **Revoke**.

## Next steps

If you run into authentication problems, see [AUTOTITLE](/copilot/how-tos/copilot-cli/set-up-copilot-cli/troubleshoot-copilot-cli-auth).
