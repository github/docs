---
ms.openlocfilehash: 8cf9b4b70c5295ad2c7178a586fd660e05a88076
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/11/2022
ms.locfileid: "146458200"
---
El gráfico de dependencias es un resumen de los archivos de manifiesto y de bloqueo almacenados en un repositorio{% ifversion dependency-submission-api %} y las dependencias que se envían para el repositorio mediante la API de envío de dependencias (beta){% endif %}. Para cada repositorio, muestra{% ifversion fpt or ghec %}:

- Las dependencias, ecosistemas y paquetes de los cuales depende
- Los dependientes, repositorios y paquetes que dependen de ella{% else %} dependencias, es decir, los ecosistemas y los paquetes de los cuales depende. {% data variables.product.product_name %} no calcula información sobre los elementos dependientes, repositorios y paquetes que dependen de un repositorio.{% endif %}
