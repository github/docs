---
title: Partage d’actions et de workflows au sein de votre entreprise
intro: Vous pouvez partager une action ou un workflow avec votre entreprise sans publier l’action ou le workflow de manière publique.
versions:
  feature: internal-actions
type: tutorial
topics:
  - Actions
  - Action development
shortTitle: Share with your enterprise
ms.openlocfilehash: 90541af9dfbb3c5f8ea2384de4a291336951434f
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/11/2022
ms.locfileid: '145066877'
---
## À propos de l’accès {% data variables.product.prodname_actions %} aux dépôts internes

Si votre organisation appartient à un compte d’entreprise, vous pouvez partager des actions et des workflows au sein de votre entreprise sans les publier publiquement. Pour cela, vous devez autoriser les workflows {% data variables.product.prodname_actions %} à accéder à un dépôt interne qui contient l’action ou le workflow à partager. 

Les actions et les workflows qui sont stockés dans le dépôt interne peuvent être utilisés dans des workflows définis dans d’autres dépôts privés et internes appartenant à la même organisation, ou à toute organisation appartenant à l’entreprise. Les actions et les workflows qui sont stockés dans des dépôts internes ne peuvent pas être utilisés dans des dépôts publics.

{% warning %}

**Avertissement** : {% data reusables.actions.outside-collaborators-internal-actions %}

{% endwarning %}

## Partage d’actions et de workflows au sein de votre entreprise

1. Stockez l’action ou le workflow dans un dépôt interne. Pour plus d’informations, consultez « [À propos des dépôts](/repositories/creating-and-managing-repositories/about-repositories#about-internal-repositories) ».
1. Configurez le dépôt pour autoriser l’accès aux workflows situés dans d’autres dépôts privés et internes. Pour plus d’informations, consultez « [Gestion des paramètres {% data variables.product.prodname_actions %} pour un dépôt](/repositories/managing-your-repositorys-settings-and-features/enabling-features-for-your-repository/managing-github-actions-settings-for-a-repository#allowing-access-to-components-in-an-internal-repository) ».

## Pour aller plus loin

- « [À propos des comptes d’entreprise](/admin/overview/about-enterprise-accounts) »
- « [Réutilisation des workflows](/actions/using-workflows/reusing-workflows) »
