---
title: Customizing user messages for your enterprise
shortTitle: Customizing user messages
redirect_from:
  - /enterprise/admin/user-management/creating-a-custom-sign-in-message/
  - /enterprise/admin/user-management/customizing-user-messages-on-your-instance
  - /admin/user-management/customizing-user-messages-on-your-instance
  - /admin/user-management/customizing-user-messages-for-your-enterprise
intro: 'You can create custom messages that users will see on {% data variables.product.product_location %}.'
versions:
  ghes: '*'
  ghae: '*'
type: how_to
topics:
  - Enterprise
  - Maintenance
---
## About user messages

There are several types of user messages.
- Messages that appear on the {% ifversion ghes %}sign in or {% endif %}sign out page{% ifversion ghes > 2.22 or ghae %}
- Mandatory messages, which appear once in a pop-up window that must be dismissed{% endif %}{% ifversion ghes > 2.21 or ghae %}
- Announcement banners, which appear at the top of every page{% endif %}

{% ifversion ghes %}
{% note %}

**Note:** If you are using SAML for authentication, the sign in page is presented by your identity provider and is not customizable via {% data variables.product.prodname_ghe_server %}.

{% endnote %}

You can use Markdown to format your message. For more information, see "[About writing and formatting on {% data variables.product.prodname_dotcom %}](/articles/about-writing-and-formatting-on-github/)."

## Creating a custom sign in message

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.settings-tab %}
{% data reusables.enterprise-accounts.messages-tab %}
5. {% ifversion ghes > 2.22 %}To the right of{% else %}Under{% endif %} "Sign in page", click **Add message** or **Edit message**.
![{% ifversion ghes > 2.22 %}Add{% else %}Edit{% endif %} message button](/assets/images/enterprise/site-admin-settings/edit-message.png)
6. Under **Sign in message**, type the message you'd like users to see.
![Sign in message](/assets/images/enterprise/site-admin-settings/sign-in-message.png){% ifversion ghes > 2.22 %}
{% data reusables.enterprise_site_admin_settings.message-preview-save %}{% else %}
{% data reusables.enterprise_site_admin_settings.click-preview %}
  ![Preview button](/assets/images/enterprise/site-admin-settings/sign-in-message-preview-button.png)
8. Review the rendered message.
![Sign in message rendered](/assets/images/enterprise/site-admin-settings/sign-in-message-rendered.png)
{% data reusables.enterprise_site_admin_settings.save-changes %}{% endif %}
{% endif %}

## Creating a custom sign out message

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.settings-tab %}
{% data reusables.enterprise-accounts.messages-tab %}
5. {% ifversion ghes > 2.22 or ghae %}To the right of{% else %}Under{% endif %} "Sign out page", click **Add message** or **Edit message**.
![Add message button](/assets/images/enterprise/site-admin-settings/sign-out-add-message-button.png)
6. Under **Sign out message**, type the message you'd like users to see.
![Sign two_factor_auth_header message](/assets/images/enterprise/site-admin-settings/sign-out-message.png){% ifversion ghes > 2.22 or ghae %}
{% data reusables.enterprise_site_admin_settings.message-preview-save %}{% else %}
{% data reusables.enterprise_site_admin_settings.click-preview %}
  ![Preview button](/assets/images/enterprise/site-admin-settings/sign-out-message-preview-button.png)
8. Review the rendered message.
![Sign out message rendered](/assets/images/enterprise/site-admin-settings/sign-out-message-rendered.png)
{% data reusables.enterprise_site_admin_settings.save-changes %}{% endif %}

{% ifversion ghes > 2.22 or ghae %}
## Creating a mandatory message

You can create a mandatory message that {% data variables.product.product_name %} will show to all users the first time they sign in after you save the message. The message appears in a pop-up window that the user must dismiss before the user can use {% data variables.product.product_location %}. 

Mandatory messages have a variety of uses.

- Providing onboarding information for new employees
- Telling users how to get help with {% data variables.product.product_location %}
- Ensuring that all users read your terms of service for using {% data variables.product.product_location %}

If you include Markdown checkboxes in the message, all checkboxes must be selected before the user can dismiss the message. For example, if you include your terms of service in the mandatory message, you can require that each user selects a checkbox to confirm the user has read the terms.

Each time a user sees a mandatory message, an audit log event is created. The event includes the version of the message that the user saw. For more information see "[Audited actions](/admin/user-management/audited-actions)."

{% note %}

**Note:** If you change the mandatory message for {% data variables.product.product_location %}, users who have already acknowledged the message will not see the new message.

{% endnote %}

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.settings-tab %}
{% data reusables.enterprise-accounts.messages-tab %}
1. To the right of "Mandatory message", click **Add message**.
  ![Add message button](/assets/images/enterprise/site-admin-settings/add-mandatory-message-button.png)
1. Under "Mandatory message", in the text box, type your message.
  ![Add message button](/assets/images/enterprise/site-admin-settings/mandatory-message-text-box.png)
{% data reusables.enterprise_site_admin_settings.message-preview-save %}

{% endif %}

{% ifversion ghes > 2.21 or ghae %}
## Creating a global announcement banner

You can set a global announcement banner to be displayed to all users at the top of every page.

{% ifversion ghae or ghes > 2.22 %}
You can also set an announcement banner{% ifversion ghes %} in the administrative shell using a command line utility or{% endif %} using the API. For more information, see {% ifversion ghes %}"[Command-line utilities](/enterprise/admin/configuration/command-line-utilities#ghe-announce)" and {% endif %}"[{% data variables.product.prodname_enterprise %} administration](/rest/reference/enterprise-admin#announcements)."
{% else %}

You can also set an announcement banner in the administrative shell using a command line utility. For more information, see "[Command-line utilities](/enterprise/admin/configuration/command-line-utilities#ghe-announce)."

{% endif %}

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.settings-tab %}
{% data reusables.enterprise-accounts.messages-tab %}
1. {% ifversion ghes > 2.22 or ghae %}To the right of{% else %}Under{% endif %} "Announcement", click **Add announcement**.
  ![Add announcement button](/assets/images/enterprise/site-admin-settings/add-announcement-button.png)
1. Under "Announcement", in the text field, type the announcement you want displayed in a banner.
  ![Text field to enter announcement](/assets/images/enterprise/site-admin-settings/announcement-text-field.png)
1. Optionally, under "Expires on", select the calendar drop-down menu and click an expiration date.
  ![Calendar drop-down menu to choose expiration date](/assets/images/enterprise/site-admin-settings/expiration-drop-down.png)
{% data reusables.enterprise_site_admin_settings.message-preview-save %}
{% endif %}
