---
title: Interacciones de la organización
shortTitle: Organization
intro: 'Organization interactions API permite a los propietarios de las organizaciones restringir temporalmente qué tipo de usuario puede comentar, abrir incidencias o crear solicitudes de incorporación de cambios en los repositorios públicos de la organización.'
versions:
  fpt: '*'
  ghec: '*'
topics:
  - API
miniTocMaxHeadingLevel: 3
allowTitleToDifferFromFilename: true
ms.openlocfilehash: f06bfbe50c7fa43d03329d69bba8816e4559565a
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/05/2022
ms.locfileid: '147062470'
---
## Acerca de Organization interactions API

Organization interactions API permite a los propietarios de las organizaciones restringir temporalmente qué tipo de usuario puede comentar, abrir incidencias o crear solicitudes de incorporación de cambios en los repositorios públicos de la organización. {% data reusables.interactions.interactions-detail %} Aquí puedes aprender más sobre los tipos de usuario de {% data variables.product.product_name %}:

* {% data reusables.interactions.existing-user-limit-definition %} en la organización.
* {% data reusables.interactions.contributor-user-limit-definition %} en la organización.
* {% data reusables.interactions.collaborator-user-limit-definition %} en la organización.

Configurar el límite de interacciones a nivel organizacional sobreescribirá cualquier límite de interacción que se haya configurado para los repositorios individuales que pertenezcan a la organización. A fin de configurar otros límites de interacción para repositorios individuales que pertenezcan a la organización, en su lugar use los puntos de conexión de interacciones [Repositorio](#repository).
