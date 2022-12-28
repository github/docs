---
ms.openlocfilehash: c47a4efc23963dcfa0be69207387cd2d02704aef
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: ru-RU
ms.lasthandoff: 09/10/2022
ms.locfileid: "147878858"
---
При включении или отключении {% data variables.product.prodname_advanced_security %} для репозиториев {% data variables.product.prodname_dotcom %} отображает обзор изменений использования лицензии. Если отменяете доступ к {% data variables.product.prodname_GH_advanced_security %}, все места, используемые "уникальными" фиксациями, освобождаются.

Если вы превышаете ограничение лицензии, {% data variables.product.prodname_GH_advanced_security %} продолжает работать со всеми репозиториями, в которых она уже включена. Однако в организациях, где {% data variables.product.prodname_GH_advanced_security %} включено для новых репозиториев, репозитории будут созданы с отключенной функцией. Кроме того, параметр включения {% data variables.product.prodname_GH_advanced_security %} для существующих репозиториев будет недоступен. {% ifversion fpt or ghec %} Если изменить видимость репозитория с общедоступного на закрытый, то {% data variables.product.prodname_GH_advanced_security %} будет отключен для этого репозитория.{% endif %}

Как только вы освободите некоторые места, отключив {% data variables.product.prodname_GH_advanced_security %} для некоторых репозиториев или увеличив размер лицензии, параметры включения {% data variables.product.prodname_GH_advanced_security %} будут работать снова как обычно.
