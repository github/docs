---
ms.openlocfilehash: da828b3b969dfc24b1f71400f336cccfa1f4d004
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: ru-RU
ms.lasthandoff: 09/10/2022
ms.locfileid: "145123859"
---
Настройте подсистему балансировки нагрузки, чтобы проверить один из следующих URL-адресов:
 - `https://HOSTNAME/status`, если протокол HTTPS включен (по умолчанию);
 - `http://HOSTNAME/status`, если протокол HTTPS выключен.

Проверка вернет код состояния `200` (ОК), если узел работоспособен и доступен для запросов конечных пользователей.
