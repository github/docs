---
title: Enlaces de recepción previa de la organización
intro: Organization Pre-receive Hooks API permite ver y modificar la aplicación de enlaces previos a la recepción que están disponibles para una organización.
versions:
  ghes: '*'
topics:
  - API
miniTocMaxHeadingLevel: 3
allowTitleToDifferFromFilename: true
ms.openlocfilehash: 802ed40ac8e42c1f0a9ef3b6bab4a150dd68603c
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/05/2022
ms.locfileid: '147063966'
---
### Atributos de objeto

| Nombre                             | Tipo      | Descripción                                               |
|----------------------------------|-----------|-----------------------------------------------------------|
| `name`                           | `string`  | El nombre del gancho.                                     |
| `enforcement`                    | `string`  | El estado de imposición del gancho en este repositorio. |
| `allow_downstream_configuration` | `boolean` | Si los repositorios pueden ignorar la imposición o no.            |
| `configuration_url`              | `string`  | URL para la terminal en donde se configuró la imposición.            |

Los valores posibles para la *aplicación* son `enabled`, `disabled` y `testing`. `disabled` indica que no se ejecutará el enlace previo a la recepción. `enabled` indica que se ejecutará y rechazará cualquier inserción que dé como resultado un estado distinto a cero. `testing` indica que el script se ejecutará pero no rechazará ninguna inserción.

`configuration_url` podría ser un enlace a este punto de conexión o ser la configuración global de este enlace. Solo los administradores de sistema pueden acceder a la configuración global.
