---
ms.openlocfilehash: 95ea94c1f81a3b586d60d96dbd5a882dcdbe89fc
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/05/2022
ms.locfileid: "145098438"
---
你可以使用 `defaults.run` 为工作流中的所有 [`run`](/actions/using-workflows/workflow-syntax-for-github-actions#jobsjob_idstepsrun) 步骤提供默认的 `shell` 和 `working-directory` 选项。 你也可以为只可用于作业的 `run` 设定默认设置。 有关详细信息，请参阅 [`jobs.<job_id>.defaults.run`](/actions/using-workflows/workflow-syntax-for-github-actions#jobsjob_iddefaultsrun)。 您不能在此关键词中使用上下文或表达式。

{% data reusables.actions.defaults-override %}

#### 示例：设置默认 shell 和工作目录

```yaml
defaults:
  run:
    shell: bash
    working-directory: scripts
```
