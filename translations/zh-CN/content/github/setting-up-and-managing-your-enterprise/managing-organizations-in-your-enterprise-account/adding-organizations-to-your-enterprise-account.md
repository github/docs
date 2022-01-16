---
title: 将组织添加到企业帐户
intro: You can create new organizations or invite existing organizations to manage within your enterprise account.
product: '{% data reusables.gated-features.enterprise-accounts %}'
redirect_from:
  - /articles/adding-organizations-to-your-enterprise-account
  - /github/setting-up-and-managing-your-enterprise-account/adding-organizations-to-your-enterprise-account
  - /github/setting-up-and-managing-your-enterprise/adding-organizations-to-your-enterprise-account
versions:
  fpt: '*'
topics:
  - Enterprise
shortTitle: 添加组织
---

Enterprise owners can create new organizations within an enterprise account's settings or invite existing organizations to join an enterprise account.

要将组织添加到企业帐户，必须在企业帐户设置中创建组织。

## 在企业帐户中创建组织

在企业帐户设置中创建的新组织包含在企业帐户的 {% data variables.product.prodname_ghe_cloud %} 订阅中。 有关在组织中协作的更多信息，请参阅“[设置和管理组织与团队](/categories/setting-up-and-managing-organizations-and-teams)”。

创建企业帐户所拥有的组织的企业所有者自动成为组织所有者。 有关组织所有者的更多信息，请参阅“[组织的权限级别](/articles/permission-levels-for-an-organization)”。

{% data reusables.enterprise-accounts.access-enterprise %}
2. 在 **Organizations（组织）**选项卡中的组织列表上方，单击 **New organization（新组织）**。 ![新组织按钮](/assets/images/help/business-accounts/enterprise-account-add-org.png)
3. 在 "Organization name"（组织名称）下，输入组织的名称。 ![用于输入新组织名称的字段](/assets/images/help/business-accounts/new-organization-name-field.png)
4. 单击 **Create organization（创建组织）**。
5. 在 "Invite owners"（邀请所有者）下，输入您想邀其成为组织所有者的人员的用户名，然后单击 **Invite（邀请）**。 ![组织所有者搜索字段和邀请按钮](/assets/images/help/business-accounts/invite-org-owner.png)
6. 单击 **Finish（完成）**。

## Inviting an organization to join your enterprise account

Enterprise owners can invite existing organizations to join their enterprise account. If the organization you want to invite is already owned by another enterprise, you will not be able to issue an invitation until the previous enterprise gives up ownership of the organization.

{% data reusables.enterprise-accounts.access-enterprise %}
2. On the **Organizations** tab, above the list of organizations, click **Invite organization**. ![Invite organization](/assets/images/help/business-accounts/enterprise-account-invite-organization.png)
3. Under "Organization name", start typing the name of the organization you want to invite and select it when it appears in the drop-down list. ![Search for organization](/assets/images/help/business-accounts/enterprise-account-search-for-organization.png)
4. Click **Invite organization**.
5. The organization owners will receive an email inviting them to join the organization. At least one owner needs to accept the invitation before the process can continue. You can cancel or resend the invitation at any time before an owner approves it. ![Cancel or resend](/assets/images/help/business-accounts/enterprise-account-invitation-sent.png)
6. Once an organization owner has approved the invitation, you can view its status in the list of pending invitations. ![Pending invitation](/assets/images/help/business-accounts/enterprise-account-pending.png)
7. Click **Approve** to complete the transfer, or **Cancel** to cancel it. ![Approve invitation](/assets/images/help/business-accounts/enterprise-account-transfer-approve.png)
