---
title: Installing GitHub Insights
intro: 'You can install {% data variables.product.prodname_insights %} and connect the standalone application to {% data variables.product.prodname_ghe_server %}.'
product: '{% data reusables.gated-features.github-insights %}'
redirect_from:
  - /github/installing-and-configuring-github-insights/installing-github-insights
permissions: 'Organization owners in {% data variables.product.prodname_enterprise %} with read permissions to the `github/insights-releases` repository and administrative access to the application server can install {% data variables.product.prodname_insights %}.'
versions:
  enterprise-server: '*'
---

### 빌드전 요구 사양

- You must have a {% data variables.product.prodname_enterprise %} license file that includes {% data variables.product.prodname_insights %}. After you purchase {% data variables.product.prodname_insights %}, you can download the updated license file in the [{% data variables.product.prodname_enterprise %} web portal](https://enterprise.github.com/download).
- {% data reusables.github-insights.requires-machine %} For more information, see "[System overview for {% data variables.product.prodname_insights %}](/github/installing-and-configuring-github-insights/system-overview-for-github-insights#requirements-for-running-github-insights)."
- You must install dependencies on the application server.
  - [Docker](https://docs.docker.com/install/) 1.13.0+
  - [Docker Compose](https://docs.docker.com/compose/install/) v1.17.0+

  {% note %}

  **Note:** {% data reusables.github-insights.docker-requirements %}

  {% endnote %}

### Creating a {% data variables.product.prodname_github_app %}

To connect {% data variables.product.prodname_insights %} to {% data variables.product.prodname_enterprise %}, you must create a {% data variables.product.prodname_github_app %} in an organization on {% data variables.product.prodname_enterprise %}. A slugged version of your app's name will be shown on {% data variables.product.prodname_enterprise %} when your integration takes an action.

{% data reusables.enterprise_site_admin_settings.sign-in %}
2. Navigate to the organization you'd like to connect to
{% data variables.product.prodname_insights %}.
{% data reusables.organizations.org_settings %}
{% data reusables.organizations.github-apps-settings-sidebar %}
5. Click **New {% data variables.product.prodname_github_app %}**. ![New GitHub App button](/assets/images/help/apps/github_apps_new.png)
6. Under "{% data variables.product.prodname_github_app %} name", type a name for the app. Your app cannot have the same name as an existing user or organization, unless the name is your own user or organization name. ![GitHub App name field](/assets/images/help/apps/github_apps_app_name.png)
7. Under "Homepage URL", type the URL of the application server for {% data variables.product.prodname_insights %}. For more information, see "[System overview for {% data variables.product.prodname_insights %}](/insights/installing-and-configuring-github-insights/system-overview-for-github-insights#requirements-for-running-github-insights)." ![Homepage URL field](/assets/images/help/apps/github_apps_homepage_url.png)
8. Under "User authorization callback URL", type the following, replacing `<application-server-url>` with the URL of the application server.
   ```
   <application-server-url>/public/applogin
   ```
   ![User authorization callback field](/assets/images/help/apps/github_apps_user_authorization.png)
9. Under "Setup URL", type `<application-server-url>/public/setup`. ![Setup URL field](/assets/images/help/apps/github-apps-setup-url.png)
9. Under "Webhook URL", type `<application-server-url>/webhooks`. ![Webhook URL field](/assets/images/help/apps/github_apps_webhook_url.png)
10. Under "Webhook secret", type a secret, then record the secret for later reference. ![Webhook secret field](/assets/images/help/apps/github_apps_webhook_secret.png)
11. Under "Permissions", use the drop-down menus and configure the following permissions for the app.
    - 리포지토리:
      - Contents: **Read-only**
      - Metadata: **Read-only**
      - Pull requests: **Read-only**
      - Commit statuses: **Read-only**
    - 조직:
      - Members: **Read-only**
      - Projects: **Read-only**

  ![Permissions drop-down menus](/assets/images/help/apps/github_apps_new_permissions_post2dot13.png)
12. Under "Subscribe to events", select:
    - Member
    - Pull request
    - Push
    - 리포지토리
    - Team ![Subscribe to events checkboxes](/assets/images/help/apps/github_apps_subscribe_to_events_pr_push_repository.png)

13. To enable the {% data variables.product.prodname_github_app %} to access data from any user or organization in {% data variables.product.product_location %}, under "Where can this {% data variables.product.prodname_github_app %} be installed?", select **Any account**. ![Radio buttons to enable access to any account](/assets/images/help/apps/github_apps_installation_options_any_account.png)
14. Click **Create {% data variables.product.prodname_github_app %}**. ![Create GitHub App button](/assets/images/help/apps/github_apps_create_github_app.png)
15. Review your app's configuration.
16. Under "Private keys", click **Generate a private key**. ![Generate a private key button](/assets/images/help/apps/generate-private-key.png)
17. Save the resulting PEM file for later reference.
18. Make note of the following information about your app for later reference.
    - App ID
    - 클라이언트 ID
    - Client secret
    - Private key
    - Webhook secret

### Installing {% data variables.product.prodname_insights %}

{% data reusables.github-insights.download-latest-release %}
{% data reusables.github-insights.install-script %}
{% data reusables.github-insights.run-script %}

### Configuring {% data variables.product.prodname_insights %}

To configure {% data variables.product.prodname_insights %} to connect to {% data variables.product.prodname_ghe_server %}, you must provide the information you recorded in previous steps.

1. In your browser, navigate to `<application-server-url>/setup`.
{% data reusables.github-insights.enterprise-api-url %}
{% data reusables.github-insights.insights-license %}
{% data reusables.github-insights.app-id %}
{% data reusables.github-insights.client-id %}
{% data reusables.github-insights.client-secret %}
{% data reusables.github-insights.private-key %}
{% data reusables.github-insights.webhook-secret %}
{% data reusables.github-insights.skip-ssl %}
11. Click **Submit**.
12. Click **Log in with {% data variables.product.prodname_dotcom %}**.
13. To authorize the {% data variables.product.prodname_github_app %} and access {% data variables.product.prodname_insights %}, click **Authorize {% data variables.product.prodname_github_app %}**.

### 더 읽을거리

- "[Managing repositories](/insights/installing-and-configuring-github-insights/managing-repositories)"
- "<a href="/github/site-policy/github-insights-and-data-protection-for-your-organization" class="dotcom-only">{% data variables.product.prodname_insights %} and data protection for your organization</a>"
