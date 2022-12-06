---
ms.openlocfilehash: 23a47438a4b4091ec5034671fa226eff68a08ef6
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/05/2022
ms.locfileid: "147080004"
---
Mit der API zur Abhängigkeitsübermittlung kannst du Abhängigkeiten für ein Projekt übermitteln. Dadurch kannst du Abhängigkeiten wie die, die beim Kompilieren oder Erstellen von Software aufgelöst werden, zum Abhängigkeitsdiagrammfeature von {% data variables.product.prodname_dotcom %} hinzufügen und ein vollständigeres Bild aller Abhängigkeiten deines Projekts bieten.

Das Abhängigkeitsdiagramm zeigt alle Abhängigkeiten, die du mithilfe der API übermittelst, zusätzlich zu allen Abhängigkeiten, die von Manifest- oder Sperrdateien im Repository aus identifiziert werden (z. B. eine `package-lock.json`-Datei in einem JavaScript-Projekt). Weitere Informationen zum Anzeigen des Abhängigkeitsdiagramms findest du unter [Erkunden der Abhängigkeiten eines Repositorys](/code-security/supply-chain-security/understanding-your-software-supply-chain/exploring-the-dependencies-of-a-repository#viewing-the-dependency-graph). 

Übermittelte Abhängigkeiten erhalten {% data variables.product.prodname_dependabot_alerts %} und {% data variables.product.prodname_dependabot_security_updates %} für alle bekannten Sicherheitsrisiken. Du empfängst {% data variables.product.prodname_dependabot_alerts %} nur für Abhängigkeiten, die von einem der [unterstützten Ökosysteme](https://github.com/github/advisory-database#supported-ecosystems) von {% data variables.product.prodname_advisory_database %} stammen. Übermittelte Abhängigkeiten werden nicht in Abhängigkeitsüberprüfungen oder den Abhängigkeitserkenntnissen deiner Organisation angezeigt.
