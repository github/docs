---
title: Pre-receive Environments
intro: 'La API de Ambientes de Pre-recepción te permite crear, listar, actualizar y borrar ambientes para los ganchos de pre-recepción.'
versions:
  ghes: '*'
  ghae: '*'
topics:
  - API
miniTocMaxHeadingLevel: 3
---

*Solo se encuentra disponible para los administradores de sitio [autenticados.](/rest/overview/resources-in-the-rest-api#authentication)* Los usuarios normales recibirán una respuesta `404` si intentan acceder a ella.

### Atributos de objeto

#### Ambiente de pre-recepción

| Nombre                | Tipo        | Descripción                                                                                         |
| --------------------- | ----------- | --------------------------------------------------------------------------------------------------- |
| `name (nombre)`       | `secuencia` | El nombre del ambiente como se muestra en la IU.                                                    |
| `image_url`           | `secuencia` | La URL del tarball que se descargará y extraerá.                                                    |
| `default_environment` | `boolean`   | Si este es el ambiente predeterminado que viene con {% data variables.product.product_name %} o no. |
| `download`            | `objeto`    | El estado de descarga de este ambiente.                                                             |
| `hooks_count`         | `número`    | La cantidad de ganchos de pre-recepción que utilizan este ambiente.                                 |

#### Descarga del Ambiente de Pre-recepción

| Nombre          | Tipo        | Descripción                                                                      |
| --------------- | ----------- | -------------------------------------------------------------------------------- |
| `state`         | `secuencia` | El estado de la mayoría de las descargas recientes.                              |
| `downloaded_at` | `secuencia` | La hora en la cual iniciaron la mayoría de las descrgas recientes.               |
| `message`       | `secuencia` | Cuando algo falla, este tendrá cualquier mensaje de error que se haya producido. |

Los valores posibles para `state` son `not_started`, `in_progress`, `success`, `failed`.
