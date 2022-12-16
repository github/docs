---
title: Ouverture automatique de fichiers dans les codespaces d’un référentiel
shortTitle: Automatically opening files
intro: 'Vous pouvez définir des fichiers particuliers à ouvrir automatiquement chaque fois qu’une personne crée un codespace pour votre référentiel et ouvre le codespace dans le client web {% data variables.product.prodname_vscode %}.'
permissions: People with write permissions to a repository can create or edit the codespace configuration.
versions:
  fpt: '*'
  ghec: '*'
type: how_to
topics:
  - Codespaces
  - Set up
ms.openlocfilehash: a57b76eda4bfc47071f3cfeade8f50afde9e01e6
ms.sourcegitcommit: 27882d9b3f19979c817c25952a2fb4dc4c6f0a65
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 10/27/2022
ms.locfileid: '148114035'
---
## Vue d’ensemble

Si un fichier particulier est utile aux utilisateurs quand ils créent un codespace pour votre référentiel, vous pouvez définir ce fichier afin qu’il s’ouvre automatiquement dans le client web {% data variables.product.prodname_vscode_shortname %}. Vous configurez cette option dans le fichier de configuration du conteneur de développement pour votre référentiel. 

Le ou les fichiers que vous spécifiez sont ouverts uniquement la première fois qu’un codespace est ouvert dans le client web. Si la personne ferme les fichiers spécifiés, ceux-ci ne sont pas rouverts automatiquement la prochaine fois que l’utilisateur ouvre ou redémarre le codespace.

{% note %}

**Remarque** : cette automatisation s’applique uniquement au client web {% data variables.product.prodname_vscode_shortname %}, pas à l’application de bureau {% data variables.product.prodname_vscode_shortname %} ni aux autres éditeurs pris en charge.

{% endnote %}

## Définition des fichiers devant s’ouvrir automatiquement

{% data reusables.codespaces.edit-devcontainer-json %}
1. Modifiez le fichier `devcontainer.json` en ajoutant une propriété `customizations.codespaces.openFiles`. La propriété `customizations` se trouve au niveau supérieur du fichier, dans l’objet JSON englobant. Par exemple :

   ```json{:copy}
   "customizations": {
     "codespaces": {
       "openFiles": [
         "README.md",
         "scripts/tsconfig.json",
         "docs/main/CODING_STANDARDS.md"
       ]
     }
   }
   ```

   La valeur de la propriété `openFiles` est un tableau d’un ou plusieurs fichiers dans votre référentiel. Les chemins d’accès sont relatifs à la racine du référentiel (les chemins absolus ne sont pas pris en charge). Les fichiers sont ouverts dans le client web dans l’ordre spécifié, le premier fichier du tableau étant affiché dans l’éditeur.
   
1. Enregistrez le fichier et commitez vos changements dans la branche nécessaire du dépôt.

## Pour aller plus loin

- « [Présentation des conteneurs de développement](/codespaces/setting-up-your-project-for-codespaces/introduction-to-dev-containers) »
