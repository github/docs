---
ms.openlocfilehash: 281a3a039c8a557c209e756d107ac1856a181017
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/11/2022
ms.locfileid: "145091986"
---
Registramos y mostramos dos números de confirmantes para la {% data variables.product.prodname_GH_advanced_security %} en {% data variables.product.product_location %}:

- Los **confirmantes** son el número de confirmantes que han contribuido al menos a un {% ifversion fpt or ghec %}repositorio {% endif %}privado de una organización y que usan un puesto en la licencia empresarial. Es decir, también son un miembro de la organización, un colaborador externo, o tienen una invitación pendiente para unirse a una organización en tu empresa.
- **Únicos para este repositorio/organización** es la cantidad de confirmantes que contribuyen únicamente a este repositorio o a los repositorios en esta organización. Esta cantidad muestra cuántas plazas de la licencia puedes liberar si inhabilitas la {% data variables.product.prodname_GH_advanced_security %} para este repositorio u organización.

Si no hay confirmantes únicos, todos los confirmantes activos también contribuirán con otros repositorios u organizaciones que utilicen la {% data variables.product.prodname_GH_advanced_security %}. Inhabilitar la característica para este repositorio u organización no liberará plazas en tu licencia.

Cuando eliminas a un usuario de tu cuenta empresarial, la licencia de usuario se libera en las siguientes 24 horas.

{% note %}

**Nota:** Los usuarios pueden contribuir a varios repositorios u organizaciones. El uso se mide a través de toda la cuenta empresarial para asegurarse de que cada miembro utilice una plaza sin importar en cuántos repositorios u organizaciones contribuye.

{% endnote %}
