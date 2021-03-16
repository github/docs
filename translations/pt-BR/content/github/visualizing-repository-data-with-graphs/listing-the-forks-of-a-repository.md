---
title: Listar as bifurcações de um repositório
intro: O gráfico de integrantes exibe todas as bifurcações de um repositório.
redirect_from:
  - /articles/listing-the-forks-of-a-repository
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
---

As bifurcações são listadas em ordem alfabética pelo nome de usuário da pessoa que bifurcou o repositório. É possível clicar no nome de usuário para ser redirecionado à página de perfil {% data variables.product.product_name %} do usuário ou clicar no nome da bifurcação para ser redirecionado à bifurcação específica do repositório.

{% if currentVersion == "free-pro-team@latest" %}

![Gráfico de integrantes do repositório](/assets/images/help/graphs/repo_forks_graph_dotcom.png)

{% else %}

![Gráfico de integrantes do repositório](/assets/images/help/graphs/repo_members_graph.png)

{% endif %}

### Acessar o gráfico de integrantes

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.accessing-repository-graphs %}
3. Na barra lateral esquerda, clique em **Forks** (Bifurcações). ![Aba Forks (Bifurcações)](/assets/images/help/graphs/graphs-sidebar-forks-tab.png)
