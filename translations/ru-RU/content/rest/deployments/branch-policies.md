---
title: Политики ветвей развертывания
allowTitleToDifferFromFilename: true
shortTitle: Deployment branch policies
intro: API политик ветвей развертывания позволяет управлять настраиваемыми политиками ветвей развертывания.
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - API
miniTocMaxHeadingLevel: 3
ms.openlocfilehash: 109bf81019d62e4c654ba6da4fa71f8fd359ceb4
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: MT
ms.contentlocale: ru-RU
ms.lasthandoff: 10/25/2022
ms.locfileid: '148109592'
---
## Сведения об API политик ветвей развертывания

API политик развертывания позволяет указывать пользовательские шаблоны имен, которые должны соответствовать ветвям для развертывания в среде. Необходимо задать свойство `true` для среды, чтобы разрешить `deployment_branch_policy.custom_branch_policies` использовать эти конечные точки. Сведения об обновлении `deployment_branch_policy` для среды см. в разделе [Создание или обновление среды](/rest/deployments/environments#create-or-update-an-environment). 

Дополнительные сведения об ограничении развертываний среды для определенных ветвей см. в разделе [Использование сред для развертывания](/actions/deployment/targeting-different-environments/using-environments-for-deployment#deployment-branches).
