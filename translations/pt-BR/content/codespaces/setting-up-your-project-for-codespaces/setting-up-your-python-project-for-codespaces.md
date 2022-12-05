---
title: Como configurar o projeto Python para os GitHub Codespaces
allowTitleToDifferFromFilename: true
shortTitle: Setting up your Python project
intro: 'Comece o projeto Python nos {% data variables.product.prodname_github_codespaces %} criando um contêiner de desenvolvimento personalizado.'
versions:
  fpt: '*'
  ghec: '*'
redirect_from:
  - /codespaces/getting-started-with-codespaces/getting-started-with-your-python-project-in-codespaces
type: tutorial
topics:
  - Codespaces
  - Developer
  - Python
hasExperimentalAlternative: true
hidden: true
ms.openlocfilehash: 2d9c627907f447a3efd873fceba963b899b57c39
ms.sourcegitcommit: e8c012864f13f9146e53fcb0699e2928c949ffa8
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 11/09/2022
ms.locfileid: '148159296'
---
## Introdução

Este guia mostra como configurar o projeto Python {% data reusables.codespaces.setting-up-project-intro %}

### Pré-requisitos

- Você deve ter um projeto Python existente em um repositório em {% data variables.product.prodname_dotcom_the_website %}. Caso você não tenha um projeto, experimente este tutorial com o seguinte exemplo: https://github.com/2percentsilk/python-quickstart.
- O {% data variables.product.prodname_github_codespaces %} precisa estar habilitado para a organização.

## Etapa 1: Abra o seu projeto em um codespace

1. No nome do repositório, use o menu suspenso **{% octicon "code" aria-label="The code icon" %} Código** e, na guia **Codespaces**, clique no ícone de adição ({% octicon "plus" aria-label="The plus icon" %}).

  ![Botão de codespace novo](/assets/images/help/codespaces/new-codespace-button.png)

Ao criar um código, seu projeto será criado em uma VM remota dedicada a você. Por padrão, o contêiner para o seu código possui muitas linguagens e tempos de execução, incluindo Node.js, JavaScript, Typescript, nvm, npm e yarn. Ele também inclui um conjunto comum de ferramentas, como git, wget, rsync, openssh e nano.

{% data reusables.codespaces.customize-vcpus-and-ram %} principal

## Etapa 2: Adicionar uma configuração de contêiner de desenvolvimento ao repositório com base em um modelo

O contêiner de desenvolvimento padrão, ou "contêiner de desenvolvimento", para {% data variables.product.prodname_github_codespaces %} vem com a versão mais recente do Python, gerenciadores de pacotes (pip, Miniconda) e outras ferramentas comuns pré-instaladas. No entanto, recomendamos que você configure seu próprio contêiner de desenvolvimento para incluir todas as ferramentas e scripts necessários ao projeto. Isso garantirá um ambiente reprodutível para todos os usuários de {% data variables.product.prodname_github_codespaces %} do seu repositório.

{% data reusables.codespaces.setup-custom-devcontainer %}

{% data reusables.codespaces.command-palette-container %}
1. Para este exemplo, clique em **Python 3**. Se precisar de funcionalidades adicionais, você poderá selecionar qualquer contêiner específico para Python ou uma combinação de ferramentas como Python 3 e PostgreSQL.
  ![Seleção da opção Python na lista](/assets/images/help/codespaces/add-python-prebuilt-container.png)
1. Clique na versão recomendada do Python.
  ![Seleção da versão do Python](/assets/images/help/codespaces/add-python-version.png)
1. Aceite a opção padrão para adicionar Node.js à sua personalização.
  ![Adicionar a seleção do Node.js](/assets/images/help/codespaces/add-nodejs-selection.png) {% data reusables.codespaces.rebuild-command %}

### Anatomia do seu contêiner de desenvolvimento

A adição do modelo de contêiner de desenvolvimento Python adiciona um diretório `.devcontainer` à raiz do repositório do projeto com os seguintes arquivos:

- `devcontainer.json`
- Dockerfile

O arquivo `devcontainer.json` recém-adicionado define algumas propriedades descritas após o exemplo.

#### devcontainer.json

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
        "ms-python.python"
    ],

    // Use 'forwardPorts' to make a list of ports inside the container available locally.
    // "forwardPorts": [],

    // Use 'postCreateCommand' to run commands after the container is created.
    // "postCreateCommand": "pip3 install --user -r requirements.txt",

    // Comment out connect as root instead. More info: https://aka.ms/vscode-remote/containers/non-root.
    "remoteUser": "vscode"
}
```

- **nome** – Dê qualquer nome ao contêiner de desenvolvimento, esse é apenas o padrão.
- **build** – As propriedades de build.
  - **dockerfile** – No objeto de `build`, `dockerfile` contém o caminho para o Dockerfile que também foi adicionado do modelo.
  - **args**
    - **variante**: esse arquivo contém um só argumento de build, que é a variante do Node transmitida para o Dockerfile que desejamos usar.
- **configurações** – são configurações do {% data variables.product.prodname_vscode %}.
  - **terminal.integrated.shell.linux** – Embora o Bash seja o padrão aqui, você pode usar outros shells de terminal modificando isso.
- **extensões** – são extensões incluídas por padrão.
  - **ms-python.python** – A extensão do Microsoft Python fornece suporte avançado para a linguagem Python (em todas as versões ativamente compatíveis da linguagem: >=3.6), incluindo recursos como IntelliSense, lint, depuração, navegação pelo código, formatação de código, refatoração, gerenciador de variáveis, gerenciador de testes, entre outros.
- **forwardPorts** – Todas as portas listadas aqui serão encaminhadas automaticamente. Para obter mais informações, confira "[Como encaminhar portas no seu codespace](/codespaces/developing-in-codespaces/forwarding-ports-in-your-codespace)".
- **postCreateCommand** – use para executar comandos que não são definidos no Dockerfile, como `pip3 install -r requirements`, depois que o codespace for criado.
- **remoteUser** – Por padrão, você executa o código como o usuário `vscode`, mas, opcionalmente, pode definir isso como `root`.

#### Dockerfile

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

## Etapa 3: Modifique seu arquivo devcontainer.json

Com as configurações do seu contêiner de desenvolvimento adicionadas e um entendimento básico do que tudo faz, agora você pode personalizar para configurar ainda mais o seu ambiente. Neste exemplo, você irá adicionar propriedades para instalar extensões e dependências do seu projeto quando seu codespace for iniciado.

1. No Explorer, expanda a pasta `.devcontainer` e selecione o arquivo `devcontainer.json` na árvore para abri-lo.

  ![Arquivo devcontainer.json no Explorador](/assets/images/help/codespaces/devcontainers-options.png)

2. Atualize a lista `extensions` no arquivo `devcontainer.json` para adicionar algumas extensões que são úteis ao trabalhar com seu projeto.

  ```json{:copy}
  "extensions": [
          "ms-python.python",
          "cstrap.flask-snippets",
          "streetsidesoftware.code-spell-checker"
      ],
  ```

3. Remova a marca de comentário de `postCreateCommand` para instalar automaticamente os requisitos como parte do processo de instalação dos codespaces.

  ```json{:copy}
  // Use 'postCreateCommand' to run commands after the container is created.
  "postCreateCommand": "pip3 install --user -r requirements.txt",
  ```

{% data reusables.codespaces.rebuild-command %}

   {% data reusables.codespaces.rebuild-reason %}

5. Verifique se suas alterações foram aplicadas com sucesso verificando se as extensões Code Spell Checker e Flask Snippet foram instaladas.

   ![Lista de extensões](/assets/images/help/codespaces/python-extensions.png)

## Etapa 4: Execute seu aplicativo.

Na seção anterior, você usou o `postCreateCommand` para instalar um conjunto de pacotes por meio do pip3. Com suas dependências agora instaladas, você pode executar seu aplicativo.

1. Execute seu aplicativo pressionando `F5` ou inserindo `python -m flask run` no terminal do codespace.

2. Quando o projeto for iniciado, você verá uma mensagem de notificação do sistema no canto inferior direito de {% data variables.product.prodname_vscode_shortname %}, contendo um prompt para se conectar à porta que o projeto usa.

  ![Notificação do sistema de encaminhamento de porta](/assets/images/help/codespaces/python-port-forwarding.png)

## Etapa 5: Faça commit das suas alterações

{% data reusables.codespaces.committing-link-to-procedure %}

## Próximas etapas

Agora está tudo pronto para você começar a desenvolver o projeto Python nos {% data variables.product.prodname_github_codespaces %}. Aqui estão alguns recursos adicionais para cenários mais avançados.

{% data reusables.codespaces.next-steps-adding-devcontainer %}
