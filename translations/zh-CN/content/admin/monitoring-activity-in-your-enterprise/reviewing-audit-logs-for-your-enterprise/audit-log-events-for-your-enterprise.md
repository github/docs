---
title: 企业的审核日志事件
intro: 了解为企业记录的审核日志事件。
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
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 11/28/2022
ms.locfileid: '148183946'
---
{% ifversion ghec%}
## 关于企业的审核日志事件

企业审核日志中显示的事件范围取决于企业是否使用 {% data variables.product.prodname_emus %}。 有关 {% data variables.product.prodname_emus %} 的详细信息，请参阅“[关于 {% data variables.product.prodname_emus %}](/admin/identity-and-access-management/using-enterprise-managed-users-and-saml-for-iam/about-enterprise-managed-users)”。

- 如果企业不使用 {% data variables.product.prodname_emus %}，那么审核日志仅包含与企业帐户和企业帐户中的组织相关的事件，本文中列出了这些事件。
- 如果企业使用 {% data variables.product.prodname_emus %}，则审核日志还包括 {% data variables.enterprise.prodname_managed_users %} 的用户事件，例如用户每次登录到 {% data variables.product.product_name %} 时以及用户在其用户帐户中采取的操作。 有关这些用户帐户事件的列表，请参阅“[查看安全日志](/authentication/keeping-your-account-and-data-secure/reviewing-your-security-log#security-log-actions)”。
{% endif %}

{%- ifversion fpt or ghec %}
## `account` 类别操作

| 操作 | 说明
|--------|-------------
| `account.billing_plan_change` | 更改了组织的计费周期。 有关详细信息，请参阅“[更改计费周期的持续时间](/billing/managing-your-github-billing-settings/changing-the-duration-of-your-billing-cycle)”。
| `account.plan_change` | 更改了组织的订阅。 有关详细信息，请参阅“[关于 GitHub 帐户的计费](/billing/managing-billing-for-your-github-account/about-billing-for-github-accounts)”。
| `account.pending_plan_change` | 取消或降级了组织所有者或计费管理员的付费订阅。 有关详细信息，请参阅“[升级或降级如何影响计费流程？](/billing/managing-billing-for-your-github-account/how-does-upgrading-or-downgrading-affect-the-billing-process)”。
| `account.pending_subscription_change` | {% data variables.product.prodname_marketplace %} 免费试用已开始或已过期。 有关详细信息，请参阅“[关于 GitHub 市场的计费](/billing/managing-billing-for-github-marketplace-apps/about-billing-for-github-marketplace)”。
{%- endif %}

{%- ifversion fpt or ghec %}
## `advisory_credit` 类别操作

| 操作 | 说明
|--------|-------------
| `advisory_credit.accept` | 有人接受了安全公告的额度。 有关详细信息，请参阅“[编辑安全通告](/github/managing-security-vulnerabilities/editing-a-security-advisory)”。
| `advisory_credit.create` | 安全公告的管理员将某人添加到了额度部分。
| `advisory_credit.decline` | 有人拒绝了安全公告的额度。
| `advisory_credit.destroy` | 安全公告的管理员已将某人从额度部分删除。
{%- endif %}

## `artifact` 类别操作

| 操作 | 说明
|--------|-------------
| `artifact.destroy`    | 已手动删除工作流运行工件。

{%- ifversion audit-log-streaming %}
## `audit_log_streaming` 类别操作

| 操作 | 说明
|--------|-------------
| `audit_log_streaming.check` | 已对为审核日志流式处理配置的终结点执行手动检查。
| `audit_log_streaming.create` | 已添加用于审核日志流式处理的终结点。
| `audit_log_streaming.update` | 审核日志流式处理的终结点配置已更新，例如暂停、启用或禁用流。
| `audit_log_streaming.destroy` | 审核日志流式处理终结点已被删除。
{%- endif %}

{%- ifversion fpt or ghec %}
## `billing` 类别操作

| 操作 | 说明
|--------|-------------
| `billing.change_billing_type` | 组织更改了 {% data variables.product.prodname_dotcom %} 的付费方式。 有关详细信息，请参阅“[添加或编辑付款方式](/billing/managing-your-github-billing-settings/adding-or-editing-a-payment-method)”。
| `billing.change_email` | 更改了组织的计费电子邮件地址。 有关详细信息，请参阅“[设置计费电子邮件](/billing/managing-your-github-billing-settings/setting-your-billing-email)”。
{%- endif %}

## `business` 类别操作

| 操作 | 说明
|--------|-------------
| `business.add_admin` | 已将企业所有者{% ifversion ghes %}或站点管理员{% endif %}添加到企业。
{%- ifversion ghec %} | `business.add_billing_manager` | 已将计费管理员添加到企业。
{%- endif %} | `business.add_organization` | 已将组织添加到企业。
{%- ifversion ghec %} | `business.add_support_entitlee` | 已将支持权利添加到企业成员。 有关详细信息，请参阅[管理企业的支持权利](/admin/user-management/managing-users-in-your-enterprise/managing-support-entitlements-for-your-enterprise)。
{%- endif %} {%- ifversion ghes or ghae %} | `business.advanced_security_policy_update` | 企业所有者{% ifversion ghes %}或站点管理员{% endif %}创建、更新或删除了针对 {% data variables.product.prodname_GH_advanced_security %} 的策略。 有关详细信息，请参阅“[在企业中强制实施 {% data variables.product.prodname_advanced_security %} 策略](/admin/policies/enforcing-policies-for-advanced-security-in-your-enterprise)”。
{%- endif %} {%- ifversion ghec %} | `business.cancel_admin_invitation` | 已取消邀请某人担任企业所有者{% ifversion ghes %}或站点管理员{% endif %}。
| `business.cancel_billing_manager_invitation` | 已取消邀请某人担任企业计费管理员。
{%- endif %} {%- ifversion ghes %} | `business.clear_actions_settings` | 企业所有者或站点管理员清除了企业的 {% data variables.product.prodname_actions %} 策略设置。 有关详细信息，请参阅“[在企业中强制实施针对 GitHub Actions 的策略](/admin/policies/enforcing-policies-for-your-enterprise/enforcing-policies-for-github-actions-in-your-enterprise)”。
{%- endif %} | `business.clear_default_repository_permission` | 企业所有者{% ifversion ghes %}或站点管理员{% endif %}清除了企业的基本存储库权限策略设置。 有关详细信息，请参阅“[强制实施针对基本存储库权限的策略](/admin/policies/enforcing-policies-for-your-enterprise/enforcing-repository-management-policies-in-your-enterprise#enforcing-a-policy-for-base-repository-permissions)”。
| `business.clear_members_can_create_repos`      | 企业所有者{% ifversion ghes %}或站点管理员{% endif %}清除了对在企业组织中创建存储库的限制。 有关详细信息，请参阅“[在企业中实施存储库管理策略](/admin/policies/enforcing-repository-management-policies-in-your-enterprise#setting-a-policy-for-repository-creation)”。
| `business.create`                              | 企业已创建。
{%- ifversion ghec %} | `business.disable_oidc` | 已为企业禁用 OIDC 单一登录。 有关详细信息，请参阅“[为 {% data variables.product.prodname_emus %} 配置 OIDC](/admin/identity-and-access-management/using-enterprise-managed-users-for-iam/configuring-oidc-for-enterprise-managed-users)”。
| `business.disable_saml` | 已为企业禁用 SAML 单一登录。
{%- endif %} | `business.disable_two_factor_requirement` | 已禁用成员必须启用双因素身份验证才能访问企业的要求。
{%- ifversion ghec %} | `business.enable_oidc` | 已为企业启用 OIDC 单一登录。 有关详细信息，请参阅“[为 {% data variables.product.prodname_emus %} 配置 OIDC](/admin/identity-and-access-management/using-enterprise-managed-users-for-iam/configuring-oidc-for-enterprise-managed-users)”。
| `business.enable_saml` | 已为企业启用 SAML 单一登录。
{%- endif %} | `business.enable_two_factor_requirement` | 已启用成员必须启用双因素身份验证才能访问企业的要求。
{%- ifversion ghec %} | `business.enterprise_server_license_download` | 已下载 {% data variables.product.prodname_ghe_server %} 许可证。
| `business.import_license_usage` | 已将许可证使用信息从 {% data variables.product.prodname_ghe_server %} 实例导入到 {% data variables.product.prodname_dotcom_the_website %} 上的企业帐户。
| `business.invite_admin` | 已发送请某人担任企业所有者{% ifversion ghes %}或站点管理员{% endif %}的邀请。
| `business.invite_billing_manager` | 已发送请某人担任企业计费管理员的邀请。
{%- endif %} | `business.members_can_update_protected_branches.clear` | 企业所有者{% ifversion ghes %}或站点管理员{% endif %}取消了针对企业成员是否可以更新各个组织的存储库上受保护分支的策略。 组织管理员可以选择是否允许更新受保护的分支设置。
| `business.members_can_update_protected_branches.disable` | 已禁用企业成员更新分支保护规则的功能。 只有企业所有者可以更新受保护的分支。
| `business.members_can_update_protected_branches.enable` | 已启用企业成员更新分支保护规则的功能。 企业所有者和成员可以更新受保护的分支。
| `business.remove_admin` | 企业所有者{% ifversion ghes %}或站点管理员{% endif %}已从企业中移除。
{%- ifversion ghes %} | `business.referrer_override_enable` | 企业所有者或站点管理员启用了引荐者策略替代。 有关详细信息，请参阅“[为企业配置引荐者策略](/admin/configuration/configuring-your-enterprise/configuring-the-referrer-policy-for-your-enterprise)”。
| `business.referrer_override_disable` | 企业所有者或站点管理员禁用了引荐者策略替代。 有关详细信息，请参阅“[为企业配置引荐者策略](/admin/configuration/configuring-your-enterprise/configuring-the-referrer-policy-for-your-enterprise)”。
{%- endif %} {%- ifversion ghec %} | `business.remove_billing_manager` | 计费管理员已从企业中移除。
| `business.remove_member` | 成员已从企业中移除。
{%- endif %} | `business.remove_organization` | 组织已从企业中移除。
{%- ifversion ghec %} | `business.remove_support_entitlee` | 企业中某个成员的支持权利已被删除。 有关详细信息，请参阅[管理企业的支持权利](/admin/user-management/managing-users-in-your-enterprise/managing-support-entitlements-for-your-enterprise)。
{%- endif %} | `business.rename_slug` | 企业 URL 的数据域已重命名。
{%- ifversion ghec %} | `business.revoke_external_identity` | 已撤销企业中某个成员的外部标识。
| `business.revoke_sso_session` | 已撤销企业中某个成员的 SAML 单一登录会话。
{%- endif %} {%- ifversion ghec %} | `business.set_actions_fork_pr_approvals_policy` | 已为企业更改需要审批来自公共分支的工作流的设置。 有关详细信息，请参阅“[在企业中强制实施 {% data variables.product.prodname_actions %} 的策略](/admin/policies/enforcing-policies-for-your-enterprise/enforcing-policies-for-github-actions-in-your-enterprise#enforcing-a-policy-for-fork-pull-requests-in-your-enterprise)”。
{%- endif %} | `business.set_actions_retention_limit` | {% data variables.product.prodname_actions %} 工件和日志的保持期已针对企业进行了更改。 有关详细信息，请参阅“[在企业中强制实施针对 {% data variables.product.prodname_actions %} 的策略](/admin/policies/enforcing-policies-for-your-enterprise/enforcing-policies-for-github-actions-in-your-enterprise#enforcing-a-policy-for-artifact-and-log-retention-in-your-enterprise)”。
{%- ifversion ghec or ghes %} | `business.set_fork_pr_workflows_policy` | 专用存储库分支上的工作流策略已更改。 有关详细信息，请参阅“{% ifversion ghec %}[在企业中强制实施针对 {% data variables.product.prodname_actions %} 的策略](/admin/policies/enforcing-policies-for-your-enterprise/enforcing-policies-for-github-actions-in-your-enterprise#enforcing-a-policy-for-fork-pull-requests-in-private-repositories){% else ifversion ghes > 2.22 %}[为专用存储库分支启用工作流](/admin/github-actions/enabling-github-actions-for-github-enterprise-server/enforcing-github-actions-policies-for-your-enterprise#enabling-workflows-for-private-repository-forks){% endif %}”。
{%- endif %} {%- ifversion audit-log-sso-response-events %} |`business.sso_response` | 当成员尝试向企业进行身份验证时，将生成 SAML 单一登录 (SSO) 响应。 此事件只能通过审核日志流式处理和 REST API 使用。
{%- endif %} {%- ifversion ghes %} | `business.update_actions_settings` | 企业所有者或站点管理员更新了企业的 {% data variables.product.prodname_actions %} 策略设置。 有关详细信息，请参阅“[在企业中强制实施针对 GitHub Actions 的策略](/admin/policies/enforcing-policies-for-your-enterprise/enforcing-policies-for-github-actions-in-your-enterprise)”。
{%- endif %} | `business.update_default_repository_permission` | 已为企业中的所有组织更新基本存储库权限设置。 有关详细信息，请参阅“[强制实施针对基本存储库权限的策略](/admin/policies/enforcing-policies-for-your-enterprise/enforcing-repository-management-policies-in-your-enterprise#enforcing-a-policy-for-base-repository-permissions)”。
| `business.update_member_repository_creation_permission` | 已为企业更新存储库创建设置。 有关详细信息，请参阅“[强制实施用于存储库创建的策略](/admin/policies/enforcing-policies-for-your-enterprise/enforcing-repository-management-policies-in-your-enterprise#enforcing-a-policy-for-repository-creation)”。
| `business.update_member_repository_invitation_permission` | 企业成员邀请外部协作者访问存储库的策略设置已更新。 有关详细信息，请参阅“[强制实施用于邀请外部协作者访问存储库的策略](/admin/policies/enforcing-policies-for-your-enterprise/enforcing-repository-management-policies-in-your-enterprise#enforcing-a-policy-for-inviting-outside-collaborators-to-repositories)”。
{%- ifversion ghec %} | `business.update_saml_provider_settings` | 企业的 SAML 单一登录提供程序设置已更新。
{%- endif %}

{% ifversion code-security-audit-log-events %}

## `business_advanced_security` 类别操作

| 操作 | 说明
|--------|-------------
| `business_advanced_security.disabled` | 已为企业禁用 {% data variables.product.prodname_GH_advanced_security %}。 有关详细信息，请参阅“[管理企业的 {% data variables.product.prodname_GH_advanced_security %}功能](/admin/code-security/managing-github-advanced-security-for-your-enterprise/managing-github-advanced-security-features-for-your-enterprise)”。
| `business_advanced_security.enabled` | 已为企业启用 {% data variables.product.prodname_GH_advanced_security %}。 有关详细信息，请参阅“[管理企业的 {% data variables.product.prodname_GH_advanced_security %}功能](/admin/code-security/managing-github-advanced-security-for-your-enterprise/managing-github-advanced-security-features-for-your-enterprise)”。
| `business_advanced_security.disabled_for_new_repos` | 已为企业中的新存储库禁用 {% data variables.product.prodname_GH_advanced_security %}。 有关详细信息，请参阅“[管理企业的 {% data variables.product.prodname_GH_advanced_security %}功能](/admin/code-security/managing-github-advanced-security-for-your-enterprise/managing-github-advanced-security-features-for-your-enterprise)”。
| `business_advanced_security.enabled_for_new_repos` | 已为企业中的新存储库启用 {% data variables.product.prodname_GH_advanced_security %}。 有关详细信息，请参阅“[管理企业的 {% data variables.product.prodname_GH_advanced_security %}功能](/admin/code-security/managing-github-advanced-security-for-your-enterprise/managing-github-advanced-security-features-for-your-enterprise)”。

{% endif %}

{% ifversion code-security-audit-log-events %}

## `business_secret_scanning` 类别操作

| 操作 | 说明
|--------|-------------
| `business_secret_scanning.disable` | 已为企业禁用{% data variables.product.prodname_secret_scanning_caps %}。 有关详细信息，请参阅“[管理企业的 {% data variables.product.prodname_GH_advanced_security %}功能](/admin/code-security/managing-github-advanced-security-for-your-enterprise/managing-github-advanced-security-features-for-your-enterprise)”。
| `business_secret_scanning.enable` | 已为企业启用{% data variables.product.prodname_secret_scanning_caps %}。 有关详细信息，请参阅“[管理企业的 {% data variables.product.prodname_GH_advanced_security %}功能](/admin/code-security/managing-github-advanced-security-for-your-enterprise/managing-github-advanced-security-features-for-your-enterprise)”。
| `business_secret_scanning.disabled_for_new_repos` | 已为企业中的新存储库禁用 {% data variables.product.prodname_secret_scanning_caps %}。 有关详细信息，请参阅“[管理企业的 {% data variables.product.prodname_GH_advanced_security %}功能](/admin/code-security/managing-github-advanced-security-for-your-enterprise/managing-github-advanced-security-features-for-your-enterprise)”。
| `business_secret_scanning.enabled_for_new_repos` | 已为企业中的新存储库启用{% data variables.product.prodname_secret_scanning_caps %}。 有关详细信息，请参阅“[管理企业的 {% data variables.product.prodname_GH_advanced_security %}功能](/admin/code-security/managing-github-advanced-security-for-your-enterprise/managing-github-advanced-security-features-for-your-enterprise)”。

{% endif %}

{%- ifversion secret-scanning-audit-log-custom-patterns %}
## `business_secret_scanning_custom_pattern` 类别操作

操作                        | 说明
----------------------------- | -----------------------------------------------
| `business_secret_scanning_custom_pattern.create` | 发布企业级自定义模式以进行机密扫描。 有关详细信息，请参阅“[为机密扫描定义自定义模式](/code-security/secret-scanning/defining-custom-patterns-for-secret-scanning#defining-a-custom-pattern-for-an-enterprise-account)”。
| `business_secret_scanning_custom_pattern.delete` | 从机密扫描中删除了企业级自定义模式。
| `business_secret_scanning_custom_pattern.update` | 保存了对企业级自定义模式的更改，以进行机密扫描。
{%- endif %}

{% ifversion code-security-audit-log-events %}

## `business_secret_scanning_push_protection` 类别操作

| 操作 | 说明
|--------|-------------
| `business_secret_scanning_push_protection.disable` | 已为企业禁用{% data variables.product.prodname_secret_scanning %}的推送保护。 有关详细信息，请参阅“[管理企业的 {% data variables.product.prodname_GH_advanced_security %}功能](/admin/code-security/managing-github-advanced-security-for-your-enterprise/managing-github-advanced-security-features-for-your-enterprise)”。
| `business_secret_scanning_push_protection.enable` | 已为企业启用{% data variables.product.prodname_secret_scanning %}的推送保护。 有关详细信息，请参阅“[管理企业的 {% data variables.product.prodname_GH_advanced_security %}功能](/admin/code-security/managing-github-advanced-security-for-your-enterprise/managing-github-advanced-security-features-for-your-enterprise)”。
| `business_secret_scanning_push_protection.disabled_for_new_repos` | 已为企业中的新存储库禁用{% data variables.product.prodname_secret_scanning %}的推送保护。 有关详细信息，请参阅“[管理企业的 {% data variables.product.prodname_GH_advanced_security %}功能](/admin/code-security/managing-github-advanced-security-for-your-enterprise/managing-github-advanced-security-features-for-your-enterprise)”。
| `business_secret_scanning_push_protection.enabled_for_new_repos` | 已为企业中的新存储库启用{% data variables.product.prodname_secret_scanning %}的推送保护。 有关详细信息，请参阅“[管理企业的 {% data variables.product.prodname_GH_advanced_security %}功能](/admin/code-security/managing-github-advanced-security-for-your-enterprise/managing-github-advanced-security-features-for-your-enterprise)”。

{% endif %}

{% ifversion code-security-audit-log-events %}

## `business_secret_scanning_push_protection_custom_message` 类别操作

| 操作 | 说明
|--------|-------------
| `business_secret_scanning_push_protection_custom_message.disable` | 已为企业禁用尝试推送到受推送保护的存储库而触发的自定义消息。 有关详细信息，请参阅“[管理企业的 {% data variables.product.prodname_GH_advanced_security %}功能](/admin/code-security/managing-github-advanced-security-for-your-enterprise/managing-github-advanced-security-features-for-your-enterprise)”。
| `business_secret_scanning_push_protection_custom_message.enable` | 已为企业启用尝试推送到受推送保护的存储库而触发的自定义消息。 有关详细信息，请参阅“[管理企业的 {% data variables.product.prodname_GH_advanced_security %}功能](/admin/code-security/managing-github-advanced-security-for-your-enterprise/managing-github-advanced-security-features-for-your-enterprise)”。
| `business_secret_scanning_push_protection_custom_message.update` | 已为企业更新尝试推送到受推送保护的存储库而触发的自定义消息。 有关详细信息，请参阅“[管理企业的 {% data variables.product.prodname_GH_advanced_security %}功能](/admin/code-security/managing-github-advanced-security-for-your-enterprise/managing-github-advanced-security-features-for-your-enterprise)”。

{% endif %}

## `checks` 类别操作

| 操作 | 说明
|--------|-------------
| `checks.auto_trigger_disabled` | 已在组织或企业中的存储库上禁用自动创建检查套件功能。 有关详细信息，请参阅“[更新检查套件的存储库首选项](/rest/reference/checks#update-repository-preferences-for-check-suites)”。
| `checks.auto_trigger_enabled` | 已在组织或企业中的存储库上启用自动创建检查套件功能。 有关详细信息，请参阅“[更新检查套件的存储库首选项](/rest/reference/checks#update-repository-preferences-for-check-suites)”。
{%- ifversion fpt or ghec %} | `checks.delete_logs` | 检查套件中的日志已被删除。
{%- endif %}

{%- ifversion fpt or ghec %}
## `codespaces` 类别操作

| 操作 | 说明
|--------|-------------
| `codespaces.connect` | codespace 已启动。
| `codespaces.create` | 用户[创建了 codespace](/github/developing-online-with-codespaces/creating-a-codespace)。
| `codespaces.destroy` | 用户[删除了 codespace](/github/developing-online-with-codespaces/deleting-a-codespace)。
| `codespaces.allow_permissions` | 使用来自其 `devcontainer.json` 文件的自定义权限的 codespace 已启动。
| `codespaces.attempted_to_create_from_prebuild` | 尝试从预生成创建一个 codespace。
| `codespaces.create_an_org_secret` | 用户为 [{% data variables.product.prodname_github_codespaces %}](/github/developing-online-with-codespaces/managing-encrypted-secrets-for-codespaces#about-encrypted-secrets-for-codespaces) 创建了组织级机密
| `codespaces.update_an_org_secret` | 用户为 [{% data variables.product.prodname_github_codespaces %}](/github/developing-online-with-codespaces/managing-encrypted-secrets-for-codespaces#about-encrypted-secrets-for-codespaces) 更新了组织级机密。
| `codespaces.remove_an_org_secret` | 用户为 [{% data variables.product.prodname_github_codespaces %}](/github/developing-online-with-codespaces/managing-encrypted-secrets-for-codespaces#about-encrypted-secrets-for-codespaces) 删除了组织级机密。
| `codespaces.manage_access_and_security` | 用户更新了 [codespace 可访问的存储库](/github/developing-online-with-codespaces/managing-access-and-security-for-codespaces)。
{%- endif %}

{%- ifversion fpt or ghec %}
## `commit_comment` 类别操作

| 操作 | 说明
|--------|-------------
| `commit_comment.destroy` | 提交评论已被删除。
| `commit_comment.update` | 提交评论已更新。
{%- endif %}

{%- ifversion ghes %}
## `config_entry` 类别操作

| 操作 | 说明
|--------|-------------
| `config_entry.create` | 已创建配置设置。 这些事件仅在站点管理员审核日志中可见。 记录的事件类型包括：</br>- 企业设置和策略</br>- 组织和存储库权限及设置</br>- Git、Git LFS、{% data variables.product.prodname_github_connect %}、{% data variables.product.prodname_registry %}、项目和代码安全设置。
| `config_entry.destroy` | 配置设置已被删除。 这些事件仅在站点管理员审核日志中可见。 记录的事件类型包括：</br>- 企业设置和策略</br>- 组织和存储库权限及设置</br>- Git、Git LFS、{% data variables.product.prodname_github_connect %}、{% data variables.product.prodname_registry %}、项目和代码安全设置。
| `config_entry.update` | 已编辑配置设置。 这些事件仅在站点管理员审核日志中可见。 记录的事件类型包括：</br>- 企业设置和策略</br>- 组织和存储库权限及设置</br>- Git、Git LFS、{% data variables.product.prodname_github_connect %}、{% data variables.product.prodname_registry %}、项目和代码安全设置。
{%- endif %}

## `dependabot_alerts` 类别操作

| 操作 | 说明
|--------|-------------
| `dependabot_alerts.disable` | 企业所有者{% ifversion ghes %}或站点管理员{% endif %}为所有现有的{% ifversion fpt or ghec %}专用{% endif %}存储库禁用了 {% data variables.product.prodname_dependabot_alerts %}。 有关详细信息，请参阅[管理组织的安全和分析设置](/organizations/keeping-your-organization-secure/managing-security-and-analysis-settings-for-your-organization)。
| `dependabot_alerts.enable` | 企业所有者{% ifversion ghes %}或站点管理员{% endif %}为所有现有的{% ifversion fpt or ghec %}专用{% endif %}存储库启用了 {% data variables.product.prodname_dependabot_alerts %}。

## `dependabot_alerts_new_repos` 类别操作

| 操作 | 说明
|--------|-------------
| `dependabot_alerts_new_repos.disable` | 企业所有者{% ifversion ghes %}或站点管理员{% endif %}为所有新的{% ifversion fpt or ghec %}专用{% endif %}存储库禁用了 {% data variables.product.prodname_dependabot_alerts %}。 有关详细信息，请参阅[管理组织的安全和分析设置](/organizations/keeping-your-organization-secure/managing-security-and-analysis-settings-for-your-organization)。
| `dependabot_alerts_new_repos.enable` | 企业所有者{% ifversion ghes %}或站点管理员{% endif %}为所有新的{% ifversion fpt or ghec %}专用{% endif %}存储库启用了 {% data variables.product.prodname_dependabot_alerts %}。

## `dependabot_repository_access` 类别操作

| 操作 | 说明
|--------|-------------
| `dependabot_repository_access.repositories_updated` | {% data variables.product.prodname_dependabot %} 可以访问的存储库已更新。

{%- ifversion fpt or ghec or ghes %}
## `dependabot_security_updates` 类别操作

| 操作 | 说明
|--------|-------------
| `dependabot_security_updates.disable` | 企业所有者{% ifversion ghes %}或站点管理员{% endif %}为所有现有存储库禁用了 {% data variables.product.prodname_dependabot_security_updates %}。 有关详细信息，请参阅[管理组织的安全和分析设置](/organizations/keeping-your-organization-secure/managing-security-and-analysis-settings-for-your-organization)。
| `dependabot_security_updates.enable` | 企业所有者{% ifversion ghes %}或站点管理员{% endif %}为所有现有存储库启用了 {% data variables.product.prodname_dependabot_security_updates %}。

## `dependabot_security_updates_new_repos` 类别操作

| 操作 | 说明
|--------|-------------
| `dependabot_security_updates_new_repos.disable` | 企业所有者{% ifversion ghes %}或站点管理员{% endif %}为所有新的存储库禁用了 {% data variables.product.prodname_dependabot_security_updates %}。 有关详细信息，请参阅[管理组织的安全和分析设置](/organizations/keeping-your-organization-secure/managing-security-and-analysis-settings-for-your-organization)。
| `dependabot_security_updates_new_repos.enable` | 企业所有者{% ifversion ghes %}或站点管理员{% endif %}为所有新的存储库启用了 {% data variables.product.prodname_dependabot_security_updates %}。
{%- endif %}

## `dependency_graph` 类别操作

| 操作 | 说明
|--------|-------------
| `dependency_graph.disable` | 企业所有者{% ifversion ghes %}或站点管理员{% endif %}为所有现有存储库禁用了依赖项关系图。 有关详细信息，请参阅[管理组织的安全和分析设置](/organizations/keeping-your-organization-secure/managing-security-and-analysis-settings-for-your-organization)。
| `dependency_graph.enable` | 企业所有者{% ifversion ghes %}或站点管理员{% endif %}为所有现有存储库启用了依赖项关系图。

## `dependency_graph_new_repos` 类别操作

| 操作 | 说明
|--------|-------------
| `dependency_graph_new_repos.disable` | 企业所有者{% ifversion ghes %}或站点管理员{% endif %}为所有新的存储库禁用了依赖项关系图。 有关详细信息，请参阅[管理组织的安全和分析设置](/organizations/keeping-your-organization-secure/managing-security-and-analysis-settings-for-your-organization)。
| `dependency_graph_new_repos.enable` | 企业所有者{% ifversion ghes %}或站点管理员{% endif %}为所有新的存储库启用了依赖项关系图。

{%- ifversion fpt or ghec %}
## `discussion` 类别操作

| 操作 | 说明
|--------|-------------
| `discussion.destroy` | 团队讨论已被删除。

## `discussion_comment` 类别操作

| 操作 | 说明
|--------|-------------
| `discussion_comment.destroy` | [对团队讨论帖子的评论已被删除](/communities/moderating-comments-and-conversations/managing-disruptive-comments#deleting-a-comment)。
| `discussion_comment.update` | [已编辑对团队讨论帖子的评论](/communities/moderating-comments-and-conversations/managing-disruptive-comments#editing-a-comment)。

## `discussion_post` 类别操作

| 操作 | 说明
|--------|-------------
| `discussion_post.destroy` | [团队讨论帖子已被删除](/organizations/collaborating-with-your-team/editing-or-deleting-a-team-discussion)。
| `discussion_post.update` | [已编辑团队讨论帖子](/organizations/collaborating-with-your-team/editing-or-deleting-a-team-discussion)。

## `discussion_post_reply` 类别操作

| 操作 | 说明
|--------|-------------
| `discussion_post_reply.destroy` | [对团队讨论帖子的回复已被删除](/communities/moderating-comments-and-conversations/managing-disruptive-comments#deleting-a-comment)。
| `discussion_post_reply.update` | [已编辑对团队讨论帖子的回复](/communities/moderating-comments-and-conversations/managing-disruptive-comments#editing-a-comment)。
{%- endif %}

{%- ifversion ghec or ghes %}
## `dotcom_connection` 类别操作

| 操作 | 说明
|--------|-------------
| `dotcom_connection.create` | 与 {% data variables.product.prodname_dotcom_the_website %} 的 {% data variables.product.prodname_github_connect %} 连接已创建。
| `dotcom_connection.destroy` | 与 {% data variables.product.prodname_dotcom_the_website %} 的 {% data variables.product.prodname_github_connect %} 连接已被删除。
| `dotcom_connection.token_updated` | {% data variables.product.prodname_dotcom_the_website %} 的 {% data variables.product.prodname_github_connect %} 连接令牌已更新。
| `dotcom_connection.upload_license_usage` | {% data variables.product.prodname_ghe_server %} 许可证使用情况已手动上传到 {% data variables.product.prodname_ghe_cloud %}。
| `dotcom_connection.upload_usage_metrics` | {% data variables.product.prodname_ghe_server %} 使用指标已上传到 {% data variables.product.prodname_dotcom_the_website %}。
{%- endif %}

## `enterprise` 类别操作

| 操作 | 说明
|--------|-------------
| `enterprise.config.disable_anonymous_git_access`   | 企业所有者{% ifversion ghes %}或站点管理员{% endif %}禁用了对企业中的存储库的匿名 Git 读取访问权限。 有关详细信息，请参阅“[在企业中实施存储库管理策略](/admin/policies/enforcing-repository-management-policies-in-your-enterprise#configuring-anonymous-git-read-access)”。
| `enterprise.config.enable_anonymous_git_access`   | 企业所有者{% ifversion ghes %}或站点管理员{% endif %}启用了对企业中的存储库的匿名 Git 读取访问权限。 有关详细信息，请参阅“[在企业中实施存储库管理策略](/admin/policies/enforcing-repository-management-policies-in-your-enterprise#configuring-anonymous-git-read-access)”。
| `enterprise.config.lock_anonymous_git_access`   | 企业所有者{% ifversion ghes %}或站点管理员{% endif %}锁定了匿名 Git 读取访问权限，以防止存储库管理员更改企业中存储库的现有匿名 Git 读取访问权限设置。 有关详细信息，请参阅“[在企业中实施存储库管理策略](/admin/policies/enforcing-repository-management-policies-in-your-enterprise#configuring-anonymous-git-read-access)”。
| `enterprise.config.unlock_anonymous_git_access` | 企业所有者{% ifversion ghes %}或站点管理员{% endif %}解锁了匿名 Git 读取访问权限，以允许存储库管理员更改企业中存储库的现有匿名 Git 读取访问权限设置。 有关详细信息，请参阅“[在企业中实施存储库管理策略](/admin/policies/enforcing-repository-management-policies-in-your-enterprise#configuring-anonymous-git-read-access)”。
| `enterprise.register_self_hosted_runner` | 已注册新的 {% data variables.product.prodname_actions %} 自托管运行器。 有关详细信息，请参阅“[将自托管运行器添加到存储库](/actions/hosting-your-own-runners/adding-self-hosted-runners#adding-a-self-hosted-runner-to-a-repository)”。
| `enterprise.remove_self_hosted_runner` | {% data variables.product.prodname_actions %} 自托管运行器已被删除。 有关详细信息，请参阅“[从存储库中删除运行器](/actions/hosting-your-own-runners/removing-self-hosted-runners#removing-a-runner-from-a-repository)”。
| `enterprise.runner_group_created` | 已创建 {% data variables.product.prodname_actions %} 自托管运行器组。 有关详细信息，请参阅“[为组织创建自托管运行器组](/actions/hosting-your-own-runners/managing-access-to-self-hosted-runners-using-groups#creating-a-self-hosted-runner-group-for-an-organization)”。
| `enterprise.runner_group_removed` | {% data variables.product.prodname_actions %} 自托管运行器组已被删除。 有关详细信息，请参阅“[删除自托管运行器组](/actions/hosting-your-own-runners/managing-access-to-self-hosted-runners-using-groups#removing-a-self-hosted-runner-group)”。
| `enterprise.runner_group_renamed` | 已对 {% data variables.product.prodname_actions %} 自托管运行器组进行重命名。 有关详细信息，请参阅“[更改自托管运行器组的访问策略](/actions/hosting-your-own-runners/managing-access-to-self-hosted-runners-using-groups#changing-the-access-policy-of-a-self-hosted-runner-group)”。
| `enterprise.runner_group_updated` | {% data variables.product.prodname_actions %} 自托管运行器组的配置已更改。 有关详细信息，请参阅“[更改自托管运行器组的访问策略](/actions/hosting-your-own-runners/managing-access-to-self-hosted-runners-using-groups#changing-the-access-policy-of-a-self-hosted-runner-group)”。
| `enterprise.runner_group_runner_removed` |  REST API 用于从组中删除 {% data variables.product.prodname_actions %} 自托管运行器。 有关详细信息，请参阅“[为组织从组中删除自托管运行器](/rest/reference/actions#remove-a-self-hosted-runner-from-a-group-for-an-organization)”。
| `enterprise.runner_group_runners_added` | 已将 {% data variables.product.prodname_actions %} 自托管运行器添加到组中。 有关详细信息，请参阅“[将自托管运行器移动到组](/actions/hosting-your-own-runners/managing-access-to-self-hosted-runners-using-groups#moving-a-self-hosted-runner-to-a-group)”。
| `enterprise.runner_group_runners_updated`|  {% data variables.product.prodname_actions %} 运行器组的成员列表已更新。 有关详细信息，请参阅“[为组织设置自托管运行器](/rest/reference/actions#set-self-hosted-runners-in-a-group-for-an-organization)”。
{%- ifversion ghec %} | `enterprise.runner_group_visiblity_updated` | {% data variables.product.prodname_actions %} 自托管运行器组的可见性已通过 REST API 更新。 有关详细信息，请参阅“[更新组织的自托管运行器组](/rest/reference/actions#update-a-self-hosted-runner-group-for-an-organization)”。
{%- endif %} {%- ifversion ghec or ghes or ghae %} | `enterprise.self_hosted_runner_online` | {% data variables.product.prodname_actions %} 运行器应用程序已启动。 只能使用 REST API 查看；在 UI 或 JSON/CSV 导出中不可见。 有关详细信息，请参阅“[检查自托管运行器的状态](/actions/hosting-your-own-runners/monitoring-and-troubleshooting-self-hosted-runners#checking-the-status-of-a-self-hosted-runner)”。
| `enterprise.self_hosted_runner_offline` | {% data variables.product.prodname_actions %} 运行器应用程序已停止。 只能使用 REST API 查看；在 UI 或 JSON/CSV 导出中不可见。 有关详细信息，请参阅“[检查自托管运行器的状态](/actions/hosting-your-own-runners/monitoring-and-troubleshooting-self-hosted-runners#checking-the-status-of-a-self-hosted-runner)”。
{%- endif %} {%- ifversion ghec or ghes %} | `enterprise.self_hosted_runner_updated` | {% data variables.product.prodname_actions %} 运行器应用程序已更新。 可以使用 REST API 和 UI 查看；在 JSON /CSV 导出中不可见。 有关详细信息，请参阅[关于自承载运行器](/actions/hosting-your-own-runners/about-self-hosted-runners#about-self-hosted-runners)。
{%- endif %}

{%- ifversion ghec %}
## `enterprise_domain` 类别操作

| 操作 | 说明
|--------|-------------
| `enterprise_domain.approve` | 企业域已获批用于企业。 有关详细信息，请参阅“[审批企业帐户的域](/admin/configuration/configuring-your-enterprise/verifying-or-approving-a-domain-for-your-enterprise#approving-a-domain-for-your-enterprise-account)”。
| `enterprise_domain.create` | 已将企业域添加到企业。 有关详细信息，请参阅“[验证企业帐户的域](/admin/configuration/configuring-your-enterprise/verifying-or-approving-a-domain-for-your-enterprise#verifying-a-domain-for-your-enterprise-account)”。
| `enterprise_domain.destroy` | 企业域已从企业中删除。 有关详细信息，请参阅“[删除已获批准或已验证的域](/admin/configuration/configuring-your-enterprise/verifying-or-approving-a-domain-for-your-enterprise#removing-an-approved-or-verified-domain)”。
| `enterprise_domain.verify` | 已为企业验证企业域。 有关详细信息，请参阅“[验证企业帐户的域](/admin/configuration/configuring-your-enterprise/verifying-or-approving-a-domain-for-your-enterprise#verifying-a-domain-for-your-enterprise-account)”。

## `enterprise_installation` 类别操作

| 操作 | 说明
|--------|-------------
| `enterprise_installation.create` | 已创建与 {% data variables.product.prodname_github_connect %} 企业连接关联的 {% data variables.product.prodname_github_app %}。
| `enterprise_installation.destroy` | 与 {% data variables.product.prodname_github_connect %} 企业连接关联的 {% data variables.product.prodname_github_app %} 已被删除。
| `enterprise_installation.token_updated` | 属于与 {% data variables.product.prodname_github_connect %} 企业连接关联的 {% data variables.product.prodname_github_app %} 的令牌已更新。
{%- endif %}

{%- ifversion fpt or ghec %}
## `environment` 类别操作

| 操作 | 说明
|--------|-------------
| `environment.add_protection_rule` | 通过 API 创建了 {% data variables.product.prodname_actions %} 环境保护规则。 有关详细信息，请参阅“[环境保护规则](/actions/deployment/targeting-different-environments/using-environments-for-deployment#environment-protection-rules)”。
| `environment.create_actions_secret` | 已通过 API 为 {% data variables.product.prodname_actions %} 环境创建机密。 有关详细信息，请参阅“[环境机密](/actions/deployment/targeting-different-environments/using-environments-for-deployment#environment-secrets)”。
| `environment.delete` | 已通过 API 删除环境。 有关详细信息，请参阅“[删除环境](/actions/deployment/targeting-different-environments/using-environments-for-deployment#deleting-an-environment)”。
| `environment.remove_actions_secret` | 已通过 API 删除 {% data variables.product.prodname_actions %} 环境的机密。 有关详细信息，请参阅“[环境机密](/actions/deployment/targeting-different-environments/using-environments-for-deployment#environment-secrets)”。
| `environment.remove_protection_rule` | 已通过 API 删除 {% data variables.product.prodname_actions %} 环境保护规则。 有关详细信息，请参阅“[环境保护规则](/actions/deployment/targeting-different-environments/using-environments-for-deployment#environment-protection-rules)”。
| `environment.update_actions_secret` | 已通过 API 更新 {% data variables.product.prodname_actions %} 环境的机密。 有关详细信息，请参阅“[环境机密](/actions/deployment/targeting-different-environments/using-environments-for-deployment#environment-secrets)”。
| `environment.update_protection_rule` | 已通过 API 更新 {% data variables.product.prodname_actions %} 环境保护规则。 有关详细信息，请参阅“[环境保护规则](/actions/deployment/targeting-different-environments/using-environments-for-deployment#environment-protection-rules)”。
{%- endif %}

{%- ifversion ghae %}
## `external_group` 类别操作

| 操作 | 说明
|--------|-------------
| `external_group.delete` | Okta 组已被删除。 有关详细信息，请参阅“[将 Okta 组映射到团队](/admin/identity-and-access-management/configuring-authentication-and-provisioning-with-your-identity-provider/mapping-okta-groups-to-teams)”。
| `external_group.link` | Okta 组已映射到 {% data variables.product.prodname_ghe_managed %} 团队。 有关详细信息，请参阅“[将 Okta 组映射到团队](/admin/identity-and-access-management/configuring-authentication-and-provisioning-with-your-identity-provider/mapping-okta-groups-to-teams)”。
| `external_group.provision` | Okta 组已映射到 {% data variables.product.prodname_ghe_managed %} 上的团队。 有关详细信息，请参阅“[将 Okta 组映射到团队](/admin/identity-and-access-management/configuring-authentication-and-provisioning-with-your-identity-provider/mapping-okta-groups-to-teams)”。
| `external_group.unlink` | Okta 组已从 {% data variables.product.prodname_ghe_managed %} 团队取消映射。 有关详细信息，请参阅“[将 Okta 组映射到团队](/admin/identity-and-access-management/configuring-authentication-and-provisioning-with-your-identity-provider/mapping-okta-groups-to-teams)”。
| `external_group.update` | Okta 组的设置已更新。 有关详细信息，请参阅“[将 Okta 组映射到团队](/admin/identity-and-access-management/configuring-authentication-and-provisioning-with-your-identity-provider/mapping-okta-groups-to-teams)”。

## `external_identity` 类别操作
| 操作 | 说明
|--------|-------------
| `external_identity.deprovision` | 用户已从 Okta 组中删除，随后从 {% data variables.product.prodname_ghe_managed %} 中取消了预配。 有关详细信息，请参阅“[将 Okta 组映射到团队](/admin/identity-and-access-management/configuring-authentication-and-provisioning-with-your-identity-provider/mapping-okta-groups-to-teams)”。
| `external_identity.provision` | Okta 用户已添加到 Okta 组，随后在 {% data variables.product.prodname_ghe_managed %} 上预配给已映射的团队。 有关详细信息，请参阅“[将 Okta 组映射到团队](/admin/identity-and-access-management/configuring-authentication-and-provisioning-with-your-identity-provider/mapping-okta-groups-to-teams)”。
| `external_identity.update` | Okta 用户的设置已更新。 有关详细信息，请参阅“[将 Okta 组映射到团队](/admin/identity-and-access-management/configuring-authentication-and-provisioning-with-your-identity-provider/mapping-okta-groups-to-teams)”。
{%- endif %}

## `gist` 类别操作

| 操作 | 说明
|--------|-------------
| `gist.create` | 创建了 Gist。
| `gist.destroy` | 删除了 Gist。
| `gist.visibility_change` | 更改了 Gist 的可见性。

{% ifversion git-events-audit-log %}
## `git` 类别操作

{% ifversion enable-git-events %}必须先在审核日志中启用 Git 事件，然后才能查看 `git` 类别操作。 有关详细信息，请参阅“[为企业配置审核日志](/admin/monitoring-activity-in-your-enterprise/reviewing-audit-logs-for-your-enterprise/configuring-the-audit-log-for-your-enterprise#managing-git-events-in-the-audit-log)”。
{% endif %}

{% data reusables.audit_log.git-events-not-in-search-results %}

| 操作 | 说明
|--------|-------------
| `git.clone` | 已克隆存储库。
| `git.fetch` | 已从存储库中获取更改。
| `git.push`  | 已将更改推送到存储库。
{% endif %}

## `hook` 类别操作

| 操作 | 说明
|--------|-------------
{%- ifversion ghes or ghae %} | `hook.active_changed`             | 挂钩的活动状态已更新。
{%- endif %} | `hook.config_changed`             | 挂钩的配置已更改。
| `hook.create`                     | 已添加新的挂钩。
| `hook.destroy`                    | 已删除挂钩。
| `hook.events_changed`             | 已更改挂钩的配置事件。

## `integration` 类别操作

| 操作 | 说明
|--------|-------------
| `integration.create` | 已创建集成。
| `integration.destroy` | 已删除集成。
| `integration.manager_added` | 已将企业或组织的成员添加为集成管理员。
| `integration.manager_removed` | 企业或组织的成员已从集成管理员中移除。
| `integration.transfer` | 已将集成的所有权转让给其他用户或组织。
| `integration.remove_client_secret` | 已删除集成的客户端密码。
| `integration.revoke_all_tokens` | 已请求撤销用于集成的所有用户令牌。
| `integration.revoke_tokens` | 用于集成的令牌已被撤销。

## `integration_installation` 类别操作

| 操作 | 说明
|--------|-------------
| `integration_installation.contact_email_changed` | 集成的联系人电子邮件已更改。
| `integration_installation.create` | 已安装集成。
| `integration_installation.destroy` | 已卸载集成。
| `integration_installation.repositories_added` | 存储库已添加到集成中。
| `integration_installation.repositories_removed` | 存储库已从集成中删除。
{%- ifversion fpt or ghec %} | `integration_installation.suspend` | 集成已暂停。
| `integration_installation.unsuspend` | 集成已恢复访问权限。
{%- endif %} | `integration_installation.version_updated` | 集成的权限已更新。

## `integration_installation_request` 类别操作

| 操作 | 说明
|--------|-------------
| `integration_installation_request.create` | 成员请求所有者安装可在企业或组织中使用的集成。
| `integration_installation_request.close` | 安装可在企业或组织中使用的集成的请求被所有者批准或拒绝，或被打开请求的成员取消。

{%- ifversion ghec or ghae %}
## `ip_allow_list` 类别操作

| 操作 | 说明
|--------|-------------
| `ip_allow_list.enable`               | IP 允许列表已启用。
| `ip_allow_list.enable_for_installed_apps` | 已为安装的 {% data variables.product.prodname_github_apps %} 启用 IP 允许列表。
| `ip_allow_list.disable`              | IP 允许列表已禁用。
| `ip_allow_list.disable_for_installed_apps` | 已为安装的 {% data variables.product.prodname_github_apps %} 禁用 IP 允许列表。

## `ip_allow_list_entry` 类别操作

| 操作 | 说明
|--------|-------------
| `ip_allow_list_entry.create` | IP 地址已添加到 IP 允许列表中。
| `ip_allow_list_entry.update` | IP 地址或描述已更改。
| `ip_allow_list_entry.destroy` | IP 地址已从 IP 允许列表中删除。
{%- endif %}

## `issue` 类别操作

| 操作 | 说明
|--------|-------------
| `issue.destroy`                      | 已从仓库中删除问题。 有关详细信息，请参阅“[删除问题](/issues/tracking-your-work-with-issues/deleting-an-issue)”。
| `issue.pinned`                       | 已将某个问题固定到存储库。 有关详细信息，请参阅“[将问题固定到存储库](/issues/tracking-your-work-with-issues/pinning-an-issue-to-your-repository)”。
| `issue.transfer`                     | 已将某个问题转移到另一个存储库。 有关详细信息，请参阅“[将问题转移到其他存储库](/issues/tracking-your-work-with-issues/transferring-an-issue-to-another-repository)”。
| `issue.unpinned`                     | 已从存储库中取消固定某个问题。 有关详细信息，请参阅“[将问题固定到存储库](/issues/tracking-your-work-with-issues/pinning-an-issue-to-your-repository)”。

## `issue_comment` 类别操作

| 操作 | 说明
|--------|-------------
| `issue_comment.destroy`  | 已从存储库中删除对某个问题的评论。
| `issue_comment.pinned`   | 已将对某个问题的评论固定到存储库中。
| `issue_comment.unpinned` | 已从存储库中取消固定对某个问题的评论。
| `issue_comment.update`   | 已更改问题的正文文本（初始注释）。

## `issues` 类别操作

| 操作 | 说明
|--------|-------------
| `issues.deletes_disabled` | 已禁用企业成员删除问题的功能。 成员不能删除企业中任何组织中的问题。 有关详细信息，请参阅“[强制实施用于删除问题的策略](/admin/policies/enforcing-policies-for-your-enterprise/enforcing-repository-management-policies-in-your-enterprise#enforcing-a-policy-for-deleting-issues)”。
| `issues.deletes_enabled` | 已启用企业成员删除问题的功能。 成员可以删除企业中任何组织中的问题。 有关详细信息，请参阅“[强制实施用于删除问题的策略](/admin/policies/enforcing-policies-for-your-enterprise/enforcing-repository-management-policies-in-your-enterprise#enforcing-a-policy-for-deleting-issues)”。
| `issues.deletes_policy_cleared` | 企业所有者{% ifversion ghes %}或站点管理员{% endif %}清除了允许成员删除企业中问题的策略设置。 有关详细信息，请参阅“[强制实施用于删除问题的策略](/admin/policies/enforcing-policies-for-your-enterprise/enforcing-repository-management-policies-in-your-enterprise#enforcing-a-policy-for-deleting-issues)”。

{%- ifversion fpt or ghec %}
## `marketplace_agreement_signature` 类别操作

| 操作 | 说明
|--------|-------------
| `marketplace_agreement_signature.create` | 用户以组织身份签署了 {% data variables.product.prodname_marketplace %} 开发人员协议。

## `marketplace_listing` 类别操作

| 操作 | 说明
|--------|-------------
| `marketplace_listing.approve` | 已获批准在 {% data variables.product.prodname_marketplace %} 中包含一个列表。
| `marketplace_listing.change_category` | {% data variables.product.prodname_marketplace %} 中应用列表的类别已更改。
| `marketplace_listing.create` | 已在 {% data variables.product.prodname_marketplace %} 中创建应用列表。
| `marketplace_listing.delist` | 已从 {% data variables.product.prodname_marketplace %} 中删除列表。
| `marketplace_listing.redraft` | 一个列表已被发送回草稿状态。
| `marketplace_listing.reject` | 不接受在 {% data variables.product.prodname_marketplace %} 中包含一个列表。
{%- endif %}

## `members_can_create_pages` 类别操作

| 操作 | 说明
|--------|-------------
| `members_can_create_pages.disable` | 已禁用成员发布 {% data variables.product.prodname_pages %} 的功能。 成员不能在组织中发布 {% data variables.product.prodname_pages %}。 有关详细信息，请参阅“[管理组织的 GitHub Pages 站点发布](/organizations/managing-organization-settings/managing-the-publication-of-github-pages-sites-for-your-organization)”。
| `members_can_create_pages.enable` | 已启用成员发布 {% data variables.product.prodname_pages %} 的功能。 成员可以在组织中发布 {% data variables.product.prodname_pages %}。 有关详细信息，请参阅“[管理组织的 GitHub Pages 站点发布](/organizations/managing-organization-settings/managing-the-publication-of-github-pages-sites-for-your-organization)”。

## `members_can_create_private_pages` 类别操作

| 操作 | 说明
|--------|-------------
| `members_can_create_private_pages.disable` | 已禁用成员发布专用 {% data variables.product.prodname_pages %} 的功能。 成员不能在组织中发布专用 {% data variables.product.prodname_pages %}。 有关详细信息，请参阅“[管理组织的 GitHub Pages 站点发布](/organizations/managing-organization-settings/managing-the-publication-of-github-pages-sites-for-your-organization)”。
| `members_can_create_private_pages.enable` |  已启用成员发布专用 {% data variables.product.prodname_pages %} 的功能。 成员可以在组织中发布专用 {% data variables.product.prodname_pages %}。 有关详细信息，请参阅“[管理组织的 GitHub Pages 站点发布](/organizations/managing-organization-settings/managing-the-publication-of-github-pages-sites-for-your-organization)”。

## `members_can_create_public_pages` 类别操作

| 操作 | 说明
|--------|-------------
| `members_can_create_public_pages.disable` |  已禁用成员发布公共 {% data variables.product.prodname_pages %} 的功能。 成员不能在组织中发布公共 {% data variables.product.prodname_pages %}。 有关详细信息，请参阅“[管理组织的 GitHub Pages 站点发布](/organizations/managing-organization-settings/managing-the-publication-of-github-pages-sites-for-your-organization)”。
| `members_can_create_public_pages.enable` |  已启用成员发布公共 {% data variables.product.prodname_pages %} 的功能。 成员可以在组织中发布公共 {% data variables.product.prodname_pages %}。 有关详细信息，请参阅“[管理组织的 GitHub Pages 站点发布](/organizations/managing-organization-settings/managing-the-publication-of-github-pages-sites-for-your-organization)”。

{%- ifversion ghec or ghes or ghae %}
## `members_can_delete_repos` 类别操作

| 操作 | 说明
|--------|-------------
| `members_can_delete_repos.clear` | 企业所有者{% ifversion ghes %}或站点管理员{% endif %}清除了用于删除或转移企业中任何组织中的存储库的策略设置。 有关详细信息，请参阅“[强制实施用于删除和转移存储库的策略](/admin/policies/enforcing-policies-for-your-enterprise/enforcing-repository-management-policies-in-your-enterprise#enforcing-a-policy-for-repository-deletion-and-transfer)”。
| `members_can_delete_repos.disable` | 已禁用企业成员删除存储库的功能。 成员不能删除或转移企业内任何组织中的存储库。 有关详细信息，请参阅“[强制实施用于删除和转移存储库的策略](/admin/policies/enforcing-policies-for-your-enterprise/enforcing-repository-management-policies-in-your-enterprise#enforcing-a-policy-for-repository-deletion-and-transfer)”。
| `members_can_delete_repos.enable` |  已启用企业成员删除存储库的功能。 成员可以删除或转移企业中任何组织中的存储库。 有关详细信息，请参阅“[强制实施用于删除和转移存储库的策略](/admin/policies/enforcing-policies-for-your-enterprise/enforcing-repository-management-policies-in-your-enterprise#enforcing-a-policy-for-repository-deletion-and-transfer)”。

## `members_can_view_dependency_insights` 类别操作

| 操作 | 说明
|--------|-------------
| `members_can_view_dependency_insights.clear` | 企业所有者{% ifversion ghes %}或站点管理员{% endif %}清除了用于查看企业中任何组织中的依赖项见解的策略设置。{% ifversion ghec %}有关详细信息，请参阅“[强制实施针对依赖项见解可见性的策略](/admin/policies/enforcing-policies-for-your-enterprise/enforcing-policies-for-dependency-insights-in-your-enterprise)”。{% endif %}
| `members_can_view_dependency_insights.disable` | 已禁用企业成员查看依赖项见解的功能。 成员无法查看企业中任何组织的依赖项见解。{% ifversion ghec %}有关详细信息，请参阅“[强制实施针对依赖项见解可见性的策略](/admin/policies/enforcing-policies-for-your-enterprise/enforcing-policies-for-dependency-insights-in-your-enterprise)”。{% endif %}
| `members_can_view_dependency_insights.enable` |  已启用企业成员查看依赖项见解的功能。 成员可以查看企业中任何组织的依赖项见解。{% ifversion ghec %}有关详细信息，请参阅“[强制实施针对依赖项见解可见性的策略](/admin/policies/enforcing-policies-for-your-enterprise/enforcing-policies-for-dependency-insights-in-your-enterprise)”。{% endif %}

## `migration` 类别操作

| 操作 | 说明
|--------|-------------
| `migration.create` | 已创建迁移文件，用于将数据从源位置（例如 {% data variables.product.prodname_dotcom_the_website %} 组织或 {% data variables.product.prodname_ghe_server %} 实例）传输到目标 {% data variables.product.prodname_ghe_server %} 实例 。
| `migration.destroy_file` | 已删除迁移文件，用于将数据从源位置（例如 {% data variables.product.prodname_dotcom_the_website %} 组织或 {% data variables.product.prodname_ghe_server %} 实例）传输到目标 {% data variables.product.prodname_ghe_server %} 实例 。
|  `migration.download` | 已下载迁移文件，用于将数据从源位置（例如 {% data variables.product.prodname_dotcom_the_website %} 组织或 {% data variables.product.prodname_ghe_server %} 实例）传输到目标 {% data variables.product.prodname_ghe_server %} 实例 。
{%- endif %}

## `oauth_access` 类别操作

| 操作 | 说明
|--------|-------------
`oauth_access.create`   | 已为用户帐户生成 [OAuth 访问令牌][]。 有关详细信息，请参阅“[创建{% data variables.product.pat_generic %}](/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token)”。
`oauth_access.destroy`  | 已从用户帐户中删除 [OAuth 访问令牌][]。

  [OAuth 访问令牌]: /developers/apps/building-oauth-apps/authorizing-oauth-apps

## `oauth_application` 类别操作

| 操作 | 说明
|--------|-------------
| `oauth_application.create`           | 已为用户或组织帐户创建 [OAuth 应用程序][]。
| `oauth_application.destroy`          | 已从用户或组织帐户中删除 [OAuth 应用程序][]。
{%- ifversion fpt or ghec %} | `oauth_application.generate_client_secret`   | 已生成 [OAuth 应用程序][]的密钥。
| `oauth_application.remove_client_secret`     | [OAuth 应用程序][]的密钥已被删除。
{%- endif %} | `oauth_application.reset_secret`      | [OAuth 应用程序][]的密钥已重置。
{%- ifversion fpt or ghec %} | `oauth_application.revoke_all_tokens` | 已请求撤销 [OAuth 应用程序][]的所有用户令牌。
{%- endif %} | `oauth_application.revoke_tokens`     | [OAuth 应用程序][]的令牌已被撤销。
| `oauth_application.transfer`          | [OAuth 应用程序][]已从一个用户或组织帐户转移到另一个用户或组织帐户。
{%- ifversion ghes or ghae %} | `oauth_application.unsuspend`         | 用户或组织帐户的 [OAuth 应用程序][]已恢复访问权限。
{%- endif %}

  [OAuth 应用程序]: /guides/basics-of-authentication/#registering-your-app

{%- ifversion fpt or ghec %}
## `oauth_authorization` 类别操作

| 操作 | 说明
|--------|-------------
| `oauth_authorization.create`          | 已创建 OAuth 应用程序的授权。 有关详细信息，请参阅“[授权 OAuth 应用](/authentication/keeping-your-account-and-data-secure/authorizing-oauth-apps)”。
| `oauth_authorization.destroy`          | 已删除 OAuth 应用程序的授权。 有关详细信息，请参阅“[授权 OAuth 应用](/authentication/keeping-your-account-and-data-secure/authorizing-oauth-apps)”。
| `oauth_authorization.update`          | 已更新 OAuth 应用程序的授权。 有关详细信息，请参阅“[授权 OAuth 应用](/authentication/keeping-your-account-and-data-secure/authorizing-oauth-apps)”。
{%- endif %}

## `org` 类别操作

| 操作 | 说明
|--------|-------------
| `org.accept_business_invitation` | 已接受发送给组织的关于加入企业的邀请。 {% ifversion ghec %}有关详细信息，请参阅“[邀请组织加入企业帐户](/admin/user-management/managing-organizations-in-your-enterprise/adding-organizations-to-your-enterprise#inviting-an-organization-to-join-your-enterprise-account)”。{% endif %}
| `org.add_billing_manager` | 计费管理员已添加到组织中。 {% ifversion fpt or ghec %}有关详细信息，请参阅“[为组织添加计费管理员](/organizations/managing-peoples-access-to-your-organization-with-roles/adding-a-billing-manager-to-your-organization)”。{% endif %}
| `org.add_member` | 用户已加入组织。
| `org.advanced_security_disabled_for_new_repos` | 已为组织中的新存储库禁用 {% data variables.product.prodname_GH_advanced_security %}。
| `org.advanced_security_disabled_on_all_repos` | 已为组织中的所有存储库禁用 {% data variables.product.prodname_GH_advanced_security %}。
| `org.advanced_security_enabled_for_new_repos` | 已为组织中的新存储库启用 {% data variables.product.prodname_GH_advanced_security %}。
| `org.advanced_security_enabled_on_all_repos` | 已为组织中的所有存储库启用 {% data variables.product.prodname_GH_advanced_security %}。
| `org.advanced_security_policy_selected_member_disabled` | 企业所有者阻止为组织拥有的存储库启用 {% data variables.product.prodname_GH_advanced_security %} 功能。 {% data reusables.advanced-security.more-information-about-enforcement-policy %}
| `org.advanced_security_policy_selected_member_enabled` | 企业所有者允许为组织拥有的存储库启用 {% data variables.product.prodname_GH_advanced_security %} 功能。 {% data reusables.advanced-security.more-information-about-enforcement-policy %}
| `org.advanced_security_policy_update` | 组织所有者在企业中更新了 {% data variables.product.prodname_GH_advanced_security %} 策略。 {% data reusables.advanced-security.more-information-about-enforcement-policy %}
| `org.async_delete` | 用户发起了删除组织的后台作业。
{%- ifversion ghec %} | `org.audit_log_export` | 组织所有者创建了组织审核日志的导出。 如果导出包含查询，则日志将列出所使用的查询以及与该查询匹配的审核日志条目数量。 有关详细信息，请参阅“[企业审核日志活动](/admin/monitoring-activity-in-your-enterprise/reviewing-audit-logs-for-your-enterprise/exporting-audit-log-activity-for-your-enterprise)”。
{%- endif %} | `org.block_user` | 组织所有者阻止了用户访问组织的存储库。 {% ifversion fpt or ghec %}有关详细信息，请参阅“[阻止用户访问组织](/communities/maintaining-your-safety-on-github/blocking-a-user-from-your-organization)”。{% endif %} | `org.cancel_business_invitation` | 组织加入企业的邀请已被撤销。 {% ifversion ghec %}有关详细信息，请参阅“[邀请组织加入企业帐户](/admin/user-management/managing-organizations-in-your-enterprise/adding-organizations-to-your-enterprise#inviting-an-organization-to-join-your-enterprise-account)”。{% endif %} | `org.cancel_invitation` | 向用户发送的加入组织的邀请已被撤销。
| `org.clear_actions_settings` |  组织所有者清除了组织的 {% data variables.product.prodname_actions %} 策略设置。 有关详细信息，请参阅“[管理组织的 GitHub Actions 权限](/organizations/managing-organization-settings/disabling-or-limiting-github-actions-for-your-organization#managing-github-actions-permissions-for-your-organization)”。
| `org.clear_default_repository_permission` | 组织所有者清除了组织的基本存储库权限策略设置。 有关详细信息，请参阅“[设置基本权限](/organizations/managing-access-to-your-organizations-repositories/setting-base-permissions-for-an-organization#setting-base-permissions)”。
| `org.clear_member_team_creation_permission` | 组织所有者清除了组织的新团队创建设置。 有关详细信息，请参阅“[在组织中设置团队创建权限](/organizations/managing-organization-settings/setting-team-creation-permissions-in-your-organization)”。
| `org.clear_reader_discussion_creation_permission` | 组织所有者清除了组织的新的讨论创建设置。 {% ifversion fpt or ghec %}有关详细信息，请参阅“[允许或禁止具有读取访问权限的用户创建讨论](/organizations/managing-organization-settings/managing-discussion-creation-for-repositories-in-your-organization)”。{% endif %} | `org.clear_members_can_create_repos`                 | 组织所有者清除了对组织中存储库创建的限制。 有关详细信息，请参阅“[限制组织中的存储库创建](/organizations/managing-organization-settings/restricting-repository-creation-in-your-organization)”。
| `org.clear_members_can_invite_outside_collaborators` | 组织所有者清除了组织的外部协作者邀请策略。 有关详细信息，请参阅“[设置添加外部协作者的权限](/organizations/managing-organization-settings/setting-permissions-for-adding-outside-collaborators)”。
| `org.clear_new_repository_default_branch_setting`    | 组织所有者清除了组织的新建存储库设置的默认分支名称。 有关详细信息，请参阅“[设置默认分支名称](/organizations/managing-organization-settings/managing-the-default-branch-name-for-repositories-in-your-organization#setting-the-default-branch-name)”。
{%- ifversion fpt or ghec %} | `org.codespaces_trusted_repo_access_granted`         | 已授予 {% data variables.product.prodname_github_codespaces %} 对组织中所有其他存储库的受信任存储库访问权限。 有关详细信息，请参阅“[管理组织 codespace 的存储库访问](/codespaces/managing-codespaces-for-your-organization/managing-repository-access-for-your-organizations-codespaces)”。
| `org.codespaces_trusted_repo_access_revoked`         | {% data variables.product.prodname_github_codespaces %} 对组织中所有其他存储库的受信任存储库访问权限已被撤销。 有关详细信息，请参阅“[管理组织 codespace 的存储库访问](/codespaces/managing-codespaces-for-your-organization/managing-repository-access-for-your-organizations-codespaces)”。
{%- endif %}                                                                                                             | | `org.config.disable_collaborators_only` | 已禁用仅针对组织的协作者的交互限制。 {% ifversion fpt or ghec %}有关详细信息，请参阅“[限制组织中的交互](/communities/moderating-comments-and-conversations/limiting-interactions-in-your-organization#limiting-interactions-in-your-organization)”。{% endif %} | `org.config.disable_contributors_only` | 已禁用仅针对组织的之前参与者的交互限制。 {% ifversion fpt or ghec %}有关详细信息，请参阅“[限制组织中的交互](/communities/moderating-comments-and-conversations/limiting-interactions-in-your-organization#limiting-interactions-in-your-organization)”。{% endif %} | `org.config.disable_sockpuppet_disallowed` | 已禁用仅针对组织的现有用户的交互限制。 {% ifversion fpt or ghec %}有关详细信息，请参阅“[限制组织中的交互](/communities/moderating-comments-and-conversations/limiting-interactions-in-your-organization#limiting-interactions-in-your-organization)”。{% endif %} | `org.config.enable_collaborators_only` | 已启用仅针对组织的协作者的交互限制。 {% ifversion fpt or ghec %}有关详细信息，请参阅“[限制组织中的交互](/communities/moderating-comments-and-conversations/limiting-interactions-in-your-organization#limiting-interactions-in-your-organization)”。{% endif %} | `org.config.enable_contributors_only` | 已启用仅针对组织的之前参与者的交互限制。 {% ifversion fpt or ghec %}有关详细信息，请参阅“[限制组织中的交互](/communities/moderating-comments-and-conversations/limiting-interactions-in-your-organization#limiting-interactions-in-your-organization)”。{% endif %} | `org.config.enable_sockpuppet_disallowed` | 已启用仅针对组织的现有用户的交互限制。 {% ifversion fpt or ghec %}有关详细信息，请参阅“[限制组织中的交互](/communities/moderating-comments-and-conversations/limiting-interactions-in-your-organization#limiting-interactions-in-your-organization)”。{% endif %} | `org.confirm_business_invitation` | 已确认组织加入企业的邀请。 {% ifversion ghec %}有关详细信息，请参阅“[邀请组织加入企业帐户](/admin/user-management/managing-organizations-in-your-enterprise/adding-organizations-to-your-enterprise#inviting-an-organization-to-join-your-enterprise-account)”。{% endif %} | `org.create` | 组织已创建。 有关详细信息，请参阅[从头开始创建新组织](/organizations/collaborating-with-groups-in-organizations/creating-a-new-organization-from-scratch)。
{%- ifversion fpt or ghec or ghes %} | `org.create_actions_secret` | 已为组织创建 {% data variables.product.prodname_actions %} 机密。 有关详细信息，请参阅“[为组织创建加密机密](/actions/reference/encrypted-secrets#creating-encrypted-secrets-for-an-organization)”。
{%- endif %} | `org.create_integration_secret` | 已为组织创建 {% data variables.product.prodname_dependabot %}{% ifversion fpt or ghec %} 或 {% data variables.product.prodname_github_codespaces %}{% endif %} 集成机密。
| `org.delete`       | 组织已由用户发起的后台作业删除。
| `org.disable_member_team_creation_permission` | 组织所有者将团队创建限制为所有者。 有关详细信息，请参阅“[在组织中设置团队创建权限](/organizations/managing-organization-settings/setting-team-creation-permissions-in-your-organization)”。
| `org.disable_reader_discussion_creation_permission` | 组织所有者将讨论创建限制为组织中至少具有会审权限的用户。 {% ifversion fpt or ghec %}有关详细信息，请参阅“[允许或禁止具有读取访问权限的用户创建讨论](/organizations/managing-organization-settings/managing-discussion-creation-for-repositories-in-your-organization)”。{% endif %} {%- ifversion fpt or ghec %} | `org.disable_oauth_app_restrictions` | 已禁用组织的第三方应用程序访问权限限制。 有关详细信息，请参阅“[为组织禁用 OAuth 应用访问权限限制](/organizations/restricting-access-to-your-organizations-data/disabling-oauth-app-access-restrictions-for-your-organization)”。
{%- endif %} {%- ifversion ghec %} | `org.disable_saml` | 组织所有者为组织禁用了 SAML 单一登录。
{%- endif %} {%- ifversion not ghae %} | `org.disable_two_factor_requirement` | 组织所有者为组织中的所有成员{% ifversion fpt or ghec %}、计费管理员{% endif %}和外部协作者禁用了双因素身份验证要求。
{%- endif %} | `org.display_commenter_full_name_disabled` | 组织所有者禁用了在组织中显示评论者全名的功能。 成员无法看到评论作者的全名。
| `org.display_commenter_full_name_enabled` | 组织所有者启用了在组织中显示评论者全名的功能。 成员可以看到评论作者的全名。
| `org.enable_member_team_creation_permission` | 组织所有者允许成员创建团队。 有关详细信息，请参阅“[在组织中设置团队创建权限](/organizations/managing-organization-settings/setting-team-creation-permissions-in-your-organization)”。
| `org.enable_reader_discussion_creation_permission` | 组织所有者允许具有读取访问权限的用户在组织中创建讨论。 {% ifversion fpt or ghec %}有关详细信息，请参阅“[允许或禁止具有读取访问权限的用户创建讨论](/organizations/managing-organization-settings/managing-discussion-creation-for-repositories-in-your-organization)”。{% endif %} {%- ifversion fpt or ghec %} | `org.enable_oauth_app_restrictions` | 已启用组织的第三方应用程序访问权限限制。 有关详细信息，请参阅“[为组织启用 OAuth 应用访问权限限制](/organizations/restricting-access-to-your-organizations-data/enabling-oauth-app-access-restrictions-for-your-organization)”。
{%- endif %} {%- ifversion ghec %} | `org.enable_saml` | 组织所有者为组织[启用了 SAML 单一登录](/organizations/managing-saml-single-sign-on-for-your-organization/enabling-and-testing-saml-single-sign-on-for-your-organization)。
{%- endif %} {%- ifversion not ghae %} | `org.enable_two_factor_requirement` | 组织所有者需要对组织中的所有成员{% ifversion fpt or ghec %}、计费管理员{% endif %}和外部协作者进行双因素身份验证。
{%- endif %} | `org.integration_manager_added` | 组织所有者授予了成员对管理组织拥有的所有 GitHub 应用的访问权限。
| `org.integration_manager_removed` | 组织所有者删除了组织成员对管理组织拥有的所有 GitHub 应用的访问权限。
| `org.invite_member` | 邀请新用户加入了组织。 {% ifversion fpt or ghec %}有关详细信息，请参阅“[邀请用户加入组织](/organizations/managing-membership-in-your-organization/inviting-users-to-join-your-organization)”。{% endif %} | `org.invite_to_business` | 邀请组织加入了企业。
| `org.members_can_update_protected_branches.clear` | 组织所有者取消设置针对组织成员是否可以更新组织中存储库上受保护分支的策略。 组织管理员可以选择是否允许更新受保护的分支设置。
| `org.members_can_update_protected_branches.disable` | 已禁用企业成员更新受保护分支的功能。 只有企业所有者可以更新受保护的分支。
| `org.members_can_update_protected_branches.enable` |  已启用企业成员更新受保护分支的功能。 组织成员可以更新受保护的分支。
{%- ifversion fpt or ghec %} | `org.oauth_app_access_approved` | 所有者[向组织授予了对 {% data variables.product.prodname_oauth_app %} 的访问权限](/organizations/restricting-access-to-your-organizations-data/approving-oauth-apps-for-your-organization)。
| `org.oauth_app_access_denied` | 所有者[禁用了先前批准的对组织的 {% data variables.product.prodname_oauth_app %} 访问权限](/organizations/restricting-access-to-your-organizations-data/denying-access-to-a-previously-approved-oauth-app-for-your-organization)。
| `org.oauth_app_access_requested` | 组织成员请求所有者授予对组织的 {% data variables.product.prodname_oauth_app %} 访问权限。
{%- endif %} | `org.recreate` | 组织已还原。
| `org.register_self_hosted_runner` | 已注册新的自托管运行器。 有关详细信息，请参阅“[将自托管运行器添加到组织](/actions/hosting-your-own-runners/adding-self-hosted-runners#adding-a-self-hosted-runner-to-an-organization)”。
| `org.remove_actions_secret` | {% data variables.product.prodname_actions %} 机密已被删除。
| `org.remove_integration_secret` | 已从组织中删除 {% data variables.product.prodname_dependabot %}{% ifversion fpt or ghec %} 或 {% data variables.product.prodname_github_codespaces %}{% endif %} 集成机密。
| `org.remove_billing_manager` | 所有者从组织中删除了计费管理员。 {% ifversion fpt or ghec %}有关详细信息，请参阅“[从组织中删除计费管理员](/organizations/managing-peoples-access-to-your-organization-with-roles/removing-a-billing-manager-from-your-organization)”{% endif %}{% ifversion not ghae %}，或当[组织中需要双因素身份验证](/organizations/keeping-your-organization-secure/managing-two-factor-authentication-for-your-organization/requiring-two-factor-authentication-in-your-organization)，而计费管理员未使用 2FA 或禁用了 2FA 时。{% endif %} | `org.remove_member` | [所有者从组织中删除了成员](/organizations/managing-membership-in-your-organization/removing-a-member-from-your-organization){% ifversion not ghae %}，或当[组织中需要双因素身份验证](/organizations/keeping-your-organization-secure/managing-two-factor-authentication-for-your-organization/requiring-two-factor-authentication-in-your-organization)，而组织成员未使用 2FA 或禁用了 2FA 时{% endif %}。 [组织成员也将从组织中删除自己](/account-and-profile/setting-up-and-managing-your-personal-account-on-github/managing-your-membership-in-organizations/removing-yourself-from-an-organization)。
| `org.remove_outside_collaborator` | 所有者从组织中删除了外部协作者{% ifversion not ghae %}，或当[组织中需要双因素身份验证](/organizations/keeping-your-organization-secure/managing-two-factor-authentication-for-your-organization/requiring-two-factor-authentication-in-your-organization)，而外部协作者未使用 2FA 或禁用了 2FA 时{% endif %}。
| `org.remove_self_hosted_runner` | 已删除自托管运行器。 有关详细信息，请参阅“[从组织中删除运行器](/actions/hosting-your-own-runners/removing-self-hosted-runners#removing-a-runner-from-an-organization)”。
| `org.rename` | 组织已重命名。
| `org.restore_member` | 组织成员已还原。 有关详细信息，请参阅“[恢复组织的前成员](/organizations/managing-membership-in-your-organization/reinstating-a-former-member-of-your-organization)”。
{%- ifversion ghec %} | `org.revoke_external_identity` | 组织所有者撤销了成员的关联标识。 有关详细信息，请参阅“[查看和管理成员对组织的 SAML 访问权限](/organizations/granting-access-to-your-organization-with-saml-single-sign-on/viewing-and-managing-a-members-saml-access-to-your-organization#viewing-and-revoking-a-linked-identity)”。
| `org.revoke_sso_session` | 组织所有者撤销了成员的 SAML 会话。 有关详细信息，请参阅“[查看和管理成员对组织的 SAML 访问权限](/organizations/granting-access-to-your-organization-with-saml-single-sign-on/viewing-and-managing-a-members-saml-access-to-your-organization#viewing-and-revoking-a-linked-identity)”。
{%- endif %} | `org.runner_group_created` | 已创建自托管运行器组。 有关详细信息，请参阅“[为组织创建自托管运行器组](/actions/hosting-your-own-runners/managing-access-to-self-hosted-runners-using-groups#creating-a-self-hosted-runner-group-for-an-organization)”。
| `org.runner_group_removed` | 已删除自托管运行器组。 有关详细信息，请参阅“[删除自托管运行器组](/actions/hosting-your-own-runners/managing-access-to-self-hosted-runners-using-groups#removing-a-self-hosted-runner-group)”。
{%- ifversion fpt or ghec %} | `org.runner_group_renamed` | 自托管运行器组已重命名。 有关详细信息，请参阅“[更改自托管运行器组的访问策略](/actions/hosting-your-own-runners/managing-access-to-self-hosted-runners-using-groups#changing-the-access-policy-of-a-self-hosted-runner-group)”。
{%- endif %} | `org.runner_group_updated` | 自托管运行器组的配置已更改。 有关详细信息，请参阅“[更改自托管运行器组的访问策略](/actions/hosting-your-own-runners/managing-access-to-self-hosted-runners-using-groups#changing-the-access-policy-of-a-self-hosted-runner-group)”。
| `org.runner_group_runner_removed` |  REST API 用于从组中删除自托管运行器。 有关详细信息，请参阅“[为组织从组中删除自托管运行器](/rest/reference/actions#remove-a-self-hosted-runner-from-a-group-for-an-organization)”。
| `org.runner_group_runners_added` | 将自托管运行器添加到组中。 有关详细信息，请参阅“[将自托管运行器移动到组](/actions/hosting-your-own-runners/managing-access-to-self-hosted-runners-using-groups#moving-a-self-hosted-runner-to-a-group)”。
| `org.runner_group_runners_updated`|  运行器组的成员名单已更新。 有关详细信息，请参阅“[为组织设置自托管运行器](/rest/reference/actions#set-self-hosted-runners-in-a-group-for-an-organization)”。
{%- ifversion fpt or ghec %} | `org.runner_group_visiblity_updated` | 自托管运行器组的可见性已通过 REST API 进行更新。 有关详细信息，请参阅“[更新组织的自托管运行器组](/rest/reference/actions#update-a-self-hosted-runner-group-for-an-organization)”。
{%- endif %} {%- ifversion code-security-audit-log-events %} | `org.secret_scanning_push_protection_custom_message_disabled` | 已为组织禁用尝试推送到受推送保护的存储库而触发的自定义消息。 有关详细信息，请参阅“[用 {% data variables.product.prodname_secret_scanning %} 保护推送](/code-security/secret-scanning/protecting-pushes-with-secret-scanning#enabling-secret-scanning-as-a-push-protection-for-an-organization)”。
| `org.secret_scanning_push_protection_custom_message_enabled` | 已为组织启用尝试推送到受推送保护的存储库而触发的自定义消息。 有关详细信息，请参阅“[用 {% data variables.product.prodname_secret_scanning %} 保护推送](/code-security/secret-scanning/protecting-pushes-with-secret-scanning#enabling-secret-scanning-as-a-push-protection-for-an-organization)”。
| `org.secret_scanning_push_protection_custom_message_updated` | 已为组织更新尝试推送到受推送保护的存储库而触发的自定义消息。 有关详细信息，请参阅“[用 {% data variables.product.prodname_secret_scanning %} 保护推送](/code-security/secret-scanning/protecting-pushes-with-secret-scanning#enabling-secret-scanning-as-a-push-protection-for-an-organization)”。
{%- endif %} {%- ifversion secret-scanning-audit-log-custom-patterns %} | `org.secret_scanning_push_protection_disable` | 组织所有者或管理员禁用了用于机密扫描的推送保护。 有关详细信息，请参阅“[使用机密扫描保护推送](/enterprise-cloud@latest/code-security/secret-scanning/protecting-pushes-with-secret-scanning)”。
| `org.secret_scanning_push_protection_enable` | 组织所有者或管理员启用了用于机密扫描的推送保护。
{%- endif %} | `org.self_hosted_runner_online` | 运行器应用程序已启动。 只能使用 REST API 查看；在 UI 或 JSON/CSV 导出中不可见。 有关详细信息，请参阅“[检查自托管运行器的状态](/actions/hosting-your-own-runners/monitoring-and-troubleshooting-self-hosted-runners#checking-the-status-of-a-self-hosted-runner)”。
| `org.self_hosted_runner_offline` | 运行器应用程序已停止。 只能使用 REST API 查看；在 UI 或 JSON/CSV 导出中不可见。 有关详细信息，请参阅“[检查自托管运行器的状态](/actions/hosting-your-own-runners/monitoring-and-troubleshooting-self-hosted-runners#checking-the-status-of-a-self-hosted-runner)”。
{%- ifversion fpt or ghec or ghes %} | `org.self_hosted_runner_updated` | 运行器应用程序已更新。 可以使用 REST API 和 UI 查看；在 JSON /CSV 导出中不可见。 有关详细信息，请参阅[关于自承载运行器](/actions/hosting-your-own-runners/about-self-hosted-runners#about-self-hosted-runners)。
{%- endif %} {%- ifversion fpt or ghec %} | `org.set_actions_fork_pr_approvals_policy` | 已为组织更改需要审批来自公共分支的工作流的设置。 有关详细信息，请参阅“[需要审批来自公共分支的工作流](/organizations/managing-organization-settings/disabling-or-limiting-github-actions-for-your-organization#requiring-approval-for-workflows-from-public-forks)”。
{%- endif %} | `org.set_actions_retention_limit` | 组织中 {% data variables.product.prodname_actions %} 工件和日志的保持期已更改。 有关详细信息，请参阅“[为组织中的 {% data variables.product.prodname_actions %} 工件和日志配置保持期](/organizations/managing-organization-settings/configuring-the-retention-period-for-github-actions-artifacts-and-logs-in-your-organization)”。
{%- ifversion fpt or ghec or ghes %} | `org.set_fork_pr_workflows_policy` | 专用存储库分支上的工作流策略已更改。 有关详细信息，请参阅“[为专用存储库分支启用工作流](/organizations/managing-organization-settings/disabling-or-limiting-github-actions-for-your-organization#enabling-workflows-for-private-repository-forks)”。
{%- endif %} {%- ifversion ghes or audit-log-sso-response-events %} | `org.sso_response` | 当成员尝试向组织进行身份验证时，将生成 SAML 单一登录 (SSO) 响应。 此事件只能通过审核日志流式处理和 REST API 使用。
{%- endif %} {%- ifversion ghec %} | `org.transfer` | 组织在企业帐户之间转移。 有关详细信息，请参阅[将组织添加到企业](/admin/user-management/managing-organizations-in-your-enterprise/adding-organizations-to-your-enterprise#transferring-an-organization-between-enterprise-accounts)。
{%- endif %} {%- ifversion not ghae %} | `org.transform`    | 用户帐户已转换为组织。 有关详细信息，请参阅“[将用户转换为组织](/github/setting-up-and-managing-your-github-user-account/converting-a-user-into-an-organization)”。
{%- endif %} | `org.unblock_user` | 组织所有者取消阻止了用户对组织的访问。 {% ifversion fpt or ghec %}有关详细信息，请参阅“[取消阻止用户对组织的访问](/communities/maintaining-your-safety-on-github/unblocking-a-user-from-your-organization)”。{% endif %} {%- ifversion fpt or ghec or ghes %} | `org.update_actions_secret` | {% data variables.product.prodname_actions %} 机密已更新。
{%- endif %} | `org.update_integration_secret` | 已为组织更新 {% data variables.product.prodname_dependabot %}{% ifversion fpt or ghec %} 或 {% data variables.product.prodname_github_codespaces %}{% endif %} 集成机密。
| `org.update_default_repository_permission` | 组织所有者更改了组织成员的默认存储库权限级别。
| `org.update_member` | 组织所有者将某人的角色从所有者更改为成员或从成员更改为所有者。
| `org.update_member_repository_creation_permission` | 组织所有者更改了组织成员的创建存储库权限。
| `org.update_member_repository_invitation_permission` | 组织所有者更改了组织成员邀请外部协作者访问存储库的策略设置。 有关详细信息，请参阅“[设置添加外部协作者的权限](/organizations/managing-organization-settings/setting-permissions-for-adding-outside-collaborators)”。
| `org.update_new_repository_default_branch_setting` | 组织所有者更改了组织中新存储库的默认分支名称。 有关详细信息，请参阅“[管理组织中存储库的默认分支名称](/organizations/managing-organization-settings/managing-the-default-branch-name-for-repositories-in-your-organization)。”
{%- ifversion ghec or ghae %} | `org.update_saml_provider_settings` | 组织的 SAML 提供程序设置已更新。
| `org.update_terms_of_service` | 组织在标准服务条款和公司服务条款之间进行了更改。 {% ifversion ghec %}有关详细信息，请参阅“[升级到公司服务条款](/organizations/managing-organization-settings/upgrading-to-the-corporate-terms-of-service)”。{% endif %} {%- endif %}

{%- ifversion ghec or ghes or ghae %}
## `org_credential_authorization` 类别操作

| 操作 | 说明
|--------|-------------
| `org_credential_authorization.deauthorized` | 成员取消了对用于 SAML 单一登录的凭据授权。 {% ifversion ghec or ghae %}有关详细信息，请参阅“[使用 SAML 单一登录进行身份验证](/authentication/authenticating-with-saml-single-sign-on)”。{% endif %}
| `org_credential_authorization.grant` | 成员授权了用于 SAML 单一登录的凭据。 {% ifversion ghec or ghae %}有关详细信息，请参阅“[使用 SAML 单一登录进行身份验证](/authentication/authenticating-with-saml-single-sign-on)”。{% endif %}
| `org_credential_authorization.revoke` | 所有者撤销了授权凭据。 {% ifversion ghec %}有关详细信息，请参阅“[查看和管理活动 SAML 会话](/organizations/granting-access-to-your-organization-with-saml-single-sign-on/viewing-and-managing-a-members-saml-access-to-your-organization)”。{% endif %}
{%- endif %}

{%- ifversion secret-scanning-audit-log-custom-patterns %}
## `org_secret_scanning_custom_pattern` 类别操作

| 操作 | 说明
|--------|---------------
| `org_secret_scanning_custom_pattern.create` | 在组织中发布了针对机密扫描的自定义模式。 有关详细信息，请参阅“[为机密扫描定义自定义模式](/code-security/secret-scanning/defining-custom-patterns-for-secret-scanning#defining-a-custom-pattern-for-an-organization)”。
| `org_secret_scanning_custom_pattern.delete` | 从组织中的机密扫描中删除了自定义模式。 有关详细信息，请参阅“[为机密扫描定义自定义模式](/code-security/secret-scanning/defining-custom-patterns-for-secret-scanning#removing-a-custom-pattern)”。
| `org_secret_scanning_custom_pattern.update` |将对自定义模式所做的更改保存到组织中，以进行机密扫描。 有关详细信息，请参阅“[为机密扫描定义自定义模式](/code-security/secret-scanning/defining-custom-patterns-for-secret-scanning#editing-a-custom-pattern)”。
{%- endif %}

## `organization_default_label` 类别操作

| 操作 | 说明
|--------|-------------
| `organization_default_label.create` | 已在组织中创建存储库的默认标签。 有关详细信息，请参阅“[创建默认标签](/organizations/managing-organization-settings/managing-default-labels-for-repositories-in-your-organization#creating-a-default-label)”。
| `organization_default_label.update` | 已在组织中编辑存储库的默认标签。 有关详细信息，请参阅“[编辑默认标签](/organizations/managing-organization-settings/managing-default-labels-for-repositories-in-your-organization#editing-a-default-label)”。
| `organization_default_label.destroy` | 组织中存储库的默认标签已被删除。 有关详细信息，请参阅“[删除默认标签](/organizations/managing-organization-settings/managing-default-labels-for-repositories-in-your-organization#deleting-a-default-label)”。

{%- ifversion fpt or ghec or ghes %}
## `organization_domain` 类别操作

| 操作 | 说明
|--------|-------------
| `organization_domain.approve` | 企业域已获批用于组织。 有关详细信息，请参阅“[审批组织的域](/organizations/managing-organization-settings/verifying-or-approving-a-domain-for-your-organization#approving-a-domain-for-your-organization)”。
| `organization_domain.create` | 企业域已添加到组织。 有关详细信息，请参阅“[验证组织的域](/organizations/managing-organization-settings/verifying-or-approving-a-domain-for-your-organization#verifying-a-domain-for-your-organization)”。
| `organization_domain.destroy` | 企业域已从组织中删除。 有关详细信息，请参阅“[删除已获批准或已验证的域](/organizations/managing-organization-settings/verifying-or-approving-a-domain-for-your-organization#removing-an-approved-or-verified-domain)”。
| `organization_domain.verify` | 已为组织验证企业域。 有关详细信息，请参阅“[验证组织的域](/organizations/managing-organization-settings/verifying-or-approving-a-domain-for-your-organization#verifying-a-domain-for-your-organization)”。

## `organization_projects_change` 类别操作

| 操作 | 说明
|--------|-------------
| `organization_projects_change.clear` | 企业所有者{% ifversion ghes %}或站点管理员{% endif %}清除了企业中组织范围的项目板的策略设置。 有关详细信息，请参阅“[在企业中为项目实施策略](/admin/policies/enforcing-policies-for-your-enterprise/enforcing-policies-for-projects-in-your-enterprise#enforcing-a-policy-for-organization-wide-project-boards)”。
| `organization_projects_change.disable` | 已为企业中的所有组织禁用组织项目。 有关详细信息，请参阅“[在企业中为项目实施策略](/admin/policies/enforcing-policies-for-your-enterprise/enforcing-policies-for-projects-in-your-enterprise#enforcing-a-policy-for-organization-wide-project-boards)”。
| `organization_projects_change.enable` | 已为企业中的所有组织启用组织项目。 有关详细信息，请参阅“[在企业中为项目实施策略](/admin/policies/enforcing-policies-for-your-enterprise/enforcing-policies-for-projects-in-your-enterprise#enforcing-a-policy-for-organization-wide-project-boards)”。
{%- endif %}

## `packages` 类别操作

| 操作 | 说明
|--------|-------------
| `packages.insecure_hash` | Maven 为特定包版本发布了不安全的哈希。
| `packages.package_deleted` | 已从组织中删除包。{% ifversion fpt or ghec or ghes %}有关详细信息，请参阅“[删除和还原包](/packages/learn-github-packages/deleting-and-restoring-a-package)”。{% endif %}
| `packages.package_published` | 包已发布或重新发布到组织。
| `packages.package_restored` | 整个包已还原。{% ifversion fpt or ghec or ghes %}有关详细信息，请参阅“[删除和还原包](/packages/learn-github-packages/deleting-and-restoring-a-package)”。{% endif %}
| `packages.package_version_deleted` | 特定包版本已被删除。{% ifversion fpt or ghec or ghes %}有关详细信息，请参阅“[删除和还原包](/packages/learn-github-packages/deleting-and-restoring-a-package)”。{% endif %}
| `packages.package_version_published` | 特定包版本已发布或重新发布到包。
| `packages.package_version_restored` | 特定包版本已被删除。{% ifversion fpt or ghec or ghes %}有关详细信息，请参阅“[删除和还原包](/packages/learn-github-packages/deleting-and-restoring-a-package)”。{% endif %}
| `packages.part_upload` | 特定包版本已部分上传到组织。
| `packages.upstream_package_fetched` | 已从 npm 上游代理获取特定的包版本。
| `packages.version_download` | 已下载特定的包版本。
| `packages.version_upload` | 已上传特定的包版本。

{%- ifversion fpt or ghec %}
## `pages_protected_domain` 类别操作

| 操作 | 说明
|--------|-------------
| `pages_protected_domain.create` | 已为组织或企业创建 {% data variables.product.prodname_pages %} 验证域。 有关详细信息，请参阅“[验证 {% data variables.product.prodname_pages %} 的自定义域](/pages/configuring-a-custom-domain-for-your-github-pages-site/verifying-your-custom-domain-for-github-pages)”。
| `pages_protected_domain.delete` | 已从组织或企业中删除 {% data variables.product.prodname_pages %} 验证域。 有关详细信息，请参阅“[验证 {% data variables.product.prodname_pages %} 的自定义域](/pages/configuring-a-custom-domain-for-your-github-pages-site/verifying-your-custom-domain-for-github-pages)”。
| `pages_protected_domain.verify`  | 已为组织或企业验证 {% data variables.product.prodname_pages %} 域。 有关详细信息，请参阅“[验证 {% data variables.product.prodname_pages %} 的自定义域](/pages/configuring-a-custom-domain-for-your-github-pages-site/verifying-your-custom-domain-for-github-pages)”。

## `payment_method` 类别操作

| 操作 | 说明
|--------|-------------
| `payment_method.create` | 已添加新的付款方式，例如新的信用卡或 PayPal 帐户。
| `payment_method.remove` | 付款方式已删除。
| `payment_method.update` | 现有的付款方式已更新。

## `prebuild_configuration` 类别操作

| 操作 | 说明
|--------|-------------
| `prebuild_configuration.create` | 存储库的 {% data variables.product.prodname_github_codespaces %} 预生成配置已创建。 有关详细信息，请参阅“[关于 {% data variables.product.prodname_github_codespaces %} 预生成](/codespaces/prebuilding-your-codespaces/about-github-codespaces-prebuilds)”。
| `prebuild_configuration.destroy` | 存储库的 {% data variables.product.prodname_github_codespaces %} 预生成配置已删除。 有关详细信息，请参阅“[关于 {% data variables.product.prodname_github_codespaces %} 预生成](/codespaces/prebuilding-your-codespaces/about-github-codespaces-prebuilds)”。
| `prebuild_configuration.run_triggered` | 用户为存储库分支启动了 {% data variables.product.prodname_github_codespaces %} 预生成配置的运行。 有关详细信息，请参阅“[关于 {% data variables.product.prodname_github_codespaces %} 预生成](/codespaces/prebuilding-your-codespaces/about-github-codespaces-prebuilds)”。
| `prebuild_configuration.update` | 存储库的 {% data variables.product.prodname_github_codespaces %} 预生成配置已编辑。 有关详细信息，请参阅“[关于 {% data variables.product.prodname_github_codespaces %} 预生成](/codespaces/prebuilding-your-codespaces/about-github-codespaces-prebuilds)”。
{%- endif %}

{%- ifversion ghes %}
## `pre_receive_environment` 类别操作

| 操作 | 说明
| ------ | -----------
| `pre_receive_environment.create` | 已创建预接收挂钩环境。 有关详细信息，请参阅“[创建预接收挂钩环境](/admin/policies/enforcing-policy-with-pre-receive-hooks/creating-a-pre-receive-hook-environment)”。
| `pre_receive_environment.destroy` | 预接收挂钩环境已被删除。 有关详细信息，请参阅“[创建预接收挂钩环境](/admin/policies/enforcing-policy-with-pre-receive-hooks/creating-a-pre-receive-hook-environment)”。
| `pre_receive_environment.download` | 已下载预接收挂钩环境。 有关详细信息，请参阅“[创建预接收挂钩环境](/admin/policies/enforcing-policy-with-pre-receive-hooks/creating-a-pre-receive-hook-environment)”。
| `pre_receive_environment.update` | 预接收挂钩环境已更新。 有关详细信息，请参阅“[创建预接收挂钩环境](/admin/policies/enforcing-policy-with-pre-receive-hooks/creating-a-pre-receive-hook-environment)”。

## `pre_receive_hook` 类别操作

| 操作 | 说明
|--------|-------------
| `pre_receive_hook.create` | 已创建预接收挂钩。 有关详细信息，请参阅“[创建预接收挂钩](/admin/policies/enforcing-policy-with-pre-receive-hooks/managing-pre-receive-hooks-on-the-github-enterprise-server-appliance#creating-pre-receive-hooks)”。
| `pre_receive_hook.destroy` | 预接收挂钩已被删除。 有关详细信息，请参阅“[预接收挂钩](/admin/policies/enforcing-policy-with-pre-receive-hooks/managing-pre-receive-hooks-on-the-github-enterprise-server-appliance#deleting-pre-receive-hooks)”。
| `pre_receive_hook.enforcement` | 已启用或禁用允许存储库和组织管理员替代挂钩配置的预接收挂钩强制实施设置。 有关详细信息，请参阅“[管理 GitHub Enterprise Server 设备上的预接收挂钩](/admin/policies/enforcing-policy-with-pre-receive-hooks/managing-pre-receive-hooks-on-the-github-enterprise-server-appliance)”。
| `pre_receive_hook.rejected_push` | 预接收挂钩拒绝了推送。
| `pre_receive_hook.update` | 已创建预接收挂钩。 有关详细信息，请参阅“[编辑预接收挂钩](/admin/policies/enforcing-policy-with-pre-receive-hooks/managing-pre-receive-hooks-on-the-github-enterprise-server-appliance#editing-pre-receive-hooks)”。
| `pre_receive_hook.warned_push` | 预接收挂钩针对推送发出警告。
{%- endif %}

## `private_repository_forking` 类别操作

| 操作 | 说明
|--------|-------------
| `private_repository_forking.clear` | 企业所有者{% ifversion ghes %}或站点管理员{% endif %}清除了允许对存储库、组织或企业的专用和内部存储库创建分支的策略设置。 有关详细信息，请参阅“[管理存储库的分支策略](/repositories/managing-your-repositorys-settings-and-features/managing-repository-settings/managing-the-forking-policy-for-your-repository)”、“[管理组织的分支策略](/organizations/managing-organization-settings/managing-the-forking-policy-for-your-organization)”和“[强制实施用于对专用或内部存储库创建分支的策略](/admin/policies/enforcing-policies-for-your-enterprise/enforcing-repository-management-policies-in-your-enterprise#enforcing-a-policy-for-forking-private-or-internal-repositories)”。
| `private_repository_forking.disable` | 企业所有者{% ifversion ghes %}或站点管理员{% endif %}禁用了允许对存储库、组织或企业的专用和内部存储库创建分支的策略设置。 不允许对专用和内部存储库创建分支。 有关详细信息，请参阅“[管理存储库的分支策略](/repositories/managing-your-repositorys-settings-and-features/managing-repository-settings/managing-the-forking-policy-for-your-repository)”、“[管理组织的分支策略](/organizations/managing-organization-settings/managing-the-forking-policy-for-your-organization)”和“[强制实施用于对专用或内部存储库创建分支的策略](/admin/policies/enforcing-policies-for-your-enterprise/enforcing-repository-management-policies-in-your-enterprise#enforcing-a-policy-for-forking-private-or-internal-repositories)”。
| `private_repository_forking.enable` | 企业所有者{% ifversion ghes %}或站点管理员{% endif %}启用了允许对存储库、组织或企业的专用和内部存储库创建分支的策略设置。 始终允许允许对专用和内部存储库创建分支。 有关详细信息，请参阅“[管理存储库的分支策略](/repositories/managing-your-repositorys-settings-and-features/managing-repository-settings/managing-the-forking-policy-for-your-repository)”、“[管理组织的分支策略](/organizations/managing-organization-settings/managing-the-forking-policy-for-your-organization)”和“[强制实施用于对专用或内部存储库创建分支的策略](/admin/policies/enforcing-policies-for-your-enterprise/enforcing-repository-management-policies-in-your-enterprise#enforcing-a-policy-for-forking-private-or-internal-repositories)”。

{%- ifversion fpt or ghec %}
## `profile_picture` 类别操作

| 操作 | 说明
|--------|-------------
| `profile_picture.update` | 个人资料图片已更新。
{%- endif %}

## `project` 类别操作

| 操作 | 说明
|--------|-------------
| `project.access` | 项目板可见性已更改。 有关详细信息，请参阅“[更改项目板可见性](/issues/organizing-your-work-with-project-boards/managing-project-boards/changing-project-board-visibility)”。
| `project.close` | 项目板已关闭。 有关详细信息，请参阅“[关闭项目板](/issues/organizing-your-work-with-project-boards/managing-project-boards/closing-a-project-board)”。
| `project.create` | 项目板已创建。 有关详细信息，请参阅“[创建项目板](/issues/organizing-your-work-with-project-boards/managing-project-boards/creating-a-project-board)”。
| `project.delete` | 项目板已被删除。 有关详细信息，请参阅“[项目板](/issues/organizing-your-work-with-project-boards/managing-project-boards/deleting-a-project-board)”。
| `project.link` | 存储库已链接到项目板。 有关详细信息，请参阅“[将存储库链接到项目板](/issues/organizing-your-work-with-project-boards/managing-project-boards/linking-a-repository-to-a-project-board)”。
| `project.open` | 项目板已重新打开。 有关详细信息，请参阅“[重新打开已关闭的项目板](/issues/organizing-your-work-with-project-boards/managing-project-boards/reopening-a-closed-project-board)”。
| `project.rename` | 项目板已重命名。 有关详细信息，请参阅“[编辑项目板](/issues/organizing-your-work-with-project-boards/managing-project-boards/editing-a-project-board)”。
| `project.unlink` | 存储库取消与项目板的链接。 有关详细信息，请参阅“[将存储库链接到项目板](/issues/organizing-your-work-with-project-boards/managing-project-boards/linking-a-repository-to-a-project-board)”。
| `project.update_org_permission` | 所有组织成员的项目基本权限已更改或被删除。 有关详细信息，请参阅“[管理组织成员对项目板的访问权限](/organizations/managing-access-to-your-organizations-project-boards/managing-access-to-a-project-board-for-organization-members)”。
| `project.update_team_permission` | 团队的项目板权限级别已更改，或当在项目板中添加或删除了团队时。 有关详细信息，请参阅“[管理团队对组织项目板的访问权限](/organizations/managing-access-to-your-organizations-project-boards/managing-team-access-to-an-organization-project-board)”。
| `project.update_user_permission` | 组织成员或外部协作者已添加到项目板或从项目板中删除，或者他们的权限级别已更改。 有关详细信息，请参阅“[管理个人对组织项目板的访问权限](/organizations/managing-access-to-your-organizations-project-boards/managing-an-individuals-access-to-an-organization-project-board)”。

{%- ifversion projects-v2 %}
## `project_field` 类别操作

| 操作 | 说明
|--------|-------------
| `project_field.create` | 已在项目板中创建字段。 有关详细信息，请参阅“[了解字段类型](/issues/planning-and-tracking-with-projects/understanding-field-types)”。
| `project_field.delete` | 已在项目板中删除字段。 有关详细信息，请参阅“[删除字段](/issues/planning-and-tracking-with-projects/understanding-field-types/deleting-fields)”。

## `project_view` 类别操作

| 操作 | 说明
|--------|-------------
| `project_view.create` | 已在项目板中创建视图。 有关详细信息，请参阅“[管理视图](/issues/planning-and-tracking-with-projects/customizing-views-in-your-project/managing-your-views)”。
| `project_view.delete` | 已在项目板中删除视图。 有关详细信息，请参阅“[管理视图](/issues/planning-and-tracking-with-projects/customizing-views-in-your-project/managing-your-views)”。
{%- endif %}

## `protected_branch` 类别操作

| 操作 | 说明
|--------|-------------
| `protected_branch.create ` | 已在分支上启用分支保护。
| `protected_branch.destroy` | 已在分支上禁用分支保护。
| `protected_branch.dismiss_stale_reviews ` | 已在分支上更新忽略旧拉取请求的强制执行。
{%- ifversion ghes %} | `protected_branch.dismissal_restricted_users_teams` | 已在分支上更新限制可以取消评论的用户和/或团队的强制执行。
{%- endif %} | `protected_branch.policy_override ` | 分支保护要求已由存储库管理员替代。
| `protected_branch.rejected_ref_update ` | 分支更新尝试已被拒绝。
| `protected_branch.required_status_override` | 所需的状态检查分支保护要求已由存储库管理员替代。
| `protected_branch.review_policy_and_required_status_override` | 所需的评论和所需的状态检查分支保护要求已由存储库管理员替代。
| `protected_branch.review_policy_override` | 所需的评论分支保护要求已由存储库管理员替代。
| `protected_branch.update_admin_enforced ` | 已为存储库管理员强制执行分支保护。
{%- ifversion ghes %} | `protected_branch.update_allow_deletions_enforcement_level` | 已在分支上更新允许具有推送访问权限的用户删除匹配分支的强制执行。
| `protected_branch.update_allow_force_pushes_enforcement_level` | 已在分支上更新对所有具有推送访问权限的用户允许强制实施推送的强制执行。
| `protected_branch.update_linear_history_requirement_enforcement_level` | 已在分支上更新要求线性提交历史记录的强制执行。
{%- endif %} | `protected_branch.update_pull_request_reviews_enforcement_level ` | 已在分支上更新所需的拉取请求审查的强制执行。 可以是 `0`（已停用）、`1`（非管理员）、`2`（所有人）之一。
| `protected_branch.update_require_code_owner_review ` | 已在分支上更新所需的代码所有者审查的强制执行。
| `protected_branch.update_required_approving_review_count` | 已在分支上更新在合并之前所需批准数量的强制执行。
| `protected_branch.update_required_status_checks_enforcement_level ` | 已在分支上更新所需状态检查的强制执行。
| `protected_branch.update_signature_requirement_enforcement_level ` | 已在分支上更新所需提交签名的强制执行。
| `protected_branch.update_strict_required_status_checks_policy` | 已在分支上更新所需状态检查的强制执行。
| `protected_branch.update_name` | 已为分支更新分支名称模式。

## `public_key` 类别操作

| 操作 | 说明
|--------|-------------
| `public_key.create` | 已将 SSH 密钥[添加][add key]到用户帐户或将[部署密钥][]添加到存储库。
| `public_key.delete` | 已从用户帐户中删除 SSH 密钥或从存储库中删除[部署密钥][]。
| `public_key.update` | 用户帐户的 SSH 密钥或存储库的[部署密钥][]已更新。
| `public_key.unverification_failure` | 无法取消验证用户帐户的 SSH 密钥或存储库的[部署密钥][]。
| `public_key.unverify` | 用户帐户的 SSH 密钥或存储库的[部署密钥][]未经验证。
| `public_key.verification_failure` | 无法验证用户帐户的 SSH 密钥或存储库的[部署密钥][]。
| `public_key.verify` | 已验证用户帐户的 SSH 密钥或存储库的[部署密钥][]。

  [add key]: /authentication/connecting-to-github-with-ssh/adding-a-new-ssh-key-to-your-github-account
  [部署密钥]: /developers/overview/managing-deploy-keys#deploy-keys

## `pull_request` 类别操作

| 操作 | 说明
|--------|-------------
| `pull_request.close` | 拉取请求在未合并的情况下关闭。 有关详细信息，请参阅“[关闭拉取请求](/pull-requests/collaborating-with-pull-requests/incorporating-changes-from-a-pull-request/closing-a-pull-request)”。
| `pull_request.converted_to_draft` | 拉取请求已转换为草稿。 有关详细信息，请参阅“[更改拉取请求的阶段](/github/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/changing-the-stage-of-a-pull-request#converting-a-pull-request-to-a-draft)”。
| `pull_request.create` | 已创建拉取请求。 有关详细信息，请参阅“[创建拉取请求](/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/creating-a-pull-request)”。
| `pull_request.create_review_request` | 请求对拉取请求进行审查。 有关详细信息，请参阅“[关于拉取请求查看](/pull-requests/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/about-pull-request-reviews)”。
| `pull_request.in_progress` | 拉取请求已被标记为正在进行中。
| `pull_request.indirect_merge` | 拉取请求被视为已合并，因为拉取请求的提交已合并到目标分支中。
| `pull_request.merge` | 拉取请求已合并。 有关详细信息，请参阅“[合并拉取请求](/pull-requests/collaborating-with-pull-requests/incorporating-changes-from-a-pull-request/merging-a-pull-request)”。
| `pull_request.ready_for_review` | 拉取请求已被标记为可供审查。 有关详细信息，请参阅“[更改拉取请求的阶段](/github/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/changing-the-stage-of-a-pull-request#marking-a-pull-request-as-ready-for-review)”。
| `pull_request.remove_review_request` | 已从拉取请求中删除审查请求。 有关详细信息，请参阅“[关于拉取请求查看](/pull-requests/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/about-pull-request-reviews)”。
| `pull_request.reopen` | 拉取请求在先前关闭后重新打开。
| `pull_request_review.delete` | 已删除对拉取请求的审查。
| `pull_request_review.dismiss` | 已取消对拉取请求的审查。 有关详细信息，请参阅“[关闭拉取请求审阅](/pull-requests/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/dismissing-a-pull-request-review)”。
| `pull_request_review.submit` | 已提交针对拉取请求的审查。 有关详细信息，请参阅“[关于拉取请求查看](/pull-requests/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/about-pull-request-reviews)”。

## `pull_request_review` 类别操作

| 操作 | 说明
|--------|-------------
| `pull_request_review.delete` | 已删除对拉取请求的审查。
| `pull_request_review.dismiss` | 已取消对拉取请求的审查。 有关详细信息，请参阅“[关闭拉取请求审阅](/pull-requests/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/dismissing-a-pull-request-review)”。
| `pull_request_review.submit` | 已提交针对拉取请求的审查。 有关详细信息，请参阅“[提交审查](/pull-requests/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/reviewing-proposed-changes-in-a-pull-request#submitting-your-review)”。

## `pull_request_review_comment` 类别操作

| 操作 | 说明
|--------|-------------
| `pull_request_review_comment.create` | 审查评论已添加到拉取请求中。 有关详细信息，请参阅“[关于拉取请求查看](/pull-requests/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/about-pull-request-reviews)”。
| `pull_request_review_comment.delete` | 对拉取请求的审查评论已被删除。
| `pull_request_review_comment.update` | 对拉取请求的审查评论已更改。

## `repo` 类别操作

| 操作 | 说明
|--------|-------------
| `repo.access`         | 存储库的可见性更改为专用{%- ifversion ghes %}、公共{% endif %}或内部。
| `repo.actions_enabled` | 已为存储库启用 {% data variables.product.prodname_actions %}。
| `repo.add_member`     | 已向仓库添加协作者。
| `repo.add_topic`     | 已将主题添加到存储库。
| `repo.advanced_security_disabled` | 已为存储库禁用 {% data variables.product.prodname_GH_advanced_security %}。
| `repo.advanced_security_enabled` | 已为存储库启用 {% data variables.product.prodname_GH_advanced_security %}。
| `repo.advanced_security_policy_selected_member_disabled` | 存储库管理员阻止为存储库启用 {% data variables.product.prodname_GH_advanced_security %} 功能。
| `repo.advanced_security_policy_selected_member_enabled` | 存储库管理员允许为存储库启用 {% data variables.product.prodname_GH_advanced_security %} 功能。
| `repo.archived`       | 已存档仓库。 有关详细信息，请参阅“[对 {% data variables.product.prodname_dotcom %} 存储库进行存档](/github/creating-cloning-and-archiving-repositories/archiving-a-github-repository)”。
| `repo.code_scanning_analysis_deleted` | 对存储库的代码扫描分析已被删除。 有关详细信息，请参阅“[从存储库中删除代码扫描分析](/rest/reference/code-scanning#delete-a-code-scanning-analysis-from-a-repository)”。
| `repo.change_merge_setting` | 已为存储库更改拉取请求合并选项。
| `repo.clear_actions_settings` | 存储库管理员清除了存储库的 {% data variables.product.prodname_actions %} 策略设置。
| `repo.config`         | 存储库管理员阻止了强制推送。 有关详细信息，请参阅[阻止强制推送到存储库](/enterprise/admin/guides/developer-workflow/blocking-force-pushes-to-a-repository/)。
{%- ifversion fpt or ghec %} | `repo.config.disable_collaborators_only` | 已禁用仅限协作者的交互限制。 有关详细信息，请参阅“[限制存储库中的交互](/communities/moderating-comments-and-conversations/limiting-interactions-in-your-repository)。”
| `repo.config.disable_contributors_only` | 已在存储库中禁用仅先前参与者的交互限制。 有关详细信息，请参阅“[限制存储库中的交互](/communities/moderating-comments-and-conversations/limiting-interactions-in-your-repository)。”
| `repo.config.disable_sockpuppet_disallowed` | 已在存储库中禁用仅现有用户的交互限制。 有关详细信息，请参阅“[限制存储库中的交互](/communities/moderating-comments-and-conversations/limiting-interactions-in-your-repository)。”
| `repo.config.enable_collaborators_only` | 已在存储库中启用仅协作者的交互限制。 不属于协作者或组织成员的用户在设定的持续时间内无法与存储库交互。 有关详细信息，请参阅“[限制存储库中的交互](/communities/moderating-comments-and-conversations/limiting-interactions-in-your-repository)。”
| `repo.config.enable_contributors_only` | 已在存储库中启用仅先前参与者的交互限制。 不属于先前参与者、协作者或组织成员的用户在设定的持续时间内无法与存储库交互。 有关详细信息，请参阅“[限制存储库中的交互](/communities/moderating-comments-and-conversations/limiting-interactions-in-your-repository)。”
| `repo.config.enable_sockpuppet_disallowed` | 已在存储库中启用现有用户的交互限制。 新用户在设定的持续时间内无法与存储库交互。 存储库的现有用户、参与者、协作者或组织成员能够与存储库交互。 有关详细信息，请参阅“[限制存储库中的交互](/communities/moderating-comments-and-conversations/limiting-interactions-in-your-repository)。”
{%- endif %} {%- ifversion ghes %} | `repo.config.disable_anonymous_git_access`| 已禁用存储库的匿名 Git 读取访问权限。 有关详细信息，请参阅“[为存储库启用匿名 Git 读取访问](/repositories/managing-your-repositorys-settings-and-features/managing-repository-settings/enabling-anonymous-git-read-access-for-a-repository)”。
| `repo.config.enable_anonymous_git_access` | 已启用存储库的匿名 Git 读取访问权限。 有关详细信息，请参阅“[为存储库启用匿名 Git 读取访问](/repositories/managing-your-repositorys-settings-and-features/managing-repository-settings/enabling-anonymous-git-read-access-for-a-repository)”。
| `repo.config.lock_anonymous_git_access` | 存储库的匿名 Git 读取访问权限设置已被锁定，阻止存储库管理员更改（启用或禁用）此设置。 有关详细信息，请参阅“[阻止用户更改匿名 Git 读取访问权限](/admin/guides/user-management/preventing-users-from-changing-anonymous-git-read-access)”。
| `repo.config.unlock_anonymous_git_access` | 存储库的匿名 Git 读取访问设置已解锁，允许存储库管理员更改（启用或禁用）此设置。 有关详细信息，请参阅“[阻止用户更改匿名 Git 读取访问权限](/admin/guides/user-management/preventing-users-from-changing-anonymous-git-read-access)”。
{%- endif %} | `repo.create` | 存储库已创建。
| `repo.create_actions_secret` | 已为存储库创建 {% data variables.product.prodname_actions %} 机密。 有关详细信息，请参阅“[为存储库创建加密机密](/actions/security-guides/encrypted-secrets#creating-encrypted-secrets-for-a-repository)”。
| `repo.create_integration_secret` | 已为存储库创建 {% data variables.product.prodname_dependabot %}{% ifversion fpt or ghec %} 或 {% data variables.product.prodname_github_codespaces %}{% endif %} 集成密钥。
| `repo.destroy` | 存储库已被删除。
{%- ifversion ghes %} | `repo.disk_archive`  | 存储库已存档在磁盘上。 有关详细信息，请参阅“[归档存储库](/repositories/archiving-a-github-repository/archiving-repositories)”。
{%- endif %} | `repo.download_zip` | 存储库的源代码存档已下载为 ZIP 文件。
| `repo.pages_cname` | 在存储库中修改了 {% data variables.product.prodname_pages %} 自定义域。
| `repo.pages_create` | {% data variables.product.prodname_pages %} 站点已创建。
| `repo.pages_destroy` | {% data variables.product.prodname_pages %} 网站已被删除。
| `repo.pages_https_redirect_disabled` | 已为 {% data variables.product.prodname_pages %} 站点禁用 HTTPS 重定向。
| `repo.pages_https_redirect_enabled` | 已为 {% data variables.product.prodname_pages %} 站点启用 HTTPS 重定向。
| `repo.pages_source` | 已修改 {% data variables.product.prodname_pages %} 源。
| `repo.pages_private` | {% data variables.product.prodname_pages %} 站点可见性已更改为专用。
| `repo.pages_public` | {% data variables.product.prodname_pages %} 站点可见性已更改为公开。
| `repo.register_self_hosted_runner` | 已注册新的自托管运行器。 有关详细信息，请参阅“[将自托管运行器添加到存储库](/actions/hosting-your-own-runners/adding-self-hosted-runners#adding-a-self-hosted-runner-to-a-repository)”。
| `repo.remove_self_hosted_runner` | 已删除自托管运行器。 有关详细信息，请参阅“[从存储库中删除运行器](/actions/hosting-your-own-runners/removing-self-hosted-runners#removing-a-runner-from-a-repository)”。
| `repo.remove_actions_secret` | 已删除存储库的 {% data variables.product.prodname_actions %} 机密。
| `repo.remove_integration_secret` | 已删除存储库的 {% data variables.product.prodname_dependabot %}{% ifversion fpt or ghec %} 或 {% data variables.product.prodname_github_codespaces %}{% endif %} 集成密钥。
| `repo.remove_member` | 已从存储库中删除协作者。
| `repo.remove_topic` | 已从存储库中删除主题。
| `repo.rename` | 已重命名存储库。
{%- ifversion fpt or ghec %} | `repo.set_actions_fork_pr_approvals_policy` | 已为存储库更改需要审批来自公共分支的工作流的设置。 有关详细信息，请参阅“[为来自公共分支的工作流配置所需的审批](/repositories/managing-your-repositorys-settings-and-features/enabling-features-for-your-repository/managing-github-actions-settings-for-a-repository#configuring-required-approval-for-workflows-from-public-forks)”。
{%- endif %} | `repo.set_actions_retention_limit` | 存储库中 {% data variables.product.prodname_actions %} 工件和日志的保持期已更改。 有关详细信息，请参阅“[为存储库中的 {% data variables.product.prodname_actions %} 工件和日志配置保持期](/repositories/managing-your-repositorys-settings-and-features/enabling-features-for-your-repository/managing-github-actions-settings-for-a-repository#configuring-the-retention-period-for-github-actions-artifacts-and-logs-in-your-repository)”。
| `repo.self_hosted_runner_online` | 运行器应用程序已启动。 只能使用 REST API 查看；在 UI 或 JSON/CSV 导出中不可见。 有关详细信息，请参阅“[检查自托管运行器的状态](/actions/hosting-your-own-runners/monitoring-and-troubleshooting-self-hosted-runners#checking-the-status-of-a-self-hosted-runner)”。
| `repo.self_hosted_runner_offline` | 运行器应用程序已停止。 只能使用 REST API 查看；在 UI 或 JSON/CSV 导出中不可见。 有关详细信息，请参阅“[检查自托管运行器的状态](/actions/hosting-your-own-runners/monitoring-and-troubleshooting-self-hosted-runners#checking-the-status-of-a-self-hosted-runner)”。
| `repo.self_hosted_runner_updated` | 运行器应用程序已更新。 可以使用 REST API 和 UI 查看；在 JSON /CSV 导出中不可见。 有关详细信息，请参阅[关于自承载运行器](/actions/hosting-your-own-runners/about-self-hosted-runners#about-self-hosted-runners)。
| `repo.staff_unlock` | 企业管理员或 GitHub 工作人员（具有存储库管理员的权限）暂时解锁了存储库。
| `repo.transfer` | 用户接受了接收已转移存储库的请求。
| `repo.transfer_outgoing` | 一个存储库已被转移到另一个存储库网络。
| `repo.transfer_start` | 用户发送了用于将存储库转移到另一个用户或组织的请求。
| `repo.unarchived` | 未对存储库进行存档。 有关详细信息，请参阅“[对 {% data variables.product.prodname_dotcom %} 存储库进行存档](/github/creating-cloning-and-archiving-repositories/archiving-a-github-repository)”。
| `repo.update_actions_settings` | 存储库管理员更改了存储库的 {% data variables.product.prodname_actions %} 策略设置。
| `repo.update_actions_secret` | {% data variables.product.prodname_actions %} 机密已更新。
| `repo.update_actions_access_settings` | 用于控制其他存储库中 {% data variables.product.prodname_actions %} 工作流如何使用存储库的设置已更改。
| `repo.update_default_branch` | 存储库的默认分支已更改。
| `repo.update_integration_secret` | 已为存储库更新 {% data variables.product.prodname_dependabot %} 或 {% data variables.product.prodname_github_codespaces %} 集成密钥。
| `repo.update_member` | 用户对存储库的权限已更改。

{%- ifversion fpt or ghec %}
## `repository_advisory` 类别操作

| 操作 | 说明
|--------|-------------
| `repository_advisory.close` | 有人关闭了安全公告。 有关详细信息，请参阅“[关于 {% data variables.product.prodname_dotcom %} 安全通知](/github/managing-security-vulnerabilities/about-github-security-advisories)”。
| `repository_advisory.cve_request` | 有人请求 {% data variables.product.prodname_dotcom %} 提供 CVE（常见漏洞和风险）编号，以获取安全公告草稿。
| `repository_advisory.github_broadcast` | {% data variables.product.prodname_dotcom %} 在 {% data variables.product.prodname_advisory_database %} 中公开了安全公告。
| `repository_advisory.github_withdraw` | {% data variables.product.prodname_dotcom %} 撤回了错误发布的安全公告。
| `repository_advisory.open` | 有人打开了安全公告草稿。
| `repository_advisory.publish` | 有人发布安全公告。
| `repository_advisory.reopen` | 有人重新打开作为安全公告草稿。
| `repository_advisory.update` | 有人编辑了草稿或发布了安全公告。

## `repository_content_analysis` 类别操作

| 操作 | 说明
|--------|-------------
| `repository_content_analysis.enable` | 组织所有者或存储库管理员[为专用存储库启用了数据使用设置](/get-started/privacy-on-github/managing-data-use-settings-for-your-private-repository)。
| `repository_content_analysis.disable` | 组织所有者或存储库管理员[专用存储库禁用了数据使用设置](/get-started/privacy-on-github/managing-data-use-settings-for-your-private-repository)。

## `repository_dependency_graph` 类别操作

| 操作 | 说明
|--------|-------------
| `repository_dependency_graph.disable` | 存储库所有者或管理员为专用存储库禁用了依赖项关系图。 有关详细信息，请参阅“[关于依赖项关系图](/github/visualizing-repository-data-with-graphs/about-the-dependency-graph)”。
| `repository_dependency_graph.enable` | 存储库所有者或管理员为专用存储库启用了依赖项关系图。
{%- endif %}

## `repository_image` 类别操作

| 操作 | 说明
|--------|-------------
| `repository_image.create` | 表示存储库的图像已上传。
| `repository_image.destroy` | 表示存储库的图像已被删除。

## `repository_invitation` 类别操作

| 操作 | 说明
|--------|-------------
| `repository_invitation.accept` | 已接受加入存储库的邀请。
| `repository_invitation.create` | 已发送加入存储库的邀请。
| `repository_invitation.reject` | 已取消加入存储库的邀请。

## `repository_projects_change` 类别操作

| 操作 | 说明
|--------|-------------
| `repository_projects_change.clear` | 已为企业中的某个组织或所有组织删除存储库项目策略。 组织管理员现可控制其存储库项目设置。 有关详细信息，请参阅“[在企业中为项目实施策略](/admin/policies/enforcing-policies-for-your-enterprise/enforcing-policies-for-projects-in-your-enterprise)”。
| `repository_projects_change.disable` | 已为存储库、组织中的所有存储库或企业中的所有组织禁用存储库项目。
| `repository_projects_change.enable` | 已为存储库、组织中的所有存储库或企业中的所有组织启用存储库项目。

{%- ifversion ghec or ghes or ghae %}
## `repository_secret_scanning` 类别操作

| 操作 | 说明
|--------|-------------
| `repository_secret_scanning.disable` | 存储库所有者或管理员禁用了对{% ifversion ghec %}专用或内部{% endif %}存储库的机密扫描。 有关详细信息，请参阅“[关于机密扫描](/github/administering-a-repository/about-secret-scanning)”。
| `repository_secret_scanning.enable` | 存储库所有者或管理员启用了对{% ifversion ghec %}专用或内部{% endif %}存储库的机密扫描。
{%- endif %}

{%- ifversion secret-scanning-audit-log-custom-patterns %}

## `repository_secret_scanning_custom_pattern` 类别操作

| 操作 | 说明
|------------------|-------------------
| `repository_secret_scanning_custom_pattern.create` | 在存储库中发布了针对机密扫描的自定义模式。 有关详细信息，请参阅“[为机密扫描定义自定义模式](/code-security/secret-scanning/defining-custom-patterns-for-secret-scanning#defining-a-custom-pattern-for-a-repository)”。
| `repository_secret_scanning_custom_pattern.delete` | 从存储库中的机密扫描中删除了自定义模式。 有关详细信息，请参阅“[为机密扫描定义自定义模式](/code-security/secret-scanning/defining-custom-patterns-for-secret-scanning#removing-a-custom-pattern)”。
| `repository_secret_scanning_custom_pattern.update` | 将对自定义模式所做的更改保存到存储库中，以进行机密扫描。 有关详细信息，请参阅“[为机密扫描定义自定义模式](/code-security/secret-scanning/defining-custom-patterns-for-secret-scanning#editing-a-custom-pattern)”。

## `repository_secret_scanning_push_protection` 类别操作

| 操作 | 说明
|------------------|-------------------
| `repository_secret_scanning_push_protection.disable` | 存储库所有者或管理员禁用了对存储库的机密扫描。 有关详细信息，请参阅“[使用机密扫描保护推送](/code-security/secret-scanning/protecting-pushes-with-secret-scanning)”。
| `repository_secret_scanning_push_protection.enable` | 存储库所有者或管理员启用了对存储库的机密扫描。 有关详细信息，请参阅“[使用机密扫描保护推送](/code-security/secret-scanning/protecting-pushes-with-secret-scanning)”。
{%- endif %}
## `repository_visibility_change` 类别操作

| 操作 | 说明
|--------|-------------
| `repository_visibility_change.clear` | 已为组织或企业清除存储库可见性更改设置。 有关详细信息，请参阅“[限制组织中的存储库可见性更改](/organizations/managing-organization-settings/restricting-repository-visibility-changes-in-your-organization)”和“[对企业强制实施针对存储库可见性更改的策略](/admin/policies/enforcing-policies-for-your-enterprise/enforcing-repository-management-policies-in-your-enterprise#enforcing-a-policy-for-changes-to-repository-visibility)”。
| `repository_visibility_change.disable` | 已禁用企业成员更新存储库可见性的功能。 成员无法更改企业中某个组织或所有组织中的存储库可见性。
| `repository_visibility_change.enable` | 已启用企业成员更新存储库可见性的功能。 成员能够更改企业中某个组织或所有组织中的存储库可见性。

## `repository_vulnerability_alert` 类别操作

| 操作 | 说明
|--------|-------------
| `repository_vulnerability_alert.create` | {% data variables.product.product_name %} 为使用不安全的依赖项的存储库创建了 {% data variables.product.prodname_dependabot %} 警报。 有关详细信息，请参阅“[关于 {% data variables.product.prodname_dependabot_alerts %}](/code-security/dependabot/dependabot-alerts/about-dependabot-alerts)”。
| `repository_vulnerability_alert.dismiss` | 组织所有者或存储库管理员关闭了关于易受攻击的依赖项{% ifversion GH-advisory-db-supports-malware %}或恶意软件{% endif %}的{% data variables.product.prodname_dependabot %} 警报。
| `repository_vulnerability_alert.resolve` | 对存储库具有写入权限的某人推送更改，以更新和解决项目依赖项中的 {% data variables.product.prodname_dependabot %} 警报。

{%- ifversion fpt or ghec %}
## `repository_vulnerability_alerts` 类别操作

| 操作 | 说明
|--------|-------------
| `repository_vulnerability_alerts.authorized_users_teams` | 组织所有者或存储库管理员更新了存储库授权接收 {% data variables.product.prodname_dependabot_alerts %} 的人员或团队列表。 有关详细信息，请参阅“[管理存储库的安全和分析设置](/github/administering-a-repository/managing-security-and-analysis-settings-for-your-repository#granting-access-to-security-alerts)”。
| `repository_vulnerability_alerts.disable` | 存储库所有者或存储库管理员禁用了 {% data variables.product.prodname_dependabot_alerts %}。
| `repository_vulnerability_alerts.enable` | 存储库所有者或存储库管理员启用了 {% data variables.product.prodname_dependabot_alerts %}。
{%- endif %}

## `required_status_check` 类别操作

| 操作 | 说明
|--------|-------------
| `required_status_check.create` | 状态检查已被标记为所需的受保护分支。 有关详细信息，请参阅“[合并前需要状态检查](/repositories/configuring-branches-and-merges-in-your-repository/defining-the-mergeability-of-pull-requests/about-protected-branches#require-status-checks-before-merging)”。
| `required_status_check.destroy` | 不再将状态检查标记为所需的受保护分支。 有关详细信息，请参阅“[合并前需要状态检查](/repositories/configuring-branches-and-merges-in-your-repository/defining-the-mergeability-of-pull-requests/about-protected-branches#require-status-checks-before-merging)”。

{%- ifversion ghec or ghes %}
## `restrict_notification_delivery` 类别操作

| 操作 | 说明
|--------|-------------
| `restrict_notification_delivery.enable` | 已启用针对组织或企业的电子邮件通知限制。 有关详细信息，请参阅“[限制组织的电子邮件通知](/organizations/keeping-your-organization-secure/managing-security-settings-for-your-organization/restricting-email-notifications-for-your-organization)”和“[限制企业的电子邮件通知](/admin/policies/enforcing-policies-for-your-enterprise/restricting-email-notifications-for-your-enterprise)”。
| `restrict_notification_delivery.disable` | 已禁用针对组织或企业的电子邮件通知限制。 有关详细信息，请参阅“[限制组织的电子邮件通知](/organizations/keeping-your-organization-secure/managing-security-settings-for-your-organization/restricting-email-notifications-for-your-organization)”和“[限制企业的电子邮件通知](/admin/policies/enforcing-policies-for-your-enterprise/restricting-email-notifications-for-your-enterprise)”。
{%- endif %}

{%- ifversion custom-repository-roles %}
## `role` 类别操作

| 操作 | 说明
|--------|-------------
|`create` | 组织所有者创建了新的自定义存储库角色。 有关详细信息，请参阅“[管理组织的自定义存储库角色](/organizations/managing-peoples-access-to-your-organization-with-roles/managing-custom-repository-roles-for-an-organization)”。
|`destroy` | 组织所有者删除了自定义存储库角色。 有关详细信息，请参阅“[管理组织的自定义存储库角色](/organizations/managing-peoples-access-to-your-organization-with-roles/managing-custom-repository-roles-for-an-organization)”。
|`update` | 组织所有者编辑了现有的自定义存储库角色。 有关详细信息，请参阅“[管理组织的自定义存储库角色](/organizations/managing-peoples-access-to-your-organization-with-roles/managing-custom-repository-roles-for-an-organization)”。
{%- endif %}

{%- ifversion ghec or ghes or ghae %}
## `secret_scanning` 类别操作

| 操作 | 说明
|--------|-------------
| `secret_scanning.disable` | 组织所有者禁用了对所有现有{% ifversion ghec %}专用或内部{% endif %}存储库的机密扫描。 有关详细信息，请参阅“[关于机密扫描](/github/administering-a-repository/about-secret-scanning)”。
| `secret_scanning.enable` | 组织所有者启用了对所有现有{% ifversion ghec %}专用或内部{% endif %}存储库的机密扫描。

{% ifversion secret-scanning-alert-audit-log %}
## `secret_scanning_alert` 类别操作

| 操作 | 说明
|------------------|-------------------
| `secret_scanning_alert.create` | {% data variables.product.prodname_dotcom %} 检测到机密并创建了 {% data variables.product.prodname_secret_scanning %} 警报。 有关详细信息，请参阅“[管理来自 {% data variables.product.prodname_secret_scanning %} 的警报](/code-security/secret-scanning/managing-alerts-from-secret-scanning)。”
| `secret_scanning_alert.reopen` | 用户重新打开 {% data variables.product.prodname_secret_scanning %} 警报。
| `secret_scanning_alert.resolve` | 用户解决了 {% data variables.product.prodname_secret_scanning %} 警报。
{% endif %}

## `secret_scanning_new_repos` 类别操作

| 操作 | 说明
|--------|-------------
| `secret_scanning_new_repos.disable` | 组织所有者禁用了对所有新的{% ifversion ghec %}专用或内部{% endif %}存储库的机密扫描。 有关详细信息，请参阅“[关于机密扫描](/github/administering-a-repository/about-secret-scanning)”。
| `secret_scanning_new_repos.enable` | 组织所有者启用了对所有新的{% ifversion ghec %}专用或内部{% endif %}存储库的机密扫描。
{%- endif %}

{% ifversion secret-scanning-push-protection-bypasses %}
## `secret_scanning_push_protection` 类别操作

| 操作 | 说明
|--------|-------------
| `bypass` | 当用户绕过机密扫描检测到的机密的推送保护时触发。 有关详细信息，请参阅“[绕过机密的推送保护](/code-security/secret-scanning/protecting-pushes-with-secret-scanning#bypassing-push-protection-for-a-secret)”。{% endif %}

{%- ifversion ghec or ghes or ghae %}
## `security_key` 类别操作

| 操作 | 说明
|--------|-------------
| `security_key.register` | 已为帐户注册安全密钥。
| `security_key.remove` | 已从帐户中删除安全密钥。
{%- endif %}

{%- ifversion fpt or ghec %}
## `sponsors` 类别操作

| 操作 | 说明
|--------|-------------
| `sponsors.agreement_sign` | 以组织身份签署了 {% data variables.product.prodname_sponsors %} 协议。
| `sponsors.custom_amount_settings_change` | 已启用或禁用 {% data variables.product.prodname_sponsors %} 的自定义金额，或者建议的自定义金额已更改。 有关详细信息，请参阅“[管理赞助层](/sponsors/receiving-sponsorships-through-github-sponsors/managing-your-sponsorship-tiers)”。
| `sponsors.fiscal_host_change` | {% data variables.product.prodname_sponsors %} 列表的财务主机已更新。
| `sponsors.withdraw_agreement_signature` | 已从适用于组织的 {% data variables.product.prodname_sponsors %} 协议中撤销签名。
| `sponsors.repo_funding_links_file_action` | 存储库中的 FUNDING 文件已更改。 有关详细信息，请参阅“[在存储库中显示赞助按钮](/repositories/managing-your-repositorys-settings-and-features/customizing-your-repository/displaying-a-sponsor-button-in-your-repository)”。
| `sponsors.sponsor_sponsorship_cancel` | 赞助已取消。 有关详细信息，请参阅“[降级赞助](/billing/managing-billing-for-github-sponsors/downgrading-a-sponsorship)”。
| `sponsors.sponsor_sponsorship_create` | 已通过赞助帐户创建赞助。 有关详细信息，请参阅“[赞助开源参与者](/sponsors/sponsoring-open-source-contributors/sponsoring-an-open-source-contributor)”。
| `sponsors.sponsor_sponsorship_payment_complete` | 在赞助帐户并处理付款后，赞助付款已被标记为“已完成”。 有关详细信息，请参阅“[赞助开源参与者](/sponsors/sponsoring-open-source-contributors/sponsoring-an-open-source-contributor)”。
| `sponsors.sponsor_sponsorship_preference_change` | 用于从赞助帐户接收电子邮件更新的选项已更改。 有关详细信息，请参阅[管理赞助](/sponsors/sponsoring-open-source-contributors/managing-your-sponsorship)。
| `sponsors.sponsor_sponsorship_tier_change` | 赞助已升级或降级。 有关详细信息，请参阅“[升级赞助](/billing/managing-billing-for-github-sponsors/upgrading-a-sponsorship)”和“[降级赞助](/billing/managing-billing-for-github-sponsors/downgrading-a-sponsorship)”。
| `sponsors.sponsored_developer_approve` | {% data variables.product.prodname_sponsors %} 帐户已获批准。 有关详细信息，请参阅“[为组织设置 {% data variables.product.prodname_sponsors %}](/sponsors/receiving-sponsorships-through-github-sponsors/setting-up-github-sponsors-for-your-organization)”。
| `sponsors.sponsored_developer_create` | {% data variables.product.prodname_sponsors %} 帐户已创建。 有关详细信息，请参阅“[为组织设置 {% data variables.product.prodname_sponsors %}](/sponsors/receiving-sponsorships-through-github-sponsors/setting-up-github-sponsors-for-your-organization)”。
| `sponsors.sponsored_developer_disable` | 已禁用 {% data variables.product.prodname_sponsors %} 帐户。
| `sponsors.sponsored_developer_profile_update` | 编辑赞助组织个人资料。 有关详细信息，请参阅“[编辑 {% data variables.product.prodname_sponsors %} 的个人资料详细信息](/sponsors/receiving-sponsorships-through-github-sponsors/editing-your-profile-details-for-github-sponsors)”。
| `sponsors.sponsored_developer_redraft` | {% data variables.product.prodname_sponsors %} 帐户已从已批准状态恢复为草稿状态。
| `sponsors.sponsored_developer_request_approval` | 已提交 {% data variables.product.prodname_sponsors %} 的申请以供审批。 有关详细信息，请参阅“[为组织设置 {% data variables.product.prodname_sponsors %}](/sponsors/receiving-sponsorships-through-github-sponsors/setting-up-github-sponsors-for-your-organization)”。
| `sponsors.sponsored_developer_tier_description_update` | 赞助层的说明已更改。 有关详细信息，请参阅“[管理赞助层](/sponsors/receiving-sponsorships-through-github-sponsors/managing-your-sponsorship-tiers)”。
| `sponsors.update_tier_welcome_message` | 组织的 {% data variables.product.prodname_sponsors %} 层的欢迎消息已更新。
| `sponsors.update_tier_repository` | {% data variables.product.prodname_sponsors %} 层更改了存储库的访问权限。
{%- endif %}

{%- ifversion ghec or ghes or ghae %}
## `ssh_certificate_authority` 类别操作

| 操作 | 说明
|--------|-------------
| `ssh_certificate_authority.create` | 已创建组织或企业的 SSH 证书颁发机构。 有关详细信息，请参阅“[管理组织的 SSH 证书颁发机构](/organizations/managing-git-access-to-your-organizations-repositories/managing-your-organizations-ssh-certificate-authorities)”和“[管理企业的 SSH 证书颁发机构](/admin/policies/enforcing-policies-for-your-enterprise/enforcing-policies-for-security-settings-in-your-enterprise#managing-ssh-certificate-authorities-for-your-enterprise)”。
| `ssh_certificate_authority.destroy` | 已删除组织或企业的 SSH 证书颁发机构。 有关详细信息，请参阅“[管理组织的 SSH 证书颁发机构](/organizations/managing-git-access-to-your-organizations-repositories/managing-your-organizations-ssh-certificate-authorities)”和“[管理企业的 SSH 证书颁发机构](/admin/policies/enforcing-policies-for-your-enterprise/enforcing-policies-for-security-settings-in-your-enterprise#managing-ssh-certificate-authorities-for-your-enterprise)”。

## `ssh_certificate_requirement` 类别操作

| 操作 | 说明
|--------|-------------
| `ssh_certificate_requirement.enable` | 已启用成员使用 SSH 证书访问组织资源的要求。 有关详细信息，请参阅“[管理组织的 SSH 证书颁发机构](/organizations/managing-git-access-to-your-organizations-repositories/managing-your-organizations-ssh-certificate-authorities)”和“[管理企业的 SSH 证书颁发机构](/admin/policies/enforcing-policies-for-your-enterprise/enforcing-policies-for-security-settings-in-your-enterprise#managing-ssh-certificate-authorities-for-your-enterprise)”。
| `ssh_certificate_requirement.disable` | 已禁止成员使用 SSH 证书访问组织资源的要求。 有关详细信息，请参阅“[管理组织的 SSH 证书颁发机构](/organizations/managing-git-access-to-your-organizations-repositories/managing-your-organizations-ssh-certificate-authorities)”和“[管理企业的 SSH 证书颁发机构](/admin/policies/enforcing-policies-for-your-enterprise/enforcing-policies-for-security-settings-in-your-enterprise#managing-ssh-certificate-authorities-for-your-enterprise)”。
{%- endif %}

{% ifversion sso-redirect %}
## `sso_redirect` 类别操作

{% data reusables.enterprise-managed.sso-redirect-release-phase %}

| 操作 | 描述 |
|--------|------------ |
`sso_redirect.enable` | 已为用户启用单一登录 (SSO) 自动重定向。 |
`sso_redirect.disable` | 已为用户禁用单一登录 (SSO) 自动重定向。 |

有关详细信息，请参阅“[为企业中的安全设置强制实施策略](/admin/policies/enforcing-policies-for-your-enterprise/enforcing-policies-for-security-settings-in-your-enterprise#managing-sso-for-unauthenticated-users)”。
{% endif %}

## `staff` 类别操作

| 操作 | 说明
|--------|-------------
| `staff.disable_repo`          | 组织{% ifversion ghes %}、存储库或站点{% else %}或者存储库{% endif %}管理员禁用了对存储库及其所有分支的访问权限。
| `staff.enable_repo`           | 组织{% ifversion ghes %}、存储库或站点{% else %}或者存储库{% endif %}管理员重新启用了对存储库及其所有分支的访问权限。
{%- ifversion ghes or ghae %} | `staff.exit_fake_login`       | 企业所有者{% ifversion ghes %}或站点管理员{% endif %}结束了 {% data variables.product.product_name %} 上的模拟会话。
| `staff.fake_login`            | 企业所有者{% ifversion ghes %}或站点管理员{% endif %}以其他用户身份登录到 {% data variables.product.product_name %}。
{%- endif %} | `staff.repo_lock`             | 组织{% ifversion ghes %}、存储库或站点{% else %}或者存储库{% endif %}管理员锁定（暂时获得）了对用户专用存储库的完全访问权限。
| `staff.repo_unlock`           | 组织{% ifversion ghes %}、存储库或站点{% else %}或存储库{% endif %}管理员解锁（终止）了对用户专用存储库的临时访问权限。
{%- ifversion ghes %} | `staff.search_audit_log` | 站点管理员对站点管理员审核日志进行了搜索。
{%- endif %} | `staff.set_domain_token_expiration` | {% ifversion ghes %}站点管理员或 {% endif %}GitHub 工作人员为组织或企业域设置验证码到期时间。 {% ifversion ghec or ghes %}有关详细信息，请参阅“[验证或审批组织的域](/organizations/managing-organization-settings/verifying-or-approving-a-domain-for-your-organization)”和“[验证或审批企业的域](/admin/configuration/configuring-your-enterprise/verifying-or-approving-a-domain-for-your-enterprise)”。{% endif %} {%- ifversion ghes %} | `staff.unlock`                | 站点管理员解锁（暂时获得）了对用户的所有专用存储库的完全访问权限。
{%- endif %} | `staff.unverify_domain` | {% ifversion ghes %}站点管理员或 {% endif %}GitHub 员工未验证组织或企业域。 {% ifversion ghec or ghes %}有关详细信息，请参阅“[验证或审批组织的域](/organizations/managing-organization-settings/verifying-or-approving-a-domain-for-your-organization)”和“[验证或审批企业的域](/admin/configuration/configuring-your-enterprise/verifying-or-approving-a-domain-for-your-enterprise)”。{% endif %} | `staff.verify_domain` | {% ifversion ghes %}站点管理员或 {% endif %}GitHub 工作人员验证了组织或企业域。 {% ifversion ghec or ghes %}有关详细信息，请参阅“[验证或审批组织的域](/organizations/managing-organization-settings/verifying-or-approving-a-domain-for-your-organization)”和“[验证或审批企业的域](/admin/configuration/configuring-your-enterprise/verifying-or-approving-a-domain-for-your-enterprise)”。{% endif %} {%- ifversion ghes %} | `staff.view_audit_log` | 站点管理员查看了站点管理员审核日志。
{%- endif %}

## `team` 类别操作

| 操作 | 说明
|--------|-------------
| `team.add_member` | 已将组织的成员添加到团队中。 有关详细信息，请参阅“[将组织成员添加到团队](/organizations/organizing-members-into-teams/adding-organization-members-to-a-team)”。
| `team.add_repository` | 已授予团队对存储库的访问权限和权限。
| `team.change_parent_team` | 已创建子团队或已更改子团队的父团队。 有关详细信息，请参阅“[在组织的层次结构中移动团队](/organizations/organizing-members-into-teams/moving-a-team-in-your-organizations-hierarchy)”。
| `team.change_privacy` | 团队的隐私级别已更改。 有关详细信息，请参阅“[更改团队可见性](/organizations/organizing-members-into-teams/changing-team-visibility)”。
| `team.create` | 已向团队添加用户帐户或仓库。
| `team.delete` | 已从团队中移除用户帐户或仓库。
| `team.destroy` | 已删除团队。
{%- ifversion ghec or ghes or ghae %} | `team.demote_maintainer` | 用户已从团队维护者降级为团队成员。
| `team.promote_maintainer` | 用户已从团队成员提升为团队维护者。 有关详细信息，请参阅“[将组织成员提升为团队维护者](/organizations/organizing-members-into-teams/assigning-the-team-maintainer-role-to-a-team-member#promoting-an-organization-member-to-team-maintainer)”。
{%- endif %} | `team.remove_member` | 组织的成员已从团队中移除。 有关详细信息，请参阅“[从团队中删除组织成员](/organizations/organizing-members-into-teams/removing-organization-members-from-a-team)”。
| `team.remove_repository` | 存储库不再受团队控制。
| `team.rename` | 团队的名称已更改。
| `team.update_permission` | 团队的访问权限已更改。
| `team.update_repository_permission` | 团队对存储库的权限已更改。

## `team_discussions` 类别操作

| 操作 | 说明
|--------|-------------
| `team_discussions.clear` | 组织所有者清除了设置，以允许组织或企业进行团队讨论。
| `team_discussions.disable` | 组织所有者为组织禁用了团队讨论。 有关详细信息，请参阅[禁用组织的团队讨论](/organizations/organizing-members-into-teams/disabling-team-discussions-for-your-organization)。
| `team_discussions.enable` | 组织所有者为组织启用了团队讨论。

{%- ifversion ghec %}
## `team_sync_tenant` 类别操作

| 操作 | 说明
|--------|-------------
| `team_sync_tenant.disabled` | 已禁用与租户的团队同步。 有关详细信息，请参阅“[为组织管理团队同步](/organizations/managing-saml-single-sign-on-for-your-organization/managing-team-synchronization-for-your-organization)”和“[为企业中的组织管理团队同步](/admin/identity-and-access-management/managing-iam-for-your-enterprise/managing-team-synchronization-for-organizations-in-your-enterprise)”。
| `team_sync_tenant.enabled` | 已启用与租户的团队同步。 有关详细信息，请参阅“[为组织管理团队同步](/organizations/managing-saml-single-sign-on-for-your-organization/managing-team-synchronization-for-your-organization)”和“[为企业中的组织管理团队同步](/admin/identity-and-access-management/managing-iam-for-your-enterprise/managing-team-synchronization-for-organizations-in-your-enterprise)”。
| `team_sync_tenant.update_okta_credentials` | 用于团队与租户同步的 Okta 凭据已更改。
{%- endif %}

{%- ifversion fpt or ghes %}
## `two_factor_authentication` 类别操作

| 操作 | 说明
|--------|-------------
| `two_factor_authentication.disabled` | 已为用户帐户禁用双因素身份验证[][2fa]。
| `two_factor_authentication.enabled`  | 已为用户帐户启用双因素身份验证[][2fa]。
| `two_factor_authentication.password_reset_fallback_sms` | 一次性密码代码已发送到用户帐户备用电话号码。
| `two_factor_authentication.recovery_codes_regenerated` | 已为用户帐户重新生成双因素恢复代码。
| `two_factor_authentication.sign_in_fallback_sms` | 一次性密码代码已发送到用户帐户备用电话号码。
| `two_factor_authentication.update_fallback` | 用户帐户的双因素身份验证回退已更改。
{%- endif %}

  [2fa]: /authentication/securing-your-account-with-two-factor-authentication-2fa/about-two-factor-authentication

{%- ifversion fpt or ghes or ghae %}
## `user` 类别操作

| 操作 | 说明
|--------|-------------
| `user.add_email`                  | 已向用户帐户添加电子邮件地址。
| `user.async_delete`               | 已启动异步作业以销毁用户帐户，最终触发 `user.delete` 事件。
| `user.audit_log_export` | 审核日志条目已导出。
| `user.block_user` | 一个用户被另一个用户{% ifversion ghes %}或站点管理员{% endif %}阻止。
| `user.change_password`            | 用户已更改其密码。
| `user.create`                     | 已创建新的用户帐户。
| `user.creation_rate_limit_exceeded` | 用户帐户、应用程序、问题、拉取请求或其他资源的创建速率超过了配置的速率限制，或者关注的用户过多。
| `user.delete`                     | 已通过异步作业销毁用户帐户。
{%- ifversion ghes %} | `user.demote`                     | 已将站点管理员降级为普通用户帐户。
{%- endif %} | `user.destroy`                    | 用户删除了他或她的帐户，从而触发了 `user.async_delete`。
| `user.failed_login`               | 用户尝试使用不正确的用户名、密码或双因素身份验证码登录。
| `user.flag_as_large_scale_contributor` | 已将用户帐户标记为大规模参与者。 只有来自用户拥有的公共存储库的贡献才会显示在他们的贡献图中，以防止超时。
| `user.forgot_password`            | 用户通过登录页面请求了密码重置。
| `user.hide_private_contributions_count` | 用户更改了其私人贡献的可见性。 现在将隐藏对用户配置文件上专用存储库的贡献数量。 有关详细信息，请参阅“[在配置文件中公开或隐藏私人贡献](/account-and-profile/setting-up-and-managing-your-github-profile/managing-contribution-graphs-on-your-profile/publicizing-or-hiding-your-private-contributions-on-your-profile)”。
| `user.lockout` | 用户被锁定在其帐户之外。
| `user.login`                      | 用户已登录。
{%- ifversion ghes or ghae %} | `user.mandatory_message_viewed`   | 用户查看了必填消息。 有关详细信息，请参阅“[为企业自定义用户消息](/admin/user-management/managing-users-in-your-enterprise/customizing-user-messages-for-your-enterprise)”。
{%- endif %} | `user.minimize_comment` | 已将用户发表的评论数降至最低。
{%- ifversion ghes %} | `user.promote`                    | 已将普通用户帐户提升为站点管理员。
{%- endif %} | `user.recreate` | 用户的帐户已还原。
| `user.remove_email`               | 已从用户帐户中移除电子邮件地址。
| `user.remove_large_scale_contributor_flag` | 用户帐户不再被标记为大规模参与者。
| `user.rename`                     | 用户名已更改。
| `user.reset_password` | 用户重置其帐户密码。
| `user.show_private_contributions_count` | 用户更改了其私人贡献的可见性。 现在将显示对用户配置文件上专用存储库的贡献数量。 有关详细信息，请参阅“[在配置文件中公开或隐藏私人贡献](/account-and-profile/setting-up-and-managing-your-github-profile/managing-contribution-graphs-on-your-profile/publicizing-or-hiding-your-private-contributions-on-your-profile)”。
| `user.sign_in_from_unrecognized_device` | 用户从无法识别的设备登录了。
| `user.sign_in_from_unrecognized_device_and_location` | 用户从无法识别的设备和位置登录了。
| `user.sign_in_from_unrecognized_location` | 用户从无法识别的位置登录了。
| `user.suspend`                    | 用户帐户已被企业所有者{% ifversion ghes %}或站点管理员{% endif %}暂停。
| `user.two_factor_challenge_failure` | 为用户帐户发出的 2FA 质询失败。
| `user.two_factor_challenge_success` | 为用户帐户发出的 2FA 质询成功。
| `user.two_factor_recover` | 用户使用了其 2FA 恢复代码。
| `user.two_factor_recovery_codes_downloaded` | 用户为其帐户下载了 2FA 恢复代码。
| `user.two_factor_recovery_codes_printed` | 用户为其帐户打印了 2FA 恢复代码。
| `user.two_factor_recovery_codes_viewed` | 用户查看了其帐户的 2FA 恢复代码。
| `user.two_factor_requested`       | 已提示用户输入双因素身份验证码。
| `user.unblock_user` | 一个用户被另一个用户{% ifversion ghes %}或站点管理员{% endif %}解锁。
| `user.unminimize_comment` | 未将用户发表的评论数降至最低。
| `user.unsuspend` | 企业所有者{% ifversion ghes %}或站点管理员{% endif %}已恢复对用户帐户的访问权限。
{%- endif %}

{%- ifversion ghec or ghes %}
## `user_license` 类别操作

| 操作 | 说明
|--------|-------------
| `user_license.create` | 已为企业中的用户创建席位许可证。
| `user_license.destroy` | 已删除企业中用户的席位许可证。
| `user_license.update` | 企业中用户的席位许可证类型已更改。
{%- endif %}

## `workflows` 类别操作

{% data reusables.audit_log.audit-log-events-workflows %}
