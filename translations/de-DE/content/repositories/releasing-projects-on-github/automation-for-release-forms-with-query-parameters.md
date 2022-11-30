---
title: Automatisierung für Releaseformulare mit Abfrageparametern
intro: 'Du kannst Releases schnell erstellen, wenn du das neue Releaseformular automatisch mit angepassten Informationen ausfüllen lässt. Füge dazu Abfrageparameter zur URL der Formularseite hinzu.'
redirect_from:
  - /articles/automation-for-release-forms-with-query-parameters
  - /github/administering-a-repository/automation-for-release-forms-with-query-parameters
  - /github/administering-a-repository/releasing-projects-on-github/automation-for-release-forms-with-query-parameters
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Repositories
shortTitle: Automate release forms
ms.openlocfilehash: 75c7fe4b79a6103060151742f1277861f23785c4
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/05/2022
ms.locfileid: '145193563'
---
Abfrageparameter sind optionale Bestandteile einer URL, die du anpassen kannst, um eine bestimmte Ansicht einer Webseite weiterzugeben, z. B. gefilterte Suchergebnisse, eine Issue-Vorlage oder die Seite mit dem Veröffentlichungsformular auf {% data variables.product.prodname_dotcom %}. Um eigene Abfrageparameter zu erstellen, musst du Schlüssel- und Wertepaar abgleichen.

Du musst die erforderlichen Berechtigungen für jede Aktion haben, um den entsprechenden Abfrageparameter zu verwenden. Du benötigst beispielsweise die Berechtigung zum Erstellen von Releases, um das Releaseformular vorab auszufüllen. Weitere Informationen findest du unter [Verwalten von Releases in einem Repository](/github/administering-a-repository/managing-releases-in-a-repository).

Wenn du mithilfe von Suchparametern eine ungültige URL erstellst oder nicht über die erforderlichen Berechtigungen verfügst, gibt die URL eine 404-Fehlerseite zurück.  

## Unterstützte Abfrageparameter

Query parameter (Abfrageparameter) | Beispiel
---  | ---
`tag` | `https://github.com/octo-org/octo-repo/releases/new?tag=v1.0.1` erstellt ein Release basierend auf einem Tag namens „v1.0.1“.
`target` | `https://github.com/octo-org/octo-repo/releases/new?target=release-1.0.1` erstellt ein Release basierend auf dem neuesten Commit für den Branch „release-1.0.1“.
`title` | `https://github.com/octo-org/octo-repo/releases/new?tag=v1.0.1&title=octo-1.0.1` erstellt ein Release namens „octo-1.0.1“ basierend auf einem Tag namens „v1.0.1“.
`body` | `https://github.com/octo-org/octo-repo/releases/new?body=Adds+widgets+support` erstellt ein Release mit der Beschreibung „Adds widget support“ (Widgetunterstützung hinzugefügt) im Releasetext.
`prerelease` | `https://github.com/octo-org/octo-repo/releases/new?prerelease=1` erstellt ein Release, das als nicht produktionsfähig gekennzeichnet ist.

## Weitere Informationsquellen

- [Erstellen eines Issues aus einer URL-Abfrage](/issues/tracking-your-work-with-issues/creating-an-issue#creating-an-issue-from-a-url-query)
- [Verwenden von Abfrageparametern zum Erstellen eines Pull Requests](/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/using-query-parameters-to-create-a-pull-request/)
