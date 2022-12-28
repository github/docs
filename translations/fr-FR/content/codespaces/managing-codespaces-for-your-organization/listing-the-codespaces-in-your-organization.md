---
title: Liste des codespaces de votre organisation
shortTitle: List organization codespaces
intro: Vous pouvez lister tous les codespaces actuellement actifs ou arrêtés de votre organisation.
product: '{% data reusables.gated-features.codespaces %}'
permissions: 'To list all of the current codespaces for your organization, you must be an organization owner.'
versions:
  fpt: '*'
  ghec: '*'
type: how_to
topics:
  - Codespaces
  - Administrator
ms.openlocfilehash: 1353548a4520cb69eee85437a35804faf6724c68
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 10/25/2022
ms.locfileid: '148106476'
---
## Vue d’ensemble

En tant que propriétaire de l’organisation, vous pouvez lister tous les codespaces actuellement actifs et arrêtés de votre organisation. Vous voudrez probablement le faire pour vérifier combien de codespaces les utilisateurs créent afin de vous assurer qu’ils n’entraînent pas de coûts superflus. Pour plus d’informations sur les tarifs, consultez « [À propos de la facturation pour GitHub Codespaces](/billing/managing-billing-for-github-codespaces/about-billing-for-github-codespaces) ».

Le moyen le plus simple de lister les codespaces d’une organisation consiste à utiliser {% data variables.product.prodname_cli %}. Vous pouvez également utiliser l’API REST, qui fournit plus d’informations sur chaque codespace.

Pour plus d’informations sur la consultation de l’utilisation actuelle totale des {% data variables.product.prodname_codespaces %} pour votre organisation ou entreprise, et sur la génération d’un rapport détaillé, consultez « [Consultation de votre utilisation des {% data variables.product.prodname_github_codespaces %}](/billing/managing-billing-for-github-codespaces/viewing-your-github-codespaces-usage) ».

### Utilisation de {% data variables.product.prodname_cli %} pour lister les codespaces

Pour lister tous les codespaces actuels d’une organisation spécifiée, utilisez la commande suivante.

```shell{:copy}
gh codespace list --org ORGANIZATION 
```

Cette commande retourne une liste qui comprend les informations suivantes pour chaque codespace : 
    - Le nom et le nom d’affichage 
    - L’utilisateur qui a créé le codespace
    - Le dépôt et la branche
    - L’état actuel du codespace

Pour lister tous les codespaces actuels d’une organisation qui a été créée par un utilisateur spécifique, utilisez la commande suivante.

```shell{:copy}
gh codespace list --org ORGANIZATION --user USER
```

{% note %}

**Remarque** : Dans les commandes ci-dessus, remplacez `ORGANIZATION` par le nom de l’organisation que vous interrogez. Vous devez être propriétaire de l’organisation.

{% endnote %}

### Utilisation de l’API REST pour lister les codespaces

Vous pouvez utiliser le point de terminaison d’API `/orgs/{org}/codespaces` comme méthode alternative pour lister les codespaces actuels d’une organisation. Cela retourne plus d’informations que {% data variables.product.prodname_cli %}, par exemple les détails du type de machine.

Pour plus d’informations sur ce point de terminaison, consultez « [Organisations de codespaces](/rest/codespaces/organizations#list-codespaces-for-the-organization) ».
