---
title: Usando insights com projetos (beta)
intro: Você pode visualizar e personalizar gráficos construídos a partir dos dados do seu projeto.
allowTitleToDifferFromFilename: true
miniTocMaxHeadingLevel: 2
versions:
  fpt: '*'
  ghec: '*'
topics:
  - Projects
  - Organizations
---

{% data reusables.projects.insights-alpha %}

## Sobre insights

Você pode usar os insights para visualizar e personalizar gráficos que usam os itens adicionados ao seu projeto como seus dados de origem. The default "Burn up" chart shows item status over time, allowing you to visualize progress and spot patterns over time.

![Screenshot showing an example of the default burn up chart for the current iteration](/assets/images/help/issues/burnup-example.png)

Você pode aplicar filtros ao gráfico padrão e também criar seus próprios gráficos. Ao criar um gráfico, você define os filtros, o tipo de gráfico e as informações exibidas, e o gráfico está disponível para qualquer pessoa que possa visualizar o projeto.

![Captura de tela que mostra um gráfico de colunas empilhadas com tipos de itens para cada iteração](/assets/images/help/issues/column-chart-example.png)

## Criando um gráfico

{% data reusables.projects.access-insights %}
3. No menu à esquerda, clique em **Novo gráfico**.
4. Opcionalmente, para alterar o nome do novo gráfico, clique em {% octicon "triangle-down" aria-label="The triangle icon" %}, digite um novo nome e pressione <kbd>Retornar</kbd>.
5. Acima do gráfico, digite os filtros para alterar os dados utilizados para a construção do gráfico. Para obter mais informações, consulte "[Filtrando projetos](/issues/trying-out-the-new-projects-experience/filtering-projects)".
6. À direita da caixa de texto do filtro, clique em **Salvar alterações**.

## Configurando um gráfico

{% data reusables.projects.access-insights %}
1. No menu à esquerda, clique no gráfico que deseja configurar.
1. No lado direito da página, clique em **Configurar**. Será aberto um painel à direita.
2. Para alterar o tipo de gráfico, selecione a lista suspensa do **Layout** e clique no tipo de gráfico que você deseja usar.
3. Para alterar o campo usado no eixo X do gráfico, selecione o menu suspenso **Eixo X** e clique no campo que você deseja usar. Se você selecionar "Horário", "Agrupar por" irá mudar para "Status" e "Eixo Y" irá mudar para "Contagem de itens"
4. Optionally, to group the items on your X-axis by another field, select **Group by** and click on the field you want to use, or click "None" to disable grouping.
5. Optionally, if your project contains number fields and you want the Y-axis to display the sum, average, minimum, or maximum of one of those number fields, select **Y-axis** and click an option. Then, select the dropdown that appears beneath and click on the number field you want to use.
6. To save your chart, click **Save changes**.
