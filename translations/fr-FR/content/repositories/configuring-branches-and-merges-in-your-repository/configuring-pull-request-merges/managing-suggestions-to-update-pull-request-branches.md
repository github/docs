---
title: Gestion des suggestions de mise à jour des branches de demande de tirage
intro: Vous pouvez donner aux utilisateurs la possibilité de toujours mettre à jour une branche de demande de tirage lorsqu’elle n’est pas à jour avec la branche de base.
versions:
  fpt: '*'
  ghes: '> 3.4'
  ghae: '>= 3.5'
  ghec: '*'
topics:
  - Repositories
shortTitle: Manage branch updates
permissions: People with maintainer permissions can enable or disable the setting to suggest updating pull request branches.
ms.openlocfilehash: a29e2e9d11b24287cdad71b71f617a58e64df297
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/05/2022
ms.locfileid: '147578609'
---
## À propos des suggestions de mise à jour d’une branche de demande de tirage

Si vous activez le paramètre afin de toujours suggérer la mise à jour des branches de demande de tirage (pull request) dans votre dépôt, les personnes disposant d’autorisations d’accès en écriture ont toujours la possibilité, dans la page de la demande de tirage, de mettre à jour sa branche principale quand elle n’est pas à jour avec la branche de base. Quand le paramètre n’est pas activé, la possibilité de mise à jour est uniquement disponible quand la branche de base nécessite que les branches soient à jour avant une fusion et que ce n’est pas le cas. Pour plus d’informations, consultez « [Maintien de la synchronisation de votre demande de tirage avec la branche de base](/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/keeping-your-pull-request-in-sync-with-the-base-branch) ».

{% data reusables.enterprise.3-5-missing-feature %}

## Gestion des suggestions de mise à jour d’une branche de demande de tirage

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-settings %}
3. Sous « Demandes de tirage », cochez ou décochez **Toujours suggérer de mettre à jour les branches de demande de tirage**.
  ![Case à cocher pour activer ou désactiver les suggestions systématiques de mise à jour d’une branche](/assets/images/help/repository/always-suggest-updating-branches.png)
