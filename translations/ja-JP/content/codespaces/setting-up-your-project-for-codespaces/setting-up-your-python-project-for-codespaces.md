---
title: Setting up your Python project for GitHub Codespaces
allowTitleToDifferFromFilename: true
shortTitle: Setting up your Python project
intro: 'Get started with your Python project in {% data variables.product.prodname_github_codespaces %} by creating a custom dev container.'
product: '{% data reusables.gated-features.codespaces %}'
versions:
  fpt: '*'
  ghec: '*'
redirect_from:
  - /codespaces/getting-started-with-codespaces/getting-started-with-your-python-project-in-codespaces
type: tutorial
topics:
  - Codespaces
  - Developer
  - Python
hasExperimentalAlternative: true
hidden: true
---

## Introduction

This guide shows you how to set up your Python project in {% data variables.product.prodname_github_codespaces %}. It will take you through an example of opening your project in a codespace, and adding and modifying a dev container configuration from a template.

### Prerequisites

- You should have an existing Python project in a repository on {% data variables.product.prodname_dotcom_the_website %}. If you don't have a project, you can try this tutorial with the following example: https://github.com/2percentsilk/python-quickstart.
- You must have {% data variables.product.prodname_github_codespaces %} enabled for your organization.

## Step 1: Open your project in a codespace

1. Under the repository name, use the **{% octicon "code" aria-label="The code icon" %} Code** drop-down menu, and in the **Codespaces** tab, click **Create codespace on main**.

  ![New codespace button](/assets/images/help/codespaces/new-codespace-button.png)

  If you don’t see this option, {% data variables.product.prodname_github_codespaces %} isn't available for your project. See [Access to {% data variables.product.prodname_github_codespaces %}](/codespaces/developing-in-codespaces/creating-a-codespace#access-to-github-codespaces) for more information.

When you create a codespace, your project is created on a remote VM that is dedicated to you. By default, the container for your codespace has many languages and runtimes including Node.js, JavaScript, Typescript, nvm, npm, and yarn. It also includes a common set of tools like git, wget, rsync, openssh, and nano.

{% data reusables.codespaces.customize-vcpus-and-ram %}

## Step 2: Add a dev container configuration to your repository from a template

The default development container, or "dev container," for {% data variables.product.prodname_github_codespaces %} comes with the latest Python version, package managers (pip, Miniconda), and other common tools preinstalled. However, we recommend that you configure your own dev container to include all of the tools and scripts that your project needs. This will ensure a fully reproducible environment for all {% data variables.product.prodname_github_codespaces %} users in your repository.

{% data reusables.codespaces.setup-custom-devcontainer %}

{% data reusables.codespaces.command-palette-container %}
1. For this example, click **Python 3**. If you need additional features you can select any container that’s specific to Python or a combination of tools such as Python 3 and PostgreSQL.
  ![Select Python option from the list](/assets/images/help/codespaces/add-python-prebuilt-container.png)
1. Click the recommended version of Python.
  ![Python version selection](/assets/images/help/codespaces/add-python-version.png)
1. Accept the default option to add Node.js to your customization.
  ![Add Node.js selection](/assets/images/help/codespaces/add-nodejs-selection.png)
{% data reusables.codespaces.rebuild-command %}

### Anatomy of your dev container

Adding the Python dev container template adds a `.devcontainer` directory to the root of your project's repository with the following files:

- `devcontainer.json`
- Dockerfile

The newly added `devcontainer.json` file defines a few properties that are described after the sample.

#### devcontainer.json

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
		"ms-python.python"
	],

	// Use 'forwardPorts' to make a list of ports inside the container available locally.
	// "forwardPorts": [],

	// Use 'postCreateCommand' to run commands after the container is created.
	// "postCreateCommand": "pip3 install --user -r requirements.txt",

	// Comment out connect as root instead. More info: https://aka.ms/vscode-remote/containers/non-root.
	"remoteUser": "vscode"
}
```

- **name** - You can name our dev container anything, this is just the default.
- **build** - The build properties.
  - **dockerfile** - In the `build` object, `dockerfile` contains the path to the Dockerfile that was also added from the template.
  - **args**
    - **variant**: This file only contains one build argument, which is the node variant we want to use that is passed into the Dockerfile.
- **settings** - These are {% data variables.product.prodname_vscode %} settings.
  - **terminal.integrated.shell.linux** - While bash is the default here, you could use other terminal shells by modifying this.
- **extensions** - These are extensions included by default.
  - **ms-python.python** - The Microsoft Python extension provides rich support for the Python language (for all actively supported versions of the language: >=3.6), including features such as IntelliSense, linting, debugging, code navigation, code formatting, refactoring, variable explorer, test explorer, and more.
- **forwardPorts** - Any ports listed here will be forwarded automatically. For more information, see "[Forwarding ports in your codespace](/codespaces/developing-in-codespaces/forwarding-ports-in-your-codespace)."
- **postCreateCommand** - Use this to run commands that aren't defined in the Dockerfile, like `pip3 install -r requirements`, after your codespace is created.
- **remoteUser** - By default, you’re running as the `vscode` user, but you can optionally set this to `root`.

#### Dockerfile

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

## Step 3: Modify your devcontainer.json file

With your dev container configuration added and a basic understanding of what everything does, you can now make changes to customize your environment further. In this example, you'll add properties to install extensions and your project dependencies when your codespace launches.

1. In the Explorer, expand the `.devcontainer` folder and select the `devcontainer.json` file from the tree to open it.

  ![devcontainer.json file in the Explorer](/assets/images/help/codespaces/devcontainers-options.png)

2. Update the `extensions` list in your `devcontainer.json` file to add a few extensions that are useful when working with your project.

  ```json{:copy}
  "extensions": [
		  "ms-python.python",
		  "cstrap.flask-snippets",
		  "streetsidesoftware.code-spell-checker"
	  ],
  ```

3. Uncomment the `postCreateCommand` to auto-install requirements as part of the codespaces setup process.

  ```json{:copy}
  // Use 'postCreateCommand' to run commands after the container is created.
  "postCreateCommand": "pip3 install --user -r requirements.txt",
  ```

{% data reusables.codespaces.rebuild-command %}

   {% data reusables.codespaces.rebuild-reason %}

5. Check your changes were successfully applied by verifying the Code Spell Checker and Flask Snippet extensions were installed.

   ![Extensions list](/assets/images/help/codespaces/python-extensions.png)

## Step 4: Run your application

In the previous section, you used the `postCreateCommand` to install a set of packages via pip3. With your dependencies now installed, you can run your application.

1. Run your application by pressing `F5` or entering `python -m flask run` in the codespace terminal.

2. When your project starts, you should see a toast in the bottom right corner with a prompt to connect to the port your project uses.

  ![Port forwarding toast](/assets/images/help/codespaces/python-port-forwarding.png)

## Step 5: Commit your changes

{% data reusables.codespaces.committing-link-to-procedure %}

## Next steps

You should now be ready start developing your Python project in {% data variables.product.prodname_github_codespaces %}. Here are some additional resources for more advanced scenarios.

{% data reusables.codespaces.next-steps-adding-devcontainer %}
