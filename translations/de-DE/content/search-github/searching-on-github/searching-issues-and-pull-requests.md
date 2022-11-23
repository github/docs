---
title: Issues und Pull Requests durchsuchen
intro: 'Auf {% data variables.product.product_name %} kannst du nach Issues und Pull Requests suchen und die Ergebnisse mit diesen Suchqualifizierern in beliebiger Kombination eingrenzen.'
redirect_from:
  - /articles/searching-issues
  - /articles/searching-issues-and-pull-requests
  - /github/searching-for-information-on-github/searching-issues-and-pull-requests
  - /github/searching-for-information-on-github/searching-on-github/searching-issues-and-pull-requests
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - GitHub search
shortTitle: Search issues & PRs
ms.openlocfilehash: 8565d2d31c66291114da8ab4a95312a568d39ae3
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 10/25/2022
ms.locfileid: '148106461'
---
Du kannst Issues und Pull Requests global auf {% data variables.product.product_name %} oder in einer bestimmten Organisation durchsuchen. Weitere Informationen findest du unter [Informationen zur Suche auf {% data variables.product.company_short %}](/search-github/getting-started-with-searching-on-github/about-searching-on-github).

{% tip %}

**Tipps:** {% ifversion ghes or ghae %}
  - Dieser Artikel enthält Beispielsuchen für die {% data variables.product.prodname_dotcom %}-Website. Du kannst jedoch die gleichen Suchfilter für {% data variables.location.product_location %} verwenden.{% endif %}
  - Eine Liste mit Suchsyntaxoptionen, die du jedem Suchqualifizierer hinzufügen kannst, um die Ergebnisse weiter zu optimieren, findest du unter [Grundlagen der Suchsyntax](/search-github/getting-started-with-searching-on-github/understanding-the-search-syntax).
  - Schließe Suchbegriffe, die aus mehreren Wörtern bestehen, in Anführungszeichen ein. Wenn du beispielsweise nach Issues mit der Kennzeichnung „In progress“ suchen möchtest, gib `label:"in progress"` ein. Bei der Suche wird die Groß-/Kleinschreibung ignoriert.
  - {% data reusables.search.search_issues_and_pull_requests_shortcut %}

  {% endtip %}

## Suche nur nach Issues oder nur nach Pull Requests

Die Suche auf {% data variables.product.product_name %} gibt standardmäßig sowohl Issues als auch Pull Requests zurück. Mit den Qualifizierern `type` oder `is` kannst du die Suchergebnisse jedoch auf nur Issues oder nur Pull Requests eingrenzen.

| Qualifizierer  | Beispiel
| ------------- | -------------
| `type:pr` | [**cat type:pr**](https://github.com/search?q=cat+type%3Apr&type=Issues) gleicht Pull Requests mit dem Begriff „cat“ ab.
| `type:issue` | [**github commenter:defunkt type:issue**](https://github.com/search?q=github+commenter%3Adefunkt+type%3Aissue&type=Issues) gleicht Issues ab, die den Begriff „GitHub“ beinhalten und über einen Kommentar von @defunkt verfügen.
| `is:pr` | [**event is:pr**](https://github.com/search?utf8=%E2%9C%93&q=event+is%3Apr&type=) gleicht Pull Requests mit dem Begriff „event“ ab.
| `is:issue` | [**is:issue label:bug is:closed**](https://github.com/search?utf8=%E2%9C%93&q=is%3Aissue+label%3Abug+is%3Aclosed&type=) gleicht geschlossene Issues mit der Kennzeichnung „bug“ ab.

## Suche nach Titel, Textteil oder Kommentaren

Mit dem Qualifizierer `in` kannst du deine Suche auf den Titel, den Text, die Kommentare oder eine beliebige Kombination derselben eingrenzen. Ohne diesen Qualifizierer werden Titel, Textteil und Kommentare durchsucht.

| Qualifizierer     | Beispiel
| ------------- | -------------
| `in:title` | [**warning in:title**](https://github.com/search?q=warning+in%3Atitle&type=Issues) gleicht Issues mit dem Begriff „warning“ im Titel ab.
| `in:body` | [**error in:title,body**](https://github.com/search?q=error+in%3Atitle%2Cbody&type=Issues) gleicht Issues mit dem Begriff „error“ im Titel oder Text ab.
| `in:comments` | [**shipit in:comments**](https://github.com/search?q=shipit+in%3Acomment&type=Issues) gleicht Issues ab, bei denen in den Kommentaren „shipit“ erwähnt wird.

## Suche innerhalb der Repositorys eines Benutzers oder einer Organisation

Wenn du in allen Repositorys, die einem bestimmten Benutzer bzw. einer bestimmten Benutzerin oder einer bestimmten Organisation gehören, nach Issues und Pull Requests suchen möchtest, kannst du die Qualifizierer `user` oder `org` verwenden. Wenn du in einem bestimmten Repository nach Issues und Pull Requests suchen möchtest, kannst du den Qualifizierer `repo` verwenden.

{% data reusables.pull_requests.large-search-workaround %}

| Qualifizierer        | Beispiel
| ------------- | -------------
| <code>user:<em>USERNAME</em></code> | [**user:defunkt ubuntu**](https://github.com/search?q=user%3Adefunkt+ubuntu&type=Issues) gleicht Issues mit dem Begriff „ubuntu“ in Repositorys ab, die @defunkt gehören.
| <code>org:<em>ORGNAME</em></code> | [**org:github**](https://github.com/search?q=org%3Agithub&type=Issues&utf8=%E2%9C%93) gleicht Issues in Repositorys ab, die der Organisation GitHub gehören.
| <code>repo:<em>USERNAME/REPOSITORY</em></code> | [**repo:mozilla/shumway created:<2012-03-01**](https://github.com/search?q=repo%3Amozilla%2Fshumway+created%3A%3C2012-03-01&type=Issues) gleicht Issues aus dem shumway-Projekt von @mozilla ab, die vor März 2012 erstellt wurden.

## Suche nach Öffnungsstatus

Mit den Qualifizierern `state` oder `is` kannst du nach offenen und geschlossenen Issues und Pull Requests filtern.

| Qualifizierer        | Beispiel
| ------------- | -------------
| `state:open` | [**libraries state:open mentions:vmg**](https://github.com/search?utf8=%E2%9C%93&q=libraries+state%3Aopen+mentions%3Avmg&type=Issues) gleicht offene Issues, in denen @vmg erwähnt wird, mit dem Begriff „libraries“ ab.
| `state:closed` | [**design state:closed in:body**](https://github.com/search?utf8=%E2%9C%93&q=design+state%3Aclosed+in%3Abody&type=Issues) gleicht geschlossene Issues mit dem Begriff „design“ im Text ab.
| `is:open` | [**performance is:open is:issue**](https://github.com/search?q=performance+is%3Aopen+is%3Aissue&type=Issues) gleicht offene Issues mit dem Begriff „performance“ ab.
| `is:closed` | [**android is:closed**](https://github.com/search?utf8=%E2%9C%93&q=android+is%3Aclosed&type=) gleicht geschlossene Issues und Pull Requests mit dem Begriff „android“ ab.

{% ifversion issue-close-reasons %}
## Suchen nach dem Grund, warum ein Problem geschlossen wurde

Du kannst Issues basierend auf dem Grund filtern, aus dem sie geschlossen wurden, indem du den Qualifizierer `reason` verwendest.

| Qualifizierer        | Beispiel
| ------------- | -------------
| `reason:completed` | [**libraries is:closed reason:completed**](https://github.com/search?q=libraries+is%3Aclosed+reason%3Acompleted&type=Issues) gleicht Issues mit dem Wort „libraries“ ab, die als „completed“ geschlossen wurden.
| `reason:"not planned"` | [**libraries is:closed reason:not planned**](https://github.com/search?q=libraries+is%3Aclosed+reason%3A%22not+planned%22&type=Issues) gleicht Issues mit dem Wort „libraries“ ab, die als „not planned“ geschlossen wurden.
 
{% endif %}

## Filtern nach der Sichtbarkeit von Repositorys

Mit dem Qualifizierer `is` kannst du nach der Sichtbarkeit des Repositorys filtern, das die Issues und Pull Requests enthält. Weitere Informationen findest du unter [Informationen zu Repositorys](/repositories/creating-and-managing-repositories/about-repositories#about-repository-visibility).

| Qualifizierer  | Beispiel | ------------- | ------------- |{% ifversion fpt or ghes or ghec %} | `is:public` | [**is:public**](https://github.com/search?q=is%3Apublic&type=Issues) gleicht Issues und Pull Requests in öffentlichen Repositorys ab.{% endif %}{% ifversion ghes or ghec or ghae %} | `is:internal` | [**is:internal**](https://github.com/search?q=is%3Ainternal&type=Issues) gleicht Issues und Pull Requests in internen Repositorys ab.{% endif %} | `is:private` | [**is:private cupcake**](https://github.com/search?q=is%3Aprivate+cupcake&type=Issues) gleicht Issues und Pull Requests mit dem Begriff „cupcake“ in privaten Repositorys ab, auf die Sie zugreifen können.

## Suche nach Autor

Mit dem Qualifizierer `author` wird nach Issues und Pull Requests gesucht, die von einem bestimmten Benutzer bzw. einer bestimmten Benutzerin oder einem bestimmten Integrationskonto erstellt wurden.

| Qualifizierer     | Beispiel
| ------------- | -------------
| <code>author:<em>USERNAME</em></code> | [**cool author:gjtorikian**](https://github.com/search?q=cool+author%3Agjtorikian&type=Issues) gleicht Issues und Pull Requests, die von @gjtorikian erstellt wurden, mit dem Begriff „cool“ ab.
| | [**bootstrap in:body author:mdo**](https://github.com/search?q=bootstrap+in%3Abody+author%3Amdo&type=Issues) gleicht von @mdo verfasste Issues ab, die den Begriff „bootstrap“ im Text enthalten.
| <code>author:app/<em>USERNAME</em></code> | [**author:app/robot**](https://github.com/search?q=author%3Aapp%2Frobot&type=Issues) gleicht Issues ab, die vom Integrationskonto „robot“ erstellt wurden.

## Suche nach Bearbeiter

Mit dem Qualifizierer `assignee` wird nach Issues und Pull Requests gesucht, die einem bestimmten Benutzer bzw. einer bestimmten Benutzerin zugewiesen sind. Du kannst zwar nicht nach Issues und Pull Requests mit _einer beliebigen_ zugewiesenen Person suchen, aber nach [Issues und Pull Requests ohne zugewiesene Person](#search-by-missing-metadata).

| Qualifizierer     | Beispiel
| ------------- | -------------
| <code>assignee:<em>USERNAME</em></code> | [**assignee:vmg repo:libgit2/libgit2**](https://github.com/search?utf8=%E2%9C%93&q=assignee%3Avmg+repo%3Alibgit2%2Flibgit2&type=Issues) gleicht Issues und Pull Requests im Projekt libgit2 von libgit2 ab, die @vmg zugewiesen sind.

## Suche nach Erwähnung

Mit dem Qualifizierer `mentions` wird nach Issues gesucht, in denen ein bestimmter Benutzer bzw. eine bestimmte Benutzerin erwähnt wird. Weitere Informationen findest du unter [Erwähnen von Personen und Teams](/articles/basic-writing-and-formatting-syntax/#mentioning-people-and-teams).

| Qualifizierer     | Beispiel
| ------------- | -------------
| <code>mentions:<em>USERNAME</em></code> | [ **`resque mentions:defunkt`**](https://github.com/search?q=resque+mentions%3Adefunkt&type=Issues) gleicht Issues mit dem Begriff „resque“ ab, in denen @defunkt erwähnt wird.

## Suche nach Teamerwähnung

Bei Organisationen und Teams, zu denen du gehörst, kannst du den Qualifizierer `team` verwenden, um nach Issues oder Pull Requests zu suchen, in denen ein bestimmtes Team innerhalb dieser Organisation erwähnt wird (@mention). Ersetze in den folgenden Beispielen die Namen durch den Namen deiner Organisation und deines Teams, um eine Suche durchzuführen.

| Qualifizierer        | Beispiel
| ------------- | -------------
| <code>team:<em>ORGNAME/TEAMNAME</em></code> | **`team:jekyll/owners`** gleicht Issues ab, in denen das Team `@jekyll/owners` erwähnt wird.
| | **team:myorg/ops is:open is:pr** gleicht offene Pull Requests ab, in denen das Team `@myorg/ops` erwähnt wird.

## Suche nach Kommentierer

Mit dem Qualifizierer `commenter` wird nach Issues gesucht, die einen Kommentar von einem bestimmten Benutzer bzw. einer bestimmten Benutzerin enthalten.

| Qualifizierer        | Beispiel
| ------------- | -------------
| <code>commenter:<em>USERNAME</em></code> | [**github commenter:defunkt org:github**](https://github.com/search?utf8=%E2%9C%93&q=github+commenter%3Adefunkt+org%3Agithub&type=Issues) gleicht Issues in Repositorys ab, die GitHub gehören, den Begriff „github“ enthalten und über einen Kommentar von @defunkt verfügen.

## Suche nach beteiligtem Benutzer

Mit dem Qualifizierer `involves` kannst du nach Issues suchen, an denen ein bestimmter Benutzer bzw. eine bestimmte Benutzerin in irgendeiner Weise beteiligt ist. Der Qualifizierer `involves` ist ein logisches „Oder“ zwischen den Qualifizierern `author`, `assignee`, `mentions` und `commenter` für einen einzelnen Benutzer bzw. eine einzelne Benutzerin. Dieser Qualifizierer sucht also Issues und Pull Requests, die von einem bestimmten Benutzer erstellt wurden, diesem zugewiesen sind, diesen erwähnen oder in denen dieser Benutzer einen Kommentar hinterlassen hat.

| Qualifizierer        | Beispiel
| ------------- | -------------
| <code>involves:<em>USERNAME</em></code> | **[involves:defunkt involves:jlord](https://github.com/search?q=involves%3Adefunkt+involves%3Ajlord&type=Issues)** gleicht Issues ab, an denen entweder @defunkt oder @jlord beteiligt ist.
| | [**NOT bootstrap in:body involves:mdo**](https://github.com/search?q=NOT+bootstrap+in%3Abody+involves%3Amdo&type=Issues) gleicht Issues ab, an denen @mdo beteiligt ist und die im Text nicht den Begriff „bootstrap“ enthalten.

## Suche nach verknüpften Issues und Pull Request
Du kannst deine Ergebnisse auf Issues einschränken, die mit einem Pull-Request verknüpft sind, indem du eine schließende Referenz verwendest, oder auf Pull-Requests, die mit einem Issue verbunden sind, den der Pull-Request schließen kann.

| Qualifizierer | Beispiel |
| ------------- | ------------- |
| `linked:pr` | [**repo:desktop/desktop is:open linked:pr**](https://github.com/search?q=repo%3Adesktop%2Fdesktop+is%3Aopen+linked%3Apr) gleicht offene Issues im Repository `desktop/desktop` ab, die durch einen schließenden Verweis mit einem Pull Request verknüpft sind. |
| `linked:issue` | [**repo:desktop/desktop is:closed linked:issue**](https://github.com/search?q=repo%3Adesktop%2Fdesktop+is%3Aclosed+linked%3Aissue) gleicht geschlossene Pull Requests im Repository `desktop/desktop` ab, die mit einem Issue verknüpft wurden, das der Pull Request möglicherweise geschlossen hat. |
| `-linked:pr` | [**repo:desktop/desktop is:open -linked:pr**](https://github.com/search?q=repo%3Adesktop%2Fdesktop+is%3Aopen+-linked%3Apr) gleicht offene Issues im Repository `desktop/desktop` ab, die nicht durch einen schließenden Verweis mit einem Pull Request verknüpft sind. |
| `-linked:issue` | [**repo:desktop/desktop is:open -linked:issue**](https://github.com/search?q=repo%3Adesktop%2Fdesktop+is%3Aopen+-linked%3Aissue) gleicht offene Pull Requests im Repository `desktop/desktop` ab, die nicht mit einem Issue verknüpft sind, das der Pull Request möglicherweise schließt. |

## Suche nach Kennzeichnung

Mit dem Qualifizierer `label` kannst du deine Ergebnisse basierend auf Kennzeichnungen eingrenzen. Da Issues verschiedene Kennzeichnungen aufweisen können, kannst du für jeden Issue einen eigenen Qualifizierer einsetzen.

| Qualifizierer        | Beispiel
| ------------- | -------------
| <code>label:<em>LABEL</em></code> | [**label:"help wanted" language:ruby**](https://github.com/search?utf8=%E2%9C%93&q=label%3A%22help+wanted%22+language%3Aruby&type=Issues) gleicht Issues mit der Kennzeichnung „help wanted“ in Ruby-Repositorys ab.
|  | [**broken in:body -label:bug label:priority**](https://github.com/search?q=broken+in%3Abody+-label%3Abug+label%3Apriority&type=Issues) gleicht Issues mit dem Begriff „broken“ im Text ab, die nicht über die Kennzeichnung „bug“ verfügen, *aber* über die Kennzeichnung „priority“.
| | [**label:bug label:resolved**](https://github.com/search?l=&q=label%3Abug+label%3Aresolved&type=Issues) gleicht Issues mit den Bezeichnungen „bug“ und „resolved“ ab.
| | [**label:bug,resolved**](https://github.com/search?q=label%3Abug%2Cresolved&type=Issues) gleicht Issues mit den Bezeichnungen „bug“ oder „resolved“ ab.

## Suche nach Meilenstein

Mit dem Qualifizierer `milestone` wird nach Issues oder Pull Requests gesucht, die Teil eines [Meilensteins](/articles/about-milestones) in einem Repository sind.

| Qualifizierer        | Beispiel
| ------------- | -------------
| <code>milestone:<em>MILESTONE</em></code> | [**milestone:"overhaul"**](https://github.com/search?utf8=%E2%9C%93&q=milestone%3A%22overhaul%22&type=Issues) gleicht Issues in einem Meilenstein namens „overhaul“ ab.
| | [**milestone:"bug fix"**](https://github.com/search?utf8=%E2%9C%93&q=milestone%3A%22bug+fix%22&type=Issues) gleicht Issues in einem Meilenstein namens „bug fix“ ab.

## Suche nach Projektboard

Du kannst den Qualifizierer `project` verwenden, um nach Issues zu suchen, die einem bestimmten [Projektboard](/articles/about-project-boards/) in einem Repository oder einer Organisation zugeordnet sind. Projektboards werden anhand ihrer Projektboardnummer gesucht. Die Nummer eines Projektboards befindet sich am Ende seiner URL.

| Qualifizierer        | Beispiel
| ------------- | -------------
| <code>project:<em>PROJECT_BOARD</em></code> | **project:github/57** gleicht Issues ab, die GitHub gehören und dem Projektboard 57 der Organisation zugeordnet sind.
| <code>project:<em>REPOSITORY/PROJECT_BOARD</em></code> | **project:github/linguist/1** gleicht Issues ab, die dem Projektboard 1 im Repository „linguist“ von @github zugeordnet sind.

## Suche nach Commit-Status

Du kannst Pull Requests nach dem Status ihrer Commits filtern. Dies ist besonders nützlich, wenn du [die Status-API](/rest/reference/commits#commit-statuses) oder einen CI-Dienst verwendest.

| Qualifizierer        | Beispiel
| ------------- | -------------
| `status:pending` | [**language:go status:pending**](https://github.com/search?utf8=%E2%9C%93&q=language%3Ago+status%3Apending) gleicht in Go-Repositorys geöffnete Pull Requests ab, deren Status „pending“ ist.
| `status:success` | [**is:open status:success finally in:body**](https://github.com/search?utf8=%E2%9C%93&q=is%3Aopen+status%3Asuccess+finally+in%3Abody&type=Issues) gleicht offene Pull Requests mit dem Begriff „finally“ im Text und dem Status „success“ ab.
| `status:failure` | [**created:2015-05-01..2015-05-30 status:failure**](https://github.com/search?utf8=%E2%9C%93&q=created%3A2015-05-01..2015-05-30+status%3Afailure&type=Issues) gleicht Pull Requests mit dem Status „failure“ ab, die im Mai 2015 geöffnet wurden.

## Suche nach Commit-SHA

Wenn du den spezifischen SHA-Hash eines Commits kennst, kannst du ihn für die Suche nach Pull Requests verwenden, die diesen SHA enthalten. Die SHA-Syntax besteht aus mindestens sieben Zeichen.

| Qualifizierer        | Beispiel
| ------------- | -------------
| <code><em>SHA</em></code> | [**e1109ab**](https://github.com/search?q=e1109ab&type=Issues) gleicht Pull Requests mit einem Commit-SHA-Wert ab, der mit `e1109ab` beginnt.
| | [**0eff326d6213c is:merged**](https://github.com/search?q=0eff326d+is%3Amerged&type=Issues) gleicht gemergte Pull Requests mit einem Commit-SHA-Wert ab, der mit `0eff326d6213c` beginnt.

## Suche nach Branch-Name

Du kannst Pull Requests nach dem Branch filtern, aus dem sie stammen (Head-Branch) oder in den sie zusammengeführt werden (Basis-Branch).

| Qualifizierer        | Beispiel
| ------------- | -------------
| <code>head:<em>HEAD_BRANCH</em></code> | [**head:change is:closed is:unmerged**](https://github.com/search?utf8=%E2%9C%93&q=head%3Achange+is%3Aclosed+is%3Aunmerged) gleicht über Branches geöffnete Pull Requests ab, deren Name mit dem Begriff „change“ beginnt und die geschlossen sind.
| <code>base:<em>BASE_BRANCH</em></code> | [**base:gh-pages**](https://github.com/search?utf8=%E2%9C%93&q=base%3Agh-pages) gleicht Pull Requests ab, die im Branch `gh-pages` gemergt werden.

## Suche nach Sprache

Mit dem Qualifizierer `language` kannst du nach Issues und Pull Requests in Repositorys suchen, die in einer bestimmten Programmiersprache geschrieben sind.

| Qualifizierer        | Beispiel
| ------------- | -------------
| <code>language:<em>LANGUAGE</em></code> | [**language:ruby state:open**](https://github.com/search?q=language%3Aruby+state%3Aopen&type=Issues) gleicht offene Issues in Ruby-Repositorys ab.

## Suche nach Anzahl der Kommentare

Du kannst den Qualifizierer `comments` zusammen mit den [Qualifizierern für „größer als“, „kleiner als“ oder bestimmte Bereiche](/search-github/getting-started-with-searching-on-github/understanding-the-search-syntax) verwenden, um nach der Anzahl von Kommentaren zu suchen.

| Qualifizierer        | Beispiel
| ------------- | -------------
| <code>comments:<em>n</em></code> | [**state:closed comments:&gt;100**](https://github.com/search?q=state%3Aclosed+comments%3A%3E100&type=Issues) gleicht geschlossene Issues mit mehr als 100 Kommentaren ab.
| | [**comments:500..1000**](https://github.com/search?q=comments%3A500..1000&type=Issues) gleicht Issues mit 500 bis 1.000 Kommentaren ab.

## Suche nach Anzahl der Interaktionen

Mit dem Qualifizierer `interactions` und den [Qualifizierern für „größer als“, „kleiner als“ oder bestimmte Bereiche](/search-github/getting-started-with-searching-on-github/understanding-the-search-syntax) kannst du Issues und Pull Requests nach der Anzahl der Interaktionen filtern. Der Interaktionszähler ist die Anzahl Reaktionen und Kommentare zu einem Issue oder Pull Request.

| Qualifizierer        | Beispiel
| ------------- | -------------
| <code>interactions:<em>n</em></code> | [** interactions:&gt;2000**](https://github.com/search?q=interactions%3A%3E2000) gleicht Pull Requests oder Issues mit mehr als 2.000 Interaktionen ab.
| | [**interactions:500..1000**](https://github.com/search?q=interactions%3A500..1000) gleicht Pull Requests oder Issues mit 500 bis 1.000 Interaktionen ab.

## Suche nach Anzahl der Reaktionen

Mit dem Qualifizierer `reactions` und den [Qualifizierern für „größer als“, „kleiner als“ oder bestimmte Bereiche](/search-github/getting-started-with-searching-on-github/understanding-the-search-syntax) kannst du Issues und Pull Requests nach der Anzahl der Reaktionen filtern.

| Qualifizierer        | Beispiel
| ------------- | -------------
| <code>reactions:<em>n</em></code> | [** reactions:&gt;1000**](https://github.com/search?q=reactions%3A%3E1000&type=Issues) gleicht Issues mit mehr als 1.000 Reaktionen ab.
| | [**reactions:500..1000**](https://github.com/search?q=reactions%3A500..1000) gleicht Issues mit 500 bis 1.000 Reaktionen ab.

## Suche nach Pull-Request-Entwürfen
Du kannst nach Pull-Request-Entwürfen suchen. Weitere Informationen findest du unter [Informationen zu Pull Requests](/articles/about-pull-requests#draft-pull-requests).

| Qualifizierer        | Beispiel
| ------------- | -------------
| `draft:true` | [**draft:true**](https://github.com/search?q=draft%3Atrue) gleicht Pull Requests im Entwurfsstadium ab.
| `draft:false` | [**draft:false**](https://github.com/search?q=draft%3Afalse) gleicht Pull Requests ab, die für einen Review bereit sind.

## Suche nach Review-Status und Reviewer eines Pull-Requests

Du kannst Pull Requests basierend auf [Reviewstatus](/pull-requests/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/about-pull-request-reviews) (_keiner_, _erforderlich_, _genehmigt_ oder _Änderungen gefordert_), Reviewer*in und angefragten Reviewer*innen filtern.

| Qualifizierer        | Beispiel
| ------------- | -------------
| `review:none` | [**type:pr review:none**](https://github.com/search?utf8=%E2%9C%93&q=type%3Apr+review%3Anone&type=Issues) gleicht Pull Requests ab, für die kein Review durchgeführt wurde.
| `review:required` | [**type:pr review:required**](https://github.com/search?utf8=%E2%9C%93&q=type%3Apr+review%3Arequired&type=Issues) gleicht Pull Requests ab, bei denen vor einem Merge ein Review erforderlich ist.
| `review:approved` | [**type:pr review:approved**](https://github.com/search?utf8=%E2%9C%93&q=type%3Apr+review%3Aapproved&type=Issues) gleicht Pull Requests ab, die ein Reviewer genehmigt hat.
| `review:changes_requested` | [**type:pr review:changes_requested**](https://github.com/search?utf8=%E2%9C%93&q=type%3Apr+review%3Achanges_requested&type=Issues) gleicht Pull Requests ab, in denen ein Reviewer um Änderungen gebeten hat.
| <code>reviewed-by:<em>USERNAME</em></code> | [**type:pr reviewed-by:gjtorikian**](https://github.com/search?utf8=%E2%9C%93&q=type%3Apr+reviewed-by%3Agjtorikian&type=Issues) gleicht Pull Requests ab, bei denen der Review von einer bestimmten Person durchgeführt wurde.
| <code>review-requested:<em>USERNAME</em></code> | [**type:pr review-requested:benbalter**](https://github.com/search?utf8=%E2%9C%93&q=type%3Apr+review-requested%3Abenbalter&type=Issues) gleicht Pull Requests ab, bei denen eine bestimmte Person für einen Review angefragt wurde. Angeforderte Reviewer werden nicht mehr in den Suchergebnissen aufgeführt, sobald sie den Review eines Pull Requests abgeschlossen haben. Wenn die angeforderte Person zu einem Team gehört, das ebenfalls für den Review angefordert wurde, werden die Review-Anforderungen für dieses Team ebenfalls in den Suchergebnissen aufgeführt.
| <code>user-review-requested:@me</code> | [**type:pr user-review-requested:@me** ](https://github.com/search?q=is%3Apr+user-review-requested%3A%40me+) gleicht Pull Requests ab, für die du direkt um einen Review gebeten wurdest.
| <code>team-review-requested:<em>TEAMNAME</em></code> | [**type:pr team-review-requested:github/docs**](https://github.com/search?q=type%3Apr+team-review-requested%3Agithub%2Fdocs&type=pullrequests) gleicht Pull Requests ab, die über Reviewanfragen des Teams `github/docs` verfügen. Angeforderte Reviewer werden nicht mehr in den Suchergebnissen aufgeführt, sobald sie den Review eines Pull Requests abgeschlossen haben.

## Suche nach dem Datum der Erstellung oder letzten Änderung eines Issues oder Pull Requests

Du kannst Issues nach dem Zeitpunkt der Erstellung oder letzten Änderung filtern. Für die Erstellung eines Issues kannst du den Qualifizierer `created` verwenden. Wenn du herausfinden möchtest, wann ein Issue zuletzt aktualisiert wurde, musst du den Qualifizierer `updated` verwenden.

Beide Qualifizierer verwenden als Parameter ein Datum. {% data reusables.time_date.date_format %} {% data reusables.time_date.time_format %}

{% data reusables.search.date_gt_lt %}

| Qualifizierer        | Beispiel
| ------------- | -------------
| <code>created:<em>YYYY-MM-DD</em></code> | [**language:c# created:<2011-01-01 state:open**](https://github.com/search?q=language%3Ac%23+created%3A%3C2011-01-01+state%3Aopen&type=Issues) gleicht offene Issues ab, die vor 2011 erstellt wurden und sich in Repositorys befinden, die in C# geschrieben sind.
| <code>updated:<em>YYYY-MM-DD</em></code> | [**weird in:body updated:>=2013-02-01**](https://github.com/search?q=weird+in%3Abody+updated%3A%3E%3D2013-02-01&type=Issues) gleicht Issues mit dem Begriff „weird“ im Text ab, die nach Februar 2013 aktualisiert wurden.

## Suche nach dem Datum der Schließung eines Issues oder Pull Requests

Mit dem Qualifizierer `closed` kannst du Issues und Pull Requests nach dem Schließungszeitpunkt filtern.

Der Qualifizierer verwendet als Parameter ein Datum. {% data reusables.time_date.date_format %} {% data reusables.time_date.time_format %}

{% data reusables.search.date_gt_lt %}

| Qualifizierer        | Beispiel
| ------------- | -------------
| <code>closed:<em>YYYY-MM-DD</em></code> | [**language:swift closed:>2014-06-11**](https://github.com/search?q=language%3Aswift+closed%3A%3E2014-06-11&type=Issues) gleicht Issues und Pull Requests in Swift ab, die nach dem 11. Juni 2014 geschlossen wurden.
| | [**data in:body closed:<2012-10-01**](https://github.com/search?utf8=%E2%9C%93&q=data+in%3Abody+closed%3A%3C2012-10-01+&type=Issues) gleicht Issues und Pull Requests mit dem Begriff „data“ im Text ab, die vor Oktober 2012 geschlossen wurden.

## Suche nach dem Merge-Datum eines Issues oder Pull Requests

Mit dem Qualifizierer `merged` kannst du Pull Requests basierend auf deren Mergezeitpunkt filtern.

Der Qualifizierer verwendet als Parameter ein Datum. {% data reusables.time_date.date_format %} {% data reusables.time_date.time_format %}

{% data reusables.search.date_gt_lt %}

| Qualifizierer        | Beispiel
| ------------- | -------------
| <code>merged:<em>YYYY-MM-DD</em></code> | [ **`language:javascript merged:<2011-01-01`**](https://github.com/search?q=language%3Ajavascript+merged%3A%3C2011-01-01+&type=Issues) gleicht Pull Requests in JavaScript-Repositorys ab, die vor 2011 gemergt wurden.
| | [**fast in:title language:ruby merged:>=2014-05-01**](https://github.com/search?q=fast+in%3Atitle+language%3Aruby+merged%3A%3E%3D2014-05-01+&type=Issues) gleicht Pull Requests in Ruby mit dem Begriff „fast“ im Titel ab, die nach Mai 2014 gemergt wurden.

## Suche nach dem Merge-Status eines Pull Requests

Mit dem Qualifizierer `is` kannst du Pull Requests basierend darauf filtern, ob sie gemergt sind oder nicht.

| Qualifizierer        | Beispiel
| ------------- | -------------
| `is:merged` | [**bug is:pr is:merged**](https://github.com/search?utf8=%E2%9C%93&q=bugfix+is%3Apr+is%3Amerged&type=) gleicht gemergte Pull Requests mit dem Begriff „bug“ ab.
| `is:unmerged` | [**error is:unmerged**](https://github.com/search?utf8=%E2%9C%93&q=error+is%3Aunmerged&type=) gleicht Pull Requests mit dem Begriff „error“ ab, die entweder offen sind oder geschlossen wurden, ohne gemergt zu werden.

## Suche auf Basis der Archivierung eines Repositorys

Mit dem Qualifizierer `archived` werden deine Ergebnisse basierend darauf gefiltert, ob ein Issue oder Pull Request sich in einem archivierten Repository befindet.

| Qualifizierer     | Beispiel
| ------------- | -------------
| `archived:true` | [**archived:true GNOME**](https://github.com/search?q=archived%3Atrue+GNOME&type=) gleicht Issues und Pull Requests ab, die den Begriff „GNOME“ enthalten und sich in archivierten Repositorys befinden, auf die du Zugriff hast.
| `archived:false` | [**archived:false GNOME**](https://github.com/search?q=archived%3Afalse+GNOME&type=) gleicht Issues und Pull Requests ab, die den Begriff „GNOME“ enthalten und sich in nicht archivierten Repositorys befinden, auf die du Zugriff hast.

## Suche nach dem Sperrstatus einer Unterhaltung

Mit dem Qualifizierer `is` kannst du nach Issues oder Pull Requests mit gesperrten Unterhaltungen suchen. Weitere Informationen findest du unter [Sperren von Unterhaltungen](/communities/moderating-comments-and-conversations/locking-conversations).

| Qualifizierer        | Beispiel
| ------------- | -------------
| `is:locked` | [**code of conduct is:locked is:issue archived:false**](https://github.com/search?q=code+of+conduct+is%3Alocked+is%3Aissue+archived%3Afalse) gleicht Issues oder Pull Requests mit dem Begriff „code of conduct“ ab, die über eine gesperrte Unterhaltung in einem nicht archivierten Repository verfügen.
| `is:unlocked` | [**code of conduct is:unlocked is:issue archived:false**](https://github.com/search?q=code+of+conduct+is%3Aunlocked+archived%3Afalse) gleicht Issues oder Pull Requests mit dem Begriff „code of conduct“ ab, die über eine nicht gesperrte Unterhaltung in einem nicht archivierten Repository verfügen.

## Suche nach fehlenden Metadaten

Mit dem Qualifizierer `no` kannst du deine Suche auf Issues und Pull Requests eingrenzen, bei denen bestimmte Metadaten fehlen. Hierbei kannst du nach folgenden fehlenden Metadaten suchen:

* Bezeichnungen
* Meilensteine
* Bearbeiter
* Projekte

| Qualifizierer        | Beispiel
| ------------- | -------------
| `no:label` | [**priority no:label**](https://github.com/search?q=priority+no%3Alabel&type=Issues) gleicht Issues und Pull Requests mit dem Begriff „priority“ ab, die über keine Kennzeichnung verfügen.
| `no:milestone` | [**sprint no:milestone type:issue**](https://github.com/search?q=sprint+no%3Amilestone+type%3Aissue&type=Issues) gleicht Issues ab, die keinem Meilenstein zugeordnet sind und den Begriff „sprint“ enthalten.
| `no:assignee` | [**important no:assignee language:java type:issue**](https://github.com/search?q=important+no%3Aassignee+language%3Ajava+type%3Aissue&type=Issues) gleicht Issues ab, die niemandem zugewiesen sind, den Begriff „important“ enthalten und sich in Java-Repositorys befinden.
| `no:project` | [**build no:project**](https://github.com/search?utf8=%E2%9C%93&q=build+no%3Aproject&type=Issues) gleicht Issues ab, die keinem Projektboard zugeordnet sind und den Begriff „build“ enthalten.

## Weiterführende Themen

- [Sortieren von Suchergebnissen](/search-github/getting-started-with-searching-on-github/sorting-search-results/)
