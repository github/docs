---
title: Verwenden von Abfrageparametern zum Erstellen eines Pull Requests
intro: 'Verwende Abfrageparameter, um benutzerdefinierte URLs zu erstellen, um Pull Requests mit vorausgefüllten Feldern zu öffnen.'
redirect_from:
  - /github/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/using-query-parameters-to-create-a-pull-request
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Pull requests
ms.openlocfilehash: 89ca4b13ff6291f7b4449d25b3daa911734a22b9
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/11/2022
ms.locfileid: '145133901'
---
Du kannst Abfrageparameter verwenden, um Pull Requests zu öffnen. Abfrageparameter sind optionale Bestandteile einer URL, die du anpassen kannst, um eine bestimmte Ansicht einer Webseite freizugeben, z. B. Suchfilterergebnisse oder eine Pull Request-Vorlage auf {% data variables.product.prodname_dotcom %}. Um eigene Abfrageparameter zu erstellen, musst du Schlüssel- und Wertepaar abgleichen.

{% tip %}

**Tipp:** Du kannst auch Pull-Request-Vorlagen erstellen, die mit Standardbezeichnungen, zugewiesenen Personen und einem Pull-Request-Titel geöffnet werden. Weitere Informationen findest du unter [Verwenden von Vorlagen zur Unterstützung nützlicher Issues und Pull Requests](/communities/using-templates-to-encourage-useful-issues-and-pull-requests).

{% endtip %}

Du musst die erforderlichen Berechtigungen für jede Aktion haben, um den entsprechenden Abfrageparameter zu verwenden. Du musst zum Beispiel über die Berechtigung verfügen, einem Pull Request eine Bezeichnung hinzuzufügen, um den Abfrageparameter `labels` zu verwenden. Weitere Informationen findest du unter [Repositoryrollen für eine Organisation](/organizations/managing-access-to-your-organizations-repositories/repository-roles-for-an-organization).

Wenn du mithilfe von Suchparametern eine ungültige URL erstellst oder nicht über die erforderlichen Berechtigungen verfügst, gibt die URL eine `404 Not Found`-Fehlerseite zurück. Wenn du eine URL erstellst, die das Serverlimit überschreitet, gibt die URL eine `414 URI Too Long`-Fehlerseite zurück.

Query parameter (Abfrageparameter) | Beispiel
---  | ---
`quick_pull` | `https://github.com/octo-org/octo-repo/compare/main...my-branch?quick_pull=1` erstellt einen Pull Request, der den Basisbranch `main` und den Headbranch `my-branch` vergleicht. Mithilfe der `quick_pull=1`-Abfrage gelangst du direkt zur Seite „Pull Request öffnen“.
`title` | `https://github.com/octo-org/octo-repo/compare/main...my-branch?quick_pull=1&labels=bug&title=Bug+fix+report` erstellt einen Pull Request mit der Bezeichnung „bug“ und dem Titel „Bug fix“.
`body` | `https://github.com/octo-org/octo-repo/compare/main...my-branch?quick_pull=1&title=Bug+fix&body=Describe+the+fix.` erstellt einen Pull Request mit dem Titel „Bug fix“ und dem Kommentar „Describe the fix“ im Pull Request-Text.
`labels` | `https://github.com/octo-org/octo-repo/compare/main...my-branch?quick_pull=1&labels=help+wanted,bug` erstellt einen Pull Request mit den Bezeichnungen „help wanted“ und „bug“.
`milestone` | `https://github.com/octo-org/octo-repo/compare/main...my-branch?quick_pull=1&milestone=testing+milestones` erstellt einen Pull Request mit dem Meilenstein „testing milestones“.
`assignees` | `https://github.com/octo-org/octo-repo/compare/main...my-branch?quick_pull=1&assignees=octocat` erstellt einen Pull Request und weist ihn @octocat zu.
`projects` | `https://github.com/octo-org/octo-repo/compare/main...my-branch?quick_pull=1&title=Bug+fix&projects=octo-org/1` erstellt einen Pull Request mit dem Titel „Bug fix“ und fügt ihn Projektboard 1 der Organisation hinzu.
`template` | `https://github.com/octo-org/octo-repo/compare/main...my-branch?quick_pull=1&template=issue_template.md` erstellt einen Pull Request mit einer Vorlage im Pull Request-Text. Der Abfrageparameter `template` funktioniert mit Vorlagen, die in einem Unterverzeichnis `PULL_REQUEST_TEMPLATE` innerhalb des Stammverzeichnisses bzw. der Verzeichnisse `docs/` oder `.github/` in einem Repository gespeichert sind. Weitere Informationen findest du unter [Verwenden von Vorlagen zur Unterstützung nützlicher Issues und Pull Requests](/communities/using-templates-to-encourage-useful-issues-and-pull-requests).
