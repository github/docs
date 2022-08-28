---
title: Gerenciar metas
intro: Você pode usar objetivos para definir metas para métricas principais e medir o sucesso ao alcançar essas metas.
redirect_from:
  - /github/installing-and-configuring-github-insights/creating-and-managing-goals
  - /insights/installing-and-configuring-github-insights/managing-goals
permissions: 'Anyone with access to {% data variables.product.prodname_insights %} can manage goals.'
versions:
  enterprise-server: '*'
---

### Sobre as metas

As metas são os que você pode definir para métricas principais para medir o sucesso da sua equipe. Ao definir definiu uma meta para uma métrica chave, você pode ver como o desempenho da sua equipe é comparado com as metas usando a linha de meta nos gráficos e a métrica da taxa de sucesso. Por exemplo, você pode definir a meta para o `tempo de resposta de revisão do código` para 4 horas. Uma linha de meta no gráfico principal mostra quais revisões de código alcançaram a meta e quais não. Se sua equipe completou metade das revisões de código em menos de 4 horas, a sua `taxa de sucesso` será 50%.

As metas estão disponíveis apenas em métricas principais. Alguns relatórios também mostram qual é o trabalho, como os pull requests individuais, que não atingiram sua meta. Para obter mais informações, consulte "[Visualizar métricas e relatórios principais](/insights/exploring-your-usage-of-github-enterprise/viewing-key-metrics-and-reports)".

Não é possível criar ou excluir metas. Ao editar uma meta, a nova meta será aplicada a todos usando seu aplicativo do {% data variables.product.prodname_insights %}.

### Editando uma meta

{% data reusables.github-insights.navigate-to-key-metrics %}
{% data reusables.github-insights.choose-key-metric %}
1. À direita da meta, clique em {% octicon "gear" aria-label="The gear icon" %}. ![Ícone de engrenagem para editar a meta](/assets/images/help/insights/edit-goal.png)
2. No campo de texto, digite um novo valor objetivo. ![Campo do valor da meta](/assets/images/help/insights/input-goal.png)
3. Clique em **Salvar**. ![Salvar meta](/assets/images/help/insights/save-goal.png)
