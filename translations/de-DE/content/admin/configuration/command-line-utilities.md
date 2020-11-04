---
title: Befehlszeilenprogramme
intro: '{% data variables.product.prodname_ghe_server %} enthält eine Vielzahl an Dienstprogrammen, mit denen bestimmte Probleme behoben oder bestimmte Aufgaben ausgeführt werden können.'
redirect_from:
  - /enterprise/admin/articles/viewing-all-services/
  - /enterprise/admin/articles/command-line-utilities/
  - /enterprise/admin/installation/command-line-utilities
  - /enterprise/admin/configuration/command-line-utilities
miniTocMaxHeadingLevel: 4
versions:
  enterprise-server: '*'
---

Sie können diese Befehle überall in der VM ausführen, nachdem Sie sich als ein SSH-Administratorbenutzer angemeldet haben. Weitere Informationen finden Sie unter „[Auf die Verwaltungsshell (SSH) zugreifen](/enterprise/{{ currentVersion }}/admin/guides/installation/accessing-the-administrative-shell-ssh/)“.

### Allgemein

#### ghe-announce

Dieses Dienstprogramm liegt im oberen Bereich jeder {% data variables.product.prodname_enterprise %}-Seite einen Banner fest. Diesen können Sie verwenden, um Ihren Benutzer eine Mitteilung zu übermitteln.

{% if currentVersion ver_gt "enterprise-server@2.21" %}
You can also set an announcement banner using the enterprise settings on
{% data variables.product.product_name %}. Weitere Informationen finden Sie unter „[Benutzermeldungen auf Ihrer Instanz anpassen](/enterprise/admin/user-management/customizing-user-messages-on-your-instance#creating-a-global-announcement-banner)“.
{% endif %}

```shell
# Legt eine Nachricht fest, die für jedermann sichtbar ist
$ ghe-announce -s MESSAGE
> Announcement message set.
# Entfernt eine zuvor festgelegte Nachricht
$ ghe-announce -u
> Removed the announcement message
```

#### ghe-check-disk-usage

Dieses Dienstprogramm überprüft den Datenträger auf große Dateien oder auf gelöschte Dateien mit weiterhin vorhandenen offenen Datei-Handles. Sie sollten dieses ausführen, wenn Sie versuchen, auf der Root-Partition Speicherplatz freizugeben.

```shell
ghe-check-disk-usage
```

#### ghe-cleanup-caches

Dieses Dienstprogramm bereinigt eine Vielzahl von Caches auf dem Root-Volume, die potenziell zusätzlichen Speicherplatz beanspruchen. Wenn Sie feststellen, dass sich Ihre Root-Volume-Speicherplatzauslastung mit der Zeit merklich erhöht, empfiehlt es sich, dieses Dienstprogramm auszuführen, um nachzuvollziehen, ob es die Gesamtnutzung reduzieren kann.

```shell
ghe-cleanup-caches
```
#### ghe-cleanup-settings

Dieses Dienstprogramm löscht alle vorhandenen {% data variables.enterprise.management_console %}-Einstellungen.

{% tip %}

**Tipp**: {% data reusables.enterprise_enterprise_support.support_will_ask_you_to_run_command %}

{% endtip %}

```shell
ghe-cleanup-settings
```

#### ghe-config

Mit diesem Dienstprogramm können Sie die Konfigurationseinstellungen von {% data variables.product.product_location %} abrufen und ändern.

```shell
$ ghe-config <em>core.github-hostname</em>
# Ruft den Konfigurationswert von „core.github-hostname“ ab
$ ghe-config <em>core.github-hostname</em> <em>'example.com'</em>
# Legt den Konfigurationswert von „core.github-hostname“ auf „example.com“ fest
$ ghe-config -l
# Listet alle Konfigurationswerte auf
```
Dadurch können Sie den UUID Ihres Knotens in `cluster.conf` ermitteln.

``` shell
  $ ghe-config _hostname_.uuid
```

{% if currentVersion ver_gt "enterprise-server@2.21" %}
Allows you to exempt a list of users from API rate limits. For more information, see "[Rate Limiting](/enterprise/{{ page.version }}/v3/#rate-limiting)."

``` shell
$ ghe-config app.github.rate_limiting_exempt_users "<em>hubot</em> <em>github-actions</em>"
# Exempts the users hubot and github-actions from rate limits
```
{% endif %}

#### ghe-config-apply

Dieses Dienstprogramm wendet {% data variables.enterprise.management_console %}-Einstellungen an, lädt Systemdienste neu, bereitet ein Speichergerät vor, lädt Anwendungsdienste neu und führt ausstehende Datenbankmigrationen aus. It is equivalent to clicking **Save settings** in the {% data variables.enterprise.management_console %}'s web UI or to sending a POST request to [the `/setup/api/configure` endpoint](/enterprise/{{ currentVersion }}/user/rest/reference/enterprise-admin#management-console).

Sie müssen dies wahrscheinlich niemals manuell ausführen. Es ist jedoch verfügbar, wenn Sie den Prozess zum Speichern Ihrer Einstellungen über die SSH automatisieren möchten.

```shell
ghe-config-apply
```

#### ghe-console

Dieses Dienstprogramm öffnet die GitHub Rails-Konsole auf Ihrer {% data variables.product.prodname_enterprise %}-Appliance. {% data reusables.command_line.use_with_support_only %}

```shell
ghe-console
```

#### ghe-dbconsole

Dieses Dienstprogramm öffnet eine MySQL-Datenbanksitzung auf Ihrer {% data variables.product.prodname_enterprise %}-Appliance. {% data reusables.command_line.use_with_support_only %}

```shell
ghe-dbconsole
```

#### ghe-es-index-status
Dieses Dienstprogramm gibt eine Zusammenfassung der ElasticSearch-Indizes im CSV-Format zurück.

Eine Indexzusammenfassung mit einer Header-Kopfzeile für `STDOUT` ausgeben:
```shell
$ ghe-es-index-status -do
> warning: parser/current is loading parser/ruby23, which recognizes
> warning: 2.3.3-compliant syntax, but you are running 2.3.4.
> warning: please see https://github.com/whitequark/parser#compatibility-with-ruby-mri.
> Name,Primary,Searchable,Writable,UpToDate,RepairProgress,Version
> code-search-1,true,true,true,true,100.0,72e27df7c631b45e026b42bfef059328fa040e17
> commits-5,true,true,true,true,100.0,7ed28813100c47813ef654c0ee2bb9abf21ab744
> gists-4,true,true,true,true,100.0,cf8e7d04fcf2564c902e2873c424a279cc41079d
> issues-4,false,false,false,true,100.0,d0bb08f71eebf6e7b070572aa399b185dbdc8a76
> issues-5,true,true,true,true,100.0,d0bb08f71eebf6e7b070572aa399b185dbdc8a76
> projects-2,true,true,true,true,100.0,c5cac1c4b3c66d42e609d088d174dbc3dd44469a
> pull-requests-6,true,true,true,true,100.0,6a466ad6b896a3499509990979bf9a18d7d41de3
> repos-6,true,true,true,true,100.0,6c8b5fbba0fc1e409558db411d05e092c1387082
> users-5,true,true,true,true,100.0,38984875552bb826c9ec42999f409cb2e95556eb
> wikis-4,true,true,true,true,100.0,2613dec44bd14e14577803ac1f9e4b7e07a7c234
```

Geben Sie eine Indexzusammenfassung und Pipe-Ergebnisse zur besseren Lesbarkeit für `column` aus:

```shell
$ ghe-es-index-status -do | column -ts,
> warning: parser/current is loading parser/ruby23, which recognizes
> warning: 2.3.3-compliant syntax, but you are running 2.3.4.
> warning: please see https://github.com/whitequark/parser#compatibility-with-ruby-mri.
> Name             Primary  Searchable  Writable  UpToDate  RepairProgress  Version
> code-search-1    true     true        true      true      100.0           72e27df7c631b45e026b42bfef059328fa040e17
> commits-5        true     true        true      true      100.0           7ed28813100c47813ef654c0ee2bb9abf21ab744
> gists-4          true     true        true      true      100.0           cf8e7d04fcf2564c902e2873c424a279cc41079d
> issues-4         false    false       false     true      100.0           d0bb08f71eebf6e7b070572aa399b185dbdc8a76
> issues-5         true     true        true      true      100.0           d0bb08f71eebf6e7b070572aa399b185dbdc8a76
> projects-2       true     true        true      true      100.0           c5cac1c4b3c66d42e609d088d174dbc3dd44469a
> pull-requests-6  true     true        true      true      100.0           6a466ad6b896a3499509990979bf9a18d7d41de3
> repos-6          true     true        true      true      100.0           6c8b5fbba0fc1e409558db411d05e092c1387082
> users-5          true     true        true      true      100.0           38984875552bb826c9ec42999f409cb2e95556eb
> wikis-4          true     true        true      true      100.0           2613dec44bd14e14577803ac1f9e4b7e07a7c234
```

#### ghe-legacy-github-services-report

Dieses Dienstprogramm listet Repositorys auf Ihrer Appliance auf, die {% data variables.product.prodname_dotcom %} Services verwenden. Hierbei handelt es sich um eine Integrationsmethode, die am 1. Oktober 2018 eingestellt wird. Benutzer auf Ihrer Appliance haben {% data variables.product.prodname_dotcom %} Services möglicherweise so eingerichtet, dass für Push-Vorgänge an bestimmte Repositorys Benachrichtigungen erstellt werden. For more information, see "[Announcing the deprecation of {% data variables.product.prodname_dotcom %} Services](https://developer.github.com/changes/2018-04-25-github-services-deprecation/)" on {% data variables.product.prodname_blog %} or "[Replacing {% data variables.product.prodname_dotcom %} Services](/v3/guides/replacing-github-services/)." Verwenden Sie das Flag `-h`, um weitere Informationen zu diesem Befehl oder zusätzliche Informationen anzuzeigen.

```shell
ghe-legacy-github-services-report

```

#### ghe-logs-tail

Mit diesem Dienstprogramm können Sie das Ende aller relevanten Protokolldateien aus Ihrer Installation ausgeben. Sie können Optionen übergeben, um die Protokolle auf bestimmte Sätze zu begrenzen. Verwenden Sie das Flag „-h“, um zusätzliche Optionen anzuzeigen.

```shell
ghe-logs-tail
```

#### ghe-maintenance

Mit diesem Dienstprogramm können Sie den Wartungsmoduszustand der Installation steuern. Es soll primär von der {% data variables.enterprise.management_console %} im Hintergrund verwendet werden, kann jedoch auch direkt verwendet werden.

```shell
ghe-maintenance -h
```

#### ghe-motd

Dieses Dienstprogramm zeigt die Meldung des Tages (MOTD) an, die Administratoren sehen, wenn sie über die administrative Shell auf die Instanz zugreifen. Die Ausgabe enthält einen Überblick über den Status der Instanz.

```shell
ghe-motd
```

#### ghe-nwo

Dieses Dienstprogramm gibt den Namen und den Inhaber eines Repositorys basierend auf der Repository-ID zurück.

```shell
ghe-nwo <em>REPOSITORY_ID</em>
```

#### ghe-org-admin-promote

Führen Sie diesen Befehl aus, um Benutzern mit Websiteadministratorberechtigungen Organisationsinhaberberechtigungen auf der Appliance zu erteilen oder um beliebigen einzelnen Benutzern in einer einzelnen Organisation Organisationsinhaberberechtigungen zu erteilen. Sie müssen einen Benutzer bzw. eine Organisation angeben. Der Befehl `ghe-org-admin-promote` fordert immer zur Bestätigung vor der Ausführung auf, sofern Sie nicht das Flag `-y` verwenden, um die Bestätigung zu umgehen.

Die folgenden Optionen können Sie mit dem Dienstprogramm verwenden:

- Das Flag `-u` gibt einen Benutzernamen an. Verwenden Sie dieses Flag, um einem bestimmten Benutzer Organisationsinhaberberechtigungen zu erteilen. Lassen Sie das Flag `-u` weg, um alle Websiteadministratoren für die angegebene Organisation hochzustufen.
- Das Flag `-o` gibt eine Organisation an. Verwenden Sie dieses Flag, um in einer bestimmten Organisation Inhaberberechtigungen zu erteilen. Lassen Sie das Flag `-o` weg, um dem angegebenen Websiteadministrator in allen Organisationen Inhaberberechtigungen zu erteilen.
- Das Flag `-a` erteilt allen Websiteadministratoren in allen Organisationen Inhaberberechtigungen.
- Das Flag `-y` umgeht die manuelle Bestätigung.

Mit diesem Dienstprogramm ist es nicht möglich, einen Nicht-Websiteadministrator auf einen Inhaber sämtlicher Organisationen hochzustufen. Mit [ghe-user-promote](#ghe-user-promote) können Sie ein gewöhnliches Benutzerkonto auf einen Websiteadministrator hochstufen.

Einem einzelnen Benutzer in einer bestimmten Organisation Organisationsinhaberberechtigungen erteilen

```shell
ghe-org-admin-promote -u <em>USERNAME</em> -o <em>ORGANIZATION</em>
```

Einem bestimmten Websiteadministrator in allen Organisationen Organisationsinhaberberechtigungen erteilen

```shell
ghe-org-admin-promote -u <em>USERNAME</em>
```

Allen Websiteadministratoren in einer bestimmten Organisation Organisationsinhaberberechtigungen erteilen

```shell
ghe-org-admin-promote -o <em>ORGANIZATION</em>
```

Allen Websiteadministratoren in allen Organisationen Organisationsinhaberberechtigungen erteilen

```shell
ghe-org-admin-promote -a
```

#### ghe-reactivate-admin-login

Führen Sie diesen Befehl aus, um die {% data variables.enterprise.management_console %} nach 10 fehlerhaften Anmeldeversuchen innerhalb von 10 Minuten sofort zu entsperren.

```shell
$ ghe-reactivate-admin-login
```

#### ghe-resque-info

Dieses Dienstprogramm zeigt Informationen zu aktiven und zu in der Warteschlange befindlichen Hintergrundaufträgen an. Es zeigt dieselben Auftragszählnummern wie die Leiste mit den Administratorstatistiken im oberen Bereich jeder Seite an.

Mit diesem Dienstprogramm kann ermittelt werden, ob der Resque-Server beim Verarbeiten der Hintergrundaufträge Probleme hat. Eines der folgenden Szenarien kann auf ein Problem mit Resque hinweisen:

* Die Anzahl der Hintergrundaufträge wird erhöht, während die aktiven Aufträge identisch bleiben.
* Die Ereignis-Feeds werden nicht aktualisiert.
* Webhooks are not being triggered.
* Die Weboberfläche wird nach einem Git-Push nicht aktualisiert.

Wenn Sie vermuten, dass Resque fehlschlägt, wenden Sie sich zur Unterstützung an {% data variables.contact.contact_ent_support %}.

Mit diesem Befehl können Sie Aufträge in der Warteschlange zudem anhalten oder fortsetzen.

```shell
$ ghe-resque-info
# Listet Warteschlangen und die Anzahl der aktuell in die Warteschlange versetzten Aufträge auf
$ ghe-resque-info -p <em>QUEUE</em>
# Hält die angegebene Warteschlange an
$ ghe-resque-info -r <em>QUEUE</em>
# Setzt die angegebene Warteschlange fort
```

#### ghe-saml-mapping-csv

Dieses Dienstprogramm kann dabei helfen, SAML-Datensätze zuzuordnen.

Um eine CSV-Datei mit allen SAML-Zuordnungen für Deine {% data variables.product.product_name %}-Benutzer zu erstellen:
```shell
$ ghe-saml-mapping-csv -d
```

Um einen Trockenlauf der Aktualisierung von SAML-Zuordnungen mit neuen Werten durchzuführen:
```shell
$ ghe-saml-mapping-csv -u -n -f /path/to/file
```

Um SAML-Zuordnungen mit neuen Werten zu aktualisieren:
```shell
$ ghe-saml-mapping-csv -u -f /path/to/file
```

#### ghe-service-list

Mit diesem Dienstprogramm werden alle Dienste aufgelistet, die auf Ihrer Appliance gestartet oder angehalten (oder ausgeführt werden oder warten) wurden.

```shell
$ ghe-service-list
start/running
  - github-resqued, process 12711
  - github-unicorn, process 12726
  - github-gitauth, process 12743
  - git-daemon, process 12755
  - babeld, process 12771
  - github-svn-proxy, process 12802
  - gist-unicorn, process 12832
  - gist-resqued, process 12881
  - render-unicorn, process 12939
  - hookshot-unicorn, process 13076
  - nodeload2, process 13192
  - slumlord-unicorn, process 13304
  - ghe-storage, process 2012
  - enterprise-manage-unicorn, process 2024
  - enterprise-manage-resque, process 2053

stop/waiting
  - ghe-replica-mode
```

{% tip %}

Die von diesem Befehl zurückgegebenen Dienstnamen können mit „[`systemctl`](https://www.freedesktop.org/software/systemd/man/systemctl.html)“-Befehlen verwendet werden, um diese Dienste bei Bedarf zu beenden, zu starten oder erneut zu starten. Ein Beispiel:

```shell
$ sudo systemctl restart github-resqued
```

Das Beenden von Diensten führt zu Ausfallzeiten Ihrer Installation, daher sollten Sie sich an {% data variables.contact.contact_ent_support %} wenden, bevor Sie einen Dienst beenden oder neu starten.

{% endtip %}

#### ghe-set-password

Mit `ghe-set-password` können Sie ein neues Passwort festlegen, um sich bei der [{% data variables.enterprise.management_console %}](/enterprise/{{ currentVersion }}/admin/guides/installation/accessing-the-management-console) zu authentifizieren.

```shell
ghe-set-password <new_password>
```

#### ghe-ssh-check-host-keys

Dieses Dienstprogramm gleicht die vorhandenen SSH-Hostschlüssel mit der Liste der bekannten kompromittierten SSH-Hostschlüssel ab.

```shell
$ ghe-ssh-check-host-keys
```

Wenn ein kompromittierter Hostschlüssel gefunden wird, wird das Dienstprogramm mit dem Status `1` und der folgenden Meldung beendet:
```shell
> One or more of your SSH host keys were found in the blacklist.
> Please reset your host keys using ghe-ssh-roll-host-keys.
```

Wenn kein kompromittierter Hostschlüssel gefunden wurde, wird das Dienstprogramm mit dem Status `0` und der folgenden Meldung beendet:
```shell
> The SSH host keys were not found in the SSH host key blacklist.
> No additional steps are needed/recommended at this time.
```

#### ghe-ssh-roll-host-keys

Dieses Dienstprogramm rotiert die SSH-Hostschlüssel und ersetzt sie durch neu generierte Schlüssel.

```shell
$ sudo ghe-ssh-roll-host-keys
Proceed with rolling SSH host keys? This will delete the
existing keys in /etc/ssh/ssh_host_* and generate new ones. [y/N]

# Drücken Sie auf „Y“, um den Löschvorgang zu bestätigen, oder verwenden Sie den Switch „-y“, um diese Eingabeaufforderung zu umgehen

> SSH host keys have successfully been rolled.
```

#### ghe-ssh-weak-fingerprints

Dieses Dienstprogramm gibt einen Bericht der bekannten unsicheren SSH-Schlüssel zurück, die auf der {% data variables.product.prodname_enterprise %}-Appliance gespeichert sind. Optional können Sie Benutzerschlüssel in einer Massenaktion widerrufen. Das Dienstprogramm meldet unsichere Systemschlüssel, die Sie in der [{% data variables.enterprise.management_console %}](/enterprise/{{ currentVersion }}/admin/guides/installation/accessing-the-management-console) manuell widerrufen müssen.

```shell
# Bericht der unsicheren Benutzer- und SSH-Systemschlüssel ausgeben
$ ghe-ssh-weak-fingerprints

# Alle unsicheren Benutzerschlüssel widerrufen
$ ghe-ssh-weak-fingerprints --revoke
```

#### ghe-ssl-acme

Mit diesem Dienstprogramm können Sie ein Let's Encrypt-Zertifikat auf Ihrer {% data variables.product.prodname_enterprise %}-Appliance installieren. Weitere Informationen finden Sie unter „[TLS konfigurieren](/enterprise/{{ currentVersion }}/admin/guides/installation/configuring-tls)“.

Du kannst das `-x` Flag verwenden, um die ACME-Konfiguration zu entfernen.

```shell
ghe-ssl-acme -e
```

#### ghe-ssl-ca-certificate-install

Mit diesem Dienstprogramm können Sie ein benutzerdefiniertes CA-Root-Zertifikat auf Ihrem {% data variables.product.prodname_enterprise %} Server erstellen. Das Zertifikat muss im PEM-Format vorliegen. Wenn Ihr Zertifikatsanbieter darüber hinaus mehrere CA-Zertifikate in eine einzelne Datei aufnimmt, müssen Sie sie in einzelne Dateien trennen, die Sie anschließend jeweils an `ghe-ssl-ca-certificate-install` weitergeben.

Führen Sie dieses Dienstprogramm aus, um eine Zertifikatskette für die S/MIME-Commit-Signaturverifizierung hinzuzufügen. Weitere Informationen finden Sie unter „[Informationen zur Verifizierung einer Commit-Signatur](/enterprise/{{ currentVersion }}/user/articles/about-commit-signature-verification/)“.

Führen Sie dieses Dienstprogramm aus, wenn {% data variables.product.product_location %} keine Verbindung mit einem anderen Server herstellen kann, da Letzterer ein selbstsigniertes SSL-Zertifikat oder ein SSL-Zertifikat verwendet, wofür kein erforderliches CA-Bundle bereitgestellt wird. Eine Möglichkeit, dies zu bestätigen, besteht darin, `openssl s_client -connect host:port -verify 0 -CApath /etc/ssl/certs` auf {% data variables.product.product_location %} auszuführen. Wenn das SSL-Zertifikat des Remote-Servers verifiziert werden kann, sollte Ihre `SSL-Sitzung` den Rückgabecode 0 aufweisen (siehe unten).

```
SSL-Session:
    Protocol  : TLSv1
    Cipher    : AES128-SHA
    Session-ID: C794EBCC3CBC10F747C9AFC029C03C1048FC99CFC34D13D7444E0F267C58DF4C
    Session-ID-ctx:
    Master-Key: 02A7C47CFD6EEC87D3C710E9DD87390E04EF82DDD7514AE03127D5DC1945FC0CAEFB5395791AEA598667EFA61B9EA8C5
    Key-Arg   : None
    Start Time: 1394581597
    Timeout   : 300 (sec)
    Verify return code: 0 (ok)
```

Wenn das SSL-Zertifikat des Remote-Servers *nicht* verifiziert werden kann, sollte Ihre `SSL-Sitzung` einen Rückgabecode ungleich null zurückgeben:

```
SSL-Session:
    Protocol  : TLSv1
    Cipher    : AES128-SHA
    Session-ID: 82CB288051A6DB66094C50A69CF1292AEE7E54C6B01B659B98AB336F8C33863E
    Session-ID-ctx:
    Master-Key: 01B025B2F764043A27919A8D1355AAECD8844FF0831B1D664042334790574A6F4025BAB085D4ED71D71AAB3091B849E5
    Key-Arg   : None
    Start Time: 1394581782
    Timeout   : 300 (sec)
    Verify return code: 27 (certificate not trusted)
```

Sie können die folgenden zusätzlichen Optionen mit dem Dienstprogramm verwenden:
- Mit dem Flag `-r` können Sie ein CA-Zertifikat deinstallieren.
- Mit dem Flag `-h` werden mehr Nutzungsinformationen angezeigt.

```shell
ghe-ssl-ca-certificate-install -c <em>/path/to/certificate</em>
```

#### ghe-ssl-generate-csr

Mit diesem Dienstprogramm können Sie einen privaten Schlüssel und eine Zertifikatsignierungsanforderung (Certificate Signing Request, CSR) generieren, die Sie für eine kommerzielle oder private Zertifizierungsstelle freigeben können, um ein gültiges Zertifikat abzurufen, das Sie für Ihre Instanz verwenden können. Weitere Informationen finden Sie unter „[TLS konfigurieren](/enterprise/{{ currentVersion }}/admin/guides/installation/configuring-tls)“.

Verwenden Sie das Flag `-h`, um weitere Informationen zu diesem Befehl oder zusätzliche Informationen anzuzeigen.

```shell
ghe-ssl-generate-csr
```

#### ghe-storage-extend

Einige Plattformen erfordern dieses Skript, um das Benutzer-Volume zu erweitern. Weitere Informationen finden Sie unter „[Speicherkapazität erhöhen](/enterprise/admin/guides/installation/increasing-storage-capacity/)“.

```shell
$ ghe-storage-extend
```

#### ghe-version

Dieses Dienstprogramm gibt die Version, Plattform und den Build von {% data variables.product.product_location %} aus.

```shell
$ ghe-version
```

#### ghe-webhook-logs

Dieses Dienstprogramm gibt Webhook-Auslieferungsprotokolle für Administratoren zurück, damit diese Issues überprüfen und ermitteln können.

```shell
ghe-webhook-logs
```

Um alle fehlgeschlagenen Hook-Auslieferungen vom Vortag anzuzeigen:
```shell
ghe-webhook-logs -f -a <em>YYYYMMDD</em>
```

Um die vollständige Hook-Nutzlast, das Ergebnis und alle Ausnahmen für die Lieferung anzuzeigen:
```shell
ghe-webhook-logs -g <em>delivery-guid</em> -v
```

Um globale Webhook-Lieferungen anzuzeigen:
```shell
ghe-webhook-logs --global
```

### Clustering

#### ghe-cluster-status

Mit diesem Dienstprogramm kannst Du den verteilten {% data variables.product.prodname_pages %} -Server verwalten.

```shell
$ ghe-cluster-status
```

#### ghe-cluster-support-bundle

Dieses Dienstprogramm erstellt eine Support-Bundle-Tarball-Datei, die wichtige Protokolle von jedem Knoten in einer Geo-Replikation oder Clustering-Konfiguration enthält.

Der Befehl erstellt standardmäßig die Tarball-Datei in */tmp*. Sie können die Tarball-Datei für das einfache Streaming über SSH auch mittels `cat` an `STDOUT` übertragen. Dies ist nützlich, wenn die Webbenutzeroberfläche nicht antwortet oder wenn der Download eines Support-Bundles von */setup/support* nicht funktioniert. Sie müssen diesen Befehl ausführen, wenn Sie ein *erweitertes* Bundle generieren möchten, das ältere Protokolle enthält. Sie können diesen Befehl auch ausführen, um das Cluster-Support-Bundle direkt für den {% data variables.product.prodname_enterprise %}-Support hochzuladen.

Um ein Standardpaket zu erstellen:
```shell
$ ssh -p 122 admin@<em>hostname</em> -- 'ghe-cluster-support-bundle -o' > cluster-support-bundle.tgz
```

Um ein erweitertes Paket zu erstellen:
```shell
$ ssh -p 122 admin@<em>hostname</em> -- 'ghe-cluster-support-bundle -x -o' > cluster-support-bundle.tgz
```

Um ein Paket an {% data variables.contact.github_support %} zu senden:
```shell
$ ssh -p 122 admin@<em>hostname</em> -- 'ghe-cluster-support-bundle -u'
```

Um ein Paket an {% data variables.contact.github_support %} zu senden und das Paket mit einem Ticket zu verknüpfen:
```shell
$ ssh -p 122 admin@<em>hostname</em> -- 'ghe-cluster-support-bundle -t <em>ticket-id</em>'
```

{% if currentVersion ver_gt "enterprise-server@2.21" %}
#### ghe-cluster-failover

Fail over from active cluster nodes to passive cluster nodes. For more information, see "[Initiating a failover to your replica cluster](/enterprise/admin/enterprise-management/initiating-a-failover-to-your-replica-cluster)."

```shell
ghe-cluster-failover
```
{% endif %}

#### ghe-dpages

Mit diesem Dienstprogramm kannst Du den verteilten {% data variables.product.prodname_pages %} -Server verwalten.

```shell
ghe-dpages
```

Um eine Zusammenfassung des Repository-Standorts und -Zustands anzuzeigen:
```shell
ghe-dpages status
```

Um einen {% data variables.product.prodname_pages %}-Speicherdienst zu evakuieren, bevor ein Cluster-Knoten evakuiert wird:
``` shell
ghe-dpages evacuate pages-server-<uuid>
```

#### ghe-spokes

Mit diesem Dienstprogramm können Sie die drei Kopien jedes Repositorys auf den verteilten Git-Servern verwalten.

```shell
ghe-spokes
```

Um eine Zusammenfassung des Repository-Standorts und -Zustands anzuzeigen:

```shell
ghe-spokes status
```

Um die Server anzuzeigen, auf denen das Repository gespeichert ist:

```shell
ghe-spokes route
```

Um Speicherdienste auf einem Cluster-Knoten zu evakuieren:

``` shell
ghe-spokes server evacuate git-server-<uuid>
```

#### ghe-storage

Mit diesem Dienstprogramm können Sie alle Speicherdienste evakuieren, bevor Sie einen Clusterknoten evakuieren.

``` shell
ghe-storage evacuate storage-server-<uuid>
```

### Git

#### ghe-btop

Eine `top`-ähnliche Schnittstelle für alle Git-Vorgänge.

```shell
ghe-btop [ <port number> | --help | --usage ]
```

#### ghe-repo

Mit diesem Dienstprogramm können Sie das Verzeichnis eines Repositorys ändern und als der Benutzer `git` eine interaktive Shell öffnen. Durch Ausführung der Befehle `git-*` oder `git-nw-*` können Sie die manuelle Untersuchung oder Wartung eines Repositorys durchführen.

```shell
ghe-repo <em>username</em>/<em>reponame</em>
```

#### ghe-repo-gc

Mit diesem Dienstprogramm wird ein Repository-Netzwerk neu gepackt, um den Paketspeicher zu optimieren. Wenn Sie über ein großes Repository verfügen, wird seine Größe durch die Ausführung dieses Befehls ggf. reduziert. {% data variables.product.prodname_enterprise %} führt diesen Befehl automatisch während der gesamten Interaktion mit einem Repository-Netzwerk aus.

Sie können das optionale Argument `--prune` hinzufügen, um nicht erreichbare Git-Objekte zu entfernen, auf die weder über einen Branch noch über ein Tag oder andere Refs verwiesen wird. Dies ist besonders nützlich zum sofortigen Entfernen [zuvor gelöschter sensibler Informationen](/enterprise/user/articles/remove-sensitive-data/).

```shell
ghe-repo-gc <em>username</em>/<em>reponame</em>
```

### Import und Export

#### ghe-migrator

`ghe-migrator` ist ein hochwertiges Tool für die Migration von einer GitHub-Instanz zu einer anderen. Sie können Ihre Instanzen konsolidieren oder Ihre Organisation, Benutzer, Teams und Repositorys von GitHub.com nach {% data variables.product.prodname_enterprise %} verschieben.

Weitere Informationen finden Sie in unserem Leitfaden [Benutzer-, Organisations- und Repository-Daten migrieren](/enterprise/admin/guides/migrations/).

#### git-import-detect

Ermittelt anhand einer URL, welcher Quellcodeverwaltungssystem-Typ sich am anderen Ende befindet. Während eines manuellen Imports ist dieser wahrscheinlich bereits bekannt. Dies kann jedoch bei automatisierten Skripts sehr nützlich sein.
```shell
git-import-detect
```

#### git-import-hg-raw

Dieses Hilfsprogramm importiert ein Mercurial-Repository in dieses Git-Repository. Weitere Informationen findest Du unter „[Daten aus Versionskontroll-Systemen von Drittanbietern importieren](/enterprise/admin/guides/migrations/importing-data-from-third-party-version-control-systems/)“.
```shell
git-import-hg-raw
```

#### git-import-svn-raw

Dieses Dienstprogramm importiert Daten über den Subversion-Verlauf und über Dateien in einen Git-Branch. Dies ist eine direkte Kopie der Struktur, wobei Trunk- oder Branch-Unterscheidungen ignoriert werden. Weitere Informationen findest Du unter „[Daten aus Versionskontroll-Systemen von Drittanbietern importieren](/enterprise/admin/guides/migrations/importing-data-from-third-party-version-control-systems/)“.
```shell
git-import-svn-raw
```

#### git-import-tfs-raw

Dieses Hilfsprogramm importiert von Team Foundation Version Control. Weitere Informationen findest Du unter „[Daten aus Versionskontroll-Systemen von Drittanbietern importieren](/enterprise/admin/guides/migrations/importing-data-from-third-party-version-control-systems/)“.
```shell
git-import-tfs-raw
```

#### git-import-rewrite

Dieses Dienstprogramm schreibt das importierte Repository erneut. Dies gibt Dir die Möglichkeit, Autoren umzubenennen, und erzeugt für Subversion und TFS auf Ordnern basierende Git-Branches. Weitere Informationen findest Du unter „[Daten aus Versionskontroll-Systemen von Drittanbietern importieren](/enterprise/admin/guides/migrations/importing-data-from-third-party-version-control-systems/)“.
```shell
git-import-rewrite
```

### Unterstützung

#### ghe-diagnostics

Dieses Dienstprogramm führt eine Vielzahl an Überprüfungen durch und erfasst Informationen zu Ihrer Installation, die Sie an den Support senden können, damit der Support Ihre Probleme diagnostizieren kann.

Derzeit ähnelt die Ausgabe dieses Dienstprogramms dem Herunterladen der Diagnoseinformationen in der {% data variables.enterprise.management_console %}. Im Laufe der Zeit können ihr jedoch zusätzliche Verbesserungen hinzugefügt werden, die auf der Webbenutzeroberfläche nicht verfügbar sind. Weitere Informationen finden Sie unter „[Diagnosedateien erstellen und freigeben](/enterprise/admin/guides/enterprise-support/providing-data-to-github-support#creating-and-sharing-diagnostic-files)“.

```shell
ghe-diagnostics
```

#### ghe-support-bundle

{% data reusables.enterprise_enterprise_support.use_ghe_cluster_support_bundle %}
Dieses Dienstprogramm erstellt eine Support-Bundle-Tarball-Datei, die wichtige Protokolle aus Ihrer Instanz enthält.

Der Befehl erstellt standardmäßig die Tarball-Datei in */tmp*. Sie können die Tarball-Datei für das einfache Streaming über SSH auch mittels `cat` an `STDOUT` übertragen. Dies ist nützlich, wenn die Webbenutzeroberfläche nicht antwortet oder wenn der Download eines Support-Bundles von */setup/support* nicht funktioniert. Sie müssen diesen Befehl ausführen, wenn Sie ein *erweitertes* Bundle generieren möchten, das ältere Protokolle enthält. Sie können diesen Befehl auch ausführen, um das Support-Bundle direkt für den {% data variables.product.prodname_enterprise %}-Support hochzuladen.

Um ein Standardpaket zu erstellen:
```shell
$ ssh -p 122 admin@<em>hostname</em> -- 'ghe-support-bundle -o' > support-bundle.tgz
```

Um ein erweitertes Paket zu erstellen:
```shell
$ ssh -p 122 admin@<em>hostname</em> -- 'ghe-support-bundle -x -o' > support-bundle.tgz
```

Um ein Paket an {% data variables.contact.github_support %} zu senden:
```shell
$ ssh -p 122 admin@<em>hostname</em> -- 'ghe-support-bundle -u'
```

Um ein Paket an {% data variables.contact.github_support %} zu senden und das Paket mit einem Ticket zu verknüpfen:

```shell
$ ssh -p 122 admin@<em>hostname</em> -- 'ghe-support-bundle -t <em>ticket-id</em>'
```

#### ghe-support-upload

Dieses Dienstprogramm sendet Informationen von Ihrer Appliance an den {% data variables.product.prodname_enterprise %}-Support. Sie können eine lokale Datei oder einen Datenstrom von bis zu 100 MB über `STDIN` angeben. Optional können die hochgeladenen Daten einem Supportticket zugeordnet werden.

Um eine Datei an {% data variables.contact.github_support %} zu senden und die Datei mit einem Ticket zu verknüpfen:
```shell
ghe-support-upload -f <em>path/to/your/file</em> -t <em>ticket-id</em>
```

Um Daten über `STDIN` hochzuladen und die Daten mit einem Ticket verknüpfen:
```shell
<em>ghe-repl-status -vv</em> | ghe-support-upload -t <em>ticket-id</em> -d "<em>Verbose Replication Status</em>"
```

In diesem Beispiel sendet `ghe-repl-status -vv` ausführliche Statusinformationen von einer Replikat-Appliance. Sie sollten `ghe-repl-status -vv` durch die bestimmten Daten, die Sie an `STDIN` streamen möchten, und `Verbose Replication Status` (Ausführlicher Replikationsstatus) durch eine kurze Beschreibung der Daten ersetzen. {% data reusables.enterprise_enterprise_support.support_will_ask_you_to_run_command %}

### Upgrade von {% data variables.product.prodname_ghe_server %}

#### ghe-upgrade

Dieses Dienstprogramm installiert oder verifiziert ein Upgrade-Paket. Darüber hinaus können Sie dieses Dienstprogramm verwenden, um ein Rollback einer Patch-Veröffentlichung auszuführen, wenn ein Upgrade fehlschlägt oder unterbrochen wird. Weitere Informationen finden Sie unter „[Upgrade von {% data variables.product.prodname_ghe_server %}](/enterprise/{{ currentVersion }}/admin/guides/installation/upgrading-github-enterprise-server/)“.

Um ein Upgrade-Paket zu überprüfen:
```shell
ghe-upgrade --verify <em>UPGRADE-PACKAGE-FILENAME</em>
```

Um ein Upgrade-Paket zu installieren:
```shell
ghe-upgrade <em>UPGRADE-PACKAGE-FILENAME</em>
```

{% data reusables.enterprise_installation.command-line-utilities-ghe-upgrade-rollback %}

#### ghe-upgrade-scheduler

Dieses Dienstprogramm verwaltet die geplante Installation von Upgrade-Paketen. Sie können geplante Installationen anzeigen, neu erstellen oder entfernen. Pläne müssen mit Cron-Ausdrücken erstellt werden. Weitere Informationen finden Sie im [Wikipedia-Eintrag zu Cron](https://de.wikipedia.org/wiki/Cron#Overview).

Um eine neue Installation für ein Paket einzuplanen:
```shell
$ ghe-upgrade-scheduler -c "0 2 15 12 *" <em>UPGRADE-PACKAGE-FILENAME</em>
```

Um eingeplante Installationen für ein Paket anzuzeigen:
```shell
$ ghe-upgrade-scheduler -s <em>UPGRADE PACKAGE FILENAME</em>
> 0 2 15 12 * /usr/local/bin/ghe-upgrade -y -s <em>UPGRADE-PACKAGE-FILENAME</em> > /data/user/common/<em>UPGRADE-PACKAGE-FILENAME</em>.log 2>&1
```

Um eingeplante Installationen für ein Paket zu entfernen:
```shell
$ ghe-upgrade-scheduler -r <em>UPGRADE PACKAGE FILENAME</em>
```

#### ghe-update-check

Dieses Dienstprogramm überprüft, ob eine neue Patch-Veröffentlichung von {% data variables.product.prodname_enterprise %} verfügbar ist. Falls dies der Fall und auf Ihrer Instanz Speicherplatz verfügbar ist, wird das Paket heruntergeladen. Es wird standardmäßig unter */var/lib/ghe-updates* gespeichert. Anschließend kann ein Administrator [das Upgrade durchführen](/enterprise/admin/guides/installation/updating-the-virtual-machine-and-physical-resources/).

Eine Datei mit dem enthaltenen Downloadstatus ist unter */var/lib/ghe-updates/ghe-update-check.status* verfügbar.

Verwenden Sie den Switch `-i`, um nach der neuesten {% data variables.product.prodname_enterprise %}-Version zu suchen.

```shell
$ ssh -p 122 admin@<em>hostname</em> -- 'ghe-update-check'
```

### Benutzerverwaltung

#### ghe-license-usage

Dieses Dienstprogramm exportiert eine Liste von Benutzern der Installation im JSON-Format. Wenn Deine Instanz mit der {% data variables.product.prodname_ghe_cloud %} verbunden ist, verwendet der {% data variables.product.prodname_ghe_server %} diese Informationen, um Lizenzinformationen an die {% data variables.product.prodname_ghe_cloud %} zu melden. Weitere Informationen findest Du unter „[{% data variables.product.prodname_ghe_server %} mit {% data variables.product.prodname_ghe_cloud %} verbinden](/enterprise/admin/installation/connecting-github-enterprise-server-to-github-enterprise-cloud).“

Standardmäßig wird die Liste der Benutzer in der resultierenden JSON-Datei verschlüsselt. Verwenden Sie das Flag `-h`, um weitere Optionen anzuzeigen.

```shell
ghe-license-usage
```

#### ghe-org-membership-update

Dieses Dienstprogramm erzwingt die standardmäßige Einstellung für die Sichtbarkeit von Mitgliedschaften in der Organisation für alle Mitglieder auf Ihrer Instanz. For more information, see "[Configuring visibility for organization membership](/enterprise/{{ currentVersion }}/admin/guides/user-management/configuring-visibility-for-organization-membership)." Setting options are `public` or `private`.

```shell
ghe-org-membership-update --visibility=<em>SETTING</em>
```

#### ghe-user-csv

Dieses Dienstprogramm exportiert eine Liste aller Benutzer in der Installation im CSV-Format. Die CSV-Datei enthält die E-Mail-Adresse, welchen Benutzertyp sie aufweisen (z. B. Administrator, Benutzer), über wie viele Repositorys, SSH-Schlüssel und Organisationsmitgliedschaften sie verfügen, wie die letzte protokollierte IP-Adresse lautet usw. Verwenden Sie das Flag `-h`, um weitere Optionen anzuzeigen.

```shell
ghe-user-csv -o > users.csv
```

#### ghe-user-demote

Dieses Dienstprogramm stuft den angegebenen Benutzer vom Administratorstatus auf einen gewöhnlichen Benutzer zurück. Sie sollten die Webbenutzeroberfläche verwenden, um diese Aktion durchzuführen, dieses Dienstprogramm jedoch für den Fall bereitstellen, dass das Dienstprogramm `ghe-user-promote` einen fehlerhaften Zustand aufweist und Sie einen Benutzer erneut über die CLI zurückstufen müssen.

```shell
ghe-user-demote <em>some-user-name</em>
```

#### ghe-user-promote

Dieses Dienstprogramm stuft das angegebene Benutzerkonto auf einen Websiteadministrator hoch.

```shell
ghe-user-promote <em>some-user-name</em>
```

#### ghe-user-suspend

Dieses Dienstprogramm sperrt den angegebenen Benutzer und hindert ihn daran, sich anzumelden oder Elemente per Push-Vorgang an Ihre Repositorys zu übertragen oder aus diesen abzurufen.

```shell
ghe-user-suspend <em>some-user-name</em>
```

#### ghe-user-unsuspend

Dieses Dienstprogramm entsperrt den angegebenen Benutzer und gewährt ihm Zugriff, um sich anzumelden und um Elemente per Push-Vorgang an Ihre Repositorys zu übertragen und aus ihnen abzurufen.

```shell
ghe-user-unsuspend <em>some-user-name</em>
```
