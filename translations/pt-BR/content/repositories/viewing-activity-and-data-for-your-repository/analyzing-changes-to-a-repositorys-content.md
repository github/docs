---
title: Analisar alterações de conteúdo do repositório
intro: 'Você pode ver as alterações no conteúdo de um repositório analisando os commits, a frequência dos commits, bem como as adições e exclusões de conteúdo do repositório.'
product: '{% data reusables.gated-features.repository-insights %}'
redirect_from:
  - /articles/visualizing-additions-and-deletions-to-content-in-a-repository
  - /github/visualizing-repository-data-with-graphs/visualizing-additions-and-deletions-to-content-in-a-repository
  - /articles/viewing-commit-frequency-in-a-repository
  - /articles/analyzing-changes-to-a-repository-s-content
  - /articles/analyzing-changes-to-a-repositorys-content
  - /articles/visualizing-commits-in-a-repository
  - /github/visualizing-repository-data-with-graphs/visualizing-commits-in-a-repository
  - /github/visualizing-repository-data-with-graphs/analyzing-changes-to-a-repositorys-content
  - /github/visualizing-repository-data-with-graphs/analyzing-changes-to-a-repositorys-content/visualizing-commits-in-a-repository
  - /github/visualizing-repository-data-with-graphs/analyzing-changes-to-a-repositorys-content/visualizing-additions-and-deletions-to-content-in-a-repository
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Repositories
shortTitle: Analisar alterações
---

## Visualizar commits em um repositório

No gráfico de commits, é possível ver todos os commits feitos em um repositório no ano passado (exceto commits de merge).

O gráfico superior mostra commits do ano inteiro, por semana.

![Gráfico anual de commits do repositório](/assets/images/help/graphs/repo_commit_activity_year_graph.png)

O gráfico inferior mostra a média de commits por dia da semana para a semana selecionada.

![Gráfico semanal de commits do repositório](/assets/images/help/graphs/repo_commit_activity_week_graph.png)

### Acessar o gráfico de commits

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.accessing-repository-graphs %}
3. Na barra lateral esquerda, clique em **Commits** (Commits). ![Guia Commits (Commits)](/assets/images/help/graphs/commits_tab.png)

## Visualizando adições e exclusão de conteúdo em um repositório

O gráfico de código de frequência mostra as adições e exclusões de conteúdo para cada semana no histórico de um repositório.

{% ifversion fpt or ghec %}

![gráfico de código de frequência](/assets/images/help/graphs/repo_code_frequency_graph_dotcom.png)

{% endif %}

### Acessar o gráfico de código de frequência

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.accessing-repository-graphs %}
3. Na barra lateral esquerda, clique em **Code frequency** (Frequência de código). ![Guia Code frequency (Frequência de código)](/assets/images/help/graphs/code_frequency_tab.png)
