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
  - /billing/managing-licenses-for-visual-studio-subscriptions-with-github-enterprise/about-visual-studio-subscriptions-with-github-enterprise
  - /billing/managing-billing-for-your-products/managing-licenses-for-visual-studio-subscriptions-with-github-enterprise/about-visual-studio-subscriptions-with-github-enterprise
versions:
  ghec: '*'
topics:
  - Billing
  - Enterprise
  - Licensing
shortTitle: Visual Studio subs
contentType: concepts
---

> [!NOTE] Customers with a {% data variables.product.prodname_vs %} bundle can **switch to usage-based billing** for {% data variables.product.prodname_enterprise %} licenses. This allows you to pay for licenses on a flexible monthly cycle for users who are not part of your {% data variables.product.prodname_vs %} subscription. See [AUTOTITLE](/billing/concepts/enterprise-billing/usage-based-licenses).

{% data reusables.enterprise-accounts.vss-ghe-description %} {% data variables.visual_studio.prodname_vss_ghe %} is available from Microsoft under the terms of the Microsoft Enterprise Agreement. For more information, see [{% data variables.visual_studio.prodname_vss_ghe %}](https://visualstudio.microsoft.com/subscriptions/visual-studio-github/) on the {% data variables.product.prodname_vs %} website.

To use the {% data variables.product.prodname_enterprise %} portion of the license, each subscriber's personal account on {% data variables.product.prodname_dotcom %} must be or become a member of an organization owned by your enterprise on {% data variables.product.prodname_dotcom %}. To accomplish this, organization owners can invite new members to an organization by email address. The subscriber can accept the invitation with an existing personal account or create a new account.

For more information about the setup of {% data variables.visual_studio.prodname_vss_ghe %}, see [AUTOTITLE](/billing/managing-billing-for-your-products/managing-licenses-for-visual-studio-subscriptions-with-github-enterprise/setting-up-visual-studio-subscriptions-with-github-enterprise).

## About licenses for {% data variables.visual_studio.prodname_vss_ghec %}

After you assign a license for {% data variables.visual_studio.prodname_vss_ghec %} to a subscriber, the subscriber will use the {% data variables.product.prodname_enterprise %} portion of the license by joining an organization in your enterprise with a personal account on {% data variables.product.prodname_dotcom %}. If the verified email address for the personal account of an enterprise member on {% data variables.product.prodname_dotcom %} matches the User Principal Name (UPN) for a subscriber to your {% data variables.product.prodname_vs %} account, the {% data variables.product.prodname_vs %} subscriber will automatically consume one license for {% data variables.visual_studio.prodname_vss_ghec %}.

> [!NOTE] For {% data variables.product.prodname_emus %} only, to make sure a user account consumes a {% data variables.product.prodname_vs %} license, ensure the {% data variables.product.prodname_vs %} UPN matches the SCIM `userName` attribute or the email address from the linked identity on the {% data variables.product.prodname_dotcom %} account. Unaffiliated users are included in the automatic matching behavior and can consume a license for {% data variables.visual_studio.prodname_vss_ghec %} while remaining unaffiliated.

The total quantity of your licenses for your enterprise on {% data variables.product.prodname_dotcom %} is the sum of any standard {% data variables.product.prodname_enterprise %} licenses and the number of {% data variables.product.prodname_vs %} subscription licenses that include access to {% data variables.product.prodname_dotcom %}.

If the personal account for an enterprise member does not correspond with the email address for a {% data variables.product.prodname_vs %} subscriber, an enterprise owner can manually match the accounts to consolidate licenses. Under the terms of service, the {% data variables.product.github %} account and {% data variables.product.prodname_vs %} subscription must belong to the same person.

For more information about {% data variables.product.prodname_enterprise %}, see [AUTOTITLE](/get-started/learning-about-github/githubs-plans#github-enterprise). For more information about accounts on {% data variables.product.prodname_dotcom %}, see [AUTOTITLE](/get-started/learning-about-github/types-of-github-accounts).

## About licenses for {% data variables.product.prodname_ghe_server %}

{% data reusables.enterprise.ghe-includes-ghec-and-ghes %} For more information, see [AUTOTITLE](/admin/overview/about-github-for-enterprises#about-deployment-options).

For users only on {% data variables.product.prodname_ghe_server %}, each {% data variables.product.prodname_vs %} subscriber will only consume one license as long as the email address associated with their {% data variables.product.prodname_ghe_server %} account matches their {% data variables.product.prodname_vs %} UPN. This does not apply if you have switched to **usage-based billing**, in which case users must also be on {% data variables.product.prodname_ghe_cloud %} to consume a bundled license.

For users on both {% data variables.product.prodname_ghe_server %} and {% data variables.product.prodname_ghe_cloud %}, only one license will be consumed as long as you follow the instructions in the 'About licenses for {% data variables.visual_studio.prodname_vss_ghec %}' section, and the user's accounts are linked as described in [AUTOTITLE](/billing/managing-your-license-for-github-enterprise/syncing-license-usage-between-github-enterprise-server-and-github-enterprise-cloud).

## Further reading

* [{% data variables.product.prodname_vs %} subscriptions with {% data variables.product.prodname_enterprise %}](https://docs.microsoft.com/visualstudio/subscriptions/access-github) in Microsoft Docs
* [Use {% data variables.product.prodname_vs %} or {% data variables.product.prodname_vscode %} to deploy apps from {% data variables.product.prodname_dotcom %}](https://docs.microsoft.com/en-us/azure/developer/github/deploy-with-visual-studio) in Microsoft Docs
