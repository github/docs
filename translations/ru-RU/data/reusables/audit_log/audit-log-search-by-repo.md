---
ms.openlocfilehash: fa28240a725967485b76be7be90384f3010b084a
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: ru-RU
ms.lasthandoff: 09/10/2022
ms.locfileid: "145113744"
---
### Поиск по репозиторию

Чтобы ограничить действия определенным репозиторием, используйте квалификатор `repo`. Пример:

  * `repo:my-org/our-repo` находит все произошедшие события для репозитория `our-repo` в организации `my-org`.
  * `repo:my-org/our-repo repo:my-org/another-repo` находит все произошедшие события для репозиториев `our-repo` и `another-repo` в организации `my-org`.
  * `-repo:my-org/not-this-repo` исключает все произошедшие события для репозитория `not-this-repo` в организации `my-org`.

Обратите внимание, что в квалификатор необходимо включить имя учетной записи `repo`. Поиск просто по запросу `repo:our-repo` работать не будет.
