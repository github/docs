---
title: 部署分支策略
allowTitleToDifferFromFilename: true
shortTitle: Deployment branch policies
intro: 使用部署分支策略 API 可以管理自定义部署分支策略。
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - API
miniTocMaxHeadingLevel: 3
ms.openlocfilehash: 70f5d05f0a28e9fa21bf7bc99abbac6bd4a6509a
ms.sourcegitcommit: 76b840f45ba85fb79a7f0c1eb43bc663b3eadf2b
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/12/2022
ms.locfileid: '147549109'
---
## 关于部署分支策略 API

使用部署分支策略 API 可以指定分支必须匹配才能部署到环境的自定义名称模式。 环境的 `deployment_branch_policy.custom_branch_policies` 属性必须设置为 `true` 才能使用这些终结点。 若要更新环境的 `deployment_branch_policy`，请参阅“[创建或更新环境](/rest/deployments/environments#create-or-update-an-environment)”。 

有关将环境部署限制为某些分支的详细信息，请参阅“[使用环境进行部署](/actions/deployment/targeting-different-environments/using-environments-for-deployment#deployment-branches)”。
