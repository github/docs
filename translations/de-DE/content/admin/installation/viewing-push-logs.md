---
title: Push-Protokolle anzeigen
intro: 'Websiteadministratoren können eine Liste der Git-Push-Vorgänge für Repositorys auf {% data variables.product.product_location_enterprise %} anzeigen.'
redirect_from:
  - /enterprise/admin/articles/viewing-push-logs/
  - /enterprise/admin/installation/viewing-push-logs
versions:
  enterprise-server: '*'
---

Push-Protokolleinträge zeigen:

- Wer den Push-Vorgang initiiert hat
- Ob es ein erzwungener Push-Vorgang war
- Den Branch, an den Elemente per Push-Vorgang übertragen wurden
- Das für den Push-Vorgang verwendete Protokoll
- Die IP-Quelladresse
- Der für den Push-Vorgang verwendete Git-Client
- Die SHA-Hashes vor und nach dem Vorgang

### Push-Protokolle eines Repositorys anzeigen

1. Navigieren Sie zu einem Repository.
{% data reusables.enterprise_site_admin_settings.access-settings %}
3. Klicken Sie in der oberen rechte Ecke der Seite auf {% octicon "shield" aria-label="The shield" %} **Security** (Sicherheit). ![Registerkarte „Security“ (Sicherheit)](/assets/images/enterprise/site-admin-settings/repo/repo-security-top-tab.png)
4. Klicken Sie auf der linken Seitenleiste auf **Push Log** (Push-Protokoll). ![Registerkarte „Push log“ (Push-Protokoll)](/assets/images/enterprise/site-admin-settings/push-log-tab.png)

### Push-Protokolle eines Repositorys an der Befehlszeile anzeigen

1. Stellen Sie eine SSH-Verbindung zu Ihrer Appliance her. Weitere Informationen finden Sie unter „[Auf die Verwaltungsshell (SSH) zugreifen](/enterprise/{{ currentVersion }}/admin/guides/installation/accessing-the-administrative-shell-ssh/)“.
2. Öffnen Sie im entsprechenden Git-Repository die Auditprotokolldatei:
  ```shell
  ghe-repo <em>owner</em>/<em>repository</em> -c "less audit_log"
  ```
