---
title: Máquinas de Codespaces
allowTitleToDifferFromFilename: true
shortTitle: Machines
intro: Usa la API de REST para administrar la disponibilidad de los tipos de máquina de un codespace.
versions:
  fpt: '*'
  ghec: '*'
topics:
  - API
miniTocMaxHeadingLevel: 3
ms.openlocfilehash: 5b53ceb3fb7cf137f61285b1f9ed0aa7838a9179
ms.sourcegitcommit: 6185352bc563024d22dee0b257e2775cadd5b797
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 12/09/2022
ms.locfileid: '148193546'
---
## Acerca de las máquinas de {% data variables.product.prodname_codespaces %}

Puedes determinar qué tipos de máquina están disponibles para crear un codespace, ya sea en un repositorio definido o como un usuario autenticado. Para más información, vea "[Acerca de los tipos de máquina](/codespaces/developing-in-codespaces/changing-the-machine-type-for-your-codespace#about-machine-types)".

También puede usar esta información cuando cambie la máquina de un codespace existente mediante la actualización de su propiedad `machine`. La actualización de la máquina tomará lugar la siguiente vez que el codespace se reinicie. Para más información, vea "[Cambio del tipo de máquina para el codespace](/codespaces/developing-in-codespaces/changing-the-machine-type-for-your-codespace)".
