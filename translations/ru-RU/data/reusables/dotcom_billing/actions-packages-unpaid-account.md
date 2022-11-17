---
ms.openlocfilehash: 1755638282e001d4e685a225d42c36cdc0f3bd7b
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: ru-RU
ms.lasthandoff: 09/10/2022
ms.locfileid: "145124699"
---
Если для учетной записи есть неоплаченные счета, применяются следующие правила.

* Хранилище или минуты, включенные в учетную запись для {% data variables.product.prodname_actions %} и {% data variables.product.prodname_registry %}, не будут сбрасываться до успешной обработки платежа.
* Для учетных записей, оставшихся в течение текущего периода выставления счетов, {% data variables.product.prodname_actions %} и {% data variables.product.prodname_registry %} будут по-прежнему доступны до тех пор, пока не будет достигнуто любое включенное использование.
* Для учетных записей, которые достигли включенного использования за текущий расчетный период для {% data variables.product.prodname_actions %} или {% data variables.product.prodname_registry %}, {% data variables.product.prodname_actions %}, и {% data variables.product.prodname_registry %} будут отключены, чтобы предотвратить дальнейшие превышения.
