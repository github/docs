---
title: Code durchsuchen
intro: 'Auf {% data variables.product.product_name %} kannst du Code durchsuchen und die Suchergebnisse mit den folgenden Kennzeichnern der Codesuche in beliebiger Kombination eingrenzen.'
redirect_from:
  - /articles/searching-code
  - /github/searching-for-information-on-github/searching-files-in-a-repository-for-exact-matches
  - /github/searching-for-information-on-github/searching-code-for-exact-matches
  - /github/searching-for-information-on-github/searching-code
  - /github/searching-for-information-on-github/searching-on-github/searching-code
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - GitHub search
ms.openlocfilehash: 125c17f1050cdb6d1b1d5a3d58d3e513eddce40f
ms.sourcegitcommit: e8c012864f13f9146e53fcb0699e2928c949ffa8
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 11/09/2022
ms.locfileid: '148160222'
---
{% ifversion github-code-search %} {% note %}

  **Hinweis:** {% data reusables.search.classic-search-code-search-note %}

  {% endnote %} {% endif %}

{% data reusables.search.you-can-search-globally %} Weitere Informationen findest du unter [Informationen zur Suche auf GitHub](/search-github/getting-started-with-searching-on-github/about-searching-on-github).

Du kannst Code nur mit den diesen Qualifizierern der Codesuche durchsuchen. Spezifische Qualifizierer für Repositorys, Benutzer oder Commits funktionieren bei der Durchsuchung von Code nicht.

{% data reusables.search.syntax_tips %}

## Grundlegendes zur Codesuche

Aufgrund der Komplexität der Codesuche gelten bei der Durchführung der Suche Einschränkungen:

{% ifversion fpt or ghes or ghec %}
- {% data reusables.search.required_login %}{% endif %}
- Code in [Forks](/pull-requests/collaborating-with-pull-requests/working-with-forks/about-forks) ist nur durchsuchbar, wenn der Fork über mehr Sterne als das übergeordnete Repository verfügt. Forks mit weniger Sternen als das übergeordnete Repository werden **nicht** für die Codesuche indiziert. Wenn du Forks mit mehr Sternen als das übergeordnete Repository in die Suchergebnisse einschließen möchtest, musst du deiner Abfrage `fork:true` oder `fork:only` hinzufügen. Weitere Informationen findest du unter [Suchen in Forks](/search-github/searching-on-github/searching-in-forks).
- Nur der _Standardbranch_ wird für die Codesuche indiziert.{% ifversion fpt or ghec %}
- Nur Dateien kleiner 384 KB sind durchsuchbar.{% else %}* Nur Dateien kleiner 5 MB sind durchsuchbar.
- Nur die ersten 500 KB jeder Datei sind durchsuchbar.{% endif %}
- Bis zu 4.000 private{% ifversion ghec or ghes or ghae %} und interne{% endif %} Repositorys sind durchsuchbar. Diese 4.000 Repositorys sind die zuletzt aktualisierten der ersten 10.000 privaten{% ifversion ghec or ghes or ghae %} und internen{% endif %} Repositorys, auf die du Zugriff hast.
- Nur Repositorys mit weniger als 500.000 Dateien sind durchsuchbar.{% ifversion fpt or ghec %}
- Nur Repositorys, die im letzten Jahr Aktivität aufwiesen oder in Suchergebnissen zurückgegeben wurden, sind durchsuchbar.{% endif %}
- Mit Ausnahme von [`filename`](#search-by-filename)-Suchvorgängen musst du beim Durchsuchen von Quellcode immer mindestens einen Suchbegriff angeben. Die Suche nach [`language:javascript`](https://github.com/search?utf8=%E2%9C%93&q=language%3Ajavascript&type=Code&ref=searchresults) ist beispielsweise ungültig, die Suche nach [`amazing language:javascript`](https://github.com/search?utf8=%E2%9C%93&q=amazing+language%3Ajavascript&type=Code&ref=searchresults) ist hingegen gültig.
- Die Suchergebnisse können maximal zwei gefundene Fragmente der gleichen Datei anzeigen, selbst wenn die Datei mehr Treffer enthält.
- Folgende Platzhalterzeichen können in Suchabfragen nicht verwendet werden: <code>. , : ; / \ ` ' " = * ! ? # $ & + ^ | ~ < > ( ) { } [ ] @</code>. Diese Zeichen werden bei der Suche schlicht ignoriert.

## Suche nach Dateiinhalten oder Dateipfad

Mit dem `in`-Qualifizierer kannst du deine Suche auf den Inhalt der Quellcodedatei, den Dateipfad oder auf beides eingrenzen. Ohne diesen Qualifizierer werden nur Dateiinhalte durchsucht.

| Qualifizierer  | Beispiel
| ------------- | -------------
| `in:file` | [**octocat in:file**](https://github.com/search?q=octocat+in%3Afile&type=Code) entspricht Code, in dem „octocat“ im Dateiinhalt aufgeführt wird.
| `in:path` | [**octocat in:path**](https://github.com/search?q=octocat+in%3Apath&type=Code) entspricht Code, in dem „octocat“ im Dateipfad aufgeführt wird.
| | [**octocat in:file,path**](https://github.com/search?q=octocat+in%3Afile%2Cpath&type=Code) entspricht Code, in dem „octocat“ im Dateiinhalt oder im Dateipfad aufgeführt wird.

## Suche innerhalb der Repositorys eines Benutzers oder einer Organisation

Wenn du den Code in allen Repositorys durchsuchen möchtest, die einem bestimmten Benutzer oder einer bestimmten Organisation gehören, kannst du den `user`- oder den `org`Qualifizierer verwenden. Um den Code in einem bestimmten Repository zu durchsuchen, kannst du den `repo`-Qualifizierer verwenden.

| Qualifizierer  | Beispiel
| ------------- | -------------
| <code>user:<em>USERNAME</em></code> | [**user:defunkt extension:rb**](https://github.com/search?q=user%3Agithub+extension%3Arb&type=Code) stimmt mit Code aus @defunkt überein, der auf <em>.rb</em> endet.
| <code>org:<em>ORGNAME</em></code> |[**org:github extension:js**](https://github.com/search?utf8=%E2%9C%93&q=org%3Agithub+extension%3Ajs&type=Code) stimmt mit Code aus GitHub überein, der auf <em>.js</em> endet.
| <code>repo:<em>USERNAME/REPOSITORY</em></code> | [**repo:mozilla/shumway extension:as**](https://github.com/search?q=repo%3Amozilla%2Fshumway+extension%3Aas&type=Code) stimmt mit Code aus dem @mozilla-Shumway-Projekt überein, der auf <em>.as</em> endet.

## Suche nach Standort

Mit dem `path`-Qualifizierer kannst du nach Quellcode unter einem bestimmten Pfad innerhalb eines Repositorys suchen. Verwende `path:/`, um nach Dateien zu suchen, die sich auf der Stammebene eines Repositorys befinden. Du kannst aber auch einen Verzeichnisnamen oder den Pfad zu einem Verzeichnis angeben, um Dateien innerhalb dieses Verzeichnisses oder seiner Unterverzeichnisse zu durchsuchen.

| Qualifizierer  | Beispiel
| ------------- | -------------
| <code>path:/</code> | [**octocat filename:readme path:/**](https://github.com/search?utf8=%E2%9C%93&q=octocat+filename%3Areadme+path%3A%2F&type=Code) entspricht _Readme_-Dateien mit dem Wort „octocat“, die sich auf der Stammebene eines Repositorys befinden.
| <code>path:<em>DIRECTORY</em></code> | [**form path:cgi-bin language:perl**](https://github.com/search?q=form+path%3Acgi-bin+language%3Aperl&type=Code) entspricht Perl-Dateien mit dem Wort „form“ im Verzeichnis <em>cgi-bin</em> oder in einem zugehörigen Unterverzeichnis.
| <code>path:<em>PATH/TO/DIRECTORY</em></code> | [**`console path:app/public language:javascript`**](https://github.com/search?q=console+path%3A%22app%2Fpublic%22+language%3Ajavascript&type=Code) entspricht JavaScript-Dateien mit dem Wort „console“ im Verzeichnis <em>app/public</em> oder in einem zugehörigen Unterverzeichnis (sogar in <em>app/public/js/form-validators</em>).

## Suche nach Sprache

Du kannst Code auch in Abhängigkeit der Programmiersprache suchen. Der `language`-Qualifizierer kann der Sprachname oder Alias sein. Eine vollständige Liste unterstützter Sprachen mit ihren Namen und Aliasen findest du im [github/linguist-Repository](https://github.com/github/linguist/blob/master/lib/linguist/languages.yml).

| Qualifizierer  | Beispiel
| ------------- | -------------
| <code>language:<em>LANGUAGE</em></code> | [**element language:xml size:100**](https://github.com/search?q=element+language%3Axml+size%3A100&type=Code) entspricht Code mit dem Wort „element“, das als XML gekennzeichnet ist und genau 100 Byte umfasst.
| | [**display language:scss**](https://github.com/search?q=display+language%3Ascss&type=Code) entspricht Code mit dem Wort „display“, der als SCSS gekennzeichnet ist.
| | [**org:mozilla language:markdown**](https://github.com/search?utf8=%E2%9C%93&q=org%3Amozilla+language%3Amarkdown&type=Code) entspricht Code aus allen @mozilla-Repositorys, der als Markdown gekennzeichnet ist.

## Suche nach Dateigröße

Mit dem `size`-Qualifizierer kannst du Quellcode nach der Größe der Datei suchen, in der sich der Code befindet. Der `size`-Qualifizierer verwendet [Größer-als-, Kleiner-als- und Bereichsqualifizierer](/search-github/getting-started-with-searching-on-github/understanding-the-search-syntax), um Ergebnisse basierend auf der Bytegröße der Datei zu filtern, in der der Code gefunden wird.

| Qualifizierer  | Beispiel
| ------------- | -------------
| <code>size:<em>n</em></code> | [**function size:&gt;10000 language:python**](https://github.com/search?q=function+size%3A%3E10000+language%3Apython&type=Code) entspricht Code mit dem Wort „function“, der in Python geschrieben ist und sich in Dateien befindet, die größer als 10 KB sind.

## Suche nach Dateiname

Der `filename`-Qualifizierer gleicht Codedateien mit einem bestimmten Dateinamen ab. Zur Suche nach Dateien in einem Repository kannst du aber auch den Dateifinder verwenden. Weitere Informationen findest du unter [Suchen nach Dateien auf GitHub](/search-github/searching-on-github/finding-files-on-github).

| Qualifizierer  | Beispiel
| ------------- | -------------
| <code>filename:<em>FILENAME</em></code> | [**filename:linguist**](https://github.com/search?utf8=%E2%9C%93&q=filename%3Alinguist&type=Code) entspricht Dateien mit dem Namen „linguist“.
| | [**filename:.vimrc commands**](https://github.com/search?q=filename%3A.vimrc+commands&type=Code) entspricht *VIMRC*-Dateien mit dem Wort „commands“.
| | [**filename:test_helper path:test language:ruby**](https://github.com/search?q=minitest+filename%3Atest_helper+path%3Atest+language%3Aruby&type=Code) entspricht Ruby-Dateien namens *test_helper* innerhalb des Verzeichnisses *test*.

## Suche nach Dateierweiterung

Der `extension`-Qualifizierer gleicht Codedateien mit einem bestimmten Suffix ab.

| Qualifizierer  | Beispiel
| ------------- | -------------
| <code>extension:<em>EXTENSION</em></code> | [**form path:cgi-bin extension:pm**](https://github.com/search?q=form+path%3Acgi-bin+extension%3Apm&type=Code) entspricht Code mit dem Wort „form“ unter <em>cgi-bin</em> mit dem Suffix <em>.pm</em>.
| | [**icon size:>200000 extension:css**](https://github.com/search?utf8=%E2%9C%93&q=icon+size%3A%3E200000+extension%3Acss&type=Code) entspricht Dateien, die größer als 200 KB sind, auf „.css“ enden und das Wort „icon“ enthalten.

## Weiterführende Themen

- [Sortieren von Suchergebnissen](/search-github/getting-started-with-searching-on-github/sorting-search-results/)
- [Suchen in Forks](/search-github/searching-on-github/searching-in-forks){% ifversion fpt or ghec %}
- [Navigieren in Code auf {% data variables.product.prodname_dotcom %}](/github/managing-files-in-a-repository/navigating-code-on-github){% endif %}
