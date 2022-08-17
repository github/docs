---
title: Personalizando uma visualização
intro: 'Exibe as informações de que você precisa alterando o layout, fazendo o agrupamento e o ordenamento no seu projeto.'
miniTocMaxHeadingLevel: 3
versions:
  feature: projects-v2
redirect_from:
  - /issues/trying-out-the-new-projects-experience/customizing-your-project-views
type: tutorial
topics:
  - Projects
---


## Alterando o layout do projeto

Você pode visualizar o seu projeto como uma tabela ou como um quadro.

{% data reusables.projects.open-view-menu %}
1. Em "Layout", clique em **Tabela** ou **Quadro**. ![Captura de tela que mostra as opções de layout](/assets/images/help/projects-v2/table-or-board.png)



Como alternativa, abra a paleta de comandos do projeto pressionando {% data variables.projects.command-palette-shortcut %} e comece a digitar "Alternar layout".

## Exibindo e ocultando campos

Você pode mostrar ou ocultar um campo específico.

{% data reusables.projects.open-view-menu %}
1. Em "Configuração", clique em {% octicon "note" aria-label="the note icon" %} e a lista dos campos atualmente mostrados. ![Captura de tela que mostra a opção mostrar e ocultar do menu de campos](/assets/images/help/projects-v2/show-hide-fields-menu-item.png)
1. Selecione ou desmarque os campos que você deseja mostrar ou ocultar. ![Captura de tela que mostra o menu mostrar e ocultar campos](/assets/images/help/projects-v2/show-hide-fields.png)

Você também pode ocultar campos individuais na exibição de tabela.

1. Ao lado do campo que você deseja ocultar, clique em {% octicon "kebab-horizontal" aria-label="the kebab icon" %}. ![Screenshot que mostra o ícone de menu de campo](/assets/images/help/projects-v2/modify-field-menu.png)
1. Clique em {% octicon "eye-closed" aria-label="the eye closed icon" %} **Ocultar campo**. ![Captura de tela que mostra a opção do menu ocultar campo](/assets/images/help/projects-v2/hide-field-via-menu.png)

Alternativamente, abra a paleta de comandos do projeto pressionando {% data variables.projects.command-palette-shortcut %} e comece a digitar "exibir", "ocultar" ou o nome do campo.

## Reordenando campos

No layout da tabela, você pode alterar a ordem dos campos.

1. Clique no cabeçalho do campo. ![Captura de tela que mostra o cabeçalho do campo](/assets/images/help/projects-v2/select-field-header.png)
2. Ao continuar clicando, arraste o campo para a localização desejada.

## Reordenando linhas

No layout da tabela, você pode alterar a ordem das linhas.

1. Clique no número no início da linha. ![Captura de tela que mostra o número da linha](/assets/images/help/projects-v2/select-row-number.png)
2. Ao continuar clicando, arraste a linha para a localização desejada.

## Ordenação por valores do campo

No layout de tabela, você pode classificar itens por um valor de campo.

{% note %}

**Observação:** Quando uma tabela é ordenada, você não pode reordenar manualmente as linhas.

{% endnote %}

{% data reusables.projects.open-view-menu %}
1. Clique **Ordenar**. ![Captura de tela que mostra o item de menu de classificação](/assets/images/help/projects-v2/sort-menu-item.png)
1. Clique no campo que você deseja ordenar. ![Captura de tela que mostra o menu de ordenar](/assets/images/help/projects-v2/sort-menu.png)
2. Opcionalmente, para alterar a direção de ordenação, clique em {% octicon "sort-desc" aria-label="the sort icon" %}. ![Captura de tela que mostra opção de ordenar](/assets/images/help/projects-v2/sort-order.png)
3. Opcionalmente, para remover uma ordenação, clique em {% octicon "x" aria-label="the x icon" %} **Não ordenar** na parte inferior da lista. ![Captura de tela que mostra "sem ordernação"](/assets/images/help/projects-v2/no-sorting.png)

Como alternativa, abra a paleta de comandos do projeto pressionando {% data variables.projects.command-palette-shortcut %} e comece a digitar "Ordenar por".

## Agrupamento por valores de campo no layout de tabela

No layout da tabela, você pode agrupar os itens por um valor de campo personalizado. Quando os itens são agrupados, se você arrastar um item para um novo grupo, será aplicado o valor desse grupo. Por exemplo, se você agrupar por "Status" e, em seguida, arrastar um item com um status de `Em andamento` para o grupo `Concluído` o status do item mudará para `Concluído`. Da mesma forma, ao adicionar um novo item a um grupo, o novo item será preenchido com o valor do grupo.

{% note %}

**Observação:** Você não pode agrupar por título, etiquetas, revisores ou pull requests.

{% endnote %}

{% data reusables.projects.open-view-menu %}
1. Clique em {% octicon "rows" aria-label="the rows icon" %} **Grupo**. ![Captura de tela que mostra o item de menu do grupo](/assets/images/help/projects-v2/group-menu-item.png)
1. Clique no campo que você deseja agrupar. ![Captura de tela que mostra o menu do grupo](/assets/images/help/projects-v2/group-menu.png)
2. Opcionalmente, para desabilitar o agrupamento, clique em {% octicon "x" aria-label="the x icon" %} **Não agrupar** na parte inferior da lista. ![Captura de tela que mostra "sem agrupamento"](/assets/images/help/projects-v2/no-grouping.png)

Como alternativa, abra a paleta de comandos do projeto pressionando {% data variables.projects.command-palette-shortcut %} e comece a digitar "Agrupar por".

## Definir o campo da coluna no layout do quadro

No layout do painel, você escolhe qualquer campo de seleção ou iteração para as suas colunas. Se você arrastar um item para uma nova coluna, o valor dessa coluna será aplicado ao item arrastado. Por exemplo, se você usar o campo "Status" para as colunas do seu quadro e, em seguida, arrastar um item com o status de `Em andamento` para a coluna `Concluído`, o status do item mudará para `Concluído`.

{% data reusables.projects.open-view-menu %}
1. Clique em {% octicon "columns" aria-label="the columns icon" %} **Campo da coluna**. ![Captura de tela que mostra o item de campo de coluna](/assets/images/help/projects-v2/column-field-menu-item.png)
1. Clique no campo que você deseja usar. ![Captura de tela que mostra o menu de campos de coluna](/assets/images/help/projects-v2/column-field-menu.png)

Como alternativa, abra a paleta de comandos do projeto pressionando {% data variables.projects.command-palette-shortcut %} e comece a digitar "campo de coluna por".
