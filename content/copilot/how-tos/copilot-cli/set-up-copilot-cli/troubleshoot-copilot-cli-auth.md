---
title: Troubleshooting GitHub Copilot CLI authentication
shortTitle: Troubleshoot Copilot CLI auth
intro: Diagnose authentication failures when signing in to {% data variables.copilot.copilot_cli_short %}.
versions:
  feature: copilot
topics:
  - Copilot
  - Troubleshooting
contentType: how-tos
category:
  - Configure Copilot CLI
---

## Authentication errors

If you encounter authentication errors, use the table below to identify the cause and resolution.

| Issue                                                   | Cause                                                                                | Fix                                                       | More information                                                                  |
|---------------------------------------------------------|--------------------------------------------------------------------------------------|-----------------------------------------------------------|-----------------------------------------------------------------------------------|
| No authentication information found                     | No credentials stored                                                                | Run `copilot login`                                       | [No authentication information found](#no-authentication-information-found)       |
| 401 Unauthorized                                        | Token revoked or insufficient permissions                                            | Generate token with permissions                           | [Token expired or revoked](#token-expired-or-revoked)                             |
| {% data variables.product.pat_classic_caps %} rejected  | {% data variables.product.pat_classic_caps %} (`ghp_`)                               | Use fine-grained {% data variables.product.pat_generic %} | [{% data variables.product.pat_classic_caps %} rejected](#token-classic-rejected) |
| 403 Forbidden or policy denied                          | {% data variables.product.prodname_copilot_short %} license or enterprise/org policy | Check subscription and org settings                       | [Access denied](#access-denied)                                                   |
| Keychain unavailable                                    | Missing system keychain                                                              | Install `libsecret` or accept plaintext                     | [Keychain access failure](#keychain-access-failure)                               |
| Wrong account                                           | Multiple accounts or env var override                                                | Check env vars, use `/user switch`                        | [Wrong account](#wrong-account)                                                   |

## No authentication information found

{% data variables.copilot.copilot_cli_short %} displays the following error:

<!-- markdownlint-disable GHD005 -->
```text
Error: No authentication information found
Copilot can be authenticated with GitHub using an OAuth Token or a Fine-Grained Personal Access Token
```
<!-- markdownlint-enable GHD005 -->

### Cause 

No credentials exist in any of the checked locations.

### Fix

Use the following steps to find where authentication is missing and restore access.

#### Check your authentication status

 ```bash copy
 gh auth status
 ```
  
If you see a message indicating that you’re not logged in, log in with `gh auth login` or use the OAuth flow with `copilot login`.

#### Check whether an authentication environment variable is set

If you are using an environment variable, check whether the `COPILOT_GITHUB_TOKEN`, `GH_TOKEN`, or `GITHUB_TOKEN` environment variable is set:

 ```bash copy
 echo $COPILOT_GITHUB_TOKEN
 ```
  
If the command prints nothing, the variable is not set. Set the variable to a valid token. To generate a token, see [AUTOTITLE](/copilot/how-tos/copilot-cli/set-up-copilot-cli/authenticate-copilot-cli#authenticate-with-a-personal-access-token-pat).
  
```bash copy
 export $COPILOT_GITHUB_TOKEN=PERSONAL_ACCESS_TOKEN
 ```

#### macOS keychain

 ```bash copy
 security find-generic-password -s copilot-cli
 ```
  
If no item is found, authenticate again with `/login` or `copilot login` to create one.
If an item is found but authentication still fails, remove the saved credential then authenticate again with `/login` or `copilot login`:

  ```bash copy
    security delete-generic-password -s copilot-cli
  ```

## Token expired or revoked

{% data variables.copilot.copilot_cli_short %} displays the following error:

<!-- markdownlint-disable GHD005 -->
```text
Error: Authentication failed

Your GitHub token may be invalid, expired, or lacking the required permissions.

To resolve this, try the following:
  • Start 'copilot' and run the '${LOGIN_COMMAND}' command to re-authenticate
  • If using a Fine-Grained PAT, ensure it has the 'Copilot Requests' permission enabled
  • If using COPILOT_GITHUB_TOKEN, GH_TOKEN or GITHUB_TOKEN environment variable, verify the token is valid and not expired
  • Run 'gh auth status' to check your current authentication status
```
<!-- markdownlint-enable GHD005 -->

### Cause

The token was revoked, has expired, or was created without the required permissions.

### Fix

Review the token's status and permissions on {% data variables.product.prodname_dotcom %}. The token must have the **Copilot Requests** permission. Generate a new token with the required permissions if necessary.  

## {% data variables.product.pat_classic_caps %} rejected

A token starting with `ghp_` is silently ignored and the CLI behaves as if no token is set.

### Cause

Classic {% data variables.product.pat_generic_plural %} are not supported by {% data variables.copilot.copilot_cli_short %}.

### Fix
Generate a fine-grained {% data variables.product.pat_generic %} with the required scopes.

## Access denied

{% data variables.copilot.copilot_cli_short %} displays one of the following errors:

```text
Error: Access denied by policy settings

Your Copilot CLI policy setting may be preventing access. This can happen when:
  • Your organization has restricted Copilot access
  • Your Copilot subscription does not include this feature
  • Required policies have not been enabled by your administrator

To resolve this, visit your Copilot settings: 
```

### Cause

An organization policy blocks {% data variables.copilot.copilot_cli %}, or the user account lacks a {% data variables.product.prodname_copilot %} license.

### Fix

* Check that your account has an active {% data variables.product.prodname_copilot %} license.
* Ask your organization admin to enable {% data variables.copilot.copilot_cli %} in the organization policy.

## Keychain access failure

During login, the CLI prompts you about the system keychain being unavailable and asks whether to store credentials in plaintext.

```text
System keychain unavailable. Store token in plaintext config file? (y/N)
```

### Cause

The system keychain is not accessible. This may occur on Linux systems without `libsecret`, headless servers, or systems with a permission issue.

### Fix

Follow the steps for your operating system to restore secure credential storage.

#### macOS or Windows

On macOS, confirm Keychain Access app is available, and you can unlock your login keychain.
On Windows, confirm Credential Manager is available, and you can access the Windows Vault.
If you can’t access the system credential manager, use plaintext storage (if prompted) or authenticate using an environment variable token, then rerun `/login` or `copilot login`.

#### Linux

On Linux, use the system keyring or store credentials in plaintext.

1. Check whether `secret-tool` is installed:

   ```bash copy
   command -v secret-tool
   ```

1. If `secret-tool` is not found or the search command returns no results, install `libsecret` and its dependencies.

   ```bash copy
   sudo apt sudo apt list libsecret-1-0 libsecret-1-dev libsecret-common gnome-keyring gnome-keyring-pkcs11 seahorse
   ```

1. Once `secret-tool` is installed, search the keyring for a saved credential:

   ```bash copy
   secret-tool search copilot-cli
   ```
   
   If the command returns one or more results, credentials exist in the keyring. Run `copilot login` in the terminal or `/login` in {% data variables.copilot.copilot_cli_short %} again.

## Wrong account

The wrong user is authenticated, or the token belongs to the wrong organization.

### Cause

Multiple accounts are stored, or an environment variable is overriding the stored token.

### Fix

To switch accounts, use `/user switch` at the CLI prompt, or sign out with `/logout` and run `/login` with the correct account.
