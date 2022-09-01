---
title: Configurar o merge do commit para pull requests
intro: 'É possível aplicar, permitir ou desabilitar o merge com um commit de merge para todos os merge de pull request em {% data variables.product.product_location %} no seu repositório.'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Repositories
shortTitle: Configurar o merge de commit
---

{% data reusables.pull_requests.configure_pull_request_merges_intro %}

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
1. Em {% ifversion fpt or ghec or ghes > 3.5 or ghae-issue-6069 %}"Pull Requests"{% else %}"Botão de merge"{% endif %}, selecione **Permitir commits de merge**. Isso permite que os contribuidores façam merge de um pull request com um histórico completo dos commits.{% ifversion default-merge-squash-commit-message %} ![Screenshot of Pull Request settings with allow merge commits checkbox emphasized](/assets/images/help/repository/allow-merge-commits.png){% endif %}{% ifversion ghes = 3.6 %} ![Screenshot of Pull Request settings with allow merge commits checkbox emphasized](/assets/images/help/repository/allow-merge-commits-no-dropdown.png){% endif %}
{% ifversion ghes < 3.6  %}
 ![allow_standard_merge_commits](/assets/images/help/repository/pr-merge-full-commits.png){% endif %}
{% ifversion default-merge-squash-commit-message %}
1. Opcionalmente, em **Permitir commits de merge**, use o menu suspenso para escolher o formato da mensagem de commit apresentada aos contribuidores quando realizar o merge. A mensagem padrão inclui o número e título do pull request. Por exemplo, `Merge pull request #123 from patch-1`. Você também pode escolher usar apenas o título do pull request ou o título e a descrição do pull request. ![Captura de tela do menu suspenso da mensagem do commit de combinação por squash padrão](/assets/images/help/repository/default-commit-message-dropdown.png)
{% endif %}

Se você selecionar mais de um método de merge, os colaboradores poderão escolher qual o tipo de commit de merge usar ao fazer o merge de um pull request. {% data reusables.repositories.squash-and-rebase-linear-commit-history %}

## Leia mais

- "[Sobre merges de pull request](/pull-requests/collaborating-with-pull-requests/incorporating-changes-from-a-pull-request/about-pull-request-merges)"
- "[Fazer merge de uma pull request](/pull-requests/collaborating-with-pull-requests/incorporating-changes-from-a-pull-request/merging-a-pull-request)"
