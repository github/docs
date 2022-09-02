---
title: プルリクエストにコミットのリベースを設定する
intro: 'リポジトリで、{% data variables.product.product_location %} でのすべてのプルリクエストマージについて、コミットのリベースを強制、許可、または無効にできます。'
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
shortTitle: Configure commit rebasing
---

{% data reusables.pull_requests.configure_pull_request_merges_intro %}

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
3. Under {% ifversion fpt or ghec or ghes > 3.5 or ghae-issue-6069 %}"Pull Requests"{% else %}"Merge button"{% endif %}, select **Allow rebase merging**. これにより、コントリビューターが個々のコミットをベースブランチにリベースすることでプルリクエストをマージできるようになります。
{% ifversion default-merge-squash-commit-message %}
 ![Screenshot of Pull Request settings with allow rebase merging checkbox emphasized](/assets/images/help/repository/allow-rebase-merging.png){% endif %}{% ifversion ghes = 3.6  %} ![Screenshot of Pull Request settings with allow rebase merging checkbox emphasized](/assets/images/help/repository/allow-rebase-merging-no-dropdown.png){% endif %}
 {% ifversion ghes < 3.6  %}
 ![プルリクエストのリベースコミット](/assets/images/help/repository/pr-merge-rebase.png){% endif %}

ここで他のマージ方法も選択した場合、コラボレーターはプルリクエストをマージする時にコミットのマージ方法を選択できます。 {% data reusables.repositories.squash-and-rebase-linear-commit-history %}
