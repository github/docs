---
title: Configuring autolinks to reference external resources
intro: You can add autolinks to external resources like JIRA issues and Zendesk tickets to help streamline your workflow.
product: '{% data reusables.gated-features.autolinks %}'
redirect_from:
  - /articles/configuring-autolinks-to-reference-external-resources
  - /github/administering-a-repository/configuring-autolinks-to-reference-external-resources
  - /github/administering-a-repository/managing-repository-settings/configuring-autolinks-to-reference-external-resources
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
topics:
  - Repositories
shortTitle: Configure autolinks
---

## About autolinks

Anyone with admin permissions to a repository can configure autolink references to link issues, pull requests, commit messages, and release descriptions to external third-party services.

{% ifversion autolink-reference-alphanumeric %}
Autolink references can now accept alphanumeric characters. When originally introduced, custom autolinks were limited to external resources that used numeric identifiers. Custom autolinks now work with alphanumeric and numeric identifiers.

You define custom autolinks by specifying a reference prefix and a target URL.
* Reference prefixes cannot have overlapping names. For example, a repository cannot have two custom autolinks with prefixes such as `TICKET` and `TICK`, since both prefixes would match the string `TICKET123a`.
* Target URLs include a `<num>` variable which represents the reference identifier of the linked resource.
{% endif %}

## Configuring autolinks to reference external resources

This procedure demonstrates how to configure autolinks to reference external resources. For example, if you use Zendesk to track user-reported tickets, you can reference a ticket number in the pull request you opened to fix the issue.

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
1. In the "Integrations" section of the sidebar, click **{% octicon "cross-reference" aria-hidden="true" %} Autolink references**.
1. At the top right of the page, click **Add autolink reference**.

   ![Screenshot of the "autolink references" page. The "Add autolink reference" button is highlighted by a dark orange outline.](/assets/images/help/repository/add-autolink-reference-details.png)
{% ifversion autolink-reference-alphanumeric %}
1. Select the format of the reference identifier used in the external resource, either **Alphanumeric** or **Numeric**.
{% endif %}
1. Under "Reference prefix", type a short, meaningful prefix. Collaborators will use this text to generate autolinks for the external resource.
1. Under "Target URL", type the format of the link to the external system you want to create. Use the `<num>` variable as a placeholder for the reference identifier.
1. Review the preview and verify that the autolink and external reference are both correct, then click **Add autolink reference** to define the link.

For example, you might enter the following.
* Reference prefix: `JIRA-`
* Target URL: `https://jira.example.com/issue?query=<num>`
* Preview: `JIRA-123` is converted to `https://jira.example.com/issue?query=123`
