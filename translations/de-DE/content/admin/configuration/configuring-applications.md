---
title: Anwendungen konfigurieren
intro: 'Sie können interne Anwendungseinstellungen für {% data variables.product.product_location_enterprise %} konfigurieren.'
redirect_from:
  - /enterprise/admin/installation/configuring-applications
  - /enterprise/admin/configuration/configuring-applications
versions:
  enterprise-server: '*'
---

### Bildzwischenspeicherung anpassen

Sie können auswählen, wie lange {% data variables.product.product_location_enterprise %} Avatare speichert. Beim Erhöhen der Cache-Zeit erhöhen Sie die Zeit, die der Avatar eines Benutzers zum Laden benötigt. Wird die Cache-Zeit mit einem zu niedrigen Wert konfiguriert, kann dies zur Überladung von {% data variables.product.product_location_enterprise %}-Arbeitsprozessen führen.

{% data reusables.enterprise_site_admin_settings.access-settings %}
{% data reusables.enterprise_site_admin_settings.management-console %}
3. Klicke in der linken Seitenleiste auf **Applications** (Anwendungen). ![Registerkarte „Applications“ (Anwendungen) auf der Seitenleiste mit den Einstellungen](/assets/images/enterprise/management-console/sidebar-applications.png)
4. Geben Sie unter „Avatar image cache time (seconds)“ (Avatarbild-Cache-Zeit (Sekunden)) ein, wie viele Sekunden {% data variables.product.product_location_enterprise %} Avatarbilder zwischenspeichern soll. ![Formularfeld für die Zwischenspeicherung von Avatarbildern](/assets/images/enterprise/management-console/add-image-caching-value-field.png)
{% data reusables.enterprise_management_console.save-settings %}
