---
title: Exportar la información de los miembros de tu organización
intro: Puedes exportar información sobre los miembros de tu organización directamente desde la interfaz de usuario.
permissions: Organization owners can export member information for their organization.
versions:
  fpt: '*'
  ghec: '*'
topics:
  - Organizations
  - Teams
shortTitle: Export member information
ms.openlocfilehash: 2777e125f5eb43bfcf8ec1172db29fe7338bdbad
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/05/2022
ms.locfileid: '145109818'
---
Puedes exportar información sobre los miembros de tu organización. Esto es útil si quieres realizar auditorías de los usuarios dentro de la organización.

La información exportada incluye:
- Nombre de usuario y detalles de nombre mostrado
- Si el usuario tiene habilitada la autenticación bifactorial
- Si la membrecía es pública o privada
- Si el usuario es un propietario o miembro de la organización
- Fecha y hora de la última actividad del usuario (para obtener una lista completa de la actividad pertinente, vea "[Administración de usuarios inactivos](/admin/user-management/managing-users-in-your-enterprise/managing-dormant-users)")
- La NameID de SAML del usuario, en caso de que esté disponible

Puedes obtener información de los miembros directamente desde la interfaz de usuario de {% data variables.product.product_name %} o utilizando las API. Este artículo te explica cómo obtener información de miembros desde dentro de {% data variables.product.product_name %}.

Para más información sobre las API, vea nuestra documentación de [GraphQL API](/graphql/reference/objects#user) y la [API REST](/rest/reference/users) sobre los usuarios.

{% data reusables.profile.access_org %} {% data reusables.user-settings.access_org %} {% data reusables.organizations.people %} {% data reusables.organizations.people-export %}
