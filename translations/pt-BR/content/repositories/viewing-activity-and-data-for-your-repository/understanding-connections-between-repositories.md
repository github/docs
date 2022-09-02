---
title: Entender conexões entre repositórios
intro: É possível entender melhor as conexões que existem entre repositórios visualizando a rede e as bifurcações de um repositório e os projetos que dependem do repositório.
product: '{% data reusables.gated-features.repository-insights %}'
redirect_from:
  - /articles/viewing-a-repository-s-network
  - /articles/viewing-a-repositorys-network
  - /github/visualizing-repository-data-with-graphs/viewing-a-repositorys-network
  - /articles/understanding-connections-between-repositories
  - /articles/listing-the-forks-of-a-repository
  - /github/visualizing-repository-data-with-graphs/listing-the-forks-of-a-repository
  - /github/visualizing-repository-data-with-graphs/viewing-the-dependencies-of-a-repository
  - /github/visualizing-repository-data-with-graphs/understanding-connections-between-repositories
  - /github/visualizing-repository-data-with-graphs/understanding-connections-between-repositories/viewing-a-repositorys-network
  - /github/visualizing-repository-data-with-graphs/understanding-connections-between-repositories/listing-the-forks-of-a-repository
  - /github/visualizing-repository-data-with-graphs/understanding-connections-between-repositories/viewing-the-dependencies-of-a-repository
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Repositories
shortTitle: Conexões entre repositórios
---

## Exibir a rede do repositório

O gráfico de rede exibe o histórico de branches de toda a rede do repositório, incluindo branches do repositório raiz e branches de bifurcações que contêm commits exclusivos da rede.

![Gráfico de rede do repositório](/assets/images/help/graphs/repo_network_graph.png)

{% tip %}

**Dica:** para ver branches mais antigos, clique e arraste dentro do gráfico.

{% endtip %}

## Acessar o gráfico de rede

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.accessing-repository-graphs %}
3. Na barra lateral esquerda, clique em **Network** (Rede). ![Guia Network (Rede)](/assets/images/help/graphs/network_tab.png)

## Listar as bifurcações de um repositório

O gráfico de integrantes exibe todas as bifurcações de um repositório.

As bifurcações são listadas em ordem alfabética pelo nome de usuário da pessoa que bifurcou o repositório. É possível clicar no nome de usuário para ser redirecionado à página de perfil {% data variables.product.product_name %} do usuário ou clicar no nome da bifurcação para ser redirecionado à bifurcação específica do repositório.

{% ifversion fpt or ghec %}

![Gráfico de integrantes do repositório](/assets/images/help/graphs/repo_forks_graph_dotcom.png)

{% else %}

![Gráfico de integrantes do repositório](/assets/images/help/graphs/repo_members_graph.png)

{% endif %}

### Acessar o gráfico de integrantes

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.accessing-repository-graphs %}
3. Na barra lateral esquerda, clique em **Forks** (Bifurcações). ![Aba Forks (Bifurcações)](/assets/images/help/graphs/graphs-sidebar-forks-tab.png)

## Visualizar as dependências de um repositório

Você pode usar o gráfico de dependências para explorar o código do qual seu repositório depende.

Quase todos os softwares dependem do código desenvolvido e mantido por outros desenvolvedores, muitas vezes conhecido como cadeia de suprimentos. Por exemplo, utilitários, bibliotecas e estruturas. Essas dependências são parte integrante do seu código e quaisquer erros ou vulnerabilidades nelas podem afetar seu código. É importante revisar e manter estas dependências.

O gráfico de dependências fornece uma ótima maneira de visualizar e explorar as dependências de um repositório. Para obter mais informações, consulte "[Sobre o gráfico de dependências](/code-security/supply-chain-security/about-the-dependency-graph)" e "[Explorar as dependências de um repositório](/code-security/supply-chain-security/exploring-the-dependencies-of-a-repository)".

Você também pode configurar o seu repositório para que {% data variables.product.company_short %} alerte você automaticamente sempre que uma vulnerabilidade de segurança for encontrada em uma das suas dependências. Para obter mais informações, consulte "[Sobre {% data variables.product.prodname_dependabot_alerts %}](/github/managing-security-vulnerabilities/about-alerts-for-vulnerable-dependencies)".
