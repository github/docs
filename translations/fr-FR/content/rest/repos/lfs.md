---
title: Git LFS
intro: 'Vous pouvez activer ou désactiver la fonctionnalité {% data variables.large_files.product_name_long %} (LFS) pour un dépôt.'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - API
miniTocMaxHeadingLevel: 3
allowTitleToDifferFromFilename: true
ms.openlocfilehash: e8a08167bb966b1dd397d8cfa7b4a9e9952946ca
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 10/25/2022
ms.locfileid: '148108757'
---
## À propos de l’API {% data variables.large_files.product_name_short %}

Vous pouvez utiliser {% data variables.large_files.product_name_short %} pour stocker des fichiers volumineux dans un dépôt Git. L’API {% data variables.large_files.product_name_short %} vous permet d’activer ou de désactiver la fonctionnalité pour un dépôt individuel. Pour plus d’informations sur {% data variables.large_files.product_name_short %}, consultez « [À propos de {% data variables.large_files.product_name_short %}](/repositories/working-with-files/managing-large-files/about-git-large-file-storage) ».

Les personnes disposant d’un accès administrateur à un dépôt peuvent utiliser l’API {% data variables.large_files.product_name_short %}.

{% ifversion fpt or ghec %}

L’utilisation de {% data variables.large_files.product_name_short %} est soumise à facturation. Pour plus d’informations, consultez « [À propos de la facturation pour {% data variables.large_files.product_name_long %}](/billing/managing-billing-for-git-large-file-storage/about-billing-for-git-large-file-storage) ».

Si vous souhaitez utiliser l’API {% data variables.large_files.product_name_short %} pour un dépôt qui appartient à une organisation, votre rôle doit vous donner accès à la facturation de l’organisation{% ifversion ghec %} ou de l’entreprise{% endif %}.{% ifversion fpt %} Pour plus d’informations, consultez « [Rôles dans une organisation](/organizations/managing-peoples-access-to-your-organization-with-roles/roles-in-an-organization#organization-owners) ».{% endif %}

{% ifversion ghec %}

| Propriété du dépôt | Accès au dépôt nécessaire | Rôle requis | Autres informations |
| :- | :- | :- | :- |
| Compte personnel | Admin | N/A | N/A |
| <ul><li>Organisation sur {% data variables.product.prodname_team %}</li><li>Organisation sur {% data variables.product.product_name %}, mais pas dans une entreprise</li></ul> | Administrateur, hérité si vous êtes propriétaire d’organisation | Propriétaire d’organisation ou gestionnaire de facturation | « [Rôles dans une organisation](/organizations/managing-peoples-access-to-your-organization-with-roles/roles-in-an-organization#organization-owners) » |
| Organisation dans une entreprise | Administrateur, qui peut être hérité si vous êtes propriétaire d’organisation | Propriétaire d’entreprise ou gestionnaire de facturation | « [Rôles dans une entreprise](/admin/user-management/managing-users-in-your-enterprise/roles-in-an-enterprise#enterprise-owners) » |

{% endif %}

{% endif %}
