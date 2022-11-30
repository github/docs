---
title: Revisar integrações autorizadas
intro: Você pode revisar as integrações autorizadas para auditar o acesso que cada integração tem com sua conta e seus dados.
redirect_from:
  - /articles/reviewing-your-authorized-integrations
  - /github/authenticating-to-github/reviewing-your-authorized-integrations
  - /github/authenticating-to-github/keeping-your-account-and-data-secure/reviewing-your-authorized-integrations
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Identity
  - Access management
shortTitle: Authorized integrations
ms.openlocfilehash: ec67e7b18b4ad898cd53b4773b299d90bc3dc9e5
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/11/2022
ms.locfileid: '145083621'
---
## Revisar os seus {% data variables.product.prodname_oauth_apps %} autorizados

{% data reusables.user-settings.access_settings %} {% data reusables.user-settings.access_applications %} {% data reusables.user-settings.access_authorized_oauth_apps %} {% data reusables.user-settings.review-oauth-apps %}

## Revisar os seus {% data variables.product.prodname_github_apps %} autorizados

{% data reusables.user-settings.access_settings %} {% data reusables.user-settings.access_applications %}
3. Clique na guia **{% data variables.product.prodname_github_apps %} autorizados**. ![Guia {% data variables.product.prodname_github_apps %} autorizados ](/assets/images/help/settings/settings-authorized-github-apps-tab.png)
3. Revise o {% data variables.product.prodname_github_apps %} que tem acesso à sua conta. Para aqueles que você não reconhece ou que estão desatualizados, clique em **Revogar**. Para revogar todos os {% data variables.product.prodname_github_apps %}, clique em **Revogar tudo**.
   ![Lista de {% data variables.product.prodname_github_app %} autorizados](/assets/images/help/settings/revoke-github-app.png)

## Leitura adicional
{% ifversion fpt or ghec %}
- "[Sobre as integrações](/articles/about-integrations)"{% endif %}
- "[Como revisar seus aplicativos autorizados (OAuth)](/articles/reviewing-your-authorized-applications-oauth)"
