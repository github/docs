---
title: Сведения об обновлении до новых выпусков
shortTitle: About upgrades
intro: '{% ifversion ghae %}Ваше предприятие в {% data variables.product.product_name %} регулярно обновляется с использованием последних функций и исправлений ошибок {% data variables.product.company_short %}.{% else %} Вы можете воспользоваться новыми функциями и исправлениями ошибок для {% data variables.product.product_name %}, обновив ваше предприятие до новой версии.{% endif %}'
versions:
  ghes: '*'
  ghae: '*'
type: overview
topics:
  - Enterprise
  - Upgrades
ms.openlocfilehash: b3a2d340ef73ffe92f2117caf38a84e76ba0c8d1
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: MT
ms.contentlocale: ru-RU
ms.lasthandoff: 10/25/2022
ms.locfileid: '148108853'
---
{% data reusables.enterprise.constantly-improving %}{% ifversion ghae %}{% data variables.product.prodname_ghe_managed %} — полностью управляемая служба, так что {% data variables.product.company_short %} завершает процесс обновления для предприятия.{% endif %}

Выпуски с новыми функциями включают новые возможности и обновления и обычно выходят ежеквартально. {% ifversion ghae %}{% data variables.product.company_short %} обновит ваше предприятие до последнего выпуска с новыми функциями. Вам будет предоставлено предварительное уведомление о любых запланированных простоях вашего предприятия.{% endif %}

{% ifversion ghes %}

После {% data variables.product.prodname_ghe_server %} версии 3.0 все выпуски компонентов начинаются по крайней мере с одного релиз-кандидата. Релиз-кандидаты — это предлагаемые выпуски с новыми функциями с полным набором функций. В релиз-кандидате могут быть ошибки или проблемы, которые можно обнаружить только по отзывам клиентов, фактически использующих {% data variables.product.product_name %}. 

Можно получить ранний доступ к новейшим функциям, протестировав релиз-кандидата, как только он станет доступен. Можно выполнить обновление до релиз-кандидата с поддерживаемой версии, а также обновить релиз-кандидата до более поздних версий, когда они будут выпущены. Стоит обновить любую среду, в которой работает релиз-кандидат, как только эта версия станет общедоступной. Дополнительные сведения см. в разделе [Требования для обновления](/admin/enterprise-management/upgrade-requirements).

Релиз-кандидаты должны быть развернуты в тестовых или промежуточных средах. При тестировании релиз-кандидата отправляйте отзыв, обратившись в службу поддержки. Дополнительные сведения см. в разделе [Работа с {% data variables.contact.github_support %}](/admin/enterprise-support).

Мы будем использовать ваши отзывы для исправления ошибок и любых других необходимых изменений, чтобы создать стабильную рабочую версию. Каждый новый релиз-кандидат добавляет исправления ошибок, найденных в предыдущих версиях. Когда выпуск готов к широкому внедрению, {% data variables.product.company_short %} публикует стабильный рабочий выпуск.

{% endif %}

{% warning %}

**Предупреждение**. Обновление до выпуска с новыми функциями приведет к нескольким часам простоя, в течение которых ни один из пользователей не сможет применять предприятие. Можно информировать своих пользователей о простоях, опубликовав глобальный рекламный баннер, применяя настройки предприятия или REST API. Дополнительные сведения см. в разделах [Настройка сообщений пользователей в экземпляре](/admin/user-management/customizing-user-messages-on-your-instance#creating-a-global-announcement-banner) и [{% data variables.product.prodname_enterprise %} Администрирование ](/rest/reference/enterprise-admin#announcements).

{% endwarning %}

{% ifversion ghes %}

Выпуски исправлений, состоящие только из горячих исправлений и исправлений ошибок, происходят чаще. Выпуски исправлений общедоступны при первом выпуске без релиз-кандидатом. Для обновления до выпуска исправлений обычно требуется менее пяти минут простоя.

Чтобы обновить предприятие до нового выпуска, см. разделы [Заметки о выпуске](/enterprise-server/admin/release-notes) и [Обновление {% data variables.product.prodname_ghe_server %}](/admin/enterprise-management/upgrading-github-enterprise-server). Поскольку можно выполнить обновление только с версии функции, которая отстает не более чем на две версии, используйте [{% data variables.enterprise.upgrade_assistant %}](https://support.github.com/enterprise/server-upgrade), чтобы найти путь обновления с текущей версии выпуска.

{% endif %}

## Дополнительные материалы

- [ {% data variables.product.prodname_roadmap %} ]( {% data variables.product.prodname_roadmap_link %} ) в репозитории `github/roadmap`{% ifversion ghae %}
- [Заметки о выпуске {% data variables.product.prodname_ghe_managed %}](/admin/release-notes) {% endif %}
