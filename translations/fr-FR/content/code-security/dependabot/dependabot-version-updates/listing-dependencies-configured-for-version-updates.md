---
title: Liste des dépendances configurées pour les mises à jour de version
intro: 'Vous pouvez afficher les dépendances que {% data variables.product.prodname_dependabot %} supervise pour les mises à jour.'
redirect_from:
  - /github/administering-a-repository/listing-dependencies-configured-for-version-updates
  - /code-security/supply-chain-security/listing-dependencies-configured-for-version-updates
  - /code-security/supply-chain-security/keeping-your-dependencies-updated-automatically/listing-dependencies-configured-for-version-updates
versions:
  fpt: '*'
  ghec: '*'
  ghes: '*'
type: how_to
topics:
  - Repositories
  - Dependabot
  - Version updates
  - Dependencies
shortTitle: List configured dependencies
ms.openlocfilehash: 6da514616c7091fb3ac4f874f68b5951ca23412b
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 10/25/2022
ms.locfileid: '148108780'
---
{% data reusables.dependabot.beta-security-and-version-updates %} {% data reusables.dependabot.enterprise-enable-dependabot %}

## Affichage des dépendances supervisées par {% data variables.product.prodname_dependabot %}

Une fois que vous avez activé les mises à jour de version, vous pouvez vérifier que votre configuration est correcte sous l’onglet **{% data variables.product.prodname_dependabot %}** dans le graphe de dépendances du dépôt. Pour plus d’informations, consultez « [Configuration des mises à jour de version {% data variables.product.prodname_dependabot %}](/code-security/supply-chain-security/keeping-your-dependencies-updated-automatically/enabling-and-disabling-dependabot-version-updates) ».

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.accessing-repository-graphs %} {% data reusables.repositories.click-dependency-graph %} {% data reusables.dependabot.click-dependabot-tab %}
1. Si vous le souhaitez, vous pouvez afficher les fichiers supervisés pour un gestionnaire de package en cliquant sur l’icône {% octicon "kebab-horizontal" aria-label="The horizontal kebab icon" %} correspondante.
  ![Fichiers de dépendance supervisés](/assets/images/help/dependabot/monitored-dependency-files.png)

Si des dépendances sont manquantes, vérifiez si les fichiers journaux contiennent des erreurs. Si des gestionnaires de package sont manquants, passez en revue le fichier de configuration.

## Affichage des fichiers journaux {% data variables.product.prodname_dependabot %}

1. Sous l’onglet **{% data variables.product.prodname_dependabot %}** , cliquez **Dernière vérification il y a *TEMPS*** pour voir le fichier journal que {% data variables.product.prodname_dependabot %} a généré lors de la dernière vérification des mises à jour de version.
  ![Afficher le fichier journal](/assets/images/help/dependabot/last-checked-link.png)
2. Si vous le souhaitez, pour réexécuter la vérification de version, cliquez sur **Rechercher les mises à jour**.
  ![Rechercher les mises à jour](/assets/images/help/dependabot/check-for-updates.png)
