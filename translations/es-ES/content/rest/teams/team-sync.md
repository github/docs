---
title: Sincronización de equipos
intro: 'La API de sincronización de equipos te permite administrar las conexiones entre los equipos de {% data variables.product.product_name %} y los grupos del proveedor de identidad (IdP) externo.'
versions:
  ghec: '*'
topics:
  - API
miniTocMaxHeadingLevel: 3
allowTitleToDifferFromFilename: true
ms.openlocfilehash: 6a5d379b1050e10f9e31e14ed2b094a684676737
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/05/2022
ms.locfileid: '147067166'
---
## Acerca de la API de sincronización de equipos

Para utilizar esta API, el usuario autenticado debe ser un mantenedor del equipo o un propietario de la organización asociada con éste. El token que utilizas para autenticarte también necesitará autorizarse para su uso con tu proveedor IdP (SSO). Para más información, vea "[Autorización de un token de acceso personal para su uso con una organización de inicio de sesión único de SAML](/enterprise-cloud@latest/authentication/authenticating-with-saml-single-sign-on/authorizing-a-personal-access-token-for-use-with-saml-single-sign-on)".

Puedes administrar a los miembros del equipo de GitHub a través de tu IdP con la sincronización de equipos. Ésta se debe habilitar para usar la API de Sincronización de Equipos. Para más información, vea "[Sincronización de equipos entre el proveedor de identidades y GitHub](/enterprise-cloud@latest/organizations/managing-saml-single-sign-on-for-your-organization/managing-team-synchronization-for-your-organization)".

{% note %}

**Nota:** La API de sincronización de equipos no se puede usar con {% data variables.product.prodname_emus %}. Para más información sobre cómo administrar una instancia de {% data variables.product.prodname_emu_org %}, vea "[API de grupos externos](/enterprise-cloud@latest/rest/reference/teams#external-groups)".

{% endnote %}
