---
title: Enabling repository search across environments
shortTitle: Search across environments
intro: 'Unify search results in {% data variables.product.prodname_ghe_server %} by connecting your account on {% data variables.product.prodname_dotcom_the_website %}{% ifversion ghecom-github-connect %} or {% data variables.enterprise.data_residency_site %}{% endif %}.'
redirect_from:
  - /articles/enabling-private-githubcom-repository-search-in-your-github-enterprise-account
  - /articles/enabling-private-github-com-repository-search-in-your-github-enterprise-server-account
  - /articles/enabling-private-githubcom-repository-search-in-your-github-enterprise-server-account
  - /articles/enabling-githubcom-repository-search-in-github-enterprise-server
  - /github/searching-for-information-on-github/enabling-githubcom-repository-search-in-github-enterprise-server
  - /github/searching-for-information-on-github/getting-started-with-searching-on-github/enabling-githubcom-repository-search-in-github-enterprise-server
  - /search-github/getting-started-with-searching-on-github/enabling-githubcom-repository-search-from-your-private-enterprise-environment
versions:
  ghes: '*'
topics:
  - GitHub search
---

You can search for designated private repositories on {% data variables.product.prodname_ghe_cloud %} from {% data variables.location.product_location %}. For more information about searching across environments, see [AUTOTITLE](/search-github/getting-started-with-searching-on-github/about-searching-on-github#searching-repositories-on-githubcom-from-your-private-enterprise-environment).

## Prerequisites

An enterprise owner for {% data variables.product.prodname_ghe_server %} must enable {% data variables.product.prodname_github_connect %} and {% data variables.enterprise.prodname_unified_search %} for private repositories. For more information, see [AUTOTITLE](/admin/configuration/configuring-github-connect/enabling-unified-search-for-your-enterprise).

## Enabling unified repository search from {% data variables.product.prodname_ghe_server %}

1. Sign in to both your user account on {% data variables.product.prodname_ghe_server %} **and** your user account on {% data variables.product.prodname_ghe_cloud %} ({% data variables.product.prodname_dotcom_the_website %}{% ifversion ghecom-github-connect %} or {% data variables.enterprise.data_residency_site %}{% endif %}).
1. On {% data variables.product.prodname_ghe_server %}, in the upper-right corner of any page, click your profile photo, then click **Settings**.

{% ifversion global-nav-update %}

  ![Screenshot of a user's account menu on {% data variables.product.prodname_dotcom %}. The menu item "Settings" is outlined in dark orange.](/assets/images/help/settings/userbar-account-settings-global-nav-update.png)

{% else %}

  ![Screenshot of a user's account menu on {% data variables.product.prodname_dotcom %}. The menu item "Settings" is outlined in dark orange.](/assets/images/help/settings/userbar-account-settings.png)

{% endif %}
{% data reusables.github-connect.github-connect-tab-user-settings %}
{% data reusables.github-connect.connect-dotcom-and-enterprise %}
