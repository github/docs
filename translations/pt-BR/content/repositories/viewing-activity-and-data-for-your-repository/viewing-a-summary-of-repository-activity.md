---
title: Exibir um resumo da atividade do repositório
intro: 'You can view an overview of a repository''s pull request, issue, and commit activity.'
product: '{% data reusables.gated-features.repository-insights %}'
redirect_from:
  - /articles/viewing-a-summary-of-repository-activity
  - /github/visualizing-repository-data-with-graphs/viewing-a-summary-of-repository-activity
  - /github/visualizing-repository-data-with-graphs/accessing-basic-repository-data/viewing-a-summary-of-repository-activity
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
topics:
  - Repositories
shortTitle: Visualizar atividade do repositório
---

## About Pulse

É possível exibir uma visão geral da atividade de um repositório por meio do gráfico Pulse. Pulse includes a list of open and merged pull requests, open and closed issues, and a graph showing the commit activity for the top 15 users who committed to the default branch of the project in the selected [time period](/articles/viewing-a-summary-of-repository-activity#filtering-by-time).

Os coautores de commit serão incluídos no resumo da atividade de commit caso tenha sido feito merge dos commits deles no branch padrão do repositório e eles estejam entre os 15 principais usuários que contribuíram com a maioria dos commits.

## Accessing Pulse

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.accessing-repository-graphs %}

## Filtrar por hora

Por padrão, o Pulse mostra os últimos sete dias de atividade do repositório. Para escolher um período diferente, clique no menu suspenso **Period** (Período) no canto superior esquerdo da visão geral do Pulse.

![Filtrar atividade do Pulse por hora](/assets/images/help/pulse/pulse_time_filter_dropdown.png)
