---
title: Adicionar observações a um quadro de projeto
intro: Você pode adicionar observações a um quadro de projeto para que sirvam como lembretes de tarefas ou para adicionar informações relacionadas ao quadro de projeto.
redirect_from:
  - /articles/adding-notes-to-a-project/
  - /articles/adding-notes-to-a-project-board
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
---

{% tip %}

**Dicas:**
- É possível formatar a observação usando a sintaxe markdown. Por exemplo, você pode usar títulos, links, listas de tarefas ou emojis. Para obter mais informações, consulte "[Sintaxe básica de gravação e formatação](/articles/basic-writing-and-formatting-syntax)".
- Você pode arrastar e soltar ou usar atalhos de teclado para reordenar observações e movê-las entre colunas. {% data reusables.project-management.for-more-info-project-keyboard-shortcuts %}
- Seu quadro de projeto deve ter pelo menos uma coluna para que seja possível adicionar observações. Para obter mais informações, consulte "[Criar um quadro de projeto](/articles/creating-a-project-board)".

{% endtip %}

Ao adicionar a uma observação uma URL para um problema, uma pull request ou outro quadro de projeto, você vê uma visualização em um cartão de resumo abaixo do seu texto.

![Cartões de quadro de projeto mostrando a visualização de um problema e outro quadro de projeto](/assets/images/help/projects/note-with-summary-card.png)

### Adicionar observações a um quadro de projeto

1. Navegue até o quadro de projeto onde deseja adicionar observações.
2. Na coluna que deseja adicionar uma observação, clique em {% octicon "plus" aria-label="The plus icon" %}. ![Ícone de mais no header da coluna](/assets/images/help/projects/add-note-button.png)
3. Digite sua observação e clique em **Add** (Adicionar). ![Campo para digitar uma observação e botão Add card (Adicionar cartão)](/assets/images/help/projects/create-and-add-note-button.png)

  {% tip %}

  **Dica:** você pode fazer referência um problema ou uma pull request na observação digitando a respectiva URL no cartão.

  {% endtip %}

### Converter uma observação em um problema

Se você criou uma observação e achou que ela não é suficiente para as suas necessidades, é possível convertê-la em um problema.

Quando você converte uma observação em um problema, o problema é criado automaticamente usando o conteúdo da observação. A primeira linha da observação será o título do problema e o conteúdo adicional da observação será adicionado à descrição do problema.

{% tip %}

**Dica:** é possível adicionar conteúdo no texto da observação para fazer @menção a alguém, vinculá-la a outro problema ou pull request e adicionar emoji. Esses recursos markdown em estilo {% data variables.product.prodname_dotcom %} não são aceitos em observações do quadro de projeto, mas depois que a observação for convertida em um problema, ela será exibida corretamente. Para obter mais informações sobre o uso desses recursos, consulte "[Sobre escrita e formatação no {% data variables.product.prodname_dotcom %}](/articles/about-writing-and-formatting-on-github)".

{% endtip %}

1. Navegue para a observação que deseja converter em um problema.
{% data reusables.project-management.project-note-more-options %}
3. Clique em **Convert to issue** (Converter em problema). ![Botão Convert to issue (Converter em problema)](/assets/images/help/projects/convert-to-issue.png)
4. Se o cartão estiver em um quadro de projeto em toda a organização, no menu suspenso, escolha o repositório ao qual deseja adicionar o problema. ![Menu suspenso listando repositórios onde é possível criar o problema](/assets/images/help/projects/convert-note-choose-repository.png)
5. Se desejar, edite o título do problema previamente preenchido e digite um texto para o problema. ![Campos para título e texto do problema](/assets/images/help/projects/convert-note-issue-title-body.png)
6. Clique em **Convert to issue** (Converter em problema).
7. A observação é convertida automaticamente em um problema. No quadro de projeto, o novo cartão de problema estará no mesmo local que a observação anterior.

### Editar e remover uma observação

1. Navegue para a observação que deseja editar ou remover.
{% data reusables.project-management.project-note-more-options %}
3. Para editar o conteúdo da observação, clique em **Edit note** (Editar observação). ![Botão Edit note (Editar observação)](/assets/images/help/projects/edit-note.png)
4. Para excluir o conteúdo das observações, clique em **Delete note** (Excluir observação). ![Botão Delete note (Excluir observação)](/assets/images/help/projects/delete-note.png)

### Leia mais

- "[Sobre quadros de projetos](/articles/about-project-boards)"
- "[Criar um quadro de projeto](/articles/creating-a-project-board)"
- "[Editar um quadro de projeto](/articles/editing-a-project-board)"
- "[Adicionar problemas e pull requests a um quadro de projeto](/articles/adding-issues-and-pull-requests-to-a-project-board)"
