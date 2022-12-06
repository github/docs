---
title: Présentation de la syntaxe de GitHub Code Search (bêta)
intro: 'Vous pouvez créer des requêtes de recherche pour les résultats souhaités à l’aide de qualificateurs de code spécialisés, d’expressions régulières et d’opérations booléennes.'
allowTitleToDifferFromFilename: true
versions:
  feature: github-code-search
topics:
  - GitHub search
ms.openlocfilehash: 098da2b7fe8a8c5466805c583e6b029b5b9b58c1
ms.sourcegitcommit: e8c012864f13f9146e53fcb0699e2928c949ffa8
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 11/09/2022
ms.locfileid: '148159672'
---
{% note %}

**Remarque :** {% data reusables.search.code-search-code-view-beta-note %}

{% data reusables.search.code-search-link %} {% data reusables.search.code-view-link %}

{% endnote %}

## À propos de la structure des requêtes de la nouvelle recherche de code (bêta)

La syntaxe de recherche décrite dans cet article s’applique uniquement à la recherche de code dans le cadre de l’activation de la nouvelle recherche de code (bêta). {% data reusables.search.non-code-search-explanation %}

Les requêtes de recherche se composent de termes de recherche, notamment du texte à rechercher et de qualificateurs, qui permettent d’affiner la recherche. 

Un terme utilisé en l’état, sans qualificateur, est recherché dans le contenu ou le chemin d’un fichier. 

Par exemple, la requête suivante :

```
http-push
```

La requête ci-dessus va rechercher le fichier `docs/http-push.txt`, même s’il ne contient pas le terme `http-push`. Elle va également rechercher un fichier nommé `example.txt`, s’il contient le terme `http-push`. 

Vous pouvez entrer plusieurs termes séparés par des espaces blancs pour rechercher les documents qui correspondent aux deux termes. 

Par exemple, la requête suivante :

```
sparse index
```

Les résultats de la recherche incluent tous les documents contenant les termes `sparse` et `index`, dans n’importe quel ordre. Par exemple, la requête va rechercher un fichier contenant `SparseIndexVector`, un fichier avec l’expression `index for sparse trees` et même un fichier nommé `index.txt` contenant le terme `sparse`.  

La recherche de plusieurs termes séparés par des espaces blancs équivaut à la recherche `hello AND world`. D’autres opérations booléennes, par exemple `hello OR world`, sont également prises en charge dans la nouvelle recherche de code (bêta). Pour plus d’informations sur les opérations booléennes, consultez « [Utilisation des opérations booléennes](#using-boolean-operations) ».

La nouvelle recherche de code (bêta) prend également en charge la recherche d’une chaîne exacte ainsi que les espaces blancs. Pour plus d’informations, consultez « [Rechercher une correspondance exacte](#query-for-an-exact-match) ».

Vous pouvez affiner votre recherche de code à l’aide de qualificateurs spécialisés, par exemple `repo:`, `language:` et `path:`. Pour plus d’informations sur les qualificateurs que vous pouvez utiliser dans la nouvelle recherche de code (bêta), consultez « [Utilisation de qualificateurs](#using-qualifiers) ».

Vous pouvez également utiliser des expressions régulières dans vos recherches en plaçant ces expressions entre barres obliques inverses. Pour plus d’informations sur l’utilisation des expressions régulières, consultez « [Utilisation d’expressions régulières](#using-regular-expressions) ».

## Rechercher une correspondance exacte

Pour rechercher une chaîne exacte, notamment des espaces blancs, vous pouvez placer la chaîne entre guillemets. Par exemple :

```
"sparse index"
```

Pour rechercher une expression contenant un guillemet, vous pouvez utiliser la barre oblique inverse en tant que caractère d’échappement devant le guillemet. Par exemple, pour trouver la chaîne exacte `name = "tensorflow"`, vous pouvez effectuer la recherche suivante :

```
"name = \"tensorflow\""
```

Vous pouvez également utiliser des chaînes entre guillemets dans les qualificateurs, par exemple :

```
path: git language: "protocol buffers"
```

## Utilisation d’opérations booléennes

La nouvelle recherche de code (bêta) prend en charge les expressions booléennes. Vous pouvez utiliser les opérateurs `AND`, `OR` et `NOT` pour combiner les termes de recherche.

Par défaut, les termes adjacents séparés par des espaces blancs équivalent à l’utilisation de l’opérateur `AND`. Par exemple, la requête de recherche `sparse index` est identique à `sparse AND index`, ce qui signifie que les résultats de la recherche vont inclure tous les documents contenant les termes `sparse` et `index`, dans n’importe quel ordre.

Pour rechercher des documents contenant l’un ou l’autre de ces termes, vous pouvez utiliser l’opérateur `OR`. Par exemple, la requête suivante recherche les documents contenant `sparse` ou `index` :

```
sparse OR index
```

Pour exclure des fichiers des résultats de la recherche, vous pouvez utiliser l’opérateur `NOT`. Par exemple, pour exclure un fichier du répertoire `__testing__`, vous pouvez effectuer la recherche suivante :

```
"fatal error" NOT path:__testing__
```

Vous pouvez utiliser des parenthèses pour exprimer des expressions booléennes plus complexes. Par exemple :

```
(language:ruby OR language:python) AND NOT path:"/tests/"
```

## Utilisation de qualificateurs

Vous pouvez utiliser des mots clés spécialisés pour qualifier votre recherche.
- [Qualificateur de dépôt](#repository-qualifier)
- [Qualificateurs d’organisation et d’utilisateur](#organization-and-user-qualifiers)
- [Qualificateur de langage](#language-qualifier)
- [Qualificateur de chemin](#path-qualifier)
- [Qualificateur de symbole](#symbol-qualifier)
- [Qualificateur de contenu](#content-qualifier)
- [Qualificateur is:](#is-qualifier)

### Qualificateur de dépôt

Pour effectuer une recherche dans un dépôt, utilisez le qualificateur `repo:`. Vous devez fournir le nom complet du dépôt en indiquant également son propriétaire. Par exemple :

```
repo:github/linguist
```

Pour effectuer une recherche dans un ensemble de dépôts, vous pouvez combiner plusieurs qualificateurs `repo:` avec l’opérateur booléen `OR`. Par exemple :

```
repo:github/linguist OR repo:tree-sitter/tree-sitter
```

{% note %}

**Remarque :** La bêta de la nouvelle recherche de code ne prend pas en charge les expressions régulières ou la correspondance partielle pour les noms de dépôts. Vous devez donc taper le nom complet du dépôt (en indiquant également le préfixe utilisateur) pour que le qualificateur `repo:` fonctionne.

{% endnote %}

### Qualificateurs d’organisation et d’utilisateur

Pour rechercher des fichiers dans une organisation, utilisez le qualificateur `org:`. Par exemple :

```
org:github
```

Pour rechercher des fichiers dans un compte personnel, utilisez le qualificateur `user:`. Par exemple :

```
user:octocat
```

{% note %}

**Remarque :** La bêta de la nouvelle recherche de code ne prend pas en charge les expressions régulières ou la correspondance partielle pour les noms d’organisations ou d’utilisateurs. Vous devez donc taper le nom d’organisation ou le nom d’utilisateur complet pour que le qualificateur fonctionne.

{% endnote %}


### Qualificateur de langage

Pour limiter la recherche à un langage spécifique, utilisez le qualificateur `language:`. Par exemple : 

```
language: ruby OR language:cpp OR language:csharp
```

Pour obtenir la liste complète des noms de langages pris en charge, consultez [languages.yaml](https://github.com/github/linguist/blob/master/lib/linguist/languages.yml) dans [github/linguist](https://github.com/github/linguist). Si le langage souhaité ne figure pas dans la liste, vous pouvez ouvrir une demande de tirage (pull request) pour l’ajouter.

### Qualificateur de chemin

Pour effectuer une recherche dans les chemins de fichiers, utilisez le qualificateur `path:`. Cela permet de rechercher les fichiers contenant le terme n’importe où dans leur chemin. Par exemple, pour rechercher les fichiers contenant le terme `unit_tests` dans leur chemin, utilisez :

```
path:unit_tests
```
 La requête ci-dessus trouve `src/unit_tests/my_test.py` et `src/docs/unit_tests.md`, car ils contiennent tous les deux `unit_test` dans leur chemin. 

 Pour chercher uniquement un nom de fichier spécifique (et non une partie du chemin), vous pouvez utiliser une expression régulière :

 ```
 path:/(^|\/)README\.md$/
 ```
Notez que le `.` dans le nom de fichier fait l’objet d’une séquence d’échappement, car `.` a une signification particulière pour les expressions régulières. Pour plus d’informations sur l’utilisation des expressions régulières, consultez « [Utilisation d’expressions régulières](#using-regular-expressions) ».

<br>

Vous pouvez également utiliser certaines expressions Glob limitées dans le qualificateur `path:`.

Par exemple, pour rechercher des fichiers ayant l’extension `txt`, vous pouvez utiliser :

```
path:*.txt
```
<br>
Pour rechercher des fichiers JavaScript dans un répertoire `src`, vous pouvez utiliser :

```
path:src/*.js
```

- Par défaut, les expressions Glob ne sont pas ancrées au début du chemin. Ainsi, l’expression ci-dessus recherche toujours un chemin tel que `app/src/main.js`. Toutefois, si vous faites précéder l’expression de `/`, elle est ancrée au début. Par exemple :

    ```
    path:/src/*.js
    ```
- Notez que `*` ne correspond pas au caractère `/`. Ainsi, pour l’exemple ci-dessus, tous les résultats sont des descendants directs du répertoire `src`. Pour rechercher des correspondances dans des sous-répertoires, afin que les résultats incluent des fichiers profondément imbriqués tels que `/src/app/testing/utils/example.js`, vous pouvez utiliser `**`. Par exemple :

    ```
    path:/src/**/*.js
    ```
<br>

Vous pouvez également utiliser le caractère global `?`. Par exemple, pour rechercher le chemin `file.aac` ou `file.abc`, vous pouvez utiliser :

```
path:*.a?c
```
<br>
Pour rechercher un nom de fichier qui contient un caractère spécial tel que `*` ou `?`, utilisez simplement une chaîne entre guillemets :

```
path:"file?"
```

Dans la mesure où les expressions Glob sont désactivées pour les chaînes entre guillemets, la requête ci-dessus recherche uniquement les chemins contenant la chaîne littérale `file?`. 

### Qualificateur de symbole

Vous pouvez rechercher des définitions de symboles dans le code, par exemple des définitions de fonctions ou de classes, à l’aide du qualificateur `symbol:`. La recherche de symboles est basée sur l’analyse de votre code à l’aide de l’écosystème de l’analyseur syntaxique open source [Tree-sitter](https://github.com/tree-sitter). Ainsi, aucune configuration supplémentaire ou intégration d’outil de build n’est nécessaire.

Par exemple, pour rechercher un symbole appelé `WithContext` :

```
language:go symbol:WithContext
```

Dans certains langages, vous pouvez rechercher des symboles à l’aide d’un préfixe (par exemple le préfixe de leur nom de classe). Par exemple, pour une méthode `deleteRows` sur un struct `Maint`, vous pouvez rechercher `symbol:Maint.deleteRows` en Go, ou `symbol:Maint::deleteRows` en Rust.

Vous pouvez également utiliser des expressions régulières avec le qualificateur de symbole. Par exemple, la requête suivante permet de trouver les conversions que des utilisateurs ont implémentées en Rust pour le type `String` :

```
language:rust symbol:/^String::to_.*/
```

Notez que ce qualificateur recherche uniquement les définitions et non les références. De plus, tous les types de symbole et tous les langages ne sont pas encore complètement pris en charge. L’extraction de symboles est prise en charge pour les langages suivants. 

- C#
- Python
- Go
- Java
- JavaScript
- TypeScript
- PHP
- Mémoires tampon de protocole
- Ruby
- Rust

Nous travaillons à la prise en charge d’un plus grand nombre de langages. Si vous souhaitez contribuer à cet effort, vous pouvez ajouter la prise en charge de votre langage dans l’écosystème de l’analyseur syntaxique open source [Tree-sitter](https://github.com/tree-sitter), sur lequel est basée la recherche de symboles.

### Qualificateur de contenu

Par défaut, les termes utilisés en l’état sont recherchés à la fois dans les chemins et les contenus des fichiers. Pour restreindre une recherche afin qu’elle corresponde strictement au contenu d’un fichier et non aux chemins de fichiers, utilisez le qualificateur `content:`. Par exemple :

```
content:README.md
```

Cette requête recherche uniquement les fichiers contenant le terme `README.md` et non les fichiers nommés `README.md`. 

### Qualificateur is:

Pour effectuer un filtrage en fonction des propriétés du document, vous pouvez utiliser le qualificateur `is:`. Pour le moment, la seule valeur prise en charge dans ce qualificateur est `archived`, ce qui limite la recherche aux dépôts archivés. Par exemple :

```
path:/MIT.txt is:archived
```

Notez que le qualificateur `is:` peut être inversé par rapport à l’opérateur `NOT`. Pour rechercher des dépôts non archivés, vous pouvez effectuer la recherche suivante :

```
log4j NOT is:archived
```

## Utilisation d’expressions régulières

La nouvelle recherche de code (bêta) prend en charge les expressions régulières pour la recherche de modèles dans votre code. Vous pouvez employer des expressions régulières dans les termes de recherche utilisés en l’état ainsi que dans de nombreux qualificateurs, en plaçant ces regex entre barres obliques inverses. 

Par exemple, pour rechercher l’expression régulière `sparse.*index`, vous devez utiliser :

```
/sparse.*index/
```

Notez que les barres obliques utilisées de manière littérale doivent faire l’objet de séquences d’échappement au sein de l’expression régulière. Par exemple, pour rechercher des fichiers dans le répertoire `App/src`, vous devez utiliser :

```
/^App\/src\//
```
