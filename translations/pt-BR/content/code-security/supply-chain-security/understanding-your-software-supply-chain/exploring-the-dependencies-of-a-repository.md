---
title: Explorar as dependências de um repositório
intro: 'Você pode usar o gráfico de dependências para ver os pacotes dos quais o seu projeto depende{% ifversion fpt or ghec %} e os repositórios que dependem dele{% endif %}. Além disso, você pode ver todas as vulnerabilidades detectadas nas suas dependências.'
redirect_from:
  - /articles/listing-the-packages-that-a-repository-depends-on
  - /github/visualizing-repository-data-with-graphs/listing-the-packages-that-a-repository-depends-on
  - /articles/listing-the-projects-that-depend-on-a-repository
  - /github/visualizing-repository-data-with-graphs/listing-the-projects-that-depend-on-a-repository
  - /github/visualizing-repository-data-with-graphs/exploring-the-dependencies-and-dependents-of-a-repository
  - /github/visualizing-repository-data-with-graphs/exploring-the-dependencies-of-a-repository
  - /code-security/supply-chain-security/exploring-the-dependencies-of-a-repository
versions:
  fpt: '*'
  ghes: '*'
  ghae: issue-4864
  ghec: '*'
type: how_to
topics:
  - Dependency graph
  - Dependencies
  - Repositories
shortTitle: Explorar dependências
---

<!--For this article in earlier GHES versions, see /content/github/visualizing-repository-data-with-graphs-->

## Viewing the dependency graph

O gráfico de dependências mostra as dependências{% ifversion fpt or ghec %} e dependentes{% endif %} do seu repositório. Para obter informações sobre a detecção de dependências e quais ecossistemas são compatíveis, consulte "[Sobre o gráfico de dependências](/github/visualizing-repository-data-with-graphs/about-the-dependency-graph)".

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.accessing-repository-graphs %}
{% data reusables.repositories.click-dependency-graph %}{% ifversion fpt or ghec %}
4. Opcionalmente, em "Gráfico de dependência", clique em **Dependentes**. ![Dependents tab on the dependency graph page](/assets/images/help/graphs/dependency-graph-dependents-tab.png){% endif %}

{% ifversion ghes %}
Os proprietários das empresas podem configurar o gráfico de dependências a nível da empresa. Para obter mais informações, consulte "[Habilitando o gráfico de dependências para sua empresa](/admin/code-security/managing-supply-chain-security-for-your-enterprise/enabling-the-dependency-graph-for-your-enterprise)".
{% endif %}

### Vista de dependências

{% ifversion fpt or ghec %}
As dependências são agrupadas por ecossistema. Você pode expandir sua dependência para visualizar suas dependências.  Dependências de repositórios privados, pacotes privados ou arquivos não reconhecidos são exibidos em texto sem formatação. Se o gerenciador de pacotes para a dependência estiver em um repositório público, {% data variables.product.product_name %} irá exibir um link para o repositório.

Se foram detectadas vulnerabilidades no repositório, estas são exibidas na parte superior da visualização para usuários com acesso ao {% data variables.product.prodname_dependabot_alerts %}.

![Gráfico de dependências](/assets/images/help/graphs/dependencies_graph.png)

{% endif %}

{% ifversion ghes or ghae %}
Todas as dependências diretas e indiretas especificadas no manifesto do repositório ou arquivos de bloqueio são listadas e agrupadas pelo ecossistema. Se foram detectadas vulnerabilidades no repositório, estas são exibidas na parte superior da visualização para usuários com acesso ao {% data variables.product.prodname_dependabot_alerts %}.

![Gráfico de dependências](/assets/images/help/graphs/dependencies_graph_server.png)

{% note %}

**Observação:** {% data variables.product.product_name %} não preenche a vista de **Dependentes**.

{% endnote %}

{% endif %}

{% ifversion fpt or ghec %}
### Vista de dependentes

Para repositórios públicos, a vista de dependentes mostra como o repositório é usado por outros repositórios. Para exibir apenas os repositórios que contêm uma biblioteca em um gerente de pacotes, clique em **QUANTIDADE de pacotes** imediatamente acima da lista de repositórios dependentes. A quantidade de dependentes é aproximada e pode nem sempre corresponder aos dependentes listados.

![gráfico de dependentes](/assets/images/help/graphs/dependents_graph.png)

## Habilitar e desabilitar o gráfico de dependências para um repositório privado

{% data reusables.dependabot.enabling-disabling-dependency-graph-private-repo %}

## Alterar o pacote "Usado por"

Você pode notar que alguns repositórios têm uma seção "Usado por" na barra lateral da aba**Código**. Seu repositório terá uma seção "Usado por", se:
  * O gráfico de dependências está habilitado para o repositório (consulte a seção acima para mais detalhes).
  * Seu repositório contém um pacote que é publicado em um [ecossistema de pacote compatível](/github/visualizing-repository-data-with-graphs/about-the-dependency-graph#supported-package-ecosystems).
  * Dentro do ecossistema, seu pacote tem um link para um repositório _público_ onde a fonte é armazenada.

A seção "Usado por" mostra o número de referências públicas ao pacote que foi encontrado, e exibe os avatares de alguns dos proprietários dos projetos dependentes.

![Seção da barra lateral "Usado por"](/assets/images/help/repository/used-by-section.png)

Clicar em qualquer item desta seção irá levar você para a aba **Dependentes** do gráfico de dependências.

A seção "Usado por" representa um único pacote do repositório. Se você tiver permissões de administrador em um repositório que contém vários pacotes, você poderá escolher qual pacote a seção "Usado por" representa.

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
{% data reusables.repositories.navigate-to-code-security-and-analysis %}
4. Em "Segurança e análise de código" clique no menu suspenso na seção "Usado pelo contador" e escolha um pacote. ![Escolha um pacote "Usado por"](/assets/images/help/repository/choose-used-by-package.png)

{% endif %}

## Solução de problemas para o gráfico de dependências

Se seu gráfico de dependências estiver vazio, poderá haver um problema com o arquivo que contém suas dependências. Selecione o arquivo para garantir que ele esteja corretamente formatado para o tipo de arquivo.

{% ifversion fpt or ghec %}
Se o arquivo estiver formatado corretamente, verifique o seu tamanho. O gráfico de dependências ignora arquivos de manifesto individual e os arquivos e bloqueio com tamanho superior a 1.5 Mb, a menos que você seja um usuário do {% data variables.product.prodname_enterprise %}. Ele processa até 20 arquivos de manifesto ou de bloqueio por repositório por padrão; logo você pode dividir dependências em arquivos menores em subdiretórios do repositório.{% endif %}

Se um arquivo de manifesto ou de bloqueio não for processado, suas dependências serão omitidas no gráfico de dependências e não será possível verificar se há dependências.

## Leia mais

- "[Sobre o gráfico de dependências](/github/visualizing-repository-data-with-graphs/about-the-dependency-graph)"
- "[Visualizando {% data variables.product.prodname_dependabot_alerts %} para dependências vulneráveis](/github/managing-security-vulnerabilities/viewing-and-updating-vulnerable-dependencies-in-your-repository)"{% ifversion ghec %}
- "[Visualizando insights para a sua organização](/organizations/collaborating-with-groups-in-organizations/viewing-insights-for-your-organization)"{% endif %}{% ifversion fpt or ghec %}
- "[Entender como o {% data variables.product.prodname_dotcom %} usa e protege seus dados](/get-started/privacy-on-github)"
{% endif %}
