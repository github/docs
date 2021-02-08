---
title: 将团队与身份提供程序组同步
intro: '您可以将 {% data variables.product.prodname_dotcom %} 团队与身份提供程序 (IdP) 组同步，以自动添加和删除团队成员。'
product: '{% data reusables.gated-features.team-synchronization %}'
permissions: '组织所有者和团队维护员可将 {% data variables.product.prodname_dotcom %} 团队与 IdP 组同步。'
versions:
  free-pro-team: '*'
---

{% data reusables.gated-features.okta-team-sync %}

### 关于团队同步

{% data reusables.identity-and-permissions.about-team-sync %}

您最多可以将五个 IdP 组连接到 {% data variables.product.prodname_dotcom %} 团队。 IdP 组可以不受限制地分配给多个 {% data variables.product.prodname_dotcom %} 团队。

团队同步不支持成员数超过 5000 的 IdP 组。

{% data variables.product.prodname_dotcom %} 团队连接到 IdP 组后，您的 IdP 管理员必须通过身份提供程序进行团队成员资格更改。 您无法在 {% data variables.product.product_name %} 上或使用 API 管理团队成员资格。

通过 IdP 进行的所有团队成员资格更改都将在 {% data variables.product.product_name %} 审核日志中显示为团队同步自动程序所进行的更改。 您的 IdP 会将团队成员数据发送至 {% data variables.product.prodname_dotcom %}，每小时一次。 将团队连接到 IdP 组可能会删除一些团队成员。 更多信息请参阅“[已同步团队成员的要求](#requirements-for-members-of-synchronized-teams)”。

父团队无法与 IdP 组同步。 如果要连接到 IdP 组的团队是父团队，我们建议您创建一个新团队或删除使团队成为父团队的嵌套关系。 更多信息请参阅“[关于团队](/articles/about-teams#nested-teams)”、“[创建团队](/github/setting-up-and-managing-organizations-and-teams/creating-a-team)”和“[在组织的层次结构中移动团队](/articles/moving-a-team-in-your-organizations-hierarchy)”。

要管理 {% data variables.product.prodname_dotcom %} 团队（包括连接到 IdP 组的团队）的仓库访问权限，您必须使用 {% data variables.product.product_name %} 进行更改。 更多信息请参阅“[关于团队](/articles/about-teams)”和“[管理团队对组织仓库的访问](/articles/managing-team-access-to-an-organization-repository)”。

您还可以使用 API 管理团队同步。 更多信息请参阅“[团队同步](/rest/reference/teams#team-sync)”。

### 已同步团队成员的要求

将团队连接到 IdP 组后，团队同步将 IdP 组的每个成员添加到 {% data variables.product.prodname_dotcom %} 上的相应团队，但需满足以下条件：
- 此人是 {% data variables.product.prodname_dotcom %} 上的组织的成员。
- 此人已使用 {% data variables.product.prodname_dotcom %} 上的用户帐户登录，并且至少一次通过 SAML 单点登录向组织或企业帐户验证。
- 此人的 SSO 身份是 IdP 组的成员。

不符合这些条件的现有团队或组成员将被从 {% data variables.product.prodname_dotcom %} 团队中自动删除，并失去对仓库的访问权限。 撤销用户关联的身份也会将用户从映射到 IdP 组的任何团队中删除。 更多信息请参阅“[查看和管理成员对组织的 SAML 访问](/github/setting-up-and-managing-organizations-and-teams/viewing-and-managing-a-members-saml-access-to-your-organization#viewing-and-revoking-a-linked-identity)”和“[查看和管理用户对企业的 SAML 访问](/github/setting-up-and-managing-your-enterprise/viewing-and-managing-a-users-saml-access-to-your-enterprise#viewing-and-revoking-a-linked-identity)”。

删除后的团队成员在使用 SSO 向组织或企业帐户进行身份验证后可以自动添加回团队，并移动到已连接的 IdP 组。

为避免无意中删除团队成员，建议在组织或企业帐户中强制实施 SAML SSO，创建新团队以同步成员资格数据，并在同步现有团队之前检查 IdP 组成员资格。 更多信息请参阅“[对组织实施 SAML 单点登录](/articles/enforcing-saml-single-sign-on-for-your-organization)”和“[对企业帐户中的组织启用 SAML 单点登录](/github/setting-up-and-managing-your-enterprise/enabling-saml-single-sign-on-for-organizations-in-your-enterprise-account)”。

如果您的组织由企业帐户拥有，则对企业帐户启用团队同步将覆盖组织级的团队同步设置。 更多信息请参阅“[管理企业帐户中组织的团队同步](/github/setting-up-and-managing-your-enterprise/managing-team-synchronization-for-organizations-in-your-enterprise-account)”。

### 基本要求

在将团队连接到身份提供程序组之前，组织或企业所有者必须为组织或企业帐户启用团队同步。 更多信息请参阅“[管理组织的团队同步](/github/setting-up-and-managing-organizations-and-teams/managing-team-synchronization-for-your-organization)”和“[管理企业帐户中组织的团队同步](/github/setting-up-and-managing-your-enterprise/managing-team-synchronization-for-organizations-in-your-enterprise-account)”。

为避免无意中删除团队成员，请访问 IdP 的管理门户，并确认每个当前团队成员也位于要连接到此团队的 IdP 组中。 如果您没有身份提供程序的这一访问权限，在可以联系 IdP 管理员。

您必须使用 SAML SSO 进行身份验证。 更多信息请参阅“[使用 SAML 单点登录进行身份验证](/articles/authenticating-with-saml-single-sign-on)”。

### 将 IdP 组连接到团队

{% data reusables.profile.access_profile %}
{% data reusables.profile.access_org %}
{% data reusables.organizations.specific_team %}
{% data reusables.organizations.team_settings %}
5. 在“Identity Provider Groups（身份提供程序组）”下，使用下拉菜单，选择最多 5 个身份提供程序组。 ![用于选择身份提供程序组的下拉菜单](/assets/images/help/teams/choose-an-idp-group.png)
6. 单击 **Save changes（保存更改）**。

### 断开 IdP 组与团队的连接

如果您断开 IdP 组与 {% data variables.product.prodname_dotcom %} 团队的连接，则通过 IdP 组分配给 {% data variables.product.prodname_dotcom %} 团队的团队成员将从团队中删除。

{% data reusables.profile.access_profile %}
{% data reusables.profile.access_org %}
{% data reusables.organizations.specific_team %}
{% data reusables.organizations.team_settings %}
6. 在“Identity Provider Groups（身份提供程序组）”下，单击要断开连接的 IdP 组右侧的 {% octicon "x" aria-label="X symbol" %}。 ![从 GitHub 团队取消选择已连接的 IdP 组](/assets/images/help/teams/unselect-idp-group.png)
7. 单击 **Save changes（保存更改）**。
