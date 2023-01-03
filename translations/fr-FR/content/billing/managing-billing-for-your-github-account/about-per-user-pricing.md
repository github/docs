---
title: À propos des tarifs par utilisateur
intro: '{% ifversion fpt or ghec %}Pour les organisations{% ifversion ghec %} et les entreprises{% endif %}, votre {% else %}Votre {% endif %}facture commence par le nombre de sièges sous licence que vous choisissez.'
redirect_from:
  - /github/setting-up-and-managing-billing-and-payments-on-github/about-per-user-pricing
  - /articles/about-per-user-pricing
  - /github/setting-up-and-managing-billing-and-payments-on-github/managing-billing-for-your-github-account/about-per-user-pricing
versions:
  fpt: '*'
  ghec: '*'
  ghes: '*'
type: overview
topics:
  - Downgrades
  - Enterprise
  - Licensing
  - Organizations
ms.openlocfilehash: 16de23fa922a593bb03fedcb7f902822cffce7f9
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 10/25/2022
ms.locfileid: '148106668'
---
## À propos des tarifs par utilisateur

{% ifversion fpt %}

Les nouvelles organisations sur {% data variables.product.prodname_dotcom_the_website %} peuvent créer des projets publics et open source avec {% data variables.product.prodname_free_team %}, ou effectuer une mise à niveau vers un produit payant avec un tarif par utilisateur. Pour plus [d’informations, consultez « Produits de {% data variables.product.company_short %}](/get-started/learning-about-github/githubs-products) » et « [Mise à niveau de votre abonnement {% data variables.product.prodname_dotcom %}](/billing/managing-billing-for-your-github-account/upgrading-your-github-subscription) ».

Les organisations qui utilisent un abonnement payant antérieur au 11 mai 2016 peuvent choisir de rester sur leur plan par dépôt existant ou de passer à la tarification par utilisateur. {% data variables.product.company_short %} vous avertit douze mois avant toute modification obligatoire de votre abonnement. Pour plus d’informations sur le changement d’abonnement, consultez « [Mise à niveau de votre abonnement {% data variables.product.prodname_dotcom %}](/billing/managing-billing-for-your-github-account/upgrading-your-github-subscription) ».

{% else %}

La base de votre facture est le nombre de sièges sous licence standard que vous choisissez pour votre {% ifversion ghec %} organisation ou{% endif %} entreprise.

{% data reusables.enterprise-licensing.unique-user-licensing-model %}

Pour vous assurer que le même utilisateur ne consomme pas plusieurs licences pour plusieurs déploiements d’entreprise, vous pouvez synchroniser l’utilisation des licences entre vos environnements {% data variables.product.prodname_ghe_server %} et {% data variables.product.prodname_ghe_cloud %}. Pour plus d’informations, consultez « [À propos des licences pour GitHub Enterprise](/billing/managing-your-license-for-github-enterprise/about-licenses-for-github-enterprise) ».

En plus des sièges sous licence, votre facture peut inclure d’autres frais, comme {% data variables.product.prodname_GH_advanced_security %}. Pour plus d’informations, consultez « [À propos de la facturation pour votre entreprise](/billing/managing-billing-for-your-github-account/about-billing-for-your-enterprise) ».
{% endif %}

## Personnes qui consomment une licence

{% ifversion fpt %}

{% data variables.product.company_short %} facture les personnes suivantes :

- Membres d’organisation, y compris les propriétaires
- Collaborateurs externes sur des dépôts privés appartenant à votre organisation, à l’exclusion des duplications (forks)
- Toute personne ayant une invitation en attente pour devenir un collaborateur externe sur des dépôts privés ou internes appartenant à votre organisation, à l’exception des duplications
- Utilisateurs dormants

{% note %}

**Remarques :** 
- {% data variables.product.company_short %} compte chaque collaborateur externe une fois, à des fins de facturation, même si le compte d’utilisateur a accès à plusieurs dépôts appartenant à votre organisation.
- {% data reusables.organizations.org-invite-scim %}

{% endnote %}

{% data variables.product.company_short %} ne facture pas les personnes suivantes :

- Gestionnaires de facturation
- Toute personne ayant une invitation en attente pour devenir gestionnaire de facturation
- Toute personne ayant une invitation en attente pour devenir un collaborateur externe sur un référentiel public appartenant à votre organisation

{% else %}

{% data variables.product.company_short %} facture les comptes suivants pour chaque déploiement de {% data variables.product.prodname_enterprise %}.

### Comptes qui consomment une licence sur {% data variables.product.prodname_ghe_cloud %}

{% data variables.product.company_short %} facture chacun des comptes suivants sur {% data variables.product.prodname_ghe_cloud %} :

- Propriétaires d’entreprise membres ou propriétaires d’au moins une organisation dans l’entreprise
- Membres d’organisation, y compris les propriétaires
- Collaborateurs externes sur des dépôts privés ou internes appartenant à votre organisation, à l’exclusion des duplications (forks)
- Utilisateurs dormants

Si votre entreprise n’utilise pas la fonctionnalité {% data variables.product.prodname_emus %}, vous êtes également facturé pour chacun des comptes suivants :

- Toute personne ayant reçu une invitation pour devenir propriétaire ou membre d’une organisation
- Toute personne ayant une invitation en attente pour devenir un collaborateur externe sur des dépôts privés ou internes appartenant à votre organisation, à l’exception des duplications

{% note %}

**Remarques :** 
  - {% data variables.product.company_short %} compte chaque membre ou collaborateur externe une fois, à des fins de facturation, même si le compte d’utilisateur est membre de plusieurs organisations dans une entreprise, ou a accès à plusieurs dépôts appartenant à votre organisation.
  - {% data reusables.organizations.org-invite-scim %}

{% endnote %}

{% data variables.product.company_short %} ne facture aucun des comptes suivants :

- {% data variables.enterprise.prodname_managed_users_caps %} suspendus
- Propriétaires d’entreprise qui ne sont pas membres ou propriétaires d’au moins une organisation dans l’entreprise
- Gestionnaires de facturation d’entreprise
- Gestionnaires de facturation pour les organisations individuelles
- Toute personne ayant une invitation en attente pour devenir gestionnaire de facturation
- Toute personne ayant une invitation en attente pour devenir un collaborateur externe sur un référentiel public appartenant à votre organisation

### Comptes qui consomment une licence sur {% data variables.product.prodname_ghe_server %}

Chaque compte d’utilisateur sur {% data variables.product.prodname_ghe_server %} consomme un siège.

Les utilisateurs suspendus ne sont pas comptés dans le calcul du nombre d’utilisateurs disposant d’une licence et qui consomment des sièges. Pour plus d’informations, consultez « [Suspension et réhabilitation d’utilisateurs]({% ifversion not ghes %}/enterprise-server@latest{% endif %}/admin/user-management/managing-users-in-your-enterprise/suspending-and-unsuspending-users){% ifversion not ghes %} » dans la documentation de {% data variables.product.prodname_ghe_server %}.{% else %} ».{% endif %}

Les utilisateurs dormants occupent une licence de siège. Ainsi, vous pouvez choisir de suspendre les utilisateurs dormants pour libérer des licences utilisateur. Pour plus d’informations, consultez « [Gestion des utilisateurs dormants]({% ifversion not ghes %}/enterprise-server@latest{% endif %}/admin/user-management/managing-users-in-your-enterprise/managing-dormant-users){% ifversion not ghes %} » dans la documentation de {% data variables.product.prodname_ghe_server %}.{% else %} ».{% endif %}

{% endif %}

## À propos des modifications apportées à votre abonnement

{% ifversion fpt %}

Vous pouvez changer votre abonnement {% data variables.product.prodname_dotcom %} à tout moment.

### À propos des modifications pour les organisations concernant les plans par utilisateur

{% endif %}

Vous pouvez ajouter d’autres sièges sous licence à votre {% ifversion fpt or ghec %} organisation{% endif %}{% ifversion ghec %} ou{% endif %}{% ifversion ghec or ghes %} entreprise{% endif %} à tout moment. Si vous payez plus de sièges que vous n’en utilisez, vous pouvez également réduire le nombre de sièges.{% ifversion fpt %} Pour plus d’informations, consultez « [Mise à niveau de votre abonnement {% data variables.product.prodname_dotcom %}](/billing/managing-billing-for-your-github-account/upgrading-your-github-subscription) » et « [Passage de votre abonnement {% data variables.product.prodname_dotcom %} à une version antérieure](/billing/managing-billing-for-your-github-account/downgrading-your-github-subscription) ».

Si vous avez des questions sur votre abonnement, contactez le {% data variables.contact.contact_support %}.

Pour prendre en charge les capacités de collaboration de votre équipe, vous pouvez effectuer une mise à niveau vers {% data variables.product.prodname_ghe_cloud %}, qui inclut des fonctionnalités telles que l’authentification unique SAML et l’audit avancé. {% data reusables.enterprise.link-to-ghec-trial %}

Pour plus d’informations sur les tarifs par utilisateur pour {% data variables.product.prodname_ghe_cloud %}, consultez [la documentation {% data variables.product.prodname_ghe_cloud %}](/enterprise-cloud@latest/billing/managing-billing-for-your-github-account/about-per-user-pricing).

{% else %}

Si vous utilisez un compte d’entreprise sur {% data variables.product.prodname_dotcom_the_website %} et que vous avez des questions sur les modifications de votre abonnement, contactez l’{% data variables.contact.contact_enterprise_sales %}.

{% endif %} {% ifversion ghec %}

Si vous utilisez une organisation individuelle sur {% data variables.product.prodname_ghe_cloud %}, vous pouvez faire passer votre abonnement au niveau supérieur ou inférieur. Pour plus d’informations, consultez « [Passage de votre abonnement {% data variables.product.prodname_dotcom %} au niveau supérieur](/billing/managing-billing-for-your-github-account/upgrading-your-github-subscription) » ou « [Passage de votre abonnement {% data variables.product.prodname_dotcom %} au niveau inférieur](/billing/managing-billing-for-your-github-account/downgrading-your-github-subscription) ». Si vous avez des questions sur votre abonnement, contactez le {% data variables.contact.contact_support %}.

{% endif %}

{% ifversion fpt %}

### À propos des modifications pour les organisations concernant les plans par dépôt

Vous pouvez changer de plan payant hérité dans les paramètres de facturation de votre organisation. Quand vous effectuez une mise à niveau vers un plan avec plus de dépôts privés, {% data variables.product.company_short %} déplace immédiatement votre compte vers votre nouveau plan et vous facture la différence de prix, au prorata du nombre de jours restants dans votre cycle de facturation.

Quand vous passez à un plan payant hérité avec moins de dépôts privés, votre nouveau plan prend effet à la prochaine date de facturation. Si vous disposez de plus de dépôts privés que ce qu’autorise votre nouveau plan, vos dépôts privés sont verrouillés quand votre nouveau plan prend effet. Pour réduire le nombre de dépôts privés, vous pouvez rendre certains d’entre eux publics, ou vous pouvez cloner vos dépôts privés localement et supprimer les copies sur {% data variables.product.prodname_dotcom %}.

{% endif %}

## Pour aller plus loin

{%- ifversion not fpt %}
- « [À propos des comptes d’entreprise](/admin/overview/about-enterprise-accounts) »
- « [Rôles dans une entreprise](/admin/user-management/managing-users-in-your-enterprise/roles-in-an-enterprise) » {%- endif %}
- « [Rôles dans une organisation](/organizations/managing-peoples-access-to-your-organization-with-roles/roles-in-an-organization) »
- « [Ajout de collaborateurs externes aux dépôts de votre organisation](/organizations/managing-access-to-your-organizations-repositories/adding-outside-collaborators-to-repositories-in-your-organization) ».
