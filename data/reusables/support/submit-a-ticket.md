{% ifversion fpt %}
1. At the top of the page, under "How can we help?", choose a topic or click **open a support ticket**.
   {% note %}

   **Note:** You will only see the link to open a support ticket if your account uses a paid {% data variables.product.prodname_dotcom %} product or you are a member of an organization that uses a paid product. If you don't see the link, you can speak to {% data variables.product.prodname_dotcom %} users and staff on the {% data variables.contact.community_support_forum %} for most issues, and you can still contact {% data variables.contact.github_support %} to report account, security, and abuse issues.

   {% endnote %}
{%- endif %}
{% ifversion ghec or ghes %}
1. Select the **Select personal account, enterprise account or organization** dropdown menu and click the name of the account your support ticket is regarding.
   {% note %}

   **Notes:**
   * For Premium, Premium Plus, or Engineering Direct support, you need to choose an enterprise account with a {% data variables.contact.premium_support %} plan. If you don't see an Enterprises section in the dropdown menu, you're not entitled to open support tickets on behalf of an enterprise account. For more information, see "[AUTOTITLE](/support/learning-about-github-support/about-github-support#about-support-entitlement)"
   * To see a list of your enterprise accounts with a {% data variables.contact.premium_support %} plan, you must be signed into the {% data variables.contact.enterprise_portal %}. For more information, see "[AUTOTITLE](/support/contacting-github-support/getting-your-enterprise-started-with-the-github-support-portal)."

   {% endnote %}
{% endif %}
1. Select the **From** dropdown menu and click the email address you'd like {% data variables.contact.github_support %} to contact.

{%- ifversion ghec or ghes %}

   Adding CC emails to your ticket:
      - An admin or a support entitled user can add up to 10 additional email addresses to a ticket on CC directly from the ticket form.
     - To add more email addresses, loop them in directly via email.

   CC recipients’ abilities:
     - Those on CC can read every conversation and attachment related to the ticket.
     - They can also send a reply to the ticket.
  
   Support Portal visibility:
     - CCing an email address does not automatically display the ticket in the support portal for that email address.

   Admins, support entitled users:
      - Admins and support entitled users can view tickets created by members of their enterprise or organization on the portal. However, they still need to be CC’d on such tickets to be able to comment on them.
{%- endif %}

{%- ifversion ghec or ghes %}
1. Select the **Product** dropdown menu and click {% ifversion ghes %}**{% data variables.product.prodname_ghe_server %} (self-hosted)**{% else %}**{% data variables.product.prodname_ghe_cloud %}**{% endif %}.
{%- endif %}
{%- ifversion ghes %}
1. If prompted, select the **Server installation** dropdown menu and click the installation your support ticket is regarding. If the installation is not listed, click **Other**.
{%- endif %}
{%- ifversion ghes %}
1. Select the **Release series** dropdown menu and click the release {% data variables.location.product_location_enterprise %} is running.
{%- endif %}
{%- ifversion ghes or ghec %}
1. Select the **Type of Issue** dropdown menu and click the appropriate circumstance.
{%- endif %}
{%- ifversion ghes or ghec %}
1. Optionally, if your account includes {% data variables.contact.premium_support %} and your ticket is about a system failure or a critical outage currently blocking business operations in production, you can request a callback in English. Select **Request a callback from {% data variables.contact.github_support %}**, select the country code dropdown menu to choose your country, and enter your phone number.

   {% note %}

   **Note:** You will only receive a callback if required for ticket resolution.

   {% endnote %}
{%- endif %}
1. Under "Subject", type a descriptive title for the issue you're having.
1. Under "How can we help", provide any additional information that will help the Support team troubleshoot the problem. You can use markdown to format your message.

   Helpful information may include:
    * Steps to reproduce the issue
    * Any special circumstances surrounding the discovery of the issue (for example, the first occurrence or occurrence after a specific event, frequency of occurrence, business impact of the problem, and suggested urgency)
    * Exact wording of error messages

   You can attach files up to 50MB.{% ifversion ghes %} For larger attachments, such as support bundles, see "[AUTOTITLE](/support/contacting-github-support/providing-data-to-github-support#creating-and-sharing-support-bundles)."{% endif %}

      {% warning %}

      **Warning:** When you upload an image or video to a pull request or issue comment, or upload a file to a ticket in the {% data variables.contact.landing_page_portal %}, anyone can view the anonymized URL without authentication, even if the pull request or issue is in a private repository{% ifversion ghes %}, or if private mode is enabled{% endif %}. To keep sensitive media files private, serve them from a private network or server that requires authentication. {% ifversion fpt or ghec %}For more information on anonymized URLs see "[AUTOTITLE](/authentication/keeping-your-account-and-data-secure/about-anonymized-urls)."{% endif %}

      {% endwarning %}

{%- ifversion ghes %}
1. Optionally, attach diagnostics files and other files by dragging and dropping, uploading, or pasting from the clipboard.
{%- endif %}
1. Click **Send request**.
