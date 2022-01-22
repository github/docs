1. Select the **Account or organization** dropdown menu and click the name of the account your support ticket is regarding.
![Screenshot of the "Account or organization" dropdown menu.](/assets/images/help/support/account-field.png)
1. Select the **From** drop-down menu and click the email address you'd like {% data variables.contact.github_support %} to contact.
![Screenshot of the "From" dropdown menu.](/assets/images/help/support/from-field.png)
{%- ifversion ghec or ghes %}
1. Select the **Product** dropdown menu and click {% ifversion ghes %}**GitHub Enterprise Server (self-hosted)**{% else %}**GitHub Enterprise Cloud**{% endif %}.
{% ifversion ghec %}![Screenshot of the "Product" dropdown menu.](/assets/images/help/support/product-field-ghec.png){% else %}![Screenshot of the "Product" dropdown menu.](/assets/images/help/support/product-field.png){% endif %}
{%- endif %}
{%- ifversion ghes %}
1. If prompted, select the **Server installation** dropdown menu and click the installation your support ticket is regarding. If the installation is not listed, click **Other**.
![Screenshot of the "Server Installation" dropdown menu](/assets/images/help/support/installation-field.png)
{%- endif %}
{%- ifversion ghes %}
1. Select the **Release series** dropdown menu and click the release {% data variables.product.product_location_enterprise %} is running.
![Screenshot of the "Release series" dropdown menu](/assets/images/help/support/release-field.png)
{%- endif %}
{%- ifversion ghes or ghec %}
1. Select the **Priority** dropdown menu and click the appropriate urgency. For more information, see "[About ticket priority](/support/learning-about-github-support/about-ticket-priority)."
  ![Screenshot of the "Priority" dropdown menu.](/assets/images/help/support/priority-field.png)
{%- endif %}
{%- ifversion ghes %}
    - Choose **{% data variables.product.support_ticket_priority_urgent %}** to report {% ifversion fpt or ghec %}critical system failure{% else %}fatal system failures, outages impacting critical system operations, security incidents, and expired licenses{% endif %}.
    - Choose **{% data variables.product.support_ticket_priority_high %}** to report issues impacting business operations, including {% ifversion fpt or ghec %}removing sensitive data (commits, issues, pull requests, uploaded attachments) from your own accounts and organization restorations{% else %}system performance issues{% endif %}, or to report critical bugs.
    - Choose **{% data variables.product.support_ticket_priority_normal %}** to {% ifversion fpt or ghec %}request account recovery or spam unflagging, report user login issues{% else %}make technical requests like configuration changes and third-party integrations{% endif %}, and to report non-critical bugs.
    - Choose **{% data variables.product.support_ticket_priority_low %}** to ask general questions and submit requests for new features, purchases, training, or health checks.
{%- endif %}
{%- ifversion ghes or ghec %}
1. Optionally, if your account includes {% data variables.contact.premium_support %} and your ticket is {% ifversion ghes %}urgent or high{% elsif ghec %}high{% endif %} priority, you can request a callback in English. Select **Request a callback from GitHub Support**, select the country code dropdown menu to choose your country, and enter your phone number.
![Screenshot of the "Request callback" checkbox, "Country code" dropdown menu, and "Phone number" text box.](/assets/images/help/support/request-callback.png)
{%- endif %}
1. Under "Subject", type a descriptive title for the issue you're having.
![Screenshot of the "Subject" text box.](/assets/images/help/support/subject-field.png)
1. Under "How can we help", provide any additional information that will help the Support team troubleshoot the problem. You can use markdown to format your message.
  ![Screenshot of the "How can we help" text area.](/assets/images/help/support/how-can-we-help-field.png)
   Helpful information may include:
    - Steps to reproduce the issue
    - Any special circumstances surrounding the discovery of the issue (for example, the first occurrence or occurrence after a specific event, frequency of occurrence, business impact of the problem, and suggested urgency)
    - Exact wording of error messages
{%- ifversion ghes %}
1. Optionally, attach diagnostics files and other files by dragging and dropping, uploading, or pasting from the clipboard.
{%- endif %}
1. Click **Send request**.
![Screenshot of the "Send request" button.](/assets/images/help/support/send-request-button.png)