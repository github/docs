import dedent from 'ts-dedent'
import { PlaygroundArticleT } from 'components/playground/types'

const article: PlaygroundArticleT = {
  title: 'Add a dev container configuration to your repository',
  shortTitle: 'C# codespaces',
  topics: ['Codespaces', 'Developer', 'Organization'],
  type: 'tutorial',
  slug: '/codespaces/setting-up-your-project-for-codespaces/setting-up-your-project-for-codespaces',
  originalArticle:
    '/codespaces/setting-up-your-project-for-codespaces/setting-up-your-dotnet-project-for-codespaces',
  codeLanguageId: 'dotnet',
  intro: dedent`
  This guide shows you how to add a dev container configuration to your repository to define the GitHub Codespaces development environment for your **C# (.NET)** codebase. For more information, see "[Introduction to dev containers](/codespaces/setting-up-your-project-for-codespaces/introduction-to-dev-containers)." 
  
  If you want to add a dev container configuration for another programming language, click the language button to the right.
 `,
  prerequisites: dedent`
    - You should have an existing C# (.NET) project in a repository on GitHub.com. If you don't have a project, you can try this tutorial with the following example: https://github.com/2percentsilk/python-quickstart.
    - GitHub Codespaces must be enabled for your organization. For more information, see "[Enabling GitHub Codespaces for your organization](/codespaces/managing-codespaces-for-your-organization/enabling-codespaces-for-your-organization)."
  `,
  contentBlocks: [
    {
      codeBlock: {
        id: '0',
      },
      type: 'default',
      title: 'Step 1: Open your project in a codespace',
      content: dedent`
        1. Under the repository name, use the **Code** drop-down menu, and in the **Codespaces** tab, click **Create codespace on BRANCH**.

            ![New codespace button](/assets/images/help/codespaces/new-codespace-button.png)

            If you don’t see this option, GitHub Codespaces isn't available for your project. See [Access to GitHub Codespaces](/codespaces/developing-in-codespaces/creating-a-codespace#access-to-codespaces) for more information.

        When you create a codespace, your project is created on a remote VM that is dedicated to you. By default, the container for your codespace has many languages and runtimes including .NET. It also includes a common set of tools like git, wget, rsync, openssh, and nano.

        You can customize your codespace by adjusting the amount of vCPUs and RAM, [adding dotfiles to personalize your environment](/codespaces/setting-up-your-codespace/personalizing-codespaces-for-your-account), or by modifying the tools and scripts installed.
        
        GitHub Codespaces uses a file called \`devcontainer.json\` to configure the development container that you use when you work in a codespace. Each repository can contain one or more  \`devcontainer.json\` files, to give you exactly the development environment you need to work on your code in a codespace.
        
        On launch, GitHub Codespaces uses a \`devcontainer.json\` file, and any dependent files that make up the dev container configuration, to install tools and runtimes, and perform other setup tasks that the project requires. For more information, see "[Introduction to dev containers](/codespaces/setting-up-your-codespace/configuring-codespaces-for-your-project)."
      `,
    },
    {
      codeBlock: {
        id: '0',
      },
      type: 'default',
      title: 'Step 2: Add a dev container configuration to your repository from a template',
      content: dedent`
        The default development container, or "dev container," for GitHub Codespaces comes with the latest .NET version and common tools preinstalled. However, we recommend that you configure your own dev container to include all of the tools and scripts that your project needs. This will ensure a fully reproducible environment for all GitHub Codespaces users in your repository.

        To set up your repository to use a custom dev container, you will need to create one or more \`devcontainer.json\` files. You can add these either from a template, in Visual Studio Code, or you can write your own. For more information on dev container configurations, see "[Introduction to dev containers](/codespaces/setting-up-your-codespace/configuring-codespaces-for-your-project)".

        1. Access the Command Palette (\`Shift + Command + P\` / \`Ctrl + Shift + P\`), then start typing "dev container". Select **Codespaces: Add Development Container Configuration Files...**.
          ![Codespaces: Add Development Container Configuration Files... in the command palette](/assets/images/help/codespaces/add-prebuilt-container-command.png)
        2. For this example, click **C# (.NET)**. If you need additional features you can select any container that’s specific to C# (.NET) or a combination of tools such as C# (.NET) and MS SQL.
          
            ![Select C# (.NET) option from the list](/assets/images/help/codespaces/add-dotnet-prebuilt-container.png)
        3. Click the recommended version of .NET.
          ![.NET version selection](/assets/images/help/codespaces/add-dotnet-version.png)
        4. Accept the default option to add Node.js to your customization.
          ![Add Node.js selection](/assets/images/help/codespaces/dotnet-options.png)
        5. Select any additional features to install and click **OK**.
        6. Access the command palette (\`Shift + Command + P\`/ \`Ctrl + Shift + P\`), then start typing "rebuild". Select **Codespaces: Rebuild Container**. 
          ![Rebuild container option](/assets/images/help/codespaces/codespaces-rebuild.png)
      `,
    },
    {
      codeBlock: {
        id: '0',
      },
      type: 'sub-section',
      title: 'Anatomy of your dev container',
      content: dedent`
      Adding the C# (.NET) dev container template adds a \`.devcontainer\` directory to the root of your project's repository with the following files:

        - \`devcontainer.json\`
        - Dockerfile

        The newly added \`devcontainer.json\` file defines a few properties that are described below.
      `,
    },
    {
      type: 'sub-section-2',
      codeBlock: {
        id: '0',
        highlight: 2,
      },
      content: dedent`
        **\`name\`** - You can name your dev container anything, this is just the default.
      `,
    },
    {
      type: 'sub-section',
      codeBlock: {
        id: '0',
        highlight: [3, 13],
      },
      content: dedent`
        **\`build\`** - The build properties.
          - **\`dockerfile\`** - In the \`build\` object, \`dockerfile\` contains the path to the Dockerfile that was also added from the template.
          - **\`args\`**
            - **\`VARIANT\`**: This file only contains one build argument, which is the .NET Core version that we want to use.
      `,
    },
    {
      type: 'sub-section',
      codeBlock: {
        id: '0',
        highlight: [16, 18],
      },
      content: dedent`
        **\`settings\`** - These are Visual Studio Code settings that you can set.
          - **\`terminal.integrated.shell.linux\`** - While bash is the default here, you could use other terminal shells by modifying this.
      `,
    },
    {
      type: 'sub-section',
      codeBlock: {
        id: '0',
        highlight: [20, 23],
      },
      content: dedent`
        **\`extensions\`** - These are extensions included by default.
          - **\`ms-dotnettools.csharp\`** - The Microsoft C# extension provides rich support for developing in C#, including features such as IntelliSense, linting, debugging, code navigation, code formatting, refactoring, variable explorer, test explorer, and more.
      `,
    },
    {
      type: 'sub-section',
      codeBlock: {
        id: '0',
        highlight: 26,
      },
      content: dedent`
        **\`forwardPorts\`** - Any ports listed here will be forwarded automatically.
      `,
    },
    {
      type: 'sub-section',
      codeBlock: {
        id: '0',
        highlight: 29,
      },
      content: dedent`
      **\`postCreateCommand\`** - Use this to run commands that aren't defined in the Dockerfile, like \`dotnet restore\`, after your codespace is created.
      `,
    },
    {
      type: 'sub-section',
      codeBlock: {
        id: '0',
        highlight: 32,
      },
      content: dedent`
        **\`remoteUser\`** - By default, you’re running as the vscode user, but you can optionally set this to root.
      `,
    },
    {
      codeBlock: {
        id: '1',
      },
      type: 'sub-section',
      title: 'Dockerfile',
      content: dedent`
        You can use the Dockerfile to add additional container layers to specify OS packages, node versions, or global packages we want included in our container.
      `,
    },
    {
      codeBlock: {
        id: '0',
        highlight: [21, 29],
      },
      type: 'default',
      title: 'Step 3: Modify your devcontainer.json file',
      content: dedent`
        With your dev container configuration added and a basic understanding of what everything does, you can now make changes to customize your environment further. In this example, you'll add properties to install extensions and your project dependencies when your codespace launches.

        1. In the Explorer, expand the \`.devcontainer\` folder and select the \`devcontainer.json\` file from the tree to open it.

           ![devcontainer.json file in the Explorer](/assets/images/help/codespaces/devcontainers-options.png)

        2. Update your the \`extensions\` list in your \`devcontainer.json\` file to add a few extensions that are useful when working with your project.

           \`\`\`json{:copy}
           "extensions": [
               "ms-dotnettools.csharp",
               "streetsidesoftware.code-spell-checker"
             ],
           \`\`\`
         
         3. Uncomment the \`postCreateCommand\` to restore dependencies as part of the codespace setup process.
         
            \`\`\`json{:copy}
            // Use 'postCreateCommand' to run commands after the container is created.
            "postCreateCommand": "dotnet restore",
            \`\`\`

        4. Access the command palette (\`Shift + Command + P\`/ \`Ctrl + Shift + P\`), then start typing "rebuild". Select **Codespaces: Rebuild Container**. 
          ![Rebuild container option](/assets/images/help/codespaces/codespaces-rebuild.png)
          Rebuilding inside your codespace ensures your changes work as expected before you commit the changes to the repository. If something does result in a failure, you’ll be placed in a codespace with a recovery container that you can rebuild from to keep adjusting your container.

        5. Check your changes were successfully applied by verifying the "Code Spell Checker" extension was installed.

            ![Extensions list](/assets/images/help/codespaces/dotnet-extensions.png)
      `,
    },
    {
      codeBlock: {
        id: '0',
      },
      type: 'default',
      title: 'Step 4: Run your application',
      content: dedent`
      In the previous section, you used the \`postCreateCommand\` to install a set of packages via the \`dotnet restore\` command. With our dependencies now installed, we can run our application.

      1. Run your application by pressing \`F5\` or entering \`dotnet watch run\` in your terminal.

        2. When your project starts, you should see a message in the bottom right corner with a prompt to connect to the port your project uses.

           ![Port forwarding toast](/assets/images/help/codespaces/python-port-forwarding.png)
      `,
    },
    {
      codeBlock: {
        id: '0',
      },
      type: 'default',
      title: 'Step 5: Commit your changes',
      content: dedent`
      Once you've made changes to your codespace, either new code or configuration changes, you'll want to commit your changes. Committing changes to your repository ensures that anyone else who creates a codespace from this repository has the same configuration. This also means that any customization you do, such as adding Visual Studio Code extensions, will appear for all users.

      For information, see "[Using source control in your codespace](/codespaces/developing-in-codespaces/using-source-control-in-your-codespace#committing-your-changes)."
      `,
    },
  ],
  codeBlocks: {
    '0': {
      fileName: '.devcontainer/devcontainer.json',
      language: 'json',
      code: dedent`
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
      
        // Use 'postCreateCommand' to run commands after the container is created.
        // "postCreateCommand": "dotnet restore",
      
        // Comment out connect as root instead. More info: https://aka.ms/vscode-remote/containers/non-root.
        "remoteUser": "vscode"
      }  
      `,
    },
    '1': {
      fileName: '.devcontainer/Dockerfile',
      language: 'bash',
      code: dedent`
      # [Choice] .NET version: 5.0, 3.1, 2.1
      ARG VARIANT="5.0"
      FROM mcr.microsoft.com/vscode/devcontainers/dotnetcore:0-\${VARIANT}
      
      # [Option] Install Node.js
      ARG INSTALL_NODE="true"
      ARG NODE_VERSION="lts/*"
      RUN if [ "\${INSTALL_NODE}" = "true" ]; then su vscode -c "umask 0002 && . /usr/local/share/nvm/nvm.sh && nvm install \${NODE_VERSION} 2>&1"; fi
      
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
      `,
    },
  },
}

export default article
