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
ms.openlocfilehash: 646f8068e68040f1d12f8155c3ba9e2bdb84c2ca
ms.sourcegitcommit: 7fb7ec2e665856fc5f7cd209b53bd0fb1c9bbc67
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 11/29/2022
ms.locfileid: '148185088'
---
## Sobre contêineres de desenvolvimento

Os contêineres de desenvolvimento ou contêineres de des são contêineres do Docker configurados especificamente para fornecer um ambiente de desenvolvimento completo. Sempre que você trabalha em um codespace, está usando um contêiner de desenvolvimento em uma máquina virtual.

Você pode configurar o contêiner de desenvolvimento para um repositório para que os codespaces criados para esse repositório forneçam um ambiente de desenvolvimento personalizado, completo com todas as ferramentas e runtimes necessários para trabalhar em um projeto específico. Se você não definir uma configuração no repositório, {% data variables.product.prodname_github_codespaces %} usará uma configuração padrão, que contém muitas das ferramentas comuns que sua equipe pode precisar para desenvolvimento com seu projeto. Para obter mais informações, confira "[Como usar a configuração de contêiner de desenvolvimento padrão](#using-the-default-dev-container-configuration)".

Os arquivos de configuração para um contêiner de desenvolvimento estão contidos em um diretório `.devcontainer` em seu repositório. Você pode usar {% data variables.product.prodname_vscode %} para adicionar arquivos de configuração para você. Você pode escolher entre uma seleção de configurações predefinidas para vários tipos de projeto. Você pode usá-las sem configurações adicionais ou editar as configurações para refinar o ambiente de desenvolvimento que elas produzem. Para obter mais informações, confira "[Como usar uma configuração de contêiner de desenvolvimento predefinida](#using-a-predefined-dev-container-configuration)".

Como alternativa, você pode adicionar seus arquivos de configuração personalizados. Para obter mais informações, confira "[Como criar uma configuração de contêiner de desenvolvimento personalizada](#creating-a-custom-dev-container-configuration)".

Você pode definir uma única configuração de contêiner de desenvolvimento para um repositório, configurações diferentes para diferentes branches ou várias configurações. Quando várias configurações estão disponíveis, os usuários podem escolher sua configuração preferencial ao criar um codespace. Isso é particularmente útil para grandes repositórios que contêm código-fonte em diferentes linguagens de programação ou para diferentes projetos. Você pode criar uma variedade de configurações que permitem que diferentes equipes trabalhem em um codespace configurado adequadamente para o trabalho que estão realizando.

Ao criar um codespace com base em um modelo, você pode começar com um ou mais arquivos de configuração de contêiner de des no workspace. Para configurar ainda mais o ambiente, você pode adicionar ou remover configurações desses arquivos e recompilar o contêiner para aplicar as alterações ao codespace no qual está trabalhando. Se você publicar o codespace em um repositório no {% data variables.product.product_name %}, todos os codespaces criados com base nesse repositório compartilharão a configuração definida. Para obter mais informações, confira "[Como aplicar alterações de configuração a um codespace](#applying-configuration-changes-to-a-codespace)" e "[Como criar um codespace com base em um modelo](/codespaces/developing-in-codespaces/creating-a-codespace-from-a-template#publishing-to-a-remote-repository)".

### devcontainer.json

O arquivo principal em uma configuração de contêiner de desenvolvimento é o arquivo `devcontainer.json`. Você pode usar esse arquivo para determinar o ambiente de codespaces criados para seu repositório. O conteúdo desse arquivo define um contêiner de desenvolvimento que pode incluir estruturas, ferramentas, extensões e encaminhamento de porta. O arquivo `devcontainer.json` geralmente contém uma referência a um Dockerfile, que normalmente está localizado ao lado do arquivo `devcontainer.json`.

Se você criar um codespace a com base em um repositório sem um arquivo `devcontainer.json` ou se você começar com base em um modelo em branco do {% data variables.product.company_short %}, a configuração padrão do contêiner de des será usada. Para obter mais informações, confira "[Como usar a configuração de contêiner de desenvolvimento padrão](#using-the-default-dev-container-configuration)".

O arquivo `devcontainer.json` geralmente está localizado no diretório `.devcontainer` do repositório. Como alternativa, você pode localizá-lo diretamente na raiz do repositório, neste caso o nome do arquivo deve começar com um ponto: `.devcontainer.json`. 

Se você quiser ter opções de configurações de contêiner de desenvolvimento em seu repositório, quaisquer alternativas ao arquivo `.devcontainer/devcontainer.json` (ou `.devcontainer.json` ) devem estar localizadas em seu subdiretório no caminho `.devcontainer/SUBDIRECTORY/devcontainer.json`. Por exemplo, você pode escolher entre duas configurações: 
* `.devcontainer/database-dev/devcontainer.json` 
* `.devcontainer/gui-dev/devcontainer.json`

Quando você tem vários arquivos `devcontainer.json` em seu repositório, cada codespace é criado a partir de apenas uma das configurações. As configurações não podem ser importadas ou herdadas entre arquivos `devcontainer.json`. Se um arquivo `devcontainer.json` em um subdiretório personalizado tiver arquivos dependentes, como o Dockerfile ou scripts executados por comandos no arquivo `devcontainer.json`, é recomendável que você localize esses arquivos no mesmo subdiretório.

Para obter informações de como escolher sua configuração de contêiner de des preferencial ao criar um codespace, confira "[Como criar um codespace para um repositório](/codespaces/developing-in-codespaces/creating-a-codespace-for-a-repository#creating-a-codespace-for-a-repository)".

{% data reusables.codespaces.more-info-devcontainer %}

#### Como usar o devcontainer.json.

É útil pensar no arquivo `devcontainer.json` como fornecendo "customização" em vez de "personalização". Você deve incluir apenas itens que todos que trabalham em sua base de código precisam como elementos padrão do ambiente de desenvolvimento, não itens que são preferências pessoais. Itens como linters são bons para padronizar e exigir que todos tenham instalado, então é bom incluí-los em seu arquivo `devcontainer.json`. Itens como decoradores ou temas da interface do usuário são escolhas pessoais que não devem ser colocadas no arquivo `devcontainer.json`.

Você pode personalizar os codespaces usando dotfiles e a Sincronização de Configurações. Para obter mais informações, confira "[Como personalizar o {% data variables.product.prodname_github_codespaces %} da conta](/codespaces/customizing-your-codespace/personalizing-github-codespaces-for-your-account)".

### Dockerfile

Você pode adicionar um Dockerfile como parte da configuração do contêiner de desenvolvimento. 

O Dockerfile é um arquivo de texto que contém as instruções necessárias para criar uma imagem de contêiner do Docker. Essa imagem é usada para gerar um contêiner de desenvolvimento toda vez que alguém cria um codespace usando o arquivo `devcontainer.json` que faz referência a esse Dockerfile. As instruções no Dockerfile geralmente começam fazendo referência a uma imagem pai na qual a nova imagem que será criada se baseia. Isso é seguido por comandos que são executados durante o processo de criação da imagem, por exemplo, para instalar pacotes de software.

O Dockerfile para um contêiner de desenvolvimento geralmente está localizado na pasta `.devcontainer`, ao lado do `devcontainer.json` ao qual ele faz referência. 

{% note %}

**Observação**: como alternativa ao uso de um Dockerfile, você pode usar a propriedade `image` no arquivo `devcontainer.json` para se referir diretamente a uma imagem existente que deseja usar. A imagem especificada aqui precisa ser permitida nas políticas de imagem da organização definidas. Para obter mais informações, confira "[Como restringir a imagem base dos codespaces](/codespaces/managing-codespaces-for-your-organization/restricting-the-base-image-for-codespaces)". Se nem um Dockerfile nem uma imagem forem encontrados, a imagem de contêiner padrão será usada. Para obter mais informações, confira "[Como usar a configuração de contêiner de desenvolvimento padrão](#using-the-default-dev-container-configuration)".

{% endnote %}

#### Exemplo simples do Dockerfile

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

#### Como usar um Dockerfile

Para usar um Dockerfile como parte de uma configuração de contêiner de desenvolvimento, faça referência a ele em seu arquivo `devcontainer.json` usando a propriedade `dockerfile`.

```json{:copy}
{
  ...
  "build": { "dockerfile": "Dockerfile" },
  ...
}
```

Várias opções estarão disponíveis se você quiser usar a orquestração de contêiner existente no contêiner de desenvolvimento. Para obter mais informações, confira a seção "Opções de orquestração" da [Especificação](https://containers.dev/implementors/spec/#orchestration-options) no site Contêineres de Desenvolvimento.

## Como usar a configuração de contêiner de desenvolvimento padrão

Se você não definir uma configuração em seu repositório, {% data variables.product.prodname_dotcom %} cria um codespace usando uma imagem padrão do Linux. Essa imagem do Linux inclui várias versões de runtime para linguagens populares como Python, Node, PHP, Java, Go, C++, Ruby e .NET Core/C#. As versões mais recentes ou LTS dessas linguagens são usadas. Também há ferramentas para dar suporte à ciência de dados e aprendizado de máquina, como o JupyterLab e o Conda. A imagem também inclui outras ferramentas e utilitários de desenvolvedor como Git, GitHub CLI, yarn, openssh e vim. Para ver todas as linguagens, as ferramentas e os runtimes incluídos, use o comando `devcontainer-info content-url` no terminal do codespace e siga a URL gerada pelo comando.

Para obter informações sobre o que está incluído na imagem padrão do Linux, confira o repositório [`devcontainers/images`](https://github.com/devcontainers/images/tree/main/src/universal). 

A configuração padrão é uma boa opção se você estiver trabalhando em um pequeno projeto que usa as linguagens e ferramentas que o {% data variables.product.prodname_github_codespaces %} fornece.

## Como usar uma configuração de contêiner de desenvolvimento predefinida

Se você usar os {% data variables.product.prodname_codespaces %} no {% data variables.product.prodname_vscode %} ou em um navegador da Web, poderá criar uma configuração de contêiner de desenvolvimento para o repositório escolhendo opções em uma lista de configurações predefinidas. Essas configurações oferecem definições comuns para tipos de projeto específicos e ajudam a começar a trabalhar rapidamente com uma configuração que já tem as opções de contêiner apropriadas, as configurações do {% data variables.product.prodname_vscode %} e as extensões do {% data variables.product.prodname_vscode %} que devem ser instaladas.

Usar uma configuração predefinida é uma ótima ideia se você precisa de uma extensão adicional. Você também pode começar com uma configuração predefinida e alterá-la conforme necessário para o seu projeto. Para obter mais informações sobre as definições de contêineres de desenvolvimento predefinidos, confira o repositório [`devcontainers/images`](https://github.com/devcontainers/images/tree/main/src).

Você pode adicionar uma configuração de contêiner de desenvolvimento predefinida enquanto trabalha em um codespace ou enquanto trabalha em um repositório localmente. Para fazer isso no {% data variables.product.prodname_vscode_shortname %} enquanto você está trabalhando localmente e não está conectado a um codespace, a extensão "Contêineres de Desenvolvimento" precisa estar instalada e habilitada. Para obter mais informações sobre essa extensão, confira [{% data variables.product.prodname_vs_marketplace_shortname %}](https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.remote-containers). O procedimento a seguir descreve o processo quando você está usando um codespace. As etapas no {% data variables.product.prodname_vscode_shortname %} quando você não está conectado a um codespace são muito semelhantes.

{% data reusables.codespaces.command-palette-container %}
1. Clique na definição que você deseja usar.

   ![Captura de tela da lista de definições de contêiner predefinido](/assets/images/help/codespaces/predefined-container-definitions-list.png)

1. Siga as instruções para personalizar sua definição. Para obter mais informações sobre as opções usadas para personalizar sua definição, confira "[Como adicionar recursos adicionais ao arquivo `devcontainer.json`](#adding-additional-features-to-your-devcontainerjson-file)".
1. Clique em **OK**.

   ![Captura de tela do botão OK](/assets/images/help/codespaces/prebuilt-container-ok-button.png)

1. Se você estiver trabalhando em um codespace, aplique suas alterações clicando em **Recompilar agora** na mensagem na parte inferior direita da janela. Para obter mais informações sobre como recompilar seu contêiner, confira "[Como aplicar alterações à sua configuração](#applying-configuration-changes-to-a-codespace)".

   ![Captura de tela de um prompt para 'Recompilar agora'](/assets/images/help/codespaces/rebuild-prompt.png)

### Como adicionar outros recursos ao arquivo `devcontainer.json`

{% data reusables.codespaces.about-features %} Para obter mais informações, confira "[Como adicionar recursos a um arquivo `devcontainer.json`](/codespaces/setting-up-your-project-for-codespaces/adding-features-to-a-devcontainer-file?tool=vscode)".

## Como criar uma configuração de contêiner de desenvolvimento personalizada

Se nenhuma das configurações predefinidas atender às suas necessidades, você poderá criar uma configuração personalizada criando seu arquivo `devcontainer.json`.

* Se você estiver adicionando um único arquivo `devcontainer.json` que será usado por todos que criarem um codespace de seu repositório, crie o arquivo em um diretório `.devcontainer` na raiz do repositório. 
* Se você quiser oferecer aos usuários uma opção de configuração, poderá criar vários arquivos `devcontainer.json` personalizados, cada um localizado em um subdiretório separado do diretório `.devcontainer`.

   {% note %}

   **Observações**:
   - você não pode colocar os arquivos `devcontainer.json` em diretórios mais de um nível abaixo de `.devcontainer`. Por exemplo, um arquivo em `.devcontainer/teamA/devcontainer.json` funcionará, mas `.devcontainer/teamA/testing/devcontainer.json` não funcionará.
   - {% data reusables.codespaces.configuration-choice-templates %} Para obter mais informações, confira "[Como configurar um repositório de modelos para os {% data variables.product.prodname_github_codespaces %}](/codespaces/setting-up-your-project-for-codespaces/setting-up-a-template-repository-for-github-codespaces)".

   {% endnote %}

   Se vários arquivos `devcontainer.json` forem encontrados no repositório, eles serão listados na página de opções de criação do codespace. Para obter mais informações, confira "[Como criar um codespace para um repositório](/codespaces/developing-in-codespaces/creating-a-codespace-for-a-repository#creating-a-codespace-for-a-repository)".

   ![Captura de tela de opções de arquivos de configuração](/assets/images/help/codespaces/configuration-file-choice.png)

### Como adicionar um arquivo `devcontainer.json`

Se você ainda não tiver um arquivo `devcontainer.json` no repositório, adicione-o rapidamente por meio do {% data variables.product.prodname_dotcom_the_website %}.
1. Navegue até o repositório e clique na lista suspensa **{% octicon "code" aria-label="The code icon" %} Código**.
1. Na guia **Codespaces**, clique nas reticências ( **...** ) e selecione **Configurar contêiner de desenvolvimento**.

   ![Captura de tela da lista suspensa Código, com a opção "Configurar contêiner de desenvolvimento" realçada](/assets/images/help/codespaces/configure-dev-container.png)

Um novo arquivo `.devcontainer/devcontainer.json` será aberto no editor. O arquivo conterá algumas propriedades iniciais, incluindo um objeto `features` ao qual você pode adicionar novas ferramentas, bibliotecas ou runtimes. Para obter mais informações, confira "[Como adicionar recursos a um arquivo `devcontainer.json`](/codespaces/setting-up-your-project-for-codespaces/adding-features-to-a-devcontainer-file?tool=webui)".

Se o repositório já contiver um ou mais arquivos `devcontainer.json`, um clique em **Configurar contêiner de desenvolvimento** abrirá o arquivo `devcontainer.json` existente com a precedência mais alta de acordo com a [especificação](https://containers.dev/implementors/spec/#devcontainerjson) em containers.dev. 

### Seleção da configuração padrão durante a criação do codespace

Se `.devcontainer/devcontainer.json` ou `.devcontainer.json` existir, será a seleção padrão na lista de arquivos de configuração disponíveis quando você criar um codespace. Se nenhum dos arquivos existir, a configuração de contêiner de desenvolvimento padrão será selecionada por padrão. 

![Captura de tela da opção de configuração padrão selecionada](/assets/images/help/codespaces/configuration-file-choice-default.png)

### Como editar o arquivo devcontainer.json.

Você pode adicionar e editar as chaves de configuração com suporte no arquivo `devcontainer.json` para especificar aspectos do ambiente do codespace, como quais extensões de {% data variables.product.prodname_vscode_shortname %} serão instaladas. {% data reusables.codespaces.more-info-devcontainer %}

O arquivo `devcontainer.json` é gravado usando o formato JSONC (JSON com comentários). Isso permite que você inclua comentários no arquivo de configuração. Para obter mais informações, confira "[Como editar JSON com {% data variables.product.prodname_vscode_shortname %}](https://code.visualstudio.com/docs/languages/json#_json-with-comments)" na documentação {% data variables.product.prodname_vscode_shortname %}.

{% note %}

**Observação**: se você usar um linter para validar o arquivo `devcontainer.json`, verifique se está definido como JSONC e não JSON, ou comentários serão relatados como erros.

{% endnote %}

### Configurações da interface do {% data variables.product.prodname_vscode_shortname %}

Você pode definir as configurações da interface do {% data variables.product.prodname_vscode_shortname %}, com três escopos: Workspace, Remoto [Codespaces] e Usuário. Você pode ver esses escopos no editor de Configurações do {% data variables.product.prodname_vscode_shortname %}.

![Captura de tela mostrando a escolha de escopos no editor de Configurações](/assets/images/help/codespaces/scopes-for-vscode.png)

Se uma configuração for definida em vários escopos, as configurações de Workspace serão prioritárias e, em seguida, Repositórios Remotos [Codespaces] e, por fim, Usuário.

Você pode definir as configurações padrão da interface do {% data variables.product.prodname_vscode_shortname %} em dois locais.

* As configurações da interface definidas no arquivo `.vscode/settings.json` no repositório são aplicadas como configurações no escopo do Workspace no codespace.
* As configurações da interface definidas na chave `settings` no arquivo `devcontainer.json` são aplicadas como configurações com escopo Remoto [Codespaces] no codespace.

## Como aplicar alterações de configuração a um codespace

As alterações em uma configuração serão aplicadas na próxima vez que você criar um codespace. No entanto, você pode aplicar suas alterações a um codespace existente recriando o contêiner. Você pode fazer isso em um codespace no aplicativo da área de trabalho ou no cliente Web do {% data variables.product.prodname_vscode_shortname %}, ou pode usar o {% data variables.product.prodname_cli %}.

### Como recompilar o contêiner de desenvolvimento no cliente Web ou aplicativo da área de trabalho do {% data variables.product.prodname_vscode_shortname %}

{% data reusables.codespaces.rebuild-command %}
1. {% data reusables.codespaces.recovery-mode %}

   ![Captura de tela da mensagem de erro sobre o modo de recuperação](/assets/images/help/codespaces/recovery-mode-error-message.png)

   - Para diagnosticar o erro revisando os logs de criação, clique em **Exibir log de criação**.
   - Para corrigir os erros identificados nos logs, atualize o arquivo `devcontainer.json`.
   - Para aplicar as alterações, reconstrua seu contêiner. 

### Usando o {% data variables.product.prodname_cli %} para recompilar um contêiner de desenvolvimento

Se você tiver alterado uma configuração de contêiner de desenvolvimento fora do VS Code (por exemplo, em {% data variables.product.prodname_dotcom_the_website %} ou em um IDE jetBrains), poderá usar {% data variables.product.prodname_cli %} para recompilar o contêiner de desenvolvimento para um codespace existente.

1. Em um terminal, insira o comando a seguir.

   ```
   gh cs rebuild
   ```

   Seus codespaces estão listados.

1. Use as teclas de direção no teclado para realçar o codespace necessário e pressione <kbd>Enter</kbd>.


## Leitura adicional

- "[Como pré-compilar os codespaces](/codespaces/prebuilding-your-codespaces)"
