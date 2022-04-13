---
title: Criar e excluir branches no repositório
intro: 'Você pode criar ou excluir branches diretamente no {% data variables.product.product_name %}.'
redirect_from:
  - /github/collaborating-with-issues-and-pull-requests/proposing-changes-to-your-work-with-pull-requests/creating-and-deleting-branches-within-your-repository
  - /articles/deleting-branches-in-a-pull-request
  - /articles/creating-and-deleting-branches-within-your-repository
  - /github/collaborating-with-issues-and-pull-requests/creating-and-deleting-branches-within-your-repository
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Pull requests
shortTitle: Criar & excluir branches
---

## Criar um branch

{% data reusables.repositories.navigate-to-repo %}

1. Opcionalmente, se quiser criar um novo branch a partir de um branch diferente do branch padrão para o repositório, clique em {% octicon "git-branch" aria-label="The branch icon" %} **<em>NUMBER</em> branches** e escolha outro branch: ![Link de branches numa página de visão geral](/assets/images/help/branches/branches-link.png)
1. Clique no menu seletor de branch. ![menu seletor de branch](/assets/images/help/branch/branch-selection-dropdown.png)
1. Digite um nome exclusivo para o novo branch e selecione **Create branch** (Criar branch). ![caixa de texto de criação de branch](/assets/images/help/branch/branch-creation-text-box.png)

## Excluir um branch

{% data reusables.pull_requests.automatically-delete-branches %}

{% note %}

**Observação:** Se o branch que você deseja excluir for o branch padrão do repositório, você deverá escolher um novo branch padrão antes de excluir o branch. For more information, see "[Setting the default branch](/github/administering-a-repository/setting-the-default-branch)."

{% endnote %}

Se o branch que você deseja excluir estiver associado a um pull request aberto, você deverá fazer o merge ou fechar o pull request antes de excluir o branch. Para obter mais informações, consulte "[Fazer merge de um pull request](/pull-requests/collaborating-with-pull-requests/incorporating-changes-from-a-pull-request/merging-a-pull-request)" ou "[Fechar um pull request](/pull-requests/collaborating-with-pull-requests/incorporating-changes-from-a-pull-request/closing-a-pull-request)".

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.navigate-to-branches %}
1. Role até o branch que deseja excluir e clique em {% octicon "trash" aria-label="The trash icon to delete the branch" %}. ![delete the branch](/assets/images/help/branches/branches-delete.png) {% ifversion fpt or ghes > 3.5 or ghae-issue-6763 or ghec %}
1. If you try to delete a branch that is associated with at least one open pull request, you must confirm that you intend to close the pull request(s).

   ![Confirm deleting a branch](/assets/images/help/branches/confirm-deleting-branch.png){% endif %}

{% data reusables.pull_requests.retargeted-on-branch-deletion %}
Para obter mais informações, consulte "[Sobre branches](/github/collaborating-with-issues-and-pull-requests/about-branches#working-with-branches)".

## Leia mais

- "[Sobre branches](/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/about-branches)"
- "[Exibir branches no repositório](/github/administering-a-repository/viewing-branches-in-your-repository)"
- "[Excluindo e restaurando branches em uma pull request](/github/administering-a-repository/deleting-and-restoring-branches-in-a-pull-request)"
