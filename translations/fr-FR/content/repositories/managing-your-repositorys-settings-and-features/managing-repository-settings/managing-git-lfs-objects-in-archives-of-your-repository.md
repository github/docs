---
title: Gestion des objets Git LFS dans les archives de votre dépôt
shortTitle: 'Managing {% data variables.large_files.product_name_short %} objects in archives'
intro: 'Vous pouvez choisir si des objets {% data variables.large_files.product_name_long %} ({% data variables.large_files.product_name_short %}) sont inclus dans des archives de code source, tels que les fichiers ZIP et tarballs que {% data variables.product.product_name %} crée pour votre dépôt.'
permissions: 'People with admin permissions for a repository can manage whether {% data variables.large_files.product_name_short %} objects are included in archives of the repository.'
versions:
  fpt: '*'
  ghec: '*'
topics:
  - Repositories
redirect_from:
  - /github/administering-a-repository/managing-git-lfs-objects-in-archives-of-your-repository
  - /github/administering-a-repository/managing-repository-settings/managing-git-lfs-objects-in-archives-of-your-repository
ms.openlocfilehash: 64bad4c056a29ceffc465065c84a7424c870049f
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/11/2022
ms.locfileid: '147881771'
---
## À propos des objets {% data variables.large_files.product_name_short %} dans les archives

{% data variables.product.product_name %} crée des archives de code source de votre dépôt sous la forme de fichiers ZIP et de tarballs. Les utilisateurs peuvent télécharger ces archives à partir de la page principale de votre dépôt ou en tant que ressources de mise en production. Par défaut, les objets {% data variables.large_files.product_name_short %} ne sont pas inclus dans ces archives ; seuls les fichiers pointeurs vers ces objets le sont. Pour faciliter l’utilisation des archives pour votre dépôt, vous pouvez choisir d’inclure les objets {% data variables.large_files.product_name_short %} à la place. Pour être inclus, les objets {% data variables.large_files.product_name_short %} doivent être couverts par des règles de suivi dans un fichier *.gitattributes* qui a été commité dans le dépôt.

Si vous choisissez d’inclure des objets {% data variables.large_files.product_name_short %} dans les archives de votre dépôt, chaque téléchargement de ces archives compte dans le cadre de l’utilisation de la bande passante de votre compte. Chaque compte reçoit {% data variables.large_files.initial_bandwidth_quota %} par mois de bande passante gratuitement, et vous pouvez payer pour une utilisation supplémentaire. Pour plus d’informations, consultez « [À propos de l’utilisation du stockage et de la bande passante](/github/managing-large-files/about-storage-and-bandwidth-usage) » et « [Gestion de la facturation pour {% data variables.large_files.product_name_long %}](/billing/managing-billing-for-git-large-file-storage) ».

Si vous utilisez un serveur LFS externe (configuré dans votre fichier *.lfsconfig*), ces fichiers LFS ne seront pas inclus dans les archives du dépôt. L’archive contiendra uniquement les fichiers qui ont été committés dans {% data variables.product.product_name %}.

## Gestion des objets {% data variables.large_files.product_name_short %} dans les archives

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-settings %}
3. Sous « Archives », sélectionnez ou désélectionnez **Inclure les objets {% data variables.large_files.product_name_short %} dans les archives**.
  ![Case à cocher pour inclure les objets {% data variables.large_files.product_name_short %} dans les archives](/assets/images/help/repository/include-git-lfs-objects-checkbox.png)
