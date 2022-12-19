---
ms.openlocfilehash: a9030eae8492863ee750f2a02eeac584fd13513a
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: ru-RU
ms.lasthandoff: 09/11/2022
ms.locfileid: "145068023"
---

### Проверка успешного добавления локального средства выполнения

После добавления локального средства выполнения само средство выполнения и сведения о его состояния можно просмотреть в разделе {% ifversion fpt or ghec %}"Средства выполнения"{% elsif ghae or ghes %}"Локальные средства выполнения"{% endif %}.

Чтобы локальное средство выполнения могло принимать задания, его приложение должно быть активным. Если приложение средства выполнения подключено к {% data variables.product.product_name %} и готово принимать задания, в терминале компьютера появится следующее сообщение.

{% data reusables.actions.self-hosted-runner-connected-output %}
