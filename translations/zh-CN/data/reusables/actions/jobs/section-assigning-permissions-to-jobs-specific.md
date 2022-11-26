---
ms.openlocfilehash: 7013bd204f8af1a27bbba837fda49eb7fbfe779b
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/11/2022
ms.locfileid: "145084921"
---
在特定的作业中，你可以使用 `jobs.<job_id>.permissions` 修改授予 `GITHUB_TOKEN` 的默认权限，根据需要添加或删除访问权限，以便只授予所需的最低访问权限。 有关的详细信息，请参阅“[工作流中的身份验证](/actions/reference/authentication-in-a-workflow#permissions-for-the-github_token)”。

通过在作业定义中指定权限，可根据需要为每个作业的 `GITHUB_TOKEN` 配置一组不同的权限。 或者，您也可以为工作流程中的所有作业指定权限。 有关在工作流级别定义权限的信息，请参阅 [`permissions`](/actions/using-workflows/workflow-syntax-for-github-actions#permissions)。

{% data reusables.actions.github-token-available-permissions %} {% data reusables.actions.forked-write-permission %}

#### 示例：为特定作业设置权限

本示例显示为将仅应用到作业 `stale` 的 `GITHUB_TOKEN` 设置的权限。 为 `issues` 和 `pull-requests` 范围授予写入权限。 所有其他范围将没有访问权限。

```yaml
jobs:
  stale:
    runs-on: ubuntu-latest

    permissions:
      issues: write
      pull-requests: write

    steps:
      - uses: {% data reusables.actions.action-stale %}
```
