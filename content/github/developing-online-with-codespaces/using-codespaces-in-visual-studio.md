---
title: Using Codespaces in Visual Studio
intro: 'You can develop in your codespace directly in {% data variables.product.prodname_vs %} by connecting with your account on {% data variables.product.product_name %}.'
product: '{% data reusables.gated-features.codespaces %}'
versions:
  free-pro-team: '*'
---

{% note %}

**Note:** {% data variables.product.prodname_codespaces %} is currently in limited public beta and subject to change. During the beta period, {% data variables.product.prodname_dotcom %} does not make any guarantees about the availability of {% data variables.product.prodname_codespaces %}. [Sign up for the limited public beta](https://github.com/features/codespaces/signup-vs). For more information about joining the beta, see "[About {% data variables.product.prodname_codespaces %}](/github/developing-online-with-codespaces/about-codespaces#joining-the-beta)."

{% endnote %}

### About Codespaces in {% data variables.product.prodname_vs %}

You can create a codespace in {% data variables.product.prodname_vs %} to develop applications in a Windows environment. When you use a codespace in {% data variables.product.prodname_vs %}, you can browse source code, build solutions, and commit changes to your repository.

You must create a codespace in {% data variables.product.prodname_vs %} to use it with the application. Codespaces created outside of {% data variables.product.prodname_vs %} can not currently be used with {% data variables.product.prodname_vs %}.

### Prerequisites

Before you configure a codespace in {% data variables.product.prodname_vs %}, you must download the latest version of [{% data variables.product.prodname_vs %} Preview](https://aka.ms/vspreview).

#### Enabling the connection between {% data variables.product.prodname_vs %} and {% data variables.product.prodname_github_codespaces %}

Connecting to {% data variables.product.prodname_github_codespaces %}  with the {% data variables.product.prodname_vs %} Preview is not enabled by default, so you will first need to enable the Preview Features option.

1. In {% data variables.product.prodname_vs %} Preview, use the Tools drop-down menu, then click **Options**.
2. Under **Environment**, select **Preview Features** and check the **Connect to {% data variables.product.prodname_github_codespaces %}** preview feature.
  ![Check the Connect to {% data variables.product.prodname_github_codespaces %} preview feature](/assets/images/help/codespaces/connect-to-github-codespaces-preview-feature.png)
3. You will need to restart {% data variables.product.prodname_vs %} for the feature to be available.

### Creating a codespace in {% data variables.product.prodname_vs %}

1. When you launch {% data variables.product.prodname_vs %}, the Start Window will show a **Connect to a codespace** button under "Get started".
  ![Visual Studio Start window with Connect to a codespace](/assets/images/help/codespaces/visual-studio-start-window.png)
2. Click **Connect to a codespace**.
3. Click **Sign in to {% data variables.product.prodname_dotcom %}** and follow the prompts, or click **Create one!** to create a new {% data variables.product.prodname_dotcom %} account and sign into the account.
  ![Visual Studio sign in to {% data variables.product.prodname_dotcom %}](/assets/images/help/codespaces/visual-studio-sign-in-to-github.png)
4. Under "Codespace details", type the repository's URL you want {% data variables.product.prodname_github_codespaces %} to clone into your codespace.
5. Optionally, use the Instance type and Suspend after drop-down menus to configure more codespace details.
  ![Visual Studio codespace details](/assets/images/help/codespaces/visual-studio-codespace-details.png)
6. Click **Create and Connect**. {% data variables.product.prodname_github_codespaces %} will begin preparing the codespace and open {% data variables.product.prodname_vs %} after the codespace is ready. The codespace name will appear in the remote indicator in the menu.
   ![Visual Studio connected to eShopOnWeb repository codespace](/assets/images/help/codespaces/visual-studio-eshoponweb-codespace.png)

### Opening a codespace in {% data variables.product.prodname_vs %}

1. Use the File drop-down menu, and click **Connect to a Codespace**.
   ![Visual Studio File Connect to a codespace menu item](/assets/images/help/codespaces/visual-studio-file-connect-to-codespace.png)
2. Under "{% data variables.product.prodname_github_codespaces %}", click the codespace you want to connect to, then click **Connect**.
   ![Visual Studio displaying available codespaces and details](/assets/images/help/codespaces/visual-studio-connect-codespace.png)

### Configuring a codespace for {% data variables.product.prodname_vs %}

A codespace, created with {% data variables.product.prodname_vs %}, can be customized through a new tool called devinit, a command line tool included with {% data variables.product.prodname_vs %}.

#### devinit

[devinit](https://docs.microsoft.com/visualstudio/devinit/getting-started-with-devinit) lets you install additional frameworks and tools into your Windows development codespaces, modify environment variables, and more. 

devinit supports a configuration file called [devinit.json](https://docs.microsoft.com/visualstudio/devinit/devinit-json). You can add this file to your project if you want to create a customized and repeatable development environment. When you use devinit with a [devcontainer.json](https://docs.microsoft.com/visualstudio/ide/codespaces/customize-codespaces#running-devinit-when-creating-a-codespace) file, your codespaces will be automatically configured on creation.

For more information about Windows codespace configuration and devinit, see [Customize a codespace](https://docs.microsoft.com/visualstudio/ide/codespaces/customize-codespaces) in the {% data variables.product.prodname_vs %} documentation. For more information about devinit, see [Getting started with devinit](https://docs.microsoft.com/visualstudio/devinit/getting-started-with-devinit).
