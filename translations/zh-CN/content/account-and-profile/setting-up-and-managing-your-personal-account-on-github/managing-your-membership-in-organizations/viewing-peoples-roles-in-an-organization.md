---
title: 查看组织中人员的角色
intro: '您可以查看组织中人员的列表，并按其角色进行筛选。 有关组织角色的详细信息，请参阅“[组织中的角色](/organizations/managing-peoples-access-to-your-organization-with-roles/roles-in-an-organization)”。'
permissions: Organization members can see people's roles in the organization.
redirect_from:
  - /articles/viewing-people-s-roles-in-an-organization
  - /articles/viewing-peoples-roles-in-an-organization
  - /github/setting-up-and-managing-your-github-user-account/viewing-peoples-roles-in-an-organization
  - /github/setting-up-and-managing-your-github-user-account/managing-your-membership-in-organizations/viewing-peoples-roles-in-an-organization
  - /account-and-profile/setting-up-and-managing-your-github-user-account/managing-your-membership-in-organizations/viewing-peoples-roles-in-an-organization
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Accounts
shortTitle: 查看组织中的人员
---

## 查看组织角色

{% data reusables.profile.access_org %}
{% data reusables.user-settings.access_org %}
{% data reusables.organizations.people %}
4. 您将看到组织中人员的列表。 要按角色过滤列表，请单击 **Role（角色）**并选择您搜索的角色。 ![单击角色](/assets/images/help/organizations/view-list-of-people-in-org-by-role.png)

{% ifversion fpt %}

如果您的组织使用 {% data variables.product.prodname_ghe_cloud %}，您还可以查看管理所有企业组织的计费设置和策略的企业所有者。 更多信息请参阅 [{% data variables.product.prodname_ghe_cloud %} 文档](/enterprise-cloud@latest/account-and-profile/setting-up-and-managing-your-github-user-account/managing-your-membership-in-organizations/viewing-peoples-roles-in-an-organization#view-enterprise-owners-and-their-roles-in-an-organization)。

{% endif %}

{% ifversion enterprise-owners-visible-for-org-members %}
## 查看企业所有者及其在组织中的角色

如果您的组织由企业帐户管理，则可以查看管理企业所有组织的帐单设置和策略的企业所有者。 有关企业帐户的详细信息，请参阅“[{% data variables.product.prodname_dotcom %} 帐户类型](/get-started/learning-about-github/types-of-github-accounts)”。

您还可以查看企业所有者是否在组织中具有特定角色。 企业所有者也可以是组织成员、任何其他组织角色或与组织无关。

{% note %}

**注意：**如果您是组织所有者，还可以邀请企业所有者在组织中担任角色。 如果企业所有者接受邀请，则会从企业的可用许可证中使用组织中的席位或许可证。 有关许可的工作原理的详细信息，请参阅“[企业中的角色](/admin/user-management/managing-users-in-your-enterprise/roles-in-an-enterprise#enterprise-owner)”。

{% endnote %}

| **企业角色** | **组织角色**    | **组织访问或影响**                    |
| -------- | ----------- | ------------------------------ |
| 企业所有者    | 非附属或无官方组织角色 | 无法访问组织内容或存储库，但可管理影响组织的企业设置和策略。 |
| 企业所有者    | 组织所有者       | 能够配置组织设置并通过团队等管理对组织资源的访问。      |
| 企业所有者    | 组织成员        | 能够访问组织资源和内容（如存储库），而无需访问组织的设置。  |

要查看组织中的所有角色，请参阅“[组织中的角色](/organizations/managing-peoples-access-to-your-organization-with-roles/roles-in-an-organization)”。 {% ifversion custom-repository-roles %} 组织成员还可以具有特定存储库的自定义角色。 更多信息请参阅“[管理组织的自定义仓库角色](/organizations/managing-peoples-access-to-your-organization-with-roles/managing-custom-repository-roles-for-an-organization)”。{% endif %}

有关企业所有者角色的更多信息，请参阅“[企业中的角色](/admin/user-management/managing-users-in-your-enterprise/roles-in-an-enterprise#enterprise-owner)”。

{% data reusables.profile.access_org %}
{% data reusables.user-settings.access_org %}
{% data reusables.organizations.people %}
4. 在左侧边栏的“Enterprise permissions（企业权限）”下，单击 **Enterprise owners（企业所有者）**。 ![侧边栏菜单中 "企业所有者" 选项的屏幕截图](/assets/images/help/organizations/enterprise-owners-sidebar.png)
5. 查看企业的企业所有者列表。 如果企业所有者也是您组织的成员，则您可以看到他们在组织中的角色。

  ![企业所有者列表及其在组织中的角色的屏幕截图](/assets/images/help/organizations/enterprise-owners-list-on-org-page.png)

{% endif %}
