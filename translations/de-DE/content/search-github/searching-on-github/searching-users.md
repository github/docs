---
title: Benutzer durchsuchen
intro: 'Auf {% data variables.product.product_name %} kannst du Benutzer durchsuchen und die Suchergebnisse mit den folgenden Kennzeichnern der Benutzersuche in beliebiger Kombination eingrenzen.'
redirect_from:
  - /articles/searching-users
  - /github/searching-for-information-on-github/searching-users
  - /github/searching-for-information-on-github/searching-on-github/searching-users
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - GitHub search
ms.openlocfilehash: cf3af1837e398226bee7d926e5dae0fd437879c7
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/10/2022
ms.locfileid: '145133850'
---
Du kannst auf {% data variables.product.product_name %} global nach Benutzern suchen. Weitere Informationen findest du unter [Informationen zur Suche auf {% data variables.product.company_short %}](/search-github/getting-started-with-searching-on-github/about-searching-on-github).

{% data reusables.search.syntax_tips %}

## Suche nur nach Benutzern oder nur nach Organisationen

Die Suche nach Benutzern gibt standardmäßig sowohl persönliche Konten als auch Organisationen zurück. Mit dem Qualifizierer `type` kannst du die Suchergebnisse jedoch auf persönliche Konten oder Organisationen eingrenzen.

| Qualifizierer        | Beispiel
| ------------- | -------------
| `type:user` | Mit [**mike in:name created:&lt;2011-01-01 type:user**](https://github.com/search?q=mike+in:name+created%3A%3C2011-01-01+type%3Auser&type=Users) werden persönliche Konten mit dem Namen „mike“ ermittelt, die vor 2011 erstellt wurden.
| `type:org` | Mit [**data in:email type:org**](https://github.com/search?q=data+in%3Aemail+type%3Aorg&type=Users) werden Organisationen mit dem Begriff „data“ in der E-Mail-Adresse ermittelt.

## Suche nach Kontoname, vollständigem Namen oder öffentlicher E-Mail-Adresse

Du kannst deine Suche mit den Qualifizierern `user` oder `org` auf den Namen eines persönlichen Benutzerkontos oder eines Organisationskontos eingrenzen.

Mit dem Qualifizierer `in` kannst du die Suche auf den Benutzernamen (`login`), den vollständigen Namen oder die öffentliche E-Mail-Adresse von Benutzer*innen oder Organisationen bzw. auf eine beliebige Kombination derselben eingrenzen. Ohne diesen Qualifizierer werden nur Benutzernamen und E-Mail-Adressen durchsucht. Aus Datenschutzgründen ist die Suche nach E-Mail-Domänen-Namen nicht möglich.

| Qualifizierer        | Beispiel
| ------------- | -------------
| `user:name` | Mit [**user:octocat**](https://github.com/search?q=user%3Aoctocat&type=Users) wird die*der Benutzer*in mit dem Benutzernamen „octocat“ ermittelt.
| `org:name` | Mit [**org:electron type:users**](https://github.com/search?q=org%3Aelectron+type%3Ausers&type=Users) wird der Kontoname der Organisation „Electron“ ermittelt.
| `in:login` | Mit [**kenya in:login**](https://github.com/search?q=kenya+in%3Alogin&type=Users) werden Benutzer*innen mit dem Begriff „kenya“ im Benutzernamen ermittelt.
| `in:name` | Mit [**bolton in:name**](https://github.com/search?q=bolton+in%3Afullname&type=Users) werden Benutzer*innen ermittelt, deren richtiger Name den Begriff „bolton“ enthält.
| `fullname:firstname lastname` | Mit [**fullname:nat friedman**](https://github.com/search?q=fullname%3Anat+friedman&type=Users) wird ein*e Benutzer*in mit dem vollständigen Namen „Nat Friedman“ ermittelt. Hinweis: In diesem Suchkennzeichner werden Leerzeichen beachtet.
| `in:email` | Mit [**data in:email**](https://github.com/search?q=data+in%3Aemail&type=Users&utf8=%E2%9C%93) werden Benutzer*innen mit dem Begriff „data“ in der E-Mail-Adresse ermittelt.

## Suche nach der Anzahl der Repositorys eines Benutzers

Du kannst Benutzer*innen basierend auf der Anzahl von Repositorys filtern, die sich in ihrem Besitz befinden. Verwende dazu den Qualifizierer `repos` und [Qualifizierer für „größer als“ oder „kleiner als“ sowie Bereichsqualifizierer](/search-github/getting-started-with-searching-on-github/understanding-the-search-syntax).

| Qualifizierer        | Beispiel
| ------------- | -------------
| <code>repos:<em>n</em></code> | Mit [**repos:>9000**](https://github.com/search?q=repos%3A%3E%3D9000&type=Users) werden Benutzer*innen ermittelt, die mehr als 9.000 Repositorys besitzen.
| | Mit [**bert repos:10..30**](https://github.com/search?q=bert+repos%3A10..30&type=Users) werden Benutzer*innen ermittelt, deren Benutzername oder echter Name den Begriff „bert“ enthält und die zwischen 10 und 30 Repositorys besitzen.

## Suche nach dem Standort

Du kannst Benutzer nach dem Standort suchen, der in ihrem Profil angegeben ist.

| Qualifizierer        | Beispiel
| ------------- | -------------
| <code>location:<em>LOCATION</em></code> | Mit [**repos:1 location:iceland**](https://github.com/search?q=repos%3A1+location%3Aiceland&type=Users) werden Benutzer*innen ermittelt, die genau ein Repository besitzen und in Island leben.

## Suche nach der Repository-Sprache

Mit dem Qualifizierer `language` kannst du basierend auf den Sprachen der Repositorys, die sich im Besitz der Benutzer*innen befinden, nach Benutzer*innen suchen.

| Qualifizierer        | Beispiel
| ------------- | -------------
| <code>language:<em>LANGUAGE</em></code> | Mit [**language:javascript location:russia**](https://github.com/search?q=language%3Ajavascript+location%3Arussia&type=Users) werden Benutzer*innen in Russland ermittelt, deren Repositorys hauptsächlich in JavaScript geschrieben wurden.
| | Mit [**jenny language:javascript in:fullname**](https://github.com/search?q=jenny+language%3Ajavascript+in%3Afullname&type=Users) werden Benutzer*innen mit JavaScript-Repositorys ermittelt, deren vollständiger Name den Begriff „jenny“ enthält.

## Suche nach dem Erstellungsdatum eines persönlichen Kontos

Mit dem Qualifizierer `created` kannst du Benutzer*innen nach dem Datum ihres Beitritts zu {% data variables.product.product_name %} filtern. Der Qualifizierer verwendet als Parameter ein Datum. {% data reusables.time_date.date_format %} {% data reusables.time_date.time_format %}

{% data reusables.search.date_gt_lt %}

| Qualifizierer        | Beispiel
| ------------- | -------------
| <code>created:<em>YYYY-MM-DD</em></code> | Mit [**created:<2011-01-01**](https://github.com/search?q=created%3A%3C2011-01-01&type=Users) werden Benutzer*innen ermittelt, die vor 2011 beigetreten sind.
| | Mit [**created:>=2013-05-11**](https://github.com/search?q=created%3A%3E%3D2013-05-11&type=Users) werden Benutzer*innen ermittelt, die am oder nach dem 11. Mai 2013 beigetreten sind.
| | Mit [**created:2013-03-06 location:london**](https://github.com/search?q=created%3A2013-03-06+location%3Alondon&type=Users) werden Benutzer*innen ermittelt, die am 6. März 2013 beigetreten sind und London als Standort angegeben haben.
| | Mit [**created:2010-01-01..2011-01-01 john in:login**](https://github.com/search?q=created%3A2010-01-01..2011-01-01+john+in%3Ausername&type=Users) werden Benutzer*innen ermittelt, die zwischen 2010 und 2011 beigetreten sind und deren Benutzername den Begriff „john“ enthält.

## Suche nach der Anzahl der Follower

Du kannst Benutzer*innen basierend auf der Anzahl ihrer Follower filtern. Verwende dazu den Qualifizierer `followers` und [Qualifizierer für „größer als“ oder „kleiner als“ sowie Bereichsqualifizierer](/search-github/getting-started-with-searching-on-github/understanding-the-search-syntax).

| Qualifizierer        | Beispiel
| ------------- | -------------
| <code>followers:<em>n</em></code> | Mit [**followers:>=1000**](https://github.com/search?q=followers%3A%3E%3D1000&type=Users) werden Benutzer*innen mit mindestens 1.000 Followern ermittelt.
| | Mit [**sparkle followers:1..10**](https://github.com/search?q=sparkle+followers%3A1..10&type=Users) werden Benutzer*innen mit 1 bis 10 Followern und dem Begriff „sparkle“ im Namen ermittelt.

{% ifversion fpt or ghec %}

## Suche basierend auf der Möglichkeit zum Sponsern

Mit dem Qualifizierer `is:sponsorable` kannst du nach Benutzer*innen und Organisationen suchen, die in {% data variables.product.prodname_sponsors %} gesponsert werden können. Weitere Informationen findest du unter [Informationen zu {% data variables.product.prodname_sponsors %}](/sponsors/getting-started-with-github-sponsors/about-github-sponsors).

| Qualifizierer  | Beispiel
| ------------- | -------------
| `is:sponsorable` | Mit [**is:sponsorable**](https://github.com/search?q=is%3Asponsorable&type=Users) werden Benutzer*innen und Organisationen ermittelt, die über ein {% data variables.product.prodname_sponsors %}-Profil verfügen.

{% endif %}

## Weitere Informationsquellen

- [Sortieren von Suchergebnissen](/search-github/getting-started-with-searching-on-github/sorting-search-results/)
