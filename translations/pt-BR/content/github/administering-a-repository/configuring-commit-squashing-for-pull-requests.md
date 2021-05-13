---
title: Configurar a combinação de commits por squash em pull requests
intro: 'Você pode aplicar, permitir ou desabilitar a combinação por squash do commit para todos os merges da pull request no {% data variables.product.product_location %} do seu repositório.'
redirect_from:
  - /articles/configuring-commit-squashing-for-pull-requests
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
  - Repositories
---

{% data reusables.pull_requests.configure_pull_request_merges_intro %}

{% data reusables.pull_requests.default-commit-message-squash-merge %}

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
3. Abaixo do "Merge button" (botão Fazer merge), se desejar, selecione **Allow merge commits** (Permitir commits de merge). Isso permite que os contribuidores façam merge de uma pull request com um histórico completo de commits. ![allow_standard_merge_commits](/assets/images/help/repository/pr-merge-full-commits.png)
4. Abaixo do "Merge button" (botão Fazer merge), selecione **Allow squash merging** (Permitir merge de combinação por squash). Isso permite que os contribuidores façam merge de uma pull request combinando por squash todos os commits em um único commit. Se você selecionar outro método além de **Allow squash merging** (Permitir merge de combinação por squash), os colaboradores poderão escolher o tipo de commit do merge ao fazer merge de uma pull request. {% data reusables.repositories.squash-and-rebase-linear-commit-hisitory %} ![Commits de combinação por squash da pull request](/assets/images/help/repository/pr-merge-squash.png)

### Leia mais

- "[Sobre merges de pull request](/articles/about-pull-request-merges)"
- "[Fazer merge de uma pull request](/articles/merging-a-pull-request)"
