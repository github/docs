---
title: Deprovisioning and reinstating users with SCIM
shortTitle: Deprovision and reinstate users
intro: 'Learn details about deprovisioning or reinstating users{% ifversion ghec %} with {% data variables.product.prodname_emus %}{% endif %}.'
versions:
  ghec: '*'
  feature: scim-for-ghes-public-beta
type: overview
topics:
  - Accounts
  - Authentication
  - Enterprise
  - Identity
  - SSO
allowTitleToDifferFromFilename: true
product: 'Enterprises that use {% data variables.product.prodname_emus %}, or {% data variables.product.prodname_ghe_server %} instances with SCIM enabled'
---

{% data reusables.scim.ghes-beta-note %}

If you {% ifversion ghec %}use {% data variables.product.prodname_emus %}{% else %}have enabled SCIM for {% data variables.location.product_location %}{% endif %}, you will use SCIM to:

* Deprovision users and groups to remove their access.
* Reprovision users that were previously deprovisioned.

Before you deprovision a user, it's important to understand the effects of deprovisioning, which depend on the **type of deprovisioning API call** that {% data variables.product.github %} receives from your identity provider.

>[!IMPORTANT] Before reading further, ensure you understand how your enterprise has implemented SCIM. {% data variables.product.company_short %} provides a "paved-path" application if you use a supported identity provider (IdP) for both authentication and provisioning. If you don't use a paved-path application, you will use the REST API to make SCIM requests. See {% ifversion ghec %}[AUTOTITLE](/admin/managing-iam/understanding-iam-for-enterprises/about-enterprise-managed-users#identity-management-systems){% else %}[AUTOTITLE](/admin/managing-iam/provisioning-user-accounts-with-scim/user-provisioning-with-scim-on-ghes#supported-identity-providers){% endif %}.

## Types of user deprovisioning

When a user is deprovisioned, the {% data variables.product.github %} account is **suspended**, which means the user cannot access your enterprise. Regardless of the type of deprovisioning, a deprovisioned account is never deleted from an enterprise.

The type of deprovisioning call that {% data variables.product.github %} receives from your identity provider determines whether it is possible to unsuspend (reinstate) a deprovisioned user.

* **Soft-deprovision**: In certain scenarios, the user can be unsuspended via your SCIM integration.
* **Hard-deprovision**: It is not possible to unsuspend the user. A new account must be provisioned if the person needs to regain access.

## Effects of deprovisioning a user

When you deprovision a user account, either through your IdP or the REST API, {% data variables.product.github %} will make changes to the user account.

### Effects of soft-deprovisioning

* The user is **suspended** and **loses access** to your enterprise and any private resources.
* Once the user account is suspended, it will be listed on the "Suspended members" page instead of the "Members" page in the "People" section of the enterprise settings.
* The user's **username is obfuscated** to a hash of the original username{% ifversion ghec %}, followed by `_SHORTCODE` for enterprises on {% data variables.product.prodname_dotcom_the_website %}{% endif %}.
* With Entra ID, the user's email address remains the same. In all other cases, the user's email is obfuscated.
* The user's SCIM identity remains linked to their user account on {% data variables.product.github %}. With Entra ID, the value of the `active` attribute value in their stored linked SCIM identity is updated from `True` to `False`.
* If the user has forks of private or internal repositories, the forks are deleted within 24 hours. The forks will be restored if the user is unsuspended within 90 days.
* If the user is a member of any SCIM-provisioned IdP groups, they are hidden from these groups, and removed from any teams that are mapped to these groups. Note that this happens even if the user is still a member of the group on the IdP side.
* If organization membership is managed by IdP groups, the user will be **removed from organizations** when removed from those IdP groups or removed from all teams that are mapped to IdP groups in the organization.
* If organization membership is managed directly, the user will remain as a "suspended member" of the organization, without access, **until removed manually**.

{% ifversion ghec %}
An enterprise owner can gain temporary access to a suspended member's private repositories (this includes both user namespace repositories and forks that have not yet been deleted). See [AUTOTITLE](/admin/managing-accounts-and-repositories/managing-repositories-in-your-enterprise/accessing-user-owned-repositories-in-your-enterprise).
{% endif %}

### Effects of hard-deprovisioning

* The user is **suspended** and **loses access** to your enterprise and any private resources.
* Once the user account is suspended, it will be listed on the "Suspended members" page instead of the "Members" page in the "People" section of the enterprise settings.
* The user's **username is obfuscated** to a hash of the original username{% ifversion ghec %}, followed by `_SHORTCODE` for enterprises on {% data variables.product.prodname_dotcom_the_website %}{% endif %}.
* The user's email address is obfuscated.
* The user's display name is set to an empty string.
* The user's linked SCIM identity, including all of the user's SCIM attributes, gets deleted.
* The user's {% data variables.product.pat_generic_plural %}, {% data variables.product.pat_v2_plural %}, SSH keys, GPG keys, and application authorizations get deleted. Deleting keys can affect commit verification. See [AUTOTITLE](/authentication/managing-commit-signature-verification/about-commit-signature-verification#persistent-commit-signature-verification).
* Repositories owned by the user are deleted.
* Resources created by the user, such as comments, are **retained**.
* If the user is a member of any SCIM-provisioned IdP groups, they are hidden from these groups, and removed from any teams that are mapped to these groups. Note that this happens even if the user is still a member of the group on the IdP side.
* If organization membership is managed by IdP groups, the user will be **removed from organizations** when removed from those IdP groups or removed from all teams that are mapped to IdP groups in the organization.
* If organization membership is managed directly, the user will remain as a "suspended member" of the organization, without access, **until removed manually**.

## Actions that trigger deprovisioning

Different actions trigger soft-deprovisioning and hard-deprovisioning, and the triggers vary by SCIM integration. Generally, most actions you take in the "paved-path" IdP applications only trigger **soft-deprovisioning**, with some exceptions.

### Triggers of soft-deprovisioning

| SCIM integration | Trigger of soft-deprovisioning |
| ------------------- | ------------------------------ |
| REST API | A `PUT` or `PATCH` request is sent to `/scim/v2/{% ifversion ghec %}enterprises/{enterprise}/{% endif %}Users/{scim_user_id}`, updating a user's `active` field to `false`. |
| Entra ID | A user is disabled in Entra ID, unassigned from the application, removed from all assigned groups, or soft-deleted from the tenant by the admin. For more details, see [Soft deletions](https://learn.microsoft.com/en-us/entra/architecture/recover-from-deletions#soft-deletions) in the Microsoft documentation. |
| Okta | A user is unassigned from the application, removed from all assigned groups, or deactivated with the "Deactivate" button. Note that the "Suspend" button does not send a request to {% data variables.product.github %}. Okta only sends soft-deprovisioning calls. |
| PingFederate | The user is suspended, disabled, or removed from the user store targeted by the provisioner. |

### Triggers of hard-deprovisioning

| SCIM integration | Trigger of hard-deprovisioning |
| ------------------- | ------------------------------ |
| REST API |  A `DELETE` request is sent to `/scim/v2/{% ifversion ghec %}enterprises/{enterprise}/{% endif %}Users/{scim_user_id}`. |
| Entra ID | The hard-deletion of an Entra ID user account, as described in [Hard deletions](https://learn.microsoft.com/en-us/entra/architecture/recover-from-deletions#hard-deletions) in Microsoft's documentation. Entra ID users who are soft-deleted (found on the "Users > Deleted users" page of the Entra ID admin portal) are automatically hard-deleted by Entra ID 30 days after being soft-deleted. |
| Okta | N/A. Okta does not send hard-deprovisioning calls. |
| PingFederate | If the "Remove User Action" setting is set to "Delete" instead of "Disable" as the result of a misconfiguration, this action will send a hard-deprovisioning call. See the [PingIdentity documentation](https://docs.pingidentity.com/integrations/github/github_emu_provisioner/pf_github_emu_connector_user_and_group_management.html#user-deprovisioning). |

## Reinstating a user account that was soft-deprovisioned

To restore the user's access and account details, you can reprovision the account of a user who was **soft-deprovisioned**, as long as the IdP user account is the same. The IdP user account must be the same because a soft-deprovisioned user account is still linked to this external identity, based on the SCIM `external ID` (IdP user object ID) and SCIM `User ID`. The external identity that is linked to an individual soft-deprovisioned user account cannot be changed.

### Effects of reprovisioning

* The user is unsuspended and regains access to your enterprise.
* The user's username and email address are restored.
* If the user is a member of a SCIM-provisioned IdP group that is mapped to a team in an organization, the user will be added to the organization immediately after their user account is reprovisioned. If they were previously a member of the organization, their membership will be reinstated, as long as it has not been more than 90 days since they were removed. See [AUTOTITLE](/organizations/managing-membership-in-your-organization/reinstating-a-former-member-of-your-organization#items-that-are-restored-for-reinstated-members).
* If the user is not a member of a SCIM-provisioned IdP group that is mapped to a team in an organization, a {% data variables.product.github %} organization owner will need to manually add their user account to the organization after they are reprovisioned.
* Deleted forks are restored if the user is unsuspended up to 90 days after suspension.
* Items associated with the user are restored, including:
  * {% data variables.product.prodname_github_apps %}, {% data variables.product.prodname_oauth_apps %}, and app authorizations
  * {% data variables.product.pat_generic_caps_plural %}
  * SSH keys
  * Token and key authorizations
  * User-owned repositories

### Actions that trigger reprovisioning

How you reprovision a user depends on your SCIM integration and the action that triggered soft-deprovisioning.

| SCIM implementation | Action to reprovision users |
| ------------------- | --------------------------- |
| Entra ID | Reenable a disabled account or reassign a user to the application, either directly or via an assigned group. Wait 40 minutes for the changes to process, or expedite with the "Provision on Demand" button. |
| Okta | Reactivate the account or reassign the user to the application, either directly or via a group. |
| PingFederate | Unsuspend or reenable the user in the user store, or readd the user to the datastore group or filter that is targeted by the provisioner. |
| REST API |  Send a `PUT` or `PATCH` request to `/scim/v2/{% ifversion ghec %}enterprises/{enterprise}/{% endif %}Users/{scim_user_id}`, updating the user's `active` field to `true`. |

## Reinstating a user account that was hard-deprovisioned

You **cannot** restore a {% data variables.product.github %} user account that was hard-deprovisioned via SCIM. Instead, you will need to provision a new {% data variables.product.github %} account for the user.

You can reuse the username of the hard-deprovisioned user when provisioning the new account. However, it is not possible to merge the hard-deprovisioned user account with the new user account on {% data variables.product.github %}.

* If the email addresses of the hard-deprovisioned user and the new user match, {% data variables.product.github %} will attribute existing Git commits associated with the email address to the new user.
* Existing resources and comments created by the original user will **not** be associated with the new user.

## Audit log events

The audit log for your enterprise displays details about activity in your enterprise. You can use the audit log to support your configuration of SCIM. For more information, see [AUTOTITLE](/admin/monitoring-activity-in-your-enterprise/reviewing-audit-logs-for-your-enterprise/about-the-audit-log-for-your-enterprise).

> [!IMPORTANT] We strongly recommend that an enterprise owner enables enterprise audit log features such as audit log streaming, source IP disclosure, and the option to stream API requests. Streaming these events allows administrators to set a log retention policy that fits the needs of their business and use their preferred tooling for querying these logs.

### Events for soft-deprovisioning

When you soft-deprovision a user, the `external_identity.update` event does not appear in the audit log. The following events appear in the audit log:

* `user.suspend`
* `user.remove_email`
* `user.rename`
* `external_identity.deprovision`
* If the request succeeds, `external_identity.scim_api_success`
* If the request fails, `external_identity.scim_api_failure`
* If the user is a member of any IdP groups that are mapped to teams, `team.remove_member`
* If a user's membership in an organization is managed by the IdP and they are removed from all teams that are mapped to IdP groups in the organization, `org.remove_member`

### Events for hard-deprovisioning

* `external_identity.deprovision`
* `user.remove_email`
* If the request succeeds, `external_identity.scim_api_success`
* If the request fails, `external_identity.scim_api_failure`
* If the user is a member of any IdP groups that are mapped to teams, `team.remove_member`
* If a user's membership in an organization is managed by the IdP and they are removed from all teams that are mapped to IdP groups in the organization, `org.remove_member`

### Events for reprovisioning

When you reactivate a user, the `external_identity.update` event does not appear in the audit log. The following events appear in the audit log:

* `user.unsuspend`
* `user.remove_email`
* `user.rename`
* `external_identity.provision`
* If the request succeeds, `external_identity.scim_api_success`
* If the request fails, `external_identity.scim_api_failure`
* If the user is a member of a SCIM-provisioned IdP group, and this group is mapped to a team in an organization, `org.add_member`

## Further reading

* [AUTOTITLE](/admin/managing-iam/provisioning-user-accounts-with-scim/provisioning-users-and-groups-with-scim-using-the-rest-api)
