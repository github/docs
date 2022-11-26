---
title: Git LFS
intro: 'Puedes habilitar o deshabilitar {% data variables.large_files.product_name_long %} (LFS) para un repositorio.'
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
ms.contentlocale: es-ES
ms.lasthandoff: 10/25/2022
ms.locfileid: '148110128'
---
## Acerca de la API de {% data variables.large_files.product_name_short %}

Puedes usar {% data variables.large_files.product_name_short %} para almacenar archivos de gran tamaño en un repositorio de Git. La API de {% data variables.large_files.product_name_short %} permite habilitar o deshabilitar la característica para un repositorio individual. Para obtener más información sobre {% data variables.large_files.product_name_short %}, consulta "[Acerca de {% data variables.large_files.product_name_short %}](/repositories/working-with-files/managing-large-files/about-git-large-file-storage)".

Las personas con acceso de administrador a un repositorio pueden usar la API de {% data variables.large_files.product_name_short %}.

{% ifversion fpt or ghec %}

El uso de {% data variables.large_files.product_name_short %} está sujeto a facturación. Para más información, vea "[Acerca de la facturación para {% data variables.large_files.product_name_long %}](/billing/managing-billing-for-git-large-file-storage/about-billing-for-git-large-file-storage)".

Si quieres usar la API de {% data variables.large_files.product_name_short %} para un repositorio que pertenece a una organización, el rol debe proporcionarte acceso a la facturación de la organización{% ifversion ghec %} o la empresa{% endif %}.{% ifversion fpt %} Para obtener más información, consulta "[Roles en una organización](/organizations/managing-peoples-access-to-your-organization-with-roles/roles-in-an-organization#organization-owners)".{% endif %}

{% ifversion ghec %}

| Propiedad del repositorio | Acceso requerido al repositorio | Rol necesario | Más información |
| :- | :- | :- | :- |
| Cuenta personal | Administración | N/D | N/D |
| <ul><li>Organización en {% data variables.product.prodname_team %}</li><li>Organización en {% data variables.product.product_name %}, pero no en una empresa</li></ul> | Administrador, que se hereda si eres propietario de la organización | Propietario de la organización o gerente de facturación | "[Roles en una organización](/organizations/managing-peoples-access-to-your-organization-with-roles/roles-in-an-organization#organization-owners)" |
| Organización en una empresa | Administrador, que se puede heredar si eres propietario de la organización | Propietario de la empresa o gerente de facturación | "[Roles en una empresa](/admin/user-management/managing-users-in-your-enterprise/roles-in-an-enterprise#enterprise-owners)" |

{% endif %}

{% endif %}
