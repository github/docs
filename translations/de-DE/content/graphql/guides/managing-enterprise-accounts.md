---
title: Verwalten von Unternehmenskonten
intro: Du kannst dein Unternehmenskonto und die zugehörigen Organisationen mit der GraphQL-API verwalten.
redirect_from:
  - /v4/guides/managing-enterprise-accounts
versions:
  ghec: '*'
  ghes: '*'
  ghae: '*'
topics:
  - API
shortTitle: Manage enterprise accounts
ms.openlocfilehash: c55a2b23ff88214739402f78f00c2682c97df93b
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 10/25/2022
ms.locfileid: '148106781'
---
## Informationen zum Verwalten von Unternehmenskonten mit GraphQL

Du kannst die Unternehmenskonten-API und die Überwachungsprotokoll-API verwenden, die nur als GraphQL-APIs verfügbar sind, um Änderungen in deiner Organisation zu überwachen und vorzunehmen sowie konform zu bleiben.

Die Endpunkte des Unternehmenskontos funktionieren sowohl für GitHub Enterprise Cloud als auch für GitHub Enterprise Server.

Mit GraphQL kannst du nur die von dir angegebenen Daten anfordern und zurückgeben. Beispielsweise kannst du eine GraphQL-Abfrage erstellen oder Informationen anfordern, um alle neuen Organisationsmitglieder anzuzeigen, die deiner Organisation hinzugefügt wurden. Alternativ kannst du eine Änderung vornehmen, um einen Administrator zu deinem Unternehmenskonto einzuladen.

Mit der Überwachungsprotokoll-API kannst du überwachen, ob jemand:
- auf deine Organisations- oder Repositoryeinstellungen zugreift
- Berechtigungen ändert.
- Benutzer in einer Organisation, einem Repository oder einem Team hinzufügt oder daraus entfernt.
- Benutzer zum Administrator heraufstuft.
- Berechtigungen einer GitHub-App ändert.

Mit der Überwachungsprotokoll-API kannst du Kopien deiner Überwachungsprotokolldaten aufbewahren. Bei Abfragen, die mit der Überwachungsprotokoll-API durchgeführt werden, kann die GraphQL-Antwort Daten für 90 bis 120 Tage enthalten. Eine Liste der mit der Überwachungsprotokoll-API verfügbaren Felder findest du unter [AuditEntry-Schnittstelle](/graphql/reference/interfaces#auditentry/).

Mit der Unternehmenskonten-API kannst du Folgendes durchführen:
- Alle Organisationen und Repositorys auflisten und überprüfen, die zu deinem Unternehmenskonto gehören
- Die Einstellungen des Unternehmenskontos ändern
- Richtlinien für die Einstellungen deines Unternehmenskontos und die zugehörigen Organisationen konfigurieren
- Administrator*innen zu deinem Unternehmenskonto einladen
- Neue Organisationen in deinem Unternehmenskonto erstellen

Eine Liste der mit der Unternehmenskonten-API verfügbaren Felder findest du unter [GraphQL-Felder und -Typen für die Unternehmenskonten-API](/graphql/guides/managing-enterprise-accounts#graphql-fields-and-types-for-the-enterprise-accounts-api).

## Erste Schritte mit GraphQL für Unternehmenskonten

Führe die folgenden Schritte durch, um mit der Arbeit mit GraphQL zu beginnen und deine Unternehmenskonten zu verwalten:
 - Authentifizierung mit einem {% data variables.product.pat_generic %}
 - Auswählen eines GraphQL-Clients oder Verwenden des GraphQL-Explorers
 - Einrichten von Insomnia zur Verwendung der GraphQL-API

Einige Beispielabfragen findest du unter [Eine Beispielabfrage, bei der die Unternehmenskonten-API verwendet wird](#an-example-query-using-the-enterprise-accounts-api).

### 1. Authentifizierung mit einem {% data variables.product.pat_generic %}

{% data reusables.user-settings.graphql-classic-pat-only %}

1. Um dich mit GraphQL zu authentifizieren, musst du ein {% data variables.product.pat_generic %} aus den Entwicklereinstellungen generieren. Weitere Informationen findest du unter [Erstellen eines {% data variables.product.pat_generic %}](/github/authenticating-to-github/creating-a-personal-access-token).

2. Gewähre deinem {% data variables.product.pat_generic %} Administratorberechtigungen und Vollzugriff für die Bereiche von GHES, auf die du zugreifen möchtest. Es wird empfohlen, die folgenden Bereiche für dein {% data variables.product.pat_generic %} auszuwählen, um Vollzugriff auf private Repositorys, Organisationen, Teams, Benutzerdaten sowie Zugriff auf Abrechnungs- und Profildaten des Unternehmens zu erhalten:
    - `repo`
    - `admin:org`
    - `user`
    - `admin:enterprise`

  Die spezifischen Bereiche des Unternehmenskontos sind:
    - `admin:enterprise`: Bietet vollständige Kontrolle über Unternehmen (beinhaltet `manage_runners:enterprise`, `manage_billing:enterprise` und `read:enterprise`)
    - `manage_billing:enterprise`: Lesen und Schreiben von Abrechnungsdaten des Unternehmens{% ifversion ghes or ghae %}
    - `manage_runners:enterprise`: Zugriff auf die Verwaltung von Runnern und Runnergruppen von GitHub Actions{% endif %}
    - `read:enterprise`: Lesen von Profildaten des Unternehmens

3. Kopiere dein {% data variables.product.pat_generic %}, und bewahre es an einem sicheren Ort auf, bis du es deinem GraphQL-Client hinzufügst.

### 2. Wähle einen GraphQL-Client aus.

Es wird empfohlen, GraphiQL oder einen anderen eigenständigen GraphQL-Client zu verwenden, mit dem du die Basis-URL konfigurieren kannst.

Alternativ kannst du diese GraphQL-Clients verwenden:
  - [Insomnia](https://support.insomnia.rest/article/176-graphql-queries)
  - [GraphiQL](https://www.gatsbyjs.org/docs/running-queries-with-graphiql/)
  - [Postman](https://learning.getpostman.com/docs/postman/sending_api_requests/graphql/)

In den nächsten Schritten wird Insomnia verwendet.

### 3. Richte Insomnia zur Verwendung der GraphQL-API für GitHub mit Unternehmenskonten ein.

1. Füge dem GraphQL-Client die Basis-URL und die `POST`-Methode hinzu. Wenn du GraphQL zum Anfordern von Informationen (Abfragen), Ändern von Informationen (Änderungen) oder Übertragen von Daten mit der GitHub-API verwendest, ist die Standard-HTTP-Methode `POST`, und die Basis-URL folgt dieser Syntax:
    - Für deine Unternehmensinstanz: `https://<HOST>/api/graphql`
    - Für GitHub Enterprise Cloud: `https://api.github.com/graphql`

2. Öffne zum Authentifizieren das Menü „Authentifizierungsoptionen“, und wähle **Bearertoken** aus. Füge als Nächstes dein zuvor kopiertes {% data variables.product.pat_generic %} hinzu.

 ![Berechtigungsoptionen für {% data variables.product.pat_generic %}](/assets/images/developer/graphql/insomnia-base-url-and-pat.png)

 ![Berechtigungsoptionen für {% data variables.product.pat_generic %}](/assets/images/developer/graphql/insomnia-bearer-token-option.png)

3. Gib Kopfzeileninformationen an.
   - Füge `Content-Type` als Header und `application/json` als Wert hinzu.
   ![Standardheader](/assets/images/developer/graphql/json-content-type-header.png)
   ![Header mit Vorschauwert für die Überwachungsprotokoll-API](/assets/images/developer/graphql/preview-header-for-2.18.png)

Nun kannst du Abfragen tätigen.

## Eine Beispielabfrage, bei der die Unternehmenskonten-API verwendet wird

Diese GraphQL-Abfrage fragt die Gesamtanzahl der {% ifversion not ghae %}`public`{% else %}`private`{% endif %}-Repositorys in allen Organisationen deiner Appliance mithilfe der Unternehmenskonten-API ab. Ersetze `<enterprise-account-name>` durch den Handle deines Unternehmenskontos, um diese Abfrage anzupassen. Wenn sich dein Unternehmenskonto beispielsweise unter `https://github.com/enterprises/octo-enterprise` befindet, ersetze `<enterprise-account-name>` durch `octo-enterprise`.

{% ifversion not ghae %}

```graphql
query publicRepositoriesByOrganization($slug: String!) {
  enterprise(slug: $slug) {
    ...enterpriseFragment
  }
}

fragment enterpriseFragment on Enterprise {
  ... on Enterprise{
    name
    organizations(first: 100){
      nodes{
        name
        ... on Organization{
          name
          repositories(privacy: PUBLIC){
            totalCount
          }
        }
      }
    }
  }
}

# Passing our Enterprise Account as a variable
variables {
  "slug": "<enterprise-account-name>"
}
```

{% else %}

```graphql
query privateRepositoriesByOrganization($slug: String!) {
  enterprise(slug: $slug) {
    ...enterpriseFragment
  }
}

fragment enterpriseFragment on Enterprise {
  ... on Enterprise{
    name
    organizations(first: 100){
      nodes{
        name
        ... on Organization{
          name
          repositories(privacy: PRIVATE){
            totalCount
          }
        }
      }
    }
  }
}

# Passing our Enterprise Account as a variable
variables {
  "slug": "<enterprise-account-name>"
}
```
{% endif %}

Bei der nächsten GraphQL-Abfrage wird gezeigt, wie schwierig es ist, die Anzahl von {% ifversion not ghae %}`public`{% else %}`private`{% endif %}-Repositorys in jeder Organisation abzurufen, ohne die Unternehmenskonten-API zu verwenden.  Beachte, dass die Unternehmenskonten-API für GraphQL diese Aufgabe für Unternehmen vereinfacht hat, da du nur eine einzelne Variable anpassen musst. Ersetze `<name-of-organization-one>` und `<name-of-organization-two>` usw. durch die Organisationsnamen in deiner Instanz, um diese Abfrage anzupassen.

{% ifversion not ghae %}
```graphql
# Each organization is queried separately
{
  organizationOneAlias: organization(login: "nameOfOrganizationOne") {
    # How to use a fragment
    ...repositories
  }
  organizationTwoAlias: organization(login: "nameOfOrganizationTwo") {
    ...repositories
  }
  # organizationThreeAlias ... and so on up-to lets say 100
}

## How to define a fragment
fragment repositories on Organization {
  name
  repositories(privacy: PUBLIC){
    totalCount
  }
}
```
{% else %}
```graphql
# Each organization is queried separately
{
  organizationOneAlias: organization(login: "name-of-organization-one") {
    # How to use a fragment
    ...repositories
  }
  organizationTwoAlias: organization(login: "name-of-organization-two") {
    ...repositories
  }
  # organizationThreeAlias ... and so on up-to lets say 100
}

## How to define a fragment
fragment repositories on Organization {
  name
  repositories(privacy: PRIVATE){
    totalCount
  }
}
```
{% endif %}

## Separates Abfragen jeder Organisation

{% ifversion not ghae %}

```graphql
query publicRepositoriesByOrganization {
  organizationOneAlias: organization(login: "<name-of-organization-one>") {
    # How to use a fragment
    ...repositories
  }
  organizationTwoAlias: organization(login: "<name-of-organization-two>") {
    ...repositories
  }
  # organizationThreeAlias ... and so on up-to lets say 100
}
# How to define a fragment
fragment repositories on Organization {
  name
  repositories(privacy: PUBLIC){
    totalCount
  }
}
```

{% else %}

```graphql
query privateRepositoriesByOrganization {
  organizationOneAlias: organization(login: "<name-of-organization-one>") {
    # How to use a fragment
    ...repositories
  }
  organizationTwoAlias: organization(login: "<name-of-organization-two>") {
    ...repositories
  }
  # organizationThreeAlias ... and so on up-to lets say 100
}
# How to define a fragment
fragment repositories on Organization {
  name
  repositories(privacy: PRIVATE){
    totalCount
  }
}
```

{% endif %}

Die GraphQL-Abfrage fordert die letzten fünf Protokolleinträge einer Unternehmensorganisation an. Ersetze `<org-name>` und `<user-name>`, um diese Abfrage anzupassen.

```graphql
{
  organization(login: "<org-name>") {
    auditLog(last: 5, query: "actor:<user-name>") {
      edges {
        node {
          ... on AuditEntry {
# Get Audit Log Entry by 'Action'
            action
            actorLogin
            createdAt
# User 'Action' was performed on
           user{
              name
                email
            }
          }
        }
      }
    }
  }
}
```

Weitere Informationen zu den ersten Schritten mit GraphQL findest du unter [Einführung in GraphQL](/graphql/guides/introduction-to-graphql) und [Tätigen von Aufrufen mit GraphQL](/graphql/guides/forming-calls-with-graphql).

## GraphQL-Felder und -Typen für die Unternehmenskonten-API

Hier findest du eine Übersicht über die neuen Abfragen, Änderungen und schemadefinierten Typen, die mit der Unternehmenskonten-API verwendet werden können.

Weitere Informationen zu den neuen Abfragen, Änderungen und schemadefinierten Typen, die mit der Unternehmenskonten-API verwendet werden können, findest du auf der Randleiste mit den detaillierten GraphQL-Definitionen auf jeder [Referenzseite zu GraphQL](/graphql).

Du kannst auf die Referenzdokumente im GraphQL-Explorer auf GitHub zugreifen. Weitere Informationen findest du unter [Verwenden des Explorers](/graphql/guides/using-the-explorer#accessing-the-sidebar-docs).
Weitere Informationen wie Authentifizierungs- und Ratenlimitdetails findest du in den [Anleitungen](/graphql/guides).
