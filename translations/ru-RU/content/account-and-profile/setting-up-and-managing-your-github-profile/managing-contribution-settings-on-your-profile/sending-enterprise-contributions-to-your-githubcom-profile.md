---
title: Отправка корпоративных вкладов в ваш профиль GitHub.com
intro: 'Можно выделить свою работу в {% data variables.product.prodname_enterprise %}, отправив подсчеты вклада в профиль {% data variables.product.prodname_dotcom_the_website %}.'
redirect_from:
  - /articles/sending-your-github-enterprise-contributions-to-your-github-com-profile
  - /articles/sending-your-github-enterprise-server-contributions-to-your-github-com-profile
  - /articles/sending-your-github-enterprise-server-contributions-to-your-githubcom-profile
  - /github/setting-up-and-managing-your-github-profile/sending-your-github-enterprise-server-contributions-to-your-githubcom-profile
  - /github/setting-up-and-managing-your-github-profile/managing-contribution-graphs-on-your-profile/sending-your-github-enterprise-server-contributions-to-your-githubcom-profile
  - /account-and-profile/setting-up-and-managing-your-github-profile/managing-contribution-graphs-on-your-profile/sending-enterprise-contributions-to-your-githubcom-profile
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Profiles
shortTitle: Send enterprise contributions
ms.openlocfilehash: 6fb1803f3a93dd03af24ce9ea3f360e579d7dbd1
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ru-RU
ms.lasthandoff: 09/05/2022
ms.locfileid: '147080442'
---
## Сведения о корпоративных вкладах в вашем профиле {% data variables.product.prodname_dotcom_the_website %}

В вашем профиле {% data variables.product.prodname_dotcom_the_website %} отображается количество вкладов {% ifversion fpt or ghec %}{% data variables.product.prodname_enterprise %}{% else %}{% data variables.product.product_name %}{% endif %} за последние 90 дней. {% data reusables.github-connect.sync-frequency %} Количество вкладов из {% ifversion fpt or ghec %}{% data variables.product.prodname_enterprise %}{% else %}{% data variables.product.product_name %}{% endif %} считается частными вкладами. В сведениях о фиксации будет отображаться только количество вкладов и информация, что эти вклады были сделаны в среде {% data variables.product.prodname_enterprise %} за пределами {% data variables.product.prodname_dotcom_the_website %}.

Можно решить, следует ли отображать количество частных вкладов в вашем профиле. Дополнительные сведения см. в разделе [Публикация или скрытие личных вкладов в своем профиле](/articles/publicizing-or-hiding-your-private-contributions-on-your-profile/).

Дополнительные сведения о том, как рассчитываются вклады, см. в разделе [Управление графами вкладов в вашем профиле](/articles/managing-contribution-graphs-on-your-profile/).

{% note %}

**Примечания.**
- Подключение между вашими учетными записями регулируется [Заявлением о конфиденциальности GitHub](/free-pro-team@latest/github/site-policy/github-privacy-statement/), и пользователи, разрешающие подключение, соглашаются с [Условиями предоставления услуг GitHub](/free-pro-team@latest/github/site-policy/github-terms-of-service).

- Прежде чем вы сможете подключить свой профиль {% ifversion fpt or ghec %}{% data variables.product.prodname_enterprise %}{% else %}{% data variables.product.product_name %}{% endif %} к профилю {% data variables.product.prodname_dotcom_the_website %}, владелец предприятия должен включить {% data variables.product.prodname_github_connect %} и включить общий доступ к вкладу для сред. Для получения дополнительной информации обратитесь к владельцу своего предприятия.

{% endnote %}

## Отправка ваших корпоративных вкладов в ваш профиль {% data variables.product.prodname_dotcom_the_website %}

{% ifversion fpt or ghec %}

- Сведения о том, как отправить корпоративные вклады из {% data variables.product.prodname_ghe_server %} в ваш профиль {% data variables.product.prodname_dotcom_the_website %}, см. в разделе [Отправка корпоративных вкладов в ваш профиль {% data variables.product.prodname_dotcom_the_website %}](/enterprise-server/account-and-profile/setting-up-and-managing-your-github-profile/managing-contribution-graphs-on-your-profile/sending-enterprise-contributions-to-your-githubcom-profile) в документации {% data variables.product.prodname_ghe_server %}.
- Сведения о том, как отправить корпоративные вклады из {% data variables.product.prodname_ghe_managed %} в ваш профиль {% data variables.product.prodname_dotcom_the_website %}, см. в разделе [Отправка корпоративных вкладов в ваш профиль {% data variables.product.prodname_dotcom_the_website %}](/github-ae@latest/account-and-profile/setting-up-and-managing-your-github-profile/managing-contribution-graphs-on-your-profile/sending-enterprise-contributions-to-your-githubcom-profile) в документации {% data variables.product.prodname_ghe_managed %}.

{% elsif ghes %}

1. Войдите в {% data variables.product.prodname_ghe_server %} и {% data variables.product.prodname_dotcom_the_website %}.
1. На {% data variables.product.prodname_ghe_server %} щелкните фото своего профиля в правом верхнем углу любой страницы и выберите **Параметры**.
   ![Значок параметров на панели пользователя](/assets/images/help/settings/userbar-account-settings.png) {% data reusables.github-connect.github-connect-tab-user-settings %} {% data reusables.github-connect.connect-dotcom-and-enterprise %}
1. Проверьте ресурсы, к которым {% data variables.product.prodname_ghe_server %} будет осуществляться доступ из вашей учетной записи {% data variables.product.prodname_dotcom_the_website %}, а затем щелкните **Авторизовать**.
   ![Авторизация подключения между GitHub Enterprise и GitHub.com](/assets/images/help/settings/authorize-ghe-to-connect-to-dotcom.png) {% data reusables.github-connect.send-contribution-counts-to-githubcom %}

{% elsif ghae %}

1. Войдите в {% data variables.product.prodname_ghe_managed %} и {% data variables.product.prodname_dotcom_the_website %}.
1. На {% data variables.product.prodname_ghe_managed %} щелкните фото своего профиля в правом верхнем углу любой страницы и нажмите **Параметры**.
   ![Значок параметров на панели пользователя](/assets/images/help/settings/userbar-account-settings.png) {% data reusables.github-connect.github-connect-tab-user-settings %} {% data reusables.github-connect.connect-dotcom-and-enterprise %} {% data reusables.github-connect.authorize-connection %} {% data reusables.github-connect.send-contribution-counts-to-githubcom %}

{% endif %}
