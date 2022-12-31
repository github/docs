---
title: Konfigurieren des Abhängigkeitsdiagramms
intro: 'Du kannst Benutzer*innen ermöglichen, die Abhängigkeiten ihrer Projekte zu identifizieren, indem du das Abhängigkeitsdiagramm aktivierst.'
redirect_from:
  - /code-security/supply-chain-security/understanding-your-software-supply-chain/about-the-dependency-graph#enabling-the-dependency-graph
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
type: how_to
topics:
  - Dependency graph
  - Dependencies
  - Repositories
shortTitle: Configure dependency graph
ms.openlocfilehash: 24dcaac4ddd994d544f6caa7d04529e1e4a5d569
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/05/2022
ms.locfileid: '146684077'
---
## Informationen zum Abhängigkeitsdiagramm

{% data reusables.dependabot.about-the-dependency-graph %}  

Weitere Informationen findest du unter [Informationen zum Abhängigkeitsdiagramm](/code-security/supply-chain-security/understanding-your-software-supply-chain/about-the-dependency-graph).

{% ifversion fpt or ghec %}
## Grundlegendes zum Konfigurieren des Abhängigkeitsdiagramms 
Zum Generieren eines Abhängigkeitsdiagramms benötigt {% data variables.product.product_name %} den schreibgeschützten Zugriff auf das Abhängigkeitsmanifest und Sperrdateien für ein Repository. Das Abhängigkeitsdiagramm wird automatisch für alle öffentlichen Repositorys generiert. Du kannst es auch für private Repositorys aktivieren. Weitere Informationen zum Anzeigen des Abhängigkeitsdiagramms findest du unter [Erkunden der Abhängigkeiten eines Repositorys](/github/visualizing-repository-data-with-graphs/exploring-the-dependencies-of-a-repository).

{% data reusables.dependency-submission.dependency-submission-link %} {% endif %}

{% ifversion ghes %} ## Aktivieren des Abhängigkeitsdiagramms {% data reusables.dependabot.ghes-ghae-enabling-dependency-graph %}{% endif %}{% ifversion fpt or ghec %}

### Aktivieren und Deaktivieren des Abhängigkeitsdiagramms für ein privates Repository

{% data reusables.dependabot.enabling-disabling-dependency-graph-private-repo %} {% endif %}

Wenn das Abhängigkeitsdiagramm zum ersten Mal aktiviert wird, werden alle Manifest- und Sperrdateien für unterstützte Ökosysteme sofort analysiert. Das Diagramm wird in der Regel innerhalb weniger Minuten aufgefüllt. Dies kann bei Repositorys mit vielen Abhängigkeiten jedoch länger dauern. Nach der Aktivierung wird das Diagramm automatisch mit jedem Push an das Repository{% ifversion fpt or ghec %} und jedem Push an andere Repositorys im Diagramm{% endif %} aktualisiert.

{% ifversion ghes %} {% ifversion dependency-submission-api %}{% data reusables.dependency-submission.dependency-submission-link %}{% endif %} {% endif %}

## Weitere Informationsquellen

{% ifversion ghec %}- [Anzeigen von Einblicken für deine Organisation](/organizations/collaborating-with-groups-in-organizations/viewing-insights-for-your-organization) {% endif %}
- [Anzeigen und Aktualisieren von {% data variables.product.prodname_dependabot_alerts %}](/code-security/dependabot/dependabot-alerts/viewing-and-updating-dependabot-alerts)
- [Problembehandlung bei der Erkennung von anfälligen Abhängigkeiten](/github/managing-security-vulnerabilities/troubleshooting-the-detection-of-vulnerable-dependencies)
