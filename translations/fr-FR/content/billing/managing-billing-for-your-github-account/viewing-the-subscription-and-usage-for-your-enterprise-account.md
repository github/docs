---
title: Affichage de l’abonnement et de l’utilisation pour votre compte d’entreprise
intro: 'Vous pouvez afficher {% ifversion ghec %}l’abonnement, {% endif %}l’utilisation de la licence{% ifversion ghec %}, les factures, l’historique des paiements et d’autres informations de facturation{% endif %} pour {% ifversion ghec %}votre compte d’entreprise{% elsif ghes %}{% data variables.product.product_location_enterprise %}{% endif %}.'
permissions: 'Enterprise owners {% ifversion ghec %}and billing managers {% endif %}can access and manage all billing settings for enterprise accounts.'
redirect_from:
  - /github/setting-up-and-managing-your-enterprise/managing-your-enterprise-account/viewing-the-subscription-and-usage-for-your-enterprise-account
  - /github/setting-up-and-managing-your-enterprise-account/viewing-the-subscription-and-usage-for-your-enterprise-account
  - /articles/viewing-the-subscription-and-usage-for-your-enterprise-account
  - /github/setting-up-and-managing-your-enterprise/viewing-the-subscription-and-usage-for-your-enterprise-account
versions:
  ghec: '*'
  ghes: '*'
topics:
  - Enterprise
shortTitle: View subscription & usage
ms.openlocfilehash: 503f870542180cfe9ae088a161370b9370d36f1c
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/05/2022
ms.locfileid: '145189637'
---
## À propos de la facturation pour les comptes d’entreprise

Vous pouvez afficher une vue d’ensemble de {% ifversion ghec %}votre abonnement et de l’utilisation payante{% elsif ghes %}l’utilisation de la licence{% endif %} pour {% ifversion ghec %}votre{% elsif ghes %}le{% endif %} compte d’entreprise sur {% ifversion ghec %}{% data variables.product.prodname_dotcom_the_website %}{% elsif ghes %}{% data variables.product.product_location %}{% endif %}.{% ifversion ghec %} {% data reusables.enterprise.create-an-enterprise-account %} Pour plus d’informations, consultez « [Création d’un compte d’entreprise](/enterprise-cloud@latest/admin/overview/creating-an-enterprise-account) ».{% endif %}

Pour les clients {% data variables.product.prodname_enterprise %} facturés{% ifversion ghes %} qui utilisent à la fois {% data variables.product.prodname_ghe_cloud %} et {% data variables.product.prodname_ghe_server %}{% endif %}, chaque facture inclut des détails sur les services facturés pour tous les produits. Par exemple, en plus de votre utilisation pour {% ifversion ghec %}{% data variables.product.prodname_ghe_cloud %}{% elsif ghes %}{% data variables.product.product_name %}{% endif %}, vous pouvez avoir une utilisation pour {% data variables.product.prodname_GH_advanced_security %}{% ifversion ghec %}, {% elsif ghes %}. Vous pouvez également avoir une utilisation sur {% data variables.product.prodname_dotcom_the_website %}, comme {% endif %}des licences payantes dans les organisations en dehors de votre compte d’entreprise, des packs de données pour {% data variables.large_files.product_name_long %} ou des abonnements à des applications sur {% data variables.product.prodname_marketplace %}. Pour plus d’informations sur les factures, consultez « [Gestion des factures pour votre entreprise]({% ifversion ghes %}/enterprise-cloud@latest{% endif %}/billing/managing-billing-for-your-github-account/managing-invoices-for-your-enterprise){% ifversion ghec %} ».{% elsif ghes %} » dans la documentation {% data variables.product.prodname_dotcom_the_website %}.{% endif %}

{% ifversion ghec %}

En plus des propriétaires d’entreprise, les gestionnaires de facturation peuvent afficher l’abonnement et l’utilisation de votre compte d’entreprise. Pour plus d’informations, consultez « [Rôles dans une entreprise](/github/setting-up-and-managing-your-enterprise/managing-users-in-your-enterprise/roles-in-an-enterprise#billing-manager) » et « [Inviter des personnes à gérer votre entreprise](/admin/user-management/managing-users-in-your-enterprise/inviting-people-to-manage-your-enterprise) ».

{% data reusables.enterprise-accounts.billing-microsoft-ea-overview %} Pour plus d’informations, consultez « [Connexion d’un abonnement Azure à votre entreprise](/billing/managing-billing-for-your-github-account/connecting-an-azure-subscription-to-your-enterprise) ».

{% endif %}

{% ifversion ghes %}

Si vous souhaitez afficher une vue d’ensemble de votre abonnement et de votre utilisation pour {% data variables.product.prodname_enterprise %} et tous les services associés sur {% data variables.product.prodname_dotcom_the_website %}, consultez « [Affichage de l’abonnement et de l’utilisation pour votre compte d’entreprise](/enterprise-cloud@latest/billing/managing-billing-for-your-github-account/viewing-the-subscription-and-usage-for-your-enterprise-account) » dans la documentation {% data variables.product.prodname_ghe_cloud %}.

{% endif %}

## Affichage de l’abonnement et de l’utilisation pour votre compte d’entreprise

Vous pouvez afficher l’abonnement et l’utilisation pour votre entreprise et télécharger un fichier avec des détails sur les licences.

{% data reusables.billing.license-statuses %}

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.settings-tab %} {% data reusables.enterprise-accounts.license-tab %}
1. Sous « Licences utilisateur », consultez le nombre total de licences, le nombre de licences consommées et la date d’expiration de votre abonnement.
  {% ifversion ghec %}![Informations sur les licences et l’abonnement dans les paramètres de facturation d’entreprise](/assets/images/help/business-accounts/billing-license-info.png){% else %} ![Informations sur les licences et l’abonnement dans les paramètres de facturation d’entreprise](/assets/images/enterprise/enterprise-server/enterprise-server-billing-license-info.png){% endif %}
1. Si vous le souhaitez, pour afficher les détails de l’utilisation des licences ou télécharger un fichier {% ifversion ghec %}CSV{% elsif ghes %}JSON{% endif %} avec des détails de licence{% ifversion ghec %}, à droite de « Licences utilisateur »{% endif %}, cliquez sur **Afficher les {% ifversion ghec %}détails{% elsif ghes %}utilisateurs{% endif %}** ou {% ifversion ghec %}{% octicon "download" aria-label="The download icon" %}{% elsif ghes %}**Exporter l’utilisation des licenses**{% endif %}.{% ifversion ghec %} ![Bouton «Afficher les détails » et bouton avec l’icône de téléchargement à droite de « Licences utilisateur »](/assets/images/help/business-accounts/billing-license-info-click-view-details-or-download.png){% endif %}{% ifversion ghec %}
1. Si vous le souhaitez, pour afficher les détails de l’utilisation d’autres fonctionnalités, dans la barre latérale gauche, cliquez sur **Facturation**.
  ![Onglet Facturation dans la barre latérale des paramètres du compte d’entreprise](/assets/images/help/business-accounts/settings-billing-tab.png) {% endif %}
