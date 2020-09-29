---
title: Gesetzliche Aufbewahrungspflicht für einen Benutzer oder für eine Organisation festlegen
intro: 'Sie können eine gesetzliche Aufbewahrungspflicht für einen Benutzer oder für eine Organisation festlegen, um sicherzustellen, dass die ihm oder ihr gehörenden Repositorys nicht dauerhaft aus {% data variables.product.product_location_enterprise %} gelöscht werden können.'
redirect_from:
  - /enterprise/admin/user-management/placing-a-legal-hold-on-a-user-or-organization
versions:
  enterprise-server: '*'
---

Wenn ein Repository gelöscht wird, bleibt es in der Regel 90 Tage lang weiterhin auf der Disk und kann über das Websiteadministrator-Dashboard wiederhergestellt werden. Nach 90 Tagen wird das Repository bereinigt und dauerhaft gelöscht. Wenn Sie eine gesetzliche Aufbewahrungspflicht für einen Benutzer oder für eine Organisation festlegen, können die ihm oder ihr gehörenden Repositorys auf unbestimmte Zeit wiederhergestellt werden.

{% data reusables.enterprise_site_admin_settings.sign-in %}
{% data reusables.enterprise_site_admin_settings.access-settings %}
{% data reusables.enterprise_site_admin_settings.search-user-or-org %}
{% data reusables.enterprise_site_admin_settings.click-user-or-org %}
{% data reusables.enterprise_site_admin_settings.admin-top-tab %}
{% data reusables.enterprise_site_admin_settings.admin-tab %}
5. Klicken Sie auf **Place legal hold** (Gesetzliche Aufbewahrungspflicht festlegen). ![Schaltfläche „Place legal hold“ (Gesetzliche Aufbewahrungspflicht festlegen)](/assets/images/enterprise/site-admin-settings/place-legal-hold-button.png)
