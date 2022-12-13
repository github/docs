---
title: Remover gerentes do aplicativo GitHub da organização
intro: Os proprietários da organização podem revogar as permissões de gerente do {% data variables.product.prodname_github_app %} concedidas a um integrante da organização.
redirect_from:
- /articles/removing-github-app-managers-from-your-organization
- /github/setting-up-and-managing-organizations-and-teams/removing-github-app-managers-from-your-organization
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
- Organizations
- Teams
shortTitle: Remove GitHub App managers
ms.openlocfilehash: c7dc813294a1fdd7e928a4212af30efa1182fd3d
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/05/2022
ms.locfileid: "145126479"
---
Para obter mais informações sobre as permissões de gerente do {% data variables.product.prodname_github_app %}, confira "[Funções em uma organização](/organizations/managing-peoples-access-to-your-organization-with-roles/roles-in-an-organization#github-app-managers)".

## Remover as permissões de gerente do {% data variables.product.prodname_github_app %} em toda a organização

{% data reusables.profile.access_org %} {% data reusables.profile.org_settings %} {% data reusables.organizations.github-apps-settings-sidebar %}
1. Em "Gerenciamento", localize o nome de usuário da pessoa da qual você deseja remover as permissões de gerente do {% data variables.product.prodname_github_app %} e clique em **Revogar**.
![Revogar as permissões de gerente do {% data variables.product.prodname_github_app %}](/assets/images/help/organizations/github-app-manager-revoke-permissions.png)

## Remover as permissões de gerente do {% data variables.product.prodname_github_app %} de um {% data variables.product.prodname_github_app %} individual

{% data reusables.profile.access_org %} {% data reusables.profile.org_settings %} {% data reusables.organizations.github-apps-settings-sidebar %}
1. Em "{% data variables.product.prodname_github_apps %}", clique no avatar do aplicativo do qual você deseja remover um gerente de {% data variables.product.prodname_github_app %}.
![Seleção do {% data variables.product.prodname_github_app %}](/assets/images/help/organizations/select-github-app.png) {% data reusables.organizations.app-managers-settings-sidebar %}
1. Em "Gerentes de aplicativos", localize o nome de usuário da pessoa da qual você deseja remover as permissões de gerente do {% data variables.product.prodname_github_app %} e clique em **Revogar**.
![Revogar as permissões de gerente do {% data variables.product.prodname_github_app %}](/assets/images/help/organizations/github-app-manager-revoke-permissions-individual-app.png)

{% ifversion fpt or ghec %}
## Leitura adicional

- "[Sobre o {% data variables.product.prodname_dotcom %} Marketplace](/articles/about-github-marketplace/)" {% endif %}
