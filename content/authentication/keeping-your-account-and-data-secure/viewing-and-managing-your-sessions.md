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
   
   ![Screenshot of the list of active sessions](/assets/images/help/settings/saml-active-sessions.png)
{% ifversion fpt or ghec %}
   Under "{% data variables.product.prodname_mobile %} sessions", you can see a list of devices that have logged into your account via the {% data variables.product.prodname_mobile %} app.

   ![Screenshot of the list of active sessions](/assets/images/help/settings/github-mobile-active-sessions.png){% endif %}

1. To see the web session details, click **See more**.
   
   ![Screenshot of the Sessions page with the button to open session details emphasized](/assets/images/help/settings/saml-expand-session-details.png)

1. To revoke a web session, click **Revoke session**.
    
    ![Screenshot of the Sessions details page with the button to revoke a session emphasized](/assets/images/help/settings/revoke-session.png)

{% ifversion fpt or ghec %}
1. Optionally, to revoke a {% data variables.product.prodname_mobile %} session, go back to the Sessions overview page and click **Revoke** next to the device you want to revoke. 

    {% note %}

    **Note:** Revoking a mobile session signs you out of the {% data variables.product.prodname_mobile %} application on that device and removes it as a second-factor option. 

    {% endnote %}

    ![Screenshot of the Sessions page with the button to revoke a mobile session emphasized](/assets/images/help/settings/revoke-mobile-session.png)
    
{% endif %}

