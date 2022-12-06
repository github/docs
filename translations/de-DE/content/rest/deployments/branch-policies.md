---
title: Richtlinien für Bereitstellungsbranches
allowTitleToDifferFromFilename: true
shortTitle: Deployment branch policies
intro: Mit der Richtlinien-API für Bereitstellungsbranches kannst du benutzerdefinierte Richtlinien für Bereitstellungsbranches verwalten.
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
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 10/25/2022
ms.locfileid: '148109593'
---
## Informationen zur Richtlinien-API für Bereitstellungsbranches

Mit der Richtlinien-API für Bereitstellungsbranches kannst du benutzerdefinierte Namensmuster angeben, mit denen Branches übereinstimmen müssen, um in einer Umgebung bereitgestellt zu werden. Die `deployment_branch_policy.custom_branch_policies`-Eigenschaft für die Umgebung muss auf `true` festgelegt werden, um diese Endpunkte zu verwenden. Zum Aktualisieren der `deployment_branch_policy` für eine Umgebung findest du unter [Erstellen oder Aktualisieren einer Umgebung](/rest/deployments/environments#create-or-update-an-environment). 

Weitere Informationen zum Einschränken von Umgebungsbereitstellungen auf bestimmte Branches findest du unter [Verwenden von Umgebungen für die Bereitstellung](/actions/deployment/targeting-different-environments/using-environments-for-deployment#deployment-branches).
