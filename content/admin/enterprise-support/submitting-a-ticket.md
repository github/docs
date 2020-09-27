---
title: Submitting a ticket
intro: 'Submit a support ticket using the {{ site.data.variables.product.prodname_ghe_server }} {{ site.data.variables.enterprise.management_console }} or the support portal. You can mark a ticket as urgent when your {{ site.data.variables.product.prodname_ghe_server }} production system is down or in an unusable state.'
redirect_from:
  - /enterprise/admin/enterprise-support/submitting-a-ticket
versions:
  enterprise-server: '*'
---

### About submitting a ticket

Before submitting a ticket, you should gather helpful information for {{ site.data.variables.contact.github_support }} and choose a contact person. For more information, see "[Preparing to submit a ticket](/enterprise/admin/guides/enterprise-support/preparing-to-submit-a-ticket)."

After submitting your support request and optional diagnostic information, {{ site.data.variables.contact.github_support }} may ask you to download and share a support bundle with us. For more information, see "[Providing data to {{ site.data.variables.contact.github_support }}](/enterprise/admin/guides/enterprise-support/providing-data-to-github-support)."

### Submitting a ticket using the {{ site.data.variables.contact.enterprise_portal }}

1. Navigate to the {{ site.data.variables.contact.contact_enterprise_portal }}.
5. Click **Submit a Ticket**
  ![Submit a ticket to Enterprise Support team](/assets/images/enterprise/support/submit-ticket-button.png)
{{ site.data.reusables.enterprise_enterprise_support.submit-support-ticket-first-section }}
{{ site.data.reusables.enterprise_enterprise_support.submit-support-ticket-second-section }}

### Submitting a ticket using your enterprise account

{{ site.data.reusables.enterprise-accounts.access-enterprise }}
{{ site.data.reusables.enterprise-accounts.settings-tab }}
{{ site.data.reusables.enterprise-accounts.enterprise-licensing-tab }}
4. Under "{{ site.data.variables.product.prodname_enterprise }} Help", click **{{ site.data.variables.contact.enterprise_support }} Portal**.
  ![Link to navigate to Enterprise support site](/assets/images/enterprise/support/enterprise-support-link.png)
5. Click **Submit a Ticket**
  ![Submit a ticket to Enterprise Support team](/assets/images/enterprise/support/submit-ticket-button.png)
{{ site.data.reusables.enterprise_enterprise_support.submit-support-ticket-first-section }}
{{ site.data.reusables.enterprise_enterprise_support.submit-support-ticket-second-section }}

### Submitting a ticket using the {{ site.data.variables.product.prodname_ghe_server }} {{ site.data.variables.enterprise.management_console }}

{{ site.data.reusables.enterprise_site_admin_settings.access-settings }}
{{ site.data.reusables.enterprise_site_admin_settings.management-console }}
{{ site.data.reusables.enterprise_management_console.type-management-console-password }}
{{ site.data.reusables.enterprise_management_console.support-link }}
5. If you'd like to include diagnostics with your support ticket, Under "Diagnostics", click **Download diagnostic info** and save the file locally. You'll attach this file to your support ticket later.
  ![Button to download diagnostics info](/assets/images/enterprise/support/download-diagnostics-info-button.png)
6. Under "Open Support Request", click **New support request**.
  ![Button to open a support request](/assets/images/enterprise/management-console/open-support-request.png)
5. Click **Submit a Ticket**
  ![Submit a ticket to Enterprise Support team](/assets/images/enterprise/support/submit-ticket-button.png)
{{ site.data.reusables.enterprise_enterprise_support.submit-support-ticket-first-section }}
14. To include diagnostics with your support ticket, click **Add file**, then attach the diagnostics file you downloaded.
  ![Add file button](/assets/images/enterprise/support/support-ticket-add-file.png)
{{ site.data.reusables.enterprise_enterprise_support.submit-support-ticket-second-section }}
7. Click **Submit**.

### Further reading

- "[About {{ site.data.variables.contact.enterprise_support }}](/enterprise/admin/guides/enterprise-support/about-github-enterprise-support)"
- "[About {{ site.data.variables.contact.premium_support }} for {{ site.data.variables.product.prodname_ghe_server }}](/enterprise/admin/guides/enterprise-support/about-github-premium-support-for-github-enterprise-server)."
