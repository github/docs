---
title: Grundlagen der Suchsyntax
intro: 'Für Suchen auf {% data variables.product.product_name %} kannst du Abfragen erstellen, die nach bestimmten alphanumerischen Zeichenfolgen suchen.'
redirect_from:
  - /articles/search-syntax
  - /articles/understanding-the-search-syntax
  - /github/searching-for-information-on-github/understanding-the-search-syntax
  - /github/searching-for-information-on-github/getting-started-with-searching-on-github/understanding-the-search-syntax
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - GitHub search
shortTitle: Understand search syntax
ms.openlocfilehash: e233c32d01c53ca5e5aa815fffe4505b14696240
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/11/2022
ms.locfileid: '145106059'
---
## Abfrage nach Werten mit einem Vergleichsoperator

Du kannst `>`, `>=`, `<` und `<=` verwenden, um nach Werten zu suchen, die größer, größer oder gleich, kleiner und kleiner oder gleich einem anderen Wert sind.

Abfrage  | Beispiel
------------- | -------------
<code>><em>n</em></code> | **[cats stars:>1000](https://github.com/search?utf8=%E2%9C%93&q=cats+stars%3A%3E1000&type=Repositories)** gleicht Repositorys mit dem Begiff „cats“ (Katzen) ab, die mehr als 1000 Sterne haben.
<code>>=<em>n</em></code> | **[cats topics:>=5](https://github.com/search?utf8=%E2%9C%93&q=cats+topics%3A%3E%3D5&type=Repositories)** gleicht Repositorys mit dem Begriff „cats“ (Katzen) ab, die fünf oder mehr Themen enthalten.
<code><<em>n</em></code> | **[cats size:<10000](https://github.com/search?utf8=%E2%9C%93&q=cats+size%3A%3C10000&type=Code)** gleicht Code mit dem Begriff „cats“ (Katzen) ab, der kleiner ist als 10 KB.
<code><=<em>n</em></code> | **[cats stars:<=50](https://github.com/search?utf8=%E2%9C%93&q=cats+stars%3A%3C%3D50&type=Repositories)** gleicht Repositorys mit dem Begriff „cats“ (Katzen) ab, die 50 Sterne oder weniger haben.

Du kannst auch [Bereichsabfragen](#query-for-values-between-a-range) verwenden, um nach Werten zu suchen, die größer oder gleich oder kleiner oder gleich einem anderen Wert sind.

Abfrage  | Beispiel
------------- | -------------
<code><em>n</em>..*</code> | **[cats stars:10..*](https://github.com/search?utf8=%E2%9C%93&q=cats+stars%3A10..*&type=Repositories)** entspricht `stars:>=10` und gleicht Repositorys mit dem Begriff „cats“ ab, die zehn oder mehr Sterne haben.
<code>*..<em>n</em></code> | **[cats stars:*..10](https://github.com/search?utf8=%E2%9C%93&q=cats+stars%3A%22*..10%22&type=Repositories)** entspricht `stars:<=10` und gleicht Repositorys mit dem Begriff „cats“ ab, die zehn oder weniger Sterne haben.

## Abfrage nach Werten innerhalb eines Wertebereichs

Mit der Bereichssyntax <code><em>n</em>..<em>n</em></code> kannst du nach Werten innerhalb eines Wertebereichs suchen. Dabei ist der erste Wert _n_ die untere und der zweite Wert die obere Grenze des gesuchten Bereichs.

Abfrage  | Beispiel
------------- | -------------
<code><em>n</em>..<em>n</em></code>  | **[cats stars:10..50](https://github.com/search?utf8=%E2%9C%93&q=cats+stars%3A10..50&type=Repositories)** gleicht Repositorys mit dem Begriff „cats“ ab, die zwischen zehn und 50 Sternen haben.

## Abfrage nach Datums- und Zeitangaben

Du kannst nach Datumsangaben suchen, die früher oder später als ein anderes Datum sind, oder die in einen Bereich von Datumsangaben fallen, indem du `>`, `>=`, `<`, `<=` und [Bereichsabfragen](#query-for-values-between-a-range) verwendest. {% data reusables.time_date.date_format %}

Abfrage  | Beispiel
------------- | -------------
<code>><em>YYYY</em>-<em>MM</em>-<em>DD</em></code> | **[cats created:>2016-04-29](https://github.com/search?utf8=%E2%9C%93&q=cats+created%3A%3E2016-04-29&type=Issues)** gleicht Issues mit dem Begriff „cats“ (Katzen) ab, die nach dem 29. April 2016 erstellt wurden.
<code>>=<em>YYYY</em>-<em>MM</em>-<em>DD</em></code> | **[cats created:>=2017-04-01](https://github.com/search?utf8=%E2%9C%93&q=cats+created%3A%3E%3D2017-04-01&type=Issues)** gleicht Issues mit dem Begriff „cats“ (Katzen) ab, die am oder nach dem 1. April 2017 erstellt wurden.
<code><<em>YYYY</em>-<em>MM</em>-<em>DD</em></code> | **[cats pushed:<2012-07-05](https://github.com/search?q=cats+pushed%3A%3C2012-07-05&type=Code&utf8=%E2%9C%93)** gleicht Code mit dem Begriff „cats“ (Katzen) in Repositorys ab, die vor dem 5. Juli 2012 gepusht wurden.
<code><=<em>YYYY</em>-<em>MM</em>-<em>DD</em></code> | **[cats created:<=2012-07-04](https://github.com/search?utf8=%E2%9C%93&q=cats+created%3A%3C%3D2012-07-04&type=Issues)** gleicht Issues mit dem Begriff „cats“ (Katzen) ab, die am oder vor dem 4. Juli 2012 erstellt wurden.
<code><em>YYYY</em>-<em>MM</em>-<em>DD</em>..<em>YYYY</em>-<em>MM</em>-<em>DD</em></code> | **[cats pushed:2016-04-30..2016-07-04](https://github.com/search?utf8=%E2%9C%93&q=cats+pushed%3A2016-04-30..2016-07-04&type=Repositories)** gleicht Repositorys mit dem Begriff „cats“ (Katzen) ab, die zwischen Ende April und Juli 2016 übertragen wurden.
<code><em>YYYY</em>-<em>MM</em>-<em>DD</em>..*</code> | **[cats created:2012-04-30..*](https://github.com/search?utf8=%E2%9C%93&q=cats+created%3A2012-04-30..*&type=Issues)** gleicht Issues ab, die nach dem 30. April 2012 erstellt wurden und den Begriff „cats“ enthalten.
<code>*..<em>YYYY</em>-<em>MM</em>-<em>DD</em></code> | **[cats created:*..2012-07-04](https://github.com/search?utf8=%E2%9C%93&q=cats+created%3A*..2012-07-04&type=Issues)** gleicht Issues ab, die vor dem 4. Juli 2012 erstellt wurden und den Begriff „cats“ enthalten.

{% data reusables.time_date.time_format %}

Abfrage  | Beispiel
------------- | -------------
<code><em>YYYY</em>-<em>MM</em>-<em>DD</em>T<em>HH</em>:<em>MM</em>:<em>SS</em>+<em>00</em>:<em>00</em></code> | **[cats created:2017-01-01T01:00:00+07:00..2017-03-01T15:30:15+07:00](https://github.com/search?utf8=%E2%9C%93&q=cats+created%3A2017-01-01T01%3A00%3A00%2B07%3A00..2017-03-01T15%3A30%3A15%2B07%3A00&type=Issues)** gleicht Issues ab, die zwischen 1. Januar 2017 um 1:00 Uhr mit einem UTC-Offset vom `07:00` und 1. März 2017 um 15:00 Uhr mit einem UTC-Offset von `07:00` erstellt wurden.
<code><em>YYYY</em>-<em>MM</em>-<em>DD</em>T<em>HH</em>:<em>MM</em>:<em>SS</em>Z</code>  | **[cats created:2016-03-21T14:11:00Z..2016-04-07T20:45:00Z](https://github.com/search?utf8=%E2%9C%93&q=cats+created%3A2016-03-21T14%3A11%3A00Z..2016-04-07T20%3A45%3A00Z&type=Issues)** gleicht Issues ab, die zwischen 21. März 2016 um 14:11 Uhr und 7. April 2016 um 20:45 Uhr erstellt wurden.

## Ausschluss bestimmter Ergebnisse

Mit der Syntax `NOT` kannst du Ergebnisse ausschließen, die einen bestimmten Begriff enthalten. Der Operator `NOT` kann nur für Schlüsselwörter für Verbindungszeichenfolgen verwendet werden. Mit Zahlen oder Datumsangaben funktioniert er nicht.

Abfrage  | Beispiel
------------- | -------------
`NOT`  | **[hello NOT world](https://github.com/search?q=hello+NOT+world&type=Repositories)** gleicht Repositorys ab, die den Begriff „hello“ aber nicht den Begriff „world“ enthalten.

Ebenso kannst du Deine Abfrageergebnisse durch Ausschluss bestimmter Teilmengen eingrenzen. Du kannst jedem Qualifizierer `-` voranstellen, um alle Ergebnisse auszuschließen, die mit diesem Qualifizierer übereinstimmen.

Abfrage  | Beispiel
------------- | -------------
<code>-<em>QUALIFIER</em></code>  | **[`cats stars:>10 -language:javascript`](https://github.com/search?q=cats+stars%3A>10+-language%3Ajavascript&type=Repositories)** gleicht Repositorys mit dem Begriff „cats“ (Katzen) ab, die mehr als zehn Sterne besitzen, jedoch nicht in JavaScript geschrieben sind.
 | **[`mentions:defunkt -org:github`](https://github.com/search?utf8=%E2%9C%93&q=mentions%3Adefunkt+-org%3Agithub&type=Issues)** gleicht Issues mit der Erwähnung von @defunkt ab, die sich nicht in Repositorys in der GitHub-Organisation befinden.

## Anführungszeichen für Abfragen nach Zeichenfolgen mit Leerzeichen

Wenn Deine Suchabfrage Leerzeichen enthält, musst du die gesuchte Zeichenfolge in Anführungszeichen einschließen. Beispiel:

* [cats NOT "hello world"](https://github.com/search?utf8=✓&q=cats+NOT+"hello+world"&type=Repositories) gleicht Repositorys mit dem Begriff „cats“ (Katzen) aber nicht mit den Begriffen „hello world“ ab.
* [build label:"bug fix"](https://github.com/search?utf8=%E2%9C%93&q=build+label%3A%22bug+fix%22&type=Issues) gleicht Issues mit dem Begriff „build“ ab, die die Bezeichnung „bug fix“ besitzen.

Bei Suchabfragen innerhalb von Code werden einige nicht alphanumerische Zeichen, so auch Leerzeichen, ignoriert, selbst wenn der Suchstring in Anführungszeichen steht. Dies führt oft nicht zum erwünschten Ergebnis.

## Abfragen mit Benutzernamen

Wenn deine Abfrage einen Qualifizierer verwendet, der einen Benutzernamen verlangt, beispielsweise `user`, `actor` oder `assignee`, kannst du jeden {% data variables.product.product_name %}-Benutzernamen verwenden, um eine bestimmte Person anzugeben oder `@me`, um den bzw. die aktuelle*n Benutzer*in anzugeben.

Abfrage  | Beispiel
------------- | -------------
`QUALIFIER:USERNAME` | [`author:nat`](https://github.com/search?q=author%3Anat&type=Commits) gleicht Commits ab, die von @nat erstellt wurden.
`QUALIFIER:@me` | [`is:issue assignee:@me`](https://github.com/search?q=is%3Aissue+assignee%3A%40me&type=Issues) gleicht Issues ab, die der Person zugewiesen sind, die die Ergebnisse anzeigt.

Du kannst nur `@me` mit einem Qualifizierer verwenden und nicht als Suchbegriff wie `@me main.workflow`.
