---
title: Setting up your Node.js project for Codespaces
shortTitle: Setting up your Node.js project
intro: 'Get started with your JavaScript, Node.js, or TypeScript project in {% data variables.product.prodname_codespaces %} by creating a custom dev container.'
versions:
  fpt: '*'
redirect_from:
  - /codespaces/getting-started-with-codespaces/getting-started-with-your-nodejs-project-in-codespaces 
type: tutorial
topics:
  - Codespaces
  - Developer
  - Node
  - JavaScript
---

{% data reusables.codespaces.release-stage %}

## Introduction

This guide shows you how to set up your JavaScript, Node.js, or TypeScript project in {% data variables.product.prodname_codespaces %}. It will take you through an example of opening your project in a codespace, and adding and modifying a dev container configuration from a template.

### Prerequisites 

- You should have an existing JavaScript, Node.js, or TypeScript project in a repository on {% data variables.product.prodname_dotcom_the_website %}. If you don't have a project, you can try this tutorial with the following example: https://github.com/microsoft/vscode-remote-try-node
- You must have {% data variables.product.prodname_codespaces %} enabled for your organization.

## Step 1: Open your project in a codespace

1. Navigate to your project's repository. Use the {% octicon "download" aria-label="The download icon" %} **Code** drop-down menu, and select **Open with Codespaces**. If you don’t see this option, your project isn’t available for {% data variables.product.prodname_codespaces %}.
  
  ![Open with Codespaces button](/assets/images/help/codespaces/open-with-codespaces-button.png) 

2. To create a new codespace, click {% octicon "plus" aria-label="The plus icon" %} **New codespace**.
  ![New codespace button](/assets/images/help/codespaces/new-codespace-button.png)

When you create a codespace, your project is created on a remote VM that is dedicated to you. By default, the container for your codespace has many languages and runtimes including Node.js, JavaScript, Typescript, nvm, npm, and yarn. It also includes a common set of tools like git, wget, rsync, openssh, and nano. 

You can customize your codespace by adjusting the amount of vCPUs and RAM, [adding dotfiles to personalize your environment](/codespaces/setting-up-your-codespace/personalizing-codespaces-for-your-account), or by modifying the tools and scripts installed. 

{% data variables.product.prodname_codespaces %} uses a file called `devcontainer.json` to store configurations. On launch {% data variables.product.prodname_codespaces %} uses the file to install any tools, dependencies, or other set up that might be needed for the project. For more information, see "[Configuring Codespaces for your project](/codespaces/setting-up-your-codespace/configuring-codespaces-for-your-project)."

## Step 2: Add a dev container to your codespace from a template  

The default codespaces container will support running Node.js projects like [vscode-remote-try-node](https://github.com/microsoft/vscode-remote-try-node) out of the box. By setting up a custom container you can customize the tools and scripts that run as part of codespace creation and ensure a fully reproducible environment for all {% data variables.product.prodname_codespaces %} users in your repository.

To set up your project with a custom container, you will need to use a `devcontainer.json` file to define the environment. In {% data variables.product.prodname_codespaces %} you can add this either from a template or you can create your own. For more information on dev containers, see "[Configuring Codespaces for your project](/codespaces/setting-up-your-codespace/configuring-codespaces-for-your-project)". 

{% data reusables.codespaces.command-palette-container %}
3. For this example, click **Node.js**.  If you need additional features you can select any container that’s specific to Node or a combination of tools such as Node and MongoDB.
  ![Select Node option from the list](/assets/images/help/codespaces/add-node-prebuilt-container.png)
4. Click the recommended version of Node.js.
  ![Node.js version selection](/assets/images/help/codespaces/add-node-version.png)
{% data reusables.codespaces.rebuild-command %}

### Anatomy of your dev container

Adding the Node.js dev container template adds a `.devcontainer` folder to the root of your project's repository with the following files:

- `devcontainer.json`
- Dockerfile

The newly added `devcontainer.json` file defines a few properties that are described after the sample.

#### devcontainer.json

```json
// For format details, see https://aka.ms/devcontainer.json. For config options, see the README at:
// https://github.com/microsoft/vscode-dev-containers/tree/v0.162.0/containers/javascript-node
{
	"name": "Node.js",
	"build": {
		"dockerfile": "Dockerfile",
		// Update 'VARIANT' to pick a Node version: 10, 12, 14
		"args": { "VARIANT": "14" }
	},

	// Set *default* container specific settings.json values on container create.
	"settings": { 
		"terminal.integrated.shell.linux": "/bin/bash"
	},

	// Add the IDs of extensions you want installed when the container is created.
	"extensions": [
		"dbaeumer.vscode-eslint"
	],

	// Use 'forwardPorts' to make a list of ports inside the container available locally.
	// "forwardPorts": [],

	// Use 'postCreateCommand' to run commands after the container is created.
	// "postCreateCommand": "yarn install",

	// Comment out connect as root instead. More info: https://aka.ms/vscode-remote/containers/non-root.
	"remoteUser": "node"
}
```

- **Name** - You can name your dev container anything, this is just the default.
- **Build** - The build properties.
  - **dockerfile** - In the build object, dockerfile is a reference to the Dockerfile that was also added from the template.
  - **Args**
    - **Variant**: This file only contains one build argument, which is the node variant we want to use that is passed into the Dockerfile.
- **Settings** - These are {% data variables.product.prodname_vscode %} settings that you can set.
  - **Terminal.integrated.shell.linux** - While bash is the default here, you could use other terminal shells by modifying this.
- **Extensions** - These are extensions included by default.
  - **Dbaeumer.vscode-eslint** - ES lint is a great extension for linting, but for JavaScript there are a number of great Marketplace extensions you could also include.
- **forwardPorts** - Any ports listed here will be forwarded automatically.
- **postCreateCommand** - If you want to run anything after you land in your codespace that’s not defined in the Dockerfile, you can do that here.
- **remoteUser** - By default, you’re running as the vscode user, but you can optionally set this to root.

#### Dockerfile

```bash
# [Choice] Node.js version: 14, 12, 10
ARG VARIANT="14-buster"
FROM mcr.microsoft.com/vscode/devcontainers/javascript-node:0-${VARIANT}

# [Optional] Uncomment this section to install additional OS packages.
# RUN apt-get update && export DEBIAN_FRONTEND=noninteractive \
#     && apt-get -y install --no-install-recommends <your-package-list-here>

# [Optional] Uncomment if you want to install an additional version of node using nvm
# ARG EXTRA_NODE_VERSION=10
# RUN su node -c "source /usr/local/share/nvm/nvm.sh && nvm install ${EXTRA_NODE_VERSION}"

# [Optional] Uncomment if you want to install more global node modules
# RUN su node -c "npm install -g <your-package-list-here>"
```

You can use the Dockerfile to add additional container layers to specify OS packages, node versions, or global packages we want included in our Dockerfile.

## Step 3: Modify your devcontainer.json file 

With your dev container added and a basic understanding of what everything does, you can now make changes to configure it for your environment. In this example, you'll add properties to install npm when your codespace launches and make a list of ports inside the container available locally.

1. In the Explorer, select the `devcontainer.json` file from the tree to open it. You might have to expand the `.devcontainer` folder to see it.

  !["Codespaces: Rebuild Container" in the command palette](/assets/images/help/codespaces/devcontainers-options.png)  

2. Add the following lines to your `devcontainer.json` file after `extensions`:

  ```json{:copy}
  "postCreateCommand": "npm install",
  "forwardPorts": [4000],
  ```

  For more information on `devcontainer.json` properties, see the [devcontainer.json reference](https://code.visualstudio.com/docs/remote/devcontainerjson-reference) in the {% data variables.product.prodname_vscode %} docs.

{% data reusables.codespaces.rebuild-command %}

  Rebuilding inside your codespace ensures your changes work as expected before you commit the changes to the repository. If something does result in a failure, you’ll be placed in a codespace with a recovery container that you can rebuild from to keep adjusting your container.


## Step 4: Run your application

In the previous section, you used the `postCreateCommand` to installing a set of packages via npm. You can now use this to run our application with npm.

1. Run your start command in the terminal with`npm start`.

  ![npm start in terminal](/assets/images/help/codespaces/codespaces-npmstart.png)

2. When your project starts, you should see a toast in the bottom right corner with a prompt to connect to the port your project uses. 

  ![Port forwarding toast](/assets/images/help/codespaces/codespaces-port-toast.png)

## Step 5: Commit your changes

{% data reusables.codespaces.committing-link-to-procedure %} 

## Next steps

You should now be ready start developing your JavaScript project in {% data variables.product.prodname_codespaces %}. Here are some additional resources for more advanced scenarios.

- [Managing encrypted secrets for your codespaces](/codespaces/managing-your-codespaces/managing-encrypted-secrets-for-your-codespaces)
- [Managing GPG verification for {% data variables.product.prodname_codespaces %}](/codespaces/managing-your-codespaces/managing-gpg-verification-for-codespaces)
- [Forwarding ports in your codespace](/codespaces/developing-in-codespaces/forwarding-ports-in-your-codespace)
