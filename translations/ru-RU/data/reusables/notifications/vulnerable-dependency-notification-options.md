---
ms.openlocfilehash: 3cc118cb9748ada5efb83aad6c0fe3b86c76d9bb
ms.sourcegitcommit: 738c16f6fc6d56d939a80c832497c8bfa28d10c7
ms.translationtype: MT
ms.contentlocale: ru-RU
ms.lasthandoff: 11/05/2022
ms.locfileid: "148134903"
---
{% ifversion fpt or ghec %}По умолчанию вы будете получать уведомления:{% endif %}{% ifversion ghes or ghae %}По умолчанию, если владелец вашего предприятия настроил адрес электронной почты для уведомлений в вашем экземпляре, вы будете получать {% data variables.product.prodname_dependabot_alerts %}:{% endif %}

- в папке "Входящие" в виде веб-уведомлений. Веб-уведомление отправляется при включении {% data variables.product.prodname_dependabot %} для репозитория, при фиксации нового файла манифеста в репозитории и при обнаружении новой уязвимости с критическим или высоким уровнем серьезности (**параметр {% data variables.product.prodname_dotcom %}** ).
- по электронной почте сообщение электронной почты отправляется при включении {% data variables.product.prodname_dependabot %} для репозитория, при фиксации нового файла манифеста в репозитории и при обнаружении новой уязвимости с критическим или высоким уровнем серьезности (**Email** параметр).{ % ifversion ghes < 3.8 or ghae < 3,8 %}
- в пользовательском интерфейсе в представлениях файла и кода репозитория отображается предупреждение при наличии небезопасных зависимостей (параметр **оповещений пользовательского интерфейса** ). {% endif %}
- В командной строке предупреждения отображаются как обратные вызовы при отправке в репозитории с любыми небезопасными зависимостями (параметр **CLI** ).
{% ifversion not ghae %}
- в {% data variables.product.prodname_mobile %} в виде веб-уведомлений. Дополнительные сведения см. в разделе [Включение push-уведомлений с помощью {% data variables.product.prodname_mobile %}](/github/managing-subscriptions-and-notifications-on-github/configuring-notifications#enabling-push-notifications-with-github-mobile). {% endif %}

{% note %}

**Примечание.** Уведомления по электронной почте и веб-уведомления{% ifversion not ghae %}/{% data variables.product.prodname_mobile %}{% endif %} настраиваются:

- _для каждого репозитория_, если для репозитория включен параметр {% data variables.product.prodname_dependabot %} или при фиксации нового файла манифеста в репозитории.

- _для каждой организации_ при обнаружении новой уязвимости.

{% endnote %}

{% ifversion update-notification-settings-22 %} Вы можете настроить способ получения уведомлений о {% data variables.product.prodname_dependabot_alerts %}. Например, вы можете получать ежедневное или еженедельное дайджест-письмо с сводкой оповещений для до 10 репозиториев с помощью **параметра Email еженедельного дайджеста**.
{% else %} Вы можете настроить способ получения уведомлений о {% data variables.product.prodname_dependabot_alerts %}. Например, вы можете получать еженедельный дайджест по электронной почте с сводкой оповещений для до 10 репозиториев, используя **Email сводку по уязвимостям** и параметры **дайджеста еженедельной электронной почты безопасности**.{ % endif %}
