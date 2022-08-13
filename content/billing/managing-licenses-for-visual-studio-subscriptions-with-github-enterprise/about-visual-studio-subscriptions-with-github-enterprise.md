---
title: About Visual Studio subscriptions with GitHub Enterprise
intro: 'You can give {% data variables.product.prodname_vs %} subscribers on your team access to {% data variables.product.prodname_enterprise %} with a combined offering from Microsoft.'
redirect_from:
  - /github/setting-up-and-managing-your-enterprise/managing-your-enterprise-account/managing-licenses-for-visual-studio-subscription-with-github-enterprise
  - /github/setting-up-and-managing-your-enterprise/managing-licenses-for-the-github-enterprise-and-visual-studio-bundle
  - /github/setting-up-and-managing-your-enterprise-account/managing-licenses-for-the-github-enterprise-and-visual-studio-bundle
  - /github/articles/about-the-github-and-visual-studio-bundle
  - /articles/about-the-github-and-visual-studio-bundle
  - /github/setting-up-and-managing-your-enterprise-account/managing-licenses-for-visual-studio-subscription-with-github-enterprise
  - /github/setting-up-and-managing-your-enterprise/managing-licenses-for-visual-studio-subscription-with-github-enterprise
  - /billing/managing-your-license-for-github-enterprise/managing-licenses-for-visual-studio-subscription-with-github-enterprise
versions:
  ghec: '*'
type: overview
topics:
  - Enterprise
  - Licensing
shortTitle: About
---

## About {% data variables.product.prodname_vss_ghe %}

{% data reusables.enterprise-accounts.vss-ghe-description %} {% data variables.product.prodname_vss_ghe %} is available from Microsoft under the terms of the Microsoft Enterprise Agreement. For more information, see [{% data variables.product.prodname_vss_ghe %}](https://visualstudio.microsoft.com/subscriptions/visual-studio-github/) on the {% data variables.product.prodname_vs %} website.

To use the {% data variables.product.prodname_enterprise %} portion of the license, each subscriber's personal account on {% data variables.product.prodname_dotcom_the_website %} must be or become a member of an organization owned by your enterprise on {% data variables.product.prodname_dotcom_the_website %}. To accomplish this, organization owners can invite new members to an organization by email address. The subscriber can accept the invitation with an existing personal account on {% data variables.product.prodname_dotcom_the_website %} or create a new account.

For more information about the setup of {% data variables.product.prodname_vss_ghe %}, see "[Setting up {% data variables.product.prodname_vss_ghe %}](/billing/managing-licenses-for-visual-studio-subscriptions-with-github-enterprise/setting-up-visual-studio-subscriptions-with-github-enterprise)."

## About licenses for {% data variables.product.prodname_vss_ghe %}

After you assign a license for {% data variables.product.prodname_vss_ghe %} to a subscriber, the subscriber will use the {% data variables.product.prodname_enterprise %} portion of the license by joining an organization in your enterprise with a personal account on {% data variables.product.prodname_dotcom_the_website %}. If the verified email address for the personal account of an enterprise member on {% data variables.product.prodname_dotcom_the_website %} matches the User Primary Name (UPN) for a subscriber to your {% data variables.product.prodname_vs %} account, the {% data variables.product.prodname_vs %} subscriber will automatically consume one license for {% data variables.product.prodname_vss_ghe %}.

The total quantity of your licenses for your enterprise on {% data variables.product.prodname_dotcom %} is the sum of any standard {% data variables.product.prodname_enterprise %} licenses and the number of {% data variables.product.prodname_vs %} subscription licenses that include access to {% data variables.product.prodname_dotcom %}. If the personal account for an enterprise member does not correspond with the email address for a {% data variables.product.prodname_vs %} subscriber, the license that the personal account consumes is unavailable for a {% data variables.product.prodname_vs %} subscriber.

For more information about {% data variables.product.prodname_enterprise %}, see "[{% data variables.product.company_short %}'s products](/github/getting-started-with-github/githubs-products#github-enterprise)." For more information about accounts on {% data variables.product.prodname_dotcom_the_website %}, see "[Types of {% data variables.product.prodname_dotcom %} accounts](/github/getting-started-with-github/types-of-github-accounts)."

You can view the number of {% data variables.product.prodname_enterprise %} licenses available to your enterprise on {% data variables.product.product_location %}. The list of pending invitations includes subscribers who are not yet members of at least one organization in your enterprise. For more information, see "[Viewing the subscription and usage for your enterprise account](/billing/managing-billing-for-your-github-account/viewing-the-subscription-and-usage-for-your-enterprise-account)" and "[Viewing people in your enterprise](/admin/user-management/managing-users-in-your-enterprise/viewing-people-in-your-enterprise#viewing-members-and-outside-collaborators)."

{% tip %}

**Tip**: If you download a CSV file with your enterprise's license usage in step 6 of "[Viewing the subscription and usage for your enterprise account](/billing/managing-billing-for-your-github-account/viewing-the-subscription-and-usage-for-your-enterprise-account#viewing-the-subscription-and-usage-for-your-enterprise-account)," any members with a missing value for the "Name" or "Profile" columns have not yet accepted an invitation to join an organization within the enterprise.

{% endtip %}

You can also see pending {% data variables.product.prodname_enterprise %} invitations to subscribers in {% data variables.product.prodname_vss_admin_portal_with_url %}.

## Further reading

- [{% data variables.product.prodname_vs %} subscriptions with {% data variables.product.prodname_enterprise %}](https://docs.microsoft.com/visualstudio/subscriptions/access-github) in Microsoft Docs
- [Use {% data variables.product.prodname_vs %} or {% data variables.product.prodname_vscode %} to deploy apps from {% data variables.product.prodname_dotcom %}](https://docs.microsoft.com/en-us/azure/developer/github/deploy-with-visual-studio) in Microsoft Docs
