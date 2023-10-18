---
title: Adding organizations to your enterprise
intro: 'You can add organizations to manage within your enterprise by creating a new organization, inviting an existing organization, or transferring an organization from a different enterprise account.'
redirect_from:
  - /github/setting-up-and-managing-your-enterprise/managing-organizations-in-your-enterprise-account/adding-organizations-to-your-enterprise-account
  - /articles/adding-organizations-to-your-enterprise-account
  - /github/setting-up-and-managing-your-enterprise-account/adding-organizations-to-your-enterprise-account
  - /github/setting-up-and-managing-your-enterprise/adding-organizations-to-your-enterprise-account
  - /admin/user-management/managing-organizations-in-your-enterprise/adding-organizations-to-your-enterprise
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

Your enterprise account can own organizations. Members of your enterprise can collaborate across related projects within an organization. For more information, see "[AUTOTITLE](/organizations/collaborating-with-groups-in-organizations/about-organizations)."

You can add new organizations to your enterprise account. If you do not use {% data variables.product.prodname_emus %}, you can add existing organizations on {% data variables.location.product_location %} to your enterprise. You cannot add an existing organization from an {% data variables.enterprise.prodname_emu_enterprise %} to a different enterprise.

{% data reusables.enterprise.create-an-enterprise-account %} For more information, see "[AUTOTITLE](/admin/overview/creating-an-enterprise-account)."

After you add an existing organization to your enterprise, the organization's resources remain accessible to members at the same URLs, and the following changes will apply.

- If two-factor authentication (2FA) is required by the enterprise, organization members who do not use 2FA will be removed from the organization.
- The organization's members will become members of the enterprise, and {% data variables.product.company_short %} will bill the enterprise account for the organization's usage. You must ensure that the enterprise account has enough licenses to accommodate any new members. For more information, see "[AUTOTITLE](/billing/managing-your-github-billing-settings/about-billing-for-your-enterprise)."
- Enterprise owners can manage their role within the organization. For more information, see "[AUTOTITLE](/admin/user-management/managing-organizations-in-your-enterprise/managing-your-role-in-an-organization-owned-by-your-enterprise)."
- Any policies applied to the enterprise will apply to the organization. For more information, see "[AUTOTITLE](/admin/policies/enforcing-policies-for-your-enterprise/about-enterprise-policies)."
  {% note %}

  **Note:** {% data reusables.actions.org-to-enterprise-actions-permissions %}

  {% endnote %}
- If SAML SSO is configured for the enterprise account, the enterprise's SAML configuration will apply to the organization. If the organization used SAML SSO, the enterprise account's configuration will replace the organization's configuration. SCIM is not available for enterprise accounts, so SCIM will be disabled for the organization. For more information, see "[AUTOTITLE](/admin/identity-and-access-management/using-saml-for-enterprise-iam/configuring-saml-single-sign-on-for-your-enterprise)" and "[AUTOTITLE](/admin/identity-and-access-management/using-saml-for-enterprise-iam/switching-your-saml-configuration-from-an-organization-to-an-enterprise-account)."
- If SAML SSO was configured for the organization, members' existing {% data variables.product.pat_generic %} or SSH keys that were authorized to access the organization's resources will be authorized to access the same resources. To access additional organizations owned by the enterprise, members must authorize the {% data variables.product.pat_generic %} or key. For more information, see "[AUTOTITLE](/authentication/authenticating-with-saml-single-sign-on/authorizing-a-personal-access-token-for-use-with-saml-single-sign-on)" and "[AUTOTITLE](/authentication/authenticating-with-saml-single-sign-on/authorizing-an-ssh-key-for-use-with-saml-single-sign-on)."
- If the organization was connected to {% data variables.product.prodname_ghe_server %} or {% data variables.product.prodname_ghe_managed %} using {% data variables.product.prodname_github_connect %}, adding the organization to an enterprise will not update the connection. {% data variables.product.prodname_github_connect %} features will no longer function for the organization. To continue using {% data variables.product.prodname_github_connect %}, you must disable and re-enable the feature. For more information, see the following articles.

  - "[AUTOTITLE](/enterprise-server@latest/admin/configuration/configuring-github-connect/managing-github-connect)" in the {% data variables.product.prodname_ghe_server %} documentation
  - "[AUTOTITLE](/github-ae@latest/admin/configuration/configuring-github-connect/managing-github-connect)" in the {% data variables.product.prodname_ghe_managed %} documentation
- If the organization used billed {% data variables.product.prodname_marketplace %} apps, the organization can continue to use the apps, but must pay the vendor directly. For more information, contact the app's vendor.
- If your organization was sponsoring any accounts, the sponsorships will be canceled.
- Any coupons will be removed from the organization. To reapply the coupon, [contact our sales team](https://github.com/enterprise/contact).

## Creating an organization in your enterprise account

New organizations you create within your enterprise account settings are included in your enterprise account's {% data variables.product.prodname_ghe_cloud %} subscription.

Enterprise owners who create an organization owned by the enterprise account automatically become organization owners. For more information about organization owners, see "[AUTOTITLE](/organizations/managing-peoples-access-to-your-organization-with-roles/roles-in-an-organization)."

During a trial of {% data variables.product.prodname_ghe_cloud %}, you can create up to three new organizations in your enterprise.

{% data reusables.enterprise-accounts.access-enterprise %}
1. On the **Organizations** tab, above the list of organizations, click **New organization**.
1. Under "Organization name", type a name for your organization.
1. Click **Create organization**.
1. Optionally, under "Invite owners", type the username of a person you'd like to invite to become an organization owner, then click **Invite**.
1. Click **Finish**.

## Inviting an organization to join your enterprise account

Enterprise owners can invite existing organizations to join their enterprise account.

During a trial of {% data variables.product.prodname_ghe_cloud %}, adding an organization to the trial enterprise may disable certain features in the organization. For more information, see "[AUTOTITLE](/get-started/signing-up-for-github/setting-up-a-trial-of-github-enterprise-cloud#features-not-included-in-the-trial)."

If the organization you want to invite is already owned by another enterprise account, you must be an owner of both enterprise accounts. If you're not, you can ask an owner of the enterprise account that currently owns the organization to transfer the organization to your enterprise account instead. For more information, see "[Transferring an organization between enterprise accounts](#transferring-an-organization-between-enterprise-accounts)."

When you invite an organization to join your enterprise account, at least one owner needs to accept the invitation. Then, you must give a final approval for the transfer.

After you invite the organization, and before an owner approves the invitation, you can cancel or resend the invitation at any time.

{% data reusables.enterprise-accounts.access-enterprise %}
1. On the **Organizations** tab, above the list of organizations, click **Invite organization**.
1. Under "Organization name", start typing the name of the organization you want to invite and select it when it appears in the dropdown list.
1. Click **Invite organization**. The organization owners will receive an email inviting them to join the enterprise.
1. After an organization owner has approved the invitation, navigate back to the the **Organizations** tab of the enterprise settings.
1. Under "Organizations", click **X pending**.
1. To complete the transfer, next to the organization name, click **Approve**.

## Transferring an organization between enterprise accounts

Enterprise owners can transfer existing organizations between enterprise accounts. You must be an enterprise owner of both enterprise accounts.

{% note %}

**Note:** You cannot transfer an existing organization to or from an {% data variables.enterprise.prodname_emu_enterprise %} or an enterprise account that is currently enrolled in a trial of {% data variables.product.prodname_ghe_cloud %}.

{% endnote %}

{% data reusables.enterprise-accounts.access-enterprise %}
1. Next to the organization you want to transfer, select the {% octicon "gear" width="16" aria-label="Organization settings" %} dropdown menu, then click **Transfer organization**.

   {% data reusables.enterprise-accounts.organization-settings-dropdown %}
1. Select the **Select enterprise** dropdown menu, start typing the name of the destination enterprise, and click the enterprise you want to transfer the organization to.
1. Click **Review transfer**.
1. To confirm the transfer, click **Transfer organization**.
