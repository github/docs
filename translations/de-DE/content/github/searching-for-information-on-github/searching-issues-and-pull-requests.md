---
title: Issues und Pull Requests durchsuchen
intro: 'Auf {% data variables.product.product_name %} kannst Du nach Issues und Pull Requests suchen und die Suchergebnisse mit den folgenden Qualifizierern in beliebiger Kombination eingrenzen.'
redirect_from:
  - /articles/searching-issues/
  - /articles/searching-issues-and-pull-requests
versions:
  free-pro-team: '*'
  enterprise-server: '*'
---

Du kannst global auf {% data variables.product.product_name %} oder in einer bestimmten Organisation nach Issues und Pull Requests suchen. Weitere Informationen findest Du unter „[Informationen zur Suche auf {% data variables.product.company_short %}](/articles/about-searching-on-github).“

{% tip %}

**Tipps:**{% if currentVersion != "free-pro-team@latest" %}
  - Dieser Artikel enthält Beispielsuchen für die Website {% data variables.product.prodname_dotcom %}.com. Die gleichen Suchfilter kannst Du jedoch auch auf {% data variables.product.product_location_enterprise %} verwenden.{% endif %}
  - Eine Liste mit Suchsyntax, die Du jedem Qualifizierer hinzufügen kannst, um Deine Ergebnisse zu verbessern, findest Du unter „[Grundlagen der Suchsyntax](/articles/understanding-the-search-syntax)“.
  - Schließe Suchbegriffe, die aus mehreren Wörtern bestehen, in Anführungszeichen ein. Möchtest Du beispielsweise nach Issues mit der Kennzeichnung „In progress“ suchen, gib `label:"in progress"` ein. Bei der Suche wird die Groß-/Kleinschreibung ignoriert.
  - {% data reusables.search.search_issues_and_pull_requests_shortcut %}

  {% endtip %}

### Suche nur nach Issues oder nur nach Pull Requests

Die Suche auf {% data variables.product.product_name %} gibt standardmäßig sowohl Issues als auch Pull Requests zurück. Mit dem Qualifizierer `type` oder `is` kannst Du in den Suchergebnissen jedoch auch nur nach Issues oder nur nach Pull Requests filtern.

| Qualifizierer | Beispiel                                                                                                                                                                                                               |
| ------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `type:pr`     | [**cat type:pr**](https://github.com/search?q=cat+type%3Apr&type=Issues) sucht Pull Requests, die das Wort „cat“ enthalten.                                                                                            |
| `type:issue`  | [**github commenter:defunkt type:issue**](https://github.com/search?q=github+commenter%3Adefunkt+type%3Aissue&type=Issues) sucht Issues, die das Wort „github“ enthalten und vom Benutzer @defunkt kommentiert wurden. |
| `is:pr`       | [**event is:pr**](https://github.com/search?utf8=%E2%9C%93&q=event+is%3Apr&type=) sucht Pull Requests, die das Wort „event“ enthalten.                                                                                 |
| `is:issue`    | [**is:issue label:bug is:closed**](https://github.com/search?utf8=%E2%9C%93&q=is%3Aissue+label%3Abug+is%3Aclosed&type=) sucht geschlossene Issues mit der Kennzeichnung „bug“.                                         |

### Suche nach Titel, Textteil oder Kommentaren

Mit dem Qualifizierer `in` kannst Du Deine Suche entweder auf den Titel, auf den Textteil, auf Kommentare oder auf eine beliebige Kombination derselben eingrenzen. Ohne diesen Qualifizierer werden Titel, Textteil und Kommentare durchsucht.

| Qualifizierer | Beispiel                                                                                                                                                     |
| ------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `in:title`    | [**warning in:title**](https://github.com/search?q=warning+in%3Atitle&type=Issues) sucht Issues, deren Titel das Wort „warning“ enthält.                     |
| `in:body`     | [**error in:title,body**](https://github.com/search?q=error+in%3Atitle%2Cbody&type=Issues) sucht Issues, deren Titel oder Textteil das Wort „error“ enthält. |
| `in:comments` | [**shipit in:comments**](https://github.com/search?q=shipit+in%3Acomment&type=Issues) sucht Issues, deren Kommentare das Wort „shipit“ enthalten.            |

### Suche innerhalb der Repositorys eines Benutzers oder einer Organisation

Wenn Du Issues und Pull Requests in allen Repositorys suchst, die einem bestimmten Benutzer oder einer bestimmten Organisation gehören, verwende den Qualifizierer `user` respektive `org`. Für die Suche nach Issues und Pull Requests in einem bestimmten Repository verwende den Qualifizierer `repo`.

| Qualifizierer             | Beispiel                                                                                                                                                                                                                                    |
| ------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <code>user:<em>USERNAME</em></code> | [**user:defunkt ubuntu**](https://github.com/search?q=user%3Adefunkt+ubuntu&type=Issues) sucht Issues, die das Wort „ubuntu“ enthalten, aus Repositorys, die dem Benutzer @defunkt gehören.                                                 |
| <code>org:<em>ORGNAME</em></code> | [**org:github**](https://github.com/search?q=org%3Agithub&type=Issues&utf8=%E2%9C%93) sucht Issues aus Repositorys, die der Organisation GitHub gehören.                                                                                    |
| <code>repo:<em>USERNAME/REPOSITORY</em></code> | [**repo:mozilla/shumway created:<2012-03-01**](https://github.com/search?q=repo%3Amozilla%2Fshumway+created%3A%3C2012-03-01&type=Issues) sucht Issues aus dem Projekt shumway des Benutzers @mozilla, welche vor März 2012 erstellt wurden. |

### Suche nach Öffnungsstatus

Mit dem Qualifizierer `state` oder `is` kannst Du Issues und Pull Requests danach filtern, ob sie noch offen oder bereits geschlossen sind.

| Qualifizierer  | Beispiel                                                                                                                                                                                                         |
| -------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `state:open`   | [**libraries state:open mentions:vmg**](https://github.com/search?utf8=%E2%9C%93&q=libraries+state%3Aopen+mentions%3Avmg&type=Issues) sucht offene Issues, die @vmg erwähnen und das Wort „libraries“ enthalten. |
| `state:closed` | [**design state:closed in:body**](https://github.com/search?utf8=%E2%9C%93&q=design+state%3Aclosed+in%3Abody&type=Issues) sucht geschlossene Issues, die im Textteil das Wort „design“ enthalten.                |
| `is:open`      | [**performance is:open is:issue**](https://github.com/search?q=performance+is%3Aopen+is%3Aissue&type=Issues) sucht offene Issues, die das Wort „performance“ enthalten.                                          |
| `is:closed`    | [**android is:closed**](https://github.com/search?utf8=%E2%9C%93&q=android+is%3Aclosed&type=) sucht geschlossene Issues und Pull Requests, die das Wort „android“ enthalten.                                     |

### Suche nach öffentlichen oder privaten Repositorys

Wenn Du [{% data variables.product.product_name %} vollständig durchsuchst](https://github.com/search), ist ein Filtern der Ergebnisse nach öffentlichen oder privaten Repositorys oft sehr nützlich. Hierzu verwendest Du die Qualifizierer `is:public` und `is:private`.

| Qualifizierer | Beispiel                                                                                                                                                                                     |
| ------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `is:public`   | [**is:public**](https://github.com/search?q=is%3Apublic&type=Issues) sucht Issues und Pull Requests in allen öffentlichen Repositorys.                                                       |
| `is:private`  | [**is:private cupcake**](https://github.com/search?q=is%3Aprivate&type=Issues) sucht Issues und Pull Requests mit dem Wort „cupcake“ in allen privaten Repositorys, auf die Du Zugriff hast. |

### Suche nach Autor

Der Qualifizierer `author` sucht Issues und Pull Requests, die von einem bestimmten Benutzer oder Integrationskonto erstellt wurden.

| Qualifizierer             | Beispiel                                                                                                                                                                                      |
| ------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <code>author:<em>USERNAME</em></code> | [**cool author:gjtorikian**](https://github.com/search?q=cool+author%3Agjtorikian&type=Issues) sucht von @gjtorikian erstellte Issues und Pull Requests, die das Wort „cool“ enthalten.       |
|                           | [**bootstrap in:body author:mdo**](https://github.com/search?q=bootstrap+in%3Abody+author%3Amdo&type=Issues) sucht von @mdo verfasste Issues, die im Textteil das Wort „bootstrap“ enthalten. |
| <code>author:app/<em>USERNAME</em></code> | [**author:app/robot**](https://github.com/search?q=author%3Aapp%2Frobot&type=Issues) sucht Issues, die vom Integrationskonto „robot“ erstellt wurden.                                         |

### Suche nach Bearbeiter

Der Qualifizierer `assignee` sucht Issues und Pull Requests, die einem bestimmten Benutzer zugewiesen sind. Nach Issues und Pull Requests mit _beliebigem_ Bearbeiter kannst Du nicht suchen. Du kannst jedoch nach [Issues und Pull Requests suchen, denen kein Bearbeiter zugewiesen ist](#search-by-missing-metadata).

| Qualifizierer             | Beispiel                                                                                                                                                                                                                           |
| ------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <code>assignee:<em>USERNAME</em></code> | [**assignee:vmg repo:libgit2/libgit2**](https://github.com/search?utf8=%E2%9C%93&q=assignee%3Avmg+repo%3Alibgit2%2Flibgit2&type=Issues) sucht Issues und Pull Requests im Projekt „libgit2“ von libgit2, die @vmg zugewiesen sind. |

### Suche nach Erwähnung

Der Qualifizierer `mentions` sucht Issues, in denen ein bestimmter Benutzer erwähnt wird. Weitere Informationen findest Du unter „[Personen und Teams erwähnen](/articles/basic-writing-and-formatting-syntax/#mentioning-people-and-teams).“

| Qualifizierer             | Beispiel                                                                                                                                                                |
| ------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <code>mentions:<em>USERNAME</em></code> | [**resque mentions:defunkt**](https://github.com/search?q=resque+mentions%3Adefunkt&type=Issues) sucht Issues, die das Wort „resque“ enthalten und „@defunkt“ erwähnen. |

### Suche nach Teamerwähnung

Mit dem Qualifizierer `team` kannst du innerhalb von Organisationen und Teams, zu denen Du gehörst, Issues oder Pull Requests suchen, die ein bestimmtes Team innerhalb der Organisation @erwähnen. Ersetze in den folgenden Beispielen die Namen durch den Namen Deiner Organisation und Deines Teams, um eine Suche durchzuführen.

| Qualifizierer             | Beispiel                                                                                                  |
| ------------------------- | --------------------------------------------------------------------------------------------------------- |
| <code>team:<em>ORGNAME/TEAMNAME</em></code> | **team:jekyll/owners** sucht Issues, in denen das Team `@jekyll/owners` erwähnt wird.                     |
|                           | **team:myorg/ops is:open is:pr** sucht offene Pull Requests, in denen das Team `@myorg/ops` erwähnt wird. |

### Suche nach Kommentierer

Der Qualifizierer `commenter` sucht Issues, die einen Kommentar eines bestimmten Benutzers enthalten.

| Qualifizierer             | Beispiel                                                                                                                                                                                                                                                        |
| ------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <code>commenter:<em>USERNAME</em></code> | [**github commenter:defunkt org:github**](https://github.com/search?utf8=%E2%9C%93&q=github+commenter%3Adefunkt+org%3Agithub&type=Issues) sucht Issues in Repositorys von GitHub, die das Wort „github“ enthalten und von Benutzer @defunkt kommentiert wurden. |

### Suche nach beteiligtem Benutzer

Mit dem Qualifizierer `involves` kannst Du Issues suchen, an denen auf die eine oder andere Weise ein bestimmter Benutzer beteiligt ist. Der Qualifizierer `involves` ist ein logisches ODER zwischen den Qualifizierern `author`, `assignee`, `mentions` und `commenter` für einen einzelnen Benutzer. Dieser Qualifizierer sucht also Issues und Pull Requests, die von einem bestimmten Benutzer erstellt wurden, diesem zugewiesen sind, diesen erwähnen oder in denen dieser Benutzer einen Kommentar hinterlassen hat.

| Qualifizierer             | Beispiel                                                                                                                                                                                                                         |
| ------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <code>involves:<em>USERNAME</em></code> | **[involves:defunkt involves:jlord](https://github.com/search?q=involves%3Adefunkt+involves%3Ajlord&type=Issues)** sucht Issues, an denen entweder @defunkt oder @jlord beteiligt ist.                                           |
|                           | [**NOT bootstrap in:body involves:mdo**](https://github.com/search?q=NOT+bootstrap+in%3Abody+involves%3Amdo&type=Issues) sucht Issues, an denen @mdo beteiligt ist, die im Textteil jedoch nicht das Wort „bootstrap“ enthalten. |

{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.20" %}
### Suche nach verknüpften Issues und Pull Request
Du kannst Deine Ergebnisse auf Issues einschränken, die mit einem Pull-Request verknüpft sind, indem Du eine schließende Referenz verwendest, oder auf Pull-Requests, die mit einem Issue verbunden sind, den der Pull-Request schließen kann.

| Qualifizierer   | Beispiel                                                                                                                                                                                                                                                                                                |
| --------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `linked:pr`     | [**repo:desktop/desktop is:open linked:pr**](https://github.com/search?q=repo%3Adesktop%2Fdesktop+is%3Aopen+linked%3Apr) findet offene Issues im `desktop/desktop`-Repository, die mit einer schließenden Referenz zu einem Pull Request verknüpft sind.                                                |
| `linked:issue`  | [**repo:desktop/desktop is:closed linked:issue**](https://github.com/search?q=repo%3Adesktop%2Fdesktop+is%3Aclosed+linked%3Aissue) findet geschlossene Pull Requests im `desktop/desktop`-Repository, die zu einem Issue verknüpft waren, den der Pull Request möglicherweise geschlossen hat.          |
| `-linked:pr`    | [**repo:desktop/desktop is:open -linked:pr**](https://github.com/search?q=repo%3Adesktop%2Fdesktop+is%3Aopen+-linked%3Apr) findet offene Issues im `desktop/desktop`-Repository, die nicht mit einer schließenden Referenz zu einem Pull Request verknüpft sind.                                        |
| `-linked:issue` | [**repo:desktop/desktop is:open -linked:issue**](https://github.com/search?q=repo%3Adesktop%2Fdesktop+is%3Aopen+-linked%3Aissue) findet offene Pull Requests im `desktop/desktop`-Repository, die nicht zu einem Issue verknüpft sind, die der Pull Request möglicherweise schließen kann. |{% endif %}

### Suche nach Kennzeichnung

Mit dem Qualifizierer `label` kannst Du Deine Suchergebnisse nach Kennzeichnungen eingrenzen. Da Issues verschiedene Kennzeichnungen aufweisen können, kannst du für jeden Issue einen eigenen Qualifizierer einsetzen.

| Qualifizierer              | Beispiel                                                                                                                                                                                                                                                                                     |
| -------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <code>label:<em>LABEL</em></code> | [**label:"help wanted" language:ruby**](https://github.com/search?utf8=%E2%9C%93&q=label%3A%22help+wanted%22+language%3Aruby&type=Issues) sucht Issues in Ruby-Repositorys mit der Kennzeichnung „help wanted“.                                                                              |
|                            | [**broken in:body -label:bug label:priority**](https://github.com/search?q=broken+in%3Abody+-label%3Abug+label%3Apriority&type=Issues) sucht Issues, deren Textteil das Wort „broken“ enthält, die nicht die Kennzeichnung „bug“ aufweisen, *jedoch* die Kennzeichnung „priority“ enthalten. |
|                            | [**label:bug label:resolved**](https://github.com/search?l=&q=label%3Abug+label%3Aresolved&type=Issues) sucht Issues mit den Kennzeichnungen „bug“ und „resolved“.                                                                                                                           |

### Suche nach Meilenstein

Der Qualifizierer `milestone` findet Issues oder Pull Requests, die innerhalb eines Repositorys Teil eines [Meilensteins](/articles/about-milestones) sind.

| Qualifizierer              | Beispiel                                                                                                                                                                  |
| -------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <code>milestone:<em>MILESTONE</em></code> | [**milestone:"overhaul"**](https://github.com/search?utf8=%E2%9C%93&q=milestone%3A%22overhaul%22&type=Issues) sucht Issues in einem Meilenstein mit dem Namen „overhaul“. |
|                            | [**milestone:"bug fix"**](https://github.com/search?utf8=%E2%9C%93&q=milestone%3A%22bug+fix%22&type=Issues) sucht Issues in einem Meilenstein mit dem Namen „bug fix“.    |

### Suche nach Projektboard

Mit dem Qualifizierer <`project` kannst Du Issues suchen, die innerhalb eines Repositorys oder einer Organisation einem bestimmten [Projektboard](/articles/about-project-boards/) zugeordnet sind. Projektboards werden anhand ihrer Projektboardnummer gesucht. Die Nummer eines Projektboards befindet sich am Ende seiner URL.

| Qualifizierer              | Beispiel                                                                                                             |
| -------------------------- | -------------------------------------------------------------------------------------------------------------------- |
| <code>project:<em>PROJECT_BOARD</em></code> | **project:github/57** sucht Issues, die GitHub gehören und dem Projektboard 57 der Organisation zugeordnet sind.     |
| <code>project:<em>REPOSITORY/PROJECT_BOARD</em></code> | **project:github/linguist/1** sucht Issues, die Projektboard 1 im Repository „linguist“ von @github zugeordnet sind. |

### Suche nach Commit-Status

Du kannst Pull Requests nach dem Status ihrer Commits filtern. Dieser Filter ist besonders nützlich, wenn Sie die [Status-API](/v3/repos/statuses/) oder einen CI-Dienst verwenden.

| Qualifizierer    | Beispiel                                                                                                                                                                                                                                                               |
| ---------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `status:pending` | [**language:go status:pending**](https://github.com/search?utf8=%E2%9C%93&q=language%3Ago+status%3Apending) sucht offene Pull Requests in Go-Repositorys, deren Status „Pending“ (Ausstehend) ist.                                                                     |
| `status:success` | [**is:open status:success finally in:body**](https://github.com/search?utf8=%E2%9C%93&q=is%3Aopen+status%3Asuccess+finally+in%3Abody&type=Issues) sucht offene Pull Requests mit dem Status „Successful“ (Erfolgreich), die im Textteil das Wort „finally“ enthalten.  |
| `status:failure` | [**created:2015-05-01..2015-05-30 status:failure**](https://github.com/search?utf8=%E2%9C%93&q=created%3A2015-05-01..2015-05-30+status%3Afailure&type=Issues) sucht Pull Requests, die im Mai 2015 geöffnet wurden und den Status „Failed“ (Fehlgeschlagen) aufweisen. |

### Suche nach Commit-SHA

Wenn Du den spezifischen SHA-Hash eines Commits kennst, kannst Du ihn für die Suche nach Pull Requests verwenden, die diesen SHA enthalten. Die SHA-Syntax besteht aus mindestens sieben Zeichen.

| Qualifizierer              | Beispiel                                                                                                                                                                          |
| -------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <code><em>SHA</em></code> | [**e1109ab**](https://github.com/search?q=e1109ab&type=Issues) sucht Pull Requests, deren Commit-SHAs mit `e1109ab` beginnen.                                                     |
|                            | [**0eff326d6213c is:merged**](https://github.com/search?q=0eff326d+is%3Amerged&type=Issues) sucht zusammengeführte Pull Requests, deren Commit-SHAs mit `0eff326d6213c` beginnen. |

### Suche nach Branch-Name

Du kannst Pull Requests nach dem Branch filtern, aus dem sie stammen (Head-Branch) oder in den sie zusammengeführt werden (Basis-Branch).

| Qualifizierer              | Beispiel                                                                                                                                                                                                                                                    |
| -------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <code>head:<em>HEAD_BRANCH</em></code> | [**head:change is:closed is:unmerged**](https://github.com/search?utf8=%E2%9C%93&q=head%3Achange+is%3Aclosed+is%3Aunmerged) sucht Pull Requests, die aus Branches geöffnet wurden, deren Namen mit „change“ beginnen, die aber inzwischen geschlossen sind. |
| <code>base:<em>BASE_BRANCH</em></code> | [**base:gh-pages**](https://github.com/search?utf8=%E2%9C%93&q=base%3Agh-pages) sucht Pull Requests, die in den Branch `gh-pages` zusammengeführt werden.                                                                                                   |

### Suche nach Sprache

Mit dem Qualifizierer `language` kannst Du Issues und Pull Requests in Repositorys suchen, die in einer bestimmten Programmiersprache geschrieben sind.

| Qualifizierer              | Beispiel                                                                                                                                      |
| -------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------- |
| <code>language:<em>LANGUAGE</em></code> | [**language:ruby state:open**](https://github.com/search?q=language%3Aruby+state%3Aopen&type=Issues) sucht offene Issues in Ruby-Repositorys. |

### Suche nach Anzahl der Kommentare

Mit dem Qualifizierer `comments` in Verbindung mit [„Größer-als“-, „Kleiner-als“- oder Bereichsqualifizierern](/articles/understanding-the-search-syntax) kannst Du nach der Anzahl der Kommentare filtern.

| Qualifizierer              | Beispiel                                                                                                                                                                    |
| -------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <code>comments:<em>n</em></code> | [**state:closed comments:&gt;100**](https://github.com/search?q=state%3Aclosed+comments%3A%3C100&type=Issues) sucht geschlossene Issues mit mehr als 100 Kommentaren. |
|                            | [**comments:500..1000**](https://github.com/search?q=comments%3A500..1000&type=Issues) sucht Issues mit 500 bis 1.000 Kommentaren.                                          |

### Suche nach Anzahl der Interaktionen

Mit dem Qualifizierer `interactions` kannst Du Issues und Pull Requests nach der Anzahl ihrer Interaktionen filtern. Zur Angabe der Anzahl der Interaktionen verwende [„Größer-als“-, „Kleiner-als“- oder Bereichsqualifizierer](/articles/understanding-the-search-syntax). Der Interaktionszähler ist die Anzahl Reaktionen und Kommentare zu einem Issue oder Pull Request.

| Qualifizierer              | Beispiel                                                                                                                                                     |
| -------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| <code>interactions:<em>n</em></code> | [** interactions:&gt;2000**](https://github.com/search?q=interactions%3A%3E2000) sucht Issues oder Pull Requests mit mehr als 2.000 Interaktionen. |
|                            | [**interactions:500..1000**](https://github.com/search?q=interactions%3A500..1000) sucht Issues oder Pull Requests mit 500 bis 1.000 Interaktionen.          |

### Suche nach Anzahl der Reaktionen

Mit dem Qualifizierer `reactions` kannst Du Issues und Pull Requests nach der Anzahl ihrer Reaktionen filtern. Zur Angabe der Anzahl der Reaktionen verwende [„Größer-als“-, „Kleiner-als“- oder Bereichsqualifizierer](/articles/understanding-the-search-syntax).

| Qualifizierer              | Beispiel                                                                                                                                     |
| -------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- |
| <code>reactions:<em>n</em></code> | [** reactions:&gt;1000**](https://github.com/search?q=reactions%3A%3E1000&type=Issues) sucht Issues mit mehr als 1.000 Reaktionen. |
|                            | [**reactions:500..1000**](https://github.com/search?q=reactions%3A500..1000) sucht Issues mit 500 bis 1.000 Reaktionen.                      |

### Suche nach Pull-Request-Entwürfen
Du kannst nach Pull-Request-Entwürfen suchen. Weitere Informationen findest Du unter „[Informationen zu Pull Requests](/articles/about-pull-requests#draft-pull-requests).“

| Qualifizierer    | Beispiel | ------------- | -------------{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.20" %} | `draft:true` | [**draft:true**](https://github.com/search?q=draft%3Atrue) findet Pull-Request-Entwürfe. | `draft:false` | [**draft:false**](https://github.com/search?q=draft%3Afalse) findet Pull Requests, die bereit sind für den Review.{% else %} | `is:draft` | [**is:draft**](https://github.com/search?q=is%3Adraft) findet Pull-Request-Entwürfe.{% endif %}

### Suche nach Review-Status und Reviewer eines Pull-Requests

Du kannst Pull Requests nach ihrem [Review-Status](/articles/about-pull-request-reviews) (_none_ (keiner), _required_ (erforderlich), _approved_ (genehmigt) oder _changes requested_ (Änderungen angefordert)), nach Reviewer und nach angefordertem Reviewer filtern.

| Qualifizierer              | Beispiel                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| -------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `review:none`              | [**type:pr review:none**](https://github.com/search?utf8=%E2%9C%93&q=type%3Apr+review%3Anone&type=Issues) sucht Pull Requests, die nicht geprüft wurden.                                                                                                                                                                                                                                                                                                                                                                                                        |
| `review:required`          | [**type:pr review:required**](https://github.com/search?utf8=%E2%9C%93&q=type%3Apr+review%3Arequired&type=Issues) sucht Pull Requests, die vor dem Merge geprüft werden müssen.                                                                                                                                                                                                                                                                                                                                                                                 |
| `review:approved`          | [**type:pr review:approved**](https://github.com/search?utf8=%E2%9C%93&q=type%3Apr+review%3Aapproved&type=Issues) sucht Pull Requests, die von einem Reviewer genehmigt wurden.                                                                                                                                                                                                                                                                                                                                                                                 |
| `review:changes_requested` | [**type:pr review:changes_requested**](https://github.com/search?utf8=%E2%9C%93&q=type%3Apr+review%3Achanges_requested&type=Issues) sucht Pull Requests, für die ein Reviewer Änderungen angefordert hat.                                                                                                                                                                                                                                                                                                                                                       |
| <code>reviewed-by:<em>USERNAME</em></code> | [**type:pr reviewed-by:gjtorikian**](https://github.com/search?utf8=%E2%9C%93&q=type%3Apr+reviewed-by%3Agjtorikian&type=Issues) sucht Pull-Requests, die von einer bestimmten Person geprüft wurden.                                                                                                                                                                                                                                                                                                                                                            |
| <code>review-requested:<em>USERNAME</em></code> | [**type:pr review-requested:benbalter**](https://github.com/search?utf8=%E2%9C%93&q=type%3Apr+review-requested%3Abenbalter&type=Issues) sucht Pull Requests, für deren Review eine bestimmte Person angefordert wurde. Angeforderte Reviewer werden nicht mehr in den Suchergebnissen aufgeführt, sobald sie den Review eines Pull Request abgeschlossen haben. Wenn die angeforderte Person zu einem Team gehört, das ebenfalls für den Review angefordert wurde, werden die Review-Anforderungen für dieses Team ebenfalls in den Suchergebnissen aufgeführt. |
| <code>team-review-requested:<em>TEAMNAME</em></code> | [**type:pr team-review-requested:atom/design**](https://github.com/search?q=type%3Apr+team-review-requested%3Aatom%2Fdesign&type=Issues) sucht Pull Requests, für deren Review das Team `atom/design` angefordert wurde. Angeforderte Reviewer werden nicht mehr in den Suchergebnissen aufgeführt, sobald sie den Review eines Pull Request abgeschlossen haben.                                                                                                                                                                                               |

### Suche nach dem Datum der Erstellung oder letzten Änderung eines Issues oder Pull Requests

Du kannst Issues nach dem Zeitpunkt der Erstellung oder letzten Änderung filtern. Für die Suche nach dem Erstellungsdatum verwende den Qualifizierer `created`, für die Suche nach dem letzten Änderungsdatum den Qualifizierer `updated`.

Beide Qualifizierer verwenden als Parameter ein Datum. {% data reusables.time_date.date_format %} {% data reusables.time_date.time_format %}

{% data reusables.search.date_gt_lt %}

| Qualifizierer              | Beispiel                                                                                                                                                                                                                                      |
| -------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <code>created:<em>YYYY-MM-DD</em></code> | [**language:c# created:<2011-01-01 state:open**](https://github.com/search?q=language%3Ac%23+created%3A%3C2011-01-01+state%3Aopen&type=Issues) findet offene Issues, die vor 2011 erstellt wurden, in Repositorys die in C# geschrieben sind. |
| <code>updated:<em>YYYY-MM-DD</em></code> | [**weird in:body updated:>=2013-02-01**](https://github.com/search?q=weird+in%3Abody+updated%3A%3E%3D2013-02-01&type=Issues) findet Issues, die nach Januar 2013 aktualisiert wurden, mit dem Wort „weird" im Text.                           |

### Suche nach dem Datum der Schließung eines Issues oder Pull Requests

Mit dem Qualifizierer `closed` kannst Du Issues und Pull Requests nach dem Datum der Schließung filtern.

Der Kennzeichner verwendet als Parameter ein Datum. {% data reusables.time_date.date_format %} {% data reusables.time_date.time_format %}

{% data reusables.search.date_gt_lt %}

| Qualifizierer              | Beispiel                                                                                                                                                                                                                                   |
| -------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| <code>closed:<em>YYYY-MM-DD</em></code> | [**language:swift closed:>2014-06-11**](https://github.com/search?q=language%3Aswift+closed%3A%3E2014-06-11&type=Issues) findet Issues und Pull Requests in Swift-Sprache, die nach dem 11. Juni 2014 geschlossen wurden.                  |
|                            | [**data in:body closed:<2012-10-01**](https://github.com/search?utf8=%E2%9C%93&q=data+in%3Abody+closed%3A%3C2012-10-01+&type=Issues) findet Issues und Pull Requests mit dem Wort „data" im Text, die vor Oktober 2012 geschlossen wurden. |

### Suche nach dem Merge-Datum eines Issues oder Pull Requests

Mit dem Qualifizierer `merged` kannst Du Pull Requests nach ihrem Merge-Datum filtern.

Der Kennzeichner verwendet als Parameter ein Datum. {% data reusables.time_date.date_format %} {% data reusables.time_date.time_format %}

{% data reusables.search.date_gt_lt %}

| Qualifizierer              | Beispiel                                                                                                                                                                                                                                                                 |
| -------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| <code>merged:<em>YYYY-MM-DD</em></code> | [**language:javascript merged:<2011-01-01**](https://github.com/search?q=language%3Ajavascript+merged%3A%3C2011-01-01+&type=Issues) findet Pull Requests in JavaScript-Repositorys, die vor 2011 zusammengeführt wurden.                                                 |
|                            | [**fast in:title language:ruby merged:>=2014-05-01**](https://github.com/search?q=fast+in%3Atitle+language%3Aruby+merged%3A%3E%3D2014-05-01+&type=Issues) findet Pull Requests in Ruby-Sprache mit dem Wort „fast" im Titel, die nach April 2014 zusammengeführt wurden. |

### Suche nach dem Merge-Status eines Pull Requests

Mit dem Qualifizierer `is` kannst Du Pull Requests danach filtern, ob sie zusammengeführt sind oder nicht.

| Qualifizierer | Beispiel                                                                                                                                                                         |
| ------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `is:merged`   | [**bugfix is:pr is:merged**](https://github.com/search?utf8=%E2%9C%93&q=bugfix+is%3Apr+is%3Amerged&type=) sucht zusammengeführte Pull Requests, die das Wort „bugfix“ enthalten. |
| `is:unmerged` | [**error is:unmerged**](https://github.com/search?utf8=%E2%9C%93&q=error+is%3Aunmerged&type=) sucht geschlossene Issues und Pull Requests, die das Wort „error“ enthalten.       |

### Suche auf Basis der Archivierung eines Repositorys

Der Qualifizierer `archived` filtert Suchergebnisse danach, ob sich ein Issue oder Pull Request in einem archivierten Repository befindet.

| Qualifizierer    | Beispiel                                                                                                                                                                                               |
| ---------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `archived:true`  | [**archived:true GNOME**](https://github.com/search?q=archived%3Atrue+GNOME&type=) sucht Issues und Pull Requests mit dem Wort „GNOME“ in archivierten Repositorys, auf die Sie Zugriff haben.         |
| `archived:false` | [**archived:false GNOME**](https://github.com/search?q=archived%3Afalse+GNOME&type=) sucht Issues und Pull Requests mit dem Wort „GNOME“ in nicht archivierten Repositorys, auf die Sie Zugriff haben. |

### Suche nach dem Sperrstatus einer Unterhaltung

Mit dem Qualifizierer `is` kannst Du Issues oder Pull Requests mit gesperrten Unterhaltungen suchen. Weitere Informationen findest Du unter „[Unterhaltungen sperren](/articles/locking-conversations).“

| Qualifizierer | Beispiel                                                                                                                                                                                                                                                                                                   |
| ------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `is:locked`   | [**code of conduct is:locked is:issue archived:false**](https://github.com/search?q=code+of+conduct+is%3Alocked+is%3Aissue+archived%3Afalse) sucht in nicht archivierten Repositorys nach Issues oder Pull Requests, die die Wörter „code of conduct“ enthalten und eine gesperrte Unterhaltung aufweisen. |
| `is:unlocked` | [**code of conduct is:unlocked is:issue archived:false**](https://github.com/search?q=code+of+conduct+is%3Aunlocked+archived%3Afalse) sucht in nicht archivierten Repositorys nach Issues oder Pull Requests, die die Wörter „code of conduct“ enthalten und eine ungesperrte Unterhaltung aufweisen.      |

### Suche nach fehlenden Metadaten

Mit dem Qualifizierer `no` kannst Du Deine Suche auf Issues und Pull Requests eingrenzen, in denen bestimmte Metadaten fehlen. Hierbei kannst Du nach folgenden fehlenden Metadaten suchen:

* Kennzeichnungen
* Meilensteine
* Bearbeiter
* Projekte

| Qualifizierer  | Beispiel                                                                                                                                                                                                                                                            |
| -------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `no:label`     | [**priority no:label**](https://github.com/search?q=priority+no%3Alabel&type=Issues) sucht Issues und Pull Requests, die das Wort „priority“ enthalten und keine Kennzeichnungen aufweisen.                                                                         |
| `no:milestone` | [**sprint no:milestone type:issue**](https://github.com/search?q=sprint+no%3Amilestone+type%3Aissue&type=Issues) sucht Issues, die das Wort „sprint“ enthalten und keinem Meilenstein zugeordnet sind.                                                              |
| `no:assignee`  | [**important no:assignee language:java type:issue**](https://github.com/search?q=important+no%3Aassignee+language%3Ajava+type%3Aissue&type=Issues) sucht in Java-Repositorys nach Issues, die das Wort „important“ enthalten und keinem Bearbeiter zugeordnet sind. |
| `no:project`   | [**build no:project**](https://github.com/search?utf8=%E2%9C%93&q=build+no%3Aproject&type=Issues) sucht Issues, die das Wort „build“ enthalten und keinem Projektboard zugeordnet sind.                                                                             |

### Weiterführende Informationen

- „[Suchergebnisse sortieren](/articles/sorting-search-results/)“
