---
title: Como criar um codespace para um repositório
intro: Você pode criar um codespace para uma branch em um repositório para fazer o desenvolvimento on-line.
redirect_from:
  - /github/developing-online-with-github-codespaces/creating-a-codespace
  - /github/developing-online-with-codespaces/creating-a-codespace
  - /codespaces/developing-in-codespaces/creating-a-codespace
versions:
  fpt: '*'
  ghec: '*'
type: how_to
topics:
  - Codespaces
  - Fundamentals
  - Developer
shortTitle: Create a codespace for a repo
ms.openlocfilehash: 409c946feda4ffbd3d9ab615b6ea07fabee3f530
ms.sourcegitcommit: 1f3bd126ca000982c538f1621d47722737740943
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 12/01/2022
ms.locfileid: '148188317'
---
## Sobre como criar um codespace para um repositório

{% data reusables.codespaces.ways-to-create-a-codespace %} Use as guias neste artigo para ver instruções de cada uma dessas maneiras de criar um codespace.

{% data reusables.codespaces.starting-new-project-template %} Para saber mais, confira "[Como criar um codespace com base em um modelo](/codespaces/developing-in-codespaces/creating-a-codespace-from-a-template)".

{% note %}

**Observação**: se você usar um IDE do JetBrains, poderá usar {% data variables.product.prodname_cli %} para criar um codespace. Depois, você poderá usar o aplicativo JetBrains Gateway para abrir o codespace em um IDE do JetBrains. Para obter mais informações, confira "[Como usar codespaces no IDE do JetBrains](/codespaces/developing-in-codespaces/using-github-codespaces-in-your-jetbrains-ide)".

{% endnote %}

Você pode usar os {% data variables.product.prodname_github_codespaces %} na sua conta pessoal do {% data variables.product.prodname_dotcom_the_website %}, com a cota de uso gratuito incluída por mês para contas nos planos Gratuito e Pro. {% data reusables.codespaces.codespaces-continue-by-paying %}

As organizações podem permitir que membros e colaboradores externos criem e usem codespaces às custas da organização. Para obter mais informações, confira "[Como habilitar {% data variables.product.prodname_github_codespaces %} para sua organização](/codespaces/managing-codespaces-for-your-organization/enabling-github-codespaces-for-your-organization)".

{% data reusables.codespaces.codespaces-are-personal %}

Se você criar um codespace com base em um repositório, o codespace será associado a um branch específico, que não poderá estar vazio. Você pode criar mais de um código de espaço por repositório ou até mesmo por branch.

{% data reusables.codespaces.you-can-see-all-your-codespaces %}

### O processo de criação do codespace

Ao criar um codespace, várias etapas acontecem para criar e conectar você ao seu ambiente de desenvolvimento:

- Etapa 1: A VM e o armazenamento são atribuídos ao seu codespace.
- Etapa 2: O contêiner é criado e seu repositório é clonado.
- Passo 3: Você pode conectar-se ao codespace.
- Etapa 4: O codespace continua com a configuração pós-criação.

Para obter mais informações sobre o que acontece quando você cria um codespace, confira "[Aprofundamento](/codespaces/getting-started/deep-dive)".

Para obter mais informações sobre o ciclo de vida de um codespace, confira "[Ciclo de vida dos codespaces](/codespaces/getting-started/the-codespace-lifecycle)".

Caso deseje usar ganchos do Git para seu codespace, configure os ganchos usando os [scripts de ciclo de vida de `devcontainer.json`](https://code.visualstudio.com/docs/remote/devcontainerjson-reference#_lifecycle-scripts), como `postCreateCommand`, durante a etapa 4. Como o contêiner de codespace é criado depois que o repositório é clonado, qualquer [diretório de modelo do Git](https://git-scm.com/docs/git-init#_template_directory) configurado na imagem de contêiner não se aplicará ao seu codespace. Os Hooks devem ser instalados depois que o codespace for criado. Para obter mais informações sobre como usar o `postCreateCommand`, consulte a [referência do `devcontainer.json`](https://code.visualstudio.com/docs/remote/devcontainerjson-reference#_devcontainerjson-properties) na documentação do {% data variables.product.prodname_vscode_shortname %}.

{% data reusables.codespaces.use-visual-studio-features %}

{% data reusables.codespaces.prebuilds-crossreference %}

## Como criar um codespace para um repositório

{% webui %}

{% data reusables.repositories.navigate-to-repo %}
1. No nome do repositório, use o menu suspenso "Branch", e selecione o branch para o qual você deseja criar um codespace.

   ![Menu suspenso Branch](/assets/images/help/codespaces/branch-drop-down.png)

1. Clique no botão **Código {% octicon "code" aria-label="The code icon" %}** e clique na guia **Codespaces**.

   ![Botão de codespace novo](/assets/images/help/codespaces/new-codespace-button.png)

   Se os codespaces desse repositório forem faturáveis para uma organização, uma mensagem será exibida abaixo do botão **Criar codespace no BRANCH** informando quem pagará pelo codespace.

1. Crie seu codespace, usando as opções padrão ou depois de configurar opções avançadas:
 
   * **Usar as opções padrão**

      Para criar um codespace usando as opções padrão, clique no sinal de adição ({% octicon "plus" aria-label="The plus icon" %}). Como alternativa, se no momento você não tiver nenhum codespace para esse repositório, clique em **Criar codespace no BRANCH**.

   * **Configurar opções**

      Para configurar opções avançadas para seu codespace, como um tipo de computador diferente ou um arquivo específico `devcontainer.json`:

      1. Clique nas reticências ( **...** ) no canto superior direito da guia **Codespaces** e selecione **Novo com opções**.

      ![Exibir o tipo de computador padrão](/assets/images/help/codespaces/default-machine-type.png)

      1. Na página de opções do codespace, escolha as opções da sua preferência nos menus suspensos.

         ![A página de opções do codespace](/assets/images/help/codespaces/advanced-options.png)

         {% note %}
      
         **Observações**
      
         * Você pode adicionar a página de opções aos favoritos para obter uma forma rápida de criar um codespace para esse repositório e esse branch.
         * A página [https://github.com/codespaces/new](https://github.com/codespaces/new) fornece uma forma rápida de criar um codespace para qualquer repositório e branch. Você pode acessar essa página rapidamente digitando `codespace.new` na barra de endereços do navegador.
         * Para obter mais informações sobre o arquivo `devcontainer.json`, confira "[Introdução aos contêineres de desenvolvimento](/codespaces/setting-up-your-project-for-codespaces/introduction-to-dev-containers#devcontainerjson)".
         * Para obter mais informações sobre tipos de computador, confira "[Como alterar o tipo de computador em seu codespace](/codespaces/customizing-your-codespace/changing-the-machine-type-for-your-codespace#about-machine-types)".
         * {% data reusables.codespaces.codespaces-machine-type-availability %}
      
         {% endnote %}

      1. Clique em **Criar codespace**.

{% endwebui %}
   
{% vscode %}

{% data reusables.codespaces.creating-a-codespace-in-vscode %}

{% endvscode %}
   
{% cli %}

{% data reusables.cli.cli-learn-more %}

Para criar um codespace, use o subcomando `gh codespace create`. 

```shell
gh codespace create 
```

Será solicitado que você escolha um repositório. Se os codespaces desse repositório forem faturáveis para uma organização ou para a empresa pai, uma mensagem será exibida abaixo informando quem pagará pelo codespace. Depois será solicitado que você escolha um branch, um arquivo de configuração do contêiner de desenvolvimento (se mais de um estiver disponível) e um tipo de computador (se mais de um estiver disponível).

Como alternativa, você pode usar sinalizadores para especificar algumas ou todas as opções:

```shell
gh codespace create -r OWNER/REPO -b BRANCH --devcontainer-path PATH -m MACHINE-TYPE
```

Neste exemplo, substitua `owner/repo` pelo identificador do repositório. Substitua `branch` pelo nome do branch ou pelo hash do SHA completo do commit do qual você deseja fazer check-out inicialmente no codespace. Se você usar o sinalizador `-r` sem o sinalizador `b`, o codespace será criado com base no branch padrão.

Substitua `path` pelo caminho para o arquivo de configuração do contêiner de desenvolvimento que você deseja usar para o novo codespace. Se você omitir esse sinalizador e mais de um tipo de máquina estiver disponível, deverá escolher uma na lista. Para saber mais sobre contêineres de desenvolvimento, confira "[Introdução aos contêineres de desenvolvimento](/codespaces/setting-up-your-project-for-codespaces/introduction-to-dev-containers)".

Substitua `machine-type` por um identificador válido para um tipo de computador disponível. Os identificadores são cadeias de caracteres como: `basicLinux32gb` e `standardLinux32gb`. O tipo de máquina que está disponível depende do repositório, da sua conta pessoal e da sua localização. Se você digitar um tipo de máquina inválido ou indisponível, os tipos disponíveis serão mostrados na mensagem de erro. Se você omitir este sinalizador e mais de um tipo de máquina estiver disponível, será solicitado que você escolha uma na lista.

Para obter detalhes completos das opções para esse comando, confira [o manual do {% data variables.product.prodname_cli %}](https://cli.github.com/manual/gh_codespace_create).

{% endcli %}

## Leitura adicional
- "[Como abrir um codespace existente](/codespaces/developing-in-codespaces/opening-an-existing-codespace)"
- "[Como adicionar uma notificação 'Abrir nos {% data variables.product.prodname_github_codespaces %}'](/codespaces/setting-up-your-project-for-codespaces/adding-a-codespaces-badge)"
