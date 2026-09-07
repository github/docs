---
title: Setting up an enterprise for GitHub Copilot Business only
intro: 'Use an enterprise account to manage {% data variables.copilot.copilot_business_short %} licenses without consuming {% data variables.product.prodname_ghe_cloud %} licenses.'
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
shortTitle: 'Set up {% data variables.copilot.copilot_business_short %} only'
category:
  - Configure Copilot
  - Manage Copilot for a team
---

Before you begin, see [AUTOTITLE](/copilot/concepts/about-enterprise-accounts-for-copilot-business) to understand how to use a standard enterprise account for {% data variables.copilot.copilot_business_short %} without consuming {% data variables.product.prodname_ghe_cloud %} licenses.

## Create an enterprise account

If you will pay by credit card or PayPal, you can create an enterprise account and purchase {% data variables.copilot.copilot_business_short %} yourself.

>[!NOTE] For other payment methods, contact [{% data variables.product.github %}'s Sales team](https://github.com/enterprise/contact?ref_product=copilot&ref_type=engagement&ref_style=text) and ask for an enterprise account with {% data variables.product.prodname_copilot_short %} enabled.

1. Start a trial of {% data variables.product.prodname_ghe_cloud %}.

   <a href="https://github.com/account/enterprises/new?ref_product=ghec&ref_type=trial&ref_style=button&ref_plan=enterprise" target="_blank" class="btn btn-primary mt-3 mr-3 no-underline"><span>Set up a trial of {% data variables.product.prodname_ghe_cloud %}</span> {% octicon "link-external" height:16 aria-label="link-external" %}</a>

1. End the trial immediately and add a credit card or PayPal as a payment method. This is required because trial enterprises cannot sign up for {% data variables.copilot.copilot_business_short %}. However, with the setup described in this article, you will **not** pay for {% data variables.product.prodname_ghe_cloud %} licenses even when the trial has ended.

## Add users to your enterprise

Once you have an enterprise account, add the people who will receive {% data variables.copilot.copilot_business_short %} licenses. How you add users depends on your enterprise type: invite personal accounts directly to the enterprise, or provision {% data variables.enterprise.prodname_managed_users %} from your identity provider (IdP) through SCIM. For detailed steps, see [AUTOTITLE](/enterprise-cloud@latest/admin/managing-accounts-and-repositories/managing-users-in-your-enterprise/add-users).

Add users **directly to the enterprise** so that they remain unaffiliated. Adding users to an organization assigns {% data variables.product.prodname_enterprise %} licenses, while adding users directly to the enterprise keeps your setup limited to {% data variables.copilot.copilot_business_short %}.

Provisioned managed users appear automatically in your enterprise's **People** list. You can then assign {% data variables.copilot.copilot_business_short %} licenses directly to these users or to enterprise teams synced with your IdP.

## Create enterprise teams (optional)

Group users to scale license assignment by creating enterprise teams. Unaffiliated users can be members of enterprise teams, so you can assign {% data variables.copilot.copilot_business_short %} licenses to a whole team without creating an organization. See [AUTOTITLE](/enterprise-cloud@latest/admin/managing-accounts-and-repositories/managing-users-in-your-enterprise/create-enterprise-teams).

## Enable {% data variables.product.prodname_copilot_short %} for the enterprise

An enterprise owner must purchase a {% data variables.copilot.copilot_business_short %} plan so you can start assigning licenses to users.

If you pay by credit card or PayPal, you can [subscribe to {% data variables.copilot.copilot_business_short %}](https://github.com/github-copilot/purchase?ref_product=copilot&ref_type=purchase&ref_style=button&ref_plan=business) yourself.

For other payment methods, [contact {% data variables.product.github %}'s Sales team](https://github.com/enterprise/contact?ref_product=copilot&ref_type=engagement&ref_style=text).

## Assign {% data variables.product.prodname_copilot_short %} licenses

Give people access to {% data variables.product.prodname_copilot_short %} by assigning {% data variables.copilot.copilot_business_short %} licenses to users or enterprise teams.

For detailed steps, see [AUTOTITLE](/copilot/how-tos/administer-copilot/manage-for-enterprise/manage-access/grant-access#assigning-licenses-to-users-or-teams).

## Govern the use of {% data variables.product.prodname_copilot_short %} in your enterprise

After you assign licenses, you can centrally govern how members use {% data variables.product.prodname_copilot_short %}:

* **Policies**. Control feature availability with policies in AI Controls.
* **Enterprise managed settings**. Distribute client governance and extensibility configuration from a centrally defined source. For example, you can disable bypass mode, restrict plugins, and set the default model for new conversations. See [AUTOTITLE](/copilot/how-tos/administer-copilot/manage-for-enterprise/manage-agents/configure-enterprise-managed-settings).

To use server-managed settings, you need an organization and a `.github-private` repository, which requires a {% data variables.product.prodname_enterprise %} license for the user who creates them. Alternatively, you can deploy managed settings through MDM or a file-based deployment without creating an organization.

## If your enterprise already contains an organization

If you only need {% data variables.copilot.copilot_business_short %}, but your enterprise already contains an organization, you are consuming {% data variables.product.prodname_ghe_cloud %} licenses and will be billed for them.

### Step 1: Check your unaffiliated users policy

If your enterprise uses personal accounts and the unaffiliated users policy is set to remove users, people who no longer have access to any organizations will be removed from the enterprise and lose all privileges and licenses granted from the enterprise, including {% data variables.product.prodname_copilot_short %} licenses. Enterprise owners and billing managers are not affected by this policy. Before you remove any organizations, make sure this policy is set to **Remain in the enterprise**. See [AUTOTITLE](/enterprise-cloud@latest/admin/enforcing-policies/enforcing-policies-for-your-enterprise/control-offboarding).

### Step 2: Remove the organization

> [!IMPORTANT]
> Before taking action, make sure you review the effects of removing or deleting an organization in the linked documentation.

* If your enterprise uses personal accounts, remove the organization from your enterprise. See [AUTOTITLE](/enterprise-cloud@latest/admin/managing-accounts-and-repositories/managing-organizations-in-your-enterprise/removing-organizations-from-your-enterprise).
* If you use {% data variables.product.prodname_emus %}, you can delete the organization. See [AUTOTITLE](/organizations/managing-organization-settings/deleting-an-organization-account).

If removal or deletion is not an option, you can reduce license consumption by removing most of the organization's members. However, at least one organization owner will need to remain, and some non-members may continue consuming a license. See [AUTOTITLE](/billing/reference/github-license-users#organizations-on-github-enterprise-cloud).

### Step 3: Confirm your members are unaffiliated

On your enterprise's **People** page, confirm that the people who need {% data variables.copilot.copilot_business_short %} are still in the enterprise and are now listed as unaffiliated users, and that they still hold their {% data variables.product.prodname_copilot_short %} licenses.

### Step 4: Update your license count

Depending on how you are billed, reducing license consumption may not reduce your bill on its own.

* **Usage-based license billing**: no action needed. You are billed for the licenses you consume. To monitor spending, you can set budgets and alerts. See [AUTOTITLE](/billing/how-tos/set-up-budgets).
* **Volume license billing**: you must reduce your paid license count yourself. See [AUTOTITLE](/billing/how-tos/manage-plan-and-licenses/manage-user-licenses#self-serve-customers-with-volume-licenses).
* **Invoiced billing**: contact your account manager in {% data variables.contact.contact_enterprise_sales %}.

If you have already been charged for {% data variables.product.prodname_ghe_cloud %} licenses that you did not intend to use, contact {% data variables.contact.contact_support %}.

## Next steps

Help your developers start using {% data variables.product.prodname_copilot_short %} and measure its impact. See [AUTOTITLE](/copilot/tutorials/roll-out-at-scale/enable-developers/drive-adoption).
