---
title: Сведения о Enterprise Managed Users
shortTitle: About managed users
intro: You can centrally manage identity and access for your enterprise members on {% data variables.product.prodname_dotcom %} from your identity provider.
product: '{% data reusables.gated-features.emus %}'
redirect_from:
- /early-access/github/articles/get-started-with-managed-users-for-your-enterprise
- /github/setting-up-and-managing-your-enterprise/managing-your-enterprise-users-with-your-identity-provider/about-enterprise-managed-users
- /admin/authentication/managing-your-enterprise-users-with-your-identity-provider/about-enterprise-managed-users
- /admin/identity-and-access-management/managing-iam-with-enterprise-managed-users/about-enterprise-managed-users
versions:
  ghec: '*'
type: overview
topics:
- Accounts
- Authentication
- Enterprise
- SSO
ms.openlocfilehash: 9ca2be64f3806cf8b7b449ea64532c5ae2b17782
ms.sourcegitcommit: 67064b14c9d4d18819db8f6398358b77a1c8002a
ms.translationtype: HT
ms.contentlocale: ru-RU
ms.lasthandoff: 05/17/2022
ms.locfileid: "145116608"
---
## <a name="about--data-variablesproductprodname_emus-"></a>Сведения о {% data variables.product.prodname_emus %}

С помощью {% data variables.product.prodname_emus %} можно управлять учетными записями пользователей корпоративных участников с помощью поставщика удостоверений (IdP). Вы можете упростить проверку подлинности с помощью единого входа SAML и подготовки, обновления и отзыва учетных записей пользователей для ваших корпоративных участников. Пользователи, назначенные приложению {% data variables.product.prodname_emu_idp_application %} в поставщике удостоверений, подготавливаются в качестве новых учетных записей пользователей в {% data variables.product.prodname_dotcom %} и добавляются в ваше предприятие. Имена пользователей, данные профиля, членство в группах и доступ к репозиторию управляется из поставщика удостоверений.

В поставщике удостоверений можно предоставить каждому {% data variables.product.prodname_managed_user %} роль пользователя, владельца предприятия или менеджера по выставлению счетов. {% data variables.product.prodname_managed_users_caps %} могут владеть организациями внутри вашего предприятия и добавлять другие {% data variables.product.prodname_managed_users %} в организации и команды. Дополнительные сведения см. в разделах [Роли в организации](/github/setting-up-and-managing-your-enterprise/managing-users-in-your-enterprise/roles-in-an-enterprise) и [Сведения об организациях](/organizations/collaborating-with-groups-in-organizations/about-organizations).

Членством в организации можно управлять вручную или обновлять автоматически, так как {% data variables.product.prodname_managed_users %} добавляются в группы поставщика удостоверений, подключенные к командам в организации. Когда {% data variables.product.prodname_managed_user %} вручную добавляется в организацию, отмена ее назначения из приложения {% data variables.product.prodname_emu_idp_application %} у поставщика удостоверений приостанавливает работу пользователя, но не удаляет его из организации. Дополнительные сведения об автоматическом управлении членством в организации и команде см. в разделе [Управление членством в команде с помощью групп поставщиков удостоверений](/github/setting-up-and-managing-your-enterprise/managing-your-enterprise-users-with-your-identity-provider/managing-team-memberships-with-identity-provider-groups).

Можно предоставить {% data variables.product.prodname_managed_users %} доступ и возможность участия в работе репозитория в пределах предприятия, но {% data variables.product.prodname_managed_users %} не смогут создавать общедоступное содержимое и сотрудничать с другими пользователями, организациями и предприятиями в других частях {% data variables.product.prodname_dotcom %}. {% data variables.product.prodname_managed_users %}, подготовленных для вашего предприятия, нельзя пригласить в организации или репозитории за пределами предприятия, а также нельзя пригласить {% data variables.product.prodname_managed_users %} в другие предприятия. Внешние участники совместной работы не поддерживаются в {% data variables.product.prodname_emus %}.

Имена пользователей {% data variables.product.prodname_managed_users %} вашего предприятия и данные их профиля, такие как отображаемые имена и адреса электронной почты, задаются с помощью поставщика удостоверений и не могут быть изменены самими пользователями. Дополнительные сведения см. в разделе [Имена пользователей и данные профиля](#usernames-and-profile-information).

{% data reusables.enterprise-accounts.emu-forks %}

Владельцы предприятия могут выполнять аудит всех действий {% data variables.product.prodname_managed_users %} в {% data variables.product.prodname_dotcom %}.

Для использования {% data variables.product.prodname_emus %} требуется отдельный тип корпоративной учетной записи с включенной функцией {% data variables.product.prodname_emus %}. Дополнительные сведения о создании такой учетной записи см. в разделе [Сведения о предприятиях с управляемыми пользователями](#about-enterprises-with-managed-users).


## <a name="identity-provider-support"></a>Поддержка поставщиков удостоверений

{% data variables.product.prodname_emus %} поддерживает следующих поставщиков удостоверений:

{% data reusables.enterprise-accounts.emu-supported-idps %}

## <a name="abilities-and-restrictions-of--data-variablesproductprodname_managed_users-"></a>Возможности и ограничения {% data variables.product.prodname_managed_users %}

{% data variables.product.prodname_managed_users_caps %} могут участвовать только в частных и внутренних репозиториях в своих корпоративных и частных репозиториях, принадлежащих учетной записи пользователя. {% data variables.product.prodname_managed_users_caps %} имеют доступ только для чтения к широкому сообществу {% data variables.product.prodname_dotcom %}. Эти ограничения видимости и доступа для пользователей и содержимого применяются ко всем запросам, включая запросы API.

* {% data variables.product.prodname_managed_users_caps %} не могут создавать проблемы или запросы на вытягивание, комментировать или добавлять реакции, а также добавлять в избранное, отслеживать и разветвлять репозитории за пределами предприятия.
* {% data variables.product.prodname_managed_users_caps %} могут просматривать все общедоступные репозитории на {% data variables.product.prodname_dotcom_the_website %}, но не могу отправлять код в репозитории за пределами предприятия.
* {% data variables.product.prodname_managed_users_caps %} и создаваемое ими содержимое видны только другим членам предприятия. 
* {% data variables.product.prodname_managed_users_caps %} не могут подписываться на пользователей за пределами предприятия.
* {% data variables.product.prodname_managed_users_caps %} не могут создавать и комментировать gist.
* {% data variables.product.prodname_managed_users_caps %} не могут устанавливать {% data variables.product.prodname_github_apps %} в своих учетных записях.
* Другие пользователи {% data variables.product.prodname_dotcom %} не могут видеть, упоминать и приглашать {% data variables.product.prodname_managed_user %} для совместной работы.
* {% data variables.product.prodname_managed_users_caps %} могут владеть только частными репозиториями, и {% data variables.product.prodname_managed_users %} могут приглашать для совместной работы над собственными репозиториями только других участников предприятия.
* В организациях, принадлежащих {% data variables.product.prodname_emu_enterprise %}, можно создавать только частные и внутренние репозитории, в зависимости от параметров видимости корпоративного репозитория и организации. 
* {% data variables.product.prodname_managed_users_caps %} ограничены в использовании {% data variables.product.prodname_pages %}. Дополнительные сведения см. в статье [Сведения о {% data variables.product.prodname_pages %}](/pages/getting-started-with-github-pages/about-github-pages#limitations-for-enterprise-managed-users).

## <a name="about-enterprises-with-managed-users"></a>Сведения о предприятиях с управляемыми пользователями

Для использования {% data variables.product.prodname_emus %} требуется отдельный тип корпоративной учетной записи с включенной функцией {% data variables.product.prodname_emus %}. Чтобы опробовать {% data variables.product.prodname_emus %} или обсудить варианты миграции с существующего предприятия, обратитесь в [отдел продаж {% data variables.product.prodname_dotcom %}](https://enterprise.github.com/contact).

Ваш контакт в отделе продаж GitHub будет работать с вами, чтобы создать новое {% data variables.product.prodname_emu_enterprise %}. Вам потребуется указать адрес электронной почты пользователя, который настроит ваше предприятие, и короткий код, который будет использоваться в качестве суффикса для имен пользователей корпоративных участников. {% data reusables.enterprise-accounts.emu-shortcode %} Дополнительные сведения см. в разделе [Имена пользователей и данные профиля](#usernames-and-profile-information).

После создания предприятия вы получите сообщение электронной почты от {% data variables.product.prodname_dotcom %} с приглашением выбрать пароль для пользователя настройки предприятия, который станет первым владельцем предприятия. Используйте режим инкогнито или приватное окно в браузере при установке пароля. Пользователь установки используется только для настройки единого входа SAML и интеграции подготовки SCIM для предприятия. После успешного включения SAML у него больше не будет доступа для администрирования корпоративной учетной записи.

Имя пользователя установки — это короткий код вашей организации с суффиксом `_admin`. После входа в систему пользователя установки можно приступить к работе, настроив единый вход SAML для вашего предприятия. Дополнительные сведения см. в разделе [Настройка единого входа SAML для Enterprise Managed Users](/github/setting-up-and-managing-your-enterprise/managing-your-enterprise-users-with-your-identity-provider/configuring-saml-single-sign-on-for-enterprise-managed-users).

{% note %}

{% data reusables.enterprise-accounts.emu-password-reset-session %}

{% endnote %}

## <a name="authenticating-as-a--data-variablesproductprodname_managed_user-"></a>Вход в качестве {% data variables.product.prodname_managed_user %}

{% data variables.product.prodname_managed_users_caps %} должны проходить проверку подлинности через поставщика удостоверений. Для проверки подлинности {% data variables.product.prodname_managed_user %} может посетить портал приложения поставщика удостоверений или использовать страницу входа на {% data variables.product.prodname_dotcom_the_website %}.

{% data reusables.enterprise-accounts.about-recovery-codes %} Дополнительные сведения см. в разделе [Управление кодами восстановления для вашей организации](/admin/identity-and-access-management/managing-recovery-codes-for-your-enterprise).

### <a name="authenticating-as-a--data-variablesproductprodname_managed_user--via--data-variablesproductprodname_dotcom_the_website-"></a>Вход в качестве {% data variables.product.prodname_managed_user %} на {% data variables.product.prodname_dotcom_the_website %}

1. Перейдите по адресу [https://github.com/login](https://github.com/login).
1. В текстовом поле "Имя пользователя или адрес электронной почты" введите имя пользователя, включая символ подчеркивания и короткий код.
  ![Снимок экрана: форма входа](/assets/images/help/enterprises/emu-login-username.png) Когда форма распознает ваше имя пользователя, она обновится. В этой форме не нужно вводить пароль.
1. Чтобы перейти к поставщику удостоверений, нажмите кнопку **Войти с помощью поставщика удостоверений**.
  ![Снимок экрана: кнопка "Войти с помощью поставщика удостоверений"](/assets/images/help/enterprises/emu-login-submit.png)

## <a name="usernames-and-profile-information"></a>Имена пользователей и данные профиля

{% data variables.product.product_name %} автоматически создает имя пользователя для каждого пользователя, когда его учетная запись создается с помощью SCIM, путем нормализации идентификатора, предоставленного вашим поставщиком удостоверений. Дополнительные сведения см. в разделе [Рекомендации по использованию имени пользователя для внешней проверки подлинности](/admin/identity-and-access-management/managing-iam-for-your-enterprise/username-considerations-for-external-authentication).

Конфликт может возникнуть при подготовке пользователей, если во время нормализации удаляются уникальные части идентификатора, предоставленного вашим поставщиком удостоверений. Если вы не можете подготовить пользователя из-за конфликта имен пользователей, необходимо изменить имя пользователя, предоставляемое вашим поставщиком удостоверений. Дополнительные сведения см. в разделе [Устранение конфликтов имен пользователей](/admin/identity-and-access-management/managing-iam-for-your-enterprise/username-considerations-for-external-authentication#resolving-username-conflicts).

Имя профиля и адрес электронной почты {% data variables.product.prodname_managed_user %} также предоставляются поставщиком удостоверений. {% data variables.product.prodname_managed_users_caps %} не может изменить имя профиля и адрес электронной почты на {% data variables.product.prodname_dotcom %}.
