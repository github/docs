---
title: Controlling user offboarding with the unaffiliated users policy
allowTitleToDifferFromFilename: true
intro: 'Set a policy to determine what happens when a user is removed from every organization in your enterprise.'
versions:
  ghec: '*'
permissions: 'Enterprise owners'
product: 'Enterprises with personal accounts on {% data variables.product.prodname_dotcom_the_website %}'
shortTitle: Control offboarding
type: how_to
---

## About the unaffiliated users policy

By default, when a user loses access to all organizations in your enterprise, the user remains in your enterprise as an unaffiliated user. This can happen when you remove a user from organizations explicitly or remove an organization from your enterprise.

Unaffiliated users retain team membership, enterprise roles, and {% data variables.product.prodname_copilot %} licenses granted directly from the enterprise account.

You can set a policy to instead remove users from the enterprise completely when they are removed from every organization. Removed users will lose all privileges and licenses granted from the enterprise. This is useful if you have an offboarding process that depends on removing users from organizations, for example using team synchronization from an identity provider.

This policy:

* Applies regardless of how users lose their organization membership (through direct removal, a team, or removing an organization).
* Does **not** apply to users with the enterprise owner or enterprise billing manager role. These users remain in the enterprise regardless of their organization membership and the policy setting.

## Setting the policy

>[!NOTE] This policy is not available for {% data variables.product.prodname_emus %}.

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.policies-tab %}
1. In the left sidebar, click **{% octicon "shield" aria-hidden="true" aria-label="shield" %} Member privileges**.
1. Under "Unaffiliated user", choose your setting for the policy.
