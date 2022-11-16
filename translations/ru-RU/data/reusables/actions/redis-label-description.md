---
ms.openlocfilehash: 662ae539ae3cfdb6446d31664da325a9a67e9a26
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: ru-RU
ms.lasthandoff: 09/10/2022
ms.locfileid: "145069513"
---
Рабочий процесс настраивает контейнер службы с меткой `redis`. Все службы должны выполняться в контейнере, поэтому для каждой из них требуется указать `image` контейнера. В этом примере используется образ контейнера `redis` и включены параметры проверки работоспособности, чтобы убедиться, что служба запущена. Дополнительные сведения см. в разделе [Образ Redis](https://hub.docker.com/_/redis) на Docker Hub.
