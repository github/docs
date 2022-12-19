---
ms.openlocfilehash: c006e6c46461dc27643f39f4750489d513734010
ms.sourcegitcommit: 5f9527483381cfb1e41f2322f67c80554750a47d
ms.translationtype: HT
ms.contentlocale: ru-RU
ms.lasthandoff: 09/11/2022
ms.locfileid: "147882998"
---
При удалении головной ветви после объединения запроса на вытягивание {% data variables.product.prodname_dotcom %} проверяет наличие открытых запросов на вытягивание в том же репозитории, где удаленная ветвь указана в качестве базовой ветви. {% data variables.product.prodname_dotcom %} автоматически обновляет все такие запросы на вытягивание, заменяя базовую ветвь на объединенную базовую ветвь запроса на вытягивание.
