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
  github-ae: '*'
---

### Sobre contribuidores

You can view the top 100 contributors to a repository{% if enterpriseServerVersions contains currentVersion or currentVersion == "github-ae@latest" %}, including commit co-authors,{% endif %} in the contributors graph. Commits de merge e commits vazios não são contabilizados como contribuições para este gráfico.

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
- The email address you used to author the commits isn't connected to your account on {% data variables.product.product_name %}.

{% tip %}

**Dica:** para listar todos os contribuidores de commit em um repositório, consulte "[Repositórios](/v3/repos/#list-contributors)".

{% endtip %}

Se todos os seus commits no repositório estiverem em branches não padrão, você não estará no gráfico de contribuidores. Por exemplo, os commits no branch `gh-pages` só serão incluídos no gráfico se `gh-pages` for o branch padrão do repositório. Para que seja feito merge dos seus commits no branch padrão, você precisa criar uma pull request. Para obter mais informações, consulte "[Sobre pull requests](/articles/about-pull-requests)".

If the email address you used to author the commits is not connected to your account on {% data variables.product.product_name %}, your commits won't be linked to your account, and you won't appear in the contributors graph. For more information, see "[Setting your commit email address](/articles/setting-your-commit-email-address){% if currentVersion != "github-ae@latest" %}" and "[Adding an email address to your {% data variables.product.product_name %} account](/articles/adding-an-email-address-to-your-github-account){% endif %}."
