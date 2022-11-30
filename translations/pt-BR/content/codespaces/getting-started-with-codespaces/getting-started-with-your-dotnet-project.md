---
title: Primeiros passos com o seu projeto C# (.NET) em codespaces
shortTitle: Primeiros passos com o seu projeto C# (.NET)
allowTitleToDifferFromFilename: true
intro: 'Primeiros passos com o seu projeto C# (.NET) em {% data variables.product.prodname_codespaces %} criando um contêiner de desenvolvimento personalizado.'
versions:
  free-pro-team: '*'
topics:
  - Codespaces
---

{% data reusables.codespaces.release-stage %}

### Introdução

Este guia mostra como configurar seu projeto C# (.NET) em {% data variables.product.prodname_codespaces %}. Ele irá apresentar a você um exemplo de abertura de seu projeto em um codespace e adicionar e modificar uma configuração de contêiner de desenvolvimento a partir de um modelo.

#### Pré-requisitos

- Você deve ter um projeto C# (.NET) existente em um repositório em {% data variables.product.prodname_dotcom_the_website %}. Se você não tiver um projeto, você poderá tentar este tutorial com o seguinte exemplo: https://github.com/2percentsilk/dotnet-quickstart.
- You must have {% data variables.product.prodname_codespaces %} enabled for your organization.

### Step 1: Open your project in a codespace

1. Navigate to your project's repository. Use the {% octicon "download" aria-label="The download icon" %} **Code** drop-down menu, and select **Open with Codespaces**. If you don’t see this option, your project isn’t available for {% data variables.product.prodname_codespaces %}.

  ![Botão de abrir com codespaces](/assets/images/help/codespaces/open-with-codespaces-button.png)

2. To create a new codespace, click {% octicon "plus" aria-label="The plus icon" %} **New codespace**. ![Botão de codespace novo](/assets/images/help/codespaces/new-codespace-button.png)

Ao criar um código, seu projeto será criado em uma VM remota dedicada a você. Por padrão, o contêiner para o seu codespace têm várias linguagens e tempos de execução, incluindo .NET. Ele também inclui um conjunto comum de ferramentas, como git, wget, rsync, openssh e nano.

Você pode personalizar o seu codespace ajustando a quantidade de vCPUs e RAM, [adicionando dotfiles para personalizar seu ambiente](/codespaces/setting-up-your-codespace/personalizing-codespaces-for-your-account)ou modificando as ferramentas e scripts instalados.

{% data variables.product.prodname_codespaces %} usa um arquivo denominado `devcontainer.json` para armazenar configurações. Ao iniciar, {% data variables.product.prodname_codespaces %} usa o arquivo para instalar quaisquer ferramentas, dependências ou outro conjunto que possa ser necessário para o projeto. Para obter mais informações, consulte "[Configurar codespaces para o seu projeto](/codespaces/setting-up-your-codespace/configuring-codespaces-for-your-project)".


### Step 2: Add a dev container to your codespace from a template

O contêiner de codespaces padrão vem com a versão mais recente do .NET e as ferramentas mais comuns pré-instaladas. No entanto, recomendamos que você configure um contêiner personalizado para que possa personalizar as ferramentas e scripts que são executados como parte da criação do codespace para as necessidades do seu projeto e garantir um ambiente reprodutível para todos os usuários de {% data variables.product.prodname_codespaces %} no seu repositório.

Para configurar seu projeto com um contêiner personalizado, você deverá usar um arquivo `devcontainer.json` para definir o ambiente. Em {% data variables.product.prodname_codespaces %}, você pode adicionar isto a partir de um modelo ou você pode criar o seu próprio. Para obter mais informações sobre contêineres de desenvolvimento, consulte "[Configurar codespaces para o seu projeto ](/codespaces/setting-up-your-codespace/configuring-codespaces-for-your-project)".


1. Access the command palette (`shift command P` / `shift control P`), then start typing "dev container". Click **Codespaces: Add Development Container Configuration Files...** !["Codespaces: Add Development Container Configuration Files..." in the command palette](/assets/images/help/codespaces/add-prebuilt-container-command.png)
2. Para este exemplo, clique em **C# (.NET)**. Se você precisar de funcionalidades adicionais, você poderá selecionar qualquer contêiner específico para o C# (.NET) ou uma combinação de ferramentas como C# (.NET) e MS SQL. ![Selecione a opção C# (.NET) na lista](/assets/images/help/codespaces/add-dotnet-prebuilt-container.png)
3. Clique na versão recomendada do .NET. ![Seleção da versão .NET](/assets/images/help/codespaces/add-dotnet-version.png)
4. Aceite a opção padrão para adicionar Node.js à sua personalização. ![Adicionar seleção de Node.js](/assets/images/help/codespaces/dotnet-options.png)
5. To rebuild your container, access the command palette (`shift command P` / `shift control P`), then start typing "rebuild". Click **Codespaces: Rebuild Container**. ![Rebuild container option](/assets/images/help/codespaces/codespaces-rebuild.png)

#### Anatomy of your dev container

A adição do modelo de contêiner de C# (.NET) adiciona uma pasta de contêiner de desenvolvimento `.devcontainer` à raiz do repositório do seu projeto com os seguintes arquivos:

- `devcontainer.json`
- arquivo Docker

O arquivo recém-adicionado `devcontainer.json` define algumas propriedades que são descritas após a amostra.

##### devcontainer.json

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

- **Nome** - Você pode dar qualquer nome ao nosso contêiner de desenvolvimento. Este é apenas o padrão.
- **Build** - As propriedades de compilação.
  - **Arquivo Docker** - No objeto de compilação, `arquivo Docker` é uma referência ao arquivo arquivo Docker que também foi adicionado a partir do template.
  - **Args**
    - **Variante**: Este arquivo contém apenas um argumento de compilação, que é a versão do .NET Core que queremos usar.
- **Configurações** - Estas são as configurações de {% data variables.product.prodname_vscode %}.
  - **Terminal.integrated.shell.linux** - Embora o bash seja o padrão, você pode usar outros shells do terminal, fazendo a modificação.
- **Extensions** - These are extensions included by default.
  - **ms-dotnettools.csharp** - A extensão Microsoft C# fornece amplo suporte para o desenvolvimento em C#, incluindo funcionalidades como IntelliSense, links, depuração, navegação de código, formatação de código, refatoração, explorador de variáveis, explorador de testes e muito mais.
- **forwardPorts** - Todas as portas listadas aqui serão encaminhadas automaticamente.
- **postCreateCommand** - Se você quiser executar qualquer coisa depois de parar no seu codespace, isso não estará definido no arquivo Docker como a `Dotnet restore`. Você pode fazer isso aqui.
- **remoteUser** - By default, you’re running as the vscode user, but you can optionally set this to root.

##### arquivo Docker

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

### Etapa 3: Modifique seu arquivo devcontainer.json

Com o seu contêiner de desenvolvimento adicionado e um entendimento básico do que tudo faz, agora você pode fazer alterações para configurá-lo para o seu ambiente. Neste exemplo, você irá adicionar propriedades para instalar extensões e restaurar as dependências do seu projeto quando o seu codespace for iniciado.

1. No Explorador, expanda a pasta `.devcontainer` e selecione o arquivo `devcontainer.json` a partir da árvore para abri-lo.

  !["Codespaces: Rebuild Container" in the command palette](/assets/images/help/codespaces/devcontainers-options.png)

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

4. Para reconstruir seu contêiner e aplicar as alterações do devcontainer.json, acesse a paleta de comandos (`shift comando P` / `shift control P`). Em seguida, comece a digitar "recriar". Click **Codespaces: Rebuild Container**.

  ![Rebuild container option](/assets/images/help/codespaces/codespaces-rebuild.png)

  Rebuilding inside your codespace ensures your changes work as expected before you commit the changes to the repository. If something does result in a failure, you’ll be placed in a codespace with a recovery container that you can rebuild from to keep adjusting your container.

5. Verifique se suas alterações foram aplicadas com sucesso verificando se a extensão "Code Spell Checker" foi instalada.

    ![Lista de extensões](/assets/images/help/codespaces/dotnet-extensions.png)

### Step 4: Run your application

Na seção anterior, você usou o `postCreateCommand` para instalar um conjunto de pacotes via pip3. Com nossas dependências agora instaladas, podemos executar nosso aplicativo.

1. Execute seu aplicativo pressionando `F5` ou inserindo `dotnet watch run` no seu terminal.

2. When your project starts, you should see a toast in the bottom right corner with a prompt to connect to the port your project uses.

  ![Port forwarding toast](/assets/images/help/codespaces/python-port-forwarding.png)

### Step 5: Commit your changes

{% data reusables.codespaces.committing-link-to-procedure %}

### Próximas etapas

Agora você deve estar pronto para começar a desenvolver seu projeto C# (.NET) em {% data variables.product.prodname_codespaces %}. Aqui estão alguns recursos adicionais para cenários mais avançados.

- [Gerenciar segredos criptografados para {% data variables.product.prodname_codespaces %}](/codespaces/working-with-your-codespace/managing-encrypted-secrets-for-codespaces)
- [Managing GPG verification for {% data variables.product.prodname_codespaces %}](/codespaces/working-with-your-codespace/managing-gpg-verification-for-codespaces)
- [Encaminhar portas no seu código](/codespaces/developing-in-codespaces/forwarding-ports-in-your-codespace)
