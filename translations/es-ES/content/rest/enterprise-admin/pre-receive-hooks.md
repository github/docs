---
title: Enlaces de recepción previa
intro: 'La API de Ganchos Pre-recepción te permite crear, listar, actualizar y borrar los ganchos de pre-recepción.'
versions:
  ghes: '*'
topics:
  - API
miniTocMaxHeadingLevel: 3
ms.openlocfilehash: dd776e7ec95a970f025d4de1ec03f07b2a7b29f7
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/05/2022
ms.locfileid: '147066158'
---
*Solo está disponible para los administradores de sitios [autenticados](/rest/overview/resources-in-the-rest-api#authentication).* Los usuarios normales recibirán una respuesta `404` si intentan acceder a ella.

### Atributos de objeto

#### Ganchos de pre-recepción

| Nombre                             | Tipo      | Descripción                                                     |
|----------------------------------|-----------|-----------------------------------------------------------------|
| `name`                           | `string`  | El nombre del gancho.                                           |
| `script`                         | `string`  | El script que ejecuta el gancho.                                  |
| `script_repository`              | `object`  | El repositorio de GitHub en donde se mantiene el script.                 |
| `environment`                    | `object`  | El ambiente de pre-recepción en donde se ejecuta el script.       |
| `enforcement`                    | `string`  | El estado de las imposiciones para este gancho.                         |
| `allow_downstream_configuration` | `boolean` | Si las imposiciones pueden o no ignorarse a nivel de organización o de repositorio. |

Los valores posibles para la *aplicación* son `enabled`, `disabled` y `testing`. `disabled` indica que no se ejecutará el enlace previo a la recepción. `enabled` indica que se ejecutará y rechazará cualquier inserción que dé como resultado un estado distinto a cero. `testing` indica que el script se ejecutará pero no rechazará ninguna inserción.
