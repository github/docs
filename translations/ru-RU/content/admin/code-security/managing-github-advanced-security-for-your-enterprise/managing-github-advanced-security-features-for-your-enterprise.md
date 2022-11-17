---
title: Управление функциями GitHub Advanced Security для предприятия
intro: 'Вы можете управлять функциями {% data variables.product.prodname_GH_advanced_security %}, которые защищают и анализируют код во всех организациях, принадлежащих вашему предприятию.'
permissions: 'Enterprise owners can manage {% data variables.product.prodname_advanced_security %} features for organizations in an enterprise.'
versions:
  feature: secret-scanning-enterprise-level
type: how_to
topics:
  - Alerts
  - Advanced Security
  - Dependency graph
  - Secret scanning
  - Repositories
shortTitle: Manage GitHub Advanced Security
ms.openlocfilehash: 0d48863d55805c5386435b7fef52a61a4ba7d43c
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: MT
ms.contentlocale: ru-RU
ms.lasthandoff: 10/25/2022
ms.locfileid: '148107208'
---
## Сведения об управлении функциями {% data variables.product.prodname_advanced_security %}

Функции {% data variables.product.prodname_advanced_security %} можно использовать для усиления безопасности организаций на предприятии. Чтобы упростить управление {% data variables.product.prodname_advanced_security %}, можно включить или отключить каждую функцию для всех существующих и (или) новых репозиториев в организациях, принадлежащих вашему предприятию.

{% ifversion ghes or ghec %} Сведения о покупке лицензии для {% data variables.product.prodname_GH_advanced_security %} см. в разделе [Сведения о выставлении счетов за {% data variables.product.prodname_GH_advanced_security %}](/billing/managing-billing-for-github-advanced-security/about-billing-for-github-advanced-security). {% elsif ghae %} Плата за {% data variables.product.prodname_GH_advanced_security %} в {% data variables.product.prodname_ghe_managed %} во время бета-версии не взимается. {% endif %}

Если вы запретили {% data variables.product.prodname_GH_advanced_security %} для организации, эта организация не будет затронута включением функции для всех существующих репозиториев или для всех новых репозиториев. Дополнительные сведения о запрете {% data variables.product.prodname_GH_advanced_security %} для организации см. [в разделе Применение политик для расширенной безопасности на предприятии](/admin/policies/enforcing-policies-for-your-enterprise/enforcing-policies-for-advanced-security-in-your-enterprise).

При включении одной или нескольких функций безопасности и анализа для существующих репозиториев все результаты отображаются в {% data variables.product.prodname_dotcom %} в течение нескольких минут.

{% data reusables.security.security-and-analysis-features-enable-read-only %}

## Управление функциями {% data variables.product.prodname_advanced_security %}

{% data reusables.advanced-security.note-org-enable-uses-seats %}

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.settings-tab %}
1. На левой боковой панели щелкните **Код безопасности & анализ**. 
1. При необходимости включите или отключите функцию для всех существующих репозиториев.

   - Справа от функции щелкните **Отключить все** или **Включить все**. {% ifversion ghes or ghec %} Если элемент управления "{% data variables.product.prodname_GH_advanced_security %}" отключен, у вас нет доступных рабочих мест в лицензии {% data variables.product.prodname_GH_advanced_security %}. {% endif %}
   
   ![Снимок экрана: кнопки "Включить все" или "Отключить все" для функций "Настройка безопасности и анализа"](/assets/images/enterprise/security/enterprise-security-and-analysis-disable-or-enable-all.png)

   - Чтобы подтвердить изменение, щелкните **Включить/Отключить все** или **Включить или Отключить для соответствующих репозиториев**.
   
     ![Снимок экрана: кнопка для включения функции для всех соответствующих репозиториев в организации](/assets/images/enterprise/security/enterprise-security-and-analysis-enable-secret-scanning.png)

1. При необходимости, чтобы включить или отключить функцию автоматически при добавлении новых репозиториев, установите флажок под функцией.
   
   ![Снимок экрана: флажок для включения функции для новых репозиториев](/assets/images/enterprise/security/enterprise-security-and-analysis-enable-or-disable-feature-checkbox.png){% ifversion secret-scanning-custom-link-on-block %}

1. При необходимости, чтобы включить ссылку на ресурс в сообщение, которое будет отображаться участникам при попытке отправить секрет, выберите **Добавить ссылку на ресурс в интерфейсе командной строки и веб-интерфейсе при блокировке фиксации**, введите URL-адрес и нажмите кнопку **Сохранить ссылку**.
  
  {% note %}

  **Примечание.** Если настраиваемая ссылка настроена для организации, значение уровня организации переопределяет набор настраиваемых ссылок для предприятия. Дополнительные сведения см. в разделе [Защита push-уведомлений с помощью сканирования секретов](/code-security/secret-scanning/protecting-pushes-with-secret-scanning).

  {% endnote %}

   ![Снимок экрана: флажок и текстовое поле для включения настраиваемой ссылки](/assets/images/help/organizations/secret-scanning-custom-link.png){% endif %}

