---
ms.openlocfilehash: 744983c086ce7f67bb25cd9508e080ceb12ea517
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: ru-RU
ms.lasthandoff: 09/10/2022
ms.locfileid: "145123179"
---
В случае, если клиент обновляет свой план и платеж завершается ошибкой, GitHub отменяет подписку {% data variables.product.prodname_marketplace %} до предыдущего состояния. GitHub также отправит клиенту сообщение электронной почты, чтобы сообщить об ошибке и разрешить клиенту попытаться повторить попытку. Вы получите веб-перехватчик с действием `changed`, которое запрашивает возврат к предыдущему плану.
