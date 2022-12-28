---
title: Syntaxe des formulaires de problème
intro: 'Vous pouvez définir des types d’entrée, des validations, des personnes responsables par défaut et des étiquettes par défaut pour vos formulaires de problème.'
versions:
  fpt: '*'
  ghec: '*'
topics:
  - Community
ms.openlocfilehash: 7e147868ce370b57c6a7437bc81f7b554f50443b
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/11/2022
ms.locfileid: '145086502'
---
{% data reusables.community.issue-forms-beta %}

## À propos de la syntaxe YAML des formulaires de problème

Vous pouvez créer des formulaires de problème personnalisés en ajoutant un fichier de définition de formulaire YAML au dossier `/.github/ISSUE_TEMPLATE` de votre dépôt. {% data reusables.actions.learn-more-about-yaml %} Vous pouvez définir différents types d’entrée, des validations, des affectations de personnes responsables par défaut et des étiquettes par défaut pour vos formulaires de problème.

Quand un contributeur remplit un formulaire de problème, ses réponses pour chaque entrée sont converties en texte Markdown avant d’être ajoutées au corps d’un problème. Les contributeurs peuvent modifier leurs problèmes créés avec des formulaires de problème. Les autres personnes peuvent interagir avec ces problèmes, comme s’ils avaient été créés via d’autres méthodes.

Les formulaires de problème ne sont pas pris en charge pour les demandes de tirage. Vous pouvez créer des modèles de demande de tirage dans vos dépôts à l’intention des collaborateurs. Pour plus d’informations, consultez « [Création d’un modèle de demande de tirage pour votre dépôt](/communities/using-templates-to-encourage-useful-issues-and-pull-requests/creating-a-pull-request-template-for-your-repository) ».

Cet exemple de fichier config YAML définit un formulaire de problème à l’aide de plusieurs entrées pour signaler un bogue.

{% data reusables.community.issue-forms-sample %}

## Syntaxe de niveau supérieur

Tous les fichiers config des formulaires de problème doivent commencer par les paires clé-valeur `name`, `description` et `body`.

```YAML{:copy}
name:
description:
body:
```

Vous pouvez définir les clés de niveau supérieur suivantes pour chaque formulaire de problème.

| Clé | Description | Obligatoire | Type |
| :-- | :-- | :-- | :-- | :-- |
| `name` | Nom du modèle de formulaire de problème. Doit être unique par rapport à tous les autres modèles, notamment les modèles Markdown. | Obligatoire | String |
| `description` | Description du modèle de formulaire de problème, qui apparaît dans l’interface du sélecteur de modèles. | Obligatoire | String |
| `body` | Définition des types d’entrée dans le formulaire. | Obligatoire | Array |
| `assignees` | Personnes affectées automatiquement aux problèmes créés avec ce modèle. | Facultatif | Tableau ou chaîne délimitée par des virgules |
| `labels` | Étiquettes ajoutées automatiquement aux problèmes créés avec ce modèle. | Facultatif | Tableau ou chaîne délimitée par des virgules |
| `title` | Titre par défaut prérempli dans le formulaire d’envoi du problème. | Facultatif | String |

Pour connaître les types d’entrée disponibles de `body` et leurs syntaxes, consultez « [Syntaxe du schéma de formulaire de {% data variables.product.prodname_dotcom %}](/communities/using-templates-to-encourage-useful-issues-and-pull-requests/syntax-for-githubs-form-schema) ».

## Conversion d’un modèle de problème Markdown en modèle de formulaire de problème YAML

Vous pouvez utiliser les modèles de problème Markdown et YAML dans votre dépôt. Si vous souhaitez convertir un modèle de problème Markdown en modèle de formulaire de problème YAML, vous devez créer un fichier YAML pour définir le formulaire de problème. Vous pouvez transposer manuellement un modèle de problème Markdown existant en formulaire de problème YAML. Pour plus d’informations, consultez « [Configuration des modèles de problème pour votre dépôt](/communities/using-templates-to-encourage-useful-issues-and-pull-requests/configuring-issue-templates-for-your-repository#creating-issue-forms) ».

Si vous souhaitez utiliser le même nom de fichier pour votre formulaire de problème YAML, vous devez supprimer le modèle de problème Markdown quand vous commitez le nouveau fichier dans votre dépôt.

Vous trouverez ci-dessous un exemple de modèle de problème Markdown et le modèle de formulaire de problème YAML correspondant.

### Modèle de problème Markdown

```markdown{:copy}
---
name: 🐞 Bug
about: File a bug/issue
title: '[BUG] <title>'
labels: Bug, Needs Triage
assignees: ''

---

{% raw %}<{% endraw %}!--
Note: Please search to see if an issue already exists for the bug you encountered.
--{% raw %}>{% endraw %}

### Current Behavior:
{% raw %}<{% endraw %}!-- A concise description of what you're experiencing. --{% raw %}>{% endraw %}

### Expected Behavior:
{% raw %}<{% endraw %}!-- A concise description of what you expected to happen. --{% raw %}>{% endraw %}

### Steps To Reproduce:
{% raw %}<{% endraw %}!--
Example: steps to reproduce the behavior:
1. In this environment...
2. With this config...
3. Run '...'
4. See error...
--{% raw %}>{% endraw %}

### Environment:
{% raw %}<{% endraw %}!--
Example:
- OS: Ubuntu 20.04
- Node: 13.14.0
- npm: 7.6.3
--{% raw %}>{% endraw %}

### Anything else:
{% raw %}<{% endraw %}!--
Links? References? Anything that will give us more context about the issue that you are encountering!
--{% raw %}>{% endraw %}
```

### Modèle de formulaire de problème YAML

```yaml{:copy}
name: 🐞 Bug
description: File a bug/issue
title: "[BUG] <title>"
labels: [Bug, Needs Triage]
body:
- type: checkboxes
  attributes:
    label: Is there an existing issue for this?
    description: Please search to see if an issue already exists for the bug you encountered.
    options:
    - label: I have searched the existing issues
      required: true
- type: textarea
  attributes:
    label: Current Behavior
    description: A concise description of what you're experiencing.
  validations:
    required: false
- type: textarea
  attributes:
    label: Expected Behavior
    description: A concise description of what you expected to happen.
  validations:
    required: false
- type: textarea
  attributes:
    label: Steps To Reproduce
    description: Steps to reproduce the behavior.
    placeholder: |
      1. In this environment...
      2. With this config...
      3. Run '...'
      4. See error...
  validations:
    required: false
- type: textarea
  attributes:
    label: Environment
    description: |
      examples:
        - **OS**: Ubuntu 20.04
        - **Node**: 13.14.0
        - **npm**: 7.6.3
    value: |
        - OS:
        - Node:
        - npm:
    render: markdown
  validations:
    required: false
- type: textarea
  attributes:
    label: Anything else?
    description: |
      Links? References? Anything that will give us more context about the issue you are encountering!

      Tip: You can attach images or log files by clicking this area to highlight it and then dragging files in.
  validations:
    required: false
```

## Pour aller plus loin

- [YAML](https://yaml.org/)
- [Erreurs de validation courantes au moment de la création des formulaires de problème](/communities/using-templates-to-encourage-useful-issues-and-pull-requests/common-validation-errors-when-creating-issue-forms)
