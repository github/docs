---
title: Untersuchen der Abhängigkeiten eines Repositorys
intro: 'Du kannst das Abhängigkeitsdiagramm verwenden, um die Pakete, von denen dein Projekt abhängt{% ifversion fpt or ghec %}, und die Repositorys, die davon abhängig sind, anzuzeigen{% endif %}. Darüber hinaus kannst du alle ermittelten Sicherheitsrisiken in ihren Abhängigkeiten anzeigen.'
redirect_from:
  - /articles/listing-the-packages-that-a-repository-depends-on
  - /github/visualizing-repository-data-with-graphs/listing-the-packages-that-a-repository-depends-on
  - /articles/listing-the-projects-that-depend-on-a-repository
  - /github/visualizing-repository-data-with-graphs/listing-the-projects-that-depend-on-a-repository
  - /github/visualizing-repository-data-with-graphs/exploring-the-dependencies-and-dependents-of-a-repository
  - /github/visualizing-repository-data-with-graphs/exploring-the-dependencies-of-a-repository
  - /code-security/supply-chain-security/exploring-the-dependencies-of-a-repository
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
shortTitle: Explore dependencies
ms.openlocfilehash: f3735844ad8bcb8fba799723f30a3d55e41ec158
ms.sourcegitcommit: 5f9527483381cfb1e41f2322f67c80554750a47d
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/11/2022
ms.locfileid: '147882731'
---
<!--For this article in earlier GHES versions, see /content/github/visualizing-repository-data-with-graphs-->

## Anzeigen des Abhängigkeitsdiagramms

Das Abhängigkeitsdiagramm zeigt die Abhängigkeiten{% ifversion fpt or ghec %} und abhängigen Elemente{% endif %} deines Repositorys. Informationen zur Erkennung von Abhängigkeiten und den unterstützten Ökosystemen findest du unter [Informationen zum Abhängigkeitsdiagramm](/github/visualizing-repository-data-with-graphs/about-the-dependency-graph).

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.accessing-repository-graphs %} {% data reusables.repositories.click-dependency-graph %}{% ifversion fpt or ghec %}
4. Klicke optional unter „Abhängigkeitsdiagramm“ auf **Abhängige Elemente**.
![Registerkarte „Abhängige Elemente“ auf der Seite „Abhängigkeitsdiagramm“](/assets/images/help/graphs/dependency-graph-dependents-tab.png){% endif %}

{% ifversion ghes %} Enterprise-Besitzer*innen können das Abhängigkeitsdiagramm auf Unternehmensebene konfigurieren. Weitere Informationen findest du unter [Aktivieren des Abhängigkeitsdiagramms für dein Unternehmen](/admin/code-security/managing-supply-chain-security-for-your-enterprise/enabling-the-dependency-graph-for-your-enterprise).
{% endif %}

### Abhängigkeitsansicht

{% ifversion fpt or ghec %} Abhängigkeiten werden nach Ökosystem gruppiert. Du kannst eine Abhängigkeit erweitern, um ihre Abhängigkeiten anzuzeigen.  Abhängigkeiten von privaten Repositorys, privaten Paketen oder nicht erkannten Dateien werden im Nur-Text-Format angezeigt. Wenn sich der Paket-Manager der Abhängigkeit in einem öffentlichen Repository befindet, zeigt {% data variables.product.product_name %} einen Link zu diesem Repository an.

{% ifversion dependency-submission-api %} Abhängigkeiten, die mit der Abhängigkeitsübermittlungs-API (Beta) an ein Projekt übermittelt wurden, werden zwar nach Ökosystemen gruppiert, aber getrennt von Abhängigkeiten angezeigt, die über Manifest- oder Sperrdateien in dem Repository identifiziert wurden. Diese übermittelten Abhängigkeiten werden im Abhängigkeitsdiagramm als „Momentaufnahmeabhängigkeiten“ angezeigt, da sie als Momentaufnahme oder Gruppe von Abhängigkeiten übermittelt wurden. Weitere Informationen zur Verwendung der Abhängigkeitsübermittlungs-API findest du unter [Verwenden der Abhängigkeitsübermittlungs-API](/code-security/supply-chain-security/understanding-your-software-supply-chain/using-the-dependency-submission-api).
{% endif %}

Wenn Sicherheitsrisiken im Repository erkannt wurden, werden diese oben in der Ansicht für Benutzer*innen mit Zugriff auf {% data variables.product.prodname_dependabot_alerts %} angezeigt.

![Abhängigkeitsdiagramm](/assets/images/help/graphs/dependencies_graph.png)

{% endif %}

{% ifversion ghes or ghae %} Alle direkten und indirekten Abhängigkeiten, die im Manifest oder in Sperrdateien des Repositorys angegeben sind, werden nach Ökosystem aufgeführt bzw. gruppiert. Wenn Sicherheitsrisiken im Repository erkannt wurden, werden diese oben in der Ansicht für Benutzer*innen mit Zugriff auf {% data variables.product.prodname_dependabot_alerts %} angezeigt.

![Abhängigkeitsdiagramm](/assets/images/help/graphs/dependencies_graph_server.png)

{% note %}

**Hinweis:** {% data variables.product.product_name %} füllt die Ansicht **Abhängige Elemente** nicht auf.

{% endnote %}

{% endif %}

{% ifversion fpt or ghec %}
### Ansicht der abhängigen Elemente

Bei öffentlichen Repositorys zeigt die Ansicht der abhängigen Elemente, wie das Repository von anderen Repositorys verwendet wird. Wenn du nur die Repositorys anzeigen möchtest, die eine Bibliothek in einem Paket-Manager enthalten, klicke direkt oberhalb der Liste der abhängigen Repositorys auf **ANZAHL Pakete**. Bei der Anzahl der abhängigen Elemente handelt es sich um Schätzwerte, die möglicherweise nicht immer mit den aufgelisteten Abhängigen übereinstimmen.

![Abhängigkeitsdiagramm](/assets/images/help/graphs/dependents_graph.png)

## Aktivieren und Deaktivieren des Abhängigkeitsdiagramms für ein privates Repository

{% data reusables.dependabot.enabling-disabling-dependency-graph-private-repo %}

## Ändern des Pakets „Verwendet von“

Möglicherweise ist dir aufgefallen, dass die Randleiste der Registerkarte **Code** in einigen Repositorys den Abschnitt „Verwendet von“ enthält. dein Repository weist den Abschnitt „Verwendet von“ unter folgenden Bedingungen auf:
  * Das Abhängigkeitsdiagramm ist für das Repository aktiviert (weitere Details im obigen Abschnitt).
  * Dein Repository enthält ein Paket, das in einem [unterstützten Paketökosystem](/github/visualizing-repository-data-with-graphs/about-the-dependency-graph#supported-package-ecosystems) veröffentlicht wurde.
  * Innerhalb des Ökosystems verfügt dein Paket über einen Link zu einem _öffentlichen_ Repository, in dem die Quelle gespeichert ist.

Der Abschnitt „Verwendet von“ zeigt die Anzahl der gefundenen öffentlichen Verweise auf das Paket sowie die Avatare einiger Besitzer*innen der abhängigen Projekte.

![Seitenleistenabschnitt „Verwendet von“](/assets/images/help/repository/used-by-section.png)

Wenn du in diesem Abschnitt auf ein Element klickst, gelangst du zur Registerkarte **Abhängige Elemente** des Abhängigkeitsdiagramms.

Der Abschnitt „Verwendet von“ stellt ein einzelnes Paket aus dem Repository dar. Wenn du über Administratorberechtigungen für ein Repository verfügst, das mehrere Pakete enthält, kannst du auswählen, welches Paket im Abschnitt „Verwendet von“ angezeigt werden soll.

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-settings %} {% data reusables.repositories.navigate-to-code-security-and-analysis %}
4. Klicke unter „Codesicherheit und -analyse“ im Abschnitt „Zähler für ‚Verwendet von‘“ auf das Dropdownmenü, und wähle ein Paket aus.
  ![Auswählen eines Pakets aus „Verwendet von“](/assets/images/help/repository/choose-used-by-package.png)

{% endif %}

## Fehler beim Abhängigkeitsdiagramm beheben

Wenn dein Abhängigkeitsdiagramm leer ist, liegt möglicherweise ein Problem mit der Datei vor, die deine Abhängigkeiten enthält. Überprüfe deine Datei, um sicherzustellen, dass sie für diesen Dateityp korrekt formatiert ist.

{% ifversion fpt or ghec %} Wenn die Datei ordnungsgemäß formatiert ist, überprüfe ihre Größe. Das Abhängigkeitsdiagramm ignoriert einzelne Manifest- und Sperrdateien, die größer als 1,5 MB sind, es sei denn, du bist {% data variables.product.prodname_enterprise %}-Benutzer*in. Es verarbeitet standardmäßig bis zu 20 Manifest- oder Sperrdateien pro Repository, sodass du Abhängigkeiten in kleinere Dateien in Unterverzeichnissen des Repositorys aufteilen kannst.{% endif %}

Wenn eine Manifest- oder Sperrdatei nicht verarbeitet wird, werden die Abhängigkeiten aus dem Abhängigkeitsdiagramm ausgelassen und können nicht auf unsichere Abhängigkeiten überprüft werden.

## Weitere Informationsquellen

- [Informationen zum Abhängigkeitsdiagramm](/github/visualizing-repository-data-with-graphs/about-the-dependency-graph)
- [Anzeigen und Aktualisieren von {% data variables.product.prodname_dependabot_alerts %}](/code-security/dependabot/dependabot-alerts/viewing-and-updating-dependabot-alerts){% ifversion ghec %}
- [Anzeigen von Einblicken für deine Organisation](/organizations/collaborating-with-groups-in-organizations/viewing-insights-for-your-organization) {% endif %}{% ifversion fpt or ghec %}
- [Grundlegendes zur Verwendung und zum Schutz deiner Daten durch {% data variables.product.prodname_dotcom %}](/get-started/privacy-on-github) {% endif %}
