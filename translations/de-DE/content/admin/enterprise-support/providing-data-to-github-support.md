---
title: Daten für den GitHub-Support bereitstellen
intro: 'Da der {{ site.data.variables.contact.github_support }} keinen Zugriff auf Ihre Umgebung hat, benötigen wir einige zusätzliche Informationen von Ihnen.'
redirect_from:
  - /enterprise/admin/guides/installation/troubleshooting/
  - /enterprise/admin/articles/support-bundles/
  - /enterprise/admin/guides/enterprise-support/providing-data-to-github-enterprise-support/
  - /enterprise/admin/enterprise-support/providing-data-to-github-support
versions:
  enterprise-server: '*'
---

### Diagnosedateien erstellen und freigeben

Die Diagnose ist eine Übersicht über die Einstellungen und die Umgebung einer {{ site.data.variables.product.prodname_ghe_server }}-Instanz. Sie enthält Folgendes:

- Kundenlizenz-Informationen, einschließlich Firmenname, Ablaufdatum und Anzahl der Benutzerlizenzen
- Versionsnummern und SHAs
- VM-Architektur
- Hostname, Privatmodus, SSL-Einstellungen
- Lade- und Prozessauflistungen
- Netzwerkeinstellungen
- Authentifizierungsmethode und -details
- Anzahl der Repositorys, Benutzer und andere Installationsdaten

Sie können die Diagnose für Ihre Instanz über die {{ site.data.variables.enterprise.management_console }} oder durch Ausführen des Befehlszeilenprogramms `ghe-diagnostics` herunterladen.

#### Diagnosedatei über die {{ site.data.variables.enterprise.management_console }} erstellen

Sie können diese Methode verwenden, wenn Sie Ihren SSH-Schlüssel nicht zur Hand haben.

{{ site.data.reusables.enterprise_site_admin_settings.access-settings }}
{{ site.data.reusables.enterprise_site_admin_settings.management-console }}
{{ site.data.reusables.enterprise_management_console.type-management-console-password }}
{{ site.data.reusables.enterprise_management_console.support-link }}
5. Klicken Sie auf **Download diagnostics info** (Diagnoseinformationen herunterladen).

#### Diagnosedatei mithilfe von SSH erstellen

Sie können diese Methode verwenden, ohne sich bei der {{ site.data.variables.enterprise.management_console }} anzumelden.

Verwenden Sie das Befehlszeilenprogramm [ghe-diagnostics](/enterprise/{{ currentVersion }}/admin/guides/installation/command-line-utilities#ghe-diagnostics), um die Diagnose für Ihre Instanz abzurufen.

```shell
$ ssh -p122 admin@<em>hostname</em> -- 'ghe-diagnostics' > diagnostics.txt
```

### Support-Bundles erstellen und freigeben

Nachdem Du Deine Supportanfrage eingereicht hast, können wir Dich bitten, unserem Team ein Support-Paket bereitzustellen. Das Support-Bundle ist ein gzip-komprimiertes Tar-Archiv, das Diagnosen und wichtige Protokolle Ihrer Instanz enthält, beispielsweise

- authentifizierungsbezogene Protokolle, die bei der Behebung von Authentifizierungsfehlern oder der Konfiguration von LDAP, CAS oder SAML hilfreich sein können,
- {{ site.data.variables.enterprise.management_console }}-Protokoll,
- `github-logs/exceptions.log`: Informationen über 500 Fehler, die auf der Website aufgetreten sind,
- `github-logs/audit.log`: {{ site.data.variables.product.prodname_ghe_server }}-Auditprotokolle,
- `babeld-logs/babeld.log`: Git-Proxy-Protokolle,
- `system-logs/haproxy.log`: HAProxy-Protokolle,
- `elasticsearch-logs/github-enterprise.log`: ElasticSearch-Protokolle,
- `configuration-logs/ghe-config.log`: {{ site.data.variables.product.prodname_ghe_server }}-Konfigurationsprotokolle,
- `collectd/logs/collectd.log`: Collectd-Protokolle,
- `mail-logs/mail.log`: SMTP-E-Mail-Zustellprotokolle,
- `hookshot-logs/exceptions.log`: Webhook-Auslieferungsfehler.

Weitere Informationen finden Sie unter „[Auditprotokollierung](/enterprise/{{ currentVersion }}/admin/guides/installation/audit-logging)“.

Support-Bundles enthalten Protokolle der letzten zwei Tage. Um Protokolle der letzten sieben Tage abzurufen, können Sie ein erweitertes Support-Bundle herunterladen. Weitere Informationen finden Sie unter „[Erweiterte Support-Bundles erstellen und freigeben](#creating-and-sharing-extended-support-bundles)“.

{% tip %}

**Tipp:** Wenn Sie den {{ site.data.variables.contact.github_support }} kontaktieren, erhalten Sie eine Bestätigungs-E-Mail mit einem Ticket-Referenzlink. Wenn der {{ site.data.variables.contact.github_support }} Sie bittet, ein Support-Bundle hochzuladen, können Sie dazu den Ticket-Referenzlink verwenden.

{% endtip %}

#### Support-Bundle über die {{ site.data.variables.enterprise.management_console }} erstellen

Mit diesen Schritten können Sie ein Support-Bundle erstellen und freigeben, wenn Sie auf die webbasierte {{ site.data.variables.enterprise.management_console }} zugreifen können und einen ausgehenden Internetzugang haben.

{{ site.data.reusables.enterprise_site_admin_settings.access-settings }}
{{ site.data.reusables.enterprise_site_admin_settings.management-console }}
{{ site.data.reusables.enterprise_management_console.type-management-console-password }}
{{ site.data.reusables.enterprise_management_console.support-link }}
5. Klicken Sie auf **Download support bundle** (Support-Bundle herunterladen).
{{ site.data.reusables.enterprise_enterprise_support.sign-in-to-support }}
{{ site.data.reusables.enterprise_enterprise_support.upload-support-bundle }}

#### Support-Bundle mithilfe von SSH erstellen

Mit diesen Schritten können Sie ein Support-Bundle erstellen und freigeben, wenn Sie SSH-Zugriff auf Ihre {{ site.data.variables.product.prodname_ghe_server }}-Appliance und ausgehenden Internetzugang haben.

{{ site.data.reusables.enterprise_enterprise_support.use_ghe_cluster_support_bundle }}

1. Laden Sie das Support-Bundle über SSH herunter:
  ```shell
  $ ssh -p 122 admin@<em>hostname</em> -- 'ghe-support-bundle -o' > support-bundle.tgz
  ```
  Weitere Informationen zum Befehl `ghe-support-bundle` finden Sie unter „[Befehlszeilenprogramme](/enterprise/admin/guides/installation/command-line-utilities#ghe-support-bundle)“.
{{ site.data.reusables.enterprise_enterprise_support.sign-in-to-support }}
{{ site.data.reusables.enterprise_enterprise_support.upload-support-bundle }}

#### Ein Support-Paket wird mit Deinem Unternehmenskonto hochladen

{{ site.data.reusables.enterprise-accounts.access-enterprise }}
{{ site.data.reusables.enterprise-accounts.settings-tab }}
{{ site.data.reusables.enterprise-accounts.enterprise-licensing-tab }}
4. Klicke unter „{{ site.data.variables.product.prodname_enterprise }} Help“ (Hilfe zu {{ site.data.variables.product.prodname_enterprise }}) auf **Upload a support bundle** (Ein Support-Paket hochladen). ![Einen Link zum Support-Paket hochladen](/assets/images/enterprise/support/upload-support-bundle.png)
5. Wähle unter „Select an enterprise account“ (Unternehmenskonto auswählen) das zugehörige Konto des Support-Pakets aus dem Dropdown-Menü aus. ![Firmenkonto des Support-Pakets auswählen](/assets/images/enterprise/support/support-bundle-account.png)
6. Um Dein Support-Paket auszuwählen, klickst Du unter „Upload a support bundle for {{ site.data.variables.contact.enterprise_support }}“ (Ein Support-Bundle für {{ site.data.variables.contact.enterprise_support }} hochladen) auf **Choose file** (Datei auswählen) oder Du ziehst Deine Support-Paket-Datei auf **Choose file**. ![Support-Paket-Datei hochladen](/assets/images/enterprise/support/choose-support-bundle-file.png)
7. Klicke **Upload**.

#### Support-Bundle mithilfe von SSH direkt hochladen

Unter folgenden Voraussetzungen können Sie ein Support-Bundle direkt auf unseren Server hochladen:
- Sie haben SSH-Zugriff auf Ihre {{ site.data.variables.product.prodname_ghe_server }}-Appliance.
- Ausgehende HTTPS-Verbindungen über TCP-Port 443 sind von Ihrer {{ site.data.variables.product.prodname_ghe_server }}-Appliance aus möglich.

1. Laden Sie das Bundle auf unseren Support-Bundle-Server hoch:
  ```shell
  $ ssh -p122 admin@<em>hostname</em> -- 'ghe-support-bundle -u'
  ```

### Erweiterte Support-Bundles erstellen und freigeben

Support-Bundles beinhalten Protokolle der letzten zwei Tage, wohingegen _erweiterte_ Support-Bundles Protokolle der letzten sieben Tage beinhalten. Wenn die vom {{ site.data.variables.contact.github_support }} untersuchten Ereignisse vor mehr als zwei Tagen aufgetreten sind, bitten wir Sie möglicherweise, ein erweitertes Support-Bundle bereitzustellen. Sie benötigen SSH-Zugriff, um ein erweitertes Bundle herunterzuladen. Sie können ein erweitertes Bundle nicht über die {{ site.data.variables.enterprise.management_console }} herunterladen.

Damit die Pakete nicht zu groß werden, enthalten sie nur Protokolle, die nicht rotiert und komprimiert wurden. Die Protokollrotation unter {{ site.data.variables.product.prodname_ghe_server }} erfolgt in verschiedenen Intervallen (täglich oder wöchentlich) für verschiedene Protokolldateien, je nachdem, wie groß die Protokolle schätzungsweise sein werden.

#### Erweitertes Support-Bundle mithilfe von SSH erstellen

Mit diesen Schritten können Sie ein erweitertes Support-Bundle erstellen und freigeben, wenn Sie SSH-Zugriff auf Ihre {{ site.data.variables.product.prodname_ghe_server }}-Appliance und ausgehenden Internetzugang haben.

1. Laden Sie das erweiterte Support-Bundle über SSH herunter, indem Sie den Flag `-x` zum Befehl `ghe-support-bundle` hinzufügen:
  ```shell
  $ ssh -p 122 admin@<em>hostname</em> -- 'ghe-support-bundle -o -x' > support-bundle.tgz
  ```
{{ site.data.reusables.enterprise_enterprise_support.sign-in-to-support }}
{{ site.data.reusables.enterprise_enterprise_support.upload-support-bundle }}

#### Erweitertes Support-Bundle mithilfe von SSH direkt hochladen

Unter folgenden Voraussetzungen können Sie ein Support-Bundle direkt auf unseren Server hochladen:
- Sie haben SSH-Zugriff auf Ihre {{ site.data.variables.product.prodname_ghe_server }}-Appliance.
- Ausgehende HTTPS-Verbindungen über TCP-Port 443 sind von Ihrer {{ site.data.variables.product.prodname_ghe_server }}-Appliance aus möglich.

1. Laden Sie das Bundle auf unseren Support-Bundle-Server hoch:
  ```shell
  $ ssh -p122 admin@<em>hostname</em> -- 'ghe-support-bundle -u -x'
  ```

### Weiterführende Informationen

- „[Informationen zum {{ site.data.variables.contact.enterprise_support }}](/enterprise/admin/guides/enterprise-support/about-github-enterprise-support)“
- „[Informationen zum {{ site.data.variables.contact.premium_support }} für {{ site.data.variables.product.prodname_ghe_server }}](/enterprise/admin/guides/enterprise-support/about-github-premium-support-for-github-enterprise-server)“
