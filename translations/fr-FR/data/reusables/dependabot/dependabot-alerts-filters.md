---
ms.openlocfilehash: dfbf31bbfeea726bcd0c1852d881aefc8f149c0e
ms.sourcegitcommit: e8c012864f13f9146e53fcb0699e2928c949ffa8
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 11/09/2022
ms.locfileid: "148159783"
---
Vous pouvez trier et filtrer les {% data variables.product.prodname_dependabot_alerts %} en tapant des filtres sous forme de paires `key:value` dans la barre de recherche. 

| Option | Description | Exemple | 
|:---|:---|:---|
| `ecosystem` | Affiche des alertes pour l’écosystème sélectionné | Utiliser `ecosystem:npm` pour afficher des {% data variables.product.prodname_dependabot_alerts %} pour npm |{% ifversion fpt or ghec or ghes > 3.5 or ghae > 3.5 %}
| `has` | Affiche les alertes répondant aux critères de filtre sélectionnés | Utiliser `has:patch` pour afficher les alertes liées aux avis qui comportent un correctif{% ifversion dependabot-alerts-vulnerable-calls %}</br>Utiliser `has:vulnerable-calls` pour afficher les alertes relatives aux appels aux fonctions vulnérables{% endif %} |{% endif %}
| `is` | Affiche les alertes en fonction de leur état | Utiliser `is:open` pour afficher les alertes ouvertes |
| `manifest` | Affiche les alertes du manifeste sélectionné | Utiliser `manifest:webwolf/pom.xml` pour afficher les alertes sur le fichier pom.xml de l’application webwolf |
| `package` | Affiche les alertes du package sélectionné | Utiliser `package:django` pour afficher les alertes pour django |
| `resolution` | Affiche les alertes de l’état de résolution sélectionné | Utiliser `resolution:no-bandwidth` pour afficher les alertes précédemment parquées en raison d’un manque de ressources ou d’un délai de correction |
| `repo` |  Affiche les alertes en fonction du dépôt auquel elles sont liées</br>Notez que ce filtre est disponible uniquement sur les vues d’ensemble de la sécurité. Pour plus d’informations, consultez « [À propos des vues d’ensemble de la sécurité](/code-security/security-overview/about-the-security-overview) ». | Utiliser `repo:octocat-repo` pour afficher les alertes dans le dépôt appelé `octocat-repo` |{%- ifversion dependabot-alerts-development-label %}
| `scope` | Affiche des alertes en fonction de l’étendue de la dépendance à laquelle elles sont liées | Utiliser `scope:development` pour afficher les alertes des dépendances utilisées uniquement pendant le développement |{% endif %}
| `severity` | Affiche les alertes en fonction de leur niveau de gravité | Utiliser `severity:high` pour afficher les alertes dont le niveau de gravité est élevé |{%- ifversion dependabot-most-important-sort-option %}
| `sort` | Affiche les alertes en fonction de l’ordre de tri sélectionné | L’option de tri par défaut des alertes est `sort:most-important`, qui permet de les classer par importance</br>Utiliser `sort:newest` pour afficher les dernières alertes signalées par {% data variables.product.prodname_dependabot %} |{% endif %}
