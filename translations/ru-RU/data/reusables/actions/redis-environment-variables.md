---
ms.openlocfilehash: 8eff695be10a097b9693095c219f3a67a3895560
ms.sourcegitcommit: 5f9527483381cfb1e41f2322f67c80554750a47d
ms.translationtype: HT
ms.contentlocale: ru-RU
ms.lasthandoff: 09/12/2022
ms.locfileid: "147886601"
---
Скрипт *client.js* ищет переменные среды `REDIS_HOST` и `REDIS_PORT` для создания клиента. Эти две переменные среды задаются на шаге рабочего процесса "Подключение к Redis", после чего становятся доступны скрипту *client.js*. Дополнительные сведения о скрипте см. в разделе [Тестирование контейнера службы Redis](#testing-the-redis-service-container).
