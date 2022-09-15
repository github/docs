---
title: Personalizar uma exibição
intro: 'Exiba as informações de que você precisa no seu projeto com alterações de layout, agrupamento e classificação.'
miniTocMaxHeadingLevel: 3
versions:
  feature: projects-v2
redirect_from:
  - /issues/trying-out-the-new-projects-experience/customizing-your-project-views
type: tutorial
topics:
  - Projects
ms.openlocfilehash: 962a20daac125cdec5510daf3d792e0aaf6a194b
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/05/2022
ms.locfileid: '147423837'
---
## Alterando o layout do projeto

Você pode visualizar o seu projeto como uma tabela ou como um quadro.

{% data reusables.projects.open-view-menu %}
1. Em "Layout", clique em **Tabela** ou **Quadro**.
   ![Captura de tela mostrando a opção Layout](/assets/images/help/projects-v2/table-or-board.png)

 

Como alternativa, abra a paleta de comandos do projeto pressionando {% data variables.projects.command-palette-shortcut %} e comece a digitar "Mudar layout".

## Exibindo e ocultando campos

Você pode mostrar ou ocultar um campo específico.

{% data reusables.projects.open-view-menu %}
1. Em "Configuração", clique em {% octicon "note" aria-label="the note icon" %} e na lista dos campos mostrados no momento.
   ![Captura de tela mostrando a opção Mostrar e ocultar campos de menu](/assets/images/help/projects-v2/show-hide-fields-menu-item.png)
1. Marque ou desmarque os campos que você deseja mostrar ou ocultar.
   ![Captura de tela mostrando o menu Mostrar e ocultar campos](/assets/images/help/projects-v2/show-hide-fields.png)

Você também pode ocultar campos individuais no modo de exibição de tabela.

1. Ao lado do campo que você deseja ocultar, clique em {% octicon "kebab-horizontal" aria-label="the kebab icon" %}.
   ![Captura de tela mostrando o ícone do menu de campo](/assets/images/help/projects-v2/modify-field-menu.png)
1. Clique em {% octicon "eye-closed" aria-label="the eye closed icon" %} **Ocultar campo**.
   ![Captura de tela mostrando a opção Ocultar menu de campo](/assets/images/help/projects-v2/hide-field-via-menu.png)

Como alternativa, abra a paleta de comandos do projeto pressionando {% data variables.projects.command-palette-shortcut %} e comece a digitar "mostrar", "ocultar" ou o nome do campo.

## Reordenando campos

No layout de tabela, você pode alterar a ordem dos campos.

1. Clique no cabeçalho do campo.
   ![Captura de tela mostrando o cabeçalho do campo](/assets/images/help/projects-v2/select-field-header.png)
2. Ao continuar a clicar, arraste o campo para a localização necessária.

## Reordenando linhas

No layout da tabela, você pode alterar a ordem das linhas.

1. Clique no número no início da linha.
   ![Captura de tela mostrando o número da linha](/assets/images/help/projects-v2/select-row-number.png)
2. Ao continuar a clicar, arraste a linha para a localização necessária.

## Ordenação por valores do campo

No layout de tabela, você pode classificar itens por um valor de campo.

{% note %}

**Observação:** quando uma tabela é classificada, não é possível reordenar as linhas manualmente.

{% endnote %}

{% data reusables.projects.open-view-menu %}
1. Clique em **Classificar**.
   ![Captura de tela mostrando o item de menu Classificar](/assets/images/help/projects-v2/sort-menu-item.png)
1. Selecione o campo pelo qual deseja classificar.
   ![Captura de tela mostrando o menu Classificar](/assets/images/help/projects-v2/sort-menu.png)
2. Como opção, para alterar o sentido da classificação, clique em {% octicon "sort-desc" aria-label="the sort icon" %}.
   ![Captura de tela mostrando a opção Ordem de classificação](/assets/images/help/projects-v2/sort-order.png)
3. Como alternativa, para remover uma classificação, clique em {% octicon "x" aria-label="the x icon" %} **Sem classificação** na parte inferior da lista.
   ![Captura de tela mostrando "Sem classificação"](/assets/images/help/projects-v2/no-sorting.png)

Como alternativa, abra a paleta de comandos do projeto pressionando {% data variables.projects.command-palette-shortcut %} e comece a digitar "Classificar por".

## Agrupamento por valores de campo no layout de tabela

No layout da tabela, você pode agrupar os itens por um valor de campo personalizado. Quando os itens são agrupados, se você arrastar um item para um novo grupo, será aplicado o valor desse grupo. Por exemplo, se você agrupar por "Status" e arrastar um item com o status `In progress` para o grupo `Done`, o status do item mudará para `Done`. Da mesma forma, ao adicionar um novo item a um grupo, o novo item será preenchido com o valor do grupo.

{% note %}

**Observação:** não é possível fazer o agrupamento por título, etiquetas, revisores ou solicitações de pull vinculadas.

{% endnote %}

{% data reusables.projects.open-view-menu %}
1. Clique em {% octicon "rows" aria-label="the rows icon" %} **Agrupar**.
   ![Captura de tela mostrando o item de menu Agrupar](/assets/images/help/projects-v2/group-menu-item.png)
1. Selecione o campo pelo qual deseja agrupar.
   ![Captura de tela mostrando o menu Agrupar](/assets/images/help/projects-v2/group-menu.png)
2. Como alternativa, para desabilitar o agrupamento, clique em {% octicon "x" aria-label="the x icon" %} **Sem agrupamento** na parte inferior da lista.
   ![Captura de tela mostrando "Sem agrupamento"](/assets/images/help/projects-v2/no-grouping.png)

Como alternativa, abra a paleta de comandos do projeto pressionando {% data variables.projects.command-palette-shortcut %} e comece a digitar "Agrupar por".

## Definir o campo da coluna no layout do quadro

No layout do painel, você escolhe qualquer campo de seleção ou iteração para as suas colunas. Se você arrastar um item para uma nova coluna, o valor dessa coluna será aplicado ao item arrastado. Por exemplo, se você usar o campo "Status" para as colunas de quadro e arrastar um item com o status `In progress` para a coluna `Done`, o status do item mudará para `Done`.

{% data reusables.projects.open-view-menu %}
1. Clique em {% octicon "columns" aria-label="the columns icon" %} **Campo de Coluna**.
   ![Captura de tela mostrando o item Campo de Coluna](/assets/images/help/projects-v2/column-field-menu-item.png)
1. Clique no campo que você deseja usar.
   ![Captura de tela mostrando o menu Campo de Coluna](/assets/images/help/projects-v2/column-field-menu.png)

Como alternativa, abra a paleta de comandos do projeto pressionando {% data variables.projects.command-palette-shortcut %} e comece a digitar "Campo de coluna por".
