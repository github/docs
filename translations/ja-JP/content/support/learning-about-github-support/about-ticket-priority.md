---
title: About ticket priority
intro: You can communicate the severity of your issue and how it is affecting you and your team by setting the priority of your support ticket.
shortTitle: Ticket priority
versions:
  ghec: '*'
  ghes: '*'
  ghae: '*'
topics:
  - Support
---

When you contact {% data variables.contact.enterprise_support %}, you can choose one of {% ifversion ghes or ghae %}four{% else %}three{% endif %} priorities for the ticket: {% ifversion ghes or ghae %}{% data variables.product.support_ticket_priority_urgent %},{% endif %} {% data variables.product.support_ticket_priority_high %}, {% data variables.product.support_ticket_priority_normal %}, or {% data variables.product.support_ticket_priority_low %}.

{% ifversion ghes or ghae %}

{% data reusables.support.github-can-modify-ticket-priority %}

{% ifversion ghes %}

## Ticket priority for {% data variables.product.prodname_ghe_server %}

{% data reusables.support.ghes-priorities %}

## Ticket priority for {% data variables.product.prodname_advanced_security %}

| Priority | Description |
| :---: | --- |
| {% data variables.product.support_ticket_priority_high %} | {% data variables.product.prodname_advanced_security %} is not functioning or is stopped or severely impacted such that the end user cannot reasonably continue use of the software and no workaround is available. |
| {% data variables.product.support_ticket_priority_normal %} | {% data variables.product.prodname_advanced_security %} is functioning inconsistently, causing impaired end user usage and productivity. |
| {% data variables.product.support_ticket_priority_low %} | {% data variables.product.prodname_advanced_security %} is functioning consistently, but the end user requests minor changes in the software, such as documentation updates, cosmetic defects, or enhancements.|

{% elsif ghae %}
{% data reusables.support.ghae-priorities %}
{% endif %}

{% elsif ghec %}

<!-- /github/working-with-github-support/github-enterprise-cloud-support.md -->

{% data reusables.support.zendesk-old-tickets %}

You can submit priority questions if you have purchased {% data variables.product.prodname_ghe_cloud %} or if you're a member, outside collaborator, or billing manager of a {% data variables.product.prodname_dotcom %} organization currently subscribed to {% data variables.product.prodname_ghe_cloud %}.

Questions that qualify for priority responses:
- Include questions related to your inability to access or use {% data variables.product.prodname_dotcom %}'s core version control functionality
- Include situations related to your account security
- Do not include peripheral services and features, such as questions about Gists, {% data variables.product.prodname_pages %}, or email notifications
- Include questions only about organizations currently using {% data variables.product.prodname_ghe_cloud %}

To qualify for a priority response, you must:
- Submit your question to [{% data variables.contact.enterprise_support %}](https://support.github.com/contact?tags=docs-generic) from a verified email address that's associated with an organization currently using {% data variables.product.prodname_ghe_cloud %}
- Submit a new support ticket for each individual priority situation
- Submit your question from Monday-Friday in your local time zone
- Understand that the response to a priority question will be received via email
- Cooperate with {% data variables.contact.github_support %} and provide all of the information that {% data variables.contact.github_support %} asks for

{% note %}

**Note:** Questions do not qualify for a priority response if they are submitted on a local holiday in your jurisdiction.

{% endnote %}

The target eight-hour response time:
- Begins when {% data variables.contact.github_support %} receives your qualifying question
- Does not begin until you have provided sufficient information to answer the question, unless you specifically indicate that you do not have sufficient information
- Does not apply on weekends in your local timezone or local holidays in your jurisdiction

{% note %}

**Note:** {% data variables.contact.github_support %} does not guarantee a resolution to your priority question. {% data variables.contact.github_support %} may escalate or deescalate issues to or from priority question status, based on our reasonable evaluation of the information you give to us.

{% endnote %}

{% endif %}

## Further reading

- "[Creating a support ticket](/support/contacting-github-support/creating-a-support-ticket)"
