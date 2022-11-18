---
ms.openlocfilehash: 67ef84929e93a9f0fa1acc99e2035b2d62cb1574
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: ru-RU
ms.lasthandoff: 09/11/2022
ms.locfileid: "145069528"
---
Рабочий процесс настраивает контейнер службы с меткой `postgres`. Все службы должны выполняться в контейнере, поэтому для каждой из них требуется указать `image` контейнера. Этот пример использует образ контейнера `postgres`, предоставляет пароль PostgreSQL по умолчанию и включает параметры проверки работоспособности, чтобы была возможность убедиться, что служба запущена. Дополнительные сведения см. в разделе [Образ Postgres](https://hub.docker.com/_/postgres) на Docker Hub.
