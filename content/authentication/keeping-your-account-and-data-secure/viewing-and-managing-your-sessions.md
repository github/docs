---
title: Viewing and managing your sessions
intro: You can view and revoke your active sessions in your settings.
versions:
  feature: device-and-settings-management-page
type: how_to
topics:
  - SSO
shortTitle: Viewing and managing sessions
---

You can view a list of devices that have logged into your account, and revoke any sessions that you don't recognize.

{% data reusables.user-settings.access_settings %}
{% data reusables.user-settings.sessions %}
1. Under "Web sessions", you can see your active web sessions.
{% ifversion fpt or ghec %}

   Under "{% data variables.product.prodname_mobile %} sessions", you can see a list of devices that have logged into your account via the {% data variables.product.prodname_mobile %} app.{% endif %}
1. To see the web session details, click **See more**.
1. To revoke a web session, click **Revoke session**.
{% ifversion fpt or ghec %}
1. Optionally, to revoke a {% data variables.product.prodname_mobile %} session, go back to the Sessions overview page and click **Revoke** next to the device you want to revoke.

    {% note %}

    **Note:** Revoking a mobile session signs you out of the {% data variables.product.prodname_mobile %} application on that device and removes it as a second-factor option.

    {% endnote %}

{% endif %}
