---
ms.openlocfilehash: 5d75f2a8b4c2c9bfdf7b491d23f76f4f820b98e7
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/10/2022
ms.locfileid: "145093040"
---
Cada licencia de {% data variables.product.prodname_GH_advanced_security %} especifica una cantidad máxima de cuentas o de plazas que pueden utilizar estas características. Cada confirmante activo en por lo menos un repositorio con la característica habilitada utilizará una plaza. Un confirmante se considera como activo si una de sus confirmaciones se subió al repositorio dentro de los últimos 90 días, sin importar de cuándo se escribió originalmente.

{% note %}

**Nota:** Los confirmantes activos se calculan utilizando la información del autor de las confirmaciones y la marca de tiempo de cuando el código se pasó a {% data variables.product.product_name %}.

- Cuando un usuario sube código a {% data variables.product.prodname_dotcom %}, cada usuario que fue el autor de dicho código en esa subida contará como una plaza de {% data variables.product.prodname_GH_advanced_security %}, incluso si el código no es nuevo en {% data variables.product.prodname_dotcom %}.

- Los usuarios siempre deben crear ramas desde una base reciente, o rebasarlas antes de subirlas. Esto garantizará que los usuarios que no hayan hecho confirmaciones en los últimos 90 días no utilicen plazas de {% data variables.product.prodname_GH_advanced_security %}.

{% endnote %}

