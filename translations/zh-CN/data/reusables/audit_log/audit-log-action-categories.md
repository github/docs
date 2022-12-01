---
ms.openlocfilehash: 1dd9305ca2b7cb3e8d25d697de8ae3a83e0c46bb
ms.sourcegitcommit: 7a74d5796695bb21c30e4031679253cbc16ceaea
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 11/28/2022
ms.locfileid: "148183978"
---
| 类别名称 | 说明
|------------------|-------------------
{%- ifversion fpt or ghec %} | `account` | 包含与组织帐户相关的活动。
| `advisory_credit`   | 包含与 {% data variables.product.prodname_advisory_database %} 中安全通告的贡献者积分相关的活动。 有关详细信息，请参阅“[关于 {% data variables.product.prodname_dotcom %} 安全通知](/github/managing-security-vulnerabilities/about-github-security-advisories)”。
{%- endif %} | `artifact` | 包含与 {% data variables.product.prodname_actions %} 工作流运行工件相关的活动。
{%- ifversion audit-log-streaming %} | `audit_log_streaming`  | 包含与企业帐户中组织的流式审核日志相关的活动。
{%- endif %} {%- ifversion fpt or ghec %} | `billing` | 包含与组织计费相关的活动。
{%- endif %} {%- ifversion ghec or ghes or ghae %} | `business`  | 包含与企业的业务设置相关的活动。
{%- endif %} {%- ifversion code-security-audit-log-events %} | `business_advanced_security` | 包含与企业中的 {% data variables.product.prodname_GH_advanced_security %} 相关的活动。 有关详细信息，请参阅“[管理企业的 {% data variables.product.prodname_GH_advanced_security %} 功能](/admin/code-security/managing-github-advanced-security-for-your-enterprise/managing-github-advanced-security-features-for-your-enterprise)”。
| `business_secret_scanning` | 包含与企业中的 {% data variables.product.prodname_secret_scanning %} 相关的活动。 有关详细信息，请参阅“[管理企业的 {% data variables.product.prodname_GH_advanced_security %} 功能](/admin/code-security/managing-github-advanced-security-for-your-enterprise/managing-github-advanced-security-features-for-your-enterprise)”。
{%- endif %} {%- ifversion secret-scanning-audit-log-custom-patterns %} | `business_secret_scanning_custom_pattern` | 包含与企业中 {% data variables.product.prodname_secret_scanning %} 的自定义模式相关的活动。
{%- endif %} {%- ifversion code-security-audit-log-events %} | `business_secret_scanning_push_protection` | 包含与企业中 {% data variables.product.prodname_secret_scanning %} 的推送保护功能相关的活动。 有关详细信息，请参阅“[管理企业的 {% data variables.product.prodname_GH_advanced_security %} 功能](/admin/code-security/managing-github-advanced-security-for-your-enterprise/managing-github-advanced-security-features-for-your-enterprise)”。
| `business_secret_scanning_push_protection_custom_message` | 包含与在企业中触发推送保护时显示的自定义消息相关的活动。 有关详细信息，请参阅“[管理企业的 {% data variables.product.prodname_GH_advanced_security %} 功能](/admin/code-security/managing-github-advanced-security-for-your-enterprise/managing-github-advanced-security-features-for-your-enterprise)”。
{%- endif %} | `checks`   | 包含与检查套件和运行相关的活动。
{%- ifversion fpt or ghec %} | `codespaces` | 包含与组织的 codespaces 相关的活动。
{%- endif %} | `commit_comment` | 包含与更新或删除提交评论相关的活动。
{%- ifversion ghes %} | `config_entry` |  包含与配置设置相关的活动。 这些事件仅在站点管理员审核日志中可见。
{%- endif %} | `dependabot_alerts`  | 包含现有存储库中 {% data variables.product.prodname_dependabot_alerts %} 的组织级配置活动。 有关详细信息，请参阅“[关于 {% data variables.product.prodname_dependabot_alerts %}](/code-security/dependabot/dependabot-alerts/about-dependabot-alerts)”。
| `dependabot_alerts_new_repos`   | 包含组织新建存储库中 {% data variables.product.prodname_dependabot_alerts %} 的组织级配置活动。
| `dependabot_repository_access` | 包含与允许 {% data variables.product.prodname_dependabot %} 访问组织中哪些专用存储库相关的活动。
{%- ifversion fpt or ghec or ghes %} | `dependabot_security_updates`   | 包含现有存储库中 {% data variables.product.prodname_dependabot_security_updates %} 的组织级配置活动。 有关详细信息，请参阅“[配置 {% data variables.product.prodname_dependabot_security_updates %}](/github/managing-security-vulnerabilities/configuring-dependabot-security-updates)”。
| `dependabot_security_updates_new_repos` | 包含组织新建存储库中 {% data variables.product.prodname_dependabot_security_updates %} 的组织级配置活动。
{%- endif %} | `dependency_graph` | 包含存储库依赖项关系图的组织级配置活动。 有关详细信息，请参阅“[关于依赖项关系图](/github/visualizing-repository-data-with-graphs/about-the-dependency-graph)”。
| `dependency_graph_new_repos`  | 包含组织新建存储库的组织级配置活动。
{%- ifversion fpt or ghec %} | `discussion` | 包含与团队讨论相关的活动。
| `discussion_comment` | 包含与发布到团队页的讨论中的评论相关的活动。
| `discussion_post`   | 包含与发布到团队页的讨论相关的活动。
| `discussion_post_reply`   | 包含与发布到团队页的讨论回复相关的活动。
{%- endif %} {%- ifversion ghec or ghes %} | `dotcom_connection` | 包含与 {% data variables.product.prodname_github_connect %} 相关的活动。
| `enterprise` | 包含与企业设置相关的活动。
{%- endif %} {%- ifversion ghec %} | `enterprise_domain` | 包含与已验证的企业域相关的活动。
| `enterprise_installation` | 包含与和 {% data variables.product.prodname_github_connect %} 企业连接关联的 {% data variables.product.prodname_github_app %} 相关的活动。
{%- endif %} {%- ifversion fpt or ghec %} | `environment` | 包含与 {% data variables.product.prodname_actions %} 环境相关的活动。
{%- endif %} {%- ifversion ghae %} | `external_group` | 包含与 Okta 组相关的活动。
| `external_identity` | 包含与 Okta 组中的用户相关的活动。
{%- endif %} | `gist` | 包含与 Gists 相关的活动。
| `hook` | 包含与 Webhook 相关的活动。
| `integration` | 包含与帐户中的集成相关的活动。
| `integration_installation` | 包含与帐户中安装的集成相关的活动。
| `integration_installation_request`  | 包含与组织成员请求所有者批准在组织中使用的集成相关的活动。
{%- ifversion ghec or ghae %} | `ip_allow_list`   |  包含与为组织启用或禁用 IP 允许列表相关的活动。
| `ip_allow_list_entry`   | 包含与为组织创建、删除和编辑 IP 允许列表条目相关的活动。
{%- endif %} | `issue`  | 包含与固定、转移或删除存储库中问题相关的活动。
| `issue_comment` | 包含与固定、转移或删除问题评论相关的活动。
| `issues` | 包含与为组织启用或禁用问题创建相关的活动。
{%- ifversion fpt or ghec %} | `marketplace_agreement_signature` | 包含与签署 {% data variables.product.prodname_marketplace %} 开发者协议相关的活动。
| `marketplace_listing` | 包含与 {% data variables.product.prodname_marketplace %} 中列出的应用相关的活动。
{%- endif %} | `members_can_create_pages`   | 包含与管理组织存储库的 {% data variables.product.prodname_pages %} 站点发布相关的活动。 有关详细信息，请参阅“[为组织管理 {% data variables.product.prodname_pages %} 站点的发布](/organizations/managing-organization-settings/managing-the-publication-of-github-pages-sites-for-your-organization)”。
| `members_can_create_private_pages` | 包含与管理组织存储库的专用 {% data variables.product.prodname_pages %} 站点发布相关的活动。
| `members_can_create_public_pages` | 包含与管理组织存储库的公共 {% data variables.product.prodname_pages %} 站点发布相关的活动。
{%- ifversion ghec or ghes or ghae %} | `members_can_delete_repos` | 包含与为组织启用或禁用存储库创建相关的活动。
{%- endif %} {%- ifversion fpt or ghec %} | `members_can_view_dependency_insights` | 包含允许组织成员查看依赖项见解的组织级配置活动。
| `migration` | 包含与将数据从源位置（例如 {% data variables.product.prodname_dotcom_the_website %} 组织或 {% data variables.product.prodname_ghe_server %} 实例）传输到目标 {% data variables.product.prodname_ghe_server %} 实例相关的活动 。
{%- endif %} | `oauth_access` | 包含与 OAuth 访问令牌相关的活动。
| `oauth_application` | 包含与 OAuth 应用相关的活动。
{%- ifversion fpt or ghec %} | `oauth_authorization` | 包含与授权 OAuth 应用相关的活动。
{%- endif %} | `org`   | 包含与组织成员身份相关的活动。
{%- ifversion ghec or ghes or ghae %} | `org_credential_authorization` | 包含与授权凭据以用于 SAML 单一登录相关的活动。
{%- endif %} {%- ifversion secret-scanning-audit-log-custom-patterns %} | `org_secret_scanning_custom_pattern` | 包含与组织中机密扫描的自定义模式相关的活动。 有关详细信息，请参阅“[为机密扫描定义自定义模式](/code-security/secret-scanning/defining-custom-patterns-for-secret-scanning)”。
| `org.secret_scanning_push_protection` | 包含与组织中的机密扫描自定义模式相关的活动。 有关详细信息，请参阅“[使用机密扫描保护推送](/code-security/secret-scanning/protecting-pushes-with-secret-scanning)”。
{%- endif %} | `organization_default_label` | 包含与组织中存储库的默认标签相关的活动。
{%- ifversion fpt or ghec or ghes %} | `organization_domain` | 包含与已验证的组织域相关的活动。
| `organization_projects_change` | 包含与企业中组织范围的项目板相关的活动。
{%- endif %} {%- ifversion fpt or ghec %} | `pages_protected_domain` | 包含与 {% data variables.product.prodname_pages %} 的已验证自定义域相关的活动。
| `payment_method`  | 包含与组织如何支付 {% data variables.product.prodname_dotcom %} 相关的活动。
| `prebuild_configuration` | 包含与 {% data variables.product.prodname_github_codespaces %} 的预生成配置相关的活动。
{%- endif %} {%- ifversion ghes %} | `pre_receive_environment` | 包含与预接收挂钩环境相关的活动。
| `pre_receive_hook` | 包含与预接收挂钩相关的活动。
{%- endif %} {%- ifversion ghes %} | `private_instance_encryption` | 包含与为企业启用专用模式相关的活动。
{%- endif %} | `private_repository_forking` | 包含与允许存储库、组织或企业的专用和内部存储库分支相关的活动。
{%- ifversion fpt or ghec %} | `profile_picture`   | 包含与组织的配置文件图片相关的活动。
{%- endif %} | `project` | 包含与项目板相关的活动。
| `project_field` | 包含与项目板中的字段创建和删除相关的活动。
| `project_view` | 包含与项目板中的视图创建和删除相关的活动。
| `protected_branch` | 包含与受保护分支相关的活动。
| `public_key` | 包含与 SSH 密钥和部署密钥相关的活动。
| `pull_request` | 包含与拉取请求评审相关的活动。
| `pull_request_review` | 包含与拉取请求评审相关的活动。
| `pull_request_review_comment` | 包含与拉取请求评审评论相关的活动。
| `repo` | 包含与组织拥有的存储库相关的活动。
{%- ifversion fpt or ghec %} | `repository_advisory` | 包含与 {% data variables.product.prodname_advisory_database %} 中的安全通告相关的存储库级活动。  有关详细信息，请参阅“[关于 {% data variables.product.prodname_dotcom %} 安全通知](/github/managing-security-vulnerabilities/about-github-security-advisories)”。
| `repository_content_analysis`   | 包含与[为专用存储库启用或禁用数据使用](/articles/about-github-s-use-of-your-data)相关的活动。
| `repository_dependency_graph`   | 包含与为{% ifversion fpt or ghec %}专用{% endif %}存储库启用或禁用依赖项关系图相关的存储库级活动。 有关详细信息，请参阅“[关于依赖项关系图](/github/visualizing-repository-data-with-graphs/about-the-dependency-graph)”。
{%- endif %} | `repository_image` | 包含与存储库映像相关的活动。
| `repository_invitation` | 包含与邀请加入存储库相关的活动。
| `repository_projects_change` | 包含与为存储库或组织中的所有存储库启用项目相关的活动。
{%- ifversion ghec or ghes or ghae %} | `repository_secret_scanning`  | 包含与机密扫描相关的存储库级活动。 有关详细信息，请参阅“[关于机密扫描](/github/administering-a-repository/about-secret-scanning)”。
{%- endif %} {%- ifversion secret-scanning-audit-log-custom-patterns %} | `repository_secret_scanning_custom_pattern` | 包含与存储库中的机密扫描自定义模式相关的活动。 有关详细信息，请参阅“[为机密扫描定义自定义模式](/code-security/secret-scanning/defining-custom-patterns-for-secret-scanning)”。 {% endif %}{% ifversion secret-scanning-audit-log-custom-patterns %} | `repository_secret_scanning_push_protection` | 包含与存储库中的机密扫描自定义模式相关的活动。 有关详细信息，请参阅“[使用机密扫描保护推送](/code-security/secret-scanning/protecting-pushes-with-secret-scanning)”。
{%- endif %} {%- ifversion fpt or ghec %} | `repository_visibility_change` | 包含与允许组织成员更改组织的存储库可见性相关的活动。
{%- endif %} | `repository_vulnerability_alert`   | 包含与 [{% data variables.product.prodname_dependabot_alerts %}](/code-security/dependabot/dependabot-alerts/about-dependabot-alerts) 相关的活动。
{%- ifversion fpt or ghec %} | `repository_vulnerability_alerts` | 包含 {% data variables.product.prodname_dependabot_alerts %} 的存储库级配置活动。
| `required_status_check` | 包含与受保护分支所需的状态检查相关的活动。
{%- endif %} {%- ifversion ghec or ghes %} | `restrict_notification_delivery` | 包含与将电子邮件通知限制为企业的已批准或已验证域相关的活动。
{%- endif %} {%- ifversion custom-repository-roles %} | `role` | 包含与[自定义存储库角色](/organizations/managing-peoples-access-to-your-organization-with-roles/managing-custom-repository-roles-for-an-organization)相关的活动。
{%- endif %} {%- ifversion ghec or ghes or ghae %} | `secret_scanning`   | 包含现有存储库中机密扫描的组织级配置活动。 有关详细信息，请参阅“[关于机密扫描](/github/administering-a-repository/about-secret-scanning)”。
| `secret_scanning_new_repos` | 包含组织新建存储库中机密扫描的组织级配置活动。
{%- endif %} {%- ifversion ghec or ghes or ghae %} | `security_key` | 包含与安全密钥注册和删除相关的活动。
{%- endif %} {%- ifversion fpt or ghec %} | `sponsors`  | 包含与赞助按钮相关的事件（请参阅“[在存储库中显示赞助按钮](/articles/displaying-a-sponsor-button-in-your-repository)”）。
{%- endif %} {%- ifversion ghec or ghes or ghae %} | `ssh_certificate_authority` | 包含与组织或企业中的 SSH 证书颁发机构相关的活动。
| `ssh_certificate_requirement` | 包含与要求成员使用 SSH 证书访问组织资源相关的活动。
{%- endif %}{% ifversion sso-redirect %} | `sso_redirect` | 包含与自动重定向用户以进行登录相关的活动（请参阅“[为企业中的安全设置实施策略](/admin/policies/enforcing-policies-for-your-enterprise/enforcing-policies-for-security-settings-in-your-enterprise#managing-sso-for-unauthenticated-users)”）。{% endif %} | `staff` | 包含与执行操作的站点管理员相关的活动。
| `team` | 包含与组织中的团队相关的活动。
| `team_discussions` | 包含与管理组织的团队讨论相关的活动。
{%- ifversion ghec %} | `team_sync_tenant` | 包含与企业或组织的 IdP 进行团队同步相关的活动。
{%- endif %} {%- ifversion fpt or ghes %} | `two_factor_authentication` | 包含与双因素身份验证相关的活动。
{%- endif %} | `user` | 包含与企业或组织中的用户相关的活动。
{%- ifversion ghec or ghes %} | `user_license` | 包含与占用企业许可席位并身为企业成员的用户相关的活动。
{%- endif %} | `workflows`   | 包含与 {% data variables.product.prodname_actions %} 工作流相关的活动。
