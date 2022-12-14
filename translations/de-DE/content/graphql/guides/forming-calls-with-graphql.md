---
title: Erstellen von Aufrufen mit GraphQL
intro: 'Hier erfährst du, wie du dich bei der GraphQL-API authentifizierst und anschließend Abfragen und Mutationen erstellst und ausführst.'
redirect_from:
  - /v4/guides/forming-calls
  - /graphql/guides/forming-calls
versions:
  fpt: '*'
  ghec: '*'
  ghes: '*'
  ghae: '*'
topics:
  - API
shortTitle: Form calls with GraphQL
ms.openlocfilehash: b3778872cad120f64f2fdbc238f2319bdd758513
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/05/2022
ms.locfileid: '147527894'
---
## Authentifizieren mit GraphQL

Für die Kommunikation mit dem GraphQL-Server benötigst du ein OAuth-Token mit den richtigen Bereichen.

Führe die Schritte in [Erstellen eines persönlichen Zugriffstokens](/github/authenticating-to-github/creating-a-personal-access-token) aus, um ein Token zu erstellen. Die erforderlichen Bereiche hängen von der Art der Daten ab, die du anfordern möchtest. Wähle beispielsweise die **Benutzerbereiche** aus, um Benutzerdaten anzufordern. Wenn du Zugriff auf Repositoryinformationen benötigst, wähle die entsprechenden **Repositorybereiche** aus.

{% ifversion fpt or ghec %}

Fordere die folgenden Bereiche an, um dem Verhalten des [GraphQL-Explorers](/graphql/guides/using-the-explorer) zu entsprechen:

{% else %}

Die folgenden Bereiche werden empfohlen:

{% endif %}


```
repo
read:packages
read:org
read:public_key
read:repo_hook
user
read:discussion
read:enterprise
read:gpg_key
```

Die API benachrichtigt Sie, wenn eine Ressource einen bestimmten Bereich erfordert.

## Der GraphQL-Endpunkt

Die REST-API verfügt über zahlreiche Endpunkte; die GraphQL-API verfügt über einen einzelnen Endpunkt:

<pre>{% data variables.product.graphql_url_pre %}</pre>

Der Endpunkt bleibt konstant, unabhängig davon, welchen Vorgang du ausführst.

## Kommunizieren mit GraphQL

Da GraphQL-Vorgänge aus Multiline JSON bestehen, empfiehlt GitHub die Verwendung des [Explorers](/graphql/guides/using-the-explorer), um GraphQL-Aufrufe vorzunehmen. Du kannst auch cURL oder eine andere die HTTP-Sprache nutzende Bibliothek verwenden.

In REST bestimmen [HTTP-Verben](/rest#http-verbs) den ausgeführten Vorgang. In GraphQL stellst du einen JSON-codierten Textkörper bereit, unabhängig davon, ob du eine Abfrage oder eine Mutation ausführst; daher lautet das HTTP-Verb `POST`. Die Ausnahme ist eine [Introspektionsabfrage](/graphql/guides/introduction-to-graphql#discovering-the-graphql-api), die für den Endpunkt einfach `GET` ist. Weitere Informationen zu GraphQL und REST findest du unter [Migrieren von REST zu GraphQL](/graphql/guides/migrating-from-rest-to-graphql).

Für die Abfrage vonm GraphQL mithilfe von cURL richtest du eine `POST`-Anforderung mit einer JSON-Nutzlast ein. Die Nutzlast muss eine Zeichenfolge namens `query` enthalten:

```shell
curl -H "Authorization: bearer <em>token</em>" -X POST -d " \
 { \
   \"query\": \"query { viewer { login }}\" \
 } \
" {% data variables.product.graphql_url_code %}
```

{% tip %}

**Hinweis**: Der Zeichenfolgenwert von `"query"` muss für Neue-Zeile-Zeichen ein Escapezeichen verwenden, anderenfalls wird das Schema nicht ordnungsgemäß analysiert. Verwende für den `POST`-Text äußere doppelte Anführungszeichen und innere doppelte Anführungszeichen mit Escapezeichen.

{% endtip %}

### Informationen zu Abfrage- und Mutationsvorgängen

Die beiden Typen zulässiger Vorgänge in der GraphQL-API von GitHub sind _Abfragen_ und _Mutationen_. Wenn GraphQL mit REST verglichen wird, funktionieren Abfragen wie `GET`-Anforderungen, während Mutationen wie `POST`/`PATCH`/`DELETE` funktionieren. Der [Mutationsname](/graphql/reference/mutations) bestimmt, welche Änderung ausgeführt wird.

Informationen zur Ratenbegrenzung findest du unter [Einschränkungen von GraphQL-Ressourcen](/graphql/overview/resource-limitations).

Abfragen und Mutationen teilen ähnliche Formen, mit einigen wichtigen Unterschieden.

### Informationen zu Abfragen

GraphQL-Abfragen geben nur die von Ihnen angegebenen Daten zurück. Beim Erstellen einer Abfrage musst du [Felder in Feldern](/graphql/guides/introduction-to-graphql#field) (auch als _geschachtelte Unterfelder_ bezeichnet) angeben, bis nur noch [Skalare](/graphql/reference/scalars) zurückgegeben werden.

Abfragen sind wie folgt strukturiert:

<pre>query {
  <em>JSON objects to return</em>
}</pre>

Ein reales Beispiel findest du unter [Beispielabfrage](#example-query).

### Informationen zu Mutationen

Zum Erstellen einer Mutation musst du drei Dinge angeben:

1. _Mutationsname_. Die Art der Änderung, die du ausführen möchtest.
2. _Eingabeobjekt_. Die Daten, die du an den Server senden möchtest, bestehen aus _Eingabefeldern_. Übergib es als Argument an den Mutationsnamen.
3. _Nutzlastobjekt_. Die Daten, die du vom Server zurückgeben möchtest; sie bestehen aus _Rückgabefeldern_. Übergib sie als Körper des Mutationsnamens.

Mutationen sind wie folgt strukturiert:

<pre>mutation {
  <em>mutationName</em>(input: {<em>MutationNameInput!</em>}) {
    <em>MutationNamePayload</em>
  }
}</pre>

Das Eingabeobjekt in diesem Beispiel lautet `MutationNameInput`, und das Nutzlastobjekt ist `MutationNamePayload`.

In der [Mutationsreferenz](/graphql/reference/mutations) sind die aufgeführten _Eingabefelder_ das, was du als Eingabeobjekt übergibst. Die aufgeführten _Rückgabefelder_ sind das, was du als Nutzlastobjekt übergibst.

Ein reales Beispiel findest du unter [Beispielmutation](#example-mutation).

## Arbeiten mit Variablen

[Variablen](https://graphql.github.io/learn/queries/#variables) können Abfragen dynamischer und leistungsfähiger machen, und sie können die Komplexität beim Übergeben von Mutationseingabeobjekten verringern.

{% note %}

**Hinweis**: Wenn du den Explorer verwendest, musst du Variablen im separaten [Abfragevariablenbereich](/graphql/guides/using-the-explorer#using-the-variable-pane) eingeben. Schließe nicht das Wort `variables` vor dem JSON-Objekt ein.

{% endnote %}

Nachfolgend findest du eine Beispielabfrage mit einer einzelnen Variable:

```graphql
query($number_of_repos:Int!) {
  viewer {
    name
     repositories(last: $number_of_repos) {
       nodes {
         name
       }
     }
   }
}
variables {
   "number_of_repos": 3
}
```

Es gibt drei Schritte zum Verwenden von Variablen:

1. Definiere die Variable außerhalb des Vorgangs in einem `variables`-Objekt:

  ```graphql
  variables {
     "number_of_repos": 3
  }
  ```

  Das Objekt muss gültiger JSON-Code sein. In diesem Beispiel wird ein einfacher `Int`-Variablentyp dargestellt, aber es ist möglich, komplexere Variablentypen wie Eingabeobjekte zu definieren. Du kannst hier auch mehrere Variablen definieren.

2. Übergib die Variable als Argument an den Vorgang:

  ```graphql
  query($number_of_repos:Int!){
  ```

  Das Argument ist ein Schlüssel-Wert-Paar, wobei der Schlüssel der _Name_ ist, der mit `$` beginnt (z. B. `$number_of_repos`), und der Wert der _Typ_ (z. B. `Int`). Gib zusätzlich mit `!` an, ob der Typ erforderlich ist. Wenn du mehrere Variablen definiert hast, füge sie hier als mehrere Argumente ein.

3. Verwende die Variable innerhalb des Vorgangs:

  ```graphql
  repositories(last: $number_of_repos) {
  ```

  In diesem Beispiel ersetzen wir die Variable für die Anzahl der Repositorys, die abgerufen werden sollen. Wir geben einen Typ in Schritt 2 an, da GraphQL strenge Typisierung erzwingt.

Dieser Prozess macht das Abfrageargument dynamisch. Wir können nun einfach den Wert im `variables`-Objekt ändern und den Rest der Abfrage unverändert lassen.

Mithilfe von Variablen als Argumente kannst du Werte im `variables`-Objekt dynamisch aktualisieren, ohne die Abfrage zu ändern.

## Beispielabfrage

Gehe die folgende komplexere Abfrage durch, die diese Informationen in einen Kontext einbindet.

Mit ihr wird das Repository `octocat/Hello-World` gesucht, und sie gibt die 20 zuletzt geschlossenen Issues und jeweils den Titel, die URL und die ersten 5 Bezeichnungen zurück:

```graphql
query {
  repository(owner:"octocat", name:"Hello-World") {
    issues(last:20, states:CLOSED) {
      edges {
        node {
          title
          url
          labels(first:5) {
            edges {
              node {
                name
              }
            }
          }
        }
      }
    }
  }
}
```

Sieh dir Zeile für Zeile an, wie sie zusammengesetzt ist:

* `query {`

  Dein Ziel ist es, Daten vom Server zu lesen und nicht zu ändern. Daher lautet der Stammvorgang `query`. (Wenn du keinen Vorgang angibst, ist `query` auch die Standardeinstellung.)

* `repository(owner:"octocat", name:"Hello-World") {`

  Zu Beginn der Abfrage soll das [`repository`](/graphql/reference/objects#repository)-Objekt gesucht werden. Die Schemavalidierung gibt an, dass dieses Objekt einen Besitzer (`owner`) und ein `name`-Argument erfordert.

* `issues(last:20, states:CLOSED) {`

  Damit alle Issues im Repository berücksichtigt werden, rufen wir das `issues`-Objekt auf. (Wir _könnten_ ein einzelnes `issue` in einem `repository` abfragen, aber das erfordert, dass wir die Nummer des Issues kennen, das wir zurückgeben möchten, und diese als Argument angeben.)

  Einige Details zum `issues`-Objekt:

  - Die [Dokumentation](/graphql/reference/objects#repository) gibt an, dass dieses Objekt den Typ `IssueConnection`aufweist.
  - Die Schemavalidierung gibt an, dass dieses Objekt eine letzte (`last`) oder erste (`first`) Nummer der Ergebnisse als Argument erfordert. Daher geben wir `20` an.
  - Die [Dokumentation](/graphql/reference/objects#repository) gibt auch an, dass dieses Objekt ein `states`-Argument akzeptiert, das eine [`IssueState`](/graphql/reference/enums#issuestate)-Aufzählung ist, die `OPEN`- oder `CLOSED`-Werte akzeptiert. Damit nur geschlossene Issues gesucht werden, erhält der Schlüssel `states` den Wert `CLOSED`.

* `edges {`

  Wir wissen, dass `issues` eine Verbindung ist, da es den Typ `IssueConnection` aufweist. Zum Abrufen von Daten zu einzelnen Issues müssen wir über `edges` auf den Knoten zugreifen.

* `node {`

  Hier wird der Knoten am Ende des Edges abgerufen. Die [`IssueConnection`-Dokumentation](/graphql/reference/objects#issueconnection) gibt an, dass der Knoten am Ende des `IssueConnection`-Typs ein `Issue`-Objekt ist.

* Nachdem nun bekannt ist, dass wir ein `Issue`-Objekt abrufen, können wir anhand der [Dokumentation](/graphql/reference/objects#issue) die Felder angeben, die zurückgegeben werden sollen:

  ```graphql
  title
  url
  labels(first:5) {
    edges {
      node {
        name
      }
    }
  }
  ```

  Hier geben wir die Felder `title`, `url` und `labels` des `Issue`-Objekts an.

  Das Feld `labels` besitzt den Typ [`LabelConnection`](/graphql/reference/objects#labelconnection). Da `labels` eine Verbindung ist, müssen wir wie beim `issues`-Objekt über die Edges der Verbindung zu einem verbundenen Knoten gelangen, dem `label`-Objekt. Auf dem Knoten können wir die `label`-Objektfelder angeben, die zurückgegeben werden sollen, in diesem Fall `name`.

Du stellst möglicherweise fest, dass die Ausführung dieser Abfrage für das {% ifversion not ghae %}öffentliche{% endif %} Octocat-Repository `Hello-World` nicht viele Bezeichnungen zurückgibt. Versuche, sie auf einem deiner eigenen Repositorys auszuführen, die Bezeichnungen verwenden. Dann wirst du wahrscheinlich einen Unterschied sehen.

## Beispielmutation

Mutationen erfordern häufig Informationen, die du nur ermitteln kannst, indem du zuerst eine Abfrage ausführst. In diesem Beispiel werden zwei Vorgänge gezeigt:

1. Eine Abfrage zum Abrufen einer Issue-ID.
2. Eine Mutation, um dem Issue eine Emoji-Reaktion hinzuzufügen.

```graphql
query FindIssueID {
  repository(owner:"octocat", name:"Hello-World") {
    issue(number:349) {
      id
    }
  }
}

mutation AddReactionToIssue {
  addReaction(input:{subjectId:"MDU6SXNzdWUyMzEzOTE1NTE=",content:HOORAY}) {
    reaction {
      content
    }
    subject {
      id
    }
  }
}
```

{% tip %}

Obwohl du eine Abfrage und eine Mutation in das gleiche Explorer-Fenster aufnehmen kannst, wenn du ihnen Namen gibst (in diesem Beispiel `FindIssueID` und `AddReactionToIssue`), werden die Vorgänge als separate Aufrufe des GraphQL-Endpunkts ausgeführt. Es ist nicht möglich, eine Abfrage gleichzeitig mit einer Mutation auszuführen.

{% endtip %}

Gehen wir das Beispiel durch. Die Aufgabe klingt einfach: Füge einem Issue eine Emoji-Reaktion hinzu.

Wie wissen wir also, das mit einer Abfrage begonnen werden soll? Wir wissen es noch nicht.

Da wir Daten auf dem Server ändern möchten (ein Emoji an ein Issue anfügen), durchsuchen wir zu Beginn das Schema nach einer hilfreichen Mutation. Die Referenzdokumentation gibt die [`addReaction`](/graphql/reference/mutations#addreaction)-Mutation mit dieser Beschreibung an: `Adds a reaction to a subject.` Perfekt!

Die Dokumentation für die Mutation listet drei Eingabefelder auf:

* `clientMutationId` (`String`)
* `subjectId` (`ID!`)
* `content` (`ReactionContent!`)

Mit `!` wird angegeben, dass `subjectId` und `content` erforderliche Felder sind. Es ist verständlich, dass `content` erforderlich ist: Wir möchten eine Reaktion hinzufügen und müssen daher angeben, welches Emoji verwendet werden soll.

Aber warum ist `subjectId` erforderlich? Es liegt daran, dass nur mit `subjectId` bestimmt werden kann, auf _welches_ Issue in _welchem_ Repository reagiert werden soll.

Aus diesem Grund beginnen wir dieses Beispiel mit einer Abfrage: um die `ID` abzurufen.

Sehen wir uns nun die Abfrage Zeile für Zeile an:

* `query FindIssueID {`

  Hier führen wir eine Abfrage aus und nennen sie `FindIssueID`. Beachte, dass die Benennung einer Abfrage optional ist; hier erhält sie einen Namen, damit wir sie in das gleiche Explorer-Fenster wie die Mutation aufnehmen können.

* `repository(owner:"octocat", name:"Hello-World") {`

  Wir geben das Repository an, fragen dazu das `repository`-Objekt ab und übergeben die Argumente `owner` und `name`.

* `issue(number:349) {`

  Wir geben das Issue an, auf das reagiert werden soll, fragen dazu das `issue`-Objekt ab und übergeben ein `number`-Argument.

* `id`

  Dies ist der Ort, an dem wir die `id` von `https://github.com/octocat/Hello-World/issues/349` abrufen, um sie als die `subjectId` zu übergeben.

Wenn wir die Abfrage ausführen, erhalten wir die `id`: `MDU6SXNzdWUyMzEzOTE1NTE=`

{% tip %}

**Hinweis**: Die in der Abfrage zurückgegebene `id` ist der Wert, den wir als `subjectID` in der Mutation übergeben werden. Weder die Dokumentation noch die Schemaintrospektion geben diese Beziehung an; Du musst die Konzepte hinter den Namen verstehen, um dies zu ermitteln.

{% endtip %}

Mit der bekannten ID können wir mit der Mutation fortfahren:

* `mutation AddReactionToIssue {`

  Hier führen wir eine Mutation aus und nennen sie `AddReactionToIssue`. Wie bei Abfragen ist die Benennung einer Mutation optional; hier erhält sie einen Namen, damit wir sie in das gleiche Explorer-Fenster wie die Abfrage aufnehmen können.

* `addReaction(input:{subjectId:"MDU6SXNzdWUyMzEzOTE1NTE=",content:HOORAY}) {`

  Sehen wir uns diese Zeile an:

  - `addReaction` ist der Name der Mutation.
  - `input` ist der erforderliche Argumentschlüssel. Dies ist für eine Mutation immer `input`.
  - `{subjectId:"MDU6SXNzdWUyMzEzOTE1NTE=",content:HOORAY}` ist der erforderliche Argumentwert. Dies ist für eine Mutation immer ein [Eingabeobjekt](/graphql/reference/input-objects) (daher die geschweiften Klammern) aus Eingabefeldern (in diesem Fall `subjectId` und `content`).

  Wie wissen wir, welcher Wert für den Inhalt verwendet werden soll? Die [`addReaction`-Dokumentation](/graphql/reference/mutations#addreaction) gibt an, dass das Feld `content` den Typ [`ReactionContent`](/graphql/reference/enums#reactioncontent) aufweist, wobei es sich um eine [Enumeration](/graphql/reference/enums) handelt, da nur bestimmte Emoji-Reaktionen bei GitHub-Issues unterstützt werden. Dies sind die zulässigen Werte für Reaktionen (beachten Sie, dass einige Werte von ihren entsprechenden Emoji-Namen abweichen):

  {% data reusables.repositories.reaction_list %}

* Der Rest des Aufrufs besteht aus dem Nutzlastobjekt. Hier geben wir die Daten an, die vom Server zurückgegeben werden sollen, nachdem die Mutation durchgeführt wurde. Diese Zeilen stammen aus der [`addReaction`-Dokumentation](/graphql/reference/mutations#addreaction) und weisen drei mögliche Rückgabefelder auf:

    - `clientMutationId` (`String`)
    - `reaction` (`Reaction!`)
    - `subject` (`Reactable!`)

  In diesem Beispiel geben wir die beiden erforderlichen Felder (`reaction` und `subject`) zurück, die beide über erforderliche Unterfelder verfügen (`content` bzw. `id`).

Wenn wir die Mutation ausführen, ist dies die Reaktion:

```json
{
  "data": {
    "addReaction": {
      "reaction": {
        "content": "HOORAY"
      },
      "subject": {
        "id": "MDU6SXNzdWUyMTc5NTQ0OTc="
      }
    }
  }
}
```

Das ist alles! Sieh dir die [Reaktion auf das Issue](https://github.com/octocat/Hello-World/issues/349) an, indem du auf „:tada:“ zeigst, um deinen Benutzernamen zu finden.

Ein letzter Hinweis: Wenn du mehrere Felder in einem Eingabeobjekt übergibst, kann die Syntax unübersichtlich werden. Das Verschieben der Felder in eine [Variable](#working-with-variables) kann helfen. So kannst du die ursprüngliche Mutation mithilfe einer Variablen neu schreiben:

```graphql
mutation($myVar:AddReactionInput!) {
  addReaction(input:$myVar) {
    reaction {
      content
    }
    subject {
      id
    }
  }
}
variables {
  "myVar": {
    "subjectId":"MDU6SXNzdWUyMTc5NTQ0OTc=",
    "content":"HOORAY"
  }
}
```

{% note %}

Du kannst feststellen, dass der `content`-Feldwert im vorherigen Beispiel (in dem er direkt in der Mutation verwendet wird) keine Anführungszeichen um `HOORAY` enthält; er enthält jedoch Anführungszeichen, wenn er in der Variablen verwendet wird. Hierfür gibt es einen Grund:
* Wenn du `content` direkt in der Mutation verwendest, erwartet das Schema für den Wert den Typ [`ReactionContent`](/graphql/reference/enums#reactioncontent), der eine _Enumeration_ ist, keine Zeichenfolge. Die Schemaüberprüfung löst einen Fehler aus, wenn du Anführungszeichen um den Enumerationswert hinzufügst, da Anführungszeichen für Zeichenfolgen reserviert sind.
* Wenn du `content` in einer Variablen verwendest, muss der Abschnitt für die Variablen gültiger JSON-Code sein, und daher sind die Anführungszeichen erforderlich. Die Schemaüberprüfung interpretiert den Typ `ReactionContent` richtig, wenn die Variable während der Ausführung an die Mutation übergeben wird.

Weitere Informationen zum Unterschied zwischen Enumerationen und Zeichenfolgen findest du in der [offiziellen GraphQL-Spezifikation](https://graphql.github.io/graphql-spec/June2018/#sec-Enums).

{% endnote %}

## Weiterführende Themen

Beim Erstellen von GraphQL-Aufrufen hast du _zahlreiche_ weitere Möglichkeiten. Weitere Informationen findest du beispielsweise unter den folgenden Themen:

* [Paginierung](https://graphql.org/learn/pagination/)
* [Fragmente](https://graphql.org/learn/queries/#fragments)
* [Inlinefragmente](https://graphql.org/learn/queries/#inline-fragments)
* [Anweisungen](https://graphql.org/learn/queries/#directives)
