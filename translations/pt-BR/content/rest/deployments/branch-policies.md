---
title: Políticas de branch de implantação
allowTitleToDifferFromFilename: true
shortTitle: Deployment branch policies
intro: A API de políticas de branch de implantação permite que você gerencie essas políticas personalizadas.
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
ms.contentlocale: pt-BR
ms.lasthandoff: 10/25/2022
ms.locfileid: '148107996'
---
## Sobre a API de políticas de branch de implantação

A API de políticas de branch de implantação permite que você especifique padrões de nome personalizados aos quais os branches devem corresponder para a implantação em um ambiente. A propriedade `deployment_branch_policy.custom_branch_policies` do ambiente deve ser definida como `true` para usar esses pontos de extremidade. Para atualizar o ambiente `deployment_branch_policy`, confira "[Criar ou atualizar um ambiente](/rest/deployments/environments#create-or-update-an-environment)". 

Para obter mais informações sobre como restringir implantações de ambiente a determinados branches, confira "[Como usar ambientes para implantação](/actions/deployment/targeting-different-environments/using-environments-for-deployment#deployment-branches)".
