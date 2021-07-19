---
title: About GitHub Enterprise Support
intro: '{% data variables.contact.github_support %} can help you troubleshoot issues that arise on {% data variables.product.product_name %}.'
redirect_from:
  - /enterprise/admin/enterprise-support/about-github-enterprise-support
  - /admin/enterprise-support/about-github-enterprise-support
versions:
  ghes: '*'
  ghae: '*'
type: overview
topics:
  - Enterprise
  - Support
shortTitle: GitHub Enterprise Support
---
{% note %}

**Note**: {% data reusables.support.data-protection-and-privacy %}

{% endnote %}

## About {% data variables.contact.enterprise_support %}

{% data variables.product.product_name %} includes {% data variables.contact.enterprise_support %} in English{% ifversion ghes %} and Japanese{% endif %}.

{% ifversion ghes %}
You can contact {% data variables.contact.enterprise_support %} through {% data variables.contact.contact_enterprise_portal %} for help with:
 - Installing and using {% data variables.product.product_name %}
 - Identifying and verifying the causes of suspected errors

In addition to all of the benefits of {% data variables.contact.enterprise_support %}, {% data variables.contact.premium_support %} support for {% data variables.product.product_name %} offers:
  - Written support through our support portal 24 hours per day, 7 days per week
  - Phone support 24 hours per day, 7 days per week
  - A Service Level Agreement (SLA) with guaranteed initial response times
  - Customer Reliability Engineers 
  - Access to premium content
  - Scheduled health checks
  - Managed Admin hours
{% endif %}

{% ifversion ghes %}
For more information, see "[About {% data variables.contact.premium_support %} for {% data variables.product.prodname_ghe_server %}](/enterprise/admin/guides/enterprise-support/about-github-premium-support-for-github-enterprise-server)."
{% endif %}

{% data reusables.support.scope-of-support %}

## Contacting {% data variables.contact.enterprise_support %}

You can contact {% data variables.contact.enterprise_support %} through {% ifversion ghes %}{% data variables.contact.contact_enterprise_portal %}{% elsif ghae %} the {% data variables.contact.ae_azure_portal %}{% endif %} to report issues in writing. For more information, see "[Receiving help from {% data variables.contact.github_support %}](/admin/enterprise-support/receiving-help-from-github-support)."

{% ifversion ghes %}
## Hours of operation

### Support in English

For standard non-urgent issues, we offer support in English 24 hours per day, 5 days per week, excluding weekends and national U.S. holidays. The standard response time is 24 hours.

For urgent issues, we are available 24 hours per day, 7 days per week, even during national U.S. holidays.

### Support in Japanese

For non-urgent issues, support in Japanese is available Monday through Friday from 9:00 AM to 5:00 PM JST, excluding national holidays in Japan. For urgent issues, we offer support in English 24 hours per day, 7 days per week, even during national U.S. holidays.

For a complete list of U.S. and Japanese national holidays observed by {% data variables.contact.enterprise_support %}, see "[Holiday schedules](#holiday-schedules)."

## Holiday schedules

For urgent issues, we can help you in English 24 hours per day, 7 days per week, including on U.S. and Japanese holidays.

### Holidays in the United States

{% data variables.contact.enterprise_support %} observes these U.S. holidays, although our global support team is available to answer urgent tickets.

| U.S. holiday                | Date observed |
| ---                         | ---                         |
| New Year's Day              | January 1                   |
| Martin Luther King, Jr. Day | Third Monday in January     |
| Presidents' Day             | Third Monday in February    |
| Memorial Day                | Last Monday in May          |
| Independence Day            | July 4                      |
| Labor Day                   | First Monday in September   |
| Veterans Day                | November 12                 |
| Thanksgiving Day            | Fourth Thursday in November |
| Day after Thanksgiving      | Fourth Friday in November   |
| Christmas Eve               | December 24                 |
| Christmas Day               | December 25                 |
| Day after Christmas         | December 28                 |
| New Year's Eve              | December 31                 |

### Holidays in Japan

{% data variables.contact.enterprise_support %} does not provide Japanese-language support on December 28th through January 3rd as well as on the holidays listed in [国民の祝日について - 内閣府](https://www8.cao.go.jp/chosei/shukujitsu/gaiyou.html).

{% data reusables.enterprise_enterprise_support.installing-releases %}
{% endif %}

## Assigning a priority to a support ticket

When you contact {% data variables.contact.enterprise_support %}, you can choose one of four priorities for the ticket: {% data variables.product.support_ticket_priority_urgent %}, {% data variables.product.support_ticket_priority_high %}, {% data variables.product.support_ticket_priority_normal %}, or {% data variables.product.support_ticket_priority_low %}.

{% data reusables.support.github-can-modify-ticket-priority %}

{% ifversion ghes %}
{% data reusables.support.ghes-priorities %}
{% elsif ghae %}
{% data reusables.support.ghae-priorities %}
{% endif %}

## Resolving and closing support tickets

{% data reusables.support.enterprise-resolving-and-closing-tickets %}

## Further reading

{% ifversion ghes %}
- Section 10 on Support in the "[{% data variables.product.prodname_ghe_server %} License Agreement](https://enterprise.github.com/license)"{% endif %}
- "[Receiving help from {% data variables.contact.github_support %}](/admin/enterprise-support/receiving-help-from-github-support)"{% ifversion ghes %}
- "[Preparing to submit a ticket](/enterprise/admin/guides/enterprise-support/preparing-to-submit-a-ticket)"{% endif %}
- "[Submitting a ticket](/enterprise/admin/guides/enterprise-support/submitting-a-ticket)"
