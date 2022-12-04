---
ms.openlocfilehash: ea162bdacad3d8e4a85c343eb9c3c08afd2b9056
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/10/2022
ms.locfileid: "145102448"
---
Wenn du ein Rollback eines Upgrades durchführst, musst du eine Upgradepaketdatei mit der Erweiterung *.pkg* verwenden. Hotpatchpaketdateien mit der Erweiterung *.hpkg* werden nicht unterstützt.

```shell
ghe-upgrade --allow-patch-rollback <em>EARLIER-RELEASE-UPGRADE-PACKAGE</em>.pkg
```

Nach Ausführung des Befehls ist ein Neustart erforderlich. Der Rollback wirkt sich nicht auf die Datenpartition aus, da Migrationen nicht mit Patch-Releases ausgeführt werden.
