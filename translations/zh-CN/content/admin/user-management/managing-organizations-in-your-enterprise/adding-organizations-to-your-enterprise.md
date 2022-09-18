---
title: 将组织添加到企业
intro: 您可以创建新的组织或邀请现有组织来管理您的企业。
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
ms.openlocfilehash: 09e4fa9c1b33f50e35f6088eb671b90df4a5eda3
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/05/2022
ms.locfileid: '147573351'
---
## 关于将组织添加到企业帐户

您的企业帐户可以拥有组织。 企业成员可以跨组织内的相关项目进行协作。 有关详细信息，请参阅“[关于组织](/organizations/collaborating-with-groups-in-organizations/about-organizations)”。

可将新组织添加到企业帐户。 如果不使用 {% data variables.product.prodname_emus %}，可将 {% data variables.product.product_location %} 上的现有组织添加到企业。 不能将 {% data variables.product.prodname_emu_enterprise %} 中的现有组织添加到其他企业。

{% data reusables.enterprise.create-an-enterprise-account %} 有关详细信息，请参阅“[创建企业帐户](/admin/overview/creating-an-enterprise-account)”。

将现有组织添加到企业后，该组织的资源仍可供同一 URL 的成员访问，并且以下更改将会应用。

- 组织的成员将成为企业成员，并且 {% data variables.product.company_short %} 将按组织的使用情况向企业帐户收费。 必须确保企业帐户有足够的许可证来容纳任何新成员。 有关详细信息，请参阅“[关于企业的计费](/billing/managing-billing-for-your-github-account/about-billing-for-your-enterprise)”。
- 企业所有者可管理他们在组织内的角色。 有关详细信息，请参阅“[管理企业拥有的组织中的角色](/admin/user-management/managing-organizations-in-your-enterprise/managing-your-role-in-an-organization-owned-by-your-enterprise)”。
- 应用于企业的任何策略都将应用于组织。 有关详细信息，请参阅“[关于企业策略](/admin/policies/enforcing-policies-for-your-enterprise/about-enterprise-policies)”。
- 如果为企业帐户配置了 SAML SSO，则企业的 SAML 配置将应用于组织。 如果组织使用了 SAML SSO，则企业帐户的配置将替换组织的配置。 SCIM 不适用于企业帐户，因此将为组织禁用 SCIM。 有关详细信息，请参阅“[为企业配置 SAML 单一登录](/admin/identity-and-access-management/using-saml-for-enterprise-iam/configuring-saml-single-sign-on-for-your-enterprise)”和“[将 SAML 配置从组织切换到企业帐户](/admin/identity-and-access-management/using-saml-for-enterprise-iam/switching-your-saml-configuration-from-an-organization-to-an-enterprise-account)”。
- 如果为组织配置了 SAML SSO，则成员现有的有权访问组织资源的个人访问令牌 (PAT) 或 SSH 密钥将有权访问相同的资源。 要访问企业拥有的其他组织，成员必须授权 PAT 或密钥。 有关详细信息，请参阅“[授权用于 SAML 单一登录的个人访问令牌](/authentication/authenticating-with-saml-single-sign-on/authorizing-a-personal-access-token-for-use-with-saml-single-sign-on)”和“[授权用于 SAML 单一登录的 SSH 密钥](/authentication/authenticating-with-saml-single-sign-on/authorizing-an-ssh-key-for-use-with-saml-single-sign-on)”。
- 如果组织通过 {% data variables.product.prodname_github_connect %} 连接到 {% data variables.product.prodname_ghe_server %} 或 {% data variables.product.prodname_ghe_managed %}，则将组织添加到企业帐户不会更新连接。 {% data variables.product.prodname_github_connect %} 功能将不再适用于组织。 要继续使用 {% data variables.product.prodname_github_connect %}，必须禁用并重新启用该功能。 有关详细信息，请参阅以下文章。

  - {% data variables.product.prodname_ghe_server %} 文档中的“[管理  {% data variables.product.prodname_github_connect %}](/enterprise-server@latest/admin/configuration/configuring-github-connect/managing-github-connect)”
  - {% data variables.product.prodname_ghe_managed %} 文档中的“[管理 {% data variables.product.prodname_github_connect %}](/github-ae@latest/admin/configuration/configuring-github-connect/managing-github-connect)”
- 如果组织使用计费的 {% data variables.product.prodname_marketplace %} 应用，则组织可继续使用这些应用，但必须直接向供应商支付费用。 有关详细信息，请与应用供应商联系。

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

企业所有者可以邀请现有组织加入其企业帐户。 如果您要邀请的组织已经归其他企业所有，则在上一个企业放弃对组织的所有权之前，您将无法发出邀请。 有关详细信息，请参阅“[从企业中删除组织](/admin/user-management/managing-organizations-in-your-enterprise/removing-organizations-from-your-enterprise)”。

{% data reusables.enterprise-accounts.access-enterprise %}
2. 在“组织”选项卡中的组织列表上方，单击“邀请组织” 。
![邀请组织](/assets/images/help/business-accounts/enterprise-account-invite-organization.png)
3. 在“Organization name（组织名称）”下，开始键入要邀请的组织名称，并在它出现在下拉列表中时选择它。
![搜索组织](/assets/images/help/business-accounts/enterprise-account-search-for-organization.png)
4. 单击“邀请组织”。
5. 组织所有者将收到一封邀请他们加入企业的电子邮件。 至少有一个所有者接受邀请才能继续该过程。 您可以在所有者批准邀请之前随时取消或重新发送邀请。
![取消或重新发送](/assets/images/help/business-accounts/enterprise-account-invitation-sent.png)
6. 一旦组织所有者批准了邀请，您可以在待定邀请列表中查看其状态。
![待定邀请](/assets/images/help/business-accounts/enterprise-account-pending.png)
7. 单击“批准”完成传输，或单击“取消”以取消传输 。
![批准邀请](/assets/images/help/business-accounts/enterprise-account-transfer-approve.png)
