---
title: À propos de l’utilisation du stockage et de la bande passante
intro: '{% data reusables.large_files.free-storage-bandwidth-amount %}'
redirect_from:
  - /articles/billing-plans-for-large-file-storage
  - /articles/billing-plans-for-git-large-file-storage
  - /articles/about-storage-and-bandwidth-usage
  - /github/managing-large-files/about-storage-and-bandwidth-usage
  - /github/managing-large-files/versioning-large-files/about-storage-and-bandwidth-usage
versions:
  fpt: '*'
  ghec: '*'
shortTitle: Storage & bandwidth
ms.openlocfilehash: 8a6dd01c62b5b1c69afe29536e3d4ba206e988e7
ms.sourcegitcommit: 5f9527483381cfb1e41f2322f67c80554750a47d
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/11/2022
ms.locfileid: '147883026'
---
{% data variables.large_files.product_name_short %} est disponible pour chaque dépôt sur {% data variables.product.product_name %}, que votre compte ou organisation dispose ou non d’un abonnement payant.

## Suivi de l’utilisation du stockage et de la bande passante

Quand vous commitez et poussez (push) une modification apportée à un fichier suivi avec {% data variables.large_files.product_name_short %}, une nouvelle version du fichier entier est poussée et la taille totale du fichier est prise en compte dans la limite de stockage du propriétaire du dépôt. Quand vous téléchargez un fichier suivi avec {% data variables.large_files.product_name_short %}, la taille totale du fichier est prise en compte dans la limite de bande passante du propriétaire du dépôt. Les chargements de {% data variables.large_files.product_name_short %} ne sont pas pris en compte dans la limite de bande passante.

Par exemple :
- Si vous poussez un fichier de 500 Mo vers {% data variables.large_files.product_name_short %}, vous utilisez 500 Mo de votre stockage alloué et aucune partie de votre bande passante. Si vous apportez une modification de 1 octet et poussez à nouveau le fichier, vous utilisez 500 Mo de stockage supplémentaires et aucune bande passante, ce qui porte votre utilisation totale pour ces deux poussées à 1 Go de stockage et aucune bande passante.
- Si vous téléchargez un fichier de 500 Mo suivi avec LFS, vous utilisez 500 Mo de la bande passante allouée au propriétaire du dépôt. Si un collaborateur pousse une modification au fichier et que vous tirez (pull) la nouvelle version vers votre dépôt local, vous utilisez 500 Mo de bande passante supplémentaires, ce qui porte l’utilisation totale pour ces deux téléchargements à 1 Go de bande passante.
- Si {% data variables.product.prodname_actions %} télécharge un fichier de 500 Mo suivi avec LFS, il utilise 500 Mo de la bande passante allouée au propriétaire du dépôt.

{% ifversion fpt or ghec %} Si des objets {% data variables.large_files.product_name_long %} ({% data variables.large_files.product_name_short %}) sont inclus dans les archives de code source de votre dépôt, les téléchargements de ces archives sont pris en compte dans l’utilisation de la bande passante pour le dépôt. Pour plus d’informations, consultez « [Gestion des objets {% data variables.large_files.product_name_short %} dans les archives de votre dépôt](/github/administering-a-repository/managing-git-lfs-objects-in-archives-of-your-repository) ».
{% endif %}

{% tip %}

**Conseils** :
- {% data reusables.large_files.owner_quota_only %}
- {% data reusables.large_files.does_not_carry %}

{% endtip %}

## Quota de stockage

Si vous utilisez plus de {% data variables.large_files.initial_storage_quota %} de stockage sans acheter de pack de données, vous pouvez toujours cloner des dépôts avec des ressources volumineuses, mais vous ne récupérerez que les fichiers pointeurs et vous ne pourrez pas pousser la sauvegarde de nouveaux fichiers. Pour plus d’informations sur les fichiers pointeurs, consultez « [À propos de {% data variables.large_files.product_name_long %}](/github/managing-large-files/about-git-large-file-storage#pointer-file-format) ».

## Quota de bande passante

Si vous utilisez plus de {% data variables.large_files.initial_bandwidth_quota %} de bande passante par mois sans acheter de pack de données, la prise en charge de {% data variables.large_files.product_name_short %} est désactivée sur votre compte jusqu’au mois suivant.

## Pour aller plus loin

- « [Affichage de votre utilisation de {% data variables.large_files.product_name_long %}](/articles/viewing-your-git-large-file-storage-usage) »
- « [Gestion de la facturation pour {% data variables.large_files.product_name_long %}](/articles/managing-billing-for-git-large-file-storage) »
