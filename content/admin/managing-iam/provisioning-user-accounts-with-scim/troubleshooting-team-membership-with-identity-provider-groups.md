---
title: Troubleshooting team membership with identity provider groups
shortTitle: Troubleshoot team membership with IdP
intro: 'If you manage team membership using groups on your identity provider (IdP), but team membership is not in sync, you can troubleshoot the problem.'
product: '{% data reusables.gated-features.emus %}'
versions:
  ghec: '*'
  feature: scim-for-ghes-public-beta
type: how_to
topics:
  - Accounts
  - Enterprise
  - Teams
  - Troubleshooting
redirect_from:
  - /admin/identity-and-access-management/using-enterprise-managed-users-for-iam/troubleshooting-team-membership-with-identity-provider-groups
  - /admin/identity-and-access-management/provisioning-user-accounts-for-enterprise-managed-users/troubleshooting-team-membership-with-identity-provider-groups
  - /admin/managing-iam/provisioning-user-accounts-for-enterprise-managed-users/troubleshooting-team-membership-with-identity-provider-groups
---

{% data reusables.scim.ghes-beta-note %}

## About management of team membership with IdP groups

{% data reusables.emus.about-team-management-with-idp %} You can review a list of teams that you've synchronized to IdP groups from your enterprise's settings. For more information, see [AUTOTITLE](/admin/identity-and-access-management/using-enterprise-managed-users-for-iam/managing-team-memberships-with-identity-provider-groups#viewing-idp-groups-group-membership-and-connected-teams).

{% data variables.product.github %} also runs a reconciliation job once per day, which synchronizes team membership with IdP group membership that is stored on {% data variables.product.github %}, based on information previously sent from the IdP via SCIM. If this job finds that a user is a member of an IdP group in the enterprise, but they are not a member of the mapped team or its organization, the job will attempt to add the user to the organization and team.

If {% data variables.product.prodname_dotcom %} is unable to synchronize team membership with a group on your IdP, you can view an error message and troubleshoot the problem.

## Viewing errors for team synchronization with an IdP group

{% data reusables.enterprise-accounts.access-enterprise %}
1. In the list of enterprises, click the enterprise you want to view.
{% data reusables.enterprise-accounts.click-identity-provider %}
1. Under **Identity provider**, click **Groups**.
1. If synchronization for a group is experiencing problems, you'll see a message that reads "Some groups are failing to synchronize to teams. Check that you have available licenses."
1. In the list of IdP groups, click the group you'd like to review.
1. To review the synchronization error for the group, under the name of the group, click **Teams**.

   If a team is unable to sync membership with a group on your IdP, you'll see a description of the problem under the team's name and membership count.

{% ifversion ghec %}

### Error: "Out of sync due to insufficient licenses"

{% data variables.product.prodname_dotcom %} stores IdP group membership data for {% ifversion ghes %}SCIM-provisioned users{% else %}{% data variables.product.prodname_emus %}{% endif %} at the enterprise level. This data is populated and updated through Group SCIM API calls from your identity provider (IdP).

For IdP groups that are mapped to teams, {% data variables.product.prodname_dotcom %} runs a **daily reconciliation job** to synchronize team membership with the stored enterprise-level IdP group data. The reconciliation also runs whenever a Group SCIM API call updates group membership, or when an admin links or unlinks a team to a stored group on GitHub.

If your enterprise does not have enough licenses available, {% data variables.product.prodname_dotcom %} may be unable to complete this synchronization. When this occurs, you’ll see the message:
> "Out of sync due to insufficient licenses"

As a result, the affected team or organization may be missing members.

![Screenshot of the IdP group page. A warning that a team is out of sync due to insufficient licenses is outlined in dark orange.](/assets/images/help/enterprises/emu-group-team-not-synced-missing-licenses.png)

To investigate this issue, review your enterprise's total available licenses, as well as detailed information about which users are consuming licenses and why. For more information, see [AUTOTITLE](/billing/reference/github-license-users#organizations-on-github-enterprise-cloud) and [AUTOTITLE](/billing/managing-your-license-for-github-enterprise/viewing-license-usage-for-github-enterprise).

#### Resolving the issue

To allow synchronization to complete successfully, make additional enterprise licenses available using one of the following approaches:

* **Free up existing licenses**  
  * Identify which users are consuming licenses and whether they still need access.  
  * Remove users from organizations or IdP groups as needed, depending on how you manage organization and team membership (see [AUTOTITLE](/admin/managing-accounts-and-repositories/managing-users-in-your-enterprise/viewing-people-in-your-enterprise#filtering-by-member-type-in-an-enterprise-with-managed-users)):
    * If you manage your organization's membership via IdP groups, remove users from the relevant group(s).
  * Monitor these enterprise audit log events to track SCIM API calls that update group membership or managed user accounts (see [AUTOTITLE](/admin/monitoring-activity-in-your-enterprise/reviewing-audit-logs-for-your-enterprise/audit-log-events-for-your-enterprise):  
    * `external_group.scim_api_failure` / `external_group.scim_api_success`  
    * `external_identity.scim_api_failure` / `external_identity.scim_api_success`

* **Purchase additional licenses**  
  * If all current users require access, purchase more licenses for your enterprise. For more information, see [AUTOTITLE](/billing/how-tos/manage-plan-and-licenses/manage-user-licenses#enterprises-on-github-enterprise-cloud).

{% endif %}

### Error: "Out of sync"

If synchronization of team membership with a group on your IdP fails due to a problem other than licensing, you'll see a message that reads "Out of sync".

![Screenshot of the IdP group page. A warning that a team is out of sync is outlined in dark orange.](/assets/images/help/enterprises/emu-group-team-not-synced-generic.png)

{% data variables.product.prodname_dotcom %} will try to resolve this problem automatically during the next sync, which occurs at least once daily. You may be able to resolve the problem by unlinking the impacted team from the IdP group and then linking it to the same group again. For more information, see [AUTOTITLE](/admin/identity-and-access-management/using-enterprise-managed-users-for-iam/managing-team-memberships-with-identity-provider-groups#managing-the-connection-between-an-existing-team-and-an-idp-group).

If the problem persists, contact {% data variables.contact.contact_ent_support %} and provide details about the organization, team, and the IdP group you're experiencing problems with.
