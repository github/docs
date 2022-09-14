---
title: Ambientes de pre-recepción
intro: 'La API de Ambientes de Pre-recepción te permite crear, listar, actualizar y borrar ambientes para los ganchos de pre-recepción.'
versions:
  ghes: '*'
  ghae: '*'
topics:
  - API
miniTocMaxHeadingLevel: 3
ms.openlocfilehash: 9db8635691ae2f8fcb8649b648948763168081ac
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/11/2022
ms.locfileid: '147883266'
---
*Solo está disponible para los administradores de sitios [autenticados](/rest/overview/resources-in-the-rest-api#authentication).* Los usuarios normales recibirán una respuesta `404` si intentan acceder a ella.

### Atributos de objeto

#### Ambiente de pre-recepción

| Nombre                  | Tipo      | Descripción                                                                |
|-----------------------|-----------|----------------------------------------------------------------------------|
| `name`                | `string`  | El nombre del ambiente como se muestra en la IU.                        |
| `image_url`           | `string`  | La URL del tarball que se descargará y extraerá.                  |
| `default_environment` | `boolean` | Si este es el ambiente predeterminado que viene con {% data variables.product.product_name %} o no. |
| `download`            | `object`  | El estado de descarga de este ambiente.                                        |
| `hooks_count`         | `integer` | La cantidad de ganchos de pre-recepción que utilizan este ambiente.                 |

#### Descarga del Ambiente de Pre-recepción

| Nombre            | Tipo     | Descripción                                             |
|-----------------|----------|---------------------------------------------------------|
| `state`         | `string` | El estado de la mayoría de las descargas recientes.                  |
| `downloaded_at` | `string` | La hora en la cual iniciaron la mayoría de las descrgas recientes.         |
| `message`       | `string` | Cuando algo falla, este tendrá cualquier mensaje de error que se haya producido. |

Los valores posibles de `state` son: `not_started`, `in_progress`, `success` y `failed`.
