---
title: À propos de la vérification des dépendances
intro: 'La révision des dépendances vous permet d’intercepter les dépendances non sécurisées avant de les introduire dans votre environnement et fournit des informations sur la licence, les dépendants et l’âge des dépendances.'
product: '{% data reusables.gated-features.dependency-review %}'
shortTitle: Dependency review
versions:
  fpt: '*'
  ghes: '>= 3.2'
  ghae: '*'
  ghec: '*'
type: overview
topics:
  - Advanced Security
  - Dependency review
  - Vulnerabilities
  - Dependencies
  - Pull requests
redirect_from:
  - /code-security/supply-chain-security/about-dependency-review
ms.openlocfilehash: 36a80324e75f6ffbe96a2b46016d56561da931f0
ms.sourcegitcommit: 73b91dd4cdf592eadec4252319379d6fbe92858e
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 11/14/2022
ms.locfileid: '148164113'
---
## À propos de la vérification des dépendances

{% data reusables.dependency-review.feature-overview %}  

Si une demande de tirage (pull request) cible la branche par défaut de votre dépôt et contient des modifications apportées aux manifestes du package ou aux fichiers de verrouillage, vous pouvez afficher une révision des dépendances pour voir ce qui a changé. La révision des dépendances inclut des détails sur les modifications apportées aux dépendances indirectes dans les fichiers de verrouillage et vous indique si l’une des dépendances ajoutées ou mises à jour contient des vulnérabilités connues.

Parfois, vous pouvez simplement mettre à jour la version d’une dépendance dans un manifeste et générer une demande de tirage. Toutefois, si la version mise à jour de cette dépendance directe a également des dépendances mises à jour, votre demande de tirage peut avoir plus de modifications que prévu. La révision des dépendances pour chaque manifeste et fichier de verrouillage offre un moyen simple de voir ce qui a changé et de déterminer si l’une des nouvelles versions de dépendances contient des vulnérabilités connues.

En vérifiant les révisions de dépendances dans une demande de tirage et en changeant les dépendances marquées comme vulnérables, vous pouvez éviter l’ajout de vulnérabilités à votre projet. Pour plus d’informations sur le fonctionnement de la révision des dépendances, consultez [« Examen des modifications de dépendances dans une demande de tirage](/pull-requests/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/reviewing-dependency-changes-in-a-pull-request) ».

Pour plus d’informations sur la configuration de la révision des dépendances, consultez « [Configuration de la révision des dépendances](/code-security/supply-chain-security/understanding-your-software-supply-chain/configuring-dependency-review) ».

Les {% data variables.product.prodname_dependabot_alerts %} trouvent des vulnérabilités qui figurent déjà dans vos dépendances, mais il vaut bien mieux éviter d’introduire des problèmes potentiels que de résoudre les problèmes à une date ultérieure. Pour plus d’informations sur les {% data variables.product.prodname_dependabot_alerts %}, consultez « [À propos des {% data variables.product.prodname_dependabot_alerts %}](/github/managing-security-vulnerabilities/about-alerts-for-vulnerable-dependencies#dependabot-alerts-for-vulnerable-dependencies) ».

La révision des dépendances prend en charge les mêmes langages et les mêmes écosystèmes de gestion des packages que le graphe de dépendances. Pour plus d’informations, consultez « [À propos du graphe des dépendances](/github/visualizing-repository-data-with-graphs/about-the-dependency-graph#supported-package-ecosystems) ».

Pour plus d’informations sur les fonctionnalités de la chaîne d’approvisionnement disponibles sur {% data variables.product.product_name %}, consultez « [À propos de la sécurité de la chaîne d’approvisionnement](/code-security/supply-chain-security/understanding-your-software-supply-chain/about-supply-chain-security) ».

{% ifversion ghec or ghes %}
## Activation de la révision des dépendances

La fonctionnalité de révision des dépendances devient disponible quand vous activez le graphe de dépendances. Pour plus d’informations, consultez « {% ifversion ghec %}[Activation du graphe de dépendances](/code-security/supply-chain-security/understanding-your-software-supply-chain/about-the-dependency-graph#enabling-the-dependency-graph){% elsif ghes %}[Activation du graphe de dépendances pour votre entreprise](/admin/code-security/managing-supply-chain-security-for-your-enterprise/enabling-the-dependency-graph-for-your-enterprise){% endif %} ».
{% endif %}

{% ifversion fpt or ghec or ghes > 3.5 or ghae > 3.5 %}
## Application de la révision des dépendances

L’action est disponible pour tous les référentiels publics {% ifversion fpt or ghec %}, ainsi que les référentiels privés{% endif %}avec {% data variables.product.prodname_GH_advanced_security %} activé.

{% data reusables.dependency-review.action-enterprise %}

Vous pouvez utiliser {% data variables.product.prodname_dependency_review_action %} dans votre référentiel pour appliquer des évaluations de dépendances sur vos demandes de tirage (pull requests). L’action analyse les versions vulnérables des dépendances introduites par les modifications de version de package dans les demandes de tirage et vous avertit des vulnérabilités de sécurité associées. Cela vous donne une meilleure visibilité de ce qui change dans une demande de tirage et contribue à éviter l’ajout de vulnérabilités à votre dépôt. Pour plus d’informations, consultez [`dependency-review-action`](https://github.com/actions/dependency-review-action).

![Exemple d’action de révision des dépendances](/assets/images/help/graphs/dependency-review-action.png)

Par défaut, la vérification {% data variables.product.prodname_dependency_review_action %} échoue si elle découvre des packages vulnérables. Une vérification ayant échoué empêche la fusion d’une demande de tirage lorsque le propriétaire du référentiel requiert la vérification de l’évaluation des dépendances. Pour plus d’informations, consultez « [À propos des branches protégées](/repositories/configuring-branches-and-merges-in-your-repository/defining-the-mergeability-of-pull-requests/about-protected-branches#require-status-checks-before-merging) ».

L’action utilise l’API REST de révision des dépendances pour obtenir la différence des modifications de dépendance entre le commit de base et le commit de tête. Vous pouvez utiliser l’API de révision des dépendances pour obtenir la différence des modifications de dépendance, y compris les données de vulnérabilité, entre deux commits sur un dépôt. Pour plus d’informations, consultez « [Révision des dépendances »](/rest/reference/dependency-graph#dependency-review).

{% ifversion dependency-review-action-configuration %} Vous pouvez configurer {% data variables.product.prodname_dependency_review_action %} pour mieux répondre à vos besoins. Par exemple, vous pouvez spécifier le niveau de gravité qui fera échouer l’action{% ifversion dependency-review-action-licenses %} ou définir une liste d’autorisation ou de refus pour les licences à analyser{% endif %}. Pour plus d’informations, consultez « [Configuration de l’évaluation des dépendances](/code-security/supply-chain-security/understanding-your-software-supply-chain/configuring-dependency-review#configuring-the-dependency-review-github-action) ». {% endif %}

{% endif %}

