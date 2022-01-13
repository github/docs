---
title: Adding organizations to your enterprise
intro: You can create new organizations or invite existing organizations to manage within your enterprise.
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
---

## Organizationについて

Your enterprise account can own organizations. Members of your enterprise can collaborate across related projects within an organization. 詳細は「[Organization について](/organizations/collaborating-with-groups-in-organizations/about-organizations)」を参照してください。

Enterprise owners can create new organizations within an enterprise account's settings or invite existing organizations to join an enterprise. To add an organization to your enterprise, you must create the organization from within the enterprise account settings.

You can only add organizations this way to an existing enterprise account. {% data reusables.enterprise.create-an-enterprise-account %} For more information, see "[Creating an enterprise account](/admin/overview/creating-an-enterprise-account)."

## Enterprise アカウント内で Organization を作成する

Enterprise アカウント設定内で作成した新しい Organization は、Enterprise アカウントの {% data variables.product.prodname_ghe_cloud %} プランに含められます。

Enterprise アカウントにより所有される Organization を作成した Enterprise のオーナーは、自動的に Organization のオーナーになります。 For more information about organization owners, see "[Roles in an organization](/organizations/managing-peoples-access-to-your-organization-with-roles/roles-in-an-organization)."

{% data reusables.enterprise-accounts.access-enterprise %}
2. [**Organization**] タブで、Organization のリストの上で [**New organization**] をクリックします。 ![新規 Organization ボタン](/assets/images/help/business-accounts/enterprise-account-add-org.png)
3. [Organization name] の下に Organization の名前を入力します。 ![新しい Organization 名を入力するフィールド](/assets/images/help/business-accounts/new-organization-name-field.png)
4. **Create organization（Organizationの作成）**をクリックしてください。
5. [Invite owners] の下で、Organization のオーナーになるよう招待したい人のユーザ名を入力し、[**Invite**] をクリックします。 ![Organization オーナーの検索フィールドと招待ボタン](/assets/images/help/business-accounts/invite-org-owner.png)
6. [**Finish**] をクリックします。

## Inviting an organization to join your enterprise account

Enterprise owners can invite existing organizations to join their enterprise account. If the organization you want to invite is already owned by another enterprise, you will not be able to issue an invitation until the previous enterprise gives up ownership of the organization. For more information, see "[Removing an organization from your enterprise](/admin/user-management/managing-organizations-in-your-enterprise/removing-organizations-from-your-enterprise)."

{% data reusables.enterprise-accounts.access-enterprise %}
2. On the **Organizations** tab, above the list of organizations, click **Invite organization**. ![Invite organization](/assets/images/help/business-accounts/enterprise-account-invite-organization.png)
3. Under "Organization name", start typing the name of the organization you want to invite and select it when it appears in the drop-down list. ![Search for organization](/assets/images/help/business-accounts/enterprise-account-search-for-organization.png)
4. Click **Invite organization**.
5. The organization owners will receive an email inviting them to join the organization. At least one owner needs to accept the invitation before the process can continue. You can cancel or resend the invitation at any time before an owner approves it. ![Cancel or resend](/assets/images/help/business-accounts/enterprise-account-invitation-sent.png)
6. Once an organization owner has approved the invitation, you can view its status in the list of pending invitations. ![Pending invitation](/assets/images/help/business-accounts/enterprise-account-pending.png)
7. Click **Approve** to complete the transfer, or **Cancel** to cancel it. ![Approve invitation](/assets/images/help/business-accounts/enterprise-account-transfer-approve.png)
