---
ms.openlocfilehash: 346aee71fb06f01bf9130c8b80039206816c106a
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: ru-RU
ms.lasthandoff: 09/10/2022
ms.locfileid: "145111768"
---
Используйте протокол X-Forwarded-For **только** в том случае, если протокол PROXY недоступен. Заголовок `X-Forwarded-For` работает только с HTTP и HTTPS. IP-адрес, сообщаемый для подключений Git по протоколу SSH, будет представлять IP-адрес подсистемы балансировки нагрузки.
