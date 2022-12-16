---
title: Изменение имени пользователя для GitHub
intro: 'Вы можете изменить имя пользователя для вашей учетной записи на {% ifversion fpt или ghec %}{% данных variables.product.prodname_dotcom_the_website %}{% elsif ghes %}{% данных variables.location.product_location %}, если ваш экземпляр использует встроенную проверку подлинности{% endif %}.'
redirect_from:
  - /articles/how-to-change-your-username
  - /articles/changing-your-github-user-name
  - /articles/renaming-a-user
  - /articles/what-happens-when-i-change-my-username
  - /articles/changing-your-github-username
  - /github/setting-up-and-managing-your-github-user-account/changing-your-github-username
  - /github/setting-up-and-managing-your-github-user-account/managing-user-account-settings/changing-your-github-username
  - /account-and-profile/setting-up-and-managing-your-github-user-account/managing-user-account-settings/changing-your-github-username
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
topics:
  - Accounts
shortTitle: Change your username
ms.openlocfilehash: cdd6e51ce609bb9e4b8f71535ebf3920ebe5911f
ms.sourcegitcommit: d697e0ea10dc076fd62ce73c28a2b59771174ce8
ms.translationtype: MT
ms.contentlocale: ru-RU
ms.lasthandoff: 10/20/2022
ms.locfileid: '148098242'
---
{% ifversion ghec or ghes %}

{% note %}

{% ifversion ghec %}

**Примечание.** Члены {% данных variables.enterprise.prodname_emu_enterprise %} не могут изменять имена пользователей. Администратор IdP вашего предприятия управляет именем пользователя для {% data variables.product.product_name %}. Дополнительные сведения см. в разделе [Сведения о {% data variables.product.prodname_emus %}](/admin/authentication/managing-your-enterprise-users-with-your-identity-provider/about-enterprise-managed-users).

{% elsif ghes %}

**Примечание.** При входе в {% данных variables.location.product_location %} с учетными данными LDAP или единым входом только локальный администратор может изменить имя пользователя. Дополнительные сведения о методах проверки подлинности для {% данных variables.product.product_name %}см. в разделе "[Проверка подлинности пользователей для {% данных variables.location.product_location %}](/admin/authentication/authenticating-users-for-your-github-enterprise-server-instance)".

{% endif %}

{% endnote %}

{% endif %}

## Сведения об изменениях имен пользователя

Вы можете изменить имя пользователя на другое имя, которое в настоящее время не используется. {% ifversion fpt or ghec %} Если нужное имя пользователя недоступно, рассмотрите другие имена или уникальные варианты. Если вы используете число, дефис или альтернативное правописание, это можете помочь вам найти аналогичное доступное имя пользователя.

Если для имени пользователя вы удерживаете товарный знак, дополнительные сведения о том, как подать жалобу на товарные знаки, можно найти на странице [политики товарных знаков](/free-pro-team@latest/github/site-policy/github-trademark-policy). 

Если вы не удерживаете товарный знак для имени, можете выбрать другое имя пользователя или сохранить текущее. {% data variables.contact.github_support %} не может освободить для вас недоступное имя пользователя. Дополнительные сведения см. в статье [Изменение имени пользователя](#changing-your-username).{% endif %}

После изменения имени пользователя старое имя становится доступным для других пользователей. В большинстве ссылок на репозитории старое имя пользователя автоматически меняется на новое. При этом автоматическая переадресация работает не со всеми ссылками на ваш профиль.

{% data variables.product.product_name %} не может настроить перенаправления для:
- [@mentions](/articles/basic-writing-and-formatting-syntax/#mentioning-people-and-teams), использующего старое имя пользователя
- Ссылки на [gist](/articles/creating-gists), включающие старое имя пользователя

{% ifversion fpt or ghec %} 

Если вы являетесь участником {% данных variables.enterprise.prodname_emu_enterprise %}, вы не можете внести изменения в имя пользователя. {% data reusables.enterprise-accounts.emu-more-info-account %}

{% endif %}

## Ссылки на репозиторий

После изменения имени пользователя {% data variables.product.product_name %} автоматически перенаправит ссылки в репозитории.
- Веб-ссылки на существующие репозитории будут продолжать работать. Они начнут функционировать в течение нескольких минут после того, как вы внесете изменение.
- Отправки командной строки из клонов вашего локального репозитория на старые URL-адреса для удаленного отслеживания будут продолжать работать.

Если новый владелец вашего старого имени пользователя создаст репозиторий, имя которого будет совпадать с именем вашего репозитория, это переопределит запись перенаправления и перенаправление перестанет работать. Из-за такого вероятного риска рекомендуется обновить все существующие URL-адреса удаленного репозитория после изменения имени пользователя. Дополнительные сведения см. в разделе [Управление удаленными репозиториями](/github/getting-started-with-github/managing-remote-repositories).

## Ссылки на предыдущую страницу профиля

После изменения имени пользователя ссылки на предыдущую страницу профиля, например `https://{% data variables.command_line.backticks %}/previoususername`, возвращают ошибку 404. Мы рекомендуем обновить все ссылки на вашу учетную запись на {% данных variables.location.product_location %} из другого места{% ifversion fpt или ghec %}, например ваш профиль LinkedIn или Twitter{% endif %}.

## Фиксации Git

{% ifversion fpt or ghec %} Фиксации Git, которые были связаны с вашими адресами электронной почты `noreply`, предоставленными {% data variables.product.product_name %}, не будут привязаны к новому имени пользователя и не будут отображаться в графе вкладов.{% endif %} Если фиксации Git связаны с другим адресом электронной почты, [добавленным в учетную запись GitHub](/articles/adding-an-email-address-to-your-github-account), {% ifversion fpt or ghec %}, включая адреса электронной почты `noreply`, основанные на идентификаторе и предоставленные {% data variables.product.product_name %}, {% endif %}они будут по-прежнему привязаны к вам и будут отображаться в графе вкладов после изменения имени пользователя. Дополнительные сведения о настройке адреса электронной почты см. в статье [Настройка адреса электронной почты для фиксации](/articles/setting-your-commit-email-address).

## Ваши gists

После изменения имени пользователя URL-адреса на любые общедоступные или секретные gists также изменятся, а предыдущие ссылки на них возвращают ошибку 404. Мы рекомендуем обновить ссылки на эти gists в любом месте, к которым вы, возможно, поделились ими.

## Изменение имени пользователя

{% data reusables.user-settings.access_settings %} {% data reusables.user-settings.account_settings %}
3. В разделе "Изменение имени пользователя" нажмите кнопку **Изменить имя пользователя**.
   ![Кнопка "Изменить имя пользователя"](/assets/images/help/settings/settings-change-username.png){% ifversion fpt or ghec %}
4. Прочтите предупреждения об изменении имени пользователя. Если вы по-прежнему хотите изменить имя пользователя, нажмите **Все понятно. Перейти к изменению имени пользователя**.
   ![Кнопка "Предупреждение об изменении имени пользователя"](/assets/images/help/settings/settings-change-username-warning-button.png)
5. Введите новое имя пользователя.
   ![Поле для нового имени пользователя](/assets/images/help/settings/settings-change-username-enter-new-username.png)
6. Если выбранное имя пользователя доступно, нажмите **Изменить имя пользователя**. Если выбранное имя пользователя недоступно, попробуйте другое имя или один из предложенных вариантов.
   ![Кнопка "Предупреждение об изменении имени пользователя"](/assets/images/help/settings/settings-change-my-username-button.png) {% endif %}

## Дополнительные материалы

- [Почему мои фиксации связаны с неправильным пользователем?](/pull-requests/committing-changes-to-your-project/troubleshooting-commits/why-are-my-commits-linked-to-the-wrong-user){% ifversion fpt or ghec %}
- [Политика имен пользователя {% data variables.product.prodname_dotcom %}](/free-pro-team@latest/github/site-policy/github-username-policy){% endif %}
