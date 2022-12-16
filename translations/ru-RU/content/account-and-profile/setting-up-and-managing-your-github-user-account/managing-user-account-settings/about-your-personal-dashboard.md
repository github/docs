---
title: Сведения о личной панели мониторинга
redirect_from:
- /hidden/about-improved-navigation-to-commonly-accessed-pages-on-github
- /articles/opting-into-the-public-beta-for-a-new-dashboard
- /articles/about-your-personal-dashboard
- /github/setting-up-and-managing-your-github-user-account/about-your-personal-dashboard
- /github/setting-up-and-managing-your-github-user-account/managing-user-account-settings/about-your-personal-dashboard
intro: You can visit your personal dashboard to keep track of issues and pull requests you're working on or following, navigate to your top repositories and team pages, stay updated on recent activities in organizations and repositories you're subscribed to, and explore recommended repositories.
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
- Accounts
shortTitle: Your personal dashboard
ms.openlocfilehash: a6c91f68a30f06bbc5b3b7bc8a0b95dddfbae64a
ms.sourcegitcommit: 67064b14c9d4d18819db8f6398358b77a1c8002a
ms.translationtype: HT
ms.contentlocale: ru-RU
ms.lasthandoff: 05/17/2022
ms.locfileid: "145092262"
---
## <a name="accessing-your-personal-dashboard"></a>Доступ к личной панели мониторинга

Личная панель мониторинга — это первая страница, которую вы видите при входе в {% data variables.product.product_name %}.

Чтобы получить доступ к личной панели мониторинга после входа, щелкните {% octicon "mark-github" aria-label="The github octocat logo" %} в левом верхнем углу любой страницы в {% data variables.product.product_name %}.

## <a name="finding-your-recent-activity"></a>Поиск последних действий

В разделе "Последние действия" веб-канала новостей можно быстро находить и отслеживать недавно обновленные проблемы и запросы на вытягивание, над которыми вы работаете. В разделе "Последние действия" можно просмотреть до 4 последних обновлений за последние две недели.

{% data reusables.dashboard.recent-activity-qualifying-events %}

## <a name="finding-your-top-repositories-and-teams"></a>Поиск основных репозиториев и команд

Слева на панели мониторинга можно получить доступ к основным репозиториям и командам, которые вы используете.

![список репозиториев и команд из разных организаций](/assets/images/help/dashboard/repositories-and-teams-from-personal-dashboard.png)

Список основных репозиториев создается автоматически и может включать любой репозиторий, с которым вы взаимодействовали, независимо от того, принадлежит ли он непосредственно вашей учетной записи. Взаимодействие включает фиксацию и открытие или комментирование проблем и запросов на вытягивание. Список основных репозиториев невозможно изменить, но через 4 месяца после последнего взаимодействия репозитории удаляются из списка.

Можно также найти список недавно посещенных репозиториев, команд и досок проектов, щелкнув строку поиска в верхней части любой страницы в {% data variables.product.product_name %}.

## <a name="staying-updated-with-activity-from-the-community"></a>Обновление с использованием действий из сообщества

{% if for-you-feed %} В главном разделе панели мониторинга есть два веб-канала действий:

- Далее: действия пользователей, на которых вы подписаны, и репозиториев, за которыми вы следите.
- Для вас: действия и рекомендации на основе вашей сети {% data variables.product.product_name %}.

### <a name="following-feed"></a>Следующий веб-канал

В этом веб-канале показаны действия репозиториев и пользователей, к которым вы проявили прямой интерес, посредством подписки на них или просмотра репозитория. Например, вы увидите обновления, если пользователь, на которого вы подписаны:

{% else %} В разделе "Все действия" веб-канала новостей можно просматривать обновления от репозиториев, за которыми вы следите, и пользователей, на которых вы подписаны.

Вы увидите обновления на веб-канале новостей, когда пользователь, на которого вы подписаны: {% endif %}


- Отмечает репозиторий звездочкой.
- Подписывается на другого пользователя.{% ifversion fpt or ghes or ghec %}
- Создает общедоступный репозиторий. {% endif %}
- Открывает запрос на вытягивание с меткой "нужна помощь" или "проблема, возникшая впервые" в репозитории, за которым вы следите.
- Отправляет фиксации в репозитории, за которым вы следите.{% ifversion fpt or ghes or ghec %}
- Создает вилку для общедоступного репозитория. {% endif %}
- Публикует новый выпуск.

Дополнительные сведения о подписчиках и просмотре репозиториев см. в разделах [Подписчики](/get-started/exploring-projects-on-github/following-people) и [Социальность](/get-started/quickstart/be-social).

{% if for-you-feed %}
### <a name="for-you-feed"></a>Для вашего веб-канала

{% note %}

**Примечание.** Эта новая вкладка в настоящее время доступна в общедоступной бета-версии и может быть изменена. 

{% endnote %}

В этом веб-канале показаны действия и рекомендации на основе вашей сети в {% data variables.product.product_name %}. Он предназначен, чтобы предоставлять обновления, которые вас вдохновят, будут держать вас в курсе и помогут находить новые сообщества, частью которых вы хотите быть. Сеть включает в себя следующее:

- репозитории, отмеченные звездочками;
- репозитории, в которые вы внесли свой вклад;
- пользователей, на которых вы подписаны или которым оказываете спонсорскую поддержку;
- пользователей, с которыми вы совместно работали;
- организации, на которые вы подписаны.

{% endif %}

## <a name="exploring-recommended-repositories"></a>Изучение рекомендуемых репозиториев

Справа на панели мониторинга в разделе "Изучение репозиториев" можно изучить рекомендуемые репозитории в сообществах. Рекомендации основаны на репозиториях, которые вы посетили или отметили звездочками, людях, на которых вы подписаны, и действиях в репозиториях, к которым у вас есть доступ. {% ifversion fpt or ghec %} Дополнительные сведения см. в статье [Поиск способов участия в работе над открытым кодом в {% data variables.product.prodname_dotcom %}](/github/getting-started-with-github/finding-ways-to-contribute-to-open-source-on-github).{% endif %}

## <a name="further-reading"></a>Дополнительные материалы

- [Сведения о панели мониторинга вашей организации](/articles/about-your-organization-dashboard)
