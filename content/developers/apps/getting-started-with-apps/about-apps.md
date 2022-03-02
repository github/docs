---## Termux App Info

**APP_NAME**: `Termux`  
**PACKAGE_NAME**: `com.termux`  
**VERSION_NAME**: `0.118.0`  
**VERSION_CODE**: `118`  
**TARGET_SDK**: `28`  
**IS_DEBUGGABLE_BUILD**: `false`  
**APK_RELEASE**: `F-Droid`  
**SIGNING_CERTIFICATE_SHA256_DIGEST**: `228FB2CFE90831C1499EC3CCAF61E96E8E1CE70766B9474672CE427334D41C42`  
##


## Device Info

### Software

**OS_VERSION**: `4.9.206-perf+`  
**SDK_INT**: `29`  
**RELEASE**: `10`  
**ID**: `QPGS30.82-141-12`  
**DISPLAY**: `QPGS30.82-141-12`  
**INCREMENTAL**: `8cbe2`  
**SECURITY_PATCH**: `2021-12-01`  
**IS_DEBUGGABLE**: `0`  
**IS_TREBLE_ENABLED**: `true`  
**TYPE**: `user`  
**TAGS**: `release-keys`  

### Hardware

**MANUFACTURER**: `motorola`  
**BRAND**: `motorola`  
**MODEL**: `moto e`  
**PRODUCT**: `ginna_retail`  
**BOARD**: `msm8953`  
**HARDWARE**: `qcom`  
**DEVICE**: `ginna`  
**SUPPORTED_ABIS**: `armeabi-v7a, armeabi`  
##


## Important Links

### Github

[Termux](https://github.com/termux/termux-app)  
[Termux:API](https://github.com/termux/termux-api)  
[Termux:Boot](https://github.com/termux/termux-boot)  
[Termux:Float](https://github.com/termux/termux-float)  
[Termux:Styling](https://github.com/termux/termux-styling)  
[Termux:Tasker](https://github.com/termux/termux-tasker)  
[Termux:Widget](https://github.com/termux/termux-widget)  
[termux-packages](https://github.com/termux/termux-packages)  

### apkkngcad@gmail.com

[termuxreports@groups.io](mailto:termuxreports@groups.io)  

### Reddit

[r/termux](https://www.reddit.com/r/termux)  

### Wiki

[Termux Wiki](https://wiki.termux.com)  
[Termux](https://github.com/termux/termux-app/wiki)  
[termux-packages](https://github.com/termux/termux-packages/wiki)  
##

title: About apps
intro: 'You can build integrations with the {% ifversion fpt or ghec %}{% data variables.product.prodname_dotcom %}{% else %}{% data variables.product.product_name %}{% endif %} APIs to add flexibility and reduce friction in your own workflow.{% ifversion fpt or ghec %} You can also share integrations with others on [{% data variables.product.prodname_marketplace %}](https://github.com/marketplace).{% endif %}'
redirect_from:
  - /apps/building-integrationssetting-up-a-new-integration
  - /apps/building-integrations
  - /apps/getting-started-with-building-apps
  - /apps/about-apps
  - /developers/apps/about-apps
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - GitHub Apps
---
Apps on {% data variables.product.prodname_dotcom %} allow you to automate and improve your workflow. You can build apps to improve your workflow.{% ifversion fpt or ghec %} You can also share or sell apps in [{% data variables.product.prodname_marketplace %}](https://github.com/marketplace). To learn how to list an app on {% data variables.product.prodname_marketplace %}, see "[Getting started with GitHub Marketplace](/marketplace/getting-started/)."{% endif %}

{% data reusables.marketplace.github_apps_preferred %}, but GitHub supports both {% data variables.product.prodname_oauth_apps %} and {% data variables.product.prodname_github_apps %}. For information on choosing a type of app, see "[Differences between GitHub Apps and OAuth Apps](/developers/apps/differences-between-github-apps-and-oauth-apps)."

{% data reusables.apps.general-apps-restrictions %}

For a walkthrough of the process of building a {% data variables.product.prodname_github_app %}, see "[Building Your First {% data variables.product.prodname_github_app %}](/apps/building-your-first-github-app)."

## About {% data variables.product.prodname_github_apps %}

{% data variables.product.prodname_github_apps %} are first-class actors within GitHub. A {% data variables.product.prodname_github_app %} acts on its own behalf, taking actions via the API directly using its own identity, which means you don't need to maintain a bot or service account as a separate user.

{% data variables.product.prodname_github_apps %} can be installed directly on organizations and user accounts and granted access to specific repositories. They come with built-in webhooks and narrow, specific permissions. When you set up your {% data variables.product.prodname_github_app %}, you can select the repositories you want it to access. For example, you can set up an app called `MyGitHub` that writes issues in the `octocat` repository and _only_ the `octocat` repository. To install a {% data variables.product.prodname_github_app %}, you must be an organization owner or have admin permissions in a repository.

{% data reusables.apps.app_manager_role %}

{% data variables.product.prodname_github_apps %} are applications that need to be hosted somewhere. For step-by-step instructions that cover servers and hosting, see "[Building Your First {% data variables.product.prodname_github_app %}](/apps/building-your-first-github-app)."

To improve your workflow, you can create a {% data variables.product.prodname_github_app %} that contains multiple scripts or an entire application, and then connect that app to many other tools. For example, you can connect {% data variables.product.prodname_github_apps %} to GitHub, Slack, other in-house apps you may have, email programs, or other APIs.

Keep these ideas in mind when creating {% data variables.product.prodname_github_apps %}:

{% ifversion fpt or ghec %}
* {% data reusables.apps.maximum-github-apps-allowed %} {% endif %}
* A {% data variables.product.prodname_github_app %} should take actions independent of a user (unless the app is using a [user-to-server](/apps/building-github-apps/identifying-and-authorizing-users-for-github-apps#user-to-server-requests) token). {% data reusables.apps.expiring_user_authorization_tokens %}

* Make sure the {% data variables.product.prodname_github_app %} integrates with specific repositories.
* The {% data variables.product.prodname_github_app %} should connect to a personal account or an organization.
* Don't expect the {% data variables.product.prodname_github_app %} to know and do everything a user can.
* Don't use a {% data variables.product.prodname_github_app %} if you just need a "Login with GitHub" service. But a {% data variables.product.prodname_github_app %} can use a [user identification flow](/apps/building-github-apps/identifying-and-authorizing-users-for-github-apps/) to log users in _and_ do other things.
* Don't build a {% data variables.product.prodname_github_app %} if you _only_ want to act as a GitHub user and do everything that user can do.{% ifversion fpt or ghec %}
* {% data reusables.apps.general-apps-restrictions %}{% endif %}

To begin developing {% data variables.product.prodname_github_apps %}, start with "[Creating a {% data variables.product.prodname_github_app %}](/apps/building-github-apps/creating-a-github-app/)."{% ifversion fpt or ghec %} To learn how to use {% data variables.product.prodname_github_app %} Manifests, which allow people to create preconfigured {% data variables.product.prodname_github_apps %}, see "[Creating {% data variables.product.prodname_github_apps %} from a manifest](/apps/building-github-apps/creating-github-apps-from-a-manifest/)."{% endif %}

## About {% data variables.product.prodname_oauth_apps %}

OAuth2 is a protocol that lets external applications request authorization to private details in a user's {% data variables.product.prodname_dotcom %} account without accessing their password. This is preferred over Basic Authentication because tokens can be limited to specific types of data and can be revoked by users at any time.

{% data reusables.apps.deletes_ssh_keys %}

An {% data variables.product.prodname_oauth_app %} uses {% data variables.product.prodname_dotcom %} as an identity provider to authenticate as the user who grants access to the app. This means when a user grants an {% data variables.product.prodname_oauth_app %} access, they grant permissions to _all_ repositories they have access to in their account, and also to any organizations they belong to that haven't blocked third-party access.

Building an {% data variables.product.prodname_oauth_app %} is a good option if you are creating more complex processes than a simple script can handle. Note that {% data variables.product.prodname_oauth_apps %} are applications that need to be hosted somewhere.

Keep these ideas in mind when creating {% data variables.product.prodname_oauth_apps %}:

{% ifversion fpt or ghec %}
* {% data reusables.apps.maximum-oauth-apps-allowed %} {% endif %}
* An {% data variables.product.prodname_oauth_app %} should always act as the authenticated {% data variables.product.prodname_dotcom %} user across all of {% data variables.product.prodname_dotcom %} (for example, when providing user notifications).
* An {% data variables.product.prodname_oauth_app %} can be used as an identity provider by enabling a "Login with {% data variables.product.prodname_dotcom %}" for the authenticated user.
* Don't build an {% data variables.product.prodname_oauth_app %} if you want your application to act on a single repository. With the `repo` OAuth scope, {% data variables.product.prodname_oauth_apps %} can act on _all_ of the authenticated user's repositories.
* Don't build an {% data variables.product.prodname_oauth_app %} to act as an application for your team or company. {% data variables.product.prodname_oauth_apps %} authenticate as a single user, so if one person creates an {% data variables.product.prodname_oauth_app %} for a company to use, and then they leave the company, no one else will have access to it.{% ifversion fpt or ghec %}
* {% data reusables.apps.oauth-apps-restrictions %}{% endif %}

For more on {% data variables.product.prodname_oauth_apps %}, see "[Creating an {% data variables.product.prodname_oauth_app %}](/apps/building-oauth-apps/creating-an-oauth-app/)" and "[Registering your app](/rest/guides/basics-of-authentication#registering-your-app)."

## Personal access tokens

A [personal access token](/articles/creating-a-personal-access-token-for-the-command-line/) is a string of characters that functions similarly to an [OAuth token](/apps/building-oauth-apps/authorizing-oauth-apps/) in that you can specify its permissions via [scopes](/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/). A personal access token is also similar to a password, but you can have many of them and you can revoke access to each one at any time.

As an example, you can enable a personal access token to write to your repositories. If then you run a cURL command or write a script that [creates an issue](/rest/reference/issues#create-an-issue) in your repository, you would pass the personal access token to authenticate. You can store the personal access token as an environment variable to avoid typing it every time you use it.

Keep these ideas in mind when using personal access tokens:

* Remember to use this token to represent yourself only.
* You can perform one-off cURL requests.
* You can run personal scripts.
* Don't set up a script for your whole team or company to use.
* Don't set up a shared user account to act as a bot user.{% ifversion fpt or ghes > 3.2 or ghae-issue-4374 or ghec %}
* Do set an expiration for your personal access tokens, to help keep your information secure.{% endif %}

## Determining which integration to build

Before you get started creating integrations, you need to determine the best way to access, authenticate, and interact with the {% ifversion fpt or ghec %}{% data variables.product.prodname_dotcom %}{% else %}{% data variables.product.product_name %}{% endif %} APIs. The following image offers some questions to ask yourself when deciding whether to use personal access tokens, {% data variables.product.prodname_github_apps %}, or {% data variables.product.prodname_oauth_apps %} for your integration.

![Intro to apps question flow](/assets/images/intro-to-apps-flow.png)

Consider these questions about how your integration needs to behave and what it needs to access:

* Will my integration act only as me, or will it act more like an application?
* Do I want it to act independently of me as its own entity?
* Will it access everything that I can access, or do I want to limit its access?
* Is it simple or complex? For example, personal access tokens are good for simple scripts and cURLs, whereas an {% data variables.product.prodname_oauth_app %} can handle more complex scripting.

## Requesting support

{% data reusables.support.help_resources %}
