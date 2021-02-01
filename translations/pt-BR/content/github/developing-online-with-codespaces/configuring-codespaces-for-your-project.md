---
title: Configurar codespaces para seu projeto
intro: Você pode definir uma configuração-padrão para cada novo codespace do seu repositório para garantir que os colaboradores tenham todas as ferramentas e configurações de que precisam em seu ambiente de desenvolvimento on-line.
product: '{% data reusables.gated-features.codespaces %}'
permissions: As pessoas com permissões de gravação em um repositório podem criar ou editar a configuração-padrão do codespace.
redirect_from:
  - /github/developing-online-with-github-codespaces/configuring-github-codespaces-for-your-project
versions:
  free-pro-team: '*'
---

{% data reusables.codespaces.release-stage %}

### Sobre configurações-padrão do codespace

{% data reusables.codespaces.about-configuration %}

Se você não definir uma configuração no repositório, o {% data variables.product.prodname_dotcom %} criará um código com uma imagem-base do Linux. A imagem de base do Linux inclui ferramentas para Python, Node.js, JavaScript, TypeScript, C++, Java, C#, F#, .NET Core, PHP, PowerShell, Go, Ruby e Rust. Para obter mais informações sobre a imagem base do Linux, consulte o repositório [`microsoft/vscode-dev-containers`](https://github.com/microsoft/vscode-dev-containers/tree/master/containers/codespaces-linux).

{% data reusables.codespaces.about-personalization %} {% data reusables.codespaces.codespace-config-order %} Para obter mais informações, consulte "[Personalizar {% data variables.product.prodname_codespaces %} para a sua conta](/github/developing-online-with-codespaces/personalizing-codespaces-for-your-account)".

É possível criar uma configuração-padrão do codespace usando uma configuração de contêiner pré-criada para seu tipo de projeto, ou você pode criar uma configuração personalizada específica para as necessidades do seu projeto.

{% data variables.product.prodname_codespaces %}  usa configurações contidas em um arquivo de configuração denominado `devcontainer.json`. {% data reusables.codespaces.devcontainer-location %}

Você pode usar o seu `devcontainer.json` para definir as configurações-padrão para todo o ambiente de código, incluindo o editor de {% data variables.product.prodname_vscode %}, mas você também pode definir configurações específicas do editor em um arquivo denominado `.vscode/settings.json`.

As alterações na configuração do codespace de um repositório aplicam-se apenas a cada novo codespace e não afetam nenhum codespace existente.

### Usar uma configuração de contêiner pré-criado

Você pode usar qualquer configuração de contêiner pré-criada para {% data variables.product.prodname_vscode %}, que está disponível no repositório [`vscode-dev-containers`](https://github.com/microsoft/vscode-dev-containers). As definições de contêiner pré-criadas incluem uma configuração comum para um tipo específico de projeto e podem ajudá-lo rapidamente a começar com uma configuração que já tem as opções de contêiner apropriadas, configurações do {% data variables.product.prodname_vscode %}, e extensões do {% data variables.product.prodname_vscode %}, que devem ser instaladas.

1. Clonar ou fazer o download do repositório [`vscode-dev-containers`](https://github.com/microsoft/vscode-dev-containers).
1. No repositório `vscode-dev-containers`, acesse a pasta [`contêineres`](https://github.com/microsoft/vscode-dev-containers/tree/master/containers) e, em seguida, escolha uma configuração de contêiner para as necessidades de seu projeto. Vamos usar a configuração do contêiner [Node.js & JavaScript](https://aka.ms/vscode-dev-containers/definitions/node) como exemplo.
1. Na pasta [`Node.js & JavaScript`](https://aka.ms/vscode-dev-containers/definitions/node), copie a pasta `.devcontainer` para a raiz do repositório do seu projeto.
1. Faça commit e push da nova configuração para o repositório do seu projeto no {% data variables.product.prodname_dotcom %}.

Cada novo codespace criado a partir de um branch que contém a pasta `.devcontainer` será configurado de acordo com o conteúdo da pasta. Para obter mais informações, consulte "[Criar um codespace](/github/developing-online-with-codespaces/creating-a-codespace)".

### Criar uma configuração personalizada de codespace

Se nenhuma das configurações pré-criadas atender às suas necessidades, você poderá criar uma configuração personalizada adicionando um arquivo `devcontainer.json`. {% data reusables.codespaces.devcontainer-location %}

No arquivo, você pode usar chaves de configuração compatíveis para especificar os aspectos do ambiente do código, como quais extensões do {% data variables.product.prodname_vscode %} serão instaladas.

{% data reusables.codespaces.vscode-settings-order %}

Você pode definir as configurações de editor-padrão para {% data variables.product.prodname_vscode %} em dois lugares.

* As configurações do editor definidas em `.vscode/settings.json` são aplicadas como configurações do escopo do _espaço de trabalho_ no codespace.
* Configurações do editor definidas na chave `Configurações` no `devcontainer.json` são aplicadas como configuração de escopo _Remote [Codespaces]_ nesse codespace.

### Chaves de configuração de codespace compatíveis

Você pode usar as chaves de configuração compatíveis com {% data variables.product.prodname_codespaces %} em `devcontainer.json`.

#### Configurações gerais

- `name`
- `settings`
- `extensões`
- `forwardPorts`
- `postCreateCommand`

#### Docker, arquivo Docker ou configurações de imagem

- `image`
- `Arquivo docker`
- `context`
- `containerEnv`
- `remoteEnv`
- `containerUser`
- `remoteUser`
- `mounts`
- `runArgs`
- `overrideCommand`
- `dockerComposeFile`

Para obter mais informações sobre as configurações disponíveis para `devcontainer.json`, consulte [referência do devcontainer.json](https://aka.ms/vscode-remote/devcontainer.json) na documentação do {% data variables.product.prodname_vscode %}.
