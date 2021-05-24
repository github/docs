---
title: Primeiros passos com o seu projeto Java no Codespaces
shortTitle: Primeiros passos para seu projeto Java
intro: 'Dê os primeiros passos com o seu projeto Java em {% data variables.product.prodname_codespaces %} criando um contêiner de desenvolvimento personalizado.'
versions:
  free-pro-team: '*'
topics:
  - Codespaces
---

{% data reusables.codespaces.release-stage %}

### Introdução

Este guia mostra como configurar seu projeto Java em {% data variables.product.prodname_codespaces %}. Ele irá apresentar a você um exemplo de abertura de seu projeto em um codespace e adicionar e modificar uma configuração de contêiner de desenvolvimento a partir de um modelo.

#### Pré-requisitos

- Você deve ter um projeto Java existente em um repositório em {% data variables.product.prodname_dotcom_the_website %}. Se você não tiver um projeto, você poderá tentar este tutorial com o seguinte exemplo: https://github.com/microsoft/vscode-remote-try-java
- You must have {% data variables.product.prodname_codespaces %} enabled for your organization.

### Step 1: Open your project in a codespace

1. Navigate to your project's repository. Use the {% octicon "download" aria-label="The download icon" %} **Code** drop-down menu, and select **Open with Codespaces**. If you don’t see this option, your project isn’t available for {% data variables.product.prodname_codespaces %}.

  ![Botão de abrir com codespaces](/assets/images/help/codespaces/open-with-codespaces-button.png)

2. To create a new codespace, click {% octicon "plus" aria-label="The plus icon" %} **New codespace**. ![Botão de codespace novo](/assets/images/help/codespaces/new-codespace-button.png)

Ao criar um código, seu projeto será criado em uma VM remota dedicada a você. Por padrão, o contêiner do seu código possui muitas linguagens e tempos de execução, incluindo Java, nvm, npm e yarn. Ele também inclui um conjunto comum de ferramentas, como git, wget, rsync, openssh e nano.

Você pode personalizar o seu codespace ajustando a quantidade de vCPUs e RAM, [adicionando dotfiles para personalizar seu ambiente](/codespaces/setting-up-your-codespace/personalizing-codespaces-for-your-account)ou modificando as ferramentas e scripts instalados.

{% data variables.product.prodname_codespaces %} usa um arquivo denominado `devcontainer.json` para armazenar configurações. Ao iniciar, {% data variables.product.prodname_codespaces %} usa o arquivo para instalar quaisquer ferramentas, dependências ou outro conjunto que possa ser necessário para o projeto. Para obter mais informações, consulte "[Configurar codespaces para o seu projeto](/codespaces/setting-up-your-codespace/configuring-codespaces-for-your-project)".


### Step 2: Add a dev container to your codespace from a template

O contêiner de codespaces padrão vem com a versão mais recente do Java, gerenciadores de pacotes (Maven, Gradle) e outras ferramentas comuns pré-instaladas. No entanto, recomendamos que você configure um contêiner personalizado para definir as ferramentas e scripts de que seu projeto precisa. Isso garantirá um ambiente reprodutível para todos os usuários de {% data variables.product.prodname_codespaces %} do seu repositório.

Para configurar seu projeto com um contêiner personalizado, você deverá usar um arquivo `devcontainer.json` para definir o ambiente. Em {% data variables.product.prodname_codespaces %}, você pode adicionar isto a partir de um modelo ou você pode criar o seu próprio. Para obter mais informações sobre contêineres de desenvolvimento, consulte "[Configurar espaços de códigos para o seu projeto](/codespaces/setting-up-your-codespace/configuring-codespaces-for-your-project)".


1. Access the command palette (`shift command P` / `shift control P`), then start typing "dev container". Click **Codespaces: Add Development Container Configuration Files...** !["Codespaces: Add Development Container Configuration Files..." in the command palette](/assets/images/help/codespaces/add-prebuilt-container-command.png)
3. Para este exemplo, clique em **Java**. Na prática, você pode selecionar qualquer contêiner específico para Java ou uma combinação de ferramentas como Java e Azure Functions. ![Selecione a opção Java na lista](/assets/images/help/codespaces/add-java-prebuilt-container.png)
4. Clique na versão recomendada do Java. ![Seleção da versão Java](/assets/images/help/codespaces/add-java-version.png)
5. To rebuild your container, access the command palette (`shift command P` / `shift control P`), then start typing "rebuild". Click **Codespaces: Rebuild Container**. ![Rebuild container option](/assets/images/help/codespaces/codespaces-rebuild.png)

#### Anatomy of your dev container

A adição do modelo de contêiner de desenvolvimento Java adiciona uma pasta `.devcontainer` à raiz do repositório do seu projeto com os seguintes arquivos:

- `devcontainer.json`
- arquivo Docker

O arquivo recém-adicionado `devcontainer.json` define algumas propriedades que são descritas após a amostra.

##### devcontainer.json

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

    // Uncomment to connect as a non-root user. Consulte https://aka.ms/vscode-remote/containers/non-root.
    "remoteUser": "vscode"
}
```

- **Name** - You can name your dev container anything, this is just the default.
- **Build** - As propriedades de compilação.
  - **Arquivo Docker** - No objeto de compilação, o arquivo Docker é uma referência ao arquivo Docker que também foi adicionado a partir do template.
  - **Args**
    - **Variante**: Este arquivo contém apenas um argumento de compilação, que é a versão de Java que é passada para o arquivo Docker.
- **Settings** - These are {% data variables.product.prodname_vscode %} settings that you can set.
  - **Terminal.integrated.shell.linux** - Embora o bash seja o padrão, você pode usar outros shells do terminal, fazendo a modificação.
- **Extensions** - These are extensions included by default.
  - **Vscjava.vscode-java-pack** - O pacote de extensão Java fornece extensões populares para o desenvolvimento do Java para você começar.
- **forwardPorts** - Todas as portas listadas aqui serão encaminhadas automaticamente.
- **postCreateCommand** - If you want to run anything after you land in your codespace that’s not defined in the Dockerfile, you can do that here.
- **remoteUser** - Por padrão, você está executando como usuário do `vscode`, mas, opcionalmente, você pode definir isso como `root`.

##### arquivo Docker

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

Você pode usar o arquivo arquivo Docker para adicionar camadas adicionais de contêiner para especificar os pacotes do sistema operacional, versões do Java ou pacotes globais que queremos que sejam incluídos no nosso arquivo Docker.

### Etapa 3: Modifique seu arquivo devcontainer.json

Com o seu contêiner de desenvolvimento adicionado e um entendimento básico do que tudo faz, agora você pode fazer alterações para configurá-lo para o seu ambiente. Neste exemplo, você irá adicionar propriedades para instalar extensões e dependências do seu projeto quando seu codespace for iniciado.

1. In the Explorer, select the `devcontainer.json` file from the tree to open it. You might have to exand the `.devcontainer` folder to see it.

  !["Codespaces: Rebuild Container" in the command palette](/assets/images/help/codespaces/devcontainers-options.png)

2. Adicione as seguintes linhas ao seu arquivo `devcontainer.json` após as `extensões`.

  ```json{:copy}
  "postCreateCommand": "npm install",
  "forwardPorts": [4000],
  ```

  Para obter mais informações sobre as propriedades `devcontainer.json`, consulte a [referência devcontainer.json](https://code.visualstudio.com/docs/remote/devcontainerjson-reference) na documentação do Visual Studio Code.

3. To rebuild your container, access the command palette (`shift command P` / `shift control P`), then start typing "rebuild". Click **Codespaces: Rebuild Container**.

  ![Rebuild container option](/assets/images/help/codespaces/codespaces-rebuild.png)

  Rebuilding inside your codespace ensures your changes work as expected before you commit the changes to the repository. If something does result in a failure, you’ll be placed in a codespace with a recovery container that you can rebuild from to keep adjusting your container.


### Step 4: Run your application

Na seção anterior, você usou o `postCreateCommand` para instalar um conjunto de pacotes via npm. Agora você pode usar isso para executar nosso aplicativo com npm.

1. Execute o seu aplicativo pressionando `F5`.

2. When your project starts, you should see a toast in the bottom right corner with a prompt to connect to the port your project uses.

  ![Port forwarding toast](/assets/images/help/codespaces/codespaces-port-toast.png)

### Step 5: Commit your changes

{% data reusables.codespaces.committing-link-to-procedure %}

### Próximas etapas

Agora você deve estar pronto para começar a desenvolver seu projeto Java em {% data variables.product.prodname_codespaces %}. Aqui estão alguns recursos adicionais para cenários mais avançados.

- [Gerenciar segredos criptografados para {% data variables.product.prodname_codespaces %}](/codespaces/working-with-your-codespace/managing-encrypted-secrets-for-codespaces)
- [Managing GPG verification for {% data variables.product.prodname_codespaces %}](/codespaces/working-with-your-codespace/managing-gpg-verification-for-codespaces)
- [Encaminhar portas no seu código](/codespaces/developing-in-codespaces/forwarding-ports-in-your-codespace)
