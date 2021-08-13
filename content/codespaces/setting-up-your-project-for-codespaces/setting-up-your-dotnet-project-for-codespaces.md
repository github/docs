---
title: Setting up your C# (.NET) project for Codespaces
shortTitle: Setting up your C# (.NET) project
allowTitleToDifferFromFilename: true
product: '{% data reusables.gated-features.codespaces %}'
intro: 'Get started with your C# (.NET) project in {% data variables.product.prodname_codespaces %} by creating a custom dev container.'
redirect_from:
  - /codespaces/getting-started-with-codespaces/getting-started-with-your-dotnet-project
versions:
  fpt: '*'
topics:
  - Codespaces
---

 

## Introduction

This guide shows you how to set up your C# (.NET) project in {% data variables.product.prodname_codespaces %}. It will take you through an example of opening your project in a codespace, and adding and modifying a dev container configuration from a template.

### Prerequisites 

- You should have an existing C# (.NET) project in a repository on {% data variables.product.prodname_dotcom_the_website %}. If you don't have a project, you can try this tutorial with the following example: https://github.com/2percentsilk/dotnet-quickstart.
- You must have {% data variables.product.prodname_codespaces %} enabled for your organization.

## Step 1: Open your project in a codespace

1. Under the repository name, use the **{% octicon "code" aria-label="The code icon" %} Code** drop-down menu, and in the **Codespaces** tab, click {% octicon "plus" aria-label="The plus icon" %} **New codespace**.

  ![New codespace button](/assets/images/help/codespaces/new-codespace-button.png) 
  
  If you don’t see this option, {% data variables.product.prodname_codespaces %} isn't available for your project. See [Access to {% data variables.product.prodname_codespaces %}](/codespaces/developing-in-codespaces/creating-a-codespace#access-to-codespaces) for more information.

When you create a codespace, your project is created on a remote VM that is dedicated to you. By default, the container for your codespace has many languages and runtimes including .NET. It also includes a common set of tools like git, wget, rsync, openssh, and nano. 

You can customize your codespace by adjusting the amount of vCPUs and RAM, [adding dotfiles to personalize your environment](/codespaces/setting-up-your-codespace/personalizing-codespaces-for-your-account), or by modifying the tools and scripts installed. 

{% data variables.product.prodname_codespaces %} uses a file called `devcontainer.json` to store configurations. On launch {% data variables.product.prodname_codespaces %} uses the file to install any tools, dependencies, or other set up that might be needed for the project. For more information, see "[Configuring Codespaces for your project](/codespaces/setting-up-your-codespace/configuring-codespaces-for-your-project)."


## Step 2: Add a dev container to your codespace from a template  

The default codespaces container comes with the latest .NET version and common tools preinstalled. However, we encourage you to set up a custom container so you can tailor the tools and scripts that run as part of codespace creation to your project's needs and ensure a fully reproducible environment for all {% data variables.product.prodname_codespaces %} users in your repository.

To set up your project with a custom container, you will need to use a `devcontainer.json` file to define the environment. In {% data variables.product.prodname_codespaces %} you can add this either from a template or you can create your own. For more information on dev containers, see "[Configuring Codespaces for your project
](/codespaces/setting-up-your-codespace/configuring-codespaces-for-your-project)."


{% data reusables.codespaces.command-palette-container %}
2. For this example, click **C# (.NET)**. If you need additional features you can select any container that’s specific to C# (.NET) or a combination of tools such as C# (.NET) and MS SQL.
  ![Select C# (.NET) option from the list](/assets/images/help/codespaces/add-dotnet-prebuilt-container.png)
3. Click the recommended version of .NET.
  ![.NET version selection](/assets/images/help/codespaces/add-dotnet-version.png)
4. Accept the default option to add Node.js to your customization.
  ![Add Node.js selection](/assets/images/help/codespaces/dotnet-options.png)
{% data reusables.codespaces.rebuild-command %}

### Anatomy of your dev container

Adding the C# (.NET) dev container template adds a `.devcontainer` folder to the root of your project's repository with the following files:

- `devcontainer.json`
- Dockerfile

The newly added `devcontainer.json` file defines a few properties that are described after the sample.

#### devcontainer.json

```json
{
	"name": "C# (.NET)",
	"build": {
		"dockerfile": "Dockerfile",
		"args": { 
			// Update 'VARIANT' to pick a .NET Core version: 2.1, 3.1, 5.0
			"VARIANT": "5.0",
			// Options
			"INSTALL_NODE": "true",
			"NODE_VERSION": "lts/*",
			"INSTALL_AZURE_CLI": "false"
		}
	},

	// Set *default* container specific settings.json values on container create.
	"settings": {
		"terminal.integrated.shell.linux": "/bin/bash"
	},

	// Add the IDs of extensions you want installed when the container is created.
	"extensions": [
		"ms-dotnettools.csharp"
	],

	// Use 'forwardPorts' to make a list of ports inside the container available locally.
	// "forwardPorts": [5000, 5001],

	// [Optional] To reuse of your local HTTPS dev cert:
	//
	// 1. Export it locally using this command:
	//    * Windows PowerShell:
	//        dotnet dev-certs https --trust; dotnet dev-certs https -ep "$env:USERPROFILE/.aspnet/https/aspnetapp.pfx" -p "SecurePwdGoesHere"
	//    * macOS/Linux terminal:
	//        dotnet dev-certs https --trust; dotnet dev-certs https -ep "${HOME}/.aspnet/https/aspnetapp.pfx" -p "SecurePwdGoesHere"
	// 
	// 2. Uncomment these 'remoteEnv' lines:
	//    "remoteEnv": {
	// 	      "ASPNETCORE_Kestrel__Certificates__Default__Password": "SecurePwdGoesHere",
	//        "ASPNETCORE_Kestrel__Certificates__Default__Path": "/home/vscode/.aspnet/https/aspnetapp.pfx",
	//    },
	//
	// 3. Do one of the following depending on your scenario:
	//    * When using GitHub Codespaces and/or Remote - Containers:
	//      1. Start the container
	//      2. Drag ~/.aspnet/https/aspnetapp.pfx into the root of the file explorer
	//      3. Open a terminal in VS Code and run "mkdir -p /home/vscode/.aspnet/https && mv aspnetapp.pfx /home/vscode/.aspnet/https"
	//
	//    * If only using Remote - Containers with a local container, uncomment this line instead:
	//      "mounts": [ "source=${env:HOME}${env:USERPROFILE}/.aspnet/https,target=/home/vscode/.aspnet/https,type=bind" ],

	// Use 'postCreateCommand' to run commands after the container is created.
	// "postCreateCommand": "dotnet restore",

	// Comment out connect as root instead. More info: https://aka.ms/vscode-remote/containers/non-root.
	"remoteUser": "vscode"
}
```

- **Name** - You can name our dev container anything, this is just the default.
- **Build** - The build properties.
  - **Dockerfile** - In the build object, `dockerfile` is a reference to the Dockerfile that was also added from the template.
  - **Args**
    - **Variant**: This file only contains one build argument, which is the .NET Core version that we want to use.
- **Settings** - These are {% data variables.product.prodname_vscode %} settings.
  - **Terminal.integrated.shell.linux** - While bash is the default here, you could use other terminal shells by modifying this.
- **Extensions** - These are extensions included by default.
  - **ms-dotnettools.csharp** - The Microsoft C# extension provides rich support for developing in C#, including features such as IntelliSense, linting, debugging, code navigation, code formatting, refactoring, variable explorer, test explorer, and more.
- **forwardPorts** - Any ports listed here will be forwarded automatically.
- **postCreateCommand** - If you want to run anything after you land in your codespace that’s not defined in the Dockerfile, like `dotnet restore`, you can do that here.
- **remoteUser** - By default, you’re running as the vscode user, but you can optionally set this to root.

#### Dockerfile

```bash
# [Choice] .NET version: 5.0, 3.1, 2.1
ARG VARIANT="5.0"
FROM mcr.microsoft.com/vscode/devcontainers/dotnetcore:0-${VARIANT}

# [Option] Install Node.js
ARG INSTALL_NODE="true"
ARG NODE_VERSION="lts/*"
RUN if [ "${INSTALL_NODE}" = "true" ]; then su vscode -c "umask 0002 && . /usr/local/share/nvm/nvm.sh && nvm install ${NODE_VERSION} 2>&1"; fi

# [Option] Install Azure CLI
ARG INSTALL_AZURE_CLI="false"
COPY library-scripts/azcli-debian.sh /tmp/library-scripts/
RUN if [ "$INSTALL_AZURE_CLI" = "true" ]; then bash /tmp/library-scripts/azcli-debian.sh; fi \
    && apt-get clean -y && rm -rf /var/lib/apt/lists/* /tmp/library-scripts

# [Optional] Uncomment this section to install additional OS packages.
# RUN apt-get update && export DEBIAN_FRONTEND=noninteractive \
#     && apt-get -y install --no-install-recommends <your-package-list-here>

# [Optional] Uncomment this line to install global node packages.
# RUN su vscode -c "source /usr/local/share/nvm/nvm.sh && npm install -g <your-package-here>" 2>&1
```

You can use the Dockerfile to add additional container layers to specify OS packages, node versions, or global packages we want included in our container.

## Step 3: Modify your devcontainer.json file 

With your dev container added and a basic understanding of what everything does, you can now make changes to configure it for your environment. In this example, you'll add properties to install extensions and restore your project dependencies when your codespace launches.

1. In the Explorer, expand the `.devcontainer` folder and select the `devcontainer.json` file from the tree to open it. 

  !["Codespaces: Rebuild Container" in the command palette](/assets/images/help/codespaces/devcontainers-options.png)  

2. Update your the `extensions` list in your `devcontainer.json` file to add a few extensions that are useful when working with your project.
   
  ```json{:copy} 
  "extensions": [
		  "ms-dotnettools.csharp",
		  "streetsidesoftware.code-spell-checker",
	  ],
  ```

3. Uncomment the `postCreateCommand` to restore dependencies as part of the codespace setup process.

  ```json{:copy} 
  // Use 'postCreateCommand' to run commands after the container is created.
  "postCreateCommand": "dotnet restore",
  ```

{% data reusables.codespaces.rebuild-command %}

  Rebuilding inside your codespace ensures your changes work as expected before you commit the changes to the repository. If something does result in a failure, you’ll be placed in a codespace with a recovery container that you can rebuild from to keep adjusting your container.

5. Check your changes were successfully applied by verifying the "Code Spell Checker" extension was installed.
   
    ![Extensions list](/assets/images/help/codespaces/dotnet-extensions.png) 
   
## Step 4: Run your application

In the previous section, you used the `postCreateCommand` to install a set of packages via the `dotnet restore` command. With our dependencies now installed, we can run our application.

1. Run your application by pressing `F5` or entering `dotnet watch run` in your terminal.

2. When your project starts, you should see a toast in the bottom right corner with a prompt to connect to the port your project uses. 

  ![Port forwarding toast](/assets/images/help/codespaces/python-port-forwarding.png)

## Step 5: Commit your changes

{% data reusables.codespaces.committing-link-to-procedure %} 

## Next steps

You should now be ready start developing your C# (.NET) project in {% data variables.product.prodname_codespaces %}. Here are some additional resources for more advanced scenarios.

- [Managing encrypted secrets for {% data variables.product.prodname_codespaces %}](/codespaces/working-with-your-codespace/managing-encrypted-secrets-for-codespaces)
- [Managing GPG verification for {% data variables.product.prodname_codespaces %}](/codespaces/working-with-your-codespace/managing-gpg-verification-for-codespaces)
- [Forwarding ports in your codespace](/codespaces/developing-in-codespaces/forwarding-ports-in-your-codespace)
