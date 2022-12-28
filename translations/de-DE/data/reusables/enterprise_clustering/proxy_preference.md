---
ms.openlocfilehash: 69c0fb0e38433bb6c7745701f77efed76421f0cc
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/05/2022
ms.locfileid: "145102511"
---
Wenn Dein Load-Balancer das PROXY-Protokoll unterstützen kann, wird dringend empfohlen, es zu implementieren. Wenn keine PROXY-Unterstützung verfügbar ist, kann auch mithilfe des `X-Forwarded-For`-Headers der Lastenausgleich auf den HTTP- und HTTPS-Ports vorgenommen werden.
