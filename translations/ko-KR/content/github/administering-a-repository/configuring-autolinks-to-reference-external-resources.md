---
title: Configuring autolinks to reference external resources
intro: You can add autolinks to external resources like JIRA issues and Zendesk tickets to help streamline your workflow.
product: '{% data reusables.gated-features.autolinks %}'
redirect_from:
  - /articles/configuring-autolinks-to-reference-external-resources
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
  - Repositories
---

Anyone with admin permissions to a repository can configure autolink references to link issues, pull requests,{% if currentVersion == "free-pro-team@latest" or currentVersion == "github-ae@latest" or currentVersion ver_gt "enterprise-server@2.21" %} commit messages, and release descriptions{% else %} and commit messages{% endif %} to external third-party services.

If you use Zendesk to track user-reported tickets, for example, you can reference a ticket number in the pull request you open to fix the issue.

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
3. In the left sidebar, click **Autolink references**. ![Autolink references tab in the left sidebar](/assets/images/help/repository/autolink-references-tab.png)
4. Click **Add autolink reference**. ![Button to fill out autolink reference information](/assets/images/help/repository/add-autolink-reference-details.png)
5. Under "Reference prefix", type a short, meaningful prefix you want collaborators to use to generate autolinks for the external resource. ![Field to type abbreviation for external system](/assets/images/help/repository/add-reference-prefix-field.png)
6. Under "Target URL", type the link to the external system you want to link to. Make sure to keep `<num>` as a variable for the reference number. ![Field to type URL to external system](/assets/images/help/repository/add-target-url-field.png)
7. Click **Add autolink reference**. ![Button to add autolink reference](/assets/images/help/repository/add-autolink-reference.png)
