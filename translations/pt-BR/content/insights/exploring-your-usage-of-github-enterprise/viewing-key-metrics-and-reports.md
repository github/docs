---
title: Visualizar métricas e relatórios principais
intro: Você pode visualizar e filtrar métricas e relatórios principais para ajudá-lo a entender e melhorar o processo de entrega de software através dos dados.
product: '{% data reusables.gated-features.github-insights %}'
redirect_from:
  - /github/installing-and-configuring-github-insights/viewing-and-filtering-key-metrics-and-reports
permissions: 'Anyone with access to {% data variables.product.prodname_insights %} can view key metrics and reports.'
versions:
  enterprise-server: '*'
---

### Sobre métricas e relatórios

{% data reusables.github-insights.key-metrics-and-reports %} Para obter mais informações sobre as métricas disponíveis, consulte "[métricas disponíveis com {% data variables.product.prodname_insights %}](/insights/exploring-your-usage-of-github-enterprise/metrics-available-with-github-insights)".

Você pode ver visualizar as metas e taxas de sucesso para cada métrica principal. Para obter mais informações, consulte "[Gerenciar metas](/insights/installing-and-configuring-github-insights/managing-goals)".

Você só terá acesso aos dados de {% data variables.product.prodname_insights %} aos quais você também tem acesso em {% data variables.product.prodname_enterprise %}.

Você pode filtrar os dados incluídos nas métricas-chave ou relatórios por equipe, repositórios ou intervalo de datas.

### Visualizar as métricas principais

{% data reusables.github-insights.navigate-to-key-metrics %}
{% data reusables.github-insights.choose-key-metric %}
{% data reusables.github-insights.filter-reports %}
{% data reusables.github-insights.view-events %}

### Visualizar relatórios

1. Em {% data variables.product.prodname_insights %}, clique em **{% octicon "file" aria-label="The file icon" %} Relatórios**. ![Aba de relatórios](/assets/images/help/insights/reports-tab.png)
2. Em **{% octicon "file" aria-label="The file icon" %} Relatórios**, clique no nome do relatório que deseja visualizar. ![Lista de relatórios](/assets/images/help/insights/reports-list.png)
{% data reusables.github-insights.filter-reports %}
{% data reusables.github-insights.view-events %}

### Leia mais

- "[Gerenciar contribuidores e equipes](/insights/installing-and-configuring-github-insights/managing-contributors-and-teams)
- "[Gerenciar repositórios](/insights/installing-and-configuring-github-insights/managing-repositories)"
- "[Gerenciar organizações](/insights/installing-and-configuring-github-insights/managing-organizations)"
- "[Gerenciar eventos](/insights/installing-and-configuring-github-insights/managing-events)"
