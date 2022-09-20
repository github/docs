---
title: Alterar o branch-padrão
intro: 'Se você tiver mais de um branch no seu repositório, você poderá configurar qualquer branch como o branch-padrão.'
permissions: People with admin access for a repository can change the default branch for the repository.
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
shortTitle: Change the default branch
ms.openlocfilehash: e8f88499ab258e5855804288a4f811b38237df97
ms.sourcegitcommit: 5f9527483381cfb1e41f2322f67c80554750a47d
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/11/2022
ms.locfileid: '145127113'
---
## Sobre mudar o branch-padrão

Você pode escolher o branch-padrão para um repositório. O branch-padrão é o branch de base para pull requests e commits de código. Para obter mais informações sobre o branch padrão, confira "[Sobre os branches](/github/collaborating-with-issues-and-pull-requests/about-branches#about-the-default-branch)".

{% ifversion not ghae %} {% note %}

**Observação**: se você usar a ponte Git-Subversion, a alteração do branch padrão afetará o conteúdo do branch `trunk` e o `HEAD` que você verá ao listar as referências do repositório remoto. Para obter mais informações, confira "[Suporte para clientes do Subversion](/github/importing-your-projects-to-github/support-for-subversion-clients)" e [git-ls-remote](https://git-scm.com/docs/git-ls-remote.html) na documentação do Git.

{% endnote %} {% endif %}

Você também pode renomear o branch padrão. Para obter mais informações, confira "[Como renomear um branch](/github/administering-a-repository/renaming-a-branch)".

{% data reusables.branches.set-default-branch %}

## Pré-requisitos

Para alterar o branch-padrão, seu repositório deve ter mais de um branch. Para obter mais informações, confira "[Como criar e excluir branches no seu repositório](/github/collaborating-with-issues-and-pull-requests/creating-and-deleting-branches-within-your-repository#creating-a-branch)".

## Alterar o branch-padrão

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-settings %} {% data reusables.repositories.repository-branches %}
1. Em "branch-padrão", à direita do nome do branch-padrão, clique em {% octicon "arrow-switch" aria-label="The switch icon with two arrows" %}.
   ![Ícone de alternância com duas setas para a direita do nome do branch padrão atual](/assets/images/help/repository/repository-options-defaultbranch-change.png)
1. Use o menu suspenso e clique em um nome de branch.
   ![Menu suspenso usado para escolher o novo branch padrão](/assets/images/help/repository/repository-options-defaultbranch-drop-down.png)
1. Clique em **Atualizar**.
   ![Botão "Atualizar" após a escolha de um novo branch padrão](/assets/images/help/repository/repository-options-defaultbranch-update.png)
1. Leia o aviso e clique em **Entendi. Atualizar o branch padrão.** 
   ![Botão "Entendi. Atualizar o branch padrão." usado para fazer a atualização](/assets/images/help/repository/repository-options-defaultbranch-i-understand.png)

