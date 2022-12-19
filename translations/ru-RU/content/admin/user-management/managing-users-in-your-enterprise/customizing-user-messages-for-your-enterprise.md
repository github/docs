---
title: Настройка сообщений для пользователей на предприятии
shortTitle: Customizing user messages
redirect_from:
  - /enterprise/admin/user-management/creating-a-custom-sign-in-message
  - /enterprise/admin/user-management/customizing-user-messages-on-your-instance
  - /admin/user-management/customizing-user-messages-on-your-instance
  - /admin/user-management/customizing-user-messages-for-your-enterprise
intro: 'Вы можете создавать пользовательские сообщения, которые пользователи будут видеть в {% data variables.location.product_location %}.'
versions:
  ghes: '*'
  ghae: '*'
type: how_to
topics:
  - Enterprise
  - Maintenance
ms.openlocfilehash: b767a651f19b6200abfc67696d98147ebf65bd9a
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: MT
ms.contentlocale: ru-RU
ms.lasthandoff: 10/25/2022
ms.locfileid: '148106438'
---
## Сведения о сообщениях для пользователей

Существует несколько типов сообщений для пользователей.
- Сообщения, отображаемые на {% ifversion ghes %}странице входа или {% endif %}выхода{% ifversion ghes or ghae %}
- Обязательные сообщения, отображаемые один раз во всплывающем окне, которое необходимо закрыть{% endif %}{% ifversion ghes or ghae %}
- Баннеры объявлений, отображаемые в верхней части каждой страницы{% endif %}

{% ifversion ghes %} {% note %}

**Примечание.** Если для проверки подлинности используется SAML, страница входа отображается поставщиком удостоверений и настроить ее с помощью {% data variables.product.prodname_ghe_server %} нельзя.

{% endnote %}

Для форматирования сообщения можно использовать разметку Markdown. Дополнительные сведения см. в разделе [Сведения о написании и форматировании в {% data variables.product.prodname_dotcom %}](/articles/about-writing-and-formatting-on-github/).

## Создание пользовательского сообщения о входе

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.settings-tab %} {% data reusables.enterprise-accounts.messages-tab %}
5. {% ifversion ghes %}Справа от раздела{% else %}В разделе {% endif %} "Страница входа" нажмите кнопку **Добавить сообщение** или **Изменить сообщение**.
![Кнопка "{% ifversion ghes %}Добавить{% else %}Изменить{% endif %} сообщение"](/assets/images/enterprise/site-admin-settings/edit-message.png)
6. В разделе **Сообщение о входе** введите сообщение, которое должно отображаться для пользователей.
![Сообщение о входе](/assets/images/enterprise/site-admin-settings/sign-in-message.png){% ifversion ghes %} {% data reusables.enterprise_site_admin_settings.message-preview-save %}{% else %} {% data reusables.enterprise_site_admin_settings.click-preview %} ![Кнопка предварительного просмотра](/assets/images/enterprise/site-admin-settings/sign-in-message-preview-button.png)
8. Просмотрите отрисованное сообщение.
![Отрисованное сообщение о входе](/assets/images/enterprise/site-admin-settings/sign-in-message-rendered.png) {% data reusables.enterprise_site_admin_settings.save-changes %}{% endif %} {% endif %}

## Создание пользовательского сообщения о выходе

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.settings-tab %} {% data reusables.enterprise-accounts.messages-tab %}
5. {% ifversion ghes or ghae %}Справа от раздела{% else %}В разделе {% endif %} "Страница выхода" нажмите кнопку **Добавить сообщение** или **Изменить сообщение**.
![Кнопка "Добавить сообщение"](/assets/images/enterprise/site-admin-settings/sign-out-add-message-button.png)
6. В разделе **Сообщение о выходе** введите сообщение, которое должно отображаться для пользователей.
![Сообщение о выходе](/assets/images/enterprise/site-admin-settings/sign-out-message.png){% ifversion ghes or ghae %} {% data reusables.enterprise_site_admin_settings.message-preview-save %}{% else %} {% data reusables.enterprise_site_admin_settings.click-preview %} ![Кнопка предварительного просмотра](/assets/images/enterprise/site-admin-settings/sign-out-message-preview-button.png)
8. Просмотрите отрисованное сообщение.
![Отрисованное сообщение о выходе](/assets/images/enterprise/site-admin-settings/sign-out-message-rendered.png) {% data reusables.enterprise_site_admin_settings.save-changes %}{% endif %}

{% ifversion ghes or ghae %}
## Создание обязательного сообщения

Можно создать обязательное сообщение, которое после сохранения {% data variables.product.product_name %} будет отображать для всех пользователей при первом входе. Сообщение появится во всплывающем окне, которое пользователь должен закрыть перед использованием {% data variables.location.product_location %}.

С помощью обязательных сообщений можно:

- предоставлять сведения о подключении для новых сотрудников;
- Предоставление пользователям сведений о том, как получить справку по {% data variables.location.product_location %}
- Обеспечение того, чтобы все пользователи читали ваши условия обслуживания для использования {% data variables.location.product_location %}

Если сообщение содержит флажки Markdown, все флажки следует установить, чтобы пользователь смог закрыть сообщение. Например, если вы включили в обязательное сообщение условия предоставления услуг, можно потребовать, чтобы каждый пользователь установил флажок в подтверждение ознакомления с условиями.

Каждый раз, когда пользователь видит обязательное сообщение, создается событие журнала аудита. Это событие включает версию сообщения, которое просмотрел пользователь. Дополнительные сведения см. в разделе [События журнала аудита для предприятия](/admin/monitoring-activity-in-your-enterprise/reviewing-audit-logs-for-your-enterprise/audit-log-events-for-your-enterprise).

{% ifversion display-mandatory-message-again %} {% else %} {% примечание %}

**Примечание:** Если изменить обязательное сообщение для {% data variables.location.product_location %}, пользователи, которые уже подтвердили это сообщение, не увидят новое сообщение. 

{% endnote %} {% endif %}

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.settings-tab %} {% data reusables.enterprise-accounts.messages-tab %}
1. Справа от пункта "Обязательное сообщение" нажмите кнопку **Добавить сообщение**.
  ![Кнопка "Добавить обязательное сообщение"](/assets/images/enterprise/site-admin-settings/add-mandatory-message-button.png)
1. Введите сообщение в текстовом поле "Обязательное сообщение".
  ![Снимок экрана: текстовое поле](/assets/images/enterprise/site-admin-settings/mandatory-message-text-box.png) обязательного сообщения {%- ifversion display-mandatory-message-again %} 
1. При необходимости выберите **Показать обновленное сообщение всем пользователям, даже если они отклонили предыдущее** сообщение.
![Снимок экрана: флажок, который при выборе отправляет обязательные сообщения всем пользователям](/assets/images/enterprise/site-admin-settings/push-mandatory-message-checkbox.png) {% endif %} {% data reusables.enterprise_site_admin_settings.message-preview-save %}

{% endif %}

{% ifversion ghes or ghae %}
## Создание глобального баннера оповещений

Можно настроить глобальный баннер оповещений, который будет отображаться для всех пользователей в верхней части каждой страницы.

{% ifversion ghae or ghes %} Можно также настроить баннер оповещений{% ifversion ghes %} в административной оболочке с помощью служебной программы командной строки или{% endif %} с помощью API. Дополнительные сведения см. в разделах {% ifversion ghes %}[Служебные программы командной строки](/enterprise/admin/configuration/command-line-utilities#ghe-announce) и {% endif %}[Администрирование {% data variables.product.prodname_enterprise %}](/rest/reference/enterprise-admin#announcements).
{% else %}

Можно также настроить баннер оповещений в административной оболочке с помощью служебной программы командной строки. Дополнительные сведения см. в статье "[Программы командной строки](/enterprise/admin/configuration/command-line-utilities#ghe-announce)".

{% endif %}

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.settings-tab %} {% data reusables.enterprise-accounts.messages-tab %}
1. {% ifversion ghes or ghae %}Справа от раздела{% else %}В разделе {% endif %} "Оповещение" нажмите кнопку **Добавить оповещение**.
  ![Кнопка "Добавить оповещение"](/assets/images/enterprise/site-admin-settings/add-announcement-button.png)
1. В текстовом поле "Оповещение" введите оповещение, которое требуется отображать в баннере.
  ![Текстовое поле для ввода оповещения](/assets/images/enterprise/site-admin-settings/announcement-text-field.png)
1. При необходимости в разделе "Окончание срока действия" выберите раскрывающееся меню календаря и щелкните дату окончания срока действия.
  ![Раскрывающееся меню календаря для выбора даты окончания срока действия](/assets/images/enterprise/site-admin-settings/expiration-drop-down.png){% ifversion ghe-announce-dismiss %}
1. Если необходимо разрешить каждому пользователю закрыть объявление, выберите параметр **User dismissible** (Пользователь может закрыть).

   ![Снимок экрана: флажок User dismissible (Пользователь может закрыть)](/assets/images/enterprise/site-admin-settings/user-dismissible-checkbox.png){% endif %} {% data reusables.enterprise_site_admin_settings.message-preview-save %} {% endif %}
