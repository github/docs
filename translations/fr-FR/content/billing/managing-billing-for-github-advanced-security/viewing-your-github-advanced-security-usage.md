---
title: Affichage de votre utilisation de GitHub Advanced Security
intro: 'Vous pouvez visualiser l’utilisation de {% data variables.product.prodname_GH_advanced_security %} pour votre entreprise.'
permissions: 'Enterprise owners can view usage for {% data variables.product.prodname_GH_advanced_security %}.'
product: '{% data reusables.gated-features.ghas %}'
redirect_from:
  - /billing/managing-licensing-for-github-advanced-security/viewing-your-github-advanced-security-usage
  - /admin/advanced-security/viewing-your-github-advanced-security-usage
  - /github/setting-up-and-managing-billing-and-payments-on-github/managing-licensing-for-github-advanced-security/viewing-your-github-advanced-security-usage
  - /github/setting-up-and-managing-your-enterprise/managing-use-of-advanced-security-for-organizations-in-your-enterprise-account
  - /github/setting-up-and-managing-billing-and-payments-on-github/viewing-your-github-advanced-security-usage
versions:
  ghes: '*'
  ghec: '*'
miniTocMaxHeadingLevel: 3
type: how_to
topics:
  - Advanced Security
  - Enterprise
shortTitle: View Advanced Security usage
ms.openlocfilehash: 8647ba2eb00f580256bd3f49ac2218331e45eef3
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/05/2022
ms.locfileid: '146180486'
---
## À propos des licences pour {% data variables.product.prodname_GH_advanced_security %}

{% data reusables.advanced-security.about-ghas-license-seats %} Pour plus d’informations, consultez « [À propos de la facturation pour {% data variables.product.prodname_GH_advanced_security %}](/billing/managing-billing-for-github-advanced-security/about-billing-for-github-advanced-security) ».

{% ifversion ghas-committers-calculator %} Vous pouvez calculer le nombre de sièges supplémentaires utilisés si vous activez {% data variables.product.prodname_GH_advanced_security %} pour d’autres organisations et dépôts à l’aide du tableau de bord d’administration de site. Pour plus d’informations, consultez « [Tableau de bord d’administration de site](/admin/configuration/configuring-your-enterprise/site-admin-dashboard#advanced-security-active-committers) ».
{% endif %}

## Affichage de l’utilisation des licences {% data variables.product.prodname_GH_advanced_security %} pour votre compte d’entreprise

Vous pouvez vérifier le nombre de postes inclus dans votre licence et le nombre d’entre eux qui sont utilisés.

{% ifversion fpt or ghec %}

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.settings-tab %} {% data reusables.enterprise-accounts.license-tab %} La section « {% data variables.product.prodname_GH_advanced_security %} » affiche les détails de l’utilisation actuelle.
  ![{% data variables.product.prodname_GH_advanced_security %} dans les paramètres de licence d’entreprise](/assets/images/help/enterprises/enterprise-licensing-tab-ghas.png) Si vous n’avez pas de postes, la section est rouge et affiche « Limite dépassée ». Vous devez réduire votre utilisation de {% data variables.product.prodname_GH_advanced_security %} ou acheter des postes supplémentaires. Pour plus d’informations, consultez « [À propos de la facturation pour {% data variables.product.prodname_GH_advanced_security %}](/billing/managing-billing-for-github-advanced-security/about-billing-for-github-advanced-security#getting-the-most-out-of-github-advanced-security) ».
  ![{% data variables.product.prodname_GH_advanced_security %} dans les paramètres de licence d’entreprise indiquant « Limite dépassée »](/assets/images/help/enterprises/enterprise-licensing-tab-ghas-no-seats.png)
4. Si vous le souhaitez, pour voir une répartition détaillée de l’utilisation par organisation, dans la barre latérale gauche, cliquez sur **Facturation**.
  ![Onglet Facturation dans la barre latérale des paramètres du compte d’entreprise](/assets/images/help/business-accounts/settings-billing-tab.png) Dans la section « {% data variables.product.prodname_GH_advanced_security %} », vous pouvez voir le nombre de commiteurs et de commiteurs uniques pour chaque organisation.
  ![{% data variables.product.prodname_GH_advanced_security %} dans les paramètres de facturation d’entreprise](/assets/images/help/billing/ghas-orgs-list-enterprise-dotcom.png)
5. Si vous le souhaitez, cliquez sur le nom d’une organisation où vous êtes propriétaire pour afficher les paramètres de sécurité et d’analyse de l’organisation.
  ![Organisation détenue dans la section {% data variables.product.prodname_GH_advanced_security %} des paramètres de facturation d’entreprise](/assets/images/help/billing/ghas-orgs-list-enterprise-click-org.png)
6. Dans la page de paramètres « Sécurité et analyse », faites défiler l’affichage jusqu’à la section « Dépôts {% data variables.product.prodname_GH_advanced_security %} » pour voir une répartition détaillée de l’utilisation par dépôt pour cette organisation.
  ![Section Dépôts {% data variables.product.prodname_GH_advanced_security %}](/assets/images/help/enterprises/settings-security-analysis-ghas-repos-list.png) Pour plus d’informations, consultez « [Gestion des paramètres de sécurité et d’analyse pour votre organisation](/organizations/keeping-your-organization-secure/managing-security-and-analysis-settings-for-your-organization) ».

{% elsif ghes %}

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.settings-tab %} {% data reusables.enterprise-accounts.license-tab %} La section « {% data variables.product.prodname_GH_advanced_security %} » affiche les détails de l’utilisation actuelle. Vous pouvez voir le nombre total de postes utilisés ainsi qu’une table avec le nombre de commiteurs et de commiteurs uniques pour chaque organisation.
  ![Section {% data variables.product.prodname_GH_advanced_security %} de la licence Enterprise](/assets/images/help/billing/ghas-orgs-list-enterprise-ghes.png)
5. Si vous le souhaitez, cliquez sur le nom d’une organisation où vous êtes propriétaire pour afficher les paramètres de sécurité et d’analyse de l’organisation.
  ![Organisation détenue dans la section {% data variables.product.prodname_GH_advanced_security %} des paramètres de facturation d’entreprise](/assets/images/help/billing/ghas-orgs-list-enterprise-click-org.png)
6. Dans la page de paramètres « Sécurité et analyse », faites défiler l’affichage jusqu’à la section « Dépôts {% data variables.product.prodname_GH_advanced_security %} » pour voir une répartition détaillée de l’utilisation par dépôt pour cette organisation.
  ![Section Dépôts {% data variables.product.prodname_GH_advanced_security %}](/assets/images/help/enterprises/settings-security-analysis-ghas-repos-list.png) Pour plus d’informations, consultez « [Gestion des paramètres de sécurité et d’analyse pour votre organisation](/organizations/keeping-your-organization-secure/managing-security-and-analysis-settings-for-your-organization) ».

{% endif %}

{% ifversion ghec or ghes > 3.3 or ghae-issue-5378 %}

## Téléchargement des informations d’utilisation des licences {% data variables.product.prodname_GH_advanced_security %}

Vous pouvez télécharger un fichier CSV contenant les informations d’utilisation des licences {% data variables.product.prodname_GH_advanced_security %} aux niveaux de l’entreprise et de l’organisation. Le fichier CSV contient des informations sur chaque poste {% data variables.product.prodname_advanced_security %} utilisé, notamment :

- Nom d’utilisateur de la personne utilisant le poste
- Dépôts activés par {% data variables.product.prodname_advanced_security %} dans lesquels des commits ont été effectués
- Organisations auxquelles appartiennent les personnes utilisant des postes
- Dates de commit les plus récentes

Vous pouvez utiliser ces informations pour obtenir des insights sur la façon dont vos licences {% data variables.product.prodname_advanced_security %} sont utilisées, tels que les membres de votre entreprise qui utilisent un poste {% data variables.product.prodname_advanced_security %} ou la façon dont les licences {% data variables.product.prodname_advanced_security %} sont consommées dans vos organisations.

Vous pouvez télécharger le fichier CSV sur l’utilisation des licences {% data variables.product.prodname_advanced_security %} par le biais de l’interface utilisateur de {% data variables.product.product_name %} ou de l’API REST.

### Téléchargement des informations d’utilisation des licences {% data variables.product.prodname_advanced_security %} par le biais de l’interface utilisateur

#### Au niveau de l’organisation

{% data reusables.profile.access_org %} {% data reusables.profile.org_settings %} {% data reusables.organizations.billing_plans %}
1. Sous « {% data variables.product.prodname_GH_advanced_security %} », cliquez sur {% octicon "download" aria-label="The download icon" %} en regard de « Commiteurs ».
  ![Bouton de téléchargement des données au niveau de l’organisation](/assets/images/help/billing/download-organization-GHAS-usage-data.png)

#### Au niveau de l’entreprise

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.settings-tab %} {% data reusables.enterprise-accounts.license-tab %}
1. Sous « {% data variables.product.prodname_GH_advanced_security %} », cliquez sur {% octicon "download" aria-label="The download icon" %} en regard de « Commiteurs ».
  ![Bouton de téléchargement des données au niveau de l’entreprise](/assets/images/help/billing/download-enterprise-GHAS-usage-data.png)

### Téléchargement des informations d’utilisation des licences {% data variables.product.prodname_advanced_security %} par le biais de l’API REST

Vous pouvez récupérer les informations d’utilisation d’{% data variables.product.prodname_advanced_security %} par le biais de l’API de facturation.

{% ifversion ghec %}

Pour les données au niveau de l’organisation, utilisez le point de terminaison `/orgs/{org}/settings/billing/advanced-security`. Pour plus d’informations, consultez « [Facturation](/rest/reference/billing#get-github-advanced-security-active-committers-for-an-organization) » dans la documentation de l’API REST {% data variables.product.prodname_dotcom %}.

{% endif %}

Pour les données au niveau de l’entreprise, utilisez le point de terminaison `/enterprises/{enterprise}/settings/billing/advanced-security`. Pour plus d’informations, consultez « [Administration de {% data variables.product.prodname_enterprise %}](/rest/reference/enterprise-admin#get-github-advanced-security-active-committers-for-an-enterprise) » dans la documentation de l’API REST {% data variables.product.prodname_dotcom %}.

{% endif %}
