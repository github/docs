---
title: Gestion de la facturation pour GitHub Codespaces dans votre organisation
shortTitle: Manage billing
intro: Vous pouvez vérifier votre utilisation de {% data variables.product.prodname_github_codespaces %} et définir des limites d’utilisation.
product: '{% data reusables.gated-features.codespaces %}'
permissions: To manage billing for {% data variables.product.prodname_github_codespaces %} for an organization, you must be an organization owner or a billing manager.
versions:
  fpt: '*'
  ghec: '*'
type: reference
topics:
- Codespaces
- Billing
redirect_from:
- /codespaces/managing-codespaces-for-your-organization/managing-billing-for-codespaces-in-your-organization
ms.openlocfilehash: 752a32ca3af18873e88fab2389beef0262988b28
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/05/2022
ms.locfileid: "147676655"
---
## Vue d’ensemble

Pour en savoir plus sur la tarification de {% data variables.product.prodname_github_codespaces %}, consultez « [Tarification de {% data variables.product.prodname_codespaces %}](/billing/managing-billing-for-github-codespaces/about-billing-for-codespaces#codespaces-pricing) ».

{% data reusables.codespaces.codespaces-billing %}

- En tant que propriétaire d’organisation ou responsable de facturation, vous pouvez gérer la facturation de {% data variables.product.prodname_codespaces %} pour votre organisation : [« À propos de la facturation pour mes espaces de code »](/billing/managing-billing-for-github-codespaces/about-billing-for-codespaces)

- Pour les utilisateurs, il existe un guide qui explique le fonctionnement de la facturation : [« Présentation de la facturation pour Codespaces »](/codespaces/codespaces-reference/understanding-billing-for-codespaces)

## Limites d’utilisation

Vous pouvez définir une limite d’utilisation pour les espaces de code de votre organisation ou référentiel. Cette limite est appliquée à l’utilisation du calcul et du stockage pour {% data variables.product.prodname_github_codespaces %} :
 
- **Minutes de calcul :** L’utilisation du calcul est déterminée par le nombre réel de minutes utilisées par toutes les instances {% data variables.product.prodname_codespaces %} pendant qu’elles sont actives. Ces totaux sont signalés quotidiennement au service de facturation et sont facturés mensuellement. Vous pouvez définir une limite de dépense pour l’utilisation de {% data variables.product.prodname_codespaces %} dans votre organisation. Pour plus d’informations, consultez « [Gestion des limites de dépense pour {% data variables.product.prodname_github_codespaces %}](/billing/managing-billing-for-github-codespaces/managing-spending-limits-for-github-codespaces) ».

- **Utilisation du stockage :** pour la facturation {% data variables.product.prodname_codespaces %}, cela inclut tous les espaces de stockage utilisés par tous les espaces de code de votre compte. Cela inclut tous les espaces de code, comme les référentiels clonés, les fichiers de configuration et les extensions, entre autres. Ces totaux sont signalés quotidiennement au service de facturation et sont facturés mensuellement. À la fin du mois, {% data variables.product.prodname_dotcom %} arrondit votre stockage au Mo le plus proche. Pour vérifier le nombre de minutes de calcul et de Go de stockage utilisés par {% data variables.product.prodname_codespaces %}, consultez « [Affichage de votre utilisation de {% data variables.product.prodname_github_codespaces %}](/billing/managing-billing-for-github-codespaces/viewing-your-github-codespaces-usage) ».

## Désactivation ou limitation de {% data variables.product.prodname_codespaces %}

Vous pouvez désactiver toute utilisation de {% data variables.product.prodname_github_codespaces %} susceptible d’être facturée à votre organisation. Vous pouvez aussi spécifier les membres ou collaborateurs de l’organisation autorisés à utiliser {% data variables.product.prodname_codespaces %} aux frais de votre organisation. Pour plus d'informations, consultez « [Activation de {% data variables.product.prodname_github_codespaces %} pour votre organisation](/codespaces/managing-codespaces-for-your-organization/enabling-github-codespaces-for-your-organization) ».

{% data reusables.codespaces.codespaces-disabling-org-billing %}

Vous pouvez configurer les dépôts accessibles à partir des codespaces créés pour un dépôt particulier. Pour plus d’informations, consultez « [Gestion de l’accès à d’autres dépôts dans votre codespace](/codespaces/managing-your-codespaces/managing-repository-access-for-your-codespaces) ».

Vous pouvez limiter le choix des types de machines disponibles pour les codespaces créés à partir des dépôts appartenant à votre organisation. Ainsi, vous empêchez les utilisateurs d’utiliser des machines avec des ressources excessives pour leurs codespaces et vous évitez de vous exposer à des frais inutiles. Pour plus d’informations, consultez « [Restriction de l’accès à des types de machine](/codespaces/managing-codespaces-for-your-organization/restricting-access-to-machine-types) ».

Vous pouvez aussi limiter la durée pendant laquelle un codespace peut rester inutilisé avant d’être automatiquement supprimé. Vous réduisez ainsi les coûts de stockage liés à {% data variables.product.prodname_codespaces %}. Pour plus d’informations, consultez « [Restriction de la durée de conservation pour les espaces de code](/codespaces/managing-codespaces-for-your-organization/restricting-the-retention-period-for-codespaces) ».

## Suppression des espaces de code inutilisés

Vos utilisateurs peuvent supprimer leurs espaces de code dans https://github.com/codespaces et à partir de {% data variables.product.prodname_vscode %}. Pour réduire la taille d’un espace de code, les utilisateurs peuvent supprimer manuellement des fichiers à l’aide du terminal ou à partir de {% data variables.product.prodname_vscode_shortname %}. 

{% note %}

**Remarque :** Les codespaces sont automatiquement supprimés une fois qu’ils ont été arrêtés et qu’ils sont restés inactifs pendant un nombre défini de jours. Pour plus d’informations, consultez « [Restriction de la durée de conservation pour les espaces de code](/codespaces/managing-codespaces-for-your-organization/restricting-the-retention-period-for-codespaces) ». Un codespace peut uniquement être supprimé manuellement par la personne qui a créé le codespace.

{% endnote %}
