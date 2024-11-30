---
title: Configuring commit rebasing for pull requests
intro: 'You can enforce, allow, or disable commit rebasing for all pull request merges on {% data variables.location.product_location %} in your repository.'
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
3. Under {% ifversion fpt or ghec or ghes > 3.5 or ghae > 3.4 %}"Pull Requests"{% else %}"Merge button"{% endif %}, select **Allow rebase merging**. This allows contributors to merge a pull request by rebasing their individual commits onto the base branch. 
{% ifversion default-merge-squash-commit-message %}
 ![Screenshot of Pull Request settings with allow rebase merging checkbox emphasized](/assets/images/help/repository/allow-rebase-merging.png){% endif %}{% ifversion ghes = 3.6  %}
 ![Screenshot of Pull Request settings with allow rebase merging checkbox emphasized](/assets/images/help/repository/allow-rebase-merging-no-dropdown.png){% endif %}
 {% ifversion ghes < 3.6  %}
 ![Pull request rebased commits](/assets/images/help/repository/pr-merge-rebase.png){% endif %}

If you also select another merge method, collaborators will be able to choose the type of merge commit when merging a pull request. {% data reusables.repositories.squash-and-rebase-linear-commit-history %}
