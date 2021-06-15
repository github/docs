---
title: Getting started with your Java project in Codespaces
shortTitle: Getting started with your Java project
intro: 'Get started with your Java project in {% data variables.product.prodname_codespaces %} by creating a custom dev container.'
versions:
  free-pro-team: '*'
topics:
  - Codespaces
---

{% data reusables.codespaces.release-stage %}

## Introduction

This guide shows you how to set up your Java project in {% data variables.product.prodname_codespaces %}. It will take you through an example of opening your project in a codespace, and adding and modifying a dev container configuration from a template.

### Prerequisites 

- You should have an existing Java project in a repository on {% data variables.product.prodname_dotcom_the_website %}. If you don't have a project, you can try this tutorial with the following example: https://github.com/microsoft/vscode-remote-try-java
- You must have {% data variables.product.prodname_codespaces %} enabled for your organization.

## Step 1: Open your project in a codespace

1. Navigate to your project's repository. Use the {% octicon "download" aria-label="The download icon" %} **Code** drop-down menu, and select **Open with Codespaces**. If you don’t see this option, your project isn’t available for {% data variables.product.prodname_codespaces %}.
  
  ![Open with Codespaces button](/assets/images/help/codespaces/open-with-codespaces-button.png) 

2. To create a new codespace, click {% octicon "plus" aria-label="The plus icon" %} **New codespace**.
  ![New codespace button](/assets/images/help/codespaces/new-codespace-button.png)

When you create a codespace, your project is created on a remote VM that is dedicated to you. By default, the container for your codespace has many languages and runtimes including Java, nvm, npm, and yarn. It also includes a common set of tools like git, wget, rsync, openssh, and nano. 

You can customize your codespace by adjusting the amount of vCPUs and RAM, [adding dotfiles to personalize your environment](/codespaces/setting-up-your-codespace/personalizing-codespaces-for-your-account), or by modifying the tools and scripts installed. 

{% data variables.product.prodname_codespaces %} uses a file called `devcontainer.json` to store configurations. On launch {% data variables.product.prodname_codespaces %} uses the file to install any tools, dependencies, or other set up that might be needed for the project. For more information, see "[Configuring Codespaces for your project](/codespaces/setting-up-your-codespace/configuring-codespaces-for-your-project)."


## Step 2: Add a dev container to your codespace from a template  

The default codespaces container comes with the latest Java version, package managers (Maven, Gradle), and other common tools preinstalled. However, we recommend that you set up a custom container to define the tools and scripts that your project needs. This will ensure a fully reproducible environment for all {% data variables.product.prodname_codespaces %} users in your repository.

To set up your project with a custom container, you will need to use a `devcontainer.json` file to define the environment. In {% data variables.product.prodname_codespaces %} you can add this either from a template or you can create your own. For more information on dev containers, see "[Configuring Codespaces for your project](/codespaces/setting-up-your-codespace/configuring-codespaces-for-your-project)."


{% data reusables.codespaces.command-palette-container %}
3. For this example, click **Java**. In practice, you could select any container that’s specific to Java or a combination of tools such as Java and Azure Functions.
  ![Select Java option from the list](/assets/images/help/codespaces/add-java-prebuilt-container.png)
4. Click the recommended version of Java.
  ![Java version selection](/assets/images/help/codespaces/add-java-version.png)
{% data reusables.codespaces.rebuild-command %}

### Anatomy of your dev container

Adding the Java dev container template adds a `.devcontainer` folder to the root of your project's repository with the following files:

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

- **Name** - You can name your dev container anything, this is just the default.
- **Build** - The build properties.
  - **Dockerfile** - In the build object, dockerfile is a reference to the Dockerfile that was also added from the template.
  - **Args**
    - **Variant**: This file only contains one build argument, which is the Java version that is passed into the Dockerfile.
- **Settings** - These are {% data variables.product.prodname_vscode %} settings that you can set.
  - **Terminal.integrated.shell.linux** - While bash is the default here, you could use other terminal shells by modifying this.
- **Extensions** - These are extensions included by default.
  - **Vscjava.vscode-java-pack** - The Java Extension Pack provides popular extensions for Java development to get you started.
- **forwardPorts** - Any ports listed here will be forwarded automatically.
- **postCreateCommand** - If you want to run anything after you land in your codespace that’s not defined in the Dockerfile, you can do that here.
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

You can use the Dockerfile to add additional container layers to specify OS packages, Java versions, or global packages we want included in our Dockerfile.

## Step 3: Modify your devcontainer.json file 

With your dev container added and a basic understanding of what everything does, you can now make changes to configure it for your environment. In this example, you'll add properties to install extensions and your project dependencies when your codespace launches.

1. In the Explorer, select the `devcontainer.json` file from the tree to open it. You might have to exand the `.devcontainer` folder to see it. 

  !["Codespaces: Rebuild Container" in the command palette](/assets/images/help/codespaces/devcontainers-options.png)  

2. Add the following lines to your `devcontainer.json` file after `extensions`.

  ```json{:copy}
  "postCreateCommand": "npm install",
  "forwardPorts": [4000],
  ```

  For more information on `devcontainer.json` properties, see the [devcontainer.json reference](https://code.visualstudio.com/docs/remote/devcontainerjson-reference) on the Visual Studio Code docs.

{% data reusables.codespaces.rebuild-command %}

  Rebuilding inside your codespace ensures your changes work as expected before you commit the changes to the repository. If something does result in a failure, you’ll be placed in a codespace with a recovery container that you can rebuild from to keep adjusting your container.


## Step 4: Run your application

In the previous section, you used the `postCreateCommand` to install a set of packages via npm. You can now use this to run our application with npm.

1. Run your application by pressing `F5`.

2. When your project starts, you should see a toast in the bottom right corner with a prompt to connect to the port your project uses. 

  ![Port forwarding toast](/assets/images/help/codespaces/codespaces-port-toast.png)

## Step 5: Commit your changes

{% data reusables.codespaces.committing-link-to-procedure %}

## Next steps

You should now be ready start developing your Java project in {% data variables.product.prodname_codespaces %}. Here are some additional resources for more advanced scenarios.

- [Managing encrypted secrets for {% data variables.product.prodname_codespaces %}](/codespaces/working-with-your-codespace/managing-encrypted-secrets-for-codespaces)
- [Managing GPG verification for {% data variables.product.prodname_codespaces %}](/codespaces/working-with-your-codespace/managing-gpg-verification-for-codespaces)
- [Forwarding ports in your codespace](/codespaces/developing-in-codespaces/forwarding-ports-in-your-codespace)
