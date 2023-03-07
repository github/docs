---
title: Creating an announcement banner for your organization
shortTitle: Create an announcement banner
intro: Organization owners can create announcement banners for the organization.
versions:
  feature: custom-banner-messages
type: how_to
topics:
  - Maintenance
---

You can create an announcement banner that will be displayed to all organization members at the top of every page in the organization.

{% data reusables.enterprise.user-messages-markdown %}

You can also set announcement banners at the enterprise level. For more information, see "[AUTOTITLE](/admin/user-management/managing-users-in-your-enterprise/customizing-user-messages-for-your-enterprise)."

{% data reusables.profile.access_org %}
{% data reusables.profile.org_settings %}
1. In the "Messages" section of the sidebar, click **{% octicon "megaphone" aria-label="The megaphone icon" %} Announcement**.
2. Under "Announcement", in the text field, type the announcement you want displayed in a banner.

   ![Screenshot of the text field to enter announcement](/assets/images/help/organizations/organization-announcement-text-field.png)
3. Optionally, under "Expires on", select the calendar drop-down menu and click an expiration date.

   {% note %}

   **Note:** Announcements must either have an expiration date, be user dismissible, or both.

   {% endnote %}

   ![Screenshot of the calendar drop-down menu to choose expiration date](/assets/images/enterprise/site-admin-settings/expiration-drop-down.png)
4. Optionally, to allow each user to dismiss the announcement, select **Allow users to dismiss the announcement**.

   ![Screenshot of the "Allow users to dismiss the announcement" checkbox](/assets/images/enterprise/site-admin-settings/allow-users-to-dismiss-announcement.png)
{% data reusables.enterprise_site_admin_settings.message-preview-save %}
