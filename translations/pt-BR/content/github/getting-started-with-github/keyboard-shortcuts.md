---
title: Atalhos de teclado
intro: 'Quase todas as páginas no {% data variables.product.product_name %} tem um atalho de teclado que executa as ações mais rapidamente.'
redirect_from:
  - /articles/using-keyboard-shortcuts/
  - /categories/75/articles/
  - /categories/keyboard-shortcuts/
  - /articles/keyboard-shortcuts
versions:
  free-pro-team: '*'
  enterprise-server: '*'
---


### Sobre atalhos do teclado

Digitar <kbd>?</kbd> no {% data variables.product.product_name %} exibe uma caixa de diálogo que lista os atalhos de teclado disponíveis para aquela página. Você pode usar esses atalhos de teclado para executar ações no site sem precisar usar o mouse para navegar.

Veja abaixo uma lista dos atalhos de teclado disponíveis.

### Atalhos para o site

| Atalho                       | Descrição                                                                                                                                                                                                                                                                                                                                                         |
| ---------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <kbd>s</kbd> or <kbd>/</kbd> | Evidencia a barra de pesquisa. For more information, see "[About searching on {% data variables.product.company_short %}](/articles/about-searching-on-github)."                                                                                                                                                                                             |
| <kbd>g</kbd> <kbd>n</kbd>    | Vai para suas notificações. Para obter mais informações, consulte {% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.20" %}"[Sobre notificações](/github/managing-subscriptions-and-notifications-on-github/about-notifications){% else %}"[Sobre notificações](/github/receiving-notifications-about-activity-on-github/about-notifications)"{% endif %}." |
| <kbd>esc</kbd>               | Quando direcionado a um hovercard de usuário, problema ou pull request, fecha o hovercard e redireciona para o elemento no qual o hovercard está                                                                                                                                                                                                                  |

### Repositórios

| Atalho                    | Descrição                                                                                                                                            |
| ------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- |
| <kbd>g</kbd> <kbd>c</kbd> | Vai para a aba **Code** (Código)                                                                                                                     |
| <kbd>g</kbd> <kbd>i</kbd> | Vai para a aba **Issues** (Problemas). Para obter mais informações, consulte "[Sobre problemas](/articles/about-issues)".                            |
| <kbd>g</kbd> <kbd>p</kbd> | Vai para a aba **Pull requests**. Para obter mais informações, consulte "[Sobre pull requests](/articles/about-pull-requests)".                      |
| <kbd>g</kbd> <kbd>a</kbd> | Acesse a aba de **Ações**. Para obter mais informações, consulte "[Sobre ações](/actions/getting-started-with-github-actions/about-github-actions)". |
| <kbd>g</kbd> <kbd>b</kbd> | Vai para a aba **Projects** (Projetos). Para obter mais informações, consulte "[Sobre quadros de projeto](/articles/about-project-boards)".          |
| <kbd>g</kbd> <kbd>w</kbd> | Vai para a aba **Wiki**. Para obter mais informações, consulte "[Sobre wikis](/articles/about-wikis)".                                               |

### Edição de código-fonte

| Atalho                                                          | Descrição                                                                                         |
| --------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- |
| <kbd>e</kbd>                                                    | Abra o arquivo de código-fonte na aba **Editar arquivo**                                          |
| <kbd>control f</kbd> ou <kbd>command f</kbd>                    | Começa a pesquisar no editor de arquivo                                                           |
| <kbd>control g</kbd> ou <kbd>command g</kbd>                    | Localiza o próximo                                                                                |
| <kbd>shift control g</kbd> ou <kbd>shift command g</kbd>        | Localiza o anterior                                                                               |
| <kbd>shift control f</kbd> ou <kbd>command option f</kbd>       | Substitui                                                                                         |
| <kbd>shift control r</kbd> ou <kbd>shift command option f</kbd> | Substitui todos                                                                                   |
| <kbd>alt g</kbd>                                                | Pula para linha                                                                                   |
| <kbd>control z</kbd> ou <kbd>command z</kbd>                    | Desfaz                                                                                            |
| <kbd>control y</kbd> ou <kbd>command y</kbd>                    | Refaz                                                                                             |
| <kbd>cmd + shift + p</kbd>                                      | Alterna entre as abas **Edit file** (Editar aquivo) e **Preview changes** (Visualizar alterações) |

Para mais atalhos de teclado, consulte a [Documentação CodeMirror](https://codemirror.net/doc/manual.html#commands).

### Navegação de código-fonte

| Atalho       | Descrição                                                                                                                                                                  |
| ------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <kbd>t</kbd> | Ativa o localizador de arquivos                                                                                                                                            |
| <kbd>l</kbd> | Pula para uma linha no código                                                                                                                                              |
| <kbd>w</kbd> | Muda para um novo branch ou tag                                                                                                                                            |
| <kbd>y</kbd> | Expande a URL para sua forma canônica. Para obter mais informações, consulte "[Obter links permanentes em arquivos](/articles/getting-permanent-links-to-files)".          |
| <kbd>i</kbd> | Mostra ou oculta comentários em diffs. Para obter mais informações, consulte "[Comentar no diff de uma pull request](/articles/commenting-on-the-diff-of-a-pull-request)". |
| <kbd>b</kbd> | Abre a vsualização de blame. Para obter mais informações, consulte "[Rastrear alterações em um arquivo](/articles/tracing-changes-in-a-file)".                             |

### Comentários

| Atalho                                                               | Descrição                                                                                                                                                                                                                      |
| -------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| <kbd>control b</kbd> ou <kbd>command b</kbd>                         | Insere formatação Markdown para texto em negrito                                                                                                                                                                               |
| <kbd>control i</kbd> ou <kbd>command i</kbd>                         | Insere formatação Markdown para texto em itálico                                                                                                                                                                               |
| <kbd>control k</kbd> ou <kbd>command k</kbd>                         | Insere formatação Markdown para criar um link                                                                                                                                                                                  |
| <kbd>control shift p</kbd> ou <kbd>command shift p</kbd>             | Alterna entre as abas de comentários **Write** (Escrever) e **Preview** (Visualizar)                                                                                                                                           |
| <kbd>control enter</kbd>                                             | Envia um comentário                                                                                                                                                                                                            |
| <kbd>control .</kbd> e <kbd>control [número de resposta salvo]</kbd> | Abre o menu de respostas salvas e autocompleta o campo de comentário com uma resposta salva. Para obter mais informações, consulte "[Sobre respostas salvas](/articles/about-saved-replies)".{% if currentVersion == "free-pro-team@latest" %}
| <kbd>control g</kbd> ou <kbd>command g</kbd>                         | Insere uma sugestão. Para obter mais informações, consulte "[Revisar alterações propostas em uma pull request](/articles/reviewing-proposed-changes-in-a-pull-request)". |{% endif %}
| <kbd>r</kbd>                                                         | Cita o texto selecionado em sua resposta. Para obter mais informações, consulte "[Sintaxe básica de gravação e formatação](/articles/basic-writing-and-formatting-syntax#quoting-text)".                                       |

### Listas de problemas e pull requests

| Atalho                                       | Descrição                                                                                                                                                                                                                             |
| -------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <kbd>c</kbd>                                 | Cria um problema                                                                                                                                                                                                                      |
| <kbd>control /</kbd> ou <kbd>command /</kbd> | Evidencia seu cursor na barra de pesquisa de problemas e pull requests. Para obter mais informações, consulte "[Usar a pesquisa para filtrar problemas e pull requests](/articles/using-search-to-filter-issues-and-pull-requests)".| |
| <kbd>u</kbd>                                 | Filtra por autor                                                                                                                                                                                                                      |
| <kbd>l</kbd>                                 | Filtra por ou edita etiquetas. Para obter mais informações, consulte "[Filtrar problemas e pull requests por etiquetas](/articles/filtering-issues-and-pull-requests-by-labels)".                                                     |
| <kbd>alt</kbd> e clique                      | Ao filtrar por etiquetas, exclui etiquetas. Para obter mais informações, consulte "[Filtrar problemas e pull requests por etiquetas](/articles/filtering-issues-and-pull-requests-by-labels)".                                        |
| <kbd>m</kbd>                                 | Filtra por ou edita marcos. Para obter mais informações, consulte "[Filtrar problemas e pull requests por marcos](/articles/filtering-issues-and-pull-requests-by-milestone)".                                                        |
| <kbd>a</kbd>                                 | Filtra por ou edita um responsável. Para obter mais informações, consulte "[Filtrar problemas e pull requests por responsáveis](/articles/filtering-issues-and-pull-requests-by-assignees)".                                          |
| <kbd>o</kbd> ou <kbd>enter</kbd>             | Abre um problema                                                                                                                                                                                                                      |

### Problemas e pull requests
| Atalho                                                       | Descrição                                                                                                                                                                                                                                   |
| ------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <kbd>q</kbd>                                                 | Solicita um revisor. Para obter mais informações, consulte "[Solicitar uma revisão de pull request](/articles/requesting-a-pull-request-review/)".                                                                                          |
| <kbd>m</kbd>                                                 | Define um marco. Para obter mais informações, consulte "[Associar marcos a problemas e pull requests](/articles/associating-milestones-with-issues-and-pull-requests/)".                                                                    |
| <kbd>l</kbd>                                                 | Aplica uma etiqueta. Para obter mais informações, consulte "[Aplicar etiquetas a problemas e pull requests](/articles/applying-labels-to-issues-and-pull-requests/)".                                                                       |
| <kbd>a</kbd>                                                 | Define um responsável. Para obter mais informações, consulte "[Atribuir problemas e pull requests a outros usuários {% data variables.product.company_short %}](/articles/assigning-issues-and-pull-requests-to-other-github-users/)". |
| <kbd>cmd + shift + p</kbd> ou <kbd>control + shift + p</kbd> | Alterna entre as abas **Write** (Escrever) e **Preview** (Visualizar)                                                                                                                                                                       |

### Alterações em pull requests

| Atalho                                       | Descrição                                                                                                                                                                                                                                                                                                                                                                  |
| -------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <kbd>c</kbd>                                 | Abre a lista de commits na pull request                                                                                                                                                                                                                                                                                                                                    |
| <kbd>t</kbd>                                 | Abre a lista de arquivos alterados na pull request                                                                                                                                                                                                                                                                                                                         |
| <kbd>j</kbd>                                 | Move a seleção para baixo na lista                                                                                                                                                                                                                                                                                                                                         |
| <kbd>k</kbd>                                 | Move a seleção para cima na lista                                                                                                                                                                                                                                                                                                                                          |
| <kbd>cmd + shift + enter </kbd>              | Adiciona um comentário único no diff da pull request                                                                                                                                                                                                                                                                                                                       |
| <kbd>alt</kbd> e clique                      | Alterna entre opções de recolhimento e expansão de todos os comentários de revisão desatualizados em uma pull request ao manter pressionada a tecla `alt` e clicar em **Mostrar desatualizados** ou **Ocultar desatualizados**.|{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.20" %}
| Clique, em seguida <kbd>shift</kbd> e clique | Comente em várias linhas de uma pull request clicando em um número de linha, mantendo pressionado <kbd>shift</kbd>, depois clique em outro número de linha. Para obter mais informações, consulte "[Comentando em uma pull request](/github/collaborating-with-issues-and-pull-requests/commenting-on-a-pull-request#adding-line-comments-to-a-pull-request)."|{% endif %}

### Quadros de projeto

#### Mover uma coluna

| Atalho                                                                                       | Descrição                                    |
| -------------------------------------------------------------------------------------------- | -------------------------------------------- |
| <kbd>enter</kbd> ou <kbd>space</kbd>                                                         | Começa a mover a coluna em evidência         |
| <kbd>escape</kbd>                                                                            | Cancela o movimento em curso                 |
| <kbd>enter</kbd>                                                                             | Completa o movimento em curso                |
| <kbd>←</kbd> ou <kbd>h</kbd>                                                                 | Move a coluna para a esquerda                |
| <kbd>command ←</kbd> ou <kbd>command h</kbd> ou <kbd>control ←</kbd> ou <kbd>control h</kbd> | Move a coluna para a posição mais à esquerda |
| <kbd>→</kbd> ou <kbd>l</kbd>                                                                 | Move a coluna para a direita                 |
| <kbd>command →</kbd> ou <kbd>command l</kbd> ou <kbd>control →</kbd> ou <kbd>control l</kbd> | Move a coluna para a posição mais à direita  |

#### Mover um cartão

| Atalho                                                                                                               | Descrição                                                     |
| -------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------- |
| <kbd>enter</kbd> ou <kbd>space</kbd>                                                                                 | Começa a mover o cartão em evidência                          |
| <kbd>escape</kbd>                                                                                                    | Cancela o movimento em curso                                  |
| <kbd>enter</kbd>                                                                                                     | Completa o movimento em curso                                 |
| <kbd>↓</kbd> ou <kbd>j</kbd>                                                                                         | Move o cartão para baixo                                      |
| <kbd>command ↓</kbd> ou <kbd>command j</kbd> ou <kbd>control ↓</kbd> ou <kbd>control j</kbd>                         | Move o cartão para a parte inferior da coluna                 |
| <kbd>↑</kbd> ou <kbd>k</kbd>                                                                                         | Move o cartão para cima                                       |
| <kbd>command ↑</kbd> ou <kbd>command k</kbd> ou <kbd>control ↑</kbd> ou <kbd>control k</kbd>                         | Move o cartão para a parte superior da coluna                 |
| <kbd>←</kbd> ou <kbd>h</kbd>                                                                                         | Move o cartão para a parte inferior da coluna à esquerda      |
| <kbd>shift ←</kbd> ou <kbd>shift h</kbd>                                                                             | Move o cartão para a parte superior da coluna à esquerda      |
| <kbd>command ←</kbd> ou <kbd>command h</kbd> ou <kbd>control ←</kbd> ou <kbd>control h</kbd>                         | Move o cartão para a parte inferior da coluna mais à esquerda |
| <kbd>command shift ←</kbd> ou <kbd>command shift h</kbd> ou <kbd>control shift ←</kbd> ou <kbd>control shift h</kbd> | Move o cartão para a parte superior da coluna mais à esquerda |
| <kbd>→</kbd>                                                                                                         | Move o cartão para a parte inferior da coluna à direita       |
| <kbd>shift →</kbd> ou <kbd>shift l</kbd>                                                                             | Move o cartão para a parte superior da coluna à direita       |
| <kbd>command →</kbd> ou <kbd>command l</kbd> ou <kbd>control →</kbd> ou <kbd>control l</kbd>                         | Move o cartão para a parte inferior da coluna mais à direita  |
| <kbd>command shift →</kbd> ou <kbd>command shift l</kbd> ou <kbd>control shift →</kbd> ou <kbd>control shift l</kbd> | Move o cartão para a parte inferior da coluna mais à direita  |

#### Pré-visualizar um cartão

| Atalho         | Descrição                                |
| -------------- | ---------------------------------------- |
| <kbd>esc</kbd> | Fecha o painel de visualização do cartão |

{% if currentVersion == "free-pro-team@latest" %}
### {% data variables.product.prodname_actions %}

| Atalho                                                | Descrição                                                                            |
| ----------------------------------------------------- | ------------------------------------------------------------------------------------ |
| <kbd>command space </kbd> ou <kbd>control space</kbd> | No editor de fluxo de trabalho, obtém sugestões para o arquivo de fluxo de trabalho. |

{% endif %}

### Notificações
{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.20" %}
| Atalho             | Descrição            |
| ------------------ | -------------------- |
| <kbd>e</kbd>       | Marcar como pronto   |
| <kbd>shift u</kbd> | Marcar como não lido |
| <kbd>shift i</kbd> | Marca como lido      |
| <kbd>shift m</kbd> | Cancelar assinatura  |

{% else %}

| Atalho                                       | Descrição       |
| -------------------------------------------- | --------------- |
| <kbd>e</kbd> ou <kbd>I</kbd> ou <kbd>y</kbd> | Marca como lido |
| <kbd>shift m</kbd>                           | Desativa o som  |
{% endif %}

### gráfico de rede

| Atalho                                   | Descrição                        |
| ---------------------------------------- | -------------------------------- |
| <kbd>←</kbd> ou <kbd>h</kbd>             | Rola para a esquerda             |
| <kbd>→</kbd> ou <kbd>l</kbd>             | Rola para a direita              |
| <kbd>↑</kbd> ou <kbd>k</kbd>             | Rola para cima                   |
| <kbd>↓</kbd> ou <kbd>j</kbd>             | Rola para baixo                  |
| <kbd>shift ←</kbd> ou <kbd>shift h</kbd> | Rola até o final para a esquerda |
| <kbd>shift →</kbd> ou <kbd>shift l</kbd> | Rola até o final para a direita  |
| <kbd>shift ↑</kbd> ou <kbd>shift k</kbd> | Rola até o final para cima       |
| <kbd>shift ↓</kbd> ou <kbd>shift j</kbd> | Rola até o final para baixo      |
