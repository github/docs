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

Você pode usar os insights para visualizar e personalizar gráficos que usam os itens adicionados ao seu projeto como seus dados de origem. O gráfico padrão "Burn up" mostra o status do item ao longo do tempo, permitindo que você visualize o progresso e os padrões de ponto ao longo do tempo.

![Captura de tela que mostra um exemplo do gráfico padrão de burn up para a iteração atual](/assets/images/help/issues/burnup-example.png)

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
1. Para alterar o tipo de gráfico, selecione a lista suspensa do **Layout** e clique no tipo de gráfico que você deseja usar.
1. Para alterar o campo usado no eixo X do gráfico, selecione o menu suspenso **Eixo X** e clique no campo que você deseja usar.
1. Opcionalmente, para agrupar os itens no seu eixo X por outro campo, selecione **Agrupar por** e clique no campo que você deseja usar ou clique em "Nenhum" para desabilitar o agrupamento.
1. Opcionalmente, se o seu projeto contiver campos numéricos e você quiser que o eixo Y exiba a soma, média, mínimo ou máximo de um desses campos numéricos, selecione **eixo Y** e clique em uma opção. Em seguida, selecione o menu suspenso que aparece abaixo e clique no campo número que você deseja usar.
1. Para salvar seu gráfico, clique em **Salvar alterações**.
