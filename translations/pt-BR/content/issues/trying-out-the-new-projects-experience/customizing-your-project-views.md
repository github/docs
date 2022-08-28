---
title: Personalizando as visualizações do seu projeto (beta)
intro: 'Exibe as informações de que você precisa alterando o layout, agrupamento, ordenação e filtros no seu projeto.'
allowTitleToDifferFromFilename: true
versions:
  fpt: '*'
type: reference
topics:
  - Projects
---

{% data reusables.projects.projects-beta %}

## Paleta de comando

Use a paleta de comandos para alterar rapidamente as configurações e executar comandos no seu projeto.

1. {% data reusables.projects.open-command-palette %}
2. Comece a digitar qualquer parte de um comando ou navegue pela janela da paleta de comandos para encontrar um comando. Veja as próximas seções para mais exemplos de comandos.

## Alterar o layout

Você pode visualizar o seu projeto como uma tabela ou como um quadro.

1. {% data reusables.projects.open-command-palette %}
2. Comece a digitar "Alternar layout".
3. Selecione o comando desejado (por exemplo: "Layout de interrupção: tabela").
3. Como alternativa, selecione o menu suspenso ao lado de um nome de exibição e clique em **Tabela** ou **Quadro**.

## Exibir ou ocultar campos

No layout da tabela, você pode exibir ou ocultar um campo específico.

1. {% data reusables.projects.open-command-palette %}
2. Comece a digitar a ação que deseja realizar ("mostrar" ou "ocultar") ou o nome do campo.
3. Selecione o comando desejado (por exemplo: "Exibir: Marco").
4. Como alternativa, clique em {% octicon "plus" aria-label="the plus icon" %} à direita da tabela. No menu suspenso que aparece, indique quais campos mostrar ou ocultar. Um {% octicon "check" aria-label="check icon" %} indica quais campos serão exibidos.
5. Como alternativa, selecione o menu suspenso ao lado do nome do campo e clique em **Ocultar o campo**.

## Reordenar campos

Você pode alterar a ordem dos campos.

1. Clique no cabeçalho do campo.
2. Ao clicar, arraste o campo para o local desejado.

## Reordenar linhas

No layout da tabela, você pode alterar a ordem das linhas.

1. Clique no número no início da linha.
2. Ao clicar, arraste a linha para o local desejado.

## ordenar

No layout de tabela, você pode classificar itens por um valor de campo.

1. {% data reusables.projects.open-command-palette %}
2. Comece a digitar "Ordenar por" ou o nome do campo que deseja ordenar.
3. Selecione o comando desejado (por exemplo: "Ordenar por: responsáveis, asc").
4. Como alternativa, selecione o menu suspenso ao lado do nome do campo que deseja ordenar e clique em **Ordenar ascendentemente** ou **Ordenar descendentemente**.

{% note %}

**Observação:** Quando uma tabela é ordenada, você não pode reordenar manualmente as linhas.

{% endnote %}

Siga passos semelhantes para remover uma ordenação.

1. {% data reusables.projects.open-command-palette %}
2. Comece a digitar "Remover ordenação".
3. Selecione o comando "Remover ordenação".
4. Como alternativa, selecione o menu suspenso ao lado do nome da visualização e clique no item de menu que indique a classificação atual.

## Grupo

In the table layout, you can group items by a custom field value. Quando os itens são agrupados, se você arrastar um item para um novo grupo, será aplicado o valor desse grupo. Por exemplo, se você agrupar por `Status` e, em seguida, arrastar um item com um status de `Em andamento` para o grupo `Concluído` o status do item mudará para `Concluído`.

{% note %}

**Note:** Currently, you cannot group by title, assignees, repository or labels.

{% endnote %}

1. {% data reusables.projects.open-command-palette %}
2. Comece a digitar "Agrupar por" ou o nome do campo que você deseja agrupar.
3. Selecione o comando desejado (por exemplo, "Agrupar por: Status").
4. Como alternativa, selecione o menu suspenso ao lado do nome do campo que você deseja agrupar e clique em **Agrupar por valores**.

Siga as etapas semelhantes para remover um agrupamento.

1. {% data reusables.projects.open-command-palette %}
2. Comece a digitar "Remover agrupamento".
3. Selecione o comando "Remover agrupamento".
4. Como alternativa, selecione o menu suspenso ao lado do nome da visualização e clique no item de menu que indique o agrupamento atual.

## Filtrar

No layout da tabela, você pode filtrar por valores de campo.

1. {% data reusables.projects.open-command-palette %}
2. Comece a digitar "Filtrar por" ou o nome do campo que você deseja filtrar.
3. Selecione o comando desejado (p. ex.: "Filtrar por status").
4. Insira o valor que você deseja filtrar (por exemplo: "Em andamento"). You can also filter for the absence of specific values (for example: "Exclude status") or the absence of all values (for example: "No status").
5. Como alternativa, clique em {% octicon "search" aria-label="the search icon" %} na parte superior da tabela para mostrar a barra "Filtrar por palavra-chave ou campo". Insira o nome do campo e valor pelo qual você deseja filtrar. À medida que você digita, serão exibidos os possíveis valores.

   To filter for multiple values, separate the values with a comma. For example `label:"good first issue",bug` will list all issues with a label `good first issue` or `bug`.

   To filter for the absence of a specific value, place `-` before your filter. For example, `-label:"bug"` will only show items that do not have the label `bug`.

   To filter for the absence of all values, enter `no:` followed by the field name. For example, `no:assignee` will only show items that do not have an assignee.

   Separe vários filtros com um espaço. For example, `status:"In progress" -label:"bug" no:assignee` will show only items that have a status of `In progress`, do not have the label `bug`, and do not have an assignee.
6. Alternatively, select the drop-down menu next to the view name and click the menu item that indicates the desired filter.

## Salvar visualizações

As visualizações salvas permitem que você visualize rapidamente aspectos específicos do seu projeto. Por exemplo, você poderia ter o seguinte:
- uma visualização que mostra todos os itens não iniciados (filtrar por "status").
- uma visualização que mostra a carga de trabalho para cada integrante da equipe (agrupar por "responsável e filtrar por "Status").
- uma visualização que mostra itens com a data mais antiga de envio (classificar por um campo de data).

As etapas a seguir demonstram como adicionar uma nova visualização:

1. {% data reusables.projects.open-command-palette %}
2. Comece a digitar "Nova visualização" (para criar uma nova visualização) ou "Duplicar visualização" (para duplicar a visualização atual).
3. Selecione o comando desejado.
4. Como alternativa, clique em {% octicon "plus" aria-label="the plus icon" %} **Nova Visualização** ao lado da visualização mais à direita.
5. Como alternativa, selecione o menu suspenso ao lado de um nome de exibição e clique em **Duplicar visualização**.

Ao alterar uma visualização, aparecerá um ponto ao lado do nome de visualização para indicar que a visualização foi modificada. Se você não desejar salvar as alterações, você poderá ignorar este indicador. Para salvar a visualização para todos os integrantes do projeto:

1. {% data reusables.projects.open-command-palette %}
1. Comece a digitar "Salvar visualização" ou "Salvar alterações na nova visualização".
1. Selecione o comando desejado.
1. Como alternativa, selecione o menu suspenso ao lado do nome de uma visualização e clique em **Salvar visualização** ou **SAlvar alterações na nova visualização**.

Para renomear uma visualização, clique duas vezes no nome da visualização e digite o nome desejado.

Para excluir uma visualização:

1. {% data reusables.projects.open-command-palette %}
2. Comece a digitar "Excluir visualização".
3. Selecione o comando desejado.
4. Como alternativa, selecione o menu suspenso ao lado do nome de uma visualização e clique em **Excluir visualização**.

## Leia mais

- "[Sobre projetos (beta)](/issues/trying-out-the-new-projects-experience/about-projects)
- "[Criando um projeto (beta)](/issues/trying-out-the-new-projects-experience/creating-a-project)
