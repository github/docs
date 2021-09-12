---
title: Informationen zu Migrationen
intro: 'Bei einer Migration werden Daten von einem *Quell*speicherort (eine {% data variables.product.prodname_dotcom_the_website %}-Organisation oder eine {% data variables.product.prodname_ghe_server %}-Instanz) an eine {% data variables.product.prodname_ghe_server %}-*Ziel*instanz übertragen. Migrationen können verwendet werden, um Ihre Daten zu übertragen, wenn Sie Plattformen ändern oder Hardware auf Ihrer Instanz upgraden.'
redirect_from:
  - /enterprise/admin/migrations/about-migrations
  - /enterprise/admin/user-management/about-migrations
  - /admin/user-management/about-migrations
versions:
  enterprise-server: '*'
type: overview
topics:
  - Enterprise
  - Migration
---

### Migrationstypen

Es gibt drei Migrationstypen, die von Ihnen durchgeführt werden können:

- eine Migration von einer {% data variables.product.prodname_ghe_server %}-Instanz zu einer anderen {% data variables.product.prodname_ghe_server %}-Instanz. Sie können eine beliebige Anzahl an Repositorys migrieren, die einem Benutzer oder einer Organisation auf der Instanz gehören. Vor dem Durchführen einer Migration müssen Sie über Websiteadministratorzugriff auf beide Instanzen verfügen.
- eine Migration von einer {% data variables.product.prodname_dotcom_the_website %}-Organisation zu einer {% data variables.product.prodname_ghe_server %}-Instanz. Sie können eine beliebige Anzahl an Repositorys migrieren, die einer Organisation gehören. Vor dem Durchführen einer Migration müssen Sie über [Verwaltungszugriff](/enterprise/user/articles/permission-levels-for-an-organization/) auf die {% data variables.product.prodname_dotcom_the_website %}-Organisation und über Websiteadministratorzugriff auf die Zielinstanz verfügen.
- Bei *Probeläufen* handelt es sich um Migrationen, bei denen Daten in eine [Testinstanz](/enterprise/admin/guides/installation/setting-up-a-staging-instance/) importiert werden. Mit diesen kann nachvollzogen werden, was passieren *würde*, wenn eine Migration auf {% data variables.product.product_location %} angewendet werden würde. **Es wird dringend empfohlen, dass Sie einen Probelauf auf einer Testinstanz durchführen, bevor Sie Daten in Ihre Produktionsinstanz importieren.**

### Migrierte Daten

In einer Migration dreht sich alles um ein Repository. Die meisten einem Repository zugeordneten Daten können migriert werden. Beispielsweise migriert ein Repository in einer Organisation das Repository *und* die Organisation sowie die dem Repository zugeordneten Benutzer, Teams, Issues und Pull Requests.

Die Elemente in der folgenden Tabelle können mit einem Repository migriert werden. Elemente, die nicht in der Liste der migrierten Daten angezeigt werden, können nicht migriert werden.

{% data reusables.enterprise_migrations.fork-persistence %}

| Einem migrierten Repository zugeordnete Daten      | Hinweise:                                                                                                                                                                                                                         |
| -------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Benutzer                                           | **@Erwähnungen** von Benutzern werden neu geschrieben, um dem Ziel zu entsprechen.                                                                                                                                                |
| Organisationen                                     | Der Name und die Details einer Organisation werden migriert.                                                                                                                                                                      |
| Repositorys                                        | Links zu Git-Strukturen, Blobs, Commits und Zeilen werden neu geschrieben, um dem Ziel zu entsprechen. Der Migrator folgt maximal drei Repository-Umleitungen.                                                                    |
| Wikis                                              | Alle Wiki-Daten werden migriert.                                                                                                                                                                                                  |
| Teams                                              | **@Erwähnungen** von Teams werden neu geschrieben, um dem Ziel zu entsprechen.                                                                                                                                                    |
| Meilensteine                                       | Zeitstempel werden beibehalten.                                                                                                                                                                                                   |
| Projektboards                                      | Projektboards, die dem Repository und der Organisation, welcher das Repository gehört, zugeordnet sind, werden migriert.                                                                                                          |
| Issues                                             | Issue-Verweise und Zeitstempel werden beibehalten.                                                                                                                                                                                |
| Issue-Kommentare                                   | Querverweise auf Kommentare werden für die Zielinstanz neu geschrieben.                                                                                                                                                           |
| Pull Requests                                      | Querverweise auf Pull Request werden neu geschrieben, um dem Ziel zu entsprechen. Zeitstempel werden beibehalten.                                                                                                                 |
| Pull-Request-Reviews                               | Pull-Request-Reviews und zugeordnete Daten werden migriert.                                                                                                                                                                       |
| Pull-Request-Review-Kommentare                     | Querverweise auf Kommentare werden für die Zielinstanz neu geschrieben. Zeitstempel werden beibehalten.                                                                                                                           |
| Commit-Kommentare                                  | Querverweise auf Kommentare werden für die Zielinstanz neu geschrieben. Zeitstempel werden beibehalten.                                                                                                                           |
| Veröffentlichungen                                 | Die Daten sämtlicher Versionen werden migriert.                                                                                                                                                                                   |
| Bei Pull Requests oder Issues ergriffene Maßnahmen | Alle Änderungen an Pull Requests oder Issues, beispielsweise das Zuweisen von Benutzern, das Umbenennen von Titeln und das Ändern von Kennzeichnungen, werden zusammen mit den Zeitstempeln für die jeweilige Aktion beibehalten. |
| Dateianhänge                                       | [Dateianhänge für Issues und Pull Requests](/articles/file-attachments-on-issues-and-pull-requests) werden migriert. Sie können diese als Bestandteil der Migration deaktivieren.                                                 |
| Webhooks                                           | Nur aktive Webhooks werden migriert.                                                                                                                                                                                              |
| Repository-Deployment-Schlüssel                    | Repository-Deployment-Schlüssel werden migriert.                                                                                                                                                                                  |
| geschützte Branches                                | Die Einstellungen für geschützte Branches und die zugeordneten Daten werden migriert.                                                                                                                                             |
