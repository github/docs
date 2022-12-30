---
title: Atalhos do teclado
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
ms.openlocfilehash: ad75d2afe5750ee2596d2695334ab5c7101aee79
ms.sourcegitcommit: f5ec7f52d2945ba8b7c14f8f604e4784a8feda19
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 11/22/2022
ms.locfileid: '148180774'
---
## Sobre atalhos do teclado

Se você digitar <kbd>?</kbd> no {% data variables.product.prodname_dotcom %}, será exibida uma caixa de diálogo que lista os atalhos de teclado disponíveis para essa página. Você pode usar esses atalhos de teclado para executar ações no site sem precisar usar o mouse para navegar.

{% ifversion keyboard-shortcut-accessibility-setting %} É possível desabilitar atalhos de teclas de caractere e permitir atalhos que usam teclas modificadoras nas configurações de acessibilidade. Para obter mais informações, confira "[Como gerenciar as configurações de acessibilidade](/account-and-profile/setting-up-and-managing-your-personal-account-on-github/managing-personal-account-settings/managing-accessibility-settings)".{% endif %}

{% ifversion command-palette %} A {% data variables.product.prodname_command_palette %} também fornece acesso rápido a uma ampla gama de ações, sem a necessidade de lembrar os atalhos de teclado. Para obter mais informações, confira "[{% data variables.product.prodname_command_palette %}](/get-started/using-github/github-command-palette)".{% endif %}

As seções a seguir listam alguns dos atalhos de teclado disponíveis, organizados pelas páginas em que você pode usá-los em {% data variables.location.product_location %}.

## Atalhos para o site

| Atalho de teclado | Descrição
|-----------|------------
|<kbd>S</kbd> ou <kbd>/</kbd> | Evidencia a barra de pesquisa. Para obter mais informações, confira "[Sobre a pesquisa no {% data variables.product.company_short %}](/search-github/getting-started-with-searching-on-github/about-searching-on-github)".
|<kbd>G</kbd> <kbd>N</kbd> | Vai para suas notificações. Para obter mais informações, confira "[Sobre as notificações](/github/managing-subscriptions-and-notifications-on-github/about-notifications)".
|<kbd>Esc</kbd> | Quando direcionado a um hovercard de usuário, problema ou pull request, fecha o hovercard e redireciona para o elemento no qual o hovercard está
{% ifversion command-palette %}|<kbd>Comando</kbd>+<kbd>K</kbd> (Mac) ou </br> <kbd>CTRL</kbd>+<kbd>K</kbd> (Windows/Linux) | Abre a {% data variables.product.prodname_command_palette %}. Se você estiver editando um texto em Markdown, abra a paleta de comandos com <kbd>Comando</kbd>+<kbd>Opção</kbd>+<kbd>K</kbd> ou <kbd>CTRL</kbd>+<kbd>Alt</kbd>+<kbd>K</kbd>. Para obter mais informações, confira "[{% data variables.product.prodname_command_palette %}](/get-started/using-github/github-command-palette)".{% endif %}

## Repositórios

| Atalho de teclado | Descrição
|-----------|------------
|<kbd>G</kbd> <kbd>C</kbd> | Acessa a guia **Código**
|<kbd>G</kbd> <kbd>I</kbd> | Acessa a guia **Problemas**. Para obter mais informações, confira "[Sobre os problemas](/articles/about-issues)".
|<kbd>G</kbd> <kbd>P</kbd> | Acessa a guia **Solicitações de pull**. Para obter mais informações, confira "[Sobre as solicitações de pull](/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/about-pull-requests)".{% ifversion fpt or ghes or ghec %}
|<kbd>G</kbd> <kbd>A</kbd> | Acessa a guia **Ações**. Para obter mais informações, confira "[Sobre as ações](/actions/getting-started-with-github-actions/about-github-actions)".{% endif %}
|<kbd>G</kbd> <kbd>B</kbd> | Acessa a guia **Projetos**. Para obter mais informações, confira "[Sobre os quadros de projetos](/articles/about-project-boards)".
|<kbd>G</kbd> <kbd>W</kbd> | Acessa a guia **Wiki**. Para obter mais informações, confira "[Sobre os wikis](/communities/documenting-your-project-with-wikis/about-wikis)".{% ifversion discussions %}
|<kbd>G</kbd> <kbd>G</kbd> | Acessa a guia **Discussões**. Para obter mais informações, confira "[Sobre as discussões](/discussions/collaborating-with-your-community-using-discussions/about-discussions)".{% endif %}

## Edição de código-fonte

| Atalho de teclado | Descrição |-----------|------------{% ifversion fpt or ghec %} |<kbd>.</kbd> | Abre um repositório ou uma solicitação de pull no editor baseado na Web na mesma guia do navegador. Você precisa estar conectado para usar o editor. Para obter mais informações, confira "[Como abrir o editor baseado na Web](/codespaces/developing-in-codespaces/web-based-editor)".
|<kbd>></kbd> | Abre um repositório ou uma solicitação de pull no editor baseado na Web em uma nova guia do navegador. Você precisa estar conectado para usar o editor. Para obter mais informações, confira "[Editor baseado na Web](/codespaces/developing-in-codespaces/web-based-editor)".{% endif %} |<kbd>Comando</kbd>+<kbd>B</kbd> (Mac) ou </br> <kbd>CTRL</kbd>+<kbd>B</kbd> (Windows/Linux) | Insere a formatação Markdown para colocar um texto em negrito |<kbd>Comando</kbd>+<kbd>I</kbd> (Mac) ou </br> <kbd>CTRL</kbd>+<kbd>I</kbd> (Windows/Linux) | Insere a formatação Markdown para colocar um texto em itálico |<kbd>Comando</kbd>+<kbd>K</kbd> (Mac) ou </br> <kbd>CTRL</kbd>+<kbd>K</kbd> (Windows/Linux) | Insere a formatação Markdown para criar um link{% ifversion fpt or ghec or ghae or ghes > 3.3 %} |<kbd>Comando</kbd>+<kbd>SHIFT</kbd>+<kbd>7</kbd> (Mac) ou </br> <kbd>CTRL</kbd>+<kbd>SHIFT</kbd>+<kbd>7</kbd> (Windows/Linux) | Insere a formatação Markdown para uma lista ordenada |<kbd>Comando</kbd>+<kbd>SHIFT</kbd>+<kbd>8</kbd> (Mac) ou </br> <kbd>CTRL</kbd>+<kbd>SHIFT</kbd>+<kbd>8</kbd> (Windows/Linux) | Insere a formatação Markdown para uma lista não ordenada |<kbd>Comando</kbd>+<kbd>SHIFT</kbd>+<kbd>.</kbd> (Mac) ou </br> <kbd>CTRL</kbd>+<kbd>SHIFT</kbd>+<kbd>.</kbd> (Windows/Linux) | Insere a formatação Markdown para uma cotação{% endif %} |<kbd>E</kbd> | Abre o arquivo de código aberto na guia **Editar arquivo** |<kbd>Comando</kbd>+<kbd>F</kbd> (Mac) ou </br> <kbd>CTRL</kbd>+<kbd>F</kbd> (Windows/Linux) | Começa a pesquisa no editor de arquivos |<kbd>Comando</kbd>+<kbd>G</kbd> (Mac) ou </br> <kbd>CTRL</kbd>+<kbd>G</kbd> (Windows/Linux) | Localizar próximo |<kbd>Comando</kbd>+<kbd>SHIFT</kbd>+<kbd>G</kbd> (Mac) ou </br> <kbd>CTRL</kbd>+<kbd>SHIFT</kbd>+<kbd>G</kbd> (Windows/Linux) | Localizar anterior |<kbd>Comando</kbd>+<kbd>Opção</kbd>+<kbd>F</kbd> (Mac) ou </br> <kbd>CTRL</kbd>+<kbd>SHIFT</kbd>+<kbd>F</kbd> (Windows/Linux) | Substituir |<kbd>Comando</kbd>+<kbd>SHIFT</kbd>+<kbd>Opção</kbd>+<kbd>F</kbd> (Mac) ou </br> <kbd>CTRL</kbd>+<kbd>SHIFT</kbd>+<kbd>R</kbd> (Windows/Linux) | Substituir tudo |<kbd>Alt</kbd>+<kbd>G</kbd> | Ir para a linha |<kbd>Comando</kbd>+<kbd>Z</kbd> (Mac) ou </br> <kbd>CTRL</kbd>+<kbd>Z</kbd> (Windows/Linux) | Desfazer |<kbd>Comando</kbd>+<kbd>Y</kbd> (Mac) ou </br> <kbd>CTRL</kbd>+<kbd>Y</kbd> (Windows/Linux) | Refazer |<kbd>Comando</kbd>+<kbd>SHIFT</kbd>+<kbd>P</kbd> | Alterna entre as guias **Editar arquivo** e **Visualizar alterações** |<kbd>Comando</kbd>+<kbd>S</kbd> (Mac) ou </br> <kbd>CTRL</kbd>+<kbd>S</kbd> (Windows/Linux) | Grava uma mensagem de commit

Para obter mais atalhos de teclado, confira a [documentação do CodeMirror](https://codemirror.net/doc/manual.html#commands).

## Navegação de código-fonte

| Atalho de teclado | Descrição
|-----------|------------
|<kbd>T</kbd> | Ativa o localizador de arquivos
|<kbd>L</kbd> | Pula para uma linha no código
|<kbd>W</kbd> | Muda para um novo branch ou tag
|<kbd>S</kbd> | Expande a URL para sua forma canônica. Para obter mais informações, confira "[Como obter links permanentes para arquivos](/articles/getting-permanent-links-to-files)".
|<kbd>I</kbd> | Mostra ou oculta comentários em diffs. Para obter mais informações, confira "[Como adicionar um comentário sobre a comparação de uma solicitação de pull](/articles/commenting-on-the-diff-of-a-pull-request)".
|<kbd>A</kbd> | Exibir ou ocultar anotações em diffs
|<kbd>B</kbd> | Abre a vsualização de blame. Para obter mais informações, confira "[Como rastrear alterações em um arquivo](/articles/tracing-changes-in-a-file)".

## Comentários

| Atalho de teclado | Descrição
|-----------|------------
|<kbd>Comando</kbd>+<kbd>B</kbd> (Mac) ou </br> <kbd>CTRL</kbd>+<kbd>B</kbd> (Windows/Linux) | Insere formatação Markdown para texto em negrito
|<kbd>Comando</kbd>+<kbd>I</kbd> (Mac) ou </br> <kbd>CTRL</kbd>+<kbd>I</kbd> (Windows/Linux) | Insere formatação Markdown para texto em itálico
|<kbd>Comando</kbd>+<kbd>E</kbd> (Mac) ou </br> <kbd>CTRL</kbd>+<kbd>E</kbd> (Windows/Linux) | Insere a formatação Markdown do código ou um comando em uma linha{% ifversion fpt or ghae > 3.3 or ghes or ghec %}
|<kbd>Comando</kbd>+<kbd>K</kbd> (Mac) ou </br> <kbd>CTRL</kbd>+<kbd>K</kbd> (Windows/Linux) | Insere a formatação Markdown para criar o link{% endif %}{% ifversion fpt or ghae > 3.5 or ghes > 3.5 or ghec %}
|<kbd>Comando</kbd>+<kbd>V</kbd> (Mac) ou </br> <kbd>Ctrl</kbd>+<kbd>V</kbd> (Windows/Linux) | Cria um link do Markdown quando aplicado sobre texto realçado{% endif %}
|<kbd>Comando</kbd>+<kbd>SHIFT</kbd>+<kbd>P</kbd> (Mac) ou </br> <kbd>CTRL</kbd>+<kbd>SHIFT</kbd>+<kbd>P</kbd> (Windows/Linux) | Alterna entre as guias de comentário **Gravação** e **Visualização**{% ifversion fpt or ghae or ghes > 3.4 or ghec %}
|<kbd>Comando</kbd>+<kbd>SHIFT</kbd>+<kbd>V</kbd> (Mac) ou </br> <kbd>CTRL</kbd>+<kbd>SHIFT</kbd>+<kbd>V</kbd> (Windows/Linux) | Cola o link HTML como texto sem formatação{% endif %}
|<kbd>Command</kbd>+<kbd>Shift</kbd>+<kbd>Option</kbd>+<kbd>V</kbd> (Mac) ou </br> <kbd>Ctrl</kbd>+<kbd>Shift</kbd>+<kbd>Alt</kbd>+<kbd>V</kbd> (Windows/Linux) | Cola o link HTML como texto sem formatação
|<kbd>Comando</kbd>+<kbd>SHIFT</kbd>+<kbd>7</kbd> (Mac) ou </br> <kbd>CTRL</kbd>+<kbd>SHIFT</kbd>+<kbd>7</kbd> (Windows/Linux) | Insere a formatação de Markdown para uma lista ordenada
|<kbd>Comando</kbd>+<kbd>SHIFT</kbd>+<kbd>8</kbd> (Mac) ou </br> <kbd>CTRL</kbd>+<kbd>SHIFT</kbd>+<kbd>8</kbd> (Windows/Linux) | Insere a formatação Markdown para uma lista não ordenada
|<kbd>Comando</kbd>+<kbd>ENTER</kbd> (Mac) ou </br> <kbd>CTRL</kbd>+<kbd>ENTER</kbd> (Windows/Linux) | Envia um comentário
|<kbd>CTRL</kbd>+<kbd>.</kbd> e <kbd>CTRL</kbd>+<kbd>[número de resposta salvo]</kbd> | Abre o menu de respostas salvas e autocompleta o campo de comentário com uma resposta salva. Para obter mais informações, confira "[Sobre as respostas salvas](/articles/about-saved-replies)".
|<kbd>Comando</kbd>+<kbd>SHIFT</kbd>+<kbd>.</kbd> (Mac) ou </br> <kbd>CTRL</kbd>+<kbd>SHIFT</kbd>+<kbd>.</kbd> (Windows/Linux) | Insere a formatação Markdown para uma citação{% ifversion fpt or ghec %}
|<kbd>Comando</kbd>+<kbd>G</kbd> (Mac) ou </br> <kbd>CTRL</kbd>+<kbd>G</kbd> (Windows/Linux) | Insere uma sugestão. Para obter mais informações, confira "[Como revisar as alterações propostas em uma solicitação de pull](/pull-requests/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/reviewing-proposed-changes-in-a-pull-request)". |{% endif %}
|<kbd>R</kbd> | Cita o texto selecionado em sua resposta. Para obter mais informações, confira "[Sintaxe básica de escrita e formatação](/articles/basic-writing-and-formatting-syntax#quoting-text)". |

## Listas de problemas e pull requests

| Atalho de teclado | Descrição
|-----------|------------
|<kbd>C</kbd> | Criar um problema
|<kbd>Comando</kbd>+<kbd>/</kbd> (Mac) ou </br> <kbd>CTRL</kbd>+<kbd>/</kbd> (Windows/Linux) | Evidencia seu cursor na barra de pesquisa de problemas e pull requests. Para obter mais informações, confira "[Como filtrar e pesquisar problemas e solicitações de pull](/issues/tracking-your-work-with-issues/filtering-and-searching-issues-and-pull-requests)".||
|<kbd>U</kbd> | Filtra por autor
|<kbd>L</kbd> | Filtra por ou edita etiquetas. Para obter mais informações, confira "[Como filtrar problemas e solicitações de pull por rótulos](/articles/filtering-issues-and-pull-requests-by-labels)".
|<kbd>Alt</kbd> e clique | Ao filtrar por etiquetas, exclui etiquetas. Para obter mais informações, confira "[Como filtrar problemas e solicitações de pull por rótulos](/articles/filtering-issues-and-pull-requests-by-labels)".
|<kbd>M</kbd> | Filtra por ou edita marcos. Para obter mais informações, confira "[Como filtrar problemas e solicitações de pull por marco](/articles/filtering-issues-and-pull-requests-by-milestone)".
|<kbd>A</kbd> | Filtra por ou edita um responsável. Para obter mais informações, confira "[Como filtrar problemas e solicitações de pull por destinatários](/articles/filtering-issues-and-pull-requests-by-assignees)".
|<kbd>O</kbd> ou <kbd>ENTER</kbd> | Problema aberto

## Problemas e pull requests
| Atalho de teclado | Descrição
|-----------|------------
|<kbd>Q</kbd> | Solicita um revisor. Para obter mais informações, confira "[Como solicitar uma revisão de solicitação de pull](/articles/requesting-a-pull-request-review/)".
|<kbd>M</kbd> | Define um marco. Para obter mais informações, confira "[Como associar marcos a problemas e a solicitações de pull](/articles/associating-milestones-with-issues-and-pull-requests/)".
|<kbd>L</kbd> | Aplica uma etiqueta. Para obter mais informações, confira "[Como aplicar rótulos a problemas e a solicitações de pull](/articles/applying-labels-to-issues-and-pull-requests/)".
|<kbd>A</kbd> | Define um responsável. Para obter mais informações, confira "[Coo atribuir problemas e solicitações de pull a outros usuários do {% data variables.product.company_short %}](/articles/assigning-issues-and-pull-requests-to-other-github-users/)".
|<kbd>X</kbd> | Vincular um problema ou pull request a partir do mesmo repositório. Para obter mais informações, confira "[Como vincular uma solicitação de pull a um problema](/issues/tracking-your-work-with-issues/linking-a-pull-request-to-an-issue/)".
|<kbd>Comando</kbd>+<kbd>SHIFT</kbd>+<kbd>P</kbd> (Mac) ou </br> <kbd>CTRL</kbd>+<kbd>SHIFT</kbd>+<kbd>P</kbd> (Windows/Linux) | Alterna entre as guias **Gravação** e **Visualização**{% ifversion fpt or ghec %}
|<kbd>Alt</kbd> e clique | Ao criar um problema com base em uma lista de tarefas, abra o novo formulário de problemas na guia atual segurando <kbd>Alt</kbd> e clicando em {% octicon "issue-opened" aria-label="The issue opened icon" %} no canto superior direito da tarefa. Para obter mais informações, confira "[Sobre as listas de tarefas](/issues/tracking-your-work-with-issues/creating-issues/about-task-lists)".
|<kbd>SHIFT</kbd> e clique | Ao criar um problema com base em uma lista de tarefas, abra o novo formulário de problemas em uma nova guia segurando <kbd>SHIFT</kbd> e clicando em {% octicon "issue-opened" aria-label="The issue opened icon" %} no canto superior direito da tarefa. Para obter mais informações, confira "[Sobre as listas de tarefas](/issues/tracking-your-work-with-issues/creating-issues/about-task-lists)".
|<kbd>Comando</kbd> e clique (Mac) ou </br> <kbd>CTRL</kbd>+<kbd>SHIFT</kbd> e clique (Windows/Linux) | Ao criar um problema com base em uma lista de tarefas, abra o novo formulário de problemas na nova janela segurando <kbd>Comando</kbd> ou <kbd>CTRL</kbd>+<kbd>SHIFT</kbd> e clicando em {% octicon "issue-opened" aria-label="The issue opened icon" %} no canto superior direito da tarefa. Para obter mais informações, confira "[Sobre as listas de tarefas](/issues/tracking-your-work-with-issues/creating-issues/about-task-lists)".{% endif %}

## Guia "Arquivos alterados" nas solicitações de pull

| Atalho de teclado | Descrição
|-----------|------------
|<kbd>C</kbd> | Abra o menu suspenso **Confirmações** para filtrar as confirmações mostradas nas comparações
|<kbd>T</kbd> | Mover o cursor para o campo "Filtrar arquivos alterados"
|<kbd>Comando</kbd>+<kbd>Shift</kbd>+<kbd>Enter</kbd> (Mac) ou <kbd>Ctrl</kbd>+<kbd>Shift</kbd>+<kbd>Enter</kbd> (Windows/Linux) | Enviar um comentário de revisão |
|<kbd>Opção</kbd> + clique (Mac) ou <kbd>Alt</kbd> + clique (Windows/Linux) | Alternar entre recolher e expandir todos os comentários de revisão desatualizados de uma solicitação de pull (por exemplo, mantendo pressionada a tecla <kbd>Alt</kbd> e clicando em **Mostrar desatualizados** ou **Ocultar desatualizados**) |
|Clique, <kbd>SHIFT</kbd> e clique | Adiciona um comentário em várias linhas de uma solicitação de pull clicando em um número de linha, mantendo pressionada a tecla <kbd>SHIFT</kbd> e clicando em outro número de linha. Para obter mais informações, confira "[Como adicionar um comentário a uma solicitação de pull](/github/collaborating-with-issues-and-pull-requests/commenting-on-a-pull-request#adding-line-comments-to-a-pull-request)".|

{% ifversion projects-v2 %}

## {% data variables.projects.projects_v2_caps %}

### Como navegar em um projeto

| Atalho de teclado | Descrição
|-----------|------------
|<kbd>Command</kbd>+<kbd>f</kbd> (Mac) ou <kbd>Ctrl</kbd>+<kbd>f</kbd> (Windows/Linux) | Campo de filtro de foco
|<kbd>←</kbd> | Mover o foco da célula para a esquerda
|<kbd>→</kbd> | Mover o foco da célula para a direita
|<kbd>↑</kbd> | Mover o foco da célula para cima
|<kbd>↓</kbd> | Mover o foco da célula para baixo

### Como manipular um projeto

| Atalho de teclado | Descrição
|-----------|------------
|<kbd>Enter</kbd> | Alternar o modo de edição para a célula focada
|<kbd>Escape</kbd> | Cancelar a edição da célula focada
|<kbd>Command</kbd>+<kbd>Shift</kbd>+<kbd>\</kbd> (Mac) ou <kbd>Ctrl</kbd>+<kbd>Shift</kbd>+<kbd>\</kbd> (Windows/Linux) | Abrir menu de ações de linha
|<kbd>Shift</kbd>+<kbd>Espaço</kbd> | Selecionar item
|<kbd>Space</kbd> | Abrir o item selecionado
|<kbd>e</kbd> | Arquivar itens selecionados

{% endif %}

## {% data variables.product.prodname_projects_v1_caps %}

### Mover uma coluna

| Atalho de teclado | Descrição
|-----------|------------
|<kbd>ENTER</kbd> ou <kbd>Espaço</kbd> | Começa a mover a coluna em evidência
|<kbd>Esc</kbd> | Cancela o movimento em curso
|<kbd>Enter</kbd> | Completa o movimento em curso
|<kbd>←</kbd> ou <kbd>H</kbd> | Move a coluna para a esquerda
|<kbd>Comando</kbd>+<kbd>←</kbd> ou <kbd>comando</kbd>+<kbd>H</kbd> (Mac) ou </br> <kbd>CTRL</kbd>+<kbd>←</kbd> ou <kbd>CTRL</kbd>+<kbd>H</kbd> (Windows/Linux) | Move a coluna para a posição mais à esquerda
|<kbd>→</kbd> ou <kbd>L</kbd> | Move a coluna para a direita
|<kbd>Comando</kbd>+<kbd>→</kbd> ou <kbd>comando</kbd>+<kbd>L</kbd> (Mac) ou </br> <kbd>CTRL</kbd>+<kbd>→</kbd> ou <kbd>CTRL</kbd>+<kbd>L</kbd> (Windows/Linux) | Move a coluna para a posição mais à direita

### Mover um cartão

| Atalho de teclado | Descrição
|-----------|------------
|<kbd>ENTER</kbd> ou <kbd>Espaço</kbd> | Começa a mover o cartão em evidência
|<kbd>Esc</kbd> | Cancela o movimento em curso
|<kbd>Enter</kbd> | Completa o movimento em curso
|<kbd>↓</kbd> ou <kbd>J</kbd> | Move o cartão para baixo
|<kbd>Comando</kbd>+<kbd>↓</kbd> ou <kbd>Comando</kbd>+<kbd>J</kbd> (Mac) ou </br> <kbd>CTRL</kbd>+<kbd>↓</kbd> ou <kbd>CTRL</kbd>+<kbd>J</kbd> (Windows/Linux) | Move o cartão para a parte inferior da coluna
|<kbd>↑</kbd> ou <kbd>K</kbd> | Move o cartão para cima
|<kbd>Comando</kbd>+<kbd>↑</kbd> ou <kbd>Comando</kbd>+<kbd>K</kbd> (Mac) ou </br> <kbd>CTRL</kbd>+<kbd>↑</kbd> ou <kbd>CTRL</kbd>+<kbd>K</kbd> (Windows/Linux) | Move o cartão para a parte superior da coluna
|<kbd>←</kbd> ou <kbd>H</kbd> | Move o cartão para a parte inferior da coluna à esquerda
|<kbd>SHIFT</kbd>+<kbd>←</kbd> ou <kbd>SHIFT</kbd>+<kbd>H</kbd> | Move o cartão para a parte superior da coluna à esquerda
|<kbd>Comando</kbd>+<kbd>←</kbd> ou <kbd>comando</kbd>+<kbd>H</kbd> (Mac) ou </br> <kbd>CTRL</kbd>+<kbd>←</kbd> ou <kbd>CTRL</kbd>+<kbd>H</kbd> (Windows/Linux) | Move o cartão para a parte inferior da coluna mais à esquerda
|<kbd>Comando</kbd>+<kbd>SHIFT</kbd>+<kbd>←</kbd> ou <kbd>Comando</kbd>+<kbd>SHIFT</kbd>+<kbd>H</kbd> (Mac) ou </br> <kbd>CTRL</kbd>+<kbd>SHIFT</kbd>+<kbd>←</kbd> ou <kbd>CTRL</kbd>+<kbd>SHIFT</kbd>+<kbd>H</kbd> (Windows/Linux) | Move o cartão para a parte superior da coluna mais à esquerda
|<kbd>→</kbd> | Move o cartão para a parte inferior da coluna à direita
|<kbd>SHIFT</kbd>+<kbd>→</kbd> ou <kbd>SHIFT</kbd>+<kbd>L</kbd> | Move o cartão para a parte superior da coluna à direita
|<kbd>Comando</kbd>+<kbd>→</kbd> ou <kbd>comando</kbd>+<kbd>L</kbd> (Mac) ou </br> <kbd>CTRL</kbd>+<kbd>→</kbd> ou <kbd>CTRL</kbd>+<kbd>L</kbd> (Windows/Linux) | Move o cartão para a parte superior da coluna mais à direita
|<kbd>Comando</kbd>+<kbd>SHIFT</kbd>+<kbd>→</kbd> ou <kbd>Comando</kbd>+<kbd>SHIFT</kbd>+<kbd>L</kbd> (Mac) ou </br> <kbd>CTRL</kbd>+<kbd>SHIFT</kbd>+<kbd>→</kbd> ou <kbd>CTRL</kbd>+<kbd>SHIFT</kbd>+<kbd>L</kbd> (Windows/Linux) | Move o cartão para a parte superior da coluna mais à direita

### Pré-visualizar um cartão

| Atalho de teclado | Descrição
|-----------|------------
|<kbd>Esc</kbd> | Fecha o painel de visualização do cartão

{% ifversion fpt or ghec %}
## {% data variables.product.prodname_actions %}

| Atalho de teclado | Descrição
|-----------|------------
|<kbd>Comando</kbd>+<kbd>Espaço </kbd> (Mac) ou </br> <kbd>CTRL</kbd>+<kbd>Espaço</kbd> (Windows/Linux) | No editor de fluxo de trabalho, obtém sugestões para o arquivo de fluxo de trabalho.
|<kbd>G</kbd> <kbd>F</kbd> | Acesse o arquivo do fluxo de trabalho
|<kbd>SHIFT</kbd>+<kbd>T</kbd> ou <kbd>T</kbd> | Alternar as marcas de tempo nos registros
|<kbd>SHIFT</kbd>+<kbd>F</kbd> ou <kbd>F</kbd> | Alternar os registros em tela cheia
|<kbd>Esc</kbd> | Sair dos registros em tela cheia

{% endif %}

## Notificações

| Atalho de teclado | Descrição
|-----------|------------
|<kbd>E</kbd> | Marcar como concluído
|<kbd>SHIFT</kbd>+<kbd>U</kbd>| Marcar como não lido
|<kbd>SHIFT</kbd>+<kbd>I</kbd>| Marcar como lido
|<kbd>SHIFT</kbd>+<kbd>M</kbd> | Cancelar assinatura

## gráfico de rede

| Atalho de teclado | Descrição
|-----------|------------
|<kbd>←</kbd> ou <kbd>H</kbd> | Rolar para a esquerda
|<kbd>→</kbd> ou <kbd>L</kbd> | Rolar para a direita
|<kbd>↑</kbd> ou <kbd>K</kbd> | Rolar para cima
|<kbd>↓</kbd> ou <kbd>J</kbd> | Rolar para baixo
|<kbd>SHIFT</kbd>+<kbd>←</kbd> (Mac) ou </br> <kbd>SHIFT</kbd>+<kbd>H</kbd> (Windows/Linux) | Rola até o final para a esquerda
|<kbd>SHIFT</kbd>+<kbd>→</kbd> (Mac) ou </br> <kbd>SHIFT</kbd>+<kbd>L</kbd> (Windows/Linux) | Rola até o final para a direita
|<kbd>SHIFT</kbd>+<kbd>↑</kbd> (Mac) ou </br> <kbd>SHIFT</kbd>+<kbd>K</kbd> (Windows/Linux) | Rola até o final para cima
|<kbd>SHIFT</kbd>+<kbd>↓</kbd> (Mac) ou </br> <kbd>SHIFT</kbd>+<kbd>J</kbd> (Windows/Linux) | Rola até o final para baixo
