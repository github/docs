---
ms.openlocfilehash: 3492de2cd163b4bbb59b912c17d152b7d2af5c68
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ru-RU
ms.lasthandoff: 09/05/2022
ms.locfileid: "145113752"
---
### Поиск по операции

Чтобы ограничить действия определенными типами операций, используйте квалификатор `operation`. Пример:

  * `operation:access` находит все события, в которых осуществлялся доступ к ресурсу.
  * `operation:authentication` находит все события, в которых происходило событие проверки подлинности.
  * `operation:create` находит все события, в которых создавался ресурс.
  * `operation:modify` находит все события, в которых изменялся существующий ресурс.
  * `operation:remove` находит все события, в которых удалялся существующий ресурс.
  * `operation:restore` находит все события, в которых восстанавливался существующий ресурс.
  * `operation:transfer` находит все события, в которых переносился существующий ресурс.
