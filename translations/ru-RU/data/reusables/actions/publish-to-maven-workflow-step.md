---
ms.openlocfilehash: e61b98fb2e2ad39bf3e17b058b401a6fdb967836
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ru-RU
ms.lasthandoff: 09/05/2022
ms.locfileid: "145089333"
---
Выполняет команду `mvn --batch-mode deploy` для публикации в репозиторий `ossrh`. Переменная среды `MAVEN_USERNAME` будет задана с содержимым секрета `OSSRH_USERNAME`, а переменная среды `MAVEN_PASSWORD` — с содержимым секрета `OSSRH_TOKEN`.
