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
1. Em {% ifversion fpt or ghec or ghes > 3.5 or ghae-issue-6069 %}"Pull Requests"{% else %}"Botão de merge"{% endif %}, selecione **Permitir merge de combinação por squash**. Isso permite que os contribuidores façam merge de uma pull request combinando por squash todos os commits em um único commit. A mensagem de commit padrão apresentada aos contribuidores ao fazer o merge é o título e a mensagem do commit se o pull request contiver apenas 1 commit, ou o título do pull request e lista de commits se o pull request contiver 2 ou mais commits. {% ifversion ghes = 3.6 %} Para usar sempre o título do pull request, independentemente do número de commits no pull request, selecione **Título padrão do PR para commits de merge de combinação por squash**.{% endif %}{% ifversion default-merge-squash-commit-message %} ![Pull request squashed commits](/assets/images/help/repository/allow-squash-merging.png){% endif %}{% ifversion ghes = 3.6 %} ![Screenshot of Pull Request settings with allow merge commits checkbox emphasized](/assets/images/help/repository/allow-squash-merging-no-dropdown.png){% endif %}
{% ifversion ghes < 3.6  %}
 ![Commits de combinação por squash da pull request](/assets/images/enterprise/3.5/repository/pr-merge-squash.png){% endif %}
{% ifversion default-merge-squash-commit-message %}
1. Opcionalmente, em **Permitir o merge de combinação por squash**, use o menu suspenso para escolher o formato da mensagem do commit da combinação por squash padrão apresentada para os contribuidores ao realizar o merge. A mensagem padrão usa o título e a mensagem de commit se o pull request contiver apenas 1 commit, ou o título do pull request e lista de commits se o pull request contiver 2 ou mais commits. Você também pode opter por usar apenas o título do pull request, o título e os detalhes de commit do pull request ou o título e descrição do pull request. ![Captura de tela do menu suspenso da mensagem de combinação por squash padrão](/assets/images/help/repository/default-squash-message-dropdown.png)
{% endif %}

Se você selecionar mais de um método de merge, os colaboradores poderão escolher qual o tipo de commit de merge usar ao fazer o merge de um pull request. {% data reusables.repositories.squash-and-rebase-linear-commit-history %}

## Leia mais

- "[Sobre merges de pull request](/pull-requests/collaborating-with-pull-requests/incorporating-changes-from-a-pull-request/about-pull-request-merges)"
- "[Fazer merge de uma pull request](/pull-requests/collaborating-with-pull-requests/incorporating-changes-from-a-pull-request/merging-a-pull-request)"
