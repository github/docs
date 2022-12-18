---
title: Erreurs de validation courantes au moment de la création des formulaires de problème
intro: 'Vous pouvez rencontrer certaines de ces erreurs de validation courantes lors de la création, de l’enregistrement ou de l’affichage des formulaires de problème.'
versions:
  fpt: '*'
  ghec: '*'
topics:
  - Community
ms.openlocfilehash: 55eae6e043f82bfbaa49f7af42e23e4cb56f0ee8
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/05/2022
ms.locfileid: '147650340'
---
<!--UI-LINK: We link to individual anchors within this file from the issue template editor when the given YAML error is thrown. Links to and anchors within this file should be preserved or should be updated in github/github if they are changed -->
{% data reusables.community.issue-forms-beta %}

## La clé de niveau supérieur obligatoire `name` est manquante

Le modèle ne contient pas de champ `name`, ce qui signifie que le nommage de votre modèle de problème n’est pas clair quand vous fournissez une liste d’options aux utilisateurs.

### Exemple

```yaml
description: "Thank you for reporting a bug!"
...
```

Vous pouvez corriger l’erreur en ajoutant `name` en tant que clé.

```yaml
name: "Bug report"
description: "Thank you for reporting a bug!"
...
```

## `key` doit être une chaîne

Ce message d’erreur signifie qu’une clé autorisée a été fournie, mais que sa valeur ne peut pas être analysée, car le type de données n’est pas pris en charge.

### Exemple

`description`, ci-dessous, est analysé en tant que valeur booléenne, mais il doit s’agir d’une chaîne.

```yaml
name: "Bug report"
description: true
...
```

Vous pouvez corriger l’erreur en fournissant une chaîne en tant que valeur. Les chaînes doivent éventuellement être placées entre des guillemets doubles pour être correctement analysées. Par exemple, les chaînes qui contiennent `'` doivent être placées entre des guillemets doubles.

```yaml
name: "Bug report"
description: "true"
...
```

Les chaînes vides, ou les chaînes composées uniquement d’espaces blancs, ne sont pas non plus autorisées quand le champ attend une chaîne.

```yaml
name: ""
description: "File a bug report"
assignees: "      "
...
```

Vous pouvez corriger l’erreur en remplaçant la valeur par une chaîne non vide. Si le champ n’est pas obligatoire, vous devez supprimer la paire clé-valeur.

```yaml
name: "Bug Report"
description: "File a bug report"
...
```

## `input` n’est pas une clé autorisée

Une clé inattendue a été fournie au niveau supérieur du modèle. Pour plus d’informations sur les clés de niveau supérieur prises en charge, consultez « [Syntaxe des formulaires de problème](/communities/using-templates-to-encourage-useful-issues-and-pull-requests/syntax-for-issue-forms#top-level-syntax) ».

### Exemple

```yaml
name: "Bug report"
hello: world
...
```

Vous pouvez corriger l’erreur en supprimant les clés inattendues.

```yaml
name: "Bug report"
...
```

## Clés interdites

Le YAML analyse certaines chaînes en tant que valeurs `Boolean`. Pour éviter cela, nous avons explicitement interdit l’utilisation des clés suivantes :

`y`, `Y`, `yes`, `Yes`, `YES`, `n`, `N`, `no`, `No`, `NO`, `true`, `True`, `TRUE`, `false`, `False`, `FALSE`, `on`, `On`, `ON`, `off`, `Off`, `OFF`

Vous pouvez corriger l’erreur en supprimant les clés interdites.

## Le corps doit contenir au moins un champ non Markdown

Les formulaires de problème doivent accepter les entrées utilisateur, ce qui signifie qu’au moins un de leurs champs doit contenir un champ d’entrée utilisateur. Un élément `markdown` représente du texte statique. Un tableau `body` ne peut donc pas contenir uniquement des éléments `markdown`.

### Exemple

```yaml
name: "Bug report"
body:
- type: markdown
  attributes:
    value: "Bugs are the worst!"
```

Vous pouvez corriger l’erreur en ajoutant des éléments non Markdown qui acceptent une entrée utilisateur.

```yaml
name: "Bug report"
body:
- type: markdown
  attributes:
    value: "Bugs are the worst!"
- type: textarea
  attributes:
    label: "What's wrong?"
```

## Le corps doit avoir des ID uniques

Si vous utilisez les attributs `id` pour distinguer plusieurs éléments, chaque attribut `id` doit être unique.

### Exemple

```yaml
name: "Bug report"
body:
- type: input
  id: name
  attributes:
    label: First name
- type: input
  id: name
  attributes:
    label: Last name
```

Vous pouvez corriger l’erreur en changeant le `id` de l’une de ces entrées pour que chaque champ `input` ait un attribut `id` unique.

```yaml
name: "Bug report"
body:
- type: input
  id: name
  attributes:
    label: First name
- type: input
  id: surname
  attributes:
    label: Last name
```

## Le corps doit avoir des étiquettes uniques

Quand plusieurs éléments `body` acceptent une entrée utilisateur, l’attribut `label` de chaque champ d’entrée utilisateur doit être unique.

### Exemple

```yaml
name: "Bug report"
body:
- type: textarea
  attributes:
    label: Name
- type: textarea
  attributes:
    label: Name
```

Vous pouvez corriger l’erreur en changeant l’attribut `label` de l’un des champs d’entrée pour avoir la garantie que chaque `label` est unique.

```yaml
name: "Bug report"
body:
- type: textarea
  attributes:
    label: Name
- type: textarea
  attributes:
    label: Operating System
```

Les champs d’entrée peuvent également être différenciés par leur attribut `id`. Si des attributs `label` en double sont obligatoires, vous pouvez fournir au moins un `id` pour différencier deux éléments ayant des étiquettes identiques.

```yaml
name: "Bug report"
body:
- type: textarea
  id: name_1
  attributes:
    label: Name
- type: textarea
  id: name_2
  attributes:
    label: Name
```

Les attributs `id` ne sont pas visibles dans le corps du problème. Si vous souhaitez distinguer les champs dans le problème résultant, vous devez utiliser des attributs `label` distincts.


## Étiquettes trop similaires

Des étiquettes similaires peuvent être traitées en tant que références identiques. Si aucun attribut `id` n’est fourni pour `input`, l’attribut `label` est utilisé pour générer une référence au champ `input`. Pour ce faire, nous traitons `label` en tirant parti de la méthode [parameterize](https://apidock.com/rails/ActiveSupport/Inflector/parameterize) en Rails. Dans certains cas, deux étiquettes distinctes peuvent être traitées en utilisant la même chaîne paramétrisée.

### Exemple

```yaml
name: "Bug report"
body:
- type: input
  attributes:
    label: Name?
- type: input
  id: name
  attributes:
    label: Name???????
```

Vous pouvez corriger l’erreur en ajoutant au moins un caractère alphanumérique de différenciation, `-` ou `_`, à l’une des étiquettes conflictuelles.

```yaml
name: "Bug report"
body:
- type: input
  attributes:
    label: Name?
- type: input
  attributes:
    label: Your name
```

Vous pouvez également corriger l’erreur en attribuant à l’une des étiquettes en conflit un `id` unique.

```yaml
name: "Bug report"
body:
- type: input
  attributes:
    label: Name?
- type: input
  id: your-name
  attributes:
    label: Name???????
```

## Les cases à cocher doivent avoir des étiquettes uniques

Quand un élément `checkboxes` est présent, chacune de ses étiquettes imbriquées doit être unique parmi ses pairs ainsi que parmi les autres types d’entrée.

### Exemple

```yaml
name: "Bug report"
body:
- type: textarea
  attributes:
    label: Name
- type: checkboxes
  attributes:
    options:
    - label: Name
```

Vous pouvez corriger l’erreur en changeant l’attribut `label` pour l’une de ces entrées.

```yaml
name: "Bug report"
body:
- type: textarea
  attributes:
    label: Name
- type: checkboxes
  attributes:
    options:
    - label: Your name
```

Vous pouvez également fournir un `id` à tous les éléments de niveau supérieur en conflit. Les éléments de case à cocher imbriqués ne prennent pas en charge l’attribut `id`.

```yaml
name: "Bug report"
body:
- type: textarea
  id: name_1
  attributes:
    label: Name
- type: checkboxes
  attributes:
    options:
    - label: Name
```

Les attributs `id` ne sont pas visibles dans le corps du problème. Si vous souhaitez distinguer les champs dans le problème résultant, vous devez utiliser des attributs `label` distincts.

## Body[i] : le type de clé obligatoire est manquant

Chaque bloc de corps doit contenir la clé `type`.

Dans les erreurs relatives à `body`, `body[i]` est indiqué en premier, où `i` représente l’index de base zéro du bloc de corps contenant l’erreur. Par exemple, `body[0]` nous indique que l’erreur a été causée par le premier bloc de la liste `body`.

### Exemple

```yaml
body:
- attributes:
    value: "Thanks for taking the time to fill out this bug! If you need real-time help, join us on Discord."
```

Vous pouvez corriger l’erreur en ajoutant la clé `type` avec un type d’entrée valide en tant que valeur. Pour connaître les types d’entrée disponibles de `body` et leurs syntaxes, consultez « [Syntaxe du schéma de formulaire de {% data variables.product.prodname_dotcom %}](/communities/using-templates-to-encourage-useful-issues-and-pull-requests/syntax-for-githubs-form-schema#keys) ».

```yaml
body:
- type: markdown
  attributes:
    value: "Thanks for taking the time to fill out this bug! If you need real-time help, join us on Discord."
```

## Body[i] : `x` n’est pas un type d’entrée valide

L’un des blocs de corps contient une valeur de type qui ne fait pas partie des [types autorisés](/communities/using-templates-to-encourage-useful-issues-and-pull-requests/syntax-for-githubs-form-schema#keys).

Dans les erreurs relatives à `body`, `body[i]` est indiqué en premier, où `i` représente l’index du bloc de corps contenant l’erreur. Par exemple, `body[0]` nous indique que l’erreur a été causée par le premier bloc de la liste `body`.

### Exemple

```yaml
body:
- type: x
  attributes:
    value: "Thanks for taking the time to fill out this bug! If you need real-time help, join us on Discord."
```

Vous pouvez corriger l’erreur en remplaçant `x` par l’un des types valides.

```yaml
body:
- type: markdown
  attributes:
    value: "Thanks for taking the time to fill out this bug! If you need real-time help, join us on Discord."
```

## Body[i] : la clé d’attribut obligatoire `value` est manquante

L’un des attributs obligatoires `value` n’a pas été fourni. L’erreur se produit quand un bloc n’a pas de clé `attributes`, ou qu’il n’a pas de clé `value` sous la clé `attributes`.

Dans les erreurs relatives à `body`, `body[i]` est indiqué en premier, où `i` représente l’index du bloc de corps contenant l’erreur. Par exemple, `body[0]` nous indique que l’erreur a été causée par le premier bloc de la liste `body`.

### Exemple

```yaml
body:
- type: markdown
  attributes:
    value: "Thanks for taking the time to fill out this bug! If you need real-time help, join us on Discord."
- type: markdown
```

Vous pouvez corriger l’erreur dans cet exemple en ajoutant `value` en tant que clé sous `attributes` dans le deuxième élément de liste de `body`.

```yaml
body:
- type: markdown
  attributes:
    value: "Thanks for taking the time to fill out this bug! If you need real-time help, join us on Discord."
- type: markdown
  attributes:
    value: "This is working now!"
```

## Body[i] : l’étiquette doit être une chaîne

Dans son bloc `attributes`, une valeur a un type de données incorrect.

Dans les erreurs relatives à `body`, `body[i]` est indiqué en premier, où `i` représente l’index du bloc de corps contenant l’erreur. Par exemple, `body[0]` nous indique que l’erreur a été causée par le premier bloc de la liste `body`.

### Exemple

`label`, ci-dessous, est analysé en tant que valeur booléenne, mais il doit s’agir d’une chaîne.


```yaml
body:
- type: markdown
  attributes:
    value: "Thanks for taking the time to fill out this bug! If you need real-time help, join us on Discord."
- type: textarea
  attributes:
    label: Bug Description
- type: textarea
  attributes:
    label: true
```

Vous pouvez corriger l’erreur en fournissant une valeur de chaîne pour `label`. Si vous souhaitez utiliser une valeur `label`, qui peut être analysée sous forme de valeur booléenne, entière ou décimale, vous devez la placer entre guillemets. Par exemple, `"true"` ou `"1.3"` au lieu de `true` ou `1.3`.

```yaml
- type: markdown
  attributes:
    value: "Thanks for taking the time to fill out this bug! If you need real-time help, join us on Discord."
- type: textarea
  attributes:
    label: Bug Description
- type: textarea
  attributes:
    label: Environment Details
```

Les chaînes vides, ou les chaînes composées uniquement d’espaces blancs, ne sont pas autorisées quand un attribut attend une chaîne. Par exemple, `""` ou `"     "` ne sont pas autorisés.

Si l’attribut est obligatoire, la valeur doit être une chaîne non vide. Si le champ n’est pas obligatoire, vous devez supprimer la paire clé-valeur.

```yaml
body:
- type: input
  attributes:
    label: "Name"
```

## Body[i] : `id` peut contenir uniquement des chiffres, des lettres, -, _

Les attributs `id` peuvent contenir uniquement des caractères alphanumériques, `-` et `_`. Votre modèle peut inclure des caractères non autorisés, par exemple des espaces blancs, dans `id`.

Dans les erreurs relatives à `body`, `body[i]` est indiqué en premier, où `i` représente l’index du bloc de corps contenant l’erreur. Par exemple, `body[0]` nous indique que l’erreur a été causée par le premier bloc de la liste `body`.

### Exemple

```yaml
name: "Bug report"
body:
- type: input
  id: first name
  attributes:
    label: First name
```

Vous pouvez corriger l’erreur en vérifiant que les espaces blancs et autres caractères non autorisés sont supprimés des valeurs `id`.

```yaml
name: "Bug report"
body:
- type: input
  id: first-name
  attributes:
    label: First name
```

## Body[i] : `x` n’est pas une clé autorisée

Une clé inattendue, `x`, a été fournie au même niveau de mise en retrait que `type` et `attributes`.

Dans les erreurs relatives à `body`, `body[i]` est indiqué en premier, où `i` représente l’index du bloc de corps contenant l’erreur. Par exemple, `body[0]` nous indique que l’erreur a été causée par le premier bloc de la liste `body`.

### Exemple

```yaml
body:
- type: markdown
  x: woof
  attributes:
    value: "Thanks for taking the time to fill out this bug! If you need real-time help, join us on Discord."
```

Vous pouvez corriger l’erreur en supprimant les clés supplémentaires et en utilisant uniquement `type`, `attributes` et `id`.

```yaml
body:
- type: markdown
  attributes:
    value: "Thanks for taking the time to fill out this bug! If you need real-time help, join us on Discord."
```

## Body[i] : `label` contient un mot interdit

Pour réduire le risque que des utilisateurs postent publiquement des informations privées et des informations d’identification dans Problèmes GitHub, certains mots couramment utilisés par les attaquants ne sont pas autorisés dans le `label` des éléments input ou textarea.

Dans les erreurs relatives à `body`, `body[i]` est indiqué en premier, où `i` représente l’index du bloc de corps contenant l’erreur. Par exemple, `body[0]` nous indique que l’erreur a été causée par le premier bloc de la liste `body`.

### Exemple

```yaml
body:
- type: markdown
  attributes:
    value: Hello world!
- type: input
  attributes:
    label: Password
```

Vous pouvez corriger l’erreur en supprimant les termes tels que « mot de passe » de tous les champs `label`.

```yaml
body:
- type: markdown
  attributes:
    value: Hello world!
- type: input
  attributes:
    label: Username
```

## Body[i] : `x` n’est pas un attribut autorisé

Une clé non valide a été fournie dans un bloc `attributes`.

Dans les erreurs relatives à `body`, `body[i]` est indiqué en premier, où `i` représente l’index du bloc de corps contenant l’erreur. Par exemple, `body[0]` nous indique que l’erreur a été causée par le premier bloc de la liste `body`.

### Exemple

```yaml
body:
- type: markdown
  attributes:
    x: "a random key!"
    value: "Thanks for taking the time to fill out this bug!"
```

Vous pouvez corriger l’erreur en supprimant les clés supplémentaires et en utilisant uniquement les attributs autorisés.

```yaml
body:
- type: markdown
  attributes:
    value: "Thanks for taking the time to fill out this bug!"
```

## Body[i] : `options` doit être unique

Pour les types d’entrée liés aux cases à cocher et aux listes déroulantes, les choix définis dans le tableau `options` doivent être uniques.

Dans les erreurs relatives à `body`, `body[i]` est indiqué en premier, où `i` représente l’index du bloc de corps contenant l’erreur. Par exemple, `body[0]` nous indique que l’erreur a été causée par le premier bloc de la liste `body`.

### Exemple

```yaml
body:
- type: dropdown
  attributes:
    label: Favorite dessert
    options:
      - ice cream
      - ice cream
      - pie
```

Vous pouvez corriger l’erreur en vérifiant qu’il n’existe aucun choix en double dans le tableau `options`.

```yaml
body:
- type: dropdown
  attributes:
    label: Favorite dessert
    options:
      - ice cream
      - pie
```

## Body[i] : `options` ne doit pas inclure le mot réservé none

« None » est un mot réservé dans un ensemble `options`, car il permet d’indiquer un non-choix quand `dropdown` n’est pas nécessaire.

Dans les erreurs relatives à `body`, `body[i]` est indiqué en premier, où `i` représente l’index du bloc de corps contenant l’erreur. Par exemple, `body[0]` nous indique que l’erreur a été causée par le premier bloc de la liste `body`.

### Exemple

```yaml
body:
- type: dropdown
  attributes:
    label: What types of pie do you like?
    options:
      - Steak & Ale
      - Chicken & Leek
      - None
  validations:
    required: true
```

Vous pouvez corriger l’erreur en supprimant « None » en tant qu’option. Si vous souhaitez qu’un contributeur puisse indiquer qu’il n’aime aucun de ces types de tourte, vous pouvez également supprimer la validation `required`.

```yaml
body:
- type: dropdown
  attributes:
    label: What types of pie do you like?
    options:
      - Steak & Ale
      - Chicken & Leek
```

Dans cet exemple, « None » est rempli automatiquement en tant qu’option sélectionnable.

## Body[i] : `options` ne doit pas inclure de valeurs booléennes. Placez les valeurs telles que « yes » et « true » entre guillemets

Un certain nombre de mots anglais sont traités en tant que valeurs booléennes par l’analyseur YAML, sauf s’ils sont placés entre guillemets. Pour les `options` de la liste déroulante, tous les éléments doivent être des chaînes et non des valeurs booléennes.

Dans les erreurs relatives à `body`, `body[i]` est indiqué en premier, où `i` représente l’index du bloc de corps contenant l’erreur. Par exemple, `body[0]` nous indique que l’erreur a été causée par le premier bloc de la liste `body`.

### Exemple

```yaml
body:
- type: dropdown
  attributes:
    label: Do you like pie?
    options:
      - Yes
      - No
      - Maybe
```

Vous pouvez corriger l’erreur en plaçant chaque option incriminée entre guillemets, pour éviter qu’elle ne soit traitée en tant que valeur booléenne.

```yaml
body:
- type: dropdown
  attributes:
    label: Do you like pie?
    options:
      - "Yes"
      - "No"
      - Maybe
```

## Le corps ne peut pas être vide

La paire `key:value` du corps de modèle ne peut pas être vide. Pour plus d’informations sur les clés de niveau supérieur nécessaires, consultez « [Syntaxe des formulaires de problème](/communities/using-templates-to-encourage-useful-issues-and-pull-requests/syntax-for-issue-forms#top-level-syntax) ».

Vous pouvez corriger l’erreur en ajoutant la section `body:`.

### Exemple

```yaml
name: Support Request
description: Something went wrong and you need help?
---
body:
- type: textarea
  attributes:
    label: "What's wrong?"
```

Dans cet exemple, l’erreur peut être corrigée en supprimant le séparateur de document (`---`) entre les en-têtes et la section `body`.

```yaml
name: Support Request
description: Something went wrong and you need help?

body:
- type: textarea
  attributes:
    label: "What's wrong?"
```

## Pour aller plus loin

- [YAML](https://yaml.org/)
- [Syntaxe des formulaires de problème](/communities/using-templates-to-encourage-useful-issues-and-pull-requests/syntax-for-issue-forms)
