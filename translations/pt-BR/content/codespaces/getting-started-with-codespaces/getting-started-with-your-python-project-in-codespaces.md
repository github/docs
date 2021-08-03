---
title: Primeiros passos para seu projeto Python no Codedespaces
shortTitle: Primeiros passos para seu projeto Python
intro: 'Dê os primeiros passos com seu projeto Python em {% data variables.product.prodname_codespaces %} criando um contêiner de desenvolvimento personalizado.'
versions:
  free-pro-team: '*'
type: tutorial
topics:
  - Codespaces
  - Developer
  - Python
---

{% data reusables.codespaces.release-stage %}

### Introdução

Este guia mostra como configurar seu projeto Python em {% data variables.product.prodname_codespaces %}. Ele irá apresentar a você um exemplo de abertura de seu projeto em um codespace e adicionar e modificar uma configuração de contêiner de desenvolvimento a partir de um modelo.

#### Pré-requisitos

- Você deve ter um projeto Python existente em um repositório em {% data variables.product.prodname_dotcom_the_website %}. Se você não tiver um projeto, você poderá tentar este tutorial com o seguinte exemplo: https://github.com/2percentsilk/python-quickstart.
- You must have {% data variables.product.prodname_codespaces %} enabled for your organization.

### Step 1: Open your project in a codespace

1. Navigate to your project's repository. Use the {% octicon "download" aria-label="The download icon" %} **Code** drop-down menu, and select **Open with Codespaces**. If you don’t see this option, your project isn’t available for {% data variables.product.prodname_codespaces %}.

  ![Botão de abrir com codespaces](/assets/images/help/codespaces/open-with-codespaces-button.png)

2. To create a new codespace, click {% octicon "plus" aria-label="The plus icon" %} **New codespace**. ![Botão de codespace novo](/assets/images/help/codespaces/new-codespace-button.png)

Ao criar um código, seu projeto será criado em uma VM remota dedicada a você. Por padrão, o contêiner para o seu código possui muitas linguagens e tempos de execução, incluindo Node.js, JavaScript, Typescript, nvm, npm e yarn. Ele também inclui um conjunto comum de ferramentas, como git, wget, rsync, openssh e nano.

Você pode personalizar o seu codespace ajustando a quantidade de vCPUs e RAM, [adicionando dotfiles para personalizar seu ambiente](/codespaces/setting-up-your-codespace/personalizing-codespaces-for-your-account)ou modificando as ferramentas e scripts instalados.

{% data variables.product.prodname_codespaces %} usa um arquivo denominado `devcontainer.json` para armazenar configurações. Ao iniciar, {% data variables.product.prodname_codespaces %} usa o arquivo para instalar quaisquer ferramentas, dependências ou outro conjunto que possa ser necessário para o projeto. Para obter mais informações, consulte "[Configurar codespaces para o seu projeto](/codespaces/setting-up-your-codespace/configuring-codespaces-for-your-project)".


### Step 2: Add a dev container to your codespace from a template

O contêiner de códigos padrão vem com a versão mais recente do Python, gerenciadores de pacotes (pip, Miniconda) e outras ferramentas comuns pré-instaladas. No entanto, recomendamos que você configure um contêiner personalizado para definir as ferramentas e scripts de que seu projeto precisa. Isso garantirá um ambiente reprodutível para todos os usuários de {% data variables.product.prodname_codespaces %} do seu repositório.

Para configurar seu projeto com um contêiner personalizado, você deverá usar um arquivo `devcontainer.json` para definir o ambiente. Em {% data variables.product.prodname_codespaces %}, você pode adicionar isto a partir de um modelo ou você pode criar o seu próprio. Para obter mais informações sobre contêineres de desenvolvimento, consulte "[Configurar espaços de códigos para o seu projeto](/codespaces/setting-up-your-codespace/configuring-codespaces-for-your-project)".


1. Access the command palette (`shift command P` / `shift control P`), then start typing "dev container". Click **Codespaces: Add Development Container Configuration Files...** !["Codespaces: Add Development Container Configuration Files..." in the command palette](/assets/images/help/codespaces/add-prebuilt-container-command.png)
2. Para este exemplo, clique em **Python 3**. Se precisar de funcionalidades adicionais, você poderá selecionar qualquer contêiner específico para Python ou uma combinação de ferramentas como Python 3 e PostgresSQL. ![Selecione a opção Python na lista](/assets/images/help/codespaces/add-python-prebuilt-container.png)
3. Clique na versão recomendada do Python. ![Seleção de versão Python](/assets/images/help/codespaces/add-python-version.png)
4. Aceite a opção padrão para adicionar Node.js à sua personalização. ![Adicionar seleção de Node.js](/assets/images/help/codespaces/add-nodejs-selection.png)
5. To rebuild your container, access the command palette (`shift command P` / `shift control P`), then start typing "rebuild". Click **Codespaces: Rebuild Container**. ![Rebuild container option](/assets/images/help/codespaces/codespaces-rebuild.png)

#### Anatomy of your dev container

A adição do modelo de contêiner de desenvolvimento do Python adiciona uma pasta `.devcontainer` à raiz do repositório do seu projeto com os seguintes arquivos:

- `devcontainer.json`
- arquivo Docker

O arquivo recém-adicionado `devcontainer.json` define algumas propriedades que são descritas após a amostra.

##### devcontainer.json

```json
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
        "ms-python.python",
    ],

    // Use 'forwardPorts' to make a list of ports inside the container available locally.
    // "forwardPorts": [],

    // Use 'postCreateCommand' to run commands after the container is created.
    // "postCreateCommand": "pip3 install --user -r requirements.txt",

    // Comment out connect as root instead. Mais informações: https://aka.ms/vscode-remote/containers/non-root.
    "remoteUser": "vscode"
}
```

- **Nome** - Você pode dar qualquer nome ao nosso contêiner de desenvolvimento. Este é apenas o padrão.
- **Build** - As propriedades de compilação.
  - **Arquivo Docker** - No objeto de compilação, `arquivo Docker` é uma referência ao arquivo arquivo Docker que também foi adicionado a partir do template.
  - **Args**
    - **Variante**: Este arquivo contém apenas um argumento de compilação, que é a variante de nó que queremos usar e que é passada para o arquivo Docker.
- **Configurações** - Estas são as configurações de {% data variables.product.prodname_vscode %}.
  - **Terminal.integrated.shell.linux** - Embora o bash seja o padrão, você pode usar outros shells do terminal, fazendo a modificação.
- **Extensions** - These are extensions included by default.
  - **ms-python. ython** - A extensão Microsoft Python fornece um amplo suporte para a linguagem do Python (para todas as versões ativamente compatíveis da linguagem: >=3.), incluindo recursos como IntelliSense, linting, depuração, navegação de código, formatação de código, refatoração, explorador de variáveis, explorador de teste e muito mais.
- **forwardPorts** - Todas as portas listadas aqui serão encaminhadas automaticamente.
- **postCreateCommand** - Se você quiser executar qualquer coisa depois de pousar no seu codespace, isso não está definido no arquivo Docker como `pip3 install -r requirements`. Você pode fazer isso aqui.
- **remoteUser** - Por padrão, você está executando como usuário do `vscode`, mas, opcionalmente, você pode definir isso como `root`.

##### arquivo Docker

```bash
# [Choice] Python version: 3, 3.9, 3.8, 3.7, 3.6
ARG VARIANT="3"
FROM mcr.microsoft.com/vscode/devcontainers/python:0-${VARIANT}

# [Option] Install Node.js
ARG INSTALL_NODE="true"
ARG NODE_VERSION="lts/*"
RUN if [ "${INSTALL_NODE}" = "true" ]; then su vscode -c "umask 0002 && . /usr/local/share/nvm/nvm.sh && nvm install ${NODE_VERSION} 2>&1"; fi

# [Optional] If your pip requirements rarely change, uncomment this section to add them to the image.
# COPY requirements.txt /tmp/pip-tmp/
# RUN pip3 --disable-pip-version-check --no-cache-dir install -r /tmp/pip-tmp/requirements.txt \
#    && rm -rf /tmp/pip-tmp

# [Optional] Uncomment this section to install additional OS packages.
# RUN apt-get update && export DEBIAN_FRONTEND=noninteractive \
#     && apt-get -y install --no-install-recommends <your-package-list-here>

# [Optional] Uncomment this line to install global node packages.
# RUN su vscode -c "source /usr/local/share/nvm/nvm.sh && npm install -g <your-package-here>" 2>&1
```

Você pode usar o arquivo Docker para adicionar camadas adicionais de contêiner para especificar os pacotes do OS, versões de nó ou pacotes globais que queremos que sejam incluídos no nosso contêiner.

### Etapa 3: Modifique seu arquivo devcontainer.json

Com o seu contêiner de desenvolvimento adicionado e um entendimento básico do que tudo faz, agora você pode fazer alterações para configurá-lo para o seu ambiente. Neste exemplo, você irá adicionar propriedades para instalar extensões e dependências do seu projeto quando o seu codespace for iniciado.

1. No Explorador, expanda a pasta `.devcontainer` e selecione o arquivo `devcontainer.json` a partir da árvore para abri-lo.

  !["Codespaces: Rebuild Container" in the command palette](/assets/images/help/codespaces/devcontainers-options.png)

2. Atualize a lista de extensões `` no seu arquivo `devcontainer.json` para adicionar algumas extensões que são úteis ao trabalhar com seu projeto.

  ```json{:copy} 
  "extensions": [
          "ms-python.python",
          "cstrap.flask-snippets",
          "streetsidesoftware.code-spell-checker",
      ],
  ```

3. Remova o comentário o `postCreateCommand` para instalar automaticamente os requisitos como parte do processo de configuração dos codespaces.

  ```json{:copy} 
  // Use 'postCreateCommand' para executar os comandos após a criação do contêiner.
  "postCreateCommand": "pip3 install --user -r requirements.txt",
  ```

4. Para reconstruir seu contêiner e aplicar as alterações do devcontainer.json, acesse a paleta de comandos (`shift comando P` / `shift control P`). Em seguida, comece a digitar "recriar". Click **Codespaces: Rebuild Container**.

  ![Rebuild container option](/assets/images/help/codespaces/codespaces-rebuild.png)

  Rebuilding inside your codespace ensures your changes work as expected before you commit the changes to the repository. If something does result in a failure, you’ll be placed in a codespace with a recovery container that you can rebuild from to keep adjusting your container.

5. Verifique se suas alterações foram aplicadas com sucesso verificando se as extensões Code Spell Checker e Flask Snippet foram instaladas.

    ![Lista de extensões](/assets/images/help/codespaces/python-extensions.png)

### Step 4: Run your application

Na seção anterior, você usou o `postCreateCommand` para instalar um conjunto de pacotes via pip3. Com suas dependências agora instaladas, você pode executar seu aplicativo.

1. Execute seu aplicativo pressionando `F5` ou digitando `python -m Flask run` no terminal do codespace.

2. When your project starts, you should see a toast in the bottom right corner with a prompt to connect to the port your project uses.

  ![Port forwarding toast](/assets/images/help/codespaces/python-port-forwarding.png)

### Step 5: Commit your changes

{% data reusables.codespaces.committing-link-to-procedure %}

### Próximas etapas

Agora você deve estar pronto para começar a desenvolver seu projeto Python em {% data variables.product.prodname_codespaces %}. Aqui estão alguns recursos adicionais para cenários mais avançados.

- [Gerenciar segredos criptografados para {% data variables.product.prodname_codespaces %}](/codespaces/working-with-your-codespace/managing-encrypted-secrets-for-codespaces)
- [Managing GPG verification for {% data variables.product.prodname_codespaces %}](/codespaces/working-with-your-codespace/managing-gpg-verification-for-codespaces)
- [Encaminhar portas no seu código](/codespaces/developing-in-codespaces/forwarding-ports-in-your-codespace)
