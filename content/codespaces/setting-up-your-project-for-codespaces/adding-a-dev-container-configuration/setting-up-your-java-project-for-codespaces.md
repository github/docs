---
title: Setting up a Java project for GitHub Codespaces
allowTitleToDifferFromFilename: true
shortTitle: Setting up a Java project
intro: 'Get started with a Java project in {% data variables.product.prodname_github_codespaces %} by creating a custom dev container configuration.'
redirect_from:
  - /codespaces/getting-started-with-codespaces/getting-started-with-your-java-project-in-codespaces
  - /codespaces/setting-up-your-project-for-codespaces/setting-up-your-java-project-for-codespaces
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

This guide shows you how to set up an example Java project {% data reusables.codespaces.setting-up-project-intro %}

## Step 1: Open the project in a codespace

{% data reusables.getting-started.sign-in-dotcom %}
1. Go to https://github.com/microsoft/vscode-remote-try-java.
{% data reusables.codespaces.use-this-template %}

When you create a codespace, your project is created on a remote virtual machine that is dedicated to you. By default, the container for your codespace has many languages and runtimes, including Java. It also includes a set of commonly used tools such as Gradle, Maven, git, wget, rsync, openssh, and nano.

{% data reusables.codespaces.customize-vcpus-and-ram %}

## Step 2: Add a dev container configuration

The default development container, or "dev container," for {% data variables.product.prodname_github_codespaces %} will allow you to work successfully on a Java project like [vscode-remote-try-java](https://github.com/microsoft/vscode-remote-try-java). However, we recommend that you configure your own dev container to include all of the tools and scripts your project needs. This will ensure a fully reproducible environment for all {% data variables.product.prodname_github_codespaces %} users in your repository.

{% data reusables.codespaces.setup-custom-devcontainer %}
{% data reusables.codespaces.command-palette-container %}
1. Type `java` and click the **Java** option. Other options are available if your project uses particular tools. For example, Java & PostgreSQL.

   ![Screenshot of the "Add Dev Container Configuration Files" dropdown with "java" entered in the search field and three Java options listed below.](/assets/images/help/codespaces/add-java-prebuilt-container.png)

1. Choose the version of Java you want to use for your project. In this case, select the version marked "(default)."

   ![Screenshot of the "Add Dev Container Configuration Files" dropdown listing a variety of Java versions.](/assets/images/help/codespaces/add-java-version.png)

1. Select the option to **Install Maven** and click **OK**.

   ![Screenshot of the "Add Dev Container Configuration Files" dropdown with the option "Install Maven, a management tool for Java" selected.](/assets/images/help/codespaces/add-maven.png)

1. A list of additional features you can install is displayed. We'll install Ant, the Java library and command-line tool for building applications. To install this feature, type `ant`, select `Ant (via SDKMAN)`, then click **OK**.

   ![Screenshot of the "Add Dev Container Configuration Files" dropdown with "ant" in the search field and the option "Ant (via SDKMAN)" selected.](/assets/images/help/codespaces/add-ant-feature.png)

{% data reusables.codespaces.overwrite-devcontainer-config %}
{% data reusables.codespaces.details-of-devcontainer-config %}

```jsonc
// For format details, see https://aka.ms/devcontainer.json. For config options, see the
// README at: https://github.com/devcontainers/templates/tree/main/src/java
{
  "name": "Java",
  // Or use a Dockerfile or Docker Compose file. More info: https://containers.dev/guide/dockerfile
  "image": "mcr.microsoft.com/devcontainers/java:0-17",

  "features": {
    "ghcr.io/devcontainers/features/java:1": {
      "version": "none",
      "installMaven": "true",
      "installGradle": "false"
    },
    "ghcr.io/devcontainers-contrib/features/ant-sdkman:2": {}
  }

  // Use 'forwardPorts' to make a list of ports inside the container available locally.
  // "forwardPorts": [],

  // Use 'postCreateCommand' to run commands after the container is created.
  // "postCreateCommand": "java -version",

  // Configure tool-specific properties.
  // "customizations": {},

  // Uncomment to connect as root instead. More info: https://aka.ms/dev-containers-non-root.
  // "remoteUser": "root"
}
```

{% data reusables.codespaces.devcontainer-properties-1 %}
{% data reusables.codespaces.devcontainer-properties-2 %}

{% data reusables.codespaces.additional-container-config %}

## Step 3: Modify your devcontainer.json file

With your dev container configuration added and a basic understanding of what everything does, you can now make changes to customize your environment further. In this example, you'll add properties that will:
- Run a command, after the dev container is created, to create a new file.
- Automatically install two {% data variables.product.prodname_vscode_shortname %} extensions in this codespace.

1. In the `devcontainer.json` file, add a comma after the `features` property.

   ```json copy
   "features": {
     "ghcr.io/devcontainers/features/java:1": {
       "version": "none",
       "installMaven": "true",
       "installGradle": "false"
     },
     "ghcr.io/devcontainers-contrib/features/ant-sdkman:2": {}
   },
   ```

1. Uncomment the `postCreateCommand` property and change its value to `echo \"This file was added by the postCreateCommand.\" > TEMP.md`.

   ```jsonc copy
   // Use 'postCreateCommand' to run commands after the container is created.
   "postCreateCommand": "echo \"This file was added by the postCreateCommand.\" > TEMP.md",
   ```

1. Uncomment the `customizations` property and edit it as follows to install the "Code Spell Checker" extension and the "Extension Pack for Java."

   ```jsonc copy
   // Configure tool-specific properties.
   "customizations": {
     // Configure properties specific to VS Code.
     "vscode": {
       // Add the IDs of extensions you want installed when the container is created.
       "extensions": [
         "streetsidesoftware.code-spell-checker",
         "vscjava.vscode-java-pack"
       ]
     }
   }
   ```

  The `devcontainer.json` file should now look similar to this, depending on which image you chose:

   ```jsonc
   // For format details, see https://aka.ms/devcontainer.json. For config options, see the
   // README at: https://github.com/devcontainers/templates/tree/main/src/java
   {
     "name": "Java",
     // Or use a Dockerfile or Docker Compose file. More info: https://containers.dev/guide/dockerfile
     "image": "mcr.microsoft.com/devcontainers/java:0-17",

     "features": {
       "ghcr.io/devcontainers/features/java:1": {
         "version": "none",
         "installMaven": "true",
         "installGradle": "false"
       },
       "ghcr.io/devcontainers-contrib/features/ant-sdkman:2": {}
     },

     // Use 'forwardPorts' to make a list of ports inside the container available locally.
     // "forwardPorts": [],

     // Use 'postCreateCommand' to run commands after the container is created.
     "postCreateCommand": "echo \"This file was added by the postCreateCommand.\" > TEMP.md",

     // Configure tool-specific properties.
     "customizations": {
       // Configure properties specific to VS Code.
       "vscode": {
         // Add the IDs of extensions you want installed when the container is created.
         "extensions": [
           "streetsidesoftware.code-spell-checker",
           "vscjava.vscode-java-pack"
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

   After the dev container is rebuilt, and your codespace becomes available again, the `postCreateCommand` will have been run, creating a `TEMP.md` file, and the two extensions will be available for use.

## Step 4: Run your application

1. Run the application by pressing `F5`.
1. If a "toast" notification message is displayed at the bottom right corner of {% data variables.product.prodname_vscode_shortname %}, asking whether you want to switch to standard mode, click **Yes**.

   ![Screenshot of a popup message: "Run/Debug feature requires Java language server to run in Standard mode. Do you want to switch it to Standard mode now?"](/assets/images/help/codespaces/switch-to-standard-mode.png)

1. When the project files have been imported, click the **Debug Console** tab to see the program output.

   ![Screenshot of program output "Hello Remote World!" in the "Debug Console."](/assets/images/help/codespaces/java-debug-output.png)

## Step 5: Commit your changes

{% data reusables.codespaces.committing-link-to-procedure %}

## Next steps

You should now be able to add a custom dev container configuration to your own Java project.

{% data reusables.codespaces.next-steps-adding-devcontainer %}
