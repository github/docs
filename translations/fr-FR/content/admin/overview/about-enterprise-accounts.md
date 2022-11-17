---
title: À propos des comptes d’entreprise
intro: 'Avec {% data variables.product.product_name %}, vous pouvez utiliser un compte d’entreprise pour {% ifversion ghec %}permettre la collaboration entre vos organisations, tout en dotant{% elsif ghes or ghae %}dotant{% endif %} les administrateurs d’un point de visibilité et de gestion unique.'
redirect_from:
  - /articles/about-github-business-accounts
  - /articles/about-enterprise-accounts
  - /enterprise/admin/installation/about-enterprise-accounts
  - /enterprise/admin/overview/about-enterprise-accounts
  - /github/setting-up-and-managing-your-enterprise-account/about-enterprise-accounts
  - /github/setting-up-and-managing-your-enterprise/about-enterprise-accounts
  - /github/setting-up-and-managing-your-enterprise/managing-your-enterprise-account/about-enterprise-accounts
versions:
  ghec: '*'
  ghes: '*'
  ghae: '*'
type: overview
topics:
  - Accounts
  - Enterprise
  - Fundamentals
ms.openlocfilehash: b0d1455fef80094f0dcdf20332605bd427d9c441
ms.sourcegitcommit: e98b752895109965b32cb277610985da5799f8a1
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 11/01/2022
ms.locfileid: '148127626'
---
## À propos des comptes d’entreprise sur {% ifversion ghec %}{% data variables.product.prodname_ghe_cloud %}{% else %}{% data variables.product.product_name %}{% endif %}

{% ifversion ghec %}

Votre compte d’entreprise sur {% data variables.product.prodname_dotcom_the_website %} vous permet de gérer plusieurs organisations. Votre compte d’entreprise doit avoir un handle comme une organisation ou un compte d’utilisateur sur {% data variables.product.prodname_dotcom %}.

{% elsif ghes or ghae %}

Le compte d’entreprise sur {% ifversion ghes %}{% data variables.location.product_location_enterprise %}{% elsif ghae %}{% data variables.product.product_name %}{% endif %} vous permet de gérer les organisations{% ifversion ghes %} sur{% elsif ghae %} appartenant à{% endif %} votre instance {% ifversion ghes %}{% data variables.product.prodname_ghe_server %}{% elsif ghae %}entreprise{% endif %}.

{% endif %}

Les organisations sont des comptes partagés où les membres d’une entreprise peuvent collaborer sur plusieurs projets à la fois. Les propriétaires d’organisation peuvent gérer l’accès aux données et aux projets de l’organisation avec des fonctionnalités d’administration et de sécurité sophistiquées. Pour plus d’informations, consultez « [À propos des organisations](/organizations/collaborating-with-groups-in-organizations/about-organizations) ».

{% ifversion ghec %} Dans les paramètres d’entreprise, les propriétaires d’entreprise peuvent inviter des organisations existantes à rejoindre votre compte d’entreprise, transférer des organisations entre des comptes d’entreprise ou créer de nouvelles organisations. Pour plus d’informations, consultez « [Ajout d’organisations à votre entreprise](/admin/user-management/managing-organizations-in-your-enterprise/adding-organizations-to-your-enterprise) ».
{% endif %}

Votre compte d’entreprise vous permet de gérer et d’appliquer des stratégies pour toutes les organisations dont est propriétaire l’entreprise. {% data reusables.enterprise.about-policies %} Pour plus d’informations, consultez « [À propos des stratégies d’entreprise](/admin/policies/enforcing-policies-for-your-enterprise/about-enterprise-policies) ».

{% ifversion ghec %}

{% data reusables.enterprise.create-an-enterprise-account %} Pour plus d’informations, consultez « [Création d’un compte d’entreprise](/admin/overview/creating-an-enterprise-account) ».

{% endif %}

## À propos de l’administration de votre compte d’entreprise

{% ifversion ghes or ghae %}

À partir de votre compte d’entreprise sur {% ifversion ghae %}{% data variables.product.product_name %}{% elsif ghes %}une instance de {% data variables.product.prodname_ghe_server %}{% endif %}, les administrateurs peuvent voir{% ifversion remove-enterprise-members %} et gérer{% endif %} l’appartenance à l’entreprise{% ifversion enterprise-owner-join-org %}, gérer leur propre appartenance aux organisations dont est propriétaire l’entreprise,{% endif %} et gérer les éléments suivants pour l’{% ifversion ghes %}instance de {% data variables.product.prodname_ghe_server %}{% elsif ghae %}entreprise sur {% data variables.product.prodname_ghe_managed %}{% endif %}.

{% ifversion ghes %}
- Utilisation des licences{% endif %}
- Sécurité ({% ifversion ghae %}authentification unique, listes vertes d’adresses IP, {% endif %}autorités de certification SSH, authentification à 2 facteurs)
- Stratégies d’entreprise pour les organisations appartenant au compte d’entreprise

{% endif %}

{% ifversion ghes %}

### À propos de l’administration de votre compte d’entreprise sur {% data variables.product.prodname_ghe_cloud %}

{% endif %}

{% ifversion ghec or ghes %}Quand vous essayez ou achetez {% data variables.product.prodname_enterprise %}, vous pouvez{% ifversion ghes %} également{% endif %} créer un compte d’entreprise pour {% data variables.product.prodname_ghe_cloud %} sur {% data variables.product.prodname_dotcom_the_website %}. Les administrateurs du compte d’entreprise sur {% data variables.product.prodname_dotcom_the_website %} peuvent voir {% ifversion remove-enterprise-members %} et gérer{% endif %} l’appartenance à l’entreprise{% ifversion enterprise-owner-join-org %}, gérer leur propre appartenance aux organisations dont est propriétaire l’entreprise,{% endif %} et gérer les éléments suivants pour le compte d’entreprise{% ifversion ghes %} sur {% data variables.product.prodname_dotcom_the_website %}{% endif %}.

- Facturation et utilisation (services sur {% data variables.product.prodname_dotcom_the_website %}, {% data variables.product.prodname_GH_advanced_security %}, licences utilisateur)
- Sécurité (authentification unique, listes vertes d’adresses IP, autorités de certification SSH, authentification à 2 facteurs)
- Stratégies d’entreprise pour les organisations appartenant au compte d’entreprise

Si vous utilisez à la fois {% data variables.product.prodname_ghe_cloud %} et {% data variables.product.prodname_ghe_server %}, vous pouvez également gérer les éléments suivants pour {% data variables.product.prodname_ghe_server %} à partir de votre compte d’entreprise sur {% data variables.product.prodname_dotcom_the_website %}.

- Facturation et utilisation pour les instances de {% data variables.product.prodname_ghe_server %}
- Requêtes et partage de bundles de support avec {% data variables.contact.enterprise_support %}

Vous pouvez également connecter le compte d’entreprise sur {% data variables.location.product_location_enterprise %} à votre compte d’entreprise sur {% data variables.product.prodname_dotcom_the_website %} pour voir les détails de l’utilisation des licences pour votre abonnement {% data variables.product.prodname_enterprise %} à partir de {% data variables.product.prodname_dotcom_the_website %}. Pour plus d’informations, consultez {% ifversion ghec %}« [Synchronisation de l’utilisation des licences entre {% data variables.product.prodname_ghe_server %} et {% data variables.product.prodname_ghe_cloud %}](/enterprise-server/billing/managing-your-license-for-github-enterprise/syncing-license-usage-between-github-enterprise-server-and-github-enterprise-cloud) » dans la documentation {% data variables.product.prodname_ghe_server %}.{% elsif ghes %}« [Synchronisation de l’utilisation des licences entre {% data variables.product.prodname_ghe_server %} et {% data variables.product.prodname_ghe_cloud %}](/billing/managing-your-license-for-github-enterprise/syncing-license-usage-between-github-enterprise-server-and-github-enterprise-cloud) ».{% endif %}

Pour plus d’informations sur les différences entre {% data variables.product.prodname_ghe_cloud %} et {% data variables.product.prodname_ghe_server %}, consultez « Produits de [{% data variables.product.prodname_dotcom %}](/get-started/learning-about-github/githubs-products) ». {% data reusables.enterprise-accounts.to-upgrade-or-get-started %}

{% endif %}

## À propos de la facturation pour votre compte d’entreprise

La facture pour votre compte d’entreprise inclut le coût mensuel pour chaque membre de votre entreprise. La facture inclut {% ifversion ghec %}toutes les licences payantes dans les organisations hors de votre compte d’entreprise, les abonnements aux applications dans {% data variables.product.prodname_marketplace %}, {% endif %}{% ifversion ghec or ghae %}les services payants supplémentaires pour votre entreprise{% ifversion ghec %} comme les packs de données pour {% data variables.large_files.product_name_long %},{% endif %} et{% endif %} l’utilisation de {% data variables.product.prodname_GH_advanced_security %}.

{% ifversion ghec %}

Pour plus d’informations sur la facturation de votre abonnement {% data variables.product.prodname_ghe_cloud %}, consultez « [Visualisation de l’abonnement et de l’utilisation de votre compte d’entreprise » et](/billing/managing-billing-for-your-github-account/viewing-the-subscription-and-usage-for-your-enterprise-account) « [À propos de la facturation pour votre entreprise](/billing/managing-billing-for-your-github-account/about-billing-for-your-enterprise) ».

{% elsif ghes %}

{% data reusables.enterprise-accounts.enterprise-accounts-billing %}

Pour plus d’informations sur la facturation de {% ifversion ghec %}{% data variables.product.prodname_ghe_cloud %}{% else %}{% data variables.product.product_name %}{% endif %}, consultez « [À propos de la facturation pour votre entreprise](/billing/managing-billing-for-your-github-account/about-billing-for-your-enterprise) ».

{% endif %}

{% ifversion ghec or ghes %}

{% ifversion ghec %}

{% data variables.product.prodname_enterprise %} offre deux options de déploiement. En plus de {% data variables.product.prodname_ghe_cloud %}, vous pouvez utiliser {% data variables.product.prodname_ghe_server %} pour héberger le travail de développement de votre entreprise dans votre centre de données ou fournisseur cloud pris en charge. {% endif %}Les propriétaires d’entreprise sur {% data variables.product.prodname_dotcom_the_website %} peuvent utiliser un compte d’entreprise pour gérer le paiement et les licences des instances {% data variables.product.prodname_ghe_server %}. Pour plus d’informations, consultez « [Produits de {% data variables.product.company_short %}](/get-started/learning-about-github/githubs-products#github-enterprise) » et « [Gestion de votre licence pour {% data variables.product.prodname_enterprise %}](/billing/managing-your-license-for-github-enterprise) ».

{% endif %}

## Pour aller plus loin

- « [Comptes d’entreprise](/graphql/guides/managing-enterprise-accounts) » dans la documentation d’API GraphQL
