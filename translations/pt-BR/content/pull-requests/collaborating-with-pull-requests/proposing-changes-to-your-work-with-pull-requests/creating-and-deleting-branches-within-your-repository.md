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
You can create a branch in different ways on {% data variables.product.product_name %}.

{% note %}

**Note:** You can only create a branch in a repository to which you have push access.

{% endnote %}

### Creating a branch via the branches overview
{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.navigate-to-branches %}
1. Click **New branch**. ![Screenshot of branches overview page with new branch button emphasized](/assets/images/help/branches/new-branch-button.png)
2. In the dialog box, enter the branch name and optionally change the branch source.  
   If the repository is a fork, you also have the option to select the upstream repository as the branch source. ![Screenshot of branch creation modal for a fork with branch source emphasized](/assets/images/help/branches/branch-creation-popup-branch-source.png)
3. Click **Create branch**. ![Screenshot of branch creation modal with create branch button emphasized](/assets/images/help/branches/branch-creation-popup-button.png)

### Creating a branch using the branch dropdown
{% data reusables.repositories.navigate-to-repo %}
1. Optionally, if you want to create the new branch from a branch other than the default branch of the repository, click {% octicon "git-branch" aria-label="The branch icon" %} **Branches** then choose another branch. ![Link de branches numa página de visão geral](/assets/images/help/branches/branches-overview-link.png)
1. Clique no menu seletor de branch. ![menu seletor de branch](/assets/images/help/branch/branch-selection-dropdown.png)
1. Digite um nome exclusivo para o novo branch e selecione **Create branch** (Criar branch). ![caixa de texto de criação de branch](/assets/images/help/branch/branch-creation-text-box.png)
{% ifversion fpt or ghec or ghes > 3.4 %}
### Criando um branch para um problema
Você pode criar um branch para trabalhar em um problema diretamente da página de problemas e começar imediatamente. For more information, see "[Creating a branch to work on an issue](/issues/tracking-your-work-with-issues/creating-a-branch-for-an-issue)".
{% endif %}
## Excluir um branch

{% data reusables.pull_requests.automatically-delete-branches %}

{% note %}

**Observação:** Se o branch que você deseja excluir for o branch padrão do repositório, você deverá escolher um novo branch padrão antes de excluir o branch. For more information, see "[Setting the default branch](/github/administering-a-repository/setting-the-default-branch)."

{% endnote %}

Se o branch que você deseja excluir estiver associado a um pull request aberto, você deverá fazer o merge ou fechar o pull request antes de excluir o branch. Para obter mais informações, consulte "[Fazer merge de um pull request](/pull-requests/collaborating-with-pull-requests/incorporating-changes-from-a-pull-request/merging-a-pull-request)" ou "[Fechar um pull request](/pull-requests/collaborating-with-pull-requests/incorporating-changes-from-a-pull-request/closing-a-pull-request)".

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.navigate-to-branches %}
1. Role até o branch que deseja excluir e clique em {% octicon "trash" aria-label="The trash icon to delete the branch" %}. ![delete the branch](/assets/images/help/branches/branches-delete.png) {% ifversion fpt or ghes > 3.5 or ghae-issue-6763 or ghec %}
1. Se você tentar excluir um branch associado a pelo menos um pull request aberto, você deverá confirmar que pretende fechar o(s) pull request(s).

   ![Confirme a exclusão de um branch](/assets/images/help/branches/confirm-deleting-branch.png){% endif %}

{% data reusables.pull_requests.retargeted-on-branch-deletion %}
Para obter mais informações, consulte "[Sobre branches](/github/collaborating-with-issues-and-pull-requests/about-branches#working-with-branches)".

## Leia mais

- "[Sobre branches](/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/about-branches)"
- "[Exibir branches no repositório](/github/administering-a-repository/viewing-branches-in-your-repository)"
- "[Excluindo e restaurando branches em uma pull request](/github/administering-a-repository/deleting-and-restoring-branches-in-a-pull-request)"
