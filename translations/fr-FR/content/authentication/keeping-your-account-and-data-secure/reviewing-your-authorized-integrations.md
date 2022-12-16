---
title: Examen de vos intégrations autorisées
intro: Vous pouvez passer revue vos intégrations autorisées pour auditer l’accès dont chacune bénéficie sur votre compte et vos données.
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
ms.contentlocale: fr-FR
ms.lasthandoff: 09/11/2022
ms.locfileid: '145086017'
---
## Examen de vos {% data variables.product.prodname_oauth_apps %} autorisées

{% data reusables.user-settings.access_settings %} {% data reusables.user-settings.access_applications %} {% data reusables.user-settings.access_authorized_oauth_apps %} {% data reusables.user-settings.review-oauth-apps %}

## Examen de vos {% data variables.product.prodname_github_apps %} autorisées

{% data reusables.user-settings.access_settings %} {% data reusables.user-settings.access_applications %}
3. Cliquez sur l’onglet **{% data variables.product.prodname_github_apps %} autorisées**. ![Onglet {% data variables.product.prodname_github_apps %} autorisées](/assets/images/help/settings/settings-authorized-github-apps-tab.png)
3. Examinez les {% data variables.product.prodname_github_apps %} qui ont accès à votre compte. Pour celles que vous ne reconnaissez pas ou qui sont obsolètes, cliquez sur **Révoquer**. Pour révoquer toutes les {% data variables.product.prodname_github_apps %}, cliquez sur **Révoquer tout**.
   ![Liste des {% data variables.product.prodname_github_app %} autorisées](/assets/images/help/settings/revoke-github-app.png)

## Pour aller plus loin
{% ifversion fpt or ghec %}
- « [À propos des intégrations](/articles/about-integrations) »{% endif %}
- « [Examen de vos applications autorisées (OAuth)](/articles/reviewing-your-authorized-applications-oauth) »
