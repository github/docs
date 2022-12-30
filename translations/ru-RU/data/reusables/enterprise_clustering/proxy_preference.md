---
ms.openlocfilehash: 69c0fb0e38433bb6c7745701f77efed76421f0cc
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: ru-RU
ms.lasthandoff: 09/10/2022
ms.locfileid: "145111832"
---
Мы настоятельно рекомендуем реализовать протокол PROXY, если подсистема балансировки нагрузки поддерживает его. Если поддержка PROXY недоступна, нагрузку на порты HTTP и HTTPS можно также распределять с помощью заголовка `X-Forwarded-For`.
