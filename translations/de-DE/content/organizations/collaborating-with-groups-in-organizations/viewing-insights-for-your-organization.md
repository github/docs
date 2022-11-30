---
title: Organisationseinblicke anzeigen
intro: 'Organisationseinblicke enthalten Daten zu den Aktivitäten, Beiträgen und Abhängigkeiten Deiner Organisation.'
redirect_from:
  - /articles/viewing-insights-for-your-organization
  - /github/setting-up-and-managing-organizations-and-teams/viewing-insights-for-your-organization
versions:
  ghec: '*'
topics:
  - Organizations
  - Teams
shortTitle: View organization insights
permissions: Organization members can view organization insights.
ms.openlocfilehash: 5398d60f6a937c35e188dc97e44bf25b01b6d676
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/10/2022
ms.locfileid: '145130878'
---
## Informationen zu Organisationserkenntnissen

Mithilfe von Einblicken in Organisationsaktivitäten kannst Du besser nachvollziehen, wie die Mitglieder Deiner Organisation {% data variables.product.product_name %} verwenden, um zusammenzuarbeiten und Code zu erstellen. Mithilfe von Abhängigkeits-Einblicken kannst Du die Open-Source-Nutzung Deiner Organisation nachverfolgen, melden und entsprechend darauf reagieren.

{% note %}

**Hinweis:** Um Erkenntnisse über die Organisation zu erhalten, muss deine Organisation {% data variables.product.prodname_ghe_cloud %} verwenden. {% data reusables.enterprise.link-to-ghec-trial %}

{% endnote %}

## Einblicke in Organisationsaktivitäten anzeigen

{% note %}

**Hinweis:** Die Erkenntnisse über die Aktivitäten von Organisationen befinden sich derzeit in der öffentlichen Beta-Phase und können sich noch ändern.

{% endnote %}

Mithilfe von Einblicken in Organisationsaktivitäten kannst Du wöchentliche, monatliche und jährliche Datenvisualisierungen Deiner gesamten Organisation oder von spezifischen Repositorys anzeigen. Dazu zählen Issue- und Pull-Request-Aktivitäten, die am häufigsten verwendeten Sprachen sowie kumulative Informationen dahingehend, wo Deine Organisationsmitglieder ihre Zeit aufgewendet haben.

{% data reusables.profile.access_org %} {% data reusables.user-settings.access_org %}
3. Klicke unter dem Namen deiner Organisation auf {% octicon "graph" aria-label="The bar graph icon" %} **Erkenntnisse**.
  ![Klicke auf die Registerkarte „Insights“ (Einblicke) der Organisation](/assets/images/help/organizations/org-nav-insights-tab.png)
4. Optional kannst du in der oberen rechten Ecke der Seite Daten für die letzten **1 Wochen**, **1 Monat** oder **1 Jahr** anzeigen.
  ![Auswahl des Zeitraums zum Anzeigen der Organisationserkenntnisse](/assets/images/help/organizations/org-insights-time-period.png)
5. Wähle optional in der oberen rechten Ecke der Seite die entsprechende Option aus, um Daten für bis zu drei Repositorys anzuzeigen, und klicke auf **Anwenden**.
  ![Auswahl von Repositorys zum Anzeigen der Organisationserkenntnisse](/assets/images/help/organizations/org-insights-repos.png)

## Organisations-Abhängigkeits-Einblicke anzeigen

{% note %}

**Hinweis:** Hinweis: Stelle sicher, dass du das [Abhängigkeitsdiagramm](/code-security/supply-chain-security/understanding-your-software-supply-chain/configuring-the-dependency-graph) aktiviert hast. 

{% endnote %}

Mithilfe von Abhängigkeits-Einblicken kannst Du Schwachstellen, Lizenzen und andere wichtige Informationen für die Open-Source-Projekte anzeigen, von denen Deine Organisation abhängig ist.

{% data reusables.profile.access_org %} {% data reusables.user-settings.access_org %}
3. Klicke unter dem Namen deiner Organisation auf {% octicon "graph" aria-label="The bar graph icon" %} **Erkenntnisse**.
  ![Registerkarte „Insights“ (Erkenntnisse) auf der Haupt-Navigationsleiste der Organisation](/assets/images/help/organizations/org-nav-insights-tab.png)
4. Um die Abhängigkeiten für diese Organisation anzuzeigen, klicke auf **Abhängigkeiten**.
  ![Registerkarte Abhängigkeiten unter der Haupt-Navigationsleiste der Organisation](/assets/images/help/organizations/org-insights-dependencies-tab.png)
5. Um Erkenntnisse über Abhängigkeiten für alle deine {% data variables.product.prodname_ghe_cloud %} Organisationen zu erhalten, klicke auf **Meine Organisationen**.
  ![Schaltfläche Meine Organisationen unter der Registerkarte Abhängigkeiten](/assets/images/help/organizations/org-insights-dependencies-my-orgs-button.png)
6. Du kannst auf die Ergebnisse in den Diagrammen **Sicherheitshinweise öffnen** und **Lizenzen** klicken, um nach einem Schwachstellenstatus, nach einer Lizenz oder nach einer Kombination aus beiden zu filtern.
  ![Schwachstellen der eigenen Organisation und Diagramm mit Lizenzen](/assets/images/help/organizations/org-insights-dependencies-graphs.png)
7. Du kannst auf {% octicon "package" aria-label="The package icon" %} **Abhängigkeiten** neben den Sicherheitsrisiken klicken, um zu sehen, welche Abhängigen in deiner Organisation die jeweilige Bibliothek verwenden.
  ![Angreifbare Abhängigkeiten der eigenen Organisationen](/assets/images/help/organizations/org-insights-dependencies-vulnerable-item.png)

## Weiterführende Themen
 - "[Informationen zu Organisationen](/organizations/collaborating-with-groups-in-organizations/about-organizations)"
 - [Untersuchen der Abhängigkeiten eines Repositorys](/github/visualizing-repository-data-with-graphs/exploring-the-dependencies-of-a-repository)
 - " [Die Sichtbarkeit der Abhängigkeitserkenntnisse deiner Organisation ändern](/organizations/managing-organization-settings/changing-the-visibility-of-your-organizations-dependency-insights) "{% ifversion ghec %}
- [Erzwingen von Richtlinien für Abhängigkeitserkenntnisse in deinem Unternehmen](/admin/policies/enforcing-policies-for-your-enterprise/enforcing-policies-for-dependency-insights-in-your-enterprise){% endif %}
