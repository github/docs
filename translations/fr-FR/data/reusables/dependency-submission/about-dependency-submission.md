---
ms.openlocfilehash: 23a47438a4b4091ec5034671fa226eff68a08ef6
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/05/2022
ms.locfileid: "147079680"
---
L’API Soumission de dépendances vous permet d’envoyer des dépendances pour un projet. Cela vous permet d’ajouter des dépendances, comme celles résolues quand le logiciel est compilé ou généré, au graphique de dépendance {% data variables.product.prodname_dotcom %}, pour une vue d’ensemble plus complète de l’ensemble des dépendances de votre projet.

Le graphique de dépendances affiche les dépendances que vous envoyez à l’aide de l’API, en plus des dépendances identifiées à partir de fichiers manifeste ou de verrouillage dans le référentiel (par exemple un fichier `package-lock.json` dans un projet JavaScript). Pour plus d’informations sur l’affichage du graphique de dépendance, consultez « [Exploration des dépendances d’un référentiel](/code-security/supply-chain-security/understanding-your-software-supply-chain/exploring-the-dependencies-of-a-repository#viewing-the-dependency-graph) ». 

Les dépendances envoyées reçoivent des {% data variables.product.prodname_dependabot_alerts %} et {% data variables.product.prodname_dependabot_security_updates %} pour toutes les vulnérabilités connues. Vous recevez uniquement des {% data variables.product.prodname_dependabot_alerts %} pour les dépendances provenant de l’un des [écosystèmes pris en charge](https://github.com/github/advisory-database#supported-ecosystems) par {% data variables.product.prodname_advisory_database %}. Les dépendances envoyées ne sont pas exposées dans la révision des dépendances ou dans les insights de dépendance de votre organisation.
