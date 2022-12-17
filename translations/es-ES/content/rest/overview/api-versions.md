---
title: Versiones de API
shortTitle: API Versions
intro: Debes especificar la versión de la API REST que se va a usar cada vez que se realiza una solicitud a la API REST.
versions:
  feature: api-date-versioning
ms.openlocfilehash: 6689d8c342930a44c7d243c3872cdc431007eb1c
ms.sourcegitcommit: 6185352bc563024d22dee0b257e2775cadd5b797
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 12/09/2022
ms.locfileid: '148192869'
---
## Acerca del control de versiones de la API

{% data reusables.rest-api.about-api-versions %}

{% ifversion ghes %}

## Acerca del control de versiones de {% data variables.product.prodname_ghe_server %} y el control de versiones de la API REST

Las versiones de {% data variables.product.prodname_ghe_server %} se desacoplan de las versiones de la API REST. Puedes actualizar la versión de {% data variables.product.prodname_ghe_server %} pero mantener la misma versión de la API REST, siempre que la versión de la API se incluya en la versión de {% data variables.product.prodname_ghe_server %}. Del mismo modo, puedes actualizar la versión de la API REST sin actualizar los datos {% data variables.product.prodname_ghe_server %}, siempre y cuando la nueva versión de la API REST que elijas esté disponible para la versión de {% data variables.product.prodname_ghe_server %}.

Las notas de la versión de {% data variables.product.prodname_ghe_server %} indicarán cuándo ya no se admite una versión de la API REST. Para más información, consulta "[Notas de la versión](/admin/release-notes)".

{% endif %}

## Especificación de una versión de API

Debes usar el encabezado `X-GitHub-Api-Version` para especificar una versión de API. Por ejemplo:

```shell
$ curl {% data reusables.rest-api.version-header %} https://api.github.com/zen
```

Las solicitudes sin el encabezado `X-GitHub-Api-Version` usarán la versión `{{ initialRestVersioningReleaseDate }}` de forma predeterminada.

Si especificas una versión de API que ya no se admite, recibirás un error `400`.

## Actualización a una nueva versión de API

Antes de actualizar a una nueva versión de la API REST, debes leer el registro de cambios de los cambios importantes que corresponde a la nueva versión de API para comprender qué cambios importantes se incluyen y para obtener más información sobre cómo actualizar a esa versión específica de API. Para más información, consulta "[Cambios importantes](/rest/overview/breaking-changes)".

Al actualizar la integración para especificar la nueva versión de API en el encabezado `X-GitHub-Api-Version`, también deberás realizar los cambios necesarios para que la integración funcione con la nueva versión de API.

Una vez actualizada la integración, pruébala para comprobar que funciona con la nueva versión de API.

## Versiones de API admitidas

Actualmente se admiten las siguientes versiones de la API REST:

{% for apiVersion in allVersions[currentVersion].apiVersions %} {{ apiVersion }} {% endfor %}

También puedes realizar una solicitud de API para obtener todas las versiones de la API admitidas. Para más información, consulta "[Obtener todas las versiones de API](/rest/meta#get-all-api-versions)".
