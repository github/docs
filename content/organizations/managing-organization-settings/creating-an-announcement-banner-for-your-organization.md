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

{% ifversion ghec %}
{% note %}

**Note:** To create an announcement banner, your organization must use {% data variables.product.prodname_ghe_cloud %}. {% data reusables.enterprise.link-to-ghec-trial %}

{% endnote %}
{% endif %}

You can create an announcement banner that will be displayed to all organization members at the top of every page in the organization.

{% data reusables.enterprise.user-messages-markdown %}

You can also set announcement banners at the enterprise level. For more information, see "[AUTOTITLE](/admin/user-management/managing-users-in-your-enterprise/customizing-user-messages-for-your-enterprise)."

{% data reusables.profile.access_org %}
{% data reusables.profile.org_settings %}
1. In the "Messages" section of the sidebar, click **{% octicon "megaphone" aria-hidden="true" %} Announcement**.
1. Under "Announcement", in the text field, type the announcement you want displayed in a banner.
1. Optionally, under "Expires on", select the calendar drop-down menu and click an expiration date.

   {% note %}

   **Note:** Announcements must either have an expiration date, be user dismissible, or both.

   {% endnote %}
1. Optionally, to allow each user to dismiss the announcement, select **Allow users to dismiss the announcement**.
{% data reusables.enterprise_site_admin_settings.message-preview-save %}
