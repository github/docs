---
title: プルリクエストにコミットのリベースを設定する
intro: 'リポジトリで、{% data variables.product.product_location %} でのすべてのプルリクエストマージについて、コミットのリベースを強制、許可、または無効にできます。'
redirect_from:
  - /articles/configuring-commit-rebasing-for-pull-requests
  - /github/administering-a-repository/configuring-commit-rebasing-for-pull-requests
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
  - Repositories
---

{% data reusables.pull_requests.configure_pull_request_merges_intro %}

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
3. [Merge button] の下で [**Allow rebase merging**] を選択します。 これにより、コントリビューターが個々のコミットをベースブランチにリベースすることでプルリクエストをマージできるようになります。 ここで他のマージ方法も選択した場合、コラボレーターはプルリクエストをマージする時にコミットのマージ方法を選択できます。 {% data reusables.repositories.squash-and-rebase-linear-commit-hisitory %} ![プルリクエストのリベースコミット](/assets/images/help/repository/pr-merge-rebase.png)
