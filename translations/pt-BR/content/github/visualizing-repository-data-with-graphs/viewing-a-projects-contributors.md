---
title: Exibir contribuidores do projeto
intro: 'Você pode ver quem contribuiu com commits em um repositório{% if currentVersion == "free-pro-team@latest" %} e suas dependências{% endif %}.'
redirect_from:
  - /articles/i-don-t-see-myself-in-the-contributions-graph/
  - /articles/viewing-contribution-activity-in-a-repository/
  - /articles/viewing-a-projects-contributors
product: '{% data reusables.gated-features.repository-insights %}'
versions:
  free-pro-team: '*'
  enterprise-server: '*'
---

### Sobre contribuidores

Você pode visualizar os 100 principais contribuidores de um repositório{% if currentVersion != "free-pro-team@latest" %}, incluindo coautores,{% endif %} no gráfico de contribuidores. Commits de merge e commits vazios não são contabilizados como contribuições para este gráfico.

{% if currentVersion == "free-pro-team@latest" %}
Você também pode ver uma lista de pessoas que contribuíram para as dependências Python do projeto. Para acessar essa lista de contribuidores da comunidade, visite `https://github.com/REPO-OWNER/REPO-NAME/community_contributors`.
{% endif %}

### Acessar o gráfico de contribuidores

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.accessing-repository-graphs %}
3. Na barra lateral esquerda, clique em **Contributors** (Contribuiddores). ![Aba de colaboradores](/assets/images/help/graphs/contributors_tab.png)
4. Como alternativa, para exibir os contribuidores durante um determinado período, clique no período desejado e arraste-o até que seja selecionado. ![Intervalo de tempo selecionado no gráfico de contribuidores](/assets/images/help/graphs/repo_contributors_click_drag_graph.png)

### Solucionar problemas com contribuidores

Se você não aparecer no gráfico de contribuidores de um repositório, pode ser que:
- Você não seja um dos 100 principais contribuidores.
- Não tenha sido feito merge dos seus commits no branch padrão.
- O endereço de e-mail que você usou para criar os commits não foi adicionado à sua conta do {% data variables.product.product_name %}.

{% tip %}

**Dica:** para listar todos os contribuidores de commit em um repositório, consulte "[Repositórios](/v3/repos/#list-contributors)".

{% endtip %}

Se todos os seus commits no repositório estiverem em branches não padrão, você não estará no gráfico de contribuidores. Por exemplo, os commits no branch `gh-pages` só serão incluídos no gráfico se `gh-pages` for o branch padrão do repositório. Para que seja feito merge dos seus commits no branch padrão, você precisa criar uma pull request. Para obter mais informações, consulte "[Sobre pull requests](/articles/about-pull-requests)".

Se o endereço de e-mail usado para criar os commits não tiver sido adicionado à sua conta do {% data variables.product.product_name %}, seus commits não serão vinculados à conta e você não aparecerá no gráfico de contribuidores. Para obter mais informações, consulte "[Configurar endereço de e-mail do commit](/articles/setting-your-commit-email-address)" e "[Adicionar endereço de e-mail à sua conta do {% data variables.product.product_name %}](/articles/adding-an-email-address-to-your-github-account)".
