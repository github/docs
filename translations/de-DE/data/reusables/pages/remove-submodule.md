---
ms.openlocfilehash: 9b9749a9b1d8405deadafdb29203b9537900813e
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/11/2022
ms.locfileid: "147884971"
---
Zur Fehlerbehebung entscheide zuerst, ob du tatsächlich ein Submodul verwenden möchtest, bei dem es sich um ein Git-Projekt innerhalb eines Git-Projekts handelt; Submodule werden manchmal versehentlich erstellt.

Wenn du kein Submodul verwenden möchtest, entferne das Submodul, und ersetze dabei <em>PFAD-ZUM-SUBMODUL</em> durch den Pfad zum Submodul:
```shell
$ git submodule deinit <em>PATH-TO-SUBMODULE</em>
$ git rm <em>PATH-TO-SUBMODULE</em>
$ git commit -m "Remove submodule"
$ rm -rf .git/modules/<em>PATH-TO-SUBMODULE</em>
```
