---
title: Configurando seu projeto em Python para Codespaces
shortTitle: Configurando seu projeto Python
intro: 'Dê os primeiros passos com seu projeto Python em {% data variables.product.prodname_codespaces %} criando um contêiner de desenvolvimento personalizado.'
product: '{% data reusables.gated-features.codespaces %}'
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
---

## Introdução

Este guia mostra como configurar seu projeto Python em {% data variables.product.prodname_codespaces %}. Ele irá apresentar a você um exemplo de abertura de seu projeto em um codespace e adicionar e modificar uma configuração de contêiner de desenvolvimento a partir de um modelo.

### Pré-requisitos

- Você deve ter um projeto Python existente em um repositório em {% data variables.product.prodname_dotcom_the_website %}. Se você não tiver um projeto, você poderá tentar este tutorial com o seguinte exemplo: https://github.com/2percentsilk/python-quickstart.
- Você precisa ter {% data variables.product.prodname_codespaces %} habilitado para a sua organização.

## Etapa 1: Abra o seu projeto em um codespace

1. No nome do repositório, use o menu suspenso **Código de {% octicon "code" aria-label="The code icon" %}** e na guia **Codespaces**, clique em **Criar codespace no principal**.

  ![Botão de codespace novo](/assets/images/help/codespaces/new-codespace-button.png)

  Se você não vir esta opção, significa que {% data variables.product.prodname_codespaces %} não está disponível para o seu projeto. Consulte [Acesso a {% data variables.product.prodname_codespaces %}](/codespaces/developing-in-codespaces/creating-a-codespace#access-to-codespaces) para mais informações.

Ao criar um código, seu projeto será criado em uma VM remota dedicada a você. Por padrão, o contêiner para o seu código possui muitas linguagens e tempos de execução, incluindo Node.js, JavaScript, Typescript, nvm, npm e yarn. Ele também inclui um conjunto comum de ferramentas, como git, wget, rsync, openssh e nano.

{% data reusables.codespaces.customize-vcpus-and-ram %}

## Etapa 2: Adicionar uma configuração de contêiner de desenvolvimento ao repositório a partir de um modelo

O contêiner de desenvolvimento padrão ou "contêiner dev" para {% data variables.product.prodname_github_codespaces %} vem com a versão mais recente do Python, gerentes de pacotes (pip, Miniconda) e outras ferramentas comuns pré-instaladas. No entanto, recomendamos que você configure seu próprio contêiner de desenvolvimento para incluir todas as ferramentas e scripts de que seu projeto precisa. Isso garantirá um ambiente reprodutível para todos os usuários de {% data variables.product.prodname_github_codespaces %} do seu repositório.

{% data reusables.codespaces.setup-custom-devcontainer %}

{% data reusables.codespaces.command-palette-container %}
1. Para este exemplo, clique em **Python 3**. Se precisar de funcionalidades adicionais, você poderá selecionar qualquer contêiner específico para Python ou uma combinação de ferramentas como Python 3 e PostgreSQL. ![Selecione a opção Python na lista](/assets/images/help/codespaces/add-python-prebuilt-container.png)
1. Clique na versão recomendada do Python. ![Seleção de versão Python](/assets/images/help/codespaces/add-python-version.png)
1. Aceite a opção padrão para adicionar Node.js à sua personalização. ![Adicionar seleção de Node.js](/assets/images/help/codespaces/add-nodejs-selection.png)
{% data reusables.codespaces.rebuild-command %}

### Anatomia do seu contêiner de desenvolvimento

A adição do modelo de contêiner de desenvolvimento do Node.js adiciona uma diretório `.devcontainer` à raiz do repositório do seu projeto com os seguintes arquivos:

- `devcontainer.json`
- arquivo Docker

O arquivo recém-adicionado `devcontainer.json` define algumas propriedades que são descritas após a amostra.

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

    // Comment out connect as root instead. Mais informações: https://aka.ms/vscode-remote/containers/non-root.
    "remoteUser": "vscode"
}
```

- **nome** - Você pode dar qualquer nome ao nosso contêiner de desenvolvimento. Este é apenas o padrão.
- **build** - As propriedades de compilação.
  - **Arquivo Docker** - No objeto `construir`, `Arquivo Docker` contém o caminho para o arquivo Dockerfile que também foi adicionado a partir do modelo.
  - **args**
    - **variante**: Este arquivo contém apenas um argumento de compilação, que é a variante de nó que queremos usar e que é passada para o arquivo Docker.
- **configurações** - Estas são as configurações de {% data variables.product.prodname_vscode %}.
  - **terminal.integrated.shell.linux** - Embora o bash seja o padrão, você pode usar outros shells do terminal, fazendo a modificação.
- **extensões** - Estas são extensões incluídas por padrão.
  - **ms-python. ython** - A extensão Microsoft Python fornece um amplo suporte para a linguagem do Python (para todas as versões ativamente compatíveis da linguagem: >=3.), incluindo recursos como IntelliSense, linting, depuração, navegação de código, formatação de código, refatoração, explorador de variáveis, explorador de teste e muito mais.
- **forwardPorts** - Todas as portas listadas aqui serão encaminhadas automaticamente. Para obter mais informações, consulte "[Encaminhando portas no seu codespace](/codespaces/developing-in-codespaces/forwarding-ports-in-your-codespace)".
- **postCreateCommand** - Use isto para executar comandos que não estão definidos no arquivo Docker como `pip3 install -r requirements`, depois que seu codespace for criado.
- **remoteUser** - Por padrão, você está executando como usuário do `vscode`, mas, opcionalmente, você pode definir isso como `root`.

#### arquivo Docker

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

Com a configuração do contêiner de desenvolvimento adicionada e um entendimento básico do que tudo faz, agora você pode fazer alterações para personalizar ainda mais seu ambiente. Neste exemplo, você irá adicionar propriedades para instalar extensões e dependências do seu projeto quando seu codespace for iniciado.

1. No Explorador, expanda a pasta `.devcontainer` e selecione o arquivo `devcontainer.json` a partir da árvore para abri-lo.

  ![Arquivo devcontainer.json no Explorador](/assets/images/help/codespaces/devcontainers-options.png)

2. Atualize a lista de extensões `` no seu arquivo `devcontainer.json` para adicionar algumas extensões que são úteis ao trabalhar com seu projeto.

  ```json{:copy}
  "extensions": [
          "ms-python.python",
          "cstrap.flask-snippets",
          "streetsidesoftware.code-spell-checker"
      ],
  ```

3. Remova o comentário o `postCreateCommand` para instalar automaticamente os requisitos como parte do processo de configuração dos codespaces.

  ```json{:copy}
  // Use 'postCreateCommand' para executar os comandos após a criação do contêiner.
  "postCreateCommand": "pip3 install --user -r requirements.txt",
  ```

{% data reusables.codespaces.rebuild-command %}

   {% data reusables.codespaces.rebuild-reason %}

5. Verifique se suas alterações foram aplicadas com sucesso verificando se as extensões Code Spell Checker e Flask Snippet foram instaladas.

   ![Lista de extensões](/assets/images/help/codespaces/python-extensions.png)

## Etapa 4: Execute o seu aplicativo

Na seção anterior, você usou o `postCreateCommand` para instalar um conjunto de pacotes via pip3. Com suas dependências agora instaladas, você pode executar seu aplicativo.

1. Execute seu aplicativo pressionando `F5` ou digitando `python -m Flask run` no terminal do codespace.

2. Quando o seu projeto for iniciado, você deverá ver um alerta no canto inferior direito com uma instrução para conectar-se à porta que seu projeto usa.

  ![Notificação de encaminhamento de porta](/assets/images/help/codespaces/python-port-forwarding.png)

## Etapa 5: Faça commit das suas alterações

{% data reusables.codespaces.committing-link-to-procedure %}

## Próximas etapas

Agora você deve estar pronto para começar a desenvolver seu projeto Python em {% data variables.product.prodname_codespaces %}. Aqui estão alguns recursos adicionais para cenários mais avançados.

{% data reusables.codespaces.next-steps-adding-devcontainer %}
