---
title: Configurando seu projeto Node.js para Codespaces
shortTitle: Configurando seu projeto Node.js
intro: 'Comece com seu projeto JavaScript, Node.js ou TypeScript em {% data variables.product.prodname_codespaces %} criando um contêiner de desenvolvimento personalizado.'
product: '{% data reusables.gated-features.codespaces %}'
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
---



## Introdução

Este guia mostra como configurar seu projeto JavaScript, Node.js ou TypeScript em {% data variables.product.prodname_codespaces %}. Ele irá apresentar a você um exemplo de abertura de seu projeto em um codespace e adicionar e modificar uma configuração de contêiner de desenvolvimento a partir de um modelo.

### Pré-requisitos

- Você deve ter um projeto existente de JavaScript, Node.js ou TypeScript em um repositório em {% data variables.product.prodname_dotcom_the_website %}. Se você não tiver um projeto, você poderá tentar este tutorial com o seguinte exemplo: https://github.com/microsoft/vscode-remote-try-node
- Você precisa ter {% data variables.product.prodname_codespaces %} habilitado para a sua organização.

## Etapa 1: Abra o seu projeto em um codespace

1. No nome do repositório, use o menu suspenso **Código de {% octicon "code" aria-label="The code icon" %}** e na guia **Codespaces**, clique em **Criar codespace no principal**.

   ![Botão de codespace novo](/assets/images/help/codespaces/new-codespace-button.png)

   Se você não vir esta opção, significa que {% data variables.product.prodname_codespaces %} não está disponível para o seu projeto. Consulte [Acesso a {% data variables.product.prodname_codespaces %}](/codespaces/developing-in-codespaces/creating-a-codespace#access-to-codespaces) para mais informações.


Ao criar um código, seu projeto será criado em uma VM remota dedicada a você. Por padrão, o contêiner para o seu código possui muitas linguagens e tempos de execução, incluindo Node.js, JavaScript, Typescript, nvm, npm e yarn. Ele também inclui um conjunto comum de ferramentas, como git, wget, rsync, openssh e nano.

{% data reusables.codespaces.customize-vcpus-and-ram %}

## Etapa 2: Adicionar uma configuração de contêiner de desenvolvimento ao repositório a partir de um modelo

O contêiner de desenvolvimento padrão, ou "dev container", para {% data variables.product.prodname_github_codespaces %} é compatível com a execução de projetos do Node.js como [vscode-remote-try-node](https://github.com/microsoft/vscode-remote-try-node) de forma inovadora. No entanto, recomendamos que você configure seu próprio contêiner de desenvolvimento, pois isso permite que você defina todas as ferramentas e scripts específicos de que seu projeto precisa. Isso irá garantir um ambiente reproduzível para todos os usuários do codespace do GitHub no seu repositório.

{% data reusables.codespaces.setup-custom-devcontainer %}

{% data reusables.codespaces.command-palette-container %}
1. Para este exemplo, clique em **Node.js**.  Se você precisar de funcionalidades adicionais, você poderá selecionar qualquer contêiner específico para o Node ou uma combinação de ferramentas como Node e MongoDB.

   ![Selecione a opção Node na lista](/assets/images/help/codespaces/add-node-prebuilt-container.png)

1. Clique na versão recomendada do Node.js.

   ![Seleção de versão do Node.js](/assets/images/help/codespaces/add-node-version.png)

{% data reusables.codespaces.rebuild-command %}

### Anatomia do seu contêiner de desenvolvimento

A adição do modelo de contêiner de desenvolvimento do Node.js adiciona um diretório `.devcontainer` à raiz do repositório do seu projeto com os seguintes arquivos:

- `devcontainer.json`
- arquivo Docker

O arquivo recém-adicionado `devcontainer.json` define algumas propriedades que são descritas após a amostra.

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

    // Comment out connect as root instead. Mais informações: https://aka.ms/vscode-remote/containers/non-root.
    "remoteUser": "node"
}
```

- **nome** - Você pode dar qualquer nome ao seu contêiner de desenvolvimento. Este é apenas o padrão.
- **build** - As propriedades de compilação.
  - **Arquivo Docker** - No objeto `construir`, `Arquivo Docker` contém o caminho para o arquivo Dockerfile que também foi adicionado a partir do modelo.
  - **args**
    - **variante**: Este arquivo contém apenas um argumento de compilação, que é a variante de nó que queremos usar e que é passada para o arquivo Docker.
- **configurações** - Estas são configurações de {% data variables.product.prodname_vscode %} que você pode definir.
  - **terminal.integrated.shell.linux** - Embora o bash seja o padrão, você pode usar outros shells do terminal, fazendo a modificação.
- **extensões** - Estas são extensões incluídas por padrão.
  - <**dbaeumer.vscode-eslint** - ES lint é uma ótima extensão para linting, mas para o JavaScript, há uma série de ótimas extensões do Marketplace que você também pode incluir.
- **forwardPorts** - Todas as portas listadas aqui serão encaminhadas automaticamente. Para obter mais informações, consulte "[Encaminhando portas no seu codespace](/codespaces/developing-in-codespaces/forwarding-ports-in-your-codespace)".
- **postCreateCommand** - Use isto para executar comandos que não estão definidos no arquivo Docker depois que seu codespace for criado.
- **remoteUser** - Por padrão, você está executando como usuário do vscode, mas, opcionalmente, você pode definir isso como root.

#### arquivo Docker

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

Com a configuração do contêiner de desenvolvimento adicionada e um entendimento básico do que tudo faz, agora você pode fazer alterações para personalizar ainda mais seu ambiente. Neste exemplo, você irá adicionar propriedades para instalar o npm quando seu codespace for lançado e para fazer uma lista de portas dentro do contêiner disponível localmente.

1. No Explorer, selecione o arquivo `devcontainer.json` a partir da árvore para abri-lo. Você pode ter que expandir a pasta `.devcontainer` para vê-la.

   ![Arquivo devcontainer.json no Explorador](/assets/images/help/codespaces/devcontainers-options.png)

2. Adicione as seguintes linhas ao seu arquivo `devcontainer.json` após as `extensões`:

   ```json{:copy}
   "postCreateCommand": "npm install",
   "forwardPorts": [4000],
   ```

   {% data reusables.codespaces.more-info-devcontainer %}

{% data reusables.codespaces.rebuild-command %}

   {% data reusables.codespaces.rebuild-reason %}

## Etapa 4: Execute o seu aplicativo

Na seção anterior, você usou o `postCreateCommand` para instalar um conjunto de pacotes via npm. Agora você pode usar isso para executar nosso aplicativo com npm.

1. Execute seu comando inicial no terminal com`npm start`.

   ![início do npm no terminal](/assets/images/help/codespaces/codespaces-npmstart.png)

2. Quando o seu projeto for iniciado, você deverá ver um alerta no canto inferior direito com uma instrução para conectar-se à porta que seu projeto usa.

   ![Notificação de encaminhamento de porta](/assets/images/help/codespaces/codespaces-port-toast.png)

## Etapa 5: Faça commit das suas alterações

{% data reusables.codespaces.committing-link-to-procedure %}

## Próximas etapas

Agora você deve estar pronto para começar a desenvolver seu projeto JavaScript em {% data variables.product.prodname_codespaces %}. Aqui estão alguns recursos adicionais para cenários mais avançados.

{% data reusables.codespaces.next-steps-adding-devcontainer %}
