---
title: Understanding how GitHub Support can help during a security incident
shortTitle: Security incident support
intro: 'Understand what {% data variables.contact.github_support %} can and cannot do during a security incident, and find resources to investigate and respond.'
versions:
  ghec: '*'
category:
  - Understand your support options
redirect_from:
  - /support/learning-about-github-support/how-github-support-can-help-with-security-incidents
---

## About security incidents

A security incident is an event that could compromise your enterprise's accounts, code, or other data. Examples include compromised accounts, leaked credentials, unexpected access, or unauthorized changes.

Investigating and responding to an incident is self-service. Before an incident occurs, enable enterprise audit log streaming, API request event streaming, and source IP address disclosure. Retain the logs in storage that your incident responders can access.

> [!IMPORTANT]
> {% data reusables.audit_log.streaming-not-retroactive %}

For guidance on preparing for and responding to an incident, see:

* [AUTOTITLE](/code-security/tutorials/secure-your-organization/prepare-for-a-security-incident)
* [AUTOTITLE](/code-security/tutorials/secure-your-organization/respond-to-a-security-incident)

## How {% data variables.contact.github_support %} can help

> [!IMPORTANT]
> When an incident occurs, follow your incident response procedures immediately. Focus first on containing the threat with actions appropriate to the incident, such as restricting access and revoking or rotating compromised credentials.
>
> For enterprise-level containment options, see [AUTOTITLE](/admin/managing-iam/respond-to-incidents/lock-down-sso) and [AUTOTITLE](/admin/managing-iam/respond-to-incidents/revoke-authorizations-or-tokens).

{% data variables.contact.github_support %} can answer questions about {% data variables.product.github %}'s features and the data available to you, so you can investigate and analyze the activity yourself. {% data variables.contact.github_support %} does not investigate or analyze on your behalf.

If you need guidance using these features or want to request a feature, see [AUTOTITLE](/support/contacting-github-support/creating-a-support-ticket).

{% data variables.contact.github_support %} handles all security-related matters in writing through support tickets.

### No managed incident response service

{% data variables.contact.github_support %} does not join or lead your incident response process. To investigate and contain a threat, use {% data variables.product.github %}'s audit log, security, and access-management tools.

### No log preservation

{% data variables.contact.github_support %} cannot fulfill requests to preserve logs or audit data, extend their retention periods, or place them on hold for your investigation. Opening a support ticket does not change how long data remains available. To retain data for an investigation, export it while it is available or configure audit log streaming in advance to storage you control.

## Further reading

* [Full exposure: a practical approach to handling sensitive data leaks](https://github.blog/security/full-exposure-a-practical-approach-to-handling-sensitive-data-leaks/) in the {% data variables.product.github %} blog
* [{% data variables.product.prodname_ghe_cloud %} Trust Center](https://ghec.github.trust.page/) for {% data variables.product.github %}'s security, privacy, and compliance information
* [{% data variables.product.github %} security blog](https://github.blog/security/) for security research, announcements, and best practices from {% data variables.product.github %}
* [{% data variables.product.github %} Bug Bounty](https://bounty.github.com/) to report a security vulnerability you find in a {% data variables.product.github %} product
