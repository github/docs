---
ms.openlocfilehash: 5885d08844ee0ec4b7d3b85d88c907de7b5cdbaa
ms.sourcegitcommit: ea9a577cff7ec16ded25ed57417c83ec04816428
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 04/07/2022
ms.locfileid: "141531080"
---
## <a name="team-synchronization"></a>Sincronización de equipos

La API de sincronización de equipos te permite administrar las conexiones entre los equipos de {% data variables.product.product_name %} y los grupos del proveedor de identidad (IdP) externo. Para utilizar esta API, el usuario autenticado debe ser un mantenedor del equipo o un propietario de la organización asociada con éste. El token que utilizas para autenticarte también necesitará autorizarse para su uso con tu proveedor IdP (SSO). Para más información, vea "<a href="/github/authenticating-to-github/authorizing-a-personal-access-token-for-use-with-saml-single-sign-on" class="dotcom-only">Autorización de un token de acceso personal para su uso con una organización de inicio de sesión único de SAML</a>".

Puedes administrar a los miembros del equipo de GitHub a través de tu IdP con la sincronización de equipos. Ésta se debe habilitar para usar la API de Sincronización de Equipos. Para más información, vea "<a href="/organizations/managing-saml-single-sign-on-for-your-organization/managing-team-synchronization-for-your-organization" class="dotcom-only">Sincronización de equipos entre el proveedor de identidades y GitHub</a>".

{% note %}

**Nota:** La API de sincronización de equipos no se puede usar con {% data variables.product.prodname_emus %}. Para más información sobre cómo administrar una instancia de {% data variables.product.prodname_emu_org %}, vea "[API de grupos externos](/enterprise-cloud@latest/rest/reference/teams#external-groups)".

{% endnote %}