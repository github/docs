---
title: About creating GitHub Apps
intro: "{% data variables.product.prodname_github_app %}s let you build integrations to automate processes and extend {% data variables.product.company_short %}'s functionality."
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

{% data variables.product.prodname_github_apps %} are independent actors within {% data variables.product.prodname_dotcom %}. A {% data variables.product.prodname_github_app %} acts on its own behalf, which means that you don't need to maintain a bot or service account as a separate user. They can also authenticate as a user and act on the user's behalf, using the permissions granted to it.

A user or organization can own up to 100 {% data variables.product.prodname_github_apps %}, but there is no limit to how many can be installed on an account.

If you want your app to respond to events on {% data variables.product.prodname_dotcom %}, your app should subscribe to webhooks. For example, you may want your app to leave a comment when a pull request is opened. For more information, see "[AUTOTITLE](/apps/creating-github-apps/setting-up-a-github-app/using-webhooks-with-github-apps)."

During development, you can run your app locally for development. Once the app is ready for production use, you should deploy your app to a dedicated server. For example, you can use [Azure App Service](https://azure.microsoft.com/products/app-service/).

### Permissions and visibility for {% data variables.product.prodname_github_apps %}

{% data variables.product.prodname_github_apps %} can be installed directly on organizations and personal accounts and granted access to specific repositories. They come with built-in webhooks and narrow, specific permissions. When you set up your {% data variables.product.prodname_github_app %}, you can select specific permissions for the app. These permissions determine what the app can do via the {% data variables.product.prodname_dotcom %} API, what they can do on behalf of a signed in user, and what webhooks the app can receive. When the app is then installed on a user or organization account, the person who installs the app decides what repositories the app can access under that account. For more information, see "[AUTOTITLE](/apps/creating-github-apps/setting-up-a-github-app/choosing-permissions-for-a-github-app)."

{% data reusables.apps.app_manager_role %}

You can set the visibility of your app to control who can install it. You can make it public so that other {% data variables.product.prodname_dotcom %} users or organizations can install the app, or private so that you can only install it on the account that owns the app. For more information, see "[AUTOTITLE](/apps/creating-github-apps/setting-up-a-github-app/making-a-github-app-public-or-private)."

## When to use {% data variables.product.prodname_github_apps %}

When building an integration, you should consider using a {% data variables.product.prodname_github_app %} in the following scenarios instead of an {% data variables.product.prodname_oauth_app %}, {% data variables.product.pat_generic%}, or {% data variables.product.prodname_actions %}.

### Using a {% data variables.product.prodname_github_app %} instead of an {% data variables.product.prodname_oauth_app %}

You should always favor building a {% data variables.product.prodname_github_app %} over an {% data variables.product.prodname_oauth_app %}. {% data variables.product.prodname_github_apps %} provide more granular control over the app's access and permissions. Administrators benefit too, because they get better control and visibility into what your application can do in their organization.

For information on how to migrate an {% data variables.product.prodname_oauth_app %} to a {% data variables.product.prodname_github_app %}, see "[AUTOTITLE](/apps/creating-github-apps/guides/migrating-oauth-apps-to-github-apps)."

### Choosing between a {% data variables.product.prodname_github_app %} or a {% data variables.product.pat_generic %}

 If you want to access {% data variables.product.prodname_dotcom %} resources on behalf of a user or in an organization, or you anticipate a long-lived integration, we recommend building a {% data variables.product.prodname_github_app %}.

 You can use {% data variables.product.pat_generic_plural %} for API testing or short-lived scripts. It is important to note that since a {% data variables.product.pat_generic %} is associated to a user, your automation could break if the user no longer has access to the resources you need. A {% data variables.product.prodname_github_app %} installed in an organization is not dependent on a user.

{% data variables.product.company_short %} supports two types of {% data variables.product.pat_generic_plural %}, but recommends that you use {% data variables.product.pat_v2 %}s instead of {% data variables.product.pat_v1_plural %} whenever possible. For more information about {% data variables.product.pat_generic_plural %}, see "[AUTOTITLE](/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token#types-of-personal-access-tokens)."

### Choosing between a {% data variables.product.prodname_github_app %} or {% data variables.product.prodname_actions %}

{% data variables.product.prodname_github_apps %} and {% data variables.product.prodname_actions %} both provide ways to build automation and workflow tools.

{% data variables.product.prodname_actions %} provide automation that can perform jobs like continuous integration, deployment tasks, and project management in a repository. They run directly on {% data variables.product.prodname_dotcom %}-hosted runner machines or self-hosted runners that your administrator sets up. {% data variables.product.prodname_actions %} do not run persistently. They run in response to events that occur in their repository, and only have access to the resources of the repository that they are set up for. However, they can be shared across repositories and organizations, allowing developers to reuse and modify existing actions to meet their needs. {% data variables.product.prodname_actions %} also come with built-in secret management, which you can use to securely interact with third-party services and manage deploy keys safely.

{% data variables.product.prodname_github_apps %} run persistently on a server or compute infrastructure that you provide, and they react to webhook events as well as events from outside the {% data variables.product.prodname_dotcom %} ecosystem. They are a good option for operations that span multiple repositories or organizations, or for providing hosted services to other organizations. A {% data variables.product.prodname_github_app %} is the best choice when building a tool with functions that occur primarily outside of {% data variables.product.prodname_dotcom %} or require more time than what an action is allotted for execution.

For more information about comparing {% data variables.product.prodname_actions %} to {% data variables.product.prodname_github_apps %}, see "[AUTOTITLE](/actions/creating-actions/about-custom-actions#comparing-github-actions-to-github-apps)."

{% ifversion projects-v2 %}You can use a {% data variables.product.prodname_github_app %} to authenticate in a {% data variables.product.prodname_actions %}
workflow if the built in `GITHUB_TOKEN` does not have sufficient permissions. For an example workflow that authenticates with a {% data variables.product.prodname_github_app %}, see "[AUTOTITLE](/issues/planning-and-tracking-with-projects/automating-your-project/automating-projects-using-actions#example-workflow-authenticating-with-a-github-app)."{% endif %}

## Understanding what type of {% data variables.product.prodname_github_app %} to build

There are multiple ways to design a {% data variables.product.prodname_github_app %} that you will want to consider, based on the functionality you want the app to have.

### {% data variables.product.prodname_github_apps %} that act on behalf of a user

If you want your app to take actions on behalf of a user, you should use a user access token for authentication. This type of request is sometimes called "user-to-server," and it means that the app will be limited by the permissions that have been given to the app as well as the user's permission. With this pattern, the user must authorize the app before the app can take action. For more information, see "[AUTOTITLE](/apps/creating-github-apps/authenticating-with-a-github-app/authenticating-with-a-github-app-on-behalf-of-a-user)."

Some examples of automations you could create with a {% data variables.product.prodname_github_app %}, where the app acts on a user's behalf, include:
- A {% data variables.product.prodname_github_app %} that uses {% data variables.product.prodname_dotcom %} as an identity provider for your ecosystem
- A {% data variables.product.prodname_github_app %} that adds a service on top of {% data variables.product.prodname_dotcom_the_website %} that might be useful to a {% data variables.product.prodname_dotcom %} user. You can share the app with other developers via {% data variables.product.prodname_marketplace %} or by making the app public

### {% data variables.product.prodname_github_apps %} that act on their own behalf

If you want your app to take actions on behalf of itself, rather than a user, you should use an installation access token for authentication. This type of request is sometimes called "server-to-server," and it means that the app will be limited by the permissions that have been given to the app. For more information, see "[AUTOTITLE](/apps/creating-github-apps/authenticating-with-a-github-app/authenticating-as-a-github-app-installation)."

Some examples of automations you could create with a {% data variables.product.prodname_github_app %}, where the app acts on its own behalf, include:
- A {% data variables.product.prodname_github_app %} that uses webhooks to react to an event given a certain set of criteria. {% ifversion pat-v2 %}For example, you could create an automation around the REST API endpoints for [reviewing requests for {% data variables.product.pat_v2 %}](/rest/orgs/personal-access-tokens?apiVersion=2022-11-28#review-requests-to-access-organization-resources-with-fine-grained-personal-access-tokens) that approves a request given a certain policy{% else %}For example, you could create an automation that uses [the REST API endpoints for labels](/rest/issues/labels) to add a label to each new issue created in a repository, given a certain set of criteria{% endif %}
- A {% data variables.product.prodname_github_app %} that helps repository contributors. For example, the app could post helpful resources after a contributor creates a pull request or makes a comment
- A {% data variables.product.prodname_github_app %} that generates short-lived tokens to give to other CI/CD tools, or to pull information from a repository

## Further reading

- "[AUTOTITLE](/apps/creating-github-apps/creating-github-apps/creating-a-github-app)"
- "[AUTOTITLE](/apps/creating-github-apps/authenticating-with-a-github-app/about-authentication-with-a-github-app)"
- [Guides on building GitHub Apps](/apps/creating-github-apps/guides)
