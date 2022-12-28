---
title: Meilleures pratiques pour les référentiels
shortTitle: Best practices
intro: Découvrez comment utiliser les référentiels le plus efficacement possible.
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Repositories
ms.openlocfilehash: f14bef158431c8251f26a4d917f4207d8e7dbc8a
ms.sourcegitcommit: c2aa10a61db44ee111c09565b6114dd5c97b6e2e
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 11/14/2022
ms.locfileid: '148163447'
---
## Créer un fichier README

Pour faciliter la compréhension et la navigation dans votre projet, nous vous recommandons de créer un fichier README pour chaque référentiel. 

{% data reusables.repositories.about-READMEs %} Pour plus d’informations, consultez « [À propos des README](/repositories/managing-your-repositorys-settings-and-features/customizing-your-repository/about-readmes) ».

## Privilégier la création de branches à la duplication

Pour faciliter la collaboration, nous recommandons que les collaborateurs réguliers travaillent à partir d’un seul référentiel, en créant des demandes de tirage entre les branches plutôt qu’entre les référentiels. La duplication est mieux adaptée pour accepter des contributions de personnes qui ne sont pas affiliées à un projet, par exemple des contributeurs open source.

Pour maintenir la qualité des branches importantes, notamment `main`, lors de l’utilisation d’un workflow de branchement, vous pouvez utiliser des branches protégées avec des vérifications d’état requises et des révisions de demande de tirage. Pour plus d’informations, consultez « [À propos des branches protégées](/repositories/configuring-branches-and-merges-in-your-repository/defining-the-mergeability-of-pull-requests/about-protected-branches) ».

## Utiliser {% data variables.large_files.product_name_long %}

Pour optimiser les performances, {% data variables.location.product_location %} limite la taille des fichiers autorisés dans les référentiels. Pour plus d’informations, consultez « [À propos de fichiers volumineux sur {% data variables.product.prodname_dotcom %}](/repositories/working-with-files/managing-large-files/about-large-files-on-github) ».

Pour suivre des fichiers volumineux dans un référentiel Git, nous vous recommandons d’utiliser {% data variables.large_files.product_name_long %} ({% data variables.large_files.product_name_short %}). Pour plus d’informations, consultez « [À propos de {% data variables.large_files.product_name_long %}](/repositories/working-with-files/managing-large-files/about-git-large-file-storage) ».
