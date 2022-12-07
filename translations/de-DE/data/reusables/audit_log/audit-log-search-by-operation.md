---
ms.openlocfilehash: 3492de2cd163b4bbb59b912c17d152b7d2af5c68
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/05/2022
ms.locfileid: "145103471"
---
### Vorgangsbasierte Suche

Verwende den Qualifizierer `operation`, um Aktionen für spezifische Typen von Vorgängen zu beschränken. Beispiel:

  * `operation:access` findet alle Ereignisse, bei denen auf eine Ressource zugegriffen wurde.
  * `operation:authentication` findet alle Ereignisse, bei denen ein Authentifizierungsereignis ausgeführt wurde.
  * `operation:create` findet alle Ereignisse, bei denen eine Ressource erstellt wurde.
  * `operation:modify` findet alle Ereignisse, bei denen eine vorhandene Ressource geändert wurde.
  * `operation:remove` findet alle Ereignisse, bei denen eine vorhandene Ressource entfernt wurde.
  * `operation:restore` findet alle Ereignisse, bei denen eine vorhandene Ressource wiederhergestellt wurde.
  * `operation:transfer` findet alle Ereignisse, bei denen eine vorhandene Ressource übertragen wurde.
