---
title: Installing GitHub Insights
intro: 'You can install {{ site.data.variables.product.prodname_insights }} and connect the standalone application to {{ site.data.variables.product.prodname_ghe_server }}.'
product: '{{ site.data.reusables.gated-features.github-insights }}'
redirect_from:
  - /github/installing-and-configuring-github-insights/installing-github-insights
permissions: 'Organization owners in {{ site.data.variables.product.prodname_enterprise }} with read permissions to the `github/insights-releases` repository and administrative access to the application server can install {{ site.data.variables.product.prodname_insights }}.'
versions:
  enterprise-server: '*'
---

### Требования

- You must have a {{ site.data.variables.product.prodname_enterprise }} license file that includes {{ site.data.variables.product.prodname_insights }}. After you purchase {{ site.data.variables.product.prodname_insights }}, you can download the updated license file in the [{{ site.data.variables.product.prodname_enterprise }} web portal](https://enterprise.github.com/download).
- {{ site.data.reusables.github-insights.requires-machine }} For more information, see "[System overview for {{ site.data.variables.product.prodname_insights }}](/github/installing-and-configuring-github-insights/system-overview-for-github-insights#requirements-for-running-github-insights)."
- You must install dependencies on the application server.
  - [Docker](https://docs.docker.com/install/) 1.13.0+
  - [Docker Compose](https://docs.docker.com/compose/install/) v1.17.0+

  {% note %}

  **Note:** {{ site.data.reusables.github-insights.docker-requirements }}

  {% endnote %}

### Creating a {{ site.data.variables.product.prodname_github_app }}

To connect {{ site.data.variables.product.prodname_insights }} to {{ site.data.variables.product.prodname_enterprise }}, you must create a {{ site.data.variables.product.prodname_github_app }} in an organization on {{ site.data.variables.product.prodname_enterprise }}. A slugged version of your app's name will be shown on {{ site.data.variables.product.prodname_enterprise }} when your integration takes an action.

{{ site.data.reusables.enterprise_site_admin_settings.sign-in }}
2. Navigate to the organization you'd like to connect to {{ site.data.variables.product.prodname_insights }}.
{{ site.data.reusables.organizations.org_settings }}
{{ site.data.reusables.organizations.github-apps-settings-sidebar }}
5. Click **New {{ site.data.variables.product.prodname_github_app }}**. ![New GitHub App button](/assets/images/help/apps/github_apps_new.png)
6. Under "{{ site.data.variables.product.prodname_github_app }} name", type a name for the app. Your app cannot have the same name as an existing user or organization, unless the name is your own user or organization name. ![GitHub App name field](/assets/images/help/apps/github_apps_app_name.png)
7. Under "Homepage URL", type the URL of the application server for {{ site.data.variables.product.prodname_insights }}. For more information, see "[System overview for {{ site.data.variables.product.prodname_insights }}](/insights/installing-and-configuring-github-insights/system-overview-for-github-insights#requirements-for-running-github-insights)." ![Homepage URL field](/assets/images/help/apps/github_apps_homepage_url.png)
8. Under "User authorization callback URL", type the following, replacing `<application-server-url>` with the URL of the application server.
   ```
   <application-server-url>/public/applogin
   ```
   ![User authorization callback field](/assets/images/help/apps/github_apps_user_authorization.png)
9. Under "Setup URL", type `<application-server-url>/public/setup`. ![Setup URL field](/assets/images/help/apps/github-apps-setup-url.png)
9. Under "Webhook URL", type `<application-server-url>/webhooks`. ![Webhook URL field](/assets/images/help/apps/github_apps_webhook_url.png)
10. Under "Webhook secret", type a secret, then record the secret for later reference. ![Webhook secret field](/assets/images/help/apps/github_apps_webhook_secret.png)
11. Under "Permissions", use the drop-down menus and configure the following permissions for the app.
    - Репозиторий:
      - Contents: **Read-only**
      - Metadata: **Read-only**
      - Pull requests: **Read-only**
      - Commit statuses: **Read-only**
    - Организация:
      - Members: **Read-only**
      - Projects: **Read-only**

  ![Permissions drop-down menus](/assets/images/help/apps/github_apps_new_permissions_post2dot13.png)
12. Under "Subscribe to events", select:
    - Member
    - Pull request
    - Push
    - Репозиторий
    - Team ![Subscribe to events checkboxes](/assets/images/help/apps/github_apps_subscribe_to_events_pr_push_repository.png)

13. To enable the {{ site.data.variables.product.prodname_github_app }} to access data from any user or organization in {{ site.data.variables.product.product_location_enterprise }}, under "Where can this {{ site.data.variables.product.prodname_github_app }} be installed?", select **Any account**. ![Radio buttons to enable access to any account](/assets/images/help/apps/github_apps_installation_options_any_account.png)
14. Click **Create {{ site.data.variables.product.prodname_github_app }}**. ![Create GitHub App button](/assets/images/help/apps/github_apps_create_github_app.png)
15. Review your app's configuration.
16. Under "Private keys", click **Generate a private key**. ![Generate a private key button](/assets/images/help/apps/generate-private-key.png)
17. Save the resulting PEM file for later reference.
18. Make note of the following information about your app for later reference.
    - App ID
    - Client ID
    - Client secret
    - Private key
    - Webhook secret

### Installing {{ site.data.variables.product.prodname_insights }}

{{ site.data.reusables.github-insights.download-latest-release }}
{{ site.data.reusables.github-insights.install-script }}
{{ site.data.reusables.github-insights.run-script }}

### Configuring {{ site.data.variables.product.prodname_insights }}

To configure {{ site.data.variables.product.prodname_insights }} to connect to {{ site.data.variables.product.prodname_ghe_server }}, you must provide the information you recorded in previous steps.

1. In your browser, navigate to `<application-server-url>/setup`.
{{ site.data.reusables.github-insights.enterprise-api-url }}
{{ site.data.reusables.github-insights.insights-license }}
{{ site.data.reusables.github-insights.app-id }}
{{ site.data.reusables.github-insights.client-id }}
{{ site.data.reusables.github-insights.client-secret }}
{{ site.data.reusables.github-insights.private-key }}
{{ site.data.reusables.github-insights.webhook-secret }}
{{ site.data.reusables.github-insights.skip-ssl }}
11. Click **Submit**.
12. Click **Log in with {{ site.data.variables.product.prodname_dotcom }}**.
13. To authorize the {{ site.data.variables.product.prodname_github_app }} and access {{ site.data.variables.product.prodname_insights }}, click **Authorize {{ site.data.variables.product.prodname_github_app }}**.

### Дополнительная литература

- "[Managing repositories](/insights/installing-and-configuring-github-insights/managing-repositories)"
- "[{{ site.data.variables.product.prodname_insights }} and data protection for your organization](/github/site-policy/github-insights-and-data-protection-for-your-organization)"
