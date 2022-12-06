---
title: Como configurar o projeto C# (.NET) para os GitHub Codespaces
shortTitle: Setting up your C# (.NET) project
allowTitleToDifferFromFilename: true
intro: 'Comece o projeto C# (.NET) nos {% data variables.product.prodname_github_codespaces %} criando um contêiner de desenvolvimento personalizado.'
redirect_from:
  - /codespaces/getting-started-with-codespaces/getting-started-with-your-dotnet-project
versions:
  fpt: '*'
  ghec: '*'
topics:
  - Codespaces
hasExperimentalAlternative: true
hidden: true
ms.openlocfilehash: 10282aedf3bdb239fa238e546c2fc6280787a6a0
ms.sourcegitcommit: e8c012864f13f9146e53fcb0699e2928c949ffa8
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 11/09/2022
ms.locfileid: '148158610'
---
## Introdução

Este guia mostra como configurar o projeto C# (.NET) {% data reusables.codespaces.setting-up-project-intro %}

### Pré-requisitos

- Você deve ter um projeto C# (.NET) existente em um repositório em {% data variables.product.prodname_dotcom_the_website %}. Caso você não tenha um projeto, experimente este tutorial com o seguinte exemplo: https://github.com/2percentsilk/dotnet-quickstart.
- O {% data variables.product.prodname_github_codespaces %} precisa estar habilitado para a organização.

## Etapa 1: Abra o seu projeto em um codespace

1. No nome do repositório, use o menu suspenso **{% octicon "code" aria-label="The code icon" %} Código** e, na guia **Codespaces**, clique no ícone de adição ({% octicon "plus" aria-label="The plus icon" %}).

  ![Botão de codespace novo](/assets/images/help/codespaces/new-codespace-button.png)

Ao criar um código, seu projeto será criado em uma VM remota dedicada a você. Por padrão, o contêiner para o seu codespace têm várias linguagens e tempos de execução, incluindo .NET. Ele também inclui um conjunto comum de ferramentas, como git, wget, rsync, openssh e nano.

{% data reusables.codespaces.customize-vcpus-and-ram %} principal

## Etapa 2: adicionar uma configuração de contêiner de desenvolvimento ao repositório de um modelo

O contêiner de desenvolvimento padrão, ou "contêiner de desenvolvimento", para {% data variables.product.prodname_github_codespaces %} vem com a versão mais recente do .NET e ferramentas comuns pré-instaladas. No entanto, recomendamos que você configure seu próprio contêiner de desenvolvimento para incluir todas as ferramentas e scripts necessários para o projeto. Isso garantirá um ambiente reprodutível para todos os usuários de {% data variables.product.prodname_github_codespaces %} do seu repositório.

{% data reusables.codespaces.setup-custom-devcontainer %}

{% data reusables.codespaces.command-palette-container %}
1. Para este exemplo, clique em **C# (.NET)** . Se você precisar de funcionalidades adicionais, você poderá selecionar qualquer contêiner específico para o C# (.NET) ou uma combinação de ferramentas como C# (.NET) e MS SQL.
  ![Seleção da opção C# (.NET) na lista](/assets/images/help/codespaces/add-dotnet-prebuilt-container.png)
1. Clique na versão recomendada do .NET.
  ![Seleção da versão do .NET](/assets/images/help/codespaces/add-dotnet-version.png)
1. Aceite a opção padrão para adicionar Node.js à sua personalização.
  ![Adicionar a seleção do Node.js](/assets/images/help/codespaces/dotnet-options.png) {% data reusables.codespaces.rebuild-command %}

### Anatomia do seu contêiner de desenvolvimento

A adição do modelo de contêiner de desenvolvimento C# (.NET) adiciona uma pasta `.devcontainer` à raiz do repositório do projeto com os seguintes arquivos:

- `devcontainer.json`
- Dockerfile

O arquivo `devcontainer.json` recém-adicionado define algumas propriedades descritas após o exemplo.

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
    //        "ASPNETCORE_Kestrel__Certificates__Default__Password": "SecurePwdGoesHere",
    //        "ASPNETCORE_Kestrel__Certificates__Default__Path": "/home/vscode/.aspnet/https/aspnetapp.pfx",
    //    },
    //
    // 3. Start the container.
    //
    // 4. Drag ~/.aspnet/https/aspnetapp.pfx into the root of the file explorer.
    //
    // 5. Open a terminal in VS Code and run "mkdir -p /home/vscode/.aspnet/https && mv aspnetapp.pfx /home/vscode/.aspnet/https".
    //

    // Use 'postCreateCommand' to run commands after the container is created.
    // "postCreateCommand": "dotnet restore",

    // Comment out connect as root instead. More info: https://aka.ms/vscode-remote/containers/non-root.
    "remoteUser": "vscode"
}
```

- **nome** – Dê qualquer nome ao contêiner de desenvolvimento, esse é apenas o padrão.
- **build** – As propriedades de build.
  - **dockerfile** – No objeto de `build`, `dockerfile` contém o caminho para o Dockerfile que também foi adicionado do modelo.
  - **args**
    - **variante**: esse arquivo contém um só argumento de build, que é a versão do .NET Core que desejamos usar.
- **configurações** – São configurações do {% data variables.product.prodname_vscode %}.
  - **terminal.integrated.shell.linux** – Embora o Bash seja o padrão aqui, você pode usar outros shells de terminal modificando isso.
- **extensões** – São extensões incluídas por padrão.
  - **ms-dotnettools.csharp** – A extensão do Microsoft C# fornece suporte avançado para desenvolvimento em C#, incluindo recursos como IntelliSense, lint, depuração, navegação pelo código, formatação de código, refatoração, gerenciador de variáveis, gerenciador de testes, entre outros.
- **forwardPorts** – Todas as portas listadas aqui serão encaminhadas automaticamente. Para obter mais informações, confira "[Como encaminhar portas no seu codespace](/codespaces/developing-in-codespaces/forwarding-ports-in-your-codespace)".
- **postCreateCommand** – Use isso para executar comandos que não são definidos no Dockerfile, depois que o codespace for criado.
- **remoteUser** – Por padrão, você executa o código como o usuário vscode, mas, opcionalmente, pode definir isso como raiz.

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

Você pode usar o arquivo Docker para adicionar camadas adicionais de contêiner para especificar os pacotes do OS, versões de nó ou pacotes globais que queremos que sejam incluídos no nosso contêiner.

## Etapa 3: Modifique seu arquivo devcontainer.json

Com as configurações do seu contêiner de desenvolvimento adicionadas e um entendimento básico do que tudo faz, agora você pode personalizar para configurar ainda mais o seu ambiente. Neste exemplo, você irá adicionar propriedades para instalar extensões e dependências do seu projeto quando seu codespace for iniciado.

1. No Explorer, selecione o arquivo `devcontainer.json` na árvore para abri-lo. Talvez seja necessário expandir a pasta `.devcontainer` para vê-la.

   ![Arquivo devcontainer.json no Explorador](/assets/images/help/codespaces/devcontainers-options.png)

2. Atualize a lista `extensions` no arquivo `devcontainer.json` para adicionar algumas extensões que são úteis ao trabalhar com seu projeto.

   ```json{:copy}
   "extensions": [
          "ms-dotnettools.csharp",
          "streetsidesoftware.code-spell-checker",
      ],
   ```

3. Remova a marca de comentário de `postCreateCommand` para restaurar as dependências como parte do processo de instalação do codespace.

   ```json{:copy}
   // Use 'postCreateCommand' to run commands after the container is created.
   "postCreateCommand": "dotnet restore",
   ```

   {% data reusables.codespaces.more-info-devcontainer %}

{% data reusables.codespaces.rebuild-command %}

   {% data reusables.codespaces.rebuild-reason %}

5. Verifique se suas alterações foram aplicadas com sucesso verificando se a extensão "Code Spell Checker" foi instalada.

    ![Lista de extensões](/assets/images/help/codespaces/dotnet-extensions.png)

## Etapa 4: Execute seu aplicativo.

Na seção anterior, você usou o `postCreateCommand` para instalar um conjunto de pacotes por meio do comando `dotnet restore`. Com nossas dependências agora instaladas, podemos executar nosso aplicativo.

1. Execute seu aplicativo pressionando `F5` ou inserindo `dotnet watch run` no terminal.

2. Quando o projeto for iniciado, você verá uma mensagem de notificação do sistema no canto inferior direito de {% data variables.product.prodname_vscode_shortname %}, contendo um prompt para se conectar à porta que o projeto usa.

   ![Notificação do sistema de encaminhamento de porta](/assets/images/help/codespaces/python-port-forwarding.png)

## Etapa 5: Faça commit das suas alterações

{% data reusables.codespaces.committing-link-to-procedure %}

## Próximas etapas

Agora está tudo pronto para você começar a desenvolver o projeto C# (.NET) nos {% data variables.product.prodname_github_codespaces %}. Aqui estão alguns recursos adicionais para cenários mais avançados.

{% data reusables.codespaces.next-steps-adding-devcontainer %}
