---
title: Setting up a C# (.NET) project for GitHub Codespaces
shortTitle: Setting up a C# (.NET) project
allowTitleToDifferFromFilename: true
intro: 'Get started with a C# (.NET) project in {% data variables.product.prodname_github_codespaces %} by creating a custom dev container configuration.'
redirect_from:
  - /codespaces/getting-started-with-codespaces/getting-started-with-your-dotnet-project
  - /codespaces/setting-up-your-project-for-codespaces/setting-up-your-dotnet-project-for-codespaces
versions:
  fpt: '*'
  ghec: '*'
type: tutorial
topics:
  - Codespaces
  - Developer
  - Set up
---

## Introduction

This tutorial guide shows you how to set up an example C# (.NET) project {% data reusables.codespaces.setting-up-project-intro %}

## Step 1: Open the project in a codespace

{% data reusables.getting-started.sign-in-dotcom %}
1. Go to https://github.com/microsoft/vscode-remote-try-dotnet.
{% data reusables.codespaces.use-this-template %}

When you create a codespace, your project is created on a remote virtual machine that is dedicated to you. By default, the container for your codespace has many languages and runtimes, including .NET. It also includes a common set of tools like git, wget, rsync, openssh, and nano.

{% data reusables.codespaces.customize-vcpus-and-ram %}

## Step 2: Add a dev container configuration

The default development container, or "dev container," for {% data variables.product.prodname_github_codespaces %} comes with the latest .NET version and common tools preinstalled. However, we recommend that you configure your own dev container to include all of the tools and scripts your project needs. This will ensure a fully reproducible environment for all {% data variables.product.prodname_github_codespaces %} users in your repository.

{% data reusables.codespaces.setup-custom-devcontainer %}
{% data reusables.codespaces.command-palette-container %}
1. Type `c#` and click **C# (.NET)**. Other options are available if your project uses particular tools. For example, C# and MS SQL.

   ![Screenshot of the "Add Dev Container Configuration Files" dropdown, with "c#" entered in the text box and various C# options listed below.](/assets/images/help/codespaces/add-csharp-prebuilt-container.png)

1. Choose the version of .NET you want to use for your project. In this case, select the version marked "(default)."

   ![Screenshot of the "Add Dev Container Configuration Files" dropdown, showing a variety of .NET versions, including "7.0 (default)."](/assets/images/help/codespaces/add-dotnet-version.png)

1. A list of additional features is displayed. We'll install the .NET CLI, a command-line interface for developing, building, running, and publishing .NET applications. To install this tool, type `dotnet`, select `Dotnet CLI`, then click **OK**.

   ![Screenshot of the "Add Dev Container Configuration Files" dropdown, showing "dotnet" in the text box and "Dotnet CLI" in the dropdown list.](/assets/images/help/codespaces/add-dotnet-features.png)

{% data reusables.codespaces.overwrite-devcontainer-config %}
{% data reusables.codespaces.details-of-devcontainer-config %}

```jsonc
// For format details, see https://aka.ms/devcontainer.json. For config options, see the
// README at: https://github.com/devcontainers/templates/tree/main/src/dotnet
{
  "name": "C# (.NET)",
  // Or use a Dockerfile or Docker Compose file. More info: https://containers.dev/guide/dockerfile
  "image": "mcr.microsoft.com/devcontainers/dotnet:0-7.0",
  "features": {
    "ghcr.io/devcontainers/features/dotnet:1": {}
  }

  // Features to add to the dev container. More info: https://containers.dev/features.
  // "features": {},

  // Use 'forwardPorts' to make a list of ports inside the container available locally.
  // "forwardPorts": [5000, 5001],
  // "portsAttributes": {
  //   "5001": {
  //     "protocol": "https"
  //   }
  // }

  // Use 'postCreateCommand' to run commands after the container is created.
  // "postCreateCommand": "dotnet restore",

  // Configure tool-specific properties.
  // "customizations": {},

  // Uncomment to connect as root instead. More info: https://aka.ms/dev-containers-non-root.
  // "remoteUser": "root"
}
```

{% data reusables.codespaces.devcontainer-properties-1 %}
- **portsAttributes** - This property maps a specified port to one or more default options. For more information, see the [dev containers specification](https://containers.dev/implementors/json_reference/#port-attributes) on the Development Containers website.
{% data reusables.codespaces.devcontainer-properties-2 %}

{% data reusables.codespaces.additional-container-config %}

## Step 3: Modify your devcontainer.json file

With your dev container configuration added and a basic understanding of what everything does, you can now make changes to customize your environment further. In this example, you'll add properties that will:
- Forward the port on which the application runs on the remote machine to your local machine.
- Run `dotnet restore`, after the dev container is created, to restore the dependencies required by the application.
- Automatically install a {% data variables.product.prodname_vscode_shortname %} extension in this codespace.

{% data reusables.codespaces.add-comma-after-features %}

   ```jsonc copy
     "features": {
       "ghcr.io/devcontainers/features/dotnet:1": {}
     },

     // Features to add to the dev container. More info: https://containers.dev/features.
     // "features": {},
   ```

1. Uncomment the `forwardPorts` property and change its value to port `5000` only.

   ```jsonc copy
   // Use 'forwardPorts' to make a list of ports inside the container available locally.
   "forwardPorts": [5000],
   ```

1. Uncomment the `postCreateCommand` property.

   ```jsonc copy
   // Use 'postCreateCommand' to run commands after the container is created.
   "postCreateCommand": "dotnet restore",
   ```

{% data reusables.codespaces.add-extension-to-devcontainer %}

   ```jsonc
   // For format details, see https://aka.ms/devcontainer.json. For config options, see the
   // README at: https://github.com/devcontainers/templates/tree/main/src/dotnet
   {
     "name": "C# (.NET)",
     // Or use a Dockerfile or Docker Compose file. More info: https://containers.dev/guide/dockerfile
     "image": "mcr.microsoft.com/devcontainers/dotnet:0-7.0",
     "features": {
       "ghcr.io/devcontainers/features/dotnet:1": {}
     },

     // Use 'forwardPorts' to make a list of ports inside the container available locally.
     "forwardPorts": [5000],
     // "portsAttributes": {
     //   "5001": {
     //     "protocol": "https"
     //   }
     // }

     // Use 'postCreateCommand' to run commands after the container is created.
     "postCreateCommand": "dotnet restore",

     // Configure tool-specific properties.
     "customizations": {
       // Configure properties specific to VS Code.
       "vscode": {
         // Add the IDs of extensions you want installed when the container is created.
         "extensions": [
           "streetsidesoftware.code-spell-checker"
         ]
       }
     }

     // Uncomment to connect as root instead. More info: https://aka.ms/dev-containers-non-root.
     // "remoteUser": "root"
   }
   ```

{% data reusables.codespaces.save-changes %}
{% data reusables.codespaces.rebuild-command %}
   {% data reusables.codespaces.rebuild-reason %}

   After the dev container is rebuilt, and your codespace becomes available again, the `postCreateCommand` will have been run, restoring the required dependencies, and the "Code Spell Checker" extension will be available for use.

## Step 4: Run your application

In the previous section, you used the `postCreateCommand` to install a set of packages via the `dotnet restore` command. With the dependencies now installed, you can run the application.

1. Run the application by pressing `F5` or entering `dotnet watch run` in the Terminal.
1. When the application starts, click the **Ports** tab, right-click port 5000 and click **Open in Browser**.

   ![Screenshot of the "Ports" tab, showing the right-click menu with the cursor pointer pointing to the "Open in Browser" option.](/assets/images/help/codespaces/open-port5000-in-browser.png)

## Step 5: Commit your changes

{% data reusables.codespaces.committing-link-to-procedure %}

## Next steps

You should now be able to add a custom dev container configuration to your own C# (.NET) project.

{% data reusables.codespaces.next-steps-adding-devcontainer %}
