---
title: About versions of GitHub Docs
intro: 'You can read documentation that reflects the {% data variables.product.company_short %} product you''re currently using.'
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
shortTitle: Docs versions
redirect_from:
  - /get-started/learning-about-github/about-versions-of-github-docs
---

## About versions of {% data variables.product.prodname_docs %}

{% data variables.product.company_short %} offers different plans for storing and collaborating on code. The plan you use determines which features are available to you. For more information, see "[AUTOTITLE](/get-started/learning-about-github/githubs-plans)."

This website, {% data variables.product.prodname_docs %}, provides documentation for all of {% data variables.product.company_short %}'s plans. If the content you're reading applies to more than one plan, you can choose the version of the documentation that's relevant to you by selecting the plan you're currently using.

At the top of a page on {% data variables.product.prodname_docs %}, select the dropdown menu and click a plan. If your browser window is not wide enough to display the full navigation bar, you may need to click {% octicon "kebab-horizontal" aria-label="Open Menu Bar" %} first.

![Screenshot of the header of {% data variables.product.prodname_docs %}. The "Version" dropdown menu is expanded and highlighted with an orange outline.](/assets/images/help/docs/version-picker.png)

{% note %}

**Note**: You can try changing the version now. You're viewing {% ifversion ghes %}a{% else %}the{% endif %} **{% ifversion fpt %}Free, Pro, & Team{% else %}{% data variables.product.product_name %}{% endif %}** version of this article.

{% endnote %}

## Determining which {% data variables.product.company_short %} product you use

You can determine which {% data variables.product.company_short %} plan you're currently using by reviewing the URL in the address bar of your browser and the heading for the {% data variables.product.prodname_dotcom %} website you're on.

You may use more than one {% data variables.product.company_short %} plan. For example, you might contribute to open source on {% data variables.product.prodname_dotcom_the_website %} and collaborate on code on your employer's {% data variables.product.prodname_ghe_server %} instance. You may need to view different versions of the same article at different times, depending on the problem you're currently trying to solve.

### {% data variables.product.prodname_dotcom_the_website %} plans or {% data variables.product.prodname_ghe_cloud %}

If you access {% data variables.product.prodname_dotcom %} at https://github.com, you're either using the features of a Free, Pro, or Team plan, or you're using {% data variables.product.prodname_ghe_cloud %}.

{% ifversion global-nav-update %}{% else %}
In a wide browser window, there is no text that immediately follows the {% data variables.product.company_short %} logo on the left side of the header.

  ![Screenshot of the header of any page on {% data variables.product.prodname_dotcom %}. The {% data variables.product.prodname_dotcom %} logo is highlighted with an orange outline.](/assets/images/help/docs/header-dotcom.png)

{% endif %}

On {% data variables.product.prodname_dotcom_the_website %}, each account has its own plan. Each personal account has an associated plan that provides access to certain features, and each organization has a different associated plan. If your personal account is a member of an organization on {% data variables.product.prodname_dotcom_the_website %}, you may have access to different features when you use resources owned by that organization than when you use resources owned by your personal account. For more information, see "[AUTOTITLE](/get-started/learning-about-github/types-of-github-accounts)."

If you don't know whether an organization uses {% data variables.product.prodname_ghe_cloud %}, ask an organization owner. For more information, see "[AUTOTITLE](/account-and-profile/setting-up-and-managing-your-personal-account-on-github/managing-your-membership-in-organizations/viewing-peoples-roles-in-an-organization)."

### {% data variables.product.prodname_ghe_server %}

If you access {% data variables.product.prodname_dotcom %} at a URL other than https://github.com, `https://*.github.us`, or `https://*.ghe.com`, you're using {% data variables.product.prodname_ghe_server %}. For example, you may access {% data variables.product.prodname_ghe_server %} at `https://github.YOUR-COMPANY-NAME.com`. Your administrators may choose a URL that doesn't include the word "{% data variables.product.company_short %}."

In a wide browser window, the word "Enterprise" immediately follows the {% data variables.product.company_short %} logo on the left side of the header.

![Screenshot of the header of any page on {% data variables.product.prodname_dotcom %}. The {% data variables.product.prodname_dotcom %} logo and "Enterprise" are highlighted with an orange outline.](/assets/images/help/docs/header-ghes.png)

You can view the version of {% data variables.product.prodname_ghe_server %} that you're using in the footer of any page.

![Screenshot of the footer of {% data variables.product.prodname_ghe_server %}. "{% data variables.product.prodname_ghe_server %} 3.7.5" is highlighted with an orange outline.](/assets/images/help/docs/ghes-version-in-footer.png)
