---
title: Creating a support ticket
intro: 'You can use the {% data variables.contact.landing_page_portal %} to create a support ticket and speak to {% data variables.contact.github_support %}.'
shortTitle: Creating a ticket
versions:
  fpt: '*'
  ghec: '*'
  ghes: '*'
redirect_from:
  - /enterprise/admin/enterprise-support/preparing-to-submit-a-ticket
  - /admin/enterprise-support/preparing-to-submit-a-ticket
  - /admin/enterprise-support/receiving-help-from-github-support/preparing-to-submit-a-ticket
  - /enterprise/admin/guides/enterprise-support/reaching-github-enterprise-support
  - /enterprise/admin/enterprise-support/reaching-github-support
  - /admin/enterprise-support/reaching-github-support
  - /admin/enterprise-support/receiving-help-from-github-support/reaching-github-support
  - /enterprise/admin/enterprise-support/submitting-a-ticket
  - /admin/enterprise-support/submitting-a-ticket
  - /admin/enterprise-support/receiving-help-from-github-support/submitting-a-ticket
  - /articles/submitting-a-ticket
  - /github/working-with-github-support/submitting-a-ticket
topics:
  - Support
---

## About support tickets

{% ifversion fpt %}
{% data reusables.support.free-and-paid-support %}

To share feedback with {% data variables.product.company_short %}, you can use the {% data variables.contact.community_feedback_discussions %}. For more information, see "[AUTOTITLE](/support/sharing-feedback-with-github)."
{% endif %}

{% ifversion ghes or ghec %}
{% data reusables.enterprise-accounts.support-entitlements %}
{% endif %}

{% ifversion ghes %}
You can create your ticket using the {% data variables.contact.landing_page_portal %} or, if you would like to include diagnostics with your support ticket, you can use the GitHub Enterprise Server Management Console.
{% endif %}

{% data reusables.support.zendesk-old-tickets %}

After you create your ticket, you can view your ticket and the responses from {% data variables.contact.github_support %} on the {% data variables.contact.contact_landing_page_portal %}. For more information, see "[AUTOTITLE](/support/contacting-github-support/viewing-and-updating-support-tickets)."

{% ifversion ghec or ghes %}

## Prerequisites

{% ifversion ghec %}If you use an enterprise account, there{% else %}There{% endif %} are some steps you should follow before you start using the {% data variables.contact.enterprise_portal %}. For more information, see "[Getting started with the {% data variables.contact.enterprise_portal %}](/support/contacting-github-support/getting-started-with-the-github-support-portal)."
{% endif%}

## What to include in your support ticket

{% data variables.contact.github_support %} does not have access to any private or internal {% data variables.product.company_short %} resources. Providing {% data variables.contact.github_support %} with everything they need to understand, locate, and reproduce an issue will allow for a faster resolution and less back-and-forth between yourself and the support team. To ensure {% data variables.contact.github_support %} can assist you, consider the following points when you write your ticket:

* Obtain information that can help {% data variables.contact.github_support %} track, prioritize, reproduce, or investigate the issue.
* Include full URLs, repository names, and usernames wherever possible.
* Reproduce the issue if applicable and be prepared to share the steps.
* Be prepared to provide a full description of the issue and expected results.
* Copy exact wording of all error messages related to your issue.
* Determine if there is an existing ticket number in any ongoing communications with {% data variables.contact.github_support %}.
* Include relevant logs and attach any screenshots that demonstrate the issue.

{% ifversion ghes %}

## Choosing a contact person

Especially for tickets with {% data variables.product.support_ticket_priority_urgent %} priority, the person contacting {% data variables.contact.github_support %} should:

* Be knowledgeable in your internal systems, tools, policies, and practices.
* Be a proficient user of {% data variables.product.product_name %}.
* Have full access and permissions to any services that are required to troubleshoot the issue.
* Be authorized to make the recommended changes to your network and any applicable products.

{% endif %}

## Creating a support ticket{% ifversion ghes %} using the {% data variables.contact.enterprise_portal %}{% endif %}

{% note %}

**Note:** Before you submit a ticket, you have the option of using {% data variables.product.prodname_copilot_in_support %} to receive an immediate response to your question. If {% data variables.product.prodname_copilot_in_support %} is unable to resolve your issue, you can continue submitting your ticket. For more information, see "[AUTOTITLE](/support/learning-about-github-support/about-copilot-in-github-support)."

{% endnote %}

1. Navigate to the {% data variables.contact.contact_landing_page_portal %} and choose one of the following options:

   * To sign in with your {% data variables.product.prodname_dotcom %} account, click **Sign in with {% data variables.product.prodname_dotcom %}**.
   * To sign up for {% data variables.product.prodname_dotcom %}, click **Sign up for {% data variables.product.prodname_dotcom %}**.
   * If you can't sign in or sign up, click **Can't sign in?** and fill out the form. You will be guided through an email verification process.{% ifversion ghec or ghes %} You will need to upload your {% data variables.product.prodname_enterprise %} license. For more information, see "[AUTOTITLE](/billing/managing-your-license-for-github-enterprise/downloading-your-license-for-github-enterprise)."{% endif %}

{% data reusables.support.submit-a-ticket %}

{% ifversion ghes %}

## Creating a ticket using the {% data variables.enterprise.management_console %}

{% data reusables.enterprise_site_admin_settings.access-settings %}
{% data reusables.enterprise_site_admin_settings.management-console %}
{% data reusables.enterprise_management_console.type-management-console-password %}
{% data reusables.enterprise_management_console.support-link %}

1. Choose one of the following options:

   * To sign in with your {% data variables.product.prodname_dotcom %} account, click **Sign in with {% data variables.product.prodname_dotcom %}**.
   * To sign up for {% data variables.product.prodname_dotcom %}, click **Sign up for {% data variables.product.prodname_dotcom %}**.
   * If you can't sign in or sign up, click **Can't sign in?** and fill out the form. You will be guided through an email verification process. You will need to upload your {% data variables.product.prodname_enterprise %} license. For more information, see "[AUTOTITLE](/billing/managing-your-license-for-github-enterprise/downloading-your-license-for-github-enterprise)."

1. If you'd like to include diagnostics with your support ticket, Under "Diagnostics", click **Download diagnostic info** and save the file locally. You'll attach this file to your support ticket later.
1. To complete your ticket and display the {% data variables.contact.enterprise_portal %}, under "Open Support Request", click **New support request**.
{% data reusables.support.submit-a-ticket %}

{% endif %}

## Further reading

* "[AUTOTITLE](/support/learning-about-github-support/about-github-support)"
