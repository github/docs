---
title: Primeiros passos com o seu projeto Node.js em Codedespaces
shortTitle: Primeiros passos para o seu projeto Node.js
intro: 'Get started with your JavaScript, Node.js, or TypeScript project in {% data variables.product.prodname_codespaces %} by creating a custom dev container.'
versions:
  free-pro-team: '*'
type: tutorial
topics:
  - Codespaces
  - Developer
  - Node
  - JavaScript
---

{% data reusables.codespaces.release-stage %}

### Introdução

This guide shows you how to set up your JavaScript, Node.js, or TypeScript project in {% data variables.product.prodname_codespaces %}. Ele irá apresentar a você um exemplo de abertura de seu projeto em um codespace e adicionar e modificar uma configuração de contêiner de desenvolvimento a partir de um modelo.

#### Pré-requisitos

- You should have an existing JavaScript, Node.js, or TypeScript project in a repository on {% data variables.product.prodname_dotcom_the_website %}. If you don't have a project, you can try this tutorial with the following example: https://github.com/microsoft/vscode-remote-try-node
- You must have {% data variables.product.prodname_codespaces %} enabled for your organization.

### Step 1: Open your project in a codespace

1. Navigate to your project's repository. Use the {% octicon "download" aria-label="The download icon" %} **Code** drop-down menu, and select **Open with Codespaces**. If you don’t see this option, your project isn’t available for {% data variables.product.prodname_codespaces %}.

  ![Botão de abrir com codespaces](/assets/images/help/codespaces/open-with-codespaces-button.png)

2. To create a new codespace, click {% octicon "plus" aria-label="The plus icon" %} **New codespace**. ![Botão de codespace novo](/assets/images/help/codespaces/new-codespace-button.png)

Ao criar um código, seu projeto será criado em uma VM remota dedicada a você. Por padrão, o contêiner para o seu código possui muitas linguagens e tempos de execução, incluindo Node.js, JavaScript, Typescript, nvm, npm e yarn. Ele também inclui um conjunto comum de ferramentas, como git, wget, rsync, openssh e nano.

Você pode personalizar o seu codespace ajustando a quantidade de vCPUs e RAM, [adicionando dotfiles para personalizar seu ambiente](/codespaces/setting-up-your-codespace/personalizing-codespaces-for-your-account)ou modificando as ferramentas e scripts instalados.

{% data variables.product.prodname_codespaces %} usa um arquivo denominado `devcontainer.json` para armazenar configurações. Ao iniciar, {% data variables.product.prodname_codespaces %} usa o arquivo para instalar quaisquer ferramentas, dependências ou outro conjunto que possa ser necessário para o projeto. Para obter mais informações, consulte "[Configurar codespaces para o seu projeto](/codespaces/setting-up-your-codespace/configuring-codespaces-for-your-project)".

### Step 2: Add a dev container to your codespace from a template

The default codespaces container will support running Node.js projects like [vscode-remote-try-node](https://github.com/microsoft/vscode-remote-try-node) out of the box. By setting up a custom container you can customize the tools and scripts that run as part of codespace creation and ensure a fully reproducible environment for all {% data variables.product.prodname_codespaces %} users in your repository.

Para configurar seu projeto com um contêiner personalizado, você deverá usar um arquivo `devcontainer.json` para definir o ambiente. Em {% data variables.product.prodname_codespaces %}, você pode adicionar isto a partir de um modelo ou você pode criar o seu próprio. For more information on dev containers, see "[Configuring Codespaces for your project](/codespaces/setting-up-your-codespace/configuring-codespaces-for-your-project)".

1. Access the command palette (`shift command P` / `shift control P`), then start typing "dev container". Click **Codespaces: Add Development Container Configuration Files...** !["Codespaces: Add Development Container Configuration Files..." in the command palette](/assets/images/help/codespaces/add-prebuilt-container-command.png)
3. For this example, click **Node.js**.  If you need additional features you can select any container that’s specific to Node or a combination of tools such as Node and MongoDB. ![Select Node option from the list](/assets/images/help/codespaces/add-node-prebuilt-container.png)
4. Click the recommended version of Node.js. ![Node.js version selection](/assets/images/help/codespaces/add-node-version.png)
5. To rebuild your container, access the command palette (`shift command P` / `shift control P`), then start typing "rebuild". Click **Codespaces: Rebuild Container**. ![Rebuild container option](/assets/images/help/codespaces/codespaces-rebuild.png)

#### Anatomy of your dev container

Adding the Node.js dev container template adds a `.devcontainer` folder to the root of your project's repository with the following files:

- `devcontainer.json`
- arquivo Docker

O arquivo recém-adicionado `devcontainer.json` define algumas propriedades que são descritas após a amostra.

##### devcontainer.json

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

    // Comment out connect as root instead. Mais informações: https://aka.ms/vscode-remote/containers/non-root.
    "remoteUser": "node"
}
```

- **Name** - You can name your dev container anything, this is just the default.
- **Build** - As propriedades de compilação.
  - **dockerfile** - In the build object, dockerfile is a reference to the Dockerfile that was also added from the template.
  - **Args**
    - **Variante**: Este arquivo contém apenas um argumento de compilação, que é a variante de nó que queremos usar e que é passada para o arquivo Docker.
- **Settings** - These are {% data variables.product.prodname_vscode %} settings that you can set.
  - **Terminal.integrated.shell.linux** - Embora o bash seja o padrão, você pode usar outros shells do terminal, fazendo a modificação.
- **Extensions** - These are extensions included by default.
  - **Dbaeumer.vscode-eslint** - ES lint is a great extension for linting, but for JavaScript there are a number of great Marketplace extensions you could also include.
- **forwardPorts** - Todas as portas listadas aqui serão encaminhadas automaticamente.
- **postCreateCommand** - If you want to run anything after you land in your codespace that’s not defined in the Dockerfile, you can do that here.
- **remoteUser** - By default, you’re running as the vscode user, but you can optionally set this to root.

##### arquivo Docker

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

Você pode usar o arquivo Docker para adicionar camadas adicionais de contêiner para especificar os pacotes do sistema operacional, versões de nó ou pacotes globais que queremos que sejam incluídos no nosso arquivo Docker.

### Etapa 3: Modifique seu arquivo devcontainer.json

Com o seu contêiner de desenvolvimento adicionado e um entendimento básico do que tudo faz, agora você pode fazer alterações para configurá-lo para o seu ambiente. Neste exemplo, você irá adicionar propriedades para instalar o npm quando seu codespace for lançado e para fazer uma lista de portas dentro do contêiner disponível localmente.

1. In the Explorer, select the `devcontainer.json` file from the tree to open it. You might have to exand the `.devcontainer` folder to see it.

  !["Codespaces: Rebuild Container" in the command palette](/assets/images/help/codespaces/devcontainers-options.png)

2. Add the following lines to your `devcontainer.json` file after `extensions`:

  ```json{:copy}
  "postCreateCommand": "npm install",
  "forwardPorts": [4000],
  ```

  For more information on `devcontainer.json` properties, see the [devcontainer.json reference](https://code.visualstudio.com/docs/remote/devcontainerjson-reference) in the {% data variables.product.prodname_vscode %} docs.

3. To rebuild your container, access the command palette (`shift command P` / `shift control P`), then start typing "rebuild". Click **Codespaces: Rebuild Container**.

  ![Rebuild container option](/assets/images/help/codespaces/codespaces-rebuild.png)

  Rebuilding inside your codespace ensures your changes work as expected before you commit the changes to the repository. If something does result in a failure, you’ll be placed in a codespace with a recovery container that you can rebuild from to keep adjusting your container.


### Step 4: Run your application

In the previous section, you used the `postCreateCommand` to installing a set of packages via npm. Agora você pode usar isso para executar nosso aplicativo com npm.

1. Run your start command in the terminal with`npm start`.

  ![npm start in terminal](/assets/images/help/codespaces/codespaces-npmstart.png)

2. When your project starts, you should see a toast in the bottom right corner with a prompt to connect to the port your project uses.

  ![Port forwarding toast](/assets/images/help/codespaces/codespaces-port-toast.png)

### Step 5: Commit your changes

{% data reusables.codespaces.committing-link-to-procedure %}

### Próximas etapas

You should now be ready start developing your JavaScript project in {% data variables.product.prodname_codespaces %}. Aqui estão alguns recursos adicionais para cenários mais avançados.

- [Managing encrypted secrets for your codespaces](/codespaces/managing-your-codespaces/managing-encrypted-secrets-for-your-codespaces)
- [Managing GPG verification for {% data variables.product.prodname_codespaces %}](/codespaces/managing-your-codespaces/managing-gpg-verification-for-codespaces)
- [Encaminhar portas no seu código](/codespaces/developing-in-codespaces/forwarding-ports-in-your-codespace)
