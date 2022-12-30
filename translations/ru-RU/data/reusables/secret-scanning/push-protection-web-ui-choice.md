---
ms.openlocfilehash: 7bb1603715c255f08ac0bfbe7ff2cdbfe99a3134
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: MT
ms.contentlocale: ru-RU
ms.lasthandoff: 10/25/2022
ms.locfileid: "148109123"
---
При попытке использовать веб-интерфейс, чтобы зафиксировать поддерживаемый секрет в репозиторий или организацию с включенной защитой отправок, {% data variables.product.prodname_dotcom %} заблокирует отправку. 

Вы увидите баннер в верхней части страницы со сведениями о расположении секрета, а секрет также будет подчеркнут в файле, чтобы его можно было легко найти.

{% ifversion push-protection-custom-link-orgs %}

  ![Снимок экрана: фиксация с помощью веб-интерфейса заблокирована из-за защиты отправок с помощью сканирования секретов](/assets/images/help/repository/secret-scanning-push-protection-web-ui-commit-blocked-banner-with-link.png)

{% else %}

  ![Снимок экрана: фиксация с помощью веб-интерфейса заблокирована из-за защиты отправок с помощью сканирования секретов](/assets/images/help/repository/secret-scanning-push-protection-web-ui-commit-blocked-banner.png)
  
{% endif %}
