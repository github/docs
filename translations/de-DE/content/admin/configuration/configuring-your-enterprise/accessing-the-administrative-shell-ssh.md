---
title: Auf die Verwaltungsshell (SSH) zugreifen
redirect_from:
  - /enterprise/admin/articles/ssh-access
  - /enterprise/admin/articles/adding-an-ssh-key-for-shell-access
  - /enterprise/admin/guides/installation/administrative-shell-ssh-access
  - /enterprise/admin/articles/troubleshooting-ssh-permission-denied-publickey
  - /enterprise/admin/2.13/articles/troubleshooting-ssh-permission-denied-publickey
  - /enterprise/admin/2.14/articles/troubleshooting-ssh-permission-denied-publickey
  - /enterprise/admin/2.15/articles/troubleshooting-ssh-permission-denied-publickey
  - /enterprise/admin/installation/accessing-the-administrative-shell-ssh
  - /enterprise/admin/configuration/accessing-the-administrative-shell-ssh
  - /admin/configuration/accessing-the-administrative-shell-ssh
intro: '{% data reusables.enterprise_site_admin_settings.about-ssh-access %}'
versions:
  ghes: '*'
type: how_to
topics:
  - Enterprise
  - Fundamentals
  - SSH
shortTitle: Access the admin shell (SSH)
ms.openlocfilehash: 8d8b9cd71a436c0874355b1bdd53ba2e400660a0
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/10/2022
ms.locfileid: '145106964'
---
## Informationen zum Verwaltungsshellzugriff

Wenn du über SSH-Zugriff auf die Verwaltungsshell verfügst, kannst du die Befehlszeilendienstprogramme von {% data variables.product.prodname_ghe_server %} ausführen. Der SSH-Zugriff eignet sich zudem zur Fehlerbehebung, zum Ausführen von Backups und zum Konfigurieren der Replikation. Der SSH-Verwaltungszugriff wird getrennt vom Git SSH-Zugriff verwaltet und ist nur über Port 122 zugänglich.

## Zugriff auf die Verwaltungsshell über SSH aktivieren

Zum Aktivieren des SSH-Verwaltungszugriffs musst du deinen öffentlichen SSH-Schlüssel zur Liste der autorisierten Schlüssel deiner Instanz hinzufügen.

{% tip %}

**Tipp:** Die Änderungen an den autorisierten SSH-Schlüsseln werden sofort wirksam.

{% endtip %}

{% data reusables.enterprise_site_admin_settings.access-settings %} {% data reusables.enterprise_site_admin_settings.management-console %}
3. Füge unter „SSH-Zugriff“ deinen Schlüssel in das Textfeld ein, und klicke anschließend auf **Schlüssel hinzufügen**.
  ![Textfeld und Schaltfläche zum Hinzufügen eines SSH-Schlüssels](/assets/images/enterprise/settings/add-authorized-ssh-key-admin-shell.png) {% data reusables.enterprise_management_console.save-settings %}

## Verbindung zur Verwaltungsshell über SSH herstellen

Nachdem du der Liste deinen SSH-Schlüssel hinzugefügt hast, stelle als Benutzer `admin`admin auf Port 122 eine Verbindung zur Instanz über SSH her.

```shell
$ ssh -p 122 admin@github.example.com
Last login: Sun Nov 9 07:53:29 2014 from 169.254.1.1
admin@github-example-com:~$ █
```

### Fehlerbehebung bei SSH-Verbindungsproblemen

Wenn der Fehler `Permission denied (publickey)` angezeigt wird, wenn du versuchst, über SSH eine Verbindung zu {% data variables.product.product_location %} herzustellen, solltest du bestätigen, dass du die Verbindung über Port 122 vornimmst. Möglicherweise musst du explizit angeben, welcher private SSH-Schlüssel verwendet werden soll.

Führe `ssh` mit dem Argument `-i` aus, um einen privaten SSH-Schlüssel mithilfe der Befehlszeile anzugeben.

```shell
ssh -i /path/to/ghe_private_key -p 122 admin@<em>hostname</em>
```

Du kannst auch einen privaten SSH-Schlüssel mithilfe der SSH-Konfigurationsdatei (`~/.ssh/config`) angeben.

```shell
Host <em>hostname</em>
  IdentityFile /path/to/ghe_private_key
  User admin
  Port 122
```

## Auf die Verwaltungsshell mithilfe der lokalen Konsole zugreifen

In einer Notfallsituation, beispielsweise wenn SSH nicht verfügbar ist, kannst du lokal auf die Verwaltungsshell zugreifen. Melde Dich als Benutzer `admin` mit dem Kennwort an, das während der Ersteinrichtung von {% data variables.product.prodname_ghe_server %} festgelegt wurde.

## Zugriffseinschränkungen für die Verwaltungsshell

Der Verwaltungsshellzugriff ist nur zur Fehlerbehebung und zum Durchführen dokumentierter Vorgehensweisen zulässig. Dein Supportvertrag wird ggf. ungültig, wenn du System- und Anwendungsdateien änderst, Programme ausführst oder nicht unterstützte Softwarepakete installierst. Kontaktiere bitte den {% data variables.contact.contact_ent_support %} bei Fragen zu den laut deinem Supportvertrag zulässigen Aktivitäten.
