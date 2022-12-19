---
title: Grupos externos
intro: 'La API de grupos externos te permite ver los grupos de proveedor de identidades externos que están disponibles para tu organización, así como administrar la conexión entre los grupos externos y los equipos de la organización.'
versions:
  ghae: '*'
  ghec: '*'
  ghes: '>=3.6'
topics:
  - API
miniTocMaxHeadingLevel: 3
ms.openlocfilehash: 0958aad779e6ec1044b74d3f6d67b2d7fff8aef0
ms.sourcegitcommit: 478f2931167988096ae6478a257f492ecaa11794
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/09/2022
ms.locfileid: '147710375'
---
## Acerca de External groups API

Para utilizar esta API, el usuario autenticado debe ser un mantenedor del equipo o un propietario de la organización asociada con éste.

{% ifversion ghec %} {% note %}

**Notas:** 

- La API de grupos externos solo se encuentra disponible para aquellas organizaciones que sean parte de una empresa que utilice {% data variables.product.prodname_emus %}. Para obtener más información, vea "[Acerca de los usuarios administrados empresariales](/admin/authentication/managing-your-enterprise-users-with-your-identity-provider/about-enterprise-managed-users)".
- Si tu organización utiliza la sincronización de equipos, puedes usar la API de Sincronización de Equipos. Para obtener más información, vea "[API de sincronización de equipos](#team-synchronization)".

{% endnote %} {% endif %}
