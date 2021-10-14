---
title: 邀请人员管理企业
intro: 'You can {% ifversion fpt %}invite people to become enterprise owners or billing managers for{% elsif ghes %}add enterprise owners to{% endif %} your enterprise account. You can also remove enterprise owners {% ifversion fpt %}or billing managers {% endif %}who no longer need access to the enterprise account.'
product: '{% data reusables.gated-features.enterprise-accounts %}'
permissions: 'Enterprise owners can {% ifversion fpt %}invite other people to become{% elsif ghes %}add{% endif %} additional enterprise administrators.'
redirect_from:
  - /github/setting-up-and-managing-your-enterprise-account/inviting-people-to-manage-your-enterprise-account
  - /articles/inviting-people-to-collaborate-in-your-business-account/
  - /articles/inviting-people-to-manage-your-enterprise-account
  - /github/setting-up-and-managing-your-enterprise/inviting-people-to-manage-your-enterprise
versions:
  fpt: '*'
  ghes: '*'
topics:
  - Administrator
  - Enterprise
  - User account
shortTitle: 邀请人员进行管理
---

## About users who can manage your enterprise account

{% data reusables.enterprise-accounts.enterprise-administrators %} For more information, see "[Roles in an enterprise](/github/setting-up-and-managing-your-enterprise/roles-in-an-enterprise)."

{% ifversion ghes %}

If you want to manage owners and billing managers for an enterprise account on {% data variables.product.prodname_dotcom_the_website %}, see "[Inviting people to manage your enterprise](/free-pro-team@latest/github/setting-up-and-managing-your-enterprise/managing-users-in-your-enterprise/inviting-people-to-manage-your-enterprise)" in the {% data variables.product.prodname_dotcom_the_website %} documentation.

{% endif %}

{% ifversion fpt %}

If your enterprise uses {% data variables.product.prodname_emus %}, enterprise owners can only be added or removed through your identity provider. For more information, see "[About {% data variables.product.prodname_emus %}](/github/setting-up-and-managing-your-enterprise/managing-your-enterprise-users-with-your-identity-provider/about-enterprise-managed-users)."

{% endif %}

{% tip %}

**提示：**有关管理企业帐户拥有的组织中用户的更多信息，请参阅“[管理组织中的成员资格](/articles/managing-membership-in-your-organization)”和“[通过角色管理人们对组织的访问](/articles/managing-peoples-access-to-your-organization-with-roles)”。

{% endtip %}

## {% ifversion fpt %}Inviting{% elsif ghes %}Adding{% endif %} an enterprise administrator to your enterprise account

{% ifversion fpt %}After you invite someone to join the enterprise account, they must accept the emailed invitation before they can access the enterprise account.{% endif %}

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.people-tab %}
1. 在左侧边栏中，单击 **Administrators（管理员）**。 ![左侧边栏中的管理员选项卡](/assets/images/help/business-accounts/administrators-tab.png)
1. Above the list of administrators, click {% ifversion fpt %}**Invite admin**{% elsif ghes %}**Add owner**{% endif %}.
  {% ifversion fpt %}
  !["Invite admin" button above the list of enterprise owners](/assets/images/help/business-accounts/invite-admin-button.png)
  {% elsif ghes %}
  !["Add owner" button above the list of enterprise owners](/assets/images/help/business-accounts/add-owner-button.png)
  {% endif %}
1. 输入您要邀请其成为企业管理员的人员的用户名、全名或电子邮件地址，然后从结果中选择适当的人员。 ![Modal box with field to type a person's username, full name, or email address, and Invite button](/assets/images/help/business-accounts/invite-admins-modal-button.png){% ifversion fpt %}
1. 选择 **Owner（所有者）**或 **Billing Manager（帐单管理员）**。 ![角色选择模态框](/assets/images/help/business-accounts/invite-admins-roles.png)
1. 单击 **Send Invitation（发送邀请）**。 ![Send invitation button](/assets/images/help/business-accounts/invite-admins-send-invitation.png){% endif %}{% ifversion ghes %}
1. 单击 **Add（添加）**。 !["Add" button](/assets/images/help/business-accounts/add-administrator-add-button.png){% endif %}

## 从企业帐户删除企业管理员

只有企业所有者才可从企业帐户删除其他企业管理员。

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.people-tab %}
1. Next to the username of the person you'd like to remove, click {% octicon "gear" aria-label="The Settings gear" %}, then click **Remove owner**{% ifversion fpt %} or **Remove billing manager**{% endif %}.
  {% ifversion fpt %}
  ![包含删除企业管理员的菜单选项的设置齿轮](/assets/images/help/business-accounts/remove-admin.png)
  {% elsif ghes %}
  ![包含删除企业管理员的菜单选项的设置齿轮](/assets/images/help/business-accounts/ghes-remove-owner.png)
  {% endif %}
1. Read the confirmation, then click **Remove owner**{% ifversion fpt %} or **Remove billing manager**{% endif %}.
