---
title: Gerenciar o nome do branch-padrão para seus repositórios
intro: You can set the default branch name for new repositories that you create on {% data variables.product.product_location %}.
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
- Accounts
redirect_from:
- /github/setting-up-and-managing-your-github-user-account/managing-the-default-branch-name-for-your-repositories
- /github/setting-up-and-managing-your-github-user-account/managing-user-account-settings/managing-the-default-branch-name-for-your-repositories
shortTitle: Manage default branch name
ms.openlocfilehash: 5bf934f246a2d0e447a99d0f63888b5b87ecc033
ms.sourcegitcommit: 67064b14c9d4d18819db8f6398358b77a1c8002a
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 05/17/2022
ms.locfileid: "145083741"
---
## <a name="about-management-of-the-default-branch-name"></a>Sobre o gerenciamento do nome do brancc-padrão

Ao criar um novo repositório em {% data variables.product.product_location %}, o repositório conterá um branch, que será o branch-padrão. Você pode alterar o nome que {% data variables.product.product_name %} usa para o branch-padrão em novos repositórios que você criar. Para obter mais informações sobre o branch padrão, confira "[Sobre os branches](/github/collaborating-with-issues-and-pull-requests/about-branches#about-the-default-branch)".

{% data reusables.branches.change-default-branch %}

## <a name="setting-the-default-branch-name"></a>Definir o nome do branch-padrão

{% data reusables.user-settings.access_settings %} {% data reusables.user-settings.repo-tab %}
3. Em "Branch padrão do repositório", clique em **Alterar o nome do branch padrão agora**.
    ![Botão Substituir](/assets/images/help/settings/repo-default-name-button.png)
4. Digite o nome-padrão que você gostaria de usar para novos branches.
    ![Caixa de texto usada para inserir o nome padrão](/assets/images/help/settings/repo-default-name-text.png)
5. Clique em **Atualizar**.
    ![Botão Atualizar](/assets/images/help/settings/repo-default-name-update.png)

## <a name="further-reading"></a>Leitura adicional

- "[Como gerenciar o nome do branch padrão para repositórios na sua organização](/organizations/managing-organization-settings/managing-the-default-branch-name-for-repositories-in-your-organization)"
