---
title: Grundlagen der Suchsyntax
intro: 'Für Suchen auf {% data variables.product.product_name %} können Sie Abfragen erstellen, die nach bestimmten alphanumerischen Zeichenfolgen suchen.'
redirect_from:
  - /articles/search-syntax/
  - /articles/understanding-the-search-syntax
  - /github/searching-for-information-on-github/understanding-the-search-syntax
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
  - GitHub search
---
### Abfrage nach Werten mit einem Vergleichsoperator

Mit `>`, `>=`, `<` und `<=` kannst Du nach Werten suchen, die größer, größer oder gleich, kleiner, oder kleiner oder gleich einem anderen Wert sind.

| Abfrage                   | Beispiel                                                                                                                                                                           |
| ------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <code>><em>n</em></code> | **[cats stars:>1000](https://github.com/search?utf8=%E2%9C%93&q=cats+stars%3A%3E1000&type=Repositories)** findet Repositorys mit dem Wort „cats" und mehr als 1.000 Sternen.       |
| <code>>=<em>n</em></code> | **[cats topics:>=5](https://github.com/search?utf8=%E2%9C%93&q=cats+topics%3A%3E%3D5&type=Repositories)** findet Repositorys mit dem Wort „cats", welche 5 oder mehr Themen haben. |
| <code><<em>n</em></code> | **[cats size:<10000](https://github.com/search?utf8=%E2%9C%93&q=cats+size%3A%3C10000&type=Code)** findet Code mit dem Wort „cats" in Dateien, die kleiner als 10 KB sind.          |
| <code><=<em>n</em></code> | **[cats stars:<=50](https://github.com/search?utf8=%E2%9C%93&q=cats+stars%3A%3C%3D50&type=Repositories)** findet Repositorys mit dem Wort „cats" mit 50 oder weniger Sternen.      |

Auch mit [Bereichsabfragen](#query-for-values-between-a-range) kannst Du nach Werten suchen, die größer oder gleich respektive kleiner oder gleich einem anderen Wert sind.

| Abfrage                   | Beispiel                                                                                                                                                                                                                                  |
| ------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <code><em>n</em>..*</code> | **[cats stars:10..*](https://github.com/search?utf8=%E2%9C%93&q=cats+stars%3A10..*&type=Repositories)** ist gleichbedeutend mit `stars:>=10` und sucht Repositorys, die das Wort „cats“ enthalten und mindestens 10 Sterne haben.      |
| <code>*..<em>n</em></code> | **[cats stars:*..10](https://github.com/search?utf8=%E2%9C%93&q=cats+stars%3A%22*..10%22&type=Repositories)** ist gleichbedeutend mit `stars:<=10` und sucht Repositorys, die das Wort „cats“ enthalten und höchstens 10 Sterne haben. |

### Abfrage nach Werten innerhalb eines Wertebereichs

Mit der Bereichssyntax <code><em>n</em>..<em>n</em></code> kannst Du nach Werten innerhalb eines Wertebereichs suchen. Dabei ist der erste Wert _n_ die untere und der zweite Wert die obere Grenze des gesuchten Bereichs.

| Abfrage                   | Beispiel                                                                                                                                                                                         |
| ------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| <code><em>n</em>..<em>n</em></code> | **[cats stars:10..50](https://github.com/search?utf8=%E2%9C%93&q=cats+stars%3A10..50&type=Repositories)** sucht Repositorys, die das Wort „cats“ enthalten und zwischen 10 und 50 Sternen haben. |

### Abfrage nach Datums- und Zeitangaben

Mit `>`, `>=`, `<`, `<=` und [Bereichsabfragen](#query-for-values-between-a-range) kannst Du nach Datums- und Zeitangaben vor oder nach einem bestimmten Datum/Uhrzeit oder innerhalb eines Datums-/Zeitbereichs suchen. {% data reusables.time_date.date_format %}

| Abfrage                    | Beispiel                                                                                                                                                                                                                                                                    |
| -------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <code>><em>YYYY</em>-<em>MM</em>-<em>DD</em></code>  | **[cats created:>2016-04-29](https://github.com/search?utf8=%E2%9C%93&q=cats+created%3A%3E2016-04-29&type=Issues)** findet Issues mit dem Wort „cats", die nach dem 29. April 0216 erstellt wurden.                                                                         |
| <code>>=<em>YYYY</em>-<em>MM</em>-<em>DD</em></code>  | **[cats created:>=2017-04-01](https://github.com/search?utf8=%E2%9C%93&q=cats+created%3A%3E%3D2017-04-01&type=Issues)** findet Issues mit dem Wort „cats", welche am oder nach dem 1. April 2017 erstellt wurden.                                                           |
| <code><<em>YYYY</em>-<em>MM</em>-<em>DD</em></code> | **[cats pushed:<2012-07-05](https://github.com/search?q=cats+pushed%3A%3C2012-07-05&type=Code&utf8=%E2%9C%93)** findet Code mit dem Wort „cats" in Repositorys, die vor dem 5. Juli 2012 übertragen wurden.                                                                 |
| <code><=<em>YYYY</em>-<em>MM</em>-<em>DD</em></code> | **[cats created:<=2012-07-04](https://github.com/search?utf8=%E2%9C%93&q=cats+created%3A%3C%3D2012-07-04&type=Issues)** findet Issues mit dem Wort „cats", die am oder vor dem 4. Juli 2012 erstellt wurden.                                                                |
| <code><em>YYYY</em>-<em>MM</em>-<em>DD</em>..<em>YYYY</em>-<em>MM</em>-<em>DD</em></code> | **[cats pushed:2016-04-30..2016-07-04](https://github.com/search?utf8=%E2%9C%93&q=cats+pushed%3A2016-04-30..2016-07-04&type=Repositories)** sucht Repositorys, die das Wort „cats“ enthalten und zu denen zwischen dem 30. April und dem 4. Juli 2016 ein Push erfolgt ist. |
| <code><em>YYYY</em>-<em>MM</em>-<em>DD</em>..*</code> | **[cats created:2012-04-30..*](https://github.com/search?utf8=%E2%9C%93&q=cats+created%3A2012-04-30..*&type=Issues)** sucht Issues, die das Wort „cats“ enthalten und nach dem 30. April 2012 erstellt wurden.                                                              |
| <code>*..<em>YYYY</em>-<em>MM</em>-<em>DD</em></code> | **[cats created:*..2012-07-04](https://github.com/search?utf8=%E2%9C%93&q=cats+created%3A*..2012-07-04&type=Issues)** sucht Issues, die das Wort „cats“ enthalten und vor dem 30. April 2012 erstellt wurden.                                                               |

{% data reusables.time_date.time_format %}

| Abfrage                    | Beispiel                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| -------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <code><em>YYYY</em>-<em>MM</em>-<em>DD</em>T<em>HH</em>:<em>MM</em>:<em>SS</em>+<em>00</em>:<em>00</em></code> | **[cats created:2017-01-01T01:00:00+07:00..2017-03-01T15:30:15+07:00](https://github.com/search?utf8=%E2%9C%93&q=cats+created%3A2017-01-01T01%3A00%3A00%2B07%3A00..2017-03-01T15%3A30%3A15%2B07%3A00&type=Issues)** sucht Issues, die zwischen 1. Januar 2017, 01:00 Uhr (mit einer UTC-Verschiebung von `07:00` Stunden), und 1. März 2017, 15:30 Uhr (mit ebenfalls einer UTC-Verschiebung von `07:00` Stunden), erstellt wurden. with a UTC offset of `07:00` and March 1, 2017 at 3 p.m. with a UTC offset of `07:00`. |
| <code><em>YYYY</em>-<em>MM</em>-<em>DD</em>T<em>HH</em>:<em>MM</em>:<em>SS</em>Z</code> | **[cats created:2016-03-21T14:11:00Z..2016-04-07T20:45:00Z](https://github.com/search?utf8=%E2%9C%93&q=cats+created%3A2016-03-21T14%3A11%3A00Z..2016-04-07T20%3A45%3A00Z&type=Issues)** sucht Issues, die zwischen 21. März 2016, 14:11 Uhr, und 7. April 2016, 20:45 Uhr, erstellt wurden.                                                                                                                                                                                                                                |

### Ausschluss bestimmter Ergebnisse

Mit der Syntax `NOT` kannst Du Ergebnisse, die ein bestimmtes Wort enthalten, aus den Abfrageergebnissen ausschließen. Der Operator `NOT` kann nur für Zeichenfolgen verwendet werden. Mit Zahlen oder Datumsangaben funktioniert er nicht.

| Abfrage | Beispiel                                                                                                                                                             |
| ------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `NOT`   | **[hello NOT world](https://github.com/search?q=hello+NOT+world&type=Repositories)** sucht Repositorys, die das Wort „hello“, aber nicht das Wort „world“ enthalten. |

Ebenso kannst du Deine Abfrageergebnisse durch Ausschluss bestimmter Teilmengen eingrenzen. Du kannst jedem Qualifizierer ein `-` voranstellen, um Ergebnisse auszuschließen, die mit diesem Qualifizierer übereinstimmen.

| Abfrage                    | Beispiel                                                                                                                                                                                                                                          |
| -------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <code>-<em>KENNZEICHNER</em></code> | **[cats stars:>10 -language:javascript](https://github.com/search?q=cats+stars%3A>10+-language%3Ajavascript&type=Repositories)** findet Repositorys mit dem Wort „cats", die mehr als 10 Sterne haben, aber nicht in JavaScript geschrieben sind. |
|                            | **[mentions:defunkt -org:github](https://github.com/search?utf8=%E2%9C%93&q=mentions%3Adefunkt+-org%3Agithub&type=Issues)** sucht Issues, die „@defunkt“ erwähnen, aber nicht in Repositorys der Organisation GitHub enthalten sind.              |

### Anführungszeichen für Abfragen nach Zeichenfolgen mit Leerzeichen

Wenn Deine Suchabfrage Leerzeichen enthält, musst du die gesuchte Zeichenfolge in Anführungszeichen einschließen. Ein Beispiel:

* [cats NOT "hello world"](https://github.com/search?utf8=✓&q=cats+NOT+"hello+world"&type=Repositories) sucht Repositorys, die das Wort „cats“ enthalten, aber nicht die Wörter „hello world“.
* [build label:"bug fix"](https://github.com/search?utf8=%E2%9C%93&q=build+label%3A%22bug+fix%22&type=Issues) sucht Issues, die das Wort „build“ enthalten und die Kennzeichnung „bug fix“ aufweisen.

Bei Suchabfragen innerhalb von Code werden einige nicht alphanumerische Zeichen, so auch Leerzeichen, ignoriert, selbst wenn der Suchstring in Anführungszeichen steht. Dies führt oft nicht zum erwünschten Ergebnis.

{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.20" or currentVersion == "github-ae@latest" %}
### Abfragen mit Benutzernamen

Wenn Deine Abfrage einen Qualifizierer verwendet, der einen Benutzernamen verlangt, beispielsweise `user`, `actor`, oder `assignee`, kannst du jeden {% data variables.product.product_name %}-Benutzernamen verwenden, um eine spezifische Person anzugeben oder `@me` benutzen, um den aktuellen Benutzer anzugeben.

| Abfrage              | Beispiel                                                                                                                                                                     |
| -------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `QUALIFIER:USERNAME` | [`author:nat`](https://github.com/search?q=author%3Anat&type=Commits) findet Commits, die von @nat verfasst wurden                                                           |
| `QUALIFIER:@me`      | [`is:issue assignee:@me`](https://github.com/search?q=is%3Aissue+assignee%3A%40me&type=Issues) findet Issues, die der Person zugewiesen sind, die die Suchresultate anschaut |

Du kannst `@me` nur mit einem Qualifizierer verwenden und nicht als eigenen Suchbegriff, wie etwa `@me main.workflow`.
{% endif %}
