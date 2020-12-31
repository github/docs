---
title: Benutzer durchsuchen
intro: 'Auf {% data variables.product.product_name %} können Sie Benutzer durchsuchen und die Suchergebnisse mit den folgenden Kennzeichnern der Benutzersuche in beliebiger Kombination eingrenzen.'
redirect_from:
  - /articles/searching-users
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
---

Sie können auf {% data variables.product.product_name %} global nach Benutzern suchen. Weitere Informationen findest Du unter „[Informationen zur Suche auf {% data variables.product.company_short %}](/articles/about-searching-on-github).“

{% data reusables.search.syntax_tips %}

### Suche nur nach Benutzern oder nur nach Organisationen

Die Suche nach Benutzern gibt standardmäßig sowohl persönliche Konten als auch Organisationen zurück. Mit dem Qualifizierer `type` kannst Du die Suchergebnisse jedoch ausschließlich auf persönliche Konten oder ausschließlich auf Organisationen eingrenzen.

| Qualifizierer | Beispiel                                                                                                                                                                                                                        |
| ------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `type:user`   | [**mike in:name created:&lt;2011-01-01 type:user**](https://github.com/search?q=mike+in:name+created%3A%3C2011-01-01+type%3Auser&type=Users) sucht persönliche Konten mit dem Namen „mike“, die vor 2011 erstellt wurden. |
| `type:org`    | [**data in:email type:org**](https://github.com/search?q=data+in%3Aemail+type%3Aorg&type=Users) sucht Organisationen, deren E-Mail-Adresse des Wort „data“ enthält.                                                             |

### Suche nach Kontoname, vollständigem Namen oder öffentlicher E-Mail-Adresse

Du kannst Deine Suche mit den Qualifizierern `user` respektive `org` auf den Kontonamen eines Benutzers oder einer Organisation eingrenzen.

Mit dem Qualifizierer `in` kannst Du die Suche auf den Benutzernamen (`login`), den vollständigen Namen oder die öffentliche E-Mail-Adresse eines Benutzers oder einer Organisation oder jede beliebige Kombination derselben eingrenzen. Ohne diesen Qualifizierer werden nur Benutzernamen und E-Mail-Adressen durchsucht. Aus Datenschutzgründen ist die Suche nach E-Mail-Domänen-Namen nicht möglich.

| Qualifizierer                 | Beispiel                                                                                                                                                                                                                      |
| ----------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `user:name`                   | [**user:octocat**](https://github.com/search?q=user%3Aoctocat&type=Users) sucht einen Benutzer mit dem Benutzernamen „octocat“.                                                                                               |
| `org:name`                    | [**org:electron type:users**](https://github.com/search?q=org%3Aelectron+type%3Ausers&type=Users) sucht den Kontonamen der Organisation Electron.                                                                             |
| `in:login`                    | [**kenya in:login**](https://github.com/search?q=kenya+in%3Alogin&type=Users) sucht Benutzer, deren Benutzername das Wort „kenya“ enthält.                                                                                    |
| `in:name`                     | [**bolton in:name**](https://github.com/search?q=bolton+in%3Afullname&type=Users) sucht Benutzer, deren wirklicher Name das Wort „bolton“ enthält.                                                                            |
| `fullname:firstname lastname` | [**fullname:nat friedman**](https://github.com/search?q=fullname%3Anat+friedman&type=Users) sucht einen Benutzer mit dem vollständigen Namen „Nat Friedman“. Hinweis: In diesem Suchkennzeichner werden Leerzeichen beachtet. |
| `in:email`                    | [**data in:email**](https://github.com/search?q=data+in%3Aemail&type=Users&utf8=%E2%9C%93) sucht Benutzer, deren E-Mail-Adresse das Wort „data“ enthält.                                                                      |

### Suche nach der Anzahl der Repositorys eines Benutzers

Mit dem Qualifizierer `repos` kannst Du Benutzer nach der Anzahl der Repositorys filtern, die ihnen gehören. Zur Angabe der Anzahl der Repositorys verwende [„Größer-als“-, „Kleiner-als“- oder Bereichsqualifizierer](/articles/understanding-the-search-syntax).

| Qualifizierer             | Beispiel                                                                                                                                                                                       |
| ------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <code>repos:<em>n</em></code> | [**repos:>9000**](https://github.com/search?q=repos%3A%3E%3D9000&type=Users) findet Benutzer mit mehr als 9.000 Repositorys.                                                                   |
|                           | [**bert repos:10..30**](https://github.com/search?q=bert+repos%3A10..30&type=Users) sucht Benutzer mit 10 bis 30 Repositorys, deren Benutzername oder wirklicher Name das Wort „bert“ enthält. |

### Suche nach dem Dateipfad

Du kannst Benutzer nach dem Standort suchen, der in ihrem Profil angegeben ist.

| Qualifizierer             | Beispiel                                                                                                                                                                       |
| ------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| <code>location:<em>LOCATION</em></code> | [**repos:1 location:iceland**](https://github.com/search?q=repos%3A1+location%3Aiceland&type=Users) sucht Benutzer, denen genau ein Repository gehört und die in Island leben. |

### Suche nach der Repository-Sprache

Mit dem Qualifizierer `language` kannst Du Benutzer auf Basis der Programmiersprache ihrer Repositorys suchen.

| Qualifizierer             | Beispiel                                                                                                                                                                                                                                                       |
| ------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <code>language:<em>LANGUAGE</em></code> | [**language:javascript location:russia**](https://github.com/search?q=language%3Ajavascript+location%3Arussia&type=Users) sucht Benutzer aus Russland, deren Repositorys primär in JavaScript geschrieben sind.                                                |
|                           | [**jenny language:javascript in:fullname**](https://github.com/search?q=jenny+language%3Ajavascript+in%3Afullname&type=Users) sucht Benutzer, deren Repositorys primär in JavaScript geschrieben sind und deren vollständige Namen das Wort „jenny“ enthalten. |

### Suche nach dem Erstellungsdatum eines Benutzerkontos

Mit dem Qualifizierer `created` kannst Du Benutzer nach dem Datum ihres Beitritts zu {% data variables.product.product_name %} filtern. Der Qualifizierer verwendet als Parameter ein Datum. {% data reusables.time_date.date_format %} {% data reusables.time_date.time_format %}

{% data reusables.search.date_gt_lt %}

| Qualifizierer             | Beispiel                                                                                                                                                                                                                                       |
| ------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <code>created:<em>YYYY-MM-DD</em></code> | [**created:<2011-01-01**](https://github.com/search?q=created%3A%3C2011-01-01&type=Users) findet Benutzer, die vor 2011 beigetreten sind.                                                                                                      |
|                           | [**created:>=2013-05-11**](https://github.com/search?q=created%3A%3E%3D2013-05-11&type=Users) findet Benutzer, die am oder nach dem 11. Mai 2013 beigetreten sind.                                                                             |
|                           | [**created:2013-03-06 location:london**](https://github.com/search?q=created%3A2013-03-06+location%3Alondon&type=Users) sucht Benutzer, die am 6. März 2013 beigetreten sind und als Standort London angeben.                                  |
|                           | [**created:2010-01-01..2011-01-01 john in:login**](https://github.com/search?q=created%3A2010-01-01..2011-01-01+john+in%3Ausername&type=Users) sucht Benutzer, die in 2010 beigetreten sind und deren Benutzernamen das Wort „john“ enthalten. |

### Suche nach Anzahl der Follower

Mit dem Qualifizierer `followers` kannst Du Benutzer nach der Anzahl ihrer Follower filtern. Zur Angabe der Anzahl der Follower verwende die Syntax [„Größer als“-, „Kleiner als“- oder den Bereichsqualifizierer](/articles/understanding-the-search-syntax).

| Qualifizierer             | Beispiel                                                                                                                                                                      |
| ------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <code>followers:<em>n</em></code> | [**followers:>=1000**](https://github.com/search?q=followers%3A%3E%3D1000&type=Users) findet Benutzer mit mehr als 1.000 Followern.                                           |
|                           | [**sparkle followers:1..10**](https://github.com/search?q=sparkle+followers%3A1..10&type=Users) sucht Benutzer mit 1 bis 10 Followern, deren Name das Wort „sparkle“ enthält. |

### Weiterführende Informationen

- „[Suchergebnisse sortieren](/articles/sorting-search-results/)“
