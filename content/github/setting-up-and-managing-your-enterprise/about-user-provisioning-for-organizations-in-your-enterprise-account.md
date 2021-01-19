---
title: About user provisioning for organizations in your enterprise account
intro: You can manage organization membership in an enterprise account directly from an identity provider (IdP).
product: '{% data reusables.gated-features.enterprise-accounts %}'
versions:
  free-pro-team: '*'
---

{% data reusables.enterprise-accounts.user-provisioning-release-stage %}

{% data reusables.saml.about-user-provisioning-enterprise-account %}

{% data reusables.scim.enterprise-account-scim %} Optionally, you can also enable SAML provisioning and, separately, deprovisioning.

If you configure SCIM for the {% data variables.product.product_name %} application in your IdP, each time you make changes to group membership in your IdP, your IdP will make a SCIM call to {% data variables.product.prodname_dotcom %} to update the corresponding organization's membership. If you enable SAML provisioning, each time an enterprise member accesses a resource protected by your enterprise account's SAML configuration, that SAML assertion will trigger provisioning.

For each SCIM call or SAML assertion, {% data variables.product.product_name %} will check the IdP groups the user belongs to and perform the following operations:

- If the user is a member of an IdP group that corresponds to an organization owned by your enterprise account, and the user is not currently a member of that organization, add the user to the organization (SAML assertion) or send the user an email invitation to join the organization (SCIM call).
- Cancel any existing invitations for the user to join an organization owned by your enterprise account.

For each SCIM call and, if you enable SAML deprovisioning, each SAML assertion, {% data variables.product.product_name %} will also perform the following operation:

- If the user is not a member of an IdP group that corresponds to an organization owned by your enterprise account, and the user is currently a member of that organization, remove the user from the organization.

If deprovisioning removes the last remaining owner from an organization, the organization will become unowned. Enterprise owners can assume ownership of unowned organizations. For more information, see "[Managing unowned organizations in your enterprise account](/github/setting-up-and-managing-your-enterprise/managing-unowned-organizations-in-your-enterprise-account)."

To enable user provisioning for your enterprise account using Okta, see "[Configuring SAML single sign-on and SCIM for your enterprise account using Okta](/github/setting-up-and-managing-your-enterprise/configuring-saml-single-sign-on-and-scim-for-your-enterprise-account-using-okta)."
