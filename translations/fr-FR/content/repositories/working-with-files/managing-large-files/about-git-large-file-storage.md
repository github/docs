---
title: À propos du stockage de fichiers Git volumineux
intro: '{% data variables.product.product_name %} limite la taille des fichiers autorisés dans les dépôts. Pour suivre les fichiers au-delà de cette limite, vous pouvez utiliser {% data variables.large_files.product_name_long %}.'
redirect_from:
  - /articles/about-large-file-storage
  - /articles/about-git-large-file-storage
  - /github/managing-large-files/about-git-large-file-storage
  - /github/managing-large-files/versioning-large-files/about-git-large-file-storage
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
shortTitle: Git Large File Storage
ms.openlocfilehash: f0ab54791645dc5c36cce2880ba3ae5c9b705f35
ms.sourcegitcommit: 06726d24e73f1175f10749d6fdcf143d6094c9a5
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 10/28/2022
ms.locfileid: '148118743'
---
## À propos de {% data variables.large_files.product_name_long %}

{% data variables.large_files.product_name_short %} gère les fichiers volumineux en stockant des références aux fichiers dans les référentiels, mais pas les fichiers proprement dits. Pour contourner l’architecture de Git, {% data variables.large_files.product_name_short %} crée un fichier pointeur qui agit comme référence au fichier réel (qui est stocké ailleurs). C’est {% data variables.product.product_name %} qui gère ce fichier pointeur dans votre référentiel. Lorsque vous clonez le référentiel vers le bas, {% data variables.product.product_name %} utilise le fichier pointeur comme carte pour accéder au fichier volumineux.

{% ifversion fpt or ghec %} {% data variables.large_files.product_name_short %} permet de stocker des fichiers de maximum

| Produit | Taille maximale du fichier |
|------- | ------- |
| {% data variables.product.prodname_free_user %} | 2 Go |
| {% data variables.product.prodname_pro %} | 2 Go |
| {% data variables.product.prodname_team %} | 4 Go |
| {% data variables.product.prodname_ghe_cloud %} | 5 Go |{% else %}
{% data variables.large_files.product_name_short %} permet de stocker des fichiers de 5 Go maximum dans un référentiel.
{% endif %} 

{% data reusables.repositories.git-lfs %}

Vous pouvez également utiliser {% data variables.large_files.product_name_short %} avec {% data variables.product.prodname_desktop %}. Pour plus d’informations sur le clonage de référentiels Git LFS dans {% data variables.product.prodname_desktop %}, consultez « [Clonage d’un référentiel de GitHub vers GitHub Desktop](/desktop/guides/contributing-to-projects/cloning-a-repository-from-github-to-github-desktop) ».

{% data reusables.large_files.can-include-lfs-objects-archives %}

## Format du fichier pointeur

Le fichier pointeur de {% data variables.large_files.product_name_short %} se présente ainsi :

```
version {% data variables.large_files.version_name %}
oid sha256:4cac19622fc3ada9c0fdeadb33f88f367b541f38b89102a3f1261ac81fd5bcb5
size 84977953
```

Il effectue le suivi de la `version` de {% data variables.large_files.product_name_short %} que vous utilisez, suivie de l’identificateur unique du fichier (`oid`). Il stocke également la taille (`size`) du fichier final.

{% note %}

**Remarques**:
- {% data variables.large_files.product_name_short %} ne peut pas être utilisé avec les sites {% data variables.product.prodname_pages %}.
- {% data variables.large_files.product_name_short %} ne peut pas être utilisé avec les référentiels de modèles.
  
{% endnote %}

## Pour aller plus loin

- « [Collaboration avec {% data variables.large_files.product_name_long %}](/articles/collaboration-with-git-large-file-storage) »
