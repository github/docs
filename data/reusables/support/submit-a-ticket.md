1. Select the **Account or organization** drop-down menu and click the name of your enterprise.
![Account field](/assets/images/help/support/account-field.png)
1. Select the **From** drop-down menu and click the email address you'd like {% data variables.contact.github_support %} to contact.
![Email field](/assets/images/help/support/from-field.png)
1. Select the **Product** drop-down menu and click **GitHub Enterprise Server (self-hosted)**.
![Product field](/assets/images/help/support/product-field.png)
1. Select the **Release series** drop-down menu and click the release {% data variables.product.product_location_enterprise %} is running.
![Release field](/assets/images/help/support/release-field.png)
1. Select the **Priority** drop-down menu and click the appropriate urgency. For more information, see "[Assigning a priority to a support ticket](/admin/enterprise-support/overview/about-github-enterprise-support#assigning-a-priority-to-a-support-ticket)."
  ![Priority field](/assets/images/help/support/priority-field.png)
    - Choose **{% data variables.product.support_ticket_priority_urgent %}** to report {% ifversion fpt or ghec %}critical system failure{% else %}fatal system failures, outages impacting critical system operations, security incidents, and expired licenses{% endif %}.
    - Choose **{% data variables.product.support_ticket_priority_high %}** to report issues impacting business operations, including {% ifversion fpt or ghec %}removing sensitive data (commits, issues, pull requests, uploaded attachments) from your own accounts and organization restorations{% else %}system performance issues{% endif %}, or to report critical bugs.
    - Choose **{% data variables.product.support_ticket_priority_normal %}** to {% ifversion fpt or ghec %}request account recovery or spam unflagging, report user login issues{% else %}make technical requests like configuration changes and third-party integrations{% endif %}, and to report non-critical bugs.
    - Choose **{% data variables.product.support_ticket_priority_low %}** to ask general questions and submit requests for new features, purchases, training, or health checks.
1. Under "Subject", type a descriptive title for the issue you're having.
![Subject field](/assets/images/help/support/subject-field.png)
5. Under "How can we help", provide any additional information that will help the Support team troubleshoot the problem. Helpful information may include:
  ![How can we help field](/assets/images/help/support/how-can-we-help-field.png)
    - Steps to reproduce the issue
    - Any special circumstances surrounding the discovery of the issue (for example, the first occurrence or occurrence after a specific event, frequency of occurrence, business impact of the problem, and suggested urgency)
    - Exact wording of error messages
6. Optionally, attach diagnostics files and other files by dragging and dropping, uploading, or pasting from the clipboard.
7. Click **Send request**.
![Send request button](/assets/images/help/support/send-request-button.png)