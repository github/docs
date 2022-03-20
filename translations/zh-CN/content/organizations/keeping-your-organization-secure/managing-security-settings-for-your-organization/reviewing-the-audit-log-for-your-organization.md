---
title: 审查组织的审核日志
intro: 审核日志允许组织管理员快速审查组织成员执行的操作。 其中包含操作执行人、操作内容和执行时间等详细信息。
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
shortTitle: 审核审计日志
---

## 访问审核日志

The audit log lists events triggered by activities that affect your organization within the current month and previous six months. 只有所有者才能访问组织的审核日志。

{% data reusables.audit_log.only-three-months-displayed %}

{% data reusables.profile.access_org %}
{% data reusables.profile.org_settings %}
{% data reusables.audit_log.audit_log_sidebar_for_org_admins %}

## 搜索审核日志

{% data reusables.audit_log.audit-log-search %}

### 基于执行的操作搜索

要搜索特定事件，请在查询中使用 `action` 限定符。 审核日志中列出的操作分为以下类别：

| 类别名称                                                                                                                                                                                      | 描述                                                                                                                                                                                                                                                                                                         |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |{% ifversion fpt or ghec %}
| [`帐户`](#account-category-actions)                                                                                                                                                         | 包含与组织帐户相关的所有活动。                                                                                                                                                                                                                                                                                            |
| [`advisory_credit`](#advisory_credit-category-actions)                                                                                                                                    | 包含与 {% data variables.product.prodname_advisory_database %} 中安全通告的贡献者积分相关的所有活动。 更多信息请参阅“[关于 {% data variables.product.prodname_dotcom %} 安全通告](/github/managing-security-vulnerabilities/about-github-security-advisories)”。                                                                             |
| [`计费，帐单`](#billing-category-actions)                                                                                                                                                      | 包含与组织帐单相关的所有活动。                                                                                                                                                                                                                                                                                            |
| [`business`](#business-category-actions)                                                                                                                                                  | 包含与企业业务设置相关的活动。                                                                                                                                                                                                                                                                                            |
| [`codespaces`](#codespaces-category-actions)                                                                                                                                              | Contains all activities related to your organization's codespaces. |{% endif %}{% ifversion fpt or ghec or ghes > 3.2 %}
| [`dependabot_alerts`](#dependabot_alerts-category-actions)                                                                                                                                | Contains organization-level configuration activities for  {% data variables.product.prodname_dependabot_alerts %} in existing repositories. 更多信息请参阅“[关于 {% data variables.product.prodname_dependabot_alerts %}](/github/managing-security-vulnerabilities/about-alerts-for-vulnerable-dependencies)”。 |
| [`dependabot_alerts_new_repos`](#dependabot_alerts_new_repos-category-actions)                                                                                                            | Contains organization-level configuration activities for  {% data variables.product.prodname_dependabot_alerts %} in new repositories created in the organization.                                                                                                                                       |
| [`dependabot_security_updates`](#dependabot_security_updates-category-actions)                                                                                                            | 包含现有仓库中 {% data variables.product.prodname_dependabot_security_updates %} 的组织级配置活动。 更多信息请参阅“[配置 {% data variables.product.prodname_dependabot_security_updates %}](/github/managing-security-vulnerabilities/configuring-dependabot-security-updates)。”                                                |
| [`dependabot_security_updates_new_repos`](#dependabot_security_updates_new_repos-category-actions)                                                                                        | Contains organization-level configuration activities for {% data variables.product.prodname_dependabot_security_updates %} for new repositories created in the organization.{% endif %}{% ifversion fpt or ghec %}
| [`dependency_graph`](#dependency_graph-category-actions)                                                                                                                                  | 包含仓库依赖项图的组织级配置活动。 更多信息请参阅“[关于依赖关系图](/github/visualizing-repository-data-with-graphs/about-the-dependency-graph)”。                                                                                                                                                                                          |
| [`dependency_graph_new_repos`](#dependency_graph_new_repos-category-actions)                                                                                                              | 包含组织新建仓库的组织级配置活动。{% endif %}
| [`discussion_post`](#discussion_post-category-actions)                                                                                                                                    | 包含与发布到团队页面的讨论相关的所有活动。                                                                                                                                                                                                                                                                                      |
| [`discussion_post_reply`](#discussion_post_reply-category-actions)                                                                                                                        | 包含与发布到团队页面的讨论回复相关的所有活动。{% ifversion fpt or ghes or ghec %}
| [`企业`](#enterprise-category-actions)                                                                                                                                                      | 包含与企业设置相关的活动。                                                                                                                                                                                                                                                                                              |{% endif %}
| [`挂钩`](#hook-category-actions)                                                                                                                                                            | 包含与 web 挂钩相关的所有活动。                                                                                                                                                                                                                                                                                         |
| [`integration_installation_request`](#integration_installation_request-category-actions)                                                                                                  | 包含与组织成员请求所有者批准用于组织的集成相关的所有活动。 |{% ifversion ghec or ghae %}
| [`ip_allow_list`](#ip_allow_list-category-actions)                                                                                                                                        | Contains activities related to enabling or disabling the IP allow list for an organization.                                                                                                                                                                                                                |
| [`ip_allow_list_entry`](#ip_allow_list_entry-category-actions)                                                                                                                            | Contains activities related to the creation, deletion, and editing of an IP allow list entry for an organization.{% endif %}
| [`议题`](#issue-category-actions)                                                                                                                                                           | 包含与删除议题相关的活动。                                                                                                                                                                                                                                                                                              |{% ifversion fpt or ghec %}
| [`marketplace_agreement_signature`](#marketplace_agreement_signature-category-actions)                                                                                                    | 包含与签署 {% data variables.product.prodname_marketplace %} 开发者协议相关的所有活动。                                                                                                                                                                                                                                      |
| [`marketplace_listing`](#marketplace_listing-category-actions)                                                                                                                            | 包含与在 {% data variables.product.prodname_marketplace %} 中上架应用程序相关的所有活动。{% endif %}{% ifversion fpt or ghes or ghec %}
| [`members_can_create_pages`](#members_can_create_pages-category-actions)                                                                                                                  | 包含与管理组织仓库的 {% data variables.product.prodname_pages %} 站点发布相关的所有活动。 更多信息请参阅“[管理组织的 {% data variables.product.prodname_pages %} 站点发布](/organizations/managing-organization-settings/managing-the-publication-of-github-pages-sites-for-your-organization)”。                                                 |{% endif %}
| [`org`](#org-category-actions)                                                                                                                                                            | 包含与组织成员身份相关的活动。{% ifversion ghec %}
| [`org_credential_authorization`](#org_credential_authorization-category-actions)                                                                                                          | 包含与授权凭据以用于 SAML 单点登录相关的所有活动。{% endif %}{% ifversion fpt or ghes or ghae or ghec %}
| [`organization_label`](#organization_label-category-actions)                                                                                                                              | 包含与组织中仓库的默认标签相关的所有活动。{% endif %}
| [`oauth_application`](#oauth_application-category-actions)                                                                                                                                | 包含与 OAuth 应用程序相关的所有活动。{% ifversion fpt or ghes or ghec %}
| [`包`](#packages-category-actions)                                                                                                                                                         | 包含与 {% data variables.product.prodname_registry %} 相关的所有活动。{% endif %}{% ifversion fpt or ghec %}
| [`payment_method`](#payment_method-category-actions)                                                                                                                                      | 包含与组织如何支付 GitHub 相关的所有活动。{% endif %}
| [`profile_picture`](#profile_picture-category-actions)                                                                                                                                    | 包含与组织的头像相关的所有活动。                                                                                                                                                                                                                                                                                           |
| [`project`](#project-category-actions)                                                                                                                                                    | 包含与项目板相关的所有活动。                                                                                                                                                                                                                                                                                             |
| [`protected_branch`](#protected_branch-category-actions)                                                                                                                                  | 包含与受保护分支相关的所有活动。                                                                                                                                                                                                                                                                                           |
| [`repo`](#repo-category-actions)                                                                                                                                                          | 包含与组织拥有的仓库相关的所有活动。{% ifversion fpt or ghec %}
| [`repository_advisory`](#repository_advisory-category-actions)                                                                                                                            | 包含与 {% data variables.product.prodname_advisory_database %} 中的安全通告相关的仓库级活动。  更多信息请参阅“[关于 {% data variables.product.prodname_dotcom %} 安全通告](/github/managing-security-vulnerabilities/about-github-security-advisories)”。                                                                                |
| [`repository_content_analysis`](#repository_content_analysis-category-actions)                                                                                                            | 包含与[启用或禁用私有仓库的数据使用](/articles/about-github-s-use-of-your-data)相关的所有活动。{% endif %}{% ifversion fpt or ghec %}
| [`repository_dependency_graph`](#repository_dependency_graph-category-actions)                                                                                                            | 包含与启用或禁用依赖项图相关的仓库级活动                                                                                                                                                                                                                                                                                       |
| {% ifversion fpt or ghec %}私有{% endif %}仓库。 更多信息请参阅“[关于依赖项图](/github/visualizing-repository-data-with-graphs/about-the-dependency-graph)”。{% endif %}{% ifversion ghes or ghae or ghec %} |                                                                                                                                                                                                                                                                                                            |
| [`repository_secret_scanning`](#repository_secret_scanning-category-actions)                                                                                                              | 包含与密码扫描相关的仓库级活动。 更多信息请参阅“[关于密钥扫描](/github/administering-a-repository/about-secret-scanning)”。                                                                                                                                                                                                              |{% endif %}{% ifversion fpt or ghes or ghae-issue-4864 or ghec %}
| [`repository_vulnerability_alert`](#repository_vulnerability_alert-category-actions)                                                                                                      | 包含与[有漏洞依赖项的 {% data variables.product.prodname_dependabot_alerts %}](/github/managing-security-vulnerabilities/about-alerts-for-vulnerable-dependencies)相关的所有活动。{% endif %}{% ifversion fpt or ghec %}
| [`repository_vulnerability_alerts`](#repository_vulnerability_alerts-category-actions)                                                                                                    | Contains repository-level configuration activities for {% data variables.product.prodname_dependabot_alerts %}.{% endif %}{% ifversion ghec %}
| [`角色`](#role-category-actions)                                                                                                                                                            | Contains all activities related to [custom repository roles](/organizations/managing-peoples-access-to-your-organization-with-roles/managing-custom-repository-roles-for-an-organization).{% endif %}{% ifversion ghes or ghae or ghec %}
| [`secret_scanning`](#secret_scanning-category-actions)                                                                                                                                    | 包含现有仓库中密码扫描的组织级配置活动。 更多信息请参阅“[关于密钥扫描](/github/administering-a-repository/about-secret-scanning)”。                                                                                                                                                                                                          |
| [`secret_scanning_new_repos`](#secret_scanning_new_repos-category-actions)                                                                                                                | 包含组织新建仓库中密码扫描的组织级配置活动。                                                                                                                                                                                                                                                                                     |{% endif %}{% ifversion fpt or ghec %}
| [`sponsors`](#sponsors-category-actions)                                                                                                                                                  | 包含与与赞助者按钮相关的所有事件（请参阅“[在仓库中显示赞助者按钮](/articles/displaying-a-sponsor-button-in-your-repository)”）{% endif %}
| [`团队`](#team-category-actions)                                                                                                                                                            | 包含与您的组织中的团队相关的所有活动。                                                                                                                                                                                                                                                                                        |
| [`team_discussions`](#team_discussions-category-actions)                                                                                                                                  | Contains activities related to managing team discussions for an organization.{% ifversion fpt or ghec or ghes > 3.1 or ghae %}
| [`工作流程`](#workflows-category-actions)                                                                                                                                                     | Contains activities related to {% data variables.product.prodname_actions %} workflows.{% endif %}

您可以使用这些词搜索特定的操作集。 例如：

  * `action:team` 会找到团队类别中的所有事件。
  * `-action:hook` 会排除 web 挂钩类别中的所有事件。

每个类别都有一组可进行过滤的关联操作。 例如：

  * `action:team.create` 会找到团队创建处的所有事件。
  * `-action:hook.events_changed` 会排除 web 挂钩上事件已经改动的所有事件。

### 基于操作时间搜索

使用 `created` 限定符在审核日志中根据事件发生的时间过滤事件。 {% data reusables.time_date.date_format %} {% data reusables.time_date.time_format %}

{% data reusables.search.date_gt_lt %}

例如：

  * `created:2014-07-08` 会找到在 2014 年 7 月 8 日发生的所有事件。
  * `created:>=2014-07-08` 查找在 2014 年 7 月 8 日或之后发生的所有事件。
  * `created:<=2014-07-08` 查找在 2014 年 7 月 8 日或之前发生的所有事件。
  * `created:2014-07-01..2014-07-31` 会找到在 2014 年 7 月发生的所有事件。

{% note %}

**Note**: The audit log contains data for the current month and every day of the previous six months.

{% endnote %}

### 基于位置搜索

使用限定符 `country`，您可以在审核日志中根据发生事件的国家/地区过滤事件。 您可以使用国家/地区的两字母短代码或完整名称。 请注意，名称中包含空格的国家/地区需要加引号。 例如：

  * `country:de` 会找到在德国发生的所有事件。
  * `country:Mexico` 会找到在墨西哥发生的所有事件。
  * `country:"United States"` 会找到在美国发生的所有事件。

{% ifversion fpt or ghec %}
## 导出审核日志

{% data reusables.audit_log.export-log %}
{% data reusables.audit_log.exported-log-keys-and-values %}
{% endif %}

## 使用审核日志 API

您可以使用 GraphQL API{% ifversion fpt or ghec %} 或 REST API{% endif %} 与审核日志交互。

{% ifversion fpt or ghec %}
The audit log API requires {% data variables.product.prodname_ghe_cloud %}.{% ifversion fpt %} {% data reusables.enterprise.link-to-ghec-trial %}{% endif %}

### 使用 GraphQL API

{% endif %}

{% note %}

**注**：审核日志 GraphQL API 可用于使用 {% data variables.product.prodname_enterprise %} 的组织。 {% data reusables.gated-features.more-info-org-products %}

{% endnote %}

为确保知识产权得到保护并保持组织的合规，您可以使用审核日志 GraphQL API 保留审核日志数据的副本并监控：
{% data reusables.audit_log.audit-log-api-info %}

{% ifversion fpt or ghec %}
请注意，您不能使用 GraphQL API 检索 Git 事件。 要检索 Git 事件，请改为使用 REST API。 更多信息请参阅“[`git` 类操作](#git-category-actions)”。
{% endif %}

GraphQL 响应可包含长达 90 至 120 天的数据。

例如，您可以创建 GraphQL 请求以查看添加到组织的所有新组织成员。 更多信息请参阅“[GraphQL API 审核日志]({% ifversion ghec%}/free-pro-team@latest{% endif %}/graphql/reference/interfaces#auditentry/)”。

{% ifversion fpt or ghec %}

### 使用 REST API

{% note %}

**注**：审核日志 REST API 可供 {% data variables.product.prodname_ghe_cloud %} 用户使用。

{% endnote %}

为确保知识产权得到保护并保持组织的合规，您可以使用审核日志 REST API 保留审核日志数据的副本并监控：
{% data reusables.audit_log.audited-data-list %}

{% data reusables.audit_log.audit-log-git-events-retention %}

By default, only events from the past three months are returned. To include older events, you must specify a timestamp in your query.

有关审核日志 REST API 的更多信息，请参阅“[组织](/rest/reference/orgs#get-the-audit-log-for-an-organization)”。

{% endif %}

## 审核日志操作

审核日志中记录为事件的一些最常见操作的概述。

{% ifversion fpt or ghec %}
### `account` 类操作

| 操作                            | 描述                                                                                                                   |
| ----------------------------- | -------------------------------------------------------------------------------------------------------------------- |
| `billing_plan_change`         | 当组织的[结算周期](/articles/changing-the-duration-of-your-billing-cycle)发生更改时触发。                                            |
| `plan_change`                 | 当组织的[订阅](/articles/about-billing-for-github-accounts)发生更改时触发。                                                        |
| `pending_plan_change`         | 当组织所有者或帐单管理员[取消或降级付费订阅](/articles/how-does-upgrading-or-downgrading-affect-the-billing-process/)时触发。                 |
| `pending_subscription_change` | 当 [{% data variables.product.prodname_marketplace %} 免费试用开始或到期](/articles/about-billing-for-github-marketplace/)时触发。 |
{% endif %}

{% ifversion fpt or ghec %}
### `advisory_credit` 类操作

| 操作        | 描述                                                                                                         |
| --------- | ---------------------------------------------------------------------------------------------------------- |
| `accept`  | 当有人接受安全通告的积分时触发。 更多信息请参阅“[编辑安全通告](/github/managing-security-vulnerabilities/editing-a-security-advisory)”。 |
| `create`  | 当安全通告的管理员将某人添加到积分部分时触发。                                                                                    |
| `decline` | 当有人拒绝安全通告的积分时触发。                                                                                           |
| `destroy` | 当安全通告的管理员将某人从积分部分删除时触发。                                                                                    |
{% endif %}

{% ifversion fpt or ghec %}
### `billing` 类操作

| 操作                    | 描述                                                                                                           |
| --------------------- | ------------------------------------------------------------------------------------------------------------ |
| `change_billing_type` | 当组织[更改 {% data variables.product.prodname_dotcom %} 的支付方式](/articles/adding-or-editing-a-payment-method)时触发。 |
| `change_email`        | 当组织的[帐单电子邮件地址](/articles/setting-your-billing-email)发生更改时触发。                                                 |
{% endif %}

### `business` 类操作

| 操作                                     | 描述                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| -------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |{% ifversion fpt or ghec %}
| `set_actions_fork_pr_approvals_policy` | 为企业改变需要批准来自公共复刻的工作流程的设置时触发。 更多信息请参阅“[在企业中执行 {% data variables.product.prodname_actions %} 的策略](/enterprise-cloud@latest/admin/policies/enforcing-policies-for-your-enterprise/enforcing-policies-for-github-actions-in-your-enterprise#enforcing-a-policy-for-fork-pull-requests-in-your-enterprise)”。{% endif %}
| `set_actions_retention_limit`          | 为企业改变 {% data variables.product.prodname_actions %} 构件和日志的保留期时触发。 更多信息请参阅“[在企业中执行 {% data variables.product.prodname_actions %} 的策略]({% ifversion fpt %}/enterprise-cloud@latest{% endif %}/admin/policies/enforcing-policies-for-your-enterprise/enforcing-policies-for-github-actions-in-your-enterprise#enforcing-a-policy-for-artifact-and-log-retention-in-your-enterprise)”。{% ifversion fpt or ghes or ghec %}
| `set_fork_pr_workflows_policy`         | 更改私有仓库复刻上的工作流程策略时触发。 For more information, see "{% ifversion fpt or ghec%}[Enforcing policies for {% data variables.product.prodname_actions %} in your enterprise]({% ifversion fpt %}/enterprise-cloud@latest{% endif %}/admin/policies/enforcing-policies-for-your-enterprise/enforcing-policies-for-github-actions-in-your-enterprise#enforcing-a-policy-for-fork-pull-requests-in-private-repositories){% else ifversion ghes > 2.22 %}[Enabling workflows for private repository forks](/admin/github-actions/enabling-github-actions-for-github-enterprise-server/enforcing-github-actions-policies-for-your-enterprise#enabling-workflows-for-private-repository-forks){% endif %}."{% endif %}

{% ifversion fpt or ghec %}
### `codespaces` 类操作

| 操作                           | 描述                                                                                                                                                                                              |
| ---------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `create`                     | 当用户[创建代码空间](/github/developing-online-with-codespaces/creating-a-codespace)时触发。                                                                                                                 |
| `resume`                     | 当用户恢复暂停的代码空间时触发。                                                                                                                                                                                |
| `delete`                     | 当用户[删除代码空间](/github/developing-online-with-codespaces/deleting-a-codespace)时触发。                                                                                                                 |
| `create_an_org_secret`       | 当用户为 [{% data variables.product.prodname_codespaces %}](/github/developing-online-with-codespaces/managing-encrypted-secrets-for-codespaces#about-encrypted-secrets-for-codespaces) 创建组织级密钥时触发  |
| `update_an_org_secret`       | 当用户为 [{% data variables.product.prodname_codespaces %}](/github/developing-online-with-codespaces/managing-encrypted-secrets-for-codespaces#about-encrypted-secrets-for-codespaces) 更新组织级密钥时触发。 |
| `remove_an_org_secret`       | 当用户为 [{% data variables.product.prodname_codespaces %}](/github/developing-online-with-codespaces/managing-encrypted-secrets-for-codespaces#about-encrypted-secrets-for-codespaces) 删除组织级密钥时触发。 |
| `manage_access_and_security` | 当用户更新[代码空间可以访问的仓库](/github/developing-online-with-codespaces/managing-access-and-security-for-codespaces)时触发。                                                                                   |
{% endif %}

{% ifversion fpt or ghec or ghes > 3.2 %}
### `dependabot_alerts` 类操作

| 操作   | 描述                                                                                                                                                                                                                                                                                                                           |
| ---- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `禁用` | Triggered when an organization owner disables {% data variables.product.prodname_dependabot_alerts %} for all existing {% ifversion fpt or ghec %}private {% endif %}repositories. 更多信息请参阅“[管理组织的安全和分析设置](/organizations/keeping-your-organization-secure/managing-security-and-analysis-settings-for-your-organization)”。 |
| `启用` | Triggered when an organization owner enables {% data variables.product.prodname_dependabot_alerts %} for all existing {% ifversion fpt or ghec %}private {% endif %}repositories.                                                                                                                                          |

### `dependabot_alerts_new_repos` 类操作

| 操作   | 描述                                                                                                                                                                                                                                                                                                                      |
| ---- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `禁用` | Triggered when an organization owner disables {% data variables.product.prodname_dependabot_alerts %} for all new {% ifversion fpt or ghec %}private {% endif %}repositories. 更多信息请参阅“[管理组织的安全和分析设置](/organizations/keeping-your-organization-secure/managing-security-and-analysis-settings-for-your-organization)”。 |
| `启用` | Triggered when an organization owner enables {% data variables.product.prodname_dependabot_alerts %} for all new {% ifversion fpt or ghec %}private {% endif %}repositories.                                                                                                                                          |

### `dependabot_security_updates` 类操作

| 操作   | 描述                                                                                                                                                                                                                               |
| ---- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `禁用` | 当组织所有者对所有现有仓库禁用 {% data variables.product.prodname_dependabot_security_updates %} 时触发。 更多信息请参阅“[管理组织的安全和分析设置](/organizations/keeping-your-organization-secure/managing-security-and-analysis-settings-for-your-organization)”。 |
| `启用` | 当组织所有者对所有现有仓库启用 {% data variables.product.prodname_dependabot_security_updates %} 时触发。                                                                                                                                         |

### `dependabot_security_updates_new_repos` 类操作

| 操作   | 描述                                                                                                                                                                                                                              |
| ---- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `禁用` | 当组织所有者对所有新仓库禁用 {% data variables.product.prodname_dependabot_security_updates %} 时触发。 更多信息请参阅“[管理组织的安全和分析设置](/organizations/keeping-your-organization-secure/managing-security-and-analysis-settings-for-your-organization)”。 |
| `启用` | 当组织所有者对所有新仓库启用 {% data variables.product.prodname_dependabot_security_updates %} 时触发。                                                                                                                                         |
{% endif %}

{% ifversion fpt or ghec %}
### `dependency_graph` 类操作

| 操作   | 描述                                                                                                                                                              |
| ---- | --------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `禁用` | 当组织所有者对所有现有仓库禁用依赖项图时触发。 更多信息请参阅“[管理组织的安全和分析设置](/organizations/keeping-your-organization-secure/managing-security-and-analysis-settings-for-your-organization)”。 |
| `启用` | 当组织所有者对所有现有仓库启用依赖项图时触发。                                                                                                                                         |

### `dependency_graph_new_repos` 类操作

| 操作   | 描述                                                                                                                                                             |
| ---- | -------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `禁用` | 当组织所有者对所有新仓库禁用依赖项图时触发。 更多信息请参阅“[管理组织的安全和分析设置](/organizations/keeping-your-organization-secure/managing-security-and-analysis-settings-for-your-organization)”。 |
| `启用` | 当组织所有者对所有新仓库启用依赖项图时触发。                                                                                                                                         |
{% endif %}

### `discussion_post` 类操作

| 操作        | 描述                                                                           |
| --------- | ---------------------------------------------------------------------------- |
| `update`  | 当[团队讨论帖子被编辑](/articles/managing-disruptive-comments/#editing-a-comment)时触发。  |
| `destroy` | 当[团队讨论帖子被删除](/articles/managing-disruptive-comments/#deleting-a-comment)时触发。 |

### `discussion_post_reply` 类操作

| 操作        | 描述                                                                              |
| --------- | ------------------------------------------------------------------------------- |
| `update`  | 当[团队讨论帖子的回复被编辑](/articles/managing-disruptive-comments/#editing-a-comment)时触发。  |
| `destroy` | 当[团队讨论帖子的回复被删除](/articles/managing-disruptive-comments/#deleting-a-comment)时触发。 |

{% ifversion fpt or ghes or ghec %}
### `enterprise` 类别操作

{% data reusables.actions.actions-audit-events-for-enterprise %}

{% endif %}

{% ifversion fpt or ghec %}
### `environment` 类别操作

| 操作                      | 描述                                                                                   |
| ----------------------- | ------------------------------------------------------------------------------------ |
| `create_actions_secret` | 在环境中创建机密时触发。 更多信息请参阅“[环境机密](/actions/reference/environments#environment-secrets)”。   |
| `delete`                | 当环境被删除时触发。 更多信息请参阅“[删除环境](/actions/reference/environments#deleting-an-environment)”。 |
| `remove_actions_secret` | 从环境中删除机密时触发。 更多信息请参阅“[环境机密](/actions/reference/environments#environment-secrets)”。   |
| `update_actions_secret` | 当环境中的机密更新时触发。 更多信息请参阅“[环境机密](/actions/reference/environments#environment-secrets)”。  |
{% endif %}

{% ifversion ghae %}
### `external_group` category actions

{% data reusables.saml.external-group-audit-events %}

{% endif %}

{% ifversion ghae %}
### `external_identity` category actions

{% data reusables.saml.external-identity-audit-events %}

{% endif %}

{% ifversion fpt or ghec %}
### `git` 类操作

{% note %}

**注：**要访问审核日志中的 Git 事件，必须使用审核日志 REST API。 审核日志 REST API 仅供 {% data variables.product.prodname_ghe_cloud %} 用户使用。 更多信息请参阅“[组织](/rest/reference/orgs#get-the-audit-log-for-an-organization)”。

{% endnote %}

{% data reusables.audit_log.audit-log-git-events-retention %}

| 操作   | 描述           |
| ---- | ------------ |
| `克隆` | 当仓库被克隆时触发。   |
| `获取` | 从仓库获取更改时触发。  |
| `推送` | 将更改推送到仓库时触发。 |

{% endif %}

### `hook` 类操作

| 操作               | 描述                                                 |
| ---------------- | -------------------------------------------------- |
| `create`         | 当[新挂钩被添加](/articles/creating-webhooks)到组织拥有的仓库时触发. |
| `config_changed` | 当现有挂钩的配置发生更改时触发。                                   |
| `destroy`        | 从仓库中删除现有挂钩时触发。                                     |
| `events_changed` | 当挂钩上的事件发生更改时触发。                                    |

### `integration_installation_request` 类操作

| 操作       | 描述                                          |
| -------- | ------------------------------------------- |
| `create` | 当组织成员请求组织所有者安装集成以用于组织时触发。                   |
| `close`  | 当安装集成以用于组织的请求被组织所有者批准或拒绝，或者被提出请求的组成成员取消时触发。 |

{% ifversion ghec or ghae %}
### `ip_allow_list` 类操作

| 操作                           | 描述                                                                       |
| ---------------------------- | ------------------------------------------------------------------------ |
| `启用`                         | 为组织启用 IP 允许列表时触发。                                                        |
| `禁用`                         | 为组织禁用 IP 允许列表时触发。                                                        |
| `enable_for_installed_apps`  | 为已安装的 {% data variables.product.prodname_github_apps %} 启用 IP 允许列表时触发。 |
| `disable_for_installed_apps` | 为已安装的 {% data variables.product.prodname_github_apps %} 禁用 IP 允许列表时触发。 |

### `ip_allow_list_entry` 类操作

| 操作        | 描述                                                              |
| --------- | --------------------------------------------------------------- |
| `create`  | IP 地址添加到 IP 允许列表中时触发。                                           |
| `update`  | Triggered when an IP address or its description was changed.    |
| `destroy` | Triggered when an IP address was deleted from an IP allow list. |
{% endif %}

### `issue` 类操作

| 操作        | 描述                                   |
| --------- | ------------------------------------ |
| `destroy` | 当组织所有者或仓库中具有管理员权限的人从组织拥有的仓库中删除议题时触发。 |

{% ifversion fpt or ghec %}

### `marketplace_agreement_signature` 类操作

| 操作       | 描述                                                              |
| -------- | --------------------------------------------------------------- |
| `create` | 在签署 {% data variables.product.prodname_marketplace %} 开发者协议时触发。 |

### `marketplace_listing` 类操作

| 操作        | 描述                                                                   |
| --------- | -------------------------------------------------------------------- |
| `批准`      | 当您的列表被批准包含在 {% data variables.product.prodname_marketplace %} 中时触发。  |
| `create`  | 当您在 {% data variables.product.prodname_marketplace %} 中为应用程序创建列表时触发。 |
| `delist`  | 当您的列表从 {% data variables.product.prodname_marketplace %} 中被删除时触发。    |
| `redraft` | 将您的列表被返回到草稿状态时触发。                                                    |
| `reject`  | 当您的列表被拒绝包含在 {% data variables.product.prodname_marketplace %} 中时触发。  |

{% endif %}

{% ifversion fpt or ghes or ghec %}

### `members_can_create_pages` 类操作

更多信息请参阅“[管理组织的 {% data variables.product.prodname_pages %} 站点发布](/organizations/managing-organization-settings/managing-the-publication-of-github-pages-sites-for-your-organization)”。

| 操作   | 描述                                                                   |
|:---- |:-------------------------------------------------------------------- |
| `启用` | 当组织所有者启用在组织中的仓库发布 {% data variables.product.prodname_pages %} 站点时触发。 |
| `禁用` | 当组织所有者禁止在组织中的仓库发布 {% data variables.product.prodname_pages %} 站点时触发。 |

{% endif %}

### `org` 类操作

| 操作                                                  | 描述                                                                                                                                                                                                                                                                                                                                                           |
| --------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `add_member`                                        | Triggered when a user joins an organization.                                                                                                                                                                                                                                                                                                                 |
| `advanced_security_policy_selected_member_disabled` | 当企业所有者阻止为组织拥有的仓库启用 {% data variables.product.prodname_GH_advanced_security %} 功能时触发。 {% data reusables.advanced-security.more-information-about-enforcement-policy %}
| `advanced_security_policy_selected_member_enabled`  | 当企业所有者允许为组织拥有的仓库启用 {% data variables.product.prodname_GH_advanced_security %} 功能时触发。 {% data reusables.advanced-security.more-information-about-enforcement-policy %}{% ifversion fpt or ghec %}
| `audit_log_export`                                  | 组织管理员[创建组织审核日志导出](#exporting-the-audit-log)时触发。 如果导出包含查询，则日志将列出所使用的查询以及与该查询匹配的审核日志条目数量。                                                                                                                                                                                                                                                                      |
| `block_user`                                        | 当组织所有者[阻止用户访问组织的仓库](/communities/maintaining-your-safety-on-github/blocking-a-user-from-your-organization)时触发。                                                                                                                                                                                                                                               |
| `cancel_invitation`                                 | 当组织邀请被撤销时触发的。                                                                                                                                                                                                                                                                                                                                                |{% endif %}{% ifversion fpt or ghes or ghec %}
| `create_actions_secret`                             | 为组织创建 {% data variables.product.prodname_actions %} 机密时触发。 更多信息请参阅“[为组织创建加密密码](/actions/reference/encrypted-secrets#creating-encrypted-secrets-for-an-organization)”。{% endif %}                                                                                                                                                                             |{% ifversion fpt or ghec %}
| `disable_oauth_app_restrictions`                    | Triggered when an owner [disables {% data variables.product.prodname_oauth_app %} access restrictions](/articles/disabling-oauth-app-access-restrictions-for-your-organization) for your organization.{% ifversion ghec %}
| `disable_saml`                                      | Triggered when an organization admin disables SAML single sign-on for an organization.{% endif %}{% endif %}
| `disable_member_team_creation_permission`           | 当组织所有者将团队创建限于所有者时触发。 更多信息请参阅“[设置组织中的团队创建权限](/articles/setting-team-creation-permissions-in-your-organization)”。 |{% ifversion not ghae %}
| `disable_two_factor_requirement`                    | 当所有者对组织中的所有成员{% ifversion fpt or ghec %}、帐单管理员{% endif %} 和外部协作者禁用双重身份验证要求时触发。{% endif %}{% ifversion fpt or ghec %}
| `enable_oauth_app_restrictions`                     | Triggered when an owner [enables {% data variables.product.prodname_oauth_app %} access restrictions](/articles/enabling-oauth-app-access-restrictions-for-your-organization) for your organization.{% ifversion ghec %}
| `enable_saml`                                       | Triggered when an organization admin [enables SAML single sign-on](/articles/enabling-and-testing-saml-single-sign-on-for-your-organization) for an organization.{% endif %}{% endif %}
| `enable_member_team_creation_permission`            | 当组织所有者允许成员创建团队时触发。 更多信息请参阅“[设置组织中的团队创建权限](/articles/setting-team-creation-permissions-in-your-organization)”。 |{% ifversion not ghae %}
| `enable_two_factor_requirement`                     | Triggered when an owner requires two-factor authentication for all members{% ifversion fpt or ghec %}, billing managers,{% endif %} and outside collaborators in an organization.{% endif %}{% ifversion fpt or ghec %}
| `invite_member`                                     | 当[新用户被邀请加入您的组织](/organizations/managing-membership-in-your-organization/inviting-users-to-join-your-organization)时触发。                                                                                                                                                                                                                                        |
| `oauth_app_access_approved`                         | 当所有者[授权组织访问 {% data variables.product.prodname_oauth_app %}](/articles/approving-oauth-apps-for-your-organization/) 时触发。                                                                                                                                                                                                                                   |
| `oauth_app_access_denied`                           | 当所有者对组织[禁用先前批准的 {% data variables.product.prodname_oauth_app %} 权限](/articles/denying-access-to-a-previously-approved-oauth-app-for-your-organization)时触发。                                                                                                                                                                                                 |
| `oauth_app_access_requested`                        | 当组织成员请求所有者对组织授予 {% data variables.product.prodname_oauth_app %} 权限时触发。{% endif %}
| `register_self_hosted_runner`                       | 在注册新的自托管运行器时触发。 更多信息请参阅“[将自托管运行器添加到组织](/actions/hosting-your-own-runners/adding-self-hosted-runners#adding-a-self-hosted-runner-to-an-organization)”。                                                                                                                                                                                                        |
| `remove_actions_secret`                             | 当 {% data variables.product.prodname_actions %} 密码删除时触发。{% ifversion fpt or ghec %}
| `remove_billing_manager`                            | 当[所有者从组织中删除帐单管理员](/articles/removing-a-billing-manager-from-your-organization/)，或者当[组织中要求使用双重身份验证](/articles/requiring-two-factor-authentication-in-your-organization)但帐单管理员未使用 2FA 或禁用 2FA 时触发。 
{% endif %}
| `remove_member`                                     | 当[所有者从组织中删除成员](/articles/removing-a-member-from-your-organization/)，{% ifversion not ghae %} 或者当[组织中要求使用双重身份验证](/articles/requiring-two-factor-authentication-in-your-organization)但组织成员未使用 2FA 或禁用 2FA 时触发{% endif %}。 当[组织成员从组织中删除自己](/articles/removing-yourself-from-an-organization/)时也会触发。                                                             |
| `remove_outside_collaborator`                       | 当所有者从组织中删除外部协作者，{% ifversion not ghae %} 或者当[组织中要求使用双重身份验证](/articles/requiring-two-factor-authentication-in-your-organization)但外部协作者未使用 2FA 或禁用 2FA 时触发{% endif %}。                                                                                                                                                                                         |
| `remove_self_hosted_runner`                         | 当自托管运行器被移除时触发。 更多信息请参阅“[从组织移除运行器](/actions/hosting-your-own-runners/removing-self-hosted-runners#removing-a-runner-from-an-organization)”。                                                                                                                                                                                                                   |{% ifversion ghec %}
| `revoke_external_identity`                          | 当组织所有者撤销成员的链接身份时触发。 更多信息请参阅“[查看和管理成员对组织的 SAML 访问](/organizations/granting-access-to-your-organization-with-saml-single-sign-on/viewing-and-managing-a-members-saml-access-to-your-organization#viewing-and-revoking-a-linked-identity)”。                                                                                                                     |
| `revoke_sso_session`                                | 当组织所有者撤销成员的 SAML 会话时触发。 更多信息请参阅“[查看和管理成员对组织的 SAML 访问](/organizations/granting-access-to-your-organization-with-saml-single-sign-on/viewing-and-managing-a-members-saml-access-to-your-organization#viewing-and-revoking-a-linked-identity)”。                                                                                                                 |{% endif %}
| `runner_group_created`                              | 在创建自托管运行器组时触发。 更多信息请参阅“[为组织创建自托管运行器组](/actions/hosting-your-own-runners/managing-access-to-self-hosted-runners-using-groups#creating-a-self-hosted-runner-group-for-an-organization)”。                                                                                                                                                                       |
| `runner_group_removed`                              | 当自托管运行器组被移除时触发。 更多信息请参阅“[移除自托管运行器组](/actions/hosting-your-own-runners/managing-access-to-self-hosted-runners-using-groups#removing-a-self-hosted-runner-group)”。                                                                                                                                                                                             |
| `runner_group_updated`                              | 当自托管运行器组的配置改变时触发。 更多信息请参阅“[更改自托管运行器组的访问策略](/actions/hosting-your-own-runners/managing-access-to-self-hosted-runners-using-groups#changing-the-access-policy-of-a-self-hosted-runner-group)”。                                                                                                                                                                 |
| `runner_group_runners_added`                        | 当自托管运行器添加到组时触发。 更多信息请参阅“[将自托管运行器移动到组](/actions/hosting-your-own-runners/managing-access-to-self-hosted-runners-using-groups#moving-a-self-hosted-runner-to-a-group)”。                                                                                                                                                                                        |
| `runner_group_runner_removed`                       | 当 REST API 用于从组中删除自托管运行器时触发。 更多信息请参阅“[为组织从组中删除自托管运行器](/rest/reference/actions#remove-a-self-hosted-runner-from-a-group-for-an-organization)”。                                                                                                                                                                                                                |
| `runner_group_runners_updated`                      | 当运行器组成员列表更新时触发。 更多信息请参阅“[为组织设置组中的自托管运行器](/rest/reference/actions#set-self-hosted-runners-in-a-group-for-an-organization)”。{% ifversion fpt or ghes > 3.1 or ghae or ghec %}
| `self_hosted_runner_online`                         | 当运行器应用程序启动时触发。 只能使用 REST API 查看；在 UI 或 JSON/CSV 导出中不可见。 更多信息请参阅“[检查自托管运行器的状态](/actions/hosting-your-own-runners/monitoring-and-troubleshooting-self-hosted-runners#checking-the-status-of-a-self-hosted-runner)”。                                                                                                                                            |
| `self_hosted_runner_offline`                        | 当运行器应用程序停止时触发。 只能使用 REST API 查看；在 UI 或 JSON/CSV 导出中不可见。 For more information, see "[Checking the status of a self-hosted runner](/actions/hosting-your-own-runners/monitoring-and-troubleshooting-self-hosted-runners#checking-the-status-of-a-self-hosted-runner)."{% endif %}{% ifversion fpt or ghes or ghec %}
| `self_hosted_runner_updated`                        | 当运行器应用程序更新时触发。 可以使用 REST API 和 UI 查看；在 JSON /CSV 导出中不可见。 更多信息请参阅“[关于自托管的运行器](/actions/hosting-your-own-runners/about-self-hosted-runners#about-self-hosted-runners)”。{% endif %}{% ifversion fpt or ghec %}
| `set_actions_fork_pr_approvals_policy`              | 为组织改变需要批准来自公共复刻的工作流程的设置时触发。 更多信息请参阅“[需要批准来自公共复刻的工作流程](/organizations/managing-organization-settings/disabling-or-limiting-github-actions-for-your-organization#requiring-approval-for-workflows-from-public-forks)”。{% endif %}
| `set_actions_retention_limit`                       | 改变 {% data variables.product.prodname_actions %} 构件和日志的保留期时触发。 更多信息请参阅“[在企业中执行 {% data variables.product.prodname_actions %} 的策略](/admin/policies/enforcing-policies-for-your-enterprise/enforcing-policies-for-github-actions-in-your-enterprise#enforcing-a-policy-for-artifact-and-log-retention-in-your-enterprise)”。{% ifversion fpt or ghes or ghec %}
| `set_fork_pr_workflows_policy`                      | 更改私有仓库复刻上的工作流程策略时触发。 更多信息请参阅“[为私有仓库复刻启用工作流程](/organizations/managing-organization-settings/disabling-or-limiting-github-actions-for-your-organization#enabling-workflows-for-private-repository-forks)”。{% endif %}{% ifversion fpt or ghec %}
| `unblock_user`                                      | 当组织所有者[取消阻止用户访问组织](/communities/maintaining-your-safety-on-github/unblocking-a-user-from-your-organization)时触发。{% endif %}{% ifversion fpt or ghes or ghec %}
| `update_actions_secret`                             | 当 {% data variables.product.prodname_actions %} 密码更新时触发。{% endif %}
| `update_new_repository_default_branch_setting`      | 当所有者更改组织中新仓库的默认分支名称时触发。 更多信息请参阅“[管理组织中仓库的默认分支名称](/organizations/managing-organization-settings/managing-the-default-branch-name-for-repositories-in-your-organization)”。                                                                                                                                                                                     |
| `update_default_repository_permission`              | 当所有者更改组织成员的默认仓库权限级别时触发的。                                                                                                                                                                                                                                                                                                                                     |
| `update_member`                                     | 当所有者将某人的角色从所有者更改为成员或者从成员更改为所有者时触发。                                                                                                                                                                                                                                                                                                                           |
| `update_member_repository_creation_permission`      | 当所有者更改组织成员创建仓库的权限时触发。{% ifversion fpt or ghec %}
| `update_saml_provider_settings`                     | 当组织的 SAML 提供程序设置被更新时触发。                                                                                                                                                                                                                                                                                                                                      |
| `update_terms_of_service`                           | 当组织在标准服务条款和公司服务条款之间切换时触发。 更多信息请参阅“[升级到公司服务条款](/articles/upgrading-to-the-corporate-terms-of-service)”。{% endif %}

{% ifversion ghec %}
### `org_credential_authorization` 类操作

| 操作             | 描述                                                                                                                                                              |
| -------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `grant`        | 当成员[授权用于 SAML 单点登录的凭据](/github/authenticating-to-github/authenticating-with-saml-single-sign-on)时触发。                                                            |
| `deauthorized` | 当成员[取消授权用于 SAML 单点登录的凭据](/github/authenticating-to-github/authenticating-with-saml-single-sign-on)时触发。                                                          |
| `revoke`       | 当所有者[撤销授权的凭据](/organizations/granting-access-to-your-organization-with-saml-single-sign-on/viewing-and-managing-a-members-saml-access-to-your-organization)时触发。 |

{% endif %}

{% ifversion fpt or ghes or ghae or ghec %}
### `organization_label` 类操作

| 操作        | 描述         |
| --------- | ---------- |
| `create`  | 创建默认标签时触发。 |
| `update`  | 编辑默认标签时触发。 |
| `destroy` | 删除默认标签时触发。 |

{% endif %}

### `oauth_application` 类操作

| 操作              | 描述                                                                |
| --------------- | ----------------------------------------------------------------- |
| `create`        | 在创建新 {% data variables.product.prodname_oauth_app %} 时触发。       |
| `destroy`       | 当现有 {% data variables.product.prodname_oauth_app %} 被删除时触发。     |
| `reset_secret`  | 当 {% data variables.product.prodname_oauth_app %} 的客户端密钥被重置时触发。 |
| `revoke_tokens` | 当 {% data variables.product.prodname_oauth_app %} 的用户令牌被撤销时触发。  |
| `转让`            | 当现有 {% data variables.product.prodname_oauth_app %} 被转让到新组织时触发。 |

{% ifversion fpt or ghes or ghec %}
### `packages` 类操作

| 操作                          | 描述                                                                                                                                                                                                                                          |
| --------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `package_version_published` | 当软件包版本发布时触发。                                                                                                                                                                                                                                |
| `package_version_deleted`   | Triggered when a specific package version is deleted.{% ifversion fpt or ghec or ghes > 3.1 %} For more information, see "[Deleting and restoring a package](/packages/learn-github-packages/deleting-and-restoring-a-package)."{% endif %}
| `package_deleted`           | Triggered when an entire package is deleted.{% ifversion fpt or ghec or ghes > 3.1 %} For more information, see "[Deleting and restoring a package](/packages/learn-github-packages/deleting-and-restoring-a-package)."{% endif %}
| `package_version_restored`  | Triggered when a specific package version is deleted.{% ifversion fpt or ghec or ghes > 3.1 %} For more information, see "[Deleting and restoring a package](/packages/learn-github-packages/deleting-and-restoring-a-package)."{% endif %}
| `package_restored`          | Triggered when an entire package is restored.{% ifversion fpt or ghec or ghes > 3.1 %} For more information, see "[Deleting and restoring a package](/packages/learn-github-packages/deleting-and-restoring-a-package)."{% endif %}

{% endif %}

{% ifversion fpt or ghec %}

### `payment_method` 类操作

| 操作       | 描述                                |
| -------- | --------------------------------- |
| `create` | 在添加新的付款方式（例如新的信用卡或 PayPal 帐户）时触发。 |
| `update` | 当现有付款方式被更新时触发。                    |

{% endif %}

### `profile_picture` 类操作
| 操作     | 描述                |
| ------ | ----------------- |
| update | 在设置或更新组织的资料图片时触发。 |

### `project` 类操作

| 操作                       | 描述                                     |
| ------------------------ | -------------------------------------- |
| `create`                 | 在创建项目板时触发。                             |
| `link`                   | 当仓库被链接到项目板时触发。                         |
| `rename`                 | 当项目板被重命名时触发。                           |
| `update`                 | 当项目板被更新时触发。                            |
| `delete`                 | 在删除项目板时触发。                             |
| `unlink`                 | 当仓库从项目板解除链接时触发。                        |
| `update_org_permission`  | 当所有组织成员的基本级别权限被更改或删除时触发。               |
| `update_team_permission` | 当团队的项目板权限级别被更改，或者在项目板中添加或删除团队时触发。      |
| `update_user_permission` | 在项目板中添加或删除组织成员或外部协作者时，或者他们的权限级别被更改时触发。 |

### `protected_branch` 类操作

| 操作                                                    | 描述                                                            |
| ----------------------------------------------------- | ------------------------------------------------------------- |
| `create`                                              | 在分支上启用分支保护时触发。                                                |
| `destroy`                                             | 在分支上禁用分支保护时触发。                                                |
| `update_admin_enforced`                               | 为仓库管理员实施分支保护时触发。                                              |
| `update_require_code_owner_review`                    | 在分支上更新必需代码所有者审查的实施时触发。                                        |
| `dismiss_stale_reviews`                               | 在分支上更新忽略旧拉取请求的实施时触发。                                          |
| `update_signature_requirement_enforcement_level`      | 在分支上更新必需提交签名的实施时触发。                                           |
| `update_pull_request_reviews_enforcement_level`       | 在分支上更新必需拉取请求审查的实施时触发。 可以是 `0`（已停用）、`1`（非管理员）`2`（所有人）之一。       |
| `update_required_status_checks_enforcement_level`     | 在分支上更新必需状态检查的实施时触发。                                           |
| `update_strict_required_status_checks_policy`         | 当分支在合并之前保持最新的要求被更改时触发。                                        |
| `rejected_ref_update`                                 | 当分支更新尝试被拒绝时触发。                                                |
| `policy_override`                                     | 当仓库管理员重写分支保护要求时触发。{% ifversion fpt or ghes or ghae or ghec %}
| `update_allow_force_pushes_enforcement_level`         | 对受保护分支启用或禁用强制推送时触发。                                           |
| `update_allow_deletions_enforcement_level`            | 对受保护分支启用或禁用分支删除时触发。                                           |
| `update_linear_history_requirement_enforcement_level` | 对受保护分支启用或禁用必要线性提交历史记录时触发。                                     |
{% endif %}

{% ifversion fpt or ghes > 3.1 or ghae or ghec %}

### `pull_request` 类操作

| 操作                      | 描述                            |
| ----------------------- | ----------------------------- |
| `create`                | 在创建拉取请求时触发。                   |
| `close`                 | 在未合并的情况下关闭拉取请求时触发。            |
| `重新激活`                  | 当之前关闭的拉取请求重新打开时触发。            |
| `合并`                    | 当拉取请求合并时触发。                   |
| `indirect_merge`        | 当拉取请求被视为合并时触发，因为其提交被合并到目标分支中。 |
| `ready_for_review`      | 当拉请求被标记为可供审核时触发。              |
| `converted_to_draft`    | 当拉请求转换为草稿时触发。                 |
| `create_review_request` | 当请求审核时触发。                     |
| `remove_review_request` | 当审核请求被移除时触发。                  |

### `pull_request_review` 类操作

| 操作       | 描述         |
| -------- | ---------- |
| `提交`     | 在提交审核时触发。  |
| `忽略`     | 当审核被忽略时触发。 |
| `delete` | 当审核被删除时触发。 |

### `pull_request_review_comment` 类操作

| 操作       | 描述          |
| -------- | ----------- |
| `create` | 在添加审核评论时触发。 |
| `update` | 在更改审核评论时触发。 |
| `delete` | 在删除审核评论时触发。 |

{% endif %}

### `repo` 类操作

| 操作                                     | 描述                                                                                                                                                                                                                                                                                                                                                                                                                    |
| -------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `access`                               | 当用户[更改组织中仓库的可见性](/github/administering-a-repository/setting-repository-visibility)时触发。                                                                                                                                                                                                                                                                                                                                |
| `actions_enabled`                      | 为仓库启用 {% data variables.product.prodname_actions %} 时触发。 可以使用用户界面查看。 当您使用 REST API 访问审计日志时，不包括此事件。 更多信息请参阅“[使用 REST API](#using-the-rest-api)”。                                                                                                                                                                                                                                                                       |
| `add_member`                           | 当用户接受[邀请以获取仓库协作权限](/articles/inviting-collaborators-to-a-personal-repository)时触发。                                                                                                                                                                                                                                                                                                                                     |
| `add_topic`                            | 当仓库管理员向仓库[添加主题](/articles/classifying-your-repository-with-topics)时触发。                                                                                                                                                                                                                                                                                                                                                |
| `advanced_security_disabled`           | 当仓库管理员为仓库禁用 {% data variables.product.prodname_GH_advanced_security %} 功能时触发。 更多信息请参阅“[管理仓库的安全和分析设置](/github/administering-a-repository/managing-security-and-analysis-settings-for-your-repository)”。                                                                                                                                                                                                              |
| `advanced_security_enabled`            | 当仓库管理员为仓库启用 {% data variables.product.prodname_GH_advanced_security %} 功能时触发。 更多信息请参阅“[管理仓库的安全和分析设置](/github/administering-a-repository/managing-security-and-analysis-settings-for-your-repository)”。                                                                                                                                                                                                              |
| `archived`                             | 当仓库管理员[存档仓库](/articles/about-archiving-repositories)时触发。{% ifversion ghes %}
| `config.disable_anonymous_git_access`  | 当公共仓库中[禁用匿名 Git 读取权限](/enterprise/{{ currentVersion }}/user/articles/enabling-anonymous-git-read-access-for-a-repository)时触发。                                                                                                                                                                                                                                                                                         |
| `config.enable_anonymous_git_access`   | 当公共仓库中[启用匿名 Git 读取权限](/enterprise/{{ currentVersion }}/user/articles/enabling-anonymous-git-read-access-for-a-repository)时触发。                                                                                                                                                                                                                                                                                         |
| `config.lock_anonymous_git_access`     | 当仓库的[匿名 Git 读取权限设置被锁定](/enterprise/{{ currentVersion }}/admin/guides/user-management/preventing-users-from-changing-anonymous-git-read-access)时触发。                                                                                                                                                                                                                                                                    |
| `config.unlock_anonymous_git_access`   | 当仓库的[匿名 Git 读取权限设置被解锁](/enterprise/{{ currentVersion }}/admin/guides/user-management/preventing-users-from-changing-anonymous-git-read-access)时触发。{% endif %}
| `create`                               | 在[创建新仓库](/articles/creating-a-new-repository)时触发。{% ifversion fpt or ghes or ghec %}
| `create_actions_secret`                | 为仓库创建 {% data variables.product.prodname_actions %} 密码时触发。 更多信息请参阅“[为仓库创建加密密码](/actions/reference/encrypted-secrets#creating-encrypted-secrets-for-a-repository)”。{% endif %}
| `destroy`                              | 当[仓库被删除](/articles/deleting-a-repository)时触发。{% ifversion fpt or ghec %}
| `禁用`                                   | 当仓库被禁用（例如，因[资金不足](/articles/unlocking-a-locked-account)）时触发。{% endif %}
| `启用`                                   | 在重新启用仓库时触发。{% ifversion fpt or ghes or ghec %}
| `remove_actions_secret`                | 当 {% data variables.product.prodname_actions %} 密码被移除时触发。{% endif %}
| `remove_member`                        | 从[仓库中删除用户的协作者身份](/articles/removing-a-collaborator-from-a-personal-repository)时触发。                                                                                                                                                                                                                                                                                                                                    |
| `register_self_hosted_runner`          | 在注册新的自托管运行器时触发。 更多信息请参阅“[将自托管运行器添加到仓库](/actions/hosting-your-own-runners/adding-self-hosted-runners#adding-a-self-hosted-runner-to-a-repository)”。                                                                                                                                                                                                                                                                    |
| `remove_self_hosted_runner`            | 当自托管运行器被移除时触发。 更多信息请参阅“[从仓库移除运行器](/actions/hosting-your-own-runners/removing-self-hosted-runners#removing-a-runner-from-a-repository)”。                                                                                                                                                                                                                                                                               |
| `remove_topic`                         | 当仓库管理员从仓库中删除主题时触发。                                                                                                                                                                                                                                                                                                                                                                                                    |
| `rename`                               | 在[新仓库重命名](/articles/renaming-a-repository)时触发。{% ifversion fpt or ghes > 3.1 or ghae or ghec %}
| `self_hosted_runner_online`            | 当运行器应用程序启动时触发。 只能使用 REST API 查看；在 UI 或 JSON/CSV 导出中不可见。 更多信息请参阅“[检查自托管运行器的状态](/actions/hosting-your-own-runners/monitoring-and-troubleshooting-self-hosted-runners#checking-the-status-of-a-self-hosted-runner)”。                                                                                                                                                                                                     |
| `self_hosted_runner_offline`           | 当运行器应用程序停止时触发。 只能使用 REST API 查看；在 UI 或 JSON/CSV 导出中不可见。 For more information, see "[Checking the status of a self-hosted runner](/actions/hosting-your-own-runners/monitoring-and-troubleshooting-self-hosted-runners#checking-the-status-of-a-self-hosted-runner)."{% endif %}{% ifversion fpt or ghes or ghec %}
| `self_hosted_runner_updated`           | 当运行器应用程序更新时触发。 可以使用 REST API 和 UI 查看；在 JSON /CSV 导出中不可见。 更多信息请参阅“[关于自托管的运行器](/actions/hosting-your-own-runners/about-self-hosted-runners#about-self-hosted-runners)”。{% endif %}{% ifversion fpt or ghec %}
| `set_actions_fork_pr_approvals_policy` | 改变需要批准来自公共复刻的工作流程的设置时触发。 更多信息请参阅“[管理仓库的 {% data variables.product.prodname_actions %} 设置](/repositories/managing-your-repositorys-settings-and-features/enabling-features-for-your-repository/managing-github-actions-settings-for-a-repository#configuring-required-approval-for-workflows-from-public-forks)”。{% endif %}
| `set_actions_retention_limit`          | 改变 {% data variables.product.prodname_actions %} 构件和日志的保留期时触发。 更多信息请参阅“[管理仓库的 {% data variables.product.prodname_actions %} 设置](/repositories/managing-your-repositorys-settings-and-features/enabling-features-for-your-repository/managing-github-actions-settings-for-a-repository#configuring-the-retention-period-for-github-actions-artifacts-and-logs-in-your-repository)”。{% ifversion fpt or ghes or ghec %}
| `set_fork_pr_workflows_policy`         | 更改私有仓库复刻上的工作流程策略时触发。 更多信息请参阅“[管理仓库的 {% data variables.product.prodname_actions %} 设置](/repositories/managing-your-repositorys-settings-and-features/enabling-features-for-your-repository/managing-github-actions-settings-for-a-repository#enabling-workflows-for-private-repository-forks)”。{% endif %}
| `转让`                                   | 当[仓库被转让](/articles/how-to-transfer-a-repository)时触发。                                                                                                                                                                                                                                                                                                                                                                  |
| `transfer_start`                       | 在仓库转让即将发生时触发。                                                                                                                                                                                                                                                                                                                                                                                                         |
| `unarchived`                           | 当仓库管理员取消存档仓库时触发。{% ifversion fpt or ghes or ghec %}
| `update_actions_secret`                | 当 {% data variables.product.prodname_actions %} 密码更新时触发。{% endif %}

{% ifversion fpt or ghec %}

### `repository_advisory` 类操作

| 操作                 | 描述                                                                                                                                                         |
| ------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `close`            | 当有人关闭安全通告时触发。 更多信息请参阅“[关于 {% data variables.product.prodname_dotcom %} 安全通告](/github/managing-security-vulnerabilities/about-github-security-advisories)”。 |
| `cve_request`      | 当有人从 {% data variables.product.prodname_dotcom %} 为安全通告草稿申请 CVE（通用漏洞披露）编号时触发。                                                                              |
| `github_broadcast` | 当 {% data variables.product.prodname_dotcom %} 在 {% data variables.product.prodname_advisory_database %} 中公开安全通告时触发。                                     |
| `github_withdraw`  | 当 {% data variables.product.prodname_dotcom %} 撤回错误发布的安全通告时触发。                                                                                             |
| `已激活`              | 当有人打开安全通告草稿时触发。                                                                                                                                            |
| `publish`          | 当有人发布安全通告时触发。                                                                                                                                              |
| `重新激活`             | 当有人重新打开安全通告草稿时触发。                                                                                                                                          |
| `update`           | 当有人编辑草稿或发布安全通告时触发。                                                                                                                                         |

### `repository_content_analysis` 类操作

| 操作   | 描述                                                                                                                           |
| ---- | ---------------------------------------------------------------------------------------------------------------------------- |
| `启用` | 当组织所有者或对仓库有管理员权限的人[对私有仓库启用数据使用设置](/get-started/privacy-on-github/managing-data-use-settings-for-your-private-repository)时触发。 |
| `禁用` | 当组织所有者或对仓库有管理员权限的人[对私有仓库禁用数据使用设置](/get-started/privacy-on-github/managing-data-use-settings-for-your-private-repository)时触发。 |

{% endif %}{% ifversion fpt or ghec %}

### `repository_dependency_graph` 类操作

| 操作   | 描述                                                                                                                                                                       |
| ---- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `禁用` | 当仓库所有者或对仓库拥有管理员权限的人对{% ifversion fpt or ghec %}私有{% endif %}仓库禁用依赖项图时触发。 更多信息请参阅“[关于依赖关系图](/github/visualizing-repository-data-with-graphs/about-the-dependency-graph)”。 |
| `启用` | 当仓库所有者或对仓库拥有管理员权限的人对{% ifversion fpt or ghec %}私有{% endif %}仓库启用依赖项图时触发。                                                                                                 |

{% endif %}{% ifversion ghec or ghes or ghae %}
### `repository_secret_scanning` 类操作

| 操作   | 描述                                                                                                                                                                                                                                                         |
| ---- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `禁用` | Triggered when a repository owner or person with admin access to the repository disables secret scanning for a {% ifversion ghec %}private or internal {% endif %}repository. 更多信息请参阅“[关于密钥扫描](/github/administering-a-repository/about-secret-scanning)”。 |
| `启用` | Triggered when a repository owner or person with admin access to the repository enables secret scanning for a {% ifversion ghec %}private or internal {% endif %}repository.                                                                               |

{% endif %}{% ifversion fpt or ghes or ghae-issue-4864 or ghec %}
### `repository_vulnerability_alert` 类操作

| 操作       | 描述                                                                                                                                                                                                                                                                                                                                           |
| -------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `create` | Triggered when {% data variables.product.product_name %} creates a {% data variables.product.prodname_dependabot %} alert for a repository that uses a vulnerable dependency. 更多信息请参阅“[关于 {% data variables.product.prodname_dependabot_alerts %}](/github/managing-security-vulnerabilities/about-alerts-for-vulnerable-dependencies)”。 |
| `忽略`     | Triggered when an organization owner or person with admin access to the repository dismisses a {% data variables.product.prodname_dependabot %} alert about a vulnerable dependency.                                                                                                                                                         |
| `解决`     | 当对仓库具有写入权限的人推送更改以更新和解决项目依赖项中的漏洞时触发。                                                                                                                                                                                                                                                                                                          |

{% endif %}{% ifversion fpt or ghec %}
### `repository_vulnerability_alerts` 类操作

| 操作                       | 描述                                                                                                                                                                                                                                                                   |
| ------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `authorized_users_teams` | 当组织所有者或对仓库有管理员权限的人更新有权接收仓库中有漏洞依赖项 {% data variables.product.prodname_dependabot_alerts %} 的人员或团队列表时触发。 更多信息请参阅“[管理仓库的安全和分析设置](/github/administering-a-repository/managing-security-and-analysis-settings-for-your-repository#granting-access-to-security-alerts)”。 |
| `禁用`                     | 当仓库所有者或对仓库有管理员权限的人禁用 {% data variables.product.prodname_dependabot_alerts %} 时触发。                                                                                                                                                                                  |
| `启用`                     | 当仓库所有者或对仓库有管理员权限的人启用 {% data variables.product.prodname_dependabot_alerts %} 时触发。                                                                                                                                                                                  |

{% endif %}{% ifversion ghec %}
### `role` category actions
| 操作        | 描述                                                                                                                                                                                                                                   |
| --------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `create`  | Triggered when an organization owner creates a new custom repository role. 更多信息请参阅“[管理组织的自定义仓库角色](/organizations/managing-peoples-access-to-your-organization-with-roles/managing-custom-repository-roles-for-an-organization)”。     |
| `destroy` | Triggered when a organization owner deletes a custom repository role. 更多信息请参阅“[管理组织的自定义仓库角色](/organizations/managing-peoples-access-to-your-organization-with-roles/managing-custom-repository-roles-for-an-organization)”。          |
| `update`  | Triggered when an organization owner edits an existing custom repository role. 更多信息请参阅“[管理组织的自定义仓库角色](/organizations/managing-peoples-access-to-your-organization-with-roles/managing-custom-repository-roles-for-an-organization)”。 |

{% endif %}
{% ifversion ghec or ghes or ghae %}
### `secret_scanning` 类操作

| 操作   | 描述                                                                                                                                                                                                                            |
| ---- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `禁用` | Triggered when an organization owner disables secret scanning for all existing{% ifversion ghec %}, private or internal{% endif %} repositories. 更多信息请参阅“[关于密钥扫描](/github/administering-a-repository/about-secret-scanning)”。 |
| `启用` | Triggered when an organization owner enables secret scanning for all existing{% ifversion ghec %}, private or internal{% endif %} repositories.                                                                               |

### `secret_scanning_new_repos` 类操作

| 操作   | 描述                                                                                                                                                                                                                      |
| ---- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `禁用` | Triggered when an organization owner disables secret scanning for all new {% ifversion ghec %}private or internal {% endif %}repositories. 更多信息请参阅“[关于密钥扫描](/github/administering-a-repository/about-secret-scanning)”。 |
| `启用` | Triggered when an organization owner enables secret scanning for all new {% ifversion ghec %}private or internal {% endif %}repositories.                                                                               |
{% endif %}

{% ifversion fpt or ghec %}
### `sponsors` 类操作

| 操作                                            | 描述                                                                                                                                                                                                                                        |
| --------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `custom_amount_settings_change`               | 启用或禁用自定义金额时或更改建议的自定义金额时触发（请参阅“[管理您的赞助级别](/github/supporting-the-open-source-community-with-github-sponsors/managing-your-sponsorship-tiers)”）                                                                                             |
| `repo_funding_links_file_action`              | 更改仓库中的 FUNDING 文件时触发（请参阅“[在仓库中显示赞助按钮](/articles/displaying-a-sponsor-button-in-your-repository)”）                                                                                                                                         |
| `sponsor_sponsorship_cancel`                  | 当您取消赞助时触发（请参阅“[降级赞助](/articles/downgrading-a-sponsorship)”）                                                                                                                                                                               |
| `sponsor_sponsorship_create`                  | 当您赞助帐户时触发（请参阅“[赞助开源贡献者](/sponsors/sponsoring-open-source-contributors/sponsoring-an-open-source-contributor)”）                                                                                                                            |
| `sponsor_sponsorship_payment_complete`        | 当您赞助一个帐户并且您的付款已经处理完毕后触发（请参阅“[赞助开源贡献者](/sponsors/sponsoring-open-source-contributors/sponsoring-an-open-source-contributor)”）                                                                                                              |
| `sponsor_sponsorship_preference_change`       | 当您更改是否接收被赞助帐户的电子邮件更新时触发（请参阅“[管理赞助](/sponsors/sponsoring-open-source-contributors/managing-your-sponsorship)”）                                                                                                                             |
| `sponsor_sponsorship_tier_change`             | 当您升级或降级赞助时触发（请参阅“[升级赞助](/articles/upgrading-a-sponsorship)”和“[降级赞助](/articles/downgrading-a-sponsorship)”）                                                                                                                                |
| `sponsored_developer_approve`                 | 当您的 {% data variables.product.prodname_sponsors %} 帐户被批准时触发（请参阅“[为您的组织设置 {% data variables.product.prodname_sponsors %}](/sponsors/receiving-sponsorships-through-github-sponsors/setting-up-github-sponsors-for-your-organization)”）     |
| `sponsored_developer_create`                  | 当您的 {% data variables.product.prodname_sponsors %} 帐户创建时触发（请参阅“<[为您的组织设置 {% data variables.product.prodname_sponsors %}](/sponsors/receiving-sponsorships-through-github-sponsors/setting-up-github-sponsors-for-your-organization)”）     |
| `sponsored_developer_disable`                 | 帐户 {% data variables.product.prodname_sponsors %} 禁用时触发                                                                                                                                                                                   |
| `sponsored_developer_redraft`                 | 当您的 {% data variables.product.prodname_sponsors %} 帐户从已批准状态恢复为草稿状态时触发                                                                                                                                                                     |
| `sponsored_developer_profile_update`          | 在编辑您的赞助组织资料时触发（请参阅“[编辑 {% data variables.product.prodname_sponsors %} 的个人资料详细信息](/sponsors/receiving-sponsorships-through-github-sponsors/editing-your-profile-details-for-github-sponsors)”）                                             |
| `sponsored_developer_request_approval`        | 提交您对 {% data variables.product.prodname_sponsors %} 的申请以供审批时触发（请参阅“[为您的组织设置 {% data variables.product.prodname_sponsors %}](/sponsors/receiving-sponsorships-through-github-sponsors/setting-up-github-sponsors-for-your-organization)”）  |
| `sponsored_developer_tier_description_update` | 当您更改赞助等级的说明时触发（请参阅“[管理赞助等级](/sponsors/receiving-sponsorships-through-github-sponsors/managing-your-sponsorship-tiers)”）                                                                                                                   |
| `sponsored_developer_update_newsletter_send`  | 当您向赞助者发送电子邮件更新时触发（请参阅“[联系赞助者](/sponsors/receiving-sponsorships-through-github-sponsors/contacting-your-sponsors)”）                                                                                                                        |
| `waitlist_invite_sponsored_developer`         | 当您从等候名单被邀请加入 {% data variables.product.prodname_sponsors %} 时触发（请参阅“[为您的组织设置 {% data variables.product.prodname_sponsors %}](/sponsors/receiving-sponsorships-through-github-sponsors/setting-up-github-sponsors-for-your-organization)”） |
| `waitlist_join`                               | 当您加入成为赞助组织的等候名单时触发（请参阅“[为您的组织设置 {% data variables.product.prodname_sponsors %}](/sponsors/receiving-sponsorships-through-github-sponsors/setting-up-github-sponsors-for-your-organization)”）                                              |
{% endif %}

### `team` 类操作

| 操作                        | 描述                                                                                                                                                                                                        |
| ------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `add_member`              | 当组织成员被[添加到团队](/articles/adding-organization-members-to-a-team)时触发。                                                                                                                                        |
| `add_repository`          | 当团队被授予控制仓库的权限时触发。                                                                                                                                                                                         |
| `change_parent_team`      | 在创建子团队或[更改子团队的父级](/articles/moving-a-team-in-your-organization-s-hierarchy)时触发。                                                                                                                           |
| `change_privacy`          | 当团队的隐私级别发生更改时触发。                                                                                                                                                                                          |
| `create`                  | 在创建新团队时触发。                                                                                                                                                                                                |
| `demote_maintainer`       | Triggered when a user was demoted from a team maintainer to a team member. 更多信息请参阅“[将团队维护者角色分配给团队成员](/organizations/organizing-members-into-teams/assigning-the-team-maintainer-role-to-a-team-member)”。  |
| `destroy`                 | 从组织中删除团队时触发。                                                                                                                                                                                              |
| `team.promote_maintainer` | Triggered when a user was promoted from a team member to a team maintainer. 更多信息请参阅“[将团队维护者角色分配给团队成员](/organizations/organizing-members-into-teams/assigning-the-team-maintainer-role-to-a-team-member)”。 |
| `remove_member`           | [从团队中删除组织成员](/articles/removing-organization-members-from-a-team)时触发。                                                                                                                                     |
| `remove_repository`       | 当仓库不再受团队控制时触发。                                                                                                                                                                                            |

### `team_discussions` 类操作

| 操作   | 描述                                                                                                    |
| ---- | ----------------------------------------------------------------------------------------------------- |
| `禁用` | 当组织所有者对组织禁用团队讨论时触发。 更多信息请参阅“[对组织禁用团队讨论](/articles/disabling-team-discussions-for-your-organization)”。 |
| `启用` | 当组织所有者对组织启用团队讨论时触发。                                                                                   |

{% ifversion fpt or ghec or ghes > 3.1 or ghae %}
### `workflows` 类操作

{% data reusables.actions.actions-audit-events-workflow %}
{% endif %}
## 延伸阅读

- "[Keeping your organization secure](/articles/keeping-your-organization-secure)"{% ifversion fpt or ghec or ghes > 3.3 or ghae-issue-5146 %}
- "[Exporting member information for your organization](/organizations/managing-membership-in-your-organization/exporting-member-information-for-your-organization)"{% endif %}
