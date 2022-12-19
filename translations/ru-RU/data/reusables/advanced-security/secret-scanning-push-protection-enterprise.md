---
ms.openlocfilehash: d16a36596ef06dfae6fa7ae9b689f1642dd4ff13
ms.sourcegitcommit: 3ce69524dc95bb450204ba2b8e82ee69af3af833
ms.translationtype: MT
ms.contentlocale: ru-RU
ms.lasthandoff: 10/20/2022
ms.locfileid: "148101674"
---
1. В разделе "{% data variables.product.prodname_secret_scanning_caps %}" в группе "Принудительная защита" щелкните **Включить все**.
   
   ![Снимок экрана: включение защиты от принудительной отправки данных для {% variables.product.prodname_secret_scanning %} для предприятия](/assets/images/enterprise/security/secret-scanning-enable-push-protection-enterprise.png)

2. При необходимости нажмите кнопку "Автоматически включить для репозиториев, добавленных в {% данных variables.product.prodname_secret_scanning %}". {% ifversion secret-scanning-custom-link-on-block %}
3. При необходимости, чтобы включить пользовательскую ссылку в сообщение, которое участники увидят при попытке отправить секрет, нажмите кнопку **"Добавить ссылку на ресурс" в интерфейсе командной строки и пользовательском веб-интерфейсе при блокировке фиксации**, введите URL-адрес и нажмите кнопку **"Сохранить ссылку**".

   ![Снимок экрана: флажок и текстовое поле для включения пользовательской ссылки](/assets/images/help/organizations/secret-scanning-custom-link.png){% endif %}
