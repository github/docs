---
title: Exibir contribuidores do projeto
intro: 'Você pode ver quem contribuiu com commits para um repositório{% ifversion fpt %} e as dependências dele{% endif %}.'
redirect_from:
  - /articles/i-don-t-see-myself-in-the-contributions-graph/
  - /articles/viewing-contribution-activity-in-a-repository/
  - /articles/viewing-a-projects-contributors
  - /github/visualizing-repository-data-with-graphs/viewing-a-projects-contributors
  - /github/visualizing-repository-data-with-graphs/accessing-basic-repository-data/viewing-a-projects-contributors
product: '{% data reusables.gated-features.repository-insights %}'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
topics:
  - Repositories
shortTitle: Visualizar contribuidores do projeto
---

## Sobre contribuidores

No gráfico de contribuidores, você pode visualizar os 100 principais contribuidores de um repositório{% ifversion ghes or ghae %}, incluindo coautores de commits{% endif %}. Commits de merge e commits vazios não são contabilizados como contribuições para este gráfico.

{% ifversion fpt %}
Você também pode ver uma lista de pessoas que contribuíram para as dependências Python do projeto. Para acessar essa lista de contribuidores da comunidade, visite `https://github.com/REPO-OWNER/REPO-NAME/community_contributors`.
{% endif %}

## Acessar o gráfico de contribuidores

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.accessing-repository-graphs %}
3. Na barra lateral esquerda, clique em **Contributors** (Contribuiddores). ![Aba de colaboradores](/assets/images/help/graphs/contributors_tab.png)
4. Como alternativa, para exibir os contribuidores durante um determinado período, clique no período desejado e arraste-o até que seja selecionado. Os gráficos de contribuidores somam o número de commit semanalmente para cada domingo, de modo que seu período de tempo deve incluir um domingo. ![Intervalo de tempo selecionado no gráfico de contribuidores](/assets/images/help/graphs/repo_contributors_click_drag_graph.png)

## Solucionar problemas com contribuidores

Se você não aparecer no gráfico de contribuidores de um repositório, pode ser que:
- Você não seja um dos 100 principais contribuidores.
- Não tenha sido feito merge dos seus commits no branch padrão.
- O endereço de e-mail que você usou para criar os commits não está conectado à sua conta em {% data variables.product.product_name %}.

{% tip %}

**Dica:** para listar todos os contribuidores de commit em um repositório, consulte "[Repositórios](/rest/reference/repos#list-contributors)".

{% endtip %}

Se todos os seus commits no repositório estiverem em branches não padrão, você não estará no gráfico de contribuidores. Por exemplo, os commits no branch `gh-pages` só serão incluídos no gráfico se `gh-pages` for o branch padrão do repositório. Para que seja feito merge dos seus commits no branch padrão, você precisa criar uma pull request. Para obter mais informações, consulte "[Sobre pull requests](/articles/about-pull-requests)".

Se o endereço de e-mail que você usou para criar os commits não estiver conectado à sua conta em {% data variables.product.product_name %}, seus commits não serão vinculados à sua conta e você não aparecerá no gráfico de contribuidores. Para obter mais informações, consulte "[Definir o seu endereço de e-mail de commit](/articles/setting-your-commit-email-address){% ifversion not ghae %}" e "[Adicionar um endereço de e-mail à sua conta de {% data variables.product.product_name %} ](/articles/adding-an-email-address-to-your-github-account){% endif %}."
