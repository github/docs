---
ms.openlocfilehash: c8432b756590deab759f023a78453a482b8091fd
ms.sourcegitcommit: 67064b14c9d4d18819db8f6398358b77a1c8002a
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 05/17/2022
ms.locfileid: "145113609"
---
Con los precios por usuario, cada persona utiliza una licencia. {% data variables.product.company_short %} identifica a las personas por dirección de correo electrónico principal.

{% data variables.product.company_short %} factura a las siguientes personas.

{%- ifversion ghec %}
- Los propietarios de empresas que son miembros o propietarios de al menos una organización de la empresa {%- endif %}
- Miembros de la organización, incluidos los propietarios
- Colaboradores externos en repositorios privados{% ifversion ghec %} o internos{% endif %} propiedad de su organización, excepto las bifurcaciones
- Cualquier persona con una invitación pendiente para convertirse en propietario o miembro de la organización
- Cualquier persona con una invitación pendiente para convertirse en colaborador externo en repositorios privados{% ifversion ghec %} o internos{% endif %} propiedad de su organización, excepto las bifurcaciones {%- ifversion ghec %}
- Los usuarios de cualquier instancia de {% data variables.product.prodname_ghe_server %} que implemente {% endif %}

{% data variables.product.company_short %} no factura a ninguna de las personas siguientes.

{%- ifversion ghec %}
- Los propietarios de la empresa que no son miembros o propietarios de al menos una organización de la empresa
- Gerentes de facturación de empresas {%- endif %}
- Gerentes de facturación de la organización{% ifversion ghec %} para organizaciones individuales en {% data variables.product.prodname_ghe_cloud %}{% endif %}
- Cualquier persona con una invitación pendiente para convertirse en un gerente de facturación de la organización{% ifversion ghec %} o de la empresa{% endif %}
- Cualquier persona con una invitación pendiente para convertirse en colaborador externo en un repositorio público propiedad de su organización

{% note %}

**Nota**: {% data reusables.organizations.org-invite-scim %}

{% endnote %}
