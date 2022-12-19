---
ms.openlocfilehash: 82333b02778252fd675cc0bee3508229209d24bc
ms.sourcegitcommit: d697e0ea10dc076fd62ce73c28a2b59771174ce8
ms.translationtype: MT
ms.contentlocale: ru-RU
ms.lasthandoff: 10/20/2022
ms.locfileid: "148098170"
---
Вы можете запускать проекты из репозитория на сервере {% ifversion ghae %}{% данных variables.product.product_name %}{%else %}{% данных variables.location.product_location %}{% endif %} на сервер с помощью ключа развертывания, который является ключом SSH, который предоставляет доступ к одному репозиторию. {% data variables.product.product_name %} присоединяет открытую часть ключа непосредственно к репозиторию, а не к личной учетной записи. Закрытая часть ключа при этом остается на сервере. Дополнительные сведения см. в разделе [Доставка развертываний](/rest/guides/delivering-deployments).
