---
ms.openlocfilehash: dae1f0d42b9b0b2e122bfcfc2a096d062efd8ee0
ms.sourcegitcommit: 1309b46201604c190c63bfee47dce559003899bf
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/10/2022
ms.locfileid: "145098439"
---
使用 `jobs.<job_id>.defaults.run` 为作业中的所有 `run` 步骤提供默认的 `shell` 和 `working-directory`。 此部分不允许上下文和表达式。

你可以为作业中的所有 [`run`](/actions/using-workflows/workflow-syntax-for-github-actions#jobsjob_idstepsrun) 步骤提供默认的 `shell` 和 `working-directory` 选项。 你也可以为整个工作流的 `run` 设置默认设置。 有关详细信息，请参阅 [`jobs.defaults.run`](/actions/using-workflows/workflow-syntax-for-github-actions#defaultsrun)。 您不能在此关键词中使用上下文或表达式。

{% data reusables.actions.defaults-override %}

#### 示例：为作业设置默认 `run` 步骤选项

```yaml
jobs:
  job1:
    runs-on: ubuntu-latest
    defaults:
      run:
        shell: bash
        working-directory: scripts
```
