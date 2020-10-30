---
title: Listar os projetos dependentes de um repositório
intro: É possível visualizar pacotes e projetos que dependem de um repositório em um gráfico de dependentes.
redirect_from:
  - /articles/listing-the-projects-that-depend-on-a-repository
versions:
  free-pro-team: '*'
  enterprise-server: '*'
---

### Sobre o gráfico de dependentes
O gráfico de dependentes contém dados de pacotes e aplicativos. Pacotes são repositórios que possuem uma biblioteca em um gerenciador de pacotes, enquanto aplicativos são repositórios que dependem do repositório selecionado. A lista de aplicativos no gráfico de dependentes é categorizada pelo projeto mais recente que depende de um repositório.

O gráfico de dependentes contém dados para estas linguagens:

- RubyGems
- NPM
- PyPI
- Maven (somente pom.xml)
- Nuget

{% data reusables.repositories.enable-security-alerts %}

{% note %}

**Observação:** a contagem de dependentes é aproximada e pode não corresponder à lista de dependentes.

{% endnote %}

![gráfico de dependentes](/assets/images/help/graphs/dependents_graph.png)

### Acessar o gráfico de dependentes

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.accessing-repository-graphs %}
{% data reusables.repositories.click-dependency-graph %}
4. Em "Dependency graph" (Gráfico de dependências), clique em **Dependents** (Dependentes). ![Aba Dependents (Dependentes) na página dependency graph (gráfico de dependências)](/assets/images/help/graphs/dependency-graph-dependents-tab.png)

### Leia mais

- "[Listar os pacotes dos quais um repositório depende](/articles/listing-the-packages-that-a-repository-depends-on)"{% if currentVersion == "free-pro-team@latest" %}
- "[Visualizar informações da organização](/articles/viewing-insights-for-your-organization)"{% endif %}
