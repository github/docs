---
title: Ver se os usuários da organização habilitaram a 2FA
intro: 'Você pode ver quais proprietários da organização, integrantes e colaboradores externos habilitaram a autenticação de dois fatores.'
redirect_from:
  - /articles/viewing-whether-users-in-your-organization-have-2fa-enabled
  - /github/setting-up-and-managing-organizations-and-teams/viewing-whether-users-in-your-organization-have-2fa-enabled
  - /organizations/keeping-your-organization-secure/viewing-whether-users-in-your-organization-have-2fa-enabled
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
topics:
  - Organizations
  - Teams
shortTitle: View 2FA usage
ms.openlocfilehash: 20659ea2e1979123b15d9ee5d333655ad188b2e9
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/10/2022
ms.locfileid: '145126482'
---
{% note %}

**Observação:** você pode exigir que todos os membros{% ifversion fpt or ghec %}, incluindo proprietários, gerentes de cobrança e{% else %} e{% endif %} colaboradores externos na sua organização tenham a autenticação de dois fatores habilitada. Para obter mais informações, confira "[Como exigir a autenticação de dois fatores na sua organização](/articles/requiring-two-factor-authentication-in-your-organization)".

{% endnote %}

{% data reusables.profile.access_org %} {% data reusables.user-settings.access_org %} {% data reusables.organizations.people %}
4. Para ver os membros da organização, incluindo os proprietários da organização que habilitaram ou desabilitaram a autenticação de dois fatores, à direita, clique em **2FA** e selecione **Habilitado** ou **Desabilitado**.
 ![filter-org-members-by-2fa](/assets/images/help/2fa/filter-org-members-by-2fa.png)
5. Para ver os colaboradores externos na sua organização, na guia "Pessoas", clique em **Colaboradores externos**.
![select-outside-collaborators](/assets/images/help/organizations/select-outside-collaborators.png)
6. Para ver os colaboradores externos que habilitaram ou desabilitaram a autenticação de dois fatores, à direita, clique em **2FA** e selecione **Habilitado** ou **Desabilitado**.
![filter-outside-collaborators-by-2fa](/assets/images/help/2fa/filter-outside-collaborators-by-2fa.png)

## Leitura adicional

- "[Como ver as funções das pessoas em uma organização](/articles/viewing-people-s-roles-in-an-organization)"
