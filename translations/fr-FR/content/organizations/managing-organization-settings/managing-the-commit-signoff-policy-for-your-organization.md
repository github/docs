---
title: Gestion de la stratégie de validation de commits pour votre organisation
intro: 'Vous pouvez demander aux utilisateurs de valider automatiquement tous les commits qu’ils effectuent dans l’interface web de {% data variables.product.product_name %} vers les dépôts appartenant à votre organisation.'
versions:
  feature: commit-signoffs
permissions: Organization owners can require all commits to repositories owned by the organization be signed off by the commit author.
topics:
  - Organizations
shortTitle: Manage the commit signoff policy
ms.openlocfilehash: 3d567d9f592758a2a9998df07556c4f2a04a852c
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 10/25/2022
ms.locfileid: '148108592'
---
## À propos des validations de commits

Pour affirmer qu’un commit est conforme aux règles et licences régissant un dépôt, de nombreuses organisations exigent que les développeurs valident chaque commit. Si votre organisation exige des validations de commits, vous pouvez faire de la validation une partie intégrante du processus de commit en activant les validations de commits obligatoires pour les utilisateurs qui effectuent des commits avec l’interface web de {% data variables.product.product_name %}. Une fois que vous avez activé les validations de commits obligatoires pour une organisation, chaque commit effectué dans les dépôts de cette organisation avec l’interface web de {% data variables.product.product_name %} est automatiquement validé par l’auteur du commit.

Les personnes disposant d’un accès administrateur à un dépôt peuvent également activer les validations de commits obligatoires au niveau du dépôt. Pour plus d’informations, consultez « [Gestion de la stratégie de validation de commits pour votre dépôt](/repositories/managing-your-repositorys-settings-and-features/managing-repository-settings/managing-the-commit-signoff-policy-for-your-repository) ».

{% data reusables.repositories.commit-signoffs %}

## Gestion des validations de commits obligatoires pour votre organisation

{% data reusables.profile.access_org %} {% data reusables.profile.org_settings %} {% data reusables.organizations.repository-defaults %}
1. Sélectionnez ou désélectionnez **Exiger que les contributeurs valident les commits basés sur le web**.
  ![Capture d’écran de l’option Exiger que les contributeurs valident les commits basés sur le web](/assets/images/help/organizations/require-signoffs.png)
