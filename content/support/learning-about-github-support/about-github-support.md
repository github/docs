---
title: About GitHub Support
intro: You can contact GitHub Support for help troubleshooting issues you encounter while using GitHub.
shortTitle: About GitHub Support
versions:
  fpt: '*'
  ghec: '*'
  ghes: '*'
redirect_from:
  - /enterprise/admin/enterprise-support/about-github-enterprise-support
  - /admin/enterprise-support/about-github-enterprise-support
  - /admin/enterprise-support/overview/about-github-enterprise-support
  - /articles/about-github-support
  - /github/working-with-github-support/about-github-support
  - /articles/github-enterprise-cloud-support
  - /github/working-with-github-support/github-enterprise-cloud-support
  - /articles/business-plan-support
  - /articles/github-business-cloud-support
  - /admin/enterprise-support/about-support-for-advanced-security
  - /enterprise-server/admin/enterprise-support/about-support-for-advanced-security
topics:
  - Support
---

## About {% data variables.contact.github_support %}

The support options available to {% data variables.product.prodname_dotcom %} users depend on the products used by their personal accounts,  any organizations or enterprises they are members of, and any {% data variables.product.prodname_ghe_server %} instances they manage. Each product includes a default level of support and accounts that use {% data variables.product.prodname_enterprise %} can purchase {% data variables.contact.premium_support %}.

{% rowheaders %}

|  | {% data variables.product.prodname_gcf %} | Standard support | Enterprise support | Premium support |
|---|---|---|---|---|
| {% data variables.product.prodname_free_user %} | {% octicon "check" aria-label="Available" %} | {% octicon "x" aria-label="Not available" %} | {% octicon "x" aria-label="Not available" %} | {% octicon "x" aria-label="Not available" %} |
| {% data variables.product.prodname_pro %} | {% octicon "check" aria-label="Available" %} | {% octicon "check" aria-label="Available" %} | {% octicon "x" aria-label="Not available" %} | {% octicon "x" aria-label="Not available" %} |
| {% data variables.product.prodname_team %} | {% octicon "check" aria-label="Available" %} | {% octicon "check" aria-label="Available" %} | {% octicon "x" aria-label="Not available" %} | {% octicon "x" aria-label="Not available" %} |
| {% data variables.product.prodname_ghe_cloud %} | {% octicon "check" aria-label="Available" %} | {% octicon "x" aria-label="Not available" %} | {% octicon "check" aria-label="Available" %} | Available to purchase |
| {% data variables.product.prodname_ghe_server %} | {% octicon "check" aria-label="Available" %} | {% octicon "x" aria-label="Not available" %} | {% octicon "check" aria-label="Available" %} | Available to purchase |

{% endrowheaders %}

{% ifversion ghes %}

You can contact {% data variables.contact.enterprise_support %} through the {% data variables.contact.contact_enterprise_portal %} for help with:
* Installing and using {% data variables.product.product_name %}
* Identifying and verifying the causes of suspected errors
* Installing and using {% data variables.product.prodname_advanced_security %}

{% endif %}

{% ifversion ghes or ghec %}

{% data reusables.support.premium-support-features %}

For more information, see "[AUTOTITLE](/support/learning-about-github-support/about-github-premium-support)."

{% endif %}

{% ifversion fpt or ghec %}

Before contacting {% data variables.contact.github_support %}, check if there are currently any incidents affecting services on {% data variables.product.product_name %} on [{% data variables.product.prodname_dotcom %} Status](https://githubstatus.com/). For more information, see "[About GitHub status](#about-github-status)."

{% endif %}

{% ifversion fpt %}
{% data reusables.support.free-and-paid-support %}

To report account, security, and abuse issues, or to receive assisted support for a paid account, visit the {% data variables.contact.contact_landing_page_portal %}. For more information, see "[AUTOTITLE](/support/contacting-github-support/creating-a-support-ticket)."
{% endif %}

{% ifversion fpt %}
You can contact {% data variables.contact.github_support %} in English.
{% else %}
With {% data variables.product.product_name %}, you have access to support in English and Japanese.
{% endif %}

{% data reusables.support.support-ticket-translation-option %}

{% ifversion ghes or ghec %}

To contact {% data variables.contact.github_support %}, visit the {% data variables.contact.contact_landing_page_portal %}. For more information, see "[AUTOTITLE](/support/contacting-github-support/creating-a-support-ticket)."

{% endif %}

Email communication from GitHub Support will always be sent from either a `github.com` or `githubsupport.com` address.

## Scope of support

{% data reusables.support.scope-of-support %}

{% ifversion ghec or fpt %}

## About GitHub status

You can check for any incidents currently affecting {% data variables.product.product_name %} services and view information about past incidents on {% data variables.product.prodname_dotcom %}'s [Status page]({% ifversion fpt or ghec %}https://githubstatus.com{% endif %}).

You can also subscribe and get alerted via email, text message, and webhook whenever there's an incident affecting {% data variables.product.product_name %}.

You can also use the {% data variables.product.company_short %} Status API to check for incidents. For more information, see [{% data variables.product.company_short %} Status API](https://www.githubstatus.com/api/).

{% endif %}

{% ifversion ghec or ghes %}

## About support entitlement

Enterprise owners and billing managers automatically have a support entitlement, which enables them to create, view, and comment on support tickets associated with their enterprise account.

Enterprise owners can also add support entitlements to members of organizations owned by their enterprise account, allowing those members to create, view, and comment on support tickets. For more information, see "[AUTOTITLE](/enterprise-cloud@latest/admin/user-management/managing-users-in-your-enterprise/managing-support-entitlements-for-your-enterprise)."

{% endif %}

## About {% data variables.product.prodname_copilot_in_support %}

You can receive answers to questions relating to {% data variables.product.prodname_dotcom %}'s products and features before submitting a support ticket by using {% data variables.product.prodname_copilot_in_support %}. {% data variables.product.prodname_copilot_in_support %} is an AI-powered tool that uses a large language model to find answers to a wide variety of support queries. If {% data variables.product.prodname_copilot_in_support %} cannot answer your question, You can proceed with submitting your ticket to {% data variables.contact.github_support %}. For more information, see "[AUTOTITLE](/support/learning-about-github-support/about-copilot-in-github-support)."

{% ifversion fpt or ghec %}

## Granting {% data variables.contact.github_support %} temporary access to a private repository

If {% data variables.contact.github_support %} needs to access a private repository to address your support request, the owner of the repository will receive an email with a link to accept or decline temporary access. The owner will have 20 days to accept or decline the request before the request expires. If the owner accepts the request, {% data variables.contact.github_support %} will have access to the repository for five days. During this window, {% data variables.contact.github_support %} staff with the required privileges can unlock the repository for up to two hours at a time, and will relock the repository if the work is completed early. All {% data variables.contact.github_support %} staff access generates audit log events, and the visibility of the repository is not affected at any time.

{% data variables.contact.github_support %} will never access your private repositories without your explicit consent. For more information, see the [Terms of Service](/free-pro-team@latest/site-policy/github-terms/github-terms-of-service#3-access).
{% endif %}

{% ifversion ghec or ghes %}

## Contacting GitHub Sales and GitHub Training

For pricing, licensing, renewals, quotes, payments, and other related questions, contact {% data variables.contact.contact_enterprise_sales %}.

To learn more about training options, including customized trainings, see [{% data variables.product.company_short %}'s training site](https://services.github.com/).

{% note %}

**Note:** Training is included in the {% data variables.product.premium_plus_support_plan %}. For more information, see "[AUTOTITLE](/support/learning-about-github-support/about-github-premium-support)."

{% endnote %}

{% endif %}

{% ifversion ghes or ghec %}

## Hours of operation

### Support in English

For standard non-urgent issues, we offer support in English 24 hours per day, 5 days per week, excluding weekends and national U.S. holidays. The standard response time is 24 hours.

{% ifversion ghes %}
For urgent issues, we are available 24 hours per day, 7 days per week, even during national U.S. holidays.
{% endif %}

### Support in Japanese

For standard non-urgent issues, support in Japanese is available Monday through Friday from 9:00 AM to 5:00 PM JST, excluding national holidays in Japan.

{% ifversion ghes %}
For urgent issues, we offer support in English 24 hours per day, 7 days per week, even during national U.S. holidays.
{% endif %}

For a complete list of U.S. and Japanese national holidays observed by {% data variables.contact.enterprise_support %}, see "[Holiday schedules](#holiday-schedules)."

## Holiday schedules

For urgent issues, we can help you in English 24 hours per day, 7 days per week, including on U.S. and Japanese holidays.

### Holidays in the United States

{% data variables.contact.enterprise_support %} observes these U.S. holidays, although our global support team is available to answer urgent tickets.

{% data reusables.enterprise_enterprise_support.support-holiday-availability %}

### Holidays in Japan

{% data variables.contact.enterprise_support %} does not provide Japanese-language support on December 28th through January 3rd as well as on the holidays listed in [国民の祝日について - 内閣府](https://www8.cao.go.jp/chosei/shukujitsu/gaiyou.html).

{% data reusables.enterprise_enterprise_support.installing-releases %}

{% endif %}

{% ifversion ghec or ghes %}

## Resolving and closing support tickets

{% data reusables.support.enterprise-resolving-and-closing-tickets %}

{% endif %}

## Further reading

{%- ifversion ghes %}
* Section 10 on Support in the "[{% data variables.product.prodname_ghe_server %} License Agreement](https://enterprise.github.com/license)"
{%- endif %}
* "[AUTOTITLE](/support/contacting-github-support/creating-a-support-ticket)"
* "[AUTOTITLE](/support/contacting-github-support/viewing-and-updating-support-tickets)"
