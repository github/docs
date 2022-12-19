---
title: Ganchos de pre-recepción del repositorio
intro: Repository Pre-receive Hooks API permite ver y modificar la aplicación de enlaces previos a la recepción que están disponibles para un repositorio.
versions:
  ghes: '*'
topics:
  - API
miniTocMaxHeadingLevel: 3
allowTitleToDifferFromFilename: true
ms.openlocfilehash: 63ba6f4f7d67b43dd39609a6520a0938365cfc12
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/05/2022
ms.locfileid: '147065166'
---
### Atributos de objeto

| Nombre                | Tipo     | Descripción                                               |
|---------------------|----------|-----------------------------------------------------------|
| `name`              | `string` | El nombre del gancho.                                     |
| `enforcement`       | `string` | El estado de imposición del gancho en este repositorio. |
| `configuration_url` | `string` | URL para la terminal en donde se configuró la imposición.            |

Los valores posibles para la *aplicación* son `enabled`, `disabled` y `testing`. `disabled` indica que no se ejecutará el enlace previo a la recepción. `enabled` indica que se ejecutará y rechazará cualquier inserción que dé como resultado un estado distinto a cero. `testing` indica que el script se ejecutará pero no rechazará ninguna inserción.

`configuration_url` podría ser un vínculo a este repositorio, al propietario de su organización o a su configuración global. La autorización para acceder a este punto de conexión en `configuration_url` se determina en el nivel de administrador del sitio o de propietario.
