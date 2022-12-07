---
title: Zusammenhänge zwischen Repositorys verstehen
intro: 'Verwende das Netzwerkdiagramm und die Liste der Forks, um ein Verständnis für Forknetzwerke zu erhalten.'
product: '{% data reusables.gated-features.repository-insights %}'
redirect_from:
  - /articles/viewing-a-repository-s-network
  - /articles/viewing-a-repositorys-network
  - /github/visualizing-repository-data-with-graphs/viewing-a-repositorys-network
  - /articles/understanding-connections-between-repositories
  - /articles/listing-the-forks-of-a-repository
  - /github/visualizing-repository-data-with-graphs/listing-the-forks-of-a-repository
  - /github/visualizing-repository-data-with-graphs/viewing-the-dependencies-of-a-repository
  - /github/visualizing-repository-data-with-graphs/understanding-connections-between-repositories
  - /github/visualizing-repository-data-with-graphs/understanding-connections-between-repositories/viewing-a-repositorys-network
  - /github/visualizing-repository-data-with-graphs/understanding-connections-between-repositories/listing-the-forks-of-a-repository
  - /github/visualizing-repository-data-with-graphs/understanding-connections-between-repositories/viewing-the-dependencies-of-a-repository
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Repositories
shortTitle: Connections between repositories
ms.openlocfilehash: 46cc440093c3ca8dc0952933847a6f04b0446661
ms.sourcegitcommit: 468a0323fa636517985a3e08e2772dbb0545cab8
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 12/03/2022
ms.locfileid: '148191358'
---
## Netzwerk eines Repositorys anzeigen

Das Netzwerkdiagramm zeigt den Branchverlauf für das gesamte Repositorynetzwerk an, einschließlich der Forkbranches. Dieses Diagramm umfasst eine Zeitleiste der letzten Commits und zeigt bis zu 100 der zuletzt gepushten Branches an. Die erste Zeile zeigt das Datum, die erste Spalte den Branchbesitzer. Verwende die Pfeiltasten oder andere Tastenkombinationen, um einfacher im Diagramm zu navigieren. Sie werden im Popupfenster „Verfügbare Tastenkombinationen“ unter dem Diagramm angegeben.


![Repository-Netzwerkdiagramm](/assets/images/help/graphs/repo_network_graph.png)

{% tip %}

**Tipp:** Klicke und ziehe zum Anzeigen älterer Verzweigungen im Diagramm.

{% endtip %}

## Auf das Netzwerkdiagramm zugreifen

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.accessing-repository-graphs %}
3. Klicke in der linken Seitenleiste auf **Netzwerk**.
![Registerkarte „Network“ (Netzwerk)](/assets/images/help/graphs/network_tab.png)

## Die Forks eines Repositorys auflisten

Das Mitgliederdiagramm zeigt alle Forks eines Repositorys.

Die Forks sind alphabetisch nach der Organisation oder dem Benutzernamen der Person angeordnet, die das Repository geforkt hat. Du kannst auf die Organisation oder den Benutzernamen klicken, um zur {% data variables.product.product_name %}-Profilseite der Organisation oder des Benutzers weitergeleitet zu werden, oder du kannst auf den Namen des Forks klicken, um zum spezifischen Fork des Repositorys weitergeleitet zu werden.

{% ifversion fpt or ghec %}

![Repository-Mitgliederdiagramm](/assets/images/help/graphs/repo_forks_graph_dotcom.png)

{% else %}

![Repository-Mitgliederdiagramm](/assets/images/help/graphs/repo_members_graph.png)

{% endif %}

### Auf das Mitgliederdiagramm zugreifen

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.accessing-repository-graphs %}
3. Klicke in der linken Seitenleiste auf **Forks**.
![Registerkarte „Forks“](/assets/images/help/graphs/graphs-sidebar-forks-tab.png)

## Anzeigen der Abhängigkeiten eines Repositorys

Du kannst das Abhängigkeitsdiagramm verwenden, um den Code zu erkunden, von dem dein Repository abhängig ist.

Fast alle Software basiert auf Code, der von anderen Entwicklern entwickelt und verwaltet wird, häufig als Lieferkette bezeichnet. Beispiel: Hilfsprogramme, Bibliotheken und Frameworks. Diese Abhängigkeiten sind ein integraler Bestandteil deines Codes, und alle Fehler oder Sicherheitsrisiken in ihnen können sich auf deinen Code auswirken. Es ist wichtig, diese Abhängigkeiten zu überprüfen und zu verwalten.

Das Abhängigkeitsdiagramm bietet eine hervorragende Möglichkeit, die Abhängigkeiten für ein Repository zu visualisieren und zu erkunden. Weitere Informationen findest du unter [Informationen über das Abhängigkeitsdiagramm](/code-security/supply-chain-security/about-the-dependency-graph) und [Erkunden der Abhängigkeiten eines Repositorys](/code-security/supply-chain-security/exploring-the-dependencies-of-a-repository).

Du kannst dein Repository auch so einrichten, dass {% data variables.product.company_short %} dich automatisch benachrichtigt, wenn eine Sicherheitsrisiko in einer deiner Abhängigkeiten gefunden wird. Weitere Informationen findest du unter [Informationen zu {% data variables.product.prodname_dependabot_alerts %}](/github/managing-security-vulnerabilities/about-alerts-for-vulnerable-dependencies).
