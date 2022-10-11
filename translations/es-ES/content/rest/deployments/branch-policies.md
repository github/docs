---
title: Directivas de rama de implementación
allowTitleToDifferFromFilename: true
shortTitle: Deployment branch policies
intro: La API de Deployment branch policies permite administrar directivas de rama de implementación personalizadas.
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - API
miniTocMaxHeadingLevel: 3
ms.openlocfilehash: 70f5d05f0a28e9fa21bf7bc99abbac6bd4a6509a
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/05/2022
ms.locfileid: '147549124'
---
## Información acerca de la API de Deployment branch policies

La API de Deployment branch policies permite especificar patrones de nombre personalizados que las ramas deben cumplir con el fin de implementar en un entorno. La propiedad `deployment_branch_policy.custom_branch_policies` del entorno debe establecerse en `true` para usar estos puntos de conexión. Para actualizar la `deployment_branch_policy` para un entorno, consulte "[Crear o actualizar un entorno](/rest/deployments/environments#create-or-update-an-environment)". 

Para obtener más información sobre cómo restringir las implementaciones de entorno a determinadas ramas, consulte "[Uso de entornos para la implementación](/actions/deployment/targeting-different-environments/using-environments-for-deployment#deployment-branches)".
