---
title: Replacing GitHub Services
intro: 'If you''re still relying on the deprecated {% data variables.product.prodname_dotcom %} Services, learn how to migrate your service hooks to webhooks.'
redirect_from:
  - /guides/replacing-github-services/
  - /v3/guides/automating-deployments-to-integrators/
  - /v3/guides/replacing-github-services
versions:
  free-pro-team: '*'
  enterprise-server: '*'
---


We have deprecated GitHub Services in favor of integrating with webhooks. This guide helps you transition to webhooks from GitHub Services. For more information on this announcement, see the [blog post](https://developer.github.com/changes/2018-10-01-denying-new-github-services).

{% note %}

As an alternative to the email service, you can now start using email notifications for pushes to your repository. See "[About email notifications for pushes to your repository](/github/receiving-notifications-about-activity-on-github/about-email-notifications-for-pushes-to-your-repository/)" to learn how to configure commit email notifications.

{% endnote %}


### Deprecation timeline

- **October 1, 2018**: GitHub discontinued allowing users to install services. We removed GitHub Services from the GitHub.com user interface.
- **January 29, 2019**: As an alternative to the email service, you can now start using email notifications for pushes to your repository. See "[About email notifications for pushes to your repository](/github/receiving-notifications-about-activity-on-github/about-email-notifications-for-pushes-to-your-repository/)" to learn how to configure commit email notifications.
- **January 31, 2019**: GitHub will stop delivering installed services' events on GitHub.com.

### GitHub Services background

GitHub Services (sometimes referred to as Service Hooks) is the legacy method of integrating where GitHub hosted a portion of our integrator’s services via [the `github-services` repository](https://github.com/github/github-services). Actions performed on GitHub trigger these services, and you can use these services to trigger actions outside of GitHub.

{% if currentVersion != "free-pro-team@latest" %}
### Finding repositories that use GitHub Services
We provide a command-line script that helps you identify which repositories on your appliance use GitHub Services. For more information, see [ghe-legacy-github-services-report](/enterprise/{{currentVersion}}/admin/articles/command-line-utilities/#ghe-legacy-github-services-report).{% endif %}

### GitHub Services vs. webhooks

The key differences between GitHub Services and webhooks:
- **Configuration**: GitHub Services have service-specific configuration options, while webhooks are simply configured by specifying a URL and a set of events.
- **Custom logic**: GitHub Services can have custom logic to respond with multiple actions as part of processing a single event, while webhooks have no custom logic.
- **Types of requests**: GitHub Services can make HTTP and non-HTTP requests, while webhooks can make HTTP requests only.

### Replacing Services with webhooks

To replace GitHub Services with Webhooks:

1. Identify the relevant webhook events you’ll need to subscribe to from [this list](/webhooks/#events).

2. Change your configuration depending on how you currently use GitHub Services:

   - **GitHub Apps**: Update your app's permissions and subscribed events to configure your app to receive the relevant webhook events.
   - **OAuth Apps**: Request either the `repo_hook` and/or `org_hook` scope(s) to manage the relevant events on behalf of users.
   - **GitHub Service providers**: Request that users manually configure a webhook with the relevant events sent to you, or take this opportunity to build an app to manage this functionality. For more information, see "[About apps](/apps/about-apps/)."

3. Move additional configuration from outside of GitHub. Some GitHub Services require additional, custom configuration on the configuration page within GitHub. If your service does this, you will need to move this functionality into your application or rely on GitHub or OAuth Apps where applicable.

### Supporting {% data variables.product.prodname_ghe_server %}

- **{% data variables.product.prodname_ghe_server %} 2.17**: {% data variables.product.prodname_ghe_server %} release 2.17 and higher will discontinue allowing admins to install services. Admins will continue to be able to modify existing service hooks and receive service hooks in {% data variables.product.prodname_ghe_server %} release 2.17 through 2.19. As an alternative to the email service, you will be able to use email notifications for pushes to your repository in {% data variables.product.prodname_ghe_server %} 2.17 and higher. See [this blog post](https://developer.github.com/changes/2019-01-29-life-after-github-services) to learn more.
- **{% data variables.product.prodname_ghe_server %} 2.20**: {% data variables.product.prodname_ghe_server %} release 2.20 and higher will stop delivering all installed services' events.

The {% data variables.product.prodname_ghe_server %} 2.17 release will be the first release that does not allow admins to install GitHub Services. We will only support existing GitHub Services until the {% data variables.product.prodname_ghe_server %} 2.20 release. We will also accept any critical patches for your GitHub Service running on {% data variables.product.prodname_ghe_server %} until October 1, 2019.

### Migrating with our help

Please [contact us](https://github.com/contact?form%5Bsubject%5D=GitHub+Services+Deprecation) with any questions.

As a high-level overview, the process of migration typically involves:
  - Identifying how and where your product is using GitHub Services.
  - Identifying the corresponding webhook events you need to configure in order to move to plain webhooks.
  - Implementing the design using either [{% data variables.product.prodname_oauth_app %}s](/apps/building-oauth-apps/) or [{% data variables.product.prodname_github_app %}s. {% data variables.product.prodname_github_app %}s](/apps/building-github-apps/) are preferred. To learn more about why {% data variables.product.prodname_github_app %}s are preferred, see "[Reasons for switching to {% data variables.product.prodname_github_app %}s](/apps/migrating-oauth-apps-to-github-apps/#reasons-for-switching-to-github-apps)."
