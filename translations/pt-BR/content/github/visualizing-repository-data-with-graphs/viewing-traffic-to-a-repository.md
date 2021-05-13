---
title: Exibir tráfego para um repositório
intro: 'No gráfico de tráfego, qualquer pessoa com acesso push a um repositório pode visualizar o tráfego dele, inclusive clones completos (e não fetches), visitantes nos últimos 14 dias, sites de referência e conteúdo popular.'
product: 'Este gráfico de informações do repositório está disponível em repositórios públicos com {% data variables.product.prodname_free_user %} e {% data variables.product.prodname_free_team %} para organizações e em repositórios públicos e privados com {% data variables.product.prodname_pro %}, {% data variables.product.prodname_team %} e {% data variables.product.prodname_ghe_cloud %}. {% if currentVersion == "free-pro-team@latest" %} Para obter mais informações, consulte "[Sobre gráficos do repositório](/articles/about-repository-graphs)" e "[produtos do {% data variables.product.prodname_dotcom %}](/articles/github-s-products)."{% endif %}'
redirect_from:
  - /articles/viewing-traffic-to-a-repository
versions:
  free-pro-team: '*'
topics:
  - Repositories
---

A partir dos links indicados nos caminhos especificados, é possível navegar para sites de referência, exceto mecanismos de pesquisa e o {% data variables.product.product_name %} em si. O conteúdo popular tem links para o conteúdo específico que gerou o tráfego.

Os sites de referência e o conteúdo popular são ordenados por exibições e visitantes exclusivos. As informações sobre visitantes e clones completos são atualizadas a cada hora, enquanto que as seções de conteúdo popular e sites de referência são atualizadas diariamente. Todos os dados no gráfico de tráfego usam o fuso horário UTC+0, independentemente de onde você está localizado.

{% tip %}

**Dica:** passe o mouse sobre um dia específico no gráfico de tráfego para visualizar os dados exatos desse dia.

{% endtip %}

![Gráficos de tráfego do repositório com dica de ferramenta](/assets/images/help/graphs/repo_traffic_graphs_tooltip_dotcom.png)

### Acessar o gráfico de tráfego

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.accessing-repository-graphs %}
3. Na barra lateral esquerda, clique em **Tráfego**. ![Guia Traffic (Tráfego)](/assets/images/help/graphs/traffic_tab.png)
