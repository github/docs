---
title: Просмотр журнала аудита для вашей организации
intro: 'Журнал аудита позволяет администраторам организации быстро проверять действия, выполняемые членами организации. В нем указано, кто выполнил действие, что это было за действие и когда оно было выполнено.'
miniTocMaxHeadingLevel: 3
redirect_from:
  - /articles/reviewing-the-audit-log-for-your-organization
  - /github/setting-up-and-managing-organizations-and-teams/reviewing-the-audit-log-for-your-organization
  - /organizations/keeping-your-organization-secure/reviewing-the-audit-log-for-your-organization
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Organizations
  - Teams
shortTitle: Review audit log
ms.openlocfilehash: 430cf928f91cad2851c9ad0c661f159177866463
ms.sourcegitcommit: 1668466c58f50415e8c4d3ad932d697f79fc87c7
ms.translationtype: MT
ms.contentlocale: ru-RU
ms.lasthandoff: 11/22/2022
ms.locfileid: '148180680'
---
## Доступ к журналу аудита

В журнале аудита приведены события, активируемые действиями, влияющими на организацию в течение текущего месяца и предыдущих шести месяцев. Только владельцы могут иметь доступ к журналу аудита организации.

{% data reusables.audit_log.only-three-months-displayed %}

{% data reusables.profile.access_org %} {% data reusables.profile.org_settings %} {% data reusables.audit_log.audit_log_sidebar_for_org_admins %}

## Поиск в журнале аудита

{% data reusables.audit_log.audit-log-search %}

### Поиск с учетом выполненного действия

Для поиска определенных событий используйте квалификатор `action` в запросе. Действия, перечисленные в журнале аудита, группируются в следующих категориях:

| | имени категории Описание |------------------|-------------------{% ifversion fpt or ghec %} | [`account`](#account-category-actions) | Содержит все действия, связанные с учетной записью организации. {% endif %} {% ifversion fpt or ghec %} | [`advisory_credit`](#advisory_credit-category-actions) | Содержит все действия, связанные с зачислением участника на рекомендации по безопасности в {% data variables.product.prodname_advisory_database %}. Дополнительные сведения см. в разделе [Сведения о рекомендациях по безопасности {% data variables.product.prodname_dotcom %}](/github/managing-security-vulnerabilities/about-github-security-advisories). {% endif %} {% ifversion pat-v2%} | [`auto_approve_personal_access_token_requests`](#auto_approve_personal_access_token_requests-category-actions) | Содержит действия, связанные с политикой утверждения организации для {% data variables.product.pat_v2 %}s. Дополнительные сведения см. в разделе [Настройка политики {% data variables.product.pat_generic %} для вашей организации](/organizations/managing-programmatic-access-to-your-organization/setting-a-personal-access-token-policy-for-your-organization). {% endif %} {% ifversion fpt or ghec %} | [`billing`](#billing-category-actions) | Содержит все действия, связанные с выставлением счетов в вашей организации. {% endif %} {% ifversion fpt or ghec %} | [`business`](#business-category-actions) | Содержит действия, связанные с бизнес-параметрами для предприятия. | {% endif %} {% ifversion fpt or ghec %} | [`codespaces`](#codespaces-category-actions) | Содержит все действия, связанные с codespace вашей организации. | {% endif %} | [`dependabot_alerts`](#dependabot_alerts-category-actions) | Содержит действия по настройке на уровне организации для {% data variables.product.prodname_dependabot_alerts %} в существующих репозиториях. Дополнительные сведения см. в статье "[Сведения о {% data variables.product.prodname_dependabot_alerts %}](/github/managing-security-vulnerabilities/about-alerts-for-vulnerable-dependencies)".
| [`dependabot_alerts_new_repos`](#dependabot_alerts_new_repos-category-actions) | Содержит действия по настройке на уровне организации для {% data variables.product.prodname_dependabot_alerts %} в новых репозиториях, созданных в организации. {% ifversion fpt or ghec or ghes %} | [`dependabot_security_updates`](#dependabot_security_updates-category-actions) | Содержит действия конфигурации на уровне организации для {% data variables.product.prodname_dependabot_security_updates %} в существующих репозиториях. Дополнительные сведения см. в разделе [Настройка обновлений версий {% data variables.product.prodname_dependabot_security_updates %}](/github/managing-security-vulnerabilities/configuring-dependabot-security-updates).
| [`dependabot_security_updates_new_repos`](#dependabot_security_updates_new_repos-category-actions) | Содержит действия по настройке на уровне организации для {% data variables.product.prodname_dependabot_security_updates %} для новых репозиториев, созданных в организации.{% endif %}{% ifversion fpt or ghec %} | [`dependency_graph`](#dependency_graph-category-actions) | Содержит действия по настройке на уровне организации для графов зависимостей для репозиториев. Дополнительные сведения см. в статье "[Сведения о графе зависимостей](/github/visualizing-repository-data-with-graphs/about-the-dependency-graph)".
| [`dependency_graph_new_repos`](#dependency_graph_new_repos-category-actions) | Содержит действия по настройке на уровне организации для новых репозиториев, созданных в организации.{% endif %} | [`discussion_post`](#discussion_post-category-actions) | Содержит все действия, связанные с обсуждениями, опубликованными на странице команды.
| [`discussion_post_reply`](#discussion_post_reply-category-actions) | Содержит все действия, связанные с ответами на обсуждения, опубликованные на странице команды.{% ifversion fpt or ghes or ghec %} | [`enterprise`](#enterprise-category-actions) | Содержит действия, связанные с корпоративными настройками. | {% endif %} | [`hook`](#hook-category-actions) | Содержит все действия, связанные с веб-перехватчиками.
| [`integration_installation`](#integration_installation-category-actions) | Содержит действия, связанные с интеграциями, установленными в учетной записи. | | [`integration_installation_request`](#integration_installation_request-category-actions) | Содержит все действия, связанные с запросами участников организации, чтобы владельцы утверждали интеграции для использования в организации. | {% ifversion ghec or ghae %} | [`ip_allow_list`](#ip_allow_list-category-actions) | Содержит действия, связанные с включением или отключением списка разрешенных IP-адресов для организации.
| [`ip_allow_list_entry`](#ip_allow_list_entry-category-actions) | Содержит действия, связанные с созданием, удалением и редактированием записи списка разрешенных IP-адресов для организации. {% endif %} | [`issue`](#issue-category-actions) | Содержит действия, связанные с удалением проблемы. {% ifversion fpt or ghec %} | [`marketplace_agreement_signature`](#marketplace_agreement_signature-category-actions) | Содержит все действия, связанные с подписанием соглашения с разработчиком {% data variables.product.prodname_marketplace %}.
| [`marketplace_listing`](#marketplace_listing-category-actions) | Содержит все действия, связанные с перечислением приложений в {% data variables.product.prodname_marketplace %}. {% endif %}{% ifversion fpt or ghes or ghec %} | [`members_can_create_pages`](#members_can_create_pages-category-actions) | Содержит все действия, связанные с управлением публикацией сайтов {% data variables.product.prodname_pages %} для репозиториев в организации. Дополнительные сведения см. в разделе [Управление публикацией сайтов {% data variables.product.prodname_pages %} для организации](/organizations/managing-organization-settings/managing-the-publication-of-github-pages-sites-for-your-organization). | {% endif %} | [`org`](#org-category-actions) | Содержит действия, связанные с членством в организации.{% ifversion ghec %} | [`org_credential_authorization`](#org_credential_authorization-category-actions) | Содержит все действия, связанные с авторизацией учетных данных для использования с единым входом SAML.{% endif %}{% ifversion secret-scanning-audit-log-custom-patterns %} | [`org_secret_scanning_custom_pattern`](#org_secret_scanning_custom_pattern-category-actions) | Содержит действия уровня организации, связанные с пользовательскими шаблонами сканирования секретов. Дополнительные сведения см. в разделе [Определение пользовательских шаблонов для сканирования секретов](/code-security/secret-scanning/defining-custom-patterns-for-secret-scanning). {% endif %} | [`organization_default_label`](#organization_default_label-category-actions) | Содержит все действия, связанные с метками по умолчанию для репозиториев в организации.
| [`oauth_application`](#oauth_application-category-actions) | Содержит все действия, связанные с приложениями OAuth.
| [`packages`](#packages-category-actions) | Содержит все действия, связанные с {% data variables.product.prodname_registry %}. {% ifversion fpt or ghec %} | [`payment_method`](#payment_method-category-actions) | Содержит все действия, связанные с тем, как ваша организация платит за GitHub. {% endif %} {% ifversion pat-v2%} | [`personal_access_token`](#personal_access_token-category-actions) | Содержит действия, связанные с {% data variables.product.pat_v2 %}s в вашей организации. Дополнительные сведения см. в разделе [Создание {% data variables.product.pat_generic %}](/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token). {% endif %} | [`profile_picture`](#profile_picture-category-actions) | Содержит все действия, связанные с изображением профиля вашей организации.
| [`project`](#project-category-actions) | Содержит все действия, связанные с панелями проекта.
| [`protected_branch`](#protected_branch-category-actions) | Содержит все действия, связанные с защищенными ветвями.
| [`repo`](#repo-category-actions) | Содержит действия, связанные с репозиториями, принадлежащими вашей организации. {% ifversion fpt or ghec %} | [`repository_advisory`](#repository_advisory-category-actions) | Содержит действия уровня репозитория, связанные с советами по безопасности в {% data variables.product.prodname_advisory_database %}.  Дополнительные сведения см. в разделе [Сведения о советах по безопасности {% data variables.product.prodname_dotcom %}](/github/managing-security-vulnerabilities/about-github-security-advisories).
| [`repository_content_analysis`](#repository_content_analysis-category-actions) | Содержит все действия, связанные с [включением или отключением использования данных для частного репозитория](/articles/about-github-s-use-of-your-data). {% endif %}{% ifversion fpt or ghec %} | [`repository_dependency_graph`](#repository_dependency_graph-category-actions) | Содержит действия уровня репозитория, связанные с включением или отключением графа зависимостей для {% ifversion fpt or ghec %}закрытого{% endif %} репозитория. Дополнительные сведения см. в разделе [Сведения о графе зависимостей](/github/visualizing-repository-data-with-graphs/about-the-dependency-graph). {% endif %}{% ifversion ghes or ghae or ghec %} | [`repository_secret_scanning`](#repository_secret_scanning-category-actions) | Содержит действия уровня репозитория, связанные со сканированием секретов. Дополнительные сведения см. в статье [Сведения о сканировании секретов](/github/administering-a-repository/about-secret-scanning). {% endif %}{% ifversion secret-scanning-audit-log-custom-patterns %} | [`repository_secret_scanning_custom_pattern`](#repository_secret_scanning_custom_pattern-category-actions) | Содержит действия уровня репозитория, связанные с пользовательскими шаблонами сканирования секретов. Дополнительные сведения см. в разделе [Определение пользовательских шаблонов для сканирования секретов](/code-security/secret-scanning/defining-custom-patterns-for-secret-scanning). {% endif %}{% ifversion secret-scanning-audit-log-custom-patterns %} | [`repository_secret_scanning_push_protection`](#repository_secret_scanning_push_protection-category-actions) | Содержит действия уровня репозитория, связанные с пользовательскими шаблонами сканирования секретов. Дополнительные сведения см. в разделе [Защита push-уведомлений с помощью сканирования секретов](/code-security/secret-scanning/protecting-pushes-with-secret-scanning). {% endif %} | [`repository_vulnerability_alert`](#repository_vulnerability_alert-category-actions) | Содержит все действия, связанные с [{% data variables.product.prodname_dependabot_alerts %}](/code-security/dependabot/dependabot-alerts/about-dependabot-alerts).{% ifversion fpt or ghec %} | [`repository_vulnerability_alerts`](#repository_vulnerability_alerts-category-actions) | Содержит действия по настройке на уровне репозитория для {% data variables.product.prodname_dependabot_alerts %}.{% endif %}{% ifversion custom-repository-roles %} | [`role`](#role-category-actions) | Содержит все действия, связанные с [пользовательскими ролями репозитория](/organizations/managing-peoples-access-to-your-organization-with-roles/managing-custom-repository-roles-for-an-organization).{% endif %}{% ifversion ghes or ghae or ghec %} | [`secret_scanning`](#secret_scanning-category-actions) | Содержит действия по настройке на уровне организации для сканирования секретов в существующих репозиториях. Дополнительные сведения см. в статье [Сведения о сканировании секретов](/github/administering-a-repository/about-secret-scanning).
| [`secret_scanning_new_repos`](#secret_scanning_new_repos-category-actions) | Содержит действия по настройке на уровне организации для сканирования секретов для новых репозиториев, созданных в организации. {% endif %}{% ifversion fpt or ghec %} | [`sponsors`](#sponsors-category-actions) | Содержит все события, связанные с кнопками спонсора (см. раздел [Отображение кнопки спонсора в репозитории](/articles/displaying-a-sponsor-button-in-your-repository)){% endif %} | [`team`](#team-category-actions) | Содержит все действия, связанные с командами в вашей организации.
| [`team_discussions`](#team_discussions-category-actions) | Содержит действия, связанные с управлением обсуждениями команд для организации.
| [`workflows`](#workflows-category-actions) | Содержит действия, связанные с рабочими процессами {% data variables.product.prodname_actions %}.

Вы можете искать конкретные наборы действий с помощью этих терминов. Пример:

  * `action:team` находит все события, сгруппированные в категории команды.
  * `-action:hook` исключает все события в категории веб-перехватчика.

Каждая категория содержит набор связанных действий, для которых можно выполнить фильтрацию. Пример:

  * `action:team.create` находит все события, в которых создавалась команда.
  * `-action:hook.events_changed` исключает все события, в рамках которых изменялись события в веб-перехватчике.

### Поиск с учетом времени действия

Используйте квалификатор `created` для фильтрации событий в журнале аудита с учетом времени их возникновения. {% data reusables.time_date.date_format %} {% data reusables.time_date.time_format %}

{% data reusables.search.date_gt_lt %}

Пример:

  * `created:2014-07-08` находит все события, произошедшие 8 июля 2014 г.
  * `created:>=2014-07-08` находит все события, произошедшие после 8 июля 2014 г.
  * `created:<=2014-07-08` находит все события, произошедшие до 8 июля 2014 г.
  * `created:2014-07-01..2014-07-31` находит все события, произошедшие в июле 2014 г.

{% note %}

**Примечание.** Журнал аудита содержит данные за текущий месяц и за каждый день в течение предыдущих шести месяцев.

{% endnote %}

### Поиск по расположению

С помощью квалификатора `country` можно выполнить фильтрацию событий в журнале аудита с учетом страны-происхождения. Можно использовать двухбуквенный короткий код страны или ее полное название. Имейте в виду, что страны, в названиях которых есть пробелы, необходимо заключать в кавычки. Пример:

  * `country:de` находит все события, произошедшие в Германии.
  * `country:Mexico` находит все события, произошедшие в Мексике.
  * `country:"United States"` находит события, произошедшие в США.

{% ifversion fpt or ghec %}
## Экспорт журнала аудита

{% data reusables.audit_log.export-log %}

{% data reusables.audit_log.git-events-export-limited %}

{% data reusables.audit_log.exported-log-keys-and-values %} {% endif %}

## Использование API журнала аудита

{% ifversion fpt %}

Организации, использующие {% data variables.product.prodname_ghe_cloud %}, могут взаимодействовать с журналом аудита с помощью API GraphQL и REST API. Дополнительные сведения см. в [документации по {% data variables.product.prodname_ghe_cloud %}](/enterprise-cloud@latest/organizations/keeping-your-organization-secure/managing-security-settings-for-your-organization/reviewing-the-audit-log-for-your-organization#using-the-audit-log-api).

{% else %}

Вы можете взаимодействовать с журналом аудита с помощью API GraphQL{% ifversion fpt or ghec %} или REST API{% endif %}. {% ifversion read-audit-scope %} Область можно использовать `read:audit_log` для доступа к журналу аудита через API.{ % endif %}

{% ifversion ghec %}

{% note %}

**Примечание.** Чтобы использовать API журнала аудита, ваша организация должна использовать {% data variables.product.prodname_ghe_cloud %}. {% data reusables.enterprise.link-to-ghec-trial %}

{% endnote %}

### Использование API GraphQL

{% endif %}

Чтобы обеспечить безопасность интеллектуальной собственности и обеспечить соответствие требованиям вашей организации, можно использовать API GraphQL журнала аудита для хранения копий данных журнала аудита и мониторинга: {% data reusables.audit_log.audit-log-api-info %}

{% ifversion ghec %} Обратите внимание, что вы не можете получить события Git с помощью API GraphQL. Чтобы получить события Git, используйте REST API. Дополнительные сведения см. в разделе [Действия категории`git`](#git-category-actions).
{% endif %}

Ответ GraphQL может содержать данные за 90–120 дней.

Например, вы можете создать запрос GraphQL, чтобы просмотреть всех новых участников, добавленных в вашу организацию. Дополнительные сведения см. в разделе [Журнал аудита API GraphQL](/graphql/reference/interfaces#auditentry/).

{% ifversion ghec %}

### Использование REST API

Чтобы обеспечить безопасность интеллектуальной собственности и обеспечить соответствие требованиям вашей организации, можно использовать REST API журнала аудита для хранения копий данных журнала аудита и мониторинга: {% data reusables.audit_log.audited-data-list %}

{% data reusables.audit_log.audit-log-git-events-retention %}

По умолчанию возвращаются только события за последние три месяца. Чтобы включить более ранние события, необходимо указать метку времени в запросе.

Дополнительные сведения о REST API журнала аудита см. в разделе [Организации](/rest/reference/orgs#get-the-audit-log-for-an-organization).

{% endif %} {% endif %}

## Действия с журналом аудита

Обзор некоторых наиболее распространенных действий, записанных как события в журнале аудита.

{% ifversion fpt or ghec %}
### Действия категории `account`

| Действие | Описание
|------------------|-------------------
| `billing_plan_change` | Активируется при изменении [цикла выставления счетов](/articles/changing-the-duration-of-your-billing-cycle) организации.
| `plan_change` | Активируется при изменении [подписки](/articles/about-billing-for-github-accounts) организации.
| `pending_plan_change` | Активируется при [отмене или понижении уровня платной подписки](/articles/how-does-upgrading-or-downgrading-affect-the-billing-process/) владельцем организации или менеджером по выставлению счетов.
| `pending_subscription_change` | Активируется при [начале или истечении срока действия бесплатной пробной версии {% data variables.product.prodname_marketplace %}](/articles/about-billing-for-github-marketplace/).
{% endif %}

{% ifversion fpt or ghec %}
### Действия категории `advisory_credit`

| Действие | Описание
|------------------|-------------------
| `accept` | Активируется, когда кто-то принимает кредит за советы по безопасности. Дополнительные сведения см. в статье [Изменение советов по безопасности](/github/managing-security-vulnerabilities/editing-a-security-advisory).
| `create` | Активируется, когда администратор советов по безопасности добавляет кого-то в раздел кредита.
| `decline` | Активируется, когда кто-то отклоняет кредит за советы по безопасности.
| `destroy` | Активируется, когда администратор советов по безопасности удаляет кого-то из раздела кредита.
{% endif %}

{% ifversion pat-v2 %}

### Действия категории `auto_approve_personal_access_token_requests`

| Действие | Описание
|------------------|-------------------
| `disable` | Активируется, когда организация должна утвердить {% data variables.product.pat_v2 %}s, прежде чем маркеры смогут получить доступ к ресурсам организации. Дополнительные сведения см. в разделе [Настройка политики {% data variables.product.pat_generic %} для вашей организации](/organizations/managing-programmatic-access-to-your-organization/setting-a-personal-access-token-policy-for-your-organization).
| `enable` | Активируется, когда {% data variables.product.pat_v2 %}s может получить доступ к ресурсам организации без предварительного утверждения. Дополнительные сведения см. в разделе [Настройка политики {% data variables.product.pat_generic %} для вашей организации](/organizations/managing-programmatic-access-to-your-organization/setting-a-personal-access-token-policy-for-your-organization).

{% endif %}

{% ifversion fpt or ghec %}
### Действия категории `billing`

| Действие | Описание
|------------------|-------------------
| `change_billing_type` | Активируется, когда организация [изменяет способ оплаты {% data variables.product.prodname_dotcom %}](/articles/adding-or-editing-a-payment-method).
| `change_email` | Активируется при изменении [адреса электронной почты выставления счетов](/articles/setting-your-billing-email) вашей организации.
{% endif %}

### Действия категории `business`

| Действие | Описание |------------------|-------------------{% ifversion fpt or ghec %} | `set_actions_fork_pr_approvals_policy` | Активируется при изменении настройки для запроса утверждения рабочих процессов из общедоступных вилок для предприятия. Дополнительные сведения см. в разделе [Применение политик для {% data variables.product.prodname_actions %} в организации](/enterprise-cloud@latest/admin/policies/enforcing-policies-for-your-enterprise/enforcing-policies-for-github-actions-in-your-enterprise#enforcing-a-policy-for-fork-pull-requests-in-your-enterprise).{% endif %} | `set_actions_retention_limit` | Активируется при изменении периода хранения для артефактов и журналов {% data variables.product.prodname_actions %} для предприятия. Дополнительные сведения см. в разделе [Применение политик для {% data variables.product.prodname_actions %} в организации]({% ifversion fpt %}/enterprise-cloud@latest{% endif %}/admin/policies/enforcing-policies-for-your-enterprise/enforcing-policies-for-github-actions-in-your-enterprise#enforcing-a-policy-for-artifact-and-log-retention-in-your-enterprise).{% ifversion fpt or ghes or ghec %} | `set_fork_pr_workflows_policy` | Активируется при изменении политики рабочих процессов в закрытых вилках репозитория. Дополнительные сведения см. в разделе "{% ifversion fpt or ghec%}[Принудительное применение политик для {% data variables.product.prodname_actions %} на предприятии]({% ifversion fpt %}/enterprise-cloud@latest{% endif %}/admin/policies/enforcing-policies-for-your-enterprise/enforcing-policies-for-github-actions-in-your-enterprise#enforcing-a-policy-for-fork-pull-requests-in-private-repositories){% else ifversion ghes > 2.22 %}[Включение рабочих процессов для вилок частного репозитория](/admin/github-actions/enabling-github-actions-for-github-enterprise-server/enforcing-github-actions-policies-for-your-enterprise#enabling-workflows-for-private-repository-forks){% endif %}.{% endif %}

{% ifversion fpt or ghec %}
### Действия категории `codespaces`

| Действие | Описание
|------------------|-------------------
| `create` | Активируется при [создании пространства кода](/github/developing-online-with-codespaces/creating-a-codespace) пользователем.
| `resume` | Активируется, когда пользователь возобновляет приостановленное пространство кода.
| `delete` | Активируется при [удалении пространства кода](/github/developing-online-with-codespaces/deleting-a-codespace) пользователем.
| `create_an_org_secret` | Активируется, когда пользователь создает секрет уровня организации [для {% data variables.product.prodname_github_codespaces %}](/github/developing-online-with-codespaces/managing-encrypted-secrets-for-codespaces#about-encrypted-secrets-for-codespaces)
| `update_an_org_secret` | Активируется, когда пользователь обновляет секрет уровня организации [для {% data variables.product.prodname_github_codespaces %}](/github/developing-online-with-codespaces/managing-encrypted-secrets-for-codespaces#about-encrypted-secrets-for-codespaces).
| `remove_an_org_secret` | Активируется, когда пользователь удаляет секрет уровня организации [для {% data variables.product.prodname_github_codespaces %}](/github/developing-online-with-codespaces/managing-encrypted-secrets-for-codespaces#about-encrypted-secrets-for-codespaces).
| `manage_access_and_security` | Активируется, когда пользователь обновляет [репозитории, к которым пространство кода может получить доступ](/github/developing-online-with-codespaces/managing-access-and-security-for-codespaces).
{% endif %}

### Действия категории `dependabot_alerts`

| Действие | Описание
|------------------|-------------------
| `disable` | Активируется, когда владелец организации отключает {% data variables.product.prodname_dependabot_alerts %} для всех существующих частных репозиториев {% ifversion fpt or ghec %}{% endif %}. Дополнительные сведения см. в разделе [Управление параметрами безопасности и анализа для организации](/organizations/keeping-your-organization-secure/managing-security-and-analysis-settings-for-your-organization).
| `enable` | Активируется, когда владелец организации отключает {% data variables.product.prodname_dependabot_alerts %} для всех существующих репозиториев {% ifversion fpt or ghec %}private {% endif %}.

### Действия категории `dependabot_alerts_new_repos`

| Действие | Описание
|------------------|-------------------
| `disable` | Активируется, когда владелец организации отключает {% data variables.product.prodname_dependabot_alerts %} для всех новых частных репозиториев {% ifversion fpt or ghec %} {% endif %}. Дополнительные сведения см. в разделе [Управление параметрами безопасности и анализа для организации](/organizations/keeping-your-organization-secure/managing-security-and-analysis-settings-for-your-organization).
| `enable` | Активируется, когда владелец организации включает {% data variables.product.prodname_dependabot_alerts %} для всех новых частных репозиториев {% ifversion fpt or ghec %} {% endif %}.

{% ifversion fpt or ghec or ghes %}
### Действия категории `dependabot_security_updates`

| Действие | Описание
|------------------|-------------------
| `disable` | Активируется, когда владелец организации отключает {% data variables.product.prodname_dependabot_security_updates %} для всех существующих репозиториев. Дополнительные сведения см. в разделе [Управление параметрами безопасности и анализа для организации](/organizations/keeping-your-organization-secure/managing-security-and-analysis-settings-for-your-organization).
| `enable` | Активируется, когда владелец организации включает {% data variables.product.prodname_dependabot_security_updates %} для всех существующих репозиториев.

### Действия категории `dependabot_security_updates_new_repos`

| Действие | Описание
|------------------|-------------------
| `disable` | Активируется, когда владелец организации отключает {% data variables.product.prodname_dependabot_security_updates %} для всех новых репозиториев. Дополнительные сведения см. в разделе [Управление параметрами безопасности и анализа для организации](/organizations/keeping-your-organization-secure/managing-security-and-analysis-settings-for-your-organization).
| `enable` | Активируется, когда владелец организации включает {% data variables.product.prodname_dependabot_security_updates %} для всех новых репозиториев.
{% endif %}

{% ifversion fpt or ghec %}
### Действия категории `dependency_graph`

| Действие | Описание
|------------------|-------------------
| `disable` | Активируется, когда владелец организации отключает граф зависимостей для всех существующих репозиториев. Дополнительные сведения см. в разделе [Управление параметрами безопасности и анализа для организации](/organizations/keeping-your-organization-secure/managing-security-and-analysis-settings-for-your-organization).
| `enable` | Активируется, когда владелец организации включает граф зависимостей для всех существующих репозиториев.

### Действия категории `dependency_graph_new_repos`

| Действие | Описание
|------------------|-------------------
| `disable` | Активируется, когда владелец организации отключает граф зависимостей для всех новых репозиториев. Дополнительные сведения см. в разделе [Управление параметрами безопасности и анализа для организации](/organizations/keeping-your-organization-secure/managing-security-and-analysis-settings-for-your-organization).
| `enable` | Активируется, когда владелец организации включает граф зависимостей для всех новых репозиториев.
{% endif %}

### Действия категории `discussion_post`

| Действие | Описание
|------------------|-------------------
| `update` | Активируется при [редактировании публикации обсуждения команды](/articles/managing-disruptive-comments/#editing-a-comment).
| `destroy` | Активируется при [удалении публикации обсуждения команды](/articles/managing-disruptive-comments/#deleting-a-comment).

### Действия категории `discussion_post_reply`

| Действие | Описание
|------------------|-------------------
| `update` | Активируется при [редактировании ответа на публикацию обсуждения команды](/articles/managing-disruptive-comments/#editing-a-comment).
| `destroy` | Активируется при [удалении ответа на публикацию обсуждения команды](/articles/managing-disruptive-comments/#deleting-a-comment).

{% ifversion fpt or ghes or ghec %}
### Действия категории `enterprise`

{% data reusables.actions.actions-audit-events-for-enterprise %}

{% endif %}

{% ifversion fpt or ghec %}
### Действия категории `environment`

| Действие | Описание
|------------------|-------------------
| `create_actions_secret` | Активируется при создании секрета в среде. Дополнительную информацию см. в разделе [Секреты среды](/actions/reference/environments#environment-secrets).
| `delete` | Активируется при удалении среды. Дополнительные сведения см. в разделе [Удаление среды](/actions/reference/environments#deleting-an-environment).
| `remove_actions_secret` |  Активируется при удалении секрета из среды. Дополнительную информацию см. в разделе [Секреты среды](/actions/reference/environments#environment-secrets).
| `update_actions_secret` | Активируется при обновлении секрета в среде. Дополнительную информацию см. в разделе [Секреты среды](/actions/reference/environments#environment-secrets).
{% endif %}

{% ifversion ghae %}
### Действия категории `external_group`

{% data reusables.saml.external-group-audit-events %}

{% endif %}

{% ifversion ghae %}
### Действия категории `external_identity`

{% data reusables.saml.external-identity-audit-events %}

{% endif %}

{% ifversion fpt or ghec %}
### Действия категории `git`

{% note %}

**Примечание.** Чтобы получить доступ к событиям Git в журнале аудита, необходимо использовать REST API журнала аудита. REST API журнала аудита доступен только для пользователей {% data variables.product.prodname_ghe_cloud %}. Дополнительные сведения см. в статье [Организации](/rest/reference/orgs#get-the-audit-log-for-an-organization).

{% endnote %}

{% data reusables.audit_log.audit-log-git-events-retention %}

| Действие  | Описание
|---------|----------------------------
| `clone` | Активируется при клонировании репозитория.
| `fetch` | Активируется при получении изменений из репозитория.
| `push`  | Активируется при отправке изменений в репозиторий.

{% endif %}

### Действия категории `hook`

| Действие | Описание
|------------------|-------------------
| `create` | Активируется при [добавлении нового перехватчика](/articles/creating-webhooks) в репозиторий, принадлежащий вашей организации.
| `config_changed` | Активируется при изменении конфигурации существующего обработчика.
| `destroy` | Активируется при удалении существующего перехватчика из репозитория.
| `events_changed` | Активируется при изменении событий в перехватчике.

### Действия категории `integration_installation`

| Действие | Описание
|--------|-------------
| `contact_email_changed` | Контактный адрес электронной почты для интеграции был изменен.
| `create` | Интеграция установлена.
| `destroy` | Интеграция удалена.
| `repositories_added` | В интеграцию были добавлены репозитории.
| `repositories_removed` | Из интеграции были удалены репозитории.
{%- ifversion fpt or ghec %} | `suspend` | Интеграция была приостановлена.
| `unsuspend` | Приостановка интеграции была отменена.
{%- endif %} | `version_updated` | Обновлены разрешения для интеграции.

### Действия категории `integration_installation_request`

| Действие | Описание
|------------------|-------------------
| `create` | Активируется, когда участник организации запрашивает установку владельцем организации интеграции для использования в организации.
| `close` | Активируется, когда запрос на установку интеграции для использования в организации утверждается или отклоняется владельцем организации или отменяется участником организации, который его создал.

{% ifversion ghec or ghae %}
### Действия категории `ip_allow_list`

| Действие | Описание
|------------------|-------------------
| `enable` | Активируется при включении списка разрешенных IP-адресов для организации.
| `disable` | Активируется при отключении списка разрешенных IP-адресов для организации.
| `enable_for_installed_apps` | Активируется при включении списка разрешенных IP-адресов для установки {% data variables.product.prodname_github_apps %}.
| `disable_for_installed_apps` | Активируется при отключении списка разрешенных IP-адресов для установки {% data variables.product.prodname_github_apps %}.

### Действия категории `ip_allow_list_entry`

| Действие | Описание
|------------------|-------------------
| `create` | Активируется при добавлении IP-адреса в список разрешенных IP-адресов.
| `update` | Активируется при изменении IP-адреса или его описания.
| `destroy` | Активируется при удалении IP-адреса из списка разрешенных IP-адресов.
{% endif %}

### Действия категории `issue`

| Действие | Описание
|------------------|-------------------
| `destroy`        | Активируется, когда владелец организации или пользователь с разрешениями администратора в репозитории удаляет проблему из репозитория, принадлежащему организации.

{% ifversion fpt or ghec %}

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

{% ifversion fpt or ghes or ghec %}

### Действия категории `members_can_create_pages`

Дополнительные сведения см. в разделе [Управление публикацией сайтов {% data variables.product.prodname_pages %} для организации](/organizations/managing-organization-settings/managing-the-publication-of-github-pages-sites-for-your-organization).

| Действие | Описание |
| :- | :- |
| `enable` | Активируется, когда владелец организации включает публикацию сайтов {% data variables.product.prodname_pages %} для репозиториев в организации. |
| `disable` | Активируется, когда владелец организации отключает публикацию сайтов {% data variables.product.prodname_pages %} для репозиториев в организации. |

{% endif %}

### Действия категории `oauth_application`

| Действие | Описание
|------------------|-------------------
| `create` | Активируется при создании нового {% data variables.product.prodname_oauth_app %}.
| `destroy` | Активируется при удалении существующего {% data variables.product.prodname_oauth_app %}.
| `reset_secret` | Активируется при сбросе секрета клиента {% data variables.product.prodname_oauth_app %}.
| `revoke_tokens` | Активируется при отзыве маркеров пользователя {% data variables.product.prodname_oauth_app %}.
| `transfer` |  Активируется при передаче существующего {% data variables.product.prodname_oauth_app %} в новую организацию.

### Действия категории `org`

| Действие | Описание
|------------------|-------------------
| `add_member` | Активируется при присоединении пользователя к организации.
| `advanced_security_policy_selected_member_disabled` | Активируется, когда владелец предприятия запрещает включение функций {% data variables.product.prodname_GH_advanced_security %} для репозиториев, принадлежащих организации. {% data reusables.advanced-security.more-information-about-enforcement-policy %}
| `advanced_security_policy_selected_member_enabled` | Активируется, когда владелец предприятия разрешает включение функций {% data variables.product.prodname_GH_advanced_security %} для репозиториев, принадлежащих организации. {% data reusables.advanced-security.more-information-about-enforcement-policy %}{% ifversion fpt or ghec %}
| `audit_log_export` | Активируется, когда администратор организации [создает экспорт журнала аудита организации](#exporting-the-audit-log). Если экспорт включал запрос, журнал перечислит использованный запрос и количество записей в журнале аудита, соответствующих указанному запросу.
| `block_user` | Активируется, когда владелец организации [блокирует доступ к репозиториям организации](/communities/maintaining-your-safety-on-github/blocking-a-user-from-your-organization).
| `cancel_invitation` | Активируется при отзыве приглашения организации. {% endif %}{% ifversion fpt or ghes or ghec %}
| `create_actions_secret` | Активируется при создании секрета {% data variables.product.prodname_actions %} для организации. Дополнительные сведения см. в разделе [Создание зашифрованных секретов для организации](/actions/reference/encrypted-secrets#creating-encrypted-secrets-for-an-organization). {% endif %} {% ifversion fpt or ghec %}
| `disable_oauth_app_restrictions` | Активируется, когда владелец [отключает ограничения на доступ {% data variables.product.prodname_oauth_app %}](/articles/disabling-oauth-app-access-restrictions-for-your-organization) для вашей организации.{% ifversion ghec %}
| `disable_saml` | Активируется, когда администратор организации отключает единый вход SAML для организации.{% endif %}{% endif %}
| `disable_member_team_creation_permission` | Активируется, когда владелец организации ограничивает создание команды владельцами. Дополнительные сведения см. в разделе [Настройка разрешений для создания команды в организации](/articles/setting-team-creation-permissions-in-your-organization). |{% ifversion not ghae %}
| `disable_two_factor_requirement` | Активируется, когда владелец отключает требование двухфакторной проверки подлинности для всех участников{% ifversion fpt or ghec %}, менеджеров по выставлению счетов,{% endif %} и сторонних участников совместной работы в организации.{% endif %} {% ifversion fpt or ghec %}
| `enable_oauth_app_restrictions` | Активируется, когда владелец [включает ограничения на доступ {% data variables.product.prodname_oauth_app %}](/articles/enabling-oauth-app-access-restrictions-for-your-organization) для вашей организации.{% ifversion ghec %}
| `enable_saml` | Активируется, когда администратор организации [включает единый вход SAML](/articles/enabling-and-testing-saml-single-sign-on-for-your-organization) для организации.{% endif %}{% endif %}
| `enable_member_team_creation_permission` | Активируется, когда владелец организации позволяет участникам создавать команды. Дополнительные сведения см. в разделе [Настройка разрешений для создания команды в организации](/articles/setting-team-creation-permissions-in-your-organization). |{% ifversion not ghae %}
| `enable_two_factor_requirement` | Активируется, когда владелец включает требование двухфакторной проверки подлинности для всех участников{% ifversion fpt or ghec %}, менеджеров по выставлению счетов,{% endif %} и сторонних участников совместной работы в организации.{% endif %} {% ifversion fpt or ghec %}
| `invite_member` | Активируется при [приглашении нового пользователя для присоединения к организации](/organizations/managing-membership-in-your-organization/inviting-users-to-join-your-organization).
| `oauth_app_access_approved` | Активируется, когда владелец [предоставляет организации доступ к {% data variables.product.prodname_oauth_app %}](/articles/approving-oauth-apps-for-your-organization/).
| `oauth_app_access_denied` | Активируется, когда владелец [отключает ранее утвержденный доступ к {% data variables.product.prodname_oauth_app %}](/articles/denying-access-to-a-previously-approved-oauth-app-for-your-organization) для вашей организации.
| `oauth_app_access_requested` | Активируется, когда участник организации запрашивает, чтобы владелец предоставил доступ к вашей организации {% data variables.product.prodname_oauth_app %}.{% endif %}
{%- ifversion ghec %} | `org.transfer` | Активируется при передаче организации между корпоративными учетными записями. Дополнительные сведения см. в разделе [Перенос организации между корпоративными учетными записями](/admin/user-management/managing-organizations-in-your-enterprise/adding-organizations-to-your-enterprise#transferring-an-organization-between-enterprise-accounts).
{%- endif %} | `register_self_hosted_runner` | Активируется при регистрации нового локального средства выполнения. Дополнительные сведения см. в разделе [Добавление средства выполнения тестов локального размещения в организацию](/actions/hosting-your-own-runners/adding-self-hosted-runners#adding-a-self-hosted-runner-to-an-organization).
| `remove_actions_secret` | Активируется при удалении секрета {% data variables.product.prodname_actions %}. {% ifversion fpt or ghec %} | `remove_billing_manager` | Активируется, когда [владелец удаляет менеджера по выставлению счетов из организации](/articles/removing-a-billing-manager-from-your-organization/) или когда [в организации требуется двухфакторная проверка подлинности](/articles/requiring-two-factor-authentication-in-your-organization) , а менеджер по выставлению счетов не использует 2FA или отключает 2FA. | {% endif %} | `remove_member` | Активируется, когда [владелец удаляет участника из организации](/articles/removing-a-member-from-your-organization/){% ifversion not ghae %} или когда [в организации требуется двухфакторная проверка подлинности](/articles/requiring-two-factor-authentication-in-your-organization) , а участник организации не использует 2FA или отключает 2FA{% endif %}. Также активируется, когда [участник организации удаляется](/articles/removing-yourself-from-an-organization/) из организации.| | `remove_outside_collaborator` | Активируется, когда владелец удаляет стороннего участника совместной работы из организации{% ifversion not ghae %} или когда [в организации требуется двухфакторная проверка подлинности](/articles/requiring-two-factor-authentication-in-your-organization) , а внешний участник совместной работы не использует 2FA или отключает 2FA{% endif %}. | | `remove_self_hosted_runner` | Активируется при удалении локального средства выполнения. Дополнительные сведения см. в разделе [Удаление средства выполнения тестов из организации](/actions/hosting-your-own-runners/removing-self-hosted-runners#removing-a-runner-from-an-organization). {% ifversion ghec %} | `revoke_external_identity` | Активируется, когда владелец организации отменяет связанное удостоверение участника. Дополнительные сведения см. в разделе [Просмотр доступа SAML участника к вашей организации и управление им](/organizations/granting-access-to-your-organization-with-saml-single-sign-on/viewing-and-managing-a-members-saml-access-to-your-organization#viewing-and-revoking-a-linked-identity).
| `revoke_sso_session` | Активируется, когда владелец организации отменяет сеанс SAML участника. Дополнительные сведения см. в разделе [Просмотр доступа SAML участника к вашей организации и управление им](/organizations/granting-access-to-your-organization-with-saml-single-sign-on/viewing-and-managing-a-members-saml-access-to-your-organization#viewing-and-revoking-a-linked-identity). {% endif %} | `runner_group_created` | Активируется при создании локальной группы средств выполнения тестов. Дополнительные сведения см. в разделе [Создание группы средств выполнения тестов локального размещения для организации](/actions/hosting-your-own-runners/managing-access-to-self-hosted-runners-using-groups#creating-a-self-hosted-runner-group-for-an-organization).
| `runner_group_removed` | Активируется при удалении локальной группы средств выполнения. Дополнительные сведения см. в разделе [Удаление средства выполнения тестов локального размещения в группу](/actions/hosting-your-own-runners/managing-access-to-self-hosted-runners-using-groups#removing-a-self-hosted-runner-group).
| `runner_group_updated` | Активируется при изменении конфигурации локальной группы средств выполнения тестов. Дополнительные сведения см. в разделе [Изменение политики доступа для группы средства выполнения тестов локального размещения](/actions/hosting-your-own-runners/managing-access-to-self-hosted-runners-using-groups#changing-the-access-policy-of-a-self-hosted-runner-group).
| `runner_group_runners_added` | Активируется при добавлении локального средства выполнения в группу. Дополнительные сведения см. в разделе [Перемещение средства выполнения тестов локального размещения в группу](/actions/hosting-your-own-runners/managing-access-to-self-hosted-runners-using-groups#moving-a-self-hosted-runner-to-a-group).
| `runner_group_runner_removed` |  Активируется, когда REST API используется для удаления локального средства выполнения из группы. Дополнительные сведения см. в разделе [Удаление группы средств выполнения тестов локального размещения для организации](/rest/reference/actions#remove-a-self-hosted-runner-from-a-group-for-an-organization).
| `runner_group_runners_updated`|  Активируется при обновлении списка участников группы средств выполнения. Дополнительные сведения см. в разделе [Настройка средств выполнения тестов локального размещения в группе для организации](/rest/reference/actions#set-self-hosted-runners-in-a-group-for-an-organization).
{%- ifversion code-security-audit-log-events %} | `secret_scanning_push_protection_custom_message_disabled` | Активируется, когда владелец или администратор организации отключает пользовательское сообщение, активированное при попытке отправки в репозиторий, защищенный с помощью push-уведомлений. Дополнительные сведения см. в статье [Защита отправок с помощью {% data variables.product.prodname_secret_scanning %}](/code-security/secret-scanning/protecting-pushes-with-secret-scanning#enabling-secret-scanning-as-a-push-protection-for-an-organization).
| `secret_scanning_push_protection_custom_message_enabled` | Активируется, когда владелец или администратор организации включает пользовательское сообщение, активированное попыткой отправки в репозиторий, защищенный с помощью push-уведомлений. Дополнительные сведения см. в статье [Защита отправок с помощью {% data variables.product.prodname_secret_scanning %}](/code-security/secret-scanning/protecting-pushes-with-secret-scanning#enabling-secret-scanning-as-a-push-protection-for-an-organization).
| `secret_scanning_push_protection_custom_message_updated` | Активируется, когда владелец или администратор организации обновляет пользовательское сообщение, активироваемое попыткой отправки, в репозиторий, защищенный с помощью push-уведомлений. Дополнительные сведения см. в статье [Защита отправок с помощью {% data variables.product.prodname_secret_scanning %}](/code-security/secret-scanning/protecting-pushes-with-secret-scanning#enabling-secret-scanning-as-a-push-protection-for-an-organization).
{%- endif %} {%- ifversion secret-scanning-audit-log-custom-patterns %} | `secret_scanning_push_protection_disable ` | Активируется, когда владелец организации или пользователь с административным доступом к организации отключает принудительная защита для сканирования секретов. Дополнительные сведения см. в разделе [Защита push-уведомлений с помощью сканирования секретов](/enterprise-cloud@latest/code-security/secret-scanning/protecting-pushes-with-secret-scanning).
| `secret_scanning_push_protection_enable ` | Активируется, когда владелец организации или пользователь с административным доступом к организации включает защиту от push-уведомлений для {% data variables.product.prodname_secret_scanning %}. {%- endif %} | `self_hosted_runner_online` | Активируется при запуске приложения средства выполнения. Можно просматривать только с помощью REST API; не отображается в пользовательском интерфейсе или экспорте JSON/CSV. Дополнительные сведения см. в разделе [Проверка статуса средства выполнения тестов локального размещения](/actions/hosting-your-own-runners/monitoring-and-troubleshooting-self-hosted-runners#checking-the-status-of-a-self-hosted-runner).
| `self_hosted_runner_offline` | Активируется при остановке приложения средства выполнения. Можно просматривать только с помощью REST API; не отображается в пользовательском интерфейсе или экспорте JSON/CSV. Дополнительные сведения см. в разделе [Проверка состояния локального средства выполнения тестов](/actions/hosting-your-own-runners/monitoring-and-troubleshooting-self-hosted-runners#checking-the-status-of-a-self-hosted-runner). {% ifversion fpt or ghes or ghec %} | `self_hosted_runner_updated` | Активируется при обновлении приложения средства выполнения. Можно просматривать с помощью REST API и пользовательского интерфейса; не отображается в экспорте JSON/CSV. Дополнительные сведения см. в разделе [Сведения о локальных средствах выполнения](/actions/hosting-your-own-runners/about-self-hosted-runners#about-self-hosted-runners) тестов. {% endif %} {% ifversion fpt or ghec %} | `set_actions_fork_pr_approvals_policy` | Активируется при изменении параметра требовать утверждения рабочих процессов из общедоступных вилок для организации. Дополнительные сведения см. в разделе [Требование утверждения рабочих процессов из общедоступных вилок](/organizations/managing-organization-settings/disabling-or-limiting-github-actions-for-your-organization#requiring-approval-for-workflows-from-public-forks). {% endif %} | `set_actions_retention_limit` | Активируется при изменении срока хранения артефактов и журналов {% data variables.product.prodname_actions %}. Дополнительные сведения см. в разделе [Применение политик для {% data variables.product.prodname_actions %} в организации](/admin/policies/enforcing-policies-for-your-enterprise/enforcing-policies-for-github-actions-in-your-enterprise#enforcing-a-policy-for-artifact-and-log-retention-in-your-enterprise).{% ifversion fpt or ghes or ghec %} | `set_fork_pr_workflows_policy` | Активируется при изменении политики рабочих процессов в закрытых вилках репозитория. Дополнительные сведения см. в разделе [Включение рабочих процессов для вилок частного репозитория](/organizations/managing-organization-settings/disabling-or-limiting-github-actions-for-your-organization#enabling-workflows-for-private-repository-forks). {% endif %} {% ifversion fpt or ghec %} | `unblock_user` | Активируется, когда владелец организации [разблокирует пользователя из организации](/communities/maintaining-your-safety-on-github/unblocking-a-user-from-your-organization). {% endif %} {% ifversion fpt or ghes or ghec %} | `update_actions_secret` | Активируется при обновлении секрета {% data variables.product.prodname_actions %}. {% endif %} | `update_new_repository_default_branch_setting` | Активируется, когда владелец изменяет имя ветви по умолчанию для новых репозиториев в организации. Дополнительные сведения см. в разделе [Управление именем ветви по умолчанию для репозиториев в организации](/organizations/managing-organization-settings/managing-the-default-branch-name-for-repositories-in-your-organization).
| `update_default_repository_permission` | Активируется, когда владелец изменяет уровень разрешений репозитория по умолчанию для участников организации.
| `update_member` | Активируется, когда владелец изменяет роль пользователя с владельца на участника или от участника к владельцу.
| `update_member_repository_creation_permission` | Активируется, когда владелец изменяет разрешение на создание репозитория для участников организации. {% ifversion fpt or ghec %} | `update_saml_provider_settings` | Активируется при обновлении параметров поставщика SAML организации.
| `update_terms_of_service` | Активируется при изменении организацией стандартных условий обслуживания и корпоративных условий обслуживания. Дополнительные сведения см. в разделе [Повышение уровня до корпоративных условий предоставления услуг](/articles/upgrading-to-the-corporate-terms-of-service).{% endif %}

{% ifversion ghec %}
### Действия категории `org_credential_authorization`

| Действие | Описание
|------------------|-------------------
| `grant` | Активируется, когда член [авторизует учетные данные для использования с единым входом SAML](/github/authenticating-to-github/authenticating-with-saml-single-sign-on).
| `deauthorized` | Активируется, когда член [отменяет авторизацию учетных данных для использования с единым входом SAML](/github/authenticating-to-github/authenticating-with-saml-single-sign-on).
| `revoke` | Активируется, когда владелец [отзывает авторизованные учетные данные](/organizations/granting-access-to-your-organization-with-saml-single-sign-on/viewing-and-managing-a-members-saml-access-to-your-organization).

{% endif %}{% ifversion secret-scanning-audit-log-custom-patterns %}

### Действия категории `org_secret_scanning_custom_pattern`

| Действие | Описание
|------------------|-------------------
| `create` | Активируется при публикации пользовательского шаблона для сканирования секретов в организации. Дополнительные сведения см. в разделе [Определение пользовательских шаблонов для сканирования секретов](/code-security/secret-scanning/defining-custom-patterns-for-secret-scanning#defining-a-custom-pattern-for-an-organization).
| `update` | Активируется при сохранении изменений в пользовательском шаблоне для проверки секретов в организации. Дополнительные сведения см. в разделе [Определение пользовательских шаблонов для сканирования секретов](/code-security/secret-scanning/defining-custom-patterns-for-secret-scanning#editing-a-custom-pattern).
| `delete` | Активируется при удалении пользовательского шаблона из проверки секретов в организации. Дополнительные сведения см. в разделе [Определение пользовательских шаблонов для сканирования секретов](/code-security/secret-scanning/defining-custom-patterns-for-secret-scanning#removing-a-custom-pattern).

{% endif %}
### Действия категории `organization_default_label`

| Действие | Описание
|------------------|-------------------
| `create` | Активируется при создании метки по умолчанию.
| `update` | Активируется при редактировании метки по умолчанию.
| `destroy` | Активируется при удалении метки по умолчанию.

### Действия категории `packages`

| Действие | Описание |
|--------|-------------|
| `package_version_published` | Активируется при публикации версии пакета. |
| `package_version_deleted` | Активируется при удалении конкретной версии пакета. Дополнительные сведения см. в статье [Удаление и восстановление пакета](/packages/learn-github-packages/deleting-and-restoring-a-package).
| `package_deleted` | Активируется при удалении всего пакета. Дополнительные сведения см. в статье [Удаление и восстановление пакета](/packages/learn-github-packages/deleting-and-restoring-a-package).
| `package_version_restored` | Активируется при удалении конкретной версии пакета. Дополнительные сведения см. в статье [Удаление и восстановление пакета](/packages/learn-github-packages/deleting-and-restoring-a-package).
| `package_restored` | Активируется при восстановлении всего пакета. Дополнительные сведения см. в статье [Удаление и восстановление пакета](/packages/learn-github-packages/deleting-and-restoring-a-package).

{% ifversion fpt or ghec %}

### Действия категории `payment_method`

| Действие | Описание
|------------------|-------------------
| `create` |  Активируется при добавлении нового способа оплаты, например новой кредитной карты или учетной записи PayPal.
| `update` | Активируется при обновлении существующего метода оплаты.

{% endif %}

{% ifversion pat-v2 %}

### Действия категории `personal_access_token`

| Действие | Описание
|------------------|-------------------
| `access_granted` | Активируется, когда {% data variables.product.pat_v2 %} предоставляется доступ к ресурсам организации. Дополнительные сведения см. в разделе [Управление запросами для {% data variables.product.pat_generic %} в организации](/organizations/managing-programmatic-access-to-your-organization/managing-requests-for-personal-access-tokens-in-your-organization).
| `access_revoked` | Активируется при отмене доступа {% data variables.product.pat_v2 %} к ресурсам организации. Маркер по-прежнему может считывать ресурсы общедоступной организации. Дополнительные сведения см. в разделе [Проверка и отзыв {% data variables.product.pat_generic %} в организации](/organizations/managing-programmatic-access-to-your-organization/reviewing-and-revoking-personal-access-tokens-in-your-organization).
| `request_cancelled` | Активируется, когда участник организации отменяет запрос на доступ к ресурсам организации {% data variables.product.pat_v2 %}.
| `request_created` | Активируется, когда участник организации создает {% data variables.product.pat_v2 %} для доступа к ресурсам организации, и организация нуждается в утверждении, прежде чем {% data variables.product.pat_v2 %} сможет получить доступ к ресурсам организации. Дополнительные сведения см. в разделе [Управление запросами для {% data variables.product.pat_generic %} в организации](/organizations/managing-programmatic-access-to-your-organization/managing-requests-for-personal-access-tokens-in-your-organization).
| `request_denied` | Активируется, когда запрос {% data variables.product.pat_v2 %} для доступа к ресурсам организации отклоняется. Дополнительные сведения см. в разделе [Управление запросами для {% data variables.product.pat_generic %} в организации](/organizations/managing-programmatic-access-to-your-organization/managing-requests-for-personal-access-tokens-in-your-organization).

{% endif %}

### Действия категории `profile_picture`
| Действие | Описание
|------------------|-------------------
| обновить | Активируется при настройке или обновлении изображения профиля организации.

### Действия категории `project`

| Действие | Описание
|--------------------|---------------------
| `create` | Активируется при создании панели проекта.
| `link` | Активируется при связывании репозитория с панелью проекта.
| `rename` | Активируется при переименовании панели проекта.
| `update` | Активируется при обновлении панели проекта.
| `delete` | Активируется при удалении панели проекта.
| `unlink` | Активируется при отмене связи репозитория с панелью проекта.
| `update_org_permission` | Активируется при изменении или удалении разрешений базового уровня для всех участников организации. |
| `update_team_permission` | Активируется при изменении уровня разрешений на панели проекта команды или при добавлении либо удалении команды с панели проекта. |
| `update_user_permission` | Активируется, когда участник организации или сторонний участник совместной работы добавляется или удаляется с панели проекта либо для него изменяется уровень разрешений.|

### Действия категории `protected_branch`

| Действие | Описание
|--------------------|---------------------
| `create ` | Активируется при включении защиты ветви.
| `destroy` | Активируется при отключении защиты ветви.
| `update_admin_enforced ` | Активируется при принудительном применении защиты ветви для администраторов репозитория.
| `update_require_code_owner_review ` | Активируется при обновлении принудительной проверки владельца кода в ветви.
| `dismiss_stale_reviews ` | Активируется при обновлении принудительного прекращения устаревших запросов на вытягивание в ветви.
| `update_signature_requirement_enforcement_level ` | Активируется при обновлении принудительного подписания обязательной фиксации в ветви.
| `update_pull_request_reviews_enforcement_level ` | Активируется при обновлении обязательных проверок запросов на вытягивание в ветви. Может быть одним из `0`(деактивированы) `1`(пользователи без прав администратора), `2`(все).
| `update_required_status_checks_enforcement_level ` | Активируется при обновлении принудительных обязательных проверок статуса в ветви.
| `update_strict_required_status_checks_policy` | Активируется при изменений требования к актуализации ветви перед объединением.
| `rejected_ref_update ` | Активируется при отклонении попытки обновления ветви.
| `policy_override ` | Активируется, когда администратор репозитория переопределяет требования к защите ветви.
| `update_allow_force_pushes_enforcement_level ` | Активируется при включении или отключении принудительной отправки push-уведомлений для защищенной ветви.
| `update_allow_deletions_enforcement_level ` | Активируется при включении или отключении удаления для защищенной ветви.
| `update_linear_history_requirement_enforcement_level ` | Активируется при включении или отключении журнала обязательной линейной фиксации для защищенной ветви.

### Действия категории `pull_request`

| Действие | Описание
|------------------|-------------------
| `create` | Активируется при создании запроса на вытягивание.
| `close` | Активируется при закрытии запроса на вытягивание без объединения.
| `reopen` | Активируется при повторном открытии запроса на вытягивание после его предшествующего закрытия.
| `merge` | Активируется при объединении запроса на вытягивание.
| `indirect_merge` | Активируется при объединении запроса на вытягивание, так как его фиксации были объединены в целевую ветвь.
| `ready_for_review` | Активируется, когда запрос на вытягивание помечается как готовый к проверке.
| `converted_to_draft` | Активируется при преобразовании запроса на вытягивание в черновик.
| `create_review_request` | Активируется при запросе проверки.
| `remove_review_request` | Активируется при удалении запроса на проверку.

### Действия категории `pull_request_review`

| Действие | Описание
|------------------|-------------------
| `submit` | Активируется при отправке результатов проверки.
| `dismiss` | Активируется при прекращении проверки.
| `delete` | Активируется при удалении проверки.

### Действия категории `pull_request_review_comment`

| Действие | Описание
|------------------|-------------------
| `create` | Активируется при добавлении комментария для проверки.
| `update` | Активируется при изменении комментария для проверки.
| `delete` | Активируется при удалении комментария для проверки.

### Действия категории `repo`

| Действие | Описание
|------------------|-------------------
| `access` | Активируется, когда пользователь [изменяет видимость](/github/administering-a-repository/setting-repository-visibility) репозитория в организации.
| `actions_enabled` | Активируется при включении {% data variables.product.prodname_actions %} для репозитория. Можно просмотреть с помощью пользовательского интерфейса. Это событие не включается при доступе к журналу аудита с помощью REST API. Дополнительные сведения см. в разделе [Использование REST API](#using-the-rest-api).
| `add_member` | Активируется, когда пользователь принимает [приглашение на доступ к репозиторию для совместной работы](/articles/inviting-collaborators-to-a-personal-repository).
| `add_topic` | Активируется, когда администратор репозитория [добавляет раздел](/articles/classifying-your-repository-with-topics) в репозиторий.
| `advanced_security_disabled` | Активируется, когда администратор репозитория отключает функции {% data variables.product.prodname_GH_advanced_security %} для репозитория. Дополнительные сведения см. в статье [Управление параметрами безопасности и анализа для репозитория](/github/administering-a-repository/managing-security-and-analysis-settings-for-your-repository).
| `advanced_security_enabled` | Активируется, когда администратор репозитория включает функции {% data variables.product.prodname_GH_advanced_security %} для репозитория. Дополнительные сведения см. в статье [Управление параметрами безопасности и анализа для репозитория](/github/administering-a-repository/managing-security-and-analysis-settings-for-your-repository).
| `archived` | Активируется, когда администратор репозитория [архивирует репозиторий](/articles/about-archiving-repositories).{% ifversion ghes %}
| `config.disable_anonymous_git_access` | Активируется при отключении [анонимного доступа для чтения в Git](/enterprise/user/articles/enabling-anonymous-git-read-access-for-a-repository) в общедоступном репозитории.
| `config.enable_anonymous_git_access` | Активируется при включении [анонимного доступа для чтения в Git](/enterprise/user/articles/enabling-anonymous-git-read-access-for-a-repository) в общедоступном репозитории.
| `config.lock_anonymous_git_access` | Активируется при [блокировке параметра анонимного доступа для чтения в Git](/enterprise/admin/guides/user-management/preventing-users-from-changing-anonymous-git-read-access) репозитория.
| `config.unlock_anonymous_git_access` | Активируется при [разблокировке параметра анонимного доступа для чтения в Git](/enterprise/admin/guides/user-management/preventing-users-from-changing-anonymous-git-read-access) репозитория.{% endif %}
| `create` | Активируется при [создании нового репозитория](/articles/creating-a-new-repository).{% ifversion fpt or ghes or ghec %}
| `create_actions_secret` |Активируется при создании секрета {% data variables.product.prodname_actions %} для репозитория. Дополнительные сведения см. в статье [Создание зашифрованных секретов для репозитория](/actions/reference/encrypted-secrets#creating-encrypted-secrets-for-a-repository).{% endif %}
| `destroy` | Активируется при [ удалении репозитория](/articles/deleting-a-repository).{% ifversion fpt or ghec %}
| `disable` | Активируется при отключении репозитория (например, при [недостаточном объеме средств](/articles/unlocking-a-locked-account)).{% endif %}
| `enable` | Активируется при повторном включении репозитория.{% ifversion fpt or ghes or ghec %}
| `remove_actions_secret` | Активируется при удалении секрета {% data variables.product.prodname_actions %}.{% endif %}
| `remove_member` | Активируется при [удалении пользователя из репозитория как участника совместной работы](/articles/removing-a-collaborator-from-a-personal-repository).
| `register_self_hosted_runner` | Активируется при регистрации нового локального средства выполнения тестов. Дополнительные сведения см. в разделе [Добавление средства выполнения тестов локального размещения в репозиторий](/actions/hosting-your-own-runners/adding-self-hosted-runners#adding-a-self-hosted-runner-to-a-repository).
| `remove_self_hosted_runner` | Активируется при удалении средства выполнения тестов локального размещения. Дополнительные сведения см. в разделе [Удаление средства выполнения тестов из репозитория](/actions/hosting-your-own-runners/removing-self-hosted-runners#removing-a-runner-from-a-repository).
| `remove_topic` | Активируется, когда администратор репозитория удаляет раздел из репозитория.
| `rename` | Активируется при [переименовании репозитория](/articles/renaming-a-repository).
| `self_hosted_runner_online` | Активируется при запуске приложения средства выполнения. Можно просматривать только с помощью REST API; не отображается в пользовательском интерфейсе или экспорте JSON/CSV. Дополнительные сведения см. в разделе [Проверка статуса средства выполнения тестов локального размещения](/actions/hosting-your-own-runners/monitoring-and-troubleshooting-self-hosted-runners#checking-the-status-of-a-self-hosted-runner).
| `self_hosted_runner_offline` | Активируется при остановке приложения средства выполнения тестов. Можно просматривать только с помощью REST API; не отображается в пользовательском интерфейсе или экспорте JSON/CSV. Дополнительные сведения см. в разделе [Проверка статуса локального средства выполнения тестов](/actions/hosting-your-own-runners/monitoring-and-troubleshooting-self-hosted-runners#checking-the-status-of-a-self-hosted-runner).{% ifversion fpt or ghes or ghec %}
| `self_hosted_runner_updated` | Активируется при обновлении приложения средства выполнения тестов. Можно просматривать с помощью REST API и пользовательского интерфейса; не отображается в экспорте JSON/CSV. Дополнительные сведения см. в разделе [Средства выполнения тестов локального размещения](/actions/hosting-your-own-runners/about-self-hosted-runners#about-self-hosted-runners). {% endif %}{% ifversion fpt or ghec %}
| `set_actions_fork_pr_approvals_policy` | Активируется при изменении параметра, требующего утверждения рабочих процессов из общедоступных вилок. Дополнительные сведения см. в разделе [Управление параметрами {% data variables.product.prodname_actions %} для репозитория](/repositories/managing-your-repositorys-settings-and-features/enabling-features-for-your-repository/managing-github-actions-settings-for-a-repository#configuring-required-approval-for-workflows-from-public-forks).{% endif %}
| `set_actions_retention_limit` | Активируется при изменении периода хранения для артефактов и журналов {% data variables.product.prodname_actions %}. Дополнительные сведения см. в разделе [Управление параметрами {% data variables.product.prodname_actions %} для репозитория](/repositories/managing-your-repositorys-settings-and-features/enabling-features-for-your-repository/managing-github-actions-settings-for-a-repository#configuring-the-retention-period-for-github-actions-artifacts-and-logs-in-your-repository).{% ifversion fpt or ghes or ghec %}
| `set_fork_pr_workflows_policy` | Активируется при изменении политики рабочих процессов в закрытых вилках репозитория. Дополнительные сведения см. в разделе [Управление параметрами {% data variables.product.prodname_actions %} для репозитория](/repositories/managing-your-repositorys-settings-and-features/enabling-features-for-your-repository/managing-github-actions-settings-for-a-repository#enabling-workflows-for-private-repository-forks).{% endif %}
| `staff_unlock` | Активируется, когда владелец предприятия или {% data variables.contact.github_support %} (с разрешением администратора репозитория) временно разблокировали репозиторий. Видимость репозитория не изменяется.
| `transfer` | Активируется при [передаче репозитория](/articles/how-to-transfer-a-repository).
| `transfer_start` | Активируется при подготовке к передаче репозитория.
| `unarchived` | Активируется при распаковке архива репозитория администратором репозитория.{% ifversion fpt or ghes or ghec %}
| `update_actions_secret` | Активируется при обновлении секрета {% data variables.product.prodname_actions %}.{% endif %}

{% ifversion fpt or ghec %}

### Действия категории `repository_advisory`

| Действие | Описание
|------------------|-------------------
| `close` | Активируется, когда кто-то закрывает советы по безопасности. Дополнительные сведения см. в разделе [Сведения о советах по безопасности {% data variables.product.prodname_dotcom %}](/github/managing-security-vulnerabilities/about-github-security-advisories).
| `cve_request` | Активируется, когда кто-то запрашивает номер CVE (распространенные уязвимости) от {% data variables.product.prodname_dotcom %} для черновика советов по безопасности.
| `github_broadcast` | Активируется, когда {% data variables.product.prodname_dotcom %} делает советы по безопасности общедоступными в {% data variables.product.prodname_advisory_database %}.
| `github_withdraw` | Активируется, когда {% data variables.product.prodname_dotcom %} отзывает советы по безопасности, опубликованные в ошибке.
| `open` | Активируется при открытии черновика советов по безопасности.
| `publish` | Активируется, когда кто-то публикует советы по безопасности.
| `reopen` | Активируется при повторном открытии в качестве черновика советов по безопасности.
| `update` | Активируется при редактировании черновика или публикации советов по безопасности.

### Действия категории `repository_content_analysis`

| Действие | Описание
|------------------|-------------------
| `enable` | Активируется, когда владелец организации или пользователь с правами администратора в репозитории [включает параметры использования данных для частного репозитория](/get-started/privacy-on-github/managing-data-use-settings-for-your-private-repository).
| `disable` | Активируется, когда владелец организации или пользователь с правами администратора в репозитории [отключает параметры использования данных для частного репозитория](/get-started/privacy-on-github/managing-data-use-settings-for-your-private-repository).

{% endif %}{% ifversion fpt or ghec %}

### Действия категории `repository_dependency_graph`

| Действие | Описание
|------------------|-------------------
| `disable` | Активируется, когда владелец репозитория или пользователь с правами администратора отключает граф зависимостей для частного репозитория {% ifversion fpt or ghec %}{% endif %}. Дополнительные сведения см. в статье "[Сведения о графе зависимостей](/github/visualizing-repository-data-with-graphs/about-the-dependency-graph)".
| `enable` | Активируется, когда владелец репозитория или пользователь с правами администратора включает граф зависимостей для частного репозитория {% ifversion fpt or ghec %}{% endif %}.

{% endif %}{% ifversion ghec or ghes or ghae %}
### Действия категории `repository_secret_scanning`

| Действие | Описание
|------------------|-------------------
| `disable` | Активируется, когда владелец репозитория или пользователь с правами администратора для репозитория отключает проверку секретов для репозитория. Дополнительные сведения см. в статье [Сведения о сканировании секретов](/github/administering-a-repository/about-secret-scanning).
| `enable` | Активируется, когда владелец репозитория или пользователь с правами администратора для репозитория включает проверку секретов для репозитория.

{% endif %}{% ifversion secret-scanning-audit-log-custom-patterns %}

### Действия категории `repository_secret_scanning_custom_pattern`

| Действие | Описание
|------------------|-------------------
| `create` | Активируется при публикации пользовательского шаблона для сканирования секретов в репозитории. Дополнительные сведения см. в разделе [Определение пользовательских шаблонов для сканирования секретов](/code-security/secret-scanning/defining-custom-patterns-for-secret-scanning#defining-a-custom-pattern-for-a-repository).
| `update` | Активируется при сохранении изменений в пользовательском шаблоне для проверки секретов в репозитории. Дополнительные сведения см. в разделе [Определение пользовательских шаблонов для сканирования секретов](/code-security/secret-scanning/defining-custom-patterns-for-secret-scanning#editing-a-custom-pattern).
| `delete` | Активируется при удалении пользовательского шаблона из проверки секретов в репозитории. Дополнительные сведения см. в разделе [Определение пользовательских шаблонов для сканирования секретов](/code-security/secret-scanning/defining-custom-patterns-for-secret-scanning#removing-a-custom-pattern).

{% endif %}{% ifversion secret-scanning-audit-log-custom-patterns %}

### Действия категории `repository_secret_scanning_push_protection`

| Действие | Описание
|------------------|-------------------
| `disable` | Активируется, когда владелец репозитория или пользователь с правами администратора для репозитория отключает проверку секретов для репозитория. Дополнительные сведения см. в разделе [Защита push-уведомлений с помощью сканирования секретов](/code-security/secret-scanning/protecting-pushes-with-secret-scanning).
| `enable` | Активируется, когда владелец репозитория или пользователь с правами администратора для репозитория включает проверку секретов для репозитория.

{% endif %}
### Действия категории `repository_vulnerability_alert`

| Действие | Описание
|------------------|-------------------
| `create` | Активируется, когда {% data variables.product.product_name %} создает оповещение {% data variables.product.prodname_dependabot %} для репозитория, использующего уязвимую зависимость. Дополнительные сведения см. в статье "[Сведения о {% data variables.product.prodname_dependabot_alerts %}](/github/managing-security-vulnerabilities/about-alerts-for-vulnerable-dependencies)".
| `dismiss` | Активируется, когда владелец или пользователь организации с правами администратора в репозитории закрывает оповещение {% data variables.product.prodname_dependabot %} об уязвимой зависимости.
| `resolve` | Активируется, когда кто-то с доступом на запись в репозиторий передает изменения, чтобы обновить и устранить уязвимость в зависимости проекта.
{% ifversion fpt or ghec %}
### Действия категории `repository_vulnerability_alerts`

| Действие | Описание
|------------------|-------------------
| `authorized_users_teams` | Активируется, когда владелец организации или пользователь с разрешениями администратора в репозитории обновляет список пользователей или команд, которым разрешено получение {% data variables.product.prodname_dependabot_alerts %} для репозитория. Дополнительные сведения см. в статье [Управление параметрами безопасности и анализа для репозитория](/github/administering-a-repository/managing-security-and-analysis-settings-for-your-repository#granting-access-to-security-alerts).
| `disable` | Активируется, когда владелец или пользователь репозитория с правами администратора отключает {% data variables.product.prodname_dependabot_alerts %}.
| `enable` | Активируется, когда владелец или пользователь репозитория с правами администратора включает {% data variables.product.prodname_dependabot_alerts %}.

{% endif %}{% ifversion custom-repository-roles %}
### Действия категории `role`
| Действие | Описание
|------------------|-------------------
|`create` | Активируется, когда владелец организации создает новую пользовательскую роль репозитория. Дополнительные сведения см. в разделе [Управление ролями репозитория для организации](/organizations/managing-peoples-access-to-your-organization-with-roles/managing-custom-repository-roles-for-an-organization).
|`destroy` | Активируется, когда владелец организации удаляет настраиваемую роль репозитория. Дополнительные сведения см. в разделе [Управление ролями репозитория для организации](/organizations/managing-peoples-access-to-your-organization-with-roles/managing-custom-repository-roles-for-an-organization).
|`update` | Активируется, когда владелец организации изменяет существующую пользовательскую роль репозитория. Дополнительные сведения см. в разделе [Управление ролями репозитория для организации](/organizations/managing-peoples-access-to-your-organization-with-roles/managing-custom-repository-roles-for-an-organization).

{% endif %} {% ifversion ghec or ghes or ghae %}
### Действия категории `secret_scanning`

| Действие | Описание
|------------------|-------------------
| `disable` | Активируется, когда владелец организации отключает сканирование секретов для всех существующих репозиториев {% ifversion ghec %}, частных или внутренних репозиториев {% endif %}. Дополнительные сведения см. в статье [Сведения о сканировании секретов](/github/administering-a-repository/about-secret-scanning).
| `enable` | Активируется, когда владелец организации включает сканирование секретов для всех существующих репозиториев {% ifversion ghec %}, частных или внутренних репозиториев {% endif %}.
{% endif %}

{% ifversion secret-scanning-alert-audit-log %}
### Действия категории `secret_scanning_alert`

| Действие | Описание
|------------------|-------------------
| `create` | Активируется, когда {% data variables.product.prodname_dotcom %} обнаруживает открытый секрет и создает оповещение {% data variables.product.prodname_secret_scanning %}. Дополнительные сведения см. в статье «[Управление оповещениями из {% data variables.product.prodname_secret_scanning %}](/code-security/secret-scanning/managing-alerts-from-secret-scanning)».
| `reopen` | Активируется, когда пользователь повторно открывает оповещение {% data variables.product.prodname_secret_scanning %}.
| `resolve` | Активируется, когда пользователь разрешает оповещение {% data variables.product.prodname_secret_scanning %}.
{% endif %}

{% ifversion ghec or ghes or ghae %}
### Действия категории `secret_scanning_new_repos`

| Действие | Описание
|------------------|-------------------
| `disable` | Активируется, когда владелец организации отключает проверку секретов для всех новых частных или внутренних репозиториев {% ifversion ghec %}{% endif %}. Дополнительные сведения см. в статье [Сведения о сканировании секретов](/github/administering-a-repository/about-secret-scanning).
| `enable` | Активируется, когда владелец организации включает проверку секретов для всех новых частных или внутренних репозиториев {% ifversion ghec %}{% endif %}.
{% endif %}

{% ifversion secret-scanning-push-protection-bypasses %}
### Действия категории `secret_scanning_push_protection`

| Действие | Описание
|------------------|-------------------
| `bypass` | Активируется, когда пользователь обходит защиту принудительной отправки секрета, обнаруженную с помощью сканирования секретов. Дополнительные сведения см. в разделе [Обход защиты принудительной отправки секрета](/code-security/secret-scanning/protecting-pushes-with-secret-scanning#bypassing-push-protection-for-a-secret).
{% endif %}

{% ifversion fpt or ghec %}
### Действия категории `sponsors`

| Действие | Описание
|------------------|-------------------
| `custom_amount_settings_change` | Активируется при включении или отключении настраиваемых сумм или изменении предлагаемой настраиваемой суммы (см. раздел [Управление уровнями спонсорской поддержки](/github/supporting-the-open-source-community-with-github-sponsors/managing-your-sponsorship-tiers))
| `repo_funding_links_file_action` | Активируется при изменении файла FUNDING в репозитории (см. раздел [Отображение кнопки спонсора в репозитории](/articles/displaying-a-sponsor-button-in-your-repository))
| `sponsor_sponsorship_cancel` | Активируется при отмене спонсорской поддержки (см. раздел [Понижение уровня спонсорской поддержки](/articles/downgrading-a-sponsorship))
| `sponsor_sponsorship_create` | Активируется при спонсорской поддержке учетной записи (см. статью [Спонсорская поддержка участника разработки с открытым кодом](/sponsors/sponsoring-open-source-contributors/sponsoring-an-open-source-contributor))
| `sponsor_sponsorship_payment_complete` | Активируется после предоставления спонсорской поддержки учетной записи и обработки вашего платежа (см. статью [Спонсорская поддержка участника разработки с открытым кодом](/sponsors/sponsoring-open-source-contributors/sponsoring-an-open-source-contributor))
| `sponsor_sponsorship_preference_change` | Активируется при изменении способа получения обновлений по электронной почте от спонсируемой учетной записи (см. раздел [Управление спонсорской поддержкой](/sponsors/sponsoring-open-source-contributors/managing-your-sponsorship))
| `sponsor_sponsorship_tier_change` | Активируется при повышении или понижении уровня спонсорской поддержки (см. статью [Повышение уровня спонсорской поддержки](/articles/upgrading-a-sponsorship) и [Понижение уровня спонсорской поддержки](/articles/downgrading-a-sponsorship))
| `sponsored_developer_approve` | Активируется при утверждении учетной записи {% data variables.product.prodname_sponsors %} (см. раздел [Настройка {% data variables.product.prodname_sponsors %} для вашей организации](/sponsors/receiving-sponsorships-through-github-sponsors/setting-up-github-sponsors-for-your-organization))
| `sponsored_developer_create` | Активируется при создании учетной записи {% data variables.product.prodname_sponsors %} (см. раздел [Настройка {% data variables.product.prodname_sponsors %} для вашей организации](/sponsors/receiving-sponsorships-through-github-sponsors/setting-up-github-sponsors-for-your-organization))
| `sponsored_developer_disable` | Активируется при отключении учетной записи {% data variables.product.prodname_sponsors %}
| `sponsored_developer_redraft` | Активируется при возврате учетной записи {% data variables.product.prodname_sponsors %} в состояние "Черновик" из состояния "Утверждено"
| `sponsored_developer_profile_update` | Активируется при изменении профиля спонсируемой организации (см. раздел [Изменение данных профиля для {% data variables.product.prodname_sponsors %}](/sponsors/receiving-sponsorships-through-github-sponsors/editing-your-profile-details-for-github-sponsors))
| `sponsored_developer_request_approval` | Активируется при отправке приложения для {% data variables.product.prodname_sponsors %} на утверждение (см. раздел [Настройка {% data variables.product.prodname_sponsors %} для вашей организации](/sponsors/receiving-sponsorships-through-github-sponsors/setting-up-github-sponsors-for-your-organization))
| `sponsored_developer_tier_description_update` | Активируется при изменении описания для уровня спонсорской поддержки (см. раздел [Управление уровнями спонсорской поддержки](/sponsors/receiving-sponsorships-through-github-sponsors/managing-your-sponsorship-tiers))
| `sponsored_developer_update_newsletter_send` | Активируется при отправке обновления по электронной почте спонсорам (см. раздел [Связь со спонсорами](/sponsors/receiving-sponsorships-through-github-sponsors/contacting-your-sponsors))
| `waitlist_invite_sponsored_developer` | Активируется, когда вы получаете приглашение для присоединения {% data variables.product.prodname_sponsors %} из листа ожидания (см. раздел [Настройка {% data variables.product.prodname_sponsors %} для вашей организации](/sponsors/receiving-sponsorships-through-github-sponsors/setting-up-github-sponsors-for-your-organization))
| `waitlist_join` | Активируется, когда вы присоединяетесь к листу ожидания, чтобы стать спонсируемой организацией (см. раздел [Настройка {% data variables.product.prodname_sponsors %} для вашей организации](/sponsors/receiving-sponsorships-through-github-sponsors/setting-up-github-sponsors-for-your-organization))
{% endif %}

### Действия категории `team`

| Действие | Описание
|------------------|-------------------
| `add_member` | Активируется при добавлении члена организации [в команду](/articles/adding-organization-members-to-a-team).
| `add_repository` | Активируется, когда команда получает контроль над репозиторием.
| `change_parent_team` | Активируется при создании дочерней команды или [изменении родительской команды](/articles/moving-a-team-in-your-organization-s-hierarchy).
| `change_privacy` | Активируется при изменении уровня конфиденциальности для команды.
| `create` | Активируется при создании новой команды.
| `demote_maintainer` | Активируется, когда разрешения пользователя были понижены с координатора до участника команды. Дополнительные сведения см. в разделе [Назначение роли координатора команды участнику команды](/organizations/organizing-members-into-teams/assigning-the-team-maintainer-role-to-a-team-member).
| `destroy` | Активируется при удалении команды из организации.
| `team.promote_maintainer` | Активируется, когда разрешения пользователя были повышены с участника до координатора команды. Дополнительные сведения см. в разделе [Назначение роли координатора команды участнику команды](/organizations/organizing-members-into-teams/assigning-the-team-maintainer-role-to-a-team-member).
| `remove_member` | Активируется при [удалении члена организации из команды](/articles/removing-organization-members-from-a-team).
| `remove_repository` | Активируется, когда репозиторий выходит из-под контроля команды.

### Действия категории `team_discussions`

| Действие | Описание
|---|---|
| `disable` | Активируется, когда владелец организации отключает обсуждения команды для организации. Дополнительные сведения см. в разделе [Отключение обсуждений группы для вашей организации](/articles/disabling-team-discussions-for-your-organization).
| `enable` | Активируется, когда владелец организации включает обсуждения команды для организации.

### Действия категории `workflows`

{% data reusables.actions.actions-audit-events-workflow %}
## Дополнительные материалы

- "[Обеспечение безопасности организации](/articles/keeping-your-organization-secure)"{% ifversion fpt or ghec or ghes > 3.3 or ghae > 3.3 %} {%- ifversion fpt or ghec %}
- "[Экспорт сведений о членах организации](/organizations/managing-membership-in-your-organization/exporting-member-information-for-your-organization)"{% endif %} {%- endif %}
