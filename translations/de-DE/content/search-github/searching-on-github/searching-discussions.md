---
title: Durchsuchen von Diskussionen
intro: 'Du kannst auf {% data variables.product.product_name %} nach Diskussionen suchen und die Ergebnisse mit Suchqualifizierern einschränken.'
versions:
  feature: discussions
topics:
  - GitHub search
redirect_from:
  - /github/searching-for-information-on-github/searching-discussions
  - /github/searching-for-information-on-github/searching-on-github/searching-discussions
ms.openlocfilehash: 4a1224d05cd78a0b701e7bc2a9e93a1c5a837bcd
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/10/2022
ms.locfileid: '147410451'
---
## Informationen zum Suchen nach Diskussionen

Du kannst global im gesamten {% data variables.product.product_name %} oder innerhalb einer bestimmten Organisation oder eines Repositorys nach Diskussionen suchen. Weitere Informationen findest du unter [Informationen zur Suche auf {% data variables.product.prodname_dotcom %}](/github/searching-for-information-on-github/about-searching-on-github).

{% data reusables.search.syntax_tips %}

## Suche nach Titel, Textteil oder Kommentaren

Mit dem `in`-Qualifizierer kannst du deine Suche nach Diskussionen auf den Titel, den Text oder die Kommentare einschränken. Du kannst auch Qualifizierer kombinieren, um eine Kombination aus Titel, Text oder Kommentaren zu durchsuchen. Wenn du den `in`-Qualifizierer auslässt, durchsucht {% data variables.product.product_name %} den Titel, den Text und die Kommentare.

| Qualifizierer | Beispiel |
| :- | :- |
| `in:title` | [**Willkommen in:title**](https://github.com/search?q=welcome+in%3Atitle&type=Discussions) entspricht Diskussionen mit dem Wort „Willkommen“ im Titel. |
| `in:body` | [**Onboarding in:title,body**](https://github.com/search?q=onboard+in%3Atitle%2Cbody&type=Discussions) entspricht Diskussionen mit dem Wort „Onboarding“ im Titel oder im Text. |
| `in:comments` | [**Danke in:comments**](https://github.com/search?q=thanks+in%3Acomment&type=Discussions) entspricht Diskussionen mit dem Wort „Danke“ in den Kommentaren zur Diskussion. |

## Suche innerhalb der Repositorys eines Benutzers oder einer Organisation

Wenn du in allen Repositorys, die einem bestimmten Benutzer oder einer bestimmten Organisation gehören, nach Diskussionen suchen möchtest, kannst du den Qualifizierer `user` oder `org` verwenden. Um Diskussionen in einem bestimmten Repository zu durchsuchen, kannst du den `repo`-Qualifizierer verwenden.

| Qualifizierer | Beispiel |
| :- | :- |
| <code>user:<em>USERNAME</em></code> | [**user:octocat feedback**](https://github.com/search?q=user%3Aoctocat+feedback&type=Discussions) entspricht Diskussionen mit dem Wort „Feedback“ aus Repositorys, die @octocat gehören. |
| <code>org:<em>ORGNAME</em></code> | [**org:github**](https://github.com/search?q=org%3Agithub&type=Discussions&utf8=%E2%9C%93) entspricht Diskussionen in Repositorys, die der GitHub-Organisation gehören. |
| <code>repo:<em>USERNAME/REPOSITORY</em></code> | [**repo:nodejs/node created:<2021-01-01**](https://github.com/search?q=repo%3Anodejs%2Fnode+created%3A%3C2020-01-01&type=Discussions) entspricht Diskussionen aus dem Node.js-Runtimeprojekt von @nodejs, die vor Januar 2021 erstellt wurden. |

## Filtern nach der Sichtbarkeit von Repositorys

Mit dem `is`-Qualifizierer kannst du nach der Sichtbarkeit des Repositorys filtern, das die Diskussionen enthält. Weitere Informationen findest du unter [Informationen zu Repositorys](/repositories/creating-and-managing-repositories/about-repositories#about-repository-visibility).

| Qualifizierer | Beispiel | :- | :- |{% ifversion fpt or ghes or ghec %} | `is:public` | [**is:public**](https://github.com/search?q=is%3Apublic&type=Discussions) entspricht Diskussionen in öffentlichen Repositorys.{% endif %}{% ifversion ghec %} | `is:internal` | [**is:internal**](https://github.com/search?q=is%3Ainternal&type=Discussions) entspricht Diskussionen in internen Repositorys.{% endif %} | `is:private` | [**is:private tiramisu**](https://github.com/search?q=is%3Aprivate+tiramisu&type=Discussions) entspricht Diskussionen, die das Wort „Tiramisu“ in privaten Repositorys enthalten, auf die du zugreifen kannst.

## Suche nach Autor

Der `author`-Qualifizierer findet Diskussionen, die von einem bestimmten Benutzer erstellt wurden.

| Qualifizierer | Beispiel |
| :- | :- |
| <code>author:<em>USERNAME</em></code> | [**cool author:octocat**](https://github.com/search?q=cool+author%3Aoctocat&type=Discussions) entspricht Diskussionen mit dem Wort „cool“, die von @octocat erstellt wurden. |
| | [**bootstrap in:body author:octocat**](https://github.com/search?q=bootstrap+in%3Abody+author%3Aoctocat&type=Discussions) entspricht Diskussionen, die von @octocat erstellt wurden und das Wort „Bootstrap“ im Text enthalten. |

## Suche nach Kommentierer

Mit dem `commenter`-Qualifizierer wird nach Diskussionen gesucht, die einen Kommentar von einem bestimmten Benutzer enthalten.

| Qualifizierer | Beispiel |
| :- | :- |
| <code>commenter:<em>USERNAME</em></code> | [**github commenter:becca org:github**](https://github.com/search?utf8=%E2%9C%93&q=github+commenter%3Abecca+org%3Agithub&type=Discussions) entspricht Diskussionen in Repositorys, die GitHub gehören, das Wort „github“ enthalten und über einen Kommentar von @becca verfügen.

## Suchen nach einem an einer Diskussion beteiligten Benutzer

Du kannst den `involves`-Qualifizierer verwenden, um Diskussionen zu finden, die einen bestimmten Benutzer betreffen. Der Qualifizierer gibt Diskussionen zurück, die von einem bestimmten Benutzer erstellt wurden, den Benutzer erwähnen oder Kommentare vom Benutzer enthalten. Der `involves`-Qualifizierer ist ein logisches OR zwischen den Qualifizierern `author`, `mentions` und `commenter` für einen einzelnen Benutzer.

| Qualifizierer | Beispiel |
| :- | :- |
| <code>involves:<em>USERNAME</em></code> | **[involves:becca involves:octocat](https://github.com/search?q=involves%3Abecca+involves%3Aoctocat&type=Discussions)** entspricht Diskussionen, an denen entweder @becca oder @octocat beteiligt ist.
| | [**NOT beta in:body involves:becca**](https://github.com/search?q=NOT+beta+in%3Abody+involves%3Abecca&type=Discussions) entspricht Diskussionen, an denen @becca beteiligt ist und die nicht das Wort „Beta“ im Text enthalten.

## Suche nach Anzahl der Kommentare

Du kannst den Qualifizierer `comments` zusammen mit den Qualifizierern für „größer als“, „kleiner als“ oder bestimmte Bereiche verwenden, um nach der Anzahl von Kommentaren zu suchen. Weitere Informationen findest du unter [Grundlagen der Suchsyntax](/github/searching-for-information-on-github/understanding-the-search-syntax).

| Qualifizierer | Beispiel |
| :- | :- |
| <code>comments:<em>n</em></code> | [**comments:&gt;100**](https://github.com/search?q=comments%3A%3E100&type=Discussions) entspricht Diskussionen mit mehr als 100 Kommentaren.
| | [**comments:500..1000**](https://github.com/search?q=comments%3A500..1000&type=Discussions) gleicht Diskussionen mit 500 bis 1.000 Kommentaren ab.

## Suchen nach dem Datum der Erstellung oder der letzten Aktualisierung

Du kannst Diskussionen basierend auf Erstellungszeiten oder dem Zeitpunkt der letzten Aktualisierung filtern. Für die Diskussionserstellung kannst du den `created`-Qualifizierer verwenden. Um herauszufinden, wann eine Diskussion zuletzt aktualisiert wurde, verwende den `updated`-Qualifizierer.

Beide Qualifizierer akzeptieren ein Datum als Parameter. {% data reusables.time_date.date_format %} {% data reusables.time_date.time_format %}

{% data reusables.search.date_gt_lt %}

| Qualifizierer | Beispiel |
| :- | :- |
| <code>created:<em>YYYY-MM-DD</em></code> | [**created:>2020-11-15**](https://github.com/search?q=created%3A%3E%3D2020-11-15&type=discussions) entspricht Diskussionen, die nach dem 15. November 2020 erstellt wurden.
| <code>updated:<em>YYYY-MM-DD</em></code> | [**weird in:body updated:>=2020-02-01**](https://github.com/search?q=weird+in%3Abody+updated%3A%3E%3D2020-12-01&type=Discussions) entspricht Diskussionen mit dem Begriff „weird“ im Text, die nach Januar 2020 aktualisiert wurden.

## Weitere Informationsquellen

- [Sortieren von Suchergebnissen](/search-github/getting-started-with-searching-on-github/sorting-search-results/)
