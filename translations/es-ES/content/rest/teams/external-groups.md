---
title: Grupos externos
intro: 'La API de grupos externos te permite ver los grupos de proveedor de identidades externos que están disponibles para tu organización, así como administrar la conexión entre los grupos externos y los equipos de la organización.'
versions:
  fpt: '*'
  ghae: '*'
  ghec: '*'
topics:
  - API
miniTocMaxHeadingLevel: 3
ms.openlocfilehash: 590605ab68eb40d42949e179e471d5c7d333f43e
ms.sourcegitcommit: dc42bb4a4826b414751ffa9eed38962c3e3fea8e
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 07/13/2022
ms.locfileid: '147059974'
---
## <a name="about-the-external-groups-api"></a>Acerca de External groups API

Para utilizar esta API, el usuario autenticado debe ser un mantenedor del equipo o un propietario de la organización asociada con éste.

{% ifversion ghec %} {% note %}

**Notas:** 

- La API de grupos externos solo se encuentra disponible para aquellas organizaciones que sean parte de una empresa que utilice {% data variables.product.prodname_emus %}. Para obtener más información, vea "[Acerca de los usuarios administrados empresariales](/admin/authentication/managing-your-enterprise-users-with-your-identity-provider/about-enterprise-managed-users)".
- Si tu organización utiliza la sincronización de equipos, puedes usar la API de Sincronización de Equipos. Para obtener más información, vea "[API de sincronización de equipos](#team-synchronization)".

{% endnote %} {% endif %}
