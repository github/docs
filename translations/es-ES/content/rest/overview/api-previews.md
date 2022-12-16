---
title: Vistas previas de la API
intro: Puedes utilizar las vistas previas de la API para probar características nuevas y proporcionar retroalimentación antes de que dichas características se hagan oficiales.
redirect_from:
  - /v3/previews
versions:
  ghes: <3.4
topics:
  - API
ms.openlocfilehash: d637b59fc72332ee142cec78653907c2bfeebdc0
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 10/25/2022
ms.locfileid: '148110132'
---
Las vistas previas de la API te permiten probar API nuevas y cambios a los métodos existentes de las API antes de que se hagan oficiales en la API de GitHub.

Durante el periodo de vista previa, podríamos cambiar algunas características con base en la retroalimentación de los desarrolladores. Si realizamos cambios, los anunciaremos en el [blog de desarrolladores](https://developer.github.com/changes/) sin aviso previo.

Para acceder a una versión preliminar de la API, deberás proporcionar un [tipo de medio](/rest/overview/media-types) personalizado en el encabezado `Accept` de las solicitudes. La documentación de características para cada vista previa especifica qué tipo de medios personalizados proporcionar.

{% ifversion ghes < 3.4 %}
## Adjuntos de contenido

Ahora puedes proporcionar más información en GitHub para las URL que enlazan a los dominios registrados si utilizas la API {% data variables.product.prodname_unfurls %}. Consulta "[Uso de datos adjuntos de contenido](/apps/using-content-attachments/)" para obtener más detalles.

**Tipos de medios personalizados:** `corsair-preview`
**Anunciado:** [10-12-2018](https://developer.github.com/changes/2018-12-10-content-attachments-api/)

{% endif %}


