---
title: Начало работы с GitHub Enterprise Cloud
intro: 'Приступайте к настройке и администрированию организации или корпоративной учетной записи {% data variables.product.prodname_ghe_cloud %}.'
versions:
  fpt: '*'
  ghec: '*'
ms.openlocfilehash: 6af835175eb5412ca9fbf0e925175450f2a2a254
ms.sourcegitcommit: fdc4466e89467a7b13239e26c6042dc1428946b6
ms.translationtype: MT
ms.contentlocale: ru-RU
ms.lasthandoff: 11/14/2022
ms.locfileid: '148163803'
---
В этом руководстве описаны процессы настройки учетной записи {% data variables.product.prodname_ghe_cloud %} и управления ею в качестве владельца организации или предприятия.

{% data reusables.enterprise.ghec-cta-button %}

## Часть 1. Выбор типа учетной записи

{% data variables.product.prodname_dotcom %} предоставляет два типа корпоративных продуктов:

- **{% data variables.product.prodname_ghe_cloud %}**
- **{% data variables.product.prodname_ghe_server %}**

Основное различие между продуктами заключается в том, что {% data variables.product.prodname_ghe_cloud %} размещен в репозитории {% data variables.product.prodname_dotcom %}, а {% data variables.product.prodname_ghe_server %} — локально.

{% data reusables.enterprise.about-github-for-enterprises %}

{% data variables.product.prodname_ghe_cloud %} предоставляет возможность использования {% data variables.product.prodname_emus %}. {% data reusables.enterprise-accounts.emu-short-summary %}

Если вместо этого вы разрешите участникам создавать личные учетные записи и управлять ими, учтите, что с {% data variables.product.prodname_ghe_cloud %} можно использовать два типа учетных записей:

- единая учетная запись организации;
- корпоративная учетная запись, содержащая несколько организаций.

### 1. Различия между учетной записью организации и корпоративной учетной записью

Учетные записи организации и корпоративные учетные записи доступны в {% data variables.product.prodname_ghe_cloud %}. Организация — это общая учетная запись, в которой группы пользователей могут одновременно работать над несколькими проектами, а владельцы и администраторы могут управлять доступом к данным и проектам. Корпоративная учетная запись обеспечивает сотрудничество между несколькими организациями и позволяет владельцам централизованно управлять политикой, выставлением счетов и безопасностью этих организаций. Дополнительную информацию о различиях см. в разделе [Учетные записи организации и корпоративные учетные записи](/organizations/collaborating-with-groups-in-organizations/about-organizations#organizations-and-enterprise-accounts).

Выбирая корпоративную учетную запись, имейте в виду, что некоторые политики можно устанавливать лишь на уровне организации, а другие можно применять для всех организаций предприятия.

Выбрав нужный тип учетной записи, вы можете перейти к настройке учетной записи. В каждом из разделов этого руководства перейдите к инструкциям к единой учетной записи организации или корпоративной учетной записи в зависимости от типа вашей учетной записи.

## Часть 2. Настройка учетной записи
Перед началом работы с {% data variables.product.prodname_ghe_cloud %} вам необходимо создать учетную запись организации или корпоративную учетную запись, а также настроить и просмотреть параметры выставления счетов, подписки и использование.
### Настройка единой учетной записи организации в {% data variables.product.prodname_ghe_cloud %}

#### 1. Сведения об организациях
Организации — это общие учетные записи, в которых группы пользователей могут совместно работать над несколькими проектами одновременно. В {% data variables.product.prodname_ghe_cloud %} владельцы и администраторы могут управлять своей организацией с помощью сложной проверки подлинности и управления, а также расширенной поддержки и параметров безопасности. Дополнительные сведения см. в статье "[Сведения об организациях](/organizations/collaborating-with-groups-in-organizations/about-organizations)".
#### 2. Создание или обновление учетной записи организации

Чтобы использовать учетную запись организации с {% data variables.product.prodname_ghe_cloud %}, сначала необходимо создать организацию. В запросе выбора плана выберите "Корпоративный". Дополнительные сведения см. в статье "[Создание новой организации с нуля](/organizations/collaborating-with-groups-in-organizations/creating-a-new-organization-from-scratch)".

Кроме того, если у вас уже есть учетная запись организации, которую вы хотите обновить, выполните действия, описанные в разделе [Обновление подписки на {% data variables.product.prodname_dotcom %}](/billing/managing-billing-for-your-github-account/upgrading-your-github-subscription#upgrading-your-organizations-subscription).
#### 3. Настройка выставления счетов и управление им

Если вы решите использовать учетную запись организации с {% data variables.product.prodname_ghe_cloud %}, сначала вы получите доступ к [30-дневной пробной версии](/get-started/signing-up-for-github/setting-up-a-trial-of-github-enterprise-cloud). Если вы не приобретете {% data variables.product.prodname_enterprise %} или {% data variables.product.prodname_team %} до завершения пробного периода, версия вашей организации будет понижена до {% data variables.product.prodname_free_user %} и вы потеряете доступ к любым расширенным инструментам и функциям, которые включены только в платные продукты. Дополнительные сведения см. в разделе [Завершение пробной версии](/get-started/signing-up-for-github/setting-up-a-trial-of-github-enterprise-cloud#finishing-your-trial).

На странице параметров выставления счетов вашей организации вы сможете управлять такими параметрами, как метод оплаты и период выставления счетов, просматривать сведения о вашей подписке, а также увеличивать объем хранилища и ограничение минут {% data variables.product.prodname_actions %}. Дополнительные сведения об управлении параметрами выставления счетов см. в разделе [Управление параметрами выставления счетов в {% data variables.product.prodname_dotcom %}](/billing/managing-your-github-billing-settings).

Доступ или изменение параметров выставления счетов для вашей организации может быть предоставлен только членам организации с ролью *владельца* или *менеджера выставления счетов*. Менеджер по выставлению счетов — это пользователь, который управляет параметрами выставления счетов для вашей организации и не использует платную лицензию в подписке вашей организации. Дополнительные сведения о добавлении менеджера выставления счетов в организацию см. в разделе [Добавление менеджера выставления счетов в организацию](/organizations/managing-peoples-access-to-your-organization-with-roles/adding-a-billing-manager-to-your-organization).

### Настройка корпоративного аккаунта в {% data variables.product.prodname_ghe_cloud %}

#### 1. Сведения о корпоративных учетных записях

Корпоративная учетная запись позволяет централизованно управлять политикой и параметрами для нескольких организаций {% data variables.product.prodname_dotcom %}, включая доступ участников, выставление счетов, использование и безопасность. Дополнительные сведения см. в статье [Сведения об учетных записях предприятия](/enterprise-cloud@latest/admin/overview/about-enterprise-accounts).

#### 2. Создание корпоративной учетной записи

 Пользователи {% data variables.product.prodname_ghe_cloud %}, осуществляющие оплату по счету, могут создать корпоративную учетную запись непосредственно через {% data variables.product.prodname_dotcom %}. Дополнительные сведения см. в статье [Создание учетной записи разработчика](/enterprise-cloud@latest/admin/overview/creating-an-enterprise-account). 
 
 Пользователи {% data variables.product.prodname_ghe_cloud %}, которые сейчас не осуществляют оплату по счету, могут связаться с [командой по продажам {% data variables.product.prodname_dotcom %}](https://enterprise.github.com/contact), чтобы создать корпоративную учетную запись.

#### 3. Добавление организаций в корпоративную учетную запись

Вы можете создавать новые организации для управления в корпоративной учетной записи. Дополнительные сведения см. в разделе [Добавление организаций на предприятии](/enterprise-cloud@latest/admin/user-management/managing-organizations-in-your-enterprise/adding-organizations-to-your-enterprise).

Если вы хотите перенести существующую организацию в корпоративную учетную запись, обратитесь к представителю отдела продаж {% data variables.product.prodname_dotcom %}.
#### 4. Просмотр подписки и сведений об использовании для корпоративной учетной записи
Вы можете в любое время просмотреть свою текущую подписку, использование лицензии, счета, историю платежей и другую платежную информацию для вашей корпоративной учетной записи. Как владельцы предприятий, так и менеджеры по выставлению счетов могут получать доступ к параметрам выставления счетов для корпоративных учетных записей и управлять ими. Дополнительные сведения см. на странице [Просмотр сведений о подписке и использовании для корпоративной учетной записи](/enterprise-cloud@latest/billing/managing-billing-for-your-github-account/viewing-the-subscription-and-usage-for-your-enterprise-account).

## Часть 3. Управление участниками и командами вашей организации или предприятия с помощью {% data variables.product.prodname_ghe_cloud %}

### Управление участниками и командами в вашей организации
Вы можете устанавливать разрешения и роли участников, создавать команды и управлять ими, а также предоставлять пользователям доступ к репозиториям в вашей организации. 
#### 1. Управление участниками организации
{% data reusables.getting-started.managing-org-members %}
#### 2. Разрешения и роли организации
{% data reusables.getting-started.org-permissions-and-roles %}
#### 3. Сведения о командах и создание команд
{% data reusables.getting-started.about-and-creating-teams %}
#### 4. Управление параметрами команды
{% data reusables.getting-started.managing-team-settings %}
#### 5. Предоставление пользователям и командам доступа к репозиториям, доскам проектов и приложениям
{% data reusables.getting-started.giving-access-to-repositories-projects-apps %}

### Управление участниками корпоративной учетной записи
Управление участниками предприятия отличается от управления участниками или командами в организации. Важно отметить, что владельцы или администраторы предприятия не могут получить доступ к параметрам на уровне организации или управлять участниками для организаций в своем предприятии, если у них нет роли владельца организации. Дополнительные сведения см. в приведенном выше разделе [Управление участниками и командами в вашей организации](#managing-members-and-teams-in-your-organization).

При использовании {% data variables.product.prodname_emus %} на предприятия управление участниками полностью осуществляется через поставщика удостоверений. Добавление участников, внесение изменений в их членство и назначение ролей — все это выполняется с помощью вашего поставщика удостоверений. Дополнительные сведения см. в разделе [Сведения о {% data variables.product.prodname_emus %}](/enterprise-cloud@latest/admin/authentication/managing-your-enterprise-users-with-your-identity-provider/about-enterprise-managed-users).

Если ваше предприятие не использует {% data variables.product.prodname_emus %}, выполните указанные ниже действия.

#### 1. Назначение ролей в предприятии
По умолчанию все на предприятии являются участниками предприятия. Существуют также административные роли, включая владельца предприятия и менеджера по выставлению счетов, которые имеют разные уровни доступа к параметрам и данным предприятия. Дополнительные сведения см. в разделе [Роли в организации](/enterprise-cloud@latest/admin/user-management/managing-users-in-your-enterprise/roles-in-an-enterprise).
#### 2. Приглашение пользователей для управления предприятием
Вы можете приглашать пользователей к управлению вашим предприятием в роли владельцев предприятия или менеджеров по выставлению счетов, а также удалять тех, кому больше не нужен доступ. Дополнительные сведения см. на странице [Приглашение людей для управления предприятием](/enterprise-cloud@latest/admin/user-management/managing-users-in-your-enterprise/inviting-people-to-manage-your-enterprise).

Вы также можете предоставить корпоративным участникам возможность управлять запросами в службу поддержки на портале поддержки. Дополнительные сведения см. в разделе [Управление правами специалистов службы поддержки для вашего предприятия](/enterprise-cloud@latest/admin/user-management/managing-users-in-your-enterprise/managing-support-entitlements-for-your-enterprise).
#### 3. Просмотр пользователей в организации
Для аудита доступа к корпоративным ресурсам или использования пользовательских лицензий вы можете просмотреть сведения о каждом администраторе предприятия, участнике предприятия и внешнем участнике совместной работы в вашем предприятии. Вы можете просмотреть организации, к которым принадлежит участник, и конкретные репозитории, к которым имеет доступ внешний участник совместной работы. Дополнительные сведения см. на странице [Просмотр пользователей в предприятии](/admin/user-management/managing-users-in-your-enterprise/viewing-people-in-your-enterprise).

## Часть 4. Управление безопасностью з {% data variables.product.prodname_ghe_cloud %}

* [Управление безопасностью для единой организации](#managing-security-for-a-single-organization)
* [Управление безопасностью для {% data variables.enterprise.prodname_emu_enterprise %}](#managing-security-for-an-enterprise-with-managed-users)
* [Управление безопасностью корпоративной учетной записи без {% data variables.enterprise.prodname_managed_users %}](#managing-security-for-an-enterprise-account-without-managed-users)

### Управление безопасностью для единой организации
Вы можете обеспечить безопасность своей организации, установив двухфакторную проверку подлинности, настроив функции безопасности, просмотрев журнал аудита и интеграций вашей организации, а также включив единый вход SAML и синхронизацию команд.
#### 1. Обязательная двухфакторная проверка подлинности
{% data reusables.getting-started.requiring-2fa %}
#### 2. Настройка функций безопасности для организации
{% data reusables.getting-started.configuring-security-features %}

#### 3. Просмотр журнала аудита и интеграций организации
{% data reusables.getting-started.reviewing-org-audit-log-and-integrations %}

#### 4. Включение и применение единого входа SAML для вашей организации
Если вы управляете своими приложениями и удостоверениями участников вашей организации с помощью поставщика удостоверений, вы можете настроить единый вход SAML для контроля и защиты доступа к ресурсам организации, таким как репозитории, задачи и запросы на вытягивание. Когда участники вашей организации получают доступ к ресурсам организации, использующим систему единого входа SAML, {% data variables.product.prodname_dotcom %} перенаправляет их к вашему поставщику удостоверений для проверки подлинности. Дополнительные сведения см. на странице [Сведения об управлении идентификацией и доступом с помощью единого входа SAML](/organizations/managing-saml-single-sign-on-for-your-organization/about-identity-and-access-management-with-saml-single-sign-on).

Владельцы организаций могут выбрать между отключением, включением без принудительного применения и включением и принудительным применением единого входа SAML. Дополнительные сведения см. на странице [Включение и тестирование единого входа SAML для организации](/organizations/managing-saml-single-sign-on-for-your-organization/enabling-and-testing-saml-single-sign-on-for-your-organization) и [Принудительное применение единого входа SAML для организации](/organizations/managing-saml-single-sign-on-for-your-organization/enforcing-saml-single-sign-on-for-your-organization).
#### 5  Управление синхронизацией команд в организации
Владельцы организаций могут включить синхронизацию команд между поставщиком удостоверений и {% data variables.product.prodname_dotcom %}, чтобы позволить владельцам организаций и специалистам по обслуживанию команд подключать команды в организации к группам поставщика удостоверений. Дополнительные сведения см. в разделе [Управление синхронизацией команд в организации](/organizations/managing-saml-single-sign-on-for-your-organization/managing-team-synchronization-for-your-organization).

### Управление безопасностью для {% data variables.enterprise.prodname_emu_enterprise %}

При использовании {% data variables.product.prodname_emus %} управление доступом и идентификацией осуществляется централизованно через поставщика удостоверений. Двухфакторная проверка подлинности и другие требования к входу должны быть включены и принудительно применены к вашему поставщику удостоверений. 

#### 1. Включение и подготовка единого входа SAML в {% data variables.enterprise.prodname_emu_enterprise %}

В {% data variables.enterprise.prodname_emu_enterprise %} все участники подготавливаются и управляются поставщиком удостоверений. Перед использованием предприятие необходимо включить единый вход SAML и подготовку SCIM. Дополнительные сведения о настройке единого входа SAML и подготовке для {% data variables.enterprise.prodname_emu_enterprise %} см. в разделе [Настройка единого входа SAML для корпоративных управляемых пользователей](/enterprise-cloud@latest/admin/authentication/managing-your-enterprise-users-with-your-identity-provider/configuring-saml-single-sign-on-for-enterprise-managed-users).

#### 2. Управление командами в {% data variables.enterprise.prodname_emu_enterprise %} с помощью поставщика удостоверений

Вы можете подключать команды в своих организациях к группам безопасности в своем поставщике удостоверений, управлять членством в ваших командах и доступом к репозиториям через своего поставщика удостоверений. Дополнительные сведения см. на странице [Управление членством в командах с помощью групп поставщиков удостоверений](/enterprise-cloud@latest/admin/authentication/managing-your-enterprise-users-with-your-identity-provider/managing-team-memberships-with-identity-provider-groups).

#### 3. Управление разрешенными IP-адресами для организаций в {% data variables.enterprise.prodname_emu_enterprise %}

Вы можете настроить список разрешений для определенных IP-адресов, чтобы ограничить доступ к ресурсам, принадлежащим организациям в {% data variables.enterprise.prodname_emu_enterprise %}. Дополнительные сведения см. в разделе [Применение политик для параметров безопасности на предприятии](/enterprise-cloud@latest/admin/policies/enforcing-policies-for-your-enterprise/enforcing-policies-for-security-settings-in-your-enterprise#managing-allowed-ip-addresses-for-organizations-in-your-enterprise).

#### 4. Применение политик для функций расширенной безопасности в {% data variables.enterprise.prodname_emu_enterprise %}
{% data reusables.getting-started.enterprise-advanced-security %}

### Управление безопасностью корпоративной учетной записи без {% data variables.enterprise.prodname_managed_users %}
В рамках управления безопасностью вашего предприятия вы можете установить двухфакторную проверку подлинности, применить управление разрешенными IP-адресами, включить единый вход SAML и синхронизацию команд на уровне предприятия, а также зарегистрироваться для использования функций GitHub Advanced Security и принудительно применить их. 

#### 1. Обязательная двухфакторная проверка подлинности и управление разрешенными IP-адресами для организаций в корпоративной учетной записи
Владельцы предприятия могут требовать, чтобы члены организации, менеджеры по выставлению счетов и внешние участники совместной работы во всех организациях, принадлежащих корпоративной учетной записи, использовали двухфакторную проверку подлинности для защиты личных учетных записей. Пред этим мы рекомендуем уведомить всех пользователей, имеющих доступ к организациям в вашем предприятии. Вы также можете настроить список разрешений для определенных IP-адресов, чтобы ограничить доступ к ресурсам, принадлежащим организациям в вашей корпоративной учетной записи. 

Дополнительные сведения о принудительной двухфакторной проверке подлинности и списках разрешенных IP-адресов см. в разделе [Принудительное применение политик для параметров безопасности в предприятии](/enterprise-cloud@latest/admin/policies/enforcing-policies-for-your-enterprise/enforcing-policies-for-security-settings-in-your-enterprise).
#### 2. Включение и принудительное применение единого входа SAML для организаций в корпоративной учетной записи.
Вы можете централизованно управлять доступом к ресурсам вашего предприятия, членством в организации и членством в командах, используя поставщик удостоверений и единый входа SAM. Владельцы предприятий могут включить единый вход SAML во всех организациях, принадлежащих корпоративной учетной записи. Дополнительные сведения см. в разделе [Сведения об управлении удостоверениями и доступом для предприятия](/enterprise-cloud@latest/admin/authentication/managing-identity-and-access-for-your-enterprise/about-identity-and-access-management-for-your-enterprise).

#### 3. Управление синхронизацией команд
Вы можете включить синхронизацию команд между поставщиком удостоверений и {% data variables.product.prodname_dotcom %} и управлять ею, чтобы позволить организациям, принадлежащим вашей корпоративной учетной записи, управлять членством в команде с помощью групп поставщика удостоверений. Дополнительные см. на странице [Управление синхронизацией команд для организаций в вашей корпоративной учетной записи](/enterprise-cloud@latest/admin/authentication/managing-identity-and-access-for-your-enterprise/managing-team-synchronization-for-organizations-in-your-enterprise).

#### 4. Принудительное применение политик для функций Advanced Security в корпоративной учетной записи
{% data reusables.getting-started.enterprise-advanced-security %}

## Часть 5. Управление политиками и параметрами на уровне организации и предприятия

### Управление параметрами для единой организации
Чтобы обеспечить модерацию организации и управление ею, вы можете устанавливать политики организации, управлять разрешениями на изменения репозитория и использовать файлы работоспособности сообщества на уровне организации.
#### 1. Управление политиками организации
{% data reusables.getting-started.managing-org-policies %}
#### 2. Управление изменениями репозитория
{% data reusables.getting-started.managing-repo-changes %}
#### 3. Использование файлов работоспособности сообщества и средств модерации на уровне организации
{% data reusables.getting-started.using-org-community-files-and-moderation-tools %}

### Управление параметрами корпоративной учетной записи
Чтобы обеспечить модерацию предприятия и управление им, вы можете устанавливать политики организаций в предприятии, просматривать журналы аудита, настраивать веб-перехватчики и ограничивать уведомления по электронной почте.
#### 1. Управление политиками для организаций в корпоративной учетной записи

Вы можете принудительно применить ряд политик для всех организаций, принадлежащих вашему предприятию, или разрешить установку этих политик в каждой организации. Типы политик, доступных для принудительного применения, включают управление репозиторием, доску проектов и командные политики. Дополнительные сведения см. на странице [Настройка политик для предприятия](/enterprise-cloud@latest/admin/policies).
#### 2. Просмотр журналов аудита, настройка веб-перехватчиков и ограничение уведомлений по электронной почте для предприятия
Вы можете просматривать действия всех организаций, принадлежащих вашей корпоративной учетной записи, в журнале корпоративного аудита. Вы также можете настроить веб-перехватчики для получения событий от организаций, принадлежащих вашей корпоративной учетной записи. Дополнительные сведения см. на странице [Просмотр журналов аудита для предприятия](/enterprise-cloud@latest/admin/monitoring-activity-in-your-enterprise/reviewing-audit-logs-for-your-enterprise) и [Мониторинг предприятия](/enterprise-cloud@latest/admin/monitoring-activity-in-your-enterprise).

Вы также можете ограничить уведомления по электронной почте для своей корпоративной учетной записи, чтобы участники предприятия могли использовать адрес электронной почты лишь в проверенном или утвержденном домене для получения уведомлений. Дополнительные сведения см. в статье [Ограничение уведомлений по электронной почте для предприятия](/enterprise-cloud@latest/admin/policies/enforcing-policies-for-your-enterprise/restricting-email-notifications-for-your-enterprise).

## Часть 6. Настройка и автоматизация работы организации или предприятия в {% data variables.product.prodname_dotcom %}
Участники вашей организации или предприятия могут использовать инструменты из{% data variables.product.prodname_marketplace %}, API {% ifversion fpt or ghec %}{% data variables.product.prodname_dotcom %}{% else %}{% data variables.product.product_name %}{% endif %} и существующих функций {% data variables.product.product_name %} для настройки и автоматизации работы.

### 1. Использование {% data variables.product.prodname_marketplace %}
{% data reusables.getting-started.marketplace %}
### 2. Использование API {% ifversion fpt or ghec %}{% data variables.product.prodname_dotcom %}{% else %}{% data variables.product.product_name %}{% endif %}
{% data reusables.getting-started.api %}
### 3. Создание действий {% data variables.product.prodname_actions %}
{% data reusables.getting-started.actions %}
### 4. Публикация пакетов и управление ими в {% data variables.product.prodname_registry %} 
{% data reusables.getting-started.packages %}
### 5. Использование {% data variables.product.prodname_pages %}
{% data variables.product.prodname_pages %} — это служба размещения статических сайтов, которая принимает файлы HTML, CSS и JavaScript прямо из репозитория и публикует веб-сайт. Вы можете управлять публикацией сайтов {% data variables.product.prodname_pages %} на уровне организации. Дополнительные сведения см. на странице [Управление публикацией сайтов {% data variables.product.prodname_pages %} для организации](/organizations/managing-organization-settings/managing-the-publication-of-github-pages-sites-for-your-organization) и [Сведения о {% data variables.product.prodname_pages %}](/pages/getting-started-with-github-pages/about-github-pages).
## Часть 7. Участие в сообществе {% data variables.product.prodname_dotcom %}

Участники вашей организации или предприятия могут использовать ресурсы обучения и поддержки GitHub, чтобы получить необходимую им помощь. Вы также можете поддержать сообщество разработчиков ПО с открытым кодом. 

### 1. Знакомство со сведениями о {% data variables.product.prodname_ghe_cloud %} в {% data variables.product.prodname_docs %}
Вы можете прочитать документацию, в которой описаны доступные функции {% data variables.product.prodname_ghe_cloud %}. Дополнительные сведения см. в разделе [Сведения о версиях {% data variables.product.prodname_docs %}](/get-started/learning-about-github/about-versions-of-github-docs).

{% data reusables.enterprise.best-practices %}

### 2. Обучение с {% data variables.product.prodname_learning %}
Участники вашей организации или предприятия могут обрести новые навыки, выполняя интересные и реалистичные проекты в собственном репозитории GitHub с помощью [{% data variables.product.prodname_learning %}](https://skills.github.com/). Каждый курс — это практический урок, созданный сообществом GitHub и проводимый удобным ботом.

Дополнительные сведения см. в разделе [Ресурсы обучения Git и {% data variables.product.prodname_dotcom %}](/github/getting-started-with-github/quickstart/git-and-github-learning-resources).
### 3. Поддержка сообщества разработчиков ПО с открытым кодом
{% data reusables.getting-started.sponsors %}

### 4. Обращение в {% data variables.contact.github_support %}
{% data reusables.getting-started.contact-support %}

{% data variables.product.prodname_ghe_cloud %} позволяет отправлять запросы на приоритетную поддержку с целевым восьмичасовым временем отклика. Дополнительные сведения см. на странице [Поддержка {% data variables.product.prodname_ghe_cloud %}](/github/working-with-github-support/github-enterprise-cloud-support).
