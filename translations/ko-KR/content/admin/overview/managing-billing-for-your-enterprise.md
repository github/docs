---
title: Managing billing for your enterprise
intro: You can view billing information for your enterprise.
product: '{% data reusables.gated-features.enterprise-accounts %}'
redirect_from:
  - /enterprise/admin/installation/managing-billing-for-github-enterprise
  - /enterprise/admin/overview/managing-billing-for-github-enterprise
  - /admin/overview/managing-billing-for-github-enterprise
versions:
  enterprise-server: '*'
  github-ae: '*'
topics:
  - 엔터프라이즈
---

{% if currentVersion == "github-ae@latest" %}

{% data reusables.github-ae.about-billing %} Once per day, {% data variables.product.prodname_dotcom %} will count the number of users with a license for your enterprise. {% data variables.product.company_short %} bills you for each licensed user regardless of whether the user logged into {% data variables.product.prodname_ghe_managed %} that day.

For commercial regions, the price per user per day is $1.2580645161. For 31-day months, the monthly cost for each user is $39. For months with fewer days, the monthly cost is lower. Each billing month begins at a fixed time on the first day of the calendar month.

If you add a licensed user mid-month, that user will only be included in the count for the days they have a license. When you remove a licensed user, that user will remain in the count until the end of that month. Therefore, if you add a user mid-month and later remove the user in the same month, the user will be included in the count from the day the user was added through the end of the month. There is no additional cost if you re-add a user during the same month the user was removed.

For example, here are the costs for users with licenses on different dates.

| User      | License dates                                           | Counted days | Cost   |
| --------- | ------------------------------------------------------- | ------------ | ------ |
| @octocat  | January 1 - January 31                                  | 31           | $39    |
| @robocat  | February 1 - February 28                                | 29           | $35.23 |
| @devtocat | January 15 - January 31                                 | 17           | $21.39 |
| @doctocat | January 1 - January 15                                  | 31           | $39    |
| @prodocat | January 7 - January 15                                  | 25           | $31.45 |
| @monalisa | January 1 - January 7,<br>January 15 - January 31 | 31           | $39    |

Your enterprise can include one or more instances. {% data variables.product.prodname_ghe_managed %} has a 500-user minimum per instance. {% data variables.product.company_short %} bills you for a minimum of 500 users per instance, even if there are fewer than 500 users with a license that day.

You can see your current usage in your [Azure account portal](https://portal.azure.com).

{% else %}

### About billing for enterprise accounts

Enterprise accounts are currently available to {% data variables.product.prodname_enterprise %} customers paying by invoice. Billing for all of the organizations and {% data variables.product.prodname_ghe_server %} instances connected to your enterprise account is aggregated into a single bill charge for all of your paid {% data variables.product.prodname_dotcom_the_website %} services (including paid licenses in organizations, {% data variables.large_files.product_name_long %} data packs, and subscriptions for {% data variables.product.prodname_marketplace %} apps).

Enterprise owners and billing managers can access and manage all billing settings for enterprise accounts. For more information about enterprise accounts, {% if currentVersion == "free-pro-team@latest" or "github-ae@latest" %}"[Roles in an enterprise](/github/setting-up-and-managing-your-enterprise/roles-in-an-enterprise#enterprise-members)" and {% endif %}"[Repository permission levels for an organization](/articles/repository-permission-levels-for-an-organization)."For more information about managing billing managers, see "[Inviting people to manage your enterprise](/github/setting-up-and-managing-your-enterprise/inviting-people-to-manage-your-enterprise)."

### Viewing your current invoice

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.settings-tab %}
{% data reusables.enterprise-accounts.billing-tab %}
4. Under "Quick Actions", click **View invoice**. ![View invoice link](/assets/images/help/business-accounts/view-invoice-link.png)

### Paying your current invoice

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.settings-tab %}
{% data reusables.enterprise-accounts.billing-tab %}
4. Under "Quick Actions", click **Pay invoice**. ![Pay invoice link](/assets/images/help/business-accounts/pay-invoice-link.png)
5. Under "Pay invoice", type your credit card information in the secure form, then click **Pay Invoice**. ![Confirm and pay invoice](/assets/images/help/business-accounts/pay-invoice.png)

### Downloading your current invoice

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.settings-tab %}
{% data reusables.enterprise-accounts.billing-tab %}
4. Under "Quick Actions", click **Download current invoice**. ![Download current invoice link](/assets/images/help/business-accounts/download-current-invoice.png)

### Viewing your payment history

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.settings-tab %}
{% data reusables.enterprise-accounts.billing-tab %}
4. Under "Billing", click the **Past Invoices** tab to see a summary of your past billing activity. ![View payment history tab](/assets/images/help/business-accounts/view-payment-history.png)

{% endif %}
