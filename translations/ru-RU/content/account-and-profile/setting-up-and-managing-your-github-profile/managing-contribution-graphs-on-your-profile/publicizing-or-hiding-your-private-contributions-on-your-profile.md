---
title: Публикация или скрытие личных вкладов в профиле
intro: Your {% data variables.product.product_name %} profile shows a graph of your repository contributions over the past year. You can choose to show anonymized activity from {% ifversion fpt or ghes or ghec %}private and internal{% else %}private{% endif %} repositories{% ifversion fpt or ghes or ghec %} in addition to the activity from public repositories{% endif %}.
redirect_from:
- /articles/publicizing-or-hiding-your-private-contributions-on-your-profile
- /github/setting-up-and-managing-your-github-profile/publicizing-or-hiding-your-private-contributions-on-your-profile
- /github/setting-up-and-managing-your-github-profile/managing-contribution-graphs-on-your-profile/publicizing-or-hiding-your-private-contributions-on-your-profile
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
- Profiles
shortTitle: Private contributions
ms.openlocfilehash: d3ca9c3bef9324baa73b96eb6dc26bdd75960b37
ms.sourcegitcommit: 67064b14c9d4d18819db8f6398358b77a1c8002a
ms.translationtype: HT
ms.contentlocale: ru-RU
ms.lasthandoff: 05/17/2022
ms.locfileid: "145070057"
---
Если вы публикуете свои личные вклады, пользователи без доступа к частным репозиториям, в которых вы работаете, не будут иметь доступа к сведениям о ваших личных вкладах. Вместо этого они будут видеть количество ваших личных вкладов за каждый день. В ваши общедоступные вклады включаются подробные сведения. Дополнительные сведения см. в разделе "[Просмотр вкладов на странице профиля](/articles/viewing-contributions-on-your-profile-page)".

{% note %}

**Примечание.** {% ifversion fpt or ghes or ghec %}В {% ifversion fpt or ghec %}{% data variables.product.prodname_dotcom_the_website %}{% elsif ghes %}{% data variables.product.product_name %}{% endif %} общедоступные вклады в вашем профиле видны {% ifversion fpt or ghec %}всем пользователям, которые имеют доступ к {% data variables.product.prodname_dotcom_the_website %}{% elsif ghes %}только другим пользователям {% data variables.product.product_location%}{% endif %}.{% elsif ghae %}В {% data variables.product.prodname_ghe_managed %} вклады в вашем профиле видны только другим пользователям вашего предприятия.{% endif %}

{% endnote %}

## <a name="changing-the-visibility-of-your-private-contributions"></a>Изменение видимости личных вкладов

{% data reusables.profile.access_profile %}
1. Опубликуйте или скройте личные вклады в своем профиле:
    - Чтобы опубликовать свои личные вклады, над диаграммой вкладов в раскрывающемся меню **Параметры вкладов** выберите **Личные вклады**. Посетители будут видеть число ваших личных вкладов без дополнительной информации.
  ![Предоставление посетителям возможности видеть личные вклады в раскрывающемся меню параметров вклада](/assets/images/help/profile/private-contributions-on.png)
    - Чтобы скрыть свои личные вклады, над диаграммой вкладов в раскрывающемся меню **Параметры вкладов** снимите флажок **Личные вклады**. Посетители будут видеть только ваши общедоступные вклады.
   ![Предоставление посетителям возможности видеть личные вклады в раскрывающемся меню параметров вклада](/assets/images/help/profile/private-contributions-off.png)

## <a name="further-reading"></a>Дополнительные материалы

- [Просмотр вкладов на странице профиля](/articles/viewing-contributions-on-your-profile-page)
- "[Почему мои вклады не отображаются в моем профиле?](/articles/why-are-my-contributions-not-showing-up-on-my-profile)"
