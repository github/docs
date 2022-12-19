---
title: Просмотр и обновление запросов в службу поддержки
intro: 'Вы можете просматривать запросы в службу поддержки{% ifversion ghes or ghec %}, совместно работать над запросами с коллегами{% endif %} и отвечать {% data variables.contact.github_support %}, используя {% data variables.contact.support_portal %}.'
shortTitle: Managing your tickets
versions:
  fpt: '*'
  ghec: '*'
  ghes: '*'
topics:
  - Support
ms.openlocfilehash: b735331d90c590ff6911fed44e181563b44bfc27
ms.sourcegitcommit: 6185352bc563024d22dee0b257e2775cadd5b797
ms.translationtype: MT
ms.contentlocale: ru-RU
ms.lasthandoff: 12/09/2022
ms.locfileid: '148193619'
---
## Сведения об управлении запросами в службу поддержки

{% data reusables.support.zendesk-old-tickets %}

Вы можете использовать [Портал поддержки GitHub](https://support.github.com/) для просмотра текущих и прошлых запросов в службу поддержки и ответа на {% data variables.contact.github_support %}. Через 120 дней разрешенные запросы архивируются{% ifversion ghec or ghes or ghae %}, и архивные запросы можно просматривать только для корпоративных учетных записей{% endif %}.

{% ifversion ghes or ghec %} {% data reusables.enterprise-accounts.support-entitlements %} {% endif %}

## Просмотр недавних запросов в службу поддержки

{% data reusables.support.view-open-tickets %}
1. В текстовом поле можно просмотреть журнал комментариев. Последний ответ находится вверху.

   ![Снимок экрана: журнал комментариев в службу поддержки с самым последним ответом вверху](/assets/images/help/support/support-recent-response.png)

1. При необходимости, чтобы перевести комментарий к запросу, щелкните {% octicon "globe" aria-label="The globe icon" %} и выберите предпочитаемый язык в раскрывающемся меню. Вы можете перевести запрос в службу поддержки на китайский (упрощенное письмо), французский, немецкий, японский, португальский (Бразилия) или испанский.

   ![Снимок экрана: запрос в службу поддержки с раскрывающимся меню с выделенными параметрами перевода](/assets/images/help/support/support-ticket-translation-options.png)

{% ifversion ghec or ghes or ghae %}

## Просмотр архивных запросов в службу поддержки

Вы можете просматривать архивные запросы только для корпоративной учетной записи.

{% data reusables.support.navigate-to-my-tickets %}
1. Выберите раскрывающееся меню **Мои запросы** и щелкните имя корпоративной учетной записи. 

{% indented_data_reference reusables.support.entitlements-note spaces=3 %}

   ![Снимок экрана: раскрывающееся меню "Мои запросы".](/assets/images/help/support/ticket-context.png)
1. В таблице "Мои запросы" щелкните **Просмотреть архивные запросы**.

{% endif %}

## Обновление запросов в службу поддержки.

{% data reusables.support.view-open-tickets %}
1. При необходимости, если проблема устранена, в текстовом поле нажмите кнопку **Закрыть запрос**.
![Снимок экрана: расположение кнопки "Закрыть запрос".](/assets/images/help/support/close-ticket.png)
1. Чтобы ответить службе поддержки GitHub и добавить новый комментарий в запрос, введите ответ в текстовом поле.
![Снимок экрана: текстовое поле "Добавить комментарий".](/assets/images/help/support/new-comment-field.png)
1. Чтобы добавить комментарий к запросу, нажмите кнопку **Комментарий**.
![Снимок экрана: кнопка "Комментарий".](/assets/images/help/support/add-comment.png)

{% ifversion ghec or ghes %}
## Совместная работа с запросами в службу поддержки

Вы можете совместно работать со своими коллегами над запросами в службу поддержки с помощью портала поддержки. Владельцы, менеджеры по выставлению счетов и другие участники предприятия с правами специалистов службы поддержки могут просматривать запросы, связанные с корпоративной учетной записью или организацией, которая управляется корпоративной учетной записью. Дополнительные сведения см. в разделе [Управление правами специалистов службы поддержки для вашего предприятия](/enterprise-cloud@latest/admin/user-management/managing-users-in-your-enterprise/managing-support-entitlements-for-your-enterprise).

Помимо просмотра запросов, вы также можете добавлять комментарии в запросы в службу поддержки, если ваш адрес электронной почты скопирован в запросе или если пользователь, открывший запрос, использовал адрес электронной почты с доменом, проверенным для корпоративной учетной записи или организации, которая управляется корпоративной учетной записью. Дополнительные сведения о проверке домена см. в разделе [Проверка или утверждение домена для вашего предприятия](/enterprise-cloud@latest/admin/configuration/configuring-your-enterprise/verifying-or-approving-a-domain-for-your-enterprise) и [Проверка или утверждение домена для вашей организации](/enterprise-cloud@latest/organizations/managing-organization-settings/verifying-or-approving-a-domain-for-your-organization).

{% endif %}

## Дополнительные материалы

- [Сведения о поддержке GitHub](/support/learning-about-github-support/about-github-support)
