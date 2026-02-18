---
title: 'Configuring user display names for your enterprise'
intro: 'You can choose whether the profile name (first and last name) of your enterprise members appear alongside their username across {% data variables.product.github %}.'
versions:
  ghec: '*'
  ghes: '*'
contentType: how-tos
topics:
  - Accounts
  - Enterprise
permissions: Enterprise and organization admins can configure whether profile names (first and last name) appear alongside usernames across {% data variables.product.github %}.
shortTitle: Configure user display names
---

## About user display names for enterprises

A user display name controls how enterprise members are shown across {% data variables.product.prodname_enterprise %}. When the feature is enabled, a member’s profile name (first and last name) appears alongside their username in places like repositories, issues, pull requests, and {% data variables.product.prodname_discussions %}. The setting applies to public, private, and internal repositories within your enterprise's organizations.

When set at the enterprise level, this policy is applied across all organizations within your enterprise.

Once configured, your chosen display format will be visible throughout these key areas:

* Pull requests: reviewers, assignees, pull request authors, activities, comments, @-mentions, and commits
* Issues: assignee, comments, activities, @-mentions, and owner
* Discussions: discussion owners, comments, and @-mentions
* Projects: assignee

By default:

* {% data variables.product.prodname_ghe_cloud %} with {% data variables.product.prodname_emus %} and {% data variables.product.prodname_ghe_server %} show profile names alongside usernames.
* All other enterprise accounts show usernames only.

## Changing the user display name setting for an enterprise

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.settings-tab %}
1. On the "Manage your enterprise profile" page, go to "Member appearance".
1. Under "Profile name visibility", select one of the following options in the adjacent dropdown list.
   * **Enable everywhere** to show profile names alongside usernames across all organizations in your enterprise, including in repositories, issues, pull requests, and discussions.
   * **Disable everywhere** to show **usernames only** across all organizations in your enterprise.
   * **Let organizations decide** to allow each organization in your enterprise to configure this setting.

## Changing the user display name setting for an organization

> [!NOTE]
> The organization-level setting will only be configurable if the enterprise-level policy is set to **Let organizations decide**.

To manage configure user display name at the organization level:
{% data reusables.profile.access_org %}
{% data reusables.profile.org_settings %}
1. On the "General" page, go to "Member appearance".
1. Under "Profile name visibility", select one of the following options in the toggle.
   * **On** to show profile names alongside usernames in your organization, including in repositories, issues, pull requests, and discussions.
   * **Off** to show **usernames only** across your organization.
