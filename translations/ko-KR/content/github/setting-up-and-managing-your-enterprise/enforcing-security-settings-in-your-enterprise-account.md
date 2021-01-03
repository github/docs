---
title: Enforcing security settings in your enterprise account
intro: Enterprise owners can enforce certain security policies for all organizations owned by an enterprise account.
product: '{% data reusables.gated-features.enterprise-accounts %}'
miniTocMaxHeadingLevel: 4
redirect_from:
  - /articles/enforcing-security-settings-for-organizations-in-your-business-account/
  - /articles/enforcing-security-settings-for-organizations-in-your-enterprise-account/
  - /articles/enforcing-security-settings-in-your-enterprise-account
  - /github/articles/managing-allowed-ip-addresses-for-organizations-in-your-enterprise-account
  - /github/setting-up-and-managing-your-enterprise-account/enforcing-security-settings-in-your-enterprise-account
versions:
  free-pro-team: '*'
---

### Requiring two-factor authentication for organizations in your enterprise account

Enterprise owners can require that organization members, billing managers, and outside collaborators in all organizations owned by an enterprise account use two-factor authentication to secure their personal accounts.

Before you can require 2FA for all organizations owned by your enterprise account, you must enable two-factor authentication for your own account. For more information, see "[Securing your account with two-factor authentication (2FA)](/articles/securing-your-account-with-two-factor-authentication-2fa/)."

{% warning %}

**Warnings:**

- When you require two-factor authentication for your enterprise account, members, outside collaborators, and billing managers (including bot accounts) in all organizations owned by your enterprise account who do not use 2FA will be removed from the organization and lose access to its repositories. They will also lose access to their forks of the organization's private repositories. You can reinstate their access privileges and settings if they enable two-factor authentication for their personal account within three months of their removal from your organization. For more information, see "[Reinstating a former member of your organization](/articles/reinstating-a-former-member-of-your-organization)."
- Any organization owner, member, billing manager, or outside collaborator in any of the organizations owned by your enterprise account who disables 2FA for their personal account after you've enabled required two-factor authentication will automatically be removed from the organization.
- If you're the sole owner of a enterprise account that requires two-factor authentication, you won't be able to disable 2FA for your personal account without disabling required two-factor authentication for the enterprise account.

{% endwarning %}

Before you require use of two-factor authentication, we recommend notifying organization members, outside collaborators, and billing managers and asking them to set up 2FA for their accounts. Organization owners can see if members and outside collaborators already use 2FA on each organization's People page. For more information, see "[Viewing whether users in your organization have 2FA enabled](/articles/viewing-whether-users-in-your-organization-have-2fa-enabled)."

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.settings-tab %}
{% data reusables.enterprise-accounts.security-tab %}
4. Under "Two-factor authentication", review the information about changing the setting. {% data reusables.enterprise-accounts.view-current-policy-config-orgs %}
5. Under "Two-factor authentication", select **Require two-factor authentication for all organizations in your business**, then click **Save**. ![Checkbox to require two-factor authentication](/assets/images/help/business-accounts/require-2fa-checkbox.png)
6. If prompted, read the information about members and outside collaborators who will be removed from the organizations owned by your enterprise account. To confirm the change, type your enterprise account's name, then click **Remove members & require two-factor authentication**. ![Confirm two-factor enforcement box](/assets/images/help/business-accounts/confirm-require-2fa.png)
7. Optionally, if any members or outside collaborators are removed from the organizations owned by your enterprise account, we recommend sending them an invitation to reinstate their former privileges and access to your organization. Each person must enable two-factor authentication before they can accept your invitation.

### Managing allowed IP addresses for organizations in your enterprise account

Enterprise owners can restrict access to assets owned by organizations in an enterprise account by configuring an allow list for specific IP addresses. {% data reusables.identity-and-permissions.ip-allow-lists-example-and-restrictions %}

{% data reusables.identity-and-permissions.ip-allow-lists-cidr-notation %}

{% data reusables.identity-and-permissions.ip-allow-lists-enable %}

You can also configure allowed IP addresses for an individual organization. For more information, see "[Managing allowed IP addresses for your organization](/github/setting-up-and-managing-organizations-and-teams/managing-allowed-ip-addresses-for-your-organization)."

#### Adding an allowed IP address

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.settings-tab %}
{% data reusables.enterprise-accounts.security-tab %}
{% data reusables.identity-and-permissions.ip-allow-lists-add-ip %}
{% data reusables.identity-and-permissions.ip-allow-lists-add-description %}
{% data reusables.identity-and-permissions.ip-allow-lists-add-entry %}

#### Enabling allowed IP addresses

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.settings-tab %}
{% data reusables.enterprise-accounts.security-tab %}
3. Under "IP allow list", select **Enable IP allow list**. ![Checkbox to allow IP addresses](/assets/images/help/security/enable-ip-allowlist-enterprise-checkbox.png)
4. Click **Save**.

#### Editing an allowed IP address

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.settings-tab %}
{% data reusables.enterprise-accounts.security-tab %}
{% data reusables.identity-and-permissions.ip-allow-lists-edit-entry %}
{% data reusables.identity-and-permissions.ip-allow-lists-edit-ip %}
{% data reusables.identity-and-permissions.ip-allow-lists-edit-description %}
8. Click **Update**.

#### Deleting an allowed IP address

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.settings-tab %}
{% data reusables.enterprise-accounts.security-tab %}
{% data reusables.identity-and-permissions.ip-allow-lists-delete-entry %}
{% data reusables.identity-and-permissions.ip-allow-lists-confirm-deletion %}

#### Using {% data variables.product.prodname_actions %} with an IP allow list

{% data reusables.github-actions.ip-allow-list-self-hosted-runners %}

### Enabling SAML single sign-on for organizations in your enterprise account

{% data reusables.saml.dotcom-saml-explanation %} For more information, see "[About identity and access management with SAML single sign-on](/github/setting-up-and-managing-organizations-and-teams/about-identity-and-access-management-with-saml-single-sign-on)."

Enterprise owners can enable SAML SSO and centralized authentication through a SAML IdP across all organizations owned by an enterprise account. After you enable SAML SSO for your enterprise account, SAML SSO is enabled by default for all organizations owned by your enterprise account. All members will be required to authenticate using SAML SSO to gain access to the organizations where they are a member, and enterprise owners will be required to authenticate using SAML SSO when accessing an enterprise account.

{% data reusables.saml.about-saml-access-enterprise-account %} For more information, see "[Viewing and managing a user's SAML access to your enterprise account](/github/setting-up-and-managing-your-enterprise/viewing-and-managing-a-users-saml-access-to-your-enterprise-account)."

{% data reusables.saml.saml-supported-idps %}

{% data reusables.scim.enterprise-account-scim %} If you're not participating in the private beta, SCIM is not supported for enterprise accounts. For more information, see "[Managing user provisioning for organizations in your enterprise account](#managing-user-provisioning-for-organizations-in-your-enterprise-account)."

{% note %}

**Note:** Enabling authentication with SAML single sign-on for your enterprise account will override any existing organization-level SAML configurations.

{% endnote %}

For more detailed information about how to enable SAML using Okta, see "[Configuring SAML single sign-on and SCIM for your enterprise account using Okta](/github/setting-up-and-managing-your-enterprise/configuring-saml-single-sign-on-and-scim-for-your-enterprise-account-using-okta).

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.settings-tab %}
{% data reusables.enterprise-accounts.security-tab %}
4. {% data reusables.enterprise-accounts.view-current-policy-config-orgs %}
5. Under "SAML single sign-on", select **Enable SAML authentication**. ![Checkbox for enabling SAML SSO](/assets/images/help/business-accounts/enable-saml-auth-enterprise.png)
6. In the **Sign on URL** field, type the HTTPS endpoint of your IdP for single sign-on requests. This value is available in your IdP configuration. ![Field for the URL that members will be forwarded to when signing in](/assets/images/help/saml/saml_sign_on_url_business.png)
7. Optionally, in the **Issuer** field, type your SAML issuer's name. This verifies the authenticity of sent messages. ![Field for the SAML issuer's name](/assets/images/help/saml/saml_issuer.png)
8. Under **Public Certificate**, paste a certificate to verify SAML responses. ![Field for the public certificate from your identity provider](/assets/images/help/saml/saml_public_certificate.png)
9. To verify the integrity of the requests from your SAML issuer, click {% octicon "pencil" aria-label="The edit icon" %}. Then in the Signature Method and Digest Method drop-downs, choose the hashing algorithm used by your SAML issuer. ![Drop-downs for the Signature Method and Digest method hashing algorithms used by your SAML issuer](/assets/images/help/saml/saml_hashing_method.png)
10. Before enabling SAML SSO for your enterprise, click **Test SAML configuration** to ensure that the information you've entered is correct. ![Button to test SAML configuration before enforcing](/assets/images/help/saml/saml_test.png)
11. Click **Save**.

### Managing user provisioning for organizations in your enterprise account

Enterprise owners can manage organization membership in an enterprise account directly from an identity provider (IdP).

{% data reusables.enterprise-accounts.user-provisioning-release-stage %}

{% data reusables.saml.about-user-provisioning-enterprise-account %}

{% data reusables.scim.enterprise-account-scim %} Optionally, you can also enable SAML provisioning and, separately, deprovisioning.

If you configure SCIM in your IdP, each time you make changes to group membership in your IdP, your IdP will make a SCIM call to {% data variables.product.prodname_dotcom %} to update the corresponding organization's membership. If you enable SAML provisioning, each time an enterprise member accesses a resource protected by your enterprise account's SAML configuration, that SAML assertion will trigger provisioning.

For each SCIM call or SAML assertion, {% data variables.product.product_name %} will check the IdP groups the user belongs to and perform the following operations:

- If the user is a member of an IdP group that corresponds to an organization owned by your enterprise account, and the user is not currently a member of that organization, add the user to the organization (SAML assertion) or send the user an email invitation to join the organization (SCIM call).
- Cancel any existing invitations for the user to join an organization owned by your enterprise account.

For each SCIM call and, if you enable SAML deprovisioning, each SAML assertion, {% data variables.product.product_name %} will also perform the following operation:

- If the user is not a member of an IdP group that corresponds to an organization owned by your enterprise account, and the user is currently a member of that organization, remove the user from the organization.

If deprovisioning removes the last remaining owner from an organization, the organization will become unowned. Enterprise owners can assume ownership of unowned organizations. For more information, see "[Managing unowned organizations in your enterprise account](/github/setting-up-and-managing-your-enterprise/managing-unowned-organizations-in-your-enterprise-account)."

To enable user provisioning for your enterprise account using Okta, see "[Configuring SAML single sign-on and SCIM for your enterprise account using Okta](/github/setting-up-and-managing-your-enterprise/configuring-saml-single-sign-on-and-scim-for-your-enterprise-account-using-okta)."

### Managing team synchronization for organizations in your enterprise account

Enterprise owners can enable team synchronization between an IdP and {% data variables.product.product_name %} to allow organization owners and team maintainers to connect teams in the organizations owned by your enterprise account with IdP groups.

{% data reusables.identity-and-permissions.about-team-sync %}

You can use team synchronization with your enterprise account with Azure AD.

{% data reusables.identity-and-permissions.sync-team-with-idp-group %}

{% data reusables.identity-and-permissions.team-sync-disable %}

You can also configure and manage team synchronization for an individual organization. For more information, see "[Managing team synchronization for your organization](/github/setting-up-and-managing-organizations-and-teams/managing-team-synchronization-for-your-organization)."

#### 빌드전 요구 사양

Before you can enable team synchronization for your enterprise account:
  - You or your Azure AD administrator must be a Global administrator or a Privileged Role administrator in Azure AD.
  - You must enable SAML single sign-on for organizations in your enterprise account with your supported IdP. For more information, see "[Enabling SAML single sign-on for organizations in your enterprise account](#enabling-saml-single-sign-on-for-organizations-in-your-enterprise-account)."
  - You must authenticate to your enterprise account using SAML SSO and the supported IdP. For more information, see "[Authenticating with SAML single sign-on](/articles/authenticating-with-saml-single-sign-on)."

#### Managing team synchronization for Azure AD

{% data reusables.identity-and-permissions.team-sync-azure-permissions %}

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.settings-tab %}
{% data reusables.enterprise-accounts.security-tab %}
{% data reusables.identity-and-permissions.team-sync-confirm-saml %}
{% data reusables.identity-and-permissions.enable-team-sync-azure %}
{% data reusables.identity-and-permissions.team-sync-confirm %}
7. Review the identity provider tenant information you want to connect to your enterprise account, then click **Approve**. ![Pending request to enable team synchronization to a specific IdP tenant with option to approve or cancel request](/assets/images/help/teams/approve-team-synchronization.png)
8. To disable team synchronization, click **Disable team synchronization**. ![Disable team synchronization](/assets/images/help/teams/disable-team-synchronization.png)

### Managing your enterprise account's SSH certificate authorities

Enterprise owners can add and delete an enterprise account's SSH certificate authorities (CA).

By adding an SSH CA to your enterprise account, you can allow members of any organization owned by your enterprise account to access that organization's repositories using SSH certificates you provide. {% data reusables.organizations.can-require-ssh-cert %} For more information, see "[About SSH certificate authorities](/articles/about-ssh-certificate-authorities)."

#### Adding an SSH certificate authority

{% data reusables.organizations.add-extension-to-cert %}

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.settings-tab %}
{% data reusables.enterprise-accounts.security-tab %}
{% data reusables.organizations.new-ssh-ca %}
{% data reusables.organizations.require-ssh-cert %}

#### Deleting an SSH certificate authority

Deleting a CA cannot be undone. If you want to use the same CA in the future, you'll need to upload the CA again.

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.settings-tab %}
{% data reusables.enterprise-accounts.security-tab %}
{% data reusables.organizations.delete-ssh-ca %}
