---
title: Alterar o branch-padrão
intro: 'Se você tiver mais de um branch no seu repositório, você poderá configurar qualquer branch como o branch-padrão.'
permissions: People with admin permissions to a repository can change the default branch for the repository.
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
redirect_from:
  - /github/administering-a-repository/setting-the-default-branch
  - /articles/setting-the-default-branch
  - /github/administering-a-repository/changing-the-default-branch
  - /github/administering-a-repository/managing-branches-in-your-repository/changing-the-default-branch
topics:
  - Repositories
shortTitle: Alterar o branch padrão
---

## Sobre mudar o branch-padrão

Você pode escolher o branch-padrão para um repositório. O branch-padrão é o branch de base para pull requests e commits de código. Para obter mais informações sobre o branch padrão, consulte "[Sobre branches](/github/collaborating-with-issues-and-pull-requests/about-branches#about-the-default-branch)".

{% ifversion not ghae %}
{% note %}

**Observação**: Se você usar a ponte Git-Subversion, a alteração do branch-padrão afetará o conteúdo do seu `trunk` e o `HEAD` que você visualiza ao listar referências para o repositório remoto. Para obter mais informações, consulte "[Suporte para clientes do Subversion](/github/importing-your-projects-to-github/support-for-subversion-clients)" e [git-ls-remote](https://git-scm.com/docs/git-ls-remote.html) na documentação do Git.

{% endnote %}
{% endif %}

{% ifversion fpt or ghes > 3.0 or ghae-next or ghec %}

Você também pode renomear o branch padrão. Para obter mais informações, consulte "[Renomear um branch](/github/administering-a-repository/renaming-a-branch).

{% endif %}

{% data reusables.branches.set-default-branch %}

## Pré-requisitos

Para alterar o branch-padrão, seu repositório deve ter mais de um branch. Para obter mais informações, consulte "[Criar e excluir branches em seu repositório](/github/collaborating-with-issues-and-pull-requests/creating-and-deleting-branches-within-your-repository#creating-a-branch)".

## Alterar o branch-padrão

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
{% data reusables.repositories.repository-branches %}
1. Em "branch-padrão", à direita do nome do branch-padrão, clique em {% octicon "arrow-switch" aria-label="The switch icon with two arrows" %}. ![Alterne o ícone com duas setas para a direita do nome do branch-padrão atual](/assets/images/help/repository/repository-options-defaultbranch-change.png)
1. Use o menu suspenso e clique em um nome de branch. ![Menu suspenso para escolher o novo branch-padrão](/assets/images/help/repository/repository-options-defaultbranch-drop-down.png)
1. Clique em **Atualizar**. ![Botão "Atualizar" após escolher um novo branch-padrão](/assets/images/help/repository/repository-options-defaultbranch-update.png)
1. Leia o alerta e clique em **Eu entendo. Atualize o branch-padrão.** ![Botão "Eu entendo, atualize o branch padrão." para executar a atualização](/assets/images/help/repository/repository-options-defaultbranch-i-understand.png)

