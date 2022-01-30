---
title: Personalizando as visualizações do seu projeto (beta)
intro: 'Exibe as informações de que você precisa alterando o layout, agrupamento, ordenação e filtros no seu projeto.'
allowTitleToDifferFromFilename: true
versions:
  fpt: '*'
  ghec: '*'
type: reference
topics:
  - Projects
---

{% data reusables.projects.projects-beta %}

## Paleta de comandos do projeto

Use a paleta de comandos do projeto para alterar rapidamente as configurações e executar comandos no seu projeto.

1. {% data reusables.projects.open-command-palette %}
2. Comece a digitar qualquer parte de um comando ou navegue pela janela da paleta de comandos para encontrar um comando. Veja as próximas seções para mais exemplos de comandos.

## Alterando o layout do projeto

Você pode visualizar o seu projeto como uma tabela ou como um quadro.

1. {% data reusables.projects.open-command-palette %}
2. Comece a digitar "Alternar layout".
3. Escolha o comando necessário. Por exemplo, **Switch layout: Table**.

Como alternativa, clique em {% octicon "triangle-down" aria-label="the drop-down icon" %} ao lado de um nome de exibição e clique em **Tabela** ou **Quadro**.

## Exibindo e ocultando campos

Você pode mostrar ou ocultar um campo específico.

### Mostrando e ocultando campos no layout da tabela

1. {% data reusables.projects.open-command-palette %}
2. Comece a digitar a ação que deseja realizar ("mostrar" ou "ocultar") ou o nome do campo.
3. Escolha o comando necessário. Por exemplo, **Exibir: Marco**.

Como alternativa, clique em {% octicon "plus" aria-label="the plus icon" %} à direita da tabela. No menu suspenso que aparece, indique quais campos mostrar ou ocultar. Um {% octicon "check" aria-label="check icon" %} indica quais campos serão exibidos.

Como alternativa, clique em {% octicon "triangle-down" aria-label="the drop-down icon" %} ao lado do nome do campo e clique em **Ocultar o campo**.

### Mostrando e ocultando campos no layout do quadro

1. Clique em {% octicon "triangle-down" aria-label="the drop-down icon" %} ao lado do nome da exibição.
2. Em**Configuração**, clique em {% octicon "list-unordered" aria-label="the unordered list icon" %}.
3. No menu exibido, selecione os campos para adicioná-los e desmarque os campos para removê-los do modo de exibição.

## Reordenando campos

Você pode alterar a ordem dos campos.

1. Clique no cabeçalho do campo.
2. Ao clicar, arraste o campo para a localização necessária.

## Reordenando linhas

No layout da tabela, você pode alterar a ordem das linhas.

1. Clique no número no início da linha.
2. Ao clicar, arraste a linha para a localização necessária.

## Ordenação por valores do campo

No layout de tabela, você pode classificar itens por um valor de campo.

1. {% data reusables.projects.open-command-palette %}
2. Comece a digitar "Ordenar por" ou o nome do campo que deseja ordenar.
3. Escolha o comando necessário. Por exemplo, **Sort by: Assignees, asc**.

Alternativamente, clique em {% octicon "triangle-down" aria-label="the drop-down icon" %} ao lado do campo que você deseja ordenar e clique em **Ordenação ascendente** ou **Ordenação decrescente**.

{% note %}

**Observação:** Quando uma tabela é ordenada, você não pode reordenar manualmente as linhas.

{% endnote %}

Siga passos semelhantes para remover uma ordenação.

1. {% data reusables.projects.open-command-palette %}
2. Comece a digitar "Remover ordenação".
3. Selecione **Remover ordenação por**.

Como alternativa, clique em {% octicon "triangle-down" aria-label="the drop-down icon" %} ao lado do nome de exibição e clique no item de menu que indica a classificação atual.

## Agrupamento por valores de campo no layout de tabela

No layout da tabela, você pode agrupar os itens por um valor de campo personalizado. Quando os itens são agrupados, se você arrastar um item para um novo grupo, será aplicado o valor desse grupo. Por exemplo, se você agrupar por "Status" e, em seguida, arrastar um item com um status de `Em andamento` para o grupo `Concluído` o status do item mudará para `Concluído`. Da mesma forma, ao adicionar um novo item a um grupo, o novo item será preenchido com o valor do grupo.

{% note %}

**Observação:** Atualmente, você não pode agrupar por títulos, etiquetas, revisores ou pull requests.

{% endnote %}

1. {% data reusables.projects.open-command-palette %}
2. Comece a digitar "Agrupar por" ou o nome do campo que você deseja agrupar.
3. Escolha o comando necessário. Por exemplo, **Agrupar por: Status**.

Como alternativa, clique em {% octicon "triangle-down" aria-label="the drop-down icon" %} ao lado do nome do campo que você deseja agrupar e clique em **Agrupar por valores**.

Siga as etapas semelhantes para remover um agrupamento.

1. {% data reusables.projects.open-command-palette %}
2. Comece a digitar "Remover agrupamento".
3. Selecione **Remover agrupar por**.

Como alternativa, clique em {% octicon "triangle-down" aria-label="the drop-down icon" %} ao lado do nome de exibição e clique no item de menu que indica a agrupamento atual.

## Definir o campo da coluna no layout do quadro

No layout do painel, você escolhe qualquer campo de seleção ou iteração para as suas colunas. Se você arrastar um item para uma nova coluna, o valor dessa coluna será aplicado ao item arrastado. For example, if you use the "Status" field for your board columns and then drag an item with a status of `In progress` to the `Done` column, the status of the item will switch to `Done`.

1. {% data reusables.projects.open-command-palette %}
1. Start typing "Column field by" or the name of the field you want to use for your columns.
1. Escolha o comando necessário. Por exemplo, **Column field by: Status**.

Como alternativa, clique em {% octicon "triangle-down" aria-label="the drop-down icon" %} ao lado da exibição do quadro que você deseja modificar e clique no **campo coluna** {% octicon "columns" aria-label="the column icon" %}. Em seguida, selecione o campo que você deseja usar para as colunas do quadro.

## Filtering items

Click {% octicon "filter" aria-label="the filter icon" %} at the top of the table to show the "Filter by keyword or by field" bar. Comece a digitar o nome do campo e o valor que você deseja filtrar. À medida que você digita, serão exibidos os possíveis valores.

- Para filtrar vários valores, separe os valores por uma vírgula. Por exemplo, `label:"good first issue",bug` irá listar todos os problemas com uma etiqueta `good first issue` ou `erro`.
- Para filtrar pela ausência de um valor específico, insira `-` antes do seu filtro. Por exemplo, `-label:"bug"` mostrará apenas os itens que não têm a etiqueta `erro`.
- Para filtrar pela ausência de todos os valores, digite `no:` seguido pelo nome do campo. Por exemplo, `no:assignee` irá mostrar apenas os itens que não têm um responsável.
- Para filtrar por status, digite `is:`. Por exemplo, `is: issue` ou `is:open`.
- Separe vários filtros com um espaço. Por exemplo, `status:"In progress" -label:"bug" no:assignee` irá mostrar somente os itens que têm um status de `In progress`, não têm a etiqueta `erro` e não têm um responsável.
- To filter for the current iteration of an iteration field, use `@current`. For example, `sprint:@current`.

Como alternativa, use a paleta de comando.

1. {% data reusables.projects.open-command-palette %}
2. Comece a digitar "Filtrar por" ou o nome do campo que você deseja filtrar.
3. Escolha o comando necessário. Por exemplo, **Filtro por Status**.
4. Digite o valor para o qual você deseja filtrar. Por exemplo: "Em andamento". Você também pode filtrar pela a ausência de valores específicos (por exemplo, escolha "Excluir status" e escolha um status) ou a ausência de todos os valores (por exemplo, "Sem status").

No layout da tabela, você pode clicar nos dados de item para filtrar para itens com esse valor. Por exemplo, clique em um responsável para mostrar apenas itens para ele. Para remover o filtro, clique nos dados do item novamente.

## Criando uma visualização do projeto

As visualizações do projeto permitem que você visualize rapidamente os aspectos específicos do seu projeto. Cada visualização é exibida em uma guia separada no seu projeto.

Por exemplo, você pode ter:
- Uma visualização que mostra todos os itens ainda não iniciados (filtro de "Status").
- Uma exibição que mostra a carga de trabalho para cada equipe (agrupar por um campo personalizado de "Equipe").
- Uma visualização que mostra itens com a data mais antiga de envio (classificar por um campo de data).

Para adicionar uma nova visualização:

1. {% data reusables.projects.open-command-palette %}
2. Comece a digitar "Nova visualização" (para criar uma nova visualização) ou "Duplicar visualização" (para duplicar a visualização atual).
3. Escolha o comando necessário.

Como alternativa, clique em {% octicon "plus" aria-label="the plus icon" %} **Nova Visualização** ao lado da visualização mais à direita.

Alternatively, click {% octicon "triangle-down" aria-label="the drop-down icon" %} next to a view name and click **Duplicate view**.

A nova visualização é salva automaticamente.

## Salvando alterações em uma visualização

Ao fazer alterações a uma visualização como, por exemplo, ordenação, reordenação, filtragem ou agrupamento de dados em uma visualização, será exibido um ponto ao lado do nome da visualização para indicar que existem alterações não salvas.

![Indicador de alterações não salvas](/assets/images/help/projects/unsaved-changes.png)

Se você não desejar salvar as alterações, você poderá ignorar este indicador. Ninguém mais verá as suas alterações.

Para salvar a configuração atual da exibição para todos os integrantes do projeto:
1. {% data reusables.projects.open-command-palette %}
1. Comece a digitar "Salvar visualização" ou "Salvar alterações na nova visualização".
1. Escolha o comando necessário.

Alternatively, click {% octicon "triangle-down" aria-label="the drop-down icon" %} next to a view name and click **Save view** or **Save changes to new view**.

## Reordenando as visualizações salvas

Para alterar a ordem das abas que contêm as exibições salvas, clique e arraste uma aba para um novo local.

A nova ordem da aba é salva automaticamente.

## Renomeando uma visualização salva

Para renomear uma visualização:
1. Clique duas vezes no nome na aba do projeto.
1. Altere o nome.
1. Pressione Enter ou clique fora da aba.

A alteração de nome será salva automaticamente.

## Excluindo uma visualização salva

Para excluir uma visualização:
1. {% data reusables.projects.open-command-palette %}
2. Comece a digitar "Excluir visualização".
3. Escolha o comando necessário.

Alternatively, click {% octicon "triangle-down" aria-label="the drop-down icon" %} next to a view name and click **Delete view**.

## Leia mais

- "[Sobre projetos (beta)](/issues/trying-out-the-new-projects-experience/about-projects)"
- "[Criando um projeto (beta)](/issues/trying-out-the-new-projects-experience/creating-a-project)"
