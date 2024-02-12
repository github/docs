---
title: About the setup URL
intro: 'You can specify a URL that users will be redirected to after they install a {% data variables.product.prodname_github_app %}.'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - GitHub Apps
shortTitle: Setup URL
redirect_from:
  - /apps/creating-github-apps/setting-up-a-github-app/about-the-setup-url
---

When you register a {% data variables.product.prodname_github_app %}, you can specify a setup URL. When users install your {% data variables.product.prodname_github_app %}, they are redirected to the setup URL. If additional setup is required after installation, you can use this URL to tell users what steps to take next.

If you specify a setup URL, you can also select **Redirect on update** to specify that users should be redirected to the setup URL after they update an installation. An update includes adding or removing access to a repository for an installation.

{% warning %}

**Warning**: When {% data variables.product.company_short %} redirects users to the setup URL, it includes an `installation_id` query parameter. Bad actors can hit this URL with a spoofed `installation_id`. Therefore, you should not rely on the validity of the `installation_id` parameter. Instead, you should generate a user access token for the user who installed the {% data variables.product.prodname_github_app %} and then check that the installation is associated with that user. For more information, see "[AUTOTITLE](/apps/creating-github-apps/authenticating-with-a-github-app/generating-a-user-access-token-for-a-github-app)."

{% endwarning %}

{% ifversion fpt or ghec %}
Although the setup URL is optional during {% data variables.product.prodname_github_app %} registration, it is required if you want to allow users to purchase your app in {% data variables.product.prodname_marketplace %}. For more information, see "[AUTOTITLE](/apps/publishing-apps-to-github-marketplace/using-the-github-marketplace-api-in-your-app/handling-new-purchases-and-free-trials)."
{% endif %}

The setup URL is different from the callback URL. Users are redirected to the setup URL after they install a {% data variables.product.prodname_github_app %}. Users are redirected to the callback URL when they authorize a {% data variables.product.prodname_github_app %} via the web application flow. For more information, see "[AUTOTITLE](/apps/creating-github-apps/setting-up-a-github-app/about-the-user-authorization-callback-url)."

For more information about registering a {% data variables.product.prodname_github_app %}, see "[AUTOTITLE](/apps/creating-github-apps/setting-up-a-github-app/creating-a-github-app)." For more information about modifying a {% data variables.product.prodname_github_app %} registration, see "[AUTOTITLE](/apps/maintaining-github-apps/modifying-a-github-app)."
