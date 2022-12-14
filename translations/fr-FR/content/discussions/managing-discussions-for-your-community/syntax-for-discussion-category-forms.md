---
title: Syntaxe des formulaires de catégorie de discussion
shortTitle: Syntax for discussion category forms
intro: Vous pouvez utiliser la syntaxe YAML pour définir les champs dans vos formulaires de catégorie de discussion.
versions:
  feature: discussion-category-forms
ms.openlocfilehash: 73bb77967d5a7db3452e067c35d567a8279a0cb2
ms.sourcegitcommit: 6185352bc563024d22dee0b257e2775cadd5b797
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 12/09/2022
ms.locfileid: '148193358'
---
{% data reusables.discussions.discussion-category-forms-beta %}

## À propos de la syntaxe YAML pour les formulaires de catégorie de discussion

Vous pouvez créer des formulaires de catégorie de discussion en ajoutant un fichier de définition de formulaire YAML au dossier `/.github/DISCUSSION_TEMPLATE/` de votre dépôt. {% data reusables.actions.learn-more-about-yaml %} 

{% data reusables.discussions.discussion-category-forms-name %}

Pour chaque champ, vous pouvez définir le type d’entrée, la validation et une étiquette par défaut.

Quand un membre de la communauté remplit un formulaire de discussion, ses réponses pour chaque entrée sont converties en texte Markdown avant d’être ajoutées au corps d’une discussion. Les membres de la communauté peuvent modifier leurs discussions qui ont été créées à l’aide d’un formulaire de discussion et d’autres personnes peuvent interagir avec la discussion comme une discussion créée par d’autres méthodes.

Cet exemple de fichier de configuration YAML définit un formulaire de catégorie de discussion général.

{% data reusables.discussions.discussion-category-forms-sample %}

## Syntaxe de niveau supérieur

Le fichier de configuration d’un formulaire de catégorie de discussion doit contenir une clé `body`, et `body` doit contenir au moins 1 champ non-Markdown.

```YAML{:copy}
body:
- type: input
  id: suggestion
  attributes:
    label: Suggestion
    description: "How might we make this project better?"
    placeholder: "Adding a CODE_OF_CONDUCT.md file would be a great idea."
  validations:
    required: true
```

Vous pouvez définir les clés de niveau supérieur suivantes pour chaque formulaire de problème.

| Clé | Description | Obligatoire | Type |
| :-- | :-- | :-- | :-- | :-- |
| `body` | Définition des types d’entrée dans le formulaire de discussion. | Obligatoire | Array |
| `labels` | Étiquettes ajoutées automatiquement aux discussions créées avec ce modèle. | Facultatif | Tableau ou chaîne délimitée par des virgules |
| `title` | Titre par défaut prérempli dans le formulaire d’envoi de la discussion. | Facultatif | String |

Pour ajouter des champs à votre formulaire, incluez un tableau d’éléments de formulaire dans la clé `body`. Pour obtenir la liste des éléments disponibles et leur syntaxe, consultez « [Syntaxe pour le schéma de formulaire de {% data variables.product.prodname_dotcom %}](/communities/using-templates-to-encourage-useful-issues-and-pull-requests/syntax-for-githubs-form-schema) ».
