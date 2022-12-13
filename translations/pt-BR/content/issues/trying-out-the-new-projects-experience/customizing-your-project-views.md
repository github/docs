---
title: Personalizando as visualizações do seu projeto (beta)
intro: Exibe as informações de que você precisa alterando o layout, agrupamento, ordenação e filtros no seu projeto.
allowTitleToDifferFromFilename: true
versions:
  fpt: '*'
  ghec: '*'
type: reference
topics:
- Projects
ms.openlocfilehash: 86b8d7e439b19327b1f752f8d893e349665168f4
ms.sourcegitcommit: 22d665055b1bee7a5df630385e734e3a149fc720
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 07/13/2022
ms.locfileid: "145126577"
---
{% data reusables.projects.projects-beta %}

## <a name="project-command-palette"></a>Paleta de comandos do projeto

Use a paleta de comandos do projeto para alterar rapidamente as configurações e executar comandos no seu projeto.

1. {% data reusables.projects.open-command-palette %}
2. Comece a digitar qualquer parte de um comando ou navegue pela janela da paleta de comandos para encontrar um comando. Veja as próximas seções para mais exemplos de comandos.

## <a name="changing-the-project-layout"></a>Alterando o layout do projeto

Você pode visualizar o seu projeto como uma tabela ou como um quadro.

1. {% data reusables.projects.open-command-palette %}
2. Comece a digitar "Alternar layout".
3. Escolha o comando necessário. Por exemplo, **Mudar layout: Tabela**.

Como alternativa, clique em {% octicon "triangle-down" aria-label="the drop-down icon" %} ao lado do nome de uma exibição e clique em **Tabela** ou **Quadro**.

## <a name="showing-and-hiding-fields"></a>Exibindo e ocultando campos

Você pode mostrar ou ocultar um campo específico.

### <a name="showing-and-hiding-fields-in-table-layout"></a>Mostrando e ocultando campos no layout da tabela

1. {% data reusables.projects.open-command-palette %}
2. Comece a digitar a ação que deseja realizar ("mostrar" ou "ocultar") ou o nome do campo.
3. Escolha o comando necessário. Por exemplo, **Mostrar: Marco**.

Como alternativa, clique em {% octicon "plus" aria-label="the plus icon" %} à direita da tabela. No menu suspenso que aparece, indique quais campos mostrar ou ocultar. Um {% octicon "check" aria-label="check icon" %} indica quais campos serão exibidos.

Como alternativa, clique em {% octicon "triangle-down" aria-label="the drop-down icon" %} ao lado do nome do campo e clique em **Ocultar campo**.

### <a name="showing-and-hiding-fields-in-board-layout"></a>Mostrando e ocultando campos no layout do quadro

1. Clique em {% octicon "triangle-down" aria-label="the drop-down icon" %} ao lado do nome da exibição.
2. Em **Configuração**, clique em {% octicon "list-unordered" aria-label="the unordered list icon" %}.
3. No menu exibido, selecione os campos para adicioná-los e desmarque os campos para removê-los do modo de exibição.

## <a name="reordering-fields"></a>Reordenando campos

Você pode alterar a ordem dos campos.

1. Clique no cabeçalho do campo.
2. Ao clicar, arraste o campo para a localização necessária.

## <a name="reordering-rows"></a>Reordenando linhas

No layout da tabela, você pode alterar a ordem das linhas.

1. Clique no número no início da linha.
2. Ao clicar, arraste a linha para a localização necessária.

## <a name="sorting-by-field-values"></a>Ordenação por valores do campo

No layout de tabela, você pode classificar itens por um valor de campo.

1. {% data reusables.projects.open-command-palette %}
2. Comece a digitar "Ordenar por" ou o nome do campo que deseja ordenar.
3. Escolha o comando necessário. Por exemplo, **Classificar por: Atribuições, cresc**.

Como alternativa, clique em {% octicon "triangle-down" aria-label="the drop-down icon" %} ao lado do nome do campo pelo qual deseja classificar e clique em **Classificar em ordem crescente** ou **Classificar em ordem decrescente**.

{% note %}

**Observação:** quando uma tabela é classificada, não é possível reordenar as linhas manualmente.

{% endnote %}

Siga passos semelhantes para remover uma ordenação.

1. {% data reusables.projects.open-command-palette %}
2. Comece a digitar "Remover ordenação".
3. Escolha **Remover classificação por**.

Como alternativa, clique em {% octicon "triangle-down" aria-label="the drop-down icon" %} ao lado do nome de exibição e clique no item de menu que indica a classificação atual.

## <a name="grouping-by-field-values-in-table-layout"></a>Agrupamento por valores de campo no layout de tabela

No layout da tabela, você pode agrupar os itens por um valor de campo personalizado. Quando os itens são agrupados, se você arrastar um item para um novo grupo, será aplicado o valor desse grupo. Por exemplo, se você agrupar por "Status" e arrastar um item com o status `In progress` para o grupo `Done`, o status do item mudará para `Done`. Da mesma forma, ao adicionar um novo item a um grupo, o novo item será preenchido com o valor do grupo.

{% note %}

**Observação:** atualmente, não é possível fazer o agrupamento por título, rótulos, revisores ou solicitações de pull vinculadas.

{% endnote %}

1. {% data reusables.projects.open-command-palette %}
2. Comece a digitar "Agrupar por" ou o nome do campo que você deseja agrupar.
3. Escolha o comando necessário. Por exemplo, **Agrupar por: Status**.

Como alternativa, clique em {% octicon "triangle-down" aria-label="the drop-down icon" %} ao lado do nome do campo que deseja agrupar e clique em **Agrupar por valores**.

Siga as etapas semelhantes para remover um agrupamento.

1. {% data reusables.projects.open-command-palette %}
2. Comece a digitar "Remover agrupamento".
3. Escolha **Remover agrupamento por**.

Como alternativa, clique em {% octicon "triangle-down" aria-label="the drop-down icon" %} ao lado do nome de exibição e clique no item de menu que indica a agrupamento atual.

## <a name="setting-the-column-field-in-board-layout"></a>Definir o campo da coluna no layout do quadro

No layout do painel, você escolhe qualquer campo de seleção ou iteração para as suas colunas. Se você arrastar um item para uma nova coluna, o valor dessa coluna será aplicado ao item arrastado. Por exemplo, se você usar o campo "Status" para as colunas de quadro e arrastar um item com o status `In progress` para a coluna `Done`, o status do item mudará para `Done`.

1. {% data reusables.projects.open-command-palette %}
1. Comece digitando "Campo Coluna por" ou o nome do campo que você deseja usar para suas colunas.
1. Escolha o comando necessário. Por exemplo, **campo Coluna por: Status**.

Como alternativa, clique em {% octicon "triangle-down" aria-label="the drop-down icon" %} ao lado da exibição de quadro que deseja modificar e clique em {% octicon "columns" aria-label="the column icon" %}**campo Coluna**. Em seguida, selecione o campo que você deseja usar para as colunas do quadro.

## <a name="filtering-items"></a>Filtrando itens

Clique em {% octicon "filter" aria-label="the filter icon" %} na parte superior da tabela para mostrar a barra "Filtrar por palavra-chave ou por campo". Comece a digitar o nome do campo e o valor que você deseja filtrar. À medida que você digita, serão exibidos os possíveis valores.

{% data reusables.projects.projects-filters %}

Como alternativa, use a paleta de comando.

1. {% data reusables.projects.open-command-palette %}
2. Comece a digitar "Filtrar por" ou o nome do campo que você deseja filtrar.
3. Escolha o comando necessário. Por exemplo, **Filtrar por Status**.
4. Digite o valor para o qual você deseja filtrar. Por exemplo: "Em andamento". Você também pode filtrar pela a ausência de valores específicos (por exemplo, escolha "Excluir status" e escolha um status) ou a ausência de todos os valores (por exemplo, "Sem status").

No layout da tabela, você pode clicar nos dados de item para filtrar para itens com esse valor. Por exemplo, clique em um responsável para mostrar apenas itens para ele. Para remover o filtro, clique nos dados do item novamente.

Para obter mais informações, confira "[Filtragem de projetos](/issues/trying-out-the-new-projects-experience/filtering-projects)".

## <a name="creating-a-project-view"></a>Criando uma visualização do projeto

As visualizações do projeto permitem que você visualize rapidamente os aspectos específicos do seu projeto. Cada visualização é exibida em uma guia separada no seu projeto. 

Por exemplo, você pode ter:
- Uma visualização que mostra todos os itens ainda não iniciados (filtro de "Status").
- Uma exibição que mostra a carga de trabalho para cada equipe (agrupar por um campo personalizado de "Equipe").
- Uma visualização que mostra itens com a data mais antiga de envio (classificar por um campo de data).

Para adicionar uma nova visualização:

1. {% data reusables.projects.open-command-palette %}
2. Comece a digitar "Nova visualização" (para criar uma nova visualização) ou "Duplicar visualização" (para duplicar a visualização atual).
3. Escolha o comando necessário.

Como alternativa, clique em {% octicon "plus" aria-label="the plus icon" %} **Nova exibição** ao lado da exibição mais à direita.

Como alternativa, clique em {% octicon "triangle-down" aria-label="the drop-down icon" %} ao lado do nome de uma exibição e clique em **Duplicar exibição**.

A nova visualização é salva automaticamente.

## <a name="saving-changes-to-a-view"></a>Salvando alterações em uma visualização

Ao fazer alterações a uma visualização como, por exemplo, ordenação, reordenação, filtragem ou agrupamento de dados em uma visualização, será exibido um ponto ao lado do nome da visualização para indicar que existem alterações não salvas. 

![Indicador de alterações não salvas](/assets/images/help/projects/unsaved-changes.png)

Se você não desejar salvar as alterações, você poderá ignorar este indicador. Ninguém mais verá as suas alterações.

Para salvar a configuração atual da exibição para todos os integrantes do projeto:
1. {% data reusables.projects.open-command-palette %}
1. Comece a digitar "Salvar visualização" ou "Salvar alterações na nova visualização".
1. Escolha o comando necessário.

Como alternativa, clique em {% octicon "triangle-down" aria-label="the drop-down icon" %} ao lado do nome de uma exibição e clique em **Salvar exibição** ou **Salvar alterações na nova exibição**.

## <a name="reordering-saved-views"></a>Reordenando as visualizações salvas

Para alterar a ordem das abas que contêm as exibições salvas, clique e arraste uma aba para um novo local.

A nova ordem da aba é salva automaticamente.

## <a name="renaming-a-saved-view"></a>Renomeando uma visualização salva

Para renomear uma visualização:
1. Clique duas vezes no nome na aba do projeto.
1. Altere o nome.
1. Pressione Enter ou clique fora da aba.

A alteração de nome será salva automaticamente.

## <a name="deleting-a-saved-view"></a>Excluindo uma visualização salva

Para excluir uma exibição:
1. {% data reusables.projects.open-command-palette %}
2. Comece a digitar "Excluir visualização".
3. Escolha o comando necessário.

Como alternativa, clique em {% octicon "triangle-down" aria-label="the drop-down icon" %} ao lado do nome de uma exibição e clique em **Excluir exibição**.

## <a name="further-reading"></a>Leitura adicional

- "[Sobre os projetos (beta)](/issues/trying-out-the-new-projects-experience/about-projects)"
- "[Como criar um projeto (beta)](/issues/trying-out-the-new-projects-experience/creating-a-project)"
