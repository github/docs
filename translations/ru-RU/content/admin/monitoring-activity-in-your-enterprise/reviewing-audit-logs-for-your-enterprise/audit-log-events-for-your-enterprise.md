---
title: События журнала аудита для вашего предприятия
intro: 'Сведения о событиях журнала аудита, записанных для вашего предприятия.'
shortTitle: Audit log events
permissions: 'Enterprise owners {% ifversion ghes %}and site administrators {% endif %}can interact with the audit log.'
miniTocMaxHeadingLevel: 4
redirect_from:
  - /enterprise/admin/articles/audited-actions
  - /enterprise/admin/installation/audited-actions
  - /enterprise/admin/user-management/audited-actions
  - /admin/user-management/audited-actions
  - /admin/user-management/monitoring-activity-in-your-enterprise/audited-actions
versions:
  ghec: '*'
  ghes: '*'
  ghae: '*'
type: reference
topics:
  - Auditing
  - Enterprise
  - Logging
  - Security
ms.openlocfilehash: 5a936791aff8706cd04773bb0f7428cd11f29329
ms.sourcegitcommit: 7a74d5796695bb21c30e4031679253cbc16ceaea
ms.translationtype: MT
ms.contentlocale: ru-RU
ms.lasthandoff: 11/28/2022
ms.locfileid: '148183951'
---
{% ifversion ghec%}
## Сведения о событиях журнала аудита для вашего предприятия

Область событий, отображаемых в журнале аудита предприятия, зависит от того, использует ли ваша организация {% data variables.product.prodname_emus %}. Дополнительные сведения о {% data variables.product.prodname_emus %} см. в разделе [Сведения о {% data variables.product.prodname_emus %}](/admin/identity-and-access-management/using-enterprise-managed-users-and-saml-for-iam/about-enterprise-managed-users).

- Если ваша организация не использует {% data variables.product.prodname_emus %}, журнал аудита включает только события, связанные с корпоративной учетной записью и организациями в корпоративной учетной записи, которые перечислены в этой статье.
- Если ваше предприятие использует {% data variables.product.prodname_emus %}, журнал аудита также включает события пользователя для {% data variables.enterprise.prodname_managed_users %}, например каждый раз, когда пользователь входит в {% data variables.product.product_name %} и действия, которые он выполняет в своей учетной записи пользователя. Список этих событий учетной записи пользователя см. в разделе [Проверка журнала безопасности](/authentication/keeping-your-account-and-data-secure/reviewing-your-security-log#security-log-actions).
{% endif %}

{%- ifversion fpt or ghec %}
## Действия категории `account`

| Действие | Описание
|--------|-------------
| `account.billing_plan_change` | Изменился цикл выставления счетов организации. Дополнительные сведения см. в разделе [Изменение длительности цикла выставления счетов](/billing/managing-your-github-billing-settings/changing-the-duration-of-your-billing-cycle).
| `account.plan_change` | Изменилась подписка организации. Дополнительные сведения см. в разделе [Сведения о выставлении счетов для учетных записей GitHub](/billing/managing-billing-for-your-github-account/about-billing-for-github-accounts).
| `account.pending_plan_change` | Владелец организации или менеджер по выставлению счетов отменили платную подписку или выбрали более низкий уровень подписки. Дополнительные сведения см. в разделе [Как обновление или понижение уровня влияет на процесс выставления счетов?](/billing/managing-billing-for-your-github-account/how-does-upgrading-or-downgrading-affect-the-billing-process).
| `account.pending_subscription_change` | Бесплатная пробная версия {% data variables.product.prodname_marketplace %} активирована или срок ее действия истек. Дополнительные сведения см. в разделе [Сведения о выставлении счетов для GitHub Marketplace](/billing/managing-billing-for-github-marketplace-apps/about-billing-for-github-marketplace).
{%- endif %}

{%- ifversion fpt or ghec %}
## Действия категории `advisory_credit`

| Действие | Описание
|--------|-------------
| `advisory_credit.accept` | Кто-то принял кредит за рекомендацию по безопасности. Дополнительные сведения см. в статье [Изменение советов по безопасности](/github/managing-security-vulnerabilities/editing-a-security-advisory).
| `advisory_credit.create` | Администратор рекомендации по безопасности добавил кого-то в раздел кредита.
| `advisory_credit.decline` | Кто-то отклонил кредит за рекомендацию по безопасности.
| `advisory_credit.destroy` | Администратор рекомендации по безопасности удалил кого-то из раздела кредита.
{%- endif %}

## Действия категории `artifact`

| Действие | Описание
|--------|-------------
| `artifact.destroy`    | Артефакт запуска рабочего процесса был удален вручную.

{%- ifversion audit-log-streaming %}
## Действия категории `audit_log_streaming`

| Действие | Описание
|--------|-------------
| `audit_log_streaming.check` | Выполнена ручная проверка конечной точки, настроенной для потоковой передачи журналов аудита.
| `audit_log_streaming.create` | Добавлена конечная точка для потоковой передачи журналов аудита.
| `audit_log_streaming.update` | Обновлена конфигурация конечной точки для потоковой передачи журналов аудита, например, потоковая передача была приостановлена, включена или отключена.
| `audit_log_streaming.destroy` | Удалена конечная точка потоковой передачи журналов аудита.
{%- endif %}

{%- ifversion fpt or ghec %}
## Действия категории `billing`

| Действие | Описание
|--------|-------------
| `billing.change_billing_type` | Организация изменила способ оплаты за {% data variables.product.prodname_dotcom %}. Дополнительные сведения см. в разделе [Добавление или изменение метода оплаты](/billing/managing-your-github-billing-settings/adding-or-editing-a-payment-method).
| `billing.change_email` | Изменен адрес электронной почты организации для выставления счетов. Дополнительные сведения см. в разделе [Настройка электронной почты для выставления счетов](/billing/managing-your-github-billing-settings/setting-your-billing-email).
{%- endif %}

## Действия категории `business`

| Действие | Описание
|--------|-------------
| `business.add_admin` | В предприятие добавлен владелец предприятия{% ifversion ghes %} или администратор сайта{% endif %}.
{%- ifversion ghec %} | `business.add_billing_manager` | В предприятие добавлен менеджер по выставлению счетов.
{%- endif %} | `business.add_organization` | В предприятие добавлена организация.
{%- ifversion ghec %} | `business.add_support_entitlee` | Участнику предприятия добавлено право на поддержку. Дополнительные сведения см. в разделе [Управление правами специалистов службы поддержки для вашего предприятия](/admin/user-management/managing-users-in-your-enterprise/managing-support-entitlements-for-your-enterprise).
{%- endif %} {%- ifversion ghes or ghae %} | `business.advanced_security_policy_update` | Владелец предприятия{% ifversion ghes %} или администратор сайта{% endif %} создали, обновили или удалили политику для {% data variables.product.prodname_GH_advanced_security %}. Дополнительные сведения см. в разделе [Применение политик для {% data variables.product.prodname_advanced_security %} на предприятии](/admin/policies/enforcing-policies-for-advanced-security-in-your-enterprise).
{%- endif %} {%- ifversion ghec %} | `business.cancel_admin_invitation` | Отправленное кому-то приглашение стать владельцем{% ifversion ghes %} или администратором сайта{% endif %} предприятия было отменено.
| `business.cancel_billing_manager_invitation` | Отправленное кому-то приглашение стать менеджером предприятия по выставлению счетов было отменено.
{%- endif %} {%- ifversion ghes %} | `business.clear_actions_settings` | Владелец предприятия или администратор сайта очистили параметры политики {% data variables.product.prodname_actions %} для предприятия. Дополнительные сведения см. в разделе [Применение политик для GitHub Actions на вашем предприятии](/admin/policies/enforcing-policies-for-your-enterprise/enforcing-policies-for-github-actions-in-your-enterprise).
{%- endif %} | `business.clear_default_repository_permission` | Владелец предприятия{% ifversion ghes %} или администратор сайта{% endif %} очистили параметр политики разрешений базового репозитория для предприятия. Дополнительные сведения см. в разделе [Применение политики для разрешений базового репозитория](/admin/policies/enforcing-policies-for-your-enterprise/enforcing-repository-management-policies-in-your-enterprise#enforcing-a-policy-for-base-repository-permissions).
| `business.clear_members_can_create_repos`      | Владелец предприятия{% ifversion ghes %} или администратор сайта{% endif %} очистили ограничение на создание репозиториев в организациях на предприятии. Дополнительные сведения см. в разделе [Применение политик управления репозиториями в организации](/admin/policies/enforcing-repository-management-policies-in-your-enterprise#setting-a-policy-for-repository-creation).
| `business.create`                              | Создано предприятие.
{%- ifversion ghec %} | `business.disable_oidc` | Единый вход OIDC был отключен для предприятия. Дополнительные сведения см. в разделе [Настройка OIDC для {% data variables.product.prodname_emus %}](/admin/identity-and-access-management/using-enterprise-managed-users-for-iam/configuring-oidc-for-enterprise-managed-users).
| `business.disable_saml` | Единый вход SAML был отключен для предприятия.
{%- endif %} | `business.disable_two_factor_requirement` | Отключено требование о том, что участники должны включить двухфакторную проверку подлинности для доступа к организации.
{%- ifversion ghec %} | `business.enable_oidc` | Для предприятия включен единый вход OIDC. Дополнительные сведения см. в разделе [Настройка OIDC для {% data variables.product.prodname_emus %}](/admin/identity-and-access-management/using-enterprise-managed-users-for-iam/configuring-oidc-for-enterprise-managed-users).
| `business.enable_saml` | Для предприятия включен единый вход SAML.
{%- endif %} | `business.enable_two_factor_requirement` | Включено требование о том, что участники должны включить двухфакторную проверку подлинности для доступа к организации.
{%- ifversion ghec %} | `business.enterprise_server_license_download` | Скачана лицензия {% data variables.product.prodname_ghe_server %}.
| `business.import_license_usage` | Сведения об использовании лицензий импортированы из экземпляра {% data variables.product.prodname_ghe_server %} в учетную запись предприятия на {% data variables.product.prodname_dotcom_the_website %}.
| `business.invite_admin` | Кому-то отправлено приглашение стать владельцем{% ifversion ghes %} или администратором сайта{% endif %} предприятия.
| `business.invite_billing_manager` | Кому-то отправлено приглашение стать менеджером предприятия по выставлению счетов.
{%- endif %} | `business.members_can_update_protected_branches.clear` | Владелец предприятия{% ifversion ghes %} или администратор сайта{% endif %} удалили политику, определяющую, могут ли участники предприятия обновлять защищенные ветви в репозиториях для отдельных организаций. Администраторы организации могут выбрать, разрешать ли обновление параметров защищенных ветвей.
| `business.members_can_update_protected_branches.disable` | Возможность обновлять правила защиты ветвей для участников предприятия была отключена. Обновлять защищенные ветви могут только владельцы предприятия.
| `business.members_can_update_protected_branches.enable` | Возможность обновлять правила защиты ветвей для участников предприятия была включена. Обновлять защищенные ветви могут владельцы и участники предприятия.
| `business.remove_admin` | Из предприятия удален владелец предприятия{% ifversion ghes %} или администратор сайта{% endif %}.
{%- ifversion ghes %} | `business.referrer_override_enable` | Владелец предприятия или администратор сайта включили переопределение политики источников ссылок. Дополнительные сведения см. в разделе [Настройка политики источников ссылок для предприятия](/admin/configuration/configuring-your-enterprise/configuring-the-referrer-policy-for-your-enterprise).
| `business.referrer_override_disable` | Владелец предприятия или администратор сайта отключили переопределение политики источников ссылок. Дополнительные сведения см. в разделе [Настройка политики источников ссылок для предприятия](/admin/configuration/configuring-your-enterprise/configuring-the-referrer-policy-for-your-enterprise).
{%- endif %} {%- ifversion ghec %} | `business.remove_billing_manager` | Из предприятия удален менеджер по выставлению счетов.
| `business.remove_member` | Из предприятия удален участник.
{%- endif %} | `business.remove_organization` | Из предприятия удалена организация.
{%- ifversion ghec %} | `business.remove_support_entitlee` | Участник предприятия был лишен права на поддержку. Дополнительные сведения см. в разделе [Управление правами специалистов службы поддержки для вашего предприятия](/admin/user-management/managing-users-in-your-enterprise/managing-support-entitlements-for-your-enterprise).
{%- endif %} | `business.rename_slug` | Динамический идентификатор для URL-адреса предприятия был переименован.
{%- ifversion ghec %} | `business.revoke_external_identity` | Внешний идентификатор участника предприятия был отозван.
| `business.revoke_sso_session` | Сеанс единого входа SAML для участника предприятия был отозван.
{%- endif %} {%- ifversion ghec %} | `business.set_actions_fork_pr_approvals_policy` | Изменен параметр запроса утверждений рабочих процессов из общедоступных вилок для предприятия. Дополнительные сведения см. в разделе [Применение политик для {% data variables.product.prodname_actions %} на предприятии](/admin/policies/enforcing-policies-for-your-enterprise/enforcing-policies-for-github-actions-in-your-enterprise#enforcing-a-policy-for-fork-pull-requests-in-your-enterprise)».
{%- endif %} | `business.set_actions_retention_limit` | Период хранения артефактов и журналов {% data variables.product.prodname_actions %} для предприятия был изменен. Дополнительные сведения см. в разделе [Применение политик для {% data variables.product.prodname_actions %} на предприятии](/admin/policies/enforcing-policies-for-your-enterprise/enforcing-policies-for-github-actions-in-your-enterprise#enforcing-a-policy-for-artifact-and-log-retention-in-your-enterprise).
{%- ifversion ghec or ghes %} | `business.set_fork_pr_workflows_policy` | Политика для рабочих процессов в вилках частного репозитория была изменена. Дополнительные сведения см. в разделе {% ifversion ghec %}[Применение политик для {% data variables.product.prodname_actions %} на предприятии](/admin/policies/enforcing-policies-for-your-enterprise/enforcing-policies-for-github-actions-in-your-enterprise#enforcing-a-policy-for-fork-pull-requests-in-private-repositories){% else ifversion ghes > 2.22 %}[Включение рабочих процессов для вилок частного репозитория](/admin/github-actions/enabling-github-actions-for-github-enterprise-server/enforcing-github-actions-policies-for-your-enterprise#enabling-workflows-for-private-repository-forks){% endif %}.
{%- endif %} {%- ifversion audit-log-sso-response-events %} |`business.sso_response` | При попытке участника пройти проверку подлинности на предприятии был создан ответ единого входа SAML. Это событие доступно только через потоковую передачу журналов аудита и REST API.
{%- endif %} {%- ifversion ghes %} | `business.update_actions_settings` | Владелец предприятия или администратор сайта обновили параметры политики {% data variables.product.prodname_actions %} для предприятия. Дополнительные сведения см. в разделе [Применение политик для GitHub Actions на вашем предприятии](/admin/policies/enforcing-policies-for-your-enterprise/enforcing-policies-for-github-actions-in-your-enterprise).
{%- endif %} | `business.update_default_repository_permission` | Обновлен параметр разрешений базового репозитория для всех организаций в организации. Дополнительные сведения см. в разделе [Применение политики для разрешений базового репозитория](/admin/policies/enforcing-policies-for-your-enterprise/enforcing-repository-management-policies-in-your-enterprise#enforcing-a-policy-for-base-repository-permissions).
| `business.update_member_repository_creation_permission` | Обновлен параметр создания репозиториев для предприятия. Дополнительные сведения см. в разделе [Применение политики создания репозиториев](/admin/policies/enforcing-policies-for-your-enterprise/enforcing-repository-management-policies-in-your-enterprise#enforcing-a-policy-for-repository-creation).
| `business.update_member_repository_invitation_permission` | Обновлен параметр политики для участников предприятия, приглашающих внешних участников совместной работы в репозитории. Дополнительные сведения см. в разделе [Применение политики для приглашения внешних участников совместной работы в репозитории](/admin/policies/enforcing-policies-for-your-enterprise/enforcing-repository-management-policies-in-your-enterprise#enforcing-a-policy-for-inviting-outside-collaborators-to-repositories).
{%- ifversion ghec %} | `business.update_saml_provider_settings` | Обновлены параметры поставщика единого входа SAML для предприятия.
{%- endif %}

{% ifversion code-security-audit-log-events %}

## Действия категории `business_advanced_security`

| Действие | Описание
|--------|-------------
| `business_advanced_security.disabled` | {% data variables.product.prodname_GH_advanced_security %} отключен для вашего предприятия. Дополнительные сведения см. в разделе [Управление функциями {% data variables.product.prodname_GH_advanced_security %} для вашего предприятия](/admin/code-security/managing-github-advanced-security-for-your-enterprise/managing-github-advanced-security-features-for-your-enterprise).
| `business_advanced_security.enabled` | Для вашего предприятия включен {% data variables.product.prodname_GH_advanced_security %}. Дополнительные сведения см. в разделе [Управление функциями {% data variables.product.prodname_GH_advanced_security %} для вашего предприятия](/admin/code-security/managing-github-advanced-security-for-your-enterprise/managing-github-advanced-security-features-for-your-enterprise).
| `business_advanced_security.disabled_for_new_repos` | {% data variables.product.prodname_GH_advanced_security %} отключен для новых репозиториев на предприятии. Дополнительные сведения см. в разделе [Управление функциями {% data variables.product.prodname_GH_advanced_security %} для вашего предприятия](/admin/code-security/managing-github-advanced-security-for-your-enterprise/managing-github-advanced-security-features-for-your-enterprise).
| `business_advanced_security.enabled_for_new_repos` | {% data variables.product.prodname_GH_advanced_security %} включен для новых репозиториев на предприятии. Дополнительные сведения см. в разделе [Управление функциями {% data variables.product.prodname_GH_advanced_security %} для вашего предприятия](/admin/code-security/managing-github-advanced-security-for-your-enterprise/managing-github-advanced-security-features-for-your-enterprise).

{% endif %}

{% ifversion code-security-audit-log-events %}

## Действия категории `business_secret_scanning`

| Действие | Описание
|--------|-------------
| `business_secret_scanning.disable` | {% data variables.product.prodname_secret_scanning_caps %} отключен для вашего предприятия. Дополнительные сведения см. в разделе [Управление функциями {% data variables.product.prodname_GH_advanced_security %} для вашего предприятия](/admin/code-security/managing-github-advanced-security-for-your-enterprise/managing-github-advanced-security-features-for-your-enterprise).
| `business_secret_scanning.enable` | Для вашего предприятия включен {% data variables.product.prodname_secret_scanning_caps %}. Дополнительные сведения см. в разделе [Управление функциями {% data variables.product.prodname_GH_advanced_security %} для вашего предприятия](/admin/code-security/managing-github-advanced-security-for-your-enterprise/managing-github-advanced-security-features-for-your-enterprise).
| `business_secret_scanning.disabled_for_new_repos` | {% data variables.product.prodname_secret_scanning_caps %} отключен для новых репозиториев на предприятии. Дополнительные сведения см. в разделе [Управление функциями {% data variables.product.prodname_GH_advanced_security %} для вашего предприятия](/admin/code-security/managing-github-advanced-security-for-your-enterprise/managing-github-advanced-security-features-for-your-enterprise).
| `business_secret_scanning.enabled_for_new_repos` | {% data variables.product.prodname_secret_scanning_caps %} включен для новых репозиториев на предприятии. Дополнительные сведения см. в разделе [Управление функциями {% data variables.product.prodname_GH_advanced_security %} для вашего предприятия](/admin/code-security/managing-github-advanced-security-for-your-enterprise/managing-github-advanced-security-features-for-your-enterprise).

{% endif %}

{%- ifversion secret-scanning-audit-log-custom-patterns %}
## Действия категории `business_secret_scanning_custom_pattern`

Действие                        | Описание
----------------------------- | -----------------------------------------------
| `business_secret_scanning_custom_pattern.create` | Опубликован настраиваемый шаблон на уровне предприятия для сканирования секретов. Дополнительные сведения см. в разделе [Определение пользовательских шаблонов для сканирования секретов](/code-security/secret-scanning/defining-custom-patterns-for-secret-scanning#defining-a-custom-pattern-for-an-enterprise-account).
| `business_secret_scanning_custom_pattern.delete` | Удален настраиваемый шаблон на уровне предприятия для сканирования секретов.
| `business_secret_scanning_custom_pattern.update` | Изменения в настраиваемом шаблоне на уровне предприятия для сканирования секретов сохранены.
{%- endif %}

{% ifversion code-security-audit-log-events %}

## Действия категории `business_secret_scanning_push_protection`

| Действие | Описание
|--------|-------------
| `business_secret_scanning_push_protection.disable` | Защита от push-уведомлений для {% data variables.product.prodname_secret_scanning %} была отключена для вашего предприятия. Дополнительные сведения см. в разделе [Управление функциями {% data variables.product.prodname_GH_advanced_security %} для вашего предприятия](/admin/code-security/managing-github-advanced-security-for-your-enterprise/managing-github-advanced-security-features-for-your-enterprise).
| `business_secret_scanning_push_protection.enable` | Защита от push-уведомлений для {% data variables.product.prodname_secret_scanning %} была включена для вашего предприятия. Дополнительные сведения см. в разделе [Управление функциями {% data variables.product.prodname_GH_advanced_security %} для вашего предприятия](/admin/code-security/managing-github-advanced-security-for-your-enterprise/managing-github-advanced-security-features-for-your-enterprise).
| `business_secret_scanning_push_protection.disabled_for_new_repos` | Защита от push-уведомлений для {% data variables.product.prodname_secret_scanning %} была отключена для новых репозиториев на предприятии. Дополнительные сведения см. в разделе [Управление функциями {% data variables.product.prodname_GH_advanced_security %} для вашего предприятия](/admin/code-security/managing-github-advanced-security-for-your-enterprise/managing-github-advanced-security-features-for-your-enterprise).
| `business_secret_scanning_push_protection.enabled_for_new_repos` | Защита от push-уведомлений для {% data variables.product.prodname_secret_scanning %} была включена для новых репозиториев на предприятии. Дополнительные сведения см. в разделе [Управление функциями {% data variables.product.prodname_GH_advanced_security %} для вашего предприятия](/admin/code-security/managing-github-advanced-security-for-your-enterprise/managing-github-advanced-security-features-for-your-enterprise).

{% endif %}

{% ifversion code-security-audit-log-events %}

## Действия категории `business_secret_scanning_push_protection_custom_message`

| Действие | Описание
|--------|-------------
| `business_secret_scanning_push_protection_custom_message.disable` | Настраиваемое сообщение, активированное при попытке отправки в репозиторий, защищенный с помощью push-уведомлений, было отключено для вашего предприятия. Дополнительные сведения см. в разделе [Управление функциями {% data variables.product.prodname_GH_advanced_security %} для вашего предприятия](/admin/code-security/managing-github-advanced-security-for-your-enterprise/managing-github-advanced-security-features-for-your-enterprise).
| `business_secret_scanning_push_protection_custom_message.enable` | Настраиваемое сообщение, активированное при попытке отправки в репозиторий, защищенный с помощью push-уведомлений, было включено для вашего предприятия. Дополнительные сведения см. в разделе [Управление функциями {% data variables.product.prodname_GH_advanced_security %} для вашего предприятия](/admin/code-security/managing-github-advanced-security-for-your-enterprise/managing-github-advanced-security-features-for-your-enterprise).
| `business_secret_scanning_push_protection_custom_message.update` | Пользовательское сообщение, активированное при попытке отправки в репозиторий, защищенный с помощью push-уведомлений, было обновлено для вашего предприятия. Дополнительные сведения см. в разделе [Управление функциями {% data variables.product.prodname_GH_advanced_security %} для вашего предприятия](/admin/code-security/managing-github-advanced-security-for-your-enterprise/managing-github-advanced-security-features-for-your-enterprise).

{% endif %}

## Действия категории `checks`

| Действие | Описание
|--------|-------------
| `checks.auto_trigger_disabled` | Отключено автоматическое создание наборов проверок в репозитории организации или предприятия. Дополнительные сведения см. в разделе [Обновление параметров репозитория для наборов проверок](/rest/reference/checks#update-repository-preferences-for-check-suites).
| `checks.auto_trigger_enabled` | Включено автоматическое создание наборов проверок в репозитории организации или предприятия. Дополнительные сведения см. в разделе [Обновление параметров репозитория для наборов проверок](/rest/reference/checks#update-repository-preferences-for-check-suites).
{%- ifversion fpt or ghec %} | `checks.delete_logs` | В наборе проверок были удалены журналы.
{%- endif %}

{%- ifversion fpt or ghec %}
## Действия категории `codespaces`

| Действие | Описание
|--------|-------------
| `codespaces.connect` | Запущено кодовое пространство.
| `codespaces.create` | Пользователь [создал кодовое пространство](/github/developing-online-with-codespaces/creating-a-codespace).
| `codespaces.destroy` | Пользователь [удалил кодовое пространство](/github/developing-online-with-codespaces/deleting-a-codespace).
| `codespaces.allow_permissions` | Запущено кодовое пространство с пользовательскими разрешениями из файла `devcontainer.json`.
| `codespaces.attempted_to_create_from_prebuild` | Предпринята попытка создать кодовое пространство из предварительной сборки.
| `codespaces.create_an_org_secret` | Пользователь создал [секрет уровня организации для {% data variables.product.prodname_github_codespaces %}](/github/developing-online-with-codespaces/managing-encrypted-secrets-for-codespaces#about-encrypted-secrets-for-codespaces).
| `codespaces.update_an_org_secret` | Пользователь обновил [секрет уровня организации для {% data variables.product.prodname_github_codespaces %}](/github/developing-online-with-codespaces/managing-encrypted-secrets-for-codespaces#about-encrypted-secrets-for-codespaces).
| `codespaces.remove_an_org_secret` | Пользователь удалил [секрет уровня организации для {% data variables.product.prodname_github_codespaces %}](/github/developing-online-with-codespaces/managing-encrypted-secrets-for-codespaces#about-encrypted-secrets-for-codespaces).
| `codespaces.manage_access_and_security` | Пользователь обновил [список репозиториев, доступных кодовому пространству](/github/developing-online-with-codespaces/managing-access-and-security-for-codespaces).
{%- endif %}

{%- ifversion fpt or ghec %}
## Действия категории `commit_comment`

| Действие | Описание
|--------|-------------
| `commit_comment.destroy` | Удален комментарий фиксации.
| `commit_comment.update` | Обновлен комментарий фиксации.
{%- endif %}

{%- ifversion ghes %}
## Действия категории `config_entry`

| Действие | Описание
|--------|-------------
| `config_entry.create` | Создан параметр конфигурации. Эти события отображаются только в журнале аудита администратора сайта. Тип записанных событий относится к следующему:</br>— параметры и политики предприятия;</br>— разрешения и параметры организации и репозитория;</br>— Git, Git LFS, {% data variables.product.prodname_github_connect %}, {% data variables.product.prodname_registry %}, проект и параметры безопасности кода.
| `config_entry.destroy` | Удален параметр конфигурации. Эти события отображаются только в журнале аудита администратора сайта. Тип записанных событий относится к следующему:</br>— параметры и политики предприятия;</br>— разрешения и параметры организации и репозитория;</br>— Git, Git LFS, {% data variables.product.prodname_github_connect %}, {% data variables.product.prodname_registry %}, проект и параметры безопасности кода.
| `config_entry.update` | Изменен параметр конфигурации. Эти события отображаются только в журнале аудита администратора сайта. Тип записанных событий относится к следующему:</br>— параметры и политики предприятия;</br>— разрешения и параметры организации и репозитория;</br>— Git, Git LFS, {% data variables.product.prodname_github_connect %}, {% data variables.product.prodname_registry %}, проект и параметры безопасности кода.
{%- endif %}

## Действия категории `dependabot_alerts`

| Действие | Описание
|--------|-------------
| `dependabot_alerts.disable` | Владелец предприятия{% ifversion ghes %} или администратор сайта{% endif %} отключили {% data variables.product.prodname_dependabot_alerts %} для всех существующих {% ifversion fpt or ghec %}частных {% endif %}репозиториев. Дополнительные сведения см. в разделе [Управление параметрами безопасности и анализа для организации](/organizations/keeping-your-organization-secure/managing-security-and-analysis-settings-for-your-organization).
| `dependabot_alerts.enable` | Владелец предприятия{% ifversion ghes %} или администратор сайта{% endif %} включили {% data variables.product.prodname_dependabot_alerts %} для всех существующих {% ifversion fpt or ghec %}частных {% endif %}репозиториев.

## Действия категории `dependabot_alerts_new_repos`

| Действие | Описание
|--------|-------------
| `dependabot_alerts_new_repos.disable` | Владелец предприятия{% ifversion ghes %} или администратор сайта{% endif %} отключили {% data variables.product.prodname_dependabot_alerts %} для всех новых {% ifversion fpt or ghec %}частных {% endif %}репозиториев. Дополнительные сведения см. в разделе [Управление параметрами безопасности и анализа для организации](/organizations/keeping-your-organization-secure/managing-security-and-analysis-settings-for-your-organization).
| `dependabot_alerts_new_repos.enable` | Владелец предприятия{% ifversion ghes %} или администратор сайта{% endif %} включили {% data variables.product.prodname_dependabot_alerts %} для всех новых {% ifversion fpt or ghec %}частных {% endif %}репозиториев.

## Действия категории `dependabot_repository_access`

| Действие | Описание
|--------|-------------
| `dependabot_repository_access.repositories_updated` | Обновлен список репозиториев, доступных для {% data variables.product.prodname_dependabot %}.

{%- ifversion fpt or ghec or ghes %}
## Действия категории `dependabot_security_updates`

| Действие | Описание
|--------|-------------
| `dependabot_security_updates.disable` | Владелец предприятия{% ifversion ghes %} или администратор сайта{% endif %} отключили {% data variables.product.prodname_dependabot_security_updates %} для всех существующих репозиториев. Дополнительные сведения см. в разделе [Управление параметрами безопасности и анализа для организации](/organizations/keeping-your-organization-secure/managing-security-and-analysis-settings-for-your-organization).
| `dependabot_security_updates.enable` | Владелец предприятия{% ifversion ghes %} или администратор сайта{% endif %} включили {% data variables.product.prodname_dependabot_security_updates %} для всех существующих репозиториев.

## Действия категории `dependabot_security_updates_new_repos`

| Действие | Описание
|--------|-------------
| `dependabot_security_updates_new_repos.disable` | Владелец предприятия{% ifversion ghes %} или администратор сайта{% endif %} отключили {% data variables.product.prodname_dependabot_security_updates %} для всех новых репозиториев. Дополнительные сведения см. в разделе [Управление параметрами безопасности и анализа для организации](/organizations/keeping-your-organization-secure/managing-security-and-analysis-settings-for-your-organization).
| `dependabot_security_updates_new_repos.enable` | Владелец предприятия{% ifversion ghes %} или администратор сайта{% endif %} включили {% data variables.product.prodname_dependabot_security_updates %} для всех новых репозиториев.
{%- endif %}

## Действия категории `dependency_graph`

| Действие | Описание
|--------|-------------
| `dependency_graph.disable` | Владелец предприятия{% ifversion ghes %} или администратор сайта{% endif %} отключили граф зависимостей для всех существующих репозиториев. Дополнительные сведения см. в разделе [Управление параметрами безопасности и анализа для организации](/organizations/keeping-your-organization-secure/managing-security-and-analysis-settings-for-your-organization).
| `dependency_graph.enable` | Владелец предприятия{% ifversion ghes %} или администратор сайта{% endif %} включили граф зависимостей для всех существующих репозиториев.

## Действия категории `dependency_graph_new_repos`

| Действие | Описание
|--------|-------------
| `dependency_graph_new_repos.disable` | Владелец предприятия{% ifversion ghes %} или администратор сайта{% endif %} отключили граф зависимостей для всех новых репозиториев. Дополнительные сведения см. в разделе [Управление параметрами безопасности и анализа для организации](/organizations/keeping-your-organization-secure/managing-security-and-analysis-settings-for-your-organization).
| `dependency_graph_new_repos.enable` | Владелец предприятия{% ifversion ghes %} или администратор сайта{% endif %} включили граф зависимостей для всех новых репозиториев.

{%- ifversion fpt or ghec %}
## Действия категории `discussion`

| Действие | Описание
|--------|-------------
| `discussion.destroy` | Удалено обсуждение команды.

## Действия категории `discussion_comment`

| Действие | Описание
|--------|-------------
| `discussion_comment.destroy` | [Удален комментарий к записи обсуждения команды](/communities/moderating-comments-and-conversations/managing-disruptive-comments#deleting-a-comment).
| `discussion_comment.update` | [Изменен комментарий к записи обсуждения команды](/communities/moderating-comments-and-conversations/managing-disruptive-comments#editing-a-comment).

## Действия категории `discussion_post`

| Действие | Описание
|--------|-------------
| `discussion_post.destroy` | [Удалена запись обсуждение команды](/organizations/collaborating-with-your-team/editing-or-deleting-a-team-discussion).
| `discussion_post.update` | [Изменена запись обсуждение команды](/organizations/collaborating-with-your-team/editing-or-deleting-a-team-discussion).

## Действия категории `discussion_post_reply`

| Действие | Описание
|--------|-------------
| `discussion_post_reply.destroy` | [Удален ответ к записи обсуждение команды](/communities/moderating-comments-and-conversations/managing-disruptive-comments#deleting-a-comment).
| `discussion_post_reply.update` | [Изменен ответ к записи обсуждение команды](/communities/moderating-comments-and-conversations/managing-disruptive-comments#editing-a-comment).
{%- endif %}

{%- ifversion ghec or ghes %}
## Действия категории `dotcom_connection`

| Действие | Описание
|--------|-------------
| `dotcom_connection.create` | Создано подключение {% data variables.product.prodname_github_connect %} к {% data variables.product.prodname_dotcom_the_website %}.
| `dotcom_connection.destroy` | Удалено подключение {% data variables.product.prodname_github_connect %} к {% data variables.product.prodname_dotcom_the_website %}.
| `dotcom_connection.token_updated` | Обновлено подключение {% data variables.product.prodname_github_connect %} к {% data variables.product.prodname_dotcom_the_website %}.
| `dotcom_connection.upload_license_usage` | Данные по использованию лицензии {% data variables.product.prodname_ghe_server %} загружены в {% data variables.product.prodname_ghe_cloud %} вручную.
| `dotcom_connection.upload_usage_metrics` | Метрики использования {% data variables.product.prodname_ghe_server %} загружены на {% data variables.product.prodname_dotcom_the_website %} вручную.
{%- endif %}

## Действия категории `enterprise`

| Действие | Описание
|--------|-------------
| `enterprise.config.disable_anonymous_git_access`   | Владелец предприятия{% ifversion ghes %} или администратор сайта{% endif %} отключили анонимный доступ на чтение Git для репозиториев на предприятии. Дополнительные сведения см. в разделе [Применение политик управления репозиториями в организации](/admin/policies/enforcing-repository-management-policies-in-your-enterprise#configuring-anonymous-git-read-access).
| `enterprise.config.enable_anonymous_git_access`   | Владелец предприятия{% ifversion ghes %} или администратор сайта{% endif %} включили анонимный доступ на чтение Git для репозиториев на предприятии. Дополнительные сведения см. в разделе [Применение политик управления репозиториями в организации](/admin/policies/enforcing-repository-management-policies-in-your-enterprise#configuring-anonymous-git-read-access).
| `enterprise.config.lock_anonymous_git_access`   | Владелец предприятия{% ifversion ghes %} или администратор сайта{% endif %} заблокировали анонимный доступ на чтение Git, чтобы запретить администраторам репозиториев изменять существующие параметры анонимного доступа на чтение Git для репозиториев на предприятии. Дополнительные сведения см. в разделе [Применение политик управления репозиториями в организации](/admin/policies/enforcing-repository-management-policies-in-your-enterprise#configuring-anonymous-git-read-access).
| `enterprise.config.unlock_anonymous_git_access` | Владелец предприятия{% ifversion ghes %} или администратор сайта{% endif %} разблокировали анонимный доступ на чтение Git, чтобы разрешить администраторам репозиториев изменять существующие параметры анонимного доступа на чтение Git для репозиториев на предприятии. Дополнительные сведения см. в разделе [Применение политик управления репозиториями в организации](/admin/policies/enforcing-repository-management-policies-in-your-enterprise#configuring-anonymous-git-read-access).
| `enterprise.register_self_hosted_runner` | Зарегистрировано новое средство выполнения тестов локального размещения {% data variables.product.prodname_actions %}. Дополнительные сведения см. в разделе [Добавление средства выполнения тестов локального размещения в репозиторий](/actions/hosting-your-own-runners/adding-self-hosted-runners#adding-a-self-hosted-runner-to-a-repository).
| `enterprise.remove_self_hosted_runner` | Удалено средство выполнения тестов локального размещения {% data variables.product.prodname_actions %}. Дополнительные сведения см. в разделе [Удаление средства выполнения тестов из репозитория](/actions/hosting-your-own-runners/removing-self-hosted-runners#removing-a-runner-from-a-repository).
| `enterprise.runner_group_created` | Создана группа средств выполнения тестов локального размещения {% data variables.product.prodname_actions %}. Дополнительные сведения см. в разделе [Создание группы средств выполнения тестов локального размещения для организации](/actions/hosting-your-own-runners/managing-access-to-self-hosted-runners-using-groups#creating-a-self-hosted-runner-group-for-an-organization).
| `enterprise.runner_group_removed` | Удалена группа средств выполнения тестов локального размещения {% data variables.product.prodname_actions %}. Дополнительные сведения см. в разделе [Удаление средства выполнения тестов локального размещения в группу](/actions/hosting-your-own-runners/managing-access-to-self-hosted-runners-using-groups#removing-a-self-hosted-runner-group).
| `enterprise.runner_group_renamed` | Переименована граппу средств выполнения тестов локального размещения {% data variables.product.prodname_actions %}. Дополнительные сведения см. в разделе [Изменение политики доступа для группы средства выполнения тестов локального размещения](/actions/hosting-your-own-runners/managing-access-to-self-hosted-runners-using-groups#changing-the-access-policy-of-a-self-hosted-runner-group).
| `enterprise.runner_group_updated` | Изменена конфигурация средства выполнения тестов локального размещения {% data variables.product.prodname_actions %}. Дополнительные сведения см. в разделе [Изменение политики доступа для группы средства выполнения тестов локального размещения](/actions/hosting-your-own-runners/managing-access-to-self-hosted-runners-using-groups#changing-the-access-policy-of-a-self-hosted-runner-group).
| `enterprise.runner_group_runner_removed` |  Для удаления средства выполнения тестов локального размещения {% data variables.product.prodname_actions %} из группы использовался REST API. Дополнительные сведения см. в разделе [Удаление группы средств выполнения тестов локального размещения для организации](/rest/reference/actions#remove-a-self-hosted-runner-from-a-group-for-an-organization).
| `enterprise.runner_group_runners_added` | Средство выполнения тестов локального размещения {% data variables.product.prodname_actions %} добавлено в группу. Дополнительные сведения см. в разделе [Перемещение средства выполнения тестов локального размещения в группу](/actions/hosting-your-own-runners/managing-access-to-self-hosted-runners-using-groups#moving-a-self-hosted-runner-to-a-group).
| `enterprise.runner_group_runners_updated`|  Обновлен список участников группы средств выполнения тестов {% data variables.product.prodname_actions %}. Дополнительные сведения см. в разделе [Настройка средств выполнения тестов локального размещения в группе для организации](/rest/reference/actions#set-self-hosted-runners-in-a-group-for-an-organization).
{%- ifversion ghec %} | `enterprise.runner_group_visiblity_updated` | Видимость локальной группы средств выполнения тестов локального размещения {% data variables.product.prodname_actions %} обновлена с помощью REST API. Дополнительные сведения см. в разделе [Обновление группы средств выполнения тестов локального размещения для организации](/rest/reference/actions#update-a-self-hosted-runner-group-for-an-organization).
{%- endif %} {%- ifversion ghec or ghes or ghae %} | `enterprise.self_hosted_runner_online` | Приложение средства выполнения тестов {% data variables.product.prodname_actions %} запущено. Можно просматривать только с помощью REST API; не отображается в пользовательском интерфейсе или экспорте JSON/CSV. Дополнительные сведения см. в разделе [Проверка статуса средства выполнения тестов локального размещения](/actions/hosting-your-own-runners/monitoring-and-troubleshooting-self-hosted-runners#checking-the-status-of-a-self-hosted-runner).
| `enterprise.self_hosted_runner_offline` | Приложение средства выполнения тестов {% data variables.product.prodname_actions %} остановлено. Можно просматривать только с помощью REST API; не отображается в пользовательском интерфейсе или экспорте JSON/CSV. Дополнительные сведения см. в разделе [Проверка статуса средства выполнения тестов локального размещения](/actions/hosting-your-own-runners/monitoring-and-troubleshooting-self-hosted-runners#checking-the-status-of-a-self-hosted-runner).
{%- endif %} {%- ifversion ghec or ghes %} | `enterprise.self_hosted_runner_updated` | Приложение средства выполнения тестов {% data variables.product.prodname_actions %} обновлено. Можно просматривать с помощью REST API и пользовательского интерфейса; не отображается в экспорте JSON/CSV. Дополнительные сведения см. в статье "[Сведения о локально размещенных средствах выполнения](/actions/hosting-your-own-runners/about-self-hosted-runners#about-self-hosted-runners)."
{%- endif %}

{%- ifversion ghec %}
## Действия категории `enterprise_domain`

| Действие | Описание
|--------|-------------
| `enterprise_domain.approve` | Для предприятия утвержден корпоративный домен. Дополнительные сведения см. в разделе [Утверждение домена для корпоративной учетной записи](/admin/configuration/configuring-your-enterprise/verifying-or-approving-a-domain-for-your-enterprise#approving-a-domain-for-your-enterprise-account).
| `enterprise_domain.create` | Предприятию добавлен корпоративный домен. Дополнительные сведения см. в разделе [Проверка домена для корпоративной учетной записи](/admin/configuration/configuring-your-enterprise/verifying-or-approving-a-domain-for-your-enterprise#verifying-a-domain-for-your-enterprise-account).
| `enterprise_domain.destroy` | Из предприятия удален корпоративный домен. Дополнительные сведения см. в разделе [Удаление утвержденного или проверенного домена](/admin/configuration/configuring-your-enterprise/verifying-or-approving-a-domain-for-your-enterprise#removing-an-approved-or-verified-domain).
| `enterprise_domain.verify` | Корпоративный домен для предприятия проверен. Дополнительные сведения см. в разделе [Проверка домена для корпоративной учетной записи](/admin/configuration/configuring-your-enterprise/verifying-or-approving-a-domain-for-your-enterprise#verifying-a-domain-for-your-enterprise-account).

## Действия категории `enterprise_installation`

| Действие | Описание
|--------|-------------
| `enterprise_installation.create` | Создано {% data variables.product.prodname_github_app %}, связанное с корпоративным подключением {% data variables.product.prodname_github_connect %}.
| `enterprise_installation.destroy` | Удалено {% data variables.product.prodname_github_app %}, связанное с корпоративным подключением {% data variables.product.prodname_github_connect %}.
| `enterprise_installation.token_updated` | Обновлен токен, принадлежащий {% data variables.product.prodname_github_app %}, связанному с корпоративным подключением {% data variables.product.prodname_github_connect %}.
{%- endif %}

{%- ifversion fpt or ghec %}
## Действия категории `environment`

| Действие | Описание
|--------|-------------
| `environment.add_protection_rule` | С помощью API создано правило защиты среды {% data variables.product.prodname_actions %}. Дополнительные сведения см. в разделе [Правила защиты среды](/actions/deployment/targeting-different-environments/using-environments-for-deployment#environment-protection-rules).
| `environment.create_actions_secret` | С помощью API создан секрет для среды {% data variables.product.prodname_actions %}. Дополнительную информацию см. в разделе [Секреты среды](/actions/deployment/targeting-different-environments/using-environments-for-deployment#environment-secrets).
| `environment.delete` | С помощью API удалена среда. Дополнительные сведения см. в разделе [Удаление среды](/actions/deployment/targeting-different-environments/using-environments-for-deployment#deleting-an-environment).
| `environment.remove_actions_secret` | С помощью API удален секрет для среды {% data variables.product.prodname_actions %}. Дополнительную информацию см. в разделе [Секреты среды](/actions/deployment/targeting-different-environments/using-environments-for-deployment#environment-secrets).
| `environment.remove_protection_rule` | С помощью API удалено правило защиты среды {% data variables.product.prodname_actions %}. Дополнительные сведения см. в разделе [Правила защиты среды](/actions/deployment/targeting-different-environments/using-environments-for-deployment#environment-protection-rules).
| `environment.update_actions_secret` | С помощью API обновлен секрет для среды {% data variables.product.prodname_actions %}. Дополнительную информацию см. в разделе [Секреты среды](/actions/deployment/targeting-different-environments/using-environments-for-deployment#environment-secrets).
| `environment.update_protection_rule` | С помощью API обновлено правило защиты среды {% data variables.product.prodname_actions %}. Дополнительные сведения см. в разделе [Правила защиты среды](/actions/deployment/targeting-different-environments/using-environments-for-deployment#environment-protection-rules).
{%- endif %}

{%- ifversion ghae %}
## Действия категории `external_group`

| Действие | Описание
|--------|-------------
| `external_group.delete` | Удалена группы Okta. Дополнительные сведения см. в разделе [Сопоставление групп Okta с командами](/admin/identity-and-access-management/configuring-authentication-and-provisioning-with-your-identity-provider/mapping-okta-groups-to-teams).
| `external_group.link` | Группа Okta сопоставлена с командой {% data variables.product.prodname_ghe_managed %}. Дополнительные сведения см. в разделе [Сопоставление групп Okta с командами](/admin/identity-and-access-management/configuring-authentication-and-provisioning-with-your-identity-provider/mapping-okta-groups-to-teams).
| `external_group.provision` | Группа Okta сопоставлена с командой в {% data variables.product.prodname_ghe_managed %}. Дополнительные сведения см. в разделе [Сопоставление групп Okta с командами](/admin/identity-and-access-management/configuring-authentication-and-provisioning-with-your-identity-provider/mapping-okta-groups-to-teams).
| `external_group.unlink` | Сопоставление группы Okta с командой {% data variables.product.prodname_ghe_managed %} удалено. Дополнительные сведения см. в разделе [Сопоставление групп Okta с командами](/admin/identity-and-access-management/configuring-authentication-and-provisioning-with-your-identity-provider/mapping-okta-groups-to-teams).
| `external_group.update` | Обновлены параметры группы Okta. Дополнительные сведения см. в разделе [Сопоставление групп Okta с командами](/admin/identity-and-access-management/configuring-authentication-and-provisioning-with-your-identity-provider/mapping-okta-groups-to-teams).

## Действия категории `external_identity`
| Действие | Описание
|--------|-------------
| `external_identity.deprovision` | Пользователь был удален из группы Okta, а затем отозван из {% data variables.product.prodname_ghe_managed %}. Дополнительные сведения см. в разделе [Сопоставление групп Okta с командами](/admin/identity-and-access-management/configuring-authentication-and-provisioning-with-your-identity-provider/mapping-okta-groups-to-teams).
| `external_identity.provision` | Пользователь Okta был добавлен в группу Okta, а затем подготовлен к работе в сопоставленной команде в {% data variables.product.prodname_ghe_managed %}. Дополнительные сведения см. в разделе [Сопоставление групп Okta с командами](/admin/identity-and-access-management/configuring-authentication-and-provisioning-with-your-identity-provider/mapping-okta-groups-to-teams).
| `external_identity.update` | Обновлены параметры пользователя Okta. Дополнительные сведения см. в разделе [Сопоставление групп Okta с командами](/admin/identity-and-access-management/configuring-authentication-and-provisioning-with-your-identity-provider/mapping-okta-groups-to-teams).
{%- endif %}

## Действия категории `gist`

| Действие | Описание
|--------|-------------
| `gist.create` | Создан gist.
| `gist.destroy` | Удален gist.
| `gist.visibility_change` | Видимость gist была изменена.

{% ifversion git-events-audit-log %}
## Действия категории `git`

{% ifversion enable-git-events %} Прежде чем вы увидите действия категории `git`, необходимо включить события Git в журнале аудита. Дополнительные сведения см. в разделе [Настройка журнала аудита для предприятия](/admin/monitoring-activity-in-your-enterprise/reviewing-audit-logs-for-your-enterprise/configuring-the-audit-log-for-your-enterprise#managing-git-events-in-the-audit-log).
{% endif %}

{% data reusables.audit_log.git-events-not-in-search-results %}

| Действие | Описание
|--------|-------------
| `git.clone` | Клонирован репозиторий.
| `git.fetch` | Из репозитория были получены изменения.
| `git.push`  | В репозиторий были отправлены изменения.
{% endif %}

## Действия категории `hook`

| Действие | Описание
|--------|-------------
{%- ifversion ghes or ghae %} | `hook.active_changed`             | Обновлено активное состояние перехватчика.
{%- endif %} | `hook.config_changed`             | Конфигурация перехватчика была изменена.
| `hook.create`                     | Добавлен новый перехватчик.
| `hook.destroy`                     | Перехватчик удален.
| `hook.events_changed`             | Изменились настроенные события перехватчика.

## Действия категории `integration`

| Действие | Описание
|--------|-------------
| `integration.create` | Создана интеграция.
| `integration.destroy` | Удалена интеграция.
| `integration.manager_added` | Участник предприятия или организации был добавлен в качестве диспетчера интеграции.
| `integration.manager_removed` | Участник предприятия или организации был удален с позиции диспетчера интеграции.
| `integration.transfer` | Владение интеграцией было передано другому пользователю или организации.
| `integration.remove_client_secret` | Удален секрет клиента для интеграции.
| `integration.revoke_all_tokens` | Все токены пользователей для интеграции были запрошены для отзыва.
| `integration.revoke_tokens` | Токены для интеграции были отозваны.

## Действия категории `integration_installation`

| Действие | Описание
|--------|-------------
| `integration_installation.contact_email_changed` | Контактный адрес электронной почты для интеграции был изменен.
| `integration_installation.create` | Интеграция установлена.
| `integration_installation.destroy` | Интеграция удалена.
| `integration_installation.repositories_added` | В интеграцию были добавлены репозитории.
| `integration_installation.repositories_removed` | Из интеграции были удалены репозитории.
{%- ifversion fpt or ghec %} | `integration_installation.suspend` | Интеграция была приостановлена.
| `integration_installation.unsuspend` | Приостановка интеграции была отменена.
{%- endif %} | `integration_installation.version_updated` | Обновлены разрешения для интеграции.

## Действия категории `integration_installation_request`

| Действие | Описание
|--------|-------------
| `integration_installation_request.create` | Участник попросил, чтобы владелец установил интеграцию для использования на предприятии или в организации.
| `integration_installation_request.close` | Запрос на установку интеграции для использования на предприятии или в организации был утвержден или отклонен владельцем либо отменен участником, который его создал.

{%- ifversion ghec or ghae %}
## Действия категории `ip_allow_list`

| Действие | Описание
|--------|-------------
| `ip_allow_list.enable`               | Включен список разрешенных IP-адресов.
| `ip_allow_list.enable_for_installed_apps` | Включен список разрешенных IP-адресов для установленных {% data variables.product.prodname_github_apps %}.
| `ip_allow_list.disable`              | Список разрешенных IP-адресов отключен.
| `ip_allow_list.disable_for_installed_apps` | Список разрешенных IP-адресов для установленных {% data variables.product.prodname_github_apps %} отключен.

## Действия категории `ip_allow_list_entry`

| Действие | Описание
|--------|-------------
| `ip_allow_list_entry.create` | В список разрешенных IP-адресов добавлен IP-адрес.
| `ip_allow_list_entry.update` | IP-адрес или его описание были изменены.
| `ip_allow_list_entry.destroy` | Из списка разрешенных IP-адресов был удален IP-адрес.
{%- endif %}

## Действия категории `issue`

| Действие | Описание
|--------|-------------
| `issue.destroy`                      | Проблема удалена из репозитория. Дополнительные сведения см. в разделе [Удаление проблемы](/issues/tracking-your-work-with-issues/deleting-an-issue).
| `issue.pinned`                       | Проблема закреплена в репозитории. Дополнительные сведения см. в разделе [Закрепление проблемы в репозитории](/issues/tracking-your-work-with-issues/pinning-an-issue-to-your-repository).
| `issue.transfer`                     | Проблема передана в другой репозиторий. Дополнительные сведения см. в разделе [Перенос проблемы в другой репозиторий](/issues/tracking-your-work-with-issues/transferring-an-issue-to-another-repository).
| `issue.unpinned`                     | Закрепление проблемы в репозитории отменено. Дополнительные сведения см. в разделе [Закрепление проблемы в репозитории](/issues/tracking-your-work-with-issues/pinning-an-issue-to-your-repository).

## Действия категории `issue_comment`

| Действие | Описание
|--------|-------------
| `issue_comment.destroy`  | Комментарий к проблеме удален из репозитория.
| `issue_comment.pinned`   | Комментарий к проблеме закреплен в репозитория.
| `issue_comment.unpinned` | Закрепление комментария к проблеме в репозитории отменено.
| `issue_comment.update`   | Комментарий к проблеме (кроме исходного) был изменен.

## Действия категории `issues`

| Действие | Описание
|--------|-------------
| `issues.deletes_disabled` | Возможность удаления проблем для участников предприятия была отключена. Участники не могут удалять проблемы ни в одной из организаций на предприятии. Дополнительные сведения см. в разделе [Применение политики удаления проблем](/admin/policies/enforcing-policies-for-your-enterprise/enforcing-repository-management-policies-in-your-enterprise#enforcing-a-policy-for-deleting-issues).
| `issues.deletes_enabled` | Возможность удаления проблем для участников предприятия была включена. Участники могут удалять проблемы в любой организации на предприятии. Дополнительные сведения см. в разделе [Применение политики удаления проблем](/admin/policies/enforcing-policies-for-your-enterprise/enforcing-repository-management-policies-in-your-enterprise#enforcing-a-policy-for-deleting-issues).
| `issues.deletes_policy_cleared` | Владелец предприятия{% ifversion ghes %} или администратор сайта{% endif %} очистили параметр политики и, таким образом, разрешил участникам удалять проблемы на предприятии. Дополнительные сведения см. в разделе [Применение политики удаления проблем](/admin/policies/enforcing-policies-for-your-enterprise/enforcing-repository-management-policies-in-your-enterprise#enforcing-a-policy-for-deleting-issues).

{%- ifversion fpt or ghec %}
## Действия категории `marketplace_agreement_signature`

| Действие | Описание
|--------|-------------
| `marketplace_agreement_signature.create` | Пользователь подписал соглашение с разработком {% data variables.product.prodname_marketplace %} от имени организации.

## Действия категории `marketplace_listing`

| Действие | Описание
|--------|-------------
| `marketplace_listing.approve` | Описание утверждено для включения в {% data variables.product.prodname_marketplace %}.
| `marketplace_listing.change_category` | Изменена категория описания приложения в {% data variables.product.prodname_marketplace %}.
| `marketplace_listing.create` | Создано описание приложения в {% data variables.product.prodname_marketplace %}.
| `marketplace_listing.delist` | Описание удалено из {% data variables.product.prodname_marketplace %}.
| `marketplace_listing.redraft` | Описание возвращено в состояние черновика.
| `marketplace_listing.reject` | Описание не принято для включения в {% data variables.product.prodname_marketplace %}.
{%- endif %}

## Действия категории `members_can_create_pages`

| Действие | Описание
|--------|-------------
| `members_can_create_pages.disable` | Возможность публикации {% data variables.product.prodname_pages %} для участников была отключена. Участники не могут публиковать {% data variables.product.prodname_pages %} в организации. Дополнительные сведения см. в разделе [Управление публикацией сайтов GitHub Pages для организации](/organizations/managing-organization-settings/managing-the-publication-of-github-pages-sites-for-your-organization).
| `members_can_create_pages.enable` | Возможность публикации {% data variables.product.prodname_pages %} для участников была включена. Участники могут публиковать {% data variables.product.prodname_pages %} в организации. Дополнительные сведения см. в разделе [Управление публикацией сайтов GitHub Pages для организации](/organizations/managing-organization-settings/managing-the-publication-of-github-pages-sites-for-your-organization).

## Действия категории `members_can_create_private_pages`

| Действие | Описание
|--------|-------------
| `members_can_create_private_pages.disable` | Возможность публикации частных {% data variables.product.prodname_pages %} для участников была отключена. Участники не могут публиковать частные {% data variables.product.prodname_pages %} в организации. Дополнительные сведения см. в разделе [Управление публикацией сайтов GitHub Pages для организации](/organizations/managing-organization-settings/managing-the-publication-of-github-pages-sites-for-your-organization).
| `members_can_create_private_pages.enable` |  Возможность публикации частных {% data variables.product.prodname_pages %} для участников была включена. Участники могут публиковать частные {% data variables.product.prodname_pages %} в организации. Дополнительные сведения см. в разделе [Управление публикацией сайтов GitHub Pages для организации](/organizations/managing-organization-settings/managing-the-publication-of-github-pages-sites-for-your-organization).

## Действия категории `members_can_create_public_pages`

| Действие | Описание
|--------|-------------
| `members_can_create_public_pages.disable` |  Возможность публикации общедоступных {% data variables.product.prodname_pages %} для участников была отключена. Участники не могут публиковать общедоступные {% data variables.product.prodname_pages %} в организации. Дополнительные сведения см. в разделе [Управление публикацией сайтов GitHub Pages для организации](/organizations/managing-organization-settings/managing-the-publication-of-github-pages-sites-for-your-organization).
| `members_can_create_public_pages.enable` |  Возможность публикации общедоступных {% data variables.product.prodname_pages %} для участников была включена. Участники могут публиковать общедоступные {% data variables.product.prodname_pages %} в организации. Дополнительные сведения см. в разделе [Управление публикацией сайтов GitHub Pages для организации](/organizations/managing-organization-settings/managing-the-publication-of-github-pages-sites-for-your-organization).

{%- ifversion ghec or ghes or ghae %}
## Действия категории `members_can_delete_repos`

| Действие | Описание
|--------|-------------
| `members_can_delete_repos.clear` | Владелец предприятия{% ifversion ghes %} или администратор сайта{% endif %} очистили параметр политики для удаления или передачи репозиториев в любых организациях на предприятии. Дополнительные сведения см. в разделе [Применение политики удаления и передачи репозиториев](/admin/policies/enforcing-policies-for-your-enterprise/enforcing-repository-management-policies-in-your-enterprise#enforcing-a-policy-for-repository-deletion-and-transfer).
| `members_can_delete_repos.disable` | Возможность удаления репозиториев для участников предприятия была отключена. Участники не могут удалять или передавать репозитории в каких-либо организациях на предприятии. Дополнительные сведения см. в разделе [Применение политики удаления и передачи репозиториев](/admin/policies/enforcing-policies-for-your-enterprise/enforcing-repository-management-policies-in-your-enterprise#enforcing-a-policy-for-repository-deletion-and-transfer).
| `members_can_delete_repos.enable` |  Возможность удаления репозиториев для участников предприятия была включена. Участники могут удалять или передавать репозитории в любых организациях на предприятии. Дополнительные сведения см. в разделе [Применение политики удаления и передачи репозиториев](/admin/policies/enforcing-policies-for-your-enterprise/enforcing-repository-management-policies-in-your-enterprise#enforcing-a-policy-for-repository-deletion-and-transfer).

## Действия категории `members_can_view_dependency_insights`

| Действие | Описание
|--------|-------------
| `members_can_view_dependency_insights.clear` | Владелец предприятия{% ifversion ghes %} или администратор сайта{% endif %} очистили параметр политики для просмотра аналитических сведений о зависимостях в любых организациях на предприятии.{% ifversion ghec %} Дополнительные сведения см. в разделе [Применение политики отображения аналитических сведений о зависимостях](/admin/policies/enforcing-policies-for-your-enterprise/enforcing-policies-for-dependency-insights-in-your-enterprise).{% endif %}
| `members_can_view_dependency_insights.disable` | Возможность просмотра аналитических сведений о зависимостях для участников предприятия была отключена. Участники не могут просматривать аналитические сведения о зависимостях ни в каких организациях на предприятии.{% ifversion ghec %} Дополнительные сведения см. в разделе [Применение политики отображения аналитических сведений о зависимостях](/admin/policies/enforcing-policies-for-your-enterprise/enforcing-policies-for-dependency-insights-in-your-enterprise).{% endif %}
| `members_can_view_dependency_insights.enable` |  Возможность просмотра аналитических сведений о зависимостях для участников предприятия была включена. Участники могут просматривать аналитические сведения о зависимостях в любых организациях на предприятии.{% ifversion ghec %} Дополнительные сведения см. в разделе [Применение политики отображения аналитических сведений о зависимостях](/admin/policies/enforcing-policies-for-your-enterprise/enforcing-policies-for-dependency-insights-in-your-enterprise).{% endif %}

## Действия категории `migration`

| Действие | Описание
|--------|-------------
| `migration.create` | Создан файл миграции для передачи данных из *исходного* расположения (например, организации {% data variables.product.prodname_dotcom_the_website %} или экземпляра {% data variables.product.prodname_ghe_server %}) в *целевой* экземпляр {% data variables.product.prodname_ghe_server %}.
| `migration.destroy_file` | Файл миграции для передачи данных из *исходного* расположения (например, организации {% data variables.product.prodname_dotcom_the_website %} или экземпляра {% data variables.product.prodname_ghe_server %}) в *целевой* экземпляр {% data variables.product.prodname_ghe_server %} был удален.
|  `migration.download` | Файл миграции для передачи данных из *исходного* расположения (например, организации {% data variables.product.prodname_dotcom_the_website %} или экземпляра {% data variables.product.prodname_ghe_server %}) в *целевой* экземпляр {% data variables.product.prodname_ghe_server %} загружен.
{%- endif %}

## Действия категории `oauth_access`

| Действие | Описание
|--------|-------------
`oauth_access.create`   | Для учетной записи пользователя был создан [маркер доступа OAuth][] . Дополнительные сведения см. в разделе [Создание {% data variables.product.pat_generic %}](/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token).
`oauth_access.destroy`  | [Маркер доступа OAuth][] был удален из учетной записи пользователя.

  [Маркер доступа OAuth]: /developers/apps/building-oauth-apps/authorizing-oauth-apps

## Действия категории `oauth_application`

| Действие | Описание
|--------|-------------
| `oauth_application.create`           | Создано [приложение OAuth][] для учетной записи пользователя или организации.
| `oauth_application.destroy`          | [Приложение OAuth][] было удалено из учетной записи пользователя или организации.
{%- ifversion fpt or ghec %} | `oauth_application.generate_client_secret`   | Создан секретный ключ [приложения OAuth][].
| `oauth_application.remove_client_secret`     | Удален секретный ключ [приложения OAuth][].
{%- endif %} | `oauth_application.reset_secret`      | Сброшен секретный ключ [приложения OAuth][].
{%- ifversion fpt or ghec %} | `oauth_application.revoke_all_tokens` | Все токены пользователей для [приложения OAuth][] были запрошены для отзыва.
{%- endif %} | `oauth_application.revoke_tokens`     | Токены для [приложения OAuth][] были отозваны.
| `oauth_application.transfer`          | [Приложение OAuth][] было передано из одной учетной записи пользователя или организации в другую.
{%- ifversion ghes or ghae %} | `oauth_application.unsuspend`         | [Приложение OAuth][] для учетной записи пользователя или организации было разблокировано.
{%- endif %}

  [Приложение OAuth]: /guides/basics-of-authentication/#registering-your-app

{%- ifversion fpt or ghec %}
## Действия категории `oauth_authorization`

| Действие | Описание
|--------|-------------
| `oauth_authorization.create`          | Создана авторизация для приложения OAuth. Дополнительные сведения см. в разделе [Авторизация приложений OAuth](/authentication/keeping-your-account-and-data-secure/authorizing-oauth-apps).
| `oauth_authorization.destroy`          | Удалена авторизация для приложения OAuth. Дополнительные сведения см. в разделе [Авторизация приложений OAuth](/authentication/keeping-your-account-and-data-secure/authorizing-oauth-apps).
| `oauth_authorization.update`          | Обновлена авторизация для приложения OAuth. Дополнительные сведения см. в разделе [Авторизация приложений OAuth](/authentication/keeping-your-account-and-data-secure/authorizing-oauth-apps).
{%- endif %}

## Действия категории `org`

| Действие | Описание
|--------|-------------
| `org.accept_business_invitation` | Отправленное организации приглашение присоединиться к предприятию было принято. {% ifversion ghec %}Дополнительные сведения см. в разделе [Приглашение организации присоединиться к корпоративной учетной записи](/admin/user-management/managing-organizations-in-your-enterprise/adding-organizations-to-your-enterprise#inviting-an-organization-to-join-your-enterprise-account).{% endif %}
| `org.add_billing_manager` | В организацию добавлен менеджер по выставлению счетов. {% ifversion fpt or ghec %}Дополнительные сведения см. в статье [Добавление менеджера по выставлению счетов в организацию](/organizations/managing-peoples-access-to-your-organization-with-roles/adding-a-billing-manager-to-your-organization).{% endif %}
| `org.add_member` | Пользователь присоединился к организации.
| `org.advanced_security_disabled_for_new_repos` | {% data variables.product.prodname_GH_advanced_security %} была отключена для новых репозиториев в организации.
| `org.advanced_security_disabled_on_all_repos` | {% data variables.product.prodname_GH_advanced_security %} была отключена для всех репозиториев в организации.
| `org.advanced_security_enabled_for_new_repos` | {% data variables.product.prodname_GH_advanced_security %} была включена для новых репозиториев в организации.
| `org.advanced_security_enabled_on_all_repos` | {% data variables.product.prodname_GH_advanced_security %} была включена для всех репозиториев в организации.
| `org.advanced_security_policy_selected_member_disabled` | Владелец предприятия запретил включение функций {% data variables.product.prodname_GH_advanced_security %} для репозиториев, принадлежащих организации. {% data reusables.advanced-security.more-information-about-enforcement-policy %}
| `org.advanced_security_policy_selected_member_enabled` | Владелец предприятия разрешил включение функций {% data variables.product.prodname_GH_advanced_security %} для репозиториев, принадлежащих организации. {% data reusables.advanced-security.more-information-about-enforcement-policy %}
| `org.advanced_security_policy_update` | Владелец организации обновил политики для {% data variables.product.prodname_GH_advanced_security %} на предприятии. {% data reusables.advanced-security.more-information-about-enforcement-policy %}
| `org.async_delete` | Пользователь инициировал фоновое задание для удаления организации.
{%- ifversion ghec %} | `org.audit_log_export` | Владелец организации создал экспорт журнала аудита организации. Если экспорт включал запрос, журнал перечислит использованный запрос и количество записей в журнале аудита, соответствующих указанному запросу. Дополнительные сведения см. в разделе [Экспорт действий из журнала аудита для предприятия](/admin/monitoring-activity-in-your-enterprise/reviewing-audit-logs-for-your-enterprise/exporting-audit-log-activity-for-your-enterprise).
{%- endif %} | `org.block_user` | Владелец организации запретил пользователю доступ к репозиториям организации. {% ifversion fpt or ghec %}Дополнительные сведения см. в разделе [Блокировка пользователя из организации](/communities/maintaining-your-safety-on-github/blocking-a-user-from-your-organization).{% endif %} | `org.cancel_business_invitation` | Отправленное организации приглашение присоединиться к предприятию было отозвано. {% ifversion ghec %}Дополнительные сведения см. в разделе [Приглашение организации присоединиться к корпоративной учетной записи](/admin/user-management/managing-organizations-in-your-enterprise/adding-organizations-to-your-enterprise#inviting-an-organization-to-join-your-enterprise-account).{% endif %} | `org.cancel_invitation` | Отправленное пользователю приглашение присоединиться к организации было отозвано.
| `org.clear_actions_settings` |  Владелец организации очистил параметры политики {% data variables.product.prodname_actions %} для организации. Дополнительные сведения см. в разделе [Управление разрешениями GitHub Actions для организации](/organizations/managing-organization-settings/disabling-or-limiting-github-actions-for-your-organization#managing-github-actions-permissions-for-your-organization).
| `org.clear_default_repository_permission` | Владелец организации очистил параметр политики разрешений базового репозитория для организации. Дополнительные сведения см. в разделе [Настройка базовых разрешений](/organizations/managing-access-to-your-organizations-repositories/setting-base-permissions-for-an-organization#setting-base-permissions).
| `org.clear_member_team_creation_permission` | Владелец организации очистил новый параметр создания команд для организации. Дополнительные сведения см. в разделе [Настройка разрешений для создания команды в организации](/organizations/managing-organization-settings/setting-team-creation-permissions-in-your-organization).
| `org.clear_reader_discussion_creation_permission` | Владелец организации очистил новый параметр создания обсуждений для организации. {% ifversion fpt or ghec %}Дополнительные сведения см. в разделе [Разрешение или запрет создания обсуждений пользователям с доступом на чтение](/organizations/managing-organization-settings/managing-discussion-creation-for-repositories-in-your-organization).{% endif %} | `org.clear_members_can_create_repos`                 | Владелец организации очистил ограничение на создание репозиториев в организации. Дополнительные сведения см. в разделе [Ограничение создания репозиториев в организации](/organizations/managing-organization-settings/restricting-repository-creation-in-your-organization).
| `org.clear_members_can_invite_outside_collaborators` | Владелец организации очистил политику приглашения внешних участников совместной работы для организации. Дополнительные сведения см. в разделе [Настройка разрешений для добавления сторонних участников совместной работы](/organizations/managing-organization-settings/setting-permissions-for-adding-outside-collaborators).
| `org.clear_new_repository_default_branch_setting`    | Владелец организации очистил имя ветви по умолчанию для новых репозиториев в организации. Дополнительные сведения см. в статье [Настройка имени ветви по умолчанию](/organizations/managing-organization-settings/managing-the-default-branch-name-for-repositories-in-your-organization#setting-the-default-branch-name).
{%- ifversion fpt or ghec %} | `org.codespaces_trusted_repo_access_granted`         | {% data variables.product.prodname_github_codespaces %} был предоставлен доступ доверенного репозитория ко всем остальным репозиториям в организации. Дополнительные сведения см. в разделе [Управление доступом к репозиторию для кодовых пространств организации](/codespaces/managing-codespaces-for-your-organization/managing-repository-access-for-your-organizations-codespaces).
| `org.codespaces_trusted_repo_access_revoked`         | Предоставленный {% data variables.product.prodname_github_codespaces %} доступ доверенного репозитория ко всем остальным репозиториям в организации был отозван. Дополнительные сведения см. в разделе [Управление доступом к репозиторию для кодовых пространств организации](/codespaces/managing-codespaces-for-your-organization/managing-repository-access-for-your-organizations-codespaces).
{%- endif %}                                                                                                             | | `org.config.disable_collaborators_only` | Ограничение взаимодействия для участников совместной работы пределами организации было отключено. {% ifversion fpt or ghec %}Дополнительные сведения см. в разделе [Ограничение взаимодействий в организации](/communities/moderating-comments-and-conversations/limiting-interactions-in-your-organization#limiting-interactions-in-your-organization).{% endif %} | `org.config.disable_contributors_only` | Ограничение взаимодействий для предыдущих участников совместной работы пределами организации было отключено. {% ifversion fpt or ghec %}Дополнительные сведения см. в разделе [Ограничение взаимодействий в организации](/communities/moderating-comments-and-conversations/limiting-interactions-in-your-organization#limiting-interactions-in-your-organization).{% endif %} | `org.config.disable_sockpuppet_disallowed` | Ограничение взаимодействий для существующих пользователей пределами организации было отключено. {% ifversion fpt or ghec %}Дополнительные сведения см. в разделе [Ограничение взаимодействий в организации](/communities/moderating-comments-and-conversations/limiting-interactions-in-your-organization#limiting-interactions-in-your-organization).{% endif %} | `org.config.enable_collaborators_only` | Ограничение взаимодействий для участников совместной работы пределами организации было включено. {% ifversion fpt or ghec %}Дополнительные сведения см. в разделе [Ограничение взаимодействий в организации](/communities/moderating-comments-and-conversations/limiting-interactions-in-your-organization#limiting-interactions-in-your-organization).{% endif %} | `org.config.enable_contributors_only` | Ограничение взаимодействий для предыдущих участников совместной работы пределами организации было включено. {% ifversion fpt or ghec %}Дополнительные сведения см. в разделе [Ограничение взаимодействий в организации](/communities/moderating-comments-and-conversations/limiting-interactions-in-your-organization#limiting-interactions-in-your-organization).{% endif %} | `org.config.enable_sockpuppet_disallowed` | Ограничение взаимодействий для существующих пользователей пределами организации было включено. {% ifversion fpt or ghec %}Дополнительные сведения см. в разделе [Ограничение взаимодействий в организации](/communities/moderating-comments-and-conversations/limiting-interactions-in-your-organization#limiting-interactions-in-your-organization).{% endif %} | `org.confirm_business_invitation` | Отправленное организации приглашение присоединиться к предприятию было подтверждено. {% ifversion ghec %}Дополнительные сведения см. в разделе [Приглашение организации присоединиться к корпоративной учетной записи](/admin/user-management/managing-organizations-in-your-enterprise/adding-organizations-to-your-enterprise#inviting-an-organization-to-join-your-enterprise-account).{% endif %} | `org.create` | Создана организация. Дополнительные сведения см. в статье "[Создание новой организации с нуля](/organizations/collaborating-with-groups-in-organizations/creating-a-new-organization-from-scratch)".
{%- ifversion fpt or ghec or ghes %} | `org.create_actions_secret` | Для организации был создан секрет {% data variables.product.prodname_actions %}. Дополнительные сведения см. в статье [Создание зашифрованных секретов для организации](/actions/reference/encrypted-secrets#creating-encrypted-secrets-for-an-organization).
{%- endif %} | `org.create_integration_secret` | Для организации был создан секрет интеграции {% data variables.product.prodname_dependabot %}{% ifversion fpt or ghec %} или {% data variables.product.prodname_github_codespaces %}{% endif %}.
| `org.delete`       | Организация была удалена фоновым заданием, инициированным пользователем.
| `org.disable_member_team_creation_permission` | Владелец организации разрешил создавать команды только владельцам. Дополнительные сведения см. в разделе [Настройка разрешений для создания команды в организации](/organizations/managing-organization-settings/setting-team-creation-permissions-in-your-organization).
| `org.disable_reader_discussion_creation_permission` | Владелец организации разрешил создавать обсуждения только пользователям, имеющим в организации разрешение как минимум на рассмотрение. {% ifversion fpt or ghec %}Дополнительные сведения см. в разделе [Разрешение или запрет создания обсуждений пользователям с доступом на чтение](/organizations/managing-organization-settings/managing-discussion-creation-for-repositories-in-your-organization).{% endif %} {%- ifversion fpt or ghec %} | `org.disable_oauth_app_restrictions` | Ограничения доступа к сторонним приложениям для организации отключены. Дополнительные сведения см. в разделе [Отключение ограничений доступа к приложению OAuth в организации](/organizations/restricting-access-to-your-organizations-data/disabling-oauth-app-access-restrictions-for-your-organization).
{%- endif %} {%- ifversion ghec %} | `org.disable_saml` | Владелец организации отключил единый вход SAML для организации.
{%- endif %} {%- ifversion not ghae %} | `org.disable_two_factor_requirement` | Владелец организации отключил требование двухфакторной проверки подлинности для всех участников{% ifversion fpt or ghec %}, менеджеров по выставлению счетов{% endif %} и сторонних участников совместной работы в организации.
{%- endif %} | `org.display_commenter_full_name_disabled` | Владелец организации отключил отображение полного имени комментатора в организации. Участники не будут видеть полное имя автора комментария.
| `org.display_commenter_full_name_enabled` | Владелец организации включил отображение полного имени комментатора в организации. Участники будут видеть полное имя автора комментария.
| `org.enable_member_team_creation_permission` | Владелец организации разрешил участникам создавать команды. Дополнительные сведения см. в разделе [Настройка разрешений для создания команды в организации](/organizations/managing-organization-settings/setting-team-creation-permissions-in-your-organization).
| `org.enable_reader_discussion_creation_permission` | Владелец организации разрешил пользователям с доступом на чтение создавать обсуждения в организации. {% ifversion fpt or ghec %}Дополнительные сведения см. в разделе [Разрешение или запрет создания обсуждений пользователям с доступом на чтение](/organizations/managing-organization-settings/managing-discussion-creation-for-repositories-in-your-organization).{% endif %} {%- ifversion fpt or ghec %} | `org.enable_oauth_app_restrictions` | Ограничения доступа к сторонним приложениям для организации включены. Дополнительные сведения см. в разделе [Включение ограничений доступа к приложению OAuth в организации](/organizations/restricting-access-to-your-organizations-data/enabling-oauth-app-access-restrictions-for-your-organization).
{%- endif %} {%- ifversion ghec %} | `org.enable_saml` | Владелец организации [включил единый вход SAML](/organizations/managing-saml-single-sign-on-for-your-organization/enabling-and-testing-saml-single-sign-on-for-your-organization) для организации.
{%- endif %} {%- ifversion not ghae %} | `org.enable_two_factor_requirement` | Владелец организации включил требование двухфакторной проверки подлинности для всех участников{% ifversion fpt or ghec %}, менеджеров по выставлению счетов{% endif %} и сторонних участников совместной работы в организации.
{%- endif %} | `org.integration_manager_added` | Владелец организации предоставил участнику доступ для управления всеми приложениями GitHub, принадлежащими организации.
| `org.integration_manager_removed`| Владелец организации отменил доступ к управлению всеми приложениями GitHub, принадлежащими организации, для участника организации.
| `org.invite_member` | Новый пользователь был приглашен присоединиться к организации. {% ifversion fpt or ghec %}Дополнительные сведения см. в разделе [Приглашение пользователей присоединиться к организации](/organizations/managing-membership-in-your-organization/inviting-users-to-join-your-organization).{% endif %} | `org.invite_to_business` | Организация была приглашена присоединиться к организации.
| `org.members_can_update_protected_branches.clear` | Владелец организации отменил политику, определяющую, могут ли участники организации обновлять защищенные ветви в репозиториях организации. Администраторы организации могут выбрать, разрешать ли обновление параметров защищенных ветвей.
| `org.members_can_update_protected_branches.disable` | Возможность обновлять защищенные ветви для участников предприятия была отключена. Обновлять защищенные ветви могут только владельцы предприятия.
| `org.members_can_update_protected_branches.enable` | Возможность обновлять защищенные ветви для участников предприятия была включена. Участники организации могут обновлять защищенные ветви.
{%- ifversion fpt or ghec %} | `org.oauth_app_access_approved` | Владелец [предоставил организации доступ к {% data variables.product.prodname_oauth_app %}](/organizations/restricting-access-to-your-organizations-data/approving-oauth-apps-for-your-organization).
| `org.oauth_app_access_denied` | Владелец [отключил утвержденный ранее доступ {% data variables.product.prodname_oauth_app %}](/organizations/restricting-access-to-your-organizations-data/denying-access-to-a-previously-approved-oauth-app-for-your-organization) к организации.
| `org.oauth_app_access_requested` | Участник организации попросил владельца предоставить {% data variables.product.prodname_oauth_app %} доступ к организации.
{%- endif %} | `org.recreate` | Организация была восстановлена.
| `org.register_self_hosted_runner` | Зарегистрировано новое средство выполнения тестов локального размещения. Дополнительные сведения см. в разделе [Добавление средства выполнения тестов локального размещения в организацию](/actions/hosting-your-own-runners/adding-self-hosted-runners#adding-a-self-hosted-runner-to-an-organization).
| `org.remove_actions_secret` | Секрет {% data variables.product.prodname_actions %} был удален.
| `org.remove_integration_secret` | Секрет интеграции {% data variables.product.prodname_dependabot %}{% ifversion fpt or ghec %} или {% data variables.product.prodname_github_codespaces %}{% endif %} был удален из организации.
| `org.remove_billing_manager` | Владелец удалил менеджера по выставлению счетов из организации. {% ifversion fpt or ghec %}Дополнительные сведения см. в разделе [Удаление менеджера выставления счетов из организации](/organizations/managing-peoples-access-to-your-organization-with-roles/removing-a-billing-manager-from-your-organization){% endif %}{% ifversion not ghae %} или [в организации требуется двухфакторная проверка подлинности](/organizations/keeping-your-organization-secure/managing-two-factor-authentication-for-your-organization/requiring-two-factor-authentication-in-your-organization), а менеджер по выставлению счетов не использует или отключил двухфакторную проверку подлинности.{% endif %} | `org.remove_member` | [Владелец удалил участника из организации](/organizations/managing-membership-in-your-organization/removing-a-member-from-your-organization){% ifversion not ghae %} или [в организации требуется двухфакторная проверка подлинности](/organizations/keeping-your-organization-secure/managing-two-factor-authentication-for-your-organization/requiring-two-factor-authentication-in-your-organization), а участник организации не использует или отключил двухфакторную проверку подлинности{% endif %}. Кроме того, [участник организации сам удалил](/account-and-profile/setting-up-and-managing-your-personal-account-on-github/managing-your-membership-in-organizations/removing-yourself-from-an-organization) из организации.
| `org.remove_outside_collaborator` | Владелец удалил стороннего участника совместной работы из организации{% ifversion not ghae %} или [в организации требуется двухфакторная проверка подлинности](/organizations/keeping-your-organization-secure/managing-two-factor-authentication-for-your-organization/requiring-two-factor-authentication-in-your-organization), а сторонний участник совместной работы не использует или отключил двухфакторную проверку подлинности{% endif %}.
| `org.remove_self_hosted_runner` | Средство выполнения тестов локального размещения было удалено. Дополнительные сведения см. в разделе [Удаление средства выполнения тестов из организации](/actions/hosting-your-own-runners/removing-self-hosted-runners#removing-a-runner-from-an-organization).
| `org.rename` | Организация была переименована.
| `org.restore_member` | Участник организации был восстановлен. Дополнительные сведения см. в разделе [Восстановление бывшего участника вашей организации](/organizations/managing-membership-in-your-organization/reinstating-a-former-member-of-your-organization).
{%- ifversion ghec %} | `org.revoke_external_identity` | Владелец организации отозвал связанное удостоверение участника. Дополнительные сведения см. в разделе [Просмотр доступа SAML участника к вашей организации и управление им](/organizations/granting-access-to-your-organization-with-saml-single-sign-on/viewing-and-managing-a-members-saml-access-to-your-organization#viewing-and-revoking-a-linked-identity).
| `org.revoke_sso_session` | Владелец организации отозвал сеанс SAML участника. Дополнительные сведения см. в разделе [Просмотр доступа SAML участника к вашей организации и управление им](/organizations/granting-access-to-your-organization-with-saml-single-sign-on/viewing-and-managing-a-members-saml-access-to-your-organization#viewing-and-revoking-a-linked-identity).
{%- endif %} | `org.runner_group_created` | Создана группа средств выполнения тестов локального размещения. Дополнительные сведения см. в разделе [Создание группы средств выполнения тестов локального размещения для организации](/actions/hosting-your-own-runners/managing-access-to-self-hosted-runners-using-groups#creating-a-self-hosted-runner-group-for-an-organization).
| `org.runner_group_removed` | Группа средств выполнения тестов локального размещения была удалена. Дополнительные сведения см. в разделе [Удаление средства выполнения тестов локального размещения в группу](/actions/hosting-your-own-runners/managing-access-to-self-hosted-runners-using-groups#removing-a-self-hosted-runner-group).
{%- ifversion fpt or ghec %} | `org.runner_group_renamed` | Группа средств выполнения тестов локального размещения была переименована. Дополнительные сведения см. в разделе [Изменение политики доступа для группы средства выполнения тестов локального размещения](/actions/hosting-your-own-runners/managing-access-to-self-hosted-runners-using-groups#changing-the-access-policy-of-a-self-hosted-runner-group).
{%- endif %} | `org.runner_group_updated` | Конфигурации группы средств выполнения тестов локального размещения была изменена. Дополнительные сведения см. в разделе [Изменение политики доступа для группы средства выполнения тестов локального размещения](/actions/hosting-your-own-runners/managing-access-to-self-hosted-runners-using-groups#changing-the-access-policy-of-a-self-hosted-runner-group).
| `org.runner_group_runner_removed` |  Средство выполнения тестов локального размещения было удалено из группы с помощью REST API. Дополнительные сведения см. в разделе [Удаление группы средств выполнения тестов локального размещения для организации](/rest/reference/actions#remove-a-self-hosted-runner-from-a-group-for-an-organization).
| `org.runner_group_runners_added` | Средство выполнения тестов локального размещения было добавлено в группу. Дополнительные сведения см. в разделе [Перемещение средства выполнения тестов локального размещения в группу](/actions/hosting-your-own-runners/managing-access-to-self-hosted-runners-using-groups#moving-a-self-hosted-runner-to-a-group).
| `org.runner_group_runners_updated`|  Список участников группы средства выполнения тестов был обновлен. Дополнительные сведения см. в разделе [Настройка средств выполнения тестов локального размещения в группе для организации](/rest/reference/actions#set-self-hosted-runners-in-a-group-for-an-organization).
{%- ifversion fpt or ghec %} | `org.runner_group_visiblity_updated` | Видимость средства выполнения тестов локального размещения была обновлена с помощью REST API. Дополнительные сведения см. в разделе [Обновление группы средств выполнения тестов локального размещения для организации](/rest/reference/actions#update-a-self-hosted-runner-group-for-an-organization).
{%- endif %} {%- ifversion code-security-audit-log-events %} | `org.secret_scanning_push_protection_custom_message_disabled` | Пользовательское сообщение, активированное при попытке отправки в репозиторий, защищенный с помощью push-уведомлений, было отключено для вашей организации. Дополнительные сведения см. в статье [Защита отправок с помощью {% data variables.product.prodname_secret_scanning %}](/code-security/secret-scanning/protecting-pushes-with-secret-scanning#enabling-secret-scanning-as-a-push-protection-for-an-organization).
| `org.secret_scanning_push_protection_custom_message_enabled` | Настраиваемое сообщение, активированное при попытке отправки в репозиторий, защищенный с помощью push-уведомлений, было включено для вашей организации. Дополнительные сведения см. в статье [Защита отправок с помощью {% data variables.product.prodname_secret_scanning %}](/code-security/secret-scanning/protecting-pushes-with-secret-scanning#enabling-secret-scanning-as-a-push-protection-for-an-organization).
| `org.secret_scanning_push_protection_custom_message_updated` | Пользовательское сообщение, активированное при попытке отправки в репозиторий, защищенный с помощью push-уведомлений, было обновлено для вашей организации. Дополнительные сведения см. в статье [Защита отправок с помощью {% data variables.product.prodname_secret_scanning %}](/code-security/secret-scanning/protecting-pushes-with-secret-scanning#enabling-secret-scanning-as-a-push-protection-for-an-organization).
{%- endif %} {%- ifversion secret-scanning-audit-log-custom-patterns %} | `org.secret_scanning_push_protection_disable` | Владелец организации или администратор отключили защиту отправки для сканирования секретов. Дополнительные сведения см. в разделе [Защита push-уведомлений с помощью сканирования секретов](/enterprise-cloud@latest/code-security/secret-scanning/protecting-pushes-with-secret-scanning).
| `org.secret_scanning_push_protection_enable` | Владелец организации или администратор включили защиту отправки для сканирования секретов.
{%- endif %} | `org.self_hosted_runner_online` | Приложение средства выполнения тестов было запущено. Можно просматривать только с помощью REST API; не отображается в пользовательском интерфейсе или экспорте JSON/CSV. Дополнительные сведения см. в разделе [Проверка статуса средства выполнения тестов локального размещения](/actions/hosting-your-own-runners/monitoring-and-troubleshooting-self-hosted-runners#checking-the-status-of-a-self-hosted-runner).
| `org.self_hosted_runner_offline` | Приложение средства выполнения тестов было остановлено. Можно просматривать только с помощью REST API; не отображается в пользовательском интерфейсе или экспорте JSON/CSV. Дополнительные сведения см. в разделе [Проверка статуса средства выполнения тестов локального размещения](/actions/hosting-your-own-runners/monitoring-and-troubleshooting-self-hosted-runners#checking-the-status-of-a-self-hosted-runner).
{%- ifversion fpt or ghec or ghes %} | `org.self_hosted_runner_updated` | Приложение средства выполнения тестов было обновлено. Можно просматривать с помощью REST API и пользовательского интерфейса; не отображается в экспорте JSON/CSV. Дополнительные сведения см. в статье "[Сведения о локально размещенных средствах выполнения](/actions/hosting-your-own-runners/about-self-hosted-runners#about-self-hosted-runners)."
{%- endif %} {%- ifversion fpt or ghec %} | `org.set_actions_fork_pr_approvals_policy` | Изменен параметр запроса утверждений рабочих процессов из общедоступных вилок для организации. Дополнительные сведения см. в разделе [Требование утверждения рабочих процессов из общедоступных вилок](/organizations/managing-organization-settings/disabling-or-limiting-github-actions-for-your-organization#requiring-approval-for-workflows-from-public-forks).
{%- endif %} | `org.set_actions_retention_limit` | Период хранения артефактов и журналов {% data variables.product.prodname_actions %} в организации был изменен. Дополнительные сведения см. в разделе [Настройка периода хранения артефактов и журналов {% data variables.product.prodname_actions %} в организации](/organizations/managing-organization-settings/configuring-the-retention-period-for-github-actions-artifacts-and-logs-in-your-organization).
{%- ifversion fpt or ghec or ghes %} | `org.set_fork_pr_workflows_policy` | Политика для рабочих процессов в вилках частного репозитория была изменена. Дополнительные сведения см. в разделе [Включение рабочих процессов для вилок частного репозитория](/organizations/managing-organization-settings/disabling-or-limiting-github-actions-for-your-organization#enabling-workflows-for-private-repository-forks).
{%- endif %} {%- ifversion ghes or audit-log-sso-response-events %} |`org.sso_response` | При попытке участника пройти проверку подлинности в организации был создан ответ единого входа SAML. Это событие доступно только через потоковую передачу журналов аудита и REST API.
{%- endif %} {%- ifversion ghec %} | `org.transfer` | Организация была перенесена между корпоративными учетными записями. Дополнительные сведения см. в разделе [Добавление организаций на предприятии](/admin/user-management/managing-organizations-in-your-enterprise/adding-organizations-to-your-enterprise#transferring-an-organization-between-enterprise-accounts).
{%- endif %} {%- ifversion not ghae %} | `org.transform`    | Учетная запись пользователя была преобразована в организацию. Дополнительные сведения см. в разделе [Преобразование пользователя в организацию](/github/setting-up-and-managing-your-github-user-account/converting-a-user-into-an-organization).
{%- endif %} | `org.unblock_user` | Владелец организации разблокировал пользователя в организации. {% ifversion fpt or ghec %}Дополнительные сведения см. в разделе [Разблокирование пользователя из организации](/communities/maintaining-your-safety-on-github/unblocking-a-user-from-your-organization).{% endif %} {%- ifversion fpt or ghec or ghes %} | `org.update_actions_secret` | Секрет {% data variables.product.prodname_actions %} был обновлен.
{%- endif %} | `org.update_integration_secret` | Для организации обновлен секрет интеграции {% data variables.product.prodname_dependabot %}{% ifversion fpt or ghec %} или {% data variables.product.prodname_github_codespaces %}{% endif %}.
| `org.update_default_repository_permission` | Владелец организации изменил уровень разрешений репозитория по умолчанию для участников организации.
| `org.update_member` | Владелец организации изменил роль пользователя с владельца на участника или с участника на владельца.
| `org.update_member_repository_creation_permission` | Владелец организации изменил разрешение на создание репозиториев для участников организации.
| `org.update_member_repository_invitation_permission` | Владелец организации изменил параметр политики для приглашения внешних участников совместной работы в репозитории участниками организации. Дополнительные сведения см. в разделе [Настройка разрешений для добавления сторонних участников совместной работы](/organizations/managing-organization-settings/setting-permissions-for-adding-outside-collaborators).
| `org.update_new_repository_default_branch_setting` | Владелец организации изменил имя ветви по умолчанию для новых репозиториев в организации. Дополнительные сведения см. в разделе [Управление именем ветви по умолчанию для репозиториев в организации](/organizations/managing-organization-settings/managing-the-default-branch-name-for-repositories-in-your-organization).
{%- ifversion ghec or ghae %} | `org.update_saml_provider_settings` | Параметры поставщика SAML организации были обновлены.
| `org.update_terms_of_service`| Организация изменила стандартные условия обслуживания на корпоративные. {% ifversion ghec %}Дополнительные сведения см. в разделе [Переход на корпоративные условия обслуживания](/organizations/managing-organization-settings/upgrading-to-the-corporate-terms-of-service).{% endif %} {%- endif %}

{%- ifversion ghec or ghes or ghae %}
## Действия категории `org_credential_authorization`

| Действие | Описание
|--------|-------------
| `org_credential_authorization.deauthorized` | Участник отменил авторизацию учетных данных для использования с единым входом SAML. {% ifversion ghec or ghae %}Дополнительные сведения см. в разделе [Проверка подлинности с помощью единого входа SAML](/authentication/authenticating-with-saml-single-sign-on).{% endif %}
| `org_credential_authorization.grant` | Участник авторизовал учетные данные для использования с единым входом SAML. {% ifversion ghec or ghae %}Дополнительные сведения см. в разделе [Проверка подлинности с помощью единого входа SAML](/authentication/authenticating-with-saml-single-sign-on).{% endif %}
| `org_credential_authorization.revoke` | Владелец отозвал авторизованные учетные данные. {% ifversion ghec %}Дополнительные сведения см. в разделе [Просмотр активных сеансов SAML и управление ими](/organizations/granting-access-to-your-organization-with-saml-single-sign-on/viewing-and-managing-a-members-saml-access-to-your-organization).{% endif %}
{%- endif %}

{%- ifversion secret-scanning-audit-log-custom-patterns %}
## Действия категории `org_secret_scanning_custom_pattern`

| Действие | Описание
|--------|---------------
| `org_secret_scanning_custom_pattern.create` | Опубликован пользовательский шаблон для сканирования секретов в организации. Дополнительные сведения см. в разделе [Определение пользовательских шаблонов для сканирования секретов](/code-security/secret-scanning/defining-custom-patterns-for-secret-scanning#defining-a-custom-pattern-for-an-organization).
| `org_secret_scanning_custom_pattern.delete` | Пользовательский шаблон был удален из сканирования секретов в организации. Дополнительные сведения см. в разделе [Определение пользовательских шаблонов для сканирования секретов](/code-security/secret-scanning/defining-custom-patterns-for-secret-scanning#removing-a-custom-pattern).
| `org_secret_scanning_custom_pattern.update` |Изменения в пользовательском шаблоне сохранении для сканирования секретов в организации. Дополнительные сведения см. в разделе [Определение пользовательских шаблонов для сканирования секретов](/code-security/secret-scanning/defining-custom-patterns-for-secret-scanning#editing-a-custom-pattern).
{%- endif %}

## Действия категории `organization_default_label`

| Действие | Описание
|--------|-------------
| `organization_default_label.create` | Создана метка по умолчанию для репозиториев в организации. Дополнительные сведения см. в разделе [Создание метки по умолчанию](/organizations/managing-organization-settings/managing-default-labels-for-repositories-in-your-organization#creating-a-default-label).
| `organization_default_label.update` | Метка по умолчанию для репозиториев в организации была изменена. Дополнительные сведения см. в разделе [Изменение метки по умолчанию](/organizations/managing-organization-settings/managing-default-labels-for-repositories-in-your-organization#editing-a-default-label).
| `organization_default_label.destroy` | Метка по умолчанию для репозиториев в организации была удалена. Дополнительные сведения см. в разделе [Удаление метки по умолчанию](/organizations/managing-organization-settings/managing-default-labels-for-repositories-in-your-organization#deleting-a-default-label).

{%- ifversion fpt or ghec or ghes %}
## Действия категории `organization_domain`

| Действие | Описание
|--------|-------------
| `organization_domain.approve` | Для организации утвержден корпоративный домен. Дополнительные сведения см. в разделе [Утверждение домена для организации](/organizations/managing-organization-settings/verifying-or-approving-a-domain-for-your-organization#approving-a-domain-for-your-organization).
| `organization_domain.create` | В организацию был добавлен корпоративный домен. Дополнительные сведения см. в разделе [Проверка домена для организации](/organizations/managing-organization-settings/verifying-or-approving-a-domain-for-your-organization#verifying-a-domain-for-your-organization).
| `organization_domain.destroy` | Корпоративный домен был удален из организации. Дополнительные сведения см. в разделе [Удаление утвержденного или проверенного домена](/organizations/managing-organization-settings/verifying-or-approving-a-domain-for-your-organization#removing-an-approved-or-verified-domain).
| `organization_domain.verify` | Корпоративный домен для организации был проверен. Дополнительные сведения см. в разделе [Проверка домена для организации](/organizations/managing-organization-settings/verifying-or-approving-a-domain-for-your-organization#verifying-a-domain-for-your-organization).

## Действия категории `organization_projects_change`

| Действие | Описание
|--------|-------------
| `organization_projects_change.clear` | Владелец предприятия{% ifversion ghes %} или администратор сайта{% endif %} очистили параметр политики в отношении досок проектов для всей организации на предприятии. Дополнительные сведения см. в разделе [Применение политик для проектов на вашем предприятии](/admin/policies/enforcing-policies-for-your-enterprise/enforcing-policies-for-projects-in-your-enterprise#enforcing-a-policy-for-organization-wide-project-boards).
| `organization_projects_change.disable` | Проекты организации были отключены для всех организаций на предприятии. Дополнительные сведения см. в разделе [Применение политик для проектов на вашем предприятии](/admin/policies/enforcing-policies-for-your-enterprise/enforcing-policies-for-projects-in-your-enterprise#enforcing-a-policy-for-organization-wide-project-boards).
| `organization_projects_change.enable` | Проекты организации были включены для всех организаций на предприятии. Дополнительные сведения см. в разделе [Применение политик для проектов на вашем предприятии](/admin/policies/enforcing-policies-for-your-enterprise/enforcing-policies-for-projects-in-your-enterprise#enforcing-a-policy-for-organization-wide-project-boards).
{%- endif %}

## Действия категории `packages`

| Действие | Описание
|--------|-------------
| `packages.insecure_hash` | Maven опубликовал небезопасный хэш для указанной версии пакета.
| `packages.package_deleted` | Пакет был удален из организации.{% ifversion fpt or ghec or ghes %} Дополнительные сведения см. в разделе [Удаление и восстановление пакета](/packages/learn-github-packages/deleting-and-restoring-a-package).{% endif %}
| `packages.package_published` | Пакет был опубликован или повторно опубликован в организации.
| `packages.package_restored` | Пакет был полностью восстановлен.{% ifversion fpt or ghec or ghes %} Дополнительные сведения см. в разделе [Удаление и восстановление пакета](/packages/learn-github-packages/deleting-and-restoring-a-package).{% endif %}
| `packages.package_version_deleted` | Указанный пакет был удален.{% ifversion fpt or ghec or ghes %} Дополнительные сведения см. в разделе [Удаление и восстановление пакета](/packages/learn-github-packages/deleting-and-restoring-a-package).{% endif %}
| `packages.package_version_published` | Указанная версия пакета была опубликована или повторно опубликована в пакете.
| `packages.package_version_restored` | Указанный пакет был удален.{% ifversion fpt or ghec or ghes %} Дополнительные сведения см. в разделе [Удаление и восстановление пакета](/packages/learn-github-packages/deleting-and-restoring-a-package).{% endif %}
| `packages.part_upload` | Указанная версия пакета была частично отправлена в организацию.
| `packages.upstream_package_fetched` | Указанная версия пакета была получена с вышестоящего прокси-сервера npm.
| `packages.version_download` | Указанная версия пакета была загружена.
| `packages.version_upload` | Указанная версия пакета была отправлена.

{%- ifversion fpt or ghec %}
## Действия категории `pages_protected_domain`

| Действие | Описание
|--------|-------------
| `pages_protected_domain.create` | Для организации или предприятия был создан проверенный домен {% data variables.product.prodname_pages %}. Дополнительные сведения см. в разделе [Подтверждение личного домена для {% data variables.product.prodname_pages %}](/pages/configuring-a-custom-domain-for-your-github-pages-site/verifying-your-custom-domain-for-github-pages).
| `pages_protected_domain.delete` | Проверенный домен {% data variables.product.prodname_pages %} был удален из организации или предприятия. Дополнительные сведения см. в разделе [Подтверждение личного домена для {% data variables.product.prodname_pages %}](/pages/configuring-a-custom-domain-for-your-github-pages-site/verifying-your-custom-domain-for-github-pages).
| `pages_protected_domain.verify`  | Домен {% data variables.product.prodname_pages %} был проверен для организации или предприятия. Дополнительные сведения см. в разделе [Подтверждение личного домена для {% data variables.product.prodname_pages %}](/pages/configuring-a-custom-domain-for-your-github-pages-site/verifying-your-custom-domain-for-github-pages).

## Действия категории `payment_method`

| Действие | Описание
|--------|-------------
| `payment_method.create` | Добавлен новый способ оплаты, например новая кредитная карта или учетная запись PayPal.
| `payment_method.remove` | Способ оплаты был удален.
| `payment_method.update` | Существующий способ оплаты был обновлен.

## Действия категории `prebuild_configuration`

| Действие | Описание
|--------|-------------
| `prebuild_configuration.create` | Создана конфигурация предварительной сборки {% data variables.product.prodname_github_codespaces %} для репозитория. Дополнительные сведения см. в разделе [Сведения о предварительных сборках {% data variables.product.prodname_github_codespaces %}](/codespaces/prebuilding-your-codespaces/about-github-codespaces-prebuilds).
| `prebuild_configuration.destroy` | Удалена конфигурация предварительной сборки {% data variables.product.prodname_github_codespaces %} для репозитория. Дополнительные сведения см. в разделе [Сведения о предварительных сборках {% data variables.product.prodname_github_codespaces %}](/codespaces/prebuilding-your-codespaces/about-github-codespaces-prebuilds).
| `prebuild_configuration.run_triggered` | Пользователь инициировал выполнение конфигурации предварительной сборки {% data variables.product.prodname_github_codespaces %} для ветви репозитория. Дополнительные сведения см. в разделе [Сведения о предварительных сборках {% data variables.product.prodname_github_codespaces %}](/codespaces/prebuilding-your-codespaces/about-github-codespaces-prebuilds).
| `prebuild_configuration.update` | Изменена конфигурация предварительной сборки {% data variables.product.prodname_github_codespaces %} для репозитория. Дополнительные сведения см. в разделе [Сведения о предварительных сборках {% data variables.product.prodname_github_codespaces %}](/codespaces/prebuilding-your-codespaces/about-github-codespaces-prebuilds).
{%- endif %}

{%- ifversion ghes %}
## Действия категории `pre_receive_environment`

| Действие | Описание
| ------ | -----------
| `pre_receive_environment.create` | Создана среда перехватчика предварительного получения. Дополнительные сведения см. в разделе [Создание среды перехватчика предварительного получения](/admin/policies/enforcing-policy-with-pre-receive-hooks/creating-a-pre-receive-hook-environment).
| `pre_receive_environment.destroy` | Среда перехватчика предварительного получения была удалена. Дополнительные сведения см. в разделе [Создание среды перехватчика предварительного получения](/admin/policies/enforcing-policy-with-pre-receive-hooks/creating-a-pre-receive-hook-environment).
| `pre_receive_environment.download` | Среда перехватчика предварительного получения была загружена. Дополнительные сведения см. в разделе [Создание среды перехватчика предварительного получения](/admin/policies/enforcing-policy-with-pre-receive-hooks/creating-a-pre-receive-hook-environment).
| `pre_receive_environment.update` | Среда перехватчика предварительного получения была обновлена. Дополнительные сведения см. в разделе [Создание среды перехватчика предварительного получения](/admin/policies/enforcing-policy-with-pre-receive-hooks/creating-a-pre-receive-hook-environment).

## Действия категории `pre_receive_hook`

| Действие | Описание
|--------|-------------
| `pre_receive_hook.create` | Создан перехватчик предварительного получения. Дополнительные сведения см. в разделе [Создание перехватчиков предварительного получения](/admin/policies/enforcing-policy-with-pre-receive-hooks/managing-pre-receive-hooks-on-the-github-enterprise-server-appliance#creating-pre-receive-hooks).
| `pre_receive_hook.destroy` | Перехватчик предварительного получения был удален. Дополнительные сведения см. в разделе [Удаление перехватчиков предварительного получения](/admin/policies/enforcing-policy-with-pre-receive-hooks/managing-pre-receive-hooks-on-the-github-enterprise-server-appliance#deleting-pre-receive-hooks).
| `pre_receive_hook.enforcement` | Параметр применения перехватчика предварительного получения, позволяющий администраторам репозиториев и организации переопределять конфигурацию перехватчика, была включен или отключен. Дополнительные сведения см. в разделе [Управление перехватчиками предварительного получения на устройстве GitHub Enterprise Server](/admin/policies/enforcing-policy-with-pre-receive-hooks/managing-pre-receive-hooks-on-the-github-enterprise-server-appliance).
| `pre_receive_hook.rejected_push` | Перехватчик предварительного получения отклонил отправку.
| `pre_receive_hook.update` | Создан перехватчик предварительного получения. Дополнительные сведения см. в разделе [Изменение перехватчиков предварительного получения](/admin/policies/enforcing-policy-with-pre-receive-hooks/managing-pre-receive-hooks-on-the-github-enterprise-server-appliance#editing-pre-receive-hooks).
| `pre_receive_hook.warned_push` | Перехватчик предварительного получения предупредил об отправке.
{%- endif %}

## Действия категории `private_repository_forking`

| Действие | Описание
|--------|-------------
| `private_repository_forking.clear` | Владелец предприятия{% ifversion ghes %} или администратор сайта{% endif %} очистили параметр политикии, таким образом, разрешил вилки частных и внутренних репозиториев для репозитория, организации или предприятия. Дополнительные сведения см. в разделах [Управление политикой ветвления для репозитория](/repositories/managing-your-repositorys-settings-and-features/managing-repository-settings/managing-the-forking-policy-for-your-repository), [Управление политикой ветвления для организации](/organizations/managing-organization-settings/managing-the-forking-policy-for-your-organization) и [Применение политики ветвления частных или внутренних репозиториев](/admin/policies/enforcing-policies-for-your-enterprise/enforcing-repository-management-policies-in-your-enterprise#enforcing-a-policy-for-forking-private-or-internal-repositories) (для предприятий).
| `private_repository_forking.disable` | Владелец предприятия{% ifversion ghes %} или администратор сайта{% endif %} отключили параметр политикии, таким образом, разрешил вилки частных и внутренних репозиториев для репозитория, организации или предприятия. Ветвление частных и внутренних репозиториев всегда запрещено. Дополнительные сведения см. в разделах [Управление политикой ветвления для репозитория](/repositories/managing-your-repositorys-settings-and-features/managing-repository-settings/managing-the-forking-policy-for-your-repository), [Управление политикой ветвления для организации](/organizations/managing-organization-settings/managing-the-forking-policy-for-your-organization) и [Применение политики ветвления частных или внутренних репозиториев](/admin/policies/enforcing-policies-for-your-enterprise/enforcing-repository-management-policies-in-your-enterprise#enforcing-a-policy-for-forking-private-or-internal-repositories) (для предприятий).
| `private_repository_forking.enable` | Владелец предприятия{% ifversion ghes %} или администратор сайта{% endif %} включили параметр политикии, таким образом, разрешил вилки частных и внутренних репозиториев для репозитория, организации или предприятия. Ветвление частных и внутренних репозиториев всегда разрешено. Дополнительные сведения см. в разделах [Управление политикой ветвления для репозитория](/repositories/managing-your-repositorys-settings-and-features/managing-repository-settings/managing-the-forking-policy-for-your-repository), [Управление политикой ветвления для организации](/organizations/managing-organization-settings/managing-the-forking-policy-for-your-organization) и [Применение политики ветвления частных или внутренних репозиториев](/admin/policies/enforcing-policies-for-your-enterprise/enforcing-repository-management-policies-in-your-enterprise#enforcing-a-policy-for-forking-private-or-internal-repositories) (для предприятий).

{%- ifversion fpt or ghec %}
## Действия категории `profile_picture`

| Действие | Описание
|--------|-------------
| `profile_picture.update` | Изображение профиля было обновлено.
{%- endif %}

## Действия категории `project`

| Действие | Описание
|--------|-------------
| `project.access` | Видимость доски проекта была изменена. Дополнительные сведения см. в разделе [Изменение видимости панели проекта](/issues/organizing-your-work-with-project-boards/managing-project-boards/changing-project-board-visibility).
| `project.close` | Доска проекта была закрыта. Дополнительные сведения см. в разделе [Закрытие доски проекта](/issues/organizing-your-work-with-project-boards/managing-project-boards/closing-a-project-board).
| `project.create` | Создана доска проекта. Дополнительные сведения см. в разделе [Создание доски проекта](/issues/organizing-your-work-with-project-boards/managing-project-boards/creating-a-project-board).
| `project.delete` | Доска проекта была удалена. Дополнительные сведения см. в разделе [Удаление доски проекта](/issues/organizing-your-work-with-project-boards/managing-project-boards/deleting-a-project-board).
| `project.link` | Репозиторий был связан с доской проекта. Дополнительные сведения см. в разделе [Связывание репозитория с доской проекта](/issues/organizing-your-work-with-project-boards/managing-project-boards/linking-a-repository-to-a-project-board).
| `project.open` | Доска проекта была открыта заново. Дополнительные сведения см. в разделе [Повторное открытие доски проекта](/issues/organizing-your-work-with-project-boards/managing-project-boards/reopening-a-closed-project-board).
| `project.rename` | Доска проекта была переименована. Дополнительные сведения см. в разделе [Изменение доски проекта](/issues/organizing-your-work-with-project-boards/managing-project-boards/editing-a-project-board).
| `project.unlink` | Связь репозитория с доской проекта была удалена. Дополнительные сведения см. в разделе [Связывание репозитория с доской проекта](/issues/organizing-your-work-with-project-boards/managing-project-boards/linking-a-repository-to-a-project-board).
| `project.update_org_permission` | Разрешение базового уровня в отношении проекта для всех участников организации было изменено или удалено. Дополнительные сведения см. в разделе [Управление доступом к панели проектов для членов организации](/organizations/managing-access-to-your-organizations-project-boards/managing-access-to-a-project-board-for-organization-members).
| `project.update_team_permission` | Уровень разрешения команды в отношении доски проекта был изменен либо команда была добавлена на доску проекта или удалена из доски проекта. Дополнительные сведения см. в статье [Управление доступом команды к доске проекта организации](/organizations/managing-access-to-your-organizations-project-boards/managing-team-access-to-an-organization-project-board).
| `project.update_user_permission` | Участник организации или сторонний участник совместной работы был добавлен на доску проекта или удален из доски проекта либо изменился уровень его разрешения. Дополнительные сведения см. в статье [Управление доступом отдельных пользователей к доске проекта организации](/organizations/managing-access-to-your-organizations-project-boards/managing-an-individuals-access-to-an-organization-project-board).

{%- ifversion projects-v2 %}
## Действия категории `project_field`

| Действие | Описание
|--------|-------------
| `project_field.create` | На доске проекта было создано поле. Дополнительные сведения см. в разделе [Общие сведения о типах полей](/issues/planning-and-tracking-with-projects/understanding-field-types).
| `project_field.delete` | Поле было удалено с доски проекта. Дополнительные сведения см. в разделе [Удаление полей](/issues/planning-and-tracking-with-projects/understanding-field-types/deleting-fields).

## Действия категории `project_view`

| Действие | Описание
|--------|-------------
| `project_view.create` | На доске проекта было создано представление. Дополнительные сведения см. в разделе [Управление представлениями](/issues/planning-and-tracking-with-projects/customizing-views-in-your-project/managing-your-views).
| `project_view.delete` | Представление было удалено с доски проекта. Дополнительные сведения см. в разделе [Управление представлениями](/issues/planning-and-tracking-with-projects/customizing-views-in-your-project/managing-your-views).
{%- endif %}

## Действия категории `protected_branch`

| Действие | Описание
|--------|-------------
| `protected_branch.create ` | В ветви была включена защита ветви.
| `protected_branch.destroy` | В ветви была отключена защита ветви.
| `protected_branch.dismiss_stale_reviews ` | Принудительное прекращение устаревших запросов на вытягивание в ветви было обновлено.
{%- ifversion ghes %} | `protected_branch.dismissal_restricted_users_teams` | Принудительное ограничение состава пользователей и (или) команд, которые могут прекращать проверки, было обновлено в ветви.
{%- endif %} | `protected_branch.policy_override ` | Требование о защите ветви было переопределено администратором репозитория.
| `protected_branch.rejected_ref_update ` | Попытка обновления ветви была отклонена.
| `protected_branch.required_status_override` | Требование о защите ветви обязательными проверками состояния было переопределено администратором репозитория.
| `protected_branch.review_policy_and_required_status_override` | Требование об обязательных проверках состояния и защите ветви обязательными проверками состояния было переопределено администратором репозитория.
| `protected_branch.review_policy_override` | Требование о защите ветви обязательными проверками было переопределено администратором репозитория.
| `protected_branch.update_admin_enforced ` | Для администраторов репозитория была принудительном включена защита ветви.
{%- ifversion ghes %} | `protected_branch.update_allow_deletions_enforcement_level` | Принудительное разрешение пользователям с доступом к отправке удалять соответствующие ветви было обновлено в ветви.
| `protected_branch.update_allow_force_pushes_enforcement_level` | Принудительное разрешение принудительных отправок для всех пользователей с доступом к отправке было обновлено в ветви.
| `protected_branch.update_linear_history_requirement_enforcement_level` | Обязательное требование журнала линейных фиксаций было обновлено в ветви.
{%- endif %} | `protected_branch.update_pull_request_reviews_enforcement_level ` | Применение обязательных проверок запросов на вытягивание было обновлено в ветви. Может быть одним из `0`(деактивированы) `1`(пользователи без прав администратора), `2`(все).
| `protected_branch.update_require_code_owner_review ` | Применение обязательной проверки владельца кода было обновлено в ветви.
| `protected_branch.update_required_approving_review_count` | Применение требуемого количества утверждений перед слиянием было обновлено в ветви.
| `protected_branch.update_required_status_checks_enforcement_level ` | Применение обязательных проверок состояния было обновлено в ветви.
| `protected_branch.update_signature_requirement_enforcement_level ` | Применение обязательного подписания фиксаций было обновлено в ветви.
| `protected_branch.update_strict_required_status_checks_policy` | Применение обязательных проверок состояния было обновлено в ветви.
| `protected_branch.update_name` | Шаблон имени ветви был обновлен для ветви.

## Действия категории `public_key`

| Действие | Описание
|--------|-------------
| `public_key.create` | Ключ SSH был [добавлен][add key] в учетную запись пользователя или [ключ развертывания][] был добавлен в репозиторий.
| `public_key.delete` | Ключ SSH был удален из учетной записи пользователя или [ключ развертывания][] был удален из репозитория.
| `public_key.update` | Ключ SSH учетной записи пользователя или [ключ развертывания][] репозитория был обновлен.
| `public_key.unverification_failure` | Не удалось аннулировать проверку ключа SSH учетной записи пользователя или [ключа развертывания][] репозитория.
| `public_key.unverify` | Проверка ключа SSH учетной записи пользователя или [ключа развертывания][] репозитория была аннулирована.
| `public_key.verification_failure` | Не удалось проверить ключ SSH учетной записи пользователя или [ключ развертывания][] репозитория.
| `public_key.verify` | Ключ SSH учетной записи пользователя или [ключ развертывания][] репозитория был проверен.

  [add key]: /authentication/connecting-to-github-with-ssh/adding-a-new-ssh-key-to-your-github-account
  [ключ развертывания]: /developers/overview/managing-deploy-keys#deploy-keys

## Действия категории `pull_request`

| Действие | Описание
|--------|-------------
| `pull_request.close` | Запрос на вытягивание был закрыт без объединения. Дополнительные сведения см. в разделе [Закрытие запроса на вытягивание](/pull-requests/collaborating-with-pull-requests/incorporating-changes-from-a-pull-request/closing-a-pull-request).
| `pull_request.converted_to_draft` | Запрос на вытягивание был преобразован в черновик. Дополнительные сведения см. в разделе [Изменение этапа запроса на вытягивание](/github/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/changing-the-stage-of-a-pull-request#converting-a-pull-request-to-a-draft).
| `pull_request.create` | Создан запрос на вытягивание. Дополнительные сведения см. в разделе [Создание запроса на вытягивание](/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/creating-a-pull-request).
| `pull_request.create_review_request` | По запросу на вытягивание была запрошена проверка. Дополнительные сведения см. в разделе [Сведения о проверках запросов на вытягивание](/pull-requests/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/about-pull-request-reviews).
| `pull_request.in_progress` | Запрос на вытягивание был помечен как выполняемый.
| `pull_request.indirect_merge` | Запрос на вытягивание признан объединенным, поскольку его фиксации были объединены в целевую ветвь.
| `pull_request.merge` | Запрос на вытягивание был объединен. Дополнительные сведения см. в разделе [Слияние запроса на вытягивание](/pull-requests/collaborating-with-pull-requests/incorporating-changes-from-a-pull-request/merging-a-pull-request).
| `pull_request.ready_for_review` | Запрос на вытягивание был помечен как готовый к проверке. Дополнительные сведения см. в разделе [Изменение этапа запроса на вытягивание](/github/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/changing-the-stage-of-a-pull-request#marking-a-pull-request-as-ready-for-review).
| `pull_request.remove_review_request` | Запрос проверки был удален из запроса на вытягивание. Дополнительные сведения см. в разделе [Сведения о проверках запросов на вытягивание](/pull-requests/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/about-pull-request-reviews).
| `pull_request.reopen` | Закрытый запрос на вытягивание был открыт повторно.
| `pull_request_review.delete` | Проверка по запросу на вытягивание была удалена.
| `pull_request_review.dismiss` | Проверка по запросу на вытягивание была отклонена. Дополнительные сведения см. в разделе [Пропуск проверки запроса на вытягивание](/pull-requests/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/dismissing-a-pull-request-review).
| `pull_request_review.submit` | Проверка запроса на вытягивание была отправлена. Дополнительные сведения см. в разделе [Сведения о проверках запросов на вытягивание](/pull-requests/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/about-pull-request-reviews).

## Действия категории `pull_request_review`

| Действие | Описание
|--------|-------------
| `pull_request_review.delete` | Проверка по запросу на вытягивание была удалена.
| `pull_request_review.dismiss` | Проверка по запросу на вытягивание была отклонена. Дополнительные сведения см. в разделе [Пропуск проверки запроса на вытягивание](/pull-requests/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/dismissing-a-pull-request-review).
| `pull_request_review.submit` | Проверка по запросу на вытягивание была отправлена. Дополнительные сведения см. в разделе [Отправка проверки](/pull-requests/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/reviewing-proposed-changes-in-a-pull-request#submitting-your-review).

## Действия категории `pull_request_review_comment`

| Действие | Описание
|--------|-------------
| `pull_request_review_comment.create` | В запрос на вытягивание был добавлен комментарий к проверке. Дополнительные сведения см. в разделе [Сведения о проверках запросов на вытягивание](/pull-requests/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/about-pull-request-reviews).
| `pull_request_review_comment.delete` | Комментарий к проверке по запросу на вытягивание был удален.
| `pull_request_review_comment.update` | Комментарий к проверке по запросу на вытягивание был изменен.

## Действия категории `repo`

| Действие | Описание
|--------|-------------
| `repo.access`         | Видимость репозитория была изменена на частный{%- ifversion ghes %}, общедоступный{% endif %} или внутреннний.
| `repo.actions_enabled` | Функция {% data variables.product.prodname_actions %} был включена для репозитория.
| `repo.add_member`     | В репозиторий был добавлен участник совместной работы.
| `repo.add_topic`     | В репозиторий был добавлен раздел.
| `repo.advanced_security_disabled` | Функция {% data variables.product.prodname_GH_advanced_security %} была отключена для репозитория.
| `repo.advanced_security_enabled` | Функция {% data variables.product.prodname_GH_advanced_security %} была включена для репозитория.
| `repo.advanced_security_policy_selected_member_disabled` | Администратор репозитория запретил включать функции {% data variables.product.prodname_GH_advanced_security %} для репозитория.
| `repo.advanced_security_policy_selected_member_enabled` | Администратор репозитория разрешил включать функции {% data variables.product.prodname_GH_advanced_security %} для репозитория.
| `repo.archived`       | Репозиторий был архивирован. Дополнительные сведения см. в разделе [Архивирование репозитория {% data variables.product.prodname_dotcom %}](/github/creating-cloning-and-archiving-repositories/archiving-a-github-repository).
| `repo.code_scanning_analysis_deleted` | Анализ сканирования кода для репозитория был удален. Дополнительные сведения см. в разделе [Удаление анализа сканирования кода из репозитория](/rest/reference/code-scanning#delete-a-code-scanning-analysis-from-a-repository).
| `repo.change_merge_setting` | Параметры объединения запросов на вытягивание были изменены для репозитория.
| `repo.clear_actions_settings` | Администратор репозитория очистил параметры политики {% data variables.product.prodname_actions %} для репозитория.
| `repo.config`         | Администратор репозитория заблокировал принудительные отправки. Дополнительные сведения см. в разделе [Блокировка принудительных отправок в репозиторий](/enterprise/admin/guides/developer-workflow/blocking-force-pushes-to-a-repository/).
{%- ifversion fpt or ghec %} | `repo.config.disable_collaborators_only` | Ограничение взаимодействия только участниками совместной работы было отключено. Дополнительные сведения см. в статье [Ограничение взаимодействий в репозитории](/communities/moderating-comments-and-conversations/limiting-interactions-in-your-repository).
| `repo.config.disable_contributors_only` | Ограничение взаимодействия только предыдущими участниками совместной работы было отключено в репозитории. Дополнительные сведения см. в статье [Ограничение взаимодействий в репозитории](/communities/moderating-comments-and-conversations/limiting-interactions-in-your-repository).
| `repo.config.disable_sockpuppet_disallowed` | Ограничение взаимодействия только существующими пользователями было отключено в репозитории. Дополнительные сведения см. в статье [Ограничение взаимодействий в репозитории](/communities/moderating-comments-and-conversations/limiting-interactions-in-your-repository).
| `repo.config.enable_collaborators_only` | Ограничение взаимодействия только участниками совместной работы было включено в репозитории. Пользователи, которые не являются участниками совместной работы или участниками организации, не могли взаимодействовать с репозиторием в течение заданного периода времени. Дополнительные сведения см. в статье [Ограничение взаимодействий в репозитории](/communities/moderating-comments-and-conversations/limiting-interactions-in-your-repository).
| `repo.config.enable_contributors_only` | Ограничение взаимодействия только предыдущими участниками совместной работы было включено в репозитории. Пользователи, которые не являются текущими или предыдущими участниками совместной работы либо участниками организации, не могли взаимодействовать с репозиторием в течение заданного периода времени. Дополнительные сведения см. в статье [Ограничение взаимодействий в репозитории](/communities/moderating-comments-and-conversations/limiting-interactions-in-your-repository).
| `repo.config.enable_sockpuppet_disallowed` | Ограничение взаимодействия существующими пользователями было включено в репозитории. Новые пользователи не могут взаимодействовать с репозиторием в течение заданного периода времени. Существующие пользователи репозитория, участники, участники совместной работы и участники организации могут взаимодействовать с репозиторием. Дополнительные сведения см. в статье [Ограничение взаимодействий в репозитории](/communities/moderating-comments-and-conversations/limiting-interactions-in-your-repository).
{%- endif %} {%- ifversion ghes %} | `repo.config.disable_anonymous_git_access`| Анонимный доступ на чтение Git был отключен для репозитория. Дополнительные сведения см. в разделе [Включение анонимного доступа на чтение в GIT для репозитория](/repositories/managing-your-repositorys-settings-and-features/managing-repository-settings/enabling-anonymous-git-read-access-for-a-repository).
| `repo.config.enable_anonymous_git_access` | Анонимный доступ на чтение Git был включен для репозитория. Дополнительные сведения см. в разделе [Включение анонимного доступа на чтение в GIT для репозитория](/repositories/managing-your-repositorys-settings-and-features/managing-repository-settings/enabling-anonymous-git-read-access-for-a-repository).
| `repo.config.lock_anonymous_git_access` | Параметр анонимного доступа на чтение Git репозитория был заблокирован, так что администраторы репозитория не могут изменять (включать или отключать) этот параметр. Дополнительные сведения см. в разделе [Запрещение пользователям изменять анонимный доступ на чтение Git](/admin/guides/user-management/preventing-users-from-changing-anonymous-git-read-access).
| `repo.config.unlock_anonymous_git_access` | Параметр анонимного доступа на чтение Git для репозитория был разблокирован, так что администраторы репозитория могут изменять (включать или отключать) этот параметр. Дополнительные сведения см. в разделе [Запрещение пользователям изменять анонимный доступ на чтение Git](/admin/guides/user-management/preventing-users-from-changing-anonymous-git-read-access).
{%- endif %} | `repo.create` | Создан репозиторий.
| `repo.create_actions_secret` | Для репозитория создан секрет {% data variables.product.prodname_actions %}. Дополнительные сведения см. в статье [Создание зашифрованных секретов для репозитория](/actions/security-guides/encrypted-secrets#creating-encrypted-secrets-for-a-repository).
| `repo.create_integration_secret` | Для репозитория был создан секрет интеграции {% data variables.product.prodname_dependabot %}{% ifversion fpt or ghec %} или {% data variables.product.prodname_github_codespaces %}{% endif %}.
| `repo.destroy` | Репозиторий был удален.
{%- ifversion ghes %} | `repo.disk_archive`  | Репозиторий был архивирован на диске. Дополнительные сведения см. в разделе [Архивирование репозиториев](/repositories/archiving-a-github-repository/archiving-repositories).
{%- endif %} | `repo.download_zip` | Архив исходного кода репозитория был загружен в виде ZIP-файла.
| `repo.pages_cname` | Личный домен {% data variables.product.prodname_pages %} был изменен в репозитории.
| `repo.pages_create` | Создан сайт {% data variables.product.prodname_pages %}.
| `repo.pages_destroy` | Сайт {% data variables.product.prodname_pages %} был удален.
| `repo.pages_https_redirect_disabled` | Перенаправления HTTPS для сайта {% data variables.product.prodname_pages %} были отключены.
| `repo.pages_https_redirect_enabled` | Перенаправления HTTPS для сайта {% data variables.product.prodname_pages %} были включены.
| `repo.pages_source` | Источник {% data variables.product.prodname_pages %} был изменен.
| `repo.pages_private` | Сайта {% data variables.product.prodname_pages %} был сделан частным.
| `repo.pages_public` | Сайт {% data variables.product.prodname_pages %} был сделан общедоступным.
| `repo.register_self_hosted_runner` | Зарегистрировано новое средство выполнения тестов локального размещения. Дополнительные сведения см. в разделе [Добавление средства выполнения тестов локального размещения в репозиторий](/actions/hosting-your-own-runners/adding-self-hosted-runners#adding-a-self-hosted-runner-to-a-repository).
| `repo.remove_self_hosted_runner` | Средство выполнения тестов локального размещения было удалено. Дополнительные сведения см. в разделе [Удаление средства выполнения тестов из репозитория](/actions/hosting-your-own-runners/removing-self-hosted-runners#removing-a-runner-from-a-repository).
| `repo.remove_actions_secret` | Секрет {% data variables.product.prodname_actions %} был удален для репозитория.
| `repo.remove_integration_secret` | Секрет интеграции {% data variables.product.prodname_dependabot %}{% ifversion fpt or ghec %} или {% data variables.product.prodname_github_codespaces %}{% endif %} для репозитория был удален.
| `repo.remove_member` | Участник совместной работы был удален из репозитория.
| `repo.remove_topic` | Раздел был удален из репозитория.
| `repo.rename` | Репозиторий был переименован.
{%- ifversion fpt or ghec %} | `repo.set_actions_fork_pr_approvals_policy` | Изменен параметр запроса утверждений рабочих процессов из общедоступных вилок для репозитория. Дополнительные сведения см. в разделе [Настройка обязательного утверждения рабочих процессов из общедоступных вилок](/repositories/managing-your-repositorys-settings-and-features/enabling-features-for-your-repository/managing-github-actions-settings-for-a-repository#configuring-required-approval-for-workflows-from-public-forks).
{%- endif %} | `repo.set_actions_retention_limit` | Период хранения артефактов и журналов {% data variables.product.prodname_actions %} в репозитории был изменен. Дополнительные сведения см. в разделе [Настройка периода хранения артефактов и журналов {% data variables.product.prodname_actions %} в репозитории](/repositories/managing-your-repositorys-settings-and-features/enabling-features-for-your-repository/managing-github-actions-settings-for-a-repository#configuring-the-retention-period-for-github-actions-artifacts-and-logs-in-your-repository).
| `repo.self_hosted_runner_online` | Приложение средства выполнения тестов было запущено. Можно просматривать только с помощью REST API; не отображается в пользовательском интерфейсе или экспорте JSON/CSV. Дополнительные сведения см. в разделе [Проверка статуса средства выполнения тестов локального размещения](/actions/hosting-your-own-runners/monitoring-and-troubleshooting-self-hosted-runners#checking-the-status-of-a-self-hosted-runner).
| `repo.self_hosted_runner_offline` | Приложение средства выполнения тестов было остановлено. Можно просматривать только с помощью REST API; не отображается в пользовательском интерфейсе или экспорте JSON/CSV. Дополнительные сведения см. в разделе [Проверка статуса средства выполнения тестов локального размещения](/actions/hosting-your-own-runners/monitoring-and-troubleshooting-self-hosted-runners#checking-the-status-of-a-self-hosted-runner).
| `repo.self_hosted_runner_updated` | Приложение средства выполнения тестов было обновлено. Можно просматривать с помощью REST API и пользовательского интерфейса; не отображается в экспорте JSON/CSV. Дополнительные сведения см. в статье "[Сведения о локально размещенных средствах выполнения](/actions/hosting-your-own-runners/about-self-hosted-runners#about-self-hosted-runners)."
| `repo.staff_unlock` | Администратор предприятия или сотрудники GitHub (с разрешения администратора репозитория) временно разблокировали репозиторий.
| `repo.transfer` | Пользователь принял запрос на получение переданного репозитория.
| `repo.transfer_outgoing` | Репозиторий был передан в другую сеть репозиториев.
| `repo.transfer_start` | Пользователь отправил запрос на передачу репозитория другому пользователю или организации.
| `repo.unarchived` | Репозиторий был разархивирован. Дополнительные сведения см. в разделе [Архивирование репозитория {% data variables.product.prodname_dotcom %}](/github/creating-cloning-and-archiving-repositories/archiving-a-github-repository).
| `repo.update_actions_settings` | Администратор репозитория изменил параметры политики {% data variables.product.prodname_actions %} для репозитория.
| `repo.update_actions_secret` | Секрет {% data variables.product.prodname_actions %} был обновлен.
| `repo.update_actions_access_settings` | Параметр для управления использованием репозитория рабочими процессами {% data variables.product.prodname_actions %} в других репозиториях был изменен.
| `repo.update_default_branch` | Ветвь по умолчанию для репозитория была изменена.
| `repo.update_integration_secret` | Для репозитория обновлен секрет интеграции {% data variables.product.prodname_dependabot %} или {% data variables.product.prodname_github_codespaces %}.
| `repo.update_member` | Разрешение пользователя в отношении репозитория было изменено.

{%- ifversion fpt or ghec %}
## Действия категории `repository_advisory`

| Действие | Описание
|--------|-------------
| `repository_advisory.close` | Кто-то закрыл рекомендацию по безопасности. Дополнительные сведения см. в разделе [Сведения о советах по безопасности {% data variables.product.prodname_dotcom %}](/github/managing-security-vulnerabilities/about-github-security-advisories).
| `repository_advisory.cve_request` | Кто-то запросил номер CVE (Распространенные уязвимости и риски) из {% data variables.product.prodname_dotcom %} для черновика рекомендации по безопасности.
| `repository_advisory.github_broadcast` | {% data variables.product.prodname_dotcom %} сделал рекомендацию по безопасности общедоступной в {% data variables.product.prodname_advisory_database %}.
| `repository_advisory.github_withdraw` | {% data variables.product.prodname_dotcom %} отозвал рекомендацию по безопасности, опубликованную по ошибке.
| `repository_advisory.open` | Кто-то открыл черновик рекомендации по безопасности.
| `repository_advisory.publish` | Кто-то опубликовал рекомендацию по безопасности.
| `repository_advisory.reopen` | Кто-то открыл рекомендацию по безопасности как черновик.
| `repository_advisory.update` | Кто-то изменил черновик или опубликованную рекомендацию по безопасности.

## Действия категории `repository_content_analysis`

| Действие | Описание
|--------|-------------
| `repository_content_analysis.enable` | Владелец организации или администратор репозитория [включили параметры использования данных для частного репозитория](/get-started/privacy-on-github/managing-data-use-settings-for-your-private-repository).
| `repository_content_analysis.disable` | Владелец организации или администратор репозитория [отключили параметры использования данных для частного репозитория](/get-started/privacy-on-github/managing-data-use-settings-for-your-private-repository).

## Действия категории `repository_dependency_graph`

| Действие | Описание
|--------|-------------
| `repository_dependency_graph.disable` | Владелец репозитория или администратор отключили граф зависимостей для частного репозитория. Дополнительные сведения см. в разделе [Сведения о графе зависимостей](/github/visualizing-repository-data-with-graphs/about-the-dependency-graph).
| `repository_dependency_graph.enable` | Владелец репозитория или администратор включили граф зависимостей для частного репозитория.
{%- endif %}

## Действия категории `repository_image`

| Действие | Описание
|--------|-------------
| `repository_image.create` | Изображение для представления репозитория было отправлено.
| `repository_image.destroy` | Изображение для представления репозитория было удалено.

## Действия категории `repository_invitation`

| Действие | Описание
|--------|-------------
| `repository_invitation.accept` | Приглашение присоединиться к репозиторию было принято.
| `repository_invitation.create` | Приглашение присоединиться к репозиторию было отправлено.
| `repository_invitation.reject` | Приглашение присоединиться к репозиторию было отменено.

## Действия категории `repository_projects_change`

| Действие | Описание
|--------|-------------
| `repository_projects_change.clear` | Политика проектов репозитория была удалена для организации или для всех организаций предприятия. Администраторы организации теперь могут управлять параметрами проектов репозитория. Дополнительные сведения см. в разделе [Применение политик для проектов на вашем предприятии](/admin/policies/enforcing-policies-for-your-enterprise/enforcing-policies-for-projects-in-your-enterprise).
| `repository_projects_change.disable` | Проекты репозитория были отключены для репозитория, всех репозиториев в организации или всех организаций предприятия.
| `repository_projects_change.enable` | Проекты репозитория были включены для репозитория, всех репозиториев в организации или всех организаций предприятия.

{%- ifversion ghec or ghes or ghae %}
## Действия категории `repository_secret_scanning`

| Действие | Описание
|--------|-------------
| `repository_secret_scanning.disable` | Владелец репозитория или администратор отключили сканирование секретов для {% ifversion ghec %}частного или внутреннего{% endif %}репозитория. Дополнительные сведения см. в статье [Сведения о сканировании секретов](/github/administering-a-repository/about-secret-scanning).
| `repository_secret_scanning.enable` | Владелец репозитория или администратор включили сканирование секретов для {% ifversion ghec %}частного или внутреннего{% endif %}репозитория.
{%- endif %}

{%- ifversion secret-scanning-audit-log-custom-patterns %}

## Действия категории `repository_secret_scanning_custom_pattern`

| Действие | Описание
|------------------|-------------------
| `repository_secret_scanning_custom_pattern.create` | Опубликован пользовательский шаблон для сканирования секретов в репозитории. Дополнительные сведения см. в разделе [Определение пользовательских шаблонов для сканирования секретов](/code-security/secret-scanning/defining-custom-patterns-for-secret-scanning#defining-a-custom-pattern-for-a-repository).
| `repository_secret_scanning_custom_pattern.delete` | Пользовательский шаблон для сканирования секретов в репозитории был удален. Дополнительные сведения см. в разделе [Определение пользовательских шаблонов для сканирования секретов](/code-security/secret-scanning/defining-custom-patterns-for-secret-scanning#removing-a-custom-pattern).
| `repository_secret_scanning_custom_pattern.update` | Изменения в пользовательском шаблоне сохранены для сканирования секретов в репозитории. Дополнительные сведения см. в разделе [Определение пользовательских шаблонов для сканирования секретов](/code-security/secret-scanning/defining-custom-patterns-for-secret-scanning#editing-a-custom-pattern).

## Действия категории `repository_secret_scanning_push_protection`

| Действие | Описание
|------------------|-------------------
| `repository_secret_scanning_push_protection.disable` | Владелец репозитория или администратор отключили граф зависимостей для частного репозитория. Дополнительные сведения см. в разделе [Защита push-уведомлений с помощью сканирования секретов](/code-security/secret-scanning/protecting-pushes-with-secret-scanning).
| `repository_secret_scanning_push_protection.enable` | Владелец репозитория или администратор отключили граф зависимостей для частного репозитория. Дополнительные сведения см. в разделе [Защита push-уведомлений с помощью сканирования секретов](/code-security/secret-scanning/protecting-pushes-with-secret-scanning).
{%- endif %}
## Действия категории `repository_visibility_change`

| Действие | Описание
|--------|-------------
| `repository_visibility_change.clear` | Параметр изменения видимости репозитория был очищен для организации или предприятия. Дополнительные сведения см. в разделах [Ограничение изменений видимости репозитория в организации](/organizations/managing-organization-settings/restricting-repository-visibility-changes-in-your-organization) и [Применение политики для изменения видимости репозитория](/admin/policies/enforcing-policies-for-your-enterprise/enforcing-repository-management-policies-in-your-enterprise#enforcing-a-policy-for-changes-to-repository-visibility) (для предприятия).
| `repository_visibility_change.disable` | Возможность обновлять видимость репозитория для участников предприятия была отключена. Участники не могут изменять видимость репозитория в организации или во всех организациях предприятия.
| `repository_visibility_change.enable` | Возможность обновлять видимость репозитория для участников предприятия была включена. Участники могут изменять видимость репозитория в организации или во всех организациях предприятия.

## Действия категории `repository_vulnerability_alert`

| Действие | Описание
|--------|-------------
| `repository_vulnerability_alert.create` | {% data variables.product.product_name %} создал оповещение {% data variables.product.prodname_dependabot %} для репозитория, использующего небезопасную зависимость. Дополнительные сведения см. в статье "[Сведения о {% data variables.product.prodname_dependabot_alerts %}](/code-security/dependabot/dependabot-alerts/about-dependabot-alerts)".
| `repository_vulnerability_alert.dismiss` | Владелец организации или администратор репозитория отклонил оповещение {% data variables.product.prodname_dependabot %} об уязвимой зависимости{% ifversion GH-advisory-db-supports-malware %} или вредоносной программы{% endif %}.
| `repository_vulnerability_alert.resolve` | Кто-то с доступом на запись в репозиторий отправил изменения, чтобы обновить и разрешить оповещение {% data variables.product.prodname_dependabot %} в зависимости проекта.

{%- ifversion fpt or ghec %}
## Действия категории `repository_vulnerability_alerts`

| Действие | Описание
|--------|-------------
| `repository_vulnerability_alerts.authorized_users_teams` | Владелец организации или администратор репозитория обновили список пользователей или команд, которым разрешено получать оповещения {% data variables.product.prodname_dependabot_alerts %} для репозитория. Дополнительные сведения см. в статье [Управление параметрами безопасности и анализа для репозитория](/github/administering-a-repository/managing-security-and-analysis-settings-for-your-repository#granting-access-to-security-alerts).
| `repository_vulnerability_alerts.disable` | Владелец репозитория или администратор репозитория отключили {% data variables.product.prodname_dependabot_alerts %}.
| `repository_vulnerability_alerts.enable` | Владелец репозитория или администратор репозитория включили {% data variables.product.prodname_dependabot_alerts %}.
{%- endif %}

## Действия категории `required_status_check`

| Действие | Описание
|--------|-------------
| `required_status_check.create` | Проверка состояния помечена как обязательная для защищенной ветви. Дополнительные сведения см. в разделе [Требование проверки состояния перед слиянием](/repositories/configuring-branches-and-merges-in-your-repository/defining-the-mergeability-of-pull-requests/about-protected-branches#require-status-checks-before-merging).
| `required_status_check.destroy` | Проверка состояния больше не помечена как обязательная для защищенной ветви. Дополнительные сведения см. в разделе [Требование проверки состояния перед слиянием](/repositories/configuring-branches-and-merges-in-your-repository/defining-the-mergeability-of-pull-requests/about-protected-branches#require-status-checks-before-merging).

{%- ifversion ghec or ghes %}
## Действия категории `restrict_notification_delivery`

| Действие | Описание
|--------|-------------
| `restrict_notification_delivery.enable` | Включены ограничения уведомлений по электронной почте для организации или предприятия. Дополнительные сведения см. в разделах [Ограничение уведомлений по электронной почте для организации](/organizations/keeping-your-organization-secure/managing-security-settings-for-your-organization/restricting-email-notifications-for-your-organization) и [Ограничение уведомлений по электронной почте для предприятия](/admin/policies/enforcing-policies-for-your-enterprise/restricting-email-notifications-for-your-enterprise).
| `restrict_notification_delivery.disable` | Ограничения уведомлений по электронной почте для организации или предприятия были отключены. Дополнительные сведения см. в разделах [Ограничение уведомлений по электронной почте для организации](/organizations/keeping-your-organization-secure/managing-security-settings-for-your-organization/restricting-email-notifications-for-your-organization) и [Ограничение уведомлений по электронной почте для предприятия](/admin/policies/enforcing-policies-for-your-enterprise/restricting-email-notifications-for-your-enterprise).
{%- endif %}

{%- ifversion custom-repository-roles %}
## Действия категории `role`

| Действие | Описание
|--------|-------------
|`create` | Владелец организации создал новую пользовательскую роль репозитория. Дополнительные сведения см. в разделе [Управление ролями репозитория для организации](/organizations/managing-peoples-access-to-your-organization-with-roles/managing-custom-repository-roles-for-an-organization).
|`destroy` | Владелец организации удалил пользовательскую роль репозитория. Дополнительные сведения см. в разделе [Управление ролями репозитория для организации](/organizations/managing-peoples-access-to-your-organization-with-roles/managing-custom-repository-roles-for-an-organization).
|`update` | Владелец организации изменил существующую пользовательскую роль репозитория. Дополнительные сведения см. в разделе [Управление ролями репозитория для организации](/organizations/managing-peoples-access-to-your-organization-with-roles/managing-custom-repository-roles-for-an-organization).
{%- endif %}

{%- ifversion ghec or ghes or ghae %}
## Действия категории `secret_scanning`

| Действие | Описание
|--------|-------------
| `secret_scanning.disable` | Владелец организации отключил сканирование секретов для всех существующих{% ifversion ghec %} частных или внутренних{% endif %} репозиториев. Дополнительные сведения см. в статье [Сведения о сканировании секретов](/github/administering-a-repository/about-secret-scanning).
| `secret_scanning.enable` | Владелец организации включил сканирование секретов для всех существующих{% ifversion ghec %} частных или внутренних{% endif %} репозиториев.

{% ifversion secret-scanning-alert-audit-log %}
## Действия категории `secret_scanning_alert`

| Действие | Описание
|------------------|-------------------
| `secret_scanning_alert.create` | {% data variables.product.prodname_dotcom %} обнаружил секрет и создал оповещение {% data variables.product.prodname_secret_scanning %}. Дополнительные сведения см. в статье «[Управление оповещениями из {% data variables.product.prodname_secret_scanning %}](/code-security/secret-scanning/managing-alerts-from-secret-scanning)».
| `secret_scanning_alert.reopen` | Пользователь повторно открыл оповещение {% data variables.product.prodname_secret_scanning %}.
| `secret_scanning_alert.resolve` | Пользователь разрешил оповещение {% data variables.product.prodname_secret_scanning %}.
{% endif %}

## Действия категории `secret_scanning_new_repos`

| Действие | Описание
|--------|-------------
| `secret_scanning_new_repos.disable` | Владелец организации отключил сканирование секретов для всех новых{% ifversion ghec %} частных или внутренних{% endif %} репозиториев. Дополнительные сведения см. в статье [Сведения о сканировании секретов](/github/administering-a-repository/about-secret-scanning).
| `secret_scanning_new_repos.enable` | Владелец организации включил сканирование секретов для всех новых{% ifversion ghec %} частных или внутренних{% endif %} репозиториев.
{%- endif %}

{% ifversion secret-scanning-push-protection-bypasses %}
## Действия категории `secret_scanning_push_protection`

| Действие | Описание
|--------|-------------
| `bypass` | Активируется, когда пользователь обходит защиту принудительной отправки секрета, обнаруженную с помощью сканирования секретов. Дополнительные сведения см. в разделе [Обход защиты от принудительной отправки секрета](/code-security/secret-scanning/protecting-pushes-with-secret-scanning#bypassing-push-protection-for-a-secret).{% endif %}

{%- ifversion ghec or ghes or ghae %}
## Действия категории `security_key`

| Действие | Описание
|--------|-------------
| `security_key.register` | Зарегистрирован ключ безопасности для учетной записи.
| `security_key.remove` | Ключ безопасности был удален из учетной записи.
{%- endif %}

{%- ifversion fpt or ghec %}
## Действия категории `sponsors`

| Действие | Описание
|--------|-------------
| `sponsors.agreement_sign` | Соглашение о {% data variables.product.prodname_sponsors %} было подписано от имени организации.
| `sponsors.custom_amount_settings_change` | Пользовательские суммы для {% data variables.product.prodname_sponsors %} были включены или отключены либо предлагаемые пользовательские суммы были изменены. Дополнительные сведения см. в разделе [Управление уровнями спонсорского предложения](/sponsors/receiving-sponsorships-through-github-sponsors/managing-your-sponsorship-tiers).
| `sponsors.fiscal_host_change` | Финансовый узел для описания {% data variables.product.prodname_sponsors %} был обновлен.
| `sponsors.withdraw_agreement_signature` | Из соглашения о {% data variables.product.prodname_sponsors %}, которое применяется к организации, была удалена подпись.
| `sponsors.repo_funding_links_file_action` | Файл FUNDING в репозитории был изменен. Дополнительные сведения см. в разделе [Отображение кнопки "Спонсировать" в репозитории](/repositories/managing-your-repositorys-settings-and-features/customizing-your-repository/displaying-a-sponsor-button-in-your-repository).
| `sponsors.sponsor_sponsorship_cancel` | Спонсорство было отменено. Дополнительные сведения см. в разделе [Понижение уровня спонсорства](/billing/managing-billing-for-github-sponsors/downgrading-a-sponsorship).
| `sponsors.sponsor_sponsorship_create` | Спонсорство было создано путем спонсирования учетной записи. Дополнительные сведения см. в разделе [Спонсорская поддержка участника разработки открытого кода](/sponsors/sponsoring-open-source-contributors/sponsoring-an-open-source-contributor).
| `sponsors.sponsor_sponsorship_payment_complete` | После того как вы проспонсировали счет, а платеж был обработан, спонсорский платеж был помечен как выполненный. Дополнительные сведения см. в разделе [Спонсорская поддержка участника разработки открытого кода](/sponsors/sponsoring-open-source-contributors/sponsoring-an-open-source-contributor).
| `sponsors.sponsor_sponsorship_preference_change` | Параметр получения обновлений по электронной почте от спонсируемой учетной записи был изменен. Дополнительные сведения см. в разделе [Управление спонсорством](/sponsors/sponsoring-open-source-contributors/managing-your-sponsorship).
| `sponsors.sponsor_sponsorship_tier_change` | Спонсорство было обновлено или его уровень был понижен. Дополнительные сведения см. в разделе [Обновление спонсорского предложения](/billing/managing-billing-for-github-sponsors/upgrading-a-sponsorship) и [Понижение уровня спонсорской поддержки](/billing/managing-billing-for-github-sponsors/downgrading-a-sponsorship).
| `sponsors.sponsored_developer_approve` | Учетная запись {% data variables.product.prodname_sponsors %} была утверждена. Дополнительные сведения см. в разделе [Настройка {% data variables.product.prodname_sponsors %} для организации](/sponsors/receiving-sponsorships-through-github-sponsors/setting-up-github-sponsors-for-your-organization).
| `sponsors.sponsored_developer_create` | Была создана учетная запись {% data variables.product.prodname_sponsors %}. Дополнительные сведения см. в разделе [Настройка {% data variables.product.prodname_sponsors %} для организации](/sponsors/receiving-sponsorships-through-github-sponsors/setting-up-github-sponsors-for-your-organization).
| `sponsors.sponsored_developer_disable` | Учетная запись {% data variables.product.prodname_sponsors %} была отключена.
| `sponsors.sponsored_developer_profile_update` | Вы редактируете профиль спонсируемой организации. Дополнительные сведения см. в разделе [Изменение данных профиля для {% data variables.product.prodname_sponsors %}](/sponsors/receiving-sponsorships-through-github-sponsors/editing-your-profile-details-for-github-sponsors).
| `sponsors.sponsored_developer_redraft` | Учетная запись {% data variables.product.prodname_sponsors %} из утвержденного состояния возвращена в состояние черновика.
| `sponsors.sponsored_developer_request_approval` | Приложение для {% data variables.product.prodname_sponsors %} было отправлено на утверждение. Дополнительные сведения см. в разделе [Настройка {% data variables.product.prodname_sponsors %} для организации](/sponsors/receiving-sponsorships-through-github-sponsors/setting-up-github-sponsors-for-your-organization).
| `sponsors.sponsored_developer_tier_description_update` | Описание уровня спонсорства было изменено. Дополнительные сведения см. в разделе [Управление уровнями спонсорского предложения](/sponsors/receiving-sponsorships-through-github-sponsors/managing-your-sponsorship-tiers).
| `sponsors.update_tier_welcome_message` | Приветственное сообщение для уровня {% data variables.product.prodname_sponsors %} в организации было обновлено.
| `sponsors.update_tier_repository` | На уровне {% data variables.product.prodname_sponsors %} изменился доступ для репозитория.
{%- endif %}

{%- ifversion ghec or ghes or ghae %}
## Действия категории `ssh_certificate_authority`

| Действие | Описание
|--------|-------------
| `ssh_certificate_authority.create` | Создан центр сертификации SSH для организации или предприятия. Дополнительные сведения см. в разделах [Управление центрами сертификации SSH организации](/organizations/managing-git-access-to-your-organizations-repositories/managing-your-organizations-ssh-certificate-authorities) и [Управление центрами сертификации SSH для предприятия](/admin/policies/enforcing-policies-for-your-enterprise/enforcing-policies-for-security-settings-in-your-enterprise#managing-ssh-certificate-authorities-for-your-enterprise).
| `ssh_certificate_authority.destroy` | Центр сертификации SSH для организации или предприятия был удален. Дополнительные сведения см. в разделах [Управление центрами сертификации SSH организации](/organizations/managing-git-access-to-your-organizations-repositories/managing-your-organizations-ssh-certificate-authorities) и [Управление центрами сертификации SSH для предприятия](/admin/policies/enforcing-policies-for-your-enterprise/enforcing-policies-for-security-settings-in-your-enterprise#managing-ssh-certificate-authorities-for-your-enterprise).

## Действия категории `ssh_certificate_requirement`

| Действие | Описание
|--------|-------------
| `ssh_certificate_requirement.enable` | Включено требование о том, чтобы участники использовали сертификаты SSH для доступа к ресурсам организации. Дополнительные сведения см. в разделах [Управление центрами сертификации SSH организации](/organizations/managing-git-access-to-your-organizations-repositories/managing-your-organizations-ssh-certificate-authorities) и [Управление центрами сертификации SSH для предприятия](/admin/policies/enforcing-policies-for-your-enterprise/enforcing-policies-for-security-settings-in-your-enterprise#managing-ssh-certificate-authorities-for-your-enterprise).
| `ssh_certificate_requirement.disable` | Требование о том, чтобы участники использовали сертификаты SSH для доступа к ресурсам организации, было отключено. Дополнительные сведения см. в разделах [Управление центрами сертификации SSH организации](/organizations/managing-git-access-to-your-organizations-repositories/managing-your-organizations-ssh-certificate-authorities) и [Управление центрами сертификации SSH для предприятия](/admin/policies/enforcing-policies-for-your-enterprise/enforcing-policies-for-security-settings-in-your-enterprise#managing-ssh-certificate-authorities-for-your-enterprise).
{%- endif %}

{% ifversion sso-redirect %}
## Действия категории `sso_redirect`

{% data reusables.enterprise-managed.sso-redirect-release-phase %}

| Действие | Описание |
|--------|------------ |
`sso_redirect.enable` | Автоматические перенаправления для пользователей на единый вход (SSO) были включены. |
`sso_redirect.disable` | Автоматическое перенаправление пользователей на единый вход (SSO) было отключено. |

Дополнительные сведения см. в разделе [Применение политик для параметров безопасности на предприятии](/admin/policies/enforcing-policies-for-your-enterprise/enforcing-policies-for-security-settings-in-your-enterprise#managing-sso-for-unauthenticated-users).
{% endif %}

## Действия категории `staff`

| Действие | Описание
|--------|-------------
| `staff.disable_repo`          | Администратор организации{% ifversion ghes %}, репозитория или сайта{% else %} или репозитория{% endif %} отключил доступ к репозиторию и всем его вилкам.
| `staff.enable_repo`           | Администратор организации{% ifversion ghes %}, репозитория или сайта{% else %} или репозитория{% endif %} снова включил доступ к репозиторию и всем его вилкам.
{%- ifversion ghes or ghae %} | `staff.exit_fake_login`       | Владелец предприятия{% ifversion ghes %} или администратор сайта{% endif %} завершил сеанс олицетворения в {% data variables.product.product_name %}.
| `staff.fake_login`            | Владелец предприятия{% ifversion ghes %} или администратор сайта{% endif %} вошли в {% data variables.product.product_name %} под именем другого пользователя.
{%- endif %} | `staff.repo_lock`             | Администратор организации{% ifversion ghes %}, репозитория или сайта{% else %} или репозитория{% endif %} заблокировал частный репозиторий пользователя (временно получил к нему полный доступ).
| `staff.repo_unlock`             | Администратор организации{% ifversion ghes %}, репозитория или сайта{% else %} или репозитория{% endif %} разблокировал частный репозиторий пользователя (отменил свой временный доступ к этому репозиторию).
{%- ifversion ghes %} | `staff.search_audit_log` | Администратор сайта выполнил поиск по журналу аудита администратора сайта.
{%- endif %} | `staff.set_domain_token_expiration` | {% ifversion ghes %}Администратор сайта или {% endif %}сотрудники GitHub установили срок действия кода проверки для организации или корпоративного домена. {% ifversion ghec or ghes %}Дополнительные сведения см. в разделах [Проверка или утверждение домена для организации](/organizations/managing-organization-settings/verifying-or-approving-a-domain-for-your-organization) и [Проверка или утверждение домена для предприятия](/admin/configuration/configuring-your-enterprise/verifying-or-approving-a-domain-for-your-enterprise).{% endif %} {%- ifversion ghes %} | `staff.unlock`                | Администратор сайта разблокировал все частные репозитории пользователя (временно получил к ним полный доступ).
{%- endif %} | `staff.unverify_domain` | {% ifversion ghes %}Администратор сайта или {% endif %}сотрудники GitHub отменили проверку домена организации или предприятия. {% ifversion ghec or ghes %}Дополнительные сведения см. в разделах [Проверка или утверждение домена для организации](/organizations/managing-organization-settings/verifying-or-approving-a-domain-for-your-organization) и [Проверка или утверждение домена для предприятия](/admin/configuration/configuring-your-enterprise/verifying-or-approving-a-domain-for-your-enterprise).{% endif %} | `staff.verify_domain` | {% ifversion ghes %}Администратор сайта или {% endif %}сотрудники GitHub проверили домен организации или предприятия. {% ifversion ghec or ghes %}Дополнительные сведения см. в разделах [Проверка или утверждение домена для организации](/organizations/managing-organization-settings/verifying-or-approving-a-domain-for-your-organization) и [Проверка или утверждение домена для предприятия](/admin/configuration/configuring-your-enterprise/verifying-or-approving-a-domain-for-your-enterprise).{% endif %} {%- ifversion ghes %} | `staff.view_audit_log` | Администратор сайта просмотрел журнал аудита администратора сайта.
{%- endif %}

## Действия категории `team`

| Действие | Описание
|--------|-------------
| `team.add_member` | Участник организации добавлен в команду. Дополнительные сведения см. в статье "[Добавление членов организации в команду](/organizations/organizing-members-into-teams/adding-organization-members-to-a-team)".
| `team.add_repository` | Команде был предоставлен доступ и разрешения в отношении репозитория.
| `team.change_parent_team` | Была создана дочерняя команда или родительский объект дочерней команды был изменен. Дополнительные сведения см. в разделе [Перемещение команды в иерархии организации](/organizations/organizing-members-into-teams/moving-a-team-in-your-organizations-hierarchy).
| `team.change_privacy` | Уровень конфиденциальности команды был изменен. Дополнительные сведения см. в разделе [Изменение видимости команды](/organizations/organizing-members-into-teams/changing-team-visibility).
| `team.create` | В команду была добавлена учетная запись пользователя или репозиторий.
| `team.delete` | Учетная запись пользователя или репозиторий были удалены из команды.
| `team.destroy` | Команда была удалена.
{%- ifversion ghec or ghes or ghae %} | `team.demote_maintainer` | Пользователь был понижен с координатора до участника команды.
| `team.promote_maintainer` | Пользователь был повышен с участника до координатора команды. Дополнительные сведения см. в разделе [Повышение участника организации до координатора команды](/organizations/organizing-members-into-teams/assigning-the-team-maintainer-role-to-a-team-member#promoting-an-organization-member-to-team-maintainer).
{%- endif %} | `team.remove_member` | Участник организации был удален из команды. Дополнительные сведения см. в статье [Удаление участников организации из команды](/organizations/organizing-members-into-teams/removing-organization-members-from-a-team).
| `team.remove_repository` | Репозиторий больше не находится под контролем команды.
| `team.rename` | Имя команды было изменено.
| `team.update_permission` | Права доступа команды были изменены.
| `team.update_repository_permission` | Разрешение команды в отношении репозитория было изменено.

## Действия категории `team_discussions`

| Действие | Описание
|--------|-------------
| `team_discussions.clear` | Владелец организации очистил параметр, разрешающий командные обсуждения для организации или предприятия.
| `team_discussions.disable` | Владелец организации отключил командные обсуждения для организации. Дополнительные сведения см. в разделе [Отключение обсуждений группы для вашей организации](/organizations/organizing-members-into-teams/disabling-team-discussions-for-your-organization).
| `team_discussions.enable` | Владелец организации включил командные обсуждения для организации.

{%- ifversion ghec %}
## Действия категории `team_sync_tenant`

| Действие | Описание
|--------|-------------
| `team_sync_tenant.disabled` | Синхронизация команды с клиентом была отключена. Дополнительные сведения см. в разделах [Управление синхронизацией команд в организации](/organizations/managing-saml-single-sign-on-for-your-organization/managing-team-synchronization-for-your-organization) и [Управление синхронизацией команд для организаций предприятия](/admin/identity-and-access-management/managing-iam-for-your-enterprise/managing-team-synchronization-for-organizations-in-your-enterprise).
| `team_sync_tenant.enabled` | Синхронизация команды с клиентом была включена. Дополнительные сведения см. в разделах [Управление синхронизацией команд в организации](/organizations/managing-saml-single-sign-on-for-your-organization/managing-team-synchronization-for-your-organization) и [Управление синхронизацией команд для организаций предприятия](/admin/identity-and-access-management/managing-iam-for-your-enterprise/managing-team-synchronization-for-organizations-in-your-enterprise).
| `team_sync_tenant.update_okta_credentials` | Учетные данные Okta для синхронизации команды с клиентом были изменены.
{%- endif %}

{%- ifversion fpt or ghes %}
## Действия категории `two_factor_authentication`

| Действие | Описание
|--------|-------------
| `two_factor_authentication.disabled` | [Двухфакторная проверка подлинности][2fa] в учетной записи пользователя была отключена.
| `two_factor_authentication.enabled`  | [Двухфакторная проверка подлинности][2fa] в учетной записи пользователя была включена.
| `two_factor_authentication.password_reset_fallback_sms` | Одноразовый код-пароль был отправлен на резервный номер телефона учетной записи пользователя.
| `two_factor_authentication.recovery_codes_regenerated` | Для учетной записи пользователя были созданы двухфакторные коды восстановления.
| `two_factor_authentication.sign_in_fallback_sms` | Одноразовый код-пароль был отправлен на резервный номер телефона учетной записи пользователя.
| `two_factor_authentication.update_fallback` | Резервный способ двухфакторной проверки подлинности для учетной записи пользователя был изменен.
{%- endif %}

  [2fa]: /authentication/securing-your-account-with-two-factor-authentication-2fa/about-two-factor-authentication

{%- ifversion fpt or ghes or ghae %}
## Действия категории `user`

| Действие | Описание
|--------|-------------
| `user.add_email`                  | В учетную запись пользователя был добавлен адрес электронной почты.
| `user.async_delete`               | Было запущено асинхронное задание для уничтожения учетной записи пользователя, что в итоге вызвало событие `user.delete`.
| `user.audit_log_export` | Записи журнала аудита были экспортированы.
| `user.block_user` | Пользователь был заблокирован другим пользователем{% ifversion ghes %} или администратором сайта{% endif %}.
| `user.change_password`            | Пользователь изменил свой пароль.
| `user.create`                     | Создана новая учетная запись пользователя.
| `user.creation_rate_limit_exceeded` | Темпы создания учетных записей пользователей, приложений, проблем, запросов на вытягивание или других ресурсов превысили заданные ограничения либо слишком быстро были осуществлены подписки на слишком большое количество пользователей.
| `user.delete`                     | Учетная запись пользователя была уничтожена асинхронным заданием.
{%- ifversion ghes %} | `user.demote`                     | Администратор сайта был понижен до обычного пользователя.
{%- endif %} | `user.destroy`                    | Пользователь удалил свою учетную запись, активировав `user.async_delete`.
| `user.failed_login`               | Пользователь пытается войти с неправильным именем пользователя, паролем или кодом двухфакторной проверкой подлинности.
| `user.flag_as_large_scale_contributor` | Учетная запись пользователя была помечена как участник со значительным вкладом. Чтобы предотвратить истечение времени ожидания, на диаграмме вкладов пользователей будут отображаться только вклады из принадлежащих пользователю общедоступных репозиториев.
| `user.forgot_password`            | Пользователь запросил сброс пароля на странице входа.
| `user.hide_private_contributions_count` | Пользователь изменил видимость своих частных вкладов. Количество вкладов в частные репозитории в профиле пользователя теперь скрыто. Дополнительные сведения см. в разделе [Публикация или скрытие личных вкладов в своем профиле](/account-and-profile/setting-up-and-managing-your-github-profile/managing-contribution-graphs-on-your-profile/publicizing-or-hiding-your-private-contributions-on-your-profile).
| `user.lockout` | Доступ пользователя к его учетной записи был заблокирован.
| `user.login`                      | Пользователь вошел в систему.
{%- ifversion ghes or ghae %} | `user.mandatory_message_viewed`   | Пользователь посмотрел обязательное сообщение. Дополнительные сведения см. в разделе [Настройка сообщений для пользователей на предприятии](/admin/user-management/managing-users-in-your-enterprise/customizing-user-messages-for-your-enterprise).
{%- endif %} | `user.minimize_comment` | Оставленный пользователем комментарий был свернут.
{%- ifversion ghes %} | `user.promote`                     | Обычный пользователь был повышен до администратора сайта.
{%- endif %} | `user.recreate` | Учетная запись пользователя была восстановлена.
| `user.remove_email`               | Адрес электронной почты удален из учетной записи пользователя.
| `user.remove_large_scale_contributor_flag` | Учетная запись пользователя больше не помечена как участник со значительным вкладом.
| `user.rename`                     | Имя пользователя было изменено.
| `user.reset_password` | Пользователь сбросил пароль своей учетной записи.
| `user.show_private_contributions_count` | Пользователь изменил видимость своих частных вкладов. Количество вкладов в частные репозитории в профиле пользователя теперь отображается. Дополнительные сведения см. в разделе [Публикация или скрытие личных вкладов в своем профиле](/account-and-profile/setting-up-and-managing-your-github-profile/managing-contribution-graphs-on-your-profile/publicizing-or-hiding-your-private-contributions-on-your-profile).
| `user.sign_in_from_unrecognized_device` | Пользователь вошел с нераспознанного устройства.
| `user.sign_in_from_unrecognized_device_and_location` | Пользователь вошел с нераспознанного устройства и расположения.
| `user.sign_in_from_unrecognized_location` | Пользователь вошел из нераспознанного расположения.
| `user.suspend`                    | Учетная запись пользователя была приостановлена владельцем предприятия{% ifversion ghes %} или администратором сайта{% endif %}.
| `user.two_factor_challenge_failure` | Не удалось выполнить запрос двухфакторной проверки подлинности для учетной записи пользователя.
| `user.two_factor_challenge_success` | Запрос двухфакторной проверки подлинности для учетной записи пользователя выполен.
| `user.two_factor_recover` | Пользователь использовал свои коды восстановления двухфакторной проверки подлинности.
| `user.two_factor_recovery_codes_downloaded` | Пользователь скачал коды восстановления двухфакторной проверки подлинности для своей учетной записи.
| `user.two_factor_recovery_codes_printed` | Пользователь распечатал коды восстановления двухфакторной проверки подлинности для своей учетной записи.
| `user.two_factor_recovery_codes_viewed` | Пользователь посмотрел коды восстановления двухфакторной проверки подлинности для своей учетной записи.
| `user.two_factor_requested`       | Пользователю было предложено ввести код двухфакторной проверки подлинности.
| `user.unblock_user` | Пользователь был заблокирован другим пользователем{% ifversion ghes %} или администратором сайта{% endif %}.
| `user.unminimize_comment` | Оставленный пользователем комментарий был развернут.
| `user.unsuspend` | Приостановка учетной записи пользователя владельцем предприятия{% ifversion ghes %} или администратором сайта{% endif %} была отменена.
{%- endif %}

{%- ifversion ghec or ghes %}
## Действия категории `user_license`

| Действие | Описание
|--------|-------------
| `user_license.create` | Создана лицензия на рабочее место для пользователя на предприятии.
| `user_license.destroy` | Лицензия на рабочее место для пользователя на предприятии была удалена.
| `user_license.update` | Лицензия на рабочее место для пользователя на предприятии была изменена.
{%- endif %}

## Действия категории `workflows`

{% data reusables.audit_log.audit-log-events-workflows %}
