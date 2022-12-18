---
ms.openlocfilehash: 082f3b30b23ed6c8b2a7a4261cace89e32f0a8c9
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/12/2022
ms.locfileid: "145138842"
---
Predeterminadamente, todas las dependencias que se definen explícitamente en un manifiesto o archivo fijado se mantienen actualizadas. Puede usar `allow` y `ignore` para personalizar las dependencias que se deben mantener con las actualizaciones de versión. El {% data variables.product.prodname_dependabot %} revisa las dependencias permitidas y después filtra cualquier dependencia o versión ignorada. Por tanto, una dependencia que coincida con `allow` y `ignore` se omitirá.
