---
title: Gists
intro: 'Mit der Gists-API kann der autorisierte Benutzer die öffentlichen Gists zu GitHub auflisten, erstellen, aktualisieren und löschen.'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - API
miniTocMaxHeadingLevel: 3
ms.openlocfilehash: 47961c5dfeeb5f320bbac67ffb0573c31709bd5b
ms.sourcegitcommit: cfe91073c844cb762131b2de9fb41f7f9db792fc
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 11/24/2022
ms.locfileid: '148181302'
---
## Informationen zur Gist-API

Mit der Gist-API kannst du Gists anzeigen und ändern. Weitere Informationen zu Gists findest du unter [Bearbeiten und Freigeben von Inhalten mit Gists](/get-started/writing-on-github/editing-and-sharing-content-with-gists).

### Authentifizierung

Du kannst öffentliche Gists {% ifversion ghae or ghes %}lesen und sie für anonyme Benutzer ohne ein Token{% else %}anonym erstellen. Aber du musst bei GitHub angemeldet sein, um Gists erstellen zu können.{% endif %} Um Gists im Auftrag eines Benutzers zu lesen oder zu schreiben, benötigst du den OAuth-Bereich für Gist und ein Token. Weitere Informationen findest du unter [Bereiche für OAuth-Apps](/developers/apps/scopes-for-oauth-apps).

<!-- When an OAuth client does not have the gists scope, the API will return a 404 "Not Found" response regardless of the validity of the credentials. The API will return a 401 "Bad credentials" response if the gists scope was given to the application but the credentials are invalid. -->

### Abschneiden

Die Gist-API bietet bis zu einem Megabyte an Inhalten für jede Datei im Gist. Jede Datei, die für ein Gist über die API zurückgegeben wird, hat einen Schlüssel namens `truncated`. Wenn `truncated` gleich `true` ist, ist die Datei zu groß, sodass nur ein Teil des Inhalts in `content` zurückgegeben wurde.

Wenn du den gesamten Inhalt der Datei benötigst, kannst du die Anforderung `GET` an die durch `raw_url` angegebene URL stellen. Beachte, dass du bei Dateien mit einer Größe von mehr als 10 Megabyte das Gist über die von `git_pull_url` angegebene URL klonen musst.

Außerdem wird nicht nur der Inhalt einer bestimmten Datei abgeschnitten, sondern die gesamte Dateiliste, wenn die Gesamtanzahl 300 Dateien überschreitet. Wenn der Schlüssel auf oberster Ebene `truncated` gleich `true` ist, werden nur die ersten 300 Dateien in der Dateiliste angezeigt. Wenn du alle Dateien des Gists abrufen möchtest, musst du das Gist über die von `git_pull_url` angegebene URL klonen.

### Benutzerdefinierte Medientypen für Gists

Dies sind die unterstützten Medientypen zum Abrufen von Gist-Inhalten.

    application/vnd.github.raw
    application/vnd.github.base64

Weitere Informationen findest du unter [Medientypen](/rest/overview/media-types).
