---
title: Adding organizations to your enterprise
intro: You can add organizations to manage within your enterprise by creating a new organization, inviting an existing organization, or transferring an organization from a different enterprise account.
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
---

## About addition of organizations to your enterprise account

Your enterprise account can own organizations. Members of your enterprise can collaborate across related projects within an organization. For more information, see "[About organizations](/organizations/collaborating-with-groups-in-organizations/about-organizations)."

You can add new organizations to your enterprise account. If you do not use {% data variables.product.prodname_emus %}, you can add existing organizations on {% data variables.location.product_location %} to your enterprise. You cannot add an existing organization from an {% data variables.enterprise.prodname_emu_enterprise %} to a different enterprise.

{% data reusables.enterprise.create-an-enterprise-account %} For more information, see "[Creating an enterprise account](/admin/overview/creating-an-enterprise-account)."

After you add an existing organization to your enterprise, the organization's resources remain accessible to members at the same URLs, and the following changes will apply.

- The organization's members will become members of the enterprise, and {% data variables.product.company_short %} will bill the enterprise account for the organization's usage. You must ensure that the enterprise account has enough licenses to accommodate any new members. For more information, see "[About billing for your enterprise](/billing/managing-billing-for-your-github-account/about-billing-for-your-enterprise)."
- Enterprise owners can manage their role within the organization. For more information, see "[Managing your role in an organization owned by your enterprise](/admin/user-management/managing-organizations-in-your-enterprise/managing-your-role-in-an-organization-owned-by-your-enterprise)."
- Any policies applied to the enterprise will apply to the organization. For more information, see "[About enterprise policies](/admin/policies/enforcing-policies-for-your-enterprise/about-enterprise-policies)."
- If SAML SSO is configured for the enterprise account, the enterprise's SAML configuration will apply to the organization. If the organization used SAML SSO, the enterprise account's configuration will replace the organization's configuration. SCIM is not available for enterprise accounts, so SCIM will be disabled for the organization. For more information, see "[Configuring SAML single sign-on for your enterprise](/admin/identity-and-access-management/using-saml-for-enterprise-iam/configuring-saml-single-sign-on-for-your-enterprise)" and "[Switching your SAML configuration from an organization to an enterprise account](/admin/identity-and-access-management/using-saml-for-enterprise-iam/switching-your-saml-configuration-from-an-organization-to-an-enterprise-account)."
- If SAML SSO was configured for the organization, members' existing {% data variables.product.pat_generic %} or SSH keys that were authorized to access the organization's resources will be authorized to access the same resources. To access additional organizations owned by the enterprise, members must authorize the {% data variables.product.pat_generic %} or key. For more information, see "[Authorizing a {% data variables.product.pat_generic %} for use with SAML single sign-on](/authentication/authenticating-with-saml-single-sign-on/authorizing-a-personal-access-token-for-use-with-saml-single-sign-on)" and "[Authorizing an SSH key for use with SAML single sign-on](/authentication/authenticating-with-saml-single-sign-on/authorizing-an-ssh-key-for-use-with-saml-single-sign-on)."
- If the organization was connected to {% data variables.product.prodname_ghe_server %} or {% data variables.product.prodname_ghe_managed %} using {% data variables.product.prodname_github_connect %}, adding the organization to an enterprise will not update the connection. {% data variables.product.prodname_github_connect %} features will no longer function for the organization. To continue using {% data variables.product.prodname_github_connect %}, you must disable and re-enable the feature. For more information, see the following articles.

  - "[Managing {% data variables.product.prodname_github_connect %}](/enterprise-server@latest/admin/configuration/configuring-github-connect/managing-github-connect)" in the {% data variables.product.prodname_ghe_server %} documentation
  - "[Managing {% data variables.product.prodname_github_connect %}](/github-ae@latest/admin/configuration/configuring-github-connect/managing-github-connect)" in the {% data variables.product.prodname_ghe_managed %} documentation
- If the organization used billed {% data variables.product.prodname_marketplace %} apps, the organization can continue to use the apps, but must pay the vendor directly. For more information, contact the app's vendor.
- Any coupons will be removed from the organization. To reapply the coupon, [contact our sales team](https://github.com/enterprise/contact).

## Creating an organization in your enterprise account

New organizations you create within your enterprise account settings are included in your enterprise account's {% data variables.product.prodname_ghe_cloud %} subscription.

Enterprise owners who create an organization owned by the enterprise account automatically become organization owners. For more information about organization owners, see "[Roles in an organization](/organizations/managing-peoples-access-to-your-organization-with-roles/roles-in-an-organization)."

{% data reusables.enterprise-accounts.access-enterprise %}
2. On the **Organizations** tab, above the list of organizations, click **New organization**.
  ![New organization button](/assets/images/help/business-accounts/enterprise-account-add-org.png)
3. Under "Organization name", type a name for your organization.
  ![Field to type a new organization name](/assets/images/help/business-accounts/new-organization-name-field.png)
4. Click **Create organization**.
5. Under "Invite owners", type the username of a person you'd like to invite to become an organization owner, then click **Invite**.
  ![Organization owner search field and Invite button](/assets/images/help/business-accounts/invite-org-owner.png)
6. Click **Finish**.

## Inviting an organization to join your enterprise account

Enterprise owners can invite existing organizations to join their enterprise account. If the organization you want to invite is already owned by another enterprise account, you must be an owner of both enterprise accounts, or the previous enterprise must give up ownership of the organization first. For more information, see "[Removing an organization from your enterprise](/admin/user-management/managing-organizations-in-your-enterprise/removing-organizations-from-your-enterprise)." 

{% data reusables.enterprise-accounts.access-enterprise %}
1. On the **Organizations** tab, above the list of organizations, click **Invite organization**.
![Invite organization](/assets/images/help/business-accounts/enterprise-account-invite-organization.png)
3. Under "Organization name", start typing the name of the organization you want to invite and select it when it appears in the dropdown list.
![Search for organization](/assets/images/help/business-accounts/enterprise-account-search-for-organization.png)
4. Click **Invite organization**.
5. The organization owners will receive an email inviting them to join the enterprise. At least one owner needs to accept the invitation before the process can continue. You can cancel or resend the invitation at any time before an owner approves it.
![Cancel or resend](/assets/images/help/business-accounts/enterprise-account-invitation-sent.png)
6. Once an organization owner has approved the invitation, you can view its status in the list of pending invitations.
![Pending invitation](/assets/images/help/business-accounts/enterprise-account-pending.png)
7. To complete the transfer, click **Approve**.
![Approve invitation](/assets/images/help/business-accounts/enterprise-account-transfer-approve.png)

## Transferring an organization between enterprise accounts

Enterprise owners can transfer existing organizations between enterprise accounts. You must be an enterprise owner of both enterprise accounts. 

{% note %}

**Note:** You cannot transfer an existing organization to or from an {% data variables.enterprise.prodname_emu_enterprise %}.  

{% endnote %}

{% data reusables.enterprise-accounts.access-enterprise %}
1. Next to the organization you want to transfer, select the {% octicon "gear" width="16" aria-label="Gear" %} dropdown, and then click **Transfer organization**. 
![Screenshot of the transfer button](/assets/images/help/business-accounts/org-transfer-button.png)
1. Select the **Select enterprise** dropdown menu, start typing the name of the destination enterprise, and select the enterprise when it appears in the dropdown list.
![Screenshot of the enterprise dropdown](/assets/images/help/business-accounts/org-transfer-select-enterprise.png)
2. Click **Review transfer**.
3. To confirm the transfer, click **Transfer organization**.
![Screenshot of the transfer organization button](/assets/images/help/business-accounts/org-transfer-confirm-button.png)
