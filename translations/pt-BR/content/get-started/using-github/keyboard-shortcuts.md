---
title: Atalhos de teclado
intro: 'Quase todas as páginas no {% data variables.product.prodname_dotcom %} tem um atalho de teclado que executa as ações mais rapidamente.'
redirect_from:
  - /articles/using-keyboard-shortcuts
  - /categories/75/articles
  - /categories/keyboard-shortcuts
  - /articles/keyboard-shortcuts
  - /github/getting-started-with-github/keyboard-shortcuts
  - /github/getting-started-with-github/using-github/keyboard-shortcuts
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
---

## Sobre atalhos do teclado

Digitar <kbd>?</kbd> no {% data variables.product.prodname_dotcom %} exibe uma caixa de diálogo que lista os atalhos de teclado disponíveis para essa página. Você pode usar esses atalhos de teclado para executar ações no site sem precisar usar o mouse para navegar.

{% if keyboard-shortcut-accessibility-setting %}
É possível desabilitar os atalhos de teclas de caractere, ao mesmo tempo em que permite que os atalhos que usam teclas modificadoras, nas suas configurações de acessibilidade. Para obter mais informações, consulte "[Gerenciar configurações de acessibilidade](/account-and-profile/setting-up-and-managing-your-github-user-account/managing-user-account-settings/managing-accessibility-settings)".{% endif %}

Veja abaixo uma lista dos atalhos de teclado disponíveis.
{% if command-palette %}
O {% data variables.product.prodname_command_palette %} também fornece acesso rápido a uma ampla gama de ações, sem a necessidade de lembrar os atalhos de teclado. For more information, see "[{% data variables.product.prodname_command_palette %}](/get-started/using-github/github-command-palette)."{% endif %}

## Atalhos para o site

| Atalho                       | Descrição                                                                                                                                                                                                                                                                                                                                     |
| ---------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <kbd>S</kbd> or <kbd>/</kbd> | Evidencia a barra de pesquisa. Para obter mais informações, consulte "[Sobre pesquisar no {% data variables.product.company_short %}](/search-github/getting-started-with-searching-on-github/about-searching-on-github)".                                                                                                                    |
| <kbd>G</kbd> <kbd>N</kbd>    | Vai para suas notificações. Para obter mais informações, consulte {% ifversion fpt or ghes or ghae or ghec %}"[Sobre notificações](/github/managing-subscriptions-and-notifications-on-github/about-notifications){% else %}"[Sobre notificações](/github/receiving-notifications-about-activity-on-github/about-notifications)"{% endif %}." |
| <kbd>Esc</kbd>               | Quando direcionado a um hovercard de usuário, problema ou pull request, fecha o hovercard e redireciona para o elemento no qual o hovercard está                                                                                                                                                                                              |

{% if command-palette %}

<kbd>Command</kbd>+<kbd>K</kbd> (Mac) or </br> <kbd>Ctrl</kbd>+<kbd>K</kbd> (Windows/Linux) | Opens the {% data variables.product.prodname_command_palette %}. If you are editing Markdown text, open the command palette with <kbd>Command</kbd>+<kbd>Option</kbd>+<kbd>K</kbd> or <kbd>Ctrl</kbd>+<kbd>Alt</kbd>+<kbd>K</kbd>. For more information, see "[{% data variables.product.prodname_command_palette %}](/get-started/using-github/github-command-palette)."{% endif %}

## Repositórios

| Atalho                    | Descrição                                                                                                                                                                                                                                                  |
| ------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <kbd>G</kbd> <kbd>C</kbd> | Vai para a aba **Code** (Código)                                                                                                                                                                                                                           |
| <kbd>G</kbd> <kbd>I</kbd> | Vai para a aba **Issues** (Problemas). Para obter mais informações, consulte "[Sobre problemas](/articles/about-issues)".                                                                                                                                  |
| <kbd>G</kbd> <kbd>P</kbd> | Vai para a aba **Pull requests**. Para obter mais informações, consulte "[Sobre pull requests](/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/about-pull-requests)."{% ifversion fpt or ghes or ghec %}
| <kbd>G</kbd> <kbd>A</kbd> | Acesse a aba de **Ações**. Para obter mais informações, consulte "[Sobre ações](/actions/getting-started-with-github-actions/about-github-actions)".{% endif %}
| <kbd>G</kbd> <kbd>B</kbd> | Vai para a aba **Projects** (Projetos). Para obter mais informações, consulte "[Sobre quadros de projeto](/articles/about-project-boards)".                                                                                                                |
| <kbd>G</kbd> <kbd>W</kbd> | Vai para a aba **Wiki**. Para obter mais informações, consulte "[Sobre wikis](/communities/documenting-your-project-with-wikis/about-wikis)."{% ifversion fpt or ghec %}
| <kbd>G</kbd> <kbd>G</kbd> | Acesse a aba **Discussões**. Para obter mais informações, consulte "[Sobre discussões](/discussions/collaborating-with-your-community-using-discussions/about-discussions)".{% endif %}

## Edição de código-fonte

| Atalho                                                                                                                                          | Descrição                                                                                                                                                                                           |
| ----------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |{% ifversion fpt or ghec %}
| <kbd>.</kbd>                                                                                                                                    | Abre um repositório ou um pull request no editor baseado na web. Para obter mais informações, consulte "[Editor baseado na web](/codespaces/developing-in-codespaces/web-based-editor)".{% endif %}
| <kbd>Command</kbd>+<kbd>B</kbd> (Mac) or </br> <kbd>Ctrl</kbd>+<kbd>B</kbd> (Windows/Linux)                                                     | Insere formatação Markdown para texto em negrito                                                                                                                                                    |
| <kbd>Command</kbd>+<kbd>I</kbd> (Mac) or </br> <kbd>Ctrl</kbd>+<kbd>I</kbd> (Windows/Linux)                                                     | Insere formatação Markdown para texto em itálico                                                                                                                                                    |
| <kbd>Command</kbd>+<kbd>K</kbd> (Mac) or </br> <kbd>Ctrl</kbd>+<kbd>K</kbd> (Windows/Linux)                                                     | Insere a formatação de Markdown para criar o link{% ifversion fpt or ghec or ghae or ghes > 3.3 %}
| <kbd>Command</kbd>+<kbd>Shift</kbd>+<kbd>7</kbd> (Mac) or </br> <kbd>Ctrl</kbd>+<kbd>Shift</kbd>+<kbd>7</kbd> (Windows/Linux)                   | Insere a formatação de Markdown para uma lista ordenada                                                                                                                                             |
| <kbd>Command</kbd>+<kbd>Shift</kbd>+<kbd>8</kbd> (Mac) or </br> <kbd>Ctrl</kbd>+<kbd>Shift</kbd>+<kbd>8</kbd> (Windows/Linux)                   | Insere a formatação Markdown para uma lista não ordenada                                                                                                                                            |
| <kbd>Command</kbd>+<kbd>Shift</kbd>+<kbd>.</kbd> (Mac) or </br> <kbd>Ctrl</kbd>+<kbd>Shift</kbd>+<kbd>.</kbd> (Windows/Linux)                   | Insere a formatação Markdown para uma citação{% endif %}
| <kbd>E</kbd>                                                                                                                                    | Abra o arquivo de código-fonte na aba **Editar arquivo**                                                                                                                                            |
| <kbd>Command</kbd>+<kbd>F</kbd> (Mac) or </br> <kbd>Ctrl</kbd>+<kbd>F</kbd> (Windows/Linux)                                                     | Começa a pesquisar no editor de arquivo                                                                                                                                                             |
| <kbd>Command</kbd>+<kbd>G</kbd> (Mac) or </br> <kbd>Ctrl</kbd>+<kbd>G</kbd> (Windows/Linux)                                                     | Localiza o próximo                                                                                                                                                                                  |
| <kbd>Command</kbd>+<kbd>Shift</kbd>+<kbd>G</kbd> (Mac) or </br> <kbd>Ctrl</kbd>+<kbd>Shift</kbd>+<kbd>G</kbd> (Windows/Linux)                   | Localiza o anterior                                                                                                                                                                                 |
| <kbd>Command</kbd>+<kbd>Option</kbd>+<kbd>F</kbd> (Mac) or </br> <kbd>Ctrl</kbd>+<kbd>Shift</kbd>+<kbd>F</kbd> (Windows/Linux)                  | Substitui                                                                                                                                                                                           |
| <kbd>Command</kbd>+<kbd>Shift</kbd>+<kbd>Option</kbd>+<kbd>F</kbd> (Mac) or </br> <kbd>Ctrl</kbd>+<kbd>Shift</kbd>+<kbd>R</kbd> (Windows/Linux) | Substitui todos                                                                                                                                                                                     |
| <kbd>Alt</kbd>+<kbd>G</kbd>                                                                                                                     | Pula para linha                                                                                                                                                                                     |
| <kbd>Command</kbd>+<kbd>Z</kbd> (Mac) or </br> <kbd>Ctrl</kbd>+<kbd>Z</kbd> (Windows/Linux)                                                     | Desfaz                                                                                                                                                                                              |
| <kbd>Command</kbd>+<kbd>Y</kbd> (Mac) or </br> <kbd>Ctrl</kbd>+<kbd>Y</kbd> (Windows/Linux)                                                     | Refaz                                                                                                                                                                                               |
| <kbd>Command</kbd>+<kbd>Shift</kbd>+<kbd>P</kbd>                                                                                                | Alterna entre as abas **Edit file** (Editar aquivo) e **Preview changes** (Visualizar alterações)                                                                                                   |
| <kbd>Command</kbd>+<kbd>S</kbd> (Mac) or </br> <kbd>Ctrl</kbd>+<kbd>S</kbd> (Windows/Linux)                                                     | Escrever uma mensagem de commit                                                                                                                                                                     |

Para mais atalhos de teclado, consulte a [Documentação CodeMirror](https://codemirror.net/doc/manual.html#commands).

## Navegação de código-fonte

| Atalho       | Descrição                                                                                                                                                                  |
| ------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <kbd>T</kbd> | Ativa o localizador de arquivos                                                                                                                                            |
| <kbd>L</kbd> | Pula para uma linha no código                                                                                                                                              |
| <kbd>W</kbd> | Muda para um novo branch ou tag                                                                                                                                            |
| <kbd>Y</kbd> | Expande a URL para sua forma canônica. Para obter mais informações, consulte "[Obter links permanentes em arquivos](/articles/getting-permanent-links-to-files)".          |
| <kbd>I</kbd> | Mostra ou oculta comentários em diffs. Para obter mais informações, consulte "[Comentar no diff de uma pull request](/articles/commenting-on-the-diff-of-a-pull-request)". |
| <kbd>A</kbd> | Exibir ou ocultar anotações em diffs                                                                                                                                       |
| <kbd>B</kbd> | Abre a vsualização de blame. Para obter mais informações, consulte "[Rastrear alterações em um arquivo](/articles/tracing-changes-in-a-file)".                             |

## Comentários

| Atalho                                                                                                                        | Descrição                                                                                                                                                                                                                                                      |
| ----------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <kbd>Command</kbd>+<kbd>B</kbd> (Mac) or </br> <kbd>Ctrl</kbd>+<kbd>B</kbd> (Windows/Linux)                                   | Insere formatação Markdown para texto em negrito                                                                                                                                                                                                               |
| <kbd>Command</kbd>+<kbd>I</kbd> (Mac) or </br> <kbd>Ctrl</kbd>+<kbd>I</kbd> (Windows/Linux)                                   | Insere a formatação Markdown para texto em itálico{% ifversion fpt or ghae or ghes > 3.1 or ghec %}
| <kbd>Command</kbd>+<kbd>E</kbd> (Mac) or </br> <kbd>Ctrl</kbd>+<kbd>E</kbd> (Windows/Linux)                                   | Insere a formatação Markdown para código ou um comando dentro da linha{% endif %}
| <kbd>Command</kbd>+<kbd>K</kbd> (Mac) or </br> <kbd>Ctrl</kbd>+<kbd>K</kbd> (Windows/Linux)                                   | Insere formatação Markdown para criar um link                                                                                                                                                                                                                  |
| <kbd>Command</kbd>+<kbd>Shift</kbd>+<kbd>P</kbd> (Mac) or </br> <kbd>Ctrl</kbd>+<kbd>Shift</kbd>+<kbd>P</kbd> (Windows/Linux) | Alterna entre as abas de comentários **Escrever** e **Visualizar**{% ifversion fpt or ghae or ghes > 3.2 or ghec %}
| <kbd>Command</kbd>+<kbd>Shift</kbd>+<kbd>7</kbd> (Mac) or </br> <kbd>Ctrl</kbd>+<kbd>Shift</kbd>+<kbd>7</kbd> (Windows/Linux) | Insere a formatação de Markdown para uma lista ordenada                                                                                                                                                                                                        |
| <kbd>Command</kbd>+<kbd>Shift</kbd>+<kbd>8</kbd> (Mac) or </br> <kbd>Ctrl</kbd>+<kbd>Shift</kbd>+<kbd>8</kbd> (Windows/Linux) | Insere a formatação Markdown para uma lista não ordenada{% endif %}
| <kbd>Command</kbd>+<kbd>Enter</kbd> (Mac) or </br> <kbd>Ctrl</kbd>+<kbd>Enter</kbd> (Windows/Linux)                           | Envia um comentário                                                                                                                                                                                                                                            |
| <kbd>Ctrl</kbd>+<kbd>.</kbd> and then <kbd>Ctrl</kbd>+<kbd>[saved reply number]</kbd>                                         | Abre o menu de respostas salvas e autocompleta o campo de comentário com uma resposta salva. Para obter mais informações, consulte "[Sobre respostas salvas](/articles/about-saved-replies)".{% ifversion fpt or ghae or ghes > 3.2 or ghec %}
| <kbd>Command</kbd>+<kbd>Shift</kbd>+<kbd>.</kbd> (Mac) or </br> <kbd>Ctrl</kbd>+<kbd>Shift</kbd>+<kbd>.</kbd> (Windows/Linux) | Insere a formatação Markdown para uma citação{% endif %}{% ifversion fpt or ghec %}
| <kbd>Command</kbd>+<kbd>G</kbd> (Mac) or </br> <kbd>Ctrl</kbd>+<kbd>G</kbd> (Windows/Linux)                                   | Insere uma sugestão. Para obter mais informações, consulte "[Revisar alterações propostas em uma pull request](/pull-requests/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/reviewing-proposed-changes-in-a-pull-request)". 
{% endif %}
| <kbd>R</kbd>                                                                                                                  | Cita o texto selecionado em sua resposta. Para obter mais informações, consulte "[Sintaxe básica de gravação e formatação](/articles/basic-writing-and-formatting-syntax#quoting-text)".                                                                       |

## Listas de problemas e pull requests

| Atalho                                                                                      | Descrição                                                                                                                                                                                                                                                        |
| ------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <kbd>C</kbd>                                                                                | Cria um problema                                                                                                                                                                                                                                                 |
| <kbd>Command</kbd>+<kbd>/</kbd> (Mac) or </br> <kbd>Ctrl</kbd>+<kbd>/</kbd> (Windows/Linux) | Evidencia seu cursor na barra de pesquisa de problemas e pull requests. Para obter mais informações, consulte "[Filtrando e pesquisando problemas e pull requests](/issues/tracking-your-work-with-issues/filtering-and-searching-issues-and-pull-requests). "£" |
| <kbd>U</kbd>                                                                                | Filtra por autor                                                                                                                                                                                                                                                 |
| <kbd>L</kbd>                                                                                | Filtra por ou edita etiquetas. Para obter mais informações, consulte "[Filtrar problemas e pull requests por etiquetas](/articles/filtering-issues-and-pull-requests-by-labels)".                                                                                |
| <kbd>Alt</kbd> e clique                                                                     | Ao filtrar por etiquetas, exclui etiquetas. Para obter mais informações, consulte "[Filtrar problemas e pull requests por etiquetas](/articles/filtering-issues-and-pull-requests-by-labels)".                                                                   |
| <kbd>M</kbd>                                                                                | Filtra por ou edita marcos. Para obter mais informações, consulte "[Filtrar problemas e pull requests por marcos](/articles/filtering-issues-and-pull-requests-by-milestone)".                                                                                   |
| <kbd>A</kbd>                                                                                | Filtra por ou edita um responsável. Para obter mais informações, consulte "[Filtrar problemas e pull requests por responsáveis](/articles/filtering-issues-and-pull-requests-by-assignees)".                                                                     |
| <kbd>O</kbd> or <kbd>Enter</kbd>                                                            | Abre um problema                                                                                                                                                                                                                                                 |

## Problemas e pull requests
| Atalho                                                                                                                        | Descrição                                                                                                                                                                                                                                                                                                                                                                                                                           |
| ----------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <kbd>Q</kbd>                                                                                                                  | Solicita um revisor. Para obter mais informações, consulte "[Solicitar uma revisão de pull request](/articles/requesting-a-pull-request-review/)".                                                                                                                                                                                                                                                                                  |
| <kbd>M</kbd>                                                                                                                  | Define um marco. Para obter mais informações, consulte "[Associar marcos a problemas e pull requests](/articles/associating-milestones-with-issues-and-pull-requests/)".                                                                                                                                                                                                                                                            |
| <kbd>L</kbd>                                                                                                                  | Aplica uma etiqueta. Para obter mais informações, consulte "[Aplicar etiquetas a problemas e pull requests](/articles/applying-labels-to-issues-and-pull-requests/)".                                                                                                                                                                                                                                                               |
| <kbd>A</kbd>                                                                                                                  | Define um responsável. Para obter mais informações, consulte "[Atribuir problemas e pull requests a outros usuários {% data variables.product.company_short %}](/articles/assigning-issues-and-pull-requests-to-other-github-users/)".                                                                                                                                                                                              |
| <kbd>Command</kbd>+<kbd>Shift</kbd>+<kbd>P</kbd> (Mac) or </br> <kbd>Ctrl</kbd>+<kbd>Shift</kbd>+<kbd>P</kbd> (Windows/Linux) | Alterna entre as abas **Escrever** e **Visualizar**{% ifversion fpt or ghec %}
| <kbd>Alt</kbd> e clique                                                                                                       | When creating an issue from a task list, open the new issue form in the current tab by holding <kbd>Alt</kbd> and clicking the {% octicon "issue-opened" aria-label="The issue opened icon" %} in the upper-right corner of the task. Para obter mais informações, consulte "[Sobre listas de tarefas](/issues/tracking-your-work-with-issues/creating-issues/about-task-lists)".                                                   |
| <kbd>Shift</kbd> e clique                                                                                                     | When creating an issue from a task list, open the new issue form in a new tab by holding <kbd>Shift</kbd> and clicking the {% octicon "issue-opened" aria-label="The issue opened icon" %} in the upper-right corner of the task. Para obter mais informações, consulte "[Sobre listas de tarefas](/issues/tracking-your-work-with-issues/creating-issues/about-task-lists)".                                                       |
| <kbd>Command</kbd> and click (Mac) or </br> <kbd>Ctrl</kbd>+<kbd>Shift</kbd> and click (Windows/Linux)                        | When creating an issue from a task list, open the new issue form in the new window by holding <kbd>Command</kbd> or <kbd>Ctrl</kbd>+<kbd>Shift</kbd> and clicking the {% octicon "issue-opened" aria-label="The issue opened icon" %} in the upper-right corner of the task. Para obter mais informações, consulte "[Sobre listas de tarefas](/issues/tracking-your-work-with-issues/creating-issues/about-task-lists)."{% endif %}

## Alterações em pull requests

| Atalho                                               | Descrição                                                                                                                                                                                                                                                                                                                                          |
| ---------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <kbd>C</kbd>                                         | Abre a lista de commits na pull request                                                                                                                                                                                                                                                                                                            |
| <kbd>T</kbd>                                         | Abre a lista de arquivos alterados na pull request                                                                                                                                                                                                                                                                                                 |
| <kbd>J</kbd>                                         | Move a seleção para baixo na lista                                                                                                                                                                                                                                                                                                                 |
| <kbd>K</kbd>                                         | Move a seleção para cima na lista                                                                                                                                                                                                                                                                                                                  |
| <kbd>Command</kbd>+<kbd>Shift</kbd>+<kbd>Enter</kbd> | Adiciona um comentário único no diff da pull request                                                                                                                                                                                                                                                                                               |
| <kbd>Alt</kbd> e clique                              | Toggle between collapsing and expanding all outdated review comments in a pull request by holding down <kbd>Alt</kbd> and clicking **Show outdated** or **Hide outdated**.|{% ifversion fpt or ghes or ghae or ghec %}
| Click, then <kbd>Shift</kbd> and click               | Comment on multiple lines of a pull request by clicking a line number, holding <kbd>Shift</kbd>, then clicking another line number. Para obter mais informações, consulte "[Comentando em uma pull request](/github/collaborating-with-issues-and-pull-requests/commenting-on-a-pull-request#adding-line-comments-to-a-pull-request)."
{% endif %}

## Quadros de projeto

### Mover uma coluna

| Atalho                                                                                                                                                         | Descrição                                    |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------- |
| <kbd>Enter</kbd> or <kbd>Space</kbd>                                                                                                                           | Começa a mover a coluna em evidência         |
| <kbd>Esc</kbd>                                                                                                                                                 | Cancela o movimento em curso                 |
| <kbd>Enter</kbd>                                                                                                                                               | Completa o movimento em curso                |
| <kbd>←</kbd> or <kbd>H</kbd>                                                                                                                                   | Move a coluna para a esquerda                |
| <kbd>Command</kbd>+<kbd>←</kbd> or <kbd>Command</kbd>+<kbd>H</kbd> (Mac) or </br> <kbd>Ctrl</kbd>+<kbd>←</kbd> or <kbd>Ctrl</kbd>+<kbd>H</kbd> (Windows/Linux) | Move a coluna para a posição mais à esquerda |
| <kbd>→</kbd> or <kbd>L</kbd>                                                                                                                                   | Move a coluna para a direita                 |
| <kbd>Command</kbd>+<kbd>→</kbd> or <kbd>Command</kbd>+<kbd>L</kbd> (Mac) or </br> <kbd>Ctrl</kbd>+<kbd>→</kbd> or <kbd>Ctrl</kbd>+<kbd>L</kbd> (Windows/Linux) | Move a coluna para a posição mais à direita  |

### Mover um cartão

| Atalho                                                                                                                                                                                                                             | Descrição                                                     |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------- |
| <kbd>Enter</kbd> or <kbd>Space</kbd>                                                                                                                                                                                               | Começa a mover o cartão em evidência                          |
| <kbd>Esc</kbd>                                                                                                                                                                                                                     | Cancela o movimento em curso                                  |
| <kbd>Enter</kbd>                                                                                                                                                                                                                   | Completa o movimento em curso                                 |
| <kbd>↓</kbd> or <kbd>J</kbd>                                                                                                                                                                                                       | Move o cartão para baixo                                      |
| <kbd>Command</kbd>+<kbd>↓</kbd> or <kbd>Command</kbd>+<kbd>J</kbd> (Mac) or </br> <kbd>Ctrl</kbd>+<kbd>↓</kbd> or <kbd>Ctrl</kbd>+<kbd>J</kbd> (Windows/Linux)                                                                     | Move o cartão para a parte inferior da coluna                 |
| <kbd>↑</kbd> or <kbd>K</kbd>                                                                                                                                                                                                       | Move o cartão para cima                                       |
| <kbd>Command</kbd>+<kbd>↑</kbd> or <kbd>Command</kbd>+<kbd>K</kbd> (Mac) or </br> <kbd>Ctrl</kbd>+<kbd>↑</kbd> or <kbd>Ctrl</kbd>+<kbd>K</kbd> (Windows/Linux)                                                                     | Move o cartão para a parte superior da coluna                 |
| <kbd>←</kbd> or <kbd>H</kbd>                                                                                                                                                                                                       | Move o cartão para a parte inferior da coluna à esquerda      |
| <kbd>Shift</kbd>+<kbd>←</kbd> or <kbd>Shift</kbd>+<kbd>H</kbd>                                                                                                                                                                     | Move o cartão para a parte superior da coluna à esquerda      |
| <kbd>Command</kbd>+<kbd>←</kbd> or <kbd>Command</kbd>+<kbd>H</kbd> (Mac) or </br> <kbd>Ctrl</kbd>+<kbd>←</kbd> or <kbd>Ctrl</kbd>+<kbd>H</kbd> (Windows/Linux)                                                                     | Move o cartão para a parte inferior da coluna mais à esquerda |
| <kbd>Command</kbd>+<kbd>Shift</kbd>+<kbd>←</kbd> or <kbd>Command</kbd>+<kbd>Shift</kbd>+<kbd>H</kbd> (Mac) or </br> <kbd>Ctrl</kbd>+<kbd>Shift</kbd>+<kbd>←</kbd> or <kbd>Ctrl</kbd>+<kbd>Shift</kbd>+<kbd>H</kbd> (Windows/Linux) | Move o cartão para a parte superior da coluna mais à esquerda |
| <kbd>→</kbd>                                                                                                                                                                                                                       | Move o cartão para a parte inferior da coluna à direita       |
| <kbd>Shift</kbd>+<kbd>→</kbd> or <kbd>Shift</kbd>+<kbd>L</kbd>                                                                                                                                                                     | Move o cartão para a parte superior da coluna à direita       |
| <kbd>Command</kbd>+<kbd>→</kbd> or <kbd>Command</kbd>+<kbd>L</kbd> (Mac) or </br> <kbd>Ctrl</kbd>+<kbd>→</kbd> or <kbd>Ctrl</kbd>+<kbd>L</kbd> (Windows/Linux)                                                                     | Move o cartão para a parte inferior da coluna mais à direita  |
| <kbd>Command</kbd>+<kbd>Shift</kbd>+<kbd>→</kbd> or <kbd>Command</kbd>+<kbd>Shift</kbd>+<kbd>L</kbd> (Mac) or </br> <kbd>Ctrl</kbd>+<kbd>Shift</kbd>+<kbd>→</kbd> or <kbd>Ctrl</kbd>+<kbd>Shift</kbd>+<kbd>L</kbd> (Windows/Linux) | Move o cartão para a parte inferior da coluna mais à direita  |

### Pré-visualizar um cartão

| Atalho         | Descrição                                |
| -------------- | ---------------------------------------- |
| <kbd>Esc</kbd> | Fecha o painel de visualização do cartão |

{% ifversion fpt or ghec %}
## {% data variables.product.prodname_actions %}

| Atalho                                                                                               | Descrição                                                                            |
| ---------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------ |
| <kbd>Command</kbd>+<kbd>Space </kbd> (Mac) or </br> <kbd>Ctrl</kbd>+<kbd>Space</kbd> (Windows/Linux) | No editor de fluxo de trabalho, obtém sugestões para o arquivo de fluxo de trabalho. |
| <kbd>G</kbd> <kbd>F</kbd>                                                                            | Acesse o arquivo do fluxo de trabalho                                                |
| <kbd>Shift</kbd>+<kbd>T</kbd> or <kbd>T</kbd>                                                        | Alternar as marcas de tempo nos registros                                            |
| <kbd>Shift</kbd>+<kbd>F</kbd> or <kbd>F</kbd>                                                        | Alternar os registros em tela cheia                                                  |
| <kbd>Esc</kbd>                                                                                       | Sair dos registros em tela cheia                                                     |

{% endif %}

## Notificações
{% ifversion fpt or ghes or ghae or ghec %}
| Atalho                        | Descrição            |
| ----------------------------- | -------------------- |
| <kbd>E</kbd>                  | Marcar como pronto   |
| <kbd>Shift</kbd>+<kbd>U</kbd> | Marcar como não lido |
| <kbd>Shift</kbd>+<kbd>I</kbd> | Marca como lido      |
| <kbd>Shift</kbd>+<kbd>M</kbd> | Cancelar assinatura  |

{% else %}

| Atalho                                       | Descrição       |
| -------------------------------------------- | --------------- |
| <kbd>E</kbd> or <kbd>I</kbd> or <kbd>Y</kbd> | Marca como lido |
| <kbd>Shift</kbd>+<kbd>M</kbd>                | Desativa o som  |
{% endif %}

## gráfico de rede

| Atalho                                                                                     | Descrição                        |
| ------------------------------------------------------------------------------------------ | -------------------------------- |
| <kbd>←</kbd> or <kbd>H</kbd>                                                               | Rola para a esquerda             |
| <kbd>→</kbd> or <kbd>L</kbd>                                                               | Rola para a direita              |
| <kbd>↑</kbd> or <kbd>K</kbd>                                                               | Rola para cima                   |
| <kbd>↓</kbd> or <kbd>J</kbd>                                                               | Rola para baixo                  |
| <kbd>Shift</kbd>+<kbd>←</kbd> (Mac) or </br> <kbd>Shift</kbd>+<kbd>H</kbd> (Windows/Linux) | Rola até o final para a esquerda |
| <kbd>Shift</kbd>+<kbd>→</kbd> (Mac) or </br> <kbd>Shift</kbd>+<kbd>L</kbd> (Windows/Linux) | Rola até o final para a direita  |
| <kbd>Shift</kbd>+<kbd>↑</kbd> (Mac) or </br> <kbd>Shift</kbd>+<kbd>K</kbd> (Windows/Linux) | Rola até o final para cima       |
| <kbd>Shift</kbd>+<kbd>↓</kbd> (Mac) or </br> <kbd>Shift</kbd>+<kbd>J</kbd> (Windows/Linux) | Rola até o final para baixo      |
