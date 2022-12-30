---
ms.openlocfilehash: cdfdf5507dd2c7efa14e7285cc2b18f163d5355d
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ru-RU
ms.lasthandoff: 09/05/2022
ms.locfileid: "147062414"
---
Выполняет команду для публикации `mvn --batch-mode deploy` в {% data variables.product.prodname_registry %}. Переменная среды `GITHUB_TOKEN` будет задана с содержимым секрета `GITHUB_TOKEN`. Ключ `permissions` указывает доступ, предоставленный для `GITHUB_TOKEN`.
