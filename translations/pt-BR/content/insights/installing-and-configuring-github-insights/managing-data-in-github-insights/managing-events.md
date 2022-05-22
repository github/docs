---
title: Gerenciar eventos
intro: '{% data reusables.github-insights.events %}'
redirect_from:
  - /github/installing-and-configuring-github-insights/creating-and-managing-events
  - /insights/installing-and-configuring-github-insights/managing-events
permissions: 'People with admin permissions to {% data variables.product.prodname_insights %} can manage events.'
versions:
  enterprise-server: '*'
---
### Sobre eventos

Os eventos adicionam contexto às métricas. Por exemplo, férias ou datas de lançamento podem causar mudanças nos padrões de trabalho. Portanto, saber quando ocorreram esses eventos pode alterar sua avaliação de métricas. Você pode criar eventos para a reorganização de equipes, iniciar datas para novos funcionários, alterações no âmbito de competências das equipes e qualquer outra coisa que afete o trabalho da sua equipe.

Após criar um evento em {% data variables.product.prodname_insights %}, qualquer pessoa poderá visualizá-lo como uma anotação em algumas métricas. Para obter mais informações, consulte "[Visualizar métricas e relatórios principais](/insights/exploring-your-usage-of-github-enterprise/viewing-key-metrics-and-reports)".

### Criar um evento

{% data reusables.github-insights.settings-tab %}
{% data reusables.github-insights.events-tab %}
2. Clique em **Adicionar evento**. ![Botão adicionar evento](/assets/images/help/insights/add-event.png)
3. Em "Título", digite um nome descritivo para o seu evento. ![Campo de título](/assets/images/help/insights/title-field.png)
4. Use o menu suspenso "Data de início" e selecione uma data de início para o seu evento. ![Menu suspenso da data de início](/assets/images/help/insights/start-date.png)
5. Use o menu suspenso "Data final" e selecione uma data final para o seu evento. ![Menu suspenso da data final](/assets/images/help/insights/end-date.png)
6. Clique em **Salvar**.

### Excluir um evento

{% data reusables.github-insights.settings-tab %}
{% data reusables.github-insights.events-tab %}
3. À direita do evento que você deseja excluir, clique em **{% octicon "trash" aria-label="The trash icon" %}**. ![Botão de Lixeira](/assets/images/help/insights/trashcan-button.png)
4. Clique em **Confirmar**.
