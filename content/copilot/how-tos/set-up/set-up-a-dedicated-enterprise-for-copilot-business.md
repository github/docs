---
title: Setting up a dedicated enterprise for GitHub Copilot Business
intro: 'Learn how to configure an enterprise account for use with {% data variables.product.prodname_copilot %} only.'
allowTitleToDifferFromFilename: true
redirect_from:
  - /admin/copilot-business-only/setting-up-a-dedicated-enterprise-for-copilot-business-personal-accounts
  - /early-access/copilot/using-copilot-business-without-github-enterprise-personal-accounts
  - /admin/copilot-business-only/setting-up-a-dedicated-enterprise-for-copilot-business-managed-users
versions:
  feature: copilot
audience:
  - driver
contentType: how-tos
topics:
  - Accounts
  - Copilot
shortTitle: Set up a dedicated enterprise
category:
  - Configure Copilot
  - Manage Copilot for a team
---

You can create an enterprise account specifically for managing {% data variables.copilot.copilot_business_short %} licenses, without adopting {% data variables.product.prodname_enterprise %}. With this account, you will have access to enterprise-grade integrations with identity providers for authentication and provisioning, without needing to pay for {% data variables.product.prodname_enterprise %} licenses. See [AUTOTITLE](/copilot/concepts/about-enterprise-accounts-for-copilot-business).

## 1. Create an enterprise account

> [!IMPORTANT]
> If you're purchasing {% data variables.copilot.copilot_business_short %} through {% data variables.product.company_short %}'s sales team, your enterprise account will be created for you. Skip to step 2.

You need to create an enterprise account, and the way to do that is to start a trial of {% data variables.product.prodname_ghe_cloud %}.

<a href="https://github.com/account/enterprises/new?ref_product=ghec&ref_type=trial&ref_style=button&ref_plan=enterprise" target="_blank" class="btn btn-primary mt-3 mr-3 no-underline"><span>Set up a trial of {% data variables.product.prodname_ghe_cloud %}</span> {% octicon "link-external" height:16 aria-label="link-external" %}</a>

Don’t create any organizations during setup. Adding users to organizations assigns them {% data variables.product.prodname_enterprise %} licenses, while adding users directly to the enterprise keeps your setup limited to {% data variables.copilot.copilot_business_short %}.

## 2. Add users to your enterprise

Once you have an enterprise account, add the people who will receive {% data variables.copilot.copilot_business_short %} licenses. How you add users depends on your enterprise type.

### Enterprise with personal accounts

Invite users directly to your enterprise. For detailed steps, see [AUTOTITLE](/admin/managing-accounts-and-repositories/managing-users-in-your-enterprise/invite-users-directly).

### Enterprise with managed users

If your enterprise uses {% data variables.product.prodname_emus %}, you must provision user accounts from your identity provider (IdP) through SCIM.
For setup and provisioning guidance, see [AUTOTITLE](/admin/managing-iam/understanding-iam-for-enterprises/getting-started-with-enterprise-managed-users).

Provisioned users will appear automatically in your enterprise’s **People** list. Later, you'll assign {% data variables.copilot.copilot_business_short %} licenses directly to these users or to enterprise teams synced with your IdP.

## 3. Create teams (optional)

You can group users to scale license assignment by creating and managing enterprise teams. If you plan to manage access in groups, create those groups now. See [AUTOTITLE](/enterprise-cloud@latest/admin/managing-accounts-and-repositories/managing-users-in-your-enterprise/create-enterprise-teams).

## 4. Enable {% data variables.product.prodname_copilot_short %} for the enterprise

{% data reusables.copilot-business-for-non-ghe.enable-copilot %}

## 5. Assign {% data variables.product.prodname_copilot_short %} licenses

Next, give people access to {% data variables.product.prodname_copilot_short %} by assigning {% data variables.copilot.copilot_business_short %} licenses to users or enterprise teams directly from the enterprise level.

For detailed steps, see [AUTOTITLE](/copilot/how-tos/administer-copilot/manage-for-enterprise/manage-access/grant-access#assigning-licenses-to-users-or-teams).

## 6. Convert your trial to a paid enterprise account

To continue using {% data variables.copilot.copilot_business_short %} after your trial, convert your trial to a paid enterprise account. See [AUTOTITLE](/enterprise-cloud@latest/admin/overview/setting-up-a-trial-of-github-enterprise-cloud#purchasing-github-enterprise).

## Next steps

After setting up {% data variables.copilot.copilot_business_short %} for your enterprise, you can help your developers start using {% data variables.product.prodname_copilot_short %} and measure its impact across your organization. See [AUTOTITLE](/copilot/tutorials/roll-out-at-scale/enable-developers/drive-adoption).

If you ever want to access the full range of {% data variables.product.company_short %} features in the future, you can create organizations and add users to them.
