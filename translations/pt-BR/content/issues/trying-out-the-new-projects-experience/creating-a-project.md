---
title: Criando um projeto (beta)
intro: 'Aprenda a criar um projeto, preencher e adicionar campos personalizados.'
allowTitleToDifferFromFilename: true
miniTocMaxHeadingLevel: 3
versions:
  fpt: '*'
  ghec: '*'
type: tutorial
topics:
  - Projects
---

Os projetos são uma coleção personalizável de itens que se mantêm atualizados com os dados do {% data variables.product.company_short %}. Seus projetos podem rastrear problemas, pull requests, e ideias que você anotar. Você pode adicionar campos personalizados e criar visualizações para fins específicos.

{% data reusables.projects.projects-beta %}

## Criando um projeto

### Criando um projeto de organização

{% data reusables.projects.create-project %}

### Criando um projeto de usuário

{% data reusables.projects.create-user-project %}

## Atualizando a descrição e o README do seu projeto

{% data reusables.projects.project-description %}

## Adicionando itens ao seu projeto

Seu projeto pode acompanhar os rascunhos de problemas, problemas e pull requests.

### Criando problemas de rascunho

Os rascunhos são úteis para capturar ideias rapidamente.

1. Coloque seu cursor na linha inferior do projeto, ao lado do {% octicon "plus" aria-label="plus icon" %}.
1. Digite sua ideia e, em seguida, pressione **Enter**.
1. Para adicionar texto, clique no título do problema do rascunho. Na caixa de entrada do markdown que será exibida, digite o texto para o texto do problema do rascunho e clique em **Salvar**.

Os problemas do rascunho podem ter um título, texto, responsável e quaisquer campos personalizados do seu projeto. Para preencher o repositório, etiquetas ou marcos para o rascunho de um problema, você deverá primeiro converter o rascunho do problema em um problema. Para obter mais informações, consulte "[Convertendo rascunhos de problema em problemas](#converting-draft-issues-to-issues). "

{% note %}

**Observação**: Os usuários não receberão notificações quando forem atribuídos ou mencionados em um rascunho de problema, a menos que o rascunho do probelam seja convertido em um problema.

{% endnote %}

### Problemas e pull requests

#### Cole a URL de um problema ou pull request

1. Coloque seu cursor na linha inferior do projeto, ao lado do {% octicon "plus" aria-label="plus icon" %}.
1. Cole a URL do problema ou pull request.

#### Pesquisando um problema ou pull request

1. Coloque seu cursor na linha inferior do projeto, ao lado do {% octicon "plus" aria-label="plus icon" %}.
2. Digite <kbd>#</kbd>.
3. Selecione o repositório onde está localizado o pull request ou problema. Você pode digitar parte do nome do repositório para restringir suas opções.
4. Selecione o problema ou pull request. Você pode digitar parte do título para restringir suas opções.

#### Adicionando vários problemas ou pull requests de um repositório

1. No {% data variables.product.product_location %}, acesse o repositório que contém os problemas ou pull requests que você deseja adicionar ao projeto.
{% data reusables.repositories.sidebar-issue-pr %}
1. À esquerda de cada título do problema, selecione os problemas que você deseja adicionar ao seu projeto. ![Captura de tela que mostra caixa de seleção para selecionar problema ou pull request](/assets/images/help/issues/select-issue-checkbox.png)
1. Opcionalmente, para selecionar cada problema ou pull request na página, na parte superior da lista de problemas ou pull requests, selecione tudo. ![Captura de tela que mostra caixa de seleção para selecionar todos na tela](/assets/images/help/issues/select-all-checkbox.png)
1. Acima da lista de problemas ou pull requests, clique em **Projetos (beta)**. ![Captura de tela que mostra caixa de seleção para selecionar todos na tela](/assets/images/help/issues/projects-beta-assign-button.png)
1. Clique nos projetos aos quais você deseja adicionar os problemas selecionados ou pull requests. ![Captura de tela que mostra caixa de seleção para selecionar todos na tela](/assets/images/help/issues/projects-beta-assign-dropdown.png)

#### Atribuindo um projeto de dentro de um problema ou pull request

1. Acesse o problema ou pull request que você deseja adicionar a um projeto.
2. Na barra lateral, clique em **Projetos**.
3. Selecione o projeto ao qual você deseja adicionar o problema ou pull request.
4. Opcionalmente, preencha os campos personalizados.

   ![Barra lateral do projeto](/assets/images/help/issues/project_side_bar.png)

## Convertendo rascunhos de problemas em problemas

No layout de tabela:

1. Clique em {% octicon "triangle-down" aria-label="the item menu" %} no rascunho do problema que você deseja converter.
2. Selecione **Converter para problema**.
3. Selecione o repositório ao qual você deseja adicionar o problema.
4. Como alternativa, edite os campos `etiquetas`, `marco` ou `repository` do rascunho do problema que você deseja converter.

Layout do quadro:

1. Clique em {% octicon "kebab-horizontal" aria-label="the item menu" %} no rascunho do problema que você deseja converter.
2. Selecione **Converter para problema**.
3. Selecione o repositório ao qual você deseja adicionar o problema.

## Removendo itens do seu projeto

Você pode arquivar um item para manter o contexto sobre o item no projeto, mas removê-lo das visualizações do projeto. Você pode excluir um item para removê-lo do projeto completamente.

1. Selecione o(s) item(ns) para arquivar ou excluir. Para selecionar múltiplos itens, siga um dos passos a seguir:
     - <kbd>Command</kbd>+Click (Mac) ou <kbd>Ctrl</kbd>+Click (Windows/Linux) em cada item.
     - Selecione um item e, em seguida, <kbd>Shift</kbd>+<kbd>↑</kbd> ou <kbd>Shift</kbd>+<kbd>↓</kbd>para selecionar itens adicionais acima ou abaixo do item selecionado inicialmente.
     - Selecione um item e, em seguida, <kbd>Shift</kbd>+ clique em outro item para selecionar todos os itens entre dois itens.
     - Insira <kbd>Command</kbd>+<kbd>A</kbd> (Mac) ou <kbd>Ctrl</kbd>+<kbd>A</kbd> (Windows/Linux) para selecionar todos os itens em uma coluna em um layout de tabuleiro ou em um layout de tabela.
2. Para arquivar todos os itens selecionados, digite <kbd>E</kbd>. Para excluir todos os itens selecionados, digite <kbd>Del</kbd>. Como alternativa, selecione o {% octicon "triangle-down" aria-label="the item menu" %} (no layout de tabela) ou o {% octicon "kebab-horizontal" aria-label="the item menu" %} (no layout do quadro) e, em seguida, selecione a ação desejada.

Você pode restaurar itens arquivados, mas não itens excluídos. Para obter mais informações, consulte [Restaurando itens arquivados](#restoring-archived-items).

## Restaurando itens arquivados

1. Navigate to your project.
1. No canto superior direito, clique em {% octicon "kebab-horizontal" aria-label="the kebab icon" %}.
1. No menu, clique em **Itens arquivados**.
1. Opcionalmente, para filtrar os itens arquivados exibidos, digite seu filtro na caixa de texto acima da lista de itens. Para obter mais informações sobre os filtros disponíveis, consulte "[Filtrando projetos (beta)](/issues/trying-out-the-new-projects-experience/filtering-projects)".

   ![Captura de tela que mostra o campo para filtrar itens arquivados](/assets/images/help/issues/filter-archived-items.png)

1. À esquerda de cada item de título, selecione os itens que deseja restaurar.

   ![Captura de tela que mostra as caixas de seleção próximas aos itens arquivados](/assets/images/help/issues/select-archived-item.png)

1. Para restaurar os itens selecionados, acima da lista de itens, clique em **Restaurar**.

   ![Captura de tela que mostra o botão "Restaurar"](/assets/images/help/issues/restore-archived-item-button.png)

## Adicionando campos

Como os valores do campo mudam, eles são sincronizados automaticamente para que o seu projeto e os itens que ele rastreia fiquem atualizados.

### Mostrando campos existentes

O seu projeto rastreia informações atualizadas sobre problemas e pull requests, incluindo todas as alterações no título, responsáveis, etiquetas, marcos, repositórios, revisores e pull requests vinculados. Quando seu projeto é inicializado, são exibidos "título" e "responsáveis". Os outros campos permanecem ocultos. Você pode alterar a visibilidade desses campos no seu projeto.

1. {% data reusables.projects.open-command-palette %}
2. Comece a digitar "mostrar".
3. Selecione o comando desejado (por exemplo: "Mostrar: Repositório").

Como alternativa, você pode fazer isso na interface do usuário:

1. Clique em {% octicon "plus" aria-label="the plus icon" %} no cabeçalho mais à direita. Será exibido um menu suspenso com os campos do projeto. ![Exibir ou ocultar campos](/assets/images/help/issues/projects_fields_menu.png)
2. Selecione o(s) campo(s) que você deseja exibir ou ocultar. Um {% octicon "check" aria-label="check icon" %} indica quais campos serão exibidos.

### Adicionando campos personalizados

Você pode adicionar campos personalizados ao seu projeto. Campos personalizados serão exibidos na barra lateral de problemas e pull requests no projeto.

Os campos personalizados podem ser texto, número, data, seleção única ou iteração:

- Texto: O valor pode ser qualquer texto.
- Número: O valor deve ser um número.
- Data: O valor deve ser uma data.
- Seleção única: O valor deve ser selecionado a partir de um conjunto de valores especificados.
- Iteração: O valor deve ser selecionado a partir de um conjunto de intervalos de datas (iterações). As iterações anteriores são automaticamente marcadas como "concluídas", e a iteração que cobre o intervalo de datas atual é marcada como "atual". Para obter mais informações, consulte "[Gerenciando iterações nos projetos](/issues/trying-out-the-new-projects-experience/managing-iterations). "

1. {% data reusables.projects.open-command-palette %} Comece a digitar qualquer parte de "Criar novo campo". Quando "Criar novo campo" for exibido na paleta de comandos, selecione-o.
2. Como alternativa, clique em {% octicon "plus" aria-label="the plus icon" %} no cabeçalho do campo mais à direita. Será exibido um menu suspenso com os campos do projeto. Clique em **Novo campo**.
3. Uma janela pop-up irá aparecer para inserir informações sobre o novo campo. ![Novo campo](/assets/images/help/issues/projects_new_field.png)
4. Na caixa de texto, digite um nome para o novo campo.
5. Selecione o menu suspenso e clique no tipo desejado.
6. Se você especificou **Seleção única** como o tipo, insira as opções.
7. Se você especificou **Iteração** como o tipo, digite a data de início da primeira iteração e a duração da iteração. Três iterações são criadas automaticamente, e você pode adicionar iterações adicionais na página de configurações do projeto.

Posteriormente, você poderá editar as opções de seleção única e iteração de campos.

{% data reusables.projects.project-settings %}
1. Em **Campos**, selecione o campo que deseja editar.
1. Para campos de seleção única, você pode adicionar, excluir ou reordenar as opções.
1. Para campos de iteração, você pode adicionar ou excluir as iterações, alterar nomes da iteração e alterar a data e a duração de início da iteração.

   Para obter mais informações sobre como modificar campos de iteração, consulte "[Gerenciando iterações nos projetos](/issues/trying-out-the-new-projects-experience/managing-iterations).

## Personalizando as suas visualizações

Você pode ver seu projeto como uma tabela ou quadro, agrupar itens por campo, filtrar itens e muito mais. Para obter mais informações, consulte "[Personalizar as visualizações do seu projeto (beta)](/issues/trying-out-the-new-projects-experience/customizing-your-project-views)".

## Configurando a automação integrada

{% data reusables.projects.about-workflows %}

Você pode habilitar ou desabilitar os fluxos de trabalho internos para o seu projeto.

{% data reusables.projects.enable-basic-workflow %}

## Adicionando seu projeto a um repositório

Você pode listar projetos relevantes em um repositório. Você só pode listar projetos que pertencem ao mesmo usuário ou organização proprietária do repositório.

Para que os participantes do repositório vejam um projeto listado em um repositório, eles deverão ter visibilidade sobre o projeto. Para obter mais informações, consulte "[Gerenciando a visibilidade dos seus projetos (beta)](/issues/trying-out-the-new-projects-experience/managing-the-visibility-of-your-projects)" e "[Gerenciando o acesso a projetos (beta)](/issues/trying-out-the-new-projects-experience/managing-access-to-projects)".

1. No {% data variables.product.prodname_dotcom %}, navegue até a página principal do seu repositório.
1. Clique em {% octicon "table" aria-label="the project icon" %} **Projetos**.
1. Clique em **Projetos (Beta)** na barra lateral.
1. Clique **Adicionar projeto**.
1. Na barra de pesquisa que aparece, pesquise por projetos pertentencentes ao mesmo usuário ou organização proprietária do repositório.
1. Clique em um projeto para listá-lo no seu repositório.
