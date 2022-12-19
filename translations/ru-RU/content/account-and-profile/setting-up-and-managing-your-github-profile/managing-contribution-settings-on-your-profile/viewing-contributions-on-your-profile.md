---
title: Просмотр вкладов в профиле
intro: 'Ваш профиль {% data variables.product.product_name %} отображает {% ifversion fpt or ghes or ghec %}закрепленные репозитории, достижения и {% endif %}диаграмму вкладов в репозиторий за последний год.'
redirect_from:
  - /articles/viewing-contributions
  - /articles/viewing-contributions-on-your-profile-page
  - /articles/viewing-contributions-on-your-profile
  - /github/setting-up-and-managing-your-github-profile/viewing-contributions-on-your-profile
  - /github/setting-up-and-managing-your-github-profile/managing-contribution-graphs-on-your-profile/viewing-contributions-on-your-profile
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Profiles
shortTitle: View contributions
ms.openlocfilehash: b44e2727c53de87de9dbdb393502f35d8d72c265
ms.sourcegitcommit: d697e0ea10dc076fd62ce73c28a2b59771174ce8
ms.translationtype: MT
ms.contentlocale: ru-RU
ms.lasthandoff: 10/20/2022
ms.locfileid: '148099196'
---
{% ifversion fpt or ghes or ghec %}На диаграмме вкладов и в разделе достижений отображаются действия из общедоступных репозиториев. {% endif %}Можно отображать действия {% ifversion fpt or ghes or ghec %}как из общедоступных, так и {% endif %}из частных репозиториев, при этом конкретные сведения о вашем действии в частных репозиториях будут анонимизированы. Дополнительные сведения см. в разделе [Публикация или скрытие личных вкладов в своем профиле](/articles/publicizing-or-hiding-your-private-contributions-on-your-profile).

{% note %}

**Примечание.** Фиксации будут отображаться на диаграмме вкладов только в том случае, если адрес электронной почты, использованный для создания фиксаций, подключен к вашей учетной записи в {% data variables.product.product_name %}. Дополнительные сведения см. в разделе [Почему мои вклады не отображаются в моем профиле?](/articles/why-are-my-contributions-not-showing-up-on-my-profile#your-local-git-commit-email-isnt-connected-to-your-account)

{% endnote %}

## Что считается вкладом

На странице профиля вкладом считаются определенные действия.

- Фиксация в ветви по умолчанию или ветви `gh-pages` репозитория
- Открытие проблемы
- Открытие обсуждения
- Ответ на обсуждение
- Предложение запроса на вытягивание
- Отправка проверки запроса на вытягивание{% ifversion ghes or ghae %}
- Совместные фиксации в ветви по умолчанию или ветви `gh-pages` репозитория{% endif %}

{% data reusables.pull_requests.pull_request_merges_and_contributions %}

## Популярные репозитории

В этом разделе отображаются репозитории с наибольшим количеством наблюдателей. {% ifversion fpt or ghes or ghec %}После [закрепления репозиториев в профиле](/articles/pinning-repositories-to-your-profile) этот раздел изменится на "Закрепленные репозитории".{% endif %}

![Популярные репозитории](/assets/images/help/profile/profile_popular_repositories.png)

{% ifversion fpt or ghes or ghec %}

## Закрепленные репозитории

В этом разделе отображается до шести общедоступных репозиториев и могут содержаться ваши репозитории, а также репозитории, в которые вы внесли свой вклад. Для легкого просмотра важных сведений об избранных репозиториях каждый репозиторий в этом разделе содержит сводку по выполняемым работам, количество [полученных](/articles/saving-repositories-with-stars/) репозиторием звезд и основной язык программирования, используемый в репозитории. Дополнительные сведения см. в разделе [Закрепление репозиториев в профиле](/articles/pinning-repositories-to-your-profile).

![Закрепленные репозитории](/assets/images/help/profile/profile_pinned_repositories.png)

{% endif %}

## Календарь вкладов

В календаре вкладов отображаются ваши действия, связанные с вкладами.

### Просмотр вкладов за определенное время

- Щелкните квадрат дня, чтобы отобразить вклады, внесенные в течение этого 24-часового периода.
- Нажмите клавишу *SHIFT* и щелкните квадрат другого дня, чтобы отобразить вклады, внесенные в течение этого периода времени.

{% note %}

**Примечание.** В календаре вкладов можно выбрать диапазон не длиннее месяца. При выборе большего промежутка времени мы отобразим только один месяц вкладов.

{% endnote %}

![Диаграмма вкладов](/assets/images/help/profile/contributions_graph.png)

### Расчет времени событий вкладов

Для фиксаций и запросов на вытягивание метки времени рассчитываются по-разному.
- **Фиксации** используют сведения о часовом поясе в метке времени фиксации. Дополнительные сведения см. в разделе [Устранение неполадок, связанных с фиксациями на временной шкале](/articles/troubleshooting-commits-on-your-timeline).
- **Запросы на вытягивание** и **проблемы**, открытые в {% data variables.product.product_name %}, используют часовой пояс браузера. Те из них, что открыты через API, используют метку времени или часовой пояс, [указанные в вызове API](https://developer.github.com/changes/2014-03-04-timezone-handling-changes).

## Обзор активности

{% data reusables.profile.activity-overview-summary %} Дополнительные сведения см. в разделе [Отображение обзора действий в профиле](/articles/showing-an-overview-of-your-activity-on-your-profile).

![Раздел "Обзор действий" в профиле](/assets/images/help/profile/activity-overview-section.png)

Приоритеты организаций, представленных в обзоре действий, расставляются в соответствии со степенью вашей активности в организации. Если вы @mention организацию в биографии профиля и являетесь участником организации, то именно этой организации назначается первый приоритет в обзоре действий. Дополнительные сведения см. в разделе [Упоминание пользователей и команд](/articles/basic-writing-and-formatting-syntax/#mentioning-people-and-teams) или [Добавление биографии в свой профиль](/articles/adding-a-bio-to-your-profile/).

## Действия, связанные с вкладами

Раздел действий, связанных с вкладами, содержит подробную временную шкалу вашей работы, в том числе фиксации, сделанные вами или совместно с другими пользователями, запросы на вытягивание, предложенные вами, и проблемы, которые вы открыли. Чтобы просмотреть свои вклады с течением времени, нажмите кнопку **Показать другие действия** в нижней части раздела действий, связанных с вкладами, или щелкните нужный год в правой части страницы. В действиях, связанных с вкладами, выделяются важные моменты, такие как даты присоединения к организации, предложения первого запроса на вытягивание или открытия очень важных проблем. Если на временной шкале не отображаются определенные события, убедитесь, что у вас по-прежнему есть доступ к организации или репозиторию, где произошло событие.

![Фильтрация действий, связанных с вкладами, по времени](/assets/images/help/profile/contributions_activity_time_filter.png)

## Просмотр вкладов от {% data variables.product.prodname_enterprise %} в {% data variables.product.prodname_dotcom_the_website %}

Если вы используете {% ifversion fpt или ghec %}{% данных variables.product.prodname_ghe_server %}{% ifversion ghae %} или {% данных variables.product.prodname_ghe_managed %}{% endif %}{% else %}{% данных variables.product.product_name %}{% endif %} и владелец предприятия включает {% данных variables.enterprise.prodname_unified_contributions %}, вы можете отправить количество корпоративных вкладов из профиля {% данных variables.product.prodname_dotcom_the_website %}. Дополнительные сведения см. в разделе [Отправка вкладов предприятия в профиль {% data variables.product.prodname_dotcom_the_website %}](/account-and-profile/setting-up-and-managing-your-github-profile/managing-contribution-graphs-on-your-profile/sending-enterprise-contributions-to-your-githubcom-profile).

