---
title: Configurando seu projeto Java para Codespaces do GitHub
allowTitleToDifferFromFilename: true
shortTitle: Setting up with your Java project
intro: 'Dê os primeiros passos com o seu projeto Java em {% data variables.product.prodname_github_codespaces %} criando um contêiner de desenvolvimento personalizado.'
redirect_from:
  - /codespaces/getting-started-with-codespaces/getting-started-with-your-java-project-in-codespaces
versions:
  fpt: '*'
  ghec: '*'
topics:
  - Codespaces
hasExperimentalAlternative: true
hidden: true
ms.openlocfilehash: b861744483f61bc01e8069188c1ce6298411d57e
ms.sourcegitcommit: e8c012864f13f9146e53fcb0699e2928c949ffa8
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 11/09/2022
ms.locfileid: '148158762'
---
## Introdução

Este guia mostra como configurar seu projeto Java {% data reusables.codespaces.setting-up-project-intro %}

### Pré-requisitos

- Você deve ter um projeto Java existente em um repositório em {% data variables.product.prodname_dotcom_the_website %}. Caso você não tenha um projeto, experimente este tutorial com o seguinte exemplo: https://github.com/microsoft/vscode-remote-try-java
- Você precisa ter {% data variables.product.prodname_github_codespaces %} habilitado para a sua organização.

## Etapa 1: Abra o seu projeto em um codespace

1. No nome do repositório, use o menu suspenso **{% octicon "code" aria-label="The code icon" %} Código** e, na guia **Codespaces**, clique no ícone de mais ({% octicon "plus" aria-label="The plus icon" %}).

  ![Botão de codespace novo](/assets/images/help/codespaces/new-codespace-button.png)

Ao criar um código, seu projeto será criado em uma VM remota dedicada a você. Por padrão, o contêiner do seu código possui muitas linguagens e tempos de execução, incluindo Java, nvm, npm e Yarn. Ele também inclui um conjunto de ferramentas frequentemente usadas, como git, wget, rsync, openssh e nano.

{% data reusables.codespaces.customize-vcpus-and-ram %} principal

## Etapa 2: Adicionar uma configuração de contêiner de desenvolvimento ao repositório de um modelo

O contêiner de desenvolvimento padrão, ou "contêiner de desenvolvimento", para {% data variables.product.prodname_github_codespaces %} vem com a versão mais recente do Java, gerenciadores de pacotes (Maven, Gradle) e outras ferramentas comuns pré-instaladas. No entanto, recomendamos que você configure seu próprio contêiner de desenvolvimento para incluir todas as ferramentas e scripts necessários ao projeto. Isso garantirá um ambiente reprodutível para todos os usuários de {% data variables.product.prodname_github_codespaces %} do seu repositório.

{% data reusables.codespaces.setup-custom-devcontainer %}

{% data reusables.codespaces.command-palette-container %}
1. Para este exemplo, clique em **Java**. Na prática, você pode selecionar qualquer contêiner específico para Java ou uma combinação de ferramentas como Java e Azure Functions.
  ![Seleção da opção Java na lista](/assets/images/help/codespaces/add-java-prebuilt-container.png)
1. Clique na versão recomendada do Java.
  ![Seleção da versão Java](/assets/images/help/codespaces/add-java-version.png) {% data reusables.codespaces.rebuild-command %}

### Anatomia do seu contêiner de desenvolvimento

A adição do modelo de contêiner de desenvolvimento Java adiciona um diretório `.devcontainer` à raiz do repositório do projeto com os seguintes arquivos:

- `devcontainer.json`
- Dockerfile

O arquivo `devcontainer.json` recém-adicionado define algumas propriedades descritas após o exemplo.

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

- **name** – Dê qualquer nome ao contêiner de desenvolvimento, esse é apenas o padrão.
- **build** – As propriedades de build.
  - **dockerfile** – No objeto de `build`, `dockerfile` contém o caminho para o Dockerfile que também foi adicionado do modelo.
  - **args**
    - **variant** – esse arquivo contém apenas um argumento de compilação, que é a versão Java transmitida para o Dockerfile.
- **settings** – são configurações {% data variables.product.prodname_vscode %} que você pode definir.
  - **terminal.integrated.shell.linux** – Embora o Bash seja o padrão aqui, você pode usar outros shells de terminal modificando isso.
- **extensões** – essas são extensões incluídas por padrão.
  - **vscjava.vscode-java-pack** – o Pacote de Extensão Java fornece extensões populares para o desenvolvimento java para começar.
- **forwardPorts** – Todas as portas listadas aqui serão encaminhadas automaticamente. Para obter mais informações, confira "[Como encaminhar portas no seu codespace](/codespaces/developing-in-codespaces/forwarding-ports-in-your-codespace)".
- **postCreateCommand** – use-o para executar comandos que não são definidos no Dockerfile, depois que o codespace for criado.
- **remoteUser** – Por padrão, você executa o código como o usuário `vscode`, mas, opcionalmente, pode definir isso como `root`.

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

Você pode usar o Dockerfile para adicionar camadas de contêiner adicionais para especificar pacotes do sistema operacional, versões Java ou pacotes globais que desejamos incluir em nosso contêiner.

## Etapa 3: Modifique seu arquivo devcontainer.json

Com as configurações do seu contêiner de desenvolvimento adicionadas e um entendimento básico do que tudo faz, agora você pode personalizar para configurar ainda mais o seu ambiente. Neste exemplo, você irá adicionar propriedades para instalar extensões e dependências do seu projeto quando seu codespace for iniciado.

1. No Explorer, selecione o arquivo `devcontainer.json` na árvore para abri-lo. Talvez seja necessário expandir a pasta `.devcontainer` para vê-la.

   ![Arquivo devcontainer.json no Explorador](/assets/images/help/codespaces/devcontainers-options.png)

2. Adicione as seguintes linhas ao arquivo `devcontainer.json` após `extensions`:

   ```json{:copy}
   "postCreateCommand": "npm install",
   "forwardPorts": [4000],
   ```

   {% data reusables.codespaces.more-info-devcontainer %}

{% data reusables.codespaces.rebuild-command %}

   {% data reusables.codespaces.rebuild-reason %}

## Etapa 4: Execute seu aplicativo.

Na seção anterior, você usou o `postCreateCommand` para instalar um conjunto de pacotes por meio do npm. Agora você pode usar isso para executar nosso aplicativo com npm.

1. Execute seu aplicativo pressionando `F5`.

2. Quando o projeto for iniciado, você deverá ver uma mensagem de notificação do sistema no canto inferior direito de {% data variables.product.prodname_vscode_shortname %}, contendo um prompt para se conectar à porta que seu projeto usa.

   ![Notificação do sistema de encaminhamento de porta](/assets/images/help/codespaces/codespaces-port-toast.png)

## Etapa 5: Faça commit das suas alterações

{% data reusables.codespaces.committing-link-to-procedure %}

## Próximas etapas

Agora você deve estar pronto para começar a desenvolver seu projeto Java em {% data variables.product.prodname_github_codespaces %}. Aqui estão alguns recursos adicionais para cenários mais avançados.

{% data reusables.codespaces.next-steps-adding-devcontainer %}
