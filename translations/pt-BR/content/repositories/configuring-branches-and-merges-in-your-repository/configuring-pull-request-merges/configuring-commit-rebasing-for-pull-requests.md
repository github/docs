---
title: Configurar rebase do commit para pull requests
intro: 'Você pode aplicar, permitir ou desabilitar o rebase do commit para todos os merges da pull request no {% data variables.product.product_location %} do seu repositório.'
redirect_from:
  - /articles/configuring-commit-rebasing-for-pull-requests
  - /github/administering-a-repository/configuring-commit-rebasing-for-pull-requests
  - /github/administering-a-repository/configuring-pull-request-merges/configuring-commit-rebasing-for-pull-requests
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Repositories
shortTitle: Configurar rebase de commit
---

{% data reusables.pull_requests.configure_pull_request_merges_intro %}

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
3. Em {% ifversion fpt or ghec or ghes > 3.4 or ghae-issue-6069 %}"Pull Requests"{% else %}"Botão de merge"{% endif %}, selecione **Permitir merge de rebase**. Isso permite que os contribuidores façam merge de uma pull request fazendo rebase dos respectivos commits individuais no branch base. Se você também selecionar outro método de merge, os colaboradores poderão escolher o tipo de commit do merge ao fazer merge de uma pull request. {% data reusables.repositories.squash-and-rebase-linear-commit-hisitory %} ![Commits com rebase da pull request](/assets/images/help/repository/pr-merge-rebase.png)
