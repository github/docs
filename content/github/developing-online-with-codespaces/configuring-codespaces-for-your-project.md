---
title: Configuring Codespaces for your project
intro: You can set up a default configuration for every new codespace for your repository to ensure that contributors have all the tools and settings they need in their online development environment.
product: '{% data reusables.gated-features.codespaces %}'
permissions: People with write permissions to a repository can create or edit the default codespace configuration.
redirect_from:
  - /github/developing-online-with-github-codespaces/configuring-github-codespaces-for-your-project
versions:
  free-pro-team: '*'
topics:
  - codespaces
---

{% data reusables.codespaces.release-stage %}

### About default codespace configurations

{% data reusables.codespaces.about-configuration %}

If you don't define a configuration in your repository, {% data variables.product.prodname_dotcom %} creates a codespace with a base Linux image. The base Linux image includes tools for Python, Node.js, JavaScript, TypeScript, C++, Java, C#, F#, .NET Core, PHP, PowerShell, Go, Ruby, and Rust. For more information about the base Linux image, see the [`microsoft/vscode-dev-containers`](https://github.com/microsoft/vscode-dev-containers/tree/master/containers/codespaces-linux) repository.

{% data reusables.codespaces.about-personalization %} {% data reusables.codespaces.codespace-config-order %} For more information, see "[Personalizing {% data variables.product.prodname_codespaces %} for your account](/github/developing-online-with-codespaces/personalizing-codespaces-for-your-account)."

You can create a default codespace configuration using a pre-built container configuration for your project type, or you can create a custom configuration specific to your project's needs.

{% data variables.product.prodname_codespaces %}  uses settings contained in a configuration file named `devcontainer.json`. {% data reusables.codespaces.devcontainer-location %}

Each new codespace created from a branch that contains the `.devcontainer` folder will be configured according to the folder's contents. For more information, see "[Creating a codespace](/github/developing-online-with-codespaces/creating-a-codespace)."

You can use your `devcontainer.json` to set default settings for the entire codespace environment, including the {% data variables.product.prodname_vscode %} editor, but you can also set editor-specific settings in a file named `.vscode/settings.json`.

### Using a pre-built container configuration

Pre-built container definitions include a common configuration for a particular project type, and can help you quickly get started with a configuration that already has the appropriate container options, {% data variables.product.prodname_vscode %} settings, and {% data variables.product.prodname_vscode %} extensions that should be installed.

1. Access the command palette (`shift command P` / `shift control P`), then start typing "Codespaces: Add Development Container Configuration Files...". Click **Codespaces: Add Development Container Configuration Files...**
  !["Codespaces: Add Development Container Configuration Files..." in the command palette](/assets/images/help/codespaces/add-prebuilt-container-command.png)
1. Click the definition you want to use.
  ![List of predefined container definitions](/assets/images/help/codespaces/predefined-container-definitions-list.png)
1. Follow the prompts to customize your definition.
1. Click **OK**.
  ![OK button](/assets/images/help/codespaces/prebuilt-container-ok-button.png)
1. To apply the changes, in the bottom right corner of the screen, click **Rebuild now**. For more information about rebuilding your container, see "[Applying changes to your configuration](#applying-changes-to-your-configuration)."
  !["Codespaces: Rebuild Container" in the command palette](/assets/images/help/codespaces/rebuild-prompt.png)

### Creating a custom codespace configuration

If none of the pre-built configurations meet your needs, you can create a custom configuration by adding a `devcontainer.json` file. {% data reusables.codespaces.devcontainer-location %}

In the file, you can use supported configuration keys to specify aspects of the codespace's environment, like which {% data variables.product.prodname_vscode %} extensions will be installed.

{% data reusables.codespaces.vscode-settings-order %}

You can define default editor settings for {% data variables.product.prodname_vscode %} in two places.

* Editor settings defined in `.vscode/settings.json` are applied as _Workspace_-scoped settings in the codespace.
* Editor settings defined in the `settings` key in `devcontainer.json` are applied as _Remote [Codespaces]_-scoped settings in the codespace.

After updating the `devcontainer.json` file, you can rebuild the container for your codespace to apply the changes. For more information, see "[Applying changes to your configuration](#applying-changes-to-your-configuration)."

### Supported codespace configuration keys

You can use configuration keys supported by {% data variables.product.prodname_codespaces %} in `devcontainer.json`.

#### General settings

- `name`
- `settings`
- `extensions`
- `forwardPorts`
- `postCreateCommand`

#### Docker, Dockerfile, or image settings

- `image`
- `dockerFile`
- `context`
- `containerEnv`
- `remoteEnv`
- `containerUser`
- `remoteUser`
- `mounts`
- `runArgs`
- `overrideCommand`
- `dockerComposeFile`

For more information about the available settings for `devcontainer.json`, see [devcontainer.json reference](https://aka.ms/vscode-remote/devcontainer.json) in the {% data variables.product.prodname_vscode %} documentation.

### Applying changes to your configuration

{% data reusables.codespaces.apply-devcontainer-changes %}

1. {% data reusables.codespaces.rebuild-command %}
  !["Codespaces: Rebuild Container" in the command palette](/assets/images/help/codespaces/rebuild-container-command.png)
1. {% data reusables.codespaces.recovery-mode %} Fix the errors in the configuration.
  ![Error message about recovery mode](/assets/images/help/codespaces/recovery-mode-error-message.png)
   - To diagnose the error by reviewing the creation logs, click **View creation log**.
   - To fix the errors identified in the logs, update your `devcontainer.json` file.
   - To apply the changes, rebuild your container. {% data reusables.codespaces.rebuild-command %}
