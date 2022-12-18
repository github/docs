---
title: Aprovar aplicativos OAuth na organização
intro: Quando uma integrante da organização solicita acesso do {% data variables.product.prodname_oauth_app %} aos recursos da organização, os proprietários da organização podem aprová-la ou negá-la.
redirect_from:
- /articles/approving-third-party-applications-for-your-organization
- /articles/approving-oauth-apps-for-your-organization
- /github/setting-up-and-managing-organizations-and-teams/approving-oauth-apps-for-your-organization
versions:
  fpt: '*'
  ghec: '*'
topics:
- Organizations
- Teams
shortTitle: Approve OAuth Apps
ms.openlocfilehash: b4f8f81b9ad773af86c7e2b488459d8865de3a49
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/05/2022
ms.locfileid: "145128295"
---
Quando as restrições de acesso do {% data variables.product.prodname_oauth_app %} são habilitadas, os integrantes da organização devem [solicitar aprovação](/articles/requesting-organization-approval-for-oauth-apps) de um proprietário da organização para que eles possam autorizar um {% data variables.product.prodname_oauth_app %} que tenha acesso aos recursos da organização.

{% data reusables.profile.access_org %} {% data reusables.profile.org_settings %} {% data reusables.organizations.oauth_app_access %}
5. Ao lado do aplicativo que deseja aprovar, clique em **Review** (Revisar).
![Link de solicitação de revisão](/assets/images/help/settings/settings-third-party-approve-review.png)
6. Depois que revisar as informações sobre o aplicativo solicitado, clique em **Grant access** (Conceder acesso).
![Botão Grant access](/assets/images/help/settings/settings-third-party-approve-grant.png) (Conceder acesso)

## Leitura adicional

- "[Sobre as restrições de acesso do {% data variables.product.prodname_oauth_app %}](/articles/about-oauth-app-access-restrictions)"
