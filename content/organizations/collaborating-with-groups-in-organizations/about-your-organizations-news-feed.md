---
title: About your organization’s news feed
intro: You can use your organization's news feed to keep up with recent activity on repositories owned by that organization.
redirect_from:
  - /articles/news-feed
  - /articles/about-your-organization-s-news-feed
  - /articles/about-your-organizations-news-feed
  - /github/setting-up-and-managing-organizations-and-teams/about-your-organizations-news-feed
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Organizations
  - Teams
shortTitle: Organization news feed
---


{% ifversion fpt or ghec %}
{% note %}

**Note:** The organization news feed is not available with {% data variables.product.prodname_emus %}.

{% endnote %}
{% endif %}

An organization's news feed shows other people's activity on repositories owned by that organization. You can use your organization's news feed to see when someone opens, closes, or merges an issue or pull request, creates or deletes a branch, creates a tag or release, comments on an issue, pull request, or commit, or pushes new commits to {% data variables.product.product_name %}.

## Accessing your organization's news feed

1. {% data variables.product.signin_link %} to your account on {% ifversion ghae %}{% data variables.product.product_name %}{% else %}{% data variables.location.product_location %}{% endif %}.
1. Open your {% data reusables.user-settings.personal_dashboard %}.
1. In the upper-left corner of the page, select the dropdown menu that switches account context, then select an organization.

   ![Screenshot of a user's dashboard page. In the top-left corner, a dropdown menu, labeled with @octocat and a downwards arrow, is outlined in dark orange.](/assets/images/help/organizations/account-context-switcher.png)
