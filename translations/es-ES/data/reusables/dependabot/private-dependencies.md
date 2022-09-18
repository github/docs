---
ms.openlocfilehash: 0f47648322834fd8ec81dc4a975cdb8f92610a70
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/10/2022
ms.locfileid: "145138733"
---
Actualmente, {% data variables.product.prodname_dependabot_version_updates %} no son compatibles con archivos de bloqueo o de manifiesto que contengan dependencias o registros de git privados. El motivo es que, al ejecutar actualizaciones de versión, {% data variables.product.prodname_dependabot %} debe poder resolver todas las dependencias de su origen para verificar que esas actualizaciones de versión hayan sido correctas.
