---
title: Créer des formulaires de catégorie de discussion
shortTitle: Create discussion category forms
intro: Vous pouvez personnaliser les modèles que les membres de la communauté peuvent utiliser pour ouvrir de nouvelles discussions dans votre dépôt.
versions:
  feature: discussion-category-forms
ms.openlocfilehash: f87bd6369bcb4f1b6e2e47fe11cd61626b1fbe7d
ms.sourcegitcommit: 6185352bc563024d22dee0b257e2775cadd5b797
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 12/09/2022
ms.locfileid: '148193318'
---
{% data reusables.discussions.discussion-category-forms-beta %}

## À propos des formulaires de catégorie de discussion

Vous pouvez encourager les membres de la communauté à inclure des informations spécifiques et structurées dans leurs discussions en utilisant des formulaires de discussion dans votre dépôt. Avec les formulaires de catégorie de discussion, vous pouvez créer des modèles de discussion qui ont des champs de formulaire web personnalisables. Les formulaires de discussion sont écrits en YAML à l’aide du schéma de formulaire {% data variables.product.prodname_dotcom %}. Pour plus d’informations, consultez « [Syntaxe du schéma de formulaire de {% data variables.product.prodname_dotcom %}](/communities/using-templates-to-encourage-useful-issues-and-pull-requests/syntax-for-githubs-form-schema) ». 

{% data reusables.actions.learn-more-about-yaml %}

Pour utiliser un formulaire de catégorie de discussion dans votre dépôt, vous devez créer un fichier et l’ajouter au dossier `/.github/DISCUSSION_TEMPLATE/` de votre dépôt. 

Vous pouvez également créer des formulaires de catégorie de discussion pour votre organisation. Pour plus d’informations, consultez « [Création d’un fichier d’intégrité de la communauté par défaut](/communities/setting-up-your-project-for-healthy-contributions/creating-a-default-community-health-file) ».

Les formulaires de catégorie de discussion ne sont pas pris en charge pour les sondages. Pour plus d’informations sur les sondages, consultez « [À propos des sondages](/discussions/collaborating-with-your-community-using-discussions/about-discussions#about-polls) ».

Voici la version affichée du formulaire de problème.

  ![Capture d’écran d’un formulaire de catégorie de discussion restitué](/assets/images/help/discussions/discussion-category-form-sample.png)

## Créer des formulaires de catégorie de discussion

Les personnes disposant d’un accès en écriture à un dépôt peuvent créer un formulaire de catégorie de discussion. 

1. Accédez au dépôt dans lequel vous souhaitez créer un formulaire de catégorie de discussion. 
2. Dans votre dépôt, créez un fichier appelé `/.github/DISCUSSION_TEMPLATE/FORM-NAME.yml`, en remplaçant `FORM-NAME` par le nom de votre formulaire de catégorie de discussion. {% data reusables.discussions.discussion-category-forms-name %} Pour plus d’informations sur la création de fichiers sur GitHub, consultez « [Création de fichiers](/github/managing-files-in-a-repository/creating-new-files) ».
3. Dans le corps du nouveau fichier, tapez le contenu de votre formulaire de catégorie de discussion. Pour plus d’informations, consultez « [Syntaxe pour les formulaires de catégorie de discussion](/discussions/managing-discussions-for-your-community/syntax-for-discussion-category-forms) ».
4. Commitez votre fichier dans la branche par défaut de votre dépôt. Pour plus d’informations, consultez « [Création de fichiers](/github/managing-files-in-a-repository/creating-new-files) ».
