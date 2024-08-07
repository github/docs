---
title: Provisioning users and groups with SCIM using the REST API
shortTitle: SCIM using REST API
intro: 'Manage the lifecycle of user accounts from your identity provider using {% data variables.product.company_short %}''s REST API for System for Cross-domain Identity Management (SCIM).'
product: '{% data reusables.gated-features.emus %}'
versions:
  ghec: '*'
  feature: scim-for-ghes-public-beta
type: tutorial
redirect_from:
  - /admin/identity-and-access-management/provisioning-user-accounts-for-enterprise-managed-users/provisioning-users-with-scim-using-the-rest-api
  - /admin/identity-and-access-management/provisioning-user-accounts-for-enterprise-managed-users/provisioning-users-and-groups-with-scim-using-the-rest-api
  - /admin/managing-iam/provisioning-user-accounts-for-enterprise-managed-users/provisioning-users-and-groups-with-scim-using-the-rest-api
topics:
  - Accounts
  - Authentication
  - Enterprise
  - SSO
---

{% ifversion ghec %}

{% note %}

**Notes**:

* {% data reusables.scim.ghec-open-scim-release-phase %}
* {% data reusables.scim.ghec-open-scim-test-in-isolation %}

{% endnote %}

{% else %}

{% data reusables.scim.ghes-beta-note %}

{% endif %}

{% ifversion ghec %}

## About IAM for {% data variables.product.prodname_emus %}

If your enterprise on {% data variables.product.prodname_dotcom %} is created for {% data variables.product.prodname_emus %}, you must configure an external identity management system to provision and maintain user accounts. Your identity management system must offer the following functionality:

* Single sign-on authentication implementing one of the following two single sign-on (SSO) standards:
  * Security Assertion Markup Language (SAML) 2.0
  * OpenID Connect (OIDC), which is only supported if you use Microsoft Entra ID (previously known as Azure AD)
* User lifecycle management with System for Cross-domain Identity Management (SCIM)

{% else %}

## About SCIM provisioning on {% data variables.product.product_name %}

To provision and maintain user accounts using SCIM, your identity management system must offer the following functionality:

* Single sign-on authentication implementing Security Assertion Markup Language (SAML) 2.0
* User lifecycle management with System for Cross-domain Identity Management (SCIM)

{% endif %}

When you configure authentication and provisioning for your enterprise, you can either use a partner IdP, or you can use another combination of identity management systems.

* [Using a partner identity provider](#using-a-partner-identity-provider)
* [Using other identity management systems](#using-other-identity-management-systems)

### Using a partner identity provider

Each partner IdP provides a "paved-path" application, which implements both SSO and user lifecycle management. To simplify configuration, {% data variables.product.company_short %} recommends that you use a partner IdP's application for both authentication and provisioning. For more information and a list of partner IdPs, see {% ifversion ghec %}"[AUTOTITLE](/admin/identity-and-access-management/understanding-iam-for-enterprises/about-enterprise-managed-users#identity-management-systems)."{% else %}"[AUTOTITLE](/admin/managing-iam/provisioning-user-accounts-with-scim/user-provisioning-with-scim-on-ghes#supported-identity-providers)."{% endif %}

For more information about configuring SCIM provisioning using a partner IdP, see "[AUTOTITLE](/admin/identity-and-access-management/provisioning-user-accounts-for-enterprise-managed-users/configuring-scim-provisioning-for-enterprise-managed-users)."

### Using other identity management systems

If you cannot use a partner IdP for both authentication and provisioning due to migration overhead, licensing costs, or organizational inertia, you can use another identity management system or combination of systems. The systems must provide authentication using SAML and user lifecycle management using SCIM, and must adhere to {% data variables.product.company_short %}'s integration guidelines.

{% data variables.product.company_short %} has not tested integration with every identity management system. While integration with {% ifversion ghec %}{% data variables.product.prodname_emus %}{% else %}{% data variables.product.product_name %}{% endif %} may be possible, {% data variables.product.company_short %}'s support team may not be able to assist you with issues related to these systems. If you need help with an identity management system that's not a partner IdP, or if you use a partner IdP only for SAML authentication, you must consult the system's documentation, support team, or other resources.

## Prerequisites

{%- ifversion ghec %}
* {% data reusables.enterprise-managed.emu-prerequisite %}
* {% data reusables.scim.emu-prerequisite-authentication %}
* You must enable an open SCIM configuration for your enterprise. For more information, see "[AUTOTITLE](/admin/identity-and-access-management/provisioning-user-accounts-for-enterprise-managed-users/configuring-scim-provisioning-for-enterprise-managed-users#configuring-provisioning-for-other-identity-management-systems)."
* To authenticate requests to the REST API endpoints for SCIM, you must use a {% data variables.product.pat_v1 %} associated with your enterprise's setup user. The token requires the **admin:enterprise** scope. {% data variables.product.company_short %} recommends that you do not configure an expiration date for the token. See "[AUTOTITLE](/admin/managing-iam/understanding-iam-for-enterprises/getting-started-with-enterprise-managed-users#create-a-personal-access-token)."
{%- else %}
To implement SCIM using the REST API, the general prerequisites for using SCIM on {% data variables.product.product_name %} apply. See the "Prerequisites" section in "[AUTOTITLE](/admin/managing-iam/provisioning-user-accounts-with-scim/configuring-scim-provisioning-for-users#prerequisites)."

In addition, the following prerequisites apply:

* You must have completed steps 1 to 3 in "[AUTOTITLE](/admin/managing-iam/provisioning-user-accounts-with-scim/configuring-scim-provisioning-for-users)."
  * You must use the {% data variables.product.pat_v1 %} created for the built-in setup user to authenticate requests to the REST API.
{%- endif %}
{% data reusables.scim.scim-standard-prerequisite %}
* The user records for the systems that you use for authentication and provisioning must share a unique identifier and satisfy {% data variables.product.company_short %}'s matching criteria. For more information, see "[AUTOTITLE](/rest/enterprise-admin/scim#mapping-of-saml-and-scim-data)" in the REST API documentation.

## Best practices for SCIM provisioning with {% data variables.product.prodname_dotcom %}'s REST API

When you configure your identity management system to provision users or groups of users on {% data variables.product.product_name %}, {% data variables.product.company_short %} strongly recommends that you adhere to the following guidelines.

* [Ensure your identity management system is the only source of write operations](#ensure-your-identity-management-system-is-the-only-source-of-write-operations)
* [Send valid requests to REST API endpoints](#send-valid-requests-to-rest-api-endpoints)
* [Provision users before you provision groups](#provision-users-before-you-provision-groups)
* [Validate access for groups on {% data variables.product.prodname_dotcom %}](#validate-access-for-groups-on-github)
* [Understand rate limits on {% data variables.product.prodname_dotcom %}](#understand-rate-limits-on-github)
* [Configure audit log streaming](#configure-audit-log-streaming)

### Ensure your identity management system is the only source of write operations

To ensure that your environment has a single source of truth, you should only programmatically write to the REST API for SCIM provisioning from your identity management system. {% data variables.product.company_short %} strongly recommends that only one system sends `POST`, `PUT`, `PATCH`, or `DELETE` requests to the API.

However, you can safely retrieve information from {% data variables.product.company_short %}'s APIs with `GET` requests in scripts or ad hoc requests by an enterprise owner.

{% warning %}

**Warning:** If you use a partner IdP for SCIM provisioning, the application on the IdP must be the only system that makes write requests to the API. If you make ad hoc requests using the  `POST`, `PUT`, `PATCH`, or `DELETE` methods, subsequent synchronization attempts will fail, and provisioning won't function properly for your enterprise.

{% endwarning %}

### Send valid requests to REST API endpoints

{% data variables.product.prodname_dotcom %}'s REST API endpoints for provisioning users with SCIM require well-formed requests. Bear in mind the following guidelines:

* Requests that don't match the API's expectations will return a `400 Bad Request` error.
* REST API endpoints for provisioning users with SCIM require a `User-Agent` header. {% data variables.product.product_name %} will reject requests without this header.

### Provision users before you provision groups

SCIM groups are effective for the management of user access at scale. For example, you can use groups on your identity management system to manage team and organization membership on {% data variables.product.product_name %}.

To manage team membership with groups on your identity management system, you must sequentially complete the following steps:

1. Provision user accounts on {% data variables.product.product_name %}.
1. Provision a group on {% data variables.product.product_name %}.
1. Update the membership of the group on your identity management system.
1. Create a team on {% data variables.product.product_name %} that's mapped to the group on your identity management system.

### Validate access for groups on {% data variables.product.prodname_dotcom %}

If you manage access using groups on your identity management system, you can validate that users get the access you intend. You can use the REST API to compare your system's group memberships with {% data variables.product.prodname_dotcom %}'s understanding of those groups. For more information, see "[AUTOTITLE](/rest/teams/external-groups#about-external-groups)" and "[AUTOTITLE](/rest/teams/teams#get-a-team-by-name)" in the REST API documentation.

### Understand rate limits on {% data variables.product.prodname_dotcom %}

{% ifversion ghec %}
To ensure the availability and reliability of the platform, {% data variables.product.company_short %} implements rate limits.

Without considering rate limits, large enterprises onboarding with {% data variables.product.prodname_emus %} for the first time are likely to exceed the limits. {% data reusables.scim.emu-scim-rate-limit-details %}
{% else %}
If a site administrator has enabled rate limits on your instance, you may encounter errors when you provision users for the first time. You can review your IdP logs to confirm if attempted SCIM provisioning or push operations failed due to a rate limit error. The response to a failed provisioning attempt will depend on the IdP.
{% endif %}

For more information, see "[AUTOTITLE](/rest/using-the-rest-api/rate-limits-for-the-rest-api)."

### Configure audit log streaming

The audit log for your enterprise displays details about activity in your enterprise. You can use the audit log to support your configuration of SCIM. For more information, see "[AUTOTITLE](/admin/monitoring-activity-in-your-enterprise/reviewing-audit-logs-for-your-enterprise/about-the-audit-log-for-your-enterprise)."

Due to the volume of events in this log, {% data variables.product.company_short %} retains the data for 180 days. To ensure that you don't lose audit log data, and to view more granular activity in the audit log, {% data variables.product.company_short %} recommends that you configure audit log streaming. When you stream the audit log, you can optionally choose to stream events for API requests, including requests to REST API endpoints for SCIM provisioning. For more information, see "[AUTOTITLE](/admin/monitoring-activity-in-your-enterprise/reviewing-audit-logs-for-your-enterprise/streaming-the-audit-log-for-your-enterprise)."

## Provisioning users with the REST API

To provision, list, or manage users, make requests to the following REST API endpoints. You can read about the associated API endpoints in the REST API documentation and see code examples, and you can review audit log events associated with each request.

Before a person with an identity on your identity management system can sign in to your enterprise, you must create the corresponding user. Your enterprise doesn't require an available license to provision a new user account.

* For an overview of the supported attributes for users, see "[SCIM](/rest/enterprise-admin/scim#supported-scim-user-attributes)" in the REST API documentation.
* You can view provisioned users in the web UI for {% data variables.product.product_name %}. For more information, see "[AUTOTITLE](/admin/managing-accounts-and-repositories/managing-users-in-your-enterprise/viewing-people-in-your-enterprise)."

| Action | Method | Endpoint and more information |  Events in the audit log |
| :- | :- | :- | :- |
| List all provisioned users for your enterprise, which includes all users who are soft-deprovisioned by setting `active` to `false`. | `GET` | [`/scim/v2/{% ifversion ghec %}enterprises/{enterprise}/{% endif %}Users`](/rest/enterprise-admin/scim#list-scim-provisioned-identities-for-an-enterprise) | N/A |
| Create a user. The API's response includes an `id` field for uniquely identifying the user. | `POST` | [`/scim/v2/{% ifversion ghec %}enterprises/{enterprise}/{% endif %}Users`](/rest/enterprise-admin/scim#provision-a-scim-enterprise-user) | <ul><li>`external_identity.provision`</li><li>`user.create`</li><li>If request adds the `enterprise_owner` role, `business.add_admin`</li><li>If request adds the `billing_manager` role, `business.add_billing_manager`</li>{% ifversion ghes %}<li>If request succeeds, `external_identity.scim_api_success`</li><li>If request fails, `external_identity.scim_api_failure`</li>{% endif %}</ul> |
| Retrieve an existing user in your enterprise using the `id` field from the `POST` request that you sent to create the user. | `GET` | [`/scim/v2/{% ifversion ghec %}enterprises/{enterprise}/{% endif %}Users/{scim_user_id}`](/rest/enterprise-admin/scim#get-scim-provisioning-information-for-an-enterprise-user) | N/A |
| Update all of an existing user's attributes using the `id` field from the `POST` request that you sent to create the user. Update `active` to `false` to soft-deprovision the user, or `true` to reactivate the user. {% data reusables.scim.public-scim-more-info-about-deprovisioning-and-reactivating %}  | `PUT` | [`/scim/v2/{% ifversion ghec %}enterprises/{enterprise}/{% endif %}Users/{scim_user_id}`](/rest/enterprise-admin/scim#set-scim-information-for-a-provisioned-enterprise-user) | {% data reusables.scim.public-scim-put-or-patch-user-audit-log-events %} |
| Update an individual attribute for an existing user using the `id` field from the `POST` request that you sent to create the user. Update `active` to `false` to soft-deprovision the user, or `true` to reactivate the user. {% data reusables.scim.public-scim-more-info-about-deprovisioning-and-reactivating %} | `PATCH` | [`/scim/v2/{% ifversion ghec %}enterprises/{enterprise}/{% endif %}Users/{scim_user_id}`](/rest/enterprise-admin/scim#update-an-attribute-for-a-scim-enterprise-user) | {% data reusables.scim.public-scim-put-or-patch-user-audit-log-events %} |
| To completely delete an existing user, you can hard-deprovision the user. After hard-deprovisioning, you cannot reactivate the user, and you must provision the user as a new user. For more information, see "[Hard-deprovisioning users with the REST API](#hard-deprovisioning-users-with-the-rest-api)." | `DELETE` | [`/scim/v2/{% ifversion ghec %}enterprises/{enterprise}/{% endif %}Users/{scim_user_id}`](/rest/enterprise-admin/scim#delete-a-scim-user-from-an-enterprise) | <ul><li>`external_identity.deprovision`</li><li>`user.remove_email`</li>{% ifversion ghes %}<li>If request succeeds, `external_identity.scim_api_success`</li><li>If request fails, `external_identity.scim_api_failure`</li>{% endif %}</ul> |

## Soft-deprovisioning users with the REST API

To prevent a user from signing in to access your enterprise, you can soft-deprovision the user by sending a `PUT` or `PATCH` request to update a user's `active` field to `false` to `/scim/v2/{% ifversion ghec %}enterprises/{enterprise}/{% endif %}Users/{scim_user_id}`. When you soft-deprovision a user, {% data variables.product.product_name %} obfuscates the user record's `login` and `email` fields, and the user is suspended.

When you soft-deprovision a user, the `external_identity.update` event does not appear in the audit log. The following events appear in the audit log:

* `user.suspend`
* `user.remove_email`
* `user.rename`
* `external_identity.deprovision`
{%- ifversion ghes %}
* If the request succeeds, `external_identity.scim_api_success`
* If the request fails, `external_identity.scim_api_failure`
{%- endif %}

You can view all suspended users for your enterprise. For more information, see "[AUTOTITLE](/admin/managing-accounts-and-repositories/managing-users-in-your-enterprise/viewing-people-in-your-enterprise#viewing-suspended-members).

## Reactivating users with the REST API

To allow a soft-deprovisioned user to sign in to access your enterprise, unsuspend the user by sending a `PUT` or `PATCH` request to `/scim/v2/{% ifversion ghec %}enterprises/{enterprise}/{% endif %}Users/{scim_user_id}` that updates the user's `active` field to `true`.

When you reactivate a user, the `external_identity.update` event does not appear in the audit log. The following events appear in the audit log:

* `user.unsuspend`
* `user.remove_email`
* `user.rename`
* `external_identity.provision`
{%- ifversion ghes %}
* If the request succeeds, `external_identity.scim_api_success`
* If the request fails, `external_identity.scim_api_failure`
{%- endif %}

## Hard-deprovisioning users with the REST API

To completely delete a user, you can hard-deprovision the user by sending a `DELETE` request to `/scim/v2/{% ifversion ghec %}enterprises/{enterprise}/{% endif %}Users/{scim_user_id}`. Your enterprise will retain any resources and comments created by the user.

When you hard-deprovision a user, the following events occur:

* The user record's `login` and `email` fields are obfuscated.
* The user's display name is set to an empty string.
* {% data variables.product.product_name %} deletes all of the user's SCIM attributes, emails, SSH keys, {% data variables.product.pat_generic_plural %}, and GPG keys.
* The user's account on {% data variables.product.product_name %} is suspended, and authentication to sign in to the account will fail.

To reprovision the user, you must use the `POST` method to create a new user. The new user can reuse the deprovisioned user's `login`. If the email addresses of the hard-deprovisioned user and the new user match, {% data variables.product.product_name %} will attribute existing Git commits associated with the email address to the new user. Existing resources and comments created by the original user will not be associated with the new user.

## Provisioning groups with the REST API

To control access to repositories in your enterprise, you can use groups on your identity management system to control organization and team membership for users in your enterprise. You can read about the associated API endpoints in the REST API documentation and see code examples, and you can review audit log events associated with each request.

While your enterprise doesn't require an available license to provision a new user account, if you provision a group that results in the addition of users to an organization, you must have available licenses for those users.{% ifversion ghec %} If your enterprise only uses {% data variables.visual_studio.prodname_vss_ghe %}, the associated user must be assigned to a subscriber. For more information, see "[AUTOTITLE](/billing/managing-licenses-for-visual-studio-subscriptions-with-github-enterprise/about-visual-studio-subscriptions-with-github-enterprise#about-licenses-for-visual-studio-subscriptions-with-github-enterprise)."{% endif %}

* For an overview of the supported attributes for groups, see "[SCIM](/rest/enterprise-admin/scim#supported-scim-group-attributes)" in the REST API documentation.
* For an overview of audit log events related to groups, see "[AUTOTITLE](/admin/monitoring-activity-in-your-enterprise/reviewing-audit-logs-for-your-enterprise/audit-log-events-for-your-enterprise#external_group)."
* You can view provisioned groups in the web UI for {% data variables.product.product_name %}. For more information, see "[AUTOTITLE](/admin/identity-and-access-management/provisioning-user-accounts-for-enterprise-managed-users/managing-team-memberships-with-identity-provider-groups#viewing-idp-groups-group-membership-and-connected-teams)."

| Action | Method | Endpoint and more information | Related events in the audit log |
| :- | :- | :- | :- |
| List all groups defined for your enterprise. | `GET` | [`/scim/v2/{% ifversion ghec %}enterprises/{enterprise}/{% endif %}Groups`](/rest/enterprise-admin/scim#list-provisioned-scim-groups-for-an-enterprise) | N/A |
| To define a new IdP group for your enterprise, create the group. The API's response includes an `id` field for uniquely identifying the group. | `POST` | [`/scim/v2/{% ifversion ghec %}enterprises/{enterprise}/{% endif %}Groups`](/rest/enterprise-admin/scim#provision-a-scim-enterprise-group) | <ul><li>`external_group.provision`</li><li>`external_group.update_display_name`</li><li>If the request included a list of users, `external_group.add_member`</li>{% ifversion ghes %}<li>If request succeeds, `external_group.scim_api_success`</li><li>If request fails, `external_group.scim_api_failure`</li>{% endif %}</ul> |
| Retrieve an existing group for your enterprise using the `id` from the `POST` request that you sent to create the group. | `GET` | [`/scim/v2/{% ifversion ghec %}enterprises/{enterprise}/{% endif %}Groups/{scim_group_id}`](/rest/enterprise-admin/scim#get-scim-provisioning-information-for-an-enterprise-group) | N/A |
| Update all of the attributes for an existing group. | `PUT` | [`/scim/v2/{% ifversion ghec %}enterprises/{enterprise}/{% endif %}Groups/{scim_group_id}`](/rest/enterprise-admin/scim#set-scim-information-for-a-provisioned-enterprise-group) | {% data reusables.scim.public-scim-put-or-patch-group-audit-log-events %} |
| Update an individual attribute for an existing group. | `PATCH` | [`/scim/v2/{% ifversion ghec %}enterprises/{enterprise}/{% endif %}Groups/{scim_group_id}`](/rest/enterprise-admin/scim#update-an-attribute-for-a-scim-enterprise-group) | {% data reusables.scim.public-scim-put-or-patch-group-audit-log-events %} |
| Completely delete an existing group. | `DELETE` | [`/scim/v2/{% ifversion ghec %}enterprises/{enterprise}/{% endif %}Groups/{scim_group_id}`](/rest/enterprise-admin/scim#delete-a-scim-group-from-an-enterprise) | <ul><li>`external_group.delete`</li><li>If the request deletes a group linked to a team in an organization where the user has no other team membership, `org.remove_member`</li><li>If the request deletes a group linked to a team in an organization where the user has other team membership, `team.remove_member`</li>{% ifversion ghes %}<li>If request succeeds, `external_group.scim_api_success`</li><li>If request fails, `external_group.scim_api_failure`</li>{% endif %}</ul> |

### Additional audit log events for changes to IdP groups

If you update the members of an existing group using a `PUT` or `PATCH` request to `/scim/v2/{% ifversion ghec %}enterprises/{enterprise}/{% endif %}Groups/{scim_group_id}`, {% data variables.product.product_name %} may add the user to the organization or remove the user from the organization depending on the user's current organization membership. If the user is already a member of at least one team in the organization, the user is a member of the organization. If the user is not a member of any teams in the organization, the user may also not already be a member of the organization.

If your request updates a group linked to a team in an organization where a user is not already a member, in addition to `external_group.update`, the following events appear in the audit log:

* `org.add_member`
* If the request adds a user to a group that's linked to a team in an organization where the user is not already a member, `org.add_member`
* If the request adds the user to a group that's linked to a team in an organization, `team.add_member`

If your request updates a group linked to a team in an organization where a user is already a member, in addition to `external_group.update`, the following events appear in the audit log:

* If the request removes the user from a group that's linked to a team in an organization, and the team is not the last team in the organization where the user is a member, `team.remove_member`
* If the request removes a user from a group that's linked to the last team in an organization where the user is already a member, `org.remove_member`

{% ifversion ghec %}

## Migrating to a new SCIM provider

After you configure SCIM provisioning for your enterprise, you may need to migrate to a new SCIM provider. For more information, see "[AUTOTITLE](/admin/identity-and-access-management/reconfiguring-iam-for-enterprise-managed-users/migrating-your-enterprise-to-a-new-identity-provider-or-tenant)."

{% endif %}

## Troubleshooting SCIM provisioning

* If your requests to the REST API are rate-limited, you can learn more in "[Understand rate limits on {% data variables.product.prodname_dotcom %}](#understand-rate-limits-on-github)."

* If you enable audit log streaming and stream events for API requests, you can review any requests to the REST API endpoints for SCIM provisioning by filtering for events from the `EnterpriseUsersScim` or `EnterpriseGroupsScim` controllers.

* If a SCIM request fails and you're unable to determine the cause, check the status of your identity management system to ensure that services were available.{% ifversion ghec %} Additionally, check {% data variables.product.company_short %}'s status page. For more information, see "[AUTOTITLE](/support/learning-about-github-support/about-github-support#about-github-status)."{% endif %}

* If a request to provision a user fails with a `400` error, and the error message in your identity management system's log indicates issues with account ownership or username formatting, review "[AUTOTITLE](/admin/identity-and-access-management/iam-configuration-reference/username-considerations-for-external-authentication)."

* After successful authentication, {% data variables.product.product_name %} links the user who authenticated to an identity provisioned by SCIM. The unique identifiers for authentication and provisioning must match. For more information, see "[AUTOTITLE](/rest/enterprise-admin/scim#mapping-of-saml-and-scim-data)."{% ifversion ghec %} You can also view this mapping on {% data variables.location.product_location %}. See "[AUTOTITLE](/admin/managing-accounts-and-repositories/managing-users-in-your-enterprise/viewing-and-managing-a-users-saml-access-to-your-enterprise#viewing-and-revoking-a-linked-identity)."{% endif %}

* If you manage access using groups on your identity management system, you can troubleshoot using the REST API or web UI for {% data variables.product.product_name %}.

   * You can use the REST API to compare your identity management system's group memberships with {% data variables.product.prodname_dotcom %}'s understanding of those groups. See "[AUTOTITLE](/rest/teams/external-groups#about-external-groups)" and "[AUTOTITLE](/rest/teams/teams#get-a-team-by-name)."
   * For more information about troubleshooting using the web UI, see "[AUTOTITLE](/admin/identity-and-access-management/provisioning-user-accounts-for-enterprise-managed-users/troubleshooting-team-membership-with-identity-provider-groups)."

For additional troubleshooting suggestions, see "[AUTOTITLE](/admin/identity-and-access-management/understanding-iam-for-enterprises/troubleshooting-identity-and-access-management-for-your-enterprise#scim-provisioning-errors)."
