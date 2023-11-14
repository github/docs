---
title: Provisioning users with SCIM using the REST API
shortTitle: SCIM using REST API
intro: "You can manage the lifecycle of your enterprise's user accounts on {% data variables.location.product_location %} from your identity provider (IdP) using {% data variables.product.company_short %}'s REST API for System for Cross-domain Identity Management (SCIM)."
product: '{% data reusables.gated-features.emus %}'
versions:
  feature: emu-public-scim-schema
type: tutorial
topics:
  - Accounts
  - Authentication
  - Enterprise
  - SSO
---

{% data reusables.scim.ghec-open-scim-beta-note %}

## About provisioning for {% data variables.product.prodname_emus %}

{% data reusables.enterprise_user_management.about-scim-provisioning %} For more information about provisioning on  {% data variables.product.product_name %}, see "[AUTOTITLE](/admin/identity-and-access-management/provisioning-user-accounts-for-enterprise-managed-users/configuring-scim-provisioning-for-enterprise-managed-users#about-provisioning-for-enterprise-managed-users)."

{% data reusables.enterprise_user_management.emu-paved-path-iam-integrations %} If your company does not use a partner IdP, you can configure provisioning from an identity system that communicates with {% data variables.product.company_short %}'s REST API. This guide will help you understand the following topics related to {% data variables.product.company_short %}'s implementation.

- How to review and stream detailed audit logs for your enterprise
- The REST API, including endpoints for SCIM and usage expectations
- Troubleshooting

Alternatively, you can use a partner IdP for both authentication and provisioning. For more information, see "[AUTOTITLE](/admin/identity-and-access-management/understanding-iam-for-enterprises/about-enterprise-managed-users#about-authentication-and-user-provisioning)."

{% data variables.product.company_short %} has not tested every IdP. {% data variables.contact.github_support %} provides limited support for partner IdPs. You may be able to integrate an IdP that adheres to the SCIM specification and {% data variables.product.company_short %}'s guidelines, but for support with the IdP itself or building an integration, refer to the developer's documentation, support team, or other resources.

## Prerequisites

- {% data reusables.scim.emu-prerequisite-authentication %}
- {% data reusables.scim.emu-understand-types-and-support %}
- To integrate with {% data variables.product.company_short %}'s REST API, the IdP must support the System for Cross-domain Identity Management (SCIM) 2.0 standard. For more information, see the following RFCs on the IETF website.

   - [RFC 7642: Definitions, Overview, Concepts, and Requirements](https://tools.ietf.org/html/rfc7642)
   - [RFC 7643: Core Schema](https://tools.ietf.org/html/rfc7643)
   - [RFC 7644: Protocol](https://tools.ietf.org/html/rfc7644)
- {% data variables.product.company_short %} recommends that you only authenticate requests to the REST API endpoints for SCIM using a {% data variables.product.pat_v1 %} associated with your enterprise's setup user. The token requires the **admin:enterprise** scope. For more information, see "[AUTOTITLE](/admin/identity-and-access-management/provisioning-user-accounts-for-enterprise-managed-users/configuring-scim-provisioning-for-enterprise-managed-users#creating-a-personal-access-token)"
- The user records for the systems that you use for authentication and provisioning must share a unique identifier and satisfy {% data variables.product.company_short %}'s matching criteria. For more information, see "[AUTOTITLE](/rest/enterprise-admin/scim#mapping-of-saml-and-scim-data)" in the REST API documentation.
- {% data reusables.enterprise_user_management.authentication-or-provisioning-migration-not-supported %}

## Configuring audit log streaming

The audit log for your enterprise displays details about activity in your enterprise. You can use the audit log to support your configuration of SCIM. For more information, see "[AUTOTITLE](/admin/monitoring-activity-in-your-enterprise/reviewing-audit-logs-for-your-enterprise/about-the-audit-log-for-your-enterprise)."

Due to the volume of events in this log, {% data variables.product.company_short %} retains the data for six months. To ensure that you don't lose audit log data, and to view more granular activity in the audit log, {% data variables.product.company_short %} recommends that you configure audit log streaming. When you stream the audit log, you can optionally choose to stream events for API requests, including requests to endpoints for SCIM provisioning. For more information, see "[AUTOTITLE](/admin/monitoring-activity-in-your-enterprise/reviewing-audit-logs-for-your-enterprise/streaming-the-audit-log-for-your-enterprise)."

## Understanding the REST API for SCIM

To make SCIM calls and manage users, you'll use {% data variables.product.company_short %}'s REST API. For more information about accessing resources in the REST API, see "[AUTOTITLE](/rest/overview/resources-in-the-rest-api)."

- [REST API endpoints for SCIM](#rest-api-endpoints-for-scim)
- [About rate limits](#about-rate-limits)
- [User and group attributes](#user-and-group-attributes)
- [About mapping of external identities](#about-mapping-of-external-identities)
- [Ensuring users have the access you intend](#ensuring-users-have-the-access-you-intend)
- [About suspension and reprovisioning of users](#about-suspension-and-reprovisioning-of-users)

### REST API endpoints for SCIM

The following tables describe the SCIM endpoints offered by the REST API. You can read more information in the REST API documentation. The documentation includes code samples, required headers and path parameters, and HTTP response codes.

For more information about authentication of requests to these endpoints, see "[AUTOTITLE](/rest/enterprise-admin/scim#authentication)" in the REST API documentation.

Requests that don't match the REST API's expectations will return a `400 Bad Request` error.

- [REST API endpoints for user management](#rest-api-endpoints-for-user-management)
- [REST API endpoints for group management](#rest-api-endpoints-for-group-management)

#### REST API endpoints for user management

To provision users, make requests to the following REST API endpoints.

| Action | Method | Endpoint and more information |
| :- | :- | :- |
| Create a user | `POST` | [Provision a SCIM enterprise user](/rest/enterprise-admin/scim#provision-a-scim-enterprise-user) |
| Retrieve a user | `GET` | [Get SCIM provisioning information for an enterprise user](/rest/enterprise-admin/scim#get-scim-provisioning-information-for-an-enterprise-user) |
| Update all of a user's attributes | `PUT` | [Set SCIM information for a provisioned enterprise user](/rest/enterprise-admin/scim#set-scim-information-for-a-provisioned-enterprise-user) |
| Update an individual user attribute | `PATCH` | [Update an attribute for a SCIM enterprise user](/rest/enterprise-admin/scim#update-an-attribute-for-a-scim-enterprise-user) |
| List all users | `GET` | [List SCIM provisioned identities for an enterprise](/rest/enterprise-admin/scim#list-scim-provisioned-identities-for-an-enterprise) |
| Delete a user | `DELETE` | [Delete a SCIM user from an enterprise](/rest/enterprise-admin/scim#delete-a-scim-user-from-an-enterprise) |

#### REST API endpoints for group management

To control access to repositories in your enterprise, your SCIM integration can manage organization and team membership for users via groups on your IdP. For more information, see "[Managing team memberships with identity provider groups](/admin/identity-and-access-management/provisioning-user-accounts-for-enterprise-managed-users/managing-team-memberships-with-identity-provider-groups)."

To manage groups, make requests to the following REST API endpoints.

| Action | Method | Endpoint and more information |
| :- | :- | :- |
| Create a group | `POST` | [Provision a SCIM enterprise group](/rest/enterprise-admin/scim#provision-a-scim-enterprise-group) |
| Retrieve a group | `GET` | [Get SCIM provisioning information for an enterprise group](/rest/enterprise-admin/scim#get-scim-provisioning-information-for-an-enterprise-group) |
| Update all of a group's attributes | `PUT` | [Set SCIM information for a provisioned enterprise group](/rest/enterprise-admin/scim#set-scim-information-for-a-provisioned-enterprise-group) |
| Update an individual group attribute | `PATCH` | [Update an attribute for a SCIM enterprise group](/rest/enterprise-admin/scim#update-an-attribute-for-a-scim-enterprise-group) |
| List all groups | `GET` | [List provisioned SCIM groups for an enterprise](/rest/enterprise-admin/scim#list-provisioned-scim-groups-for-an-enterprise) |
| Delete a group | `DELETE` | [Delete a SCIM group from an enterprise](/rest/enterprise-admin/scim#delete-a-scim-group-from-an-enterprise)

### About rate limits

{% data reusables.scim.emu-scim-rate-limit-details %}

For more information, see "[AUTOTITLE](/rest/overview/rate-limits-for-the-rest-api)."

### User and group attributes

Requests to the REST API support specific attributes for users and groups. For more information, see "[Supported SCIM user attributes](/rest/enterprise-admin/scim#supported-scim-user-attributes)" and "[Supported SCIM group attributes](/rest/enterprise-admin/scim#supported-scim-group-attributes)" in the REST API documentation for SCIM operations.

For example, you can use the `roles` attribute to assign a role in the enterprise to a user or group. If you grant multiple roles to a user, the role with more privileged access takes precedence.

| Role | More information in "Roles in an enterprise" |
| :- | :- |
| `enterprise_owner` | "[Enterprise owners](/admin/managing-accounts-and-repositories/managing-users-in-your-enterprise/roles-in-an-enterprise#enterprise-owners)" |
| `billing_manager` | "[Billing managers](/admin/managing-accounts-and-repositories/managing-users-in-your-enterprise/roles-in-an-enterprise#billing-managers)" |
| `user` | "[Enterprise members](/admin/managing-accounts-and-repositories/managing-users-in-your-enterprise/roles-in-an-enterprise#enterprise-members)" |
| `guest_collaborator` | "[Guest collaborators](/admin/managing-accounts-and-repositories/managing-users-in-your-enterprise/roles-in-an-enterprise#guest-collaborators)" |

### About mapping of external identities

After successful authentication, {% data variables.product.product_name %} links the user who authenticated to an identity provisioned by SCIM. The unique identifiers for authentication and provisioning must match. For more information, see "[SCIM](/rest/enterprise-admin/scim#mapping-of-saml-and-scim-data)" in the REST API documentation.

You can view this mapping on {% data variables.location.product_location %}. For more information, see "[AUTOTITLE](/admin/managing-accounts-and-repositories/managing-users-in-your-enterprise/viewing-and-managing-a-users-saml-access-to-your-enterprise#viewing-and-revoking-a-linked-identity)."

### Ensuring users have the access you intend

If your integration manages access using groups on your IdP, you can validate that users get the access you intend. You can use the REST API to compare your IdP's group memberships with {% data variables.product.prodname_dotcom %}'s understanding of those groups. For more information, see "[AUTOTITLE](/rest/teams/external-groups#about-external-groups)" and "[AUTOTITLE](/rest/teams/teams#get-a-team-by-name)" in the REST API documentation.

### About suspension and reprovisioning of users

You cannot completely delete a {% data variables.enterprise.prodname_managed_user %} on {% data variables.location.product_location %}. Instead, you can either temporarily or permanently suspend the account.

To temporarily suspend a user, sets the user record's `active` attribute to `false` using a `PATCH` or `PUT` request. After you temporarily suspend an account, the user can no longer sign in to access your enterprise on {% data variables.location.product_location %}. For more information, see "[Update an attribute for a SCIM enterprise user](/rest/enterprise-admin/scim#update-an-attribute-for-a-scim-enterprise-user)" or "[Set SCIM information for a provisioned enterprise user](/rest/enterprise-admin/scim#set-scim-information-for-a-provisioned-enterprise-user)" in the REST API documentation for SCIM operations.

To permanently suspend a user, send a `DELETE` request. If you permanently suspend an account, you cannot reactivate the account. For more information, see "[Delete a SCIM user from an enterprise](/rest/enterprise-admin/scim#delete-a-scim-user-from-an-enterprise)" in the REST API documentation for SCIM operations.

To reprovision a user, set the user record's `active` attribute to `true` using a `POST`, `PUT`, or `PATCH` request. If you permanently suspended the account, a subsequent provisioning event will create a new account for the person who's signing in. The newly provisioned account will have no relationship to the original account. For more information, see "[Provision a SCIM enterprise user](/rest/enterprise-admin/scim#provision-a-scim-enterprise-user)", "[Set SCIM information for a provisioned enterprise user](/rest/enterprise-admin/scim#set-scim-information-for-a-provisioned-enterprise-user)," or "[Update an attribute for a SCIM enterprise user](/rest/enterprise-admin/scim#update-an-attribute-for-a-scim-enterprise-user)" in the REST API documentation for SCIM operations.

## Troubleshooting

- If {% data variables.product.prodname_dotcom %} is rate-limiting your requests to the REST API, you can learn more in "[About rate limits](#about-rate-limits)."

- If you enable audit log streaming and stream events for API requests, you can review any requests to the REST API endpoints for SCIM by filtering for events from the `EnterpriseUsersScim` or `EnterpriseGroupsScim` controllers.

- If your integration manages access using groups on your IdP, you can review `external_group` category events in your enterprise's audit log to confirm the success of SCIM calls. You can also view troubleshooting information in the web interface for {% data variables.product.prodname_dotcom %}. For more information, see "[AUTOTITLE](/admin/monitoring-activity-in-your-enterprise/reviewing-audit-logs-for-your-enterprise/audit-log-events-for-your-enterprise#external_group)" and "[AUTOTITLE](/admin/identity-and-access-management/provisioning-user-accounts-for-enterprise-managed-users/troubleshooting-team-membership-with-identity-provider-groups)."

## Further reading

- "[AUTOTITLE](/admin/identity-and-access-management/iam-configuration-reference/username-considerations-for-external-authentication)"
