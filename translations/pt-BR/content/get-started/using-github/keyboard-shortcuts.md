---
title: Atalhos de teclado
intro: 'Quase todas as páginas no {% data variables.product.prodname_dotcom %} tem um atalho de teclado que executa as ações mais rapidamente.'
redirect_from:
  - /articles/using-keyboard-shortcuts/
  - /categories/75/articles/
  - /categories/keyboard-shortcuts/
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

Typing <kbd>?</kbd> on {% data variables.product.prodname_dotcom %} brings up a dialog box that lists the keyboard shortcuts available for that page. Você pode usar esses atalhos de teclado para executar ações no site sem precisar usar o mouse para navegar.

Veja abaixo uma lista dos atalhos de teclado disponíveis.
{% if command-palette %}
The {% data variables.product.prodname_command_palette %} also gives you quick access to a wide range of actions, without the need to remember keyboard shortcuts. For more information, see "[{% data variables.product.prodname_command_palette %}](/get-started/using-github/github-command-palette)."{% endif %}

## Atalhos para o site

| Atalho                       | Descrição                                                                                                                                                                                                                                                                                                                                     |
| ---------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <kbd>s</kbd> or <kbd>/</kbd> | Evidencia a barra de pesquisa. Para obter mais informações, consulte "[Sobre pesquisar no {% data variables.product.company_short %}](/search-github/getting-started-with-searching-on-github/about-searching-on-github)".                                                                                                                    |
| <kbd>g</kbd> <kbd>n</kbd>    | Vai para suas notificações. Para obter mais informações, consulte {% ifversion fpt or ghes or ghae or ghec %}"[Sobre notificações](/github/managing-subscriptions-and-notifications-on-github/about-notifications){% else %}"[Sobre notificações](/github/receiving-notifications-about-activity-on-github/about-notifications)"{% endif %}." |
| <kbd>esc</kbd>               | Quando direcionado a um hovercard de usuário, problema ou pull request, fecha o hovercard e redireciona para o elemento no qual o hovercard está                                                                                                                                                                                              |

{% if command-palette %}

<kbd>control</kbd><kbd>k</kbd> or <kbd>command</kbd><kbd>k</kbd> | Opens the {% data variables.product.prodname_command_palette %}. If you are editing Markdown text, open the command palette with <kbd>Ctl</kbd><kbd>alt</kbd><kbd>k</kbd> or <kbd>⌘</kbd><kbd>option</kbd><kbd>k</kbd>. For more information, see "[{% data variables.product.prodname_command_palette %}](/get-started/using-github/github-command-palette)."{% endif %}

## Repositórios

| Atalho                    | Descrição                                                                                                                                                                                                                                                  |
| ------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <kbd>g</kbd> <kbd>c</kbd> | Vai para a aba **Code** (Código)                                                                                                                                                                                                                           |
| <kbd>g</kbd> <kbd>i</kbd> | Vai para a aba **Issues** (Problemas). Para obter mais informações, consulte "[Sobre problemas](/articles/about-issues)".                                                                                                                                  |
| <kbd>g</kbd> <kbd>p</kbd> | Vai para a aba **Pull requests**. Para obter mais informações, consulte "[Sobre pull requests](/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/about-pull-requests)."{% ifversion fpt or ghes or ghec %}
| <kbd>g</kbd> <kbd>a</kbd> | Acesse a aba de **Ações**. Para obter mais informações, consulte "[Sobre ações](/actions/getting-started-with-github-actions/about-github-actions)".{% endif %}
| <kbd>g</kbd> <kbd>b</kbd> | Vai para a aba **Projects** (Projetos). Para obter mais informações, consulte "[Sobre quadros de projeto](/articles/about-project-boards)".                                                                                                                |
| <kbd>g</kbd> <kbd>w</kbd> | Vai para a aba **Wiki**. Para obter mais informações, consulte "[Sobre wikis](/communities/documenting-your-project-with-wikis/about-wikis)."{% ifversion fpt or ghec %}
| <kbd>g</kbd> <kbd>g</kbd> | Acesse a aba **Discussões**. Para obter mais informações, consulte "[Sobre discussões](/discussions/collaborating-with-your-community-using-discussions/about-discussions)".{% endif %}

## Edição de código-fonte

| Atalho                                                          | Descrição                                                                                                                                                                                           |
| --------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |{% ifversion fpt or ghec %}
| <kbd>.</kbd>                                                    | Abre um repositório ou um pull request no editor baseado na web. Para obter mais informações, consulte "[Editor baseado na web](/codespaces/developing-in-codespaces/web-based-editor)".{% endif %}
| <kbd>control b</kbd> ou <kbd>command b</kbd>                    | Insere formatação Markdown para texto em negrito                                                                                                                                                    |
| <kbd>control i</kbd> ou <kbd>command i</kbd>                    | Insere formatação Markdown para texto em itálico                                                                                                                                                    |
| <kbd>control k</kbd> ou <kbd>command k</kbd>                    | Inserts Markdown formatting for creating a link{% ifversion fpt or ghec or ghae-next or ghes > 3.3 %}
| <kbd>control shift 7</kbd> ou <kbd>command shift 7</kbd>        | Insere a formatação de Markdown para uma lista ordenada                                                                                                                                             |
| <kbd>control shift 8</kbd> ou <kbd>command shift 8</kbd>        | Inserts Markdown formatting for an unordered list                                                                                                                                                   |
| <kbd>control shift .</kbd> ou <kbd>command shift.</kbd>         | Inserts Markdown formatting for a quote{% endif %}
| <kbd>e</kbd>                                                    | Abra o arquivo de código-fonte na aba **Editar arquivo**                                                                                                                                            |
| <kbd>control f</kbd> ou <kbd>command f</kbd>                    | Começa a pesquisar no editor de arquivo                                                                                                                                                             |
| <kbd>control g</kbd> ou <kbd>command g</kbd>                    | Localiza o próximo                                                                                                                                                                                  |
| <kbd>control shift g</kbd> or <kbd>command shift g</kbd>        | Localiza o anterior                                                                                                                                                                                 |
| <kbd>control shift f</kbd> or <kbd>command option f</kbd>       | Substitui                                                                                                                                                                                           |
| <kbd>control shift r</kbd> or <kbd>command shift option f</kbd> | Substitui todos                                                                                                                                                                                     |
| <kbd>alt g</kbd>                                                | Pula para linha                                                                                                                                                                                     |
| <kbd>control z</kbd> ou <kbd>command z</kbd>                    | Desfaz                                                                                                                                                                                              |
| <kbd>control y</kbd> ou <kbd>command y</kbd>                    | Refaz                                                                                                                                                                                               |
| <kbd>command shift p</kbd>                                      | Alterna entre as abas **Edit file** (Editar aquivo) e **Preview changes** (Visualizar alterações)                                                                                                   |
| <kbd>control s</kbd> ou <kbd>comando s</kbd>                    | Escrever uma mensagem de commit                                                                                                                                                                     |

Para mais atalhos de teclado, consulte a [Documentação CodeMirror](https://codemirror.net/doc/manual.html#commands).

## Navegação de código-fonte

| Atalho       | Descrição                                                                                                                                                                  |
| ------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <kbd>t</kbd> | Ativa o localizador de arquivos                                                                                                                                            |
| <kbd>l</kbd> | Pula para uma linha no código                                                                                                                                              |
| <kbd>w</kbd> | Muda para um novo branch ou tag                                                                                                                                            |
| <kbd>y</kbd> | Expande a URL para sua forma canônica. Para obter mais informações, consulte "[Obter links permanentes em arquivos](/articles/getting-permanent-links-to-files)".          |
| <kbd>i</kbd> | Mostra ou oculta comentários em diffs. Para obter mais informações, consulte "[Comentar no diff de uma pull request](/articles/commenting-on-the-diff-of-a-pull-request)". |
| <kbd>a</kbd> | Exibir ou ocultar anotações em diffs                                                                                                                                       |
| <kbd>b</kbd> | Abre a vsualização de blame. Para obter mais informações, consulte "[Rastrear alterações em um arquivo](/articles/tracing-changes-in-a-file)".                             |

## Comentários

| Atalho                                                               | Descrição                                                                                                                                                                                                                                                      |
| -------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <kbd>control b</kbd> ou <kbd>command b</kbd>                         | Insere formatação Markdown para texto em negrito                                                                                                                                                                                                               |
| <kbd>control i</kbd> ou <kbd>command i</kbd>                         | Insere a formatação Markdown para texto em itálico{% ifversion fpt or ghae-next or ghes > 3.1 or ghec %}
| <kbd>controle e</kbd> ou <kbd>comando e</kbd>                        | Insere a formatação Markdown para código ou um comando dentro da linha{% endif %}
| <kbd>control k</kbd> ou <kbd>command k</kbd>                         | Insere formatação Markdown para criar um link                                                                                                                                                                                                                  |
| <kbd>control shift p</kbd> ou <kbd>command shift p</kbd>             | Alterna entre as abas de comentários **Escrever** e **Visualizar**{% ifversion fpt or ghae-next or ghes > 3.2 or ghec %}
| <kbd>control shift 7</kbd> ou <kbd>command shift 7</kbd>             | Insere a formatação de Markdown para uma lista ordenada                                                                                                                                                                                                        |
| <kbd>control shift 8</kbd> ou <kbd>command shift 8</kbd>             | Insere a formatação Markdown para uma lista não ordenada{% endif %}
| <kbd>control enter</kbd>                                             | Envia um comentário                                                                                                                                                                                                                                            |
| <kbd>control .</kbd> e <kbd>control [número de resposta salvo]</kbd> | Abre o menu de respostas salvas e autocompleta o campo de comentário com uma resposta salva. Para obter mais informações, consulte "[Sobre respostas salvas](/articles/about-saved-replies)".{% ifversion fpt or ghae-next or ghes > 3.2 or ghec %}
| <kbd>control shift .</kbd> ou <kbd>command shift.</kbd>              | Insere a formatação Markdown para uma citação{% endif %}{% ifversion fpt or ghec %}
| <kbd>control g</kbd> ou <kbd>command g</kbd>                         | Insere uma sugestão. Para obter mais informações, consulte "[Revisar alterações propostas em uma pull request](/pull-requests/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/reviewing-proposed-changes-in-a-pull-request)". 
{% endif %}
| <kbd>r</kbd>                                                         | Cita o texto selecionado em sua resposta. Para obter mais informações, consulte "[Sintaxe básica de gravação e formatação](/articles/basic-writing-and-formatting-syntax#quoting-text)".                                                                       |

## Listas de problemas e pull requests

| Atalho                                       | Descrição                                                                                                                                                                                                                                                        |
| -------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <kbd>c</kbd>                                 | Cria um problema                                                                                                                                                                                                                                                 |
| <kbd>control /</kbd> ou <kbd>command /</kbd> | Evidencia seu cursor na barra de pesquisa de problemas e pull requests. Para obter mais informações, consulte "[Filtrando e pesquisando problemas e pull requests](/issues/tracking-your-work-with-issues/filtering-and-searching-issues-and-pull-requests). "£" |
| <kbd>u</kbd>                                 | Filtra por autor                                                                                                                                                                                                                                                 |
| <kbd>l</kbd>                                 | Filtra por ou edita etiquetas. Para obter mais informações, consulte "[Filtrar problemas e pull requests por etiquetas](/articles/filtering-issues-and-pull-requests-by-labels)".                                                                                |
| <kbd>alt</kbd> e clique                      | Ao filtrar por etiquetas, exclui etiquetas. Para obter mais informações, consulte "[Filtrar problemas e pull requests por etiquetas](/articles/filtering-issues-and-pull-requests-by-labels)".                                                                   |
| <kbd>m</kbd>                                 | Filtra por ou edita marcos. Para obter mais informações, consulte "[Filtrar problemas e pull requests por marcos](/articles/filtering-issues-and-pull-requests-by-milestone)".                                                                                   |
| <kbd>a</kbd>                                 | Filtra por ou edita um responsável. Para obter mais informações, consulte "[Filtrar problemas e pull requests por responsáveis](/articles/filtering-issues-and-pull-requests-by-assignees)".                                                                     |
| <kbd>o</kbd> ou <kbd>enter</kbd>             | Abre um problema                                                                                                                                                                                                                                                 |

## Problemas e pull requests
| Atalho                                                       | Descrição                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| ------------------------------------------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <kbd>q</kbd>                                                 | Solicita um revisor. Para obter mais informações, consulte "[Solicitar uma revisão de pull request](/articles/requesting-a-pull-request-review/)".                                                                                                                                                                                                                                                                                                         |
| <kbd>m</kbd>                                                 | Define um marco. Para obter mais informações, consulte "[Associar marcos a problemas e pull requests](/articles/associating-milestones-with-issues-and-pull-requests/)".                                                                                                                                                                                                                                                                                   |
| <kbd>l</kbd>                                                 | Aplica uma etiqueta. Para obter mais informações, consulte "[Aplicar etiquetas a problemas e pull requests](/articles/applying-labels-to-issues-and-pull-requests/)".                                                                                                                                                                                                                                                                                      |
| <kbd>a</kbd>                                                 | Define um responsável. Para obter mais informações, consulte "[Atribuir problemas e pull requests a outros usuários {% data variables.product.company_short %}](/articles/assigning-issues-and-pull-requests-to-other-github-users/)".                                                                                                                                                                                                                     |
| <kbd>cmd + shift + p</kbd> ou <kbd>control + shift + p</kbd> | Alterna entre as abas **Escrever** e **Visualizar**{% ifversion fpt or ghec %}
| <kbd>alt</kbd> e clique                                      | Ao criar um problema a partir de uma lista de tarefas, abra o novo formulário de problemas na aba atual, mantendo <kbd>alt</kbd> pressionado e clicando no {% octicon "issue-opened" aria-label="The issue opened icon" %} no canto superior direito da tarefa. Para obter mais informações, consulte "[Sobre listas de tarefas](/issues/tracking-your-work-with-issues/creating-issues/about-task-lists)".                                                |
| <kbd>shift</kbd> e clique                                    | Ao criar um problema a partir de uma lista de tarefas, abra o novo formulário de problemas em uma nova aba mantendo <kbd>shift</kbd> pressionado e clicando em {% octicon "issue-opened" aria-label="The issue opened icon" %} no canto superior direito da tarefa. Para obter mais informações, consulte "[Sobre listas de tarefas](/issues/tracking-your-work-with-issues/creating-issues/about-task-lists)".                                            |
| <kbd>command</kbd> ou <kbd>control + shift</kbd> e clique    | Ao criar um problema a partir de uma lista de tarefas, abra o novo formulário de problemas na nova janela mantendo <kbd>command</kbd> ou <kbd>controle + shift</kbd> pressionado e clicando em {% octicon "issue-opened" aria-label="The issue opened icon" %} no canto superior direito da tarefa. Para obter mais informações, consulte "[Sobre listas de tarefas](/issues/tracking-your-work-with-issues/creating-issues/about-task-lists)."{% endif %}

## Alterações em pull requests

| Atalho                                       | Descrição                                                                                                                                                                                                                                                                                                                                                                  |
| -------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <kbd>c</kbd>                                 | Abre a lista de commits na pull request                                                                                                                                                                                                                                                                                                                                    |
| <kbd>t</kbd>                                 | Abre a lista de arquivos alterados na pull request                                                                                                                                                                                                                                                                                                                         |
| <kbd>j</kbd>                                 | Move a seleção para baixo na lista                                                                                                                                                                                                                                                                                                                                         |
| <kbd>k</kbd>                                 | Move a seleção para cima na lista                                                                                                                                                                                                                                                                                                                                          |
| <kbd>cmd + shift + enter </kbd>              | Adiciona um comentário único no diff da pull request                                                                                                                                                                                                                                                                                                                       |
| <kbd>alt</kbd> e clique                      | Alterna entre opções de recolhimento e expansão de todos os comentários de revisão desatualizados em uma pull request ao manter pressionada a tecla `alt` e clicar em **Mostrar desatualizados** ou **Ocultar desatualizados**.|{% ifversion fpt or ghes or ghae or ghec %}
| Clique, em seguida <kbd>shift</kbd> e clique | Comente em várias linhas de uma pull request clicando em um número de linha, mantendo pressionado <kbd>shift</kbd>, depois clique em outro número de linha. Para obter mais informações, consulte "[Comentando em uma pull request](/github/collaborating-with-issues-and-pull-requests/commenting-on-a-pull-request#adding-line-comments-to-a-pull-request)."
{% endif %}

## Quadros de projeto

### Mover uma coluna

| Atalho                                                                                               | Descrição                                    |
| ---------------------------------------------------------------------------------------------------- | -------------------------------------------- |
| <kbd>enter</kbd> ou <kbd>space</kbd>                                                                 | Começa a mover a coluna em evidência         |
| <kbd>escape</kbd>                                                                                    | Cancela o movimento em curso                 |
| <kbd>enter</kbd>                                                                                     | Completa o movimento em curso                |
| <kbd>←</kbd> ou <kbd>h</kbd>                                                                         | Move a coluna para a esquerda                |
| <kbd>command + ←</kbd> ou <kbd>command + h</kbd> ou <kbd>control + ←</kbd> ou <kbd>control + h</kbd> | Move a coluna para a posição mais à esquerda |
| <kbd>→</kbd> ou <kbd>l</kbd>                                                                         | Move a coluna para a direita                 |
| <kbd>command + →</kbd> ou <kbd>command + l</kbd> ou <kbd>control + →</kbd> ou <kbd>control + l</kbd> | Move a coluna para a posição mais à direita  |

### Mover um cartão

| Atalho                                                                                                                               | Descrição                                                     |
| ------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------- |
| <kbd>enter</kbd> ou <kbd>space</kbd>                                                                                                 | Começa a mover o cartão em evidência                          |
| <kbd>escape</kbd>                                                                                                                    | Cancela o movimento em curso                                  |
| <kbd>enter</kbd>                                                                                                                     | Completa o movimento em curso                                 |
| <kbd>↓</kbd> ou <kbd>j</kbd>                                                                                                         | Move o cartão para baixo                                      |
| <kbd>command + ↓</kbd> ou <kbd>command + j</kbd> ou <kbd>control + ↓</kbd> ou <kbd>control + j</kbd>                                 | Move o cartão para a parte inferior da coluna                 |
| <kbd>↑</kbd> ou <kbd>k</kbd>                                                                                                         | Move o cartão para cima                                       |
| <kbd>command + ↑</kbd> ou <kbd>command + k</kbd> ou <kbd>control + ↑</kbd> ou <kbd>control + k</kbd>                                 | Move o cartão para a parte superior da coluna                 |
| <kbd>←</kbd> ou <kbd>h</kbd>                                                                                                         | Move o cartão para a parte inferior da coluna à esquerda      |
| <kbd>shift + ←</kbd> ou <kbd>shift + h</kbd>                                                                                         | Move o cartão para a parte superior da coluna à esquerda      |
| <kbd>command + ←</kbd> ou <kbd>command + h</kbd> ou <kbd>control + ←</kbd> ou <kbd>control + h</kbd>                                 | Move o cartão para a parte inferior da coluna mais à esquerda |
| <kbd>command + shift + ←</kbd> ou <kbd>command + shift + h</kbd> ou <kbd>control + shift + ←</kbd> ou <kbd>control + shift + h</kbd> | Move o cartão para a parte superior da coluna mais à esquerda |
| <kbd>→</kbd>                                                                                                                         | Move o cartão para a parte inferior da coluna à direita       |
| <kbd>shift + →</kbd> ou <kbd>shift + l</kbd>                                                                                         | Move o cartão para a parte superior da coluna à direita       |
| <kbd>command + →</kbd> ou <kbd>command + l</kbd> ou <kbd>control + →</kbd> ou <kbd>control + l</kbd>                                 | Move o cartão para a parte inferior da coluna mais à direita  |
| <kbd>command + shift + →</kbd> ou <kbd>command + shift + l</kbd> ou <kbd>control + shift + →</kbd> ou <kbd>control + shift + l</kbd> | Move o cartão para a parte inferior da coluna mais à direita  |

### Pré-visualizar um cartão

| Atalho         | Descrição                                |
| -------------- | ---------------------------------------- |
| <kbd>esc</kbd> | Fecha o painel de visualização do cartão |

{% ifversion fpt or ghec %}
## {% data variables.product.prodname_actions %}

| Atalho                                                    | Descrição                                                                            |
| --------------------------------------------------------- | ------------------------------------------------------------------------------------ |
| <kbd>command + space </kbd> ou <kbd>control + space</kbd> | No editor de fluxo de trabalho, obtém sugestões para o arquivo de fluxo de trabalho. |
| <kbd>g</kbd> <kbd>f</kbd>                                 | Acesse o arquivo do fluxo de trabalho                                                |
| <kbd>shift + t</kbd> or <kbd>T</kbd>                      | Alternar as marcas de tempo nos registros                                            |
| <kbd>shift + f</kbd> ou <kbd>F</kbd>                      | Alternar os registros em tela cheia                                                  |
| <kbd>esc</kbd>                                            | Sair dos registros em tela cheia                                                     |

{% endif %}

## Notificações
{% ifversion fpt or ghes or ghae or ghec %}
| Atalho               | Descrição            |
| -------------------- | -------------------- |
| <kbd>e</kbd>         | Marcar como pronto   |
| <kbd>shift + u</kbd> | Marcar como não lido |
| <kbd>shift + i</kbd> | Marca como lido      |
| <kbd>shift + m</kbd> | Cancelar assinatura  |

{% else %}

| Atalho                                       | Descrição       |
| -------------------------------------------- | --------------- |
| <kbd>e</kbd> ou <kbd>I</kbd> ou <kbd>y</kbd> | Marca como lido |
| <kbd>shift + m</kbd>                         | Desativa o som  |
{% endif %}

## gráfico de rede

| Atalho                                       | Descrição                        |
| -------------------------------------------- | -------------------------------- |
| <kbd>←</kbd> ou <kbd>h</kbd>                 | Rola para a esquerda             |
| <kbd>→</kbd> ou <kbd>l</kbd>                 | Rola para a direita              |
| <kbd>↑</kbd> ou <kbd>k</kbd>                 | Rola para cima                   |
| <kbd>↓</kbd> ou <kbd>j</kbd>                 | Rola para baixo                  |
| <kbd>shift + ←</kbd> ou <kbd>shift + h</kbd> | Rola até o final para a esquerda |
| <kbd>shift + →</kbd> ou <kbd>shift + l</kbd> | Rola até o final para a direita  |
| <kbd>shift + ↑</kbd> ou <kbd>shift + k</kbd> | Rola até o final para cima       |
| <kbd>shift + ↓</kbd> ou <kbd>shift + j</kbd> | Rola até o final para baixo      |
