---
title: Managing user licenses for an organization or enterprise
intro: Add licenses to allow more people to join your organization or enterprise.
product: 'Organizations on {% data variables.product.prodname_team %} and enterprises that use self-serve volume licensing'
versions:
  feature: enhanced-billing-platform
redirect_from:
  - /billing/using-the-enhanced-billing-platform-for-enterprises/adding-seats-to-your-enterprise-account
  - /billing/using-the-new-billing-platform/adding-seats-to-your-enterprise-account
  - /billing/using-the-new-billing-platform/adding-seats-to-your-account
  - /billing/using-the-new-billing-platform/adding-licenses-to-your-account
  - /billing/using-the-new-billing-platform/managing-licenses-and-plans-for-your-account
  - /billing/managing-your-billing/adding-licenses-to-an-organization
  - /billing/how-tos/manage-plan-and-licenses/manage-organization-licenses
  - /billing/how-tos/manage-plan-and-licenses/add-licenses
topics:
  - Billing
  - Enterprise
  - Team
permissions: '{% data reusables.permissions.enhanced-billing-platform %}'
shortTitle: Manage user licenses
contentType: how-tos
---

## Organizations on {% data variables.product.prodname_team %}

If you're the owner of an organization on a {% data variables.product.prodname_team %} plan, you can add or remove user licenses to your plan through the "Licensing" page.

{% data reusables.profile.access_org %}
{% data reusables.profile.org_settings %}
{% data reusables.billing.org-billing-menu %}
1. Click **Licensing**.
1. In the {% data variables.product.prodname_team %} banner, click **Edit** and select **Add seats** or **Remove seats**.
1. Define the number of new seats you require. The details of the prorated cost for the remainder of the billing cycle and the total for your next bill are updated automatically.
1. Click **Add seats** or **Remove seats**.

### Changing members to outside collaborators

To reduce the number of paid licenses your organization requires, you can convert members to outside collaborators and give them access to only public repositories. For more information, see:

* [AUTOTITLE](/organizations/managing-membership-in-your-organization/removing-a-member-from-your-organization)
* [AUTOTITLE](/organizations/managing-user-access-to-your-organizations-repositories/managing-outside-collaborators/converting-an-organization-member-to-an-outside-collaborator)
* [AUTOTITLE](/organizations/managing-user-access-to-your-organizations-repositories/managing-repository-roles/managing-an-individuals-access-to-an-organization-repository)

## Enterprises on {% data variables.product.prodname_ghe_cloud %}

For organizations that are part of an enterprise, licenses are managed at the enterprise level. Only self-serve customers on a volume agreement can manage licenses through the {% data variables.product.github %} UI.

To add or remove licenses from your enterprise account:

* If you **pay by invoice**, contact your account manager in {% data variables.contact.contact_enterprise_sales %}.
* If you are a self-serve customer with **usage-based license billing**, you don't need to add a set number of licenses to your enterprise. You will be billed for licenses based on the number of members in your organizations. See [AUTOTITLE](/billing/concepts/enterprise-billing/usage-based-licenses).
* If you are a self-serve customer with **volume license billing**, follow the instructions below.

### Self-serve customers with volume licenses

1. Navigate to your enterprise account.
{% data reusables.billing.enterprise-billing-menu %}
1. In the left sidebar, click **Licensing**.
1. Next to "Enterprise Cloud", click **{% octicon "kebab-horizontal" aria-hidden="true" aria-label="kebab-horizontal" %}**, then click **Manage licenses**.
1. Choose your number of licenses, then click **Confirm licenses**.
