---
ms.openlocfilehash: ba9c00a9dfa055c518eb60bca3acc59a3cc89381
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/05/2022
ms.locfileid: "145104032"
---
Ein Workflow ist ein konfigurierbarer automatisierter Prozess zur Ausführung eines oder mehrerer Aufträge. Workflows werden durch eine im Repository eingecheckte YAML-Datei definiert. Die Auslösung ihrer Ausführung erfolgt durch ein Ereignis in deinem Repository, manuell oder nach einem definierten Zeitplan.

Workflows werden im Verzeichnis `.github/workflows` in einem Repository definiert, und ein Repository kann mehrere Workflows aufweisen, die jeweils eine andere Gruppe von Aufgaben ausführen können. So kannst du etwa einen Workflow zum Erstellen und Testen von Pull Requests erstellen, einen zweiten zum Bereitstellen deiner Anwendung bei jeder neuen Erstellung eines Releases und einen dritten zum Hinzufügen von Bezeichnungen bei jeder Öffnung eines weiteren Issues.
