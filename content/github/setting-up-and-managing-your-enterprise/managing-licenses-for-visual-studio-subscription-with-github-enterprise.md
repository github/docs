---
title: Managing licenses for Visual Studio subscription with GitHub Enterprise
intro: 'You can manage {% data variables.product.prodname_enterprise %} licensing for {% data variables.product.prodname_vss_ghe %}.'
redirect_from:
  - /github/setting-up-and-managing-your-enterprise/managing-licenses-for-the-github-enterprise-and-visual-studio-bundle
  - /github/articles/about-the-github-and-visual-studio-bundle
  - /articles/about-the-github-and-visual-studio-bundle
  - /github/setting-up-and-managing-your-enterprise-account/managing-licenses-for-visual-studio-subscription-with-github-enterprise
versions:
  free-pro-team: '*'
---

### About {% data variables.product.prodname_vss_ghe %}

{% data variables.product.prodname_vss_ghe %} is a combined offering from Microsoft that allows a subscriber to use both {% data variables.product.prodname_enterprise %} and {% data variables.product.prodname_vs %}. {% data variables.product.prodname_vss_ghe %} is available from Microsoft under the terms of the Microsoft Enterprise Agreement. For more information, see [{% data variables.product.prodname_vss_ghe %}](https://visualstudio.microsoft.com/subscriptions/visual-studio-github/) on the {% data variables.product.prodname_vs %} website.

After you assign a license for {% data variables.product.prodname_vss_ghe %}  to a subscriber, the subscriber will use the {% data variables.product.prodname_enterprise %} portion of the license by joining an organization in your enterprise account with a user account on {% data variables.product.prodname_dotcom_the_website %}.

For more information about {% data variables.product.prodname_enterprise %}, see "[{% data variables.product.company_short %}'s products](/github/getting-started-with-github/githubs-products#github-enterprise)." For more information about accounts on {% data variables.product.prodname_dotcom_the_website %}, see "[Types of {% data variables.product.prodname_dotcom %} accounts](/github/getting-started-with-github/types-of-github-accounts)."

### Prerequisites

1. After you buy {% data variables.product.prodname_vss_ghe %}, contact {% data variables.contact.contact_enterprise_sales %} and mention "{% data variables.product.prodname_vss_ghe %}." You'll work with the Sales team to create an enterprise account on {% data variables.product.prodname_dotcom_the_website %}. If you already have an enterprise account on {% data variables.product.prodname_dotcom_the_website %}, or if you're not sure, please tell our Sales team.

2. Assign licenses for {% data variables.product.prodname_vss_ghe %} to subscribers in {% data variables.product.prodname_vss_admin_portal_with_url %}. For more information about assigning licenses, see [Manage {% data variables.product.prodname_vs %} subscriptions with {% data variables.product.prodname_enterprise %}](https://docs.microsoft.com/visualstudio/subscriptions/assign-github) in the Microsoft Docs.

3. On {% data variables.product.prodname_dotcom_the_website %}, create at least one organization owned by your enterprise account. For more information, see "[Adding organizations to your enterprise account](/github/setting-up-and-managing-your-enterprise/adding-organizations-to-your-enterprise-account)."

4. The subscriber must create a user account on {% data variables.product.prodname_dotcom_the_website %}, and the email address for the account must be the same email address as the email address in the {% data variables.product.prodname_vs %} portal. For more information, see "[Signing up for {% data variables.product.prodname_dotcom %}](/github/getting-started-with-github/signing-up-for-github)" and "[Managing email preferences](/github/setting-up-and-managing-your-github-user-account/managing-email-preferences)."

### Inviting a subscriber to use {% data variables.product.prodname_enterprise %}

To use the {% data variables.product.prodname_enterprise %} portion of the license, the subscriber must join an organization owned by your enterprise account on {% data variables.product.prodname_dotcom_the_website %}. Organization owners can invite new members to an organization. For more information, see "[Inviting users to join your organization](/github/setting-up-and-managing-organizations-and-teams/inviting-users-to-join-your-organization)."

### Viewing {% data variables.product.prodname_enterprise %} licensing

After assigning a license for {% data variables.product.prodname_vss_ghe %} in {% data variables.product.prodname_vss_admin_portal_with_url %}, you can view the number of {% data variables.product.prodname_enterprise %} licenses available to your enterprise account. For more information, see "[Viewing the subscription and usage for your enterprise account](/github/setting-up-and-managing-your-enterprise/viewing-the-subscription-and-usage-for-your-enterprise-account)."

You can also see pending {% data variables.product.prodname_enterprise %} invitations to subscribers in {% data variables.product.prodname_vss_admin_portal_with_url %}. The list of pending invitations includes subscribers who are not yet members of at least one organization in your enterprise account. For more information, see "[Viewing people in your enterprise](/github/setting-up-and-managing-your-enterprise/viewing-people-in-your-enterprise#viewing-members-and-outside-collaborators)."

### Further reading

- [Introducing Visual Studio subscriptions with GitHub Enterprise](https://docs.microsoft.com/visualstudio/subscriptions/access-github) in the Microsoft Docs
