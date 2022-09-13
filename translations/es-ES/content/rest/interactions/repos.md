---
title: Interacciones de los repositorios
shortTitle: Repository
intro: 'Repository interactions API permite a las personas con acceso administrativo o de propietario restringir temporalmente qué tipo de usuario puede comentar, abrir incidencias, o crear solicitudes de incorporación de cambios en un repositorio público.'
versions:
  fpt: '*'
  ghec: '*'
topics:
  - API
miniTocMaxHeadingLevel: 3
allowTitleToDifferFromFilename: true
ms.openlocfilehash: e1d7d0137ddc2334bb08e17a0c8d7069c13d982d
ms.sourcegitcommit: 5f9527483381cfb1e41f2322f67c80554750a47d
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/11/2022
ms.locfileid: '147064670'
---
## Acerca de Repository interactions API

Repository interactions API permite a las personas con acceso administrativo o de propietario restringir temporalmente qué tipo de usuario puede comentar, abrir incidencias, o crear solicitudes de incorporación de cambios en un repositorio público. {% data reusables.interactions.interactions-detail %} Aquí puedes aprender más sobre los tipos de usuario de {% data variables.product.product_name %}:

* {% data reusables.interactions.existing-user-limit-definition %} en el repositorio.
* {% data reusables.interactions.contributor-user-limit-definition %} en el repositorio.
* {% data reusables.interactions.collaborator-user-limit-definition %} en el repositorio.

Si se habilita un límite de interacción para el usuario u organización a la que pertenece el repositorio, éste no podrá cambiarse para el repositorio individual. En su lugar, use los puntos de conexión de interacciones de [usuario](#user) u [organización](#organization) para cambiar el límite de interacción.
