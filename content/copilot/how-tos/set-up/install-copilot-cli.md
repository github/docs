---
title: Installing GitHub Copilot CLI
shortTitle: Install Copilot CLI
intro: 'Learn how to install {% data variables.copilot.copilot_cli_short %} so that you can use {% data variables.product.prodname_copilot_short %} directly from the command line.'
versions:
  feature: copilot
topics:
  - Copilot
  - CLI
redirect_from:
  - /copilot/how-tos/set-up/install-copilot-in-the-cli
  - /copilot/github-copilot-in-the-cli/enabling-github-copilot-in-the-cli
  - /copilot/github-copilot-in-the-cli/setting-up-github-copilot-in-the-cli
  - /copilot/github-copilot-in-the-cli/installing-github-copilot-in-the-cli
  - /copilot/managing-copilot/configure-personal-settings/installing-github-copilot-in-the-cli
  - /copilot/how-tos/personal-settings/installing-github-copilot-in-the-cli
  - /copilot/how-tos/set-up/installing-github-copilot-in-the-cli
contentType: how-tos
category:
  - Configure Copilot
---

{% data reusables.cli.preview-note-cli %}

To find out about {% data variables.copilot.copilot_cli_short %} before you install it, see [AUTOTITLE](/copilot/concepts/agents/about-copilot-cli).

## Prerequisites

* **An active {% data variables.product.prodname_copilot %} subscription**. See [{% data variables.product.prodname_copilot_short %} plans](https://github.com/features/copilot/plans?ref_product=copilot&ref_type=engagement&ref_style=text).
* (On Windows) **PowerShell** v6 or higher

If you have access to {% data variables.product.prodname_copilot %} via your organization or enterprise, you cannot use {% data variables.copilot.copilot_cli_short %} if your organization owner or enterprise administrator has disabled it in the organization or enterprise settings. See [AUTOTITLE](/copilot/managing-copilot/managing-github-copilot-in-your-organization/managing-github-copilot-features-in-your-organization/managing-policies-for-copilot-in-your-organization).

## Installing or updating {% data variables.copilot.copilot_cli_short %}

You can install {% data variables.copilot.copilot_cli_short %} using WinGet (Windows), Homebrew (macOS and Linux), npm (all platforms), or an install script (macOS and Linux).

### Installing with WinGet (Windows)

```powershell copy
winget install GitHub.Copilot
```

To install the prerelease version:

```powershell copy
winget install GitHub.Copilot.Prerelease
```

### Installing with Homebrew (macOS and Linux)

```shell copy
brew install copilot-cli
```

To install the prerelease version:

```shell copy
brew install copilot-cli@prerelease
```

### Installing with npm (all platforms, requires Node.js 22+)

```shell copy
npm install -g @github/copilot
```

To install the prerelease version:

```shell copy
npm install -g @github/copilot@prerelease
```

### Installing with the install script (macOS and Linux)

```shell copy
curl -fsSL https://gh.io/copilot-install | bash
```

Or:

```shell copy
wget -qO- https://gh.io/copilot-install | bash
```

To run as root and install to `/usr/local/bin`, use `| sudo bash`.

To install to a custom directory, set the `PREFIX` environment variable. It defaults to `/usr/local` when run as root or `$HOME/.local` when run as a non-root user.

To install a specific version, set the `VERSION` environment variable. It defaults to the latest version.

For example, to install version `v0.0.369` to a custom directory:

```shell copy
curl -fsSL https://gh.io/copilot-install | VERSION="v0.0.369" PREFIX="$HOME/custom" bash
```

### Download from {% data variables.product.prodname_dotcom_the_website %}

You can download the executables directly from [the `copilot-cli` repository](https://github.com/github/copilot-cli/releases/).

Download the executable for your platform, unpack it, and run.

## Authenticating with {% data variables.copilot.copilot_cli_short %}

On first launch, if you're not currently logged in to {% data variables.product.github %}, you'll be prompted to use the `/login` slash command. Enter this command and follow the on-screen instructions to authenticate.

### Authenticating with a {% data variables.product.pat_generic %}

You can also authenticate using a {% data variables.product.pat_v2 %} with the "{% data variables.product.prodname_copilot_short %} Requests" permission enabled.

1. Visit [{% data variables.product.pat_v2_caps_plural %}](https://github.com/settings/personal-access-tokens/new).
1. Under "Permissions," click **Add permissions** and select **{% data variables.product.prodname_copilot_short %} Requests**.
1. Click **Generate token**.
1. Add the token to your environment using the `GH_TOKEN` or `GITHUB_TOKEN` environment variable (in order of precedence).

## Next steps

You can now use {% data variables.product.prodname_copilot_short %} from the command line. See [AUTOTITLE](/copilot/how-tos/use-copilot-agents/use-copilot-cli).
