1. Select the **Select personal account, enterprise account or organization** dropdown menu and click the name of the account your support ticket is regarding.
{% ifversion ghec or ghes %}
   {% note %}

   **Notes:**
   - For Premium, Premium Plus, or Engineering Direct support, you need to choose an enterprise account with a {% data variables.contact.premium_support %} plan. If you don't see an Enterprises section in the dropdown menu, you're not entitled to open support tickets on behalf of an enterprise account. For more information, see "[AUTOTITLE](/support/learning-about-github-support/about-github-support#about-support-entitlement)"
   - To see a list of your enterprise accounts with a {% data variables.contact.premium_support %} plan, you must be signed into the {% data variables.contact.enterprise_portal %}. For more information, see "[AUTOTITLE](/support/contacting-github-support/getting-your-enterprise-started-with-the-github-support-portal)."

   {% endnote %}
{% endif %}
1. Select the **From** dropdown menu and click the email address you'd like {% data variables.contact.github_support %} to contact.
{%- ifversion ghec or ghes %}
1. Select the **Product** dropdown menu and click {% ifversion ghes %}**GitHub Enterprise Server (self-hosted)**{% else %}**GitHub Enterprise Cloud**{% endif %}.
{%- endif %}
{%- ifversion ghes %}
1. If prompted, select the **Server installation** dropdown menu and click the installation your support ticket is regarding. If the installation is not listed, click **Other**.
{%- endif %}
{%- ifversion ghes %}
1. Select the **Release series** dropdown menu and click the release {% data variables.location.product_location_enterprise %} is running.
{%- endif %}
{%- ifversion ghes or ghec %}
1. Select the **Priority** dropdown menu and click the appropriate urgency. For more information, see "[AUTOTITLE](/support/learning-about-github-support/about-ticket-priority)."
{%- endif %}
{%- ifversion ghes %}
    - Choose **{% data variables.product.support_ticket_priority_urgent %}** to report {% ifversion fpt or ghec %}critical system failure{% else %}fatal system failures, outages impacting critical system operations, security incidents, and expired licenses{% endif %}.
    - Choose **{% data variables.product.support_ticket_priority_high %}** to report issues impacting business operations, including {% ifversion fpt or ghec %}removing sensitive data (commits, issues, pull requests, uploaded attachments) from your own accounts and organization restorations{% else %}system performance issues{% endif %}, or to report critical bugs.
    - Choose **{% data variables.product.support_ticket_priority_normal %}** to {% ifversion fpt or ghec %}request account recovery or spam unflagging, report user login issues{% else %}make technical requests like configuration changes and third-party integrations{% endif %}, and to report non-critical bugs.
    - Choose **{% data variables.product.support_ticket_priority_low %}** to ask general questions and submit requests for new features, purchases, training, or health checks.
{%- endif %}
{%- ifversion ghes or ghec %}
1. Optionally, if your account includes {% data variables.contact.premium_support %} and your ticket is {% ifversion ghes %}urgent or high{% elsif ghec %}high{% endif %} priority, you can request a callback in English. Select **Request a callback from GitHub Support**, select the country code dropdown menu to choose your country, and enter your phone number.

   {% note %}

   **Note:** You will only receive a callback if required for ticket resolution.

   {% endnote %}
{%- endif %}
1. Under "Subject", type a descriptive title for the issue you're having.
1. Under "How can we help", provide any additional information that will help the Support team troubleshoot the problem. You can use markdown to format your message.

   Helpful information may include:
    - Steps to reproduce the issue
    - Any special circumstances surrounding the discovery of the issue (for example, the first occurrence or occurrence after a specific event, frequency of occurrence, business impact of the problem, and suggested urgency)
    - Exact wording of error messages

   You can attach files up to 50MB.{% ifversion ghes %} For larger attachments, such as support bundles, see "[AUTOTITLE](/support/contacting-github-support/providing-data-to-github-support#creating-and-sharing-support-bundles)."{% endif %}

      {% warning %}

      **Warning:** When you upload an image or video to a pull request or issue comment, or upload a file to a ticket in the {% data variables.contact.landing_page_portal %}, anyone can view the anonymized URL without authentication, even if the pull request or issue is in a private repository{% ifversion ghes %}, or if private mode is enabled{% endif %}. To keep sensitive media files private, serve them from a private network or server that requires authentication. {% ifversion fpt or ghec %}For more information on anonymized URLs see "[AUTOTITLE](/authentication/keeping-your-account-and-data-secure/about-anonymized-urls)."{% endif %}

      {% endwarning %}

{%- ifversion ghes %}
1. Optionally, attach diagnostics files and other files by dragging and dropping, uploading, or pasting from the clipboard.
{%- endif %}
1. Click **Send request**.
