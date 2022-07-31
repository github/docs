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
3. Em {% ifversion fpt or ghec or ghes > 3.4 or ghae-issue-6069 %}"Pull Requests"{% else %}"Botão de merge"{% endif %}, opcionalmente, selecione **Permitir commits de merge**. Isso permite que os contribuidores façam merge de uma pull request com um histórico completo de commits. ![allow_standard_merge_commits](/assets/images/help/repository/pr-merge-full-commits.png)
4. Em {% ifversion fpt or ghec or ghes > 3.4 or ghae-issue-6069 %}"Pull Requests"{% else %}"Botão de merge"{% endif %}, selecione **Permitir merge de combinação por squash**. Isso permite que os contribuidores façam merge de uma pull request combinando por squash todos os commits em um único commit. A mensagem da combinação por squash automaticamente é o título do pull request se ela contiver mais de um commit. {% ifversion fpt or ghec or ghes > 3.5 or ghae-issue-7042 %}Se você quiser usar o título do pull request como a mensagem de mesclagem padrão para todos os commits combinados por squash, independentemente do número de commits no pull request, selecione **Definir como padrão o título de PR para commits de merge de combinação por squash**. ![Pull request squashed commits](/assets/images/help/repository/pr-merge-squash.png){% else %}
![Pull request squashed commits](/assets/images/enterprise/3.5/repository/pr-merge-squash.png){% endif %}

Se você selecionar mais de um método de merge, os colaboradores poderão escolher qual o tipo de commit de merge usar ao fazer o merge de um pull request. {% data reusables.repositories.squash-and-rebase-linear-commit-hisitory %}

## Leia mais

- "[Sobre merges de pull request](/pull-requests/collaborating-with-pull-requests/incorporating-changes-from-a-pull-request/about-pull-request-merges)"
- "[Fazer merge de uma pull request](/pull-requests/collaborating-with-pull-requests/incorporating-changes-from-a-pull-request/merging-a-pull-request)"
