---
ms.openlocfilehash: 53ead6c394e757a67d36fde9c73c74eec7e963bc
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: ru-RU
ms.lasthandoff: 09/10/2022
ms.locfileid: "145089058"
---
1. Введите сведения о новом пользовательском шаблоне:
   1. Необходимо по крайней мере указать имя шаблона и регулярное выражение для формата шаблона секрета.
   1. Можно щелкнуть **Дополнительные параметры {% octicon "chevron-down" aria-label="down" %}** , чтобы предоставить другое дополнительное содержимое или требований соответствия для формата секрета.
   1. Предоставьте пример тестовой строки для проверки соответствия конфигурации ожидаемым шаблонам.
   {% ifversion fpt or ghec or ghes > 3.4 or ghae-issue-5499 %} ![Создание пользовательской формы шаблона {% data variables.product.prodname_secret_scanning %}](/assets/images/help/repository/secret-scanning-create-custom-pattern.png) {% else %} ![Создание пользовательской формы шаблона {% data variables.product.prodname_secret_scanning %}](/assets/images/enterprise/3.2/repository/secret-scanning-create-custom-pattern.png) {% endif %}
