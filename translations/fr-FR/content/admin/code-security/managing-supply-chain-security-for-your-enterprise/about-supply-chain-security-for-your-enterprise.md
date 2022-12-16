---
title: À propos de la sécurité de la chaîne d’approvisionnement de votre entreprise
intro: Vous pouvez activer des fonctionnalités qui aident vos développeurs à comprendre et à mettre à jour les dépendances sur lesquelles repose leur code.
shortTitle: About supply chain security
permissions: ''
versions:
  ghes: '*'
  ghae: '*'
type: how_to
topics:
  - Enterprise
  - Security
  - Dependency graph
ms.openlocfilehash: 7f1c658285e88065ad1a232fc13c9186be143119
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 10/25/2022
ms.locfileid: '148107196'
---
Vous pouvez autoriser les utilisateurs à identifier les dépendances de leurs projets en {% ifversion ghes %}activant{% elsif ghae %}utilisant{% endif %} le graphe de dépendances pour {% data variables.location.product_location %}. Pour plus d’informations, consultez « {% ifversion ghes %}[Activation du graphe de dépendances pour votre entreprise](/admin/code-security/managing-supply-chain-security-for-your-enterprise/enabling-the-dependency-graph-for-your-enterprise){% elsif ghae %}[À propos du graphe de dépendances](/code-security/supply-chain-security/understanding-your-software-supply-chain/about-the-dependency-graph){% endif %} ».

Vous pouvez aussi autoriser les utilisateurs de {% data variables.location.product_location %} à rechercher et corriger les vulnérabilités dans leurs dépendances de code en activant les {% data variables.product.prodname_dependabot_alerts %}{% ifversion ghes %} et les {% data variables.product.prodname_dependabot_updates %}{% endif %}. Pour plus d’informations, consultez « [Activation de {% data variables.product.prodname_dependabot %} pour votre entreprise](/admin/configuration/configuring-github-connect/enabling-dependabot-for-your-enterprise) ».

Après avoir activé les {% data variables.product.prodname_dependabot_alerts %}, vous pouvez afficher les données de vulnérabilité de {% data variables.product.prodname_advisory_database %} sur {% data variables.location.product_location %} et synchroniser manuellement les données. Pour plus d’informations, consultez « [Consultation des données de vulnérabilité de votre entreprise](/admin/code-security/managing-supply-chain-security-for-your-enterprise/viewing-the-vulnerability-data-for-your-enterprise) ».
