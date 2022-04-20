import dedent from 'ts-dedent'
import { PlaygroundArticleT } from 'components/playground/types'

const article: PlaygroundArticleT = {
  title: 'Add a dev container configuration to your repository',
  shortTitle: 'Java codespaces',
  topics: ['Codespaces', 'Developer', 'Organization', 'Java'],
  type: 'tutorial',
  slug: '/codespaces/setting-up-your-project-for-codespaces/setting-up-your-project-for-codespaces',
  originalArticle:
    '/codespaces/setting-up-your-project-for-codespaces/setting-up-your-java-project-for-codespaces',
  codeLanguageId: 'java',
  intro: dedent`
  This guide shows you how to add a dev container configuration to your repository to define the GitHub Codespaces development environment for your **Java** codebase. For more information, see "[Introduction to dev containers](/codespaces/setting-up-your-project-for-codespaces/introduction-to-dev-containers)." 
  
  If you want to add a dev container configuration for another programming language, click the language button to the right.
  `,
  prerequisites: dedent`
  - You should have an existing Java project in a repository on GitHub.com. If you don't have a project, you can try this tutorial with the following example: https://github.com/microsoft/vscode-remote-try-java
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

        When you create a codespace, your project is created on a remote VM that is dedicated to you. By default, the container for your codespace has many languages and runtimes including Java, nvm, npm, and yarn. It also includes a common set of tools like git, wget, rsync, openssh, and nano.
        
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
        The default development container, or "dev container," for GitHub Codespaces comes with the latest Java version, package managers (Maven, Gradle), and other common tools preinstalled. However, we recommend that you configure your own dev container to include all of the tools and scripts that your project needs. This will ensure a fully reproducible environment for all GitHub Codespaces users in your repository.

        To set up your repository to use a custom dev container, you will need to create one or more \`devcontainer.json\` files. You can add these either from a template, in Visual Studio Code, or you can write your own. For more information on dev container configurations, see "[Introduction to dev containers](/codespaces/setting-up-your-codespace/configuring-codespaces-for-your-project)".

        1. Access the Command Palette (\`Shift + Command + P\` / \`Ctrl + Shift + P\`), then start typing "dev container". Select **Codespaces: Add Development Container Configuration Files...**.
          !["Codespaces: Add Development Container Configuration Files..." in the command palette](/assets/images/help/codespaces/add-prebuilt-container-command.png)
        2. For this example, click **Java**. In practice, you could select any container that’s specific to Java or a combination of tools such as Java and Azure Functions.
          ![Select Java option from the list](/assets/images/help/codespaces/add-java-prebuilt-container.png)
        3. Click the recommended version of Java.
          ![Java version selection](/assets/images/help/codespaces/add-java-version.png)
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
        Adding the Java dev container template adds a .devcontainer directory to the root of your project's repository with the following files:

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
        highlight: [5, 16],
      },
      content: dedent`
        **\`build\`** - The build properties.
          - **\`dockerfile\`** - In the \`build\` object, \`dockerfile\` contains the path to the Dockerfile that was also added from the template.
          - **\`args\`**
            - **\`VARIANT\`**: This file only contains one build argument, which is the Java version that is passed into the Dockerfile.
      `,
    },
    {
      type: 'sub-section',
      codeBlock: {
        id: '0',
        highlight: [19, 23],
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
        highlight: [26, 28],
      },
      content: dedent`
        **\`extensions\`** - These are extensions included by default.
          - **\`vscjava.vscode-java-pack\`** - The Java Extension Pack provides popular extensions for Java development to get you started.
      `,
    },
    {
      type: 'sub-section',
      codeBlock: {
        id: '0',
        highlight: 31,
      },
      content: dedent`
        **\`forwardPorts\`** - Any ports listed here will be forwarded automatically.
      `,
    },
    {
      type: 'sub-section',
      codeBlock: {
        id: '0',
        highlight: 34,
      },
      content: dedent`
        **\`postCreateCommand\`** - Use this to run commands that aren't defined in the Dockerfile, after your codespace is created.
      `,
    },
    {
      type: 'sub-section',
      codeBlock: {
        id: '0',
        highlight: 37,
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
        highlight: [30, 34],
      },
      type: 'default',
      title: 'Step 3: Modify your devcontainer.json file',
      content: dedent`
        With your dev container configuration added and a basic understanding of what everything does, you can now make changes to customize your environment further. In this example, you'll add properties to install extensions and your project dependencies when your codespace launches.

        1. In the Explorer, expand the \`.devcontainer\` folder and select the \`devcontainer.json\` file from the tree to open it.

           ![devcontainer.json file in the Explorer](/assets/images/help/codespaces/devcontainers-options.png)

        2. Add the following lines to your \`devcontainer.json\` file after \`extensions\`.

           \`\`\`json{:copy}
           "postCreateCommand": "java -version",
           "forwardPorts": [4000],
           \`\`\`
         
           For more information about \`devcontainer.json\` properties, see the Visual Studio Code documentation: "[devcontainer.json reference](https://code.visualstudio.com/docs/remote/devcontainerjson-reference)."

        4. Access the command palette (\`Shift + Command + P\`/ \`Ctrl + Shift + P\`), then start typing "rebuild". Select **Codespaces: Rebuild Container**. 
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
      In the previous section, you used the \`postCreateCommand\` to install a set of packages via npm. You can now use this to run our application with npm.

      1. Run your application by pressing \`F5\`.
      
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
      `,
    },
    '1': {
      fileName: '.devcontainer/Dockerfile',
      language: 'bash',
      code: dedent`
      # See here for image contents: https://github.com/microsoft/vscode-dev-containers/tree/v0.159.0/containers/java/.devcontainer/base.Dockerfile
      ARG VARIANT="14"
      FROM mcr.microsoft.com/vscode/devcontainers/java:0-\${VARIANT}
      
      # [Optional] Install Maven or Gradle
      ARG INSTALL_MAVEN="false"
      ARG MAVEN_VERSION=3.6.3
      ARG INSTALL_GRADLE="false"
      ARG GRADLE_VERSION=5.4.1
      RUN if [ "\${INSTALL_MAVEN}" = "true" ]; then su vscode -c "source /usr/local/sdkman/bin/sdkman-init.sh && sdk install maven \"\${MAVEN_VERSION}\""; fi \
          && if [ "\${INSTALL_GRADLE}" = "true" ]; then su vscode -c "source /usr/local/sdkman/bin/sdkman-init.sh && sdk install gradle \"\${GRADLE_VERSION}\""; fi
      
      # [Optional] Install a version of Node.js using nvm for front end dev
      ARG INSTALL_NODE="true"
      ARG NODE_VERSION="lts/*"
      RUN if [ "\${INSTALL_NODE}" = "true" ]; then su vscode -c "source /usr/local/share/nvm/nvm.sh && nvm install \${NODE_VERSION} 2>&1"; fi
      
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
