---
title: Como configurar o projeto Node.js para os GitHub Codespaces
allowTitleToDifferFromFilename: true
shortTitle: Setting up your Node.js project
intro: 'Comece a executar um projeto JavaScript, Node.js ou TypeScript nos {% data variables.product.prodname_github_codespaces %} criando um contêiner de desenvolvimento personalizado.'
versions:
  fpt: '*'
  ghec: '*'
redirect_from:
  - /codespaces/getting-started-with-codespaces/getting-started-with-your-nodejs-project-in-codespaces
type: tutorial
topics:
  - Codespaces
  - Developer
  - Node
  - JavaScript
hasExperimentalAlternative: true
hidden: true
ms.openlocfilehash: 19c29f7d3c8110d1c671a9af46227a399a467800
ms.sourcegitcommit: e8c012864f13f9146e53fcb0699e2928c949ffa8
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 11/09/2022
ms.locfileid: '148159310'
---
## Introdução

Este guia mostra como configurar o projeto JavaScript, Node.js ou TypeScript no {% data reusables.codespaces.setting-up-project-intro %}

### Pré-requisitos

- Você deve ter um projeto existente de JavaScript, Node.js ou TypeScript em um repositório em {% data variables.product.prodname_dotcom_the_website %}. Caso você não tenha um projeto, experimente este tutorial com o seguinte exemplo: https://github.com/microsoft/vscode-remote-try-node
- O {% data variables.product.prodname_github_codespaces %} precisa estar habilitado para a organização.

## Etapa 1: Abra o seu projeto em um codespace

1. No nome do repositório, use o menu suspenso **{% octicon "code" aria-label="The code icon" %} Código** e, na guia **Codespaces**, clique no ícone de adição ({% octicon "plus" aria-label="The plus icon" %}).

   ![Botão de codespace novo](/assets/images/help/codespaces/new-codespace-button.png)

Ao criar um código, seu projeto será criado em uma VM remota dedicada a você. Por padrão, o contêiner para o seu código possui muitas linguagens e tempos de execução, incluindo Node.js, JavaScript, Typescript, nvm, npm e yarn. Ele também inclui um conjunto comum de ferramentas, como git, wget, rsync, openssh e nano.

{% data reusables.codespaces.customize-vcpus-and-ram %} principal

## Etapa 2: Adicionar uma configuração de contêiner de desenvolvimento ao repositório com base em um modelo

O contêiner de desenvolvimento padrão, ou "contêiner de desenvolvimento", do {% data variables.product.prodname_github_codespaces %} dará suporte à execução de projetos do Node.js, como [vscode-remote-try-node](https://github.com/microsoft/vscode-remote-try-node) pronto para usar. No entanto, recomendamos que você configure seu próprio contêiner de desenvolvimento, pois isso permite que você defina as ferramentas e scripts específicos que o seu projeto necessita. Isso garantirá um ambiente reprodutível para todos os usuários de {% data variables.product.prodname_github_codespaces %} do seu repositório.

{% data reusables.codespaces.setup-custom-devcontainer %}

{% data reusables.codespaces.command-palette-container %}
1. Para este exemplo, clique em **Node.js**.  Se você precisar de funcionalidades adicionais, você poderá selecionar qualquer contêiner específico para o Node ou uma combinação de ferramentas como Node e MongoDB.

   ![Selecione a opção Node na lista](/assets/images/help/codespaces/add-node-prebuilt-container.png)

1. Clique na versão recomendada do Node.js.

   ![Seleção de versão do Node.js](/assets/images/help/codespaces/add-node-version.png)

{% data reusables.codespaces.rebuild-command %}

### Anatomia do seu contêiner de desenvolvimento

A adição do modelo de contêiner de desenvolvimento do Node.js adiciona um diretório `.devcontainer` à raiz do repositório do projeto com os seguintes arquivos:

- `devcontainer.json`
- Dockerfile

O arquivo `devcontainer.json` recém-adicionado define algumas propriedades descritas após o exemplo.

#### devcontainer.json

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

    // Comment out connect as root instead. More info: https://aka.ms/vscode-remote/containers/non-root.
    "remoteUser": "node"
}
```

- **name** – Dê qualquer nome ao contêiner de desenvolvimento, esse é apenas o padrão.
- **build** – As propriedades de build.
  - **dockerfile** – No objeto de `build`, `dockerfile` contém o caminho para o Dockerfile que também foi adicionado do modelo.
  - **args**
    - **variant**: esse arquivo só contém um argumento de build, que é a variante do nó que desejamos usar e é transmitida para o Dockerfile.
- **settings** – São configurações do {% data variables.product.prodname_vscode %} que podem ser definidas.
  - **terminal.integrated.shell.linux** – Embora o Bash seja o padrão aqui, você pode usar outros shells de terminal modificando isso.
- **extensions** – São extensões incluídas por padrão.
  - **dbaeumer.vscode-eslint** – O lint do ES é uma ótima extensão para lint, mas para o JavaScript, há várias extensões excelentes do Marketplace que você também pode incluir.
- **forwardPorts** – Todas as portas listadas aqui serão encaminhadas automaticamente. Para obter mais informações, confira "[Como encaminhar portas no seu codespace](/codespaces/developing-in-codespaces/forwarding-ports-in-your-codespace)".
- **postCreateCommand** – Use isso para executar comandos que não são definidos no Dockerfile, depois que o codespace for criado.
- **remoteUser** – Por padrão, você executa o código como o usuário vscode, mas, opcionalmente, pode definir isso como raiz.

#### Dockerfile

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

Você pode usar o arquivo Docker para adicionar camadas adicionais de contêiner para especificar os pacotes do OS, versões de nó ou pacotes globais que queremos que sejam incluídos no nosso contêiner.

## Etapa 3: Modifique seu arquivo devcontainer.json

Com a configuração do contêiner de desenvolvimento adicionada e uma compreensão básica do que tudo faz, agora você pode fazer alterações para personalizar ainda mais seu ambiente. Neste exemplo, você irá adicionar propriedades para instalar o npm quando seu codespace for lançado e para fazer uma lista de portas dentro do contêiner disponível localmente.

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

1. Execute o comando inicial no terminal com `npm start`.

   ![início do npm no terminal](/assets/images/help/codespaces/codespaces-npmstart.png)

2. Quando o projeto for iniciado, você verá uma mensagem de notificação do sistema no canto inferior direito de {% data variables.product.prodname_vscode_shortname %}, contendo um prompt para se conectar à porta que o projeto usa.

   ![Notificação do sistema de encaminhamento de porta](/assets/images/help/codespaces/codespaces-port-toast.png)

## Etapa 5: Faça commit das suas alterações

{% data reusables.codespaces.committing-link-to-procedure %}

## Próximas etapas

Agora está tudo pronto para você começar a desenvolver o projeto JavaScript nos {% data variables.product.prodname_github_codespaces %}. Aqui estão alguns recursos adicionais para cenários mais avançados.

{% data reusables.codespaces.next-steps-adding-devcontainer %}
