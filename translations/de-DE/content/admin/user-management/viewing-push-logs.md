---
title: Push-Protokolle anzeigen
intro: Site administrators can view a list of Git push operations for any repository on the enterprise.
redirect_from:
  - /enterprise/admin/articles/viewing-push-logs/
  - /enterprise/admin/installation/viewing-push-logs
  - /enterprise/admin/user-management/viewing-push-logs
versions:
  enterprise-server: '*'
  github-ae: '*'
type: how_to
topics:
  - Auditing
  - Enterprise
  - Git
  - Logging
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

1. Sign into {% data variables.product.prodname_ghe_server %} as a site administrator.
1. Navigieren Sie zu einem Repository.
1. In the upper-right corner of the repository's page, click
{% octicon "rocket" aria-label="The rocket ship" %}.
    ![Raumschiffsymbol für den Zugriff auf die Einstellungen des Websiteadministrators](/assets/images/enterprise/site-admin-settings/access-new-settings.png)
{% data reusables.enterprise_site_admin_settings.security-tab %}
4. Klicken Sie auf der linken Seitenleiste auf **Push Log** (Push-Protokoll). ![Registerkarte „Push log“ (Push-Protokoll)](/assets/images/enterprise/site-admin-settings/push-log-tab.png)

{% if enterpriseServerVersions contains currentVersion %}
### Push-Protokolle eines Repositorys an der Befehlszeile anzeigen

{% data reusables.enterprise_installation.ssh-into-instance %}
1. Öffnen Sie im entsprechenden Git-Repository die Auditprotokolldatei:
  ```shell
  ghe-repo <em>owner</em>/<em>repository</em> -c "less audit_log"
  ```
{% endif %}
