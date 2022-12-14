---
ms.openlocfilehash: 2e4a278a00c93ac7ca31e117bc61cd835f13022d
ms.sourcegitcommit: 3ce69524dc95bb450204ba2b8e82ee69af3af833
ms.translationtype: MT
ms.contentlocale: ru-RU
ms.lasthandoff: 10/20/2022
ms.locfileid: "148101641"
---
1. В разделе "{% data variables.product.prodname_secret_scanning_caps %}" в группе "Принудительная защита" щелкните **Включить все**.
  {% ifversion ghec %}![ Снимок экрана: включение защиты push-уведомлений для {% данных variables.product.prodname_secret_scanning %} для организации](/assets/images/help/organizations/secret-scanning-enable-push-protection-org.png){% elsif ghes > 3.4 или ghae > 3.4 %} ![Снимок экрана, показывающий, как включить защиту push-уведомлений для {% данных variables.product.prodname_secret_scanning %} для организации](/assets/images/help/organizations/secret-scanning-enable-push-protection-org-ghes.png){% endif %}
1. При необходимости нажмите кнопку "Автоматически включить для репозиториев, добавленных в {% данных variables.product.prodname_secret_scanning %}". {% ifversion push-protection-custom-link-orgs %}
1. При необходимости, чтобы включить пользовательскую ссылку в сообщение, которое участники увидят при попытке отправить секрет, выберите "**Добавить ссылку на ресурс" в интерфейсе командной строки и пользовательском веб-интерфейсе при блокировке фиксации**, введите URL-адрес и нажмите кнопку **"Сохранить".**

   ![Снимок экрана: флажок и текстовое поле для включения пользовательской ссылки](/assets/images/help/organizations/secret-scanning-custom-link.png){% endif %}
