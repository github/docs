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

### {% data variables.product.prodname_ghe_cloud %} license usage report (CSV file)

The license usage report for your enterprise is a CSV file that contains the following information about members of your enterprise. Some fields are specific to your {% data variables.product.prodname_ghe_cloud %} (GHEC) deployment, {% data variables.product.prodname_ghe_server %} (GHES) connected environments, or your {% data variables.product.prodname_vs %} subscriptions (VSS) with GitHub Enterprise.

| Field | Description
| ----- | -----------
| github_com_login | The username for the user's GHEC account
| github_com_name | The display name for the user's GHEC account
| github_com_profile | The URL for the user's profile page on GHEC
| github_com_user	| Whether or not the user has an account on GHEC |
| github_com_member_roles | For each of the organizations the user belongs to on GHEC, the organization name and the user's role in that organization (`Owner` or `Member`) separated by a colon<br><br>Organizations delimited by commas |
| github_com_enterprise_role | Can be one of: `Owner`, `Member`, `Outside collaborator` (for an enterprise with personal accounts on {% data variables.product.prodname_dotcom_the_website %}), or `Repository collaborator` (for an enterprise that uses {% data variables.enterprise.prodname_managed_users %})
| github_com_verified_domain_emails | All email addresses associated with the user's GHEC account that match your enterprise's verified domains |
| github_com_saml_name_id | The SAML username |
| github_com_orgs_with_pending_invites | All pending invitations for the user's GHEC account to join organizations within your enterprise |
| {% ifversion ghas-in-license-sync %} |
| github_com_advanced_security_license_user | Whether or not the user consumes a {% data variables.product.prodname_GHAS_cs_or_sp %} license on GHEC |
| {% endif %} |
| license_type | Can be one of: `Visual Studio subscription` or `Enterprise`
| enterprise_server_user| Whether or not the user has at least one account on GHES |
| enterprise_server_primary_emails | The primary email addresses associated with each of the user's GHES accounts |
| enterprise_server_user_ids | For each of the user's GHES accounts, the account's user ID
| {% ifversion ghas-in-license-sync %} |
| enterprise_server_advanced_security_user_ids | The GHES instances where the user is using {% data variables.product.prodname_GHAS_cs_or_sp %} {% ifversion ghec %}(only present if you are using GHES version 3.12 or later, and have enabled license sync){% endif %} |
| {% endif %} |
| total_user_accounts | The total number of accounts the person has across both GHEC and GHES
| visual_studio_subscription_user | Whether or not the user is a {% data variables.visual_studio.prodname_vs_subscriber %} |
| visual_studio_subscription_email | The email address associated with the user's VSS |
| visual_studio_license_status | Whether the Visual Studio license has been matched to a {% data variables.product.company_short %} user |

### {% data variables.product.prodname_ghe_server %} exported license usage (JSON file)

Your {% data variables.product.prodname_ghe_server %} license usage is a JSON file that is typically used when performing a manual sync of user licenses between {% data variables.product.prodname_ghe_server %} and {% data variables.product.prodname_ghe_cloud %} deployments. The file contains the following information specific to your {% data variables.product.prodname_ghe_server %} environment.

| Field | Description
| ----- | -----------
| Features | The {% data variables.product.prodname_github_connect %} features that are enabled on your {% data variables.product.prodname_ghe_server %} instance, and the date and time of enablement.
| Host name | The hostname of your {% data variables.product.prodname_ghe_server %} instance.
| HTTP only | Whether Transport Layer Security (TLS) is enabled and configured on your {% data variables.product.prodname_ghe_server %} instance. Can be one of: `True` or `False`.
| License | A hash of your {% data variables.product.prodname_ghe_server %} license.
| Public key | The public key portion of your {% data variables.product.prodname_ghe_server %} license.
| Server ID | UUID generated for your {% data variables.product.prodname_ghe_server %} instance.
| Version | The version of your {% data variables.product.prodname_ghe_server %} instance.

## Troubleshooting steps

For troubleshooting steps, see [AUTOTITLE](/billing/how-tos/troubleshooting/enterprise-license-usage).
