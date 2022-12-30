---
ms.openlocfilehash: 2fd5ca9c5a65bed4a656cb3fdbd37db7a23a9387
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/10/2022
ms.locfileid: "145102443"
---
1. Sobald die Instanz vollständig neu gestartet wurde und Du darauf zugreifen kannst, verwende die SSH-Verwaltungsshell, um zu überprüfen, ob die neue Ressourcenkonfiguration erkannt wird:
```shell
$ ssh -p 122 admin@<em>HOSTNAME</em>
$ ghe-system-info
```
