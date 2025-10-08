---
title: License troubleshooting information for GitHub Enterprise
intro: Troubleshoot license usage for your enterprise by understanding consumption criteria and auditing license reports.
versions:
  ghec: '*'
  ghes: '*'
topics:
  - Billing
  - Enterprise
  - Licensing
shortTitle: Enterprise license troubleshooting
contentType: reference
redirect_from:
  - /billing/reference/license-usage-calculation
  - /billing/reference/license-usage-reference
---

## People who consume a license

A person consumes a license for {% data variables.product.prodname_enterprise %} depending on specific criteria. If a user has not yet accepted an invitation to join your enterprise, the user still consumes a license. For more information about the people in your enterprise who consume a license, see [AUTOTITLE](/billing/managing-the-plan-for-your-github-account/about-per-user-pricing).

## {% data variables.visual_studio.prodname_vs_subscriber %}s

If the verified email address for the personal account of an enterprise member on {% data variables.product.prodname_dotcom %} matches the User Principal Name (UPN) for a subscriber to your {% data variables.product.prodname_vs %} account, the {% data variables.product.prodname_vs %} subscriber will automatically consume one license for {% data variables.visual_studio.prodname_vss_ghec %}.

> [!NOTE] For {% data variables.product.prodname_emu %} only, to make sure a user account consumes a {% data variables.product.prodname_vs %} license, ensure the {% data variables.product.prodname_vs %} UPN matches the SCIM `userName` attribute or the email address from the linked identity on the {% data variables.product.prodname_dotcom %} account.

For more information, see [AUTOTITLE](/enterprise-cloud@latest/billing/managing-billing-for-your-products/managing-licenses-for-visual-studio-subscriptions-with-github-enterprise/about-visual-studio-subscriptions-with-github-enterprise).

## Users of {% data variables.product.prodname_ghe_cloud %} and {% data variables.product.prodname_ghe_server %}

For each user to consume a single {% ifversion enterprise-licensing-language %}license{% else %}seat{% endif %} regardless of how many deployments they use, you must synchronize license usage between {% data variables.product.prodname_ghe_server %} and {% data variables.product.prodname_ghe_cloud %}. For more information, see [AUTOTITLE](/billing/managing-your-license-for-github-enterprise/syncing-license-usage-between-github-enterprise-server-and-github-enterprise-cloud).

After you synchronize license usage, {% data variables.product.prodname_dotcom %} matches user accounts on {% data variables.product.prodname_ghe_server %} with user accounts on {% data variables.product.prodname_ghe_cloud %} by email address.

1. We check the primary email address of each user on {% data variables.product.prodname_ghe_server %}.
1. We attempt to match that address with the email address for a user account on {% data variables.product.prodname_ghe_cloud %}.

### With SAML or SCIM

If your enterprise on {% data variables.product.prodname_ghe_cloud %} or any of the enterprise's organizations use SAML authentication or SCIM provisioning, we first check the linked SAML or SCIM identities to see if the identity contains one of the attributes below. We attempt to match the values of these attributes to the primary email address of each {% data variables.product.prodname_ghe_server %} user.

* `http://schemas.xmlsoap.org/ws/2005/05/identity/claims/name`
* `http://schemas.xmlsoap.org/ws/2005/05/identity/claims/emailaddress`
* `username`
* `NameID`
* `emails`

### Without SAML or SCIM

If there is no match with a SAML or SCIM attribute, or if SAML authentication or SCIM provisioning is not in use, we attempt to match the primary email address on {% data variables.product.prodname_ghe_server %} with a verified email address for a user account on {% data variables.product.prodname_ghe_cloud %}. For more information about verification of email addresses on {% data variables.product.prodname_ghe_cloud %}, see [AUTOTITLE](/enterprise-cloud@latest/account-and-profile/setting-up-and-managing-your-personal-account-on-github/managing-email-preferences/verifying-your-email-address){% ifversion ghes %} in the {% data variables.product.prodname_ghe_cloud %} documentation.{% else %}.{% endif %}

## Fields in the consumed license files

The {% data variables.product.prodname_ghe_cloud %} license usage report and {% data variables.product.prodname_ghe_server %} exported license usage file include a variety of fields to help you troubleshoot license usage for your enterprise.

For details of each field, see [AUTOTITLE](/billing/reference/license-reports#github-enterprise-cloud-license-report).

## Troubleshooting steps

For troubleshooting steps, see [AUTOTITLE](/billing/how-tos/troubleshooting/enterprise-license-usage).
