---
title: Explorar as dependências de um repositório
intro: 'Ao usar o gráfico de dependência, você pode ver os pacotes dos quais o projeto depende {% if currentVersion == "free-pro-team@latest" %} e os repositórios que dependem dele{% endif %}. Além disso, você pode ver todas as vulnerabilidades detectadas nas suas dependências.'
versions:
  enterprise-server: <=2.22
topics:
  - Repositories
---

<!--See /content/code-security/supply-chain-security/exploring-the-dependencies-of-a-repository for the latest version of this article -->

### Viewing the dependency graph

{% data reusables.repositories.enable-security-alerts %}

O gráfico de dependências mostra as dependências do seu repositório. Para obter informações sobre a detecção de dependências e quais ecossistemas são compatíveis, consulte "[Sobre o gráfico de dependências](/github/visualizing-repository-data-with-graphs/about-the-dependency-graph)".

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.accessing-repository-graphs %}
{% data reusables.repositories.click-dependency-graph %}

#### Vista de dependências

{% if enterpriseServerVersions contains currentVersion and currentVersion ver_gt "enterprise-server@2.21" %}
Todas as dependências diretas e indiretas especificadas no manifesto do repositório ou arquivos de bloqueio são listadas e agrupadas pelo ecossistema. Se foram detectadas vulnerabilidades no repositório, estas serão exibidas na parte superior da visualização para usuários com acesso ao
{% data variables.product.prodname_dependabot_alerts %}.

![Gráfico de dependências](/assets/images/help/graphs/dependencies_graph_server.png)

{% note %}

**Observação:** {% data variables.product.prodname_ghe_server %} não preenche a vista de **Dependentes**.

{% endnote %}

{% endif %}

{% if enterpriseServerVersions contains currentVersion and currentVersion ver_lt "enterprise-server@2.22" %}
Todas as dependências diretas e indiretas especificadas no manifesto do repositório ou arquivos de bloqueio são listadas e agrupadas pelo ecossistema. Se foram detectadas vulnerabilidades no repositório, estas são exibidas na parte superior da visualização para usuários com acesso a alertas de segurança.

![Gráfico de dependências](/assets/images/help/graphs/dependencies_graph_server.png)

{% note %}

**Observação:** {% data variables.product.prodname_ghe_server %} não preenche a vista de **Dependentes**.

{% endnote %}

{% endif %}

### Solução de problemas para o gráfico de dependências

Se seu gráfico de dependências estiver vazio, poderá haver um problema com o arquivo que contém suas dependências. Selecione o arquivo para garantir que ele esteja corretamente formatado para o tipo de arquivo.

Se um arquivo de manifesto ou de bloqueio não for processado, suas dependências serão omitidas no gráfico de dependências e não será possível verificar se há dependências.
