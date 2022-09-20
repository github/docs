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
shortTitle: Review audit log
ms.openlocfilehash: 19dec0403ef262b6ad877d2afa867230b35c81b3
ms.sourcegitcommit: 11dbc67f256efbdedcdf88bfc1c74faf49b503cc
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 07/27/2022
ms.locfileid: '147419815'
---
## <a name="accessing-the-audit-log"></a>访问审核日志

审核日志列出了由当前月份和前六个月内影响组织的活动触发的事件。 只有所有者才能访问组织的审核日志。

{% data reusables.audit_log.only-three-months-displayed %}

{% data reusables.profile.access_org %} {% data reusables.profile.org_settings %} {% data reusables.audit_log.audit_log_sidebar_for_org_admins %}

## <a name="searching-the-audit-log"></a>搜索审核日志

{% data reusables.audit_log.audit-log-search %}

### <a name="search-based-on-the-action-performed"></a>基于执行的操作搜索

若要搜索特定事件，请在查询中使用 `action` 限定符。 审核日志中列出的操作分为以下类别：

| 类别名称 | 说明 |------------------|-------------------{% ifversion fpt or ghec %} | [`account`](#account-category-actions) | 包含与你的组织帐户相关的所有活动。
| [`advisory_credit`](#advisory_credit-category-actions) | 包含与 {% data variables.product.prodname_advisory_database %} 中安全通告的贡献者积分相关的所有活动。 有关详细信息，请参阅“[关于 {% data variables.product.prodname_dotcom %} 安全通知](/github/managing-security-vulnerabilities/about-github-security-advisories)”。
| [`billing`](#billing-category-actions) | 包含与组织帐单相关的所有活动。
| [`business`](#business-category-actions) | 包含与企业业务设置相关的活动。 | | [`codespaces`](#codespaces-category-actions) | 包含与组织 codespace 相关的所有活动。 |{% endif %}{% ifversion fpt or ghec or ghes > 3.2 or ghae %} | [`dependabot_alerts`](#dependabot_alerts-category-actions) | 包含现有存储库中 {% data variables.product.prodname_dependabot_alerts %} 的组织级配置活动。 有关详细信息，请参阅“[关于 {% data variables.product.prodname_dependabot_alerts %}](/github/managing-security-vulnerabilities/about-alerts-for-vulnerable-dependencies)”。
| [`dependabot_alerts_new_repos`](#dependabot_alerts_new_repos-category-actions) | 包含在组织中创建的新存储库中 {% data variables.product.prodname_dependabot_alerts %} 的组织级配置活动。{% endif %}{% ifversion fpt or ghec or ghes > 3.2 %} | [`dependabot_security_updates`](#dependabot_security_updates-category-actions) | 包含现有存储库中 {% data variables.product.prodname_dependabot_security_updates %} 的组织级配置活动。 有关详细信息，请参阅“[配置 {% data variables.product.prodname_dependabot_security_updates %}](/github/managing-security-vulnerabilities/configuring-dependabot-security-updates)”。
| [`dependabot_security_updates_new_repos`](#dependabot_security_updates_new_repos-category-actions) | 包含在组织中创建的新存储库的 {% data variables.product.prodname_dependabot_security_updates %} 的组织级配置活动。{% endif %}{% ifversion fpt or ghec %} | [`dependency_graph`](#dependency_graph-category-actions) | 包含存储库的依赖项关系图的组织级配置活动。 有关详细信息，请参阅“[关于依赖关系图](/github/visualizing-repository-data-with-graphs/about-the-dependency-graph)”。
| [`dependency_graph_new_repos`](#dependency_graph_new_repos-category-actions) | 包含在组织中创建的新存储库的组织级配置活动。{% endif %} | [`discussion_post`](#discussion_post-category-actions) | 包含与发布到团队页面的讨论相关的所有活动。
| [`discussion_post_reply`](#discussion_post_reply-category-actions) | 包含与回复发布到团队页面的讨论相关的所有活动。{% ifversion fpt or ghes or ghec %} | [`enterprise`](#enterprise-category-actions) | 包含与企业设置相关的活动。 | {% endif %} | [`hook`](#hook-category-actions) | 包含与 Webhook 相关的所有活动。
| [`integration_installation`](#integration_installation-category-actions) | 包含与帐户中安装的集成相关的活动。 | | [`integration_installation_request`](#integration_installation_request-category-actions) | 包含与组织成员请求所有者批准用于组织的集成相关的所有活动。 |{% ifversion ghec or ghae %} | [`ip_allow_list`](#ip_allow_list-category-actions) | 包含与为组织启用或禁用 IP 允许列表相关的活动。
| [`ip_allow_list_entry`](#ip_allow_list_entry-category-actions) | 包含与创建、删除和编辑组织的 IP 允许列表条目相关的活动。{% endif %} | [`issue`](#issue-category-actions) | 包含与删除问题相关的活动。 {% ifversion fpt or ghec %} | [`marketplace_agreement_signature`](#marketplace_agreement_signature-category-actions) | 包含与签署 {% data variables.product.prodname_marketplace %} 开发者协议相关的所有活动。
| [`marketplace_listing`](#marketplace_listing-category-actions) | 包含与在 {% data variables.product.prodname_marketplace %} 中列出应用相关的所有活动。{% endif %}{% ifversion fpt or ghes or ghec %} | [`members_can_create_pages`](#members_can_create_pages-category-actions) | 包含与管理组织中存储库的 {% data variables.product.prodname_pages %} 站点的发布相关的所有活动。 有关详细信息，请参阅“[为组织管理 {% data variables.product.prodname_pages %} 站点的发布](/organizations/managing-organization-settings/managing-the-publication-of-github-pages-sites-for-your-organization)”。 |{% endif %} | [`org`](#org-category-actions) | 包含与组织成员身份相关的活动。{% ifversion ghec %} | [`org_credential_authorization`](#org_credential_authorization-category-actions) | 包含与授权凭据以用于 SAML 单一登录相关的所有活动。{% endif %}{% ifversion secret-scanning-audit-log-custom-patterns %} | [`org_secret_scanning_custom_pattern`](#org_secret_scanning_custom_pattern-category-actions) | 包含与机密扫描自定义模式相关的组织级活动。 有关详细信息，请参阅“[为机密扫描定义自定义模式](/code-security/secret-scanning/defining-custom-patterns-for-secret-scanning)”。 {% endif %} | [`organization_label`](#organization_label-category-actions) | 包含与组织中存储库的默认标签相关的所有活动。
| [`oauth_application`](#oauth_application-category-actions) | 包含与 OAuth 应用相关的所有活动。
| [`packages`](#packages-category-actions) | 包含与 {% data variables.product.prodname_registry %} 相关的所有活动。{% ifversion fpt or ghec %} | [`payment_method`](#payment_method-category-actions) | 包含与组织如何支付 GitHub 费用相关的所有活动。{% endif %} | [`profile_picture`](#profile_picture-category-actions) | 包含与组织的个人资料图片相关的所有活动。
| [`project`](#project-category-actions) | 包含与项目板相关的所有活动。
| [`protected_branch`](#protected_branch-category-actions) | 包含与受保护分支相关的所有活动。
| [`repo`](#repo-category-actions) | 包含与组织拥有的存储库相关的活动。{% ifversion fpt or ghec %} | [`repository_advisory`](#repository_advisory-category-actions) | 包含与 {% data variables.product.prodname_advisory_database %} 中的安全通知相关的存储库级活动。  有关详细信息，请参阅“[关于 {% data variables.product.prodname_dotcom %} 安全通知](/github/managing-security-vulnerabilities/about-github-security-advisories)”。
| [`repository_content_analysis`](#repository_content_analysis-category-actions) | 包含与[启用或禁用专用存储库的数据使用](/articles/about-github-s-use-of-your-data)相关的所有活动。{% endif %}{% ifversion fpt or ghec %} | [`repository_dependency_graph`](#repository_dependency_graph-category-actions) | 包含与启用或禁用{% ifversion fpt or ghec %}专用{% endif %}存储库的依赖项关系图相关的存储库级活动。 有关详细信息，请参阅“[关于依赖项关系图](/github/visualizing-repository-data-with-graphs/about-the-dependency-graph)”。{% endif %}{% ifversion ghes or ghae or ghec %} | [`repository_secret_scanning`](#repository_secret_scanning-category-actions) | 包含与机密扫描相关的存储库级活动。 有关详细信息，请参阅“[关于机密扫描](/github/administering-a-repository/about-secret-scanning)”。 {% endif %}{% ifversion secret-scanning-audit-log-custom-patterns %} | [`repository_secret_scanning_custom_pattern`](#respository_secret_scanning_custom_pattern-category-actions) | 包含与机密扫描自定义模式相关的存储库级活动。 有关详细信息，请参阅“[为机密扫描定义自定义模式](/code-security/secret-scanning/defining-custom-patterns-for-secret-scanning)”。 {% endif %}{% ifversion secret-scanning-audit-log-custom-patterns %} | [`repository_secret_scanning_push_protection`](#respository_secret_scanning_push_protection) | 包含与机密扫描自定义模式相关的存储库级活动。 有关详细信息，请参阅“[使用机密扫描保护推送](/code-security/secret-scanning/protecting-pushes-with-secret-scanning)”。 {% endif %} | [`repository_vulnerability_alert`](#repository_vulnerability_alert-category-actions) | 包含与 [{% data variables.product.prodname_dependabot_alerts %}](/code-security/dependabot/dependabot-alerts/about-dependabot-alerts) 相关的所有活动。{% ifversion fpt or ghec %} | [`repository_vulnerability_alerts`](#repository_vulnerability_alerts-category-actions) | 包含 {% data variables.product.prodname_dependabot_alerts %} 的存储库级配置活动。{% endif %}{% ifversion custom-repository-roles %} | [`role`](#role-category-actions) | 包含与[自定义存储库角色](/organizations/managing-peoples-access-to-your-organization-with-roles/managing-custom-repository-roles-for-an-organization)相关的所有活动。{% endif %}{% ifversion ghes or ghae or ghec %} | [`secret_scanning`](#secret_scanning-category-actions) | 包含用于在现有存储库中进行机密扫描的组织级配置活动。 有关详细信息，请参阅“[关于机密扫描](/github/administering-a-repository/about-secret-scanning)”。
| [`secret_scanning_new_repos`](#secret_scanning_new_repos-category-actions) | 包含组织新建存储库中密码扫描的组织级配置活动。 {% endif %}{% ifversion fpt or ghec %} | [`sponsors`](#sponsors-category-actions) |包含与赞助按钮相关的所有事件（请参阅“[在存储库中显示赞助按钮](/articles/displaying-a-sponsor-button-in-your-repository)”）{% endif %} | [`team`](#team-category-actions) | 包含与组织中的团队相关的所有活动。
| [`team_discussions`](#team_discussions-category-actions) | 包含与管理组织的团队讨论相关的活动。
| [`workflows`](#workflows-category-actions) | 包含与 {% data variables.product.prodname_actions %} 工作流相关的活动。

您可以使用这些词搜索特定的操作集。 例如：

  * `action:team` 查找分组在团队类别中的所有事件。
  * `-action:hook` 排除 Webhook 类别中的所有事件。

每个类别都有一组可进行过滤的关联操作。 例如：

  * `action:team.create` 查找创建团队的所有事件。
  * `-action:hook.events_changed` 排除已更改 Webhook 上事件的所有事件。

### <a name="search-based-on-time-of-action"></a>基于操作时间搜索

使用 `created` 限定符可以根据事件发生的时间筛选审核日志中的事件。 {% data reusables.time_date.date_format %} {% data reusables.time_date.time_format %}

{% data reusables.search.date_gt_lt %}

例如：

  * `created:2014-07-08` 查找 2014 年 7 月 8 日发生的所有事件。
  * `created:>=2014-07-08` 查找 2014 年 7 月 8 日当天或之后发生的所有事件。
  * `created:<=2014-07-08` 查找 2014 年 7 月 8 日当天或之前发生的所有事件。
  * `created:2014-07-01..2014-07-31` 查找 2014 年 7 月发生的所有事件。

{% note %}

注意：审核日志包含当前月份和前六个月中每天的数据。

{% endnote %}

### <a name="search-based-on-location"></a>基于位置搜索

使用限定符 `country`，可以根据原始国家/地区筛选审核日志中的事件。 您可以使用国家/地区的两字母短代码或完整名称。 请注意，名称中包含空格的国家/地区需要加引号。 例如：

  * `country:de` 查找在德国发生的所有事件。
  * `country:Mexico` 查找在墨西哥发生的所有事件。
  * `country:"United States"` 查找全发生在美国的事件。

{% ifversion fpt or ghec %}
## <a name="exporting-the-audit-log"></a>导出审核日志

{% data reusables.audit_log.export-log %}

{% data reusables.audit_log.git-events-export-limited %}

{% data reusables.audit_log.exported-log-keys-and-values %} {% endif %}

## <a name="using-the-audit-log-api"></a>使用审核日志 API

{% ifversion fpt %}

使用 {% data variables.product.prodname_ghe_cloud %} 的组织可以使用 GraphQL API 和 REST API 与审核日志进行交互。 有关详细信息，请参阅 [{% data variables.product.prodname_ghe_cloud %} 文档](/enterprise-cloud@latest/organizations/keeping-your-organization-secure/managing-security-settings-for-your-organization/reviewing-the-audit-log-for-your-organization#using-the-audit-log-api)。

{% else %}

可以使用 GraphQL API{% ifversion fpt or ghec %} 或 REST API{% endif %} 与审核日志进行交互。

{% ifversion ghec %}

{% note %}

注意：若要使用审核日志 API，你的组织必须使用 {% data variables.product.prodname_ghe_cloud %}。 {% data reusables.enterprise.link-to-ghec-trial %}

{% endnote %}

### <a name="using-the-graphql-api"></a>使用 GraphQL API

{% endif %}

为确保知识产权得到保护并保持组织的合规，可使用审核日志 GraphQL API 保留审核日志数据的副本并监视：{% data reusables.audit_log.audit-log-api-info %}

{% ifversion ghec %} 请注意，你无法使用 GraphQL API 检索 Git 事件。 要检索 Git 事件，请改为使用 REST API。 有关详细信息，请参阅“[`git` 类别操作](#git-category-actions)”。
{% endif %}

GraphQL 响应可包含长达 90 至 120 天的数据。

例如，您可以创建 GraphQL 请求以查看添加到组织的所有新组织成员。 有关详细信息，请参阅“[GraphQL API 审核日志](/graphql/reference/interfaces#auditentry/)”。

{% ifversion ghec %}

### <a name="using-the-rest-api"></a>使用 REST API

为确保知识产权得到保护并保持企业的合规，可使用审核日志 REST API 保留审核日志数据的副本并监视：{% data reusables.audit_log.audited-data-list %}

{% data reusables.audit_log.audit-log-git-events-retention %}

默认情况下，仅返回过去三个月的事件。 若要包括较旧的事件，必须在查询中指定时间戳。

有关审核日志 REST API 的详细信息，请参阅“[组织](/rest/reference/orgs#get-the-audit-log-for-an-organization)”。

{% endif %} {% endif %}

## <a name="audit-log-actions"></a>审核日志操作

审核日志中记录为事件的一些最常见操作的概述。

{% ifversion fpt or ghec %}
### <a name="account-category-actions"></a>`account` 类别操作

| 操作 | 说明
|------------------|-------------------
| `billing_plan_change` | 在组织的[计费周期](/articles/changing-the-duration-of-your-billing-cycle)更改时触发。
| `plan_change` | 在组织的[订阅](/articles/about-billing-for-github-accounts)更改时触发。
| `pending_plan_change` | 在组织所有者或帐单管理员[取消或降级付费订阅](/articles/how-does-upgrading-or-downgrading-affect-the-billing-process/)时触发。
| `pending_subscription_change` | 在[{% data variables.product.prodname_marketplace %} 免费试用开始或过期](/articles/about-billing-for-github-marketplace/)。
{% endif %}

{% ifversion fpt or ghec %}
### <a name="advisory_credit-category-actions"></a>`advisory_credit` 类别操作

| 操作 | 说明
|------------------|-------------------
| `accept` | 当有人接受安全通告的积分时触发。 有关详细信息，请参阅“[编辑安全通告](/github/managing-security-vulnerabilities/editing-a-security-advisory)”。
| `create` | 当安全通告的管理员将某人添加到积分部分时触发。
| `decline` | 当有人拒绝安全通告的积分时触发。
| `destroy` | 当安全通告的管理员将某人从积分部分删除时触发。
{% endif %}

{% ifversion fpt or ghec %}
### <a name="billing-category-actions"></a>`billing` 类别操作

| 操作 | 说明
|------------------|-------------------
| `change_billing_type` | 在组织[更改 {% data variables.product.prodname_dotcom %} 的支付方式](/articles/adding-or-editing-a-payment-method)时触发。
| `change_email` | 在组织的[计费电子邮件地址](/articles/setting-your-billing-email)更改时触发。
{% endif %}

### <a name="business-category-actions"></a>`business` 类别操作

| 操作 | 说明 |------------------|-------------------{% ifversion fpt or ghec %} | `set_actions_fork_pr_approvals_policy` | 当企业的公共分支工作流需要审批的设置发生更改时触发。 有关详细信息，请参阅“[在企业中强制实施 {% data variables.product.prodname_actions %} 的策略](/enterprise-cloud@latest/admin/policies/enforcing-policies-for-your-enterprise/enforcing-policies-for-github-actions-in-your-enterprise#enforcing-a-policy-for-fork-pull-requests-in-your-enterprise)”。{% endif %} | `set_actions_retention_limit` | 在为企业更改 {% data variables.product.prodname_actions %} 项目和日志的保留期时触发。 有关详细信息，请参阅“[在企业中强制实施 {% data variables.product.prodname_actions %} 的策略]({% ifversion fpt %}/enterprise-cloud@latest{% endif %}/admin/policies/enforcing-policies-for-your-enterprise/enforcing-policies-for-github-actions-in-your-enterprise#enforcing-a-policy-for-artifact-and-log-retention-in-your-enterprise)”。{% ifversion fpt or ghes or ghec %} | `set_fork_pr_workflows_policy` | 在更改专用存储库分支上工作流的策略时触发。 有关详细信息，请参阅“{% ifversion fpt or ghec%}[在企业中强制实施 {% data variables.product.prodname_actions %}]({% ifversion fpt %}/enterprise-cloud@latest{% endif %}/admin/policies/enforcing-policies-for-your-enterprise/enforcing-policies-for-github-actions-in-your-enterprise#enforcing-a-policy-for-fork-pull-requests-in-private-repositories){% else ifversion ghes > 2.22 %}[为专用存储库分支启用工作流](/admin/github-actions/enabling-github-actions-for-github-enterprise-server/enforcing-github-actions-policies-for-your-enterprise#enabling-workflows-for-private-repository-forks){% endif %}”。{% endif %}

{% ifversion fpt or ghec %}
### <a name="codespaces-category-actions"></a>`codespaces` 类别操作

| 操作 | 说明
|------------------|-------------------
| `create` | 在用户[创建 codespace](/github/developing-online-with-codespaces/creating-a-codespace) 时触发。
| `resume` | 当用户恢复暂停的代码空间时触发。
| `delete` | 在用户[删除 codespace](/github/developing-online-with-codespaces/deleting-a-codespace) 时触发。
| `create_an_org_secret` | 在用户为 {% data variables.product.prodname_codespaces %} 创建组织级[机密](/github/developing-online-with-codespaces/managing-encrypted-secrets-for-codespaces#about-encrypted-secrets-for-codespaces)时触发
| `update_an_org_secret` | 在用户为 {% data variables.product.prodname_codespaces %} 更新组织级[机密](/github/developing-online-with-codespaces/managing-encrypted-secrets-for-codespaces#about-encrypted-secrets-for-codespaces)时触发。
| `remove_an_org_secret` | 在用户为 {% data variables.product.prodname_codespaces %} 删除组织级[机密](/github/developing-online-with-codespaces/managing-encrypted-secrets-for-codespaces#about-encrypted-secrets-for-codespaces)时触发。
| `manage_access_and_security` | 在用户更新 [codespace 可以访问的存储库](/github/developing-online-with-codespaces/managing-access-and-security-for-codespaces)时触发。
{% endif %}

{% ifversion fpt or ghec or ghes > 3.2 or ghae %}
### <a name="dependabot_alerts-category-actions"></a>`dependabot_alerts` 类别操作

| 操作 | 说明
|------------------|-------------------
| `disable` | 当组织所有者对所有现有{% ifversion fpt or ghec %}专用{% endif %}存储库禁用 {% data variables.product.prodname_dependabot_alerts %} 时触发。 有关详细信息，请参阅“[管理组织的安全和分析设置](/organizations/keeping-your-organization-secure/managing-security-and-analysis-settings-for-your-organization)”。
| `enable` | 当组织所有者对所有现有{% ifversion fpt or ghec %}专用{% endif %}存储库启用 {% data variables.product.prodname_dependabot_alerts %} 时触发。

### <a name="dependabot_alerts_new_repos-category-actions"></a>`dependabot_alerts_new_repos` 类别操作

| 操作 | 说明
|------------------|-------------------
| `disable` | 当组织所有者对所有新的{% ifversion fpt or ghec %}专用{% endif %}存储库禁用 {% data variables.product.prodname_dependabot_alerts %} 时触发。 有关详细信息，请参阅“[管理组织的安全和分析设置](/organizations/keeping-your-organization-secure/managing-security-and-analysis-settings-for-your-organization)”。
| `enable` | 当组织所有者对所有新的{% ifversion fpt or ghec %}专用{% endif %}存储库启用 {% data variables.product.prodname_dependabot_alerts %} 时触发。
{% endif %}

{% ifversion fpt or ghec or ghes > 3.2 %}
### <a name="dependabot_security_updates-category-actions"></a>`dependabot_security_updates` 类别操作

| 操作 | 说明
|------------------|-------------------
| `disable` | 当组织所有者对所有现有仓库禁用 {% data variables.product.prodname_dependabot_security_updates %} 时触发。 有关详细信息，请参阅“[管理组织的安全和分析设置](/organizations/keeping-your-organization-secure/managing-security-and-analysis-settings-for-your-organization)”。
| `enable` | 当组织所有者对所有现有仓库启用 {% data variables.product.prodname_dependabot_security_updates %} 时触发。

### <a name="dependabot_security_updates_new_repos-category-actions"></a>`dependabot_security_updates_new_repos` 类别操作

| 操作 | 说明
|------------------|-------------------
| `disable` | 当组织所有者对所有新仓库禁用 {% data variables.product.prodname_dependabot_security_updates %} 时触发。 有关详细信息，请参阅“[管理组织的安全和分析设置](/organizations/keeping-your-organization-secure/managing-security-and-analysis-settings-for-your-organization)”。
| `enable` | 当组织所有者对所有新仓库启用 {% data variables.product.prodname_dependabot_security_updates %} 时触发。
{% endif %}

{% ifversion fpt or ghec %}
### <a name="dependency_graph-category-actions"></a>`dependency_graph` 类别操作

| 操作 | 说明
|------------------|-------------------
| `disable` | 当组织所有者对所有现有仓库禁用依赖项图时触发。 有关详细信息，请参阅“[管理组织的安全和分析设置](/organizations/keeping-your-organization-secure/managing-security-and-analysis-settings-for-your-organization)”。
| `enable` | 当组织所有者对所有现有仓库启用依赖项图时触发。

### <a name="dependency_graph_new_repos-category-actions"></a>`dependency_graph_new_repos` 类别操作

| 操作 | 说明
|------------------|-------------------
| `disable` | 当组织所有者对所有新仓库禁用依赖项图时触发。 有关详细信息，请参阅“[管理组织的安全和分析设置](/organizations/keeping-your-organization-secure/managing-security-and-analysis-settings-for-your-organization)”。
| `enable` | 当组织所有者对所有新仓库启用依赖项图时触发。
{% endif %}

### <a name="discussion_post-category-actions"></a>`discussion_post` 类别操作

| 操作 | 说明
|------------------|-------------------
| `update` | 在[编辑团队讨论帖](/articles/managing-disruptive-comments/#editing-a-comment)时触发。
| `destroy` | 在[删除团队讨论帖](/articles/managing-disruptive-comments/#deleting-a-comment)时触发。

### <a name="discussion_post_reply-category-actions"></a>`discussion_post_reply` 类别操作

| 操作 | 说明
|------------------|-------------------
| `update` | 在[编辑团队讨论帖的回复](/articles/managing-disruptive-comments/#editing-a-comment)时触发。
| `destroy` | 在[删除团队讨论帖的回复](/articles/managing-disruptive-comments/#deleting-a-comment)时触发。

{% ifversion fpt or ghes or ghec %}
### <a name="enterprise-category-actions"></a>`enterprise` 类别操作

{% data reusables.actions.actions-audit-events-for-enterprise %}

{% endif %}

{% ifversion fpt or ghec %}
### <a name="environment-category-actions"></a>`environment` 类别操作

| 操作 | 说明
|------------------|-------------------
| `create_actions_secret` | 在环境中创建机密时触发。 有关详细信息，请参阅“[环境机密](/actions/reference/environments#environment-secrets)”。
| `delete` | 当环境被删除时触发。 有关详细信息，请参阅“[删除环境](/actions/reference/environments#deleting-an-environment)”。
| `remove_actions_secret` |  从环境中删除机密时触发。 有关详细信息，请参阅“[环境机密](/actions/reference/environments#environment-secrets)”。
| `update_actions_secret` | 当环境中的机密更新时触发。 有关详细信息，请参阅“[环境机密](/actions/reference/environments#environment-secrets)”。
{% endif %}

{% ifversion ghae %}
### <a name="external_group-category-actions"></a>`external_group` 类别操作

{% data reusables.saml.external-group-audit-events %}

{% endif %}

{% ifversion ghae %}
### <a name="external_identity-category-actions"></a>`external_identity` 类别操作

{% data reusables.saml.external-identity-audit-events %}

{% endif %}

{% ifversion fpt or ghec %}
### <a name="git-category-actions"></a>`git` 类别操作

{% note %}

注意：若要访问审计日志中的 Git 事件，必须使用审计日志 REST API。 审核日志 REST API 仅供 {% data variables.product.prodname_ghe_cloud %} 用户使用。 有关详细信息，请参阅“[组织](/rest/reference/orgs#get-the-audit-log-for-an-organization)”。

{% endnote %}

{% data reusables.audit_log.audit-log-git-events-retention %}

| 操作  | 说明
|---------|----------------------------
| `clone` | 当仓库被克隆时触发。
| `fetch` | 从仓库获取更改时触发。
| `push`  | 将更改推送到仓库时触发。

{% endif %}

### <a name="hook-category-actions"></a>`hook` 类别操作

| 操作 | 说明
|------------------|-------------------
| `create` | 在[添加了新挂钩](/articles/creating-webhooks)到组织拥有的存储库时触发。
| `config_changed` | 当现有挂钩的配置发生更改时触发。
| `destroy` | 从仓库中删除现有挂钩时触发。
| `events_changed` | 当挂钩上的事件发生更改时触发。

### <a name="integration_installation-category-actions"></a>`integration_installation` 类别操作

| 操作 | 说明
|--------|-------------
| `contact_email_changed` | 集成的联系人电子邮件已更改。
| `create` | 已安装集成。
| `destroy` | 已卸载集成。
| `repositories_added` | 存储库已添加到集成中。
| `repositories_removed` | 存储库已从集成中删除。
{%- ifversion fpt or ghec %} | `suspend` | 集成已暂停。
| `unsuspend` | 集成已恢复访问权限。
{%- endif %} | `version_updated` | 集成的权限已更新。

### <a name="integration_installation_request-category-actions"></a>`integration_installation_request` 类别操作

| 操作 | 说明
|------------------|-------------------
| `create` | 当组织成员请求组织所有者安装集成以用于组织时触发。
| `close` | 当安装集成以用于组织的请求被组织所有者批准或拒绝，或者被提出请求的组成成员取消时触发。

{% ifversion ghec or ghae %}
### <a name="ip_allow_list-category-actions"></a>`ip_allow_list` 类别操作

| 操作 | 说明
|------------------|-------------------
| `enable` | 为组织启用 IP 允许列表时触发。
| `disable` | 为组织禁用 IP 允许列表时触发。
| `enable_for_installed_apps` | 为已安装的 {% data variables.product.prodname_github_apps %} 启用 IP 允许列表时触发。
| `disable_for_installed_apps` | 为已安装的 {% data variables.product.prodname_github_apps %} 禁用 IP 允许列表时触发。

### <a name="ip_allow_list_entry-category-actions"></a>`ip_allow_list_entry` 类别操作

| 操作 | 说明
|------------------|-------------------
| `create` | IP 地址添加到 IP 允许列表中时触发。
| `update` | 在 IP 地址或其说明发生更改时触发。
| `destroy` | 在 IP 地址从 IP 允许列表中删除时触发。
{% endif %}

### <a name="issue-category-actions"></a>`issue` 类别操作

| 操作 | 说明
|------------------|-------------------
| `destroy`        | 当组织所有者或仓库中具有管理员权限的人从组织拥有的仓库中删除议题时触发。

{% ifversion fpt or ghec %}

### <a name="marketplace_agreement_signature-category-actions"></a>`marketplace_agreement_signature` 类别操作

| 操作 | 说明
|------------------|-------------------
| `create` | 在签署 {% data variables.product.prodname_marketplace %} 开发者协议时触发。

### <a name="marketplace_listing-category-actions"></a>`marketplace_listing` 类别操作

| 操作 | 说明
|------------------|-------------------
| `approve` | 当您的列表被批准包含在 {% data variables.product.prodname_marketplace %} 中时触发。
| `create` | 当您在 {% data variables.product.prodname_marketplace %} 中为应用程序创建列表时触发。
| `delist` | 当您的列表从 {% data variables.product.prodname_marketplace %} 中被删除时触发。
| `redraft` | 将您的列表被返回到草稿状态时触发。
| `reject` | 当您的列表被拒绝包含在 {% data variables.product.prodname_marketplace %} 中时触发。

{% endif %}

{% ifversion fpt or ghes or ghec %}

### <a name="members_can_create_pages-category-actions"></a>`members_can_create_pages` 类别操作

有关详细信息，请参阅“[为组织管理 {% data variables.product.prodname_pages %} 站点的发布](/organizations/managing-organization-settings/managing-the-publication-of-github-pages-sites-for-your-organization)”。

| 操作 | 说明 |
| :- | :- |
| `enable` | 当组织所有者启用在组织中的仓库发布 {% data variables.product.prodname_pages %} 站点时触发。 |
| `disable` | 当组织所有者禁止在组织中的仓库发布 {% data variables.product.prodname_pages %} 站点时触发。 |

{% endif %}

### <a name="org-category-actions"></a>`org` 类别操作

| 操作 | 说明
|------------------|-------------------
| `add_member` | 在用户加入组织时触发。
| `advanced_security_policy_selected_member_disabled` | 当企业所有者阻止为组织拥有的仓库启用 {% data variables.product.prodname_GH_advanced_security %} 功能时触发。 {% data reusables.advanced-security.more-information-about-enforcement-policy %}
| `advanced_security_policy_selected_member_enabled` | 当企业所有者允许为组织拥有的仓库启用 {% data variables.product.prodname_GH_advanced_security %} 功能时触发。 {% data reusables.advanced-security.more-information-about-enforcement-policy %}{% ifversion fpt or ghec %}
| `audit_log_export` | 在组织管理员[创建组织审核日志的导出](#exporting-the-audit-log)时触发。 如果导出包含查询，则日志将列出所使用的查询以及与该查询匹配的审核日志条目数量。
| `block_user` | 在组织所有者[阻止用户访问组织的存储库](/communities/maintaining-your-safety-on-github/blocking-a-user-from-your-organization)。
| `cancel_invitation` | 当组织邀请被撤销时触发的。 {% endif %}{% ifversion fpt or ghes or ghec %}
| `create_actions_secret` | 为组织创建 {% data variables.product.prodname_actions %} 机密时触发。 有关详细信息，请参阅“[为组织创建加密机密](/actions/reference/encrypted-secrets#creating-encrypted-secrets-for-an-organization)”。{% endif %} {% ifversion fpt or ghec %}
| `disable_oauth_app_restrictions` | 在所有者为组织[禁用 {% data variables.product.prodname_oauth_app %} 访问限制](/articles/disabling-oauth-app-access-restrictions-for-your-organization)时触发。{% ifversion ghec %}
| `disable_saml` | 在组织管理员为组织禁用 SAML 单一登录时触发。{% endif %}{% endif %}
| `disable_member_team_creation_permission` | 当组织所有者将团队创建限于所有者时触发。 有关详细信息，请参阅“[在组织中设置团队创建权限](/articles/setting-team-creation-permissions-in-your-organization)”。 |{% ifversion not ghae %}
| `disable_two_factor_requirement` | 当所有者对组织中的所有成员{% ifversion fpt or ghec %}、帐单管理员{% endif %} 和外部协作者禁用双重身份验证要求时触发。{% endif %}{% ifversion fpt or ghec %}
| `enable_oauth_app_restrictions` | 在所有者为组织[启用 {% data variables.product.prodname_oauth_app %} 访问限制](/articles/enabling-oauth-app-access-restrictions-for-your-organization)时触发。{% ifversion ghec %}
| `enable_saml` | 在组织管理员为组织[启用 SAML 单一登录](/articles/enabling-and-testing-saml-single-sign-on-for-your-organization)时触发。{% endif %}{% endif %}
| `enable_member_team_creation_permission` | 当组织所有者允许成员创建团队时触发。 有关详细信息，请参阅“[在组织中设置团队创建权限](/articles/setting-team-creation-permissions-in-your-organization)”。 |{% ifversion not ghae %}
| `enable_two_factor_requirement` | 当所有者对组织中的所有成员{% ifversion fpt or ghec %}、帐单管理员{% endif %} 和外部协作者要求双重身份验证时触发。{% endif %}{% ifversion fpt or ghec %}
| `invite_member` | 在[邀请新用户加入你的组织](/organizations/managing-membership-in-your-organization/inviting-users-to-join-your-organization)时触发。
| `oauth_app_access_approved` | 在所有者[向组织授予对 {% data variables.product.prodname_oauth_app %} 的访问权限](/articles/approving-oauth-apps-for-your-organization/)时触发。
| `oauth_app_access_denied` | 在所有者[禁用以前批准的对组织的 {% data variables.product.prodname_oauth_app %} 访问权限](/articles/denying-access-to-a-previously-approved-oauth-app-for-your-organization)时触发。
| `oauth_app_access_requested` | 当组织成员请求所有者对组织授予 {% data variables.product.prodname_oauth_app %} 权限时触发。{% endif %}
| `register_self_hosted_runner` | 在注册新的自托管运行器时触发。 有关详细信息，请参阅“[将自托管运行器添加到组织](/actions/hosting-your-own-runners/adding-self-hosted-runners#adding-a-self-hosted-runner-to-an-organization)”。
| `remove_actions_secret` | 当 {% data variables.product.prodname_actions %} 密码删除时触发。{% ifversion fpt or ghec %}
| `remove_billing_manager` | 当[所有者从组织中移除计费管理员](/articles/removing-a-billing-manager-from-your-organization/)或者当[组织中需要双因素身份验证](/articles/requiring-two-factor-authentication-in-your-organization)并且计费管理员不使用 2FA 或禁用 2FA 时触发。 |{% endif %}
| `remove_member` | 当[所有者从组织中移除成员](/articles/removing-a-member-from-your-organization/){% ifversion not ghae %} 或者当[组织中需要双因素身份验证](/articles/requiring-two-factor-authentication-in-your-organization)并且组织成员不使用 2FA 或禁用 2FA 时触发{% endif %}。 在[组织成员从组织中删除自己](/articles/removing-yourself-from-an-organization/)时也触发。|
| `remove_outside_collaborator` | 当所有者从组织中删除外部协作者{% ifversion not ghae %} 或当[组织中需要双因素身份验证](/articles/requiring-two-factor-authentication-in-your-organization)并且外部协作者不使用 2FA 或禁用 2FA 时触发{% endif %}。 |
| `remove_self_hosted_runner` | 当自托管运行器被移除时触发。 有关详细信息，请参阅“[从组织中删除运行器](/actions/hosting-your-own-runners/removing-self-hosted-runners#removing-a-runner-from-an-organization)”。 {% ifversion ghec %}
| `revoke_external_identity` | 当组织所有者撤销成员的链接身份时触发。 有关详细信息，请参阅“[查看和管理成员对组织的 SAML 访问权限](/organizations/granting-access-to-your-organization-with-saml-single-sign-on/viewing-and-managing-a-members-saml-access-to-your-organization#viewing-and-revoking-a-linked-identity)”。
| `revoke_sso_session` | 当组织所有者撤销成员的 SAML 会话时触发。 有关详细信息，请参阅“[查看和管理成员对组织的 SAML 访问权限](/organizations/granting-access-to-your-organization-with-saml-single-sign-on/viewing-and-managing-a-members-saml-access-to-your-organization#viewing-and-revoking-a-linked-identity)”。 {% endif %}
| `runner_group_created` | 在创建自托管运行器组时触发。 有关详细信息，请参阅“[为组织创建自托管运行器组](/actions/hosting-your-own-runners/managing-access-to-self-hosted-runners-using-groups#creating-a-self-hosted-runner-group-for-an-organization)”。
| `runner_group_removed` | 当自托管运行器组被移除时触发。 有关详细信息，请参阅“[删除自托管运行器组](/actions/hosting-your-own-runners/managing-access-to-self-hosted-runners-using-groups#removing-a-self-hosted-runner-group)”。
| `runner_group_updated` | 当自托管运行器组的配置改变时触发。 有关详细信息，请参阅“[更改自托管运行器组的访问策略](/actions/hosting-your-own-runners/managing-access-to-self-hosted-runners-using-groups#changing-the-access-policy-of-a-self-hosted-runner-group)”。
| `runner_group_runners_added` | 当自托管运行器添加到组时触发。 有关详细信息，请参阅“[将自托管运行器移动到组](/actions/hosting-your-own-runners/managing-access-to-self-hosted-runners-using-groups#moving-a-self-hosted-runner-to-a-group)”。
| `runner_group_runner_removed` |  当 REST API 用于从组中删除自托管运行器时触发。 有关详细信息，请参阅“[为组织从组中删除自托管运行](/rest/reference/actions#remove-a-self-hosted-runner-from-a-group-for-an-organization)”。
| `runner_group_runners_updated`|  当运行器组成员列表更新时触发。 有关详细信息，请参阅“[为组织在组中设置自托管运行器](/rest/reference/actions#set-self-hosted-runners-in-a-group-for-an-organization)”。{% ifversion secret-scanning-audit-log-custom-patterns %}
| `secret_scanning_push_protection_disable ` | 当组织所有者或对组织具有管理员访问权限的人员禁用对机密扫描的推送保护时触发。 有关详细信息，请参阅“[使用机密扫描保护推送](/enterprise-cloud@latest/code-security/secret-scanning/protecting-pushes-with-secret-scanning)”。
| `secret_scanning_push_protection_enable ` | 当组织所有者或对组织具有管理员访问权限的人员启用对机密扫描的推送保护时触发。{% endif %}
| `self_hosted_runner_online` | 当运行器应用程序启动时触发。 只能使用 REST API 查看；在 UI 或 JSON/CSV 导出中不可见。 有关详细信息，请参阅“[检查自托管运行器的状态](/actions/hosting-your-own-runners/monitoring-and-troubleshooting-self-hosted-runners#checking-the-status-of-a-self-hosted-runner)”。
| `self_hosted_runner_offline` | 当运行器应用程序停止时触发。 只能使用 REST API 查看；在 UI 或 JSON/CSV 导出中不可见。 有关详细信息，请参阅“[检查自托管运行器的状态](/actions/hosting-your-own-runners/monitoring-and-troubleshooting-self-hosted-runners#checking-the-status-of-a-self-hosted-runner)”。{% ifversion fpt or ghes or ghec %}
| `self_hosted_runner_updated` | 当运行器应用程序更新时触发。 可以使用 REST API 和 UI 查看；在 JSON /CSV 导出中不可见。 有关详细信息，请参阅“[有关自托管运行器](/actions/hosting-your-own-runners/about-self-hosted-runners#about-self-hosted-runners)”。{% endif %}{% ifversion fpt or ghec %}
| `set_actions_fork_pr_approvals_policy` | 为组织改变需要批准来自公共复刻的工作流程的设置时触发。 有关详细信息，请参阅“[公共分支的工作流需要审批](/organizations/managing-organization-settings/disabling-or-limiting-github-actions-for-your-organization#requiring-approval-for-workflows-from-public-forks)”。{% endif %}
| `set_actions_retention_limit` | 改变 {% data variables.product.prodname_actions %} 构件和日志的保留期时触发。 有关详细信息，请参阅“[在企业中强制实施 {% data variables.product.prodname_actions %} 的策略](/admin/policies/enforcing-policies-for-your-enterprise/enforcing-policies-for-github-actions-in-your-enterprise#enforcing-a-policy-for-artifact-and-log-retention-in-your-enterprise)”。{% ifversion fpt or ghes or ghec %}
| `set_fork_pr_workflows_policy` | 更改私有仓库复刻上的工作流程策略时触发。 有关详细信息，请参阅“[为专用存储库分支启用工作流](/organizations/managing-organization-settings/disabling-or-limiting-github-actions-for-your-organization#enabling-workflows-for-private-repository-forks)”。{% endif %}{% ifversion fpt or ghec %}
| `unblock_user` | 在组织所有者[取消阻止组织中的用户](/communities/maintaining-your-safety-on-github/unblocking-a-user-from-your-organization)时触发。{% endif %}{% ifversion fpt or ghes or ghec %}
| `update_actions_secret` |当 {% data variables.product.prodname_actions %} 密码更新时触发。{% endif %}
| `update_new_repository_default_branch_setting` | 当所有者更改组织中新仓库的默认分支名称时触发。 有关详细信息，请参阅“[管理组织中存储库的默认分支名称](/organizations/managing-organization-settings/managing-the-default-branch-name-for-repositories-in-your-organization)。”
| `update_default_repository_permission` | 当所有者更改组织成员的默认仓库权限级别时触发的。
| `update_member` | 当所有者将某人的角色从所有者更改为成员或者从成员更改为所有者时触发。
| `update_member_repository_creation_permission` | 当所有者更改组织成员创建存储库的权限时触发。{% ifversion fpt or ghec %}
| `update_saml_provider_settings` | 当组织的 SAML 提供程序设置被更新时触发。
| `update_terms_of_service` | 当组织在标准服务条款和公司服务条款之间切换时触发。 有关详细信息，请参阅“[升级到公司服务条款](/articles/upgrading-to-the-corporate-terms-of-service)”。{% endif %}

{% ifversion ghec %}
### <a name="org_credential_authorization-category-actions"></a>`org_credential_authorization` 类别操作

| 操作 | 说明
|------------------|-------------------
| `grant` | 当成员[授权用于 SAML 单一登录的凭证](/github/authenticating-to-github/authenticating-with-saml-single-sign-on)时触发。
| `deauthorized` | 当成员[取消授权用于 SAML 单一登录的凭证](/github/authenticating-to-github/authenticating-with-saml-single-sign-on)时触发。
| `revoke` | 在所有者[撤销授权凭据](/organizations/granting-access-to-your-organization-with-saml-single-sign-on/viewing-and-managing-a-members-saml-access-to-your-organization)时触发。

{% endif %}{% ifversion secret-scanning-audit-log-custom-patterns %}

### <a name="org_secret_scanning_custom_pattern-category-actions"></a>`org_secret_scanning_custom_pattern` 类别操作

| 操作 | 说明
|------------------|-------------------
| `create` | 在组织中为机密扫描发布自定义模式时触发。 有关详细信息，请参阅“[为机密扫描定义自定义模式](/code-security/secret-scanning/defining-custom-patterns-for-secret-scanning#defining-a-custom-pattern-for-an-organization)”。
| `update` | 在组织中保存对自定义模式的更改以进行秘密扫描时触发。 有关详细信息，请参阅“[为机密扫描定义自定义模式](/code-security/secret-scanning/defining-custom-patterns-for-secret-scanning#editing-a-custom-pattern)”。
| `delete` | 在组织中从机密扫描删除自定义模式时触发。 有关详细信息，请参阅“[为机密扫描定义自定义模式](/code-security/secret-scanning/defining-custom-patterns-for-secret-scanning#removing-a-custom-pattern)”。

{% endif %}
### <a name="organization_label-category-actions"></a>`organization_label` 类别操作

| 操作 | 说明
|------------------|-------------------
| `create` | 创建默认标签时触发。
| `update` | 编辑默认标签时触发。
| `destroy` | 删除默认标签时触发。

### <a name="oauth_application-category-actions"></a>`oauth_application` 类别操作

| 操作 | 说明
|------------------|-------------------
| `create` | 在创建新 {% data variables.product.prodname_oauth_app %} 时触发。
| `destroy` | 当现有 {% data variables.product.prodname_oauth_app %} 被删除时触发。
| `reset_secret` | 当 {% data variables.product.prodname_oauth_app %} 的客户端密钥被重置时触发。
| `revoke_tokens` | 当 {% data variables.product.prodname_oauth_app %} 的用户令牌被撤销时触发。
| `transfer` |  当现有 {% data variables.product.prodname_oauth_app %} 被转让到新组织时触发。

### <a name="packages-category-actions"></a>`packages` 类别操作

| 操作 | 说明 |
|--------|-------------|
| `package_version_published` | 当软件包版本发布时触发。 |
| `package_version_deleted` | 当特定软件包版本被删除时触发。 有关详细信息，请参阅“[删除和还原包](/packages/learn-github-packages/deleting-and-restoring-a-package)”。
| `package_deleted` | 在整个软件包被删除时触发。 有关详细信息，请参阅“[删除和还原包](/packages/learn-github-packages/deleting-and-restoring-a-package)”。
| `package_version_restored` | 当特定软件包版本被删除时触发。 有关详细信息，请参阅“[删除和还原包](/packages/learn-github-packages/deleting-and-restoring-a-package)”。
| `package_restored` | 在整个软件包恢复时触发。 有关详细信息，请参阅“[删除和还原包](/packages/learn-github-packages/deleting-and-restoring-a-package)”。

{% ifversion fpt or ghec %}

### <a name="payment_method-category-actions"></a>`payment_method` 类别操作

| 操作 | 说明
|------------------|-------------------
| `create` |  在添加新的付款方式（例如新的信用卡或 PayPal 帐户）时触发。
| `update` | 当现有付款方式被更新时触发。

{% endif %}

### <a name="profile_picture-category-actions"></a>`profile_picture` 类别操作
| 操作 | 说明
|------------------|-------------------
| update | 在设置或更新组织的资料图片时触发。

### <a name="project-category-actions"></a>`project` 类别操作

| 操作 | 说明
|--------------------|---------------------
| `create` | 在创建项目板时触发。
| `link` | 当仓库被链接到项目板时触发。
| `rename` | 当项目板被重命名时触发。
| `update` | 当项目板被更新时触发。
| `delete` | 在删除项目板时触发。
| `unlink` | 当仓库从项目板解除链接时触发。
| `update_org_permission` | 当所有组织成员的基本级别权限被更改或删除时触发。 |
| `update_team_permission` | 当团队的项目板权限级别被更改，或者在项目板中添加或删除团队时触发。 |
| `update_user_permission` | 在项目板中添加或删除组织成员或外部协作者时，或者他们的权限级别被更改时触发。|

### <a name="protected_branch-category-actions"></a>`protected_branch` 类别操作

| 操作 | 说明
|--------------------|---------------------
| `create ` | 在分支上启用分支保护时触发。
| `destroy` | 在分支上禁用分支保护时触发。
| `update_admin_enforced ` | 为仓库管理员实施分支保护时触发。
| `update_require_code_owner_review ` | 在分支上更新必需代码所有者审查的实施时触发。
| `dismiss_stale_reviews ` | 在分支上更新忽略旧拉取请求的实施时触发。
| `update_signature_requirement_enforcement_level ` | 在分支上更新必需提交签名的实施时触发。
| `update_pull_request_reviews_enforcement_level ` | 在分支上更新必需拉取请求审查的实施时触发。 可以是 `0`（已停用）、`1`（非管理员）、`2`（所有人）之一。
| `update_required_status_checks_enforcement_level ` | 在分支上更新必需状态检查的实施时触发。
| `update_strict_required_status_checks_policy` | 当分支在合并之前保持最新的要求被更改时触发。
| `rejected_ref_update ` | 当分支更新尝试被拒绝时触发。
| `policy_override ` | 当分支保护要求被仓库管理员重写时触发。
| `update_allow_force_pushes_enforcement_level ` | 对受保护分支启用或禁用强制推送时触发。
| `update_allow_deletions_enforcement_level ` | 对受保护分支启用或禁用分支删除时触发。
| `update_linear_history_requirement_enforcement_level ` | 对受保护分支启用或禁用必要线性提交历史记录时触发。

### <a name="pull_request-category-actions"></a>`pull_request` 类别操作

| 操作 | 说明
|------------------|-------------------
| `create` | 在创建拉取请求时触发。
| `close` | 在未合并的情况下关闭拉取请求时触发。
| `reopen` | 当之前关闭的拉取请求重新打开时触发。
| `merge` | 当拉取请求合并时触发。
| `indirect_merge` | 当拉取请求被视为合并时触发，因为其提交被合并到目标分支中。
| `ready_for_review` | 当拉请求被标记为可供审核时触发。
| `converted_to_draft` | 当拉请求转换为草稿时触发。
| `create_review_request` | 当请求审核时触发。
| `remove_review_request` | 当审核请求被移除时触发。

### <a name="pull_request_review-category-actions"></a>`pull_request_review` 类别操作

| 操作 | 说明
|------------------|-------------------
| `submit` | 在提交审核时触发。
| `dismiss` | 当审核被忽略时触发。
| `delete` | 当审核被删除时触发。

### <a name="pull_request_review_comment-category-actions"></a>`pull_request_review_comment` 类别操作

| 操作 | 说明
|------------------|-------------------
| `create` | 在添加审核评论时触发。
| `update` | 在更改审核评论时触发。
| `delete` | 在删除审核评论时触发。

### <a name="repo-category-actions"></a>`repo` 类别操作

| 操作 | 说明
|------------------|-------------------
| `access` | 当用户[更改组织中存储库的可见性](/github/administering-a-repository/setting-repository-visibility)时触发。
| `actions_enabled` | 为仓库启用 {% data variables.product.prodname_actions %} 时触发。 可以使用用户界面查看。 当您使用 REST API 访问审计日志时，不包括此事件。 有关详细信息，请参阅“[使用 REST API](#using-the-rest-api)”。
| `add_member` | 当用户接受[对存储库具有协作访问权限的邀请](/articles/inviting-collaborators-to-a-personal-repository)时触发。
| `add_topic` | 当存储库管理员[添加主题](/articles/classifying-your-repository-with-topics)至存储库时触发。
| `advanced_security_disabled` | 当仓库管理员为仓库禁用 {% data variables.product.prodname_GH_advanced_security %} 功能时触发。 有关详细信息，请参阅“[管理存储库的安全和分析设置](/github/administering-a-repository/managing-security-and-analysis-settings-for-your-repository)”。
| `advanced_security_enabled` | 当仓库管理员为仓库启用 {% data variables.product.prodname_GH_advanced_security %} 功能时触发。 有关详细信息，请参阅“[管理存储库的安全和分析设置](/github/administering-a-repository/managing-security-and-analysis-settings-for-your-repository)”。
| `archived` | 存储库管理员[存档存储库](/articles/about-archiving-repositories)时触发。{% ifversion ghes %}
| `config.disable_anonymous_git_access` | 在公共存储库中[禁用匿名 Git 读取访问](/enterprise/user/articles/enabling-anonymous-git-read-access-for-a-repository)时触发。
| `config.enable_anonymous_git_access` | 在公共存储库中[启用匿名 Git 读取访问](/enterprise/user/articles/enabling-anonymous-git-read-access-for-a-repository)时触发。
| `config.lock_anonymous_git_access` | 当存储库的[匿名 Git 读取访问设置锁定](/enterprise/admin/guides/user-management/preventing-users-from-changing-anonymous-git-read-access)时触发。
| `config.unlock_anonymous_git_access` | 当存储库的[匿名 Git 读取访问设置解锁](/enterprise/admin/guides/user-management/preventing-users-from-changing-anonymous-git-read-access)时触发。{% endif %}
| `create` | [创建新存储库](/articles/creating-a-new-repository)时触发。{% ifversion fpt or ghes or ghec %}
| `create_actions_secret` |为仓库创建 {% data variables.product.prodname_actions %} 密码时触发。 有关详细信息，请参阅“[为存储库创建加密机密](/actions/reference/encrypted-secrets#creating-encrypted-secrets-for-a-repository)”。{% endif %}
| `destroy` | [创建存储库](/articles/deleting-a-repository)时触发。{% ifversion fpt or ghec %}
| `disable` | 在禁用存储库时触发（例如针对[资金不足](/articles/unlocking-a-locked-account)）。{% endif %}
| `enable` | 在重新启用存储库时触发。{% ifversion fpt or ghes or ghec %}
| `remove_actions_secret` | 当 {% data variables.product.prodname_actions %} 密码被移除时触发。{% endif %}
| `remove_member` | 在用户[以协作者身份从存储库中删除](/articles/removing-a-collaborator-from-a-personal-repository)时触发。
| `register_self_hosted_runner` | 在注册新的自托管运行器时触发。 有关详细信息，请参阅“[将自托管运行器添加到存储库](/actions/hosting-your-own-runners/adding-self-hosted-runners#adding-a-self-hosted-runner-to-a-repository)”。
| `remove_self_hosted_runner` | 当自托管运行器被移除时触发。 有关详细信息，请参阅“[从存储库中删除运行器](/actions/hosting-your-own-runners/removing-self-hosted-runners#removing-a-runner-from-a-repository)”。
| `remove_topic` | 当仓库管理员从仓库中删除主题时触发。
| `rename` | [存储库重命名](/articles/renaming-a-repository)时触发。
| `self_hosted_runner_online` | 当运行器应用程序启动时触发。 只能使用 REST API 查看；在 UI 或 JSON/CSV 导出中不可见。 有关详细信息，请参阅“[检查自托管运行器的状态](/actions/hosting-your-own-runners/monitoring-and-troubleshooting-self-hosted-runners#checking-the-status-of-a-self-hosted-runner)”。
| `self_hosted_runner_offline` | 当运行器应用程序停止时触发。 只能使用 REST API 查看；在 UI 或 JSON/CSV 导出中不可见。 有关详细信息，请参阅“[检查自托管运行器的状态](/actions/hosting-your-own-runners/monitoring-and-troubleshooting-self-hosted-runners#checking-the-status-of-a-self-hosted-runner)”。{% ifversion fpt or ghes or ghec %}
| `self_hosted_runner_updated` | 当运行器应用程序更新时触发。 可以使用 REST API 和 UI 查看；在 JSON /CSV 导出中不可见。 有关详细信息，请参阅“[有关自托管运行器](/actions/hosting-your-own-runners/about-self-hosted-runners#about-self-hosted-runners)”。{% endif %}{% ifversion fpt or ghec %}
| `set_actions_fork_pr_approvals_policy` | 改变需要批准来自公共复刻的工作流程的设置时触发。 有关详细信息，请参阅“[管理存储库的 {% data variables.product.prodname_actions %} 设置](/repositories/managing-your-repositorys-settings-and-features/enabling-features-for-your-repository/managing-github-actions-settings-for-a-repository#configuring-required-approval-for-workflows-from-public-forks)”。{% endif %}
| `set_actions_retention_limit` | 改变 {% data variables.product.prodname_actions %} 构件和日志的保留期时触发。 有关详细信息，请参阅“[管理存储库的 {% data variables.product.prodname_actions %} 设置](/repositories/managing-your-repositorys-settings-and-features/enabling-features-for-your-repository/managing-github-actions-settings-for-a-repository#configuring-the-retention-period-for-github-actions-artifacts-and-logs-in-your-repository)”。{% ifversion fpt or ghes or ghec %}
| `set_fork_pr_workflows_policy` | 更改私有仓库复刻上的工作流程策略时触发。 有关详细信息，请参阅“[管理存储库的 {% data variables.product.prodname_actions %} 设置](/repositories/managing-your-repositorys-settings-and-features/enabling-features-for-your-repository/managing-github-actions-settings-for-a-repository#enabling-workflows-for-private-repository-forks)”。{% endif %}
| `transfer` | 在[传输存储库](/articles/how-to-transfer-a-repository)时触发。
| `transfer_start` | 在仓库转让即将发生时触发。
| `unarchived` | 当存储库管理员取消存档存储库时触发。{% ifversion fpt or ghes or ghec %}
| `update_actions_secret` | 当 {% data variables.product.prodname_actions %} 密码更新时触发。{% endif %}

{% ifversion fpt or ghec %}

### <a name="repository_advisory-category-actions"></a>`repository_advisory` 类别操作

| 操作 | 说明
|------------------|-------------------
| `close` | 当有人关闭安全通告时触发。 有关详细信息，请参阅“[关于 {% data variables.product.prodname_dotcom %} 安全通知](/github/managing-security-vulnerabilities/about-github-security-advisories)”。
| `cve_request` | 当有人从 {% data variables.product.prodname_dotcom %} 为安全通告草稿申请 CVE（通用漏洞披露）编号时触发。
| `github_broadcast` | 当 {% data variables.product.prodname_dotcom %} 在 {% data variables.product.prodname_advisory_database %} 中公开安全通告时触发。
| `github_withdraw` | 当 {% data variables.product.prodname_dotcom %} 撤回错误发布的安全通告时触发。
| `open` | 当有人打开安全通告草稿时触发。
| `publish` | 当有人发布安全通告时触发。
| `reopen` | 当有人重新打开安全通告草稿时触发。
| `update` | 当有人编辑草稿或发布安全通告时触发。

### <a name="repository_content_analysis-category-actions"></a>`repository_content_analysis` 类别操作

| 操作 | 说明
|------------------|-------------------
| `enable` | 当组织所有者或对存储库具有管理员访问权限的人员[启用专用存储库的数据使用设置](/get-started/privacy-on-github/managing-data-use-settings-for-your-private-repository)时触发。
| `disable` | 当组织所有者或对存储库具有管理员访问权限的人员[禁用专用存储库的数据使用设置](/get-started/privacy-on-github/managing-data-use-settings-for-your-private-repository)时触发。

{% endif %}{% ifversion fpt or ghec %}

### <a name="repository_dependency_graph-category-actions"></a>`repository_dependency_graph` 类别操作

| 操作 | 说明
|------------------|-------------------
| `disable` | 当存储库所有者或对存储库拥有管理员权限的人对{% ifversion fpt or ghec %}专用{% endif %}存储库禁用依赖项图时触发。 有关详细信息，请参阅“[关于依赖关系图](/github/visualizing-repository-data-with-graphs/about-the-dependency-graph)”。
| `enable` | 当存储库所有者或对存储库拥有管理员权限的人对{% ifversion fpt or ghec %}专用{% endif %}存储库启用依赖项图时触发。

{% endif %}{% ifversion ghec or ghes or ghae %}
### <a name="repository_secret_scanning-category-actions"></a>`repository_secret_scanning` 类别操作

| 操作 | 说明
|------------------|-------------------
| `disable` | 当存储库所有者或对存储库具有管理员访问权限的人员禁用存储库的机密扫描时触发。 有关详细信息，请参阅“[关于机密扫描](/github/administering-a-repository/about-secret-scanning)”。
| `enable` | 当存储库所有者或对存储库具有管理员访问权限的人员启用存储库的机密扫描时触发。

{% endif %}{% ifversion secret-scanning-audit-log-custom-patterns %}

### <a name="repository_secret_scanning_custom_pattern-category-actions"></a>`repository_secret_scanning_custom_pattern` 类别操作

| 操作 | 说明
|------------------|-------------------
| `create` | 在存储库中为机密扫描发布自定义模式时触发。 有关详细信息，请参阅“[为机密扫描定义自定义模式](/code-security/secret-scanning/defining-custom-patterns-for-secret-scanning#defining-a-custom-pattern-for-a-repository)”。
| `update` | 在存储库中保存对自定义模式的更改以进行秘密扫描时触发。 有关详细信息，请参阅“[为机密扫描定义自定义模式](/code-security/secret-scanning/defining-custom-patterns-for-secret-scanning#editing-a-custom-pattern)”。
| `delete` | 在存储库中从机密扫描删除自定义模式时触发。 有关详细信息，请参阅“[为机密扫描定义自定义模式](/code-security/secret-scanning/defining-custom-patterns-for-secret-scanning#removing-a-custom-pattern)”。

{% endif %}{% ifversion secret-scanning-audit-log-custom-patterns %}

### <a name="repository_secret_scanning_push_protection-category-actions"></a>`repository_secret_scanning_push_protection` 类别操作

| 操作 | 说明
|------------------|-------------------
| `disable` | 当存储库所有者或对存储库具有管理员访问权限的人员禁用存储库的机密扫描时触发。 有关详细信息，请参阅“[使用机密扫描保护推送](/code-security/secret-scanning/protecting-pushes-with-secret-scanning)”。
| `enable` | 当存储库所有者或对存储库具有管理员访问权限的人员启用存储库的机密扫描时触发。

{% endif %}
### <a name="repository_vulnerability_alert-category-actions"></a>`repository_vulnerability_alert` 类别操作

| 操作 | 说明
|------------------|-------------------
| `create` | 当 {% data variables.product.product_name %} 为使用易受攻击的依赖项的存储库创建 {% data variables.product.prodname_dependabot %} 警报时触发。 有关详细信息，请参阅“[关于 {% data variables.product.prodname_dependabot_alerts %}](/github/managing-security-vulnerabilities/about-alerts-for-vulnerable-dependencies)”。
| `dismiss` | 当组织所有者或对存储库具有管理员访问权限的人员消除有关易受攻击的依赖项的 {% data variables.product.prodname_dependabot %} 警报时触发。
| `resolve` | 当对仓库具有写入权限的人推送更改以更新和解决项目依赖项中的漏洞时触发。
{% ifversion fpt or ghec %}
### <a name="repository_vulnerability_alerts-category-actions"></a>`repository_vulnerability_alerts` 类别操作

| 操作 | 说明
|------------------|-------------------
| `authorized_users_teams` | 当组织所有者或对存储库具有管理员权限的人员更新授权接收存储库的 {% data variables.product.prodname_dependabot_alerts %} 的人员或团队列表时触发。 有关详细信息，请参阅“[管理存储库的安全和分析设置](/github/administering-a-repository/managing-security-and-analysis-settings-for-your-repository#granting-access-to-security-alerts)”。
| `disable` | 当仓库所有者或对仓库有管理员权限的人禁用 {% data variables.product.prodname_dependabot_alerts %} 时触发。
| `enable` | 当仓库所有者或对仓库有管理员权限的人启用 {% data variables.product.prodname_dependabot_alerts %} 时触发。

{% endif %}{% ifversion custom-repository-roles %}
### <a name="role-category-actions"></a>`role` 类别操作
| 操作 | 说明
|------------------|-------------------
|`create` | 在组织所有者创建新的自定义存储库角色时触发。 有关详细信息，请参阅“[管理组织的自定义存储库角色](/organizations/managing-peoples-access-to-your-organization-with-roles/managing-custom-repository-roles-for-an-organization)”。
|`destroy` | 在组织所有者删除自定义存储库角色时触发。 有关详细信息，请参阅“[管理组织的自定义存储库角色](/organizations/managing-peoples-access-to-your-organization-with-roles/managing-custom-repository-roles-for-an-organization)”。
|`update` | 在组织所有者编辑现有自定义存储库角色时触发。 有关详细信息，请参阅“[管理组织的自定义存储库角色](/organizations/managing-peoples-access-to-your-organization-with-roles/managing-custom-repository-roles-for-an-organization)”。

{% endif %} {% ifversion ghec or ghes or ghae %}
### <a name="secret_scanning-category-actions"></a>`secret_scanning` 类别操作

| 操作 | 说明
|------------------|-------------------
| `disable` | 当组织所有者对所有现有{% ifversion ghec %}专用或内部{% endif %} 存储库禁用密码扫描时触发。 有关详细信息，请参阅“[关于机密扫描](/github/administering-a-repository/about-secret-scanning)”。
| `enable` | 当组织所有者对所有现有{% ifversion ghec %}专用或内部{% endif %} 存储库启用密码扫描时触发。
{% endif %}

{% ifversion secret-scanning-alert-audit-log %}
### <a name="secret_scanning_alert-category-actions"></a>`secret_scanning_alert` 类别操作

| 操作 | 说明
|------------------|-------------------
| `create` | 当 {% data variables.product.prodname_dotcom %} 检测到公开的机密并创建 {% data variables.product.prodname_secret_scanning %} 警报时触发。 有关详细信息，请参阅“[管理来自 {% data variables.product.prodname_secret_scanning %} 的警报](/code-security/secret-scanning/managing-alerts-from-secret-scanning)”。
| `reopen` | 当用户重新打开 {% data variables.product.prodname_secret_scanning %} 警报时触发。
| `resolve` | 当用户解决 {% data variables.product.prodname_secret_scanning %} 警报时触发。
{% endif %}

{% ifversion ghec or ghes or ghae %}
### <a name="secret_scanning_new_repos-category-actions"></a>`secret_scanning_new_repos` 类别操作

| 操作 | 说明
|------------------|-------------------
| `disable` | 当组织所有者对所有新的{% ifversion ghec %}专用或内部{% endif %}存储库禁用密码扫描时触发。 有关详细信息，请参阅“[关于机密扫描](/github/administering-a-repository/about-secret-scanning)”。
| `enable` | 当组织所有者对所有新的{% ifversion ghec %}专用或内部{% endif %}存储库启用密码扫描时触发。
{% endif %}

{% ifversion secret-scanning-push-protection-bypasses %}
### <a name="secret_scanning_push_protection-category-actions"></a>`secret_scanning_push_protection` 类别操作

| 操作 | 说明
|------------------|-------------------
| `bypass` | 当用户绕过机密扫描检测到的机密的推送保护时触发。 有关详细信息，请参阅“[绕过机密的推送保护](/code-security/secret-scanning/protecting-pushes-with-secret-scanning#bypassing-push-protection-for-a-secret)”。
{% endif %}

{% ifversion fpt or ghec %}
### <a name="sponsors-category-actions"></a>`sponsors` 类别操作

| 操作 | 说明
|------------------|-------------------
| `custom_amount_settings_change` | 在启用或禁用自定义金额，或者在更改建议的自定义金额时触发（请参阅“[管理赞助级别](/github/supporting-the-open-source-community-with-github-sponsors/managing-your-sponsorship-tiers)”）
| `repo_funding_links_file_action` | 更改存储库中的 FUNDING 文件时触发（请参阅“[在存储库中显示赞助按钮](/articles/displaying-a-sponsor-button-in-your-repository)”）
| `sponsor_sponsorship_cancel` | 取消赞助时触发（请参阅“[降级赞助](/articles/downgrading-a-sponsorship)”）
| `sponsor_sponsorship_create` | 赞助帐户时触发（请参阅“[赞助开源贡献者](/sponsors/sponsoring-open-source-contributors/sponsoring-an-open-source-contributor)”）
| `sponsor_sponsorship_payment_complete` | 赞助帐户并且付款已处理后触发（请参阅“[赞助开源贡献者](/sponsors/sponsoring-open-source-contributors/sponsoring-an-open-source-contributor)”）
| `sponsor_sponsorship_preference_change` | 更改是否从赞助帐户接收电子邮件更新时触发（请参阅“[管理赞助](/sponsors/sponsoring-open-source-contributors/managing-your-sponsorship)”）
| `sponsor_sponsorship_tier_change` | 升级或降级赞助时触发（请参阅“[升级赞助](/articles/upgrading-a-sponsorship)”和“[降级赞助](/articles/downgrading-a-sponsorship)”）
| `sponsored_developer_approve` | 批准 {% data variables.product.prodname_sponsors %} 帐户时触发（请参阅“[为组织设置 {% data variables.product.prodname_sponsors %}](/sponsors/receiving-sponsorships-through-github-sponsors/setting-up-github-sponsors-for-your-organization)”）
| `sponsored_developer_create` | 创建 {% data variables.product.prodname_sponsors %} 帐户时触发（请参阅“[为组织设置 {% data variables.product.prodname_sponsors %}](/sponsors/receiving-sponsorships-through-github-sponsors/setting-up-github-sponsors-for-your-organization)”）
| `sponsored_developer_disable` | 帐户 {% data variables.product.prodname_sponsors %} 禁用时触发
| `sponsored_developer_redraft` | 当您的 {% data variables.product.prodname_sponsors %} 帐户从已批准状态恢复为草稿状态时触发
| `sponsored_developer_profile_update` | 在编辑赞助组织配置文件时触发（请参阅“[编辑 {% data variables.product.prodname_sponsors %} 的个人资料详细信息](/sponsors/receiving-sponsorships-through-github-sponsors/editing-your-profile-details-for-github-sponsors)”）
| `sponsored_developer_request_approval` | 提交 {% data variables.product.prodname_sponsors %} 申请以供审批时触发（请参阅“[为组织设置 {% data variables.product.prodname_sponsors %}](/sponsors/receiving-sponsorships-through-github-sponsors/setting-up-github-sponsors-for-your-organization)”）
| `sponsored_developer_tier_description_update` | 更改赞助级别的描述时触发（请参阅“[管理赞助级别](/sponsors/receiving-sponsorships-through-github-sponsors/managing-your-sponsorship-tiers)”）
| `sponsored_developer_update_newsletter_send` | 向赞助商发送电子邮件更新时触发（请参阅“[与赞助商联系](/sponsors/receiving-sponsorships-through-github-sponsors/contacting-your-sponsors)”）
| `waitlist_invite_sponsored_developer` | 受邀加入候补名单中的 {% data variables.product.prodname_sponsors %} 时触发（请参阅“[为组织设置 {% data variables.product.prodname_sponsors %}](/sponsors/receiving-sponsorships-through-github-sponsors/setting-up-github-sponsors-for-your-organization)”）
| `waitlist_join` | 加入候补名单成为赞助组织时触发（请参阅“[为组织设置 {% data variables.product.prodname_sponsors %}](/sponsors/receiving-sponsorships-through-github-sponsors/setting-up-github-sponsors-for-your-organization)”）
{% endif %}

### <a name="team-category-actions"></a>`team` 类别操作

| 操作 | 说明
|------------------|-------------------
| `add_member` | 将组织成员[添加到团队](/articles/adding-organization-members-to-a-team)时触发。
| `add_repository` | 当团队被授予控制仓库的权限时触发。
| `change_parent_team` | 创建子团队或[更改子团队的父级](/articles/moving-a-team-in-your-organization-s-hierarchy)时触发。
| `change_privacy` | 当团队的隐私级别发生更改时触发。
| `create` | 在创建新团队时触发。
| `demote_maintainer` | 当用户从团队维护员降级到团队成员时触发。 有关详细信息，请参阅“[将团队维护者角色分配给团队成员](/organizations/organizing-members-into-teams/assigning-the-team-maintainer-role-to-a-team-member)”。
| `destroy` | 从组织中删除团队时触发。
| `team.promote_maintainer` | 当用户从团队成员提升为团队维护者时触发。 有关详细信息，请参阅“[将团队维护者角色分配给团队成员](/organizations/organizing-members-into-teams/assigning-the-team-maintainer-role-to-a-team-member)”。
| `remove_member` | [从团队中删除](/articles/removing-organization-members-from-a-team)组织成员时触发。
| `remove_repository` | 当仓库不再受团队控制时触发。

### <a name="team_discussions-category-actions"></a>`team_discussions` 类别操作

| 操作 | 说明
|---|---|
| `disable` | 当组织所有者对组织禁用团队讨论时触发。 有关详细信息，请参阅“[禁用组织的团队讨论](/articles/disabling-team-discussions-for-your-organization)”。
| `enable` | 当组织所有者对组织启用团队讨论时触发。

### <a name="workflows-category-actions"></a>`workflows` 类别操作

{% data reusables.actions.actions-audit-events-workflow %}
## <a name="further-reading"></a>延伸阅读

- [确保组织安全](/articles/keeping-your-organization-secure){% ifversion fpt or ghec or ghes > 3.3 or ghae-issue-5146 %} {%- ifversion fpt or ghec %}
- [导出组织的成员信息](/organizations/managing-membership-in-your-organization/exporting-member-information-for-your-organization){% endif %} {%- endif %}
