---
title: Conversion d’une équipe d’administration en autorisations d’organisation améliorées
intro: "Si votre organisation a été créée après septembre\_2015, elle dispose par défaut d’autorisations d’organisation améliorées. Les organisations créées avant septembre\_2015 peuvent avoir besoin de migrer les anciens propriétaires et équipes d’administration vers le modèle d’autorisations améliorées. Les membres des équipes d’administration héritées conservent automatiquement la possibilité de créer des dépôts jusqu’à ce que ces équipes soient migrées vers le modèle d’autorisations d’organisation améliorées."
redirect_from:
  - /articles/converting-your-previous-admin-team-to-the-improved-organization-permissions
  - /articles/converting-an-admin-team-to-improved-organization-permissions
  - /github/setting-up-and-managing-organizations-and-teams/converting-an-admin-team-to-improved-organization-permissions
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
topics:
  - Organizations
  - Teams
shortTitle: Convert admin team
ms.openlocfilehash: 183ccd5d1252265ed6ac94924703ceb75ed8adad
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/10/2022
ms.locfileid: '145109402'
---
Vous pouvez supprimer l’autorisation de créer des référentiels des membres des équipes d’administration héritées en créant une équipe contenant ces membres, en veillant à lui accorder les accès nécessaires aux référentiels de l’organisation, puis en supprimant l’équipe d’administration héritée.

Pour plus d’informations, consultez « [Rôles de dépôt pour une organisation](/organizations/managing-access-to-your-organizations-repositories/repository-roles-for-an-organization) ».

{% warning %}

**Avertissements :**
- Si des membres de votre équipe d’administration héritée ne sont membres d’aucune autre équipe, supprimer l’équipe entraîne la suppression de ces membres de l’organisation. Avant de supprimer l’équipe, vérifiez que les membres sont déjà des membres directs de l’organisation ou qu’ils disposent d’un accès de collaborateur aux référentiels nécessaires.
- Pour éviter la perte de duplications privées effectuées par les membres de l’équipe d’administration héritée, vous devez suivre les étapes 1 à 3 ci-dessous avant de supprimer l’équipe d’administration héritée.
- Comme « admin » est un terme désignant les membres de l’organisation qui disposent d’un [accès spécifique à certains référentiels](/articles/repository-permission-levels-for-an-organization) dans l’organisation, nous vous recommandons d’éviter ce terme dans les noms d’équipe que vous choisissez.

{% endwarning %}

1. [Créez une équipe](/articles/creating-a-team).
2. [Ajoutez chacun des membres](/articles/adding-organization-members-to-a-team) de l’équipe d’administration héritée à la nouvelle équipe.
3. [Donnez à la nouvelle équipe un accès équivalent](/articles/managing-team-access-to-an-organization-repository) à celui de l’équipe héritée pour chacun des référentiels.
4. [Supprimez l’équipe d’administration héritée](/articles/deleting-a-team).
