---
title: Управление глобальными веб-перехватчиками
shortTitle: Manage global webhooks
intro: 'Глобальные веб-перехватчики можно настроить для уведомления внешних веб-серверов, когда в вашем предприятии возникают события.'
permissions: Enterprise owners can manage global webhooks for an enterprise account.
redirect_from:
  - /enterprise/admin/user-management/about-global-webhooks
  - /enterprise/admin/user-management/managing-global-webhooks
  - /admin/user-management/managing-global-webhooks
  - /admin/user-management/managing-users-in-your-enterprise/managing-global-webhooks
  - /github/setting-up-and-managing-your-enterprise/managing-organizations-in-your-enterprise-account/configuring-webhooks-for-organization-events-in-your-enterprise-account
  - /articles/configuring-webhooks-for-organization-events-in-your-business-account
  - /articles/configuring-webhooks-for-organization-events-in-your-enterprise-account
  - /github/setting-up-and-managing-your-enterprise-account/configuring-webhooks-for-organization-events-in-your-enterprise-account
  - /github/setting-up-and-managing-your-enterprise/configuring-webhooks-for-organization-events-in-your-enterprise-account
  - /admin/user-management/monitoring-activity-in-your-enterprise/managing-global-webhooks
versions:
  ghec: '*'
  ghes: '*'
  ghae: '*'
type: how_to
topics:
  - Enterprise
  - Webhooks
ms.openlocfilehash: 5a9c4b8fe0b01dbe733e1c55d452ea88de1689c9
ms.sourcegitcommit: d697e0ea10dc076fd62ce73c28a2b59771174ce8
ms.translationtype: MT
ms.contentlocale: ru-RU
ms.lasthandoff: 10/20/2022
ms.locfileid: '148099276'
---
## Сведения о глобальных веб-перехватчиках

Глобальные веб-перехватчики можно использовать для уведомления внешнего веб-сервера, когда в вашем предприятии возникают события. Вы можете настроить сервер для получения полезных данных веб-перехватчика, а затем запустить приложение или код, который отслеживает, отвечает или применяет правила для управления пользователями и организациями вашего предприятия. Дополнительные сведения см. в разделе [Веб-перехватчики](/developers/webhooks-and-events/webhooks).

Например, можно настроить {% данных variables.location.product_location %} для отправки веб-перехватчика при создании, удалении или изменении репозитория или организации на предприятии. Сервер можно настроить для автоматического выполнения задачи после получения веб-перехватчика.

![Список глобальных веб-перехватчиков](/assets/images/enterprise/site-admin-settings/list-of-global-webhooks.png)

{% data reusables.enterprise_user_management.manage-global-webhooks-api %}

## Добавление глобального веб-перехватчика

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.settings-tab %} {% data reusables.enterprise-accounts.hooks-tab %}
5. Щелкните **Add webhook** (Добавить веб-перехватчик).
  ![Кнопка добавления веб-перехватчика на странице "Веб-перехватчики" в Центре администрирования](/assets/images/enterprise/site-admin-settings/add-global-webhook-button.png)
6. Введите URL-адрес для получения полезных данных.
  ![Поле для ввода URL-адреса полезных данных](/assets/images/enterprise/site-admin-settings/add-global-webhook-payload-url.png)
7. При необходимости выберите формат полезных данных в раскрывающемся меню **типа содержимого**.
  ![Раскрывающееся меню со списком типов содержимого](/assets/images/enterprise/site-admin-settings/add-global-webhook-content-type-dropdown.png)
8. При необходимости в поле **Секрет** введите строку, которая будет использоваться в качестве ключа `secret`.
  ![Поле для ввода строки, которая будет использоваться в качестве секретного ключа](/assets/images/enterprise/site-admin-settings/add-global-webhook-secret.png)
9. При необходимости, если URL-адрес полезных данных — HTTPS, и вам не нравится {% data variables.product.prodname_ghe_server %} для проверки SSL-сертификатов при доставке полезных данных, выберите **Отключить проверку SSL**. Прочтите сведения о проверке SSL, а затем выберите **Я понимаю, что мои веб-перехватчики могут быть не защищены**.
  ![Флажок для отключения проверки SSL](/assets/images/enterprise/site-admin-settings/add-global-webhook-disable-ssl-button.png)

  {% warning %}

  **Предупреждение.** Проверка SSL помогает обеспечить безопасную доставку полезных данных перехватчиков. Не рекомендуется отключать проверку SSL.

  {% endwarning %}
10. Решите, как должен инициироваться этот веб-перехватчик: для каждого события или для выбранных событий.
  ![Переключатели с вариантами получения полезных данных для каждого события или для выбранных событий](/assets/images/enterprise/site-admin-settings/add-global-webhook-select-events.png)
    - Для каждого события установите флажок **Отправлять все**.
    - Чтобы выбрать определенные события, установите флажок **Дать мне выбрать отдельные события**.
11. Если вы решили, что вам нужны лишь отдельные события, выберите события, которые будут активировать веб-перехватчик.
      {% ifversion ghec %} ![Флажки для отдельных глобальных событий веб-перехватчика](/assets/images/enterprise/site-admin-settings/add-global-webhook-select-individual-events.png) {% elsif ghes or ghae %} ![Флажки для отдельных глобальных событий веб-перехватчика](/assets/images/enterprise/site-admin-settings/add-global-webhook-select-individual-events-ghes-and-ae.png) {% endif %}
12. Убедитесь, что установлен флажок **Активно**.
  ![Выбранный флажок "Активно"](/assets/images/help/business-accounts/webhook-active.png)
13. Щелкните **Add webhook** (Добавить веб-перехватчик).

## Изменение глобального веб-перехватчика

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.settings-tab %} {% data reusables.enterprise-accounts.hooks-tab %}
5. Рядом с веб-перехватчиком, который вы хотите изменить, нажмите кнопку **Правка**.
  ![Кнопка "Правка" рядом с веб-перехватчиком](/assets/images/enterprise/site-admin-settings/edit-global-webhook-button.png)
6. Обновите параметры веб-перехватчика.
7. Щелкните **Обновить веб-перехватчик**.

## Удаление глобального веб-перехватчика

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.settings-tab %} {% data reusables.enterprise-accounts.hooks-tab %}
5. Рядом с веб-перехватчиком, который вы хотите удалить, нажмите кнопку **Удалить**.
  ![Кнопка "Удалить" рядом с веб-перехватчиком](/assets/images/enterprise/site-admin-settings/delete-global-webhook-button.png)
6. Прочтите сведения об удалении веб-перехватчика, а затем нажмите **Да, удалить веб-перехватчик**.
  ![Всплывающее окно с предупреждающим сообщением и кнопкой для подтверждения удаления веб-перехватчика](/assets/images/enterprise/site-admin-settings/confirm-delete-global-webhook.png)

## Просмотр последних доставок и ответов

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.settings-tab %} {% data reusables.enterprise-accounts.hooks-tab %}
5. В списке веб-перехватчиков щелкните веб-перехватчик, для которого вы хотите просмотреть доставки.
  ![Список веб-перехватчиков со ссылками для просмотра каждого веб-перехватчика](/assets/images/enterprise/site-admin-settings/click-global-webhook.png)
6. В разделе "Последние доставки" щелкните доставку, чтобы просмотреть сведения о ней.
  ![Список последних доставок веб-перехватчика со ссылками для просмотра сведений](/assets/images/enterprise/site-admin-settings/global-webhooks-recent-deliveries.png)
