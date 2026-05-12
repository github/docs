---
title: Preparing for a security incident
shortTitle: Prepare for a security incident
allowTitleToDifferFromFilename: true
intro: Ensure you have the tools and processes in place to respond effectively to a security incident.
versions:
  fpt: '*'
  ghec: '*'
  ghes: '*'
contentType: tutorials
---

The guidance in this article is aimed at enterprise owners, organization owners, security managers and security teams. However, you will need to have the enterprise owner role to enable several of the features referenced in this article.

## Introduction

When a security incident occurs, the ability to investigate what happened, understand the scope of impact, and contain the threat depends on having the right tools and processes already in place. This article brings together the key actions you should take **before** an incident occurs so that your team is equipped to respond quickly and effectively.

## Set up critical tools in advance

The following investigative tooling is not available by default when you set up your {% data variables.product.github %} enterprise. We strongly recommend enabling these features before any incident occurs.

These controls are critical for incident response, compliance, and operational transparency. Without them, your team can have major visibility gaps during an investigation, especially for API activity, Git activity, and long-running incidents where you need historical data.

### Audit log streaming

You should stream the enterprise audit logs to a Security Information and Event Management (SIEM) system. This keeps a copy of your audit log data (including both audit events and Git events) in a system where you can run complex queries across large volumes of data and retain data beyond default retention periods.

This is critical in an incident because some high-value events are not visible in the {% data variables.product.github %} audit log web UI, and logs are only available for a limited time unless you export and retain them externally.

With streamed logs, enterprise and organization owners can independently investigate activity from users, apps, tokens, and SSH keys, instead of depending on ad hoc data collection during an active response.

To set up audit log streaming, see [AUTOTITLE](/admin/monitoring-activity-in-your-enterprise/reviewing-audit-logs-for-your-enterprise/streaming-the-audit-log-for-your-enterprise).

### Stream API request events

By default, the audit log stream won't include API request events. Enable API request streaming so that you can detect and investigate unauthorized API access or data exfiltration by compromised tokens or apps.

See [Enabling audit log streaming of API requests](/admin/monitoring-activity-in-your-enterprise/reviewing-audit-logs-for-your-enterprise/streaming-the-audit-log-for-your-enterprise#enabling-audit-log-streaming-of-api-requests).

### Display IP addresses

By default, {% data variables.product.github %} doesn't show source IP addresses in the enterprise audit log. During an investigation, source IPs help you verify whether activity from an actor (a user or app) came from a trusted or unfamiliar address.

Enterprises on {% data variables.product.prodname_ghe_cloud %} can enable IP address disclosure, see [AUTOTITLE](/enterprise-cloud@latest/admin/monitoring-activity-in-your-enterprise/reviewing-audit-logs-for-your-enterprise/displaying-ip-addresses-in-the-audit-log-for-your-enterprise).

### Retain identity provider logs

If your enterprise uses SAML or OIDC authentication, adopt a similar retention strategy for your IdP logs.

Retained IdP logs help you investigate authentication activity and review provisioning and deprovisioning events over longer time windows, including incidents that unfold over months.

## Familiarize yourself with tooling, limitations and common investigation areas

Before an incident occurs, review the {% data variables.product.github %} tools and surfaces you can use during an investigation, and understand each tool's capabilities and limitations.

Familiarize yourself with:

* {% data variables.product.github %} tools and surfaces for investigations, including their limitations. See [AUTOTITLE](/code-security/reference/security-incident-response/investigation-tools).
* Key procedures for using the audit log during a security threat, such as [AUTOTITLE](/enterprise-cloud@latest/admin/monitoring-activity-in-your-enterprise/reviewing-audit-logs-for-your-enterprise/identifying-audit-log-events-performed-by-an-access-token).
* Common investigation areas and the checks you can perform for specific threat signals. See [AUTOTITLE](/code-security/reference/security-incident-response/investigation-areas).

## Familiarize yourself with containment strategies

Before an incident occurs, review the immediate containment actions you might need. Planning these actions in advance with your security and operations teams helps you respond quickly, and means you can include clear guidance in your Security Incident Response Plan (SIRP).

Familiarize yourself with:

* Common containment actions on {% data variables.product.github %}, such as revoking credentials, enabling an IP allow list, suspending users, and other access disablement actions. See [Contain the threat](/code-security/tutorials/secure-your-organization/responding-to-security-incidents#step-2-contain-the-threat).
* Revocation options for each type of credential that can programmatically access {% data variables.product.github %}. See [AUTOTITLE](/organizations/managing-programmatic-access-to-your-organization/github-credential-types).
* For enterprises on {% data variables.product.prodname_ghe_cloud %}: the bulk emergency actions available to enterprise owners in a major incident, such as locking down SSO and deleting all user tokens and keys. See [AUTOTITLE](/enterprise-cloud@latest/admin/managing-iam/respond-to-incidents).

## Prepare a Security Incident Response Plan (SIRP)

Create and maintain an up-to-date Security Incident Response Plan (SIRP) for your enterprise.

Your plan should define:

* Roles and responsibilities
* Escalation paths
* Communication protocols
* Severity classification criteria
* Step-by-step response procedures for common threat types

{% data variables.product.prodname_copilot_short %} can help you draft and refine this plan based on your team's needs and resources.

For guidance, see [What is incident response](https://github.com/resources/articles/what-is-incident-response#what-is-incident-response).

## Next steps

* [AUTOTITLE](/code-security/tutorials/secure-your-organization/responding-to-security-incidents)