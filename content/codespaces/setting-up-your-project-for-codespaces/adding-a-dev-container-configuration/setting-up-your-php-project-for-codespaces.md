---
title: Setting up a PHP project for GitHub Codespaces
allowTitleToDifferFromFilename: true
shortTitle: Setting up a PHP project
intro: 'Get started with a PHP project in {% data variables.product.prodname_github_codespaces %} by creating a custom dev container configuration.'
versions:
  fpt: '*'
  ghec: '*'
redirect_from:
  - /codespaces/getting-started-with-codespaces/getting-started-with-your-php-project-in-codespaces
  - /codespaces/setting-up-your-project-for-codespaces/setting-up-your-php-project-for-codespaces
type: tutorial
topics:
  - Codespaces
  - Developer
  - Set up
---

## Introduction

This guide shows you how to set up an example PHP project {% data reusables.codespaces.setting-up-project-intro %}

## Step 1: Open the project in a codespace

{% data reusables.getting-started.sign-in-dotcom %}
1. Go to https://github.com/microsoft/vscode-remote-try-php.
{% data reusables.codespaces.use-this-template %}

When you create a codespace, your project is created on a remote virtual machine that is dedicated to you. By default, the container for your codespace has many languages and runtimes including PHP. It also includes a common set of tools, such as Composer, XDebug, Apache, pecl, nvm, git, lynx, and curl.

{% data reusables.codespaces.customize-vcpus-and-ram %}

## Step 2: Add a dev container configuration

The default development container, or "dev container," for {% data variables.product.prodname_github_codespaces %} will allow you to work successfully on a PHP project like [vscode-remote-try-php](https://github.com/microsoft/vscode-remote-try-php). However, we recommend that you configure your own dev container to include all of the tools and scripts your project needs. This will ensure a fully reproducible environment for all {% data variables.product.prodname_github_codespaces %} users in your repository.

{% data reusables.codespaces.setup-custom-devcontainer %}
{% data reusables.codespaces.command-palette-container %}

1. Type `php` and click **PHP**. Other options are available if your project uses particular tools. For example, **PHP & MariaDB**.

1. Choose the version of PHP you want to use for your project. In this case, select the version marked "(default)."

1. A list of additional features you can install is displayed. We'll install {% data variables.product.prodname_cli %}, a tool for interacting with {% data variables.product.prodname_dotcom %} from the command line. To install this tool, type `github`, select `{% data variables.product.prodname_cli %}`, then click **OK**, then select **Keep defaults**.

{% data reusables.codespaces.overwrite-devcontainer-config %}
{% data reusables.codespaces.details-of-devcontainer-config %}

```jsonc
// For format details, see https://aka.ms/devcontainer.json. For config options, see the
// README at: https://github.com/devcontainers/templates/tree/main/src/php
{
  "name": "PHP",
  // Or use a Dockerfile or Docker Compose file. More info: https://containers.dev/guide/dockerfile
  "image": "mcr.microsoft.com/devcontainers/php:1-8.2-bullseye",

  // Features to add to the dev container. More info: https://containers.dev/features.
  // "features": {},

  // Configure tool-specific properties.
  // "customizations": {},

  // Use 'forwardPorts' to make a list of ports inside the container available locally.
  "forwardPorts": [
    8080
  ],
  "features": {
    "ghcr.io/devcontainers/features/github-cli:1": {}
  }

  // Use 'postCreateCommand' to run commands after the container is created.
  // "postCreateCommand": "sudo chmod a+x \"$(pwd)\" && sudo rm -rf /var/www/html && sudo ln -s \"$(pwd)\" /var/www/html"

  // Uncomment to connect as root instead. More info: https://aka.ms/dev-containers-non-root.
  // "remoteUser": "root"
}
```

{% data reusables.codespaces.devcontainer-properties-1 %}
{% data reusables.codespaces.devcontainer-properties-2 %}
{% data reusables.codespaces.additional-container-config %}

## Step 3: Modify your devcontainer.json file

With your dev container configuration added and a basic understanding of what everything does, you can now make changes to customize your environment further. In this example, you'll add properties that will:

* Run `composer install`, after the dev container is created, to install the dependencies listed in a `composer.json` file.
* Automatically install a {% data variables.product.prodname_vscode_shortname %} extension in this codespace.

1. In the `devcontainer.json` file, delete the two commented-out lines about features:

   ```jsonc
   // Features to add to the dev container. More info: https://containers.dev/features.
   // "features": {},
   ```

1. Edit the `customizations` property as follows to install the "Composer" extension.

   ```jsonc copy
   // Configure tool-specific properties.
   "customizations": {
     // Configure properties specific to VS Code.
     "vscode": {
       "extensions": [
         "ikappas.composer"
       ]
     }
   },
   ```

1. Add a comma after the `features` property.

   ```json
   "features": {
     "ghcr.io/devcontainers/features/github-cli:1": {}
   },
   ```

1. Uncomment the `postCreateCommand` property and add some text to the end to run the command `composer install` if a `composer.json` file exists. (The existing commands are just some setup procedures that allow Apache to access the files in the workspace.)

   ```jsonc copy
   // Use 'postCreateCommand' to run commands after the container is created.
   "postCreateCommand": "sudo chmod a+x \"$(pwd)\" && sudo rm -rf /var/www/html && sudo ln -s \"$(pwd)\" /var/www/html; if [ -f composer.json ];then composer install;fi"
   ```

  The `devcontainer.json` file should now look similar to this, depending on which image you chose:

   ```jsonc
   // For format details, see https://aka.ms/devcontainer.json. For config options, see the
   // README at: https://github.com/devcontainers/templates/tree/main/src/php
   {
     "name": "PHP",
     // Or use a Dockerfile or Docker Compose file. More info: https://containers.dev/guide/dockerfile
     "image": "mcr.microsoft.com/devcontainers/php:1-8.2-bullseye",

     // Configure tool-specific properties.
     "customizations": {
       // Configure properties specific to VS Code.
       "vscode": {
         "extensions": [
           "ikappas.composer"
         ]
       }
     },

     // Use 'forwardPorts' to make a list of ports inside the container available locally.
     "forwardPorts": [
       8080
     ],
     "features": {
       "ghcr.io/devcontainers/features/github-cli:1": {}
     },

     // Use 'postCreateCommand' to run commands after the container is created.
     "postCreateCommand": "sudo chmod a+x \"$(pwd)\" && sudo rm -rf /var/www/html && sudo ln -s \"$(pwd)\" /var/www/html; if [ -f composer.json ];then composer install;fi"

     // Uncomment to connect as root instead. More info: https://aka.ms/dev-containers-non-root.
     // "remoteUser": "root"
   }
   ```

{% data reusables.codespaces.save-changes %}
{% data reusables.codespaces.rebuild-command %}
   {% data reusables.codespaces.rebuild-reason %}

   After the dev container is rebuilt, and your codespace becomes available again, the `postCreateCommand` will have been run, installing any Composer dependencies, and the "Composer" extension will be available for use.

## Step 4: Run your application

In the previous section, you modified the `postCreateCommand` to install a set of packages via the `composer install` command. With the dependencies now installed, you can run the application. However, in this scenario we first need to change the ports that Apache will listen on. We're forwarding port 8080, so we'll instruct Apache to use this port rather than the default port 80.

1. In the Terminal of your codespace, enter:

   ```shell copy
   sudo sed -i 's/Listen 80$//' /etc/apache2/ports.conf
   ```

1. Then, enter:

   ```shell copy
   sudo sed -i 's/<VirtualHost \*:80>/ServerName 127.0.0.1\n<VirtualHost \*:8080>/' /etc/apache2/sites-enabled/000-default.conf
   ```

1. Then start Apache using its control tool:

   ```shell copy
   apache2ctl start
   ```

1. When your project starts, you should see a "toast" notification message at the bottom right corner of {% data variables.product.prodname_vscode_shortname %}, telling you that your application is available on a forwarded port. To view the running application, click **Open in Browser**.

## Step 5: Commit your changes

{% data reusables.codespaces.committing-link-to-procedure %}

## Next steps

You should now be able to add a custom dev container configuration to your own PHP project.

{% data reusables.codespaces.next-steps-adding-devcontainer %}
