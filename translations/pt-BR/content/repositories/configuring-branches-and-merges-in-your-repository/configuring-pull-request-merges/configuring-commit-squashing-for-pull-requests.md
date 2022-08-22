---
title: Configurar a combinação de commits por squash em pull requests
intro: 'Você pode aplicar, permitir ou desabilitar a combinação por squash do commit para todos os merges da pull request no {% data variables.product.product_location %} do seu repositório.'
redirect_from:
  - /articles/configuring-commit-squashing-for-pull-requests
  - /github/administering-a-repository/configuring-commit-squashing-for-pull-requests
  - /github/administering-a-repository/configuring-pull-request-merges/configuring-commit-squashing-for-pull-requests
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Repositories
shortTitle: Configurar combinação por squash de commit
---

{% data reusables.pull_requests.configure_pull_request_merges_intro %}

{% data reusables.pull_requests.default-commit-message-squash-merge %}

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
1. Em {% ifversion fpt or ghec or ghes > 3.5 or ghae-issue-6069 %}"Pull Requests"{% else %}"Botão de merge"{% endif %}, selecione **Permitir merge de combinação por squash**. Isso permite que os contribuidores façam merge de uma pull request combinando por squash todos os commits em um único commit. The default commit message presented to contributors when merging is the commit title and message if the pull request contains only 1 commit, or the pull request title and list of commits if the pull request contains 2 or more commits. {% ifversion ghes = 3.6 %} To always use the title of the pull request regardless of the number of commits in the pull request select **Default to PR title for squash merge commits**.{% endif %}{% ifversion default-merge-squash-commit-message %} ![Pull request squashed commits](/assets/images/help/repository/allow-squash-merging.png){% endif %}{% ifversion ghes = 3.6 %} ![Screenshot of Pull Request settings with allow merge commits checkbox emphasized](/assets/images/help/repository/allow-squash-merging-no-dropdown.png){% endif %}
{% ifversion ghes < 3.6  %}
 ![Commits de combinação por squash da pull request](/assets/images/enterprise/3.5/repository/pr-merge-squash.png){% endif %}
{% ifversion default-merge-squash-commit-message %}
1. Optionally, under **Allow squash merging**, use the dropdown to choose the format of the default squash commit message presented to contributors when merging. The default message uses the commit title and message if the pull request contains only 1 commit, or the pull request title and list of commits if the pull request contains 2 or more commits. You can also choose to use just the pull request title, the pull request title and commit details, or the pull request title and description. ![Screenshot of emphasized default squash message dropdown](/assets/images/help/repository/default-squash-message-dropdown.png)
{% endif %}

Se você selecionar mais de um método de merge, os colaboradores poderão escolher qual o tipo de commit de merge usar ao fazer o merge de um pull request. {% data reusables.repositories.squash-and-rebase-linear-commit-history %}

## Leia mais

- "[Sobre merges de pull request](/pull-requests/collaborating-with-pull-requests/incorporating-changes-from-a-pull-request/about-pull-request-merges)"
- "[Fazer merge de uma pull request](/pull-requests/collaborating-with-pull-requests/incorporating-changes-from-a-pull-request/merging-a-pull-request)"
