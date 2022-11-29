---
title: Introduction to dev containers
intro: 'When you work in a codespace, the environment you are working in is created using a development container, or dev container, hosted on a virtual machine.'
permissions: People with write permissions to a repository can create or edit the codespace configuration.
redirect_from:
  - /github/developing-online-with-github-codespaces/configuring-github-codespaces-for-your-project
  - /codespaces/setting-up-your-codespace/configuring-codespaces-for-your-project
  - /github/developing-online-with-codespaces/configuring-codespaces-for-your-project
  - /codespaces/customizing-your-codespace/configuring-codespaces-for-your-project
  - /codespaces/setting-up-your-project-for-codespaces/configuring-codespaces-for-your-project
versions:
  fpt: '*'
  ghec: '*'
type: how_to
topics:
  - Codespaces
  - Set up
  - Fundamentals
---

## About dev containers

Development containers, or dev containers, are Docker containers that are specifically configured to provide a fully featured development environment. Whenever you work in a codespace, you are using a dev container on a virtual machine.

You can configure the dev container for a repository so that codespaces created for that repository give you a tailored development environment, complete with all the tools and runtimes you need to work on a specific project. If you don't define a configuration in the repository then {% data variables.product.prodname_github_codespaces %} uses a default configuration, which contains many of the common tools that your team might need for development with your project. For more information, see "[Using the default dev container configuration](#using-the-default-dev-container-configuration)."

The configuration files for a dev container are contained in a `.devcontainer` directory in your repository. You can use {% data variables.product.prodname_vscode %} to add configuration files for you. You can choose from a selection of predefined configurations for various project types. You can use these without further configuration, or you can edit the configurations to refine the development environment they produce. For more information, see "[Using a predefined dev container configuration](#using-a-predefined-dev-container-configuration)."

Alternatively, you can add your own custom configuration files. For more information, see "[Creating a custom dev container configuration](#creating-a-custom-dev-container-configuration)."

You can define a single dev container configuration for a repository, different configurations for different branches, or multiple configurations. When multiple configurations are available, users can choose their preferred configuration when they create a codespace. This is particularly useful for large repositories that contain source code in different programming languages or for different projects. You can create a choice of configurations that allow different teams to work in a codespace that's set up appropriately for the work they are doing.

When you create a codespace from a template, you might start with one or more dev container configuration files in your workspace. To configure your environment further, you can add or remove settings from these files and rebuild the container to apply the changes to the codespace you're working in. If you publish your codespace to a repository on {% data variables.product.product_name %}, then any codespaces created from that repository will share the configuration you've defined. For more information, see "[Applying configuration changes to a codespace](#applying-configuration-changes-to-a-codespace)" and "[Creating a codespace from a template](/codespaces/developing-in-codespaces/creating-a-codespace-from-a-template#publishing-to-a-remote-repository)."

### devcontainer.json

The primary file in a dev container configuration is the `devcontainer.json` file. You can use this file to determine the environment of codespaces created for your repository. The contents of this file define a dev container that can include frameworks, tools, extensions, and port forwarding. The `devcontainer.json` file usually contains a reference to a Dockerfile, which is typically located alongside the `devcontainer.json` file.

If you create a codespace from a repository without a `devcontainer.json` file, or if you start from {% data variables.product.company_short %}'s blank template, the default dev container configuration is used. For more information, see "[Using the default dev container configuration](#using-the-default-dev-container-configuration)."

The `devcontainer.json` file is usually located in the `.devcontainer` directory of your repository. Alternatively, you can locate it directly in the root of the repository, in which case the file name must begin with a period: `.devcontainer.json`. 

If you want to have a choice of dev container configurations in your repository, any alternatives to the  `.devcontainer/devcontainer.json` (or `.devcontainer.json`) file must be located in their own subdirectory at the path `.devcontainer/SUBDIRECTORY/devcontainer.json`. For example, you could have a choice of two configurations: 
* `.devcontainer/database-dev/devcontainer.json` 
* `.devcontainer/gui-dev/devcontainer.json`

When you have multiple `devcontainer.json` files in your repository, each codespace is created from only one of the configurations. Settings cannot be imported or inherited between `devcontainer.json` files. If a `devcontainer.json` file in a custom subdirectory has dependent files, such as the Dockerfile or scripts that are run by commands in the `devcontainer.json` file, it's recommended that you co-locate these files in the same subdirectory.

For information about how to choose your preferred dev container configuration when you create a codespace, see "[Creating a codespace for a repository](/codespaces/developing-in-codespaces/creating-a-codespace-for-a-repository#creating-a-codespace-for-a-repository)."

{% data reusables.codespaces.more-info-devcontainer %}

#### How to use the devcontainer.json

It's useful to think of the `devcontainer.json` file as providing "customization" rather than "personalization." You should only include things that everyone working on your codebase needs as standard elements of the development environment, not things that are personal preferences. Things like linters are good to standardize on, and to require everyone to have installed, so they're good to include in your `devcontainer.json` file. Things like user interface decorators or themes are personal choices that should not be put in the `devcontainer.json` file.

You can personalize your codespaces by using dotfiles and Settings Sync. For more information, see "[Personalizing {% data variables.product.prodname_github_codespaces %} for your account](/codespaces/customizing-your-codespace/personalizing-github-codespaces-for-your-account)."

### Dockerfile

You can add a Dockerfile as part of your dev container configuration. 

The Dockerfile is a text file that contains the instructions needed to create a Docker container image. This image is used to generate a development container each time someone creates a codespace using the `devcontainer.json` file that references this Dockerfile. The instructions in the Dockerfile typically begin by referencing a parent image on which the new image that will be created is based. This is followed by commands that are run during the image creation process, for example to install software packages.

The Dockerfile for a dev container is typically located in the `.devcontainer` folder, alongside the `devcontainer.json` in which it is referenced. 

{% note %}

**Note**: As an alternative to using a Dockerfile you can use the `image` property in the `devcontainer.json` file to refer directly to an existing image you want to use. The image you specify here must be allowed by any organization image policy that has been set. For more information, see "[Restricting the base image for codespaces](/codespaces/managing-codespaces-for-your-organization/restricting-the-base-image-for-codespaces)." If neither a Dockerfile nor an image is found then the default container image is used. For more information, see "[Using the default dev container configuration](#using-the-default-dev-container-configuration)."

{% endnote %}

#### Simple Dockerfile example

The following example uses four instructions:

`ARG` defines a build-time variable.

`FROM` specifies the parent image on which the generated Docker image will be based.

`COPY` copies a file and adds it to the filesystem. 

`RUN` updates package lists and runs a script. You can also use a `RUN` instruction to install software, as shown by the commented out instructions. To run multiple commands, use `&&` to combine the commands into a single `RUN` statement.

```Dockerfile{:copy}
ARG VARIANT="16-buster"
FROM mcr.microsoft.com/vscode/devcontainers/javascript-node:0-${VARIANT}

# [Optional] Uncomment if you want to install an additional version of node using nvm
# ARG EXTRA_NODE_VERSION=10
# RUN su node -c "source /usr/local/share/nvm/nvm.sh && nvm install ${EXTRA_NODE_VERSION}"

# [Optional] Uncomment if you want to install more global node modules
# RUN su node -c "npm install -g <your-package-list-here>"

COPY library-scripts/github-debian.sh /tmp/library-scripts/
RUN apt-get update && bash /tmp/library-scripts/github-debian.sh
```

For more information about Dockerfile instructions, see "[Dockerfile reference](https://docs.docker.com/engine/reference/builder)" in the Docker documentation.

#### Using a Dockerfile

To use a Dockerfile as part of a dev container configuration, reference it in your `devcontainer.json` file by using the `dockerfile` property.

```json{:copy}
{
  ...
  "build": { "dockerfile": "Dockerfile" },
  ...
}
```

Various options are available to you if you want to use existing container orchestration in your dev container. For more information, see the "Orchestration options" section of the [Specification](https://containers.dev/implementors/spec/#orchestration-options) on the Development Containers website.

## Using the default dev container configuration

If you don't define a configuration in your repository, {% data variables.product.prodname_dotcom %} creates a codespace using a default Linux image. This Linux image includes a number of runtime versions for popular languages like Python, Node, PHP, Java, Go, C++, Ruby, and .NET Core/C#. The latest or LTS releases of these languages are used. There are also tools to support data science and machine learning, such as JupyterLab and Conda. The image also includes other developer tools and utilities like Git, GitHub CLI, yarn, openssh, and vim. To see all the languages, runtimes, and tools that are included use the `devcontainer-info content-url` command inside your codespace terminal and follow the URL that the command outputs.

For information about what's included in the default Linux image, see the [`devcontainers/images`](https://github.com/devcontainers/images/tree/main/src/universal) repository. 

The default configuration is a good option if you're working on a small project that uses the languages and tools that {% data variables.product.prodname_github_codespaces %} provides.

## Using a predefined dev container configuration

If you use {% data variables.product.prodname_codespaces %} in {% data variables.product.prodname_vscode %}, or in a web browser, you can create a dev container configuration for your repository by choosing from a list of predefined configurations. These configurations provide common setups for particular project types, and can help you quickly get started with a configuration that already has the appropriate container options, {% data variables.product.prodname_vscode %} settings, and {% data variables.product.prodname_vscode %} extensions that should be installed.

Using a predefined configuration is a great idea if you need some additional extensibility. You can also start with a predefined configuration and amend it as needed for your project. For more information about the definitions of predefined dev containers, see the [`devcontainers/images`](https://github.com/devcontainers/images/tree/main/src) repository.

You can add a predefined dev container configuration either while working in a codespace, or while working on a repository locally. To do this in {% data variables.product.prodname_vscode_shortname %} while you are working locally, and not connected to a codespace, you must have the "Dev Containers" extension installed and enabled. For more information about this extension, see the [{% data variables.product.prodname_vs_marketplace_shortname %}](https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.remote-containers). The following procedure describes the process when you are using a codespace. The steps in {% data variables.product.prodname_vscode_shortname %} when you are not connected to a codespace are very similar.

{% data reusables.codespaces.command-palette-container %}
1. Click the definition you want to use.

   ![Screenshot of a list of predefined container definitions](/assets/images/help/codespaces/predefined-container-definitions-list.png)

1. Follow the prompts to customize your definition. For more information on the options to customize your definition, see "[Adding additional features to your `devcontainer.json` file](#adding-additional-features-to-your-devcontainerjson-file)."
1. Click **OK**.

   ![Screenshot of the OK button](/assets/images/help/codespaces/prebuilt-container-ok-button.png)

1. If you are working in a codespace, apply your changes, by clicking **Rebuild now** in the message at the bottom right of the window. For more information about rebuilding your container, see "[Applying changes to your configuration](#applying-configuration-changes-to-a-codespace)."

   ![Screenshot of a prompt to 'Rebuild now'](/assets/images/help/codespaces/rebuild-prompt.png)

### Adding additional features to your `devcontainer.json` file

{% data reusables.codespaces.about-features %} For more information, see "[Adding features to a `devcontainer.json` file](/codespaces/setting-up-your-project-for-codespaces/adding-features-to-a-devcontainer-file?tool=vscode)."

## Creating a custom dev container configuration

If none of the predefined configurations meets your needs, you can create a custom configuration by writing your own `devcontainer.json` file.

* If you're adding a single `devcontainer.json` file that will be used by everyone who creates a codespace from your repository, create the file within a `.devcontainer` directory at the root of the repository. 
* If you want to offer users a choice of configuration, you can create multiple custom `devcontainer.json` files, each located within a separate subdirectory of the `.devcontainer` directory.

   {% note %}

   **Notes**:
   - You can't locate your `devcontainer.json` files in directories more than one level below `.devcontainer`. For example, a file at `.devcontainer/teamA/devcontainer.json` will work, but `.devcontainer/teamA/testing/devcontainer.json` will not.
   - {% data reusables.codespaces.configuration-choice-templates %} For more information, see "[Setting up a template repository for {% data variables.product.prodname_github_codespaces %}](/codespaces/setting-up-your-project-for-codespaces/setting-up-a-template-repository-for-github-codespaces)."

   {% endnote %}

   If multiple `devcontainer.json` files are found in the repository, they are listed in the codespace creation options page. For more information, see "[Creating a codespace for a repository](/codespaces/developing-in-codespaces/creating-a-codespace-for-a-repository#creating-a-codespace-for-a-repository)."

   ![Screenshot of a choice of configuration files](/assets/images/help/codespaces/configuration-file-choice.png)

### Adding a `devcontainer.json` file

If you don't already have a `devcontainer.json` file in your repository, you can quickly add one from {% data variables.product.prodname_dotcom_the_website %}.
1. Navigate to your repository and click the **{% octicon "code" aria-label="The code icon" %} Code** dropdown.
1. In the **Codespaces** tab, click the ellipsis (**...**), then select **Configure dev container**.

   ![Screenshot of the Code dropdown, with "Configure dev container" highlighted](/assets/images/help/codespaces/configure-dev-container.png)

A new `.devcontainer/devcontainer.json` file will open in the editor. The file will contain some initial properties, including a `features` object to which you can add new tools, libraries, or runtimes. For more information, see "[Adding features to a `devcontainer.json` file](/codespaces/setting-up-your-project-for-codespaces/adding-features-to-a-devcontainer-file?tool=webui)."

If your repository already contains one or more `devcontainer.json` files, then clicking **Configure dev container** will open the existing `devcontainer.json` file with the highest precedence according to the [specification](https://containers.dev/implementors/spec/#devcontainerjson) on containers.dev. 

### Default configuration selection during codespace creation

If `.devcontainer/devcontainer.json` or `.devcontainer.json` exists, it will be the default selection in the list of available configuration files when you create a codespace. If neither file exists, the default dev container configuration will be selected by default. 

![Screenshot of the default configuration choice selected](/assets/images/help/codespaces/configuration-file-choice-default.png)

### Editing the devcontainer.json file

You can add and edit the supported configuration keys in the `devcontainer.json` file to specify aspects of the codespace's environment, like which {% data variables.product.prodname_vscode_shortname %} extensions will be installed. {% data reusables.codespaces.more-info-devcontainer %}

The `devcontainer.json` file is written using the JSONC (JSON with comments) format. This allows you to include comments within the configuration file. For more information, see "[Editing JSON with {% data variables.product.prodname_vscode_shortname %}](https://code.visualstudio.com/docs/languages/json#_json-with-comments)" in the {% data variables.product.prodname_vscode_shortname %} documentation.

{% note %}

**Note**: If you use a linter to validate the `devcontainer.json` file, make sure it is set to JSONC and not JSON or comments will be reported as errors.

{% endnote %}

### Interface settings for {% data variables.product.prodname_vscode_shortname %}

You can configure the interface settings for {% data variables.product.prodname_vscode_shortname %}, with three scopes: Workspace, Remote [Codespaces], and User. You can view these scopes in the {% data variables.product.prodname_vscode_shortname %} Settings editor.

![Screenshot showing the choice of scopes in the Settings editor](/assets/images/help/codespaces/scopes-for-vscode.png)

If a setting is defined in multiple scopes, Workspace settings take priority, then Remote [Codespaces], then User.

You can define default interface settings for {% data variables.product.prodname_vscode_shortname %} in two places.

* Interface settings defined in the `.vscode/settings.json` file in your repository are applied as Workspace-scoped settings in the codespace.
* Interface settings defined in the `settings` key in the `devcontainer.json` file are applied as Remote [Codespaces]-scoped settings in the codespace.

## Applying configuration changes to a codespace

Changes to a configuration will be applied the next time you create a codespace. However, you can apply your changes to an existing codespace by rebuilding the container. You can do this within a codespace in the {% data variables.product.prodname_vscode_shortname %} web client or desktop application, or you can use {% data variables.product.prodname_cli %}.

### Rebuilding the dev container in the {% data variables.product.prodname_vscode_shortname %} web client or desktop application

{% data reusables.codespaces.rebuild-command %}
1. {% data reusables.codespaces.recovery-mode %}

   ![Screenshot of the error message about recovery mode](/assets/images/help/codespaces/recovery-mode-error-message.png)

   - To diagnose the error by reviewing the creation logs, click **View creation log**.
   - To fix the errors identified in the logs, update your `devcontainer.json` file.
   - To apply the changes, rebuild your container. 

### Using {% data variables.product.prodname_cli %} to rebuild a dev container

If you've changed a dev container configuration outside of VS Code (for example, on {% data variables.product.prodname_dotcom_the_website %} or in a JetBrains IDE), you can use {% data variables.product.prodname_cli %} to rebuild the dev container for an existing codespace.

1. In a terminal, enter the following command.

   ```
   gh cs rebuild
   ```

   Your codespaces are listed.

1. Use the arrow keys on your keyboard to highlight the required codespace, then press <kbd>Enter</kbd>.


## Further reading

- "[Prebuilding your codespaces](/codespaces/prebuilding-your-codespaces)"
