---
title: Сведения о поддержке GitHub
intro: 'Вы можете обратиться в службу поддержки GitHub, чтобы получить помощь в устранении проблем, возникающих при использовании GitHub.'
shortTitle: About GitHub Support
versions:
  fpt: '*'
  ghec: '*'
  ghes: '*'
  ghae: '*'
redirect_from:
  - /enterprise/admin/enterprise-support/about-github-enterprise-support
  - /admin/enterprise-support/about-github-enterprise-support
  - /admin/enterprise-support/overview/about-github-enterprise-support
  - /articles/about-github-support
  - /github/working-with-github-support/about-github-support
  - /articles/github-enterprise-cloud-support
  - /github/working-with-github-support/github-enterprise-cloud-support
  - /articles/business-plan-support
  - /articles/github-business-cloud-support
  - /admin/enterprise-support/about-support-for-advanced-security
  - /enterprise-server/admin/enterprise-support/about-support-for-advanced-security
topics:
  - Support
ms.openlocfilehash: aa2b407b96cc7ee2ecc20fee9782e3084b3627db
ms.sourcegitcommit: 6185352bc563024d22dee0b257e2775cadd5b797
ms.translationtype: MT
ms.contentlocale: ru-RU
ms.lasthandoff: 12/09/2022
ms.locfileid: '148192916'
---
## Сведения о {% data variables.contact.github_support %}

Варианты поддержки, доступные пользователям {% data variables.product.prodname_dotcom %}, зависят от продуктов, используемых их личными учетными записями, организаций или предприятий, членами которых они являются, в которых они входят, и экземпляров {% data variables.product.prodname_ghe_server %}, которыми они управляют. Каждый продукт включает уровень поддержки по умолчанию, и учетные записи, использующие {% data variables.product.prodname_enterprise %}, могут приобрести {% data variables.contact.premium_support %}.

{% ifversion fpt %} Если вы являетесь членом организации, использующей {% data variables.product.prodname_enterprise %}, то можете просмотреть версию этих статей, соответствующую вашему продукту, с помощью раскрывающегося меню в правом верхнем углу {% data variables.product.prodname_docs %}. Дополнительные сведения см. в разделе [Сведения о версиях документации GitHub](/get-started/learning-about-github/about-versions-of-github-docs).
{% endif %}

{% ifversion not ghae %}

|  | {% data variables.product.prodname_gcf %} | Поддержка уровня "Стандартный" | Поддержка уровня "Премиум" |
|----|---------------|-------|---------------|
| {% data variables.product.prodname_free_user %} | {% octicon "check" aria-label="Check" %}  |  |  |  
| {% data variables.product.prodname_pro %} | {% octicon "check" aria-label="Check" %}  | {% octicon "check" aria-label="Check" %}  |  |  
| {% data variables.product.prodname_team %} | {% octicon "check" aria-label="Check" %}  | {% octicon "check" aria-label="Check" %}  |  |
| {% data variables.product.prodname_ghe_cloud %} | {% octicon "check" aria-label="Check" %}  | {% octicon "check" aria-label="Check" %}  | Доступно для покупки |
| {% data variables.product.prodname_ghe_server %} | {% octicon "check" aria-label="Check" %}  | {% octicon "check" aria-label="Check" %}  | Доступно для покупки |

{% endif %}

{% ifversion ghes %}

Вы можете обратиться в {% data variables.contact.enterprise_support %} через {% data variables.contact.contact_enterprise_portal %} для получения помощи по следующим вопросам.
 - Установка и использование {% data variables.product.product_name %}
 - Выявление и проверка причин подозрительных ошибок
 - Установка и использование {% data variables.product.prodname_advanced_security %}

{% endif %}

{% ifversion ghes or ghec %}

{% data reusables.support.premium-support-features %}

Дополнительные сведения см. в разделе [Сведения о поддержке GitHub уровня "Премиум"](/support/about-github-support/about-github-premium-support).

{% endif %}

{% ifversion fpt or ghec or ghae %}

Прежде чем обращаться в {% data variables.contact.github_support %}, проверьте, влияют ли в настоящий момент какие-либо инциденты на службы в {% data variables.product.product_name %} на странице{%- ifversion fpt or ghec %} [{% data variables.product.prodname_dotcom %} Status](https://githubstatus.com/){%- elsif ghae %} [{% data variables.product.product_name %} Status](https://ghestatus.com/){%- endif %}. Дополнительные сведения см. в разделе [Сведения о состоянии GitHub](#about-github-status).

{% endif %}

{% ifversion fpt %} {% data reusables.support.free-and-paid-support %}

Чтобы сообщить о проблемах, связанных с учетной записью, безопасностью или злоупотреблениями, или получить поддержку для платной учетной записи, посетите {% data variables.contact.contact_support_portal %}. Дополнительные сведения см. в разделе [Создание запроса в службу поддержки](/support/contacting-github-support/creating-a-support-ticket).
{% endif %}

{% ifversion fpt %} Если у вас есть платный продукт или вы являетесь членом организации, имеющей платный продукт, вы можете связаться с {% data variables.contact.github_support %} на английском языке.
{% else %} Если у вас есть {% data variables.product.product_name %}, вы можете получить поддержку на английском и японском языках.
{% endif %}

{% ifversion fpt or ghec or ghes %} {% data reusables.support.support-ticket-translation-option %} {% endif %}

{% ifversion ghes or ghec %}

Чтобы связаться с {% data variables.contact.github_support %}, посетите {% data variables.contact.contact_support_portal %}. Дополнительные сведения см. в разделе [Создание запроса в службу поддержки](/support/contacting-github-support/creating-a-support-ticket).

{% elsif ghae %}

Вы можете обратиться в {% data variables.contact.enterprise_support %} через {% data variables.contact.ae_azure_portal %}, чтобы сообщить о проблемах в письменном виде. Дополнительные сведения см. в разделе [Создание запроса в службу поддержки](/support/contacting-github-support/creating-a-support-ticket).

{% endif %}

{% ifversion not ghae %} Электронные письма от GitHub Support всегда отправляются с адреса `github.com` или `githubsupport.com`.
{% endif %}

## Область поддержки

{% data reusables.support.scope-of-support %}

{% ifversion ghec or fpt or ghae %}
## Сведения о состоянии GitHub

Наличие инцидентов, влияющих на службы {% data variables.product.product_name %} в настоящий момент, а также сведения о прошлых инцидентах можно просмотреть на странице [{% data variables.product.prodname_dotcom %} Status]({% ifversion fpt or ghec %}https://githubstatus.com{% elsif ghae %}https://ghestatus.com{% endif %}).

Вы также можете подписаться и получать оповещения посредством электронной почты, текстовых сообщений и веб-перехватчика при возникновении инцидента, затрагивающего {% data variables.product.product_name %}.

{% endif %}

{% ifversion ghec or ghes %}
## Права на поддержку

Владельцы предприятий и менеджеры по выставлению счетов автоматически получают право на поддержку, что позволяет им создавать, просматривать и комментировать запросы в службу поддержки, связанные с их корпоративной учетной записью.

Владельцы предприятий также могут добавлять права на поддержку для членов организаций, принадлежащих их корпоративной учетной записи, что позволяет этим членам создавать, просматривать и комментировать запросы в службу поддержки. Дополнительные сведения см. в разделе [Управление правами специалистов службы поддержки для вашего предприятия](/enterprise-cloud@latest/admin/user-management/managing-users-in-your-enterprise/managing-support-entitlements-for-your-enterprise).

{% endif %}

{% ifversion fpt or ghec %}
## Предоставление {% data variables.contact.github_support %} временного доступа к частному репозиторию

Если {% data variables.contact.github_support %} требуется доступ к частному репозиторию для решения вопросов, связанных с вашим запросом на поддержку, владелец репозитория получит электронное письмо со ссылкой, по которой он может принять или отклонить предоставление временного доступа. У владельца будет 20 дней на то, чтобы принять или отклонить запрос, до истечения срока действия запроса. Если владелец примет запрос, {% data variables.contact.github_support %} будет иметь доступ к репозиторию в течение пяти дней. В этом окне сотрудники {% data variables.contact.github_support %} с необходимыми привилегиями могут разблокировать репозиторий в течение двух часов за раз и повторно заблокировать репозиторий, если работа завершится раньше. При доступе всех сотрудников {% data variables.contact.github_support %} создаются события журнала аудита, и видимость репозитория не влияет ни на что.

{% data variables.contact.github_support %} никогда не получит доступ к частным репозиториям без вашего явного согласия. Дополнительные сведения см. в разделе [Условия предоставления услуг](/free-pro-team@latest/github/site-policy/github-terms-of-service#3-access).
{% endif %}

{% ifversion ghec or ghes %}
## Обращение в GitHub Sales и GitHub Training

Для получения сведений о ценах, лицензировании, возобновлении действия, квотах, платежах и ответов на другие связанные с этими темами вопросы обратитесь в {% data variables.contact.contact_enterprise_sales %} или позвоните по номеру [+1 (877) 448-4820](tel:+1-877-448-4820).

Дополнительные сведения о вариантах обучения, включая индивидуальное обучение, см. на [сайте обучения {% data variables.product.company_short %}](https://services.github.com/).

{% note %}

**Примечание.** Обучение включено в {% data variables.product.premium_plus_support_plan %}. Дополнительные сведения см. в разделе [Сведения о поддержке GitHub уровня "Премиум"](/support/about-github-support/about-github-premium-support).

{% endnote %}

{% endif %}

{% ifversion ghes or ghec %}
## Часы работы

### Поддержка на английском языке

Для стандартных вопросов, на которые не требуется срочный ответ, мы предлагаем круглосуточную поддержку на английском языке 5 дней в неделю, за исключением выходных и национальных праздников США. Стандартное время отклика — 24 часа.

{% ifversion ghes %} Для срочных вопросов мы доступны круглосуточно и ежедневно, даже в дни национальных праздников США.
{% endif %}

### Поддержка на японском языке

Для стандартных вопросов, на которые не требуется срочный ответ, поддержка на японском языке доступна с понедельника по пятницу с 9:00 до 17:00 по японскому поясному времени, за исключением дней национальных праздников в Японии. 

{% ifversion ghes %} Для срочных вопросов мы предлагаем поддержку на английском языке круглосуточно и ежедневно, даже в дни национальных праздников США.
{% endif %}

Полный список национальных праздников США и Японии, соблюдаемых {% data variables.contact.enterprise_support %}, см. в разделе [Расписание праздников](#holiday-schedules).

## Расписание праздников

Для срочных вопросов мы оказываем поддержку на английском языке круглосуточно и ежедневно, в том числе в дни американских и японских праздников.

### Праздники в США

{% data variables.contact.enterprise_support %} соблюдает эти праздники США, хотя наша глобальная группа поддержки остается доступной для ответа на срочные вопросы.

{% data reusables.enterprise_enterprise_support.support-holiday-availability %}

### Праздники в Японии

{% data variables.contact.enterprise_support %} не предоставляет поддержку на японском языке с 28 декабря по 3 января, а также в праздничные дни, перечисленные в [国民の祝日について - 内閣府](https://www8.cao.go.jp/chosei/shukujitsu/gaiyou.html).

{% data reusables.enterprise_enterprise_support.installing-releases %}

{% endif %}

{% ifversion ghec or ghes or ghae %}

## Разрешение и закрытие запросов в службу поддержки

{% data reusables.support.enterprise-resolving-and-closing-tickets %}

{% endif %}

## Дополнительные материалы

{%- ifversion ghes %}
- Раздел 10 о поддержке в [лицензионном соглашении {% data variables.product.prodname_ghe_server %}](https://enterprise.github.com/license) {%- endif %}
- [Создание запроса в службу поддержки](/support/contacting-github-support/creating-a-support-ticket) {%- ifversion not ghae %}
- [Просмотр и обновление запросов в службу поддержки](/support/contacting-github-support/viewing-and-updating-support-tickets) {%- endif %}
