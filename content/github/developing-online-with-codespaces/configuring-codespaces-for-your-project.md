---
title: Configuring Codespaces for your project
intro: You can set up a default configuration for every new codespace for your repository to ensure that contributors have all the tools and settings they need in their online development environment.
product: '{% data reusables.gated-features.codespaces %}'
permissions: People with write permissions to a repository can create or edit the default codespace configuration.
redirect_from:
  - /github/developing-online-with-github-codespaces/configuring-github-codespaces-for-your-project
versions:
  free-pro-team: '*'
---

{% data reusables.codespaces.release-stage %}

### About default codespace configurations

{% data reusables.codespaces.about-configuration %}

If you don't define a configuration in your repository, {% data variables.product.prodname_dotcom %} creates a codespace with a base Linux image. The base Linux image includes tools for Python, Node.js, JavaScript, TypeScript, C++, Java, C#, F#, .NET Core, PHP, PowerShell, Go, Ruby, and Rust. For more information about the base Linux image, see the [`microsoft/vscode-dev-containers`](https://github.com/microsoft/vscode-dev-containers/tree/master/containers/codespaces-linux) repository.

{% data reusables.codespaces.about-personalization %} {% data reusables.codespaces.codespace-config-order %} For more information, see "[Personalizing {% data variables.product.prodname_codespaces %} for your account](/github/developing-online-with-codespaces/personalizing-codespaces-for-your-account)."

You can create a default codespace configuration using a pre-built container configuration for your project type, or you can create a custom configuration specific to your project's needs.

{% data variables.product.prodname_codespaces %}  uses settings contained in a configuration file named `devcontainer.json`. {% data reusables.codespaces.devcontainer-location %}

You can use your `devcontainer.json` to set default settings for the entire codespace environment, including the {% data variables.product.prodname_vscode %} editor, but you can also set editor-specific settings in a file named `.vscode/settings.json`.

Changes to a repository's codespace configuration apply only to every new codespace and do not affect any existing codespace.

### Using a pre-built container configuration

You can use any pre-built container configuration for {% data variables.product.prodname_vscode %} that is available in the [`vscode-dev-containers`](https://github.com/microsoft/vscode-dev-containers) repository. Pre-built container definitions include a common configuration for a particular project type, and can help you quickly get started with a configuration that already has the appropriate container options, {% data variables.product.prodname_vscode %} settings, and {% data variables.product.prodname_vscode %} extensions that should be installed.

1. Clone or download the [`vscode-dev-containers`](https://github.com/microsoft/vscode-dev-containers) repository.
1. In the `vscode-dev-containers` repository, navigate to the [`containers`](https://github.com/microsoft/vscode-dev-containers/tree/master/containers) folder, then choose a container configuration for your project's needs. We'll use the [Node.js & JavaScript](https://aka.ms/vscode-dev-containers/definitions/node) container configuration as an example.
1. From the [`Node.js & JavaScript`](https://aka.ms/vscode-dev-containers/definitions/node) folder, copy the `.devcontainer` folder to the root of your project's repository.
1. Commit and push the new configuration to your project's repository on {% data variables.product.prodname_dotcom %}.

Each new codespace created from a branch which contains the `.devcontainer` folder will be configured according to the folder's contents. For more information, see "[Creating a codespace](/github/developing-online-with-codespaces/creating-a-codespace)."

### Creating a custom codespace configuration

If none of the pre-built configurations meet your needs, you can create a custom configuration by adding a `devcontainer.json` file. {% data reusables.codespaces.devcontainer-location %}

In the file, you can use supported configuration keys to specify aspects of the codespace's environment, like which {% data variables.product.prodname_vscode %} extensions will be installed.

{% data reusables.codespaces.vscode-settings-order %}

You can define default editor settings for {% data variables.product.prodname_vscode %} in two places.

* Editor settings defined in `.vscode/settings.json` are applied as _Workspace_-scoped settings in the codespace.
* Editor settings defined in the `settings` key in `devcontainer.json` are applied as _Remote [Codespaces]_-scoped settings in the codespace.

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
