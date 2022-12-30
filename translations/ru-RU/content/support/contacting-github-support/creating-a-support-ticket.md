---
title: Создание запроса в службу поддержки
intro: 'Вы можете использовать {% ifversion ghae %}{% data variables.contact.ae_azure_portal %}{% else %}{% data variables.contact.support_portal %}{% endif %}, чтобы создать обращение в службу поддержки и обратиться к {% data variables.contact.github_support %}.'
shortTitle: Creating a ticket
versions:
  fpt: '*'
  ghec: '*'
  ghes: '*'
  ghae: '*'
redirect_from:
  - /enterprise/admin/enterprise-support/preparing-to-submit-a-ticket
  - /admin/enterprise-support/preparing-to-submit-a-ticket
  - /admin/enterprise-support/receiving-help-from-github-support/preparing-to-submit-a-ticket
  - /enterprise/admin/guides/enterprise-support/reaching-github-enterprise-support
  - /enterprise/admin/enterprise-support/reaching-github-support
  - /admin/enterprise-support/reaching-github-support
  - /admin/enterprise-support/receiving-help-from-github-support/reaching-github-support
  - /enterprise/admin/enterprise-support/submitting-a-ticket
  - /admin/enterprise-support/submitting-a-ticket
  - /admin/enterprise-support/receiving-help-from-github-support/submitting-a-ticket
  - /articles/submitting-a-ticket
  - /github/working-with-github-support/submitting-a-ticket
topics:
  - Support
ms.openlocfilehash: 4be0e3be4154354bbc8ea592c9c13af4c0e217b4
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: ru-RU
ms.lasthandoff: 09/10/2022
ms.locfileid: '145140137'
---
{% ifversion fpt or ghec or ghes %}

## Сведения о запросах в службу поддержки

{% data reusables.support.zendesk-old-tickets %}

{% ifversion fpt %} {% data reusables.support.free-and-paid-support %} {% endif %}

{% ifversion ghes or ghec %} {% data reusables.enterprise-accounts.support-entitlements %} {% endif %}

{% ifversion ghes %} Вы можете создать запрос в службу поддержки с помощью {% data variables.contact.support_portal %} или использовать консоль управления сервером GitHub Enterprise, если вместе с запросом в службу поддержки вы хотите включить диагностику.
{% endif %}

После создания запроса вы можете просмотреть его, а также ответы из {% data variables.contact.github_support %} в {% data variables.contact.contact_landing_page_portal %}. Дополнительные сведения см. в статье [Просмотр и обновление запросов в службу поддержки](/support/contacting-github-support/viewing-and-updating-support-tickets). 

## Что следует включить в запрос в службу поддержки

Предоставление {% data variables.contact.github_support %} со всем необходимым для распознавания, обнаружения и воспроизведения проблемы позволит быстрее устранить проблему и уменьшить количество колебаний между вами и группой технической поддержки. Чтобы гарантировать, что {% data variables.contact.github_support %} сможет вам помочь, при написании запроса в службу поддержки учитывайте следующее:

- Получите сведения, которые могут помочь {% data variables.contact.github_support %} отслеживать, назначать приоритеты, воспроизводить или исследовать проблему.
- По возможности включите полные URL-адреса, имена репозиториев и имена пользователей.
- Воспроизведите проблему (если это применимо) и будьте готовы предоставить общий доступ к шагам.
- Будьте готовы предоставить полное описание проблемы и ожидаемые результаты.
- Скопируйте точные формулировки всех сообщений об ошибках, связанных с вашей проблемой.
- Определите, существует ли в текущей переписке с {% data variables.contact.github_support %} номер запроса.
- Включите соответствующие журналы и вложите все снимки экрана, демонстрирующие проблему.

{% ifversion ghes %}
## Выбор контактного лица

В особенности для запросов с приоритетом {% data variables.product.support_ticket_priority_urgent %} пользователю, который обращается к {% data variables.contact.github_support %}, следует:

 - Быть осведомленным касательно внутренних систем, средств, политик и практик.
 - Быть опытным пользователем данных {% data variables.product.product_name %}.
 - Обладать полным доступом и разрешениями для всех служб, необходимых для устранения этой проблемы.
 - Быть авторизованным, чтобы вносить рекомендуемые изменения в сеть и все применимые продукты.

{% endif %}

## Создание запроса в службу поддержки{% ifversion ghes %} с помощью портала поддержки{% endif %}

1. Перейдите к {% data variables.contact.contact_support_portal %}.
{% data reusables.support.submit-a-ticket %}

{% ifversion ghes %}

## Создание запроса в службу поддержки с помощью консоли управления сервером GitHub Enterprise

{% data reusables.enterprise_site_admin_settings.access-settings %} {% data reusables.enterprise_site_admin_settings.management-console %} {% data reusables.enterprise_management_console.type-management-console-password %} {% data reusables.enterprise_management_console.support-link %}
1. Если вместе с запросом в службу поддержки вы хотите включить диагностику, в разделе "Диагностика" нажмите кнопку **Скачать сведения о диагностике** и сохраните файл локально. Позже вы вложите этот файл в запрос в службу поддержки.
  ![Снимок экрана, на котором изображена кнопка "Скачать сведения о диагностике" на странице поддержки консоли управления.](/assets/images/enterprise/support/download-diagnostics-info-button.png)
1. Чтобы завершить запрос и отобразить {% data variables.contact.enterprise_portal %}, в разделе "Открытие запроса на поддержку" нажмите кнопку **Создать запрос на поддержку**.
  ![Снимок экрана, на котором изображена кнопка "Создать запрос на поддержку" на странице поддержки консоли управления.](/assets/images/enterprise/management-console/open-support-request.png)
{% data reusables.support.submit-a-ticket %}

{% endif %}

{% elsif ghae %}

Вы можете отправить запрос в службу поддержки с {% data variables.product.prodname_ghe_managed %} из {% data variables.contact.ae_azure_portal %}.

## Предварительные требования

Чтобы отправить запрос для {% data variables.product.prodname_ghe_managed %} в {% data variables.contact.ae_azure_portal %}, необходимо указать идентификатор подписки {% data variables.product.prodname_ghe_managed %} в Azure для менеджера по обеспечению успеха клиента (CSAM) в корпорации Майкрософт.

## Отправка запроса в службу поддержки с помощью {% data variables.contact.ae_azure_portal %}

Коммерческие клиенты могут отправить запрос на поддержку в {% data variables.contact.contact_ae_portal %}. Государственные клиенты должны использовать [портал Azure для государственных клиентов](https://portal.azure.us/#blade/Microsoft_Azure_Support/HelpAndSupportBlade). Дополнительные сведения см. в статье о [создании запроса на поддержку Azure](https://docs.microsoft.com/azure/azure-portal/supportability/how-to-create-azure-support-request) в документации Майкрософт.

## Устранение неполадок в {% data variables.contact.ae_azure_portal %}

{% data variables.product.company_short %} не удается устранить проблемы с доступом и подпиской на портале Azure. Для получения справки по порталу Azure обратитесь к своему CSAM в корпорации Майкрософт или ознакомьтесь со следующими сведениями.

- Если вам не удается войти на портал Azure, см. статью об [устранении неполадок при входе в подписку Azure](https://docs.microsoft.com/en-US/azure/cost-management-billing/manage/troubleshoot-sign-in-issue) в документации Майкрософт или [отправьте запрос напрямую](https://support.microsoft.com/en-us/supportrequestform/84faec50-2cbc-9b8a-6dc1-9dc40bf69178).

- Если вы можете войти на портал Azure, но вам не удается отправить запрос для {% data variables.product.prodname_ghe_managed %}, ознакомьтесь с предварительными требованиями для отправки запроса. Дополнительные сведения см. в разделе [Предварительные требования](#prerequisites).

{% endif %}

## Дополнительные материалы

- [Сведения о поддержке GitHub](/support/learning-about-github-support/about-github-support)
