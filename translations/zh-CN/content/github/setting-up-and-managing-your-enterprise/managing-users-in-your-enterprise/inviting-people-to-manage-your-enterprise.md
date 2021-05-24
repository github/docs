---
title: 邀请人员管理企业
intro: 您可以邀请人员成为企业帐户的企业所有者或帐单管理员。 也可以删除不再需要访问企业帐户的企业所有者或帐单管理员。
product: '{% data reusables.gated-features.enterprise-accounts %}'
redirect_from:
  - /github/setting-up-and-managing-your-enterprise-account/inviting-people-to-manage-your-enterprise-account
  - /articles/inviting-people-to-collaborate-in-your-business-account/
  - /articles/inviting-people-to-manage-your-enterprise-account
  - /github/setting-up-and-managing-your-enterprise/inviting-people-to-manage-your-enterprise
versions:
  free-pro-team: '*'
  enterprise-server: '*'
topics:
  - Enterprise
---
### 关于邀请人员管理企业帐户

{% data reusables.enterprise-accounts.enterprise-administrators %} 更多信息请参阅“[企业中的角色](/github/setting-up-and-managing-your-enterprise/roles-in-an-enterprise)”。

{% tip %}

**提示：**有关管理企业帐户拥有的组织中用户的更多信息，请参阅“[管理组织中的成员资格](/articles/managing-membership-in-your-organization)”和“[通过角色管理人们对组织的访问](/articles/managing-peoples-access-to-your-organization-with-roles)”。

{% endtip %}

### 邀请企业帐户的企业管理员

只有企业所有者才可邀请人员成为企业管理员。

在邀请别人加入企业帐户后，他们必须接受电子邮件邀请，然后才可访问企业帐户。

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.people-tab %}
3. 在左侧边栏中，单击 **Administrators（管理员）**。 ![左侧边栏中的管理员选项卡](/assets/images/help/business-accounts/administrators-tab.png)
4. 在管理员列表上方，单击 **Invite admin（邀请管理员）**。 ![企业所有者列表上方的邀请管理员按钮](/assets/images/help/business-accounts/invite-admin-button.png)
5. 输入您要邀请其成为企业管理员的人员的用户名、全名或电子邮件地址，然后从结果中选择适当的人员。 ![包含个人用户名、全名或电子邮件地址输入字段的模态框，以及邀请按钮](/assets/images/help/business-accounts/invite-admins-modal-button.png)
6. 选择 **Owner（所有者）**或 **Billing Manager（帐单管理员）**。 ![角色选择模态框](/assets/images/help/business-accounts/invite-admins-roles.png)
7. 单击 **Send Invitation（发送邀请）**。 ![发送邀请按钮](/assets/images/help/business-accounts/invite-admins-send-invitation.png)

### 从企业帐户删除企业管理员

只有企业所有者才可从企业帐户删除其他企业管理员。

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.people-tab %}
3. 在您要删除的人员用户名旁边，单击 {% octicon "gear" aria-label="The Settings gear" %}，然后单击 **Remove owner（删除所有者）**或 **Remove billing manager（删除帐单管理员）**。 ![包含删除企业管理员的菜单选项的设置齿轮](/assets/images/help/business-accounts/remove-admin.png)
