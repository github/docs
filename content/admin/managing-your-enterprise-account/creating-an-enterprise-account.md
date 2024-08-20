---
title: Creating an enterprise account
intro: "Learn the steps and effects of creating an enterprise account."
versions:
  ghec: '*'
type: how_to
topics:
  - Accounts
  - Enterprise
  - Fundamentals
permissions: Organization owners
product: '{% data variables.product.prodname_ghe_cloud %}'
shortTitle: Create enterprise account
redirect_from:
  - /admin/overview/creating-an-enterprise-account
---

<!-- expires 2024-09-03 -->
{% data reusables.enterprise.single-organizations-enterprise-migration %}
<!-- end expires 2024-09-03 -->

## When should I create an enterprise account?

{% data variables.product.prodname_ghe_cloud %} allows you to create an enterprise account, which enables collaboration between **multiple organizations** and gives administrators a single point of visibility and management. See "[AUTOTITLE](/admin/managing-your-enterprise-account/about-enterprise-accounts)."

In most cases, you can create an enterprise account **yourself**.

* When you start a free trial of {% data variables.product.prodname_ghe_cloud %}, you'll create an enterprise account as part of the process. See "[AUTOTITLE](/admin/overview/setting-up-a-trial-of-github-enterprise-cloud)."
* If you currently use {% data variables.product.prodname_ghe_cloud %} with a single organization, you can upgrade to an enterprise account by following the steps later in this article.

You'll **need help** creating an enterprise account for:

* {% data variables.product.prodname_ghe_server %}
* Invoicing
* Managing {% data variables.product.prodname_copilot_for_business %} licenses without adopting {% data variables.product.prodname_enterprise %}

In these cases, contact {% data variables.contact.contact_enterprise_sales %}.

## What will happen after I upgrade my organization?

The following changes also apply to single organizations that are automatically upgraded to an enterprise account. For details, see the [{% data variables.product.prodname_blog %}](https://github.blog/changelog/2024-06-19-upcoming-automatic-upgrade-to-the-enterprise-account-experience/).

* **Ownership transfer**: Your organization will automatically be owned by the enterprise account. For details, see "[AUTOTITLE](/admin/user-management/managing-organizations-in-your-enterprise/adding-organizations-to-your-enterprise#about-addition-of-organizations-to-your-enterprise-account)."
* **Ownership roles**: All organization owners will become enterprise owners.
* **Billing details**: The organization’s billing details will now apply to the enterprise account.
* **Billing managers**: All organization billing managers will become enterprise billing managers.
* **Billing process**: {% data variables.product.company_short %} will bill the enterprise account for usage within **all** organizations owned by the enterprise.
* **Enterprise account name**: During the upgrade, the new enterprise account name will match your organization name or be as close as possible if taken. You can rename it after the upgrade.
* **SAML SSO:** Existing SAML SSO will stay at the organization level after being added to the new enterprise account. You can configure SSO at the enterprise level post-upgrade, which will override the organization level. Existing PATs and SAML-authorized tokens will remain unchanged.
* **Policies**: The new enterprise account starts with no policies, so existing organization policies won't be overridden.
* **Spending limits**: Existing organization spending limits transfer to the new enterprise account. Post-upgrade, billing is handled at the enterprise level. To adjust spending limits, under "Settings" in the enterprise account sidebar, select **Billing**.
* **Coupons**: Existing coupons will carry over to the new enterprise account with no interruptions.
* **Workflow permissions**: The new enterprise account will inherit your organization's workflow permissions. If the organization has a permissive setting ("Read and write"), the enterprise account will also default to permissive. Otherwise, it defaults to restrictive ("Read repository contents and packages"). For workflows with the id-token permission, the default changes to read-only due to a February 2023 update. Add an explicit permissions block in these workflows to grant the required permissions.

## Upgrading an organization to an enterprise account

{% data reusables.organizations.billing-settings %}
1. Click **Upgrade to enterprise account**.
1. Under "Enterprise name", type a name for your enterprise account.
1. Under "Enterprise URL slug", type a slug to be used in the URL for your enterprise.

   For example, if you choose `octo-enterprise`, the URL will be `https://github.com/enterprises/octo-enterprise`.
1. Click **Confirm and upgrade**.
1. Read the warnings, then click **Create enterprise account**.

## Next steps

Follow the "[Get started with your enterprise account](/admin/guides#get-started-with-your-enterprise-account)" learning path.

## Further reading

* "[AUTOTITLE](/admin/user-management/managing-users-in-your-enterprise/roles-in-an-enterprise)"
