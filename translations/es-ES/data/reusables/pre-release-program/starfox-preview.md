---
ms.openlocfilehash: 3557e85680e20919fbe049cfe30ccacc93d9c17c
ms.sourcegitcommit: 1309b46201604c190c63bfee47dce559003899bf
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/10/2022
ms.locfileid: "147879813"
---
{% note %}

**Nota:** Los detalles de la tarjeta del proyecto ahora se muestran en las respuestas de la API REST para los eventos de incidencias y escala de tiempo relacionados con el proyecto. Esta característica está ahora disponible para que los desarrolladores la previsualicen. Para más información, vea esta [entrada de blog](https://developer.github.com/changes/2018-09-05-project-card-events).

Para recibir el atributo `project_card`, los paneles de proyecto deben estar [habilitados](/articles/disabling-project-boards-in-a-repository) para un repositorio y debe proporcionar un [tipo de medio](/rest/overview/media-types) personalizado en el encabezado `Accept`:

```
application/vnd.github.starfox-preview+json
```

{% endnote %}
