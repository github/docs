---
title: Befehlszeilenprogramme
intro: '{% data variables.product.prodname_ghe_server %} enthält eine Vielzahl von Dienstprogrammen, mit denen bestimmte Probleme behoben oder bestimmte Aufgaben ausgeführt werden können.'
redirect_from:
  - /enterprise/admin/articles/viewing-all-services
  - /enterprise/admin/articles/command-line-utilities
  - /enterprise/admin/installation/command-line-utilities
  - /enterprise/admin/configuration/command-line-utilities
  - /admin/configuration/command-line-utilities
miniTocMaxHeadingLevel: 3
versions:
  ghes: '*'
type: reference
topics:
  - Enterprise
  - SSH
ms.openlocfilehash: 290a7eab73e10a88bae1e056e3f5b43d92274f8f
ms.sourcegitcommit: 5b16250eaa0806bf9497756cb27c54a80f688eec
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 11/18/2022
ms.locfileid: '148172805'
---
Du kannst diese Befehle überall in der VM ausführen, nachdem du dich als ein SSH-Administratorbenutzer angemeldet hast. Weitere Informationen findest du unter [Zugreifen auf die Verwaltungsshell (SSH)](/enterprise/admin/guides/installation/accessing-the-administrative-shell-ssh/).

## Allgemein

### ghe-announce

Dieses Dienstprogramm liegt im oberen Bereich jeder {% data variables.product.prodname_enterprise %}-Seite einen Banner fest. Diesen kannst du verwenden, um deinen Benutzer eine Mitteilung zu übermitteln.

```shell
# Sets a message that's visible to everyone
$ ghe-announce -s MESSAGE
> Announcement message set.
# Removes a previously set message
$ ghe-announce -u
> Removed the announcement message
```

{% ifversion ghe-announce-dismiss %} Verwende das `-d`-Flag, um es jedem bzw. jeder Benutzer*in zu ermöglichen, die Ankündigung selbst zu schließen.
```shell
# Sets a user-dismissible message that's visible to everyone
$ ghe-announce -d -s MESSAGE
> Announcement message set.
# Removes a previously set message
$ ghe-announce -u
> Removed the announcement message, which was user dismissible: MESSAGE
```
{% endif %}

{% ifversion ghes %} Mithilfe der Unternehmenseinstellungen für {% data variables.product.product_name %} kannst du auch ein Ankündigungsbanner festlegen. Weitere Informationen findest du unter „[Anpassen von Benutzernachrichten für deine Instanz](/enterprise/admin/user-management/customizing-user-messages-on-your-instance#creating-a-global-announcement-banner)“.
{% endif %}

{% ifversion ghes %}
<!--For earlier releases of GHES, see the previous service `ghe-resque-info`-->

### ghe-aqueduct

Dieses Dienstprogramm zeigt Informationen zu aktiven und zu in der Warteschlange befindlichen Hintergrundaufträgen an. Es zeigt dieselben Auftragszählnummern wie die Leiste mit den Administratorstatistiken im oberen Bereich jeder Seite an.

Mit diesem Dienstprogramm kann ermittelt werden, ob der Aqueduct-Server beim Verarbeiten von Hintergrundaufträgen Probleme hat. Eines der folgenden Szenarien kann auf ein Problem mit Aqueduct hinweisen:

* Die Anzahl der Hintergrundaufträge wird erhöht, während die aktiven Aufträge identisch bleiben.
* Die Ereignis-Feeds werden nicht aktualisiert.
* Webhooks werden nicht ausgelöst.
* Die Weboberfläche wird nach einem Git-Push nicht aktualisiert.

Wenn du vermutest, dass Aqueduct fehlschlägt, wende dich zur Unterstützung an {% data variables.contact.contact_ent_support %}.

Mit diesem Befehl kannst du Aufträge in der Warteschlange zudem anhalten oder fortsetzen.

```shell
$ ghe-aqueduct status
# lists queues and the number of currently queued jobs for all queues
$ ghe-aqueduct queue_depth --queue QUEUE
# lists the number of currently queued jobs for the specified queue
$ ghe-aqueduct pause --queue QUEUE
# pauses the specified queue
$ ghe-aqueduct resume --queue QUEUE
# resumes the specified queue
```
{% endif %}

### ghe-check-disk-usage

Dieses Dienstprogramm überprüft den Datenträger auf große Dateien oder auf gelöschte Dateien mit weiterhin vorhandenen offenen Datei-Handles. Du solltest dieses ausführen, wenn du versuchst, auf der Root-Partition Speicherplatz freizugeben.

```shell
ghe-check-disk-usage
```

### ghe-cleanup-caches

Dieses Dienstprogramm bereinigt eine Vielzahl von Caches auf dem Root-Volume, die potenziell zusätzlichen Speicherplatz beanspruchen. Wenn du feststellst, dass sich deine Root-Volume-Speicherplatzauslastung mit der Zeit merklich erhöht, empfiehlt es sich, dieses Dienstprogramm auszuführen, um nachzuvollziehen, ob es die Gesamtnutzung reduzieren kann.

```shell
ghe-cleanup-caches
```
### ghe-cleanup-settings

Dieses Dienstprogramm löscht alle vorhandenen {% data variables.enterprise.management_console %}-Einstellungen.

{% tip %}

**Tipp**: {% data reusables.enterprise_enterprise_support.support_will_ask_you_to_run_command %}

{% endtip %}

```shell
ghe-cleanup-settings
```

### ghe-config

Mit diesem Hilfsprogramm kannst du die Konfigurationseinstellungen von {% data variables.location.product_location %} abrufen und ändern.

```shell
$ ghe-config core.github-hostname
# Gets the configuration value of `core.github-hostname`
$ ghe-config core.github-hostname URL
# Sets the configuration value of `core.github-hostname` to the specified URL
$ ghe-config -l
# Lists all the configuration values
```
Ermöglicht es dir, den universellen eindeutigen Bezeichner (UUID) deines Knotens in `cluster.conf` zu finden.

```shell
  $ ghe-config HOSTNAME.uuid
```

{% ifversion ghes %} Ermöglicht es dir, eine Liste von Benutzern aus REST-API-Ratenbegrenzungen auszunehmen. Für diese Benutzer gilt weiterhin eine harte Grenze von 120.000 Anforderungen. Weitere Informationen findest du unter „[Ressourcen in der REST-API](/rest/overview/resources-in-the-rest-api#rate-limiting)“.

``` shell
$ ghe-config app.github.rate-limiting-exempt-users "HUBOT GITHUB-ACTIONS"
# Exempts the users hubot and github-actions from rate limits
```
{% endif %}

### ghe-config-apply

Dieses Dienstprogramm wendet {% data variables.enterprise.management_console %}-Einstellungen an, lädt Systemdienste neu, bereitet ein Speichergerät vor, lädt Anwendungsdienste neu und führt ausstehende Datenbankmigrationen aus. Es entspricht dem Klicken auf **Einstellungen speichern** in der Web-Benutzeroberfläche von {% data variables.enterprise.management_console %} oder dem Senden einer POST-Anforderung an [den `/setup/api/configure`-Endpunkt](/enterprise/user/rest/reference/enterprise-admin#management-console).

Du musst dies wahrscheinlich niemals manuell ausführen. Es ist jedoch verfügbar, wenn du den Prozess zum Speichern deiner Einstellungen über die SSH automatisieren möchtest.

```shell
ghe-config-apply
```

### ghe-console

Dieses Dienstprogramm öffnet die GitHub Rails-Konsole auf deiner {% data variables.product.prodname_enterprise %}-Appliance. {% data reusables.command_line.use_with_support_only %}

```shell
ghe-console
```

### ghe-dbconsole

Dieses Dienstprogramm öffnet eine MySQL-Datenbanksitzung auf deiner {% data variables.product.prodname_enterprise %}-Appliance. {% data reusables.command_line.use_with_support_only %}

```shell
ghe-dbconsole
```

### ghe-es-index-status
Dieses Dienstprogramm gibt eine Zusammenfassung der ElasticSearch-Indizes im CSV-Format zurück.

Drucken einer Indexzusammenfassung mit einer Header-Kopfzeile für `STDOUT`:
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

Drucken einer Indexzusammenfassung und von Pipe-Ergebnissen zur besseren Lesbarkeit für `column`:

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

### ghe-legacy-github-services-report

Dieses Dienstprogramm listet Repositorys auf deiner Appliance auf, die {% data variables.product.prodname_dotcom %} Services verwenden. Hierbei handelt es sich um eine Integrationsmethode, die am 1. Oktober 2018 eingestellt wird. Benutzer auf deiner Appliance haben {% data variables.product.prodname_dotcom %} Services möglicherweise so eingerichtet, dass für Push-Vorgänge an bestimmte Repositorys Benachrichtigungen erstellt werden. Weitere Informationen findest du unter „[Ankündigung der Einstellung von {% data variables.product.prodname_dotcom %}-Diensten](https://developer.github.com/changes/2018-04-25-github-services-deprecation/)“ im {% data variables.product.prodname_blog %} oder „[Ersetzen von {% data variables.product.prodname_dotcom %}-Diensten](/developers/overview/replacing-github-services)“. Verwende das Flag `-h`, um weitere Informationen zu diesem Befehl oder zusätzliche Informationen anzuzeigen.

```shell
ghe-legacy-github-services-report

```

### ghe-logs-tail

Mit diesem Dienstprogramm kannst du das Ende aller relevanten Protokolldateien aus deiner Installation ausgeben. Du kannst Optionen übergeben, um die Protokolle auf bestimmte Sätze zu begrenzen. Verwende das Flag „-h“, um zusätzliche Optionen anzuzeigen.

```shell
ghe-logs-tail
```

### ghe-maintenance

Mit diesem Dienstprogramm kannst du den Wartungsmoduszustand der Installation steuern. Es soll primär von der {% data variables.enterprise.management_console %} im Hintergrund verwendet werden, kann jedoch auch direkt verwendet werden. Weitere Informationen findest du unter „[Aktivieren und Planen des Wartungsmodus](/admin/guides/installation/enabling-and-scheduling-maintenance-mode)“.

```shell
ghe-maintenance -h
```

### ghe-motd

Dieses Dienstprogramm zeigt die Meldung des Tages (MOTD) an, die Administratoren sehen, wenn sie über die administrative Shell auf die Instanz zugreifen. Die Ausgabe enthält einen Überblick über den Status der Instanz.

```shell
ghe-motd
```

### ghe-nwo

Dieses Dienstprogramm gibt den Namen und den Inhaber eines Repositorys basierend auf der Repository-ID zurück.  

```shell
ghe-nwo REPOSITORY_ID
```

### ghe-org-admin-promote

Führe diesen Befehl aus, um Benutzern mit Websiteadministratorberechtigungen Organisationsinhaberberechtigungen auf der Appliance zu erteilen oder um beliebigen einzelnen Benutzern in einer einzelnen Organisation Organisationsinhaberberechtigungen zu erteilen. Du musst einen Benutzer bzw. eine Organisation angeben. Der Befehl `ghe-org-admin-promote` fragt immer nach Bestätigung, bevor er ausgeführt wird, es sei denn, du verwendest das Flag `-y`, um die Bestätigung zu umgehen.

Die folgenden Optionen kannst du mit dem Dienstprogramm verwenden:

- Das Flag `-u` gibt einen Benutzernamen an. Verwende dieses Flag, um einem bestimmten Benutzer Organisationsinhaberberechtigungen zu erteilen. Lass das Flag `-u` weg, um alle Websiteadministratoren für die angegebene Organisation hochzustufen.
- Das Flag `-o` gibt eine Organisation an. Verwende dieses Flag, um in einer bestimmten Organisation Inhaberberechtigungen zu erteilen. Lass das Flag `-o` weg, um dem angegebenen Websiteadministrator in allen Organisationen Inhaberberechtigungen zu erteilen.
- Das Flag `-a` erteilt allen Websiteadministratoren in allen Organisationen Inhaberberechtigungen.
- Das Flag `-y` umgeht die manuelle Bestätigung.

Mit diesem Dienstprogramm ist es nicht möglich, einen Nicht-Websiteadministrator auf einen Inhaber sämtlicher Organisationen hochzustufen. Mit [ghe-user-promote](#ghe-user-promote) kannst du ein gewöhnliches Benutzerkonto auf einen Websiteadministrator hochstufen.

Allen Websiteadministratoren in einer bestimmten Organisation Organisationsinhaberberechtigungen erteilen

```shell
ghe-org-admin-promote -u USERNAME -o ORGANIZATION
```

Einem bestimmten Websiteadministrator in allen Organisationen Organisationsinhaberberechtigungen erteilen

```shell
ghe-org-admin-promote -u USERNAME
```

Allen Websiteadministratoren in einer bestimmten Organisation Organisationsinhaberberechtigungen erteilen

```shell
ghe-org-admin-promote -o ORGANIZATION
```

Allen Websiteadministratoren in allen Organisationen Organisationsinhaberberechtigungen erteilen

```shell
ghe-org-admin-promote -a
```

### ghe-reactivate-admin-login

Verwende diesen Befehl, um die {% data variables.enterprise.management_console %} sofort zu entsperren nach {% ifversion enterprise-authentication-rate-limits %}einer Kontosperrung. Informationen zum Konfigurieren von Authentifizierungsrichtlinien für {% data variables.location.product_location %} findest du unter [Konfigurieren von Ratenbegrenzungen für Authentifizierungsrichtlinien](/admin/configuration/configuring-your-enterprise/configuring-rate-limits#configuring-authentication-policy-rate-limits).{% else %}10 fehlerhaften Anmeldeversuchen innerhalb von 10 Minuten.{% endif %}

```shell
$ ghe-reactivate-admin-login
```


### ghe-saml-mapping-csv

Dieses Dienstprogramm kann dabei helfen, SAML-Datensätze zuzuordnen.

Um eine CSV-Datei mit allen SAML-Zuordnungen für deine {% data variables.product.product_name %}-Benutzer*innen zu erstellen:
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

### ghe-service-list

Mit diesem Dienstprogramm werden alle Dienste aufgelistet, die auf deiner Appliance gestartet oder angehalten (oder ausgeführt werden oder warten) wurden.

```shell
$ ghe-service-list
{% ifversion viewscreen-and-notebooks %}
active
  - alambic
  - alive
  - aqueduct-lite
  - authzd
  - babeld
  - codeload
  - consul, process 17114
  - consul-template, process 19493
  - driftwood
  - elasticsearch
  - enterprise-manage-unicorn, process 9359
  - ghe-user-disk, process 2545
  - git-daemon
  - github-env
  - github-gitauth
  - github-resqued
  - github-stream-processors
  - github-timerd
  - github-unicorn
  - gitrpcd
  - governor
  - gpgverify
  - grafana-server, process 19314
  - graphite-web, process 20189
  - hookshot-go
  - kafka-lite
  - kredz
  - lfs-server
  - mail-replies
  - memcached
  - minio
  - mysql
  - nginx
  - nomad, process 19562
  - pages
  - postfix
  - redis
  - spokesd
  - spokes-sweeper
  - svnbridge
  - token-scanning-api
  - token-scanning-backfill-worker
  - token-scanning-hydro-consumer
  - token-scanning-incremental-worker
  - token-scanning-udp-backfill-worker
  - treelights
  - turboscan
  - viewscreen

inactive
  - wireguard
{% else %}
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
  {% endif %}
```

### ghe-set-password

Mit `ghe-set-password` kannst du ein neues Kennwort festlegen, um sich bei der [{% data variables.enterprise.management_console %}](/enterprise/admin/guides/installation/accessing-the-management-console) zu authentifizieren.

```shell
ghe-set-password <new_password>
```

### ghe-setup-network

Mit diesem Dienstprogramm kannst du die primäre Netzwerkschnittstelle konfigurieren.

Um den visuellen Modus einzugeben, der dich durch die Konfiguration von Netzwerkeinstellungen führt:

```shell
$ ghe-setup-network -v
```

Verwende das Flag „-h“, um zusätzliche Optionen anzuzeigen.

### ghe-ssh-check-host-keys

Dieses Dienstprogramm gleicht die vorhandenen SSH-Hostschlüssel mit der Liste der bekannten kompromittierten SSH-Hostschlüssel ab.

```shell
$ ghe-ssh-check-host-keys
```

Wenn ein kompromittierter Hostschlüssel gefunden wird, hat das Dienstprogramm den Status `1` und die folgende Meldung wird angezeigt:
```shell
> One or more of your SSH host keys were found in the blacklist.
> Please reset your host keys using ghe-ssh-roll-host-keys.
```

Wenn kein kompromittierter Hostschlüssel gefunden wird, hat das Dienstprogramm den Status `0` und die folgende Meldung wird angezeigt:
```shell
> The SSH host keys were not found in the SSH host key blacklist.
> No additional steps are needed/recommended at this time.
```

### ghe-ssh-roll-host-keys

Dieses Dienstprogramm rotiert die SSH-Hostschlüssel und ersetzt sie durch neu generierte Schlüssel.

```shell
$ sudo ghe-ssh-roll-host-keys
Proceed with rolling SSH host keys? This will delete the
existing keys in /etc/ssh/ssh_host_* and generate new ones. [y/N]

# Press 'Y' to confirm deleting, or use the -y switch to bypass this prompt

> SSH host keys have successfully been rolled.
```

### ghe-ssh-weak-fingerprints

Dieses Dienstprogramm gibt einen Bericht der bekannten unsicheren SSH-Schlüssel zurück, die auf der {% data variables.product.prodname_enterprise %}-Appliance gespeichert sind. Optional kannst du Benutzerschlüssel in einer Massenaktion widerrufen. Das Dienstprogramm meldet schwache Systemschlüssel, die du manuell in der [{% data variables.enterprise.management_console %}](/enterprise/admin/guides/installation/accessing-the-management-console) sperren musst.

```shell
# Print a report of weak user and system SSH keys
$ ghe-ssh-weak-fingerprints

# Revoke all weak user keys
$ ghe-ssh-weak-fingerprints --revoke
```

### ghe-ssl-acme

Mit diesem Dienstprogramm kannst du ein Let's Encrypt-Zertifikat auf deiner {% data variables.product.prodname_enterprise %}-Appliance installieren. Weitere Informationen findest du unter [Konfigurieren von TLS](/enterprise/admin/guides/installation/configuring-tls).

Du kannst das Flag `-x` verwenden, um die ACME-Konfiguration zu entfernen.

```shell
ghe-ssl-acme -e
```

### ghe-ssl-ca-certificate-install

Mit diesem Dienstprogramm kannst du ein benutzerdefiniertes CA-Root-Zertifikat auf deinem {% data variables.product.prodname_enterprise %} Server erstellen. Das Zertifikat muss im PEM-Format vorliegen. Wenn dein Zertifikatsanbieter mehrere CA-Zertifikate in einer einzigen Datei bereitstellt, musst du diese in einzelne Dateien aufteilen, die du dann einzeln an `ghe-ssl-ca-certificate-install` übergibst.

Führe dieses Dienstprogramm aus, um eine Zertifikatskette für die S/MIME-Commit-Signaturverifizierung hinzuzufügen. Weitere Informationen findest du unter [Informationen zur Commitsignaturverifizierung](/enterprise/user/articles/about-commit-signature-verification/).

Führe dieses Dienstprogramm aus, wenn {% data variables.location.product_location %} keine Verbindung mit einem anderen Server herstellen kann, da Letzterer ein selbstsigniertes SSL-Zertifikat oder ein SSL-Zertifikat verwendet, wofür das erforderliche CA-Bundle nicht bereitgestellt wird. Eine Möglichkeit, dies zu überprüfen, ist die Ausführung von `openssl s_client -connect host:port -verify 0 -CApath /etc/ssl/certs` von {% data variables.location.product_location %} aus. Wenn das SSL-Zertifikat des Remote-Servers verifiziert werden kann, sollte deine `SSL-Session` den Rückgabecode 0 aufweisen (siehe unten).

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

Wenn das SSL-Zertifikat des Remote-Servers dagegen *nicht* verifiziert werden kann, sollte deine `SSL-Session` einen Rückgabecode ungleich null zurückgeben:

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

Du kannst die folgenden zusätzlichen Optionen mit dem Dienstprogramm verwenden:
- Mit dem Flag `-r` kannst du ein CA-Zertifikat deinstallieren.
- Mit dem Flag `-h` werden weitere Nutzungsinformationen angezeigt.

```shell
ghe-ssl-ca-certificate-install -c CERTIFICATE_PATH
```

### ghe-ssl-certificate-setup

Mit diesem Hilfsprogramm kannst du ein SSL-Zertifikat für {% data variables.location.product_location %} aktualisieren. 

Verwende das Flag `-h`, um weitere Informationen zu diesem Befehl oder zusätzliche Informationen anzuzeigen.

```shell
ghe-ssl-certificate-setup
```

### ghe-ssl-generate-csr

Mit diesem Dienstprogramm kannst du einen privaten Schlüssel und eine Zertifikatsignierungsanforderung (Certificate Signing Request, CSR) generieren, die du für eine kommerzielle oder private Zertifizierungsstelle freigeben kannst, um ein gültiges Zertifikat abzurufen, das du für deine Instanz verwenden kannst. Weitere Informationen findest du unter [Konfigurieren von TLS](/enterprise/admin/guides/installation/configuring-tls).

Verwende das Flag `-h`, um weitere Informationen zu diesem Befehl oder zusätzliche Informationen anzuzeigen.

```shell
ghe-ssl-generate-csr
```

### ghe-storage-extend

Einige Plattformen erfordern dieses Skript, um das Benutzer-Volume zu erweitern. Weitere Informationen findest du unter „[Erhöhung der Speicherkapazität](/enterprise/admin/guides/installation/increasing-storage-capacity/)“.

```shell
$ ghe-storage-extend
```

### ghe-version

Dieses Hilfsprogramm gibt die Version, Plattform und den Build von {% data variables.location.product_location %} aus.

```shell
$ ghe-version
```

### ghe-webhook-logs

Dieses Dienstprogramm gibt Webhook-Auslieferungsprotokolle für Administratoren zurück, damit diese Issues überprüfen und ermitteln können.

```shell
ghe-webhook-logs
```

Um alle fehlgeschlagenen Hook-Auslieferungen vom Vortag anzuzeigen: {% ifversion ghes %}
```shell
ghe-webhook-logs -f -a YYYY-MM-DD
```

Das Datumsformat sollte `YYYY-MM-DD`, `YYYY-MM-DD HH:MM:SS` oder `YYYY-MM-DD HH:MM:SS (+/-) HH:M` sein.
{% else %}
```shell
ghe-webhook-logs -f -a YYYYMMDD
```
{% endif %}

Um die vollständige Hook-Payload, das Ergebnis und alle Ausnahmen für die Lieferung anzuzeigen: {% ifversion ghes %}
```shell
ghe-webhook-logs -g DELIVERY_GUID
```
{% else %}
```shell
ghe-webhook-logs -g DELIVERY_GUID -v
```
{% endif %}

## Clustering

### ghe-cluster-status

Überprüfe die Integrität deiner Knoten und Dienste in einer Clusterbereitstellung von {% data variables.product.prodname_ghe_server %}.

```shell
$ ghe-cluster-status
```

### ghe-cluster-support-bundle

Dieses Dienstprogramm erstellt eine Support-Bundle-Tarball-Datei, die wichtige Protokolle von jedem Knoten in einer Geo-Replikation oder Clustering-Konfiguration enthält.

Standardmäßig erstellt der Befehl den Tarball in */tmp*, aber du kannst ihn auch nach `STDOUT` `cat` lassen, um das Streaming über SSH zu erleichtern. Dies ist nützlich, wenn die Web-Benutzeroberfläche nicht antwortet oder der Download eines Support-Bundles von */setup/support* nicht funktioniert. Du musst diesen Befehl ausführen, wenn du ein *erweitertes* Bundle generieren möchtest, das ältere Protokolle enthält. Du kannst diesen Befehl auch ausführen, um das Cluster-Support-Bundle direkt für den {% data variables.product.prodname_enterprise %}-Support hochzuladen.

Um ein Standardpaket zu erstellen:
```shell
$ ssh -p 122 admin@HOSTNAME -- 'ghe-cluster-support-bundle -o' > cluster-support-bundle.tgz
```

Um ein erweitertes Paket zu erstellen:
```shell
$ ssh -p 122 admin@HOSTNAME -- 'ghe-cluster-support-bundle -x -o' > cluster-support-bundle.tgz
```

Um ein Paket an {% data variables.contact.github_support %} zu senden:
```shell
$ ssh -p 122 admin@HOSTNAME -- 'ghe-cluster-support-bundle -u'
```

Um ein Paket an {% data variables.contact.github_support %} zu senden und das Paket mit einem Ticket zu verknüpfen:
```shell
$ ssh -p 122 admin@HOSTNAME -- 'ghe-cluster-support-bundle -t TICKET_ID'
```

{% ifversion ghes %}
### ghe-cluster-failover

Failover von aktiven Clusterknoten zu passiven Clusterknoten. Weitere Informationen findest du unter „[Initiieren eines Failovers für deine Replikat-Cluster](/enterprise/admin/enterprise-management/initiating-a-failover-to-your-replica-cluster)“.

```shell
ghe-cluster-failover
```
{% endif %}

### ghe-dpages

Mit diesem Dienstprogramm kannst du den verteilten {% data variables.product.prodname_pages %}-Server verwalten.

```shell
ghe-dpages
```

Um eine Zusammenfassung des Repository-Standorts und -Zustands anzuzeigen:
```shell
ghe-dpages status
```

Um einen {% data variables.product.prodname_pages %}-Speicherdienst zu evakuieren, bevor ein Cluster-Knoten evakuiert wird:
```shell
ghe-dpages evacuate pages-server-UUID
```

### ghe-spokes

Mit diesem Dienstprogramm kannst du die drei Kopien jedes Repositorys auf den verteilten Git-Servern verwalten.

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

```shell
ghe-spokes server evacuate git-server-UUID
```

### ghe-storage

Mit diesem Dienstprogramm kannst du alle Speicherdienste evakuieren, bevor du einen Clusterknoten evakuierst.

```shell
ghe-storage evacuate storage-server-UUID
```

## Git

### ghe-btop

Eine `top`-ähnliche Schnittstelle für aktuelle Git-Vorgänge.

```shell
ghe-btop [ <port number> | --help | --usage ]
```

#### ghe-governor

Dieses Dienstprogramm hilft beim Analysieren des Git-Datenverkehrs. Es fragt die _Governor_-Datendateien ab, die sich unter `/data/user/gitmon` befinden. {% data variables.product.company_short %} enthält eine Stunde Daten pro Datei, die zwei Wochen lang aufbewahrt werden. Weitere Informationen findest du unter [Analysieren des Git-Datenverkehrs mithilfe von Governor](https://github.community/t/analyzing-git-traffic-using-governor/13516) in {% data variables.product.prodname_github_community %}.

```bash
ghe-governor <subcommand> <column> [options]
```

```
ghe-governor -h
Usage: ghe-governor [-h] <subcommand> args

OPTIONS:
  -h | --help        Show this message.

Valid subcommands are:
  aggregate              Find the top (n) groups of queries for a grouping function and metric
  health                 Summarize all recent activity on one or more servers
  top                    Find the top (n) queries for a given metric
  dump                   Dump individual operations
  test-quotas            Check quota information

Try ghe-governor <subcommand> --help for more information on the arguments each subcommand takes.
```

### ghe-repo

Mit diesem Dienstprogramm kannst du das Verzeichnis eines Repositorys ändern und als der `git`-Benutzer eine interaktive Shell öffnen. Durch Ausführung der Befehle `git-*` oder `git-nw-*` kannst du die manuelle Untersuchung oder Wartung eines Repositorys durchführen.

```shell
ghe-repo USERNAME/REPONAME
```

### ghe-repo-gc

Mit diesem Dienstprogramm wird ein Repository-Netzwerk neu gepackt, um den Paketspeicher zu optimieren. Wenn du über ein großes Repository verfügst, wird seine Größe durch die Ausführung dieses Befehls ggf. reduziert. {% data variables.product.prodname_enterprise %} führt diesen Befehl automatisch während der gesamten Interaktion mit einem Repository-Netzwerk aus.

Du kannst das optionale Argument `--prune` hinzufügen, um nicht erreichbare Git-Objekte zu entfernen, auf die nicht aus einer Verzweigung, einem Tag oder durch einen anderen Verweis verwiesen wird. Dies ist besonders nützlich, um [zuvor gelöschte vertrauliche Informationen](/enterprise/user/articles/remove-sensitive-data/) sofort zu entfernen.

{% warning %}

**Warnung**: Bevor du das Argument `--prune` verwendest, um nicht erreichbare Git-Objekte zu entfernen, setze {% data variables.location.product_location %} in den Wartungsmodus, oder stelle sicher, dass alle Repositorys innerhalb desselben Repositorynetzwerks gesperrt sind. Weitere Informationen findest du unter „[Aktivieren und Planen des Wartungsmodus](/admin/configuration/configuring-your-enterprise/enabling-and-scheduling-maintenance-mode)“.

{% endwarning %}

```shell
ghe-repo-gc USERNAME/REPONAME
```

## {% data variables.product.prodname_actions %}

### ghe-actions-check

Dieses Dienstprogramm überprüft, ob alle Dienste für {% data variables.product.prodname_actions %} fehlerfrei sind. Weitere Informationen findest du unter „[Erste Schritte mit {% data variables.product.prodname_actions %} für {% data variables.product.product_name %}](/admin/github-actions/getting-started-with-github-actions-for-your-enterprise/getting-started-with-github-actions-for-github-enterprise-server)“ und „[Problembehandlung bei {% data variables.product.prodname_actions %} für dein Unternehmen](/admin/github-actions/advanced-configuration-and-troubleshooting/troubleshooting-github-actions-for-your-enterprise)“.

```shell
ghe-actions-check
```

### ghe-actions-precheck

Dieses Hilfsprogramm testet die Blobspeicherkonfiguration für {% data variables.product.prodname_actions %} auf {% data variables.location.product_location %}. Du kannst das Dienstprogramm verwenden, um deine Speicherkonfiguration zu überprüfen, bevor du {% data variables.product.prodname_actions %} für deine Instanz aktivierst.

Weitere Informationen zur Konfiguration von {% data variables.product.prodname_actions %} findest du unter „[Erste Schritte mit {% data variables.product.prodname_actions %} für {% data variables.product.product_name %}](/admin/github-actions/getting-started-with-github-actions-for-your-enterprise/getting-started-with-github-actions-for-github-enterprise-server)“.

```shell
ghe-actions-precheck -p [PROVIDER] -cs ["CONNECTION-STRING"]
```

Wenn dein Speichersystem ordnungsgemäß konfiguriert ist, wird die folgende Ausgabe angezeigt.

```
All Storage tests passed
```

## Importieren und exportieren

### ghe-migrator

`ghe-migrator` ist ein hochwertiges Tool für die Migration von einer GitHub-Instanz zu einer anderen. Du kannst deine Instanzen konsolidieren oder deine Organisation, Benutzer, Teams und Repositorys von GitHub.com nach {% data variables.product.prodname_enterprise %} verschieben.

Weitere Informationen findest du in unseren Leitfäden zum [Migrieren von Daten zu und von deinem Unternehmen](/enterprise/admin/user-management/migrating-data-to-and-from-your-enterprise/).

### git-import-detect

Ermittelt anhand einer URL, welcher Quellcodeverwaltungssystem-Typ sich am anderen Ende befindet. Während eines manuellen Imports ist dieser wahrscheinlich bereits bekannt. Dies kann jedoch bei automatisierten Skripts sehr nützlich sein.
```shell
git-import-detect
```

### git-import-hg-raw

Dieses Hilfsprogramm importiert ein Mercurial-Repository in dieses Git-Repository. Weitere Informationen findest du unter „[Importieren von Daten aus Versionskontrollsystemen von Drittanbietern](/enterprise/admin/guides/migrations/importing-data-from-third-party-version-control-systems/)“.
```shell
git-import-hg-raw
```

### git-import-svn-raw

Dieses Dienstprogramm importiert Daten über den Subversion-Verlauf und über Dateien in einen Git-Branch. Dies ist eine direkte Kopie der Struktur, wobei Trunk- oder Branch-Unterscheidungen ignoriert werden. Weitere Informationen findest du unter „[Importieren von Daten aus Versionskontrollsystemen von Drittanbietern](/enterprise/admin/guides/migrations/importing-data-from-third-party-version-control-systems/)“.
```shell
git-import-svn-raw
```

### git-import-tfs-raw

Dieses Dienstprogramm importiert von Team Foundation Version Control (TFVC). Weitere Informationen findest du unter „[Importieren von Daten aus Versionskontrollsystemen von Drittanbietern](/enterprise/admin/guides/migrations/importing-data-from-third-party-version-control-systems/)“.
```shell
git-import-tfs-raw
```

### git-import-rewrite

Dieses Dienstprogramm schreibt das importierte Repository erneut. Dies gibt dir die Möglichkeit, Autoren umzubenennen, und erzeugt für Subversion und TFVC auf Ordnern basierende Git-Verzweigungen. Weitere Informationen findest du unter „[Importieren von Daten aus Versionskontrollsystemen von Drittanbietern](/enterprise/admin/guides/migrations/importing-data-from-third-party-version-control-systems/)“.
```shell
git-import-rewrite
```

{% ifversion ghes > 3.3 %}

## Sicherheit

### ghe-find-insecure-git-operations

Dieses Hilfsprogramm durchsucht die Protokolle deiner Instanz und identifiziert Git-Vorgänge über SSH, die unsichere Algorithmen oder Hashfunktionen verwenden, einschließlich der Verschlüsselungsverfahren DSA, RSA-SHA-1, HMAC-SHA-1 und CBC. Du kannst die Ausgabe verwenden, um den Übergang jedes Clients zu einer sichereren SSH-Verbindung zu unterstützen. Weitere Informationen findest du unter [{% data variables.product.prodname_blog %}](https://github.blog/2022-06-28-improving-git-protocol-security-on-github-enterprise-server){% ifversion ghes < 3.6 %}.{% elsif ghes > 3.5 %} und [Konfigurieren von SSH-Verbindungen mit deiner Instanz](/admin/configuration/configuring-your-enterprise/configuring-ssh-connections-to-your-instance).{% endif %}

```shell
ghe-find-insecure-git-operations
```

{% endif %}

## Support

### ghe-diagnostics

Dieses Dienstprogramm führt eine Vielzahl an Überprüfungen durch und erfasst Informationen zu deiner Installation, die du an den Support senden kannst, damit der Support deine Probleme diagnostizieren kann.

Derzeit ähnelt die Ausgabe dieses Dienstprogramms dem Herunterladen der Diagnoseinformationen in der {% data variables.enterprise.management_console %}. Im Laufe der Zeit können ihr jedoch zusätzliche Verbesserungen hinzugefügt werden, die auf der Webbenutzeroberfläche nicht verfügbar sind. Weitere Informationen findest du unter „[Erstellen und Freigeben von Diagnosedateien](/enterprise/admin/guides/enterprise-support/providing-data-to-github-support#creating-and-sharing-diagnostic-files)“.

```shell
ghe-diagnostics
```

### ghe-support-bundle

{% data reusables.enterprise_enterprise_support.use_ghe_cluster_support_bundle %} Dieses Dienstprogramm erstellt eine Support-Bundle-Tarball-Datei, die wichtige Protokolle aus deiner Instanz enthält.

Standardmäßig erstellt der Befehl den Tarball in */tmp*, aber du kannst ihn auch nach `STDOUT` `cat` lassen, um das Streaming über SSH zu erleichtern. Dies ist nützlich, wenn die Web-Benutzeroberfläche nicht antwortet oder der Download eines Support-Bundles von */setup/support* nicht funktioniert. Du musst diesen Befehl ausführen, wenn du ein *erweitertes* Bundle generieren möchtest, das ältere Protokolle enthält. Du kannst diesen Befehl auch ausführen, um das Support-Bundle direkt für den {% data variables.product.prodname_enterprise %}-Support hochzuladen.

Um ein Standardpaket zu erstellen:
```shell
$ ssh -p 122 admin@HOSTNAME -- 'ghe-support-bundle -o' > support-bundle.tgz
```

Um ein erweitertes Paket zu erstellen:
```shell
$ ssh -p 122 admin@HOSTNAME -- 'ghe-support-bundle -x -o' > support-bundle.tgz
```

Um ein Paket an {% data variables.contact.github_support %} zu senden:
```shell
$ ssh -p 122 admin@HOSTNAME -- 'ghe-support-bundle -u'
```

Um ein Paket an {% data variables.contact.github_support %} zu senden und das Paket mit einem Ticket zu verknüpfen:

```shell
$ ssh -p 122 admin@HOSTNAME -- 'ghe-support-bundle -t TICKET_ID'
```

### ghe-support-upload

Dieses Dienstprogramm sendet Informationen von deiner Appliance an den {% data variables.product.prodname_enterprise %}-Support. Über `STDIN` kannst du eine lokale Datei oder einen Datenstrom von bis zu 100 MB angeben. Optional können die hochgeladenen Daten einem Supportticket zugeordnet werden.

Um eine Datei an {% data variables.contact.github_support %} zu senden und die Datei mit einem Ticket zu verknüpfen:
```shell
ghe-support-upload -f FILE_PATH -t TICKET_ID
```

Um Daten über `STDIN` hochzuladen und die Daten mit einem Ticket zu verknüpfen:
```shell
ghe-repl-status -vv | ghe-support-upload -t TICKET_ID -d "Verbose Replication Status"
```

In diesem Beispiel sendet `ghe-repl-status -vv` ausführliche Statusinformationen aus einer Replikat-Appliance. Du solltest `ghe-repl-status -vv` durch die spezifischen Daten ersetzen, die du nach `STDIN` streamen möchtest, und `Verbose Replication Status` durch eine kurze Beschreibung der Daten. {% data reusables.enterprise_enterprise_support.support_will_ask_you_to_run_command %}

## Upgrade von {% data variables.product.prodname_ghe_server %}

### ghe-upgrade

Dieses Dienstprogramm installiert oder verifiziert ein Upgrade-Paket. Darüber hinaus kannst du dieses Dienstprogramm verwenden, um ein Rollback einer Patch-Veröffentlichung auszuführen, wenn ein Upgrade fehlschlägt oder unterbrochen wird. Weitere Informationen findest du unter [Upgrade für {% data variables.product.prodname_ghe_server %} durchführen](/enterprise/admin/guides/installation/upgrading-github-enterprise-server/).

Um ein Upgrade-Paket zu überprüfen:
```shell
ghe-upgrade --verify UPGRADE-PACKAGE-FILENAME
```

Um ein Upgrade-Paket zu installieren:
```shell
ghe-upgrade UPGRADE-PACKAGE-FILENAME
```

{% data reusables.enterprise_installation.command-line-utilities-ghe-upgrade-rollback %}

### ghe-upgrade-scheduler

Dieses Dienstprogramm verwaltet die geplante Installation von Upgrade-Paketen. Du kannst geplante Installationen anzeigen, neu erstellen oder entfernen. Pläne müssen mit Cron-Ausdrücken erstellt werden. Weitere Informationen findest du im [Eintrag zu Cron in Wikipedia](https://en.wikipedia.org/wiki/Cron#Overview).

Das Hilfsprogramm `ghe-upgrade-scheduler` eignet sich am besten für die Planung von Hotpatch-Upgrades, für die in den meisten Fällen kein Wartungsmodus oder Neustart erforderlich ist. Dieses Hilfsprogramm eignet sich nicht für vollständige Paketupgrades, bei denen ein Administrator den Wartungsmodus manuell festlegen, die Instanz neu starten und den Wartungsmodus aufheben muss. Weitere Informationen zu den verschiedenen Upgradetypen findest du unter [Aktualisieren von {% data variables.product.product_name %}](/admin/enterprise-management/upgrading-github-enterprise-server#upgrading-with-an-upgrade-package).

Um eine neue Installation für ein Paket einzuplanen:
```shell
$ ghe-upgrade-scheduler -c "0 2 15 12 *" UPGRADE-PACKAGE-FILENAME
```

Um eingeplante Installationen für ein Paket anzuzeigen:
```shell
$ ghe-upgrade-scheduler -s UPGRADE PACKAGE FILENAME
> 0 2 15 12 * /usr/local/bin/ghe-upgrade -y -s UPGRADE-PACKAGE-FILENAME > /data/user/common/UPGRADE-PACKAGE-FILENAME.log 2>&1
```

Um eingeplante Installationen für ein Paket zu entfernen:
```shell
$ ghe-upgrade-scheduler -r UPGRADE PACKAGE FILENAME
```

### ghe-update-check

Dieses Dienstprogramm überprüft, ob eine neue Patch-Veröffentlichung von {% data variables.product.prodname_enterprise %} verfügbar ist. Falls dies der Fall und auf deiner Instanz Speicherplatz verfügbar ist, wird das Paket heruntergeladen. Es wird standardmäßig unter */var/lib/ghe-updates* gespeichert. Ein Administrator kann dann [das Upgrade ausführen](/enterprise/admin/guides/installation/updating-the-virtual-machine-and-physical-resources/).

Eine Datei mit dem enthaltenen Downloadstatus ist unter */var/lib/ghe-updates/ghe-update-check.status* verfügbar.

Verwende den Schalter `-i`, um nach der neuesten {% data variables.product.prodname_enterprise %}-Version zu suchen.

```shell
$ ssh -p 122 admin@HOSTNAME -- 'ghe-update-check'
```

## Benutzerverwaltung

### ghe-license-usage

Dieses Dienstprogramm exportiert eine Liste von Benutzern der Installation im JSON-Format. Wenn deine Instanz mit der {% data variables.product.prodname_ghe_cloud %} verbunden ist, verwendet {% data variables.product.prodname_ghe_server %} diese Informationen, um Lizenzinformationen an die {% data variables.product.prodname_ghe_cloud %} zu melden. Weitere Informationen findest du unter „[Verbinden deines Unternehmenskontos mit {% data variables.product.prodname_ghe_cloud %}](/admin/configuration/managing-connections-between-your-enterprise-accounts/connecting-your-enterprise-account-to-github-enterprise-cloud)“.

Standardmäßig wird die Liste der Benutzer in der resultierenden JSON-Datei verschlüsselt. Verwende das Flag `-h` für weitere Optionen.

```shell
ghe-license-usage
```

### ghe-org-membership-update

Dieses Dienstprogramm erzwingt die standardmäßige Einstellung für die Sichtbarkeit von Mitgliedschaften in der Organisation für alle Mitglieder auf deiner Instanz. Weitere Informationen findest du unter „[Konfigurieren der Sichtbarkeit für die Organisationsmitgliedschaft](/enterprise/admin/guides/user-management/configuring-visibility-for-organization-membership)“. Einstellungsoptionen sind `public` oder `private`.

```shell
ghe-org-membership-update --visibility=SETTING
```

### `ghe-user-csv`

Dieses Dienstprogramm exportiert eine Liste aller Benutzer in der Installation im CSV-Format. Die CSV-Datei enthält die E-Mail-Adresse, von welchem Benutzertyp sie sind (z. B. Administrator, Benutzer), über wie viele Repositorys, SSH-Schlüssel und Organisationsmitgliedschaften sie verfügen, wie die letzte protokollierte IP-Adresse lautet usw. Verwende das Flag `-h` für weitere Optionen.

```shell
ghe-user-csv -o > users.csv
```

### ghe-user-demote

Dieses Dienstprogramm stuft den angegebenen Benutzer vom Administratorstatus auf einen gewöhnlichen Benutzer zurück. Du solltest die Web-Benutzeroberfläche verwenden, um diese Aktion durchzuführen, dieses Dienstprogramm jedoch für den Fall bereitstellen, dass das Dienstprogramm `ghe-user-promote` einen fehlerhaften Zustand aufweist und du einen Benutzer erneut über die CLI zurückstufen musst.

```shell
ghe-user-demote USERNAME
```

### ghe-user-promote

Dieses Dienstprogramm stuft das angegebene Benutzerkonto auf einen Websiteadministrator hoch.

```shell
ghe-user-promote USERNAME
```

### ghe-user-suspend

Dieses Dienstprogramm sperrt den angegebenen Benutzer und hindert ihn daran, sich anzumelden oder Elemente per Push-Vorgang an deine Repositorys zu übertragen oder aus diesen abzurufen.

```shell
ghe-user-suspend USERNAME
```

### ghe-user-unsuspend

Dieses Dienstprogramm entsperrt den angegebenen Benutzer und gewährt ihm Zugriff, um sich anzumelden und um Elemente per Push-Vorgang an deine Repositorys zu übertragen und aus ihnen abzurufen.

```shell
ghe-user-unsuspend USERNAME
```
