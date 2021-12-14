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

### Creating an organization project

{% data reusables.projects.create-project %}

### Creating a user project

{% data reusables.projects.create-user-project %}

## Adicionando itens ao seu projeto

Seu projeto pode acompanhar os rascunhos de problemas, problemas e pull requests.

### Criando problemas de rascunho

Os rascunhos são úteis para capturar ideias rapidamente.

1. Coloque seu cursor na linha inferior do projeto, ao lado do {% octicon "plus" aria-label="plus icon" %}.
2. Digite sua ideia e, em seguida, pressione **Enter**.

You can convert draft issues into issues. For more information, see [Converting draft issues to issues](#converting-draft-issues-to-issues).

### Problemas e pull requests

#### Cole a URL de um problema ou pull request

1. Coloque seu cursor na linha inferior do projeto, ao lado do {% octicon "plus" aria-label="plus icon" %}.
1. Cole a URL do problema ou pull request.

#### Pesquisando um problema ou pull request

1. Coloque seu cursor na linha inferior do projeto, ao lado do {% octicon "plus" aria-label="plus icon" %}.
2. Digite `#`.
3. Selecione o repositório onde está localizado o pull request ou problema. Você pode digitar parte do nome do repositório para restringir suas opções.
4. Selecione o problema ou pull request. Você pode digitar parte do título para restringir suas opções.

#### Atribuindo um projeto de dentro de um problema ou pull request

1. Acesse o problema ou pull request que você deseja adicionar a um projeto.
2. Na barra lateral, clique em **Projetos**.
3. Selecione o projeto ao qual você deseja adicionar o problema ou pull request.
4. Opcionalmente, preencha os campos personalizados.

   ![Barra lateral do projeto](/assets/images/help/issues/project_side_bar.png)

## Converting draft issues to issues

In table layout:

1. Click the {% octicon "triangle-down" aria-label="the item menu" %} on the draft issue that you want to convert.
2. Select **Convert to issue**.
3. Select the repository that you want to add the issue to.
4. Alternatively, edit the `assignee`, `labels`, `milestone`, or `repository` fields of the draft issue that you want to convert.

In board layout:

1. Click the {% octicon "kebab-horizontal" aria-label="the item menu" %} on the draft issue that you want to convert.
2. Select **Convert to issue**.
3. Select the repository that you want to add the issue to.

## Removing items from your project

You can archive an item to keep the context about the item in the project but remove it from the project views. You can delete an item to remove it from the project entirely.

1. Select the item(s) to archive or delete. To select multiple items, do one of the following:
     - `cmd + click` (Mac) or `ctrl + click` (Windows/Linux) each item.
     - Select an item then `shift + arrow-up` or `shift + arrow-down` to select additional items above or below the intitially selected item.
     - Select an item then `shift + click` another item to select all items between the two items.
     - Enter `cmd + a` (Mac) or `ctrl + a` (Windows/Linux) to select all items in a column in a board layout or all items in a table layout.
2. To archive all selected items, enter `e`. To delete all selected items, enter `del`. Alternatively, select the {% octicon "triangle-down" aria-label="the item menu" %} (in table layout) or the {% octicon "kebab-horizontal" aria-label="the item menu" %} (in board layout), then select the desired action.

You can restore archived items but not deleted items. For more information, see [Restoring archived items](#restoring-archived-items).

## Restoring archived items

To restore an archived item, navigate to the issue or pull request. In the project side bar on the issue or pull request, click **Restore** for the project that you want to restore the item to. Draft issues cannot be restored.

## Adicionando campos

Como os valores do campo mudam, eles são sincronizados automaticamente para que o seu projeto e os itens que ele rastreia fiquem atualizados.

### Mostrando campos existentes

O seu projeto rastreia informações atualizadas sobre issues e pull requests, incluindo todas as alterações no título, responsáveis, etiquetas, marcos e repositório. Quando seu projeto é inicializado, são exibidos "título" e "responsáveis". Os outros campos permanecem ocultos. Você pode alterar a visibilidade desses campos no seu projeto.

1. {% data reusables.projects.open-command-palette %}
2. Comece a digitar "mostrar".
3. Selecione o comando desejado (por exemplo: "Mostrar: Repositório").

Como alternativa, você pode fazer isso na interface do usuário:

1. Clique em {% octicon "plus" aria-label="the plus icon" %} no cabeçalho mais à direita. Será exibido um menu suspenso com os campos do projeto. ![Exibir ou ocultar campos](/assets/images/help/issues/projects_fields_menu.png)
2. Selecione o(s) campo(s) que você deseja exibir ou ocultar. Um {% octicon "check" aria-label="check icon" %} indica quais campos serão exibidos.

### Adicionando campos personalizados

Você pode adicionar campos personalizados ao seu projeto. Campos personalizados serão exibidos na barra lateral de problemas e pull requests no projeto.

Custom fields can be text, number, date, single select, or iteration:

- Text: The value can be any text.
- Number: The value must be a number.
- Date: The value must be a date.
- Single select: The value must be selected from a set of specified values.
- Iteration: The value must be selected from a set of date ranges (iterations). Iterations in the past are automatically marked as "completed", and the iteration covering the current date range is marked as "current".

1. {% data reusables.projects.open-command-palette %} Comece a digitar qualquer parte de "Criar novo campo". Quando "Criar novo campo" for exibido na paleta de comandos, selecione-o.
2. Como alternativa, clique em {% octicon "plus" aria-label="the plus icon" %} no cabeçalho do campo mais à direita. Será exibido um menu suspenso com os campos do projeto. Clique em **Novo campo**.
3. Uma janela pop-up irá aparecer para inserir informações sobre o novo campo. ![Novo campo](/assets/images/help/issues/projects_new_field.png)
4. Na caixa de texto, digite um nome para o novo campo.
5. Selecione o menu suspenso e clique no tipo desejado.
6. If you specified **Single select** as the type, enter the options.
7. If you specified **Iteration** as the type, enter the start date of the first iteration and the duration of the iteration. Three iterations are automatically created, and you can add additional iterations on the project's settings page.

You can later edit the drop down options for single select and iteration fields.

{% data reusables.projects.project-settings %}
1. Under **Fields**, select the field that you want to edit.
1. For single select fields, you can add, delete, or reorder the options.
2. For iteration fields, you can add or delete iterations, change iteration names, and change the start date and duration of the iteration.

## Customizing your views

Você pode ver seu projeto como uma tabela ou quadro, agrupar itens por campo, filtrar itens e muito mais. Para obter mais informações, consulte "[Personalizar as visualizações do seu projeto (beta)](/issues/trying-out-the-new-projects-experience/customizing-your-project-views)".

## Configuring built-in automation

{% data reusables.projects.about-workflows %}

You can enable or disable the built-in workflows for your project.

{% data reusables.projects.enable-basic-workflow %}
