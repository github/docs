1. Under "Your email address", type the email address associated with your {% data variables.product.product_name %} account.
  ![Your email address field](/assets/images/enterprise/support/support-ticket-email-address-field.png)
1. Under "Subject", type a descriptive title for your issue.
  ![Subject field](/assets/images/enterprise/support/support-ticket-subject-field.png)
1. Under "Description", provide any additional information that will help the {% data variables.contact.enterprise_support %} team troubleshoot the problem. Helpful information may include:
    ![Description field](/assets/images/enterprise/support/support-ticket-description-field.png)
    - Steps to reproduce the issue
    - Any special circumstances surrounding the discovery of the issue (for example, the first occurrence or occurrence after a specific event, frequency of occurrence, business impact of the problem, and suggested urgency)
    - Exact wording of error messages
1. From the {% data variables.product.prodname_enterprise %} Product drop-down menu, select {% if currentVersion == "free-pro-team@latest" %}{% data variables.product.prodname_ghe_cloud %}{% else %}{% data variables.product.prodname_ghe_server %}{% endif %}.
  ![Priority drop-down menu](/assets/images/enterprise/support/support-ticket-ghe-product.png)
1. From the "Priority" drop-down menu, select the appropriate urgency. For more information, see "[Assigning a priority to a support ticket]{% if currentVersion == "free-pro-team@latest" %}(/articles/about-github-premium-support-for-github-enterprise-cloud#assigning-a-priority-to-a-support-ticket){% else %}(/enterprise/admin/guides/enterprise-support/about-github-enterprise-support#assigning-a-priority-to-a-support-ticket){% endif %}."
    ![Priority drop-down menu](/assets/images/enterprise/support/support-ticket-priority.png)
    - Choose **{% data variables.product.support_ticket_priority_urgent %}** to report {% if currentVersion == "free-pro-team@latest" %}critical system failure{% else %}fatal system failures, outages impacting critical system operations, security incidents, and expired licenses{% endif %}.
    - Choose **{% data variables.product.support_ticket_priority_high %}** to report issues impacting business operations, including {% if currentVersion == "free-pro-team@latest" %}removing sensitive data (commits, issues, pull requests, uploaded attachments) from your own accounts and organization restorations{% else %}system performance issues{% endif %}, or to report critical bugs.
    - Choose **{% data variables.product.support_ticket_priority_normal %}** to {% if currentVersion == "free-pro-team@latest" %}request account recovery or spam unflagging, report user login issues{% else %}make technical requests like configuration changes and third-party integrations{% endif %}, and to report non-critical bugs.
    - Choose **{% data variables.product.support_ticket_priority_low %}** to ask general questions and submit requests for new features, purchases, training, or health checks.{% if currentVersion != "free-pro-team@latest" %}
1. From the "{% data variables.product.prodname_enterprise %} Series" drop-down menu, select the version of {% data variables.product.prodname_ghe_server %} you're using.
  ![{% data variables.product.prodname_enterprise %} Series drop-down menu](/assets/images/enterprise/support/support-ticket-ghes-series.png)
{% endif %}
1. From the "Global Region" drop-down menu, select APAC (Asia Pacific), EMEA (Europe, the Middle East, and Africa), or Americas as your region.
  ![Global Region drop-down menu](/assets/images/enterprise/support/support-ticket-global-region.png)
1. Click **Add file**, then attach the diagnostics file you downloaded to include diagnostics with your support ticket.
  ![Add file button](/assets/images/enterprise/support/support-ticket-add-file.png)
