import dedent from 'ts-dedent'
import { PlaygroundArticleT } from 'components/playground/types'

const article: PlaygroundArticleT = {
  title: 'Add a dev container configuration to your repository',
  shortTitle: 'Python codespaces',
  topics: ['Codespaces', 'Developer', 'Organization', 'Python'],
  type: 'tutorial',
  slug: '/codespaces/setting-up-your-project-for-codespaces/setting-up-your-project-for-codespaces',
  originalArticle:
    '/codespaces/setting-up-your-project-for-codespaces/setting-up-your-python-project-for-codespaces',
  codeLanguageId: 'py',
  intro: dedent`
  This guide shows you how to add a dev container configuration to your repository to define the GitHub Codespaces development environment for your **Python** codebase. For more information, see "[Introduction to dev containers](/codespaces/setting-up-your-project-for-codespaces/introduction-to-dev-containers)." 
  
  If you want to add a dev container configuration for another programming language, click the language button to the right.
  `,
  prerequisites: dedent`
    - You should have an existing Python project in a repository on GitHub.com. If you don't have a project, you can try this tutorial with the following example: https://github.com/2percentsilk/python-quickstart.
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

        When you create a codespace, your project is created on a remote VM that is dedicated to you. By default, the container for your codespace has many languages and runtimes including Python, pip, and Miniconda. It also includes a common set of tools like git, wget, rsync, openssh, and nano.

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
        The default development container, or "dev container," for GitHub Codespaces comes with the latest Python version, package managers (pip, Miniconda), and other common tools preinstalled. However, we recommend that you configure your own dev container to include all of the tools and scripts that your project needs. This will ensure a fully reproducible environment for all GitHub Codespaces users in your repository.

        To set up your repository to use a custom dev container, you will need to create one or more \`devcontainer.json\` files. You can add these either from a template, in Visual Studio Code, or you can write your own. For more information on dev container configurations, see "[Introduction to dev containers](/codespaces/setting-up-your-codespace/configuring-codespaces-for-your-project)".

        1. Access the Command Palette (\`<kbd>Shift</kbd>+<kbd>Command</kbd>+<kbd>P</kbd>\` / \`<kbd>Ctrl</kbd>+<kbd>Shift</kbd>+<kbd>P</kbd>\`), then start typing "dev container". Select **Codespaces: Add Development Container Configuration Files...**.
          !["Codespaces: Add Development Container Configuration Files..." in the command palette](/assets/images/help/codespaces/add-prebuilt-container-command.png)
        2. For this example, click **Python 3**. If you need additional features you can select any container that’s specific to Python or a combination of tools such as Python 3 and PostgreSQL.
          ![Select Python option from the list](/assets/images/help/codespaces/add-python-prebuilt-container.png)
        3. Click the recommended version of Python.
          ![Python version selection](/assets/images/help/codespaces/add-python-version.png)
        4. Accept the default option to add Node.js to your customization.
          ![Add Node.js selection](/assets/images/help/codespaces/add-nodejs-selection.png)
        5. Select any additional features to install and click **OK**.
        6. Access the command palette (\`<kbd>Shift</kbd>+<kbd>Command</kbd>+<kbd>P</kbd>\`/ \`<kbd>Ctrl</kbd>+<kbd>Shift</kbd>+<kbd>P</kbd>\`), then start typing "rebuild". Select **Codespaces: Rebuild Container**. 
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
        Adding the Python dev container template adds a .devcontainer directory to the root of your project's repository with the following files:

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
        highlight: [3, 12],
      },
      content: dedent`
        **\`build\`** - The build properties.
          - **\`dockerfile\`** - In the \`build\` object, \`dockerfile\` contains the path to the Dockerfile that was also added from the template.
          - **\`args\`**
            - **\`VARIANT\`**: This is the node variant we want to use that is passed into the Dockerfile.
      `,
    },
    {
      type: 'sub-section',
      codeBlock: {
        id: '0',
        highlight: [16, 30],
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
        highlight: [33, 35],
      },
      content: dedent`
        **\`extensions\`** - These are extensions included by default.
          - **\`ms-python.python\`** - The Microsoft Python extension provides rich support for the Python language (for all actively supported versions of the language: >=3.6), including features such as IntelliSense, linting, debugging, code navigation, code formatting, refactoring, variable explorer, test explorer, and more.
      `,
    },
    {
      type: 'sub-section',
      codeBlock: {
        id: '0',
        highlight: 38,
      },
      content: dedent`
        **\`forwardPorts\`** - Any ports listed here will be forwarded automatically.
      `,
    },
    {
      type: 'sub-section',
      codeBlock: {
        id: '0',
        highlight: 41,
      },
      content: dedent`
        **\`postCreateCommand\`** - Use this to run commands that aren't defined in the Dockerfile, like \`pip3 install -r requirements\`, after your codespace is created.
      `,
    },
    {
      type: 'sub-section',
      codeBlock: {
        id: '0',
        highlight: 44,
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
        highlight: [32, 41],
      },
      type: 'default',
      title: 'Step 3: Modify your devcontainer.json file',
      content: dedent`
        With your dev container configuration added and a basic understanding of what everything does, you can now make changes to customize your environment further. In this example, you'll add properties to install extensions and your project dependencies when your codespace launches.

        1. In the Explorer, expand the \`.devcontainer\` folder and select the \`devcontainer.json\` file from the tree to open it.

           ![devcontainer.json file in the Explorer](/assets/images/help/codespaces/devcontainers-options.png)

        2. Update the extensions list in your \`devcontainer.json\` file to add a few extensions that are useful when working with your project.

           \`\`\`json{:copy}
           "extensions": [
               "ms-python.python",
               "cstrap.flask-snippets",
               "streetsidesoftware.code-spell-checker"
             ],
           \`\`\`

        3. Uncomment the \`postCreateCommand\` to auto-install requirements as part of the codespaces setup process.

           \`\`\`json{:copy}
           // Use 'postCreateCommand' to run commands after the container is created.
           "postCreateCommand": "pip3 install --user -r requirements.txt",
           \`\`\`

        4. Access the command palette (\`<kbd>Shift</kbd>+<kbd>Command</kbd>+<kbd>P</kbd>\`/ \`<kbd>Ctrl</kbd>+<kbd>Shift</kbd>+<kbd>P</kbd>\`), then start typing "rebuild". Select **Codespaces: Rebuild Container**. 
          
            ![Rebuild container option](/assets/images/help/codespaces/codespaces-rebuild.png)
          
             Rebuilding inside your codespace ensures your changes work as expected before you commit the changes to the repository. If something does result in a failure, you’ll be placed in a codespace with a recovery container that you can rebuild from to keep adjusting your container.

        5. Check your changes were successfully applied by verifying the Code Spell Checker and Flask Snippet extensions were installed.

           ![Extensions list](/assets/images/help/codespaces/python-extensions.png)
      `,
    },
    {
      codeBlock: {
        id: '0',
      },
      type: 'default',
      title: 'Step 4: Run your application',
      content: dedent`
        In the previous section, you used the \`postCreateCommand\` to install a set of packages with pip3. With your dependencies now installed, you can run your application.

        1. Run your application by pressing F5 or entering \`python -m flask run\` in the codespace terminal.

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
      `,
    },
    '1': {
      fileName: '.devcontainer/Dockerfile',
      language: 'bash',
      code: dedent`
      # [Choice] Python version: 3, 3.9, 3.8, 3.7, 3.6
      ARG VARIANT="3"
      FROM mcr.microsoft.com/vscode/devcontainers/python:0-\${VARIANT}
      
      # [Option] Install Node.js
      ARG INSTALL_NODE="true"
      ARG NODE_VERSION="lts/*"
      RUN if [ "\${INSTALL_NODE}" = "true" ]; then su vscode -c "umask 0002 && . /usr/local/share/nvm/nvm.sh && nvm install \${NODE_VERSION} 2>&1"; fi
      
      # [Optional] If your pip requirements rarely change, uncomment this section to add them to the image.
      # COPY requirements.txt /tmp/pip-tmp/
      # RUN pip3 --disable-pip-version-check --no-cache-dir install -r /tmp/pip-tmp/requirements.txt \
      #    && rm -rf /tmp/pip-tmp
      
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
