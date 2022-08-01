---
title: 邀请人员管理企业
intro: '您可以 {% ifversion ghec %}邀请人们成为企业所有者或帐单管理员，以{% elsif ghes %}添加企业所有者到{% endif %}企业帐户。 也可以删除不再需要访问企业帐户的企业所有者{% ifversion ghec %}或帐单管理员{% endif %}。'
permissions: 'Enterprise owners can {% ifversion ghec %}invite other people to become{% elsif ghes %}add{% endif %} additional enterprise administrators.'
redirect_from:
  - /github/setting-up-and-managing-your-enterprise/managing-users-in-your-enterprise/inviting-people-to-manage-your-enterprise
  - /github/setting-up-and-managing-your-enterprise-account/inviting-people-to-manage-your-enterprise-account
  - /articles/inviting-people-to-collaborate-in-your-business-account
  - /articles/inviting-people-to-manage-your-enterprise-account
  - /github/setting-up-and-managing-your-enterprise/inviting-people-to-manage-your-enterprise
versions:
  ghec: '*'
  ghes: '*'
type: how_to
topics:
  - Administrator
  - Enterprise
  - User account
shortTitle: 邀请人员进行管理
---

## 关于可以管理企业帐户的用户

{% data reusables.enterprise-accounts.enterprise-administrators %} 更多信息请参阅“[企业中的角色](/admin/user-management/managing-users-in-your-enterprise/roles-in-an-enterprise)”。

{% ifversion ghes %}

如果您想在 {% data variables.product.prodname_dotcom_the_website %} 上管理企业帐户的所有者和帐单管理员，请参阅 {% data variables.product.prodname_ghe_cloud %} 文档中的“[邀请人们管理您的企业](/enterprise-cloud@latest/admin/user-management/managing-users-in-your-enterprise/inviting-people-to-manage-your-enterprise)”。

{% endif %}

{% ifversion ghec %}

如果您的企业使用 {% data variables.product.prodname_emus %}，企业所有者只能通过您的身份提供商添加或删除。 更多信息请参阅“[关于 {% data variables.product.prodname_emus %}](/enterprise-cloud@latest/admin/authentication/managing-your-enterprise-users-with-your-identity-provider/about-enterprise-managed-users)”。

{% endif %}

{% tip %}

**提示：**有关管理企业帐户拥有的组织中用户的更多信息，请参阅“[管理组织中的成员资格](/articles/managing-membership-in-your-organization)”和“[通过角色管理人们对组织的访问](/articles/managing-peoples-access-to-your-organization-with-roles)”。

{% endtip %}

## {% ifversion ghec %}邀请{% elsif ghes %}添加{% endif %} 企业管理员到您的企业帐户

{% ifversion ghec %}在邀请别人加入企业帐户后，他们必须接受电子邮件邀请，然后才可访问企业帐户。 待处理的邀请将在 7 天后过期。{% endif %}

{% ifversion enterprise-membership-view-improvements %}
您可以查看所有待处理的邀请，以成为企业帐户的管理员。 更多信息请参阅“[查看企业中的人员](/admin/user-management/managing-users-in-your-enterprise/viewing-people-in-your-enterprise#viewing-pending-invitations)”。
{% endif %}

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.people-tab %}
{% data reusables.enterprise-accounts.administrators-tab %}
1. 在管理员列表上方，单击 {% ifversion ghec %}**邀请管理员**{% elsif ghes %}**添加所有者**{% endif %}。
  {% ifversion ghec %}
  ![企业所有者列表上方的"邀请管理员"按钮](/assets/images/help/business-accounts/invite-admin-button.png)
  {% elsif ghes %}
  ![企业所有者列表上方的"添加所有者"按钮](/assets/images/help/business-accounts/add-owner-button.png)
  {% endif %}
1. 输入您要邀请其成为企业管理员的人员的用户名、全名或电子邮件地址，然后从结果中选择适当的人员。 ![Modal box with field to type a person's username, full name, or email address, and Invite button](/assets/images/help/business-accounts/invite-admins-modal-button.png){% ifversion ghec %}
1. 选择 **Owner（所有者）**或 **Billing Manager（帐单管理员）**。 ![角色选择模态框](/assets/images/help/business-accounts/invite-admins-roles.png)
1. 单击 **Send Invitation（发送邀请）**。 ![Send invitation button](/assets/images/help/business-accounts/invite-admins-send-invitation.png){% endif %}{% ifversion ghes %}
1. 单击 **Add（添加）**。 !["Add" button](/assets/images/help/business-accounts/add-administrator-add-button.png){% endif %}

## 从企业帐户删除企业管理员

只有企业所有者才可从企业帐户删除其他企业管理员。

{% ifversion ghec %}
如果要删除的管理员是企业拥有的任何组织的成员，则可以选择 **Convert to member（转换为成员）**，这将删除其管理角色但保留其组织成员身份，或选择 **Remove from enterprise（从企业中删除）**，这将删除其管理角色和组织成员身份。
{% endif %}

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.people-tab %}
{% data reusables.enterprise-accounts.administrators-tab %}
1. 在您要删除的人员用户名旁边，单击 {% octicon "gear" aria-label="The Settings gear" %}，然后单击 {% ifversion ghes %}**Remove owner（删除所有者）**{% elsif ghec %}**Convert to member（转换为成员）**或 **Remove from enterprise（从企业中删除）**。{% endif %}。
  {% ifversion ghec %}
  ![包含删除企业管理员的菜单选项的设置齿轮](/assets/images/help/business-accounts/remove-admin.png)
  {% elsif ghes %}
  ![包含删除企业管理员的菜单选项的设置齿轮](/assets/images/help/business-accounts/ghes-remove-owner.png)
  {% endif %}
1. 阅读确认信息，然后单击 {% ifversion ghes %}**Remove owner（删除所有者）**{% elsif ghec %}**Yes, convert USERNAME to member（是，将 [用户名] 转换为成员）**{% endif %}。
