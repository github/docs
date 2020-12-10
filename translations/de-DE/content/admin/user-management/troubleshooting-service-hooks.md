---
title: Fehlerbehebung bei Dienst-Hooks
intro: 'Wenn Nutzlasten nicht bereitgestellt werden, sollten Sie nach diesen allgemeinen Problemen suchen.'
redirect_from:
  - /enterprise/admin/articles/troubleshooting-service-hooks/
  - /enterprise/admin/developer-workflow/troubleshooting-service-hooks
  - /enterprise/admin/user-management/troubleshooting-service-hooks
versions:
  enterprise-server: '*'
  github-ae: '*'
---

### Informationen zu Auslieferungen abrufen

Sie können nach Informationen für die letzte Antwort sämtlicher Dienst-Hook-Auslieferungen auf einem beliebigen Repository suchen.

{% data reusables.enterprise_site_admin_settings.access-settings %}
2. Navigieren Sie zu dem Repository, das Sie untersuchen.
3. Klicken Sie auf der Navigationsseitenleiste auf den Link **Hooks**. ![Hooks-Seitenleiste](/assets/images/enterprise/settings/Enterprise-Hooks-Sidebar.png)
4. Klicken Sie unter dem Dienst-Hook mit Problemen auf den Link **Latest Delivery** (Letzte Auslieferung). ![Hook-Details](/assets/images/enterprise/settings/Enterprise-Hooks-Details.png)
5. Unter **Remote Calls** (Remote-Aufrufe) werden die beim Senden der POST-Methode an den Remote-Server verwendeten Header und die Antwort angezeigt, die der Remote-Server an Ihre Installation zurückgesendet hat.

### Nutzlast anzeigen

{% data reusables.enterprise_site_admin_settings.access-settings %}
2. Navigieren Sie zu dem Repository, das Sie untersuchen.
3. Klicken Sie auf der Navigationsseitenleiste auf den Link **Hooks**. ![Hooks-Seitenleiste](/assets/images/enterprise/settings/Enterprise-Hooks-Sidebar.png)
4. Klicken Sie unter dem Dienst-Hook mit Problemen auf den Link **Latest Delivery** (Letzte Auslieferung).
5. Click **Delivery**. ![Nutzlast anzeigen](/assets/images/enterprise/settings/Enterprise-Hooks-Payload.png)

### Vergangene Auslieferungen anzeigen

Auslieferungen werden 15 Tage lang gespeichert.

{% data reusables.enterprise_site_admin_settings.access-settings %}
2. Navigieren Sie zu dem Repository, das Sie untersuchen.
3. Klicken Sie auf der Navigationsseitenleiste auf den Link **Hooks**. ![Hooks-Seitenleiste](/assets/images/enterprise/settings/Enterprise-Hooks-Sidebar.png)
4. Klicken Sie unter dem Dienst-Hook mit Problemen auf den Link **Latest Delivery** (Letzte Auslieferung).
5. Klicken Sie auf **More for this Hook ID** (Mehr für diese Hook-ID), um andere Auslieferungen an diesen spezifischen Hook anzuzeigen: ![Weitere Auslieferungen anzeigen](/assets/images/enterprise/settings/Enterprise-Hooks-More-Deliveries.png)
