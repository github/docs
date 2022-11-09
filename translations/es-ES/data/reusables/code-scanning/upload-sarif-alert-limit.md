---
ms.openlocfilehash: 0b7740ddd22bccfe9899f98ac44af4d4b94b4ed4
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/10/2022
ms.locfileid: "145115497"
---
{% note %}

**Notas:** 
- La carga de SARIF admite un máximo de 5000 resultados por carga. Los resultados que superen este límite se omiten. Si una herramienta genera demasiados resultados, debe actualizar la configuración para centrarse en los resultados de las reglas o consultas más importantes.

 - Para cada carga, la carga de SARIF admite un tamaño máximo de 10 MB para el archivo SARIF comprimido con `gzip`. Se rechazarán las cargas que superen este límite. Si el archivo SARIF es demasiado grande porque contiene demasiados resultados, debe actualizar la configuración para centrarse en los resultados de las reglas o consultas más importantes.

{% endnote %}
