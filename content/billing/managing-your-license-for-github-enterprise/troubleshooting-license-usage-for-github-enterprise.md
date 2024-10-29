---
title: Troubleshooting license usage for GitHub Enterprise
intro: You can troubleshoot license usage for your enterprise by auditing license reports.
permissions: 'Enterprise owners can review license usage for {% data variables.product.prodname_enterprise %}.'
versions:
  ghec: '*'
  ghes: '*'
type: how_to
topics:
  - Enterprise
  - Licensing
shortTitle: Troubleshoot license usage
---

## About unexpected license usage

If the number of consumed licenses for your enterprise is unexpected, you can review your consumed license report to audit your license usage across all your enterprise deployments and subscriptions. For more information, see "[AUTOTITLE](/billing/managing-your-license-for-github-enterprise/viewing-license-usage-for-github-enterprise)" and "[AUTOTITLE](/billing/managing-the-plan-for-your-github-account/viewing-the-subscription-and-usage-for-your-enterprise-account)."

If you find errors, you can try troubleshooting steps.

For privacy reasons, enterprise owners cannot directly access the details of user accounts unless you use {% data variables.product.prodname_emus %}.

## About the calculation of consumed licenses

{% note %}

**Note:** For {% data variables.visual_studio.prodname_vs_subscriber %}s, see "[AUTOTITLE](/enterprise-cloud@latest/billing/managing-billing-for-your-products/managing-licenses-for-visual-studio-subscriptions-with-github-enterprise/about-visual-studio-subscriptions-with-github-enterprise)."

{% endnote %}

A person consumes a license for {% data variables.product.prodname_enterprise %} depending on specific criteria. If a user has not yet accepted an invitation to join your enterprise, the user still consumes a license. For more information about the people in your enterprise who consume a license, see "[AUTOTITLE](/billing/managing-the-plan-for-your-github-account/about-per-user-pricing)."

For each user to consume a single seat regardless of how many deployments they use, you must synchronize license usage between {% data variables.product.prodname_ghe_server %} and {% data variables.product.prodname_ghe_cloud %}. For more information, see "[AUTOTITLE](/billing/managing-your-license-for-github-enterprise/syncing-license-usage-between-github-enterprise-server-and-github-enterprise-cloud)."

After you synchronize license usage, {% data variables.product.prodname_dotcom %} matches user accounts on {% data variables.product.prodname_ghe_server %} with user accounts on {% data variables.product.prodname_ghe_cloud %} by email address.

First, we check the primary email address of each user on {% data variables.product.prodname_ghe_server %}. Then, we attempt to match that address with the email address for a user account on {% data variables.product.prodname_ghe_cloud %}. If your enterprise on {% data variables.product.prodname_dotcom_the_website %} or any of the enterprise's organizations use SAML authentication or SCIM provisioning, we first check the linked SAML or SCIM identities to see if the identity contains one of the attributes below. We attempt to match the values of these attributes to the primary email address of each {% data variables.product.prodname_ghe_server %} user.

* `http://schemas.xmlsoap.org/ws/2005/05/identity/claims/name`
* `http://schemas.xmlsoap.org/ws/2005/05/identity/claims/emailaddress`
* `username`
* `NameID`
* `emails`

If there is no match, or if SAML authentication or SCIM provisioning is not in use, we attempt to match the primary email address on {% data variables.product.prodname_ghe_server %} with a verified email address for a user account on {% data variables.product.prodname_dotcom_the_website %}. For more information about verification of email addresses on {% data variables.product.prodname_dotcom_the_website %}, see "[AUTOTITLE](/enterprise-cloud@latest/account-and-profile/setting-up-and-managing-your-personal-account-on-github/managing-email-preferences/verifying-your-email-address){% ifversion not ghec %}" in the {% data variables.product.prodname_ghe_cloud %} documentation.{% else %}."{% endif %}

## Fields in the consumed license files

The {% data variables.product.prodname_dotcom_the_website %} license usage report and {% data variables.product.prodname_ghe_server %} exported license usage file include a variety of fields to help you troubleshoot license usage for your enterprise.

### {% data variables.product.prodname_dotcom_the_website %} license usage report (CSV file)

The license usage report for your enterprise is a CSV file that contains the following information about members of your enterprise. Some fields are specific to your {% data variables.product.prodname_ghe_cloud %} (GHEC) deployment, {% data variables.product.prodname_ghe_server %} (GHES) connected environments, or your {% data variables.product.prodname_vs %} subscriptions (VSS) with GitHub Enterprise.

| Field | Description
| ----- | -----------
| github_com_login | The username for the user's GHEC account
| github_com_name | The display name for the user's GHEC account
| github_com_profile | The URL for the user's profile page on GHEC
| github_com_user	| Whether or not the user has an account on GHEC |
| github_com_member_roles | For each of the organizations the user belongs to on GHEC, the organization name and the user's role in that organization (`Owner` or `Member`) separated by a colon<br><br>Organizations delimited by commas |
| github_com_enterprise_role | Can be one of: `Owner`, `Member`, `Outside collaborator` (for an enterprise with personal accounts on {% data variables.product.prodname_dotcom_the_website %}), or `Repository collaborator` (for an enterprise that uses {% data variables.enterprise.prodname_managed_users %} on {% data variables.product.prodname_dotcom_the_website %})
| github_com_verified_domain_emails | All email addresses associated with the user's GHEC account that match your enterprise's verified domains |
| github_com_saml_name_id | The SAML username |
| github_com_orgs_with_pending_invites | All pending invitations for the user's GHEC account to join organizations within your enterprise |
| {% ifversion ghas-in-license-sync %} |
| github_com_advanced_security_license_user | Whether or not the user consumes a {% data variables.product.prodname_GH_advanced_security %} license on GHEC |
| {% endif %} |
| license_type | Can be one of: `Visual Studio subscription` or `Enterprise`
| enterprise_server_user| Whether or not the user has at least one account on GHES |
| enterprise_server_primary_emails | The primary email addresses associated with each of the user's GHES accounts |
| enterprise_server_user_ids | For each of the user's GHES accounts, the account's user ID
| {% ifversion ghas-in-license-sync %} |
| enterprise_server_advanced_security_user_ids | The GHES instances where the user is using {% data variables.product.prodname_GH_advanced_security %} {% ifversion ghec %}(only present if you are using GHES version 3.12 or later, and have enabled license sync){% endif %} |
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

## Troubleshooting consumed licenses

To ensure that the each user is only consuming a single seat for different deployments and subscriptions, try the following troubleshooting steps.

1. To help identify users that are consuming multiple seats, if your enterprise uses verified domains for {% data variables.product.prodname_ghe_cloud %}, review the list of enterprise members who do not have an email address from a verified domain associated with their account on {% data variables.product.prodname_dotcom_the_website %}. Often, these are the users who erroneously consume more than one licensed seat. For more information, see "[AUTOTITLE](/admin/user-management/managing-users-in-your-enterprise/viewing-people-in-your-enterprise#viewing-members-without-an-email-address-from-a-verified-domain)."

   {% note %}

   **Note:** To make troubleshooting easier, we recommend using verified domains with your enterprise account on {% data variables.product.prodname_dotcom_the_website %}. For more information, see "[AUTOTITLE](/enterprise-cloud@latest/admin/configuration/configuring-your-enterprise/verifying-or-approving-a-domain-for-your-enterprise)."

   {% endnote %}

1. After you identify users who are consuming multiple seats, make sure that the same email address is associated with all of the user's accounts. For more information about which email addresses must match, see "[About the calculation of consumed licenses](#about-the-calculation-of-consumed-licenses)."
1. If an email address was recently updated or verified to correct a mismatch, view the timestamp of the last license sync job. If a job hasn't run since the correction was made, manually trigger a new job. For more information, see "[AUTOTITLE](/billing/managing-your-license-for-github-enterprise/syncing-license-usage-between-github-enterprise-server-and-github-enterprise-cloud)."

If you still have questions about your consumed licenses after reviewing the troubleshooting information above, you can contact {% data variables.contact.github_support %} through the {% data variables.contact.contact_enterprise_portal %}.
