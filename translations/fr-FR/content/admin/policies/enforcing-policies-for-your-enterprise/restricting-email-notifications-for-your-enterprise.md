---
title: Limitation des notifications par e-mail pour votre entreprise
intro: Vous pouvez empêcher que des informations de votre entreprise fuitent dans des comptes de messagerie personnels en limitant les domaines à partir desquels les membres peuvent recevoir des notifications par e-mail concernant l’activité dans les organisations dont est propriétaire votre entreprise.
product: '{% data reusables.gated-features.restrict-email-domain %}'
versions:
  ghec: '*'
  ghes: '*'
permissions: Enterprise owners can restrict email notifications for an enterprise.
type: how_to
topics:
  - Enterprise
  - Notifications
  - Organizations
  - Policies
redirect_from:
  - /admin/policies/restricting-email-notifications-for-your-enterprise
  - /github/setting-up-and-managing-your-enterprise/restricting-email-notifications-for-your-enterprise-account-to-approved-domains
  - /github/setting-up-and-managing-your-enterprise/restricting-email-notifications-for-your-enterprise-account
  - /github/setting-up-and-managing-your-enterprise/setting-policies-for-organizations-in-your-enterprise-account/restricting-email-notifications-for-your-enterprise-account
shortTitle: Restrict email notifications
ms.openlocfilehash: f5ef3b4ffd3db266e96d4f7fc90f43cbd226034f
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/05/2022
ms.locfileid: '147066496'
---
## À propos des limitations d’e-mail pour votre entreprise

Quand vous limitez les notifications par e-mail, les membres de l’entreprise peuvent utiliser uniquement une adresse e-mail dans un domaine vérifié ou approuvé pour recevoir des notifications par e-mail concernant l’activité dans les organisations appartenant à votre entreprise.

{% data reusables.enterprise-accounts.approved-domains-beta-note %}

Les domaines peuvent être hérités de l’entreprise ou configurés pour l’organisation spécifique. Pour plus d’informations, consultez « [Vérification ou approbation d’un domaine pour votre entreprise](/admin/configuration/configuring-your-enterprise/verifying-or-approving-a-domain-for-your-enterprise) » et « [Limitation des notifications par e-mail pour votre organisation](/organizations/keeping-your-organization-secure/restricting-email-notifications-for-your-organization) ».

{% data reusables.notifications.email-restrictions-verification %}

Si des limitations d’e-mail sont activées pour une entreprise, les propriétaires d’organisation ne peuvent pas les désactiver pour une organisation appartenant à l’entreprise. Si, à la suite de modifications, une organisation n’a pas de domaine vérifié ou approuvé, hérité d’une entreprise propriétaire de l’organisation ou configuré pour l’organisation spécifique, les restrictions d’e-mail sont désactivées pour l’organisation.

## Limitation des notifications par e-mail pour votre entreprise

Pour pouvoir limiter les notifications par e-mail pour votre entreprise, vous devez vérifier ou approuver au moins un domaine pour l’entreprise. {% ifversion ghec %} Pour plus d’informations, consultez « [Vérification ou approbation d’un domaine pour votre entreprise](/admin/configuration/configuring-your-enterprise/verifying-or-approving-a-domain-for-your-enterprise) ».{% endif %}

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.settings-tab %} {% data reusables.enterprise-accounts.verified-domains-tab %} {% data reusables.organizations.restrict-email-notifications %}
1. Cliquez sur **Enregistrer**.
