---
title: 在已启用预生成的分支上测试开发容器配置更改
shortTitle: Test dev container changes
allowTitleToDifferFromFilename: true
intro: 更改为预生成启用的分支的开发容器配置时，应在 codespace 中测试更改。
versions:
  fpt: '*'
  ghec: '*'
type: how_to
topics:
  - Codespaces
  - Set up
permissions: People with write permissions to a repository can create or edit the dev container configuration for a branch.
ms.openlocfilehash: 29b44d0fb0b3bb3211f0c204cc7e99e39ab89b79
ms.sourcegitcommit: e8c012864f13f9146e53fcb0699e2928c949ffa8
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 11/09/2022
ms.locfileid: '148159423'
---
对已启用预生成的分支的开发容器配置所做的任何更改都会导致对 codespace 配置和关联的预生成进行更新。 因此，在将更改提交到主动使用的存储库分支之前，在 codespace 中从测试分支测试此类更改非常重要。 这将确保你不会为团队引入中断性变更。

有关详细信息，请参阅“[开发容器简介](/codespaces/setting-up-your-project-for-codespaces/introduction-to-dev-containers)”。

## 测试对开发容器配置的更改

1. 从想要更改其开发容器的已启用预生成的分支中创建 codespace。 有关详细信息，请参阅“[为存储库创建 codespace](/codespaces/developing-in-codespaces/creating-a-codespace-for-a-repository#creating-a-codespace-for-a-repository)”。
1. 在 codespace 中，签出测试分支。 有关详细信息，请参阅[在 codespace 中使用源代码管理](/codespaces/developing-in-codespaces/using-source-control-in-your-codespace#creating-or-switching-branches)。
1. 对开发容器配置进行所需的更改。
1. 通过重新生成容器来应用更改。 有关详细信息，请参阅“[开发容器简介](/codespaces/setting-up-your-project-for-codespaces/introduction-to-dev-containers#applying-configuration-changes-to-a-codespace)”。
1. 一切正常之后，我们还建议从测试分支创建新的 codespace，以确保一切正常工作。 然后，可以将更改提交到存储库的默认分支或活动功能分支，从而触发该分支的预生成的更新。

   {% note %}
   
   注意：创建此 codespace 所需的时间比平时长，因为它不会从预生成创建。
   
   {% endnote %}
