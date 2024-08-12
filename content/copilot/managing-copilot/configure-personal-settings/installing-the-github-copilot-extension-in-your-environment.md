---
title: Installing the GitHub Copilot extension in your environment
shortTitle: Install Copilot extension
intro: 'To use {% data variables.product.prodname_copilot_short %} in your preferred coding environment, you must install the {% data variables.product.prodname_copilot %} extension.'
versions:
  feature: copilot
defaultTool: vscode
topics:
  - Copilot
redirect_from:
  - /copilot/configuring-github-copilot/installing-the-github-copilot-extension-in-your-environment
---

{% azure_data_studio %}

## About the {% data variables.product.prodname_copilot %} extension in Azure Data Studio

Installing the {% data variables.product.prodname_copilot %} extension in Azure Data Studio allows you to receive coding suggestions from {% data variables.product.prodname_copilot_short %} as you type.

To see instructions for other popular coding environments, use the tool switcher at the top of the page.

## Installing the {% data variables.product.prodname_copilot %} extension in Azure Data Studio

1. Make sure you have access to {% data variables.product.prodname_copilot %}. For information, see "[AUTOTITLE](/copilot/about-github-copilot#getting-access-to-github-copilot)."

1. Make sure you have a compatible version of Azure Data Studio. To use {% data variables.product.prodname_copilot %} in Azure Data Studio, you must have Azure Data Studio version 1.44.0 or later installed. See the [Azure Data Studio download page](https://docs.microsoft.com/sql/azure-data-studio/download-azure-data-studio) in the Azure Data Studio documentation.

1. Install the {% data variables.product.prodname_copilot %} extension in Azure Data Studio. See [Install the {% data variables.product.prodname_copilot %} extension](https://learn.microsoft.com/en-us/azure-data-studio/extensions/github-copilot-extension-overview#install-the-github-copilot-extension) in the Microsoft documentation.

1. If a popup window in Azure Data Studio prompts you to sign in to use {% data variables.product.prodname_copilot %}, click **Sign in to {% data variables.product.prodname_dotcom %}** and follow the instructions on screen.

   * If you have previously authorized Azure Data Studio for your account on {% data variables.product.prodname_dotcom %}, {% data variables.product.prodname_copilot %} will be automatically authorized.
   * If you don't get the prompt to authorize, you can view notifications by clicking the bell icon in the bottom panel of the Azure Data Studio window.

1. If you are following the authorization steps, in your browser, {% data variables.product.prodname_dotcom %} will request the necessary permissions for {% data variables.product.prodname_copilot %}. To approve these permissions, click **Authorize Azure Data Studio**.

{% endazure_data_studio %}

{% jetbrains %}

## About the {% data variables.product.prodname_copilot %} extension in JetBrains IDEs

Installing the {% data variables.product.prodname_copilot %} extension in JetBrains IDEs allows you to chat with {% data variables.product.prodname_copilot_short %} in your IDE and receive coding suggestions from {% data variables.product.prodname_copilot_short %} as you type.

To see instructions for other popular coding environments, use the tool switcher at the top of the page.

### Version compatibility

For information about version compatibility of the {% data variables.product.prodname_copilot %} extension in JetBrains IDEs, see [{% data variables.product.prodname_copilot %} Versions](https://plugins.jetbrains.com/plugin/17718-github-copilot/versions) in the JetBrains Marketplace.

### About the license for the {% data variables.product.prodname_copilot %} plugin in JetBrains IDEs

{% data variables.product.prodname_dotcom %}, Inc. is the licensor of the JetBrains plugin. The end user license agreement for this plugin is the [{% data variables.product.prodname_dotcom %} Terms for Additional Products and Features](/free-pro-team@latest/site-policy/github-terms/github-terms-for-additional-products-and-features#github-copilot) and use of this plugin is subject to those terms. JetBrains has no responsibility or liability in connection with the plugin or such agreement. By using the plugin, you agree to the foregoing terms.

## Installing the {% data variables.product.prodname_copilot %} plugin in your JetBrains IDE

The following procedure will guide you through installation of the {% data variables.product.prodname_copilot %} plugin in IntelliJ IDEA. Steps to install the plugin in another supported IDE may differ.

1. Make sure you have access to {% data variables.product.prodname_copilot %}. For information, see "[AUTOTITLE](/copilot/about-github-copilot#getting-access-to-github-copilot)."

1. Make sure you have a JetBrains IDE that is compatible with {% data variables.product.prodname_copilot %}. {% data variables.product.prodname_copilot %} is compatible with the following IDEs:

   {% data reusables.copilot.jetbrains-compatible-ides %}

1. Install the {% data variables.product.prodname_copilot %} plugin for JetBrains. See [{% data variables.product.prodname_copilot %} plugin](https://plugins.jetbrains.com/plugin/17718-github-copilot) in the JetBrains Marketplace.

1. After {% data variables.product.prodname_copilot %} is installed, click **Restart IDE**.

1. After your JetBrains IDE has restarted, click the **Tools** menu. Click **{% data variables.product.prodname_copilot %}**, then click **Login to {% data variables.product.prodname_dotcom %}**.

   ![Screenshot of the expanded "Tools" menu and "{% data variables.product.prodname_copilot %}" sub-menu. The "Login to {% data variables.product.prodname_dotcom %}" option is highlighted in blue.](/assets/images/help/copilot/jetbrains-tools-menu.png)

1. In the "Sign in to {% data variables.product.prodname_dotcom %}" dialog box, to copy the device code and open the device activation window, click **Copy and Open**.

   ![Screenshot of the "Sign in to {% data variables.product.prodname_dotcom %}" dialog. A device code is displayed above a button labeled "Copy and Open".](/assets/images/help/copilot/device-code-copy-and-open.png)

1. A device activation window will open in your browser. Paste the device code, then click **Continue**.

1. {% data variables.product.prodname_dotcom %} will request the necessary permissions for {% data variables.product.prodname_copilot %}. To approve these permissions, click **Authorize {% data variables.product.prodname_copilot %} Plugin**.

1. After the permissions have been approved, your JetBrains IDE will show a confirmation. To begin using {% data variables.product.prodname_copilot %}, click **OK**.

{% endjetbrains %}

{% vimneovim %}

## About the {% data variables.product.prodname_copilot %} extension in Vim/Neovim

Installing the {% data variables.product.prodname_copilot %} extension in Vim/Neovim allows you to receive coding suggestions from {% data variables.product.prodname_copilot_short %} as you type.

To see instructions for other popular coding environments, use the tool switcher at the top of the page.

## Installing the {% data variables.product.prodname_copilot %} extension in Vim/Neovim

{% data variables.product.prodname_dotcom %} recommends that you install the {% data variables.product.prodname_copilot %} plugin with Vim/Neovim's built-in plugin manager. Alternatively, you can use a plugin manager of your choice to install `github/copilot.vim`. For more information, see the [copilot.vim repository](https://github.com/github/copilot.vim).

1. Make sure you have access to {% data variables.product.prodname_copilot %}. For information, see "[AUTOTITLE](/copilot/about-github-copilot#getting-access-to-github-copilot)."

1. Make sure you have a compatible version of Vim/Neovim installed. To use {% data variables.product.prodname_copilot %} in Vim/Neovim you must have Vim version 9.0.0185 / Neovim version 0.6 or above and Node.js version 18 or above. See the [Vim](https://vimhelp.org/) / [Neovim documentation](https://neovim.io/doc/) and the [Node.js website](https://nodejs.org/en/).

1. Install {% data variables.product.prodname_copilot %} using the built-in plugin manager:

   * For **Neovim on macOS or Linux**, run the following command in the terminal.

     ```shell copy
     git clone https://github.com/github/copilot.vim \
     ~/.config/nvim/pack/github/start/copilot.vim
     ```

   * For **Neovim on Windows**, run the following command in Git Bash:

     ```shell copy
     git clone https://github.com/github/copilot.vim.git \
     $HOME/AppData/Local/nvim/pack/github/start/copilot.vim
     ```

   * For **Vim on macOS or Linux**, run the following command in the terminal.

     ```shell copy
     git clone https://github.com/github/copilot.vim \
     ~/.vim/pack/github/start/copilot.vim
     ```

   * For **Vim on Windows**, run the following command in Git Bash:

     ```shell copy
     git clone https://github.com/github/copilot.vim.git \
     $HOME/vimfiles/pack/github/start/copilot.vim
     ```

{% data reusables.copilot.config-enable-copilot-in-vimneovim %}

{% endvimneovim %}

{% visualstudio %}

## About the {% data variables.product.prodname_copilot %} extension in {% data variables.product.prodname_vs %}

Installing the {% data variables.product.prodname_copilot %} extension in {% data variables.product.prodname_vs %} allows you to receive coding suggestions from {% data variables.product.prodname_copilot_short %} as you type.

To see instructions for other popular coding environments, use the tool switcher at the top of the page.

### Version compatibility

Starting from {% data variables.product.prodname_vs %} 2022 Version 17.10, the unified {% data variables.product.prodname_copilot_short %} and {% data variables.product.prodname_copilot_chat %} extension is included by default as a built-in component. For more information, see "[Install GitHub Copilot in Visual Studio](https://learn.microsoft.com/en-us/visualstudio/ide/visual-studio-github-copilot-install-and-states)" in the Microsoft documentation.

## Installing the {% data variables.product.prodname_copilot %} extension in {% data variables.product.prodname_vs %}

1. Make sure you have access to {% data variables.product.prodname_copilot %}. For information, see "[AUTOTITLE](/copilot/about-github-copilot#getting-access-to-github-copilot)."

1. Make sure you have a compatible version of {% data variables.product.prodname_vs %} installed. {% data reusables.copilot.visual-studio-version %}

1. Install the {% data variables.product.prodname_copilot %} in {% data variables.product.prodname_vs %} See "[Install GitHub Copilot in Visual Studio](https://learn.microsoft.com/en-us/visualstudio/ide/visual-studio-github-copilot-install-and-states)" in the Microsoft documentation.

1. After installing the {% data variables.product.prodname_copilot %} extension, to enable {% data variables.product.prodname_copilot %}, ensure you have added your {% data variables.product.prodname_dotcom %} account to {% data variables.product.prodname_vs %}. For more information, see [Add your {% data variables.product.prodname_dotcom %} accounts to your {% data variables.product.prodname_vs %} keychain](https://learn.microsoft.com/en-us/visualstudio/ide/work-with-github-accounts) in the Microsoft documentation.

{% endvisualstudio %}

{% vscode %}

## About the {% data variables.product.prodname_copilot %} extension in {% data variables.product.prodname_vscode %}

Installing the {% data variables.product.prodname_copilot %} extension in {% data variables.product.prodname_vscode %} allows you to receive coding suggestions from {% data variables.product.prodname_copilot_short %} as you type. It also automatically installs the {% data variables.product.prodname_copilot_chat %} extension, which allows you to chat with {% data variables.product.prodname_copilot_short %}.

To see instructions for other popular coding environments, use the tool switcher at the top of the page.

### Version compatibility

{% data reusables.copilot.vscode-version-compatibility %}

## Installing the {% data variables.product.prodname_copilot %} extension in {% data variables.product.prodname_vscode %}

1. Make sure you have access to {% data variables.product.prodname_copilot %}. For information, see "[AUTOTITLE](/copilot/about-github-copilot#getting-access-to-github-copilot)."

1. Install {% data variables.product.prodname_vscode %}. See the [{% data variables.product.prodname_vscode %} download page](https://code.visualstudio.com/Download).

1. Install the [{% data variables.product.prodname_copilot %} extension](https://marketplace.visualstudio.com/items?itemName=GitHub.copilot) in {% data variables.product.prodname_vscode %}. For detailed instructions, see "[Set up {% data variables.product.prodname_copilot %} in {% data variables.product.prodname_vscode %}](https://code.visualstudio.com/docs/copilot/setup)" in the  {% data variables.product.prodname_vscode %} documentation.

{% endvscode %}

## Next steps

* **Get started with {% data variables.product.prodname_copilot_short %}** - Learn how to use {% data variables.product.prodname_copilot_short %} in your preferred coding environment. See "[AUTOTITLE](/copilot/using-github-copilot/using-github-copilot-code-suggestions-in-your-editor)."
