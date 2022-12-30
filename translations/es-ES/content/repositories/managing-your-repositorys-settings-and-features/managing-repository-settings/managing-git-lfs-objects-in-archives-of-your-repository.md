---
title: Administrar los objetos de LFS de Git en los archivos de tu repositorio
shortTitle: 'Managing {% data variables.large_files.product_name_short %} objects in archives'
intro: 'Puedes elegir si los objetos de {% data variables.large_files.product_name_long %} ({% data variables.large_files.product_name_short %}) se incluirán en los archivos de código fuente, tales como los archivos ZIP y .tar, que {% data variables.product.product_name %} crea para tu repositorio.'
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
ms.contentlocale: es-ES
ms.lasthandoff: 09/11/2022
ms.locfileid: '147881776'
---
## Acerca de los objetos de {% data variables.large_files.product_name_short %} en los archivos

{% data variables.product.product_name %} crea archivos de código fuente para tu repositorio en forma de archivos ZIP y .tar. Las personas pueden descargar estos archivos en la página principal de tu repositorio o en forma de activos del lanzamiento. Predeterminadamente, los objetos de {% data variables.large_files.product_name_short %} no se incluyen en estos archivos, únicamente los archivos de puntero a estos objetos. Para mejorar la usabilidad de los archivos para tu repositorio, puedes elegir incluir los objetos de {% data variables.large_files.product_name_short %} en su lugar. Para incluirse, los objetos de {% data variables.large_files.product_name_short %} los deben cubrir reglas de seguimiento en un archivo *.gitattributes* que se haya confirmado en el repositorio.

Si eliges incluir los objetos de {% data variables.large_files.product_name_short %} en los archivos de tu repositorio, cada descarga de dichos archivos contará en el uso de ancho de banda para tu cuenta. Cada cuenta recibirá una {% data variables.large_files.initial_bandwidth_quota %} mensual de ancho de banda gratuito, y podrás pagar por cualquier uso adicional. Para obtener más información, vea "[Acerca del uso de almacenamiento y ancho de banda](/github/managing-large-files/about-storage-and-bandwidth-usage)" y "[Administrar la facturación de {% data variables.large_files.product_name_long %}](/billing/managing-billing-for-git-large-file-storage)".

Si utilizas un servidor LFS externo (configurado en el elemento *.lfsconfig*), estos archivos LFS no se incluirán en los archivos del repositorio. El archivo solo contendrá archivos que se hayan confirmado en {% data variables.product.product_name %}.

## Administrar los objetos de {% data variables.large_files.product_name_short %} en los archivos

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-settings %}
3. En "Archivos", seleccione o anule la selección de **Incluir objetos de {% data variables.large_files.product_name_short %} en los archivos**.
  ![Casilla de verificación para incluir los objetos de {% data variables.large_files.product_name_short %} en los archivos](/assets/images/help/repository/include-git-lfs-objects-checkbox.png)
