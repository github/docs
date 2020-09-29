---
title: Configurar rebase do commit para pull requests
intro: 'Você pode aplicar, permitir ou desabilitar o rebase do commit para todos os merges da pull request no {% data variables.product.product_location %} do seu repositório.'
redirect_from:
  - /articles/configuring-commit-rebasing-for-pull-requests
versions:
  free-pro-team: '*'
  enterprise-server: '*'
---

{% data reusables.pull_requests.configure_pull_request_merges_intro %}

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
3. Abaixo do "Merge button" (botão Fazer merge), selecione **Allow rebase merging** (Permitir merge do rebase). Isso permite que os contribuidores façam merge de uma pull request fazendo rebase dos respectivos commits individuais no branch base. Se você também selecionar outro método de merge, os colaboradores poderão escolher o tipo de commit do merge ao fazer merge de uma pull request. {% data reusables.repositories.squash-and-rebase-linear-commit-hisitory %} ![Commits com rebase da pull request](/assets/images/help/repository/pr-merge-rebase.png)
