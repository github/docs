---
title: Troubleshooting identity and access management for your organization
intro: 'Review and resolve common troubleshooting errors for managing your organization''s SAML SSO, team synchronization, or identity provider (IdP) connection.'
versions:
  ghec: '*'
topics:
  - Organizations
  - Teams
shortTitle: Troubleshooting access
redirect_from:
  - /organizations/managing-saml-single-sign-on-for-your-organization/troubleshooting-identity-and-access-management
---

{% data reusables.saml.current-time-earlier-than-notbefore-condition %}

{% data reusables.saml.authentication-loop %}

## Some users are not provisioned or deprovisioned by SCIM

When you encounter provisioning issues with users, we recommend that you check if the users are missing SCIM metadata.

{% data reusables.scim.changes-should-come-from-idp %}

If an organization member has missing SCIM metadata, then you can re-provision SCIM for the user manually through your IdP.

### Auditing users for missing SCIM metadata

If you suspect or notice that any users are not provisioned or deprovisioned as expected, we recommend that you audit all users in your organization.

To check whether users have a SCIM identity (SCIM metadata) in their external identity, you can review SCIM metadata for one organization member at a time on {% data variables.product.prodname_dotcom %} or you can programatically check all organization members using the {% data variables.product.prodname_dotcom %} API.

When the IdP sends a provisioning call to the {% data variables.product.prodname_dotcom %} SCIM API, the SCIM `userName` in that API call needs to match the stored SAML `nameID` in the user's linked SAML identity in the organization. If these two values do not match, the SCIM metadata will not get populated, and the SCIM identity will not get successfully linked. To check whether these values match, use the {% data variables.product.prodname_dotcom %} API.

#### Auditing organization members on {% data variables.product.prodname_dotcom %}

As an organization owner, to confirm that SCIM metadata exists for a single organization member, visit this URL, replacing `<organization>` and `<username>`:

> `https://github.com/orgs/<organization>/people/<username>/sso`

If the user's external identity includes SCIM metadata, the organization owner should see a SCIM identity section on that page. If their external identity does not include any SCIM metadata, the SCIM Identity section will not exist.

#### Auditing organization members through the {% data variables.product.prodname_dotcom %} API

As an organization owner, you can also query the SCIM REST API or GraphQL to list all SCIM provisioned identities in an organization.

#### Using the REST API

The SCIM REST API will only return data for users that have SCIM metadata populated under their external identities. We recommend you compare a list of SCIM provisioned identities with a list of all your organization members.

For more information, see:
- "[AUTOTITLE](/rest/scim#list-scim-provisioned-identities)"
- "[AUTOTITLE](/rest/orgs#list-organization-members)"

#### Using GraphQL

This GraphQL query shows you the SAML `NameId`, the SCIM `UserName` and the {% data variables.product.prodname_dotcom %} username (`login`) for each user in the organization. To use this query, replace `ORG` with your organization name.

```graphql
{
  organization(login: "ORG") {
    samlIdentityProvider {
      ssoUrl
      externalIdentities(first: 100) {
        edges {
          node {
            samlIdentity {
              nameId
            }
            scimIdentity {
              username
            }
            user {
              login
            }
          }
        }
      }
    }
  }
}
```

```shell
curl -X POST -H "Authorization: Bearer YOUR_TOKEN" -H "Content-Type: application/json" -d '{ "query": "{ organization(login: \"ORG\") { samlIdentityProvider { externalIdentities(first: 100) { pageInfo { endCursor startCursor hasNextPage } edges { cursor node { samlIdentity { nameId } scimIdentity {username}  user { login } } } } } } }" }'  https://api.github.com/graphql
```

For more information on using the GraphQL API, see:
- "[AUTOTITLE](/graphql/guides)"
- "[AUTOTITLE](/graphql/overview/explorer)"

### Re-provisioning SCIM for users through your identity provider

You can re-provision SCIM for users manually through your IdP. For example, to resolve provisioning errors for Okta, in the Okta admin portal, you can unassign and reassign users to the {% data variables.product.prodname_dotcom %} app. This should trigger Okta to make an API call to populate the SCIM metadata for these users on {% data variables.product.prodname_dotcom %}. For more information, see "[Unassign users from applications](https://help.okta.com/en/prod/Content/Topics/users-groups-profiles/usgp-unassign-apps.htm)" or "[Assign users to applications](https://help.okta.com/en/prod/Content/Topics/users-groups-profiles/usgp-assign-apps.htm)" in the Okta documentation.

To confirm that a user's SCIM identity is created, we recommend testing this process with a single organization member whom you have confirmed doesn't have a SCIM external identity. After manually updating the users in your IdP, you can check if the user's SCIM identity was created using the SCIM API or on {% data variables.product.prodname_dotcom %}. For more information, see "[Auditing users for missing SCIM metadata](#auditing-users-for-missing-scim-metadata)" or the REST API endpoint "[AUTOTITLE](/rest/scim#get-scim-provisioning-information-for-a-user)."

If re-provisioning SCIM for users doesn't help, please contact {% data variables.product.prodname_dotcom %} Support.

## Further reading

- "[AUTOTITLE](/admin/identity-and-access-management/managing-iam-for-your-enterprise/troubleshooting-identity-and-access-management-for-your-enterprise)"
