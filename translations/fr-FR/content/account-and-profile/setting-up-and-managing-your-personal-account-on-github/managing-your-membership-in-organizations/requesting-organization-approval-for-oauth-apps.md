---
title: Demande d’approbation de l’organisation pour les applications OAuth
intro: 'Les membres d’une organisation et des collaborateurs externes peuvent demander à un propriétaire d’approuver l’accès aux ressources de l’organisation pour des {% data variables.product.prodname_oauth_apps %}.'
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
ms.contentlocale: fr-FR
ms.lasthandoff: 10/25/2022
ms.locfileid: '148008185'
---
## À propos d’une demande d’approbation de l’organisation pour une {% data variables.product.prodname_oauth_app %}

Les membres de l’organisation peuvent toujours demander l’approbation du propriétaire pour les {% data variables.product.prodname_oauth_apps %} qu’ils souhaitent utiliser, et les propriétaires de l’organisation reçoivent une notification des demandes en attente. {% ifversion limit-app-access-requests %} Les collaborateurs externes peuvent demander l’approbation du propriétaire pour les {% data variables.product.prodname_oauth_apps %} qu’ils souhaitent utiliser si les demandes d’accès d’intégration sont activées. Pour plus d’informations, consultez « [Limitation des demandes d’accès aux applications OAuth et aux applications GitHub](/organizations/managing-organization-settings/limiting-oauth-app-and-github-app-access-requests) ». {% endif %}

## Demande d’approbation de l’organisation pour une {% data variables.product.prodname_oauth_app %} que vous avez déjà autorisée pour votre compte personnel

{% data reusables.user-settings.access_settings %} {% data reusables.user-settings.access_applications %} {% data reusables.user-settings.access_authorized_oauth_apps %}
3. Dans la liste des applications, cliquez sur le nom de l’{% data variables.product.prodname_oauth_app %} pour laquelle vous souhaitez demander l’accès.
![Bouton d’affichage de demande](/assets/images/help/settings/settings-third-party-view-app.png)
4. En regard de l’organisation à laquelle vous souhaitez que l’{% data variables.product.prodname_oauth_app %} accède, cliquez sur **Demander l’accès**.
![Bouton Demander l’accès](/assets/images/help/settings/settings-third-party-request-access.png)
5. Après avoir examiné les informations relatives à la demande d’accès à l’{% data variables.product.prodname_oauth_app %}, cliquez sur **Demander l’approbation des propriétaires**.
![Bouton de demande d’approbation](/assets/images/help/settings/oauth-access-request-approval.png)

## Pour aller plus loin

- « [À propos des restrictions d’accès à une {% data variables.product.prodname_oauth_app %} ](/articles/about-oauth-app-access-restrictions) »
