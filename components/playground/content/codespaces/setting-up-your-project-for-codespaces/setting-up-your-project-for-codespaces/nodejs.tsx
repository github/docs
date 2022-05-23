import dedent from 'ts-dedent'
import { PlaygroundArticleT } from 'components/playground/types'

const article: PlaygroundArticleT = {
  title: 'Add a dev container configuration to your repository',
  shortTitle: 'Node.js codespaces',
  topics: ['Codespaces', 'Developer', 'Organization', 'Node', 'JavaScript'],
  type: 'tutorial',
  slug: '/codespaces/setting-up-your-project-for-codespaces/setting-up-your-project-for-codespaces',
  originalArticle:
    '/codespaces/setting-up-your-project-for-codespaces/setting-up-your-nodejs-project-for-codespaces',
  codeLanguageId: 'nodejs',
  intro: dedent`
  This guide shows you how to add a dev container configuration to your repository to define the GitHub Codespaces development environment for your **Node.js** codebase. For more information, see "[Introduction to dev containers](/codespaces/setting-up-your-project-for-codespaces/introduction-to-dev-containers)." 
  
  If you want to add a dev container configuration for another programming language, click the language button to the right.
  `,
  prerequisites: dedent`
    - You should have an existing JavaScript, Node.js, or TypeScript project in a repository on GitHub.com. If you don't have a project, you can try this tutorial with the following example: https://github.com/microsoft/vscode-remote-try-node
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

        When you create a codespace, your project is created on a remote VM that is dedicated to you. By default, the container for your codespace has many languages and runtimes including Node.js, JavaScript, Typescript, nvm, npm, and yarn. It also includes a common set of tools like git, wget, rsync, openssh, and nano.

        You can customize your codespace by adjusting the amount of vCPUs and RAM, [adding dotfiles to personalize your environment](/codespaces/setting-up-your-codespace/personalizing-codespaces-for-your-account), or by modifying the tools and scripts installed.

        GitHub Codespaces uses a file called \`devcontainer.json\` to configure the development container that you use when you work in a codespace. Each repository can contain one or more  \`devcontainer.json\` files, to give you exactly the development environment you need to work on your code in a codespace. On launch, GitHub Codespaces uses a \`devcontainer.json\` file, and any dependent files that make up the dev container configuration, to install tools and runtimes, and perform other setup tasks that the project requires. For more information, see "[Introduction to dev containers](/codespaces/setting-up-your-codespace/configuring-codespaces-for-your-project)."
      `,
    },
    {
      codeBlock: {
        id: '0',
      },
      type: 'default',
      title: 'Step 2: Add a dev container configuration to your repository from a template',
      content: dedent`
        The default development container, or "dev container," for GitHub Codespaces supports running Node.js projects like [vscode-remote-try-node](https://github.com/microsoft/vscode-remote-try-node) out of the box. However, we recommend that you configure your own dev container to include all of the tools and scripts your project needs. This will ensure a fully reproducible environment for all GitHub Codespaces users in your repository.

        To set up your repository to use a custom dev container, you will need to create one or more \`devcontainer.json\` files. You can add these either from a template, in Visual Studio Code, or you can write your own. For more information on dev container configurations, see "[Introduction to dev containers](/codespaces/setting-up-your-codespace/configuring-codespaces-for-your-project)".

        1. Access the Command Palette (\`Shift + Command + P\` / \`Ctrl + Shift + P\`), then start typing "dev container". Select **Codespaces: Add Development Container Configuration Files...**.
          !["Codespaces: Add Development Container Configuration Files..." in the command palette](/assets/images/help/codespaces/add-prebuilt-container-command.png)
        2. For this example, click **Node.js**.  If you need additional features you can select any container that’s specific to Node or a combination of tools such as Node and MongoDB.
          ![Select Node option from the list](/assets/images/help/codespaces/add-node-prebuilt-container.png)
        3. Click the recommended version of Node.js.
          ![Node.js version selection](/assets/images/help/codespaces/add-node-version.png)
        4. Select any additional features to install and click **OK**.
        5. Access the command palette (\`Shift + Command + P\`/ \`Ctrl + Shift + P\`), then start typing "rebuild". Select **Codespaces: Rebuild Container**. 
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
        Adding the Node.js dev container template adds a \`.devcontainer\` directory to the root of your project's repository with the following files:

        - \`devcontainer.json\`
        - Dockerfile

        The newly added \`devcontainer.json\` file defines a few properties that are described below.
      `,
    },
    {
      type: 'sub-section-2',
      codeBlock: {
        id: '0',
        highlight: 4,
      },
      content: dedent`
        **\`name\`** - You can name your dev container anything, this is just the default.
      `,
    },
    {
      type: 'sub-section',
      codeBlock: {
        id: '0',
        highlight: [5, 9],
      },
      content: dedent`
        **\`build\`** - The build properties.
          - **\`dockerfile\`** - In the \`build\` object, \`dockerfile\` contains the path to the Dockerfile that was also added from the template.
          - **\`args\`**
            - **\`VARIANT\`**: This file only contains one build argument, which is the node variant we want to use that is passed into the Dockerfile.
      `,
    },
    {
      type: 'sub-section',
      codeBlock: {
        id: '0',
        highlight: [12, 14],
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
        highlight: [17, 19],
      },
      content: dedent`
        **\`extensions\`** - These are extensions included by default.
          - **\`dbaeumer.vscode-eslint\`** - ES lint is a great extension for linting, but for JavaScript there are a number of great Marketplace extensions you could also include.
      `,
    },
    {
      type: 'sub-section',
      codeBlock: {
        id: '0',
        highlight: 22,
      },
      content: dedent`
        **\`forwardPorts\`** - Any ports listed here will be forwarded automatically.
      `,
    },
    {
      type: 'sub-section',
      codeBlock: {
        id: '0',
        highlight: 25,
      },
      content: dedent`
        **\`postCreateCommand\`** - Use this to run commands that aren't defined in the Dockerfile, after your codespace is created.
      `,
    },
    {
      type: 'sub-section',
      codeBlock: {
        id: '0',
        highlight: 28,
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
        highlight: [21, 25],
      },
      type: 'default',
      title: 'Step 3: Modify your devcontainer.json file',
      content: dedent`
        With your dev container configuration added and a basic understanding of what everything does, you can now make changes to customize your environment further. In this example, you'll add properties to install npm when your codespace launches and make a list of ports inside the container available locally.

        1. In the Explorer, select the \`devcontainer.json\` file from the tree to open it. You might have to expand the \`.devcontainer\` folder to see it.
          ![devcontainer.json file in the Explorer](/assets/images/help/codespaces/devcontainers-options.png)
        2. Add the following lines to your \`devcontainer.json\` file after \`extensions\`:

            \`\`\`js{:copy}
            "postCreateCommand": "npm install",
            "forwardPorts": [4000],
            \`\`\`
            For more information about \`devcontainer.json\` properties, see the Visual Studio Code documentation: "[devcontainer.json reference](https://code.visualstudio.com/docs/remote/devcontainerjson-reference)."

        1. Access the command palette (\`Shift + Command + P\`/ \`Ctrl + Shift + P\`), then start typing "rebuild". Select **Codespaces: Rebuild Container**. 
            ![Rebuild container option](/assets/images/help/codespaces/codespaces-rebuild.png)

              Rebuilding inside your codespace ensures your changes work as expected before you commit the changes to the repository. If something does result in a failure, you’ll be placed in a codespace with a recovery container that you can rebuild from to keep adjusting your container.
      `,
    },
    {
      codeBlock: {
        id: '0',
      },
      type: 'default',
      title: 'Step 4: Run your application',
      content: dedent`
        In the previous section, you used the \`postCreateCommand\` to installing a set of packages via npm. You can now use this to run our application with npm.

        1. Run your start command in the terminal with \`npm start\`.

            ![npm start in terminal](/assets/images/help/codespaces/codespaces-npmstart.png)

        2. When your project starts, you should see a message in the bottom right corner with a prompt to connect to the port your project uses.

            ![Port forwarding toast](/assets/images/help/codespaces/codespaces-port-toast.png)
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
      `,
    },
    '1': {
      fileName: '.devcontainer/Dockerfile',
      language: 'bash',
      code: dedent`
        # [Choice] Node.js version: 14, 12, 10
        ARG VARIANT="14-buster"
        FROM mcr.microsoft.com/vscode/devcontainers/javascript-node:0-\${VARIANT}
        
        # [Optional] Uncomment this section to install additional OS packages.
        # RUN apt-get update && export DEBIAN_FRONTEND=noninteractive && apt-get -y install --no-install-recommends <your-package-list-here>
        
        # [Optional] Uncomment if you want to install an additional version of node using nvm
        # ARG EXTRA_NODE_VERSION=10
        # RUN su node -c "source /usr/local/share/nvm/nvm.sh && nvm install \${EXTRA_NODE_VERSION}"
        
        # [Optional] Uncomment if you want to install more global node modules
        # RUN su node -c "npm install -g <your-package-list-here>"
      `,
    },
  },
}

export default article
