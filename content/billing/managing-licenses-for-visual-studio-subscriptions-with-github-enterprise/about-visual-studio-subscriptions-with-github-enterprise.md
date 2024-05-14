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

## About {% data variables.visual_studio.prodname_vss_ghe %}

{% data reusables.enterprise-accounts.vss-ghe-description %} {% data variables.visual_studio.prodname_vss_ghe %} is available from Microsoft under the terms of the Microsoft Enterprise Agreement. For more information, see [{% data variables.visual_studio.prodname_vss_ghe %}](https://visualstudio.microsoft.com/subscriptions/visual-studio-github/) on the {% data variables.product.prodname_vs %} website.

To use the {% data variables.product.prodname_enterprise %} portion of the license, each subscriber's personal account on {% data variables.product.prodname_dotcom_the_website %} must be or become a member of an organization owned by your enterprise on {% data variables.product.prodname_dotcom_the_website %}. To accomplish this, organization owners can invite new members to an organization by email address. The subscriber can accept the invitation with an existing personal account on {% data variables.product.prodname_dotcom_the_website %} or create a new account.

For more information about the setup of {% data variables.visual_studio.prodname_vss_ghe %}, see "[AUTOTITLE](/billing/managing-licenses-for-visual-studio-subscriptions-with-github-enterprise/setting-up-visual-studio-subscriptions-with-github-enterprise)."

## About licenses for {% data variables.visual_studio.prodname_vss_ghec %}

After you assign a license for {% data variables.visual_studio.prodname_vss_ghec %} to a subscriber, the subscriber will use the {% data variables.product.prodname_enterprise %} portion of the license by joining an organization in your enterprise with a personal account on {% data variables.product.prodname_dotcom_the_website %}. If the verified email address for the personal account of an enterprise member on {% data variables.product.prodname_dotcom_the_website %} matches the User Principal Name (UPN) for a subscriber to your {% data variables.product.prodname_vs %} account, the {% data variables.product.prodname_vs %} subscriber will automatically consume one license for {% data variables.visual_studio.prodname_vss_ghec %}.

{% note %}

**Note:** For {% data variables.product.prodname_emu %} only, to make sure a user account consumes a {% data variables.product.prodname_vs %} license, ensure the {% data variables.product.prodname_vs %} UPN matches the SCIM `userName` attribute or the email address from the linked identity on the {% data variables.product.prodname_dotcom %} account.

{% endnote %}

The total quantity of your licenses for your enterprise on {% data variables.product.prodname_dotcom %} is the sum of any standard {% data variables.product.prodname_enterprise %} licenses and the number of {% data variables.product.prodname_vs %} subscription licenses that include access to {% data variables.product.prodname_dotcom %}. If the personal account for an enterprise member does not correspond with the email address for a {% data variables.product.prodname_vs %} subscriber, the license that the personal account consumes is unavailable for a {% data variables.product.prodname_vs %} subscriber.

For more information about {% data variables.product.prodname_enterprise %}, see "[AUTOTITLE](/get-started/learning-about-github/githubs-plans#github-enterprise)." For more information about accounts on {% data variables.product.prodname_dotcom_the_website %}, see "[AUTOTITLE](/get-started/learning-about-github/types-of-github-accounts)."

You can view the number of {% data variables.product.prodname_enterprise %} licenses available to your enterprise on {% data variables.location.product_location %}. The list of pending invitations includes subscribers who are not yet members of at least one organization in your enterprise. For more information, see "[AUTOTITLE](/billing/managing-the-plan-for-your-github-account/viewing-the-subscription-and-usage-for-your-enterprise-account)" and "[AUTOTITLE](/admin/user-management/managing-users-in-your-enterprise/viewing-people-in-your-enterprise#viewing-members-and-outside-collaborators)."

{% tip %}

**Tip**: If you download a CSV file with your enterprise's license usage in step 6 of "[AUTOTITLE](/billing/managing-the-plan-for-your-github-account/viewing-the-subscription-and-usage-for-your-enterprise-account#viewing-the-subscription-and-usage-for-your-enterprise-account)," any members with a missing value for the "Name" or "Profile" columns have not yet accepted an invitation to join an organization within the enterprise.

{% endtip %}

You can also see pending {% data variables.product.prodname_enterprise %} invitations to subscribers in {% data variables.visual_studio.prodname_vss_admin_portal_with_url %}.

## About licenses for {% data variables.product.prodname_ghe_server %}

{% data reusables.enterprise.ghe-includes-ghec-and-ghes %} For more information, see "[AUTOTITLE](/admin/overview/about-github-for-enterprises#about-deployment-options)."

For users only on {% data variables.product.prodname_ghe_server %}, each {% data variables.product.prodname_vs %} subscriber will only consume one license as long as the email address associated with their {% data variables.product.prodname_ghe_server %} account matches their {% data variables.product.prodname_vs %} UPN. For users on both {% data variables.product.prodname_ghe_server %} and {% data variables.product.prodname_ghe_cloud %}, only one license will be consumed as long as you follow the instructions in the 'About licenses for {% data variables.visual_studio.prodname_vss_ghec %}' section, and the user's accounts are linked as described in "[AUTOTITLE](/billing/managing-your-license-for-github-enterprise/syncing-license-usage-between-github-enterprise-server-and-github-enterprise-cloud)."

## Further reading

- [{% data variables.product.prodname_vs %} subscriptions with {% data variables.product.prodname_enterprise %}](https://docs.microsoft.com/visualstudio/subscriptions/access-github) in Microsoft Docs
- [Use {% data variables.product.prodname_vs %} or {% data variables.product.prodname_vscode %} to deploy apps from {% data variables.product.prodname_dotcom %}](https://docs.microsoft.com/en-us/azure/developer/github/deploy-with-visual-studio) in Microsoft Docs
