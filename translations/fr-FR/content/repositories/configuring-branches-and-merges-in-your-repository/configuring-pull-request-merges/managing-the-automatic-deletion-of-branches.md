---
title: Gestion de la suppression automatique des branches
intro: Vous pouvez supprimer automatiquement les branches principales après la fusion des demandes de tirage dans votre dépôt.
redirect_from:
  - /articles/managing-the-automatic-deletion-of-branches
  - /github/administering-a-repository/managing-the-automatic-deletion-of-branches
  - /github/administering-a-repository/configuring-pull-request-merges/managing-the-automatic-deletion-of-branches
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Repositories
shortTitle: Automatic branch deletion
ms.openlocfilehash: feaeb7c2178beab4dc23a310df6924c6e1c52e0f
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/11/2022
ms.locfileid: '147882456'
---
Toute personne disposant d’autorisations d’administrateur sur un dépôt peut activer ou désactiver la suppression automatique des branches.

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-settings %}
3. Sous {% ifversion fpt or ghec or ghes > 3.4 or ghae-issue-6069 %}« Demandes de tirage »{% else %}« Bouton Fusionner »{% endif %}, sélectionnez ou désélectionnez **Supprimer automatiquement les branches principales**.
  ![Case à cocher pour activer ou désactiver la suppression automatique de branches](/assets/images/help/repository/automatically-delete-branches.png)

## Pour aller plus loin
- « [Fusion d’une demande de tirage](/pull-requests/collaborating-with-pull-requests/incorporating-changes-from-a-pull-request/merging-a-pull-request) »
- « [Création et suppression de branches dans votre dépôt](/articles/creating-and-deleting-branches-within-your-repository) »
