---
title: Configurando seu projeto C# (.NET) para os codespaces
shortTitle: Configurando seu projeto C# (.NET)
allowTitleToDifferFromFilename: true
product: '{% data reusables.gated-features.codespaces %}'
intro: 'Primeiros passos com o seu projeto C# (.NET) em {% data variables.product.prodname_codespaces %} criando um contêiner de desenvolvimento personalizado.'
redirect_from:
  - /codespaces/getting-started-with-codespaces/getting-started-with-your-dotnet-project
versions:
  fpt: '*'
  ghec: '*'
topics:
  - Codespaces
hasExperimentalAlternative: true
hidden: true
---

## Introdução

Este guia mostra como configurar seu projeto C# (.NET) em {% data variables.product.prodname_codespaces %}. Ele irá apresentar a você um exemplo de abertura de seu projeto em um codespace e adicionar e modificar uma configuração de contêiner de desenvolvimento a partir de um modelo.

### Pré-requisitos

- Você deve ter um projeto C# (.NET) existente em um repositório em {% data variables.product.prodname_dotcom_the_website %}. Se você não tiver um projeto, você poderá tentar este tutorial com o seguinte exemplo: https://github.com/2percentsilk/dotnet-quickstart.
- Você precisa ter {% data variables.product.prodname_codespaces %} habilitado para a sua organização.

## Etapa 1: Abra o seu projeto em um codespace

1. No nome do repositório, use o menu suspenso **Código de {% octicon "code" aria-label="The code icon" %}** e na guia **Codespaces**, clique em **Criar codespace no principal**.

  ![Botão de codespace novo](/assets/images/help/codespaces/new-codespace-button.png)

  Se você não vir esta opção, significa que {% data variables.product.prodname_codespaces %} não está disponível para o seu projeto. Consulte [Acesso a {% data variables.product.prodname_codespaces %}](/codespaces/developing-in-codespaces/creating-a-codespace#access-to-codespaces) para mais informações.

Ao criar um código, seu projeto será criado em uma VM remota dedicada a você. Por padrão, o contêiner para o seu codespace têm várias linguagens e tempos de execução, incluindo .NET. Ele também inclui um conjunto comum de ferramentas, como git, wget, rsync, openssh e nano.

{% data reusables.codespaces.customize-vcpus-and-ram %}

## Etapa 2: Adicionar uma configuração de contêiner de desenvolvimento ao repositório a partir de um modelo

O contêiner de desenvolvimento padrão, ou "contêiner de dev", para {% data variables.product.prodname_github_codespaces %} vem com a versão mais recente do .NET e ferramentas comuns pré-instaladas. No entanto, recomendamos que você configure seu próprio contêiner de desenvolvimento para incluir todas as ferramentas e scripts de que seu projeto precisa. Isso garantirá um ambiente reprodutível para todos os usuários de {% data variables.product.prodname_github_codespaces %} do seu repositório.

{% data reusables.codespaces.setup-custom-devcontainer %}

{% data reusables.codespaces.command-palette-container %}
1. Para este exemplo, clique em **C# (.NET)**. Se você precisar de funcionalidades adicionais, você poderá selecionar qualquer contêiner específico para o C# (.NET) ou uma combinação de ferramentas como C# (.NET) e MS SQL. ![Selecione a opção C# (.NET) na lista](/assets/images/help/codespaces/add-dotnet-prebuilt-container.png)
1. Clique na versão recomendada do .NET. ![Seleção da versão .NET](/assets/images/help/codespaces/add-dotnet-version.png)
1. Aceite a opção padrão para adicionar Node.js à sua personalização. ![Adicionar seleção de Node.js](/assets/images/help/codespaces/dotnet-options.png)
{% data reusables.codespaces.rebuild-command %}

### Anatomia do seu contêiner de desenvolvimento

A adição do modelo de contêiner de C# (.NET) adiciona uma pasta de contêiner de desenvolvimento `.devcontainer` à raiz do repositório do seu projeto com os seguintes arquivos:

- `devcontainer.json`
- arquivo Docker

O arquivo recém-adicionado `devcontainer.json` define algumas propriedades que são descritas após a amostra.

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
    // 3. Do one of the following depending on your scenario:
    //    * When using GitHub Codespaces and/or Remote - Containers:
    //      1. Start the container
    //      2. Drag ~/.aspnet/https/aspnetapp.pfx into the root of the file explorer
    //      3. Open a terminal in VS Code and run "mkdir -p /home/vscode/.aspnet/https && mv aspnetapp.pfx /home/vscode/.aspnet/https"
    //
    //    * If only using Remote - Containers with a local container, uncomment this line instead:
    //      "mounts": [ "source=${env:HOME}${env:USERPROFILE}/.aspnet/https,target=/home/vscode/.aspnet/https,type=bind" ],

    // Use 'postCreateCommand' to run commands after the container is created.
    // "postCreateCommand": "dotnet restore",

    // Comment out connect as root instead. Mais informações: https://aka.ms/vscode-remote/containers/non-root.
    "remoteUser": "vscode"
}
```

- **nome** - Você pode dar qualquer nome ao nosso contêiner de desenvolvimento. Este é apenas o padrão.
- **build** - As propriedades de compilação.
  - **Arquivo Docker** - No objeto `construir`, `Arquivo Docker` contém o caminho para o arquivo Dockerfile que também foi adicionado a partir do modelo.
  - **args**
    - **variante**: Este arquivo contém apenas um argumento de compilação, que é a versão do .NET Core que queremos usar.
- **configurações** - Estas são as configurações de {% data variables.product.prodname_vscode %}.
  - **terminal.integrated.shell.linux** - Embora o bash seja o padrão, você pode usar outros shells do terminal, fazendo a modificação.
- **extensões** - Estas são extensões incluídas por padrão.
  - **ms-dotnettools.csharp** - A extensão Microsoft C# fornece amplo suporte para o desenvolvimento em C#, incluindo funcionalidades como IntelliSense, links, depuração, navegação de código, formatação de código, refatoração, explorador de variáveis, explorador de testes e muito mais.
- **forwardPorts** - Todas as portas listadas aqui serão encaminhadas automaticamente. Para obter mais informações, consulte "[Encaminhando portas no seu codespace](/codespaces/developing-in-codespaces/forwarding-ports-in-your-codespace)".
- **postCreateCommand** - Use isto para executar comandos que não estão definidos no arquivo Docker depois que seu codespace for criado.
- **remoteUser** - Por padrão, você está executando como usuário do vscode, mas, opcionalmente, você pode definir isso como root.

#### arquivo Docker

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

Com a configuração do contêiner de desenvolvimento adicionada e um entendimento básico do que tudo faz, agora você pode fazer alterações para personalizar ainda mais seu ambiente. Neste exemplo, você irá adicionar propriedades para instalar extensões e dependências do seu projeto quando seu codespace for iniciado.

1. No Explorer, selecione o arquivo `devcontainer.json` a partir da árvore para abri-lo. Você pode ter que expandir a pasta `.devcontainer` para vê-la.

   ![Arquivo devcontainer.json no Explorador](/assets/images/help/codespaces/devcontainers-options.png)

2. Atualize a sua lista de `extensões` no seu arquivo `devcontainer.json` para adicionar algumas extensões úteis ao trabalhar com o seu projeto.

   ```json{:copy}
   "extensions": [
          "ms-dotnettools.csharp",
          "streetsidesoftware.code-spell-checker",
      ],
   ```

3. Remova o comentário o `postCreateCommand` para restaurar as dependências como parte do processo de configuração do codespace.

   ```json{:copy}
   // Use 'postCreateCommand' para executar os comandos após a criação do contêiner.
   "postCreateCommand": "dotnet restore",
   ```

   {% data reusables.codespaces.more-info-devcontainer %}

{% data reusables.codespaces.rebuild-command %}

   {% data reusables.codespaces.rebuild-reason %}

5. Verifique se suas alterações foram aplicadas com sucesso verificando se a extensão "Code Spell Checker" foi instalada.

    ![Lista de extensões](/assets/images/help/codespaces/dotnet-extensions.png)

## Etapa 4: Execute o seu aplicativo

Na seção anterior, você usou o `postCreateCommand` para instalar um conjunto de pacotes por meio do comando `dotnet restore`. Com nossas dependências agora instaladas, podemos executar nosso aplicativo.

1. Execute seu aplicativo pressionando `F5` ou inserindo `dotnet watch run` no seu terminal.

2. Quando o seu projeto for iniciado, você deverá ver um alerta no canto inferior direito com uma instrução para conectar-se à porta que seu projeto usa.

   ![Notificação de encaminhamento de porta](/assets/images/help/codespaces/python-port-forwarding.png)

## Etapa 5: Faça commit das suas alterações

{% data reusables.codespaces.committing-link-to-procedure %}

## Próximas etapas

Agora você deve estar pronto para começar a desenvolver seu projeto C# (.NET) em {% data variables.product.prodname_codespaces %}. Aqui estão alguns recursos adicionais para cenários mais avançados.

{% data reusables.codespaces.next-steps-adding-devcontainer %}
