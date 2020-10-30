---
title: Filtrar problemas e pull requests por marco
intro: 'É possível filtrar problemas e pull requests com base no marco a que estão associados. Após [associar um problema ou pull request a um marco](/articles/associating-milestones-with-issues-and-pull-requests), é possível encontrar itens com base em seus marcos. Você pode priorizar problemas e pull requests dentro dos marcos.'
redirect_from:
  - /articles/filtering-issues-and-pull-requests-by-milestone
versions:
  free-pro-team: '*'
  enterprise-server: '*'
---

{% tip %}

**Dicas:**

- Se preferir filtrar problemas e pull requests com a barra de pesquisa, use a sintaxe de pesquisa de marco. Para um marco denominado My Milestone (Meu Marco), a sintaxe de pesquisa deve ser: `milestone:"My Milestone"`.
- Para limpar a seleção de filtro, clique em **Clear current search query, filters, and sorts** (Limpar consulta atual, filtros e ordenar).
-  Você também pode filtrar problemas ou pull requests usando o {% data variables.product.prodname_cli %}. For more information, see "[`gh issue list`](https://cli.github.com/manual/gh_issue_list)" or "[`gh pr list`](https://cli.github.com/manual/gh_pr_list)" in the {% data variables.product.prodname_cli %} documentation.

{% endtip %}

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-issue-pr %}
3. Selecione **Milestones** (Marcos) para visualizar uma lista de todos os marcos disponíveis para o repositório. ![Botão Milestones (Marcos)](/assets/images/help/issues/issues_milestone_button.png)
4. Selecione o marco desejado na lista. Na página milestone (marcos), é possível visualizar as informações relevantes, inclusive todos os problemas e pull requests associados a ele. Para obter mais informações, consulte "[Sobre marcos](/articles/about-milestones)".

### Leia mais

- "[Filtrar problemas e pull requests](/articles/filtering-issues-and-pull-requests)"
- "[Ordenar problemas e pull requests](/articles/sorting-issues-and-pull-requests)"
- "[Usar a pesquisa para filtrar problemas e pull requests](/articles/using-search-to-filter-issues-and-pull-requests)"
- "[Compartilhar filtros](/articles/sharing-filters)"
- "[Filtrar cartões em um quadro de projeto](/articles/filtering-cards-on-a-project-board)"
