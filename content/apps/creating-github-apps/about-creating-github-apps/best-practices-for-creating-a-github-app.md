---
title: Best practices for creating a GitHub App
shortTitle: Best practices
intro: 'Follow these best practices to improve the security and performance of your {% data variables.product.prodname_github_app %}.'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - GitHub Apps
redirect_from:
  - /apps/creating-github-apps/setting-up-a-github-app/best-practices-for-creating-a-github-app
---

## Select the minimum permissions required

When you register a {% data variables.product.prodname_github_app %}, select the minimum permissions that your {% data variables.product.prodname_github_app %} needs. If any keys or tokens for your app become compromised, this will limit the amount of damage that can occur. For more information about how to choose permissions, see "[AUTOTITLE](/apps/creating-github-apps/setting-up-a-github-app/choosing-permissions-for-a-github-app)."

When your {% data variables.product.prodname_github_app %} creates an installation access token or user access token, you can further limit the repositories that the app can access and the permissions that the token has. For more information, see "[AUTOTITLE](/apps/creating-github-apps/authenticating-with-a-github-app/generating-an-installation-access-token-for-a-github-app)" and "[AUTOTITLE](/apps/creating-github-apps/authenticating-with-a-github-app/generating-a-user-access-token-for-a-github-app)."

## Stay under the rate limit

Subscribe to webhook events instead of polling the API for data. This will help your {% data variables.product.prodname_github_app %} stay within the API rate limit. For more information, see "[AUTOTITLE](/apps/creating-github-apps/creating-github-apps/using-webhooks-with-github-apps)" and "[AUTOTITLE](/apps/creating-github-apps/guides/building-a-github-app-that-responds-to-webhook-events)."

Consider using conditional requests to help you stay within the rate limit. For more information about conditional requests, see "[AUTOTITLE](/rest/overview/resources-in-the-rest-api#conditional-requests)."

If possible, consider using consolidated GraphQL queries instead of REST API requests to help you stay within rate limits. For more information, see "[AUTOTITLE](/rest/overview/about-githubs-apis)" and "[AUTOTITLE](/graphql)."

If you do hit a rate limit and need to retry an API request, use the `x-ratelimit-reset` or `Retry-After` response headers. If these headers are not available, wait for an exponentially increasing amount of time between retries, and throw an error after a specific number of retries. For more information, see "[AUTOTITLE](/rest/guides/best-practices-for-integrators#dealing-with-rate-limits)."

## Secure your app's credentials

You can generate a private key and client secret for your {% data variables.product.prodname_github_app %}. With these credentials, your app can generate installation access tokens, user access tokens, and refresh tokens. These tokens can be used to make API requests on behalf of an app installation or user.

You must store these credentials securely. The storage mechanism depends on your integrations architecture and the platform that it runs on. In general, you should use a storage mechanism that is intended to store sensitive data on the platform that you are using.

### Private keys

The private key for your {% data variables.product.prodname_github_app %} grants access to every account that the app is installed on.

Consider storing your {% data variables.product.prodname_github_app %}'s private key in a key vault, such as [Azure Key Vault](https://azure.microsoft.com/en-gb/products/key-vault), and making it sign-only.

Alternatively, you can store the key as an environment variable. However, this not as strong as storing the key in a key vault. If an attacker gains access to the environment, they can read the private key and gain persistent authentication as the {% data variables.product.prodname_github_app %}.

You should never hard code your private key in your app, even if your code is stored in a private repository. If your app is a native client, client-side app, or runs on a user device (as opposed to running on your servers), you should never ship your private key with your app.

You should not generate more private keys than you need. You should delete private keys that you no longer need. For more information, see "[AUTOTITLE](/apps/creating-github-apps/authenticating-with-a-github-app/managing-private-keys-for-github-apps)."

### Client secrets

Client secrets are used to generate user access tokens for your app, unless your app uses device flow. For more information, see "[AUTOTITLE](/apps/creating-github-apps/authenticating-with-a-github-app/generating-a-user-access-token-for-a-github-app#using-the-device-flow-to-generate-a-user-access-token)."

If your app is a website or web app, consider storing your client secret in a key vault, such as [Azure Key Vault](https://azure.microsoft.com/products/key-vault), or as an encrypted environment variable or secret on your server.

If your app is a native client, client-side app, or runs on a user device (as opposed to running on your servers), you cannot secure your client secret. You should use caution if you plan to gate access to your own services based on tokens generated by your app because anyone can access the client secret to generate a token.

### Installation access tokens, user access tokens, and refresh tokens

Installation access tokens are used to make API requests on behalf of an app installation. User access tokens are used to make API requests on behalf of a user. Refresh tokens are used to regenerate user access tokens. Your app can use its private key to generate an installation access token. Your app can use its client secret to generate a user access token and refresh token.

If your app is a website or web app, you should encrypt the tokens on your back end and ensure there is security around the systems that can access the tokens. Consider storing refresh tokens in a separate place from active access tokens.

If your app is a native client, client-side app, or runs on a user device (as opposed to running on your servers), you may not be able to secure tokens as well as an app that runs on your servers. You should not generate installation access tokens since doing so requires a private key. Instead, you should generate user access tokens. You should store tokens via the mechanism recommended for your app's platform, and keep in mind that the storage mechanism may not be fully secure.

## Use the appropriate token type

{% data variables.product.prodname_github_apps %} can generate installation access tokens or user access tokens in order to make authenticated API requests.

Installation access tokens will attribute activity to your app. These are useful for automations that act independently of users.

User access tokens will attribute activity to a user and to your app. These are useful for taking actions based on user input or on behalf of a user.

An installation access token is restricted based on the {% data variables.product.prodname_github_app %}'s permissions and access. A user access token is restricted based on both the {% data variables.product.prodname_github_app %}'s permission and access and the user's permission and access. Therefore, if your {% data variables.product.prodname_github_app %} takes an action on behalf of a user, it should always use a user access token instead of an installation access token. Otherwise, your app might allow a user to see or do things that they shouldn't be able to see or do.

Your app should never use a {% data variables.product.pat_generic %} or {% data variables.product.company_short %} password to authenticate.

## Validate organization access for every new authentication

When you use a user access token, you should track which organizations the token is authorized for. If an organization uses SAML SSO and a user has not performed SAML SSO, the user access token should not have access to that organization. You can use the `GET /user/installations` REST API endpoint to verify which organizations a user access token has access to. If the user is not authorized to access an organization, you should reject their access until they perform SAML SSO. For more information, see "[AUTOTITLE](/rest/apps/installations#list-app-installations-accessible-to-the-user-access-token)."

## Expire tokens

{% data variables.product.company_short %} strongly encourages you to use user access tokens that expire. If you previously opted out of using user access tokens that expire but want to re-enable this feature, see "[AUTOTITLE](/apps/maintaining-github-apps/activating-optional-features-for-github-apps)."

Installation access tokens expire after one hour, expiring user access tokens expire after eight hours, and refresh tokens expire after six months. However, you can also revoke tokens as soon as you no longer need them. For more information, see "[AUTOTITLE](/rest/apps/installations#revoke-an-installation-access-token)" to revoke an installation access token and "[AUTOTITLE](/rest/apps/oauth-applications#delete-an-app-token)" to revoke a user access token.

## Cache tokens

User access tokens and installation access tokens are meant to be used until they expire. You should cache tokens that you create. Before you create a new token, check your cache to see if you already have a valid token. Reusing tokens will make your app faster since it will make fewer requests to generate tokens.

## Make a plan for handling security breaches

You should have a plan in place so that you can handle any security breaches in a timely manner.

In the event that your app's private key or secret is compromised, you will need to generate a new key or secret, update your app to use the new key or secret, and delete your old key or secret.

In the event that installation access tokens, user access tokens, or refresh tokens are compromised, you should immediately revoke these tokens. For more information, see "[AUTOTITLE](/rest/apps/installations#revoke-an-installation-access-token)" to revoke an installation access token and "[AUTOTITLE](/rest/apps/oauth-applications#delete-an-app-token)" to revoke a user access token.

## Conduct regular vulnerability scans

{% data reusables.apps.app-scans %}

## Choose an appropriate environment

If your app runs on a server, verify that your server environment is secure and that it can handle the volume of traffic that you expect for your app.

## Subscribe to the minimum webhooks

Only subscribe to the webhook events that your app needs. This will help reduce latency since your app won't be receiving payloads that it doesn't need.

## Use a webhook secret

You should set a webhook secret for your {% data variables.product.prodname_github_app %} and verify that the signature of incoming webhook events match the secret. This helps to ensure that the incoming webhook event is a valid {% data variables.product.company_short %} event.

For more information, see "[AUTOTITLE](/apps/creating-github-apps/setting-up-a-github-app/using-webhooks-with-github-apps#securing-your-webhooks-with-a-webhook-secret)." For an example, see "[AUTOTITLE](/apps/creating-github-apps/guides/building-a-github-app-that-responds-to-webhook-events)."

## Allow time for users to accept new permissions

When you add repository or organization permissions to your {% data variables.product.prodname_github_app %}, users who have the app installed on their personal account or organization will receive an email prompting them to review the new permissions. Until the user approves the new permissions, their app installation will only receive the old permissions.

When you update permissions, you should consider making your app backwards compatible to give your users time to accept the new permissions. You can use the [installation webhook with the `new_permissions_accepted` action property](/webhooks-and-events/webhooks/webhook-events-and-payloads?actionType=new_permissions_accepted#installation) to learn when users accept new permissions for your app.

## Use services in a secure manner

{% data reusables.apps.app-services %}

## Add logging and monitoring

{% data reusables.apps.apps-logging %}

## Enable data deletion

If your {% data variables.product.prodname_github_app %} is available to other users or organizations, you should give users and organization owners a way to delete their data. Users should not need to email or call a support person in order to delete their data.

## Further reading

{% ifversion fpt or ghec %}
- "[AUTOTITLE](/apps/publishing-apps-to-github-marketplace/creating-apps-for-github-marketplace/security-best-practices-for-apps)"
- "[AUTOTITLE](/apps/publishing-apps-to-github-marketplace/creating-apps-for-github-marketplace/customer-experience-best-practices-for-apps)"
{% endif %}
- "[AUTOTITLE](/webhooks/using-webhooks/best-practices-for-using-webhooks)"
- "[AUTOTITLE](/rest/guides/best-practices-for-integrators)"
