---
title: Daten für den GitHub-Support bereitstellen
intro: 'Da der {% data variables.contact.github_support %} keinen Zugriff auf Ihre Umgebung hat, benötigen wir einige zusätzliche Informationen von Ihnen.'
redirect_from:
  - /enterprise/admin/guides/installation/troubleshooting/
  - /enterprise/admin/articles/support-bundles/
  - /enterprise/admin/guides/enterprise-support/providing-data-to-github-enterprise-support/
  - /enterprise/admin/enterprise-support/providing-data-to-github-support
versions:
  enterprise-server: '*'
---

### Diagnosedateien erstellen und freigeben

Die Diagnose ist eine Übersicht über die Einstellungen und die Umgebung einer {% data variables.product.prodname_ghe_server %}-Instanz. Sie enthält Folgendes:

- Kundenlizenz-Informationen, einschließlich Firmenname, Ablaufdatum und Anzahl der Benutzerlizenzen
- Versionsnummern und SHAs
- VM-Architektur
- Hostname, Privatmodus, SSL-Einstellungen
- Lade- und Prozessauflistungen
- Netzwerkeinstellungen
- Authentifizierungsmethode und -details
- Anzahl der Repositorys, Benutzer und andere Installationsdaten

Sie können die Diagnose für Ihre Instanz über die {% data variables.enterprise.management_console %} oder durch Ausführen des Befehlszeilenprogramms `ghe-diagnostics` herunterladen.

#### Diagnosedatei über die {% data variables.enterprise.management_console %} erstellen

Sie können diese Methode verwenden, wenn Sie Ihren SSH-Schlüssel nicht zur Hand haben.

{% data reusables.enterprise_site_admin_settings.access-settings %}
{% data reusables.enterprise_site_admin_settings.management-console %}
{% data reusables.enterprise_management_console.type-management-console-password %}
{% data reusables.enterprise_management_console.support-link %}
5. Klicken Sie auf **Download diagnostics info** (Diagnoseinformationen herunterladen).

#### Diagnosedatei mithilfe von SSH erstellen

Sie können diese Methode verwenden, ohne sich bei der {% data variables.enterprise.management_console %} anzumelden.

Verwenden Sie das Befehlszeilenprogramm [ghe-diagnostics](/enterprise/{{ currentVersion }}/admin/guides/installation/command-line-utilities#ghe-diagnostics), um die Diagnose für Ihre Instanz abzurufen.

```shell
$ ssh -p122 admin@<em>hostname</em> -- 'ghe-diagnostics' > diagnostics.txt
```

### Support-Bundles erstellen und freigeben

Nachdem Du Deine Supportanfrage eingereicht hast, können wir Dich bitten, unserem Team ein Support-Paket bereitzustellen. Das Support-Bundle ist ein gzip-komprimiertes Tar-Archiv, das Diagnosen und wichtige Protokolle Ihrer Instanz enthält, beispielsweise

- authentifizierungsbezogene Protokolle, die bei der Behebung von Authentifizierungsfehlern oder der Konfiguration von LDAP, CAS oder SAML hilfreich sein können,
- {% data variables.enterprise.management_console %}-Protokoll,
- `github-logs/exceptions.log`: Informationen über 500 Fehler, die auf der Website aufgetreten sind,
- `github-logs/audit.log`: {% data variables.product.prodname_ghe_server %}-Auditprotokolle,
- `babeld-logs/babeld.log`: Git-Proxy-Protokolle,
- `system-logs/haproxy.log`: HAProxy-Protokolle,
- `elasticsearch-logs/github-enterprise.log`: ElasticSearch-Protokolle,
- `configuration-logs/ghe-config.log`: {% data variables.product.prodname_ghe_server %}-Konfigurationsprotokolle,
- `collectd/logs/collectd.log`: Collectd-Protokolle,
- `mail-logs/mail.log`: SMTP-E-Mail-Zustellprotokolle,
- `hookshot-logs/exceptions.log`: Webhook-Auslieferungsfehler.

Weitere Informationen finden Sie unter „[Auditprotokollierung](/enterprise/{{ currentVersion }}/admin/guides/installation/audit-logging)“.

Support-Bundles enthalten Protokolle der letzten zwei Tage. Um Protokolle der letzten sieben Tage abzurufen, können Sie ein erweitertes Support-Bundle herunterladen. Weitere Informationen finden Sie unter „[Erweiterte Support-Bundles erstellen und freigeben](#creating-and-sharing-extended-support-bundles)“.

{% tip %}

**Tipp:** Wenn Sie den {% data variables.contact.github_support %} kontaktieren, erhalten Sie eine Bestätigungs-E-Mail mit einem Ticket-Referenzlink. Wenn der {% data variables.contact.github_support %} Sie bittet, ein Support-Bundle hochzuladen, können Sie dazu den Ticket-Referenzlink verwenden.

{% endtip %}

#### Support-Bundle über die {% data variables.enterprise.management_console %} erstellen

Mit diesen Schritten können Sie ein Support-Bundle erstellen und freigeben, wenn Sie auf die webbasierte {% data variables.enterprise.management_console %} zugreifen können und einen ausgehenden Internetzugang haben.

{% data reusables.enterprise_site_admin_settings.access-settings %}
{% data reusables.enterprise_site_admin_settings.management-console %}
{% data reusables.enterprise_management_console.type-management-console-password %}
{% data reusables.enterprise_management_console.support-link %}
5. Klicken Sie auf **Download support bundle** (Support-Bundle herunterladen).
{% data reusables.enterprise_enterprise_support.sign-in-to-support %}
{% data reusables.enterprise_enterprise_support.upload-support-bundle %}

#### Support-Bundle mithilfe von SSH erstellen

Mit diesen Schritten können Sie ein Support-Bundle erstellen und freigeben, wenn Sie SSH-Zugriff auf Ihre {% data variables.product.prodname_ghe_server %}-Appliance und ausgehenden Internetzugang haben.

{% data reusables.enterprise_enterprise_support.use_ghe_cluster_support_bundle %}

1. Laden Sie das Support-Bundle über SSH herunter:
  ```shell
  $ ssh -p 122 admin@<em>hostname</em> -- 'ghe-support-bundle -o' > support-bundle.tgz
  ```
  Weitere Informationen zum Befehl `ghe-support-bundle` finden Sie unter „[Befehlszeilenprogramme](/enterprise/admin/guides/installation/command-line-utilities#ghe-support-bundle)“.
{% data reusables.enterprise_enterprise_support.sign-in-to-support %}
{% data reusables.enterprise_enterprise_support.upload-support-bundle %}

#### Ein Support-Paket wird mit Deinem Unternehmenskonto hochladen

{% data reusables.enterprise-accounts.access-enterprise-on-dotcom %}
{% data reusables.enterprise-accounts.settings-tab %}
3. Klicke in der linken Seitenleiste auf **Enterprise licensing** (Enterprise-Lizenzierung). !["Enterprise licensing" tab in the enterprise account settings sidebar](/assets/images/help/enterprises/enterprise-licensing-tab.png)
4. Under "{% data variables.product.prodname_enterprise %} Help", click **Upload a support bundle**. ![Einen Link zum Support-Paket hochladen](/assets/images/enterprise/support/upload-support-bundle.png)
5. Wähle unter „Select an enterprise account“ (Unternehmenskonto auswählen) das zugehörige Konto des Support-Pakets aus dem Dropdown-Menü aus. ![Firmenkonto des Support-Pakets auswählen](/assets/images/enterprise/support/support-bundle-account.png)
6. Under "Upload a support bundle for {% data variables.contact.enterprise_support %}", to select your support bundle, click **Choose file**, or drag your support bundle file onto **Choose file**. ![Support-Paket-Datei hochladen](/assets/images/enterprise/support/choose-support-bundle-file.png)
7. Klicke **Upload**.

#### Support-Bundle mithilfe von SSH direkt hochladen

Unter folgenden Voraussetzungen können Sie ein Support-Bundle direkt auf unseren Server hochladen:
- Sie haben SSH-Zugriff auf Ihre {% data variables.product.prodname_ghe_server %}-Appliance.
- Ausgehende HTTPS-Verbindungen über TCP-Port 443 sind von Ihrer {% data variables.product.prodname_ghe_server %}-Appliance aus möglich.

1. Laden Sie das Bundle auf unseren Support-Bundle-Server hoch:
  ```shell
  $ ssh -p122 admin@<em>hostname</em> -- 'ghe-support-bundle -u'
  ```

### Erweiterte Support-Bundles erstellen und freigeben

Support-Bundles beinhalten Protokolle der letzten zwei Tage, wohingegen _erweiterte_ Support-Bundles Protokolle der letzten sieben Tage beinhalten. If the events that {% data variables.contact.github_support %} is investigating occurred more than two days ago, we may ask you to share an extended support bundle. You will need SSH access to download an extended bundle - you cannot download an extended bundle from the {% data variables.enterprise.management_console %}.

Damit die Pakete nicht zu groß werden, enthalten sie nur Protokolle, die nicht rotiert und komprimiert wurden. Log rotation on {% data variables.product.prodname_ghe_server %} happens at various frequencies (daily or weekly) for different log files, depending on how large we expect the logs to be.

#### Erweitertes Support-Bundle mithilfe von SSH erstellen

You can use these steps to create and share an extended support bundle if you have SSH access to your {% data variables.product.prodname_ghe_server %} appliance and you have outbound internet access.

1. Laden Sie das erweiterte Support-Bundle über SSH herunter, indem Sie den Flag `-x` zum Befehl `ghe-support-bundle` hinzufügen:
  ```shell
  $ ssh -p 122 admin@<em>hostname</em> -- 'ghe-support-bundle -o -x' > support-bundle.tgz
  ```
{% data reusables.enterprise_enterprise_support.sign-in-to-support %}
{% data reusables.enterprise_enterprise_support.upload-support-bundle %}

#### Erweitertes Support-Bundle mithilfe von SSH direkt hochladen

Unter folgenden Voraussetzungen können Sie ein Support-Bundle direkt auf unseren Server hochladen:
- Sie haben SSH-Zugriff auf Ihre {% data variables.product.prodname_ghe_server %}-Appliance.
- Ausgehende HTTPS-Verbindungen über TCP-Port 443 sind von Ihrer {% data variables.product.prodname_ghe_server %}-Appliance aus möglich.

1. Laden Sie das Bundle auf unseren Support-Bundle-Server hoch:
  ```shell
  $ ssh -p122 admin@<em>hostname</em> -- 'ghe-support-bundle -u -x'
  ```

### Weiterführende Informationen

- „[Informationen zum {% data variables.contact.enterprise_support %}](/enterprise/admin/guides/enterprise-support/about-github-enterprise-support)“
- „[Informationen zum {% data variables.contact.premium_support %} für {% data variables.product.prodname_ghe_server %}](/enterprise/admin/guides/enterprise-support/about-github-premium-support-for-github-enterprise-server)“
