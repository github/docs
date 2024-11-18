---
title: Setting up a Python project for GitHub Codespaces
allowTitleToDifferFromFilename: true
shortTitle: Setting up a Python project
intro: 'Get started with a Python project in {% data variables.product.prodname_github_codespaces %} by creating a custom dev container configuration.'
versions:
  fpt: '*'
  ghec: '*'
redirect_from:
  - /codespaces/getting-started-with-codespaces/getting-started-with-your-python-project-in-codespaces
  - /codespaces/setting-up-your-project-for-codespaces/setting-up-your-python-project-for-codespaces
type: tutorial
topics:
  - Codespaces
  - Developer
  - Set up
---

## Introduction

This guide shows you how to set up an example Python project {% data reusables.codespaces.setting-up-project-intro %}

## Step 1: Open the project in a codespace

{% data reusables.getting-started.sign-in-dotcom %}
1. Go to https://github.com/microsoft/vscode-remote-try-python.
{% data reusables.codespaces.use-this-template %}

When you create a codespace, your project is created on a remote virtual machine that is dedicated to you. By default, the container for your codespace has many languages and runtimes, including Python. It also includes a common set of tools like git, wget, rsync, openssh, and nano.

{% data reusables.codespaces.customize-vcpus-and-ram %}

## Step 2: Add a dev container configuration

The default development container, or "dev container," for {% data variables.product.prodname_github_codespaces %} comes with the latest Python version, package managers (pip, Miniconda), and other common tools preinstalled. However, we recommend that you configure your own dev container to include all of the tools and scripts your project needs. This will ensure a fully reproducible environment for all {% data variables.product.prodname_github_codespaces %} users in your repository.

{% data reusables.codespaces.setup-custom-devcontainer %}
{% data reusables.codespaces.command-palette-container %}
1. Start typing `python` and click **Python 3** in the list. Other options are available if your project uses particular tools. For example, Python 3 & PostgreSQL.

   ![Screenshot of the "Add Dev Container Configuration Files" dropdown, listing options for Python.](/assets/images/help/codespaces/add-python-prebuilt-container.png)

1. Choose the version of Python you want to use for your project. In this case, select the version marked "(default)."

   ![Screenshot of the "Add Dev Container Configuration Files" dropdown, listing various versions of Python 3.](/assets/images/help/codespaces/add-python-version.png)

1. A list of additional features is displayed. We'll install Coverage.py, a code coverage tool for Python. To install this tool, type `py`, select `Coverage.py (via pipx)`, then click **OK**.

   ![Screenshot of the "Add Dev Container Configuration Files" dropdown, with "Coverage.py" selected.](/assets/images/help/codespaces/add-python-features.png)

{% data reusables.codespaces.overwrite-devcontainer-config %}
{% data reusables.codespaces.details-of-devcontainer-config %}

```jsonc
// For format details, see https://aka.ms/devcontainer.json. For config options, see the
// README at: https://github.com/devcontainers/templates/tree/main/src/python
{
  "name": "Python 3",
  // Or use a Dockerfile or Docker Compose file. More info: https://containers.dev/guide/dockerfile
  "image": "mcr.microsoft.com/devcontainers/python:0-3.11-bullseye",
  "features": {
    "ghcr.io/devcontainers-contrib/features/coverage-py:2": {}
  }

  // Features to add to the dev container. More info: https://containers.dev/features.
  // "features": {},

  // Use 'forwardPorts' to make a list of ports inside the container available locally.
  // "forwardPorts": [],

  // Use 'postCreateCommand' to run commands after the container is created.
  // "postCreateCommand": "pip3 install --user -r requirements.txt",

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
* Install a package required by the application.
* Install a {% data variables.product.prodname_vscode_shortname %} extension in this codespace.

{% data reusables.codespaces.add-comma-after-features %}

   ```json copy
   "features": {
     "ghcr.io/devcontainers-contrib/features/coverage-py:2": {}
   },

   // Features to add to the dev container. More info: https://containers.dev/features.
   // "features": {},
   ```

1. Uncomment the `postCreateCommand` property.

   ```jsonc copy
   // Use 'postCreateCommand' to run commands after the container is created.
   "postCreateCommand": "pip3 install --user -r requirements.txt",
   ```

{% data reusables.codespaces.add-extension-to-devcontainer %}

   ```jsonc
   // For format details, see https://aka.ms/devcontainer.json. For config options, see the
   // README at: https://github.com/devcontainers/templates/tree/main/src/python
   {
     "name": "Python 3",
     // Or use a Dockerfile or Docker Compose file. More info: https://containers.dev/guide/dockerfile
     "image": "mcr.microsoft.com/devcontainers/python:0-3.11-bullseye",
     "features": {
       "ghcr.io/devcontainers-contrib/features/coverage-py:2": {}
     },

     // Use 'forwardPorts' to make a list of ports inside the container available locally.
     // "forwardPorts": [],

     // Use 'postCreateCommand' to run commands after the container is created.
     "postCreateCommand": "pip3 install --user -r requirements.txt",

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

   After the dev container is rebuilt, and your codespace becomes available again, the `postCreateCommand` will have been run, installing the package listed in the `requirements.txt` file, and the "Code Spell Checker" extension will be available for use.

## Step 4: Run your application

In the previous section, you used the `postCreateCommand` to install a package for the Flask web framework. You can now use this to run the web application.

1. In the Terminal of your codespace, enter `python -m flask run`.

   ![Screenshot of the Terminal tab with the command "python -m flask run" entered, and output including "Running on http://127.0.0.1:5000."](/assets/images/help/codespaces/python-flask-run.png)

1. When your project starts, you should see a "toast" notification message at the bottom right corner of {% data variables.product.prodname_vscode_shortname %}, telling you that your application is available on a forwarded port. To view the running application, click **Open in Browser**.

   ![Screenshot of the port forwarding message, reading "Your application running on port 5000 is available." The "Open in Browser" button is also shown.](/assets/images/help/codespaces/codespaces-port5000-toast.png)

## Step 5: Commit your changes

{% data reusables.codespaces.committing-link-to-procedure %}

## Next steps

You should now be able to add a custom dev container configuration to your own Python project.

{% data reusables.codespaces.next-steps-adding-devcontainer %}
