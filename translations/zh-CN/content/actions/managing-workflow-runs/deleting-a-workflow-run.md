---
title: 删除工作流程运行
intro: 您可以删除已完成或超过两周的工作流程运行。
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
ms.openlocfilehash: 54e494b2cff73650c0b9d5e46c8ce2772926831f
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/05/2022
ms.locfileid: '145099190'
---
{% data reusables.actions.enterprise-beta %} {% data reusables.actions.enterprise-github-hosted-runners %}

{% data reusables.repositories.permissions-statement-write %}

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.actions-tab %} {% data reusables.repositories.navigate-to-workflow %}
1. 要删除工作流程运行，请使用 {% octicon "kebab-horizontal" aria-label="The horizontal kebab icon" %} 下拉菜单并选择“删除工作流程运行”。

    ![删除工作流程运行](/assets/images/help/settings/workflow-delete-run.png)
2. 查看确认提示，然后单击“是，永久删除此工作流程运行”。

    ![删除工作流程运行确认](/assets/images/help/settings/workflow-delete-run-confirmation.png)
