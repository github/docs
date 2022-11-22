---
title: Recherche de code
intro: 'Vous pouvez rechercher du code sur {% data variables.product.product_name %} et affiner les résultats en utilisant ces qualificateurs de recherche de code dans n’importe quelle combinaison.'
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
ms.contentlocale: fr-FR
ms.lasthandoff: 11/09/2022
ms.locfileid: '148159755'
---
{% ifversion github-code-search %} {% note %}

  **Remarque :** {% data reusables.search.classic-search-code-search-note %}

  {% endnote %} {% endif %}

{% data reusables.search.you-can-search-globally %} Pour plus d’informations, consultez « [À propos de la recherche sur GitHub](/search-github/getting-started-with-searching-on-github/about-searching-on-github) ».

Seuls les qualificateurs suivants peuvent être utilisés pour rechercher du code. Les qualificateurs de recherche spécifiques aux référentiels, aux utilisateurs ou aux commits ne fonctionnent pas pour la recherche de code.

{% data reusables.search.syntax_tips %}

## Considérations relatives à la recherche de code

Compte tenu de la complexité de la recherche de code, des restrictions s’appliquent au mode de recherche :

{% ifversion fpt or ghes or ghec %}
- {% data reusables.search.required_login %}{% endif %}
- Le code contenu dans les [duplications (forks)](/pull-requests/collaborating-with-pull-requests/working-with-forks/about-forks) ne peut faire l’objet d’une recherche que si la duplication comporte plus d’étoiles que le référentiel parent. Les duplications comportant moins d’étoiles que le référentiel parent ne sont **pas** indexées pour la recherche de code. Pour inclure des duplications comportant plus d’étoiles que leur parent dans les résultats de la recherche, vous devez ajouter `fork:true` ou `fork:only` à votre requête. Pour plus d’informations, consultez « [Recherche dans les duplications (forks)](/search-github/searching-on-github/searching-in-forks) ».
- Seule la _branche par défaut_ est indexée pour la recherche de code.{% ifversion fpt or ghec %}
- Seuls les fichiers inférieurs à 384 Ko peuvent faire l’objet d’une recherche.{% else %}* Seuls les fichiers inférieurs à 5 Mo peuvent faire l’objet d’une recherche.
- Seuls les 500 premiers Ko de chaque fichier peuvent faire l’objet d’une recherche.{% endif %}
- Jusqu’à 4 000 référentiels privés{% ifversion ghec or ghes or ghae %} et internes{% endif %} peuvent faire l’objet d’une recherche. Ces 4 000 référentiels seront les plus récemment mis à jour parmi les 10 000 premiers référentiels privés{% ifversion ghec or ghes or ghae %} et internes{% endif %} auxquels vous avez accès.
- Seuls les référentiels contenant moins de 500 000 fichiers peuvent faire l’objet d’une recherche.{% ifversion fpt or ghec %}
- Seuls les référentiels qui ont eu une activité ou qui sont apparus dans des résultats de recherche au cours de l’année écoulée peuvent faire l’objet d’une recherche.{% endif %}
- À l’exception des recherches par [`filename`](#search-by-filename), vous devez toujours inclure au moins un terme lorsque vous recherchez du code source. Par exemple, la recherche de [`language:javascript`](https://github.com/search?utf8=%E2%9C%93&q=language%3Ajavascript&type=Code&ref=searchresults) n’est pas valide alors que celle de [`amazing language:javascript`](https://github.com/search?utf8=%E2%9C%93&q=amazing+language%3Ajavascript&type=Code&ref=searchresults) l’est.
- Les résultats de la recherche peuvent tout au plus afficher deux fragments du même fichier, mais il peut y avoir plus de résultats dans le fichier.
- Vous ne pouvez pas utiliser les caractères génériques suivants dans le cadre de votre requête de recherche : <code>. , : ; / \ ` ' " = * ! ? # $ & + ^ | ~ < > ( ) { } [ ] @</code>. La recherche ignorera ces symboles.

## Recherche par contenu du fichier ou par chemin d’accès au fichier

Le qualificateur `in` vous permet de restreindre votre recherche au contenu du fichier de code source, au chemin d’accès au fichier ou aux deux. Lorsque vous omettez ce qualificateur, la recherche porte uniquement sur le contenu du fichier.

| Qualificateur  | Exemple
| ------------- | -------------
| `in:file` | [**octocat in:file**](https://github.com/search?q=octocat+in%3Afile&type=Code) permet de rechercher du code où « octocat » apparaît dans le contenu du fichier.
| `in:path` | [**octocat in:path**](https://github.com/search?q=octocat+in%3Apath&type=Code) permet de rechercher du code où « octocat » apparaît dans le chemin d’accès au fichier.
| | [**octocat in:file,path**](https://github.com/search?q=octocat+in%3Afile%2Cpath&type=Code) permet de rechercher du code où « octocat » apparaît dans le contenu du fichier ou dans le chemin d’accès au fichier.

## Recherche dans les référentiels d’un utilisateur ou d’une organisation

Pour rechercher du code contenu dans tous les référentiels appartenant à un utilisateur ou à une organisation, vous pouvez utiliser le qualificateur `user` ou `org`. Pour rechercher du code contenu dans un référentiel spécifique, vous pouvez utiliser le qualificateur `repo`.

| Qualificateur  | Exemple
| ------------- | -------------
| <code>user:<em>USERNAME</em></code> | [**user:defunkt extension:rb**](https://github.com/search?q=user%3Agithub+extension%3Arb&type=Code) permet de rechercher du code de @defunkt qui se termine par <em>.rb</em>.
| <code>org:<em>ORGNAME</em></code> |[**org:github extension:js**](https://github.com/search?utf8=%E2%9C%93&q=org%3Agithub+extension%3Ajs&type=Code) permet de rechercher du code de GitHub qui se termine par <em>.js</em>.
| <code>repo:<em>USERNAME/REPOSITORY</em></code> | [**repo:mozilla/shumway extension:as**](https://github.com/search?q=repo%3Amozilla%2Fshumway+extension%3Aas&type=Code) permet de rechercher du code du projet shumway de @mozilla qui se termine par <em>.as</em>.

## Recherche par emplacement de fichier

Vous pouvez utiliser le qualificateur `path` pour rechercher du code source qui apparaît à un emplacement spécifique dans un référentiel. Utilisez `path:/` pour rechercher des fichiers situés au niveau racine d’un référentiel. Vous pouvez également spécifier un nom de répertoire ou le chemin d’accès à un répertoire pour rechercher des fichiers situés dans ce répertoire ou dans l’un de ses sous-répertoires.

| Qualificateur  | Exemple
| ------------- | -------------
| <code>path:/</code> | [**octocat filename:readme path:/**](https://github.com/search?utf8=%E2%9C%93&q=octocat+filename%3Areadme+path%3A%2F&type=Code) permet de rechercher des fichiers _readme_ comportant le mot « octocat » et situés au niveau racine d’un référentiel.
| <code>path:<em>DIRECTORY</em></code> | [**form path:cgi-bin language:perl**](https://github.com/search?q=form+path%3Acgi-bin+language%3Aperl&type=Code) permet de rechercher des fichiers Perl comportant le mot « form » et situés dans le répertoire <em>cgi-bin</em>, ou dans l’un de ses sous-répertoires.
| <code>path:<em>PATH/TO/DIRECTORY</em></code> | [ **`console path:app/public language:javascript`**](https://github.com/search?q=console+path%3A%22app%2Fpublic%22+language%3Ajavascript&type=Code) permet de rechercher des fichiers JavaScript comportant le mot « console » et situés dans le répertoire <em>app/public</em>, ou dans l’un de ses sous-répertoires (même s’ils résident dans <em>app/public/js/form-validators</em>).

## Recherche par langage

Vous pouvez rechercher du code en fonction du langage dans lequel il est écrit. Le qualificateur `language` peut être le nom ou l’alias du langage. Pour obtenir la liste complète des langages pris en charge, avec leurs noms et alias, consultez le [référentiel github/linguist](https://github.com/github/linguist/blob/master/lib/linguist/languages.yml).

| Qualificateur  | Exemple
| ------------- | -------------
| <code>language:<em>LANGUAGE</em></code> | [**element language:xml size:100**](https://github.com/search?q=element+language%3Axml+size%3A100&type=Code) permet de rechercher du code contenant le mot « element », marqué comme XML et comportant exactement 100 octets.
| | [**display language:scss**](https://github.com/search?q=display+language%3Ascss&type=Code) permet de rechercher du code contenant le mot « display » et marqué comme SCSS.
| | [**org:mozilla language:markdown**](https://github.com/search?utf8=%E2%9C%93&q=org%3Amozilla+language%3Amarkdown&type=Code) permet de rechercher du code de tous les référentiels de @mozilla qui est marqué comme Markdown.

## Recherche par taille de fichier

Vous pouvez utiliser le qualificateur `size` pour rechercher du code source en fonction de la taille du fichier dans lequel ce code existe. Le qualificateur `size` utilise les [qualificateurs supérieur à, inférieur à et de plage](/search-github/getting-started-with-searching-on-github/understanding-the-search-syntax) pour filtrer les résultats en fonction de la taille en octets du fichier dans lequel se trouve le code.

| Qualificateur  | Exemple
| ------------- | -------------
| <code>size:<em>n</em></code> | [**function size:&gt;10000 language:python**](https://github.com/search?q=function+size%3A%3E10000+language%3Apython&type=Code) permet de rechercher du code contenant le mot « function », écrit en Python, dans des fichiers de plus de 10 Ko.

## Recherche par nom de fichier

Le qualificateur `filename` permet de rechercher des fichiers de code qui portent un certain nom. Vous pouvez également rechercher un fichier dans un référentiel à l’aide de la fonctionnalité de recherche de fichiers. Pour plus d’informations, consultez « [Recherche de fichiers sur GitHub](/search-github/searching-on-github/finding-files-on-github) ».

| Qualificateur  | Exemple
| ------------- | -------------
| <code>filename:<em>FILENAME</em></code> | [**filename:linguist**](https://github.com/search?utf8=%E2%9C%93&q=filename%3Alinguist&type=Code) permet de rechercher les fichiers nommés « linguist ».
| | [**filename:.vimrc commands**](https://github.com/search?q=filename%3A.vimrc+commands&type=Code) permet de rechercher les fichiers *.vimrc* contenant le mot « commands ».
| | [**filename:test_helper path:test language:ruby**](https://github.com/search?q=minitest+filename%3Atest_helper+path%3Atest+language%3Aruby&type=Code) permet de rechercher les fichiers Ruby nommés *test_helper* dans le répertoire *test*.

## Recherche par extension de fichier

Le qualificateur `extension` permet de rechercher les fichiers de code dotés d’une extension de fichier spécifique.

| Qualificateur  | Exemple
| ------------- | -------------
| <code>extension:<em>EXTENSION</em></code> | [**form path:cgi-bin extension:pm**](https://github.com/search?q=form+path%3Acgi-bin+extension%3Apm&type=Code) permet de rechercher du code contenant le mot « form », situé sous <em>cgi-bin</em> et portant l’extension de fichier <em>.pm</em>.
| | [**icon size:>200000 extension:css**](https://github.com/search?utf8=%E2%9C%93&q=icon+size%3A%3E200000+extension%3Acss&type=Code) permet de rechercher des fichiers de plus de 200 Ko qui se terminent par .css et qui comportent le mot « icon ».

## Pour aller plus loin

- « [Tri des résultats de recherche](/search-github/getting-started-with-searching-on-github/sorting-search-results/) »
- « [Recherche dans les duplications (forks)](/search-github/searching-on-github/searching-in-forks) »{% ifversion fpt or ghec %}
- « [Navigation dans du code sur {% data variables.product.prodname_dotcom %}](/github/managing-files-in-a-repository/navigating-code-on-github) »{% endif %}
