---
title: Enabling GitHub.com repository search from your private enterprise environment
shortTitle: Search GitHub.com from enterprise
intro: 'You can connect your personal accounts on {% data variables.product.prodname_dotcom_the_website %} and your private {% data variables.product.prodname_enterprise %} environment to search for content in certain {% data variables.product.prodname_dotcom_the_website %} repositories{% ifversion fpt %} from your private environment{% else %} from {% data variables.product.product_name %}{% endif %}.'
redirect_from:
  - /articles/enabling-private-githubcom-repository-search-in-your-github-enterprise-account/
  - /articles/enabling-private-github-com-repository-search-in-your-github-enterprise-server-account/
  - /articles/enabling-private-githubcom-repository-search-in-your-github-enterprise-server-account/
  - /articles/enabling-githubcom-repository-search-in-github-enterprise-server
  - /github/searching-for-information-on-github/enabling-githubcom-repository-search-in-github-enterprise-server
  - /github/searching-for-information-on-github/getting-started-with-searching-on-github/enabling-githubcom-repository-search-in-github-enterprise-server
versions:
  fpt: '*'
  ghes: '*'
  ghae: next
topics:
  - GitHub search
---

## About search for {% data variables.product.prodname_dotcom_the_website %} repositories from {% ifversion fpt %}your private enterprise environment{% else %}{% data variables.product.product_name %}{% endif %}

You can search for designated private repositories on {% data variables.product.prodname_ghe_cloud %} from {% ifversion fpt %}your private {% data variables.product.prodname_enterprise %} environment{% else %}{% data variables.product.product_location %}{% ifversion ghae %} on {% data variables.product.prodname_ghe_managed %}{% endif %}{% endif %}. {% ifversion fpt %}For example, if you use {% data variables.product.prodname_ghe_server %}, you can search for private repositories from your enterprise from {% data variables.product.prodname_ghe_cloud %} in the web interface for {% data variables.product.prodname_ghe_server %}.{% endif %}

## Pré-requisitos

- An enterprise owner for {% ifversion fpt %}your private {% data variables.product.prodname_enterprise %} environment{% else %}{% data variables.product.product_name %}{% endif %} must enable {% data variables.product.prodname_github_connect %} and {% data variables.product.prodname_unified_search %} for private repositories. For more information, see the following.{% ifversion fpt or ghes %}
  - "[Enabling {% data variables.product.prodname_unified_search %} between your enterprise account and {% data variables.product.prodname_dotcom_the_website %}](/{% ifversion ghes %}{{ currentVersion }}{% else %}github-enterprise@latest{% endif %}/admin/configuration/managing-connections-between-your-enterprise-accounts/enabling-unified-search-between-your-enterprise-account-and-githubcom)" in the {% data variables.product.prodname_ghe_server %} documentation{% endif %}{% ifversion ghae-next %}<!-- Add fpt and ghae version when toggling feature flag -->
  - "[Enabling {% data variables.product.prodname_unified_search %} between your enterprise account and {% data variables.product.prodname_dotcom_the_website %}](/github-ae@latest/admin/configuration/managing-connections-between-your-enterprise-accounts/enabling-unified-search-between-your-enterprise-account-and-githubcom)" in the {% data variables.product.prodname_ghe_managed %} documentation
{% endif %}

- You must already have access to the private repositories and connect your account {% ifversion fpt %}in your private {% data variables.product.prodname_enterprise %} environment{% else %}on {% data variables.product.product_name %}{% endif %} with your account on {% data variables.product.prodname_dotcom_the_website %}. For more information about the repositories you can search, see "[About searching on GitHub](/github/searching-for-information-on-github/getting-started-with-searching-on-github/about-searching-on-github#searching-repositories-on-githubcom-from-your-private-enterprise-environment)."

## Enabling GitHub.com repository search from {% ifversion fpt %}your private {% data variables.product.prodname_enterprise %} environment{% else %}{% data variables.product.product_name %}{% endif %}

{% ifversion fpt %}

For more information, see the following.

| Your enterprise environment                         | Mais informações                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
|:--------------------------------------------------- |:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| {% data variables.product.prodname_ghe_server %}  | "[Enabling {% data variables.product.prodname_dotcom_the_website %} repository search from your private enterprise environment](/enterprise-server@latest/search-github/getting-started-with-searching-on-github/enabling-githubcom-repository-search-from-your-private-enterprise-environment#enabling-githubcom-repository-search-from-github-enterprise-server)" |{% ifversion ghae-next %}<!-- Condition is within an fpt block; remove condition entirely when toggling feature flag -->
|
| {% data variables.product.prodname_ghe_managed %} | "[Enabling {% data variables.product.prodname_dotcom_the_website %} repository search from your private enterprise environment](/github-ae@latest//search-github/getting-started-with-searching-on-github/enabling-githubcom-repository-search-from-your-private-enterprise-environment#enabling-githubcom-repository-search-from-github-ae)" 
{% endif %}

{% elsif ghes or ghae %}

1. Sign into {% data variables.product.product_name %} and {% data variables.product.prodname_dotcom_the_website %}.
1. On {% data variables.product.product_name %}, in the upper-right corner of any page, click your profile photo, then click **Settings**. ![Ícone Settings (Configurações) na barra de usuário](/assets/images/help/settings/userbar-account-settings.png)
{% data reusables.github-connect.github-connect-tab-user-settings %}
{% data reusables.github-connect.connect-dotcom-and-enterprise %}
{% data reusables.github-connect.connect-dotcom-and-enterprise %}

{% endif %}
