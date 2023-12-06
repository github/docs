---
title: About creating GitHub Apps
shortTitle: About creating apps
intro: '{% data variables.product.prodname_github_apps %} let you build integrations to automate processes and extend {% data variables.product.company_short %}''s functionality.'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
redirect_from:
  - /apps/creating-github-apps/creating-github-apps/about-apps
  - /apps/building-integrations/setting-up-a-new-integration
  - /apps/building-integrations
  - /apps/getting-started-with-building-apps
  - /apps/about-apps
  - /developers/apps/about-apps
  - /developers/apps/getting-started-with-apps/about-apps
  - /apps/creating-github-apps/setting-up-a-github-app/about-creating-github-apps
topics:
  - GitHub Apps
---

## About {% data variables.product.prodname_github_apps %}

A {% data variables.product.prodname_github_app %} is a type of integration that you can build to interact with and extend the functionality of {% data variables.product.company_short %}. You can build a {% data variables.product.prodname_github_app %} to provide flexibility and reduce friction in your processes, without needing to sign in a user or create a service account.

Common use cases for {% data variables.product.prodname_github_apps %} include:
- Automating tasks or background processes
- Supporting "Sign in with GitHub," which allows users to sign in with their {% data variables.product.prodname_dotcom %} account to provide their identity in your ecosystem
- As a developer tool, allowing users to work with {% data variables.product.prodname_dotcom %} by signing into your  {% data variables.product.prodname_github_app %}, which can then act on their behalf
- Integrating your tool or external service with {% data variables.product.company_short %}

Like {% data variables.product.prodname_oauth_apps %}, {% data variables.product.prodname_github_apps %} use OAuth 2.0 and can act on behalf of a user. Unlike {% data variables.product.prodname_oauth_apps %}, {% data variables.product.prodname_github_apps %} can also act independently of a user.

{% data variables.product.prodname_github_apps %} can be installed directly on organizations and personal accounts and granted access to specific repositories. They come with built-in webhooks and narrow, specific permissions.

{% data reusables.apps.app_manager_role %}

## Building a {% data variables.product.prodname_github_app %}

In order to build a {% data variables.product.prodname_github_app %}, you first need to register a {% data variables.product.prodname_github_app %}. For more information, see "[AUTOTITLE](/apps/creating-github-apps/registering-a-github-app/registering-a-github-app)."

Then, you need to write code to add functionality to your {% data variables.product.prodname_github_app %}. You can use the credentials from your {% data variables.product.prodname_github_app %} registration to make authenticated requests to {% data variables.product.company_short %}'s APIs. For more information about writing code for your {% data variables.product.prodname_github_app %}, see "[AUTOTITLE](/apps/creating-github-apps/writing-code-for-a-github-app/about-writing-code-for-a-github-app)." For more information about making authenticated requests, see "[AUTOTITLE](/apps/creating-github-apps/authenticating-with-a-github-app/about-authentication-with-a-github-app)."

Once you have written the code for your {% data variables.product.prodname_github_app %}, your app needs to run somewhere. If your app is a website or web app, you might host your app on a server like [Azure App Service](https://azure.microsoft.com/products/app-service/). If your app is a client-side app, it might run on a user's device.

In order to use your {% data variables.product.prodname_github_app %}, you must install the app on your organization or personal account. If your {% data variables.product.prodname_github_app %} is private, you can only install the {% data variables.product.prodname_github_app %} on the account that owns the app. If your {% data variables.product.prodname_github_app %} is public, other users and organizations can install your app. For more information, see "[AUTOTITLE](/apps/using-github-apps/installing-your-own-github-app)" and "[AUTOTITLE](/apps/sharing-github-apps/sharing-your-github-app)."

## Understanding what type of {% data variables.product.prodname_github_app %} to build

There are multiple ways to design a {% data variables.product.prodname_github_app %} that you will want to consider, based on the functionality you want the app to have.

### {% data variables.product.prodname_github_apps %} that act on behalf of a user

If you want your app to take actions on behalf of a user, you should use a user access token for authentication. This type of request is sometimes called "user-to-server," and it means that the app will be limited by the permissions that have been given to the app as well as the user's permission. With this pattern, the user must authorize the app before the app can take action. For more information, see "[AUTOTITLE](/apps/creating-github-apps/authenticating-with-a-github-app/authenticating-with-a-github-app-on-behalf-of-a-user)."

Some examples of automations you could create with a {% data variables.product.prodname_github_app %}, where the app acts on a user's behalf, include:
- A {% data variables.product.prodname_github_app %} that uses {% data variables.product.prodname_dotcom %} as an identity provider for your ecosystem.
- A {% data variables.product.prodname_github_app %} that adds a service on top of {% data variables.product.prodname_dotcom_the_website %} that might be useful to a {% data variables.product.prodname_dotcom %} user. You can share the app with other developers via {% data variables.product.prodname_marketplace %} or by making the app public.

### {% data variables.product.prodname_github_apps %} that act on their own behalf

If you want your app to take actions on behalf of itself, rather than a user, you should use an installation access token for authentication. This type of request is sometimes called "server-to-server," and it means that the app will be limited by the permissions that have been given to the app. For more information, see "[AUTOTITLE](/apps/creating-github-apps/authenticating-with-a-github-app/authenticating-as-a-github-app-installation)."

Some examples of automations you could create with a {% data variables.product.prodname_github_app %}, where the app acts on its own behalf, include:
- A {% data variables.product.prodname_github_app %} that uses webhooks to react to an event given a certain set of criteria. {% ifversion pat-v2 %}For example, you could create an automation around the REST API endpoints for [reviewing requests for {% data variables.product.pat_v2 %}](/rest/orgs/personal-access-tokens?apiVersion=2022-11-28#review-requests-to-access-organization-resources-with-fine-grained-personal-access-tokens) that approves a request given a certain policy.{% else %}For example, you could create an automation that uses [the REST API endpoints for labels](/rest/issues/labels) to add a label to each new issue created in a repository, given a certain set of criteria.{% endif %}
- A {% data variables.product.prodname_github_app %} that helps repository contributors. For example, the app could post helpful resources after a contributor creates a pull request or makes a comment.
- A {% data variables.product.prodname_github_app %} that generates short-lived tokens to give to other CI/CD tools, or to pull information from a repository.

### {% data variables.product.prodname_github_apps %} that respond to webhooks

If you want your app to respond to events on {% data variables.product.prodname_dotcom %}, your app should subscribe to webhooks. For example, you may want your app to leave a comment when a pull request is opened. For more information, see "[AUTOTITLE](/apps/creating-github-apps/setting-up-a-github-app/using-webhooks-with-github-apps)."

### {% data variables.product.prodname_github_apps %} that can take certain actions

When you set up your {% data variables.product.prodname_github_app %}, you can select specific permissions for the app. These permissions determine what the app can do via the {% data variables.product.prodname_dotcom %} API, what they can do on behalf of a signed in user, and what webhooks the app can receive. For more information, see "[AUTOTITLE](/apps/creating-github-apps/registering-a-github-app/choosing-permissions-for-a-github-app)."
