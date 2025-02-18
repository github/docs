---
title: Using GitHub Copilot with an account on GHE.com
shortTitle: Authenticate to GHE.com
intro: 'Update your development environment to access a {% data variables.product.prodname_copilot_short %} subscription for an account on {% data variables.enterprise.data_residency_site %}.'
versions:
  feature: copilot
defaultTool: vscode
topics:
  - Copilot
---

To use {% data variables.product.prodname_copilot %} in an IDE or the command line, you must authenticate to an account on {% data variables.product.github %} that has a {% data variables.product.prodname_copilot_short %} license.

If you receive access to {% data variables.product.prodname_copilot_short %} through a {% data variables.enterprise.prodname_managed_user %} owned by an enterprise on {% data variables.enterprise.data_residency_site %}, you may need to adjust some settings in your IDE before you can authenticate to your account.

Use the **tabs at the top of this article** to see instructions for your environment.

{% vscode %}

## Authenticating from {% data variables.product.prodname_vscode_shortname %}

1. To open your {% data variables.product.prodname_vscode_shortname %} settings, press <kbd>Command</kbd>+<kbd>,</kbd> (Mac) or <kbd>Ctrl</kbd>+<kbd>,</kbd> (Windows).
1. In the search bar, search for `enterprise`.
1. For the `Github-enterprise: Uri` setting, enter the URL where you access {% data variables.product.github %}. For example: `https://{% data variables.enterprise.data_residency_example_domain %}`.
1. In the {% data variables.product.prodname_vscode_shortname %} settings, search for `copilot`.
1. Under "GitHub > Copilot: Advanced," click **Edit in settings.json**.
1. Inside the `github.copilot.advanced` property, add `"authProvider": "github-enterprise"`. For example:

   ```json copy
   "github.copilot.advanced": {
        "authProvider": "github-enterprise"
   },
   ```

1. Save the `settings.json` file.
1. You will be shown a prompt asking you to sign in to use {% data variables.product.prodname_copilot %}. Click **Sign in to {% data variables.product.github %}**, then follow the prompts to authorize your account.

   If you **don't see the prompt**, try restarting {% data variables.product.prodname_vscode_shortname %}.

If you ever need to switch to an account on {% data variables.product.prodname_dotcom_the_website %}, remove the `authProvider` setting from `settings.json`.

{% endvscode %}

{% jetbrains %}

## Authenticating from JetBrains IDEs

To authenticate to {% data variables.enterprise.data_residency_site %} in a JetBrains editor, you must install version 1.4.11 or later of the {% data variables.product.prodname_copilot_short %} extension. You must then configure the extension to work with {% data variables.enterprise.data_residency_site %}.

1. To open the editor preferences or settings dialog, press <kbd>Command</kbd>+<kbd>,</kbd> (Mac) or <kbd>Ctrl</kbd>+<kbd>Alt</kbd>+<kbd>S</kbd> (Windows).
1. In the left sidebar, expand the "Languages & Frameworks" section, then click **{% data variables.product.prodname_copilot %}**.
1. In the "Authentication Provider" field, enter the hostname where you access {% data variables.product.github %}. For example: `{% data variables.enterprise.data_residency_example_domain %}`.
1. To save your changes, click **OK**.
1. To sign in, open the **Tools** menu, then select **{% data variables.product.prodname_copilot %}** > **Login to {% data variables.product.github %}**. Follow the prompts to sign in.

If you ever need to switch to an account on {% data variables.product.prodname_dotcom_the_website %}, remove the value you entered in the "Authentication Provider" field.

{% endjetbrains %}

{% xcode %}

## Authenticating from Xcode

1. Open the "{% data variables.product.prodname_copilot %} for Xcode" application.
1. Click the **Advanced** tab.
1. In the "Auth provider URL" field, enter the URL where you access {% data variables.product.github %}. For example: `https://{% data variables.enterprise.data_residency_example_domain %}`.
1. Authorize the extension by following the instructions in [Signing in to {% data variables.product.prodname_copilot %}](/copilot/managing-copilot/configure-personal-settings/installing-the-github-copilot-extension-in-your-environment?tool=xcode#signing-in-to-github-copilot).

{% endxcode %}

{% cli %}

## Authenticating from the command line

To use the `gh-copilot` extension for the {% data variables.product.prodname_cli %}, you must:

1. Download and install the extension. To do this, you must be authenticated to an account on {% data variables.product.prodname_dotcom_the_website %}. See [AUTOTITLE](/copilot/managing-copilot/configure-personal-settings/installing-github-copilot-in-the-cli#installing-copilot-in-the-cli).
1. Authenticate to the account on {% data variables.enterprise.data_residency_site %} where you receive your {% data variables.product.prodname_copilot_short %} license.

{% data variables.product.prodname_dotcom_the_website %} is the default destination of {% data variables.product.prodname_cli %} requests. To use `gh copilot`, you must ensure requests are sent to {% data variables.enterprise.data_residency_site %}, where you receive your license. You have the following options:
* Include the flag `--hostname SUBDOMAIN.ghe.com` in all `gh copilot` commands.
* Set the `GH_HOST` environment variable to change the default host for all {% data variables.product.prodname_cli %} commands.
* Sign out of {% data variables.product.prodname_dotcom_the_website %} with `gh auth logout`. However, you will need to sign back in to get updates to `gh-copilot`.

For general information on using the {% data variables.product.prodname_cli %} across platforms, see [AUTOTITLE](/github-cli/github-cli/using-multiple-accounts).

{% endcli %}

{% visualstudio %}

## Authenticating from Visual Studio

To authenticate from Visual Studio, follow the steps in [Add your GitHub accounts to your Visual Studio keychain](https://learn.microsoft.com/en-us/visualstudio/ide/work-with-github-accounts?view=vs-2022#enabling-github-enterprise-accounts) on Microsoft Learn.

For the "{% data variables.product.prodname_enterprise %} URL" field, enter the URL where you access {% data variables.product.github %}. For example: `https://{% data variables.enterprise.data_residency_example_domain %}`.

{% endvisualstudio %}

{% eclipse %}

## Authenticating from Eclipse

{% data reusables.copilot.eclipse-public-preview-note %}

1. In the IDE, click **{% octicon "copilot" aria-hidden="true" %} {% data variables.product.prodname_copilot_short %}** to open the menu.
1. Click **Edit Preferences...**.
1. In the **{% data variables.product.prodname_enterprise %} Authentication Endpoint** field, enter the URL where you access {% data variables.product.github %}. For example: `https://{% data variables.enterprise.data_residency_example_domain %}`.
1. Click **Apply**.
1. Open the **{% octicon "copilot" aria-hidden="true" %} {% data variables.product.prodname_copilot_short %}** menu again then click **Sign In to {% data variables.product.prodname_dotcom %}**.

{% endeclipse %}
