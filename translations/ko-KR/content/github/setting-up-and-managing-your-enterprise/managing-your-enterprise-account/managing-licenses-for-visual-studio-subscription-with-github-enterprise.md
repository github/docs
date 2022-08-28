---
title: Managing licenses for Visual Studio subscription with GitHub Enterprise
intro: 'You can manage {% data variables.product.prodname_enterprise %} licensing for {% data variables.product.prodname_vss_ghe %}.'
redirect_from:
  - /github/setting-up-and-managing-your-enterprise/managing-licenses-for-the-github-enterprise-and-visual-studio-bundle
  - /github/setting-up-and-managing-your-enterprise-account/managing-licenses-for-the-github-enterprise-and-visual-studio-bundle
  - /github/articles/about-the-github-and-visual-studio-bundle
  - /articles/about-the-github-and-visual-studio-bundle
  - /github/setting-up-and-managing-your-enterprise-account/managing-licenses-for-visual-studio-subscription-with-github-enterprise
  - /github/setting-up-and-managing-your-enterprise/managing-licenses-for-visual-studio-subscription-with-github-enterprise
versions:
  free-pro-team: '*'
topics:
  - Enterprise
---

### About {% data variables.product.prodname_vss_ghe %}

{% data variables.product.prodname_vss_ghe %} is a combined offering from Microsoft that allows a subscriber to use both {% data variables.product.prodname_enterprise %} and {% data variables.product.prodname_vs %}. {% data variables.product.prodname_vss_ghe %} is available from Microsoft under the terms of the Microsoft Enterprise Agreement. For more information, see [{% data variables.product.prodname_vss_ghe %}](https://visualstudio.microsoft.com/subscriptions/visual-studio-github/) on the {% data variables.product.prodname_vs %} website.

After you assign a license for {% data variables.product.prodname_vss_ghe %} to a subscriber, the subscriber will use the {% data variables.product.prodname_enterprise %} portion of the license by joining an organization in your enterprise account with a user account on {% data variables.product.prodname_dotcom_the_website %}. If the email address for the user account of an enterprise member on {% data variables.product.prodname_dotcom_the_website %} matches the User Primary Name (UPN) for a subscriber to your {% data variables.product.prodname_vs %} account, the {% data variables.product.prodname_vs %} subscriber will automatically consume one license for {% data variables.product.prodname_vss_ghe %}.

The total quantity of your licenses for your enterprise on {% data variables.product.prodname_dotcom %} is the sum of any standard {% data variables.product.prodname_enterprise %} licenses and the number of {% data variables.product.prodname_vs %} subscription licenses that include access to {% data variables.product.prodname_dotcom %}. If the user account for an enterprise member does not correspond with the email address for a {% data variables.product.prodname_vs %} subscriber, the license that the user account consumes is unavailable for a {% data variables.product.prodname_vs %} subscriber.

For more information about {% data variables.product.prodname_enterprise %}, see "[{% data variables.product.company_short %}'s products](/github/getting-started-with-github/githubs-products#github-enterprise)." For more information about accounts on {% data variables.product.prodname_dotcom_the_website %}, see "[Types of {% data variables.product.prodname_dotcom %} accounts](/github/getting-started-with-github/types-of-github-accounts)."

### 빌드전 요구 사양

1. After you buy {% data variables.product.prodname_vss_ghe %}, contact {% data variables.contact.contact_enterprise_sales %} and mention "{% data variables.product.prodname_vss_ghe %}." You'll work with the Sales team to create an enterprise account on {% data variables.product.prodname_dotcom_the_website %}. If you already have an enterprise account on {% data variables.product.prodname_dotcom_the_website %}, or if you're not sure, please tell our Sales team.

2. Assign licenses for {% data variables.product.prodname_vss_ghe %} to subscribers in {% data variables.product.prodname_vss_admin_portal_with_url %}. For more information about assigning licenses, see [Manage {% data variables.product.prodname_vs %} subscriptions with {% data variables.product.prodname_enterprise %}](https://docs.microsoft.com/visualstudio/subscriptions/assign-github) in the Microsoft Docs.

3. On {% data variables.product.prodname_dotcom_the_website %}, create at least one organization owned by your enterprise account. For more information, see "[Adding organizations to your enterprise account](/github/setting-up-and-managing-your-enterprise/adding-organizations-to-your-enterprise-account)."

### Inviting a subscriber to use {% data variables.product.prodname_enterprise %}

To use the {% data variables.product.prodname_enterprise %} portion of the license, the subscriber's user account on {% data variables.product.prodname_dotcom_the_website %} must be or become a member of an organization owned by your enterprise on {% data variables.product.prodname_dotcom_the_website %}.

Organization owners can invite new members to an organization by email address. The subscriber can accept the invitation with an existing user account on {% data variables.product.prodname_dotcom_the_website %} or create a new account.

While not required, we recommend that organization owners send an invitation to the same email address used for the {% data variables.product.prodname_vs %} subscriber's User Primary Name (UPN). When the email address on {% data variables.product.product_name %} matches the subscriber's UPN, you can ensure that another member of the organization does not claim the subscriber's license.

For more information, see "[Inviting users to join your organization](/organizations/managing-membership-in-your-organization/inviting-users-to-join-your-organization)," "[Signing up for {% data variables.product.prodname_dotcom %}](/github/getting-started-with-github/signing-up-for-github)," and "[Managing email preferences](/github/setting-up-and-managing-your-github-user-account/managing-email-preferences)."

### Viewing {% data variables.product.prodname_enterprise %} licensing

After assigning a license for {% data variables.product.prodname_vss_ghe %} in {% data variables.product.prodname_vss_admin_portal_with_url %}, you can view the number of {% data variables.product.prodname_enterprise %} licenses available to your enterprise account. For more information, see "[Viewing the subscription and usage for your enterprise account](/github/setting-up-and-managing-your-enterprise/viewing-the-subscription-and-usage-for-your-enterprise-account)."

You can also see pending {% data variables.product.prodname_enterprise %} invitations to subscribers in {% data variables.product.prodname_vss_admin_portal_with_url %}. The list of pending invitations includes subscribers who are not yet members of at least one organization in your enterprise account. For more information, see "[Viewing people in your enterprise](/github/setting-up-and-managing-your-enterprise/viewing-people-in-your-enterprise#viewing-members-and-outside-collaborators)."

### 더 읽을거리

- [Introducing Visual Studio subscriptions with GitHub Enterprise](https://docs.microsoft.com/visualstudio/subscriptions/access-github) in the Microsoft Docs
