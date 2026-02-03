---
title: Setting up an organization
intro: 'Set up an organization in your enterprise.'
versions:
  ghec: '*'
type: how_to
topics:
  - Organizations
  - Enterprise
shortTitle: Set up an organization
redirect_from:
  - /enterprise-onboarding/setting-up-organizations-and-teams/managing-your-organizations
---

During a trial, there are two ways to add organizations to your enterprise.

* **Create** a new organization in your enterprise, or
* **Invite** an existing organization to join your enterprise.

If you chose an enterprise with {% data variables.product.prodname_emus %}, it is not possible to invite an existing organization.

## Creating a new organization

New organizations you create within your enterprise account settings are included in your enterprise account's {% data variables.product.prodname_ghe_cloud %} subscription.

Enterprise owners who create an organization owned by the enterprise account automatically become organization owners.

During a trial of {% data variables.product.prodname_ghe_cloud %}, you can create up to three new organizations in your enterprise.

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.click-organizations-tab %}
1. Above the list of organizations, click **New organization**.
1. Under "Organization name", type a name for your organization.
1. Click **Create organization**.
1. Optionally, under "Invite owners", type the username of a person you'd like to invite to become an organization owner, then click **Invite**.
1. Click **Finish**.

## Inviting an existing organization

Enterprise owners can invite existing organizations to join their enterprise account.

During a trial of {% data variables.product.prodname_ghe_cloud %}, you can invite organizations to join your trial enterprise. You can invite organizations that are not currently owned by another enterprise. If an organization you want to invite is already owned by another enterprise, you cannot invite it to your trial enterprise.

After you invite the organization, and before an owner approves the invitation, you can cancel or resend the invitation at any time.

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.click-organizations-tab %}
1. Above the list of organizations, click **Invite organization**.
1. Under "Organization name", start typing the name of the organization you want to invite and select it when it appears in the dropdown list.
1. Click **Invite organization**. The organization owners will receive an email inviting them to join the enterprise.
1. After an organization owner has approved the invitation, navigate back to the **Organizations** tab of the enterprise settings.
1. Under "Organizations", click **X pending**.
1. To complete the transfer, next to the organization name, click **Approve**.

## Next steps

After you have created the organizations you need, learn how to manage people's access to your enterprise and organizations' settings and resources. See [AUTOTITLE](/enterprise-onboarding/setting-up-organizations-and-teams/about-roles-in-an-enterprise).
