---
title: Vérification ou approbation d’un domaine pour votre entreprise
shortTitle: Verify or approve a domain
intro: 'Vous pouvez vérifier votre propriété des domaines avec {% data variables.product.company_short %} pour confirmer l’identité des organisations détenues par votre compte d’entreprise. Vous pouvez également approuver des domaines dans lesquels les membres de l’organisation peuvent recevoir des notifications par e-mail.'
product: '{% data reusables.gated-features.verify-and-approve-domain %}'
versions:
  ghec: '*'
  ghes: '*'
permissions: Enterprise owners can verify or approve a domain for an enterprise account.
type: how_to
topics:
  - Enterprise
  - Notifications
  - Organizations
  - Policy
redirect_from:
  - /admin/configuration/configuring-your-enterprise/verifying-or-approving-a-domain-for-your-enterprise-account
  - /github/setting-up-and-managing-your-enterprise/managing-your-enterprise-account/verifying-or-approving-a-domain-for-your-enterprise-account
  - /admin/configuration/verifying-or-approving-a-domain-for-your-enterprise
  - /github/setting-up-and-managing-your-enterprise/verifying-your-enterprise-accounts-domain
  - /github/articles/verifying-your-enterprise-accounts-domain
  - /early-access/github/articles/verifying-your-enterprise-accounts-domain
  - /github/setting-up-and-managing-your-enterprise/verifying-or-approving-a-domain-for-your-enterprise-account
  - /admin/policies/verifying-or-approving-a-domain-for-your-enterprise
ms.openlocfilehash: 6cadd805d10095bb7a7443a86333312fce507617
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/05/2022
ms.locfileid: '147060913'
---
## À propos de la vérification de domaines

Vous pouvez vérifier que les sites web et les adresses e-mail listées dans les profils d’une organisation dont est propriétaire votre compte d’entreprise sont contrôlés par votre entreprise en vérifiant les domaines. Les domaines vérifiés d’un compte d’entreprise s’appliquent à chaque organisation dont est propriétaire le compte d’entreprise.

Une fois que vous avez vérifié la propriété des domaines de votre compte d’entreprise, un badge « Vérifié » s’affiche dans le profil de chaque organisation dont le domaine est listé dans le profil. {% data reusables.organizations.verified-domains-details %}

Pour les domaines configurés au niveau de l’entreprise, les propriétaires d’entreprise peuvent vérifier l’identité des membres de l’organisation en affichant l’adresse e-mail de chaque membre dans le domaine vérifié. Les propriétaires d’entreprise peuvent également afficher la liste des membres d’entreprise qui n’ont pas d’adresse e-mail à partir d’un domaine vérifié associé à leur compte d’utilisateur sur {% data variables.product.prodname_dotcom %}. Pour plus d’informations, consultez « [Affichage des membres sans adresse e-mail à partir d’un domaine vérifié](/admin/user-management/managing-users-in-your-enterprise/viewing-people-in-your-enterprise#viewing-members-without-an-email-address-from-a-verified-domain) ».

Après avoir vérifié les domaines de votre compte d’entreprise, vous pouvez limiter les notifications par e-mail aux domaines vérifiés pour toutes les organisations dont est propriétaire votre compte d’entreprise. Pour plus d’informations, consultez « [Limitation des notifications par e-mail pour votre entreprise](/admin/policies/enforcing-policies-for-your-enterprise/restricting-email-notifications-for-your-enterprise) ».

Même si vous ne limitez pas les notifications par e-mail pour le compte d’entreprise, si les notifications par e-mail sont limitées pour un propriétaire d’organisation, les membres de l’organisation peuvent recevoir les notifications de tous les domaines vérifiés ou approuvés pour le compte d’entreprise, en plus des domaines vérifiés ou approuvés de l’organisation. Pour plus d’informations sur la limitation des notifications pour une organisation, consultez « [Limitation des notifications par e-mail pour votre organisation](/organizations/keeping-your-organization-secure/restricting-email-notifications-for-your-organization) ».

Les propriétaires d’organisations peuvent aussi vérifier des domaines supplémentaires pour leurs organisations. Pour plus d’informations, consultez « [Vérification ou approbation d’un domaine pour votre organisation](/organizations/managing-organization-settings/verifying-or-approving-a-domain-for-your-organization) ».

## À propos de l’approbation de domaines

{% data reusables.enterprise-accounts.approved-domains-beta-note %}

{% data reusables.enterprise-accounts.approved-domains-about %}

Une fois que vous avez approuvé des domaines pour votre compte d’entreprise, vous pouvez limiter les notifications par e-mail concernant les activités au sein de votre compte d’entreprise aux utilisateurs dont l’adresse e-mail est vérifiée dans les domaines vérifiés ou approuvés. Pour plus d’informations, consultez « [Limitation des notifications par e-mail pour votre entreprise](/admin/policies/enforcing-policies-for-your-enterprise/restricting-email-notifications-for-your-enterprise) ».

{% ifversion ghec %}Pour recevoir des notifications par e-mail, le propriétaire du compte d’utilisateur doit vérifier l’adresse e-mail sur {% data variables.product.product_name %}. Pour plus d’informations, consultez « [Vérification de votre adresse e-mail](/github/getting-started-with-github/verifying-your-email-address) ».{% endif %}

Les propriétaires d’organisations ne peuvent pas voir l’adresse e-mail ou le compte d’utilisateur qui est associé à une adresse e-mail d’un domaine approuvé.

Les propriétaires d’organisations peuvent aussi approuver des domaines supplémentaires pour leurs organisations. Pour plus d’informations, consultez « [Vérification ou approbation d’un domaine pour votre organisation](/organizations/managing-organization-settings/verifying-or-approving-a-domain-for-your-organization) ».

## Vérification d’un domaine pour votre compte d’entreprise

Pour vérifier le domaine de votre compte d’entreprise, vous devez disposer d’un accès permettant de modifier les enregistrements de domaine auprès de votre service d’hébergement de domaine.

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.settings-tab %} {% data reusables.enterprise-accounts.verified-domains-tab %} {% data reusables.enterprise-accounts.add-a-domain %} {% data reusables.organizations.add-domain %} {% data reusables.organizations.add-dns-txt-record %}
1. Attendez que votre configuration DNS change, ce qui peut prendre jusqu’à 72 heures. Vous pouvez vérifier que votre configuration DNS a changé en exécutant la commande `dig` sur la ligne de commande, en remplaçant `ENTERPRISE-ACCOUNT` par le nom de votre compte d’entreprise et `example.com` par le domaine que vous voulez vérifier. Votre nouvel enregistrement TXT doit figurer dans la sortie de commande.
   ```shell
   dig _github-challenge-<em>ENTERPRISE-ACCOUNT</em>.<em>example.com</em> +nostats +nocomments +nocmd TXT
   ```
1. Après avoir vérifié que votre enregistrement TXT a bien été ajouté à votre DNS, suivez les étapes une à quatre ci-dessus pour accéder aux domaines approuvés et vérifiés de votre compte d’entreprise.
{% data reusables.enterprise-accounts.continue-verifying-domain %}
1. Dès lors que le badge « Vérifié » figure dans les profils de vos organisations, vous pouvez éventuellement supprimer l’entrée TXT de l’enregistrement DNS dans votre service d’hébergement de domaine.
![Badge Vérifié](/assets/images/help/organizations/verified-badge.png)

## Approbation d’un domaine pour votre compte d’entreprise

{% data reusables.enterprise-accounts.approved-domains-beta-note %}

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.settings-tab %} {% data reusables.enterprise-accounts.verified-domains-tab %} {% data reusables.enterprise-accounts.add-a-domain %} {% data reusables.organizations.add-domain %} {% data reusables.organizations.domains-approve-it-instead %} {% data reusables.organizations.domains-approve-domain %}

## Suppression d’un domaine approuvé ou vérifié

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.settings-tab %} {% data reusables.enterprise-accounts.verified-domains-tab %}
1. À droite du domaine à supprimer, cliquez sur {% octicon "kebab-horizontal" aria-label="The horizontal kebab icon" %}, puis sur **Supprimer**.
    ![« Supprimer » pour un domaine](/assets/images/help/organizations/domains-delete.png)
