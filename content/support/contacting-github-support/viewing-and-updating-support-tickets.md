---
title: Viewing and updating support tickets
intro: 'You can view your support tickets{% ifversion ghes or ghec %}, collaborate with colleagues on tickets,{% endif %} and respond to {% data variables.contact.github_support %} using the {% data variables.contact.landing_page_portal %}.'
shortTitle: View and update tickets
versions:
  fpt: '*'
  ghec: '*'
  ghes: '*'
topics:
  - Support
---

## About ticket management

{% data reusables.support.support-portal-notes %}

{% data reusables.support.zendesk-old-tickets %}

You can use the {% data variables.contact.contact_landing_page_portal %} to view current and past support tickets and respond to {% data variables.contact.github_support %}. After 120 days, resolved tickets are archived{% ifversion ghec or ghes %}, and archived tickets can only be viewed for enterprise accounts{% endif %}.

Your capabilities in the {% data variables.contact.landing_page_portal %} depend on the account you select when you submit a ticket.{% ifversion ghes or ghec %} If you select an enterprise account, your role in the enterprise also affects your capabilities.

{% data reusables.enterprise-accounts.support-entitlements %}
{% endif %}

## Viewing your recent support tickets

{% data reusables.support.view-open-tickets %}
1. Under the text box, you can read the comment history. The most recent response is at the top.
1. Optionally, to translate the ticket comment, click {% octicon "globe" aria-label="The globe icon" %} and choose your preferred language from the dropdown menu. You can translate your support ticket into Chinese (Simplified), French, German, Japanese, Portuguese (Brazil), or Spanish.

   ![Screenshot of a support ticket with the dropdown menu showing the options for translation highlighted with a dark orange outline.](/assets/images/help/support/support-ticket-translation-options.png)

{% ifversion ghec or ghes %}

## Viewing your archived support tickets

You can only view archived tickets for an enterprise account.

{% data reusables.support.navigate-to-my-tickets %}
1. Select the **My Tickets** drop-down menu and click the name of the enterprise account.

{% indented_data_reference reusables.support.entitlements-note spaces=3 %}

   ![Screenshot showing the "My Tickets" dropdown menu highlighted in dark orange.](/assets/images/help/support/ticket-context.png)
1. Under the "My tickets" table, click **View archived tickets**.

{% endif %}

## Updating support tickets

{% data reusables.support.view-open-tickets %}
1. Optionally, if the issue is resolved, under the text box, click **Close ticket**.
1. To respond to GitHub Support and add a new comment to the ticket, type your response in the text box.
![Screenshot of the "Add a comment" text field, highlighted in dark orange.](/assets/images/help/support/new-comment-field.png)
1. To add your comment to the ticket, under the text box, click **Comment**.

{% ifversion ghec or ghes %}

## Collaborating on support tickets

You can collaborate with your colleagues on support tickets using the support portal. Owners, billing managers, and other enterprise members with support entitlements can view tickets associated with an enterprise account or an organization managed by an enterprise account. For more information, see "[AUTOTITLE](/enterprise-cloud@latest/admin/user-management/managing-users-in-your-enterprise/managing-support-entitlements-for-your-enterprise)."

You can also comment on tickets opened by someone else and associated with your enterprise account. {% data reusables.support.enterprise-comment-on-support-tickets %}

## Requesting a callback

If your account includes {% data variables.contact.premium_support %}, you can request a callback for urgent or high priority tickets. From the ticket, click **Request a callback from GitHub Support**.

## Requesting an escalation

If your account includes {% data variables.contact.premium_support %}, you can request to escalate a ticket if it was opened at a lower priority but the issue has become more urgent. From the ticket, click **Request an escalation**. For more information about requesting an escalation, see "[AUTOTITLE](/support/learning-about-github-support/about-github-premium-support#assigning-a-priority-to-a-support-ticket)".

{% endif %}

## Further reading

* "[AUTOTITLE](/support/learning-about-github-support/about-github-support)"
