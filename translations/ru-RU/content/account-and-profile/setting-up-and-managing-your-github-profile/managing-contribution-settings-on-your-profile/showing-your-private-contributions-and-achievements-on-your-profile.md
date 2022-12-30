---
title: Отображение личных вкладов и достижений в профиле
intro: 'В профиле {% data variables.product.product_name %} показан график вкладов в репозиторий за последний год. Вы можете отобразить анонимизированное действие из {% ifversion fpt or ghes or ghec %}частных и внутренних{% else %}частных{% endif %} репозиториев{% ifversion fpt or ghes or ghec %}, а не только простое действие из общедоступных репозиториев{% endif %}.'
redirect_from:
  - /articles/publicizing-or-hiding-your-private-contributions-on-your-profile
  - /github/setting-up-and-managing-your-github-profile/publicizing-or-hiding-your-private-contributions-on-your-profile
  - /github/setting-up-and-managing-your-github-profile/managing-contribution-graphs-on-your-profile/publicizing-or-hiding-your-private-contributions-on-your-profile
  - /account-and-profile/setting-up-and-managing-your-github-profile/managing-contribution-graphs-on-your-profile/publicizing-or-hiding-your-private-contributions-on-your-profile
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Profiles
shortTitle: Private contributions and achievements
ms.openlocfilehash: e7c6997ec3dc816624e687f1bf74024380fb0dd5
ms.sourcegitcommit: d697e0ea10dc076fd62ce73c28a2b59771174ce8
ms.translationtype: MT
ms.contentlocale: ru-RU
ms.lasthandoff: 10/20/2022
ms.locfileid: '148094628'
---
Если вы публикуете свои личные вклады, пользователи без доступа к частным репозиториям, в которых вы работаете, не будут иметь доступа к сведениям о ваших личных вкладах. Вместо этого они будут видеть количество ваших личных вкладов за каждый день. В ваши общедоступные вклады включаются подробные сведения. Дополнительные сведения см. в разделе "[Просмотр вкладов на странице профиля](/articles/viewing-contributions-on-your-profile-page)".

{% note %}

**Примечание.** {% ifversion fpt или ghes или ghec %}On {% ifversion fpt или ghec %}{% данных variables.product.prodname_dotcom_the_website %}{% elsif ghes %}{% данных variables.product.product_name %}{% endif %}, общедоступные вклады в ваш профиль отображаются {% ifversion fpt или ghec %}всем, кто может получить доступ к {% данных variables.product.prodname_dotcom_the_website %}{% elsif ghes %}только другим пользователям {% данных variables.location.product_location%}{% endif %}. {% elsif ghae %} На {% данных variables.product.prodname_ghe_managed %}, только другие участники вашего предприятия могут просматривать вклад в вашем профиле. {% endif %}

{% endnote %}

## Изменение видимости личных вкладов

{% data reusables.profile.access_profile %}
1. Опубликуйте или скройте личные вклады в своем профиле:
    - Чтобы опубликовать свои личные вклады, над диаграммой вкладов в раскрывающемся меню **Параметры вкладов** выберите **Личные вклады**. Посетители будут видеть число ваших личных вкладов без дополнительной информации.
  ![Предоставление посетителям возможности видеть личные вклады в раскрывающемся меню параметров вклада](/assets/images/help/profile/private-contributions-on.png)
    - Чтобы скрыть свои личные вклады, над диаграммой вкладов в раскрывающемся меню **Параметры вкладов** снимите флажок **Личные вклады**. Посетители будут видеть только ваши общедоступные вклады.
   ![Предоставление посетителям возможности видеть личные вклады в раскрывающемся меню параметров вклада](/assets/images/help/profile/private-contributions-off.png)

## Изменение видимости достижений

{% data reusables.user-settings.access_settings %}
1. Отображение или скрытие достижений в профиле:
    - Чтобы отобразить достижения в профиле, перейдите в раздел **Параметры профиля** и установите флажок рядом с пунктом **Show Achievements on my profile (Показать достижения в моем профиле).** 
  ![Разрешите посетителям просматривать достижения из параметров профиля](/assets/images/help/profile/achievements-profile-settings-off.png)
    - Чтобы скрыть достижения из профиля, перейдите в **раздел "Параметры профиля**" и снимите флажок рядом с **флажком "Показать достижения" в моем профиле.**
  ![ Скрытие достижений от посетителей в параметрах](/assets/images/help/profile/achievements-profile-settings-on.png) профиля {% ifversion hide-individual-achievements %}
1. При необходимости для скрытия отдельных достижений из профиля: {% данных reusables.profile.access_profile %}
     1. Перейдите к разделу "Достижения" на левой боковой панели профиля и выберите заголовок "Достижения". ![Достижения на боковой панели профиля](/assets/images/help/profile/achievements-on-profile.png)
     2. Откройте подробное представление о достижении, которое вы хотите скрыть, щелкнув достижение.
     3. В подробном представлении щелкните значок {% octicon "глаз" aria-label="Значок глаза" %}, чтобы скрыть достижение. ![Представление сведений о достижениях](/assets/images/help/profile/achievements-detail-view.png) При скрытии значки будут помечены значком {% octicon aria-label="Значок закрытого глаза" %} и отображается только для вас. ![Скрытые достижения](/assets/images/help/profile/achievements-hidden.png)

{% endif %}
## Дополнительные материалы

- [Просмотр вкладов на странице профиля](/articles/viewing-contributions-on-your-profile-page)
- "[Почему мои вклады не отображаются в моем профиле?](/articles/why-are-my-contributions-not-showing-up-on-my-profile)"
