---
title: Criar e excluir branches no repositório
intro: 'Você pode criar ou excluir branches diretamente no {% data variables.product.product_name %}.'
redirect_from:
  - /articles/deleting-branches-in-a-pull-request/
  - /articles/creating-and-deleting-branches-within-your-repository
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
---

### Criar um branch

{% data reusables.repositories.navigate-to-repo %}

1. Opcionalmente, se quiser criar um novo branch a partir de um branch diferente do branch padrão para o repositório, clique em {% octicon "git-branch" aria-label="The branch icon" %} **<em>NUMBER</em> branches** e escolha outro branch: ![Link de branches numa página de visão geral](/assets/images/help/branches/branches-link.png)
1. Clique no menu seletor de branch. ![menu seletor de branch](/assets/images/help/branch/branch-selection-dropdown.png)
1. Digite um nome exclusivo para o novo branch e selecione **Create branch** (Criar branch). ![caixa de texto de criação de branch](/assets/images/help/branch/branch-creation-text-box.png)

### Excluir um branch

{% data reusables.pull_requests.automatically-delete-branches %}

Se o branch que você deseja excluir for o branch-padrão do repositório, você deverá escolher um novo branch-padrão antes de excluir o branch. For more information, see "[Setting the default branch](/github/administering-a-repository/setting-the-default-branch)."

Se o branch que você deseja excluir estiver associado a um pull request aberto, você deverá fazer o merge ou fechar o pull request antes de excluir o branch. Para obter mais informações, consulte "[Fazer merge de um pull request](/github/collaborating-with-issues-and-pull-requests/merging-a-pull-request)" ou "[Fechar um pull request](/github/collaborating-with-issues-and-pull-requests/closing-a-pull-request)".

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.navigate-to-branches %}
1. Role até o branch que deseja excluir e clique em {% octicon "trashcan" aria-label="The trashcan icon to delete the branch" %}. ![excluir o branch](/assets/images/help/branches/branches-delete.png)

{% if currentVersion == "free-pro-team@latest" or currentVersion == "github-ae@latest" or currentVersion ver_gt "enterprise-server@2.21" %}
{% data reusables.pull_requests.retargeted-on-branch-deletion %}
{% endif %}
Para obter mais informações, consulte "[Sobre branches](/github/collaborating-with-issues-and-pull-requests/about-branches#working-with-branches)".

### Leia mais

- "[Sobre branches](/github/collaborating-with-issues-and-pull-requests/about-branches)"
- "[Exibir branches no repositório](/github/administering-a-repository/viewing-branches-in-your-repository)"
- "[Excluindo e restaurando branches em uma pull request](/github/administering-a-repository/deleting-and-restoring-branches-in-a-pull-request)"
