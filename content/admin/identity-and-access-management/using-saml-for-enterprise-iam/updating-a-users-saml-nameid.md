---
title: Updating a user's SAML NameID
shortTitle: Update SAML NameID
intro: 'When an account''s `NameID` changes on your identity provider (IdP) and the person can no longer {% ifversion ghes or ghae %}sign into {% data variables.product.product_location %}{% elsif ghec %}authenticate to access your enterprise''s resources{% endif %}, you must {% ifversion ghec %}either contact {% data variables.product.company_short %} Support or revoke the person''s linked identity{% elsif ghes %}update the `NameID` mapping on {% data variables.product.product_location %}{% elsif ghae %}contact {% data variables.product.company_short %} Support{% endif %}.'
versions:
  ghes: '*'
type: how_to
topics:
  - Accounts
  - Authentication
  - Enterprise
  - Identity
  - SSO
---

## About updates to users' SAML `NameID`

In some situations, you may need to update values associated with a person's account on your SAML IdP. If that identifier is also the `NameID` that you use for authentication on {% data variables.product.product_name %}, you must update the `NameID` mapping on your instance so the person can continue to authenticate successfully. For more information, see "[Username considerations for external authentication](/admin/identity-and-access-management/managing-iam-for-your-enterprise/username-considerations-for-external-authentication)."

## Updating a user's SAML `NameID`

Enterprise owners can update a user's SAML `NameID` on a {% data variables.product.product_name %} instance.

{% data reusables.enterprise_site_admin_settings.access-settings %}
2. In the left sidebar, click **All users**.
  !["All users" sidebar item in site administrator settings](/assets/images/enterprise/site-admin-settings/all-users.png)
3. In the list of users, click the username you'd like to update the `NameID` mapping for.
  ![Username in list of instance user accounts](/assets/images/enterprise/site-admin-settings/all-users-click-username.png)
{% data reusables.enterprise_site_admin_settings.security-tab %}
5. To the right of "Update SAML NameID", click **Edit** .
  !["Edit" button under "SAML authentication" and to the right of "Update SAML NameID"](/assets/images/enterprise/site-admin-settings/update-saml-nameid-edit.png)
6. In the "NameID" field, type the new `NameID` for the user.
  !["NameID" field in modal dialog with NameID typed](/assets/images/enterprise/site-admin-settings/update-saml-nameid-field-in-modal.png)
7. Click **Update NameID**.
  !["Update NameID" button under updated NameID value within modal](/assets/images/enterprise/site-admin-settings/update-saml-nameid-update.png)
