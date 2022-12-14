---
title: À propos de la facturation pour Codespaces
shortTitle: About billing
intro: Consultez les tarifs et découvrez comment gérer la facturation de {% data variables.product.prodname_codespaces %} pour votre organisation.
permissions: To manage billing for Codespaces for an organization, you must be an organization owner or a billing manager.
versions:
  fpt: '*'
  ghec: '*'
type: overview
product: '{% data reusables.gated-features.codespaces %}'
topics:
- Codespaces
- Billing
ms.openlocfilehash: bb2b22ce9f34122656134076d4d1e5b49b86e3ce
ms.sourcegitcommit: dc42bb4a4826b414751ffa9eed38962c3e3fea8e
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 07/13/2022
ms.locfileid: "146381074"
---
## <a name="-data-variablesproductprodname_codespaces--pricing"></a>Tarifs de {% data variables.product.prodname_codespaces %}

L’utilisation de {% data variables.product.prodname_codespaces %} est facturée pour tous les comptes d’organisation et d’entreprise sur {% data variables.product.prodname_team %} et {% data variables.product.prodname_enterprise %}, qui n’incluent pas de minutes ou de stockage gratuits. Les comptes personnels ne sont pas facturés pour l’utilisation de {% data variables.product.prodname_codespaces %}. 

L’utilisation de {% data variables.product.prodname_codespaces %} est facturée en fonction des unités de mesure indiquées dans le tableau suivant :

| Produit             | SKU      | Unité de mesure | Price |
| ------------------- | -------- | --------------- | ----- |
| Calcul Codespaces  |  2 cœurs  | 1 heure          | 0,18 $ |
|                     |  4 cœurs  | 1 heure          | 0,36 $ |
|                     |  8 cœurs  | 1 heure          | 0,72 $ |
|                     |  16 cœurs | 1 heure          | 1,44 $ |
|                     |  32 cœurs | 1 heure          | 2,88 $ |
| Stockage Codespaces  |  Stockage | 1 Go-mois      | 0,07 USD |

## <a name="about-billing-for--data-variablesproductprodname_codespaces-"></a>À propos de la facturation pour {% data variables.product.prodname_codespaces %}

{% data reusables.codespaces.codespaces-billing %}

Votre utilisation de {% data variables.product.prodname_codespaces %} partage la date de facturation, le mode de paiement et le reçu existants de votre compte. {% data reusables.dotcom_billing.view-all-subscriptions %}

{% ifversion ghec %} Si vous avez acheté {% data variables.product.prodname_enterprise %} par le biais d’un Contrat Entreprise Microsoft, vous pouvez connecter votre ID d’abonnement Azure à votre compte d’entreprise pour activer l’utilisation de {% data variables.product.prodname_codespaces %} et la payer. Pour plus d’informations, consultez « [Connexion d’un abonnement Azure à votre entreprise](/billing/managing-billing-for-your-github-account/connecting-an-azure-subscription-to-your-enterprise) ».
{% endif %}

{% data reusables.dotcom_billing.pricing_calculator.pricing_cal_codespaces %}

### <a name="billing-for--data-variablesproductprodname_codespaces--prebuilds"></a>Facturation des prébuilds {% data variables.product.prodname_codespaces %} prebuilds


{% data reusables.codespaces.billing-for-prebuilds %} 

## <a name="setting-a-spending-limit"></a>Définition d’une limite de dépense

{% data reusables.codespaces.codespaces-spending-limit-requirement %} 

Pour plus d’informations sur la gestion et la modification de la limite de dépense de votre compte, consultez « [Gestion de votre limite de dépense pour {% data variables.product.prodname_codespaces %}](/billing/managing-billing-for-github-codespaces/managing-spending-limits-for-codespaces) ».

{% data reusables.codespaces.exporting-changes %}

## <a name="limiting-the-choice-of-machine-types"></a>Limitation du choix des types de machine

Par défaut, le type de machine avec les ressources valides les plus faibles est utilisé quand un espace de code est créé. Toutefois, les utilisateurs peuvent être en mesure de choisir un type de machine avec plus de ressources. Ils peuvent le faire lorsqu’ils créent un espace de code, ou ils peuvent modifier le type de machine d’un espace de code existant. Pour plus d’informations, consultez « [Création d’un espace de code](/codespaces/developing-in-codespaces/creating-a-codespace#creating-a-codespace) » et « [Modification du type de machine pour votre espace de code](/codespaces/customizing-your-codespace/changing-the-machine-type-for-your-codespace) ».

Si un type de machine qui n’a plus de ressources est choisi, cela affecte les frais par minute pour cet espace de code, comme indiqué ci-dessus. 

Les propriétaires d’organisations peuvent créer une stratégie afin de restreindre les types de machine disponibles pour les utilisateurs. Pour plus d’informations, consultez « [Restriction de l’accès à des types de machine](/codespaces/managing-codespaces-for-your-organization/restricting-access-to-machine-types) ».

## <a name="how-billing-is-handled-for-forked-repositories"></a>Gestion de la facturation pour les dépôts dupliqués (fork)

Les {% data variables.product.prodname_codespaces %} ne peuvent être utilisés que dans les organisations où un propriétaire facturable a été défini. Pour entraîner des frais pour l’organisation, l’utilisateur doit être membre ou collaborateur, sinon il ne peut pas créer de codespace. 

Par exemple, un utilisateur au sein d’une organisation privée peut y dupliquer un dépôt, puis utiliser un codespace facturé à l’organisation ; en effet, celle-ci est le propriétaire du dépôt parent, qui peut supprimer l’accès de l’utilisateur, le dépôt dupliqué et le codespace.
  
## <a name="how-billing-is-handled-when-a-repository-is-transferred"></a>Gestion de la facturation lors du transfert d’un dépôt

L’utilisation est facturée et signalée toutes les heures. Ainsi, vous payez pour toute utilisation quand un dépôt se trouve au sein de votre organisation. Quand un dépôt est transféré hors de votre organisation, tous les codespaces dans ce dépôt sont supprimés dans le cadre du processus de transfert.

## <a name="what-happens-when-users-are-removed"></a>Que se passe-t-il quand des utilisateurs sont supprimés ?

Si un utilisateur est supprimé d’une organisation ou d’un dépôt, ses codespaces sont automatiquement supprimés. 
