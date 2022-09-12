---
title: Introdução aos contêineres de desenvolvimento
intro: 'Quando você trabalha em um codespace, o ambiente de trabalho é criado usando um contêiner de desenvolvimento ou um contêiner de desenvolvimento hospedado em uma máquina virtual.'
permissions: People with write permissions to a repository can create or edit the codespace configuration.
redirect_from:
  - /github/developing-online-with-github-codespaces/configuring-github-codespaces-for-your-project
  - /codespaces/setting-up-your-codespace/configuring-codespaces-for-your-project
  - /github/developing-online-with-codespaces/configuring-codespaces-for-your-project
  - /codespaces/customizing-your-codespace/configuring-codespaces-for-your-project
  - /codespaces/setting-up-your-project-for-codespaces/configuring-codespaces-for-your-project
versions:
  fpt: '*'
  ghec: '*'
type: how_to
topics:
  - Codespaces
  - Set up
  - Fundamentals
product: '{% data reusables.gated-features.codespaces %}'
ms.openlocfilehash: 22a227f8f97b054e4d3980876dae47d72fb03d08
ms.sourcegitcommit: 3a16368cd8beb8b8487eb77d3e597cf49f4c4335
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 07/14/2022
ms.locfileid: '147111167'
---
## <a name="about-dev-containers"></a>Sobre contêineres de desenvolvimento

Os contêineres de desenvolvimento são contêineres do Docker configurados especificamente para fornecer um ambiente de desenvolvimento completo. Sempre que você trabalha em um codespace, está usando um contêiner de desenvolvimento em uma máquina virtual.

Você pode configurar o contêiner de desenvolvimento para um repositório para que os codespaces criados para esse repositório forneçam um ambiente de desenvolvimento personalizado, completo com todas as ferramentas e runtimes necessários para trabalhar em um projeto específico. Se você não definir uma configuração no repositório, {% data variables.product.prodname_github_codespaces %} usará uma configuração padrão, que contém muitas das ferramentas comuns que sua equipe pode precisar para desenvolvimento com seu projeto. Para obter mais informações, confira "[Como usar a configuração de contêiner de desenvolvimento padrão](#using-the-default-dev-container-configuration)".

Os arquivos de configuração para um contêiner de desenvolvimento estão contidos em um diretório `.devcontainer` em seu repositório. Você pode usar {% data variables.product.prodname_vscode %} para adicionar arquivos de configuração para você. Você pode escolher entre uma seleção de configurações predefinidas para vários tipos de projeto. Você pode usá-las sem configurações adicionais ou editar as configurações para refinar o ambiente de desenvolvimento que elas produzem. Para obter mais informações, confira "[Como usar uma configuração de contêiner de desenvolvimento predefinida](#using-a-predefined-dev-container-configuration)".

Como alternativa, você pode adicionar seus arquivos de configuração personalizados. Para obter mais informações, confira "[Como criar uma configuração de contêiner de desenvolvimento personalizada](#creating-a-custom-dev-container-configuration)".

Você pode definir uma única configuração de contêiner de desenvolvimento para um repositório, configurações diferentes para diferentes branches ou várias configurações. Quando várias configurações estão disponíveis, os usuários podem escolher sua configuração preferencial ao criar um codespace. Isso é particularmente útil para grandes repositórios que contêm código-fonte em diferentes linguagens de programação ou para diferentes projetos. Você pode criar uma variedade de configurações que permitem que diferentes equipes trabalhem em um codespace configurado adequadamente para o trabalho que estão realizando.

### <a name="devcontainerjson"></a>devcontainer.json

O arquivo principal em uma configuração de contêiner de desenvolvimento é o arquivo `devcontainer.json`. Você pode usar esse arquivo para determinar o ambiente de codespaces criados para seu repositório. O conteúdo desse arquivo define um contêiner de desenvolvimento que pode incluir estruturas, ferramentas, extensões e encaminhamento de porta. O arquivo `devcontainer.json` geralmente contém uma referência a um Dockerfile, que normalmente está localizado ao lado do arquivo `devcontainer.json`.

Se você não adicionar um arquivo `devcontainer.json` ao repositório. a configuração de contêiner de desenvolvimento padrão é usada. Para obter mais informações, confira "[Como usar a configuração de contêiner de desenvolvimento padrão](#using-the-default-dev-container-configuration)".

O arquivo `devcontainer.json` geralmente está localizado no diretório `.devcontainer` do repositório. Como alternativa, você pode localizá-lo diretamente na raiz do repositório, neste caso o nome do arquivo deve começar com um ponto: `.devcontainer.json`. 

Se você quiser ter opções de configurações de contêiner de desenvolvimento em seu repositório, quaisquer alternativas ao arquivo `.devcontainer/devcontainer.json` (ou `.devcontainer.json` ) devem estar localizadas em seu subdiretório no caminho `.devcontainer/SUBDIRECTORY/devcontainer.json`. Por exemplo, você pode escolher entre duas configurações: 
* `.devcontainer/database-dev/devcontainer.json` 
* `.devcontainer/gui-dev/devcontainer.json`

Quando você tem vários arquivos `devcontainer.json` em seu repositório, cada codespace é criado a partir de apenas uma das configurações. As configurações não podem ser importadas ou herdadas entre arquivos `devcontainer.json`. Se um arquivo `devcontainer.json` em um subdiretório personalizado tiver arquivos dependentes, como o Dockerfile ou scripts executados por comandos no arquivo `devcontainer.json`, é recomendável que você localize esses arquivos no mesmo subdiretório.

Para obter informações sobre como escolher sua configuração de contêiner de desenvolvimento preferencial ao criar um codespace, confira "[Criação de um codespace](/codespaces/developing-in-codespaces/creating-a-codespace#creating-a-codespace)".

{% data reusables.codespaces.more-info-devcontainer %}

#### <a name="how-to-use-the-devcontainerjson"></a>Como usar o devcontainer.json.

É útil pensar no arquivo `devcontainer.json` como fornecendo "customização" em vez de "personalização". Você deve incluir apenas itens que todos que trabalham em sua base de código precisam como elementos padrão do ambiente de desenvolvimento, não itens que são preferências pessoais. Itens como linters são bons para padronizar e exigir que todos tenham instalado, então é bom incluí-los em seu arquivo `devcontainer.json`. Itens como decoradores ou temas da interface do usuário são escolhas pessoais que não devem ser colocadas no arquivo `devcontainer.json`.

Você pode personalizar os codespaces usando dotfiles e a Sincronização de Configurações. Para obter mais informações, confira "[Como personalizar o {% data variables.product.prodname_github_codespaces %} da conta](/codespaces/customizing-your-codespace/personalizing-github-codespaces-for-your-account)".

### <a name="dockerfile"></a>Dockerfile

Você pode adicionar um Dockerfile como parte da configuração do contêiner de desenvolvimento. 

O Dockerfile é um arquivo de texto que contém as instruções necessárias para criar uma imagem de contêiner do Docker. Essa imagem é usada para gerar um contêiner de desenvolvimento toda vez que alguém cria um codespace usando o arquivo `devcontainer.json` que faz referência a esse Dockerfile. As instruções no Dockerfile geralmente começam fazendo referência a uma imagem pai na qual a nova imagem que será criada se baseia. Isso é seguido por comandos que são executados durante o processo de criação da imagem, por exemplo, para instalar pacotes de software.

O Dockerfile para um contêiner de desenvolvimento geralmente está localizado na pasta `.devcontainer`, ao lado do `devcontainer.json` ao qual ele faz referência. 

{% note %}

**Observação**: como alternativa ao uso de um Dockerfile, você pode usar a propriedade `image` no arquivo `devcontainer.json` para se referir diretamente a uma imagem existente que deseja usar. Se nem um Dockerfile nem uma imagem forem encontrados, a imagem de contêiner padrão será usada. Para obter mais informações, confira "[Como usar a configuração de contêiner de desenvolvimento padrão](#using-the-default-dev-container-configuration)".

{% endnote %}

#### <a name="simple-dockerfile-example"></a>Exemplo simples do Dockerfile

O seguinte exemplo usa quatro instruções:

`ARG` define uma variável de tempo de compilação.

`FROM` especifica a imagem pai na qual a imagem do Docker gerada será baseada.

`COPY` copia um arquivo e o adiciona ao sistema de arquivos. 

`RUN` atualiza listas de pacotes e executa um script. Você também pode usar uma instrução `RUN` para instalar o software, conforme mostrado nas instruções comentadas. Para executar vários comandos, use `&&` para combinar os comandos em uma única instrução `RUN`.

```Dockerfile{:copy}
ARG VARIANT="16-buster"
FROM mcr.microsoft.com/vscode/devcontainers/javascript-node:0-${VARIANT}

# [Optional] Uncomment if you want to install an additional version of node using nvm
# ARG EXTRA_NODE_VERSION=10
# RUN su node -c "source /usr/local/share/nvm/nvm.sh && nvm install ${EXTRA_NODE_VERSION}"

# [Optional] Uncomment if you want to install more global node modules
# RUN su node -c "npm install -g <your-package-list-here>"

COPY library-scripts/github-debian.sh /tmp/library-scripts/
RUN apt-get update && bash /tmp/library-scripts/github-debian.sh
```

Para obter mais informações sobre as instruções do Dockerfile, confira "[Referência do Dockerfile](https://docs.docker.com/engine/reference/builder)" na documentação do Docker.

#### <a name="using-a-dockerfile"></a>Como usar um Dockerfile

Para usar um Dockerfile como parte de uma configuração de contêiner de desenvolvimento, faça referência a ele em seu arquivo `devcontainer.json` usando a propriedade `dockerfile`.

```json{:copy}
{
  ...
  "build": { "dockerfile": "Dockerfile" },
  ...
}
```

Para obter mais informações sobre como usar um Dockerfile em uma configuração de contêiner de desenvolvimento, confira a documentação {% data variables.product.prodname_vscode_shortname %} "[Criar um contêiner de desenvolvimento](https://code.visualstudio.com/docs/remote/create-dev-container#_dockerfile)".

## <a name="using-the-default-dev-container-configuration"></a>Como usar a configuração de contêiner de desenvolvimento padrão

Se você não definir uma configuração em seu repositório, {% data variables.product.prodname_dotcom %} cria um codespace usando uma imagem padrão do Linux. Essa imagem do Linux inclui várias versões de runtime para linguagens populares como Python, Node, PHP, Java, Go, C++, Ruby e .NET Core/C#. As versões mais recentes ou LTS dessas linguagens são usadas. Também há ferramentas para dar suporte à ciência de dados e aprendizado de máquina, como o JupyterLab e o Conda. A imagem também inclui outras ferramentas e utilitários de desenvolvedor como Git, GitHub CLI, yarn, openssh e vim. Para ver todas as linguagens, as ferramentas e os runtimes incluídos, use o comando `devcontainer-info content-url` no terminal do codespace e siga a URL gerada pelo comando.

Como alternativa, para obter mais informações sobre tudo o que está incluído na imagem padrão do Linux, confira o arquivo mais recente no repositório [`microsoft/vscode-dev-containers`](https://github.com/microsoft/vscode-dev-containers/tree/main/containers/codespaces-linux). 

A configuração padrão é uma boa opção se você estiver trabalhando em um pequeno projeto que usa as linguagens e ferramentas que o {% data variables.product.prodname_github_codespaces %} fornece.

## <a name="using-a-predefined-dev-container-configuration"></a>Como usar uma configuração de contêiner de desenvolvimento predefinida

Você pode escolher entre uma lista de configurações predefinidas para criar uma configuração de contêiner de desenvolvimento para seu repositório. Essas configurações fornecem configurações comuns para tipos de projeto específicos e podem ajudá-lo a começar rapidamente com uma configuração que já tem as opções de contêiner apropriadas, configurações de do {% data variables.product.prodname_vscode_shortname %} e extensões do {% data variables.product.prodname_vscode_shortname %} que devem ser instaladas.

Usar uma configuração predefinida é uma ótima ideia se você precisa de uma extensão adicional. Você também pode começar com uma configuração predefinida e alterá-la conforme necessário para o seu projeto.

Você pode adicionar uma configuração de contêiner de desenvolvimento predefinida enquanto trabalha em um codespace ou enquanto trabalha em um repositório localmente. 

{% data reusables.codespaces.command-palette-container %}
1. Clique na definição que você deseja usar.

   ![Lista de definições de contêiner predefinidas](/assets/images/help/codespaces/predefined-container-definitions-list.png)

1. Siga as instruções para personalizar sua definição. Para obter mais informações sobre as opções usadas para personalizar sua definição, confira "[Como adicionar recursos adicionais ao arquivo `devcontainer.json`](#adding-additional-features-to-your-devcontainerjson-file)".
1. Clique em **OK**.

   ![Botão OK](/assets/images/help/codespaces/prebuilt-container-ok-button.png)

1. Se você estiver trabalhando em um codespace, aplique suas alterações clicando em **Recompilar agora** na mensagem na parte inferior direita da janela. Para obter mais informações sobre como recompilar seu contêiner, confira "[Como aplicar alterações à sua configuração](#applying-configuration-changes-to-a-codespace)".

   !["Codespaces: Recompilar Contêiner" na {% data variables.product.prodname_vscode_command_palette %}](/assets/images/help/codespaces/rebuild-prompt.png)

### <a name="adding-additional-features-to-your-devcontainerjson-file"></a>Como adicionar outros recursos ao arquivo `devcontainer.json`

{% note %}

**Observação:** esse recurso está na versão beta e sujeito a alterações.

{% endnote %}

Você pode adicionar recursos à configuração de contêiner predefinida para personalizar quais ferramentas estão disponíveis e estender a funcionalidade do seu workspace sem precisar criar uma configuração de contêiner de desenvolvimento personalizada do zero. Por exemplo, você pode usar uma configuração de contêiner predefinida e adicionar o {% data variables.product.prodname_cli %}. Você pode disponibilizar esses recursos adicionais para seu projeto adicionando os recursos ao arquivo `devcontainer.json` ao configurar a configuração do contêiner.

Você pode adicionar algumas das características mais comuns selecionando-as na configuração do contêiner predefinido. Para obter mais informações sobre os recursos disponíveis, confira a [biblioteca de scripts](https://github.com/microsoft/vscode-dev-containers/tree/main/script-library#scripts) no repositório `vscode-dev-containers`.


1. Acesse a paleta de comandos (`Shift + Command + P` / `Ctrl + Shift + P`) e comece a digitar "configure". Selecione **Codespaces: Configurar Recursos do Devcontainer**.

   ![O comando Configurar Funcionalidades do Devcontainer na paleta de comandos](/assets/images/help/codespaces/codespaces-configure-features.png)

1. Atualize suas seleções de recursos e clique em **OK**.

   ![O menu de seleção de recursos adicionais durante a configuração do contêiner.](/assets/images/help/codespaces/select-additional-features.png)

1. Para aplicar as alterações, no canto inferior direito da tela, clique em **Recompilar agora**. Para obter mais informações sobre como recompilar seu contêiner, confira "[Como aplicar alterações à sua configuração](#applying-configuration-changes-to-a-codespace)".

   !["Codespaces: Recompilar Contêiner" na paleta de comandos](/assets/images/help/codespaces/rebuild-prompt.png)

## <a name="creating-a-custom-dev-container-configuration"></a>Como criar uma configuração de contêiner de desenvolvimento personalizada

Se nenhuma das configurações predefinidas atender às suas necessidades, você poderá criar uma configuração personalizada criando seu arquivo `devcontainer.json`.

* Se você estiver adicionando um único arquivo `devcontainer.json` que será usado por todos que criarem um codespace de seu repositório, crie o arquivo em um diretório `.devcontainer` na raiz do repositório. 
* Se você quiser oferecer aos usuários uma opção de configuração, poderá criar vários arquivos `devcontainer.json` personalizados, cada um localizado em um subdiretório separado do diretório `.devcontainer`.

   {% note %}

   **Observação**: você não pode localizar seus arquivos `devcontainer.json` em diretórios mais de um nível abaixo de `.devcontainer`. Por exemplo, um arquivo em `.devcontainer/teamA/devcontainer.json` funcionará, mas `.devcontainer/teamA/testing/devcontainer.json` não funcionará. 

   {% endnote %}

   Se vários arquivos `devcontainer.json` forem encontrados no repositório, eles serão listados na página de opções de criação do codespace. Para obter mais informações, confira "[Como criar um codespace](/codespaces/developing-in-codespaces/creating-a-codespace#creating-a-codespace)".

   ![Uma escolha de arquivos de configuração](/assets/images/help/codespaces/configuration-file-choice.png)

### <a name="default-configuration-selection-during-codespace-creation"></a>Seleção da configuração padrão durante a criação do codespace

Se `.devcontainer/devcontainer.json` ou `.devcontainer.json` existir, será a seleção padrão na lista de arquivos de configuração disponíveis quando você criar um codespace. Se nenhum dos arquivos existir, a configuração de contêiner de desenvolvimento padrão será selecionada por padrão. 

![A opção de configuração padrão selecionada](/assets/images/help/codespaces/configuration-file-choice-default.png)

### <a name="editing-the-devcontainerjson-file"></a>Como editar o arquivo devcontainer.json.

Você pode adicionar e editar as chaves de configuração com suporte no arquivo `devcontainer.json` para especificar aspectos do ambiente do codespace, como quais extensões de {% data variables.product.prodname_vscode_shortname %} serão instaladas. {% data reusables.codespaces.more-info-devcontainer %}

O arquivo `devcontainer.json` é gravado usando o formato JSONC. Isso permite que você inclua comentários no arquivo de configuração. Para obter mais informações, confira "[Como editar JSON com {% data variables.product.prodname_vscode_shortname %}](https://code.visualstudio.com/docs/languages/json#_json-with-comments)" na documentação {% data variables.product.prodname_vscode_shortname %}.

{% note %}

**Observação**: se você usar um linter para validar o arquivo `devcontainer.json`, verifique se está definido como JSONC e não JSON, ou comentários serão relatados como erros.

{% endnote %}

### <a name="editor-settings-for--data-variablesproductprodname_vscode_shortname-"></a>Configurações do editor para {% data variables.product.prodname_vscode_shortname %}

{% data reusables.codespaces.vscode-settings-order %}

Você pode definir as configurações padrão do editor para {% data variables.product.prodname_vscode_shortname %} em dois locais.

* As configurações do editor definidas no arquivo `.vscode/settings.json` em seu repositório são aplicadas como configurações no escopo do _Workspace_ no codespace.
* As configurações do editor definidas na chave `settings` no arquivo `devcontainer.json` são aplicadas como configurações de escopo _Remoto [Codespaces]_ no codespace.

## <a name="applying-configuration-changes-to-a-codespace"></a>Como aplicar alterações de configuração a um codespace

{% data reusables.codespaces.apply-devcontainer-changes %}

{% data reusables.codespaces.rebuild-command %}
1. {% data reusables.codespaces.recovery-mode %} Corrija os erros na configuração.

   ![Mensagem de erro sobre modo de recuperação](/assets/images/help/codespaces/recovery-mode-error-message.png)

   - Para diagnosticar o erro revisando os logs de criação, clique em **Exibir log de criação**.
   - Para corrigir os erros identificados nos logs, atualize o arquivo `devcontainer.json`.
   - Para aplicar as alterações, reconstrua seu contêiner. 

## <a name="further-reading"></a>Leitura adicional

- "[Como pré-compilar os codespaces](/codespaces/prebuilding-your-codespaces)"
