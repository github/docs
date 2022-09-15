---
title: Interacciones del usuario
shortTitle: User
allowTitleToDifferFromFilename: true
intro: 'La API de interacciones de usuario te permite restringir temporalmente qué tipo de usuario puede comentar, abrir incidencias o crear solicitudes de incorporación de cambios en tus repositorios públicos.'
versions:
  fpt: '*'
  ghec: '*'
topics:
  - API
miniTocMaxHeadingLevel: 3
ms.openlocfilehash: e61096e6f09a9c17608e67846c138142c527c314
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/05/2022
ms.locfileid: '147066902'
---
## Acerca de la API de interacciones del usuario

La API de interacciones de usuario te permite restringir temporalmente qué tipo de usuario puede comentar, abrir incidencias o crear solicitudes de incorporación de cambios en tus repositorios públicos. {% data reusables.interactions.interactions-detail %} Aquí puedes aprender más sobre los tipos de usuario de {% data variables.product.product_name %}:

* {% data reusables.interactions.existing-user-limit-definition %} de interactuar con tus repositorios.
* {% data reusables.interactions.contributor-user-limit-definition %} de interactuar con tus repositorios.
* {% data reusables.interactions.collaborator-user-limit-definition %} de interactuar con tus repositorios.

El configurar el límite de interacción a nivel de usuario sobreescribirá cualquier límite de interacción que se configure para los repositorios individuales que le pertenezcan a éste. A fin de configurar otros límites de interacción para repositorios individuales que pertenezcan al usuario, en su lugar, use los puntos de conexión de interacciones de [repositorio](#repository).
