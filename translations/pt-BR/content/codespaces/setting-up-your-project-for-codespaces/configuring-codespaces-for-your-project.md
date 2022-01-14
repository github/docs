---
title: Introdução aos contêineres de desenvolvimento
intro: 'Você pode usar um arquivo `devcontainer.json` para definir um ambiente de {% data variables.product.prodname_codespaces %} para o seu repositório.'
allowTitleToDifferFromFilename: true
permissions: People with write permissions to a repository can create or edit the codespace configuration.
redirect_from:
  - /github/developing-online-with-github-codespaces/configuring-github-codespaces-for-your-project
  - /codespaces/setting-up-your-codespace/configuring-codespaces-for-your-project
  - /github/developing-online-with-codespaces/configuring-codespaces-for-your-project
  - /codespaces/customizing-your-codespace/configuring-codespaces-for-your-project
versions:
  fpt: '*'
  ghec: '*'
type: how_to
topics:
  - Codespaces
  - Set up
  - Fundamentals
product: '{% data reusables.gated-features.codespaces %}'
---

 

## Sobre contêineres de desenvolvimento

Um contêiner de desenvolvimento, ou dev container, é o ambiente que {% data variables.product.prodname_codespaces %} usa para fornecer as ferramentas e tempos de execução de que seu projeto precisa para desenvolvimento. Se o seu projeto não tiver um contêiner de desenvolvimento definido, {% data variables.product.prodname_codespaces %} usará a configuração padrão, que contém muitas das ferramentas comuns que sua equipe pode precisar para desenvolver o seu projeto. Para obter mais informações, consulte "[Usando a configuração padrão](#using-the-default-configuration). "

Se você deseja que todos os usuários de seu projeto tenham um ambiente consistente que seja adaptado ao seu projeto, você poderá adicionar um contêiner de desenvolvimento ao seu repositório. Você pode usar uma configuração predefinida para selecionar uma configuração comum para vários tipos de projeto com a opção para personalizar ainda mais seu projeto ou você pode criar sua própria configuração personalizada. Para obter mais informações, consulte "[Usando uma configuração de contêiner predefinida](#using-a-predefined-container-configuration)" e "[Criando uma configuração personalizada de codespace](#creating-a-custom-codespace-configuration)". A opção escolhida depende das ferramentas, tempo de execução, dependências e fluxos de trabalho que um usuário pode precisar para ter sucesso com seu projeto.

{% data variables.product.prodname_codespaces %} permite a personalização em uma base por projeto e por branch com um arquivo `devcontainer.json`. Este arquivo de configuração determina o ambiente de cada novo codespace que alguém criar para o repositório, definindo um contêiner de desenvolvimento que pode incluir estruturas, ferramentas, extensões e encaminhamento de porta. Um arquivo Docker também pode ser usado ao lado do arquivo `devcontainer.json` na pasta `devcontainer` para definir tudo o que é necessário para criar uma imagem de contêiner.

### devcontainer.json

{% data reusables.codespaces.devcontainer-location %}

Você pode usar o seu `devcontainer.json` para definir as configurações padrão para todo o ambiente do codespace, incluindo o editor, mas você também pode definir configurações específicas do editor para áreas de trabalho individuais [](https://code.visualstudio.com/docs/editor/workspaces) em um codespace em um arquivo denominado `.vscode/settings.json`.

Para obter informações sobre as configurações e propriedades que você pode definir em um `devcontainer.json`, consulte [referência do devcontainer.json](https://aka.ms/vscode-remote/devcontainer.json) na documentação de {% data variables.product.prodname_vscode %}.

### arquivo Docker

Um arquivo Docker também mora na pasta `.devcontainer`.

Você pode adicionar um arquivo Docker ao seu projeto para definir uma imagem de contêiner e instalar software. No arquivo Docker, você pode usar `DE` para especificar a imagem do contêiner.

```Dockerfile
FROM mcr.microsoft.com/vscode/devcontainers/javascript-node:0-14

# ** [Optional] Uncomment this section to install additional packages. **
# USER root
#
# RUN apt-get update && export DEBIAN_FRONTEND=noninteractive \
#     && apt-get -y install --no-install-recommends <your-package-list-here>
#
# USER codespace
```

Você pode usar a instrução `EXECUTAR` para instalar qualquer software e `&&` para unir comandos.

Faça referência ao seu arquivo Docker no arquivo `devcontainer.json` usando a propriedade `arquivo Docker`.

```json
{
  ...
  "build": { "dockerfile": "Dockerfile" },
  ...
}
```

Para obter mais informações sobre como usar um arquivo Docker em um contêiner de desenvolvimento, consulte [Criar um contêiner de desenvolvimento](https://code.visualstudio.com/docs/remote/create-dev-container#_dockerfile) na documentação de {% data variables.product.prodname_vscode %}.

## Usando a configuração padrão

Se você não definir uma configuração no repositório, o {% data variables.product.prodname_dotcom %} criará um código com uma imagem-base do Linux. A imagem de base do Linux inclui linguagens e tempos de execução como Python, Node.js, JavaScript, TypeScript, C++, Java, .NET, PHP, PowerShell, Go, Ruby e Rust. Ela também inclui outras ferramentas e utilitários para desenvolvedores como git, GitHub CLI, yarn, openssh, e vim. Para ver todas as linguagens, tempos de execução e as ferramentas que são incluídas, use o comando `devcontainer-info content-url` dentro do seu terminal de código e siga a url que o comando emite.

Como alternativa, para obter mais informações sobre tudo o que está incluído na imagem de base do Linux, consulte o arquivo mais recente no repositório [`microsoft/vscode-dev-containers`](https://github.com/microsoft/vscode-dev-containers/tree/main/containers/codespaces-linux).

A configuração padrão é uma boa opção se você estiver trabalhando em um pequeno projeto que usa as linguagens e ferramentas que {% data variables.product.prodname_codespaces %} fornece.


## Usando uma configuração de contêiner predefinida

Definições de contêiner predefinidas incluem uma configuração comum para um tipo específico de projeto e podem ajudar você rapidamente a dar os primeiros passos com uma configuração que já tem as opções de contêiner apropriadas, {% data variables.product.prodname_vscode %} configurações, e extensões de {% data variables.product.prodname_vscode %} que devem ser instaladas.

Usar uma configuração predefinida é uma ótima ideia se você precisa de uma extensão adicional. Você também pode começar com uma configuração predefinida e alterá-la conforme necessário para a configuração do seu projeto.

{% data reusables.codespaces.command-palette-container %}
1. Clique na definição que você deseja usar. ![Lista de definições de contêiner predefinidas](/assets/images/help/codespaces/predefined-container-definitions-list.png)
1. Siga as instruções para personalizar sua definição. Para obter mais informações sobre as opções para personalizar sua definição, consulte "[Adicionando funcionalidades adicionais ao seu arquivo `devcontainer.json`](#adding-additional-features-to-your-devcontainerjson-file)".
1. Clique em **OK**. ![Botão OK](/assets/images/help/codespaces/prebuilt-container-ok-button.png)
1. Para aplicar as alterações, no canto inferior direito da tela, clique em **Reconstruir agora**. Para obter mais informações sobre a reconstrução do seu contêiner, consulte "[Aplicar alterações na sua configuração](#applying-changes-to-your-configuration)". !["Códigos: Recriar contêiner" em {% data variables.product.prodname_vscode_command_palette %}](/assets/images/help/codespaces/rebuild-prompt.png)

### Adicionando funcionalidades adicionais ao arquivo `devcontainer.json`

{% note %}

**Observação:** Este recurso está na versão beta e sujeito a alterações.

{% endnote %}

Você pode adicionar recursos à configuração de contêiner predefinida para personalizar quais ferramentas estão disponíveis e ampliar a funcionalidade de seu espaço de trabalho sem criar uma configuração personalizada do codespace. Por exemplo, você poderia usar uma configuração de contêiner predefinida e adicionar o {% data variables.product.prodname_cli %} também. Você pode criar essas funcionalidades para o seu projeto adicionando as funcionalidades ao seu arquivo `devcontainer.json` ao definir a configuração do seu contêiner.

Você pode adicionar algumas das características mais comuns selecionando-as na configuração do contêiner predefinido. Para obter mais informações sobre as funcionalidades disponíveis, consulte a biblioteca de script [](https://github.com/microsoft/vscode-dev-containers/tree/main/script-library#scripts) no repositório `vscode-dev-containers`.

![O menu de seleção de funcionalidades adicionais durante a configuração do contêiner.](/assets/images/help/codespaces/select-additional-features.png)

Você também pode adicionar ou remover funcionalidades fora do fluxo de trabalho **Adicionar arquivos de configuração do contêiner de desenvolvimento**.
1. Acessar a Paleta de Comando (`Shift + Comando + P` / `Ctrl + Shift + P`) e, em seguida, comece a digitar "configurar". Selecione **Codespaces: Configure as Funcionalidades do contêiner de desenvolvimento**. ![O comando Configurar Funcionalidades do Devcontainer na paleta de comandos](/assets/images/help/codespaces/codespaces-configure-features.png)
2. Atualize as seleções das suas funcioanlidades e clique em **OK**. ![O menu de seleção de funcionalidades adicionais durante a configuração do contêiner.](/assets/images/help/codespaces/select-additional-features.png)
1. Para aplicar as alterações, no canto inferior direito da tela, clique em **Reconstruir agora**. Para obter mais informações sobre a reconstrução do seu contêiner, consulte "[Aplicar alterações na sua configuração](#applying-changes-to-your-configuration)". !["Codespaces: Reconstruir contêiner" na paleta de comandos](/assets/images/help/codespaces/rebuild-prompt.png)


## Criar uma configuração personalizada de codespace

Se nenhuma das configurações predefinidas atender às suas necessidades, você poderá criar uma configuração personalizada adicionando um arquivo `devcontainer.json`. {% data reusables.codespaces.devcontainer-location %}

No arquivo, você pode usar [chaves de configuração compatíveis](https://code.visualstudio.com/docs/remote/devcontainerjson-reference) para especificar aspectos do ambiente do código, como quais extensões de {% data variables.product.prodname_vscode %} serão instaladas.

{% data reusables.codespaces.vscode-settings-order %}

Você pode definir as configurações de editor-padrão para {% data variables.product.prodname_vscode %} em dois lugares.

* As configurações do editor definidas em `.vscode/settings.json` são aplicadas como configurações do escopo do _espaço de trabalho_ no codespace.
* Configurações do editor definidas na chave `Configurações` no `devcontainer.json` são aplicadas como configuração de escopo _Remote [Codespaces]_ nesse codespace.

Depois de atualizar o arquivo `devcontainer.json`, você poderá reconstruir o contêiner para o seu código aplicar as alterações. Para obter mais informações, consulte "[Aplicar alterações à sua configuração](#applying-changes-to-your-configuration)".


<!--
## Supported codespace configuration keys

You can use configuration keys supported by {% data variables.product.prodname_codespaces %} in `devcontainer.json`.

### General settings

- `name`
- `settings`
- `extensions`
- `forwardPorts`
- `postCreateCommand`

### Docker, Dockerfile, or image settings

- `image`
- `dockerFile`
- `context`
- `containerEnv`
- `remoteEnv`
- `containerUser`
- `remoteUser`
- `mounts`
- `runArgs`
- `overrideCommand`
- `dockerComposeFile`

For more information about the available settings for `devcontainer.json`, see [devcontainer.json reference](https://aka.ms/vscode-remote/devcontainer.json) in the {% data variables.product.prodname_vscode %} documentation.
-->

## Aplicando alterações à sua configuração

{% data reusables.codespaces.apply-devcontainer-changes %}

{% data reusables.codespaces.rebuild-command %}
1. {% data reusables.codespaces.recovery-mode %} Corrija os erros na configuração. ![Mensagem de erro sobre modo de recuperação](/assets/images/help/codespaces/recovery-mode-error-message.png)
   - Para diagnosticar o erro revisando os registros de criação, clique em **Visualizar registro de criação**.
   - Para corrigir os erros identificados nos registros, atualize seu arquivo </code>devcontainer.json..</li>
<li>Para aplicar as alterações, reconstrua seu contêiner.</li>
</ul> 
