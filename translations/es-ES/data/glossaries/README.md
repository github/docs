---
ms.openlocfilehash: 6d982c0371125b4bf2536b0f7840abe05281db2d
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/10/2022
ms.locfileid: "145069619"
---
# Glosarios

Los siguientes archivos componen nuestro [glosario de Crowdin](https://support.crowdin.com/glossary/):

* `external.yml` contiene entradas del glosario orientadas al cliente.
  * Las cadenas dentro `external.yml` de admiten condicionales Liquid. Vea [contributing/liquid-helpers.md](/contributing/liquid-helpers.md).
* `internal.yml` contiene solo entradas usadas por los traductores. Estos términos se muestran en la IU de Crowdin para proporcionar contexto adicional a los traductores sobre lo que están traduciendo, además de sugerir una secuencia localizada para ese término.
* `candidates.yml` contiene términos que podrían estar potencialmente tanto en el glosario interno como en el externo, pero que todavía no se han definido.
