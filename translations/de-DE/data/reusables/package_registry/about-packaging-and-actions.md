---
ms.openlocfilehash: 9e47cc05dec3bbdef729dfc6a06eff8056dd9502
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/10/2022
ms.locfileid: "145107635"
---
### Paket-Erstellung in Workflows zur kontinuierlichen Integration

Die Paket-Erstellung ist ein üblicher Bestandteil des Workflows bei der kontinuierlichen Integration oder bei der kontinuierlichen Auslieferung. Das Erstellen eines Pakets am Ende eines Workflows zur kontinuierlichen Integration kann während des Code-Reviews bei einem Pull-Request hilfreich sein.

Nach dem Erstellen und Testen Deines Codes kann ein Paketierungsschritt ein lauf- oder bereitstellungsfähiges Artefakt erzeugen. Je nach Art der Anwendung, die Du erstellst, kann dieses Paket für manuelle Tests lokal heruntergeladen, Benutzern zum Herunterladen zur Verfügung gestellt oder in einer Staging- oder Produktionsumgebung bereitgestellt werden.

Beispielsweise kann ein CI-Workflow (Continuous Integration) für ein Java-Projekt `mvn package` ausführen, um eine JAR-Datei zu erzeugen. Oder ein CI-Workflow für eine Node.js-Anwendung kann einen Docker-Container erzeugen.

Wenn Du nun einen Pull-Request überprüfst, kannst Du Dir den Ablauf des Workflows ansehen und das erzeugte Artefakt herunterladen.

![Dropdown-Menü zum Herunterladen von Artefakten](/assets/images/help/repository/artifact-drop-down-updated.png)

Dadurch kannst Du den Code im Pull-Request auf Deinem Rechner ausführen, was beim Debuggen oder Testen des Pull-Requests helfen kann.

### Workflows zum Veröffentlichen von Paketen

Außer Paket-Artefakte zum Testen in einem Workflow zur kontinuierlichen Integration zum Testen hochzuladen, kannst Du auch Workflows erstellen, die Dein Projekt bauen und Pakete in einer Paket-Registry veröffentlichen.

* **Veröffentlichen von Paketen in {% data variables.product.prodname_registry %}**  
  {% data variables.product.prodname_registry %} kann als Hostingdienst für viele Arten von Paketen dienen. Du kannst Deine Pakete entweder mit allen {% data variables.product.prodname_dotcom %} oder private Pakete nur mit Mitarbeitern oder einer Organisation teilen. Weitere Informationen findest du unter [Einführung in GitHub Packages](/packages/learn-github-packages/introduction-to-github-packages).

  Vielleicht möchtest du bei jedem Push in den Standardbranch Pakete in {% data variables.product.prodname_registry %} veröffentlichen. So können die Entwickler deines Projekts immer problemlos den neuesten Build aus dem Standardbranch ausführen und testen, indem sie ihn aus {% data variables.product.prodname_registry %} installieren.

* **Veröffentlichen von Paketen in einer Paketregistrierung**  
  Bei vielen Projekten erfolgt die Veröffentlichung in einer Paketregistrierung immer dann, wenn eine neue Version eines Projekts veröffentlicht wird. Beispielsweise kann ein Projekt, das eine JAR-Datei erstellt, neue Versionen in das Zentral-Repository von Maven hochladen. Oder ein .NET-Projekt kann ein NuGet-Paket erzeugen und es in die NuGet-Galerie hochladen.

  Du kannst dies automatisieren, indem Du einen Workflow erstellst, der bei jeder Release-Erstellung Pakete in einer Paket-Registry veröffentlicht. Weitere Informationen findest du unter [Erstellen von Releases](/github/administering-a-repository/creating-releases).
