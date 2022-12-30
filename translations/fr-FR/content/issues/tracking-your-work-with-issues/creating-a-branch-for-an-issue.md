---
title: Création d’une branche pour travailler sur un problème
intro: Vous pouvez créer une branche pour travailler sur un problème directement à partir de la page de problème et commencer immédiatement.
versions:
  fpt: '*'
  ghes: '>=3.5'
  ghae: '>= 3.5'
  ghec: '*'
allowTitleToDifferFromFilename: true
topics:
  - Issues
shortTitle: Create branch for issue
ms.openlocfilehash: 062b41705836537de23d882acc5342e0713c316d
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/05/2022
ms.locfileid: '147061136'
---
{% note %}

**Remarque :** la possibilité de créer une branche pour un problème est actuellement en version bêta publique et sujette à modification.

{% endnote %}

## À propos des branches connectées à un problème
Les branches connectées à un problème sont affichées dans la section « Développement » de la barre latérale d’un problème. Lorsque vous créez une demande de tirage pour l’une de ces branches, celle-ci est automatiquement liée au problème. La connexion avec cette branche est supprimée et seule la demande de tirage est affichée dans la section « Développement ». Pour plus d’informations, consultez « [Liaison d’une demande de tirage à un problème](/issues/tracking-your-work-with-issues/linking-a-pull-request-to-an-issue) ».

## Création d’une branche pour un problème

Toute personne disposant d’une autorisation d’écriture dans un dépôt peut créer une branche pour un problème. Vous pouvez lier plusieurs branches pour un problème.

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-issues %}
3. Dans la liste des problèmes, cliquez sur le problème pour lequel vous souhaitez créer une branche.
4. Dans la barre latérale droite, sous « Développement », cliquez sur **Créer une branche**. Si le problème a déjà une branche liée ou une demande de tirage, cliquez sur {% octicon "gear" aria-label="The Gear icon" %} et, en bas du menu déroulant, cliquez sur **Créer une branche**.
   ![Capture d’écran montrant l’option Créer une branche mise en évidence dans la barre latérale](/assets/images/help/issues/create-a-branch.png)
5. Par défaut, la nouvelle branche est créée dans le dépôt actuel à partir de la branche par défaut. Modifiez le nom et les détails de la branche selon les besoins dans la boîte de dialogue « Créer une branche pour ce problème ».
   ![Capture d’écran montrant les options de la boîte de dialogue Créer une branche](/assets/images/help/issues/create-a-branch-options.png)
6. Choisissez entre travailler sur la branche localement ou l’ouvrir dans GitHub Desktop.
7. Lorsque vous êtes prêt à créer la branche, cliquez sur **Créer la branche**.
