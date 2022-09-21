---
title: Eliminar a un miembro de tu empresa
intro: Puedes quitar un miembro de todas las organizaciones que son propiedad de tu empresa.
permissions: Enterprise owners can remove an enterprise member from the enterprise.
versions:
  feature: remove-enterprise-members
type: how_to
topics:
  - Enterprise
shortTitle: Remove member
ms.openlocfilehash: c3090cd49c2c2e8089093dc01ddeb7b69ae39416
ms.sourcegitcommit: 478f2931167988096ae6478a257f492ecaa11794
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/09/2022
ms.locfileid: '147717994'
---
## Acerca de la eliminación de miembros de la empresa

Al quitar a un miembro de empresa de la empresa, el miembro se quita de todas las organizaciones que pertenecen a la empresa.

Si el miembro de empresa que va a quitar es el último propietario de una organización propiedad de la empresa, se convertirá en propietario de esa organización.

Si la empresa o cualquiera de las organizaciones que le pertenecen usa un proveedor de identidades (IdP) para administrar la pertenencia a la organización, es posible que el idP vuelva a agregar el miembro a la organización. Asegúrese de realizar también los cambios necesarios en el IdP.

## Eliminar a un miembro de tu empresa

{% note %}

**Nota:** Si un miembro de la empresa solo usa {% data variables.product.prodname_ghe_server %} y no {% data variables.product.prodname_ghe_cloud %}, no puede quitarlo de esta manera.

{% endnote %}

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.people-tab %}
1. A la derecha de la persona que quiera quitar, seleccione el menú desplegable {% octicon "gear" aria-label="The gear icon" %} y haga clic en **Quitar de la empresa**.

   ![Captura de pantalla de la opción "Quitar de la empresa" para un miembro de la empresa](/assets/images/help/business-accounts/remove-member.png)
