---
title: 创建组织
redirect_from:
  - /enterprise/admin/articles/creating-organizations/
  - /enterprise/admin/user-management/creating-organizations
intro: 您可以选择设置新组织，或者将现有个人帐户转换为组织。
versions:
  enterprise-server: '*'
---

组织是拥有仓库的用户帐户的集合。 组织具有一个或多个所有者，他们拥有所属组织的管理权限。 组织还可用于命名空间，例如 `http(s)://[hostname]/[organization name]/` 可将您重定向到 {% data variables.product.prodname_ghe_server %} 上的组织资料，而 `http(s)://[hostname]/[organization name]/[repository name]/` 则可将您重定向到仓库资料。

在您创建组织时，它不会有任何关联的仓库。 [具有所有者角色的组织成员可以随时添加新仓库](/enterprise/{{ currentVersion }}/user/articles/permission-levels-for-an-organization)或转让现有仓库。 更多信息请参阅“[转让仓库](/enterprise/{{ currentVersion }}/user/articles/transferring-a-repository)”。

{% data reusables.user_settings.access_settings %}
{% data reusables.user_settings.organizations %}
3. 在“Organizations”部分下，单击 **New organization**。 ![新组织按钮](/assets/images/help/settings/new-org-button.png)
4. 在“Organization name”下，输入组织的名称。 ![新组织名称](/assets/images/help/organizations/new-org-name.png)
5. 在“Contact email”下，输入可以与之联系来获取更多组织信息的人员的电子邮件地址。
6. 单击 **Create organization（创建组织）**。
