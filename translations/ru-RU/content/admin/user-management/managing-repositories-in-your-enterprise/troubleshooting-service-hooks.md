---
title: Устранение неполадок с перехватчиками событий
intro: 'Если полезные данные не доставляются, проверьте наличие следующих распространенных проблем.'
redirect_from:
  - /enterprise/admin/articles/troubleshooting-service-hooks
  - /enterprise/admin/developer-workflow/troubleshooting-service-hooks
  - /enterprise/admin/user-management/troubleshooting-service-hooks
  - /admin/user-management/troubleshooting-service-hooks
versions:
  ghes: '*'
  ghae: '*'
topics:
  - Enterprise
shortTitle: Troubleshoot service hooks
ms.openlocfilehash: 224a0071d87407f9f6bb15ababbdb0c7171f8799
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: ru-RU
ms.lasthandoff: 09/10/2022
ms.locfileid: '145116280'
---
## Получение информации о доставках

Сведения для последнего ответа всех доставок перехватчиков событий можно найти в любом репозитории.

{% data reusables.enterprise_site_admin_settings.access-settings %}
2. Перейдите в исследуемый репозиторий.
3. На боковой панели навигации щелкните ссылку **Перехватчики**.
  ![Боковая панель перехватчиков](/assets/images/enterprise/settings/Enterprise-Hooks-Sidebar.png)
4. Под перехватчиком события, с которым возникли проблемы, щелкните ссылку **Последняя доставка**.
  ![Сведения о перехватчике](/assets/images/enterprise/settings/Enterprise-Hooks-Details.png)
5. В разделе **Удаленные вызовы** вы увидите заголовки, которые использовались при отправке запросов POST на удаленный сервер, а также ответы, которые сервер отправил в вашу установку.

## Просмотр полезных данных

{% data reusables.enterprise_site_admin_settings.access-settings %}
2. Перейдите в исследуемый репозиторий.
3. На боковой панели навигации щелкните ссылку **Перехватчики**.
  ![Боковая панель перехватчиков](/assets/images/enterprise/settings/Enterprise-Hooks-Sidebar.png)
4. Под перехватчиком события, с которым возникли проблемы, щелкните ссылку **Последняя доставка**.
5. Щелкните **Доставка**.
  ![Просмотр полезных данных](/assets/images/enterprise/settings/Enterprise-Hooks-Payload.png)

## Просмотр прошедших доставок

Доставки хранятся в течение 15 дней.

{% data reusables.enterprise_site_admin_settings.access-settings %}
2. Перейдите в исследуемый репозиторий.
3. На боковой панели навигации щелкните ссылку **Перехватчики**.
  ![Боковая панель перехватчиков](/assets/images/enterprise/settings/Enterprise-Hooks-Sidebar.png)
4. Под перехватчиком события, с которым возникли проблемы, щелкните ссылку **Последняя доставка**.
5. Чтобы просмотреть другие доставки в конкретный перехватчик, щелкните **Дополнительные сведения для этого идентификатора перехватчика**: ![Просмотр других доставок](/assets/images/enterprise/settings/Enterprise-Hooks-More-Deliveries.png)
