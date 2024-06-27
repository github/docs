---
title: About writing code for a GitHub App
shortTitle: About writing GitHub App code
intro: 'You need to write code to add functionality to your {% data variables.product.prodname_github_app %}.'
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
topics:
  - GitHub Apps
redirect_from:
  - /apps/building-your-first-github-app
  - /apps/quickstart-guides/using-the-github-api-in-your-app
  - /developers/apps/using-the-github-api-in-your-app
  - /developers/apps/guides/using-the-github-api-in-your-app
  - /apps/creating-github-apps/guides/using-the-github-api-in-your-app
  - /apps/creating-github-apps/writing-code-for-a-github-app/using-the-github-api-in-your-app
  - /apps/quickstart-guides/setting-up-your-development-environment
  - /developers/apps/setting-up-your-development-environment-to-create-a-github-app
  - /developers/apps/getting-started-with-apps/setting-up-your-development-environment-to-create-a-github-app
  - /apps/creating-github-apps/guides/setting-up-your-development-environment-to-create-a-github-app
  - /apps/creating-github-apps/writing-code-for-a-github-app/setting-up-your-development-environment-to-create-a-github-app
---

## Prerequisites

Before you write code for a {% data variables.product.prodname_github_app %}, you should register a {% data variables.product.prodname_github_app %}. When you register a {% data variables.product.prodname_github_app %}, you select permissions for the app. These permissions dictate what the {% data variables.product.prodname_github_app %} can do. When you register an app, you also specify other settings, including which webhook events your {% data variables.product.prodname_github_app %} should receive. You can always change the settings for your {% data variables.product.prodname_github_app %} registration. For more information, see "[AUTOTITLE](/apps/creating-github-apps/registering-a-github-app/registering-a-github-app)" and "[AUTOTITLE](/apps/maintaining-github-apps/modifying-a-github-app)."

If you want your {% data variables.product.prodname_github_app %} to access repository and/or organization data, you need to install your {% data variables.product.prodname_github_app %}. For more information, see "[AUTOTITLE](/apps/using-github-apps/installing-your-own-github-app)."

## Writing code for a {% data variables.product.prodname_github_app %}

In order for your {% data variables.product.prodname_github_app %} to do something, you need to write code to add functionality to your {% data variables.product.prodname_github_app %}.

For tutorials about how to write code for a {% data variables.product.prodname_github_app %}, see:

* "[AUTOTITLE](/apps/creating-github-apps/writing-code-for-a-github-app/quickstart)"
* "[AUTOTITLE](/apps/creating-github-apps/guides/building-a-github-app-that-responds-to-webhook-events)"
* "[AUTOTITLE](/apps/creating-github-apps/guides/building-a-login-with-github-button-with-a-github-app)"
* "[AUTOTITLE](/apps/creating-github-apps/guides/building-a-cli-with-a-github-app)"

You can use the credentials from your {% data variables.product.prodname_github_app %} registration to make authenticated requests to {% data variables.product.company_short %}'s APIs. For more information, see "[AUTOTITLE](/apps/creating-github-apps/authenticating-with-a-github-app/about-authentication-with-a-github-app)."

During development, you will likely use your personal computer or codespace to run your {% data variables.product.prodname_github_app %}. You may need to make some modifications to your {% data variables.product.prodname_github_app %} registration during development:

* If your app receives webhooks, you may want to use a webhook proxy URL to forward webhooks from GitHub to your computer or codespace. You will need to update the "Webhook URL" setting in your {% data variables.product.prodname_github_app %} registration to use your webhook proxy URL. For an example, see "[AUTOTITLE](/apps/creating-github-apps/guides/building-a-github-app-that-responds-to-webhook-events)."

* If your app uses the web application flow to authorize a user, you may want to update the "Callback URL" setting in your {% data variables.product.prodname_github_app %} registration to use a local callback URL. For an example, see "[AUTOTITLE](/apps/creating-github-apps/guides/building-a-login-with-github-button-with-a-github-app)."

## Next steps

Once you write the code for your {% data variables.product.prodname_github_app %}, you should ensure that it follows best practices. If necessary, remember to update your {% data variables.product.prodname_github_app %} registration. If your {% data variables.product.prodname_github_app %} needs to run on a server instead of a user's device, deploy your app to your server. Finally, you can share your {% data variables.product.prodname_github_app %} with other users and organizations.

### Follow best practices

Before deploying your {% data variables.product.prodname_github_app %}, make sure you follow best practices. For example, make sure that your {% data variables.product.prodname_github_app %}'s credentials are secure. For more information, see "[AUTOTITLE](/apps/creating-github-apps/about-creating-github-apps/best-practices-for-creating-a-github-app)."

### Update your {% data variables.product.prodname_github_app %} registration

If you changed the {% data variables.product.prodname_github_app %} registration for development, make sure you update the registration to use production-ready values. For example, if you used a webhook proxy URL for development, you should update the "Webhook URL" field to use the URL where you want your {% data variables.product.prodname_github_app %} to receive webhooks during production.

### Deploy your {% data variables.product.prodname_github_app %}

Once you have written the code for your {% data variables.product.prodname_github_app %}, your code needs to run somewhere. If your app is a website or web app, you might host your app on a server like [Azure App Service](https://azure.microsoft.com/products/app-service/). If your app is a client-side app, it might run on a user's device.

### Share your {% data variables.product.prodname_github_app %}

If you want to share your {% data variables.product.prodname_github_app %} with other users and organizations, you should make your {% data variables.product.prodname_github_app %} public. {% ifversion fpt or ghec %}To make your {% data variables.product.prodname_github_app %} more discoverable, you can list it on {% data variables.product.prodname_marketplace %}. {% endif %}For more information, see "[AUTOTITLE](/apps/sharing-github-apps/sharing-your-github-app)."
