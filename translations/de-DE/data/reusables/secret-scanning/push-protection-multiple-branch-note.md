---
ms.openlocfilehash: 4cc5759031be6a031424abf13b7aa4c1db05c84f
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/05/2022
ms.locfileid: "147578710"
---
{% note %}

**Hinweise**: 

* Wenn deine Git-Konfiguration das Pushen an mehrere Branches und nicht nur an den aktuellen Branch unterstützt, wird dein Push möglicherweise blockiert, weil zusätzliche und unbeabsichtigte Verweise gepusht werden. Weitere Informationen findest du unter [`push.default`-Optionen](https://git-scm.com/docs/git-config#Documentation/git-config.txt-pushdefault) in der GitHub-Dokumentation.
* Wenn für {% data variables.product.prodname_secret_scanning %} bei einem Push ein Timeout auftritt, scannt {% data variables.product.prodname_dotcom %} die Commits nach dem Pushen trotzdem auf Geheimnisse.

{% endnote %}
