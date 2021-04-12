---
title: Exibir um resumo da atividade do repositório
intro: 'É possível exibir uma visão geral da atividade de um repositório por meio do gráfico Pulse. Ele inclui uma lista de pull requests abertas e com merge, problemas abertos e fechados e um gráfico que mostra a atividade de commit dos 15 principais usuários que fizeram commit no branch padrão do projeto durante o [período] selecionado(/articles/viewing-a-summary-of-repository-activity#filtering-by-time).'
product: '{% data reusables.gated-features.repository-insights %}'
redirect_from:
  - /articles/viewing-a-summary-of-repository-activity
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
  - repositories
---

Os coautores de commit serão incluídos no resumo da atividade de commit caso tenha sido feito merge dos commits deles no branch padrão do repositório e eles estejam entre os 15 principais usuários que contribuíram com a maioria dos commits.

### Acessar o Pulse

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.accessing-repository-graphs %}

### Filtrar por hora

Por padrão, o Pulse mostra os últimos sete dias de atividade do repositório. Para escolher um período diferente, clique no menu suspenso **Period** (Período) no canto superior esquerdo da visão geral do Pulse.

![Filtrar atividade do Pulse por hora](/assets/images/help/pulse/pulse_time_filter_dropdown.png)
