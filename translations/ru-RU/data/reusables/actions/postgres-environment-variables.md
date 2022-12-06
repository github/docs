---
ms.openlocfilehash: 38cb1809a69bf402d3fac174d5e8597dc0db7b8b
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: ru-RU
ms.lasthandoff: 09/11/2022
ms.locfileid: "145089346"
---
Скрипт *client.js* ищет переменные среды `POSTGRES_HOST` и `POSTGRES_PORT` для создания клиента. Эти две переменные среды задаются на шаге рабочего процесса "Подключение к PostgreSQL", после чего становятся доступны скрипту *client.js*. Дополнительные сведения о скрипте см. в разделе [Тестирование контейнера службы PostgreSQL](#testing-the-postgresql-service-container).
