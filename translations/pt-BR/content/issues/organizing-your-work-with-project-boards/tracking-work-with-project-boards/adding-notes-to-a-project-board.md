---
title: 'Adicionar observações a um {% data variables.product.prodname_project_v1 %}'
intro: 'Você pode adicionar observações a um {% data variables.projects.projects_v1_board %} para servir como lembretes de tarefa ou para adicionar informações relacionadas ao {% data variables.projects.projects_v1_board %}.'
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
ms.openlocfilehash: fc9df02b211056a08ed608a6c98b9d2f0b78c5b7
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 10/25/2022
ms.locfileid: '148108266'
---
{% data reusables.projects.project_boards_old %}

{% tip %}

**Dicas:**
- É possível formatar a observação usando a sintaxe markdown. Por exemplo, você pode usar títulos, links, listas de tarefas ou emojis. Para obter mais informações, confira "[Sintaxe básica de escrita e formatação](/articles/basic-writing-and-formatting-syntax)".
- Você pode arrastar e soltar ou usar atalhos de teclado para reordenar observações e movê-las entre colunas. {% data reusables.project-management.for-more-info-project-keyboard-shortcuts %}
- Seu {% data variables.projects.projects_v1_board %} deve ter pelo menos uma coluna para adicionar observações. Para obter mais informações, confira "[Como criar um quadro de projetos](/articles/creating-a-project-board)".

{% endtip %}

Ao adicionar a uma observação uma URL para um problema, solicitação de pull ou outro {% data variables.projects.projects_v1_board %}, uma visualização será exibida em um cartão de resumo abaixo do seu texto.

![Cartões de quadro de projeto mostrando a visualização de um problema e outro quadro de projeto](/assets/images/help/projects/note-with-summary-card.png)

## Adicionar observações a um {% data variables.projects.projects_v1_board %}

1. Navegue até o {% data variables.projects.projects_v1_board %} em que você deseja adicionar observações.
2. Na coluna à qual deseja adicionar uma anotação, clique em {% octicon "plus" aria-label="The plus icon" %}.
![Ícone de adição no cabeçalho da coluna](/assets/images/help/projects/add-note-button.png)
3. Digite sua anotação e clique em **Adicionar**.
![Campo usado para digitar uma anotação e botão Adicionar cartão](/assets/images/help/projects/create-and-add-note-button.png)

  {% tip %}

  **Dica:** você pode referenciar um problema ou uma solicitação de pull na anotação digitando a respectiva URL no cartão.

  {% endtip %}

## Converter uma observação em um problema

Se você criou uma observação e achou que ela não é suficiente para as suas necessidades, é possível convertê-la em um problema.

Quando você converte uma observação em um problema, o problema é criado automaticamente usando o conteúdo da observação. A primeira linha da observação será o título do problema e o conteúdo adicional da observação será adicionado à descrição do problema.

{% tip %}

**Dica:** você pode adicionar conteúdo no corpo da anotação para @mencionar alguém, vinculá-lo a outro problema ou solicitação de pull e adicionar emojis. Esses recursos Markdown em estilo {% data variables.product.prodname_dotcom %} não são aceitos em observações do {% data variables.projects.projects_v1_board %}, mas depois que a observação for convertida em um problema, ela será exibida corretamente. Para obter mais informações sobre como usar esses recursos, confira "[Sobre a escrita e a formatação no {% data variables.product.prodname_dotcom %}](/articles/about-writing-and-formatting-on-github)".

{% endtip %}

1. Navegue para a observação que deseja converter em um problema.
{% data reusables.project-management.project-note-more-options %}
3. Clique em **Converter em problema**.
  ![Botão Converter em problema](/assets/images/help/projects/convert-to-issue.png)
4. Se o cartão estiver em um {% data variables.projects.projects_v1_board %} em toda a organização, no menu suspenso, escolha o repositório ao qual deseja adicionar o problema.
  ![Menu suspenso que lista os repositórios em que é possível criar o problema](/assets/images/help/projects/convert-note-choose-repository.png)
5. Se desejar, edite o título do problema previamente preenchido e digite um texto para o problema.
  ![Campos de título e corpo do problema](/assets/images/help/projects/convert-note-issue-title-body.png)
6. Clique em **Converter em problema**.
7. A observação é convertida automaticamente em um problema. No {% data variables.projects.projects_v1_board %}, o novo cartão de problema estará no mesmo local que a observação anterior.

## Editar e remover uma observação

1. Navegue para a observação que deseja editar ou remover.
{% data reusables.project-management.project-note-more-options %}
3. Para editar o conteúdo da anotação, clique em **Editar anotação**.
  ![Botão Editar anotação](/assets/images/help/projects/edit-note.png)
4. Para excluir o conteúdo das anotações, clique em **Excluir anotação**.
  ![Botão Excluir anotação](/assets/images/help/projects/delete-note.png)

## Leitura adicional

- "[Sobre {% data variables.product.prodname_projects_v1 %}](/articles/about-project-boards)"
- "[Criar um {% data variables.product.prodname_project_v1 %}](/articles/creating-a-project-board)"
- "[Editar um {% data variables.product.prodname_project_v1 %}](/articles/editing-a-project-board)"
- "[Adicionar problemas e solicitações de pull a um {% data variables.product.prodname_project_v1 %}](/articles/adding-issues-and-pull-requests-to-a-project-board)"
