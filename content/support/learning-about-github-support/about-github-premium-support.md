---
title: About GitHub Premium Support
intro: '{% data variables.contact.premium_support %} is a paid, supplemental support offering for {% data variables.product.prodname_enterprise %} customers.'
shortTitle: GitHub Premium Support
versions:
  ghec: '*'
  ghes: '*'
redirect_from:
  - /articles/about-github-premium-support
  - /articles/about-github-premium-support-for-github-enterprise-cloud
  - /enterprise/admin/guides/enterprise-support/about-premium-support-for-github-enterprise
  - /enterprise/admin/guides/enterprise-support/about-premium-support
  - /enterprise/admin/enterprise-support/about-github-premium-support-for-github-enterprise-server
  - /admin/enterprise-support/about-github-premium-support-for-github-enterprise-server
  - /enterprise/admin/enterprise-support/about-github-premium-support-for-github-enterprise
  - /admin/enterprise-support/about-github-premium-support-for-github-enterprise
  - /github/working-with-github-support/about-github-premium-support-for-github-enterprise-cloud
  - /admin/enterprise-support/overview/about-github-premium-support-for-github-enterprise-server
  - /admin/enterprise-support/overview/about-github-premium-support-for-github-enterprise
  - /support/about-github-support/about-github-premium-support
topics:
  - Support
---

> [!NOTE]
> * The terms of {% data variables.contact.premium_support %} are subject to change without notice and are effective as of November 2021.
> * {% data reusables.support.data-protection-and-privacy %}

## About {% data variables.contact.premium_support %}

{% data reusables.support.premium-support-features %}

## {% data variables.contact.premium_support %} plans

There are two {% data variables.contact.premium_support %} plans: Premium and Premium Plus / {% data variables.product.microsoft_premium_plus_support_plan %}.

{% rowheaders %}

| | {% data variables.product.premium_support_plan %} | {% data variables.product.premium_plus_support_plan %} |
|---|---|------|
| Hours of operation | 24 x 7 | 24 x 7 |
| Initial response time | <ul><li>30 minutes for {% data variables.product.support_ticket_priority_urgent %} (including initial troubleshooting)</li><li>4 hours for {% data variables.product.support_ticket_priority_high %}</li><li>48 hours for {% data variables.product.support_ticket_priority_normal %}</li><li>48 hours for {% data variables.product.support_ticket_priority_low %}</li></ul> | <ul><li>30 minutes for {% data variables.product.support_ticket_priority_urgent %} (including initial troubleshooting)</li><li>4 hours for {% data variables.product.support_ticket_priority_high %}</li><li>24 hours for {% data variables.product.support_ticket_priority_normal %}</li><li>48 hours for {% data variables.product.support_ticket_priority_low %}</li></ul> |
| Support channels | <ul><li>Online ticket submission</li><li>Phone support in English via callback request (when required for ticket resolution)</li><li>Screen share request for critical issues</li></ul> | <ul><li>Online ticket submission</li><li>Phone support in English via callback request (when required for ticket resolution)</li><li>Screen share request for critical issues</li></ul> |
| Training | Access to premium content  | <ul><li>Access to premium content</li><li>1 virtual training class per year</li></ul> |
| Members with support entitlements | 20 | 40 |
| Resources | Priority ticket handling | <ul><li>Priority ticket handling</li><li>Named Customer Reliability Engineer</li></ul>   |
| Escalation management | For High and Urgent priority tickets | For High and Urgent priority tickets |
| Incident management | None | For Urgent priority tickets, as needed |
| Health checks | {% ifversion ghec %}None{% else %}Unlimited automated health check reports (see [Generating a health check for your enterprise](/admin/enterprise-management/monitoring-your-appliance/generating-a-health-check-for-your-enterprise)){% endif %} | <ul>{% ifversion ghes %}<li>Unlimited automated health check reports. For more information, see [AUTOTITLE](/admin/enterprise-management/monitoring-your-appliance/generating-a-health-check-for-your-enterprise))</li>{% endif %}<li>Quarterly enhanced health checks, with findings, interpretations, and recommendations from your CRE (by request)</li></ul>    |
| {% ifversion ghes %} |
| Crisis prevention | None | Yearly participation in guided incident simulations to help you be prepared |
| {% endif %} |
| Technical advisory hours| None | 12 hours per quarter |
| Application upgrade assistance | None | By request |
| Cloud planning | None | By request |

{% endrowheaders %}

  > [!NOTE]
  > Enterprise owners and billing managers automatically have a support entitlement. Enterprise owners can add support entitlements to members of organizations owned by their enterprise account. For more information, see [AUTOTITLE](/enterprise-cloud@latest/admin/user-management/managing-users-in-your-enterprise/managing-support-entitlements-for-your-enterprise).

## Billing for {% data variables.contact.premium_support %}

How you are charged for {% data variables.contact.premium_support %} will depend on your {% data variables.product.github %} products and how you are charged for them.

* If you are a **licensed billing** customer, the support fee percentage is applied to the cost of licenses for the current year.

* If you are a **metered billing** customer, the support fee percentage for **{% data variables.product.premium_support_plan %}**, **Premium Plus plan**, and **{% data variables.product.microsoft_premium_plus_support_plan %}** is calculated as either a percentage of your estimated metered spending or a set minimum annual fee—whichever amount is higher. For {% data variables.product.microsoft_premium_plus_support_plan %} customers, this is in addition to the Unified Support contract fee.

  The support fee for metered billing is estimated from the previous 12 months' spending. If you have less than 12 months of spending history, {% data variables.product.github %} will take a 12-month run rate based on your spending history. If your last 3 to 6 months spending is vastly different to the last 6 to 9 months, the last 3 to 6 month period will be used.

  If you are switching from **licensed billing to metered billing**, your support fee at contract renewal is estimated based on the previous year's purchased licenses. Minimum thresholds remain in place.

* If you are both a licensed and metered billing customer (hybrid), your charge will be calculated from the support fee percentage applied to the current year's license purchases **plus** the support fee percentage applied to your estimated metered billing spend.

New {% data variables.product.github %} customers who are only planning to use metered products will be required to pay the annual minimum for {% data variables.product.premium_support_plan %} or {% data variables.product.premium_plus_support_plan %}.

If you would like a quote for {% data variables.contact.premium_support %}, contact [{% data variables.product.github %}'s Sales team](https://github.com/enterprise/contact?scid=&utm_campaign=2023q3-site-ww-PremiumSupport&utm_content=Premium+Support&utm_medium=referral&utm_source=github).

## Signing up for {% data variables.contact.premium_support %}

To sign up for {% data variables.contact.premium_support %} or upgrade your plan, [contact our account management team](https://enterprise.github.com/contact).

## Scope of support

{% data reusables.support.scope-of-support %}

## Contacting {% data variables.contact.premium_support %}

{% data variables.contact.premium_support %} customers can use the {% data variables.contact.contact_landing_page_portal %} to report issues in writing, in English.

## Hours of operation

{% data variables.contact.premium_support %} is available 24 hours a day, 7 days per week. If you purchased {% data variables.contact.premium_support %} prior to September 17, 2018, support is limited during holidays. For more information on holidays {% data variables.contact.premium_support %} observes, see the holiday schedule at [AUTOTITLE](/enterprise-server@latest/support/learning-about-github-support/about-github-support).

## Service Level Agreement response times

For tickets you submit, support is available 24 hours a day, 7 days per week. The initial response time guaranteed by the SLA is dependent on the priority level of the ticket. Response time begins when {% data variables.contact.premium_support %} sets the priority level of the ticket. A response does not mean the issue has been resolved.

{% rowheaders %}

| | Urgent Response Time | High Response Time | Normal Response Time | Low Response Time |
| --- | ---| --- | --- | --- |
| {% data variables.product.premium_plus_support_plan %} | 30 minutes | 4 hours | 24 hours | 48 hours |
| {% data variables.product.premium_support_plan %} | 30 minutes | 4 hours | 48 hours | 48 hours |

{% endrowheaders %}

During the initial response time for Urgent priority tickets, you can expect us to do the following:

* The paged Support Engineer or CRE assigns and carefully reviews your ticket. The goal is to understand the issue, start troubleshooting, and identify next steps.
* In the initial response, the assigned Support Engineer or CRE will acknowledge ticket receipt and assignment as well as provide next steps to clarify and troubleshoot the situation. To assist with resolving your issue, the Support Engineer or CRE may ask for additional information such as screenshots, error messages, log files, diagnostics files, support bundles, or the output of specific console commands.
* Depending on the issue, the assigned Support Engineer or CRE may collaborate with others in Support, Engineering, or the regional incident commander.

## About Callback Requests

Callback requests should only be used when a live discussion is essential to resolving the issue.

When requested, the assigned Support Engineer or CRE will determine whether a phone call or Zoom/Teams meeting with screen sharing is the most efficient way to move the ticket forward.

Callback requests are not tied to SLAs; a Support Engineer or representative will respond as soon as possible based on ticket priority and availability.

To ensure the fastest and most effective resolution, our live support calls focus on gathering essential information and aligning expectations. Once these goals are met, our Support Engineers step away to concentrate on resolving your issue as quickly as possible—keeping time and the outcomes our highest priority within the support process.

{% data reusables.enterprise_enterprise_support.installing-releases %}

{% ifversion ghes %}
You must install the minimum supported version of {% data variables.product.prodname_ghe_server %} pursuant to the Supported Releases section of your applicable license agreement within 90 days of placing an order for {% data variables.contact.premium_support %}.
{% endif %}

## Assigning a priority to a support ticket

When you contact {% data variables.contact.premium_support %}, you can choose one of four priorities for the ticket: {% data variables.product.support_ticket_priority_urgent %}, {% data variables.product.support_ticket_priority_high %}, {% data variables.product.support_ticket_priority_normal %}, or {% data variables.product.support_ticket_priority_low %}. For more information, see [AUTOTITLE](/support/learning-about-github-support/about-ticket-priority).

## Resolving and closing support tickets

{% data variables.contact.premium_support %} may consider a ticket solved after providing an explanation, recommendation, usage instructions, workaround instructions, or by advising you of an available {% data variables.product.prodname_ghe_server %} release that addresses the issue.

If you use a custom or unsupported plug-in, module, or custom code, {% data variables.contact.premium_support %} may ask you to remove the unsupported plug-in, module, or code while attempting to resolve the issue. If the problem is fixed when the unsupported plug-in, module, or custom code is removed, {% data variables.contact.premium_support %} may consider the ticket solved.

{% data variables.contact.premium_support %} may close a ticket if the ticket is outside the scope of support or if multiple attempts to contact you have gone unanswered. If {% data variables.contact.premium_support %} closes a ticket due to lack of response, you can request that {% data variables.contact.premium_support %} reopen the ticket.

## Virtual trainings available with Premium Plus

Premium Plus customers are eligible to receive one virtual training class per year and can choose from the following topics:

* {% data variables.product.github %} for developers
* {% data variables.product.github %} for admins (Server)
* {% data variables.product.github %} for admins (Cloud)
* {% data variables.product.github %} for non-developers
* {% data variables.product.github %} API
* {% data variables.product.prodname_actions %} Fundamentals
* {% data variables.product.prodname_actions %} Intermediate
* {% data variables.product.prodname_copilot %} Fundamentals
* {% data variables.product.prodname_copilot %} Intermediate
* {% data variables.product.prodname_copilot %} Administration & Security
* {% data variables.product.prodname_enterprise %} Implementation (Cloud)

We recommend limiting training sessions to a maximum of 16 participants to ensure an optimal provider-to-participant ratio and a high-quality delivery experience. However, in specific cases where it makes sense, we can accommodate up to 20–25 participants while maintaining our commitment to delivering a valuable training experience for your team.

## Accessing premium content

You can access premium content by signing into the {% data variables.contact.contact_landing_page_portal %}, then clicking **Premium**.
