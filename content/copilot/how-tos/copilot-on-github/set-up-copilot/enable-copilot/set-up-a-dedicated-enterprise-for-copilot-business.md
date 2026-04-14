---
title: Setting up a dedicated enterprise for GitHub Copilot Business
intro: 'Create an enterprise account for managing {% data variables.copilot.copilot_business_short %} licenses without adopting {% data variables.product.prodname_enterprise %}.'
allowTitleToDifferFromFilename: true
redirect_from:
  - /admin/copilot-business-only/setting-up-a-dedicated-enterprise-for-copilot-business-personal-accounts
  - /early-access/copilot/using-copilot-business-without-github-enterprise-personal-accounts
  - /admin/copilot-business-only/setting-up-a-dedicated-enterprise-for-copilot-business-managed-users
  - /copilot/how-tos/set-up/set-up-a-dedicated-enterprise-for-copilot-business
versions:
  feature: copilot
audience:
  - driver
contentType: how-tos
shortTitle: Set up a dedicated enterprise
category:
  - Configure Copilot
  - Manage Copilot for a team
---

With a dedicated enterprise account, you get enterprise-grade identity provider integrations for authentication and provisioning without paying for {% data variables.product.prodname_enterprise %} licenses. See [AUTOTITLE](/copilot/concepts/about-enterprise-accounts-for-copilot-business).

## Create an enterprise account

> [!IMPORTANT]
> If you purchased {% data variables.copilot.copilot_business_short %} through {% data variables.product.company_short %}'s sales team, your enterprise account is already created. Skip to the next section.

Start a trial of {% data variables.product.prodname_ghe_cloud %} to create your enterprise account.

<a href="https://github.com/account/enterprises/new?ref_product=ghec&ref_type=trial&ref_style=button&ref_plan=enterprise" target="_blank" class="btn btn-primary mt-3 mr-3 no-underline"><span>Set up a trial of {% data variables.product.prodname_ghe_cloud %}</span> {% octicon "link-external" height:16 aria-label="link-external" %}</a>

Do not create any organizations during setup. Adding users to organizations assigns {% data variables.product.prodname_enterprise %} licenses, while adding users directly to the enterprise keeps your setup limited to {% data variables.copilot.copilot_business_short %}.

## Add users to your enterprise

Once you have an enterprise account, add the people who will receive {% data variables.copilot.copilot_business_short %} licenses. How you add users depends on your enterprise type.

### Enterprise with personal accounts

Invite users directly to your enterprise. For detailed steps, see [AUTOTITLE](/admin/managing-accounts-and-repositories/managing-users-in-your-enterprise/invite-users-directly).

### Enterprise with managed users

If your enterprise uses {% data variables.product.prodname_emus %}, provision user accounts from your identity provider (IdP) through SCIM.
For setup and provisioning guidance, see [AUTOTITLE](/admin/managing-iam/understanding-iam-for-enterprises/getting-started-with-enterprise-managed-users).

Provisioned users appear automatically in your enterprise's **People** list. You can then assign {% data variables.copilot.copilot_business_short %} licenses directly to these users or to enterprise teams synced with your IdP.

## Create teams (optional)

Group users to scale license assignment by creating enterprise teams. See [AUTOTITLE](/enterprise-cloud@latest/admin/managing-accounts-and-repositories/managing-users-in-your-enterprise/create-enterprise-teams).

## Enable {% data variables.product.prodname_copilot_short %} for the enterprise

{% data reusables.copilot-business-for-non-ghe.enable-copilot %}

## Assign {% data variables.product.prodname_copilot_short %} licenses

Give people access to {% data variables.product.prodname_copilot_short %} by assigning {% data variables.copilot.copilot_business_short %} licenses to users or enterprise teams.

For detailed steps, see [AUTOTITLE](/copilot/how-tos/administer-copilot/manage-for-enterprise/manage-access/grant-access#assigning-licenses-to-users-or-teams).

## Convert your trial to a paid enterprise account

To continue using {% data variables.copilot.copilot_business_short %} after your trial, convert to a paid enterprise account. See [AUTOTITLE](/enterprise-cloud@latest/admin/overview/setting-up-a-trial-of-github-enterprise-cloud#purchasing-github-enterprise).

## Next steps

Help your developers start using {% data variables.product.prodname_copilot_short %} and measure its impact. See [AUTOTITLE](/copilot/tutorials/roll-out-at-scale/enable-developers/drive-adoption).
