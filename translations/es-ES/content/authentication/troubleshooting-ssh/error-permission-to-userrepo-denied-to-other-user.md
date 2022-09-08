---
title: 'Error: Permiso de usuario/repo denegado a otro usuario'
intro: Este error significa que la clave con la que estás subiendo está conectada con una cuenta que no tiene acceso al repositorio.
redirect_from:
  - /articles/error-permission-to-user-repo-denied-to-other-user
  - /articles/error-permission-to-userrepo-denied-to-other-user
  - /github/authenticating-to-github/error-permission-to-userrepo-denied-to-other-user
  - /github/authenticating-to-github/troubleshooting-ssh/error-permission-to-userrepo-denied-to-other-user
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - SSH
shortTitle: Permission denied other-user
ms.openlocfilehash: b46df8f9e8671008b37d3db69e2094e96e0413b8
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/05/2022
ms.locfileid: '145091742'
---
Para resolverlo, el propietario del repositorio (`user`) debe agregar su cuenta (`other-user`) como colaborador en el repositorio o en un equipo que tenga acceso de escritura al repositorio.
