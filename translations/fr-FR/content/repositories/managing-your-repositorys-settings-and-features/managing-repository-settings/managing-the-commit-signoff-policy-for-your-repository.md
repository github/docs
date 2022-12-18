---
title: Gestion de la stratégie de validation de commits pour votre dépôt
intro: 'Vous pouvez demander aux utilisateurs de valider automatiquement les commits qu’ils effectuent dans votre dépôt avec l’interface web de {% data variables.product.product_name %}.'
versions:
  feature: commit-signoffs
permissions: Organization owners and repository administrators can require all commits to a repository to be signed off by the commit author.
topics:
  - Repositories
shortTitle: Manage the commit signoff policy
ms.openlocfilehash: 078e80ed9f2b916c2c82b522eaad709fae5dc46c
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 10/25/2022
ms.locfileid: '148107692'
---
## À propos des validations de commits

Les validations de commits permettent aux utilisateurs d’affirmer la conformité de commits aux règles et licences régissant un dépôt. Vous pouvez activer les validations de commits obligatoires sur des dépôts individuels pour les utilisateurs qui effectuent des commits avec l’interface web de {% data variables.location.product_location %}. La validation de commits fait alors partie intégrante du processus de commit. Une fois les validations de commits obligatoires activées pour un dépôt, chaque commit effectué dans ce dépôt avec l’interface web de {% data variables.location.product_location %} est automatiquement validé par l’auteur du commit.

Les propriétaires d’organisation peuvent également activer les validations de commits obligatoires au niveau de l’organisation. Pour plus d’informations, consultez « [Gestion de la stratégie de validation de commits pour votre organisation](/organizations/managing-organization-settings/managing-the-commit-signoff-policy-for-your-organization) ».

{% data reusables.repositories.commit-signoffs %}

## Activation ou désactivation des validations de commits obligatoires pour votre dépôt

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-settings %}
1. Sélectionnez **Exiger que les contributeurs valident les commits basés sur le web**.
  ![Capture d’écran de l’option Exiger que les contributeurs valident les commits basés sur le web](/assets/images/help/repository/require-signoffs.png)
