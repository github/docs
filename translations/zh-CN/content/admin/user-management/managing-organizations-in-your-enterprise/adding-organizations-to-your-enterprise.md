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
shortTitle: 添加组织
---

## 关于组织

您的企业帐户可以拥有组织。 企业成员可以跨组织内的相关项目进行协作。 更多信息请参阅“[关于组织](/organizations/collaborating-with-groups-in-organizations/about-organizations)”。

企业所有者可以在企业帐户设置内创建新组织，或邀请现有组织加入企业。 要将组织添加到企业，必须在企业帐户设置中创建组织。

您只能以这种方式将组织添加到现有企业帐户。 {% data reusables.enterprise.create-an-enterprise-account %} 更多信息请参阅“[创建企业帐户](/admin/overview/creating-an-enterprise-account)”。

## 在企业帐户中创建组织

在企业帐户设置中创建的新组织包含在企业帐户的 {% data variables.product.prodname_ghe_cloud %} 订阅中。

创建企业帐户所拥有的组织的企业所有者自动成为组织所有者。 有关组织所有者的更多信息，请参阅“[组织中的角色](/organizations/managing-peoples-access-to-your-organization-with-roles/roles-in-an-organization)”。

{% data reusables.enterprise-accounts.access-enterprise %}
2. 在 **Organizations（组织）**选项卡中的组织列表上方，单击 **New organization（新组织）**。 ![新组织按钮](/assets/images/help/business-accounts/enterprise-account-add-org.png)
3. 在 "Organization name"（组织名称）下，输入组织的名称。 ![用于输入新组织名称的字段](/assets/images/help/business-accounts/new-organization-name-field.png)
4. 单击 **Create organization（创建组织）**。
5. 在 "Invite owners"（邀请所有者）下，输入您想邀其成为组织所有者的人员的用户名，然后单击 **Invite（邀请）**。 ![组织所有者搜索字段和邀请按钮](/assets/images/help/business-accounts/invite-org-owner.png)
6. 单击 **Finish（完成）**。

## 邀请组织加入您的企业帐户

企业所有者可以邀请现有组织加入其企业帐户。 如果您要邀请的组织已经归其他企业所有，则在上一个企业放弃对组织的所有权之前，您将无法发出邀请。 更多信息请参阅“[从企业中删除组织](/admin/user-management/managing-organizations-in-your-enterprise/removing-organizations-from-your-enterprise)”。

{% data reusables.enterprise-accounts.access-enterprise %}
2. 在 **Organizations（组织）**选项卡中的组织列表上方，单击 **Invite organization（邀请组织）**。 ![邀请组织](/assets/images/help/business-accounts/enterprise-account-invite-organization.png)
3. 在“Organization name（组织名称）”下，开始键入要邀请的组织名称，并在它出现在下拉列表中时选择它。 ![搜索组织](/assets/images/help/business-accounts/enterprise-account-search-for-organization.png)
4. 单击 **Invite organization（邀请组织）**。
5. 组织所有者将收到一封邀请他们加入企业的电子邮件。 至少有一个所有者接受邀请才能继续该过程。 您可以在所有者批准邀请之前随时取消或重新发送邀请。 ![取消或重新发送](/assets/images/help/business-accounts/enterprise-account-invitation-sent.png)
6. 一旦组织所有者批准了邀请，您可以在待定邀请列表中查看其状态。 ![待定邀请](/assets/images/help/business-accounts/enterprise-account-pending.png)
7. 点击 **Approve（批准）**完成传输，或点击 **Cancel（取消）**予以取消。 ![批准邀请](/assets/images/help/business-accounts/enterprise-account-transfer-approve.png)
