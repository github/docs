---
title: Ressourcenbeschränkungen
intro: 'Die Graph-API von {% data variables.product.prodname_dotcom %} hat einige Einschränkungen zum Schutz vor übermäßigen oder missbräuchlichen Aufrufen von {% data variables.product.prodname_dotcom %}-Servern.'
redirect_from:
  - /v4/guides/resource-limitations
versions:
  fpt: '*'
  ghec: '*'
  ghes: '*'
  ghae: '*'
topics:
  - API
ms.openlocfilehash: 7a0f040b86435573171c4022a72f8d558ad06c29
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/05/2022
ms.locfileid: '146381424'
---
## Knotenlimit

Um die [Schemaüberprüfung](/graphql/guides/introduction-to-graphql#schema) zu bestehen, müssen alle GraphQL-API-[Aufrufe](/graphql/guides/forming-calls-with-graphql) folgende Standards erfüllen:

* Clients müssen ein Argument `first` oder `last` für eine beliebige [Verbindung](/graphql/guides/introduction-to-graphql#connection) angeben.
* Werte von `first` und `last` müssen innerhalb von 1-100 liegen.
* Einzelne Aufrufe können nicht mehr als 500.000 [Knoten](/graphql/guides/introduction-to-graphql#node) insgesamt anfordern.

### Berechnen von Knoten in einem Aufruf

In diesen beiden Beispielen wird gezeigt, wie die Knoten insgesamt in einem Aufruf berechnet werden.

1. Einfache Abfrage:

  <pre>query {
    viewer {
      repositories(first: <span class="redbox">50</span>) {
        edges {
          repository:node {
            name

            issues(first: <span class="greenbox">10</span>) {
              totalCount
              edges {
                node {
                  title
                  bodyHTML
                }
              }
            }
          }
        }
      }
    }
  }</pre>

  Berechnung:

  <pre><span class="redbox">50</span>         = 50 repositories
   +
  <span class="redbox">50</span> x <span class="greenbox">10</span>  = 500 repository issues

              = 550 total nodes</pre>

2. Komplexe Abfrage:

  <pre>query {
    viewer {
      repositories(first: <span class="redbox">50</span>) {
        edges {
          repository:node {
            name

            pullRequests(first: <span class="greenbox">20</span>) {
              edges {
                pullRequest:node {
                  title

                  comments(first: <span class="bluebox">10</span>) {
                    edges {
                      comment:node {
                        bodyHTML
                      }
                    }
                  }
                }
              }
            }

            issues(first: <span class="greenbox">20</span>) {
              totalCount
              edges {
                issue:node {
                  title
                  bodyHTML

                  comments(first: <span class="bluebox">10</span>) {
                    edges {
                      comment:node {
                        bodyHTML
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }

      followers(first: <span class="bluebox">10</span>) {
        edges {
          follower:node {
            login
          }
        }
      }
    }
  }</code></pre>

  Berechnung:

  <pre><span class="redbox">50</span>              = 50 repositories
   +
  <span class="redbox">50</span> x <span class="greenbox">20</span>       = 1,000 pullRequests
   +
  <span class="redbox">50</span> x <span class="greenbox">20</span> x <span class="bluebox">10</span> = 10,000 pullRequest comments
   +
  <span class="redbox">50</span> x <span class="greenbox">20</span>       = 1,000 issues
   +
  <span class="redbox">50</span> x <span class="greenbox">20</span> x <span class="bluebox">10</span> = 10,000 issue comments
   +
  <span class="bluebox">10</span>              = 10 followers

                   = 22,060 total nodes</pre>

## Rate Limit

Der GraphQL-API-Grenzwert unterscheidet sich von den REST-API-[Ratenbegrenzungen](/rest/overview/resources-in-the-rest-api#rate-limiting).

Warum unterscheiden sich die API-Ratenbegrenzungen? Mit [GraphQL](/graphql) kann ein GraphQL-Aufruf [mehrere REST-Anrufe](/graphql/guides/migrating-from-rest-to-graphql) ersetzen. Ein einzelner komplexer GraphQL-Aufruf könnte das Äquivalent von Tausenden von REST-Anforderungen sein. Während ein einzelner GraphQL-Aufruf deutlich unter der REST-API-Ratenbegrenzung liegt, könnte die Abfrage für die GitHub-Server genauso teuer sein, um sie zu berechnen.

Um die Serverkosten einer Abfrage genau darzustellen, berechnet die GraphQL-API basierend auf einer normalisierten Punkteskala eine **Bewertung der Ratenbegrenzung** des Aufrufs. Die Bewertungsfaktoren einer Abfrage in den ersten und letzten Argumenten für eine übergeordnete Verbindung und deren untergeordnete Elemente.

* Die Formel verwendet die Argumente `first` und `last` für eine übergeordnete Verbindung und ihre untergeordneten Elemente, um die potenzielle Last auf GitHub-Systemen, wie MySQL, ElasticSearch und Git, vorzurechnen.
* Jede neue Verbindung verfügt über einen eigenen Punktwert. Punkte werden mit anderen Punkten aus dem Aufruf in eine Bewertung der Gesamtratenbegrenzung kombiniert.

Die GraphQL-API-Ratenbegrenzung beträgt **5.000 Punkte pro Stunde**. 

Beachte, dass 5.000 Punkte pro Stunde nicht gleich 5.000 Aufrufe pro Stunde sind: Die GraphQL-API und die REST-API verwenden verschiedene Ratenbegrenzungen.

{% note %}

**Hinweis**: Änderungen an den aktuellen Formel- und Ratenbegrenzungen sind vorbehalten, da noch untersucht wird, wie Entwickler*innen die GraphQL-API verwenden.

{% endnote %}

### Zurückgeben des Ratenbegrenzungsstatus eines Anrufs

Mit der REST-API kannst du den Ratenbegrenzungsstatus überprüfen, indem du die zurückgegebenen HTTP-Header [untersuchst](/rest/overview/resources-in-the-rest-api#rate-limiting).

Mit der GraphQL-API kannst du den Ratenbegrenzungsstatus überprüfen, indem du die Felder im Objekt `rateLimit` abfragst:

```graphql
query {
  viewer {
    login
  }
  rateLimit {
    limit
    cost
    remaining
    resetAt
  }
}
```

* Das Feld `limit` gibt die maximale Anzahl von Punkten zurück, die der Client in einem 60-Minuten-Fenster verwenden darf.

* Das Feld `cost` gibt die Punktkosten für den aktuellen Aufruf zurück, der gegen die Ratenbegrenzung zählt.

* Das Feld `remaining` gibt die Anzahl der Punkte zurück, die im aktuellen Ratenbegrenzungsfenster verbleiben.)

* Das Feld `resetAt` gibt die Zeit in [UTC-Epochensekunden](http://en.wikipedia.org/wiki/Unix_time) zurück, zu der das aktuelle Ratenbegrenzungsfenster zurückgesetzt wird.

### Berechnen einer Ratenbegrenzungsbewertung vor dem Ausführen des Aufrufs

Das Abfragen des Objekts `rateLimit` gibt die Bewertung eines Aufrufs zurück, aber das Ausführen des Aufrufs zählt gegen den Begrenzungswert. Um dieses Dilemma zu vermeiden, kannst du die Bewertung eines Aufrufs berechnen, bevor du ihn ausführst. Die folgende Berechnung funktioniert ungefähr mit den gleichen Kosten, die `rateLimit { cost }` zurückgibt.

1. Füge die Anzahl der Anforderungen hinzu, die erforderlich sind, um jede eindeutige Verbindung im Aufruf zu erfüllen. Angenommen, jede Anforderung erreicht die Grenzwerte der Argumente `first` oder `last`.
2. Teile die Zahl durch **100** und runde das Ergebnis ab, um die endgültigen Gesamtkosten zu erhalten. In diesem Schritt werden große Zahlen normalisiert.

{% note %}

**Hinweis**: Die Mindestkosten eines Aufrufs der GraphQL-API betragen **1**, was eine einzelne Anforderung darstellt.

{% endnote %}

Hier ist eine Beispielabfrage und Bewertungsberechnung:

```graphql
query {
  viewer {
    login
    repositories(first: 100) {
      edges {
        node {
          id

          issues(first: 50) {
            edges {
              node {
                id

                labels(first: 60) {
                  edges {
                    node {
                      id
                      name
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}
```

Für diese Abfrage sind 5.101 Anforderungen erforderlich:

* Obwohl 100 Repositorys zurückgeben werden, muss die API **einmal** eine Verbindung mit dem Konto des Viewers herstellen, um die Liste der Repositorys abzurufen. Daher, Anforderungen für Repositorys = **1**
* Obwohl 50 Issues zurückgegeben werden, muss die API eine Verbindung mit jedem der **100** Repositorys herstellen, um die Liste der Issues abzurufen. Daher, Anforderungen für Issues = **100**
* Obwohl 60 Bezeichnungen zurückgegeben werden, muss die API eine Verbindung mit jedem der insgesamt möglichen **5.000** potenziellen Issues herstellen, um die Liste der Bezeichnungen abzurufen. Daher, Anforderungen für Bezeichnungen = **5.000**
* Gesamt = **5.101**

Dividiert durch 100 und gerundet ergibt sich die endgültige Bewertung der Abfrage: **51**
