---
ms.openlocfilehash: c47a4efc23963dcfa0be69207387cd2d02704aef
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/10/2022
ms.locfileid: "147879352"
---
Cuando habilitas o inhabilitas la {% data variables.product.prodname_advanced_security %} para repositorios, {% data variables.product.prodname_dotcom %} muestra un resumen de cambios en el uso de tu licencia. Si inhabilitas el acceso a {% data variables.product.prodname_GH_advanced_security %}, se liberará cualquier plaza que utilice un confirmante "único".

Si sobrepasas el límite de tu licencia, {% data variables.product.prodname_GH_advanced_security %} seguirá trabajando en todos los repositorios en donde ya se encuentre habilitado. Sin embargo, en las organizaciones en donde se habilita la {% data variables.product.prodname_GH_advanced_security %} para los repositorios nuevos, se crearán repositorios con la característica inhabilitada. Además, la opción para habilitar {% data variables.product.prodname_GH_advanced_security %} para los repositorios existentes no estará disponible.{% ifversion fpt or ghec %} Si cambia la visibilidad de un repositorio público a uno privado, se deshabilitará {% data variables.product.prodname_GH_advanced_security %} para ese repositorio.{% endif %}

Tan pronto como liberes algunas plazas, al inhabilitar la {% data variables.product.prodname_GH_advanced_security %} para algunos repositorios o al incrementar tu tamaño de licencia, las opciones para habilitar la {% data variables.product.prodname_GH_advanced_security %} funcionarán nuevamente como normales.
