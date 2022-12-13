---
title: 'Сведения о {% data variables.product.prodname_emus %}'
shortTitle: About managed users
intro: 'Вы можете централизованно управлять удостоверениями и доступом для членов вашей организации в {% data variables.product.prodname_dotcom %} от вашего поставщика удостоверений.'
redirect_from:
  - /early-access/github/articles/get-started-with-managed-users-for-your-enterprise
  - /github/setting-up-and-managing-your-enterprise/managing-your-enterprise-users-with-your-identity-provider/about-enterprise-managed-users
  - /admin/authentication/managing-your-enterprise-users-with-your-identity-provider/about-enterprise-managed-users
  - /admin/identity-and-access-management/managing-iam-with-enterprise-managed-users/about-enterprise-managed-users
  - /admin/identity-and-access-management/using-enterprise-managed-users-and-saml-for-iam/about-enterprise-managed-users
versions:
  ghec: '*'
type: overview
topics:
  - Accounts
  - Authentication
  - Enterprise
  - SSO
allowTitleToDifferFromFilename: true
ms.openlocfilehash: e24ae7adb9f5c2efbb08be63788dae1eff501d99
ms.sourcegitcommit: 6185352bc563024d22dee0b257e2775cadd5b797
ms.translationtype: MT
ms.contentlocale: ru-RU
ms.lasthandoff: 12/09/2022
ms.locfileid: '148192700'
---
## Сведения о {% data variables.product.prodname_emus %}

С помощью {% data variables.product.prodname_emus %} можно управлять учетными записями пользователей корпоративных участников с помощью поставщика удостоверений (IdP). Пользователи, назначенные приложению {% data variables.product.prodname_emu_idp_application %} в поставщике удостоверений, подготавливаются в качестве новых учетных записей пользователей в {% data variables.product.prodname_dotcom %} и добавляются в ваше предприятие. Вы управляете именами пользователей, данными профиля, членством в команде и доступом к репозиторию для учетных записей пользователей из своего поставщика удостоверений.

В поставщике удостоверений вы можете предоставить каждому {% data variables.enterprise.prodname_managed_user %} роль пользователя, владельца предприятия или менеджера по выставлению счетов. {% data variables.enterprise.prodname_managed_users_caps %} может владеть организациями в пределах предприятия и добавлять другие {% data variables.enterprise.prodname_managed_users %} в организации и команды. Дополнительные сведения см. в разделах [Роли в организации](/github/setting-up-and-managing-your-enterprise/managing-users-in-your-enterprise/roles-in-an-enterprise) и [Сведения об организациях](/organizations/collaborating-with-groups-in-organizations/about-organizations).

{% ifversion oidc-for-emu %}

{% data reusables.enterprise-accounts.emu-cap-validates %} Дополнительную информацию см. в статье [Сведения о поддержке политики условного доступа поставщика удостоверений](/admin/identity-and-access-management/using-enterprise-managed-users-for-iam/about-support-for-your-idps-conditional-access-policy).

{% endif %}

Вы можете предоставить {% data variables.enterprise.prodname_managed_users %} доступ к репозиториям и возможность вносить свой вклад в репозитории на предприятии, но {% data variables.enterprise.prodname_managed_users %} не может создавать общедоступное содержимое или совместно работать с другими пользователями, организациями и предприятиями в остальной части {% data variables.product.prodname_dotcom %}. Дополнительные сведения см. в разделе [Возможности и ограничения {% data variables.enterprise.prodname_managed_users %}](#abilities-and-restrictions-of-enterprise-managed-users).

Имена пользователей {% data variables.enterprise.prodname_managed_users %} вашей организации и сведения о профиле, такие как отображаемые имена и адреса электронной почты, задаются через поставщика удостоверений и не могут быть изменены самими пользователями. Дополнительные сведения см. в разделе [Имена пользователей и данные профиля](#usernames-and-profile-information).

Владельцы предприятия могут выполнять аудит всех действий {% data variables.enterprise.prodname_managed_users %}в {% data variables.product.prodname_dotcom %}. Дополнительные сведения см. в разделе [События журнала аудита для вашего предприятия](/admin/monitoring-activity-in-your-enterprise/reviewing-audit-logs-for-your-enterprise/audit-log-events-for-your-enterprise#about-audit-log-events-for-your-enterprise).

Для использования {% data variables.product.prodname_emus %} требуется отдельный тип корпоративной учетной записи с включенной функцией {% data variables.product.prodname_emus %}. Дополнительные сведения о создании такой учетной записи см. в разделе [Сведения о предприятиях с управляемыми пользователями](#about-enterprises-with-managed-users).

{% note %}

**Примечание.** Существует несколько вариантов управления удостоверениями и доступом с помощью {% data variables.product.prodname_ghe_cloud %}, и {% data variables.product.prodname_emus %} — не лучшее решение для каждого клиента. Дополнительные сведения о том, подходит ли {% data variables.product.prodname_emus %} для вашего предприятия, см. в разделе [Об проверке подлинности для вашего предприятия](/admin/identity-and-access-management/managing-iam-for-your-enterprise/about-authentication-for-your-enterprise#identifying-the-best-authentication-method-for-your-enterprise).

{% endnote %}

## Сведения об управлении членством в организации

Членством в организации можно управлять вручную или автоматически обновлять членство с помощью групп поставщика удостоверений. Чтобы управлять членством в организации через поставщика удостоверений, участники должны быть добавлены в группу idP, а группа IdP должна быть подключена к команде в организации. Дополнительные сведения об автоматическом управлении членством в организациях и командах см. в разделе [Управление членством в командах с помощью групп поставщиков удостоверений](/admin/identity-and-access-management/managing-iam-with-enterprise-managed-users/managing-team-memberships-with-identity-provider-groups).

Способ добавления участника в организацию, принадлежащей вашему предприятию (через группы поставщика удостоверений или вручную), определяет, как он должен быть удален из организации. 

- Если участник был добавлен в организацию вручную, его необходимо удалить вручную. Отмена их назначения в приложении {% data variables.product.prodname_emu_idp_application %} в поставщике удостоверений приведет к приостановке работы пользователя, но не к его удалению из организации.
- Если пользователь стал членом организации, так как он был добавлен в группы поставщика удостоверений, сопоставленные с одной или несколькими командами в организации, удаление его из _всех_ сопоставленных групп удостоверений, связанных с организацией, приведет к удалению его из организации.

Чтобы узнать, как участник был добавлен в организацию, можно отфильтровать список участников по типу. Дополнительные сведения см. на странице [Просмотр пользователей в предприятии](/admin/user-management/managing-users-in-your-enterprise/viewing-people-in-your-enterprise#filtering-by-member-type-in-an-enterprise-with-managed-users).

## Поддержка поставщиков удостоверений

{% data variables.product.prodname_emus %} поддерживает следующие поставщики удостоверений{% ifversion oidc-for-emu %} и способы проверки подлинности:

|                                  | SAML                                          | OIDC                                          |
|----------------------------------|-----------------------------------------------|-----------------------------------------------|
| Azure Active Directory           | {% octicon "check" aria-label="Check icon" %} | {% octicon "check" aria-label="Check icon" %} |
| Okta                             | {% octicon "check" aria-label="Check icon" %} |                                               |
{% else %}:

{% data reusables.enterprise-accounts.emu-supported-idps %}

{% endif %}

## Возможности и ограничения {% data variables.enterprise.prodname_managed_users %}

{% data variables.enterprise.prodname_managed_users_caps %} может вносить свой вклад только в частные и внутренние репозитории в корпоративных и частных репозиториях, принадлежащих учетной записи пользователя. {% data variables.enterprise.prodname_managed_users_caps %} имеют доступ только для чтения к более широкому сообществу {% data variables.product.prodname_dotcom %}. Эти ограничения видимости и доступа для пользователей и содержимого применяются ко всем запросам, включая запросы API.

* {% data variables.enterprise.prodname_managed_users_caps %} не могут быть приглашены в организации или репозитории за пределами предприятия, а {% data variables.enterprise.prodname_managed_users %} не могут быть приглашены в другие предприятия. 
* Внешние участники совместной работы не поддерживаются в {% data variables.product.prodname_emus %}.
* {% data variables.enterprise.prodname_managed_users_caps %} не может создавать проблемы или запросы на вытягивание, комментировать или добавлять реакции на репозитории, а также не могут создавать или создавать вилки репозитории за пределами предприятия.
* {% data variables.enterprise.prodname_managed_users_caps %} может просматривать все общедоступные репозитории в {% data variables.product.prodname_dotcom_the_website %}, но не может отправлять код в репозитории за пределами предприятия.
* {% data variables.enterprise.prodname_managed_users_caps %} и создаваемое ими содержимое видны только другим участникам предприятия. 
* {% data variables.enterprise.prodname_managed_users_caps %} не может подписаться на пользователей за пределами предприятия.
* {% data variables.enterprise.prodname_managed_users_caps %} не может создавать gist или комментировать gist.
* {% data variables.enterprise.prodname_managed_users_caps %} не удается создать начальные рабочие процессы для {% data variables.product.prodname_actions %}.
* {% data variables.enterprise.prodname_managed_users_caps %} не удается установить {% data variables.product.prodname_github_apps %} в учетных записях пользователей.
* Другие пользователи {% data variables.product.prodname_dotcom %} не могут видеть, упоминать или приглашать {% data variables.enterprise.prodname_managed_user %} для совместной работы.
* Вы можете выбрать, смогут ли {% data variables.enterprise.prodname_managed_users %} создавать репозитории, принадлежащие учетным записям пользователей. Дополнительные сведения см. в разделе [Применение политик управления репозиториями в организации](/admin/policies/enforcing-policies-for-your-enterprise/enforcing-repository-management-policies-in-your-enterprise#enforcing-a-policy-for-repository-creation).
* Если вы разрешаете {% data variables.enterprise.prodname_managed_users %} создавать репозитории, принадлежащие учетным записям пользователей, они могут владеть только частными репозиториями и могут приглашать других участников предприятия для совместной работы над репозиториями, принадлежащими пользователям.
* {% data reusables.enterprise-accounts.emu-forks %}
* В организациях, принадлежащих {% data variables.enterprise.prodname_emu_enterprise %}, можно создавать только частные и внутренние репозитории в зависимости от параметров видимости репозитория организации и предприятия. 
* {% data variables.enterprise.prodname_managed_users_caps %} ограничены в использовании {% data variables.product.prodname_pages %}. Дополнительные сведения см. в статье [Сведения о {% data variables.product.prodname_pages %}](/pages/getting-started-with-github-pages/about-github-pages#limitations-for-enterprise-managed-users).

## Начало работы с {% data variables.product.prodname_emus %}

Прежде чем ваши разработчики смогут использовать {% data variables.product.prodname_ghe_cloud %} с {% data variables.product.prodname_emus %}, необходимо выполнить ряд действий по настройке.

1. Для использования {% data variables.product.prodname_emus %} требуется отдельный тип корпоративной учетной записи с включенной функцией {% data variables.product.prodname_emus %}. Чтобы опробовать {% data variables.product.prodname_emus %} или обсудить варианты миграции с существующего предприятия, обратитесь в [отдел продаж {% data variables.product.prodname_dotcom %}](https://enterprise.github.com/contact).
  
  Ваш контакт из группы продаж GitHub будет работать с вами, чтобы создать {% data variables.enterprise.prodname_emu_enterprise %}. Вам потребуется указать адрес электронной почты пользователя, который настроит ваше предприятие, и короткий код, который будет использоваться в качестве суффикса для имен пользователей корпоративных участников. {% data reusables.enterprise-accounts.emu-shortcode %} Дополнительные сведения см. в разделе [Имена пользователей и данные профиля](#usernames-and-profile-information).
  
2. После создания предприятия вы получите сообщение электронной почты от {% data variables.product.prodname_dotcom %} с приглашением выбрать пароль для пользователя настройки предприятия, который станет первым владельцем предприятия. Используйте режим инкогнито или приватное окно в браузере при установке пароля. Пользователь настройки используется только для настройки единого входа и интеграции подготовки SCIM для предприятия. У него больше не будет доступа для администрирования корпоративной учетной записи после успешного включения единого входа. Имя пользователя установки — это короткий код вашей организации с суффиксом `_admin`. 
  
  {% note %}
  
  {% data reusables.enterprise-accounts.emu-password-reset-session %}
  
  {% endnote %}
  
3. После входа в систему как пользователь настройки рекомендуется включить двухфакторную проверку подлинности. Подробнее: [Настройка двухфакторной проверки подлинности](/authentication/securing-your-account-with-two-factor-authentication-2fa/configuring-two-factor-authentication).

1. Для начала настройте {% ifversion oidc-for-emu %}способ проверки подлинности ваших участников. Если вы используете Azure Active Directory в качестве поставщика удостоверений, вы можете выбирать между OpenID Connect (OIDC) и языком разметки заявлений системы безопасности (SAML). Мы рекомендуем использовать OIDC, который включает поддержку политик условного доступа (CAP). Если требуется несколько предприятий с подготовкой {% data variables.enterprise.prodname_managed_users %} из одного клиента, необходимо использовать SAML для каждого предприятия после первого. Если вы используете Okta в качестве поставщика удостоверений, вы можете использовать SAML для проверки подлинности своих участников.{% else %}Единый вход SAML для вашего предприятия. Дополнительные сведения см. в разделе [Настройка единого входа SAML для пользователей, управляемых предприятием](/admin/identity-and-access-management/managing-iam-with-enterprise-managed-users/configuring-saml-single-sign-on-for-enterprise-managed-users).{% endif %}
  
  {% ifversion oidc-for-emu %}
  
  Для начала прочитайте руководство для выбранного вами способа проверки подлинности.
  
    - [Настройка OIDC для пользователей, управляемых предприятием](/admin/identity-and-access-management/using-enterprise-managed-users-for-iam/configuring-oidc-for-enterprise-managed-users).
    - [Настройка единого входа SAML для корпоративных управляемых пользователей](/admin/identity-and-access-management/managing-iam-with-enterprise-managed-users/configuring-saml-single-sign-on-for-enterprise-managed-users).
  
  {% endif %}
  
4. После настройки единого входа вы можете настроить подготовку SCIM. SCIM — это то, как поставщик удостоверений создаст {% data variables.enterprise.prodname_managed_users %} в {% data variables.product.prodname_dotcom_the_website %}. Дополнительные сведения о настройке подготовки SCIM см. в разделе [Настройка подготовки SCIM для корпоративных управляемых пользователей](/admin/identity-and-access-management/managing-iam-with-enterprise-managed-users/configuring-scim-provisioning-for-enterprise-managed-users).
  
5. После настройки проверки подлинности и подготовки можно приступить к управлению членством в организации для {% data variables.enterprise.prodname_managed_users %}, синхронизируя группы поставщиков удостоверений с командами. Дополнительные сведения см. на странице [Управление членством в командах с помощью групп поставщиков удостоверений](/admin/identity-and-access-management/using-enterprise-managed-users-for-iam/managing-team-memberships-with-identity-provider-groups).

Если участники вашего предприятия должны использовать одну рабочую станцию для участия в репозиториях в {% data variables.location.product_location %} из {% data variables.enterprise.prodname_managed_user %} и личной учетной записи, вы можете предоставить поддержку. Дополнительные сведения см. в разделе [Поддержка разработчиков с несколькими учетными записями пользователей в {% data variables.product.prodname_dotcom_the_website %}](#supporting-developers-with-multiple-user-accounts-on-githubcom).

## Проверка подлинности в качестве {% data variables.enterprise.prodname_managed_user %}

{% data variables.enterprise.prodname_managed_users_caps %} должен пройти проверку подлинности через поставщика удостоверений. Для проверки подлинности {% data variables.enterprise.prodname_managed_user %} может посетить портал приложения поставщика удостоверений или использовать страницу входа в {% data variables.product.prodname_dotcom_the_website %}. 

По умолчанию, когда пользователь без проверки подлинности пытается получить доступ к предприятию, использующим {% data variables.product.prodname_emus %}, {% data variables.product.company_short %} отображает ошибку 404. Владелец предприятия может включить автоматическое перенаправление на единый вход (SSO) вместо 404. Дополнительные сведения см. в разделе [Применение политик для параметров безопасности на предприятии](/enterprise-cloud@latest/admin/policies/enforcing-policies-for-your-enterprise/enforcing-policies-for-security-settings-in-your-enterprise#managing-sso-for-unauthenticated-users).

{% data reusables.enterprise-accounts.about-recovery-codes %} Дополнительные сведения см. в разделе [Управление кодами восстановления для вашей организации](/admin/identity-and-access-management/managing-recovery-codes-for-your-enterprise).

### Проверка подлинности в качестве {% data variables.enterprise.prodname_managed_user %} с помощью {% data variables.product.prodname_dotcom_the_website %}

1. Перейдите по адресу [https://github.com/login](https://github.com/login).
1. В текстовом поле "Имя пользователя или адрес электронной почты" введите имя пользователя, включая символ подчеркивания и короткий код.
  ![Снимок экрана: форма входа](/assets/images/help/enterprises/emu-login-username.png) Когда форма распознает ваше имя пользователя, она обновится. В этой форме не нужно вводить пароль.
1. Чтобы перейти к поставщику удостоверений, нажмите кнопку **Войти с помощью поставщика удостоверений**.
  ![Снимок экрана: кнопка "Войти с помощью поставщика удостоверений"](/assets/images/help/enterprises/emu-login-submit.png)

## Имена пользователей и данные профиля

{% data variables.product.product_name %} автоматически создает имя пользователя для каждого пользователя, когда его учетная запись создается с помощью SCIM, путем нормализации идентификатора, предоставленного вашим поставщиком удостоверений. Дополнительные сведения см. в разделе [Рекомендации по использованию имени пользователя для внешней проверки подлинности](/admin/identity-and-access-management/managing-iam-for-your-enterprise/username-considerations-for-external-authentication).

Конфликт может возникнуть при подготовке пользователей, если во время нормализации удаляются уникальные части идентификатора, предоставленного вашим поставщиком удостоверений. Если вы не можете подготовить пользователя из-за конфликта имен пользователей, необходимо изменить имя пользователя, предоставляемое вашим поставщиком удостоверений. Дополнительные сведения см. в разделе [Устранение проблем с именем пользователя](/admin/identity-and-access-management/managing-iam-for-your-enterprise/username-considerations-for-external-authentication#resolving-username-problems).

{% data reusables.enterprise-accounts.emu-only-emails-within-the-enterprise-can-conflict %} 

Имя профиля и адрес электронной почты {% data variables.enterprise.prodname_managed_user %} также предоставляются поставщиком удостоверений. {% data variables.enterprise.prodname_managed_users_caps %} не может изменить имя своего профиля или адрес электронной почты в {% data variables.product.prodname_dotcom %}, а поставщик удостоверений может указать только один адрес электронной почты.

## Поддержка разработчиков с несколькими учетными записями пользователей в {% data variables.location.product_location %}

Люди вашей команды может потребоваться внести свой вклад в ресурсы в {% data variables.location.product_location %}, которые находятся за пределами {% data variables.enterprise.prodname_emu_enterprise %}. Например, может потребоваться создать отдельное предприятие для открытый код проектов вашей компании. Так как {% data variables.enterprise.prodname_managed_user %} не может вносить свой вклад в общедоступные ресурсы, пользователям потребуется поддерживать отдельную личную учетную запись для этой работы.

Люди, которые должны участвовать в работе из двух учетных записей пользователей в {% data variables.location.product_location %} с помощью одной рабочей станции, могут настроить Git для упрощения процесса. Дополнительные сведения см. в разделе [Управление несколькими учетными записями](/account-and-profile/setting-up-and-managing-your-personal-account-on-github/managing-your-personal-account/managing-multiple-accounts).
