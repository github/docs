---
title: Configurar codespaces para seu projeto
intro: 'Você pode usar um arquivo `devcontainer.json` para definir um ambiente de {% data variables.product.prodname_codespaces %} para o seu repositório.'
permissions: People with write permissions to a repository can create or edit the codespace configuration.
redirect_from:
  - /github/developing-online-with-github-codespaces/configuring-github-codespaces-for-your-project
  - /github/developing-online-with-codespaces/configuring-codespaces-for-your-project
versions:
  free-pro-team: '*'
type: how_to
topics:
  - Codespaces
  - Set up
  - Fundamentals
---

{% data reusables.codespaces.release-stage %}

### Sobre contêineres de desenvolvimento

Um contêiner de desenvolvimento, ou dev container, é o ambiente que {% data variables.product.prodname_codespaces %} usa para fornecer as ferramentas e tempos de execução de que seu projeto precisa para desenvolvimento. Ao trabalhar com um contêiner de desenvolvimento em {% data variables.product.prodname_codespaces %} você pode [usar a configuração padrão](#using-the-default-configuration), [usar uma configuração pré-definida](#using-a-pre-defined-container-configuration), ou [criar sua própria configuração](#creating-a-custom-codespace-configuration). A opção escolhida depende das ferramentas, tempo de execução, dependências e fluxos de trabalho que um usuário pode precisar para ter sucesso com seu projeto.

{% data variables.product.prodname_codespaces %} permite a personalização em uma base por projeto e por branch com um arquivo `devcontainer.json`. Este arquivo de configuração determina o ambiente de cada novo codespace que alguém criar para o repositório, definindo um contêiner de desenvolvimento que pode incluir estruturas, ferramentas, extensões e encaminhamento de porta. Um arquivo Docker também pode ser usado ao lado do arquivo `devcontainer.json` na pasta `devcontainer` para definir tudo o que é necessário para criar uma imagem de contêiner.

#### devcontainer.json

{% data reusables.codespaces.devcontainer-location %}

Você pode usar o seu `devcontainer.json` para definir as configurações padrão para todo o ambiente do codespace, incluindo o editor, mas você também pode definir configurações específicas do editor para áreas de trabalho individuais [](https://code.visualstudio.com/docs/editor/workspaces) em um codespace em um arquivo denominado `.vscode/settings.json`.

Para obter informações sobre as configurações e propriedades que você pode definir em um `devcontainer.json`, consulte [referência do devcontainer.json](https://aka.ms/vscode-remote/devcontainer.json) na documentação de {% data variables.product.prodname_vscode %}.

#### arquivo Docker

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

### Usando a configuração padrão

Se você não definir uma configuração no repositório, o {% data variables.product.prodname_dotcom %} criará um código com uma imagem-base do Linux. A imagem de base do Linux inclui linguagens e tempos de execução como Python, Node.js, JavaScript, TypeScript, C++, Java, .NET, PHP, PowerShell, Go, Ruby e Rust. Ela também inclui outras ferramentas e utilitários para desenvolvedores como git, GitHub CLI, yarn, openssh, e vim. Para ver todas as linguagens, tempos de execução e as ferramentas que são incluídas, use o comando `devcontainer-info content-url` dentro do seu terminal de código e siga a url que o comando emite.

Como alternativa, para obter mais informações sobre tudo o que está incluído na imagem de base do Linux, consulte o arquivo mais recente no repositório [`microsoft/vscode-dev-containers`](https://github.com/microsoft/vscode-dev-containers).

A configuração padrão é uma boa opção se você estiver trabalhando em um pequeno projeto que usa as linguagens e ferramentas que {% data variables.product.prodname_codespaces %} fornece.


### Usando uma configuração de contêiner predefinida

Definições de contêiner predefinidas incluem uma configuração comum para um tipo específico de projeto e podem ajudar você rapidamente a dar os primeiros passos com uma configuração que já tem as opções de contêiner apropriadas, {% data variables.product.prodname_vscode %} configurações, e extensões de {% data variables.product.prodname_vscode %} que devem ser instaladas.

Usar uma configuração predefinida é uma ótima ideia se você precisa de uma extensão adicional. Você também pode começar com uma configuração predefinida e alterá-la conforme necessário para a configuração do seu projeto.

1. Para acessar a paleta de comando, no canto superior esquerdo, selecione o Menu de Aplicativos e clique em **Paleta de Comando…** no menu **Exibir** e, em seguida, comece a digitar "Codespaces: Adicionar arquivos de configuração do Container do Desenvolvimento...". Clique em **Codespaces: Adicionar arquivos de configuração de Contêiner do Desenvolvimento...** !["Codespaces: Adicionar arquivos de configuração de Contêiner de Desenvolvimento..." na paleta de comandos](/assets/images/help/codespaces/add-prebuilt-container-command.png)
1. Clique na definição que você deseja usar. ![Lista de definições de contêiner predefinidas](/assets/images/help/codespaces/predefined-container-definitions-list.png)
1. Siga as instruções para personalizar sua definição.
1. Clique em **OK**. ![Botão OK](/assets/images/help/codespaces/prebuilt-container-ok-button.png)
1. Para aplicar as alterações, no canto inferior direito da tela, clique em **Reconstruir agora**. Para obter mais informações sobre a reconstrução do seu contêiner, consulte "[Aplicar alterações na sua configuração](#applying-changes-to-your-configuration)". !["Codespaces: Reconstruir contêiner" na paleta de comandos](/assets/images/help/codespaces/rebuild-prompt.png)


### Criar uma configuração personalizada de codespace

Se nenhuma das configurações predefinidas atender às suas necessidades, você poderá criar uma configuração personalizada adicionando um arquivo `devcontainer.json`. {% data reusables.codespaces.devcontainer-location %}

No arquivo, você pode usar [chaves de configuração compatíveis](https://code.visualstudio.com/docs/remote/devcontainerjson-reference) para especificar aspectos do ambiente do código, como quais extensões de {% data variables.product.prodname_vscode %} serão instaladas.

{% data reusables.codespaces.vscode-settings-order %}

Você pode definir as configurações de editor-padrão para {% data variables.product.prodname_vscode %} em dois lugares.

* As configurações do editor definidas em `.vscode/settings.json` são aplicadas como configurações do escopo do _espaço de trabalho_ no codespace.
* Configurações do editor definidas na chave `Configurações` no `devcontainer.json` são aplicadas como configuração de escopo _Remote [Codespaces]_ nesse codespace.

Depois de atualizar o arquivo `devcontainer.json`, você poderá reconstruir o contêiner para o seu código aplicar as alterações. Para obter mais informações, consulte "[Aplicar alterações à sua configuração](#applying-changes-to-your-configuration)".


<!--
### Supported codespace configuration keys

You can use configuration keys supported by {% data variables.product.prodname_codespaces %} in `devcontainer.json`.

#### General settings

- `name`
- `settings`
- `extensions`
- `forwardPorts`
- `postCreateCommand`

#### Docker, Dockerfile, or image settings

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

### Aplicando alterações à sua configuração

{% data reusables.codespaces.apply-devcontainer-changes %}

1. {% data reusables.codespaces.rebuild-command %}
!["Codespaces: Reconstruir contêiner" na paleta de comandos](/assets/images/help/codespaces/rebuild-container-command.png)
1. {% data reusables.codespaces.recovery-mode %} Corrija os erros na configuração. ![Mensagem de erro sobre modo de recuperação](/assets/images/help/codespaces/recovery-mode-error-message.png)
   - Para diagnosticar o erro revisando os registros de criação, clique em **Visualizar registro de criação**.
   - Para corrigir os erros identificados nos registros, atualize seu arquivo </code>devcontainer.json..</li>
<li>Para aplicar as alterações, reconstrua seu contêiner. {% data reusables.codespaces.rebuild-command %}</li>
</ul>
