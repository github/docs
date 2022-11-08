---
title: Acerca de Large File Storage de Git
intro: '{% data variables.product.product_name %} limita el tamaño de los archivos permitidos en los repositorios. Para rastrear los archivos más allá de este límite, puedes utilizar {% data variables.large_files.product_name_long %}.'
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
ms.contentlocale: es-ES
ms.lasthandoff: 10/28/2022
ms.locfileid: '148118754'
---
## Acerca de {% data variables.large_files.product_name_long %}

{% data variables.large_files.product_name_short %} maneja archivos grandes almacenando referencias del archivo en el repositorio, pero no el archivo real. Para trabajar en la arquitectura de Git, {% data variables.large_files.product_name_short %} crea un archivo de puntero que actúa como una referencia del archivo real (que se almacena en otro lugar). {% data variables.product.product_name %} administra este archivo puntero en tu repositorio. Cuando clonas el repositorio, {% data variables.product.product_name %} usa el archivo puntero como un mapa para ir y buscar el archivo grande por ti.

{% ifversion fpt or ghec %} Con {% data variables.large_files.product_name_short %}, puede almacenar archivos hasta:

| Producto | Tamaño de archivo máximo |
|------- | ------- |
| {% data variables.product.prodname_free_user %} | 2 GB |
| {% data variables.product.prodname_pro %} | 2 GB |
| {% data variables.product.prodname_team %} | 4 GB |
| {% data variables.product.prodname_ghe_cloud %} | 5 GB |{% else %}
Si utilizas {% data variables.large_files.product_name_short %}, puedes almacenar archivos de hasta 5 GB en tu repositorio.
{% endif %} 

{% data reusables.repositories.git-lfs %}

Tambié puedes usar {% data variables.large_files.product_name_short %} con {% data variables.product.prodname_desktop %}. Para más información sobre cómo clonar repositorios LFS de Git en {% data variables.product.prodname_desktop %}, vea "[Clonación de un repositorio desde GitHub en GitHub Desktop](/desktop/guides/contributing-to-projects/cloning-a-repository-from-github-to-github-desktop)".

{% data reusables.large_files.can-include-lfs-objects-archives %}

## Formato de archivo puntero

El archivo puntero de {% data variables.large_files.product_name_short %} se ve así:

```
version {% data variables.large_files.version_name %}
oid sha256:4cac19622fc3ada9c0fdeadb33f88f367b541f38b89102a3f1261ac81fd5bcb5
size 84977953
```

Realiza el seguimiento del `version` de {% data variables.large_files.product_name_short %} que use, seguido de un identificador único para el archivo (`oid`). También almacena el valor `size` del archivo final.

{% note %}

**Notas**:
- {% data variables.large_files.product_name_short %} no puede utilizarse con los sitios de {% data variables.product.prodname_pages %}.
- {% data variables.large_files.product_name_short %} no se puede utilizar con repositorios de plantilla.
  
{% endnote %}

## Información adicional

- "[Colaboración con {% data variables.large_files.product_name_long %}](/articles/collaboration-with-git-large-file-storage)"
