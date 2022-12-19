---
title: Expressions
shortTitle: Expressions
intro: Vous pouvez évaluer des expressions dans les workflows et les actions.
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
miniTocMaxHeadingLevel: 3
ms.openlocfilehash: 94bd9f7a43d4325e497a776357711adf64c0d7ba
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/05/2022
ms.locfileid: '147614222'
---
{% data reusables.actions.enterprise-beta %} {% data reusables.actions.enterprise-github-hosted-runners %}

## À propos des expressions

Vous pouvez utiliser des expressions pour définir par programmation des variables d’environnement dans les fichiers de workflow et les contextes d’accès. Une expression peut être une combinaison quelconque de valeurs littérales, de références à un contexte ou de fonctions. Vous pouvez combiner des littéraux, des références de contexte et des fonctions à l’aide d’opérateurs. Pour plus d’informations sur les contextes, consultez « [Contextes](/actions/learn-github-actions/contexts) ».

Les expressions sont couramment utilisées avec le mot clé conditionnel `if` dans un fichier de workflow pour déterminer si une étape doit être exécutée ou non. Quand une condition `if` est `true`, l’étape s’exécute.

Vous devez utiliser une syntaxe spécifique pour indiquer à {% data variables.product.prodname_dotcom %} d’évaluer une expression plutôt que de la traiter comme une chaîne.

{% raw %} `${{ <expression> }}`
{% endraw %}

{% data reusables.actions.expression-syntax-if %} Pour plus d’informations sur les conditions `if`, consultez « [Syntaxe de workflow pour {% data variables.product.prodname_actions %}](/articles/workflow-syntax-for-github-actions/#jobsjob_idif) ».

{% data reusables.actions.context-injection-warning %}

#### Exemple d’expression dans une condition `if`

```yaml
steps:
  - uses: actions/hello-world-javascript-action@v1.1
    if: {% raw %}${{ <expression> }}{% endraw %}
```

#### Exemple de définition d’une variable d’environnement

{% raw %}
```yaml
env:
  MY_ENV_VAR: ${{ <expression> }}
```
{% endraw %}

## Littéraux

Dans le cadre d’une expression, vous pouvez utiliser des types de données `boolean`, `null`, `number` ou `string`.

| Type de données | Valeur littérale |
|-----------|---------------|
| `boolean` | `true` ou `false` |
| `null`    | `null` |
| `number`  | Tout format de nombre pris en charge par JSON. |
| `string`  | Vous n’avez pas besoin de placer les chaînes entre `{% raw %}${{{% endraw %}` et `{% raw %}}}{% endraw %}`. Toutefois, si vous le faites, vous devez utiliser des guillemets simples (`'`) autour de la chaîne. Pour utiliser un guillemet simple littéral, échappez le guillemet simple littéral en utilisant un guillemet simple supplémentaire (`''`). L’utilisation de guillemets doubles (`"`) génère une erreur. |

#### Exemple

{% raw %}

```yaml
env:
  myNull: ${{ null }}
  myBoolean: ${{ false }}
  myIntegerNumber: ${{ 711 }}
  myFloatNumber: ${{ -9.2 }}
  myHexNumber: ${{ 0xff }}
  myExponentialNumber: ${{ -2.99e-2 }}
  myString: Mona the Octocat
  myStringInBraces: ${{ 'It''s open source!' }}
```

{% endraw %}

## Opérateurs

| Opérateur    | Description |
| ---         | ---         |
| `( )`       | Regroupement logique |
| `[ ]`       | Index
| `.`         | Annulation de référence de propriété |
| `!`         | Not |
| `<`         | Inférieur à |
| `<=`        | Inférieur ou égal à |
| `>`         | Supérieur à |
| `>=`        | Supérieur ou égal à |
| `==`        | Égal à |
| `!=`        | Différent de |
| `&&`        | and |
|  <code>\|\|</code> | ou |

{% data variables.product.prodname_dotcom %} effectue des comparaisons d’égalité faible.

* Si les types ne correspondent pas, {% data variables.product.prodname_dotcom %} impose un type numéral. {% data variables.product.prodname_dotcom %} convertit les types de données en nombre à l’aide des conversions suivantes :

  | Type    | Résultats |
  | ---     | ---    |
  | Null    | `0` |
  | Booléen | `true` retourne `1` <br /> `false` retourne `0` |
  | String  | Analysé depuis n’importe quel format de nombre JSON légal ; sinon `NaN`. <br /> Remarque : une chaîne vide retourne `0`. |
  | Array   | `NaN` |
  | Object  | `NaN` |
* Une comparaison entre un `NaN` et un autre `NaN` n’entraîne pas `true`. Pour plus d’informations, consultez les « [documents Mozilla sur NaN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/NaN) ».
* {% data variables.product.prodname_dotcom %} ignore la casse lors de la comparaison de chaînes.
* Les objets et les tableaux sont considérés comme égaux uniquement lorsqu’ils sont une même instance.

## Fonctions

{% data variables.product.prodname_dotcom %} offre un ensemble de fonctions intégrées que vous pouvez utiliser dans des expressions. Certaines fonctions convertissent les valeurs en chaîne pour effectuer des comparaisons. {% data variables.product.prodname_dotcom %} convertit les types de données en chaîne à l’aide des conversions suivantes :

| Type    | Résultats |
| ---     | ---    |
| Null    | `''` |
| Booléen | `'true'` ou `'false'` |
| Nombre  | Format décimal, exponentiel pour de grands nombres |
| Array   | Les tableaux ne sont pas convertis en chaîne |
| Object  | Les objets ne sont pas convertis en chaîne |

### contains

`contains( search, item )`

Retourne `true` si `search` contient `item`. Si `search` est un tableau, cette fonction retourne `true` si `item` est un élément dans le tableau. Si `search` est une chaîne, cette fonction retourne `true` si l’élément `item` est une sous-chaîne de `search`. Cette fonction ne respecte pas la casse. Convertit les valeurs en chaîne.

#### Exemple utilisant une chaîne

`contains('Hello world', 'llo')` retourne `true`.

#### Exemple utilisant un filtre d’objet

`contains(github.event.issue.labels.*.name, 'bug')` retourne `true` si le problème lié à l’événement a une étiquette « bug ».

Pour plus d’informations, consultez « [Filtres d’objet ](#object-filters) ».

#### Exemple mettant en correspondance un tableau de chaînes

Au lieu d’écrire `github.event_name == "push" || github.event_name == "pull_request"`, vous pouvez utiliser `contains()` avec `fromJson()` pour vérifier si un tableau de chaînes contient un `item`.

Par exemple, `contains(fromJson('["push", "pull_request"]'), github.event_name)` retourne `true` si `github.event_name` est « push » ou « pull_request ».

### startsWith

`startsWith( searchString, searchValue )`

Retourne `true` quand `searchString` commence par `searchValue`. Cette fonction ne respecte pas la casse. Convertit les valeurs en chaîne.

#### Exemple

`startsWith('Hello world', 'He')` retourne `true`.

### endsWith

`endsWith( searchString, searchValue )`

Retourne `true` si `searchString` se termine par `searchValue`. Cette fonction ne respecte pas la casse. Convertit les valeurs en chaîne.

#### Exemple

`endsWith('Hello world', 'ld')` retourne `true`.

### format

`format( string, replaceValue0, replaceValue1, ..., replaceValueN)`

Remplace les valeurs dans la chaîne `string`, par la variable `replaceValueN`. Les variables dans la chaîne `string` sont spécifiées à l’aide de la syntaxe `{N}`, où `N` est un entier. Vous devez spécifier au moins une valeur `replaceValue` et une chaîne `string`. Il n’existe pas de maximum pour le nombre de variables (`replaceValueN`) utilisables. Échappez les accolades à l’aide d’accolades doubles.

#### Exemple

`format('Hello {0} {1} {2}', 'Mona', 'the', 'Octocat')`

Retourne « Hello Mona the Octocat ».

#### Exemple d’échappement d’accolades

{% raw %}
```js
format('{{Hello {0} {1} {2}!}}', 'Mona', 'the', 'Octocat')
```
{% endraw %}

Retourne « {Hello Mona the Octocat!} ».

### join

`join( array, optionalSeparator )`

La valeur pour `array` peut être un tableau ou une chaîne. Toutes les valeurs contenues dans `array` sont concaténées en une chaîne. Si vous fournissez `optionalSeparator`, il est inséré entre les valeurs concaténées. Sinon, le séparateur par défaut `,` est utilisé. Convertit les valeurs en chaîne.

#### Exemple

`join(github.event.issue.labels.*.name, ', ')` peut retourner « bug, help wanted »

### toJSON

`toJSON(value)`

Retourne une représentation JSON d’impression formatée de `value`. Vous pouvez utiliser cette fonction pour déboguer les informations fournies dans les contextes.

#### Exemple

`toJSON(job)` peut retourner `{ "status": "Success" }`

### fromJSON

`fromJSON(value)`

Retourne un objet JSON ou un type de données JSON pour `value`. Vous pouvez utiliser cette fonction pour fournir un objet JSON en tant qu’expression évaluée ou pour convertir des variables d’environnement à partir d’une chaîne.

#### Exemple de retour d’un objet JSON

Ce workflow définit une matrice JSON dans un travail et le transmet au travail suivant à l’aide d’une sortie et de `fromJSON`.

{% raw %}
```yaml
name: build
on: push
jobs:
  job1:
    runs-on: ubuntu-latest
    outputs:
      matrix: ${{ steps.set-matrix.outputs.matrix }}
    steps:
      - id: set-matrix
        run: echo "::set-output name=matrix::{\"include\":[{\"project\":\"foo\",\"config\":\"Debug\"},{\"project\":\"bar\",\"config\":\"Release\"}]}"
  job2:
    needs: job1
    runs-on: ubuntu-latest
    strategy:
      matrix: ${{ fromJSON(needs.job1.outputs.matrix) }}
    steps:
      - run: build
```
{% endraw %}

#### Exemple retournant un type de données JSON

Ce workflow utilise `fromJSON` pour convertir les variables d’environnement d’une chaîne en booléen ou entier.

{% raw %}
```yaml
name: print
on: push
env:
  continue: true
  time: 3
jobs:
  job1:
    runs-on: ubuntu-latest
    steps:
      - continue-on-error: ${{ fromJSON(env.continue) }}
        timeout-minutes: ${{ fromJSON(env.time) }}
        run: echo ...
```
{% endraw %}

### hashFiles

`hashFiles(path)`

Retourne un hachage unique pour l’ensemble des fichiers qui correspondent au modèle `path`. Vous pouvez fournir un modèle `path` unique ou plusieurs modèles `path` séparés par des virgules. L’élément `path` est relatif au répertoire `GITHUB_WORKSPACE` et ne peut inclure que des fichiers à l’intérieur de `GITHUB_WORKSPACE`. Cette fonction calcule un hachage SHA-256 individuel pour chaque fichier correspondant, puis utilise ces hachages pour calculer un hachage SHA-256 final pour l’ensemble de fichiers. Si le modèle `path` ne correspond à aucun fichier, une chaîne vide est retournée. Pour plus d’informations sur SHA-256, consultez « [SHA-2](https://en.wikipedia.org/wiki/SHA-2) ».

Vous pouvez utiliser des caractères de correspondance de modèle pour mettre en correspondance des noms de fichiers. La correspondance de modèle n’est pas sensible à la casse sur Windows. Pour plus d’informations sur les caractères de correspondance de modèle pris en charge, consultez « [Syntaxe de workflow pour {% data variables.product.prodname_actions %}](/actions/using-workflows/workflow-syntax-for-github-actions/#filter-pattern-cheat-sheet) ».

#### Exemple avec un modèle unique

Correspond à n’importe quel fichier `package-lock.json` dans le dépôt.

`hashFiles('**/package-lock.json')`

#### Exemple avec plusieurs modèles

Crée un hachage pour n’importe quels fichiers `package-lock.json` et `Gemfile.lock` dans le dépôt.

`hashFiles('**/package-lock.json', '**/Gemfile.lock')`


{% ifversion fpt or ghes > 3.3 or ghae-issue-5504 or ghec %}
## Fonctions de vérification d’état

Vous pouvez utiliser les fonctions de vérification d’état suivantes en tant qu’expressions dans les conditions `if`. Une vérification d’état par défaut de `success()` est appliquée, sauf si vous incluez l’une de ces fonctions. Pour plus d’informations sur les conditions `if`, consultez « [Syntaxe de workflow pour GitHub Actions](/articles/workflow-syntax-for-github-actions/#jobsjob_idif)» et « [Syntaxe des métadonnées pour les actions composites GitHub](/actions/creating-actions/metadata-syntax-for-github-actions/#runsstepsif)».
{% else %}
## Fonctions de vérification
Vous pouvez utiliser les fonctions de vérification d’état suivantes en tant qu’expressions dans les conditions `if`. Une vérification d’état par défaut de `success()` est appliquée, sauf si vous incluez l’une de ces fonctions. Pour plus d’informations sur les conditions `if`, consultez « [Syntaxe de workflow pour GitHub Actions](/articles/workflow-syntax-for-github-actions/#jobsjob_idif) ».
{% endif %}

### success

Retourne `true` quand aucune des étapes précédentes n’a échoué ou n’a été annulée.

#### Exemple

```yaml
steps:
  ...
  - name: The job has succeeded
    if: {% raw %}${{ success() }}{% endraw %}
```

### toujours

Provoque l’exécution systématique de l’étape et retourne `true`, même lorsqu’elle est annulée. Un travail ou une étape ne s’exécute pas quand un échec critique empêche l’exécution de la tâche. Par exemple, si l’obtention des sources a échoué.

#### Exemple

```yaml
if: {% raw %}${{ always() }}{% endraw %}
```

### annulé

Retourne `true` si le workflow a été annulé.

#### Exemple

```yaml
if: {% raw %}${{ cancelled() }}{% endraw %}
```

### échec

Retourne `true` quand une étape précédente quelconque d’un travail échoue. Si vous avez une chaîne de travaux dépendants, `failure()` retourne `true` si un travail ancêtre quelconque échoue.

#### Exemple

```yaml
steps:
  ...
  - name: The job has failed
    if: {% raw %}${{ failure() }}{% endraw %}
```

#### échec avec conditions

Vous pouvez inclure des conditions supplémentaires pour qu’une étape s’exécute après un échec. Toutefois, vous devez toujours inclure `failure()` pour remplacer la vérification d’état par défaut `success()`, qui s’applique automatiquement aux conditions `if` qui ne contiennent pas de fonction de vérification d’état.

##### Exemple

```yaml
steps:
  ...
  - name: Failing step
    id: demo
    run: exit 1
  - name: The demo step has failed
    if: {% raw %}${{ failure() && steps.demo.conclusion == 'failure' }}{% endraw %}
```

## Filtres d’objets

Vous pouvez utiliser la syntaxe `*` pour appliquer un filtre et sélectionner des éléments correspondants dans une collection.

Par exemple, considérez un tableau d’objets nommé `fruits`.

```json
[
  { "name": "apple", "quantity": 1 },
  { "name": "orange", "quantity": 2 },
  { "name": "pear", "quantity": 1 }
]
```

Le filtre `fruits.*.name` retourne le tableau `[ "apple", "orange", "pear" ]`.

Vous pouvez également utiliser la syntaxe `*` sur un objet. Par exemple, supposons que vous avez un objet nommé `vegetables`.

```json

{
  "scallions":
  {
    "colors": ["green", "white", "red"],
    "ediblePortions": ["roots", "stalks"],
  },
  "beets":
  {
    "colors": ["purple", "red", "gold", "white", "pink"],
    "ediblePortions": ["roots", "stems", "leaves"],
  },
  "artichokes":
  {
    "colors": ["green", "purple", "red", "black"],
    "ediblePortions": ["hearts", "stems", "leaves"],
  },
}
```

Le filtre `vegetables.*.ediblePortions` peut donner pour résultats :

```json

[
  ["roots", "stalks"],
  ["hearts", "stems", "leaves"],
  ["roots", "stems", "leaves"],
]
```

Comme les objets ne conservent pas l’ordre, l’ordre de la sortie ne peut pas être garanti.
