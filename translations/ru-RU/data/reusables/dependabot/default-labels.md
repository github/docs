---
ms.openlocfilehash: 3b05d1b75c37f24e9ae4ce03618910c572f259d1
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: ru-RU
ms.lasthandoff: 09/12/2022
ms.locfileid: "147887716"
---
По умолчанию {% data variables.product.prodname_dependabot %} вызывает все запросы на вытягивание с меткой `dependencies`. Если определено несколько диспетчеров пакетов, {% data variables.product.prodname_dependabot %} включает дополнительную метку для каждого запроса на вытягивание. Это указывает, какой язык или экосистема будет обновлять запрос на вытягивание, например: `java` для обновлений Gradle и `submodules` для обновлений подмодуля Git. {% data variables.product.prodname_dependabot %} автоматически создает эти метки по умолчанию, как это требуется в репозитории.
