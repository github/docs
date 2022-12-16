---
title: Informationen zu Systemprotokollen
intro: '{% data variables.product.product_name %} behält Fehler- und Meldungsprotokolle für Systemereignisse bei. Protokolle sind nützlich, um Aktionen und Ausnahmen auf Benutzer-, Anwendungs- und Systemebene zu identifizieren.'
versions:
  ghes: '*'
type: overview
topics:
  - Auditing
  - Enterprise
  - Logging
  - Security
ms.openlocfilehash: e41702e25c7cc222cefb4eedb4e0322adf3acdba
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/05/2022
ms.locfileid: '147063330'
---
## Systemprotokolle

Standardmäßig werden Systemprotokolle für {% data variables.product.product_name %} automatisch alle 24 Stunden gedreht und für sieben Tage aufbewahrt. Systemprotokolle umfassen Systemereignisse, Anwendungsprotokolle und Git-Ereignisdaten. Da häufig in Protokolldateien geschrieben wird und diese sehr groß sein können, kann es von Vorteil sein, relevante Protokolleinträge auf einem von deiner {% data variables.product.prodname_ghe_server %}-Instanz separaten Host zu extrahieren und zu analysieren.

Du kannst Systemprotokolle zur längeren Aufbewahrung an ein Drittanbietersystem oder einen Server weiterleiten. Weitere Informationen findest du unter [Protokollweiterleitung](/admin/monitoring-activity-in-your-enterprise/exploring-user-activity/log-forwarding).

Zusätzlich zum Überprüfen deiner Systemprotokolle kannst du Aktivitäten in deinem Unternehmen auf andere Weise überwachen, z. B. mittels Anzeigen von Überwachungsprotokollen, Pushprotokollen und Verwalten globaler Webhooks. Weitere Informationen findest du unter [Überwachung von Aktivitäten in deinem Unternehmen](/admin/monitoring-activity-in-your-enterprise).

## Protokolltypen

Nachfolgend sind die Hauptprotokolle aufgeführt, die von der {% data variables.product.product_name %}-Appliance und ihren Funktionen verwendet werden:

| Pfad | BESCHREIBUNG |
|------|-------------|
| `/var/log/github/audit.log` | Überwachte Benutzer-, Repository- und Systemereignisse.
| `/var/log/github/unicorn.log` | API- und Webschnittstellen-Datenverkehr.
| `/var/log/github/exceptions.log` | Fehler auf Anwendungsebene.
| `/var/log/haproxy.log` | Gesamter IP-Datenverkehr, der die Appliance erreicht.
| `/var/log/hookshot/resqued.log` | Webhookübermittlung und -fehler.
| `/var/log/github/auth.log` | Authentifizierungsanforderungen, unabhängig von integrierten, LDAP-, CAS- oder SAML-Methoden.
| `/var/log/github/gitauth.log` | Alle Git-Authentifizierungsanforderungen.

Git-Aktivitäts- und Authentifizierungsanforderungen werden vom `babeld`-Dienst verarbeitet.

Mehrere {% data variables.product.product_name %}-Dienste, z. B. der `babeld`-Dienst, werden containerisiert. Containerisierte Protokolle werden in das `systemd journal` geschrieben und können jederzeit mit dem `journalctl`-Befehl abgefragt werden.

## Überwachte Systemereignisse

Alle Einträge aus der `audit.log`-Datei verwenden das `github_audit`-Schlüsselwort und können damit gefiltert werden.

Beispielsweise zeigt der folgende Eintrag, dass ein neues Repository erstellt wurde.

```
Oct 26 01:42:08 github-ent github_audit: {:created_at=>1351215728326, :actor_ip=>"10.0.0.51", :data=>{}, :user=>"some-user", :repo=>"some-user/some-repository", :actor=>"some-user", :actor_id=>2, :user_id=>2, :action=>"repo.create", :repo_id=>1, :from=>"repositories#create"}
```

Dieses Beispiel zeigt, dass Commits per Push-Vorgang an ein Repository übertragen wurden.

```
Oct 26 02:19:31 github-ent github_audit: { "pid":22860, "ppid":22859, "program":"receive-pack", "git_dir":"/data/repositories/some-user/some-repository.git", "hostname":"github-ent", "pusher":"some-user", "real_ip":"10.0.0.51", "user_agent":"git/1.7.10.4", "repo_id":1, "repo_name":"some-user/some-repository", "transaction_id":"b031b7dc7043c87323a75f7a92092ef1456e5fbaef995c68", "frontend_ppid":1, "repo_public":true, "user_name":"some-user", "user_login":"some-user", "frontend_pid":18238, "frontend":"github-ent", "user_email":"some-user@github.example.com", "user_id":2, "pgroup":"github-ent_22860", "status":"post_receive_hook", "features":" report-status side-band-64k", "received_objects":3, "receive_pack_size":243, "non_fast_forward":false, "current_ref":"refs/heads/main" }
```

## Support-Bundles

Das Supportpaket enthält Systemprotokolle, und alle Überwachungsinformationen werden in der `audit.log`-Datei im `github-logs`-Verzeichnis protokolliert. Weitere Informationen findest du unter [Bereitstellen von Daten für den {% data variables.product.prodname_dotcom %}-Support](/support/contacting-github-support/providing-data-to-github-support).

## Weiterführende Themen

- [Linux-Manpage für den `journalctl`-Befehl](http://man7.org/linux/man-pages/man1/journalctl.1.html)
