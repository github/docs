---
title: Gestion de la facturation pour Codespaces dans votre organisation
shortTitle: Manage billing
intro: Vous pouvez vérifier votre utilisation de {% data variables.product.prodname_codespaces %} et définir des limites d’utilisation.
product: '{% data reusables.gated-features.codespaces %}'
permissions: To manage billing for Codespaces for an organization, you must be an organization owner or a billing manager.
versions:
  fpt: '*'
  ghec: '*'
type: reference
topics:
- Codespaces
- Billing
ms.openlocfilehash: a5cc1d61c560c534dc2bdf5a543097e49b336478
ms.sourcegitcommit: dc42bb4a4826b414751ffa9eed38962c3e3fea8e
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 07/13/2022
ms.locfileid: "145149723"
---
## <a name="overview"></a>Vue d’ensemble

Pour en savoir plus sur la tarification de {% data variables.product.prodname_codespaces %}, consultez « [Tarification de {% data variables.product.prodname_codespaces %}](/billing/managing-billing-for-github-codespaces/about-billing-for-codespaces#codespaces-pricing) ».

{% data reusables.codespaces.codespaces-billing %}

- En tant que propriétaire d’organisation ou responsable de facturation, vous pouvez gérer la facturation de {% data variables.product.prodname_codespaces %} pour votre organisation : [« À propos de la facturation pour mes espaces de code »](/billing/managing-billing-for-github-codespaces/about-billing-for-codespaces)

- Pour les utilisateurs, il existe un guide qui explique le fonctionnement de la facturation : [« Présentation de la facturation pour Codespaces »](/codespaces/codespaces-reference/understanding-billing-for-codespaces)

## <a name="usage-limits"></a>Limites d’utilisation

Vous pouvez définir une limite d’utilisation pour les espaces de code de votre organisation ou référentiel. Cette limite est appliquée à l’utilisation du calcul et du stockage pour {% data variables.product.prodname_codespaces %} :
 
- **Minutes de calcul :** L’utilisation du calcul est déterminée par le nombre réel de minutes utilisées par toutes les instances {% data variables.product.prodname_codespaces %} pendant qu’elles sont actives. Ces totaux sont signalés quotidiennement au service de facturation et sont facturés mensuellement. Vous pouvez définir une limite de dépense pour l’utilisation de {% data variables.product.prodname_codespaces %} dans votre organisation. Pour plus d’informations, consultez « [Gestion des limites de dépense pour Codespaces](/billing/managing-billing-for-github-codespaces/managing-spending-limits-for-codespaces) ».

- **Utilisation du stockage :** pour la facturation {% data variables.product.prodname_codespaces %}, cela inclut tous les espaces de stockage utilisés par tous les espaces de code de votre compte. Cela inclut tous les espaces de code, comme les référentiels clonés, les fichiers de configuration et les extensions, entre autres. Ces totaux sont signalés quotidiennement au service de facturation et sont facturés mensuellement. À la fin du mois, {% data variables.product.prodname_dotcom %} arrondit votre stockage au Mo le plus proche. Pour vérifier le nombre de minutes de calcul et de Go de stockage utilisés par {% data variables.product.prodname_codespaces %}, consultez « [Affichage de votre utilisation de Codespaces ».](/billing/managing-billing-for-github-codespaces/viewing-your-codespaces-usage)

## <a name="disabling-or-limiting--data-variablesproductprodname_codespaces-"></a>Désactivation ou limitation de {% data variables.product.prodname_codespaces %}

Vous pouvez désactiver l’utilisation de {% data variables.product.prodname_codespaces %} dans votre organisation ou référentiel. Pour plus d’informations, consultez « [Gestion de l’accès aux dépôts pour les codespaces de votre organisation](/codespaces/managing-codespaces-for-your-organization/managing-access-and-security-for-your-organizations-codespaces) ».

Vous pouvez également limiter les utilisateurs individuels qui peuvent utiliser {% data variables.product.prodname_codespaces %}. Pour plus d’informations, consultez « [Gestion des autorisations utilisateur pour votre organisation](/codespaces/managing-codespaces-for-your-organization/managing-user-permissions-for-your-organization) ».

Vous pouvez limiter le choix des types de machines disponibles pour les référentiels appartenant à votre organisation. Cela vous permet d’empêcher les utilisateurs d’utiliser des machines avec des ressources excessives pour leurs espaces de code. Pour plus d’informations, consultez « [Restriction de l’accès à des types de machine](/codespaces/managing-codespaces-for-your-organization/restricting-access-to-machine-types) ».

## <a name="deleting-unused-codespaces"></a>Suppression des espaces de code inutilisés

Vos utilisateurs peuvent supprimer leurs espaces de code dans https://github.com/codespaces et à partir de {% data variables.product.prodname_vscode %}. Pour réduire la taille d’un espace de code, les utilisateurs peuvent supprimer manuellement des fichiers à l’aide du terminal ou à partir de {% data variables.product.prodname_vscode_shortname %}. 

{% note %}

**Remarque :** Seule la personne qui a créé un espace de code peut le supprimer. Il n’existe actuellement aucun moyen pour les propriétaires d’organisation de supprimer des espaces de code créés au sein de leur organisation.

{% endnote %}
