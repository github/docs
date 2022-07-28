---
title: 'Adding items to your {% data variables.projects.project_v2 %}'
shortTitle: Adding items
intro: 'Learn how to add pull requests, issues, and draft issues to your projects individually or in bulk.'
miniTocMaxHeadingLevel: 4
versions:
  feature: projects-v2
type: tutorial
topics:
  - Projects
allowTitleToDifferFromFilename: true
---

Seu projeto pode acompanhar os rascunhos de problemas, problemas e pull requests.

{% note %}

**Note:** A project can contain a maximum of 1,200 items and 10,000 archived items.

{% endnote %}

### Adding issues and pull requests to a project

#### Pasting the URL of an issue or pull request

{% data reusables.projects.add-item-via-paste %}

#### Pesquisando um problema ou pull request

{% data reusables.projects.add-item-bottom-row %}
2. Digite <kbd>#</kbd>.
3. Selecione o repositório onde está localizado o pull request ou problema. Você pode digitar parte do nome do repositório para restringir suas opções. ![Screenshot showing pasting an issue URL to add it to the project](/assets/images/help/projects-v2/add-item-select-repo.png)
4. Selecione o problema ou pull request. Você pode digitar parte do título para restringir suas opções. ![Screenshot showing pasting an issue URL to add it to the project](/assets/images/help/projects-v2/add-item-select-issue.png)

#### Bulk adding issues and pull requests

1. In the bottom row of the project, click {% octicon "plus" aria-label="plus icon" %}. ![Screenshot showing + button at the bottom of the project](/assets/images/help/projects-v2/omnibar-add.png)
1. Click **Add item from repository**. ![Screenshot showing "add item from repository" menu item](/assets/images/help/projects-v2/add-bulk-menu-item.png)
{% data reusables.projects.bulk-add %}

#### Adicionando vários problemas ou pull requests de um repositório

1. No {% data variables.product.product_location %}, acesse o repositório que contém os problemas ou pull requests que você deseja adicionar ao projeto.
{% data reusables.repositories.sidebar-issue-pr %}
1. À esquerda de cada título do problema, selecione os problemas que você deseja adicionar ao seu projeto. ![Captura de tela que mostra caixa de seleção para selecionar problema ou pull request](/assets/images/help/issues/select-issue-checkbox.png)
1. Opcionalmente, para selecionar cada problema ou pull request na página, na parte superior da lista de problemas ou pull requests, selecione tudo. ![Captura de tela que mostra caixa de seleção para selecionar todos na tela](/assets/images/help/issues/select-all-checkbox.png)
1. Above the list of issues or pull requests, click **Projects**. ![Screenshot showing projects option](/assets/images/help/projects-v2/issue-index-project-menu.png)
1. Clique nos projetos aos quais você deseja adicionar os problemas selecionados ou pull requests. ![Captura de tela que mostra caixa de seleção para selecionar todos na tela](/assets/images/help/projects-v2/issue-index-select-project.png)

#### Atribuindo um projeto de dentro de um problema ou pull request

1. Acesse o problema ou pull request que você deseja adicionar a um projeto.
2. Na barra lateral, clique em **Projetos**. ![Screenshot showing "Projects" in the issue sidebar](/assets/images/help/projects-v2/issue-sidebar-projects.png)
3. Select the project that you want to add the issue or pull request to. ![Screenshot showing selecting a project from the issue sidebar](/assets/images/help/projects-v2/issue-sidebar-select-project.png)
4. Optionally, populate the custom fields. ![Barra lateral do projeto](/assets/images/help/projects-v2/issue-edit-project-sidebar.png)

#### Using the command palette to add an issue or pull request

1. {% data reusables.projects.open-command-palette %}
1. Start typing "Add items" and press <kbd>Return</kbd>.
{% data reusables.projects.bulk-add %}

### Criando problemas de rascunho

Os rascunhos são úteis para capturar ideias rapidamente. Unlike issues and pull requests that are referenced from your repositories, draft issues exist only in your project.

{% data reusables.projects.add-draft-issue %}

Os problemas do rascunho podem ter um título, texto, responsável e quaisquer campos personalizados do seu projeto. Para preencher o repositório, etiquetas ou marcos para o rascunho de um problema, você deverá primeiro converter o rascunho do problema em um problema. Para obter mais informações, consulte "[Convertendo rascunhos de problema em problemas](/issues/planning-and-tracking-with-projects/managing-items-in-your-project/converting-draft-issues-to-issues). "

{% note %}

**Observação**: Os usuários não receberão notificações quando forem atribuídos ou mencionados em um rascunho de problema, a menos que o rascunho do probelam seja convertido em um problema.

{% endnote %}
