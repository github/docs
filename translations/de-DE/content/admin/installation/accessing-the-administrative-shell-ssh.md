---
title: Auf die Verwaltungsshell (SSH) zugreifen
redirect_from:
  - /enterprise/admin/articles/ssh-access/
  - /enterprise/admin/articles/adding-an-ssh-key-for-shell-access/
  - /enterprise/admin/guides/installation/administrative-shell-ssh-access/
  - /enterprise/admin/articles/troubleshooting-ssh-permission-denied-publickey/
  - /enterprise/admin/2.13/articles/troubleshooting-ssh-permission-denied-publickey/
  - /enterprise/admin/2.14/articles/troubleshooting-ssh-permission-denied-publickey/
  - /enterprise/admin/2.15/articles/troubleshooting-ssh-permission-denied-publickey/
  - /enterprise/admin/installation/accessing-the-administrative-shell-ssh
intro: 'Der SSH-Zugriff ermöglicht Ihnen die Ausführung der {% data variables.product.prodname_ghe_server %}-Befehlszeilendienstprogramme und eignet sich zur Fehlerbehebung, zum Ausführen von Backups und zum Konfigurieren der Replikation.'
versions:
  enterprise-server: '*'
---

### Informationen zum Verwaltungsshellzugriff

Wenn Sie über SSH-Zugriff auf die Verwaltungsshell verfügen, können Sie die Befehlszeilendienstprogramme von {% data variables.product.prodname_ghe_server %} ausführen. Der SSH-Zugriff eignet sich zudem zur Fehlerbehebung, zum Ausführen von Backups und zum Konfigurieren der Replikation. Der SSH-Verwaltungszugriff wird getrennt vom Git SSH-Zugriff verwaltet und ist nur über Port 122 zugänglich.

### Zugriff auf die Verwaltungsshell über SSH aktivieren

Zum Aktivieren des SSH-Verwaltungszugriffs müssen Sie Ihren öffentlichen SSH-Schlüssel zur Liste der autorisierten Schlüssel Ihrer Instanz hinzufügen.

{% tip %}

**Tipp:** Die Änderungen an den autorisierten SSH-Schlüsseln werden sofort wirksam.

{% endtip %}

{% data reusables.enterprise_site_admin_settings.access-settings %}
{% data reusables.enterprise_site_admin_settings.management-console %}
3. Fügen Sie unter „SSH access“ (SSH-Zugriff) Ihren Schlüssel in das Textfeld ein, und klicken Sie anschließend auf **Add key** (Schlüssel hinzufügen). ![Textfeld und Schaltfläche zum Hinzufügen eines SSH-Schlüssels](/assets/images/enterprise/settings/add-authorized-ssh-key-admin-shell.png)
{% data reusables.enterprise_management_console.save-settings %}

### Verbindung zur Verwaltungsshell über SSH herstellen

Nachdem Sie der Liste Ihren SSH-Schlüssel hinzugefügt haben, verbinden Sie als der Benutzer `admin` auf Port 122 die Instanz über SSH.

```shell
$ ssh -p 122 admin@github.example.com
Last login: Sun Nov 9 07:53:29 2014 from 169.254.1.1
admin@github-example-com:~$ █
```

#### Fehlerbehebung bei SSH-Verbindungsproblemen

Wenn der Fehler `Permission denied (publickey)` (Berechtigung verweigert (öffentlicher Schlüssel)) angezeigt wird, wenn Sie versuchen, über SSH eine Verbindung zu {% data variables.product.product_location_enterprise %} herzustellen, sollten Sie bestätigen, dass Sie die Verbindung über Port 122 vornehmen. Möglicherweise müssen Sie explizit angeben, welcher private SSH-Schlüssel verwendet werden soll.

Führen Sie zum Angeben eines privaten SSH-Schlüssels an der Befehlszeile `ssh` mit dem Argument `-i` aus.

```shell
ssh -i /path/to/ghe_private_key -p 122 admin@<em>hostname</em>
```

Darüber hinaus können Sie einen privaten SSH-Schlüssel mithilfe der SSH-Konfigurationsdatei (`~/.ssh/config`) angeben.

```shell
Host <em>hostname</em>
  IdentityFile /path/to/ghe_private_key
  User admin
  Port 122
```

### Auf die Verwaltungsshell mithilfe der lokalen Konsole zugreifen

In einer Notfallsituation, beispielsweise wenn SSH nicht verfügbar ist, können Sie lokal auf die Verwaltungsshell zugreifen. Melden Sie sich als der Benutzer `admin` mit dem Passwort an, das während der Ersteinrichtung von {% data variables.product.prodname_ghe_server %} festgelegt wurde.

### Zugriffseinschränkungen für die Verwaltungsshell

Der Verwaltungsshellzugriff ist nur zur Fehlerbehebung und zum Durchführen dokumentierter Vorgehensweisen zulässig. Ihr Supportvertrag wird ggf. ungültig, wenn Sie System- und Anwendungsdateien ändern, Programme ausführen oder nicht unterstützte Softwarepakete installieren. Kontaktiere bitte den {% data variables.contact.contact_ent_support %} bei Fragen zu den laut Deinem Supportvertrag zulässigen Aktivitäten.
