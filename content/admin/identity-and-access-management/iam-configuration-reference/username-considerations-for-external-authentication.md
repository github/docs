---
title: Username considerations for external authentication
shortTitle: Username considerations
intro: '{% ifversion ghes or ghec %}When you use {% ifversion ghes %}CAS, LDAP, or SAML for authentication{% elsif ghec %}{% data variables.product.prodname_emus %}{% endif %}, {% endif %}{% data variables.product.product_name %} follows certain rules to determine the username for each user account {% ifversion ghec %}in your enterprise{% elsif ghes %}on your instance{% endif %}.'
versions:
  ghec: '*'
  ghes: '*'
type: reference
topics:
  - Accounts
  - Authentication
  - Enterprise
  - Identity
  - SSO
redirect_from:
  - /admin/identity-and-access-management/managing-iam-for-your-enterprise/username-considerations-for-external-authentication
  - /admin/identity-and-access-management/understanding-iam-for-enterprises/username-considerations-for-external-authentication
---

{% ifversion ghec %}
{% note %}

**Note:** This article only applies to {% data variables.product.prodname_emus %}. If you use {% data variables.product.prodname_ghe_cloud %} without {% data variables.product.prodname_emus %}, usernames are created by users, not {% data variables.product.prodname_dotcom %}.

{% endnote %}
{% endif %}

## About usernames with external authentication

{% ifversion ghes %}

You can configure external authentication for {% data variables.product.product_name %} using CAS, LDAP, or SAML. For more information, see "[AUTOTITLE](/admin/identity-and-access-management/managing-iam-for-your-enterprise/about-authentication-for-your-enterprise#authentication-methods-for-github-enterprise-server)."

When you use external authentication, {% data variables.location.product_location %} automatically creates a username for each person when the person signs into {% data variables.location.product_location %} through your external authentication system for the first time.

{% elsif ghec %}

If you use an enterprise with {% data variables.product.prodname_emus %}, members of your enterprise authenticate to access {% data variables.product.prodname_dotcom %} through your SAML identity provider (IdP). For more information, see "[AUTOTITLE](/admin/identity-and-access-management/using-enterprise-managed-users-for-iam/about-enterprise-managed-users)" and "[AUTOTITLE](/admin/identity-and-access-management/managing-iam-for-your-enterprise/about-authentication-for-your-enterprise#authentication-methods-for-github-enterprise-server)."

{% data variables.product.prodname_dotcom %} automatically creates a username for each person when their user account is provisioned via SCIM, by normalizing an identifier provided by your IdP, then adding an underscore and short code. If multiple identifiers are normalized into the same username, a username conflict occurs, and only the first user account is created. You can resolve username problems by making a change in your IdP so that the normalized usernames will be unique and within the 39-character limit.

{% data reusables.enterprise-accounts.emu-only-emails-within-the-enterprise-can-conflict %}

{% endif %}

{% ifversion ghec %}

## About usernames for {% data variables.enterprise.prodname_managed_users %}

When your {% data variables.enterprise.prodname_emu_enterprise %} is created, you will choose a short code that will be used as the suffix for your enterprise members' usernames. {% data reusables.enterprise-accounts.emu-shortcode %} The setup user who configures SAML SSO has a username in the format of **SHORT-CODE_admin**.

When you provision a new user from your identity provider, the new {% data variables.enterprise.prodname_managed_user %} will have a {% data variables.product.prodname_dotcom %} username in the format of **@IDP-USERNAME_SHORT-CODE**. The IDP-USERNAME component is formed by normalizing the SCIM `userName` attribute value sent from the IdP.

| Identity provider                 | {% data variables.product.prodname_dotcom %} username  |
|-----------------------------------|----------------------|
| Microsoft Entra ID (previously known as Azure AD) | IDP-USERNAME is formed by normalizing the characters preceding the `@` character in the UPN (User Principal Name), which does not include the `#EXT#` for guest accounts. |
| Okta                              | IDP-USERNAME is the normalized username attribute provided by the IdP.               |

These rules may result in your IdP providing the same IDP-USERNAME for multiple users. For example, for Entra ID, the following UPNs will result in the same username:

- `bob@contoso.com`
- `bob@fabrikam.com`
- `bob#EXT#fabrikamcom@contoso.com`
- `bob_example#EXT#fabrikamcom@contoso.com`
- `bob_example.com#EXT#fabrikamcom@contoso.com`

This will cause a username conflict, and only the first user will be provisioned. For more information, see "[Resolving username problems](#resolving-username-problems)."
{% endif %}

Usernames{% ifversion ghec %}, including underscore and short code,{% endif %} must not exceed 39 characters.

## About username normalization

Usernames for user accounts on {% data variables.product.prodname_dotcom %} can only contain alphanumeric characters and dashes (`-`).

{% ifversion ghec %}
When you configure SAML authentication, {% data variables.product.product_name %} uses the SCIM `userName` attribute value sent from the IdP to determine the username for the corresponding user account on {% data variables.product.prodname_dotcom %}. If this value includes unsupported characters, {% data variables.product.product_name %} will normalize the username per the following rules.
{% elsif ghes %}
When you configure CAS, LDAP, or SAML authentication, {% data variables.product.product_name %} uses an identifier from the user account on your external authentication provider to determine the username for the corresponding user account on {% data variables.product.product_name %}. If the identifier includes unsupported characters, {% data variables.product.product_name %} will normalize the username per the following rules.
{% endif %}

1. {% data variables.product.product_name %} will normalize any non-alphanumeric character in your account's username into a dash. For example, a username of `mona.the.octocat` will be normalized to `mona-the-octocat`. Note that normalized usernames also can't start or end with a dash. They also can't contain two consecutive dashes.

1. Usernames created from email addresses are created from the normalized characters that precede the `@` character.

1. Usernames created from domain accounts are created from the normalized characters after the `\\` separator.

1. If multiple accounts are normalized into the same {% data variables.product.product_name %} username, only the first user account is created. Subsequent users with the same username won't be able to sign in. {% ifversion ghec %}For more information, see "[Resolving username problems](#resolving-username-problems)."{% endif %}

### Examples of username normalization

| Identifier on provider | Normalized username on {% data variables.product.prodname_dotcom %} | Result |
| :- | :- | :- |
| The.Octocat | `the-octocat{% ifversion ghec %}_SHORT-CODE{% endif %}` | This username is created successfully. |
| !The.Octocat | `-the-octocat{% ifversion ghec %}_SHORT-CODE{% endif %}` | This username is not created, because it starts with a dash. |
| The.Octocat! | `the-octocat-{% ifversion ghec %}_SHORT-CODE{% endif %}` | This username is not created, because it ends with a dash. |
| The!!Octocat | `the--octocat{% ifversion ghec %}_SHORT-CODE{% endif %}` | This username is not created, because it contains two consecutive dashes. |
| The!Octocat | `the-octocat{% ifversion ghec %}_SHORT-CODE{% endif %}` | This username is not created. Although the normalized username is valid, it already exists. |
| `The.Octocat@example.com` | `the-octocat{% ifversion ghec %}_SHORT-CODE{% endif %}` | This username is not created. Although the normalized username is valid, it already exists. |
| `internal\\The.Octocat` | `the-octocat{% ifversion ghec %}_SHORT-CODE{% endif %}` | This username is not created. Although the normalized username is valid, it already exists. |
| `mona.lisa.the.octocat.from.github.united.states@example.com` | `mona-lisa-the-octocat-from-github-united-states{% ifversion ghec %}_SHORT-CODE{% endif %}` | This username is not created, because it exceeds the 39-character limit. |

{% ifversion not ghec %}

### About username normalization with SAML

{% ifversion ghes %}If you configure SAML authentication for {% data variables.location.product_location %}, {% endif %}{% data variables.product.product_name %} determines each person's username by one of the following assertions in the SAML response, ordered by descending priority.

1. The custom `username` attribute, if defined and present
1. An `http://schemas.xmlsoap.org/ws/2005/05/identity/claims/name` assertion, if present
1. An `http://schemas.xmlsoap.org/ws/2005/05/identity/claims/emailaddress` assertion, if present
1. The `NameID` element

{% data variables.product.product_name %} requires the `NameID` element even if other attributes are present. For more information, see "[AUTOTITLE](/admin/identity-and-access-management/using-saml-for-enterprise-iam/saml-configuration-reference#saml-attributes)."

{% data variables.product.product_name %} creates a mapping between the `NameID` from the IdP and the username on {% data variables.location.product_location %}, so the `NameID` should be persistent, unique, and not subject to change for the lifecycle of the user.

{% ifversion ghes %}
{% note %}

**Note**: If the `NameID` for a user does change on the IdP, the person will see an error message when signing in to {% data variables.location.product_location %}. To restore the person's access, you'll need to update the user account's `NameID` mapping. For more information, see "[AUTOTITLE](/admin/identity-and-access-management/using-saml-for-enterprise-iam/updating-a-users-saml-nameid)."

{% endnote %}
{% endif %}
{% endif %}

{% ifversion ghec %}

## Resolving username problems

When a new user is being provisioned, if the username is longer than 39 characters (including underscore and short code), or conflicts with an existing user in the enterprise, the provisioning attempt will fail with a `409` error.

To resolve this problem, you must make one of the following changes in your IdP so that all normalized usernames will be within the character limit and unique.

- Change the `userName` attribute value for individual users that are causing problems
- Change the `userName` attribute mapping for all users
- Configure a custom `userName` attribute for all users

When you change the attribute mapping, usernames of existing {% data variables.enterprise.prodname_managed_users %} will be updated, but nothing else about the accounts will change, including activity history.

{% note %}

**Note:** {% data variables.contact.github_support %} cannot provide assistance with customizing attribute mappings or configuring custom expressions. You can contact your IdP with any questions.

{% endnote %}

### Resolving username problems with Entra ID

To resolve username problems in Entra ID, either modify the User Principal Name value for the conflicting user or modify the attribute mapping for the `userName` attribute. If you modify the attribute mapping, you can choose an existing attribute or use an expression to ensure that all provisioned users have a unique normalized alias.

1. In Entra ID, open the {% data variables.product.prodname_emu_idp_application %} application.
1. In the left sidebar, click **Provisioning**.
1. Click **Edit Provisioning**.
1. Expand **Mappings**, then click **Provision Entra ID Users**.
1. Click the {% data variables.product.prodname_dotcom %} `userName` attribute mapping.
1. Change the attribute mapping.
   - To map an existing attribute in Entra ID to the `userName` attribute in {% data variables.product.prodname_dotcom %}, click your desired attribute field. Then, save and wait for a provisioning cycle to occur within about 40 minutes.
   - To use an expression instead of an existing attribute, change the Mapping type to "Expression", then add a custom expression that will make this value unique for all users. For example, you could use `[FIRST NAME]-[LAST NAME]-[EMPLOYEE ID]`. For more information, see [Reference for writing expressions for attribute mappings in Microsoft Entra ID](https://learn.microsoft.com/entra/identity/app-provisioning/functions-for-customizing-application-data) on Microsoft Learn.

### Resolving username problems with Okta

To resolve username problems in Okta, update the attribute mapping settings for the {% data variables.product.prodname_emu_idp_application %} application.

1. In Okta, open the {% data variables.product.prodname_emu_idp_application %} application.
1. Click **Sign On**.
1. In the "Settings" section, click **Edit**.
1. Update the "Application username format."
{% endif %}
