---
title: Изменение имени пользователя для GitHub
intro: You can change the username for your account on {% ifversion fpt or ghec %}{% data variables.product.prodname_dotcom_the_website %}{% elsif ghes %}{% data variables.product.product_location %} if your instance uses built-in authentication{% endif %}.
redirect_from:
- /articles/how-to-change-your-username
- /articles/changing-your-github-user-name
- /articles/renaming-a-user
- /articles/what-happens-when-i-change-my-username
- /articles/changing-your-github-username
- /github/setting-up-and-managing-your-github-user-account/changing-your-github-username
- /github/setting-up-and-managing-your-github-user-account/managing-user-account-settings/changing-your-github-username
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
topics:
- Accounts
shortTitle: Change your username
ms.openlocfilehash: 30139a0dab508f1e8db0f33174d6e25ec28afef4
ms.sourcegitcommit: 67064b14c9d4d18819db8f6398358b77a1c8002a
ms.translationtype: HT
ms.contentlocale: ru-RU
ms.lasthandoff: 05/17/2022
ms.locfileid: "145092261"
---
{% ifversion ghec or ghes %}

{% note %}

{% ifversion ghec %}

**Примечание**. Участники {% data variables.product.prodname_emu_enterprise %} не могут изменять имена пользователей. Администратор IdP вашего предприятия управляет вашим именем пользователя для {% data variables.product.product_name %}. Дополнительные сведения см. в разделе [Сведения о {% data variables.product.prodname_emus %}](/admin/authentication/managing-your-enterprise-users-with-your-identity-provider/about-enterprise-managed-users).

{% elsif ghes %}

**Примечание**. Если вы выполняете вход в {% data variables.product.product_location %} с помощью учетных данных LDAP или единого входа, изменить ваше имя пользователя может только локальный администратор. Дополнительные сведения о способах проверки подлинности для {% data variables.product.product_name %} см. в разделе [Проверка подлинности пользователей для {% data variables.product.product_location %}](/admin/authentication/authenticating-users-for-your-github-enterprise-server-instance).

{% endif %}

{% endnote %}

{% endif %}

## <a name="about-username-changes"></a>Сведения об изменениях имен пользователей

Вы можете изменить имя пользователя на другое, которое в настоящее время не занято. {% ifversion fpt or ghec %} Если нужное имя пользователя недоступно, рассмотрите другие имена или уникальные варианты. Можно попробовать подобрать похожее доступное имя пользователя, добавив число, дефис или немного изменив написание.

Если вы являетесь владельцем товарного знака, который хотите использовать в имени, см. дополнительные сведения о подаче жалобы относительно товарного знака на странице [политики в отношении товарных знаков](/free-pro-team@latest/github/site-policy/github-trademark-policy). 

Если товарный знак вам не принадлежит, вы можете выбрать другое имя пользователя или оставить текущее. {% data variables.contact.github_support %} не может освободить для вас занятое имя пользователя. Дополнительные сведения см. в разделе [Изменение имени пользователя](#changing-your-username).{% endif %}

После изменения имени пользователя старое имя становится доступным для других пользователей. В большинстве ссылок на репозитории старое имя пользователя автоматически меняется на новое. При этом автоматическая переадресация работает не со всеми ссылками на ваш профиль.

{% data variables.product.product_name %} не может настроить перенаправления для:
- [@mentions](/articles/basic-writing-and-formatting-syntax/#mentioning-people-and-teams), использующего старое имя пользователя;
- ссылок на [gist](/articles/creating-gists), включающие старое имя пользователя.

{% ifversion fpt or ghec %} 

Если вы являетесь участником {% data variables.product.prodname_emu_enterprise %}, вы не можете вносить изменения в свое имя пользователя. {% data reusables.enterprise-accounts.emu-more-info-account %}

{% endif %}

## <a name="repository-references"></a>Ссылки на репозитории

После изменения имени пользователя {% data variables.product.product_name %} автоматически перенаправит ссылки на репозитории.
- Веб-ссылки на существующие репозитории продолжат работать. Они начнут функционировать в течение нескольких минут после того, как вы внесете изменение.
- Отправки с помощью командной строки из клонов ваших локальных репозиториев на старые URL-адреса для удаленного отслеживания продолжат работать.

Если новый владелец вашего старого имени пользователя создаст репозиторий, имя которого будет совпадать с именем вашего репозитория, это переопределит запись перенаправления и перенаправление перестанет работать. Из-за такой возможности рекомендуется обновить все существующие URL-адреса удаленных репозиториев после изменения имени пользователя. Дополнительные сведения см. в разделе [Управление удаленными репозиториями](/github/getting-started-with-github/managing-remote-repositories).

## <a name="links-to-your-previous-profile-page"></a>Ссылки на предыдущую страницу профиля

После изменения имени пользователя ссылки на предыдущую страницу профиля, например `https://{% data variables.command_line.backticks %}/previoususername`, возвращают ошибку 404. Мы рекомендуем обновить все ссылки на вашу учетную запись в {% data variables.product.product_location %} из другого расположения{% ifversion fpt or ghec %}, например из вашего профиля в LinkedIn или Twitter{% endif %}.

## <a name="your-git-commits"></a>Фиксации GIT

{% ifversion fpt or ghec %}Фиксации GIT, которые были связаны с вашими адресами электронной почты `noreply`, предоставленными {% data variables.product.product_name %}, не будут привязаны к новому имени пользователя и не будут отображаться в вашем графе вкладов.{% endif %} Если ваши фиксации GIT связаны с другим адресом электронной почты, [добавленным в учетную запись GitHub](/articles/adding-an-email-address-to-your-github-account), {% ifversion fpt or ghec %}включая адреса электронной почты `noreply`, основанные на идентификаторе и предоставленные {% data variables.product.product_name %}, {% endif %}они будут по-прежнему привязаны к вам и отображаться в вашем графе вкладов после изменения имени пользователя. Дополнительные сведения о настройке адреса электронной почты см. в разделе [Настройка адреса электронной почты для фиксаций](/articles/setting-your-commit-email-address).

## <a name="changing-your-username"></a>Изменение имени пользователя

{% data reusables.user-settings.access_settings %} {% data reusables.user-settings.account_settings %}
3. В разделе "Изменение имени пользователя" нажмите кнопку **Изменить имя пользователя**.
   ![Кнопка "Изменить имя пользователя"](/assets/images/help/settings/settings-change-username.png){% ifversion fpt or ghec %}
4. Прочтите предупреждения об изменении имени пользователя. Если вы по-прежнему хотите изменить имя пользователя, нажмите **Все понятно. Перейти к изменению имени пользователя**.
   ![Кнопка предупреждения об изменении имени пользователя](/assets/images/help/settings/settings-change-username-warning-button.png)
5. Введите новое имя пользователя.
   ![Поле для нового имени пользователя](/assets/images/help/settings/settings-change-username-enter-new-username.png)
6. Если выбранное имя пользователя доступно, нажмите **Изменить имя пользователя**. Если выбранное имя пользователя недоступно, попробуйте другое имя или один из предложенных вариантов.
   ![Кнопка предупреждения об изменении имени пользователя](/assets/images/help/settings/settings-change-my-username-button.png) {% endif %}

## <a name="further-reading"></a>Дополнительные материалы

- [Почему мои фиксации связаны с неправильным пользователем?](/pull-requests/committing-changes-to-your-project/troubleshooting-commits/why-are-my-commits-linked-to-the-wrong-user){% ifversion fpt or ghec %}
- [Политика в отношении имен пользователей на {% data variables.product.prodname_dotcom %}](/free-pro-team@latest/github/site-policy/github-username-policy){% endif %}
