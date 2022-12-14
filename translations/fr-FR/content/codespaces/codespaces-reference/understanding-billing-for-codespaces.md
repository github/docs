---
title: Présentation de la facturation pour Codespaces
intro: Découvrez comment votre utilisation de {% data variables.product.prodname_codespaces %} est facturée.
versions:
  fpt: '*'
  ghec: '*'
redirect_from:
- /github/developing-online-with-codespaces/about-billing-for-codespaces
- /codespaces/getting-started-with-codespaces/about-billing-for-codespaces
- /codespaces/codespaces-reference/about-billing-for-codespaces
type: reference
topics:
- Codespaces
- Billing
product: '{% data reusables.gated-features.codespaces %}'
shortTitle: Understanding billing
ms.openlocfilehash: e8a5b24808e4d1c8dbf216933c1a519c26a46ad4
ms.sourcegitcommit: 22d665055b1bee7a5df630385e734e3a149fc720
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 07/13/2022
ms.locfileid: "145109340"
---
Cet article explique comment la facturation fonctionne pour vos espaces de code et explique comment le responsable de facturation de votre organisation peut vous aider.

## <a name="getting-access-to--data-variablesproductprodname_codespaces-"></a>Obtention de l’accès à {% data variables.product.prodname_codespaces %}

L’administrateur de votre organisation peut limiter l’utilisation de {% data variables.product.prodname_codespaces %} à des comptes personnels spécifiques. Pour obtenir l’accès, vous devez contacter votre responsable de facturation. Pour plus d’informations, consultez « [Gestion de l’accès et de la sécurité pour vos espaces de code](/codespaces/managing-your-codespaces/managing-access-and-security-for-your-codespaces) ».

## <a name="how-much-it-costs-to-use--data-variablesproductprodname_codespaces-"></a>Combien coûte l’utilisation de {% data variables.product.prodname_codespaces %}

Pour voir les tarifs de l’utilisation de {% data variables.product.prodname_codespaces %}, consultez « [Tarification de {% data variables.product.prodname_codespaces %}](/billing/managing-billing-for-github-codespaces/about-billing-for-codespaces#codespaces-pricing) ».

## <a name="how-your-codespace-usage-is-billed"></a>Facturation de l’utilisation de votre espace de code

Votre espace de code est facturé pour ses minutes de calcul et pour la quantité de stockage qu’il utilise sur le disque.

Si vous activez la création préalable des espaces de code, cela entraîne des frais supplémentaires. Pour plus d’informations, consultez « [À propos des prébuilds Codespaces](/codespaces/prebuilding-your-codespaces/about-codespaces-prebuilds#about-billing-for-codespaces-prebuilds) ».

### <a name="understanding-what-compute-minutes-are"></a>Présentation des minutes de calcul
Votre espace de code vous est facturé pour le nombre de minutes où il est actif. Si votre fenêtre d’espace de code reste inactive pendant 30 minutes, elle s’arrête automatiquement et la facturation de calcul de l’espace de code se termine jusqu’à ce que vous redémarriez l’espace de code.

### <a name="understanding-how-codespace-storage-is-billed"></a>Présentation de la façon dont le stockage d’espace de code est facturé
Pour {% data variables.product.prodname_codespaces %}, le stockage est défini de manière à inclure tous les fichiers relatifs à votre espace de code, tels que le dépôt cloné, les fichiers de configuration et les extensions, entre autres. Ce stockage est facturé pendant que votre espace de code est arrêté. La facturation du stockage d’un espace de code se termine quand vous le supprimez manuellement de https://github.com/codespaces.

## <a name="how-spending-limits-work"></a>Fonctionnement des limites de dépense

Pour que votre organisation puisse utiliser {% data variables.product.prodname_codespaces %}, votre responsable de facturation doit définir une limite de dépense. Pour plus d’informations, consultez « [Gestion des limites de dépense pour {% data variables.product.prodname_codespaces %}](/billing/managing-billing-for-github-codespaces/managing-spending-limits-for-codespaces) ». 

## <a name="exporting-changes-when-you-have-reached-your-spending-limit"></a>Exportation des modifications quand vous avez atteint votre limite de dépense

{% data reusables.codespaces.exporting-changes %}

## <a name="checking-your-current-usage-and-limits"></a>Vérification de votre utilisation et de vos limites actuelles
Si vous devez vérifier votre utilisation actuelle ou votre limite de dépense actuelle, contactez le responsable de facturation de votre organisation. Pour plus d’informations, consultez « [Affichage de votre utilisation de Codespaces](/billing/managing-billing-for-github-codespaces/viewing-your-codespaces-usage) ».

## <a name="codespaces-can-be-automatically-deleted"></a>Les espaces de code peuvent être supprimés automatiquement

Votre espace de code est automatiquement supprimé quand vous êtes supprimé d’une organisation ou d’un dépôt.

## <a name="deleting-your-unused-codespaces"></a>Suppression de vos espaces de code inutilisés

Vous pouvez supprimer manuellement vos espaces de code dans https://github.com/codespaces et à partir de {% data variables.product.prodname_vscode %}. Pour réduire la taille d’un espace de code, vous pouvez supprimer manuellement des fichiers à l’aide du terminal ou à partir de {% data variables.product.prodname_vscode %}.

## <a name="further-reading"></a>Pour aller plus loin

- « [Gestion de la facturation pour Codespaces dans votre organisation](/codespaces/managing-codespaces-for-your-organization/managing-billing-for-codespaces-in-your-organization) »
