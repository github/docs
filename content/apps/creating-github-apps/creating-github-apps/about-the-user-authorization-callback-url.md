---
title: About the user authorization callback URL
intro: 'You can specify a URL that users will be redirected to after they authorize an app.'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - GitHub Apps
shortTitle: Callback URL
---

When you create a {% data variables.product.prodname_github_app %}, you can specify a callback URL. When you use the web application flow to generate a user access token in order to act on behalf of a user, users will be redirected to the callback URL after they authorize the app.

You can specify up to 10 callback URLs. If you specify multiple callback URLs, you can use the `redirect_uri` parameter when you prompt the user to authorize your app, to indicate which callback URL the user should be redirected to. If you do not specify `redirect_uri`, the first callback URL will be used.

The callback URL is different from the setup URL. Users are redirected to the setup URL after they install an app. Users are redirected to the callback URL when they authorize an app via the web application flow.

For more information about generating user access tokens, see "[AUTOTITLE](/apps/creating-github-apps/authenticating-with-a-github-app/generating-a-user-access-token-for-a-github-app)". For more information about creating a {% data variables.product.prodname_github_app %}, see "[AUTOTITLE](/apps/creating-github-apps/creating-github-apps/creating-a-github-app)."
