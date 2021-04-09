---
title: 将团队与身份提供程序组同步
intro: '您可以将 {% data variables.product.product_name %} 团队与身份提供程序 (IdP) 组同步，以自动添加和删除团队成员。'
product: '{% data reusables.gated-features.team-synchronization %}'
permissions: '组织所有者和团队维护员可将 {% data variables.product.prodname_dotcom %} 团队与 IdP 组同步。'
versions:
  free-pro-team: '*'
  github-ae: '*'
topics:
  - 组织
  - 团队
---

{% data reusables.gated-features.okta-team-sync %}

### 关于团队同步

{% data reusables.identity-and-permissions.about-team-sync %}

{% if currentversion == "free proteam@latest" %}您可以将最多 5 个 IdP 组连接到 {% data variables.product.product_name %} 团队。{% elsif currentVersion == "github-ae@latest" %}您可以将 {% data variables.product.product_name %} 上的团队连接到一个 IdP 组。 组中的所有用户将自动添加到团队中，并作为成员添加到父组织。 当您断开组与团队的连接时，通过团队成员资格成为组织成员的用户将从组织中删除。{% endif %} 您可以将 IdP 组分配给多个 {% data variables.product.product_name %} 团队。

{% if currentversion == "free-proteam@latest" %}团队同步不支持超过 5000 个成员的 IdP 组。{% endif %}

{% data variables.product.prodname_dotcom %} 团队连接到 IdP 组后，您的 IdP 管理员必须通过身份提供程序进行团队成员资格更改。 您不能在 {% data variables.product.product_name %} 上{% if currentVersion == "free-pro-team@latest" %}或使用 API{% endif %} 管理团队成员资格。

{% if currentVersion == "free-pro-team@latest" %}
通过 IdP 进行的所有团队成员资格更改将在
{% data variables.product.product_name %} 的审核日志中显示为团队同步机器人所做的更改。 您的 IdP 会将团队成员数据发送至 {% data variables.product.prodname_dotcom %}，每小时一次。
将团队连接到 IdP 组可能会删除一些团队成员。 更多信息请参阅“[已同步团队成员的要求](#requirements-for-members-of-synchronized-teams)”。
{% endif %}

{% if currentVersion == "github-ae@latest" %}
当组成员身份在您的 IdP 上发生变化时，IdP 会发送一个 SCIM 请求，其中包括
根据 IdP 确定的计划对 {% data variables.product.product_name %} 所做的更改。 更改 {% data variables.product.prodname_dotcom %} 团队或组织成员资格的任何请求都将在审核日志中注册为用于配置用户预配的帐户所做的更改。 有关此帐户的更多信息，请参阅“[配置企业的用户预配](/admin/authentication/configuring-user-provisioning-for-your-enterprise)”。 有关 SCIM 请求计划的更多信息，请参阅 Microsoft 文档中的“[检查用户预配状态](https://docs.microsoft.com/en-us/azure/active-directory/app-provisioning/application-provisioning-when-will-provisioning-finish-specific-user)”。
{% endif %}

父团队无法与 IdP 组同步。 如果要连接到 IdP 组的团队是父团队，我们建议您创建一个新团队或删除使团队成为父团队的嵌套关系。 更多信息请参阅“[关于团队](/articles/about-teams#nested-teams)”、“[创建团队](/github/setting-up-and-managing-organizations-and-teams/creating-a-team)”和“[在组织的层次结构中移动团队](/articles/moving-a-team-in-your-organizations-hierarchy)”。

要管理 {% data variables.product.prodname_dotcom %} 团队（包括连接到 IdP 组的团队）的仓库访问权限，您必须使用 {% data variables.product.product_name %} 进行更改。 更多信息请参阅“[关于团队](/articles/about-teams)”和“[管理团队对组织仓库的访问](/articles/managing-team-access-to-an-organization-repository)”。

{% if currentversion == "free proteam@latest" %}您也可以使用 API 管理团队同步。 更多信息请参阅“[团队同步](/rest/reference/teams#team-sync)”。{% endif %}

{% if currentVersion == "free-pro-team@latest" %}
### 已同步团队成员的要求

将团队连接到 IdP 组后，团队同步将 IdP 组的每个成员添加到 {% data variables.product.product_name %} 上的相应团队，但需满足以下条件：
- 此人是 {% data variables.product.product_name %} 上的组织的成员。
- 此人已使用 {% data variables.product.product_name %} 上的用户帐户登录，并且至少一次通过 SAML 单点登录向组织或企业帐户验证。
- 此人的 SSO 身份是 IdP 组的成员。

不符合这些条件的现有团队或组成员将被从 {% data variables.product.product_name %} 团队中自动删除，并失去对仓库的访问权限。 撤销用户关联的身份也会将用户从映射到 IdP 组的任何团队中删除。 更多信息请参阅“[查看和管理成员对组织的 SAML 访问](/github/setting-up-and-managing-organizations-and-teams/viewing-and-managing-a-members-saml-access-to-your-organization#viewing-and-revoking-a-linked-identity)”和“[查看和管理用户对企业的 SAML 访问](/github/setting-up-and-managing-your-enterprise/viewing-and-managing-a-users-saml-access-to-your-enterprise#viewing-and-revoking-a-linked-identity)”。

删除后的团队成员在使用 SSO 向组织或企业帐户进行身份验证后可以自动添加回团队，并移动到已连接的 IdP 组。

为避免无意中删除团队成员，建议在组织或企业帐户中强制实施 SAML SSO，创建新团队以同步成员资格数据，并在同步现有团队之前检查 IdP 组成员资格。 更多信息请参阅“[对组织实施 SAML 单点登录](/articles/enforcing-saml-single-sign-on-for-your-organization)”和“[对企业帐户中的组织启用 SAML 单点登录](/github/setting-up-and-managing-your-enterprise/enabling-saml-single-sign-on-for-organizations-in-your-enterprise-account)”。

如果您的组织由企业帐户拥有，则对企业帐户启用团队同步将覆盖组织级的团队同步设置。 更多信息请参阅“[管理企业帐户中组织的团队同步](/github/setting-up-and-managing-your-enterprise/managing-team-synchronization-for-organizations-in-your-enterprise-account)”。

{% endif %}

### 基本要求

{% if currentVersion == "free-pro-team@latest" %}
在连接
{% data variables.product.product_name %} 团队与身份提供程序组之前，组织或企业所有者必须为组织或企业帐户启用团队同步。 更多信息请参阅“[管理组织的团队同步](/github/setting-up-and-managing-organizations-and-teams/managing-team-synchronization-for-your-organization)”和“[管理企业帐户中组织的团队同步](/github/setting-up-and-managing-your-enterprise/managing-team-synchronization-for-organizations-in-your-enterprise-account)”。

为避免无意中删除团队成员，请访问 IdP 的管理门户，并确认每个当前团队成员也位于要连接到此团队的 IdP 组中。 如果您没有身份提供程序的这一访问权限，在可以联系 IdP 管理员。

您必须使用 SAML SSO 进行身份验证。 更多信息请参阅“[使用 SAML 单点登录进行身份验证](/articles/authenticating-with-saml-single-sign-on)”。

{% elsif currentVersion == "github-ae@latest" %}
在连接
{% data variables.product.product_name %} 团队与 IdP 组时，您必须先使用支持的跨域身份管理系统(SCIM) 配置 {% data variables.product.product_location %} 的用户预配。 更多信息请参阅“[配置企业的用户预配](/admin/authentication/configuring-user-provisioning-for-your-enterprise)”。
在使用 SCIM 配置

{% data variables.product.product_name %} 的用户预配后，您可以将 {% data variables.product.product_name %} 应用程序分配到您想要在 {% data variables.product.product_name %} 上使用的每个 IdP 组。 更多信息请参阅 Microsoft 文档中的[配置 GitHub AE 的自动用户预配](https://docs.microsoft.com/en-us/azure/active-directory/saas-apps/github-ae-provisioning-tutorial#step-5-configure-automatic-user-provisioning-to-github-ae)。
{% endif %}

### 将 IdP 组连接到团队

将 IdP 组连接到 {% data variables.product.product_name %} 团队时，组中的所有用户都会自动添加到团队中。 {% if currentversion == "github-ae@latest" %}任何尚未成为父组织成员的用户也会添加到组织。{% endif %}

{% data reusables.profile.access_profile %}
{% data reusables.profile.access_org %}
{% data reusables.organizations.specific_team %}
{% data reusables.organizations.team_settings %}
{% if currentVersion == "free-pro-team@latest" %}
6. 在“Identity Provider Groups（身份提供程序组）”下，使用下拉菜单，选择最多 5 个身份提供程序组。 ![Drop-down menu to choose identity provider groups](/assets/images/help/teams/choose-an-idp-group.png){% elsif currentVersion == "github-ae@latest" %}
6. 在“Identity Provider Groups（身份提供程序组）”下，使用下拉菜单从列表中选择身份提供程序组。 ![Drop-down menu to choose identity provider group](/assets/images/enterprise/github-ae/teams/choose-an-idp-group.png){% endif %}
7. 单击 **Save changes（保存更改）**。

### 断开 IdP 组与团队的连接

如果您断开 IdP 组与 {% data variables.product.prodname_dotcom %} 团队的连接，则通过 IdP 组分配给 {% data variables.product.prodname_dotcom %} 团队的团队成员将从团队中删除。 {% if currentversion == "github-ae@latest" %} 任何只是因为团队连接而成为父组织成员的用户也会从组织中删除。{% endif %}

{% data reusables.profile.access_profile %}
{% data reusables.profile.access_org %}
{% data reusables.organizations.specific_team %}
{% data reusables.organizations.team_settings %}
{% if currentVersion == "free-pro-team@latest" %}
6. 在“Identity Provider Groups（身份提供程序组）”下，单击要断开连接的 IdP 组右侧的 {% octicon "x" aria-label="X symbol" %}。 ![Unselect a connected IdP group from the GitHub team](/assets/images/help/teams/unselect-idp-group.png){% elsif currentVersion == "github-ae@latest" %}
6. 在“Identity Provider Group（身份提供程序组）”下，单击要断开连接的 IdP 组右侧的 {% octicon "x" aria-label="X symbol" %}。 ![Unselect a connected IdP group from the GitHub team](/assets/images/enterprise/github-ae/teams/unselect-idp-group.png){% endif %}
7. 单击 **Save changes（保存更改）**。
