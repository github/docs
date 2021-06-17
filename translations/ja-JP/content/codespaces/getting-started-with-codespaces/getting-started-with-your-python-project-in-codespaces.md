---
title: Getting started with your Python project in Codespaces
shortTitle: Getting started with your Python project
intro: 'Get started with your Python project in {% data variables.product.prodname_codespaces %} by creating a custom dev container.'
versions:
  free-pro-team: '*'
type: tutorial
topics:
  - Codespaces
  - Developer
  - Python
---

{% data reusables.codespaces.release-stage %}

### はじめに

This guide shows you how to set up your Python project in {% data variables.product.prodname_codespaces %}. It will take you through an example of opening your project in a codespace, and adding and modifying a dev container configuration from a template.

#### 必要な環境

- You should have an existing Python project in a repository on {% data variables.product.prodname_dotcom_the_website %}. If you don't have a project, you can try this tutorial with the following example: https://github.com/2percentsilk/python-quickstart.
- You must have {% data variables.product.prodname_codespaces %} enabled for your organization.

### Step 1: Open your project in a codespace

1. Navigate to your project's repository. Use the {% octicon "download" aria-label="The download icon" %} **Code** drop-down menu, and select **Open with Codespaces**. If you don’t see this option, your project isn’t available for {% data variables.product.prodname_codespaces %}.

  ![[Open with Codespaces] ボタン](/assets/images/help/codespaces/open-with-codespaces-button.png)

2. To create a new codespace, click {% octicon "plus" aria-label="The plus icon" %} **New codespace**. ![[New codespace] ボタン](/assets/images/help/codespaces/new-codespace-button.png)

When you create a codespace, your project is created on a remote VM that is dedicated to you. By default, the container for your codespace has many languages and runtimes including Node.js, JavaScript, Typescript, nvm, npm, and yarn. It also includes a common set of tools like git, wget, rsync, openssh, and nano.

You can customize your codespace by adjusting the amount of vCPUs and RAM, [adding dotfiles to personalize your environment](/codespaces/setting-up-your-codespace/personalizing-codespaces-for-your-account), or by modifying the tools and scripts installed.

{% data variables.product.prodname_codespaces %} uses a file called `devcontainer.json` to store configurations. On launch {% data variables.product.prodname_codespaces %} uses the file to install any tools, dependencies, or other set up that might be needed for the project. For more information, see "[Configuring Codespaces for your project](/codespaces/setting-up-your-codespace/configuring-codespaces-for-your-project)."


### Step 2: Add a dev container to your codespace from a template

The default codespaces container comes with the latest Python version, package managers (pip, Miniconda), and other common tools preinstalled. However, we recommend that you set up a custom container to define the tools and scripts that your project needs. This will ensure a fully reproducible environment for all {% data variables.product.prodname_codespaces %} users in your repository.

To set up your project with a custom container, you will need to use a `devcontainer.json` file to define the environment. In {% data variables.product.prodname_codespaces %} you can add this either from a template or you can create your own. For more information on dev containers, see "[Configuring Codespaces for your project](/codespaces/setting-up-your-codespace/configuring-codespaces-for-your-project)."


1. Access the command palette (`shift command P` / `shift control P`), then start typing "dev container". Click **Codespaces: Add Development Container Configuration Files...** !["Codespaces: Add Development Container Configuration Files..." in the command palette](/assets/images/help/codespaces/add-prebuilt-container-command.png)
2. For this example, click **Python 3**. If you need additional features you can select any container that’s specific to Python or a combination of tools such as Python 3 and PostgresSQL. ![Select Python option from the list](/assets/images/help/codespaces/add-python-prebuilt-container.png)
3. Click the recommended version of Python. ![Python version selection](/assets/images/help/codespaces/add-python-version.png)
4. Accept the default option to add Node.js to your customization. ![Add Node.js selection](/assets/images/help/codespaces/add-nodejs-selection.png)
5. To rebuild your container, access the command palette (`shift command P` / `shift control P`), then start typing "rebuild". **Codespaces: Rebuild Container**をクリックしてください。 ![Rebuild container option](/assets/images/help/codespaces/codespaces-rebuild.png)

#### Anatomy of your dev container

Adding the Python dev container template adds a `.devcontainer` folder to the root of your project's repository with the following files:

- `devcontainer.json`
- Dockerfile

The newly added `devcontainer.json` file defines a few properties that are described after the sample.

##### devcontainer.json

```json
{
    "name": "Python 3",
    "build": {
        "dockerfile": "Dockerfile",
        "context": "..",
        "args": { 
            // Update 'VARIANT' to pick a Python version: 3, 3.6, 3.7, 3.8, 3.9
            "VARIANT": "3",
            // Options
            "INSTALL_NODE": "true",
            "NODE_VERSION": "lts/*"
        }
    },

    // Set *default* container specific settings.json values on container create.
    "settings": { 
        "terminal.integrated.shell.linux": "/bin/bash",
        "python.pythonPath": "/usr/local/bin/python",
        "python.linting.enabled": true,
        "python.linting.pylintEnabled": true,
        "python.formatting.autopep8Path": "/usr/local/py-utils/bin/autopep8",
        "python.formatting.blackPath": "/usr/local/py-utils/bin/black",
        "python.formatting.yapfPath": "/usr/local/py-utils/bin/yapf",
        "python.linting.banditPath": "/usr/local/py-utils/bin/bandit",
        "python.linting.flake8Path": "/usr/local/py-utils/bin/flake8",
        "python.linting.mypyPath": "/usr/local/py-utils/bin/mypy",
        "python.linting.pycodestylePath": "/usr/local/py-utils/bin/pycodestyle",
        "python.linting.pydocstylePath": "/usr/local/py-utils/bin/pydocstyle",
        "python.linting.pylintPath": "/usr/local/py-utils/bin/pylint"
    },

    // Add the IDs of extensions you want installed when the container is created.
    "extensions": [
        "ms-python.python",
    ],

    // Use 'forwardPorts' to make a list of ports inside the container available locally.
    // "forwardPorts": [],

    // Use 'postCreateCommand' to run commands after the container is created.
    // "postCreateCommand": "pip3 install --user -r requirements.txt",

    // Comment out connect as root instead. More info: https://aka.ms/vscode-remote/containers/non-root.
    "remoteUser": "vscode"
}
```

- **Name** - You can name our dev container anything, this is just the default.
- **Build** - The build properties.
  - **Dockerfile** - In the build object, `dockerfile` is a reference to the Dockerfile that was also added from the template.
  - **Args**
    - **Variant**: This file only contains one build argument, which is the node variant we want to use that is passed into the Dockerfile.
- **Settings** - These are {% data variables.product.prodname_vscode %} settings.
  - **Terminal.integrated.shell.linux** - While bash is the default here, you could use other terminal shells by modifying this.
- **Extensions** - These are extensions included by default.
  - **ms-python.python** - The Microsoft Python extension provides rich support for the Python language (for all actively supported versions of the language: >=3.6), including features such as IntelliSense, linting, debugging, code navigation, code formatting, refactoring, variable explorer, test explorer, and more.
- **forwardPorts** - Any ports listed here will be forwarded automatically.
- **postCreateCommand** - If you want to run anything after you land in your codespace that’s not defined in the Dockerfile, like `pip3 install -r requirements`, you can do that here.
- **remoteUser** - By default, you’re running as the `vscode` user, but you can optionally set this to `root`.

##### Dockerfile

```bash
# [Choice] Python version: 3, 3.9, 3.8, 3.7, 3.6
ARG VARIANT="3"
FROM mcr.microsoft.com/vscode/devcontainers/python:0-${VARIANT}

# [Option] Install Node.js
ARG INSTALL_NODE="true"
ARG NODE_VERSION="lts/*"
RUN if [ "${INSTALL_NODE}" = "true" ]; then su vscode -c "umask 0002 && . /usr/local/share/nvm/nvm.sh && nvm install ${NODE_VERSION} 2>&1"; fi

# [Optional] If your pip requirements rarely change, uncomment this section to add them to the image.
# COPY requirements.txt /tmp/pip-tmp/
# RUN pip3 --disable-pip-version-check --no-cache-dir install -r /tmp/pip-tmp/requirements.txt \
#    && rm -rf /tmp/pip-tmp

# [Optional] Uncomment this section to install additional OS packages.
# RUN apt-get update && export DEBIAN_FRONTEND=noninteractive \
#     && apt-get -y install --no-install-recommends <your-package-list-here>

# [Optional] Uncomment this line to install global node packages.
# RUN su vscode -c "source /usr/local/share/nvm/nvm.sh && npm install -g <your-package-here>" 2>&1
```

You can use the Dockerfile to add additional container layers to specify OS packages, node versions, or global packages we want included in our container.

### Step 3: Modify your devcontainer.json file

With your dev container added and a basic understanding of what everything does, you can now make changes to configure it for your environment. In this example, you'll add properties to install extensions and your project dependancies when your codespace launches.

1. In the Explorer, expand the `.devcontainer` folder and select the `devcontainer.json` file from the tree to open it.

  !["Codespaces: Rebuild Container" in the command palette](/assets/images/help/codespaces/devcontainers-options.png)

2. Update the `extensions` list in your `devcontainer.json` file to add a few extensions that are useful when working with your project.

  ```json{:copy} 
  "extensions": [
          "ms-python.python",
          "cstrap.flask-snippets",
          "streetsidesoftware.code-spell-checker",
      ],
  ```

3. Uncomment the `postCreateCommand` to auto-install requirements as part of the codespaces setup process.

  ```json{:copy} 
  // Use 'postCreateCommand' to run commands after the container is created.
  "postCreateCommand": "pip3 install --user -r requirements.txt",
  ```

4. To rebuild your container and apply the devcontainer.json changes, access the command palette (`shift command P` / `shift control P`), then start typing "rebuild". **Codespaces: Rebuild Container**をクリックしてください。

  ![Rebuild container option](/assets/images/help/codespaces/codespaces-rebuild.png)

  Rebuilding inside your codespace ensures your changes work as expected before you commit the changes to the repository. If something does result in a failure, you’ll be placed in a codespace with a recovery container that you can rebuild from to keep adjusting your container.

5. Check your changes were successfully applied by verifying the Code Spell Checker and Flask Snippet extensions were installed.

    ![Extensions list](/assets/images/help/codespaces/python-extensions.png)

### Step 4: Run your application

In the previous section, you used the `postCreateCommand` to install a set of packages via pip3. With your dependencies now installed, you can run your application.

1. Run your application by pressing `F5` or entering `python -m flask run` in the codespace terminal.

2. When your project starts, you should see a toast in the bottom right corner with a prompt to connect to the port your project uses.

  ![Port forwarding toast](/assets/images/help/codespaces/python-port-forwarding.png)

### Step 5: Commit your changes

{% data reusables.codespaces.committing-link-to-procedure %}

### 次のステップ

You should now be ready start developing your Python project in {% data variables.product.prodname_codespaces %}. Here are some additional resources for more advanced scenarios.

- [Managing encrypted secrets for {% data variables.product.prodname_codespaces %}](/codespaces/working-with-your-codespace/managing-encrypted-secrets-for-codespaces)
- [Managing GPG verification for {% data variables.product.prodname_codespaces %}](/codespaces/working-with-your-codespace/managing-gpg-verification-for-codespaces)
- [Forwarding ports in your codespace](/codespaces/developing-in-codespaces/forwarding-ports-in-your-codespace)
