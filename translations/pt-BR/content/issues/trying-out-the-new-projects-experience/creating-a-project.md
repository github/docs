---
title: Criando um projeto (beta)
intro: Aprenda a criar um projeto, preencher e adicionar campos personalizados.
allowTitleToDifferFromFilename: true
miniTocMaxHeadingLevel: 3
versions:
  fpt: '*'
  ghec: '*'
type: tutorial
topics:
- Projects
ms.openlocfilehash: 3fa7e52f09f3be67a036000b13f484b29852a741
ms.sourcegitcommit: 22d665055b1bee7a5df630385e734e3a149fc720
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 07/13/2022
ms.locfileid: "145126578"
---
Os projetos são uma coleção personalizável de itens que se mantêm atualizados com os dados do {% data variables.product.company_short %}. Seus projetos podem rastrear problemas, pull requests, e ideias que você anotar. Você pode adicionar campos personalizados e criar visualizações para fins específicos.

{% data reusables.projects.projects-beta %}

## <a name="creating-a-project"></a>Criando um projeto

### <a name="creating-an-organization-project"></a>Criando um projeto de organização

{% data reusables.projects.create-project %}

### <a name="creating-a-user-project"></a>Criando um projeto de usuário

{% data reusables.projects.create-user-project %}

## <a name="updating-your-project-description-and-readme"></a>Atualizando a descrição e o README do seu projeto

{% data reusables.projects.project-description %}

## <a name="adding-items-to-your-project"></a>Adicionando itens ao seu projeto

Seu projeto pode acompanhar os rascunhos de problemas, problemas e pull requests.

### <a name="creating-draft-issues"></a>Criando problemas de rascunho

Os rascunhos são úteis para capturar ideias rapidamente.

1. Coloque seu cursor na linha inferior do projeto, ao lado do {% octicon "plus" aria-label="plus icon" %}.
1. Digite sua ideia e pressione **ENTER**.
1. Para adicionar texto, clique no título do problema do rascunho. Na caixa de entrada markdown exibida, insira o texto do corpo do problema de rascunho e clique em **Salvar**.

Os problemas do rascunho podem ter um título, texto, responsável e quaisquer campos personalizados do seu projeto. Para preencher o repositório, etiquetas ou marcos para o rascunho de um problema, você deverá primeiro converter o rascunho do problema em um problema. Para obter mais informações, confira "[Como converter problemas de rascunho em problemas](#converting-draft-issues-to-issues)".

{% note %}

**Observação**: os usuários não receberão notificações quando forem atribuídos ou mencionados em um problema de rascunho, a menos que o problema de rascunho seja convertido em um problema.

{% endnote %}

### <a name="issues-and-pull-requests"></a>Problemas e pull requests

#### <a name="paste-the-url-of-an-issue-or-pull-request"></a>Cole a URL de um problema ou pull request

1. Coloque seu cursor na linha inferior do projeto, ao lado do {% octicon "plus" aria-label="plus icon" %}.
1. Cole a URL do problema ou pull request.

#### <a name="searching-for-an-issue-or-pull-request"></a>Pesquisando um problema ou pull request

1. Coloque seu cursor na linha inferior do projeto, ao lado do {% octicon "plus" aria-label="plus icon" %}.
2. Digite <kbd>#</kbd> .
3. Selecione o repositório onde está localizado o pull request ou problema. Você pode digitar parte do nome do repositório para restringir suas opções.
4. Selecione o problema ou pull request. Você pode digitar parte do título para restringir suas opções.

#### <a name="adding-multiple-issues-or-pull-requests-from-a-repository"></a>Adicionar vários problemas ou solicitações de pull de um repositório

1. Em {% data variables.product.product_location %}, navegue até o repositório que contém os problemas ou solicitações de pull que você deseja adicionar ao seu projeto.
{% data reusables.repositories.sidebar-issue-pr %}
1. À esquerda de cada título de problema, selecione os problemas que você deseja adicionar ao seu projeto.
  ![Captura de tela mostrando a caixa de seleção para selecionar o problema ou a solicitação de pull](/assets/images/help/issues/select-issue-checkbox.png)
1. Opcionalmente, para selecionar cada problema ou solicitação de pull na página, na parte superior da lista de problemas ou solicitações de pull, selecione todos. 
  ![Captura de tela mostrando a caixa de seleção para selecionar tudo na tela](/assets/images/help/issues/select-all-checkbox.png)
1. Acima da lista de problemas ou solicitações de pull, clique em **Projetos (beta)** . 
  ![Captura de tela mostrando a caixa de seleção para selecionar tudo na tela](/assets/images/help/issues/projects-beta-assign-button.png)
1. Clique nos projetos aos quais você deseja adicionar os problemas selecionados ou efetuar solicitações de pull.
  ![Captura de tela mostrando a caixa de seleção para selecionar tudo na tela](/assets/images/help/issues/projects-beta-assign-dropdown.png)

#### <a name="assigning-a-project-from-within-an-issue-or-pull-request"></a>Atribuindo um projeto de dentro de um problema ou pull request

1. Acesse o problema ou pull request que você deseja adicionar a um projeto.
2. Na barra lateral, clique em **Projetos**.
3. Selecione o projeto ao qual você deseja adicionar o problema ou pull request.
4. Opcionalmente, preencha os campos personalizados.

   ![Barra lateral do projeto](/assets/images/help/issues/project_side_bar.png)

## <a name="converting-draft-issues-to-issues"></a>Convertendo rascunhos de problemas em problemas

No layout de tabela:

1. Clique em {% octicon "triangle-down" aria-label="the item menu" %} no rascunho do problema que você deseja converter.
2. Escolha **Converter em problema**.
3. Selecione o repositório ao qual você deseja adicionar o problema.
4. Como alternativa, edite os campos `labels`, `milestone` ou `repository` do problema de rascunho que deseja converter.

Layout do quadro:

1. Clique em {% octicon "kebab-horizontal" aria-label="the item menu" %} no rascunho do problema que você deseja converter.
2. Escolha **Converter em problema**.
3. Selecione o repositório ao qual você deseja adicionar o problema.

## <a name="removing-items-from-your-project"></a>Removendo itens do seu projeto

Você pode arquivar um item para manter o contexto sobre o item no projeto, mas removê-lo das visualizações do projeto. Você pode excluir um item para removê-lo do projeto completamente.

1. Selecione o(s) item(ns) para arquivar ou excluir. Para selecionar múltiplos itens, siga um dos passos a seguir:
     - <kbd>Command</kbd> + clique (Mac) ou <kbd>CTRL</kbd> + clique (Windows/Linux) em cada item.
     - Selecione um item e pressione <kbd>SHIFT</kbd>+<kbd>↑</kbd> ou <kbd>SHIFT</kbd>+<kbd>↓</kbd> para escolher itens adicionais acima ou abaixo do item selecionado inicialmente.
     - Selecione um item e pressione <kbd>SHIFT</kbd> + clique em outro item para selecionar todos os itens entre os dois itens.
     - Insira <kbd>Command</kbd>+<kbd>A</kbd> (Mac) ou <kbd>CTRL</kbd>+<kbd>A</kbd> (Windows/Linux) para selecionar todos os itens em uma coluna em um layout de quadro ou todos os itens em um layout de tabela.
2. Para arquivar todos os itens selecionados, insira <kbd>E</kbd>. Para excluir todos os itens selecionados, insira <kbd>Del</kbd>. Como alternativa, selecione o {% octicon "triangle-down" aria-label="the item menu" %} (no layout de tabela) ou {% octicon "kebab-horizontal" aria-label="the item menu" %} (no layout de quadro) e escolha a ação desejada.

Você pode restaurar itens arquivados, mas não itens excluídos. Para obter mais informações, confira [Como restaurar itens arquivados](#restoring-archived-items).

## <a name="restoring-archived-items"></a>Restaurando itens arquivados

1. Procure seu projeto.
1. Clique em {% octicon "kebab-horizontal" aria-label="the kebab icon" %}.
1. No menu, clique em **Itens arquivados**.
1. Opcionalmente, para filtrar os itens arquivados exibidos, digite o filtro na caixa de texto acima da lista de itens. Para obter mais informações sobre os filtros disponíveis, confira "[Filtragem de projetos (beta)](/issues/trying-out-the-new-projects-experience/filtering-projects)".

   ![Captura de tela mostrando o campo para filtrar itens arquivados](/assets/images/help/issues/filter-archived-items.png)
   
1. À esquerda de cada título de item, selecione os itens que você deseja restaurar.

   ![Captura de tela mostrando caixas de seleção ao lado de itens arquivados](/assets/images/help/issues/select-archived-item.png)
   
1. Para restaurar os itens selecionados, acima da lista de itens, clique em **Restaurar**. 

   ![Captura de tela mostrando o botão "Restaurar"](/assets/images/help/issues/restore-archived-item-button.png)

## <a name="adding-fields"></a>Adicionar campos

Como os valores do campo mudam, eles são sincronizados automaticamente para que o seu projeto e os itens que ele rastreia fiquem atualizados.

### <a name="showing-existing-fields"></a>Mostrando campos existentes

O seu projeto rastreia informações atualizadas sobre problemas e pull requests, incluindo todas as alterações no título, responsáveis, etiquetas, marcos, repositórios, revisores e pull requests vinculados. Quando seu projeto é inicializado, são exibidos "título" e "responsáveis". Os outros campos permanecem ocultos. Você pode alterar a visibilidade desses campos no seu projeto.

1. {% data reusables.projects.open-command-palette %}
2. Comece a digitar "mostrar".
3. Selecione o comando desejado (por exemplo: "Mostrar: Repositório").

Como alternativa, você pode fazer isso na interface do usuário:

1. Clique em {% octicon "plus" aria-label="the plus icon" %} no cabeçalho mais à direita. Será exibido um menu suspenso com os campos do projeto.
   ![Mostrar ou ocultar campos](/assets/images/help/issues/projects_fields_menu.png)
2. Selecione o(s) campo(s) que você deseja exibir ou ocultar. Um {% octicon "check" aria-label="check icon" %} indica quais campos serão exibidos.

### <a name="adding-custom-fields"></a>Adicionando campos personalizados

Você pode adicionar campos personalizados ao seu projeto. Campos personalizados serão exibidos na barra lateral de problemas e pull requests no projeto.

Os campos personalizados podem ser texto, número, data, seleção única ou iteração:

- Texto: O valor pode ser qualquer texto.
- Número: O valor deve ser um número.
- Data: O valor deve ser uma data.
- Seleção única: O valor deve ser selecionado a partir de um conjunto de valores especificados.
- Iteração: O valor deve ser selecionado a partir de um conjunto de intervalos de datas (iterações). As iterações anteriores são automaticamente marcadas como "concluídas", e a iteração que cobre o intervalo de datas atual é marcada como "atual". Para obter mais informações, confira "[Como gerenciar iterações em projetos](/issues/trying-out-the-new-projects-experience/managing-iterations)".

1. {% data reusables.projects.open-command-palette %} Comece a digitar qualquer parte de "Criar novo campo". Quando "Criar novo campo" for exibido na paleta de comandos, selecione-o.
2. Como alternativa, clique em {% octicon "plus" aria-label="the plus icon" %} no cabeçalho do campo mais à direita. Será exibido um menu suspenso com os campos do projeto. Clique em **Novo campo**.
3. Uma janela pop-up irá aparecer para inserir informações sobre o novo campo.
   ![Novo campo](/assets/images/help/issues/projects_new_field.png)
4. Na caixa de texto, digite um nome para o novo campo.
5. Selecione o menu suspenso e clique no tipo desejado.
6. Se você especificou **Seleção única** como o tipo, insira as opções.
7. Se você especificou **Iteração** como o tipo, insira a data de início da primeira iteração e a duração dela. Três iterações são criadas automaticamente, e você pode adicionar iterações adicionais na página de configurações do projeto.

Você também pode editar seus campos personalizados.

{% data reusables.projects.project-settings %}
1. Em **Campos**, selecione o campo que deseja editar.
1. Para campos de seleção única, você pode adicionar, excluir ou reordenar as opções.
1. Para campos de iteração, você pode adicionar ou excluir as iterações, alterar nomes da iteração e alterar a data e a duração de início da iteração.

   Para obter mais informações sobre como modificar campos de iteração, confira "[Como gerenciar iterações em projetos](/issues/trying-out-the-new-projects-experience/managing-iterations)".

## <a name="customizing-your-views"></a>Personalizando as suas visualizações

Você pode ver seu projeto como uma tabela ou quadro, agrupar itens por campo, filtrar itens e muito mais. Para obter mais informações, confira "[Como personalizar as exibições do projeto (beta)](/issues/trying-out-the-new-projects-experience/customizing-your-project-views)".

## <a name="configuring-built-in-automation"></a>Configurando a automação integrada

{% data reusables.projects.about-workflows %}

Você pode habilitar ou desabilitar os fluxos de trabalho internos para o seu projeto.

{% data reusables.projects.enable-basic-workflow %}

## <a name="adding-your-project-to-a-repository"></a>Adicionando seu projeto a um repositório

Você pode listar projetos relevantes em um repositório. Você só pode listar projetos que pertencem ao mesmo usuário ou organização proprietária do repositório.

Para que os participantes do repositório vejam um projeto listado em um repositório, eles deverão ter visibilidade sobre o projeto. Para obter mais informações, confira "[Como gerenciar a visibilidade dos seus projetos (beta)](/issues/trying-out-the-new-projects-experience/managing-the-visibility-of-your-projects)" e "[Como gerenciar o acesso aos projetos (beta)](/issues/trying-out-the-new-projects-experience/managing-access-to-projects)".

1. No {% data variables.product.prodname_dotcom %}, navegue até a página principal do seu repositório.
1. Clique em {% octicon "table" aria-label="the project icon" %} **Projetos**.
1. Clique em **Projetos (Beta)** na barra lateral.
1. Clique em **Adicionar projeto**.
1. Na barra de pesquisa que aparece, pesquise por projetos pertentencentes ao mesmo usuário ou organização proprietária do repositório.
1. Clique em um projeto para listá-lo no seu repositório.
