---
title: About the user authorization callback URL
intro: 'You can specify a URL that users will be redirected to after they authorize a {% data variables.product.prodname_github_app %}.'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - GitHub Apps
shortTitle: Callback URL
redirect_from:
  - /apps/creating-github-apps/creating-github-apps/about-the-user-authorization-callback-url
  - /apps/creating-github-apps/setting-up-a-github-app/about-the-user-authorization-callback-url
---

When you register a {% data variables.product.prodname_github_app %}, you can specify a callback URL. When you use the web application flow to generate a user access token in order to act on behalf of a user, users will be redirected to the callback URL after they authorize the {% data variables.product.prodname_github_app %}.

You can specify up to 10 callback URLs. If you specify multiple callback URLs, you can use the `redirect_uri` parameter when you prompt the user to authorize your {% data variables.product.prodname_github_app %}, to indicate which callback URL the user should be redirected to. If you do not specify `redirect_uri`, the first callback URL will be used. For more information about using the `redirect_uri` parameter, see "[AUTOTITLE](/apps/creating-github-apps/authenticating-with-a-github-app/generating-a-user-access-token-for-a-github-app)".

The callback URL is different from the setup URL. Users are redirected to the setup URL after they install a {% data variables.product.prodname_github_app %}. Users are redirected to the callback URL when they authorize a {% data variables.product.prodname_github_app %} via the web application flow. For more information, see "[AUTOTITLE](/apps/creating-github-apps/setting-up-a-github-app/about-the-setup-url)."

For more information about generating user access tokens, see "[AUTOTITLE](/apps/creating-github-apps/authenticating-with-a-github-app/generating-a-user-access-token-for-a-github-app)". For more information about registering a {% data variables.product.prodname_github_app %}, see "[AUTOTITLE](/apps/creating-github-apps/setting-up-a-github-app/creating-a-github-app)." For more information about modifying a {% data variables.product.prodname_github_app %} registration, see "[AUTOTITLE](/apps/maintaining-github-apps/modifying-a-github-app)."
