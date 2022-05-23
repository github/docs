---
title: Setting up your Java project for Codespaces
shortTitle: Setting up with your Java project
intro: 'Get started with your Java project in {% data variables.product.prodname_codespaces %} by creating a custom dev container.'
product: '{% data reusables.gated-features.codespaces %}'
redirect_from:
  - /codespaces/getting-started-with-codespaces/getting-started-with-your-java-project-in-codespaces
versions:
  fpt: '*'
  ghec: '*'
topics:
  - Codespaces
hasExperimentalAlternative: true
hidden: true
---

## Introduction

This guide shows you how to set up your Java project in {% data variables.product.prodname_codespaces %}. It will take you through an example of opening your project in a codespace, and adding and modifying a dev container configuration from a template.

### Prerequisites

- You should have an existing Java project in a repository on {% data variables.product.prodname_dotcom_the_website %}. If you don't have a project, you can try this tutorial with the following example: https://github.com/microsoft/vscode-remote-try-java
- You must have {% data variables.product.prodname_codespaces %} enabled for your organization.

## Step 1: Open your project in a codespace

1. Under the repository name, use the **{% octicon "code" aria-label="The code icon" %} Code** drop-down menu, and in the **Codespaces** tab, click **Create codespace on main**.

  ![New codespace button](/assets/images/help/codespaces/new-codespace-button.png)

  If you don’t see this option, {% data variables.product.prodname_codespaces %} isn't available for your project. See [Access to {% data variables.product.prodname_codespaces %}](/codespaces/developing-in-codespaces/creating-a-codespace#access-to-codespaces) for more information.

When you create a codespace, your project is created on a remote VM that is dedicated to you. By default, the container for your codespace has many languages and runtimes including Java, nvm, npm, and Yarn. It also includes a common set of tools like git, wget, rsync, openssh, and nano.

{% data reusables.codespaces.customize-vcpus-and-ram %}

## Step 2: Add a dev container configuration to your repository from a template

The default development container, or "dev container," for {% data variables.product.prodname_github_codespaces %} comes with the latest Java version, package managers (Maven, Gradle), and other common tools preinstalled. However, we recommend that you configure your own dev container to include all of the tools and scripts that your project needs. This will ensure a fully reproducible environment for all {% data variables.product.prodname_github_codespaces %} users in your repository.

{% data reusables.codespaces.setup-custom-devcontainer %}

{% data reusables.codespaces.command-palette-container %}
1. For this example, click **Java**. In practice, you could select any container that’s specific to Java or a combination of tools such as Java and Azure Functions.
  ![Select Java option from the list](/assets/images/help/codespaces/add-java-prebuilt-container.png)
1. Click the recommended version of Java.
  ![Java version selection](/assets/images/help/codespaces/add-java-version.png)
{% data reusables.codespaces.rebuild-command %}

### Anatomy of your dev container

Adding the Java dev container template adds a `.devcontainer` directory to the root of your project's repository with the following files:

- `devcontainer.json`
- Dockerfile

The newly added `devcontainer.json` file defines a few properties that are described after the sample.

#### devcontainer.json

```json
// For format details, see https://aka.ms/vscode-remote/devcontainer.json or this file's README at:
// https://github.com/microsoft/vscode-dev-containers/tree/v0.159.0/containers/java
{
	"name": "Java",
	"build": {
		"dockerfile": "Dockerfile",
		"args": {
			// Update the VARIANT arg to pick a Java version: 11, 14
			"VARIANT": "11",
			// Options
			"INSTALL_MAVEN": "true",
			"INSTALL_GRADLE": "false",
			"INSTALL_NODE": "false",
			"NODE_VERSION": "lts/*"
		}
	},

	// Set *default* container specific settings.json values on container create.
	"settings": {
		"terminal.integrated.shell.linux": "/bin/bash",
		"java.home": "/docker-java-home",
		"maven.executable.path": "/usr/local/sdkman/candidates/maven/current/bin/mvn"
	},

	// Add the IDs of extensions you want installed when the container is created.
	"extensions": [
		"vscjava.vscode-java-pack"
	],

	// Use 'forwardPorts' to make a list of ports inside the container available locally.
	// "forwardPorts": [],

	// Use 'postCreateCommand' to run commands after the container is created.
	// "postCreateCommand": "java -version",

	// Uncomment to connect as a non-root user. See https://aka.ms/vscode-remote/containers/non-root.
	"remoteUser": "vscode"
}
```

- **name** - You can name your dev container anything, this is just the default.
- **build** - The build properties.
  - **dockerfile** - In the `build` object, `dockerfile` contains the path to the Dockerfile that was also added from the template.
  - **args**
    - **variant**: This file only contains one build argument, which is the Java version that is passed into the Dockerfile.
- **settings** - These are {% data variables.product.prodname_vscode %} settings that you can set.
  - **terminal.integrated.shell.linux** - While bash is the default here, you could use other terminal shells by modifying this.
- **extensions** - These are extensions included by default.
  - **vscjava.vscode-java-pack** - The Java Extension Pack provides popular extensions for Java development to get you started.
- **forwardPorts** - Any ports listed here will be forwarded automatically. For more information, see "[Forwarding ports in your codespace](/codespaces/developing-in-codespaces/forwarding-ports-in-your-codespace)."
- **postCreateCommand** - Use this to run commands that aren't defined in the Dockerfile, after your codespace is created.
- **remoteUser** - By default, you’re running as the `vscode` user, but you can optionally set this to `root`.

#### Dockerfile

```bash
# See here for image contents: https://github.com/microsoft/vscode-dev-containers/tree/v0.159.0/containers/java/.devcontainer/base.Dockerfile
ARG VARIANT="14"
FROM mcr.microsoft.com/vscode/devcontainers/java:0-${VARIANT}

# [Optional] Install Maven or Gradle
ARG INSTALL_MAVEN="false"
ARG MAVEN_VERSION=3.6.3
ARG INSTALL_GRADLE="false"
ARG GRADLE_VERSION=5.4.1
RUN if [ "${INSTALL_MAVEN}" = "true" ]; then su vscode -c "source /usr/local/sdkman/bin/sdkman-init.sh && sdk install maven \"${MAVEN_VERSION}\""; fi \
    && if [ "${INSTALL_GRADLE}" = "true" ]; then su vscode -c "source /usr/local/sdkman/bin/sdkman-init.sh && sdk install gradle \"${GRADLE_VERSION}\""; fi

# [Optional] Install a version of Node.js using nvm for front end dev
ARG INSTALL_NODE="true"
ARG NODE_VERSION="lts/*"
RUN if [ "${INSTALL_NODE}" = "true" ]; then su vscode -c "source /usr/local/share/nvm/nvm.sh && nvm install ${NODE_VERSION} 2>&1"; fi

# [Optional] Uncomment this section to install additional OS packages.
# RUN apt-get update && export DEBIAN_FRONTEND=noninteractive \
#     && apt-get -y install --no-install-recommends <your-package-list-here>

# [Optional] Uncomment this line to install global node packages.
# RUN su vscode -c "source /usr/local/share/nvm/nvm.sh && npm install -g <your-package-here>" 2>&1
```

You can use the Dockerfile to add additional container layers to specify OS packages, Java versions, or global packages we want included in our container.

## Step 3: Modify your devcontainer.json file

With your dev container configuration added and a basic understanding of what everything does, you can now make changes to customize your environment further. In this example, you'll add properties to install extensions and your project dependencies when your codespace launches.

1. In the Explorer, select the `devcontainer.json` file from the tree to open it. You might have to expand the `.devcontainer` folder to see it.

   ![devcontainer.json file in the Explorer](/assets/images/help/codespaces/devcontainers-options.png)

2. Add the following lines to your `devcontainer.json` file after `extensions`.

   ```json{:copy}
   "postCreateCommand": "npm install",
   "forwardPorts": [4000],
   ```

   {% data reusables.codespaces.more-info-devcontainer %}

{% data reusables.codespaces.rebuild-command %}

   {% data reusables.codespaces.rebuild-reason %}

## Step 4: Run your application

In the previous section, you used the `postCreateCommand` to install a set of packages via npm. You can now use this to run our application with npm.

1. Run your application by pressing `F5`.

2. When your project starts, you should see a toast in the bottom right corner with a prompt to connect to the port your project uses.

   ![Port forwarding toast](/assets/images/help/codespaces/codespaces-port-toast.png)

## Step 5: Commit your changes

{% data reusables.codespaces.committing-link-to-procedure %}

## Next steps

You should now be ready start developing your Java project in {% data variables.product.prodname_codespaces %}. Here are some additional resources for more advanced scenarios.

{% data reusables.codespaces.next-steps-adding-devcontainer %}