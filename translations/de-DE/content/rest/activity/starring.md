---
title: Versehen mit einem Stern
intro: Mit der Sterne-API kannst du ein Lesezeichen für ein Repository erstellen.
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - API
miniTocMaxHeadingLevel: 3
ms.openlocfilehash: 267d87a4120bba3dbfd080bcfe3e59b1ee3ec6d1
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/05/2022
ms.locfileid: '147064250'
---
## Informationen zur Sterne-API

Mit der Sterne-API kannst du ein Lesezeichen für ein Repository erstellen. Sterne werden neben Repositorys angezeigt, um ein ungefähres Interessenniveau anzuzeigen. Sterne haben keine Auswirkungen auf Benachrichtigungen oder den Aktivitätsfeed. Weitere Informationen findest du unter [Speichern von Repositorys mit Sternen](/get-started/exploring-projects-on-github/saving-repositories-with-stars).

### Versehen mit einem Stern im Vergleich zur Überwachung

Im August 2012 [haben wir die Funktionsweise der Überwachung](https://github.com/blog/1204-notifications-stars) auf {% data variables.product.prodname_dotcom %} geändert. Viele API-Clientanwendungen verwenden möglicherweise die ursprünglichen „Watcher“-Endpunkte für den Zugriff auf diese Daten. Du kannst nun stattdessen die „Stern“-Endpunkte verwenden (siehe unten). Weitere Informationen findest du im [Watcher-API-Änderungsbeitrag](https://developer.github.com/changes/2012-09-05-watcher-api/) und im Abschnitt [Repository-Überwachungs-API](/rest/reference/activity#watching).

### Benutzerdefinierte Medientypen für das Versehen mit einem Stern

Es gibt einen unterstützten benutzerdefinierten Medientyp für die REST-API für das Versehen mit einem Stern. Wenn du diesen benutzerdefinierten Medientyp verwendest, erhältst du eine Antwort mit der `starred_at`-Zeitstempeleigenschaft, die angibt, wann der Stern erstellt wurde. Die Antwort verfügt auch über eine zweite Eigenschaft, die die Ressource enthält, die zurückgegeben wird, wenn der benutzerdefinierte Medientyp nicht enthalten ist. Die Eigenschaft, die die Ressource enthält, ist entweder `user` oder `repo`.

    application/vnd.github.star+json

Weitere Informationen zu Medientypen findest du unter [Benutzerdefinierte Medientypen](/rest/overview/media-types).
