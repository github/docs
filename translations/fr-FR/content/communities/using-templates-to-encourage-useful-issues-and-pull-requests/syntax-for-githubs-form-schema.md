---
title: Syntaxe du schéma de formulaire de GitHub
intro: 'Vous pouvez utiliser le schéma de formulaire de {% data variables.product.company_short %} afin de configurer les formulaires pour les fonctionnalités prises en charge.'
versions:
  fpt: '*'
  ghec: '*'
miniTocMaxHeadingLevel: 3
topics:
  - Community
ms.openlocfilehash: 2a329c7c0a7f1943f7515059c3f376fa36ea29b1
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/05/2022
ms.locfileid: '145105382'
---
{% note %}

**Remarque :** Le schéma de formulaire de {% data variables.product.company_short %} est en version bêta, et peut être amené à changer.

{% endnote %}

## À propos du schéma de formulaire de {% data variables.product.company_short %}

Vous pouvez utiliser le schéma de formulaire de {% data variables.product.company_short %} afin de configurer les formulaires pour les fonctionnalités prises en charge. Pour plus d’informations, consultez « [Configuration des modèles de problème pour votre dépôt](/communities/using-templates-to-encourage-useful-issues-and-pull-requests/configuring-issue-templates-for-your-repository#creating-issue-forms) ».

Un formulaire est un ensemble d’éléments permettant de demander une entrée utilisateur. Vous pouvez configurer un formulaire en créant une définition de formulaire YAML, qui est un tableau d’éléments de formulaire. Chaque élément de formulaire est un ensemble de paires clé-valeur qui déterminent le type de l’élément, les propriétés de l’élément ainsi que les contraintes à appliquer à l’élément. Pour certaines clés, la valeur est un autre ensemble de paires clé-valeur.

Par exemple, la définition de formulaire suivante comprend quatre éléments de formulaire : une zone de texte pour indiquer le système d’exploitation de l’utilisateur, un menu déroulant pour choisir la version logicielle exécutée par l’utilisateur, une case à cocher pour accuser réception du code de conduite et un message en Markdown pour remercier l’utilisateur d’avoir rempli le formulaire.

```yaml{:copy}
- type: textarea
  attributes:
    label: Operating System
    description: What operating system are you using?
    placeholder: Example: macOS Big Sur
    value: operating system
  validations:
    required: true
- type: dropdown
  attributes:
    label: Version
    description: What version of our software are you running?
    multiple: false
    options:
      - label: 1.0.2 (Default)
      - label: 1.0.3 (Edge)
  validations:
    required: true
- type: checkboxes
  attributes:
    label: Code of Conduct
    description: The Code of Conduct helps create a safe space for everyone. We require
      that everyone agrees to it.
    options:
      - label: I agree to follow this project's [Code of Conduct](link/to/coc)
        required: true
- type: markdown
  attributes:
    value: "Thanks for completing our form!"
```

## Keys

Pour chaque élément de formulaire, vous pouvez définir les clés suivantes.

| Clé | Description | Obligatoire | Type | Default | Valeurs valides |
| --- | ----------- | -------- | ---- | ------- | ------- |
| `type` | Type d’élément à définir. | Obligatoire | String | {% octicon "dash" aria-label="The dash icon" %} | <ul><li>`checkboxes`</li><li>`dropdown`</li><li>`input`</li><li>`markdown`</li><li>`textarea`</li></ul> |
| `id` | Identificateur de l’élément, sauf quand `type` a la valeur `markdown`. {% data reusables.form-schema.id-must-be-unique %} S’il est fourni, `id` est l’identificateur canonique du champ dans le préremplissage des paramètres de requête d’URL. | Facultatif | String | {% octicon "dash" aria-label="The dash icon" %} | {% octicon "dash" aria-label="The dash icon" %} |
| `attributes` | Ensemble de paires clé-valeur qui définissent les propriétés de l’élément.  | Obligatoire | Hachage | {% octicon "dash" aria-label="The dash icon" %} | {% octicon "dash" aria-label="The dash icon" %} |
| `validations` | Ensemble de paires clé-valeur qui définissent des contraintes sur l’élément. | Facultatif | Hachage | {% octicon "dash" aria-label="The dash icon" %} | {% octicon "dash" aria-label="The dash icon" %} |

Vous pouvez choisir l’un des types d’élément de formulaire suivants. Chaque type a des attributs et des validations uniques.

| Type | Description |
| ---- | ----------- |
| [`markdown`](#markdown) | Texte au format Markdown affiché dans le formulaire, qui permet de fournir un contexte supplémentaire à l’utilisateur mais qui **n’est pas envoyé**. |
| [`textarea`](#textarea) | Champ de texte multiligne. |
| [`input`](#input) | Champ de texte d’une seule ligne. |
| [`dropdown`](#dropdown) | Menu déroulant. |
| [`checkboxes`](#checkboxes) | Ensemble de cases à cocher. |

### `markdown`

Vous pouvez utiliser un élément `markdown` pour afficher du texte au format Markdown dans votre formulaire afin de fournir un contexte supplémentaire à l’utilisateur, mais qui n’est pas envoyé.

#### Attributs

{% data reusables.form-schema.attributes-intro %}

| Clé | Description | Obligatoire | Type | Default | Valeurs valides |
| --- | ----------- | -------- | ---- | ------- | ------- |
| `value` | Texte affiché. La mise en forme en Markdown est prise en charge. | Obligatoire | String | {% octicon "dash" aria-label="The dash icon" %} | {% octicon "dash" aria-label="The dash icon" %} |

{% tip %}

**Conseils** : Le traitement YAML interprète le symbole du mot-dièse en tant que commentaire. Pour insérer des en-têtes Markdown, placez votre texte entre guillemets.

Pour du texte multiligne, vous pouvez utiliser l’opérateur représenté par la barre verticale.

{% endtip %}

#### Exemple

```YAML{:copy}
body:
- type: markdown
  attributes:
    value: "## Thank you for contributing to our project!"
- type: markdown
  attributes:
    value: |
      Thanks for taking the time to fill out this bug report.
```

### `textarea`

Vous pouvez utiliser un élément `textarea` pour ajouter un champ de texte multiligne à votre formulaire. Les contributeurs peuvent également joindre des fichiers dans les champs `textarea`.

#### Attributs

{% data reusables.form-schema.attributes-intro %}

| Clé | Description | Obligatoire | Type | Default | Valeurs valides |
| --- | ----------- | -------- | ---- | ------- | ------- |
| `label` | Brève description de l’entrée utilisateur attendue, qui s’affiche également dans le formulaire. | Obligatoire | String | {% octicon "dash" aria-label="The dash icon" %} | {% octicon "dash" aria-label="The dash icon" %} |
| `description` | Description de la zone de texte, qui permet de fournir un contexte ou un conseil d’aide, et qui s’affiche dans le formulaire. | Facultatif | String | Chaîne vide | {% octicon "dash" aria-label="The dash icon" %} |
| `placeholder` | Espace réservé semi-opaque qui s’affiche dans la zone de texte quand elle est vide. | Facultatif | String | Chaîne vide | {% octicon "dash" aria-label="The dash icon" %} |
| `value` | Texte prérempli dans la zone de texte. | Facultatif | String | {% octicon "dash" aria-label="The dash icon" %} | {% octicon "dash" aria-label="The dash icon" %} |
| `render` | Si une valeur est fournie, le texte envoyé est mis en forme dans un bloc de code. Quand cette clé est fournie, la zone de texte ne se développe pas pour les pièces jointes ou la modification en Markdown. | Facultatif | String | {% octicon "dash" aria-label="The dash icon" %} | Langages connus de {% data variables.product.prodname_dotcom %}. Pour plus d’informations, consultez le [fichier YAML des langages](https://github.com/github/linguist/blob/master/lib/linguist/languages.yml). |

#### Validations

{% data reusables.form-schema.validations-intro %}

| Clé | Description | Obligatoire | Type | Default | Valeurs valides |
| --- | ----------- | -------- | ---- | ------- | ------- |
{% data reusables.form-schema.required-key %}

#### Exemple

```YAML{:copy}
body:
- type: textarea
  id: repro
  attributes:
    label: Reproduction steps
    description: "How do you trigger this bug? Please walk us through it step by step."
    value: |
      1.
      2.
      3.
      ...
    render: bash
  validations:
    required: true
```

### `input`

Vous pouvez utiliser un élément `input` pour ajouter un champ de texte d’une seule ligne à votre formulaire.

#### Attributs

{% data reusables.form-schema.attributes-intro %}

| Clé | Description | Obligatoire | Type | Default | Valeurs valides |
| --- | ----------- | -------- | ---- | ------- | ------- |
| `label` | Brève description de l’entrée utilisateur attendue, qui s’affiche également dans le formulaire. | Obligatoire | String | {% octicon "dash" aria-label="The dash icon" %} | {% octicon "dash" aria-label="The dash icon" %} |
| `description` | Description du champ, qui permet de fournir un contexte ou un conseil d’aide, et qui s’affiche dans le formulaire. | Facultatif | String | Chaîne vide | {% octicon "dash" aria-label="The dash icon" %} |
| `placeholder` | Espace réservé semi-transparent qui s’affiche dans le champ quand il est vide. | Facultatif | String | Chaîne vide | {% octicon "dash" aria-label="The dash icon" %} |
| `value` | Texte prérempli dans le champ. | Facultatif | String | {% octicon "dash" aria-label="The dash icon" %} | {% octicon "dash" aria-label="The dash icon" %} |

#### Validations

{% data reusables.form-schema.validations-intro %}

| Clé | Description | Obligatoire | Type | Default | Valeurs valides |
| --- | ----------- | -------- | ---- | ------- | ------- |
{% data reusables.form-schema.required-key %}

#### Exemple

```YAML{:copy}
body:
- type: input
  id: prevalence
  attributes:
    label: Bug prevalence
    description: "How often do you or others encounter this bug?"
    placeholder: "Example: Whenever I visit the personal account page (1-2 times a week)"
  validations:
    required: true
```

### `dropdown`

Vous pouvez utiliser un élément `dropdown` pour ajouter un menu déroulant dans votre formulaire.

#### Attributs

{% data reusables.form-schema.attributes-intro %}

| Clé | Description | Obligatoire | Type | Default | Valeurs valides |
| --- | ----------- | -------- | ---- | ------- | ------- |
| `label` | Brève description de l’entrée utilisateur attendue, qui s’affiche dans le formulaire. | Obligatoire | String | {% octicon "dash" aria-label="The dash icon" %} | {% octicon "dash" aria-label="The dash icon" %} |
| `description` | Description du menu déroulant, qui permet de fournir un contexte ou un conseil d’aide supplémentaire, et qui s’affiche dans le formulaire. | Facultatif | String | Chaîne vide | {% octicon "dash" aria-label="The dash icon" %} |
| `multiple` | Détermine si l’utilisateur peut sélectionner plusieurs options. | Facultatif | Booléen | false | {% octicon "dash" aria-label="The dash icon" %} |
| `options` | Tableau d’options proposées à l’utilisateur. Ne peut pas être vide. Tous les choix doivent être distincts. | Obligatoire | Tableau de chaînes | {% octicon "dash" aria-label="The dash icon" %} | {% octicon "dash" aria-label="The dash icon" %} |

#### Validations

{% data reusables.form-schema.validations-intro %}

| Clé | Description | Obligatoire | Type | Default | Valeurs valides |
| --- | ----------- | -------- | ---- | ------- | ------- |
{% data reusables.form-schema.required-key %}

#### Exemple

```YAML{:copy}
body:
- type: dropdown
  id: download
  attributes:
    label: How did you download the software?
    options:
      - Homebrew
      - MacPorts
      - apt-get
      - Built from source
  validations:
    required: true
```

### `checkboxes`

Vous pouvez utiliser l’élément `checkboxes` pour ajouter un ensemble de cases à cocher à votre formulaire.

#### Attributs

{% data reusables.form-schema.attributes-intro %}

| Clé | Description | Obligatoire | Type | Default | Valeurs valides |
| --- | ----------- | -------- | ---- | ------- | ------- |
| `label` | Brève description de l’entrée utilisateur attendue, qui s’affiche dans le formulaire. | Obligatoire | String | {% octicon "dash" aria-label="The dash icon" %} | {% octicon "dash" aria-label="The dash icon" %} |
| `description` | Description de l’ensemble des cases à cocher, qui s’affiche dans le formulaire. Prend en charge la mise en forme en Markdown. | Facultatif | String | Chaîne vide | {% octicon "dash" aria-label="The dash icon" %} |
| `options` | Tableau de cases à cocher que l’utilisateur peut sélectionner. Pour la syntaxe, consultez les informations ci-dessous. | Obligatoire | Array | {% octicon "dash" aria-label="The dash icon" %} | {% octicon "dash" aria-label="The dash icon" %} |

{% data reusables.form-schema.options-syntax %} {% data reusables.form-schema.required-key %}

#### Exemple

```YAML{:copy}
body:
- type: checkboxes
  id: operating-systems
  attributes:
    label: Which operating systems have you used?
    description: You may select more than one.
    options:
      - label: macOS
      - label: Windows
      - label: Linux
```

## Pour aller plus loin

- [YAML](https://yaml.org)
