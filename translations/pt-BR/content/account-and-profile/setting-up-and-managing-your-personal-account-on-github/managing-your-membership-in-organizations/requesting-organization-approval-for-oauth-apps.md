---
title: Solicitar aprovação da organização para apps OAuth
intro: 'Os membros da organização e os colaboradores externos podem solicitar que um proprietário aprove o acesso aos recursos da organização para o {% data variables.product.prodname_oauth_apps %}.'
redirect_from:
  - /articles/requesting-organization-approval-for-third-party-applications
  - /articles/requesting-organization-approval-for-your-authorized-applications
  - /articles/requesting-organization-approval-for-oauth-apps
  - /github/setting-up-and-managing-your-github-user-account/requesting-organization-approval-for-oauth-apps
  - /github/setting-up-and-managing-your-github-user-account/managing-your-membership-in-organizations/requesting-organization-approval-for-oauth-apps
  - /account-and-profile/setting-up-and-managing-your-github-user-account/managing-your-membership-in-organizations/requesting-organization-approval-for-oauth-apps
versions:
  fpt: '*'
  ghec: '*'
topics:
  - Accounts
shortTitle: Request OAuth App approval
ms.openlocfilehash: affc908d710811563e49bfee6a4e2e906750bf4b
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 10/25/2022
ms.locfileid: '148007649'
---
## Sobre a solicitação de aprovação da organização para {% data variables.product.prodname_oauth_app %}

Os membros da organização sempre podem solicitar a aprovação do proprietário para os {% data variables.product.prodname_oauth_apps %} que querem usar e os proprietários da organização recebem uma notificação de solicitações pendentes.{% ifversion limit-app-access-requests %} Os colaboradores externos podem solicitar a aprovação do proprietário para os {% data variables.product.prodname_oauth_apps %} que querem usar quando as solicitações de acesso de integração estão habilitadas. Para obter mais informações, confira "[Como limitar as solicitações de acesso ao Aplicativo do OAuth e ao Aplicativo do GitHub](/organizations/managing-organization-settings/limiting-oauth-app-and-github-app-access-requests)".{% endif %}

## Solicitar aprovação da organização para um {% data variables.product.prodname_oauth_app %} que você já autorizou na sua conta pessoal

{% data reusables.user-settings.access_settings %} {% data reusables.user-settings.access_applications %} {% data reusables.user-settings.access_authorized_oauth_apps %}
3. Na lista de aplicativos, clique no nome do {% data variables.product.prodname_oauth_app %} para o qual deseja solicitar o acesso.
![Botão Exibir aplicativo](/assets/images/help/settings/settings-third-party-view-app.png)
4. Ao lado da organização que você deseja que o {% data variables.product.prodname_oauth_app %} acesse, clique em **Solicitar acesso**.
![Botão Solicitar acesso](/assets/images/help/settings/settings-third-party-request-access.png)
5. Depois de revisar as informações sobre como solicitar acesso ao {% data variables.product.prodname_oauth_app %}, clique em **Solicitar aprovação dos proprietários**.
![Botão Solicitar aprovação](/assets/images/help/settings/oauth-access-request-approval.png)

## Leitura adicional

- "[Sobre as restrições de acesso do {% data variables.product.prodname_oauth_app %}](/articles/about-oauth-app-access-restrictions)"
