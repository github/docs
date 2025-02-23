---
title: Setting up an organization
intro: 'Learn how to set up an organization in your enterprise.'
versions:
  ghec: '*'
type: how_to
topics:
  - Organizations
  - Enterprise
shortTitle: Set up an organization
---

There are three ways to add organizations to your enterprise.

* **Create** a new organization in your enterprise.
* **Invite** an existing organization to join your enterprise.
* **Transfer** an existing organization between enterprise accounts.

If you chose an enterprise with personal accounts, to learn how to add an existing organization to your enterprise, see [AUTOTITLE](/admin/managing-accounts-and-repositories/managing-organizations-in-your-enterprise/adding-organizations-to-your-enterprise). If you chose an enterprise with {% data variables.product.prodname_emus %}, it is not possible to invite or transfer an existing organization.

## Creating a new organization

New organizations you create within your enterprise account settings are included in your enterprise account's {% data variables.product.prodname_ghe_cloud %} subscription.

Enterprise owners who create an organization owned by the enterprise account automatically become organization owners. See [AUTOTITLE](/organizations/managing-peoples-access-to-your-organization-with-roles/roles-in-an-organization).

During a trial of {% data variables.product.prodname_ghe_cloud %}, you can create up to three new organizations in your enterprise.

{% data reusables.enterprise-accounts.access-enterprise %}
{%- ifversion enterprise-readme %}
1. In the left sidebar, click **Organizations**.
{%- endif %}
1. Above the list of organizations, click **New organization**.
1. Under "Organization name", type a name for your organization.
1. Click **Create organization**.
1. Optionally, under "Invite owners", type the username of a person you'd like to invite to become an organization owner, then click **Invite**.
1. Click **Finish**.

## Next steps

1. To learn how to invite or transfer an existing organization to your enterprise, see [AUTOTITLE](/admin/managing-accounts-and-repositories/managing-organizations-in-your-enterprise/adding-organizations-to-your-enterprise).
1. After you create or add an organization to your enterprise, learn how to manage organization members. See [AUTOTITLE](/enterprise-onboarding/setting-up-organizations-and-teams/managing-organization-members).
