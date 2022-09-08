---
title: Máquinas de Codespaces
allowTitleToDifferFromFilename: true
shortTitle: Machines
intro: 'Codespaces machines API permite que un usuario determine qué tipos de máquina están disponibles para crear un codespace, ya sea en un repositorio definido o como un usuario autenticado.'
versions:
  fpt: '*'
  ghec: '*'
topics:
  - API
miniTocMaxHeadingLevel: 3
ms.openlocfilehash: 4ef510cd054696025d885bec854f5360cae17e96
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/05/2022
ms.locfileid: '147067982'
---
## Acerca de Codespaces machines API

Codespaces machines API permite que un usuario determine qué tipos de máquina están disponibles para crear un codespace, ya sea en un repositorio definido o como un usuario autenticado. Para más información, vea "[Acerca de los tipos de máquina](/codespaces/developing-in-codespaces/changing-the-machine-type-for-your-codespace#about-machine-types)".

También puede usar esta información cuando cambie la máquina de un codespace existente mediante la actualización de su propiedad `machine`. La actualización de la máquina tomará lugar la siguiente vez que el codespace se reinicie. Para más información, vea "[Cambio del tipo de máquina para el codespace](/codespaces/developing-in-codespaces/changing-the-machine-type-for-your-codespace)".
