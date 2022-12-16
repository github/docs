---
title: Просмотр журнала безопасности
intro: 'Вы можете просмотреть журнал безопасности для вашей личной учетной записи, чтобы лучше понять действия, которые вы выполнили, и действия, выполненные другими, но связанные с вами.'
miniTocMaxHeadingLevel: 3
redirect_from:
  - /articles/reviewing-your-security-log
  - /github/authenticating-to-github/reviewing-your-security-log
  - /github/authenticating-to-github/keeping-your-account-and-data-secure/reviewing-your-security-log
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Identity
  - Access management
shortTitle: Security log
ms.openlocfilehash: af0c238e3bda40874ed09d6afb402cc6934e7c4b
ms.sourcegitcommit: 5b0becac9098ab45c2204882d719f5cf17bfff18
ms.translationtype: MT
ms.contentlocale: ru-RU
ms.lasthandoff: 10/31/2022
ms.locfileid: '148120850'
---
## Доступ к журналу безопасности

В журнале безопасности перечислены все действия, выполненные за последние 90 дней.

{% data reusables.user-settings.access_settings %} {% ifversion fpt or ghec or ghes > 3.4 or ghae > 3.4 %}
1. В разделе "Архивы" на боковой панели щелкните **{% octicon "log" aria-label="The log icon" %} Журнал безопасности**.
{% else %}
1. На боковой панели параметров пользователя щелкните **Журнал безопасности**.
  Вкладка ![Журнал безопасности](/assets/images/help/settings/audit-log-tab.png) {% endif %}

## Поиск в журнале безопасности

{% data reusables.audit_log.audit-log-search %}

### Поиск с учетом выполненного действия

События, перечисленные в вашем журнале безопасности, активированы вашими действиями. Действия сгруппированы по следующим категориям.

| Имя категории | Описание |------------------|-------------------{% ifversion fpt or ghec %} | [`billing`](#billing-category-actions) | Содержит все свойства, связанные со сведениями о выставлении счетов.
| [`codespaces`](#codespaces-category-actions) | Содержит все действия, связанные с {% data variables.product.prodname_github_codespaces %}. Дополнительные сведения см. в разделе [Сведения о {% data variables.product.prodname_codespaces %}](/github/developing-online-with-codespaces/about-codespaces).
| [`marketplace_agreement_signature`](#marketplace_agreement_signature-category-actions) | Содержит все действия, связанные с подписыванием соглашения с разработчиком {% data variables.product.prodname_marketplace %}.
| [`marketplace_listing`](#marketplace_listing-category-actions) | Содержит все действия, связанные с перечислением приложений в {% data variables.product.prodname_marketplace %}. {% endif %} | [`oauth_access`](#oauth_access-category-actions) | Содержит все действия, связанные с [{% data variables.product.prodname_oauth_apps %}](/github/authenticating-to-github/keeping-your-account-and-data-secure/authorizing-oauth-apps) , с которым вы подключились. {% ifversion fpt or ghec %} | [`payment_method`](#payment_method-category-actions) | Содержит все действия, связанные с оплатой подписки на {% data variables.product.prodname_dotcom %}. {% endif %} {% ifversion pat-v2%} | [`personal_access_token`](#personal_access_token-category-actions) | Содержит действия, связанные с {% data variables.product.pat_v2 %}s. Дополнительные сведения см. в разделе [Создание {% data variables.product.pat_generic %}](/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token). {% endif %} | [`profile_picture`](#profile_picture-category-actions) | Содержит все действия, связанные с изображением профиля.
| [`project`](#project-category-actions) | Содержит все действия, связанные с панелями проекта.
| [`public_key`](#public_key-category-actions) | Содержит все действия, связанные с [открытыми ключами SSH](/articles/adding-a-new-ssh-key-to-your-github-account).
| [`repo`](#repo-category-actions) | Содержит все действия, связанные с репозиториями, которыми вы владеете.{% ifversion fpt or ghec %} | [`sponsors`](#sponsors-category-actions) | Содержит все события, связанные с кнопками "Спонсор" и {% data variables.product.prodname_sponsors %} (см. разделах [Сведения о {% data variables.product.prodname_sponsors %}](/sponsors/getting-started-with-github-sponsors/about-github-sponsors) и [Отображение кнопки "Спонсор" в репозитории](/articles/displaying-a-sponsor-button-in-your-repository)"){% endif %}{% ifversion ghes or ghae %} | [`team`](#team-category-actions) | Содержит все действия, связанные с командами, в которые вы входите.{% endif %}{% ifversion not ghae %} | [`two_factor_authentication`](#two_factor_authentication-category-actions) | Содержит все действия, связанные с [двухфакторной проверкой подлинности](/articles/securing-your-account-with-two-factor-authentication-2fa).{% endif %} | [`user`](#user-category-actions) | Содержит все действия, связанные с учетной записью.

{% ifversion fpt or ghec %}

## Экспорт журнала безопасности

{% data reusables.audit_log.export-log %} {% data reusables.audit_log.exported-log-keys-and-values %}

{% endif %}

## Действия журнала безопасности

Обзор некоторых наиболее распространенных действий, записанных как события в журнале безопасности.

{% ifversion fpt or ghec %}

### Действия категории `billing`

| Действие | Описание
|------------------|-------------------
| `change_billing_type` | Активируется при [изменении способа оплаты](/articles/adding-or-editing-a-payment-method) для {% data variables.product.prodname_dotcom %}.
| `change_email` | Активируется при [изменении адреса электронной почты](/articles/changing-your-primary-email-address).

### Действия категории `codespaces`

| Действие | Описание
|------------------|-------------------
| `create` | Активируется при [создании пространства кода](/github/developing-online-with-codespaces/creating-a-codespace).
| `resume` | Активируется при возобновлении приостановленного пространства кода.
| `delete` | Активируется при [удалении пространства кода](/github/developing-online-with-codespaces/deleting-a-codespace).
| `manage_access_and_security` | Активируется при [обновлении репозиториев, к которым пространство кода имеет доступ](/github/developing-online-with-codespaces/managing-access-and-security-for-codespaces).
| `trusted_repositories_access_update` | Активируется при изменении в учетной записи [параметров доступа и безопасности для {% data variables.product.prodname_codespaces %}](/github/developing-online-with-codespaces/managing-access-and-security-for-codespaces).

### Действия категории `marketplace_agreement_signature`

| Действие | Описание
|------------------|-------------------
| `create` | Активируется при подписании соглашения с разработчиком {% data variables.product.prodname_marketplace %}.

### Действия категории `marketplace_listing`

| Действие | Описание
|------------------|-------------------
| `approve` | Активируется, если ваш список утвержден для включения в {% data variables.product.prodname_marketplace %}.
| `create` | Активируется при создании списка для приложения в {% data variables.product.prodname_marketplace %}.
| `delist` | Активируется при удалении описания из {% data variables.product.prodname_marketplace %}.
| `redraft` | Активируется при переводе списка обратно в состояние "Черновик".
| `reject` | Активируется, если ваш список не принят для включения в {% data variables.product.prodname_marketplace %}.

{% endif %}

### Действия категории `oauth_authorization`

| Действие | Описание
|------------------|-------------------
| `create` | Активируется при [предоставлении доступа к {% data variables.product.prodname_oauth_app %}](/github/authenticating-to-github/keeping-your-account-and-data-secure/authorizing-oauth-apps).
| `destroy` | Активируется при [отмене доступа {% data variables.product.prodname_oauth_app %} к учетной записи](/articles/reviewing-your-authorized-integrations) , а также при [отмене или истечении срока действия авторизации](/github/authenticating-to-github/keeping-your-account-and-data-secure/token-expiration-and-revocation).

{% ifversion fpt or ghec %}

### Действия категории `payment_method`

| Действие | Описание
|------------------|-------------------
| `create` | Активируется при добавлении нового способа оплаты, например новой кредитной карты или учетной записи PayPal.
| `update` | Активируется при обновлении существующего метода оплаты.

{% endif %}

{% ifversion pat-v2 %}

### Действия категории `personal_access_token`

| Действие | Описание
|------------------|-------------------
| `access_granted` | Активируется, когда созданному {% data variables.product.pat_v2 %} предоставляется доступ к ресурсам.
| `access_revoked` | Активируется при отзыве созданного {% data variables.product.pat_v2 %}. Маркер по-прежнему может считывать общедоступные ресурсы организации.
| `create` | Активируется при создании {% data variables.product.pat_v2 %}.
| `credential_regenerated` | Активируется при повторном создании {% data variables.product.pat_v2 %}.
| `destroy` | Активируется при удалении {% data variables.product.pat_v2 %}.
| `request_cancelled` | Активируется при отмене ожидающего запроса на доступ к ресурсам организации {% data variables.product.pat_v2 %}.
| `request_created` | Активируется при создании {% data variables.product.pat_v2 %} для доступа к ресурсам организации, и организации требуется утверждение, прежде чем {% data variables.product.pat_v2 %} сможет получить доступ к ресурсам организации.
| `request_denied` | Активируется при отклонении запроса {% data variables.product.pat_v2 %} на доступ к ресурсам организации. Дополнительные сведения см. в разделе [Управление запросами для {% data variables.product.pat_generic %} в организации](/organizations/managing-programmatic-access-to-your-organization/managing-requests-for-personal-access-tokens-in-your-organization).

{% endif %}

### Действия категории `profile_picture`

| Действие | Описание
|------------------|-------------------
| `update` | Активируется при [настройке или обновлении изображения профиля](/articles/setting-your-profile-picture/).

### Действия категории `project`

| Действие | Описание
|--------------------|---------------------
| `access` | Активируется при изменении видимости доски проекта.
| `create` | Активируется при создании панели проекта.
| `rename` | Активируется при переименовании панели проекта.
| `update` | Активируется при обновлении панели проекта.
| `delete` | Активируется при удалении панели проекта.
| `link`   | Активируется при связывании репозитория с панелью проекта.
| `unlink` | Активируется при отмене связи репозитория с панелью проекта.
| `update_user_permission` | Активируется, когда или сторонний участник совместной работы добавляется на доску проекта или удаляется с нее либо для него изменяется уровень разрешений.

### Действия категории `public_key`

| Действие | Описание
|------------------|-------------------
| `create` | Активируется при [добавлении нового открытого ключа SSH в учетную запись в {% ifversion ghae %}{% data variables.product.product_name %}{% else %}{% data variables.location.product_location %}{% endif %}](/articles/adding-a-new-ssh-key-to-your-github-account).
| `delete` | Активируется при [удалении открытого ключа SSH для учетной записи в {% ifversion ghae %}{% data variables.product.product_name %}{% else %}{% data variables.location.product_location %}{% endif %}](/articles/reviewing-your-ssh-keys).

### Действия категории `repo`

| Действие | Описание
|------------------|-------------------
| `access` | Активируется при [переключении репозитория с частного на общедоступный](/articles/making-a-private-repository-public) (или наоборот).
| `add_member` | Активируется при {% data variables.product.product_name %} {% ifversion fpt or ghec %}[приглашении пользователя для доступа к совместной работе](/articles/inviting-collaborators-to-a-personal-repository){% else %}[предоставлении пользователю доступа к совместной работе](/articles/inviting-collaborators-to-a-personal-repository){% endif %} с репозиторием.
| `add_topic` | Активируется при [добавлении раздела](/articles/classifying-your-repository-with-topics) в репозиторий владельцем репозитория.
| `archived` | Активируется при [архивировании репозитория](/articles/about-archiving-repositories) владельцем репозитория.{% ifversion ghes %}
| `config.disable_anonymous_git_access` | Активируется при отключении [анонимного доступа для чтения в Git](/enterprise/user/articles/enabling-anonymous-git-read-access-for-a-repository) в общедоступном репозитории.
| `config.enable_anonymous_git_access` | Активируется при включении [анонимного доступа для чтения в Git](/enterprise/user/articles/enabling-anonymous-git-read-access-for-a-repository) в общедоступном репозитории.
| `config.lock_anonymous_git_access` | Активируется при [блокировке параметра анонимного доступа для чтения в Git](/enterprise/admin/guides/user-management/preventing-users-from-changing-anonymous-git-read-access) репозитория.
| `config.unlock_anonymous_git_access` | Активируется при [разблокировке параметра анонимного доступа для чтения в Git](/enterprise/admin/guides/user-management/preventing-users-from-changing-anonymous-git-read-access) репозитория.{% endif %}
| `create` | Активируется при [создании нового репозитория](/articles/creating-a-new-repository).
| `destroy` |  Активируется при [ удалении репозитория](/articles/deleting-a-repository).{% ifversion fpt or ghec %}
| `disable` | Активируется при отключении репозитория (например, при [недостаточном объеме средств](/articles/unlocking-a-locked-account)).{% endif %}{% ifversion fpt or ghec %}
| `download_zip` | Активируется при скачивании ZIP- или TAR-архива репозитория.
| `enable` | Активируется при повторном включении репозитория. {% endif %}
| `remove_member` | Активируется при удалении пользователя {% data variables.product.product_name %} [из репозитория в качестве участника совместной работы](/articles/removing-a-collaborator-from-a-personal-repository).
| `remove_topic` | Активируется при удалении раздела репозитория владельцем репозитория.
| `rename` | Активируется при [переименовании репозитория](/articles/renaming-a-repository).
| `staff_unlock` | Активируется, когда владелец предприятия или {% data variables.contact.github_support %} (с разрешения администратора репозитория) временно разблокировали репозиторий. Видимость репозитория не изменяется.
| `transfer` | Активируется при [передаче репозитория](/articles/how-to-transfer-a-repository).
| `transfer_start` | Активируется при подготовке к передаче репозитория.
| `unarchived` | Активируется при распаковке репозитория владельцем репозитория.

{% ifversion fpt or ghec %}
### Действия категории `sponsors`

| Действие | Описание
|------------------|-------------------
| `custom_amount_settings_change` | Активируется при включении или отключении настраиваемых сумм или изменении предлагаемой настраиваемой суммы (см. раздел [Управление уровнями спонсорской поддержки](/github/supporting-the-open-source-community-with-github-sponsors/managing-your-sponsorship-tiers))
| `repo_funding_links_file_action` | Активируется при изменении файла FUNDING в репозитории (см. раздел [Отображение кнопки спонсора в репозитории](/articles/displaying-a-sponsor-button-in-your-repository))
| `sponsor_sponsorship_cancel` | Активируется при отмене спонсорской поддержки (см. раздел [Понижение уровня спонсорской поддержки](/articles/downgrading-a-sponsorship))
| `sponsor_sponsorship_create` | Активируется при спонсорской поддержке учетной записи (см. статью [Спонсорская поддержка участника разработки с открытым кодом](/sponsors/sponsoring-open-source-contributors/sponsoring-an-open-source-contributor))
| `sponsor_sponsorship_payment_complete` | Активируется после предоставления спонсорской поддержки учетной записи и обработки вашего платежа (см. статью [Спонсорская поддержка участника разработки с открытым кодом](/sponsors/sponsoring-open-source-contributors/sponsoring-an-open-source-contributor))
| `sponsor_sponsorship_preference_change` | Активируется при изменении способа получения обновлений по электронной почте от спонсируемого разработчика (см. раздел [Управление спонсорской поддержкой](/sponsors/sponsoring-open-source-contributors/managing-your-sponsorship)).
| `sponsor_sponsorship_tier_change` | Активируется при повышении или понижении уровня спонсорской поддержки (см. статью [Повышение уровня спонсорской поддержки](/articles/upgrading-a-sponsorship) и [Понижение уровня спонсорской поддержки](/articles/downgrading-a-sponsorship))
| `sponsored_developer_approve` | Активируется при утверждении учетной записи {% data variables.product.prodname_sponsors %} (см. раздел [Настройка {% data variables.product.prodname_sponsors %} для личной учетной записи](/sponsors/receiving-sponsorships-through-github-sponsors/setting-up-github-sponsors-for-your-personal-account)).
| `sponsored_developer_create` | Активируется при создании учетной записи {% data variables.product.prodname_sponsors %} (см. раздел [Настройка {% data variables.product.prodname_sponsors %} для личной учетной записи](/sponsors/receiving-sponsorships-through-github-sponsors/setting-up-github-sponsors-for-your-personal-account)).
| `sponsored_developer_disable` | Активируется при отключении учетной записи {% data variables.product.prodname_sponsors %}
| `sponsored_developer_redraft` | Активируется при возврате учетной записи {% data variables.product.prodname_sponsors %} в состояние "Черновик" из состояния "Утверждено"
| `sponsored_developer_profile_update` | Активируется при изменении профиля спонсируемого разработчика (см. раздел [Изменение данных профиля для {% data variables.product.prodname_sponsors %}](/sponsors/receiving-sponsorships-through-github-sponsors/editing-your-profile-details-for-github-sponsors)).
| `sponsored_developer_request_approval` | Активируется при отправке приложения для {% data variables.product.prodname_sponsors %} на утверждение (см. раздел [Настройка {% data variables.product.prodname_sponsors %} для личной учетной записи](/sponsors/receiving-sponsorships-through-github-sponsors/setting-up-github-sponsors-for-your-personal-account)).
| `sponsored_developer_tier_description_update` | Активируется при изменении описания для уровня спонсорской поддержки (см. раздел [Управление уровнями спонсорской поддержки](/sponsors/receiving-sponsorships-through-github-sponsors/managing-your-sponsorship-tiers))
| `sponsored_developer_update_newsletter_send` | Активируется при отправке обновления по электронной почте спонсорам (см. раздел [Связь со спонсорами](/sponsors/receiving-sponsorships-through-github-sponsors/contacting-your-sponsors))
| `waitlist_invite_sponsored_developer` | Активируется при получении приглашения для присоединения {% data variables.product.prodname_sponsors %} из листа ожидания (см. раздел [Настройка {% data variables.product.prodname_sponsors %} для личной учетной записи](/sponsors/receiving-sponsorships-through-github-sponsors/setting-up-github-sponsors-for-your-personal-account)).
| `waitlist_join` | Активируется при присоединении к листу ожидания, чтобы стать спонсируемым разработчиком (см. раздел [Настройка {% data variables.product.prodname_sponsors %} для вашей организации](/sponsors/receiving-sponsorships-through-github-sponsors/setting-up-github-sponsors-for-your-personal-account)).
{% endif %}

{% ifversion fpt or ghec %}
### Действия категории `successor_invitation`

| Действие | Описание
|------------------|-------------------
| `accept` | Активируется при принятии приглашения на продолжение (см. раздел [Сохранение непрерывности владения репозиториями личной учетной записи](/github/setting-up-and-managing-your-github-user-account/maintaining-ownership-continuity-of-your-user-accounts-repositories)).
| `cancel` | Активируется при отмене приглашения на продолжение (см. раздел [Сохранение непрерывности владения репозиториями личной учетной записи](/github/setting-up-and-managing-your-github-user-account/maintaining-ownership-continuity-of-your-user-accounts-repositories)).
| `create` | Активируется при создании приглашения на продолжение (см. раздел [Сохранение непрерывности владения репозиториями личной учетной записи](/github/setting-up-and-managing-your-github-user-account/maintaining-ownership-continuity-of-your-user-accounts-repositories)).
| `decline` | Активируется при отклонении приглашения на продолжение (см. раздел [Сохранение непрерывности владения репозиториями личной учетной записи](/github/setting-up-and-managing-your-github-user-account/maintaining-ownership-continuity-of-your-user-accounts-repositories)).
| `revoke` | Активируется при отзыве приглашения на продолжение (см. раздел [Сохранение непрерывности владения репозиториями личной учетной записи](/github/setting-up-and-managing-your-github-user-account/maintaining-ownership-continuity-of-your-user-accounts-repositories)).
{% endif %}

{% ifversion ghes or ghae %}

### Действия категории `team`

| Действие | Описание
|------------------|-------------------
| `add_member` | Активируется при [добавлении вас в команду](/articles/adding-organization-members-to-a-team) участником организации, участником которой вы являетесь.
| `add_repository` | Активируется при передаче команде, участником которой вы являетесь, контроля над репозиторием.
| `create` | Активируется при создании новой команды в организации, участником которой вы являетесь.
| `destroy` | Активируется при удалении команды из организации, участником которой вы являетесь.
| `remove_member` | Активируется при [удалении участника организации из команды](/articles/removing-organization-members-from-a-team), участником которой вы являетесь.
| `remove_repository` | Активируется, когда репозиторий выходит из-под контроля команды.

{% endif %}

{% ifversion not ghae %}
### Действия категории `two_factor_authentication`

| Действие | Описание
|------------------|-------------------
| `enabled` | Активируется при [включении двухфакторной проверки подлинности](/articles/securing-your-account-with-two-factor-authentication-2fa).
| `disabled` | Активируется при отключении двухфакторной проверки подлинности.
{% endif %}

### Действия категории `user`

| Действие | Описание
|--------------------|---------------------
| `add_email` | Активируется при {% ifversion not ghae %}[добавлении нового адреса электронной почты](/articles/changing-your-primary-email-address){% else %}добавлении нового адреса электронной почты{% endif %}.{% ifversion fpt or ghec %}
| `codespaces_trusted_repo_access_granted` | Активируется при [разрешении пространствам кода, создаваемым для репозитория, получать доступ к другим репозиториям, которыми владеет личная учетная запись](/github/developing-online-with-codespaces/managing-access-and-security-for-codespaces).
| `codespaces_trusted_repo_access_revoked` | Активируется при [запрете пространствам кода, создаваемым для репозитория, получать доступ к другим репозиториям, которыми владеет личная учетная запись](/github/developing-online-with-codespaces/managing-access-and-security-for-codespaces). {% endif %}
| `create` | Активируется при создании новой личной учетной записи.{% ifversion not ghae %}
| `change_password` | Активируется при изменении пароля.
| `forgot_password` | Активируется при запросе на [сброс пароля](/articles/how-can-i-reset-my-password).{% endif %}
| `hide_private_contributions_count` | Активируется при [скрытии частных вкладов в профиле](/articles/publicizing-or-hiding-your-private-contributions-on-your-profile).
| `login` | Активируется при входе в {% data variables.location.product_location %}. {% ifversion ghes or ghae %}
`mandatory_message_viewed`   | Активируется при просмотре обязательного сообщения (дополнительные сведения см. в разделе [Настройка сообщений пользователей](/admin/user-management/customizing-user-messages-for-your-enterprise)). | {% endif %}
| `failed_login` | Активируется при ошибке входа.
| `remove_email` | Активируется при удалении адреса электронной почты.
| `rename` | Активируется при переименовании учетной записи.{% ifversion fpt or ghec %}
| `report_content` | Активируется при [отправке сообщения о проблеме или запросе на вытягивание, а также примечания о проблеме, запросе на вытягивание или фиксации](/communities/maintaining-your-safety-on-github/reporting-abuse-or-spam).{% endif %}
| `show_private_contributions_count` | Активируется при [публикации частных вкладов в профиле](/articles/publicizing-or-hiding-your-private-contributions-on-your-profile).{% ifversion not ghae %}
| `two_factor_requested` | Активируется при запрашивании {% data variables.product.product_name %} [кода двухфакторной проверки подлинности](/articles/accessing-github-using-two-factor-authentication).{% endif %}

### Действия категории `user_status`

| Действие | Описание
|--------------------|---------------------
| `update` | Активируется при установке или изменении состояния профиля. Дополнительные сведения см. в разделе [Настройка статуса](/articles/personalizing-your-profile/#setting-a-status).
| `destroy` | Активируется при очистке состояния профиля.
