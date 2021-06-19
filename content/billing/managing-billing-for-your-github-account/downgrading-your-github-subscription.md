---
title: Downgrading your GitHub subscription
intro: 'You can downgrade the subscription for any type of {% data variables.product.product_name %} account at any time.'
redirect_from:
  - /github/setting-up-and-managing-billing-and-payments-on-github/downgrading-your-github-subscription
  - /articles/downgrading-your-personal-account-s-billing-plan/
  - /articles/how-do-i-cancel-my-account/
  - /articles/downgrading-a-user-account-to-free/
  - /articles/removing-paid-seats-from-your-organization/
  - /articles/downgrading-your-organization-s-paid-seats/
  - /articles/downgrading-your-organization-s-billing-plan/
  - /articles/downgrading-an-organization-with-per-seat-pricing-to-free/
  - /articles/downgrading-an-organization-with-per-repository-pricing-to-free/
  - /articles/downgrading-your-organization-to-free/
  - /articles/downgrading-your-organization-from-the-business-plan-to-the-team-plan/
  - /articles/downgrading-your-organization-from-github-business-cloud-to-the-team-plan/
  - /articles/downgrading-your-github-billing-plan/
  - /articles/downgrading-your-github-subscription
  - /github/setting-up-and-managing-billing-and-payments-on-github/managing-billing-for-your-github-account/downgrading-your-github-subscription
versions:
  free-pro-team: '*'
topics:
  - Accounts
  - Downgrades
  - Organizations
  - Repositories
  - User account
---
## Downgrading your {% data variables.product.product_name %} subscription

When you downgrade your user account or organization's subscription, pricing and account feature changes take effect on your next billing date. Changes to your paid user account or organization subscription does not affect subscriptions or payments for other paid {% data variables.product.prodname_dotcom %} features. For more information, see "[How does upgrading or downgrading affect the billing process?](/articles/how-does-upgrading-or-downgrading-affect-the-billing-process)."

## Downgrading your user account's subscription

If you downgrade your user account from {% data variables.product.prodname_pro %} to {% data variables.product.prodname_free_user %}, the account will lose access to advanced code review tools on private repositories. {% data reusables.gated-features.more-info %}

{% data reusables.user_settings.access_settings %}
{% data reusables.user_settings.billing_plans %}
1. Under "Current plan", use the **Edit** drop-down and click **Downgrade to Free**.
  ![Downgrade to free button](/assets/images/help/billing/downgrade-to-free.png)
5. Read the information about the features your user account will no longer have access to on your next billing date, then click **I understand. Continue with downgrade**.
  ![Continue with downgrade button](/assets/images/help/billing/continue-with-downgrade.png)

If you published a {% data variables.product.prodname_pages %} site in a private repository and added a custom domain, remove or update your DNS records before downgrading from {% data variables.product.prodname_pro %} to {% data variables.product.prodname_free_user %}, to avoid the risk of a domain takeover. For more information, see "[Managing a custom domain for your {% data variables.product.prodname_pages %} site](/articles/managing-a-custom-domain-for-your-github-pages-site)."

## Downgrading your organization's subscription

{% data reusables.dotcom_billing.org-billing-perms %}

If you downgrade your organization from {% data variables.product.prodname_team %} to {% data variables.product.prodname_free_team %} for an organization, the account will lose access to advanced collaboration and management tools for teams.

If you downgrade your organization from {% data variables.product.prodname_ghe_cloud %} to {% data variables.product.prodname_team %} or {% data variables.product.prodname_free_team %}, the account will lose access to advanced security, compliance, and deployment controls. {% data reusables.gated-features.more-info %}

{% data reusables.organizations.billing-settings %}
1. Under "Current plan", use the **Edit** drop-down and click the downgrade option you want.
  ![Downgrade button](/assets/images/help/billing/downgrade-option-button.png)
{% data reusables.dotcom_billing.confirm_cancel_org_plan %}

## Downgrading an organization's subscription with legacy per-repository pricing

{% data reusables.dotcom_billing.org-billing-perms %}

{% data reusables.dotcom_billing.switch-legacy-billing %} For more information, see "[Switching your organization from per-repository to per-user pricing](/billing/managing-billing-for-your-github-account/upgrading-your-github-subscription#switching-your-organization-from-per-repository-to-per-user-pricing)."

{% data reusables.organizations.billing-settings %}
5. Under "Subscriptions", select the "Edit" drop-down, and click **Edit plan**.
    ![Edit Plan dropdown](/assets/images/help/billing/edit-plan-dropdown.png)
1. Under "Billing/Plans",  next to the plan you want to change, click **Downgrade**.
    ![Downgrade button](/assets/images/help/billing/downgrade-plan-option-button.png)
1. Enter the reason you're downgrading your account, then click **Downgrade plan**.
    ![Text box for downgrade reason and downgrade button](/assets/images/help/billing/downgrade-plan-button.png)

## Removing paid seats from your organization

To reduce the number of paid seats your organization uses, you can remove members from your organization or convert members to outside collaborators and give them access to only public repositories. For more information, see:
- "[Removing a member from your organization](/articles/removing-a-member-from-your-organization)"
- "[Converting an organization member to an outside collaborator](/articles/converting-an-organization-member-to-an-outside-collaborator)"
- "[Managing an individual's access to an organization repository](/articles/managing-an-individual-s-access-to-an-organization-repository)"

{% data reusables.organizations.billing-settings %}
1. Under "Current plan", use the **Edit** drop-down and click **Remove seats**.
  ![remove seats dropdown](/assets/images/help/billing/remove-seats-dropdown.png)
1. Under "Remove seats", select the number of seats you'd like to downgrade to.
  ![remove seats option](/assets/images/help/billing/remove-seats-amount.png)
1. Review the information about your new payment on your next billing date, then click **Remove seats**.
  ![remove seats button](/assets/images/help/billing/remove-seats-button.png)

## Further reading

- "[{% data variables.product.prodname_dotcom %}'s products](/articles/github-s-products)"
- "[How does upgrading or downgrading affect the billing process?](/articles/how-does-upgrading-or-downgrading-affect-the-billing-process)"
- "[About billing on {% data variables.product.prodname_dotcom %}](/articles/about-billing-on-github)."
- "[Removing a payment method](/articles/removing-a-payment-method)"
- "[About per-user pricing](/articles/about-per-user-pricing)"
