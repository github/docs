---
title: Exibir um resumo da atividade do repositório
intro: 'Você pode ter uma visão geral do pull request, problema e atividade do commit de um repositório.'
product: '{% data reusables.gated-features.repository-insights %}'
redirect_from:
  - /articles/viewing-a-summary-of-repository-activity
  - /github/visualizing-repository-data-with-graphs/viewing-a-summary-of-repository-activity
  - /github/visualizing-repository-data-with-graphs/accessing-basic-repository-data/viewing-a-summary-of-repository-activity
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Repositories
shortTitle: Visualizar atividade do repositório
---

## Sobre o Pulse

É possível exibir uma visão geral da atividade de um repositório por meio do gráfico Pulse. O Pulse inclui uma lista de pull requests abertos e mesclados, problemas abertos e fechados e um gráfico que mostra a atividade de commit para os 15 principais usuários que fizeram o commit com o branch padrão do projeto no [período de tempo](/articles/viewing-a-summary-of-repository-activity#filtering-by-time) selecionado.

Os coautores de commit serão incluídos no resumo da atividade de commit caso tenha sido feito merge dos commits deles no branch padrão do repositório e eles estejam entre os 15 principais usuários que contribuíram com a maioria dos commits.

## Acessando o Pulse

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.accessing-repository-graphs %}

## Filtrar por hora

Por padrão, o Pulse mostra os últimos sete dias de atividade do repositório. Para escolher um período diferente, clique no menu suspenso **Period** (Período) no canto superior esquerdo da visão geral do Pulse.

![Filtrar atividade do Pulse por hora](/assets/images/help/pulse/pulse_time_filter_dropdown.png)
