---
title: Résolution des problèmes liés au graphe de dépendances
intro: 'Si les informations de dépendance signalées par le graphe des dépendances ne sont pas ce que vous attendez, il existe un certain nombre de points à prendre en compte et diverses choses que vous pouvez vérifier.'
shortTitle: Troubleshoot dependency graph
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
type: how_to
topics:
  - Troubleshooting
  - Errors
  - Dependencies
  - Vulnerabilities
  - Dependency graph
  - CVEs
  - Repositories
ms.openlocfilehash: 2a36a74f77e7dcf2366adfc581da25465a74b172
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 10/25/2022
ms.locfileid: '148108412'
---
{% data reusables.dependabot.result-discrepancy %}

## Le graphe de dépendances ne trouve-t-il des dépendances que dans les manifestes et les fichiers de verrouillage ?

Le graphe des dépendances inclut {% ifversion dependency-submission-api %}automatiquement {% endif %}des informations sur les dépendances qui sont explicitement déclarées dans votre environnement. Autrement dit, les dépendances spécifiées dans un manifeste ou un fichier de verrouillage. En outre, le graphe de dépendances inclut généralement les dépendances transitives, même si elles ne sont pas spécifiées dans un fichier de verrouillage, en examinant les dépendances des dépendances dans un fichier manifeste.

Le graphe des dépendances n’inclut pas {% ifversion dependency-submission-api %}automatiquement{% endif %}les dépendances « lâches ». Les dépendances « lâches » sont des fichiers individuels qui sont copiés à partir d’une autre source et archivés directement dans le dépôt ou dans une archive (par exemple, un fichier ZIP ou JAR), plutôt qu’utilisés comme références dans le manifeste ou le fichier de verrouillage d’un gestionnaire de package. 

{% ifversion dependency-submission-api %}Cependant, vous pouvez utiliser l’API de soumission de dépendances (bêta) pour ajouter des dépendances au graphe de dépendances d’un projet, même si les dépendances ne sont pas déclarées dans un manifeste ou un fichier de verrouillage, comme les dépendances résolues lorsqu’un projet est généré. Le graphe des dépendances affiche les dépendances soumises regroupées par écosystème, mais séparément des dépendances analysées à partir du manifeste ou des fichiers de verrouillage. Pour plus d’informations sur l’API de soumission de dépendances, consultez « [Utilisation de l’API de soumission de dépendances](/code-security/supply-chain-security/understanding-your-software-supply-chain/using-the-dependency-submission-api) ».{% endif %}

**Point à vérifier** : La dépendance manquante pour un composant qui n’est pas spécifié se trouve-t-elle dans le manifeste ou dans le fichier de verrouillage du dépôt ?

## Le graphe de dépendances détecte-t-il les dépendances spécifiées avec des variables ?

Le graphe de dépendances analyse les manifestes à mesure qu’ils sont poussés (push) vers {% data variables.product.prodname_dotcom %}. Ainsi, le graphe de dépendances n’a pas accès à l’environnement de génération du projet. Il ne peut donc pas résoudre les variables utilisées dans les manifestes. Si vous utilisez des variables dans un manifeste pour spécifier le nom ou plus généralement la version d’une dépendance, cette dépendance n’est pas incluse {% ifversion dependency-submission-api %}automatiquement {% endif %}dans le graphe de dépendances.

{% ifversion dependency-submission-api %}Cependant, vous pouvez utiliser l’API de soumission de dépendances (bêta) pour ajouter des dépendances au graphe de dépendances d’un projet, même si les dépendances sont uniquement résolues lorsqu’un projet est généré. Pour plus d’informations sur l’API de soumission de dépendances, consultez « [Utilisation de l’API de soumission de dépendances](/code-security/supply-chain-security/understanding-your-software-supply-chain/using-the-dependency-submission-api) ».{% endif %}

**Point à vérifier** : La dépendance manquante est-elle déclarée dans le manifeste avec une variable pour son nom ou sa version ?

## Existe-t-il des limites qui affectent les données du graphe de dépendances ?

Oui, le graphe de dépendances a deux catégories de limites :

1. **Limites de traitement**

    Celles-ci affectent le graphe de dépendances affiché dans {% data variables.product.prodname_dotcom %} et empêchent également la création d’{% data variables.product.prodname_dependabot_alerts %}

    Les manifestes de plus de 0,5 Mo sont traités uniquement pour les comptes d’entreprise. Pour les autres comptes, les manifestes de plus de 0,5 Mo sont ignorés et ne créent pas d’{% data variables.product.prodname_dependabot_alerts %}.

    Par défaut, {% data variables.product.prodname_dotcom %} ne traite pas plus de 20 manifestes par dépôt. Les {% data variables.product.prodname_dependabot_alerts %} ne sont pas créées pour les manifestes au-delà de cette limite. Si vous devez augmenter la limite, contactez le {% data variables.contact.contact_support %}. 

2. **Limites de visualisation**

    Celles-ci affectent les éléments affichés dans le graphe de dépendances dans {% data variables.product.prodname_dotcom %}. Toutefois, elles n’affectent pas les {% data variables.product.prodname_dependabot_alerts %} qui sont créées.

    L’affichage Dépendances du graphe de dépendances d’un dépôt montre uniquement 100 manifestes. En règle générale, cette limite est suffisante, car elle est beaucoup plus élevée que la limite de traitement décrite ci-dessus. Dans les situations où la limite de traitement est supérieure à 100, les {% data variables.product.prodname_dependabot_alerts %} sont toujours créées pour tous les manifestes qui ne sont pas affichés dans {% data variables.product.prodname_dotcom %}.

**Point à vérifier** : La dépendance manquante se trouve-t-elle dans un fichier manifeste de plus de 0,5 Mo ou dans un dépôt avec un grand nombre de manifestes ?

## Pour aller plus loin

- « [À propos du graphe de dépendances](/code-security/supply-chain-security/understanding-your-software-supply-chain/about-the-dependency-graph) »
- « [Gestion des paramètres de sécurité et d’analyse pour votre dépôt](/github/administering-a-repository/managing-security-and-analysis-settings-for-your-repository) »
- « [Résolution des problèmes de détection des dépendances vulnérables](/code-security/dependabot/working-with-dependabot/troubleshooting-the-detection-of-vulnerable-dependencies) »{% ifversion fpt or ghec or ghes %}
- « [Résolution des erreurs {% data variables.product.prodname_dependabot %}](/github/managing-security-vulnerabilities/troubleshooting-dependabot-errors) »{% endif %}
