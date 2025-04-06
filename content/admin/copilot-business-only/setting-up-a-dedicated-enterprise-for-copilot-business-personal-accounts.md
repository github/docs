---
title: Setting up a dedicated enterprise for Copilot Business (personal accounts)
intro: 'Set up your account, provision users, and assign licenses.'
versions:
  ghec: '*'
topics:
  - Accounts
  - Enterprise
  - Fundamentals
shortTitle: Set up with personal accounts
redirect_from:
  - /early-access/copilot/using-copilot-business-without-github-enterprise-personal-accounts
---

You can use an enterprise account to manage licenses for {% data variables.product.prodname_copilot_for_business %}, without adopting {% data variables.product.prodname_enterprise %}.

This article describes the setup for an **enterprise with personal accounts**. If you haven't chosen an enterprise type, see "[AUTOTITLE](/admin/copilot-business-only/about-enterprise-accounts-for-copilot-business)."

## Prerequisites

{% data reusables.copilot-business-for-non-ghe.prerequisites %}

## Requesting an enterprise account

{% data reusables.copilot-business-for-non-ghe.request-access %}

## Adding users to the enterprise

After you invite someone to join the enterprise account, they must accept the emailed invitation before they can access the enterprise account. Pending invitations will expire after 7 days.

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.people-tab %}
1. Under "People", click **Members**.
1. Click **Invite member**.
1. Search for the user you want to invite, then click **Invite**.

### Inviting an enterprise owner

You can also invite a user as an enterprise owner. Enterprise owners can grant access to {% data variables.product.prodname_copilot %} and set policies for the enterprise. See "[AUTOTITLE](/admin/managing-accounts-and-repositories/managing-users-in-your-enterprise/inviting-people-to-manage-your-enterprise#inviting-an-enterprise-administrator-to-your-enterprise-account)."

You can also invite a user as a billing manager. A billing manager can view the assigned licenses for an enterprise, but cannot assign licenses or manage enterprise teams.

### Configuring SAML authentication

You can configure SAML single sign-on to require users to authenticate to an external identity management system in addition to their personal account. See "[AUTOTITLE](/admin/identity-and-access-management/using-saml-for-enterprise-iam/configuring-saml-single-sign-on-for-your-enterprise)."

## Linking an Azure subscription

{% data reusables.copilot-business-for-non-ghe.link-azure-subscription %}

## Enabling {% data variables.product.prodname_copilot_short %} for the enterprise

{% data reusables.copilot-business-for-non-ghe.enable-copilot %}

## Assigning licenses to users

When {% data variables.product.prodname_copilot_short %} has been enabled for the enterprise, an **enterprise owner** can create teams in the enterprise and assign licenses to a team.

* You will grant or remove licenses for users by managing membership of the teams, either in {% data variables.product.prodname_dotcom %} or with the REST API.
* You cannot assign licenses to individual users or to an entire enterprise.

The same user can be a member of multiple teams. You will only be charged once per user.

### Creating a team

> [!NOTE] You can create teams and manage membership using the REST API. For endpoint documentation, please contact your account manager.

{% data reusables.enterprise-accounts.people-tab %}
1. Under "People", click **Enterprise teams**.
1. Click **New enterprise team**.
1. Enter a name for the team.
1. Click **Create team**.
1. To add users, click **Add a member**, then search for and select the user.

### Assigning licenses to a team

{% data reusables.copilot-business-for-non-ghe.assign-licenses %}

## Managing your enterprise

{% data reusables.copilot-business-for-non-ghe.manage-your-enterprise %}
