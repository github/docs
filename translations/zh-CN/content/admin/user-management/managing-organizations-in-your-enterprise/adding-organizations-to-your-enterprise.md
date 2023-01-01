---
title: 将组织添加到企业
intro: 可以通过创建新组织、邀请现有组织或从其他企业帐户转移组织来添加要在企业中进行管理的组织。
redirect_from:
  - /github/setting-up-and-managing-your-enterprise/managing-organizations-in-your-enterprise-account/adding-organizations-to-your-enterprise-account
  - /articles/adding-organizations-to-your-enterprise-account
  - /github/setting-up-and-managing-your-enterprise-account/adding-organizations-to-your-enterprise-account
  - /github/setting-up-and-managing-your-enterprise/adding-organizations-to-your-enterprise-account
versions:
  ghec: '*'
type: how_to
topics:
  - Administrator
  - Enterprise
  - Organizations
shortTitle: Add organizations
permissions: Enterprise owners can add organizations to an enterprise.
ms.openlocfilehash: 7b5627eb89e7e5356716a9cd2a9dfe03fd455270
ms.sourcegitcommit: e98b752895109965b32cb277610985da5799f8a1
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 11/01/2022
ms.locfileid: '148127617'
---
## 关于将组织添加到企业帐户

您的企业帐户可以拥有组织。 企业成员可以跨组织内的相关项目进行协作。 有关详细信息，请参阅“[关于组织](/organizations/collaborating-with-groups-in-organizations/about-organizations)”。

可将新组织添加到企业帐户。 如果不使用 {% data variables.product.prodname_emus %}，可将 {% data variables.location.product_location %} 上的现有组织添加到企业。 不能将 {% data variables.enterprise.prodname_emu_enterprise %} 中的现有组织添加到其他企业。

{% data reusables.enterprise.create-an-enterprise-account %} 有关详细信息，请参阅“[创建企业帐户](/admin/overview/creating-an-enterprise-account)”。

将现有组织添加到企业后，该组织的资源仍可供同一 URL 的成员访问，并且以下更改将会应用。

- 组织的成员将成为企业成员，并且 {% data variables.product.company_short %} 将按组织的使用情况向企业帐户收费。 必须确保企业帐户有足够的许可证来容纳任何新成员。 有关详细信息，请参阅“[关于企业的计费](/billing/managing-billing-for-your-github-account/about-billing-for-your-enterprise)”。
- 企业所有者可管理他们在组织内的角色。 有关详细信息，请参阅“[管理企业拥有的组织中的角色](/admin/user-management/managing-organizations-in-your-enterprise/managing-your-role-in-an-organization-owned-by-your-enterprise)”。
- 应用于企业的任何策略都将应用于组织。 有关详细信息，请参阅“[关于企业策略](/admin/policies/enforcing-policies-for-your-enterprise/about-enterprise-policies)”。
- 如果为企业帐户配置了 SAML SSO，则企业的 SAML 配置将应用于组织。 如果组织使用了 SAML SSO，则企业帐户的配置将替换组织的配置。 SCIM 不适用于企业帐户，因此将为组织禁用 SCIM。 有关详细信息，请参阅“[为企业配置 SAML 单一登录](/admin/identity-and-access-management/using-saml-for-enterprise-iam/configuring-saml-single-sign-on-for-your-enterprise)”和“[将 SAML 配置从组织切换到企业帐户](/admin/identity-and-access-management/using-saml-for-enterprise-iam/switching-your-saml-configuration-from-an-organization-to-an-enterprise-account)”。
- 如果为组织配置了 SAML SSO，则成员有权访问组织资源的现有 {% data variables.product.pat_generic %} 或 SSH 密钥将有权访问相同的资源。 要访问企业拥有的其他组织，成员必须授权 {% data variables.product.pat_generic %} 或密钥。 有关详细信息，请参阅“[授权用于 SAML 单一登录的{% data variables.product.pat_generic %}](/authentication/authenticating-with-saml-single-sign-on/authorizing-a-personal-access-token-for-use-with-saml-single-sign-on)”和“[授权用于 SAML 单一登录的 SSH 密钥](/authentication/authenticating-with-saml-single-sign-on/authorizing-an-ssh-key-for-use-with-saml-single-sign-on)”。
- 如果组织通过 {% data variables.product.prodname_github_connect %} 连接到 {% data variables.product.prodname_ghe_server %} 或 {% data variables.product.prodname_ghe_managed %}，则将组织添加到企业帐户不会更新连接。 {% data variables.product.prodname_github_connect %} 功能将不再适用于组织。 要继续使用 {% data variables.product.prodname_github_connect %}，必须禁用并重新启用该功能。 有关详细信息，请参阅以下文章。

  - {% data variables.product.prodname_ghe_server %} 文档中的“[管理  {% data variables.product.prodname_github_connect %}](/enterprise-server@latest/admin/configuration/configuring-github-connect/managing-github-connect)”
  - {% data variables.product.prodname_ghe_managed %} 文档中的“[管理 {% data variables.product.prodname_github_connect %}](/github-ae@latest/admin/configuration/configuring-github-connect/managing-github-connect)”
- 如果组织使用计费的 {% data variables.product.prodname_marketplace %} 应用，则组织可继续使用这些应用，但必须直接向供应商支付费用。 有关详细信息，请与应用供应商联系。
- 将从组织中删除任何优惠券。 若要重新应用优惠券，[请联系我们的销售团队](https://github.com/enterprise/contact)。

## 在企业帐户中创建组织

在企业帐户设置中创建的新组织包含在企业帐户的 {% data variables.product.prodname_ghe_cloud %} 订阅中。

创建企业帐户所拥有的组织的企业所有者自动成为组织所有者。 有关组织所有者的详细信息，请参阅“[组织中的角色](/organizations/managing-peoples-access-to-your-organization-with-roles/roles-in-an-organization)”。

{% data reusables.enterprise-accounts.access-enterprise %}
2. 在“组织”选项卡中的组织列表上方，单击“新建组织” .
  ![“新建组织”按钮](/assets/images/help/business-accounts/enterprise-account-add-org.png)
3. 在 "Organization name"（组织名称）下，输入组织的名称。
  ![用于键入新组织名称的字段](/assets/images/help/business-accounts/new-organization-name-field.png)
4. 单击“创建组织”。
5. 在“邀请所有者”下，键入想邀其成为组织所有者的人员的用户名，然后单击“邀请”。
  ![组织所有者搜索字段和“邀请”按钮](/assets/images/help/business-accounts/invite-org-owner.png)
6. 单击“完成”。

## 邀请组织加入您的企业帐户

企业所有者可以邀请现有组织加入其企业帐户。 如果要邀请的组织已经归其他企业所有，则你必须是两个企业帐户的所有者，或者之前的企业必须先放弃对该组织的所有权。 有关详细信息，请参阅“[从企业中删除组织](/admin/user-management/managing-organizations-in-your-enterprise/removing-organizations-from-your-enterprise)”。 

{% data reusables.enterprise-accounts.access-enterprise %}
1. 在“组织”选项卡中的组织列表上方，单击“邀请组织” 。
![邀请组织](/assets/images/help/business-accounts/enterprise-account-invite-organization.png)
3. 在“组织名称”下，开始键入要邀请的组织的名称，并在它出现在下拉列表中时选择它。
![搜索组织](/assets/images/help/business-accounts/enterprise-account-search-for-organization.png)
4. 单击“邀请组织”。
5. 组织所有者将收到一封邀请他们加入企业的电子邮件。 至少有一个所有者接受邀请才能继续该过程。 您可以在所有者批准邀请之前随时取消或重新发送邀请。
![取消或重新发送](/assets/images/help/business-accounts/enterprise-account-invitation-sent.png)
6. 一旦组织所有者批准了邀请，您可以在待定邀请列表中查看其状态。
![待定邀请](/assets/images/help/business-accounts/enterprise-account-pending.png)
7. 要完成转移，请单击“批准”。
![批准邀请](/assets/images/help/business-accounts/enterprise-account-transfer-approve.png)

## 在企业帐户之间转移组织

企业所有者可以在企业帐户之间转移现有组织。 你必须是两个企业帐户的企业所有者。 

{% note %}

注意：不能向/从 {% data variables.enterprise.prodname_emu_enterprise %} 转移现有组织。  

{% endnote %}

{% data reusables.enterprise-accounts.access-enterprise %}
1. 在要转移的组织旁边，选择 {% octicon "gear" width="16" aria-label="Gear" %} 下拉列表，然后单击“转移组织”。 
![“转移”按钮的屏幕截图](/assets/images/help/business-accounts/org-transfer-button.png)
1. 选择“选择企业”下拉菜单，开始键入目标企业的名称，并在它出现在下拉列表中时选择它。
![“企业”下拉列表的屏幕截图](/assets/images/help/business-accounts/org-transfer-select-enterprise.png)
2. 单击“审查转移”。
3. 要确认转移，请单击“转移组织”。
![“转移组织”按钮的屏幕截图](/assets/images/help/business-accounts/org-transfer-confirm-button.png)
