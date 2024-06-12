---
title: Making your GitHub App available for GitHub Enterprise Server
shortTitle: Share with GHES
intro: 'In order for {% data variables.product.prodname_ghe_server %} instances to use your {% data variables.product.prodname_github_app %}, you must take some additional steps.'
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
topics:
  - GitHub Apps
redirect_from:
  - /apps/creating-github-apps/setting-up-a-github-app/making-your-github-app-available-for-github-enterprise-server
---

## About developing {% data variables.product.prodname_github_apps %} for {% data variables.product.prodname_ghe_server %}

If you want your {% data variables.product.prodname_github_app %} to be available to organizations in a {% data variables.product.prodname_ghe_server %} instance that you are not part of, you must take the following steps.

{% ifversion ghes %}
These steps are not required if your {% data variables.product.prodname_github_app %} will only be used by organizations in a {% data variables.product.prodname_ghe_server %} instance that you are part of. For more information, see "[AUTOTITLE](/apps/maintaining-github-apps/installing-your-own-github-app)."
{% endif %}

If {% data variables.product.prodname_ghe_server %} access is important, consider whether a custom action for {% data variables.product.prodname_actions %} will suit your needs instead. Public actions are available on {% data variables.product.prodname_ghe_server %} instances with {% data variables.product.prodname_github_connect %}. For more information, see {% ifversion ghes %}"[AUTOTITLE](/admin/github-actions/managing-access-to-actions-from-githubcom/enabling-automatic-access-to-githubcom-actions-using-github-connect)."{% else %}"[AUTOTITLE](/enterprise-server@latest/admin/github-actions/managing-access-to-actions-from-githubcom/enabling-automatic-access-to-githubcom-actions-using-github-connect)" in the  {% data variables.product.prodname_ghe_server %} documentation.{% endif %}

## Each {% data variables.product.prodname_ghe_server %} instance must register their own {% data variables.product.prodname_github_app %}

Organizations owned by a {% data variables.product.prodname_ghe_server %} instance cannot install {% data variables.product.prodname_github_apps %} registered on {% data variables.product.prodname_dotcom_the_website %} or on another {% data variables.product.prodname_ghe_server %} instance. Instead, they must register and install their own {% data variables.product.prodname_github_app %} for use on that instance.

1. The app developer creates a manifest or URL parameters. For more information, see "[AUTOTITLE](/apps/creating-github-apps/setting-up-a-github-app/creating-a-github-app-from-a-manifest)" and "[AUTOTITLE](/apps/creating-github-apps/setting-up-a-github-app/creating-a-github-app-using-url-parameters)."
1. The app developer shares the manifest or URL parameters with the {% data variables.product.prodname_ghe_server %} administrator that wants to use the app. The same manifest or URL parameters can be shared with multiple {% data variables.product.prodname_ghe_server %} instances.
1. An organization owner in the instance uses the manifest or URL parameters to register a {% data variables.product.prodname_github_app %}.
1. The organization installs the {% data variables.product.prodname_github_app %} that they registered.

   Optionally, if the organization made the {% data variables.product.prodname_github_app %} public, other organizations within the instance can install the {% data variables.product.prodname_github_app %} as well. There is not a way to install a {% data variables.product.prodname_github_app %} on an entire instance, only on organizations within an instance.

## The app code must be able to access the {% data variables.product.prodname_github_app %} credentials for the instance

Your app's code will need the credentials of the {% data variables.product.prodname_github_app %} that the {% data variables.product.prodname_ghe_server %} instance registered. It will also need the hostname of the instance. You have two options: get the credentials and hostname from the instance, or have the {% data variables.product.prodname_ghe_server %} customer host and manage a self-hostable version of the app.

### Get the credentials from the {% data variables.product.prodname_ghe_server %} instance

The instance can share their {% data variables.product.prodname_github_app %} credentials and hostname with the app developer. The site administrator should only do this if they trust the app developer. Then, the app code can use the appropriate credentials depending on what actions it is taking. The app developer must take precautions to use the appropriate set of credentials and to not leak data.

Advantages:

- The app developer controls the infrastructure that the app runs on.
- The app developer has more control over app updates.
- The app developer may have more insight into app performance.

Disadvantages:

- The app developer must take precautions to avoid leaking data from the instance.
- The site administrator may need to open firewall exceptions for your application to reach the instance, and they may be reluctant to do so.

### Have the {% data variables.product.prodname_ghe_server %} customer host and manage a self-hostable version of the app

The app developer can provide a self-hostable version of their app. Then, the site administrator can host the app according to app developer's setup and installation instructions.

The method by which the self-hostable version of the app is created and shared is up to the app developer and depends on technology that the app uses.

Advantages:

- The instance remains more secure because they aren't sharing their app credentials.
- The app developer doesn't need to worry about leaking data from the instance.

Disadvantages:

- The app developer relies on the site administrator to provide infrastructure for the app and set things up correctly.
- Releasing updates to the app code may be more complex.
- The app developer may lose visibility about app performance.

## The app code must use the correct URLs

{% data variables.product.prodname_ghe_server %} uses different URLs than {% data variables.product.prodname_free_user %}, {% data variables.product.prodname_pro %}, {% data variables.product.prodname_team %}, and {% data variables.product.prodname_ghe_cloud %}. You should update your app code to use the appropriate URL depending on whether it is working with a {% data variables.product.prodname_ghe_server %} instance. Replace `HOSTNAME` with the hostname of the {% data variables.product.prodname_ghe_server %} instance.

{% data variables.product.prodname_free_user %}<br>{% data variables.product.prodname_pro %}<br>{% data variables.product.prodname_team %}<br>{% data variables.product.prodname_ghe_cloud %} | {% data variables.product.prodname_ghe_server %}
--- | ---
`https://api.github.com` | `https://HOSTNAME/api/v3`
`https://api.github.com/graphql` | `https://HOSTNAME/api/v3/graphql`
`https://github.com/login/oauth/authorize` | `https://HOSTNAME/login/oauth/authorize`
`https://github.com/login/oauth/access_token` | `https://HOSTNAME/login/oauth/access_token`

## The app code must be aware of feature differences

New REST API endpoints, GraphQL objects, and webhooks are released to {% data variables.product.prodname_ghe_server %} at a later date than {% data variables.product.prodname_free_user %}, {% data variables.product.prodname_pro %}, {% data variables.product.prodname_team %}, and {% data variables.product.prodname_ghe_cloud %}. Additionally, there are multiple versions of {% data variables.product.prodname_ghe_server %}, and older versions may have different REST API endpoints, GraphQL objects, and webhooks.

Therefore, the app code needs to be aware of these differences. API responses and webhook payloads include a `x-github-enterprise-version` header for {% data variables.product.prodname_ghe_server %} payloads to help you determine what version you are handling.

## Each {% data variables.product.prodname_ghe_server %} instance can configure rate limits

Each {% data variables.product.prodname_ghe_server %} instance can configure its own rate limits. If your app is hitting a rate limit and is already taking precautions to stay under the rate limit, you should talk to the admin of the {% data variables.product.prodname_ghe_server %} instance.
