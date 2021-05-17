---
title: Alterar o branch-padrão
intro: 'Se você tiver mais de um branch no seu repositório, você poderá configurar qualquer branch como o branch-padrão.'
permissions: People with admin permissions to a repository can change the default branch for the repository.
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
redirect_from:
  - /github/administering-a-repository/setting-the-default-branch
  - /articles/setting-the-default-branch
topics:
  - Repositories
---

### Sobre mudar o branch-padrão

Você pode escolher o branch-padrão para um repositório. O branch-padrão é o branch de base para pull requests e commits de código. Para obter mais informações sobre o branch padrão, consulte "[Sobre branches](/github/collaborating-with-issues-and-pull-requests/about-branches#about-the-default-branch)".

{% if currentVersion != "github-ae@latest" %}
{% note %}

**Observação**: Se você usar a ponte Git-Subversion, a alteração do branch-padrão afetará o conteúdo do seu `trunk` e o `HEAD` que você visualiza ao listar referências para o repositório remoto. Para obter mais informações, consulte "[Suporte para clientes do Subversion](/github/importing-your-projects-to-github/support-for-subversion-clients)" e [git-ls-remote](https://git-scm.com/docs/git-ls-remote.html) na documentação do Git.

{% endnote %}
{% endif %}

{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@3.0" %}

Você também pode renomear o branch padrão. Para obter mais informações, consulte "[Renomear um branch](/github/administering-a-repository/renaming-a-branch).

{% endif %}

{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.22" %}

{% data reusables.branches.set-default-branch %}

{% endif %}

### Pré-requisitos

Para alterar o branch-padrão, seu repositório deve ter mais de um branch. Para obter mais informações, consulte "[Criar e excluir branches em seu repositório](/github/collaborating-with-issues-and-pull-requests/creating-and-deleting-branches-within-your-repository#creating-a-branch)".

### Alterar o branch-padrão

{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.22" or currentVersion == "github-ae@latest" %}

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
{% data reusables.repositories.repository-branches %}
1. Em "branch-padrão", à direita do nome do branch-padrão, clique em {% octicon "arrow-switch" aria-label="The switch icon with two arrows" %}. ![Alterne o ícone com duas setas para a direita do nome do branch-padrão atual](/assets/images/help/repository/repository-options-defaultbranch-change.png)
1. Use o menu suspenso e clique em um nome de branch. ![Menu suspenso para escolher o novo branch-padrão](/assets/images/help/repository/repository-options-defaultbranch-drop-down.png)
1. Clique em **Atualizar**. ![Botão "Atualizar" após escolher um novo branch-padrão](/assets/images/help/repository/repository-options-defaultbranch-update.png)
1. Leia o alerta e clique em **Eu entendo. Atualize o branch-padrão.** ![Botão "Atualizar" após escolher um novo branch-padrão](/assets/images/help/repository/repository-options-defaultbranch-i-understand.png)

{% else %}

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
{% data reusables.repositories.repository-branches %}
1. No menu suspenso do branch-padrão, selecione o novo branch-padrão. ![Seletor suspenso de branch padrão](/assets/images/help/repository/repository-options-defaultbranch.png)
1. Clique em **Atualizar**.

{% endif %}
