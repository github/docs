---
title: Informationen zu Migrationen
intro: 'Bei einer Migration werden Daten von einem *Quellspeicherort* (eine {% data variables.product.prodname_dotcom_the_website %}-Organisation oder eine {% data variables.product.prodname_ghe_server %}-Instanz) an eine {% data variables.product.prodname_ghe_server %}-*Zielinstanz* übertragen. Migrationen können verwendet werden, um deine Daten zu übertragen, wenn du Plattformen änderst oder Hardware auf deiner Instanz upgradest.'
redirect_from:
  - /enterprise/admin/migrations/about-migrations
  - /enterprise/admin/user-management/about-migrations
  - /admin/user-management/about-migrations
versions:
  ghes: '*'
type: overview
topics:
  - Enterprise
  - Migration
ms.openlocfilehash: accb9c62655f8825077a00e05a93182b36cd6e8d
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/05/2022
ms.locfileid: '147541183'
---
## Die Migrationstypen

Es gibt drei Migrationstypen, die von dir durchgeführt werden können:

- eine Migration von einer {% data variables.product.prodname_ghe_server %}-Instanz zu einer anderen {% data variables.product.prodname_ghe_server %}-Instanz. Du kannst eine beliebige Anzahl an Repositorys migrieren, die einem Benutzer oder einer Organisation auf der Instanz gehören. Vor dem Durchführen einer Migration musst du über Websiteadministratorzugriff auf beide Instanzen verfügen.
- eine Migration von einer {% data variables.product.prodname_dotcom_the_website %}-Organisation zu einer {% data variables.product.prodname_ghe_server %}-Instanz. Du kannst eine beliebige Anzahl an Repositorys migrieren, die einer Organisation gehören. Vor dem Durchführen einer Migration musst du über [Verwaltungszugriff](/enterprise/user/articles/permission-levels-for-an-organization/) auf die {% data variables.product.prodname_dotcom_the_website %}-Organisation und über Website-Administratorzugriff auf die Zielinstanz verfügen.
- *Testausführungen* sind Migrationen, die Daten in eine [Staging-Instanz](/enterprise/admin/guides/installation/setting-up-a-staging-instance/) importieren. Mit diesen kann nachvollzogen werden, was passieren *würde*, wenn eine Migration auf {% data variables.product.product_location %} angewendet werden würde. **Es wird dringend empfohlen, dass du einen Probelauf auf einer Testinstanz durchführst, bevor du Daten in deine Produktionsinstanz importierst.**

## Migrierte Daten

In einer Migration dreht sich alles um ein Repository. Die meisten einem Repository zugeordneten Daten können migriert werden. Beispielsweise migriert ein Repository in einer Organisation das Repository *und* die Organisation sowie die dem Repository zugeordneten Benutzer, Teams, Issues und Pull Requests.

Die Elemente in der folgenden Tabelle können mit einem Repository migriert werden. Alle Elemente, die nicht in der Liste der migrierten Daten angezeigt werden, können nicht migriert werden, einschließlich {% data variables.large_files.product_name_short %}-Objekten.

{% data reusables.enterprise_migrations.fork-persistence %}

|  Einem migrierten Repository zugeordnete Daten | Notizen  |
|---------------------------------------------|--------|
| Benutzer | **@mentions** der Benutzer werden neu geschrieben, um dem Ziel zu entsprechen.
| Organisationen | Der Name und die Details einer Organisation werden migriert.
| Repositorys | Links zu Git-Strukturen, Blobs, Commits und Zeilen werden neu geschrieben, um dem Ziel zu entsprechen. Der Migrator folgt maximal drei Repository-Umleitungen. Interne Repositorys werden als private Repositorys migriert. Der Archivstatus wird gelöscht.
| Wikis | Alle Wiki-Daten werden migriert.
| Teams | **@mentions** der Benutzer werden neu geschrieben, um dem Ziel zu entsprechen.
| Meilensteine | Zeitstempel werden beibehalten.
| Projektboards | Projektboards, die dem Repository und der Organisation, welcher das Repository gehört, zugeordnet sind, werden migriert.
| Probleme | Issue-Verweise und Zeitstempel werden beibehalten.
| Issue-Kommentare | Querverweise auf Kommentare werden für die Zielinstanz neu geschrieben.
| Pull Requests | Querverweise auf Pull Request werden neu geschrieben, um dem Ziel zu entsprechen. Zeitstempel werden beibehalten.
| Pull-Request-Reviews | Pull-Request-Reviews und zugeordnete Daten werden migriert.
| Pull-Request-Review-Kommentare | Querverweise auf Kommentare werden für die Zielinstanz neu geschrieben. Zeitstempel werden beibehalten.
| Commit-Kommentare | Querverweise auf Kommentare werden für die Zielinstanz neu geschrieben. Zeitstempel werden beibehalten.
| Releases | Die Daten sämtlicher Versionen werden migriert.
| Bei Pull Requests oder Issues ergriffene Maßnahmen | Alle Änderungen an Pull Requests oder Issues, beispielsweise das Zuweisen von Benutzern, das Umbenennen von Titeln und das Ändern von Kennzeichnungen, werden zusammen mit den Zeitstempeln für die jeweilige Aktion beibehalten.
|  Dateianlagen | [Dateianhänge für Issues und Pull Requests](/articles/file-attachments-on-issues-and-pull-requests) wurden migriert. Du kannst diese als Bestandteil der Migration deaktivieren.
| webhooks | Nur aktive Webhooks werden migriert.
| Repository-Deployment-Schlüssel | Repository-Deployment-Schlüssel werden migriert.
| Geschützte Branches | Die Einstellungen für geschützte Branches und die zugeordneten Daten werden migriert.
