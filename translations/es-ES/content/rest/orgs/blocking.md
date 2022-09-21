---
title: Bloquear usuarios
intro: ''
versions:
  fpt: '*'
  ghec: '*'
topics:
  - API
miniTocMaxHeadingLevel: 3
allowTitleToDifferFromFilename: true
ms.openlocfilehash: 1649cc0627ed55be5317e0606bb29287dbd3d94a
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/05/2022
ms.locfileid: '147065790'
---
El token que se usa para autenticar la llamada debe tener el ámbito `admin:org` a fin de poder realizar llamadas de bloqueo para una organización. De lo contrario, la respuesta devuelve `HTTP 404`.
