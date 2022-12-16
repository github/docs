---
title: Limitation des notifications par e-mail de l’organisation
intro: 'Pour empêcher la fuite d’informations de l’organisation dans des comptes de messagerie personnels, vous pouvez restreindre les domaines dans lesquels les membres peuvent recevoir des notifications par e-mail concernant l’activité de l’organisation.'
permissions: Organization owners can restrict email notifications for an organization.
redirect_from:
  - /articles/restricting-email-notifications-about-organization-activity-to-an-approved-email-domain
  - /articles/restricting-email-notifications-to-an-approved-domain
  - /github/setting-up-and-managing-organizations-and-teams/restricting-email-notifications-to-an-approved-domain
  - /organizations/keeping-your-organization-secure/restricting-email-notifications-to-an-approved-domain
  - /organizations/keeping-your-organization-secure/restricting-email-notifications-for-your-organization
versions:
  ghes: '*'
  ghec: '*'
type: how_to
topics:
  - Enterprise
  - Notifications
  - Organizations
  - Policy
shortTitle: Restrict email notifications
ms.openlocfilehash: 480f587862e0618c0624eec581520343c54afa35
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/05/2022
ms.locfileid: '147060097'
---
## À propos des restrictions d’e-mails

Lorsque les notifications par e-mail restreintes sont activées dans une organisation, les membres ne peuvent utiliser qu’une adresse e-mail associée à un domaine vérifié ou approuvé pour recevoir des notifications par e-mail concernant l’activité de l’organisation. Pour plus d’informations, consultez « [Vérification ou approbation d’un domaine pour votre organisation](/organizations/managing-organization-settings/verifying-or-approving-a-domain-for-your-organization) ».

{% ifversion ghec %} {% note %}

**Remarque :** Pour restreindre les notifications par e-mail, votre organisation doit utiliser {% data variables.product.prodname_ghe_cloud %}. {% data reusables.enterprise.link-to-ghec-trial %}

{% endnote %} {% endif %}

{% data reusables.notifications.email-restrictions-verification %}

Les collaborateurs externes ne sont pas soumis à des restrictions sur les notifications par e-mail concernant les domaines vérifiés et approuvés. Pour plus d’informations sur les collaborateurs externes, consultez « [Rôles dans une organisation](/organizations/managing-peoples-access-to-your-organization-with-roles/roles-in-an-organization#outside-collaborators) ».

Si votre organisation appartient à un compte d’entreprise, les membres de l’organisation peuvent recevoir des notifications de tous les domaines vérifiés ou approuvés pour le compte d’entreprise, en plus des domaines vérifiés ou approuvés pour l’organisation. Pour plus d’informations, consultez « [Vérification ou approbation d’un domaine pour une entreprise](/admin/configuration/configuring-your-enterprise/verifying-or-approving-a-domain-for-your-enterprise) ».

## Restriction des notifications par e-mail

Pour pouvoir restreindre les notifications par e-mail de votre organisation, vous devez vérifier ou approuver au moins un domaine dans l’organisation. Autre possibilité : un propriétaire d’entreprise doit avoir vérifié ou approuvé au moins un domaine pour le compte d’entreprise.

Pour plus d’informations sur la vérification et l’approbation de domaines dans une organisation, consultez « [Vérification ou approbation d’un domaine pour une organisation](/organizations/managing-organization-settings/verifying-or-approving-a-domain-for-your-organization) ».

{% data reusables.profile.access_org %} {% data reusables.profile.org_settings %} {% data reusables.organizations.verified-domains %} {% data reusables.organizations.restrict-email-notifications %}
6. Cliquez sur **Enregistrer**.
