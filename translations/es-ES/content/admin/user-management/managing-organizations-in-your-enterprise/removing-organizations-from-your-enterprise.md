---
title: Eliminar a las organizaciones de tu empresa
intro: 'Si una organización ya no debería ser parte de tu empresa, puedes eliminarla.'
permissions: Enterprise owners can remove any organization from their enterprise.
versions:
  ghec: '*'
type: how_to
topics:
  - Enterprise
shortTitle: Removing organizations
ms.openlocfilehash: 8645e8f6d424ee8a02ae5d414e9901173df460aa
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/11/2022
ms.locfileid: '145115137'
---
{% warning %}

**Advertencia**: Cuando eliminas una organización de tu empresa:
- Tu empresa ya no regirá la facturación, administración de identidad, requisitos de 2FA y otras políticas organizacionales.
- La organización bajará de nivel al plan gratuito.
- La organización se regirá mediante los Términos de Servicio estándar.
- Cualquier repositorio interno dentro de la organización se convertirá en privado.

{% endwarning %}

## Eliminar a una organización de tu empresa

{% data reusables.enterprise-accounts.access-enterprise %}
2. Debajo de "Organizaciones", en la barra de búsqueda, comienza a teclear el nombre de la organización hasta que esta aparezca en los resultados de búsqueda.
![Captura de pantalla del campo de búsqueda para las organizaciones](/assets/images/help/enterprises/organization-search.png)
3. A la derecha del nombre de la organización, selecciona el menú desplegable de {% octicon "gear" aria-label="The gear icon" %} y haz clic en **Eliminar organización**.
![Captura de pantalla de una organización en los resultados de búsqueda](/assets/images/help/enterprises/remove-organization.png)
4. Revise las advertencias y, a continuación, haga clic en **Quitar organización**.
![Captura de pantalla de un mensaje de advertencia y botón para eliminar la organización](/assets/images/help/enterprises/remove-organization-warning.png)
