---
title: 'Adding notes to a {% data variables.product.prodname_project_v1 %}'
intro: 'You can add notes to a {% data variables.projects.projects_v1_board %} to serve as task reminders or to add information related to the {% data variables.projects.projects_v1_board %}.'
redirect_from:
  - /github/managing-your-work-on-github/tracking-the-progress-of-your-work-with-project-boards/adding-notes-to-a-project-board
  - /articles/adding-notes-to-a-project
  - /articles/adding-notes-to-a-project-board
  - /github/managing-your-work-on-github/adding-notes-to-a-project-board
versions:
  feature: projects-v1
topics:
  - Pull requests
shortTitle: 'Add notes to {% data variables.product.prodname_project_v1 %}'
allowTitleToDifferFromFilename: true
---

{% data reusables.projects.project_boards_old %}

{% tip %}

**Dicas:**
- É possível formatar a observação usando a sintaxe markdown. Por exemplo, você pode usar títulos, links, listas de tarefas ou emojis. Para obter mais informações, consulte "[Sintaxe básica de gravação e formatação](/articles/basic-writing-and-formatting-syntax)".
- Você pode arrastar e soltar ou usar atalhos de teclado para reordenar observações e movê-las entre colunas. {% data reusables.project-management.for-more-info-project-keyboard-shortcuts %}
- Your {% data variables.projects.projects_v1_board %} must have at least one column before you can add notes. Para obter mais informações, consulte "[Criar um quadro de projeto](/articles/creating-a-project-board)".

{% endtip %}

When you add a URL for an issue, pull request, or another {% data variables.projects.projects_v1_board %} to a note, you'll see a preview in a summary card below your text.

![Cartões de quadro de projeto mostrando a visualização de um problema e outro quadro de projeto](/assets/images/help/projects/note-with-summary-card.png)

## Adding notes to a {% data variables.projects.projects_v1_board %}

1. Navigate to the {% data variables.projects.projects_v1_board %} where you want to add notes.
2. Na coluna que deseja adicionar uma observação, clique em {% octicon "plus" aria-label="The plus icon" %}. ![Ícone de mais no header da coluna](/assets/images/help/projects/add-note-button.png)
3. Digite sua observação e clique em **Add** (Adicionar). ![Campo para digitar uma observação e botão Add card (Adicionar cartão)](/assets/images/help/projects/create-and-add-note-button.png)

  {% tip %}

  **Dica:** você pode fazer referência um problema ou uma pull request na observação digitando a respectiva URL no cartão.

  {% endtip %}

## Converter uma observação em um problema

Se você criou uma observação e achou que ela não é suficiente para as suas necessidades, é possível convertê-la em um problema.

Quando você converte uma observação em um problema, o problema é criado automaticamente usando o conteúdo da observação. A primeira linha da observação será o título do problema e o conteúdo adicional da observação será adicionado à descrição do problema.

{% tip %}

**Dica:** é possível adicionar conteúdo no texto da observação para fazer @menção a alguém, vinculá-la a outro problema ou pull request e adicionar emoji. These {% data variables.product.prodname_dotcom %} Flavored Markdown features aren't supported within {% data variables.projects.projects_v1_board %} notes, but once your note is converted to an issue, they'll appear correctly. Para obter mais informações sobre o uso desses recursos, consulte "[Sobre escrita e formatação no {% data variables.product.prodname_dotcom %}](/articles/about-writing-and-formatting-on-github)".

{% endtip %}

1. Navegue para a observação que deseja converter em um problema.
{% data reusables.project-management.project-note-more-options %}
3. Clique em **Convert to issue** (Converter em problema). ![Botão Convert to issue (Converter em problema)](/assets/images/help/projects/convert-to-issue.png)
4. If the card is on an organization-wide {% data variables.projects.projects_v1_board %}, in the drop-down menu, choose the repository you want to add the issue to. ![Menu suspenso listando repositórios onde é possível criar o problema](/assets/images/help/projects/convert-note-choose-repository.png)
5. Se desejar, edite o título do problema previamente preenchido e digite um texto para o problema. ![Campos para título e texto do problema](/assets/images/help/projects/convert-note-issue-title-body.png)
6. Clique em **Convert to issue** (Converter em problema).
7. A observação é convertida automaticamente em um problema. In the {% data variables.projects.projects_v1_board %}, the new issue card will be in the same location as the previous note.

## Editar e remover uma observação

1. Navegue para a observação que deseja editar ou remover.
{% data reusables.project-management.project-note-more-options %}
3. Para editar o conteúdo da observação, clique em **Edit note** (Editar observação). ![Botão Edit note (Editar observação)](/assets/images/help/projects/edit-note.png)
4. Para excluir o conteúdo das observações, clique em **Delete note** (Excluir observação). ![Botão Delete note (Excluir observação)](/assets/images/help/projects/delete-note.png)

## Leia mais

- "[Sobre o {% data variables.product.prodname_projects_v1 %}](/articles/about-project-boards)"
- "[Criar um {% data variables.product.prodname_project_v1 %}](/articles/creating-a-project-board)"
- "[Editing a {% data variables.product.prodname_project_v1 %}](/articles/editing-a-project-board)"
- "[Adding issues and pull requests to a {% data variables.product.prodname_project_v1 %}](/articles/adding-issues-and-pull-requests-to-a-project-board)"
