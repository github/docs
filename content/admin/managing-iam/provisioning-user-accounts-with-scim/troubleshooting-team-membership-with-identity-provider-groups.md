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

{% data reusables.emus.about-team-management-with-idp %} You can review a list of teams that you've synchronized to IdP groups from your enterprise's settings. For more information, see "[AUTOTITLE](/admin/identity-and-access-management/using-enterprise-managed-users-for-iam/managing-team-memberships-with-identity-provider-groups#viewing-idp-groups-group-membership-and-connected-teams)."

If {% data variables.product.prodname_dotcom %} is unable to synchronize team membership with a group on your IdP, you can view an error message and troubleshoot the problem.

## Viewing errors for team synchronization with an IdP group

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.click-identity-provider %}
1. If synchronization for a group is experiencing problems, you'll see a message that reads "Some groups are failing to synchronize to teams. Check that you have available licenses."
1. In the list of IdP groups, click the group you'd like to review.
1. To review the synchronization error for the group, under the name of the group, click **Teams**.

   ![Screenshot of the page for a synchronized IdP group. Under the name of the group, to the right, the "Teams" tab is highlighted in dark orange.](/assets/images/help/enterprises/idp-group-sync-teams-tab.png)

   If a team is unable to sync membership with a group on your IdP, you'll see a description of the problem under the team's name and membership count.

{% ifversion ghec %}

### Error: "Out of sync due to insufficient licenses"

If your enterprise does not have sufficient licenses and {% data variables.product.prodname_dotcom %} is unable to synchronize team membership with a group on your IdP, you'll see a message that reads "Out of sync due to insufficient licenses".

![Screenshot of the IdP group page. A warning that a team is out of sync due to insufficient licenses is outlined in dark orange.](/assets/images/help/enterprises/emu-group-team-not-synced-missing-licenses.png)

The team may be missing members because your enterprise does not have sufficient licenses available. {% data variables.product.prodname_dotcom %} is unable to synchronize the team's membership with a group on your IdP, and any unlicensed user cannot be added to an organization.

1. Review the available licenses for your enterprise. For more information, see "[AUTOTITLE](/billing/managing-your-license-for-github-enterprise/viewing-license-usage-for-github-enterprise)."
1. To resolve the problem, choose one of the following solutions.

   * Remove users from the IdP group.
   * Deprovision users from your enterprise.
   * Purchase additional licenses to allow synchronization to complete. For more information, see "[AUTOTITLE](/billing/managing-the-plan-for-your-github-account/about-per-user-pricing#about-changes-to-your-subscription)."

{% endif %}

### Error: "Out of sync"

If synchronization of team membership with a group on your IdP fails due to a problem other than licensing, you'll see a message that reads "Out of sync".

![Screenshot of the IdP group page. A warning that a team is out of sync is outlined in dark orange.](/assets/images/help/enterprises/emu-group-team-not-synced-generic.png)

{% data variables.product.prodname_dotcom %} will try to resolve this problem automatically during the next sync, which occurs at least once daily. You may be able to resolve the problem by unlinking the impacted team from the IdP group and then linking it to the same group again. For more information, see "[AUTOTITLE](/admin/identity-and-access-management/using-enterprise-managed-users-for-iam/managing-team-memberships-with-identity-provider-groups#managing-the-connection-between-an-existing-team-and-an-idp-group)."

If the problem persists, contact {% data variables.contact.contact_ent_support %} and provide details about the organization, team, and the IdP group you're experiencing problems with.
