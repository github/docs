---
title: Durchlaufen mit Paginierung
intro: Hier erfährst du, wie du mit der Paginierung deine Antworten verwaltest, einschließlich einiger Beispiele mit der Such-API.
redirect_from:
- /guides/traversing-with-pagination
- /v3/guides/traversing-with-pagination
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
- API
shortTitle: Traverse with pagination
miniTocMaxHeadingLevel: 3
ms.openlocfilehash: 92173dffdf2c50bdcd2b10fa42ef634683a3e149
ms.sourcegitcommit: d1d7ccc513192fdd0fc27bb49dc9c85108119b91
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 11/21/2022
ms.locfileid: "148179529"
---
Die API {% ifversion fpt or ghec %}{% data variables.product.prodname_dotcom %}{% else %}{% data variables.product.product_name %}{% endif %} bietet eine Vielzahl von Informationen, die Entwickler nutzen können.
Meistens wirst du sogar feststellen, dass du _zu viele_ Informationen anforderst, und um unsere Server zufrieden zu stellen, [paginiert die API die angeforderten Elemente automatisch](/rest/overview/resources-in-the-rest-api#pagination).

In diesem Leitfaden führen wir einige Aufrufe der Search-API durch und durchlaufen die Ergebnisse mithilfe der Paginierung. Den vollständigen Quellcode für dieses Projekt findest du im Repository [platform-samples][platform samples].

{% data reusables.rest-api.dotcom-only-guide-note %}



## Grundlagen der Paginierung

Zunächst ist es wichtig, einige Fakten zum Empfangen von paginierten Elementen zu kennen:


1. Unterschiedliche API-Aufrufe reagieren mit unterschiedlichen Standardwerten. Ein Aufruf von [List public repositories](/rest/reference/repos#list-public-repositories) stellt beispielsweise paginierte Elemente in Gruppen von 30 bereit, während ein Aufruf der GitHub Search-API Elemente in Gruppen von 100 bereitstellt
2. Du kannst angeben, wie viele Elemente empfangen werden sollen (bis zu 100); Aber
3. Aus technischen Gründen verhält sich nicht jeder Endpunkt gleich. Für [events](/rest/reference/activity#events) kannst du beispielsweise keinen Höchstwert für zu empfangende Elemente festlegen.
Lies unbedingt die Dokumentation zum Behandeln von paginierten Ergebnissen für bestimmte Endpunkte.

{% note %}

**Hinweis**: Du solltest dich immer auf URLs verlassen, die im Linkheader enthalten sind. Versuche nicht, URLs zu erraten oder eigene zu erstellen.

{% endnote %}


### Link-Header

Der Antwortheader enthält Informationen zur Paginierung. Weitere Informationen zu Headern findest du unter [Erste Schritte mit der REST-API](/rest/guides/getting-started-with-the-rest-api#about-the-response-code-and-headers). Um den Antwortheader abzurufen, füge deiner Anforderung das `-I`-Flag hinzu. Zum Beispiel:

```shell 
$ curl -I -H "Accept: application/vnd.github+json" -H "Authorization: Bearer YOUR_TOKEN"   https://api.github.com/enterprises/advacado-corp/audit-log

```

Das `-I`-Flag gibt nur den Antwortheader zurück. Wenn die Antwort paginiert ist, enthält der Antwortheader einen `link`-Header. Der Header sieht in etwa wie folgt aus:

```
link: <https://api.github.com/enterprises/13827/audit-log?after=MS42NjQzODM5MTkzNDdlKzEyfDM0MkI6NDdBNDo4RTFGMEM6NUIyQkZCMzo2MzM0N0JBRg%3D%3D&before=>; rel="next"
```

oder

```
link: <https://api.github.com/repositories/1300192/issues?page=2>; rel="next", <https://api.github.com/repositories/1300192/issues?page=511>; rel="last"
```
### Arten der Paginierung

Die API von {% data variables.product.company_short %} verwendet zwei Paginierungsmethoden: seitenbasierte Paginierung und cursorbasierte Paginierung. Wenn der `link`-Header den Wert `page` enthält, verwendet der Vorgang die seitenbasierte Paginierung. Wenn der `link`-Header die Werte `before` und `after` enthält, verwendet der Vorgang die cursorbasierte Paginierung.


#### Seitenbasierte Paginierung

Der Linkheader für die seitenbasierte Paginierung enthält Informationen zu den vorherigen, nächsten, ersten und letzten Seiten. Wenn du keine bestimmte Seite angefordert hast, wird die Antwort standardmäßig auf die erste Seite angewendet, und Informationen zur ersten und vorherigen Seite werden weggelassen.

Für eine Anforderung, die keine Seite angegeben hat, gibt dieser Header beispielsweise an, dass die nächste Seite `2` und die letzte Seite `511` ist.

```
link: <https://api.github.com/repositories/1300192/issues?page=2>; rel="next", <https://api.github.com/repositories/1300192/issues?page=511>; rel="last"
```

Für eine Anforderung, die Seite 5 angegeben hat, gibt dieser Header beispielsweise an, dass die vorherige Seite `4`, die nächste Seite `6`, die letzte Seite `511` und die erste Seite `1` ist.

```
link: <https://api.github.com/repositories/1300192/issues?page=4>; rel="prev", <https://api.github.com/repositories/1300192/issues?page=6>; rel="next", <https://api.github.com/repositories/1300192/issues?page=511>; rel="last", <https://api.github.com/repositories/1300192/issues?page=1>; rel="first"
```

#### Cursorbasierte Paginierung

Die cursorbasierte Paginierung verwendet die Begriffe `before` und `after`, um durch die Seiten zu navigieren. `rel="next"` und `rel="prev"` kennzeichnen den Cursorpunkt im Dataset und dienen als Verweis für die Seite `before` und `after` der aktuellen Seite.  

```
link: <https://api.github.com/enterprises/13827/audit-log?after=MS42NjQzODMzMzk2MzZlKzEyfFdxSzIxdGU0MlBWNUp5UzhBWDF6LWc%3D&before=>; rel="next",
<https://api.github.com/enterprises/13827/audit-log?after=&before=>; rel="first", 
<https://api.github.com/enterprises/13827/audit-log?after=&before=MS42NjQzODM5MTcyMjllKzEyfDI4NDE6NEVFNDoxODBDRkM5OjY5REE0MzI6NjMzNDdCQUQ%3D>; rel="prev"
```

In diesem Beispiel gibt `rel=next` an, dass sich die nächste Seite hier befindet:

```
after=MS42NjQzODM5MTkzNDdlKzEyfDM0MkI6NDdBNDo4RTFGMEM6NUIyQkZCMzo2MzM0N0JBRg%3D%3D&before=
```




### Verwenden der Paginierung

#### Cursorbasierte Paginierung

Bei der cursorbasierten Paginierung musst du die Begriffe `before` und `after` verwenden. Um mit `before` und `after` zu navigieren, kopiere den oben generierten Linkheader in deine cURL-Anforderung:

```shell
$ curl -I -H "Accept: application/vnd.github+json" -H "Authorization: Bearer YOUR_TOKEN"  https://api.github.com/enterprises/13827/audit-log?after=MS42NjQzODM5MTkzNDdlKzEyfDM0MkI6NDdBNDo4RTFGMEM6NUIyQkZCMzo2MzM0N0JBRg%3D%3D&before=
```

Im obigen Beispiel werden eine Seite mit Ergebnissen und neuen Headerinformationen generiert, die du für die nächste Anforderung verwenden kannst. `rel="next"` stellt die nächste Ergebnisseite bereit. `rel="prev"` stellt die vorherige Ergebnisseite bereit. Am wichtigsten bei dieser Ausgabe ist, dass der Linkheader generiert werden muss, anstatt diesen manuell zu imputieren. Kopiere den gesamten Link aus der folgenden Ausgabe.

```
link: <https://api.github.com/enterprises/13827/audit-log?after=MS42NjQzODMzMzk2MzZlKzEyfFdxSzIxdGU0MlBWNUp5UzhBWDF6LWc%3D&before=>; rel="next", 
<https://api.github.com/enterprises/13827/audit-log?after=&before=>; rel="first", 
<https://api.github.com/enterprises/13827/audit-log?after=&before=MS42NjQzODM5MTcyMjllKzEyfDI4NDE6NEVFNDoxODBDRkM5OjY5REE0MzI6NjMzNDdCQUQ%3D>; rel="prev"
```

Im Gegensatz zur seitenbasierten Paginierung geben die Ergebnisse nicht die letzte Seitenzahl in der Antwort zurück.

    link: <https://api.github.com/enterprises/13827/audit-log?after=MS42NjQzODMzMzk2MzZlKzEyfFdxSzIxdGU0MlBWNUp5UzhBWDF6LWc%3D&before=>; rel="next", 
    <https://api.github.com/enterprises/13827/audit-log?after=&before=>; rel="first", 
    <https://api.github.com/enterprises/13827/audit-log?after=&before=MS42NjQzODM5MTcyMjllKzEyfDI4NDE6NEVFNDoxODBDRkM5OjY5REE0MzI6NjMzNDdCQUQ%3D>; rel="prev"
    
Da die cursorbasierte Paginierung einen Verweispunkt im Dataset erstellt, kann die Gesamtanzahl der Ergebnisse nicht berechnet werden.


#### Seitenbasierte Paginierung

Um mithilfe der seitenbasierten Paginierung zu navigieren, übergib einen `page`-Parameter. Standardmäßig beginnt `page` immer bei `1`. Das folgende Beispiel ist eine cURL-Anforderung an die Such-API von Mozilla-Projekten. Hierbei wird der Ausdruck `addClass` verwendet. Wir beginnen nicht bei 1, sondern springen direkt zu Seite 14. 

```shell
$ curl -I "https://api.github.com/search/code?q=addClass+user:mozilla&page=14"
```

Hier ist ein Beispiel für den Linkheader in der HTTP-Anforderung:

    Link: <https://api.github.com/search/code?q=addClass+user%3Amozilla&page=15>; rel="next",
      <https://api.github.com/search/code?q=addClass+user%3Amozilla&page=34>; rel="last",
      <https://api.github.com/search/code?q=addClass+user%3Amozilla&page=1>; rel="first",
      <https://api.github.com/search/code?q=addClass+user%3Amozilla&page=13>; rel="prev"

In diesem Beispiel ist `rel="next"` bei 15, und `rel="last"` ist 34. Aber jetzt haben wir noch weitere Informationen: `rel="first"` gibt die URL für die _erste_ Seite an, und wichtiger ist, dass `rel="prev"` lässt Dich die Seitenzahl der vorherigen Seite erkennen. Mithilfe dieser Informationen kannst du eine Benutzeroberfläche erstellen, mit der Benutzer zwischen der ersten, vorherigen, nächsten oder letzten Liste der Ergebnisse in einem API-Aufruf springen können.


### Ändern der Anzahl der empfangenen Elemente

#### Seitenbasierte Paginierung

Durch Übergeben des Parameters `per_page` kannst du angeben, wie viele Elemente jede Seite zurückgeben soll, bis zu 100 Elemente. Versuchen wir, 50 Elemente zu `addClass` zu erfragen:

```shell
$ curl -I "https://api.github.com/search/code?q=addClass+user:mozilla&per_page=50"
```

Beachte, was dies mit der Header-Antwort macht:

    Link: <https://api.github.com/search/code?q=addClass+user%3Amozilla&per_page=50&page=2>; rel="next",
      <https://api.github.com/search/code?q=addClass+user%3Amozilla&per_page=50&page=20>; rel="last"

Wie du vielleicht erraten hast, sagt die Information `rel="last"`, dass die letzte Seite jetzt 20 ist. Dies liegt daran, dass wir nach weiteren Informationen pro Seite zu unseren Ergebnissen fragen.

#### Cursorbasierte Paginierung

Du kannst auch den `per_page`-Parameter für die cursorbasierte Paginierung übergeben. 

```shell
$ curl -I -H "Accept: application/vnd.github+json" -H "Authorization: Bearer YOUR_TOKEN"  https://api.github.com/enterprises/13827/audit-log?after=MS42NjQzODM5MTkzNDdlKzEyfDM0MkI6NDdBNDo4RTFGMEM6NUIyQkZCMzo2MzM0N0JBRg%3D%3D&before=&per_page=50
```

## Verwenden der Informationen

Du möchtest keine curl-Aufrufe auf niedriger Ebene tätigen, um nur mit Paginierung arbeiten zu können, also schreiben wir ein kleines Ruby-Skript, das alles ausführt, was wir gerade oben beschrieben haben.

Wie immer benötigen wir zuerst die Ruby-Bibliothek [Octokit.rb][octokit.rb] von GitHub und übergeben unser [{% data variables.product.pat_generic %}][personal token]:

``` ruby
require 'octokit'

# !!! DO NOT EVER USE HARD-CODED VALUES IN A REAL APP !!!
# Instead, set and test environment variables, like below
client = Octokit::Client.new :access_token => ENV['MY_PERSONAL_TOKEN']
```

Als Nächstes führen wir die Suche mithilfe der Octokit-Methode `search_code` aus. Im Gegensatz zur Verwendung von `curl` können wir auch sofort die Anzahl der Ergebnisse abrufen, also gehen wir folgendermaßen vor:

``` ruby
results = client.search_code('addClass user:mozilla')
total_count = results.total_count
```

Nun greifen wir auf die Anzahl der letzten Seite zurück, ähnlich wie die Informationen `page=34>; rel="last"` im Link-Header. Octokit.rb unterstützt Paginierungsinformationen durch eine Implementierung namens „[Hypermedia Link Relations][hypermedia-relations]“.
Wir werden nicht ins Detail gehen, was das ist, aber es genügt zu sagen, dass jedes Element in der Variable `results` einen Hash namens `rels`, hat, der Informationen über `:next`, `:last`, `:first` und `:prev` enthalten kann, je nachdem, welches Ergebnis du hast. Diese Beziehungen enthalten auch Informationen zur resultierenden URL, indem `rels[:last].href` aufgerufen wird.

Mit diesem Wissen können wir die Seitenzahl des letzten Ergebnisses abrufen und dem Benutzer all diese Informationen präsentieren:

``` ruby
last_response = client.last_response
number_of_pages = last_response.rels[:last].href.match(/page=(\d+).*$/)[1]

puts "There are #{total_count} results, on #{number_of_pages} pages!"
```

Schließlich durchlaufen wir die Ergebnisse. Du könntest dies mit einer Schleife `for i in 1..number_of_pages.to_i` tun, aber stattdessen folgen wir den `rels[:next]`-Headern, um Informationen von jeder Seite abzurufen. Der Einfachheit halber nehmen wir einfach den Dateipfad des ersten Ergebnisses jeder Seite. Dazu benötigen wir eine Schleife; und am Ende jeder Schleife rufen wir den Datensatz für die nächste Seite ab, indem wir den Informationen `rels[:next]` folgen.
Die Schleife wird beendet, wenn keine Informationen `rels[:next]` verwendet werden sollen (d. h. wir sind bei `rels[:last]`). Diese Ausgabe sieht ungefähr so aus:

``` ruby
puts last_response.data.items.first.path
until last_response.rels[:next].nil?
  last_response = last_response.rels[:next].get
  puts last_response.data.items.first.path
end
```

Das Ändern der Anzahl der Elemente pro Seite ist mit Octokit.rb äußerst einfach. Übergib einfach einen Optionshash `per_page` an die erste Clientkonstruktion. Danach sollte dein Code intakt bleiben:

``` ruby
require 'octokit'

# !!! DO NOT EVER USE HARD-CODED VALUES IN A REAL APP !!!
# Instead, set and test environment variables, like below
client = Octokit::Client.new :access_token => ENV['MY_PERSONAL_TOKEN']

results = client.search_code('addClass user:mozilla', :per_page => 100)
total_count = results.total_count

last_response = client.last_response
number_of_pages = last_response.rels[:last].href.match(/page=(\d+).*$/)[1]

puts last_response.rels[:last].href
puts "There are #{total_count} results, on #{number_of_pages} pages!"

puts "And here's the first path for every set"

puts last_response.data.items.first.path
until last_response.rels[:next].nil?
  last_response = last_response.rels[:next].get
  puts last_response.data.items.first.path
end
```

## Erstellen von Paginierungslinks

Normalerweise besteht dein Ziel bei der Paginierung nicht darin, alle möglichen Ergebnisse zu verketten, sondern eine Reihe von Navigationselementen wie folgt zu erstellen:

![Beispiel für Paginierungslinks](/assets/images/pagination_sample.png)

Skizzieren wir eine Mikroversion dessen, was das bedeuten könnte.

Aus dem obigen Code wissen wir bereits, dass wir die `number_of_pages` in den paginierten Ergebnissen aus dem ersten Aufruf abrufen können:

``` ruby
require 'octokit'

# !!! DO NOT EVER USE HARD-CODED VALUES IN A REAL APP !!!
# Instead, set and test environment variables, like below
client = Octokit::Client.new :access_token => ENV['MY_PERSONAL_TOKEN']

results = client.search_code('addClass user:mozilla')
total_count = results.total_count

last_response = client.last_response
number_of_pages = last_response.rels[:last].href.match(/page=(\d+).*$/)[1]

puts last_response.rels[:last].href
puts "There are #{total_count} results, on #{number_of_pages} pages!"
```

Von dort aus können wir eine schöne ASCII-Darstellung der Zahlenfelder erstellen:
``` ruby
numbers = ""
for i in 1..number_of_pages.to_i
  numbers << "[#{i}] "
end
puts numbers
```

Lass uns einen Benutzer simulieren, der auf eines dieser Felder klickt, indem eine Zufallszahl erstellt wird:

``` ruby
random_page = Random.new
random_page = random_page.rand(1..number_of_pages.to_i)

puts "A User appeared, and clicked number #{random_page}!"
```

Da wir nun über eine Seitenzahl verfügen, können wir Octokit verwenden, um diese einzelne Seite explizit abzurufen, indem die Option `:page` übergeben wird:

``` ruby
clicked_results = client.search_code('addClass user:mozilla', :page => random_page)
```

Wenn wir uns etwas einfallen lassen wollen, könnten wir auch die vorherige und die nächste Seite nehmen, um Links für die Elemente Zurück (`<<`) und Vorwärts (`>>`) zu erzeugen:

``` ruby
prev_page_href = client.last_response.rels[:prev] ? client.last_response.rels[:prev].href : "(none)"
next_page_href = client.last_response.rels[:next] ? client.last_response.rels[:next].href : "(none)"

puts "The prev page link is #{prev_page_href}"
puts "The next page link is #{next_page_href}"
```

[pagination]: /rest#pagination
[platform samples]: https://github.com/github/platform-samples/tree/master/api/ruby/traversing-with-pagination
[octokit.rb]: https://github.com/octokit/octokit.rb
[personal token]: /articles/creating-an-access-token-for-command-line-use
[hypermedia-relations]: https://github.com/octokit/octokit.rb#pagination
[listing commits]: /rest/reference/commits#list-commits
