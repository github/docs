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

{% note %}

**Notes:**

- The terms of {% data variables.contact.premium_support %} are subject to change without notice and are effective as of November 2021. 

- {% data reusables.support.data-protection-and-privacy %}

{% endnote %}

## About {% data variables.contact.premium_support %}

{% data reusables.support.premium-support-features %}

## {% data variables.contact.premium_support %} plans

There are two {% data variables.contact.premium_support %} plans: Premium and Premium Plus / {% data variables.product.microsoft_premium_plus_support_plan %}.

| | {% data variables.product.premium_support_plan %} | {% data variables.product.premium_plus_support_plan %} |
|---|---|------|
| Hours of operation | 24 x 7 | 24 x 7 |
| Initial response time | <ul><li>30 minutes for {% data variables.product.support_ticket_priority_urgent %}</li><li>4 hours for {% data variables.product.support_ticket_priority_high %}</li></ul> | <ul><li>30 minutes for {% data variables.product.support_ticket_priority_urgent %}</li><li>4 hours for {% data variables.product.support_ticket_priority_high %}</li></ul> |
| Support channels | <ul><li>Online ticket submission</li><li>Phone support in English via callback request</li><li>Screen share request for critical issues</li></ul> | <ul><li>Online ticket submission</li><li>Phone support in English via callback request</li><li>Screen share request for critical issues</li></ul> |
| Training | Access to premium content  | <ul><li>Access to premium content</li><li>1 virtual training class per year</li></ul> |
| Members with support entitlements | 20 | 20 |
| Resources | Priority ticket handling | <ul><li>Priority ticket handling</li><li>Named Customer Reliability Engineer</li></ul>   |
| Health Checks | Unlimited automated Health Check reports (see "[Generating a Health Check for your enterprise]({% ifversion not ghes%}/enterprise-server@latest{% endif %}/admin/enterprise-management/monitoring-your-appliance/generating-a-health-check-for-your-enterprise)") | <ul><li>Unlimited automated Health Check reports (see "[Generating a Health Check for your enterprise]({% ifversion not ghes%}/enterprise-server@latest{% endif %}/admin/enterprise-management/monitoring-your-appliance/generating-a-health-check-for-your-enterprise)")</li><li>Quarterly enhanced Health Checks, with findings, interpretations, and recommendations from a Customer Reliability Engineer (by request)</li></ul>    |
| Technical advisory hours| None | 4 hours per month  |
| Application upgrade assistance | None | By request |
| Cloud planning | None | By request |

  {% note %}

  **Notes:**
  - Enterprise owners and billing managers automatically have a support entitlement. Enterprise owners can add support entitlements to members of organizations owned by their enterprise account. For more information, see "[Managing support entitlements for your enterprise](/enterprise-cloud@latest/admin/user-management/managing-users-in-your-enterprise/managing-support-entitlements-for-your-enterprise)."
  - For the {% data variables.product.premium_plus_support_plan %}, 50% of unused Managed Services hours roll over to the next month and expire at the end of the quarter.

  {% endnote %}


## Signing up for {% data variables.contact.premium_support %}

To sign up for {% data variables.contact.premium_support %} or upgrade your plan, you can [contact our account management team](https://enterprise.github.com/contact) or call [+1 (877) 448-4820](tel:+1-877-448-4820).

## Scope of support

{% data reusables.support.scope-of-support %}

## Contacting {% data variables.contact.premium_support %}

{% data variables.contact.premium_support %} customers can use the {% data variables.contact.contact_landing_page_portal %} to report issues in writing, in English.

## Hours of operation

{% data variables.contact.premium_support %} is available 24 hours a day, 7 days per week. If you purchased {% data variables.contact.premium_support %} prior to September 17, 2018, support is limited during holidays. For more information on holidays {% data variables.contact.premium_support %} observes, see the holiday schedule at "[About {% data variables.contact.github_support %}](/enterprise-server@latest/admin/enterprise-support/overview/about-github-enterprise-support)."

## Service Level Agreement response times

For tickets you submit, support is available 24 hours a day, 7 days per week. The initial response time guaranteed by the SLA is dependent on the priority level of the ticket. Response time begins when {% data variables.contact.premium_support %} sets the priority level of the ticket. A response does not mean the issue has been resolved.

| Ticket priority level | Initial response time |
| --- | ---|
| {% data variables.product.support_ticket_priority_urgent %} | 30 minutes |
| {% data variables.product.support_ticket_priority_high %} | 4 hours |

{% data reusables.enterprise_enterprise_support.installing-releases %}

You must install the minimum supported version of {% data variables.product.prodname_ghe_server %} pursuant to the Supported Releases section of your applicable license agreement within 90 days of placing an order for {% data variables.contact.premium_support %}.

## Assigning a priority to a support ticket

When you contact {% data variables.contact.premium_support %}, you can choose one of four priorities for the ticket: {% data variables.product.support_ticket_priority_urgent %}, {% data variables.product.support_ticket_priority_high %}, {% data variables.product.support_ticket_priority_normal %}, or {% data variables.product.support_ticket_priority_low %}.

- [Ticket priorities for {% data variables.product.prodname_ghe_cloud %}](#ticket-priorities-for-github-enterprise-cloud)
- [Ticket priorities for {% data variables.product.prodname_ghe_server %}](#ticket-priorities-for-github-enterprise-server)

### Ticket priorities for {% data variables.product.prodname_ghe_cloud %}

| Priority | Description | Examples |
| :---: | --- | --- |
| {% data variables.product.support_ticket_priority_urgent %} | Production workflows for your organization or enterprise on {% data variables.product.prodname_ghe_cloud %} are failing due to critical service errors or outages, and the failure directly impacts the operation of your business. | <ul><li>Errors or outages on {% data variables.product.prodname_dotcom_the_website %} affect core Git or web application functionality for all members of your organization or enterprise</li></ul> |
| {% data variables.product.support_ticket_priority_high %} | Account or security issues with your organization or enterprise on {% data variables.product.prodname_ghe_cloud %} are causing limited impact to your business. | <ul><li>An organization or enterprise owner has unintentionally deleted an organization</li><li>An organization or enterprise member has uploaded sensitive data in a commit, issue, pull request, or issue attachment</li></ul> |
| {% data variables.product.support_ticket_priority_normal %} | Members of your organization or enterprise on {% data variables.product.prodname_ghe_cloud %} are experiencing limited or moderate issues with {% data variables.product.prodname_dotcom_the_website %}, or you have general concerns or questions about your organization or enterprise. | <ul><li>Questions about using APIs and features for your organization or enterprise</li><li>Issues with tools for organization data migration that {% data variables.product.company_short %} provides</li><li>Features related to your organization or enterprise not working as expected</li><li>General security questions about your organization or enterprise</li></ul> |
| {% data variables.product.support_ticket_priority_low %} | You have a question or suggestion about your organization or enterprise on {% data variables.product.prodname_ghe_cloud %} that is not time-sensitive, or does not otherwise block the productivity of your team. | <ul><li>Excessive resource usage for your organization or enterprise</li><li>Requests for health checks</li><li>Help with using Gists, notifications, wikis, {% data variables.product.prodname_pages %}, {% data variables.product.prodname_desktop %}, or other peripheral services or features with your organization or enterprise</li><li>Feature requests</li><li>Product feedback</li></ul> |


### Ticket priorities for {% data variables.product.prodname_ghe_server %}

{% data reusables.support.ghes-priorities %}

## Resolving and closing support tickets

{% data variables.contact.premium_support %} may consider a ticket solved after providing an explanation, recommendation, usage instructions, workaround instructions, or by advising you of an available {% data variables.product.prodname_ghe_server %} release that addresses the issue.

If you use a custom or unsupported plug-in, module, or custom code, {% data variables.contact.premium_support %} may ask you to remove the unsupported plug-in, module, or code while attempting to resolve the issue. If the problem is fixed when the unsupported plug-in, module, or custom code is removed, {% data variables.contact.premium_support %} may consider the ticket solved.

{% data variables.contact.premium_support %} may close a ticket if the ticket is outside the scope of support or if multiple attempts to contact you have gone unanswered. If {% data variables.contact.premium_support %} closes a ticket due to lack of response, you can request that {% data variables.contact.premium_support %} reopen the ticket.

## Receiving credits for missed responses to support tickets

If you don't receive an initial response within the guaranteed response time to more than four tickets in a given quarter based on {% data variables.product.company_short %}'s fiscal year, you're eligible for a credit. To honor the SLA, {% data variables.product.company_short %} will refund 20% of the quarterly {% data variables.contact.premium_support %} fee in cash. To receive the refund, you must submit a credit request.

The credit request must be made within 30 days of the end of the quarter during which {% data variables.contact.premium_support %} did not respond to your tickets within the designated response time. Credit requests will not be honored if the respective deadline has passed. Once the respective deadline passes, you have waived the ability to claim a refund for the qualified credit.

To receive a refund, you must submit a completed credit request to <supportcredits@github.com>. To be eligible, the credit request must:
- Be sent from an email address associated with your account on {% ifversion ghae %}{% data variables.product.product_name %}{% else %}{% data variables.location.product_location %}{% endif %}
- Be received by {% data variables.product.company_short %} by the end of the 30th day after the quarter in which the four qualifying credits occurred
- Include "Credit Request" in the subject line

The following information **must be included** in your credit request:
- **Date** (The date must be within 30 days after the quarter based on {% data variables.product.company_short %}’s fiscal year end in which the claims occurred [January 31, April 30, July 31, or October 31].)
- **Customer contact** (You must specify both name and email address.)
- **Customer address**
- **Qualifying credits** (You must provide the date of each qualifying credit and the associated ticket number.){% ifversion fpt or ghec %}
- **Name of {% data variables.product.prodname_ghe_cloud %} organization**{% endif %}
- **Ticket numbers**

## Accessing premium content

You can access premium content by signing in to the {% data variables.contact.contact_landing_page_portal %}.
