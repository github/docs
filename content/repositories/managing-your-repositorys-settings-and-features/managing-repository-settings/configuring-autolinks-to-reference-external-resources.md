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
  ghae: '*'
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
- Reference prefixes cannot have overlapping names. For example, a repository cannot have two custom autolinks with prefixes such as `TICKET` and `TICK`, since both prefixes would match the string `TICKET123a`.
- Target URLs include a `<num>` variable which represents the reference identifier of the linked resource.
{% endif %}

## Configuring autolinks to reference external resources

This procedure demonstrates how to configure autolinks to reference external resources. For example, if you use Zendesk to track user-reported tickets, you can reference a ticket number in the pull request you opened to fix the issue.

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
{% ifversion fpt or ghec or ghes > 3.4 or ghae > 3.4 %}
1. In the "Integrations" section of the sidebar, click **{% octicon "cross-reference" aria-label="The cross-reference icon" %} Autolink references**.
{% else %}
1. In the left sidebar, click **Autolink references**.
![Autolink references tab in the left sidebar.](/assets/images/help/repository/autolink-references-tab.png)
{% endif %}
1. Click **Add autolink reference**.
![Button to fill out autolink reference information.](/assets/images/help/repository/add-autolink-reference-details.png)
{% ifversion autolink-reference-alphanumeric %}
1. Select the format of the reference identifier used in the external resource, either alphanumeric or numeric.
![Autolink format setting, alphanumeric or numeric.](/assets/images/help/repository/autolink-format-setting.png)
{% endif %}  
1. Under "Reference prefix", type a short, meaningful prefix you want collaborators to use to generate autolinks for the external resource.
{% ifversion autolink-reference-alphanumeric %}![Field to type abbreviation for external system.](/assets/images/help/repository/add-reference-prefix-field-alphanumeric.png){% else %}![Field to type abbreviation for external system.](/assets/images/help/repository/add-reference-prefix-field.png){% endif %}
1. Under "Target URL", type the link to the external system you want to link to. Use the `<num>` variable as a placeholder for the reference identifier.
{% ifversion autolink-reference-alphanumeric %}![Field to type URL to external system.](/assets/images/help/repository/add-target-url-field-alphanumeric.png){% else %}![Field to type URL to external system.](/assets/images/help/repository/add-target-url-field.png){% endif %}
1. Click **Add autolink reference**.
{% ifversion autolink-reference-alphanumeric %}{% else %}![Button to add autolink reference.](/assets/images/help/repository/add-autolink-reference.png){% endif %}
