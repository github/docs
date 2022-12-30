---
ms.openlocfilehash: 5b827a2f598a6067ae3c486dbe046effda95bb7f
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/10/2022
ms.locfileid: "145084914"
---
使用 `jobs.<job_id>.environment` 定义作业引用的环境。 在将引用环境的作业发送到运行器之前，必须通过所有环境保护规则。 有关详细信息，请参阅“[使用环境进行部署](/actions/deployment/using-environments-for-deployment)”。

可以将环境仅作为环境 `name` 提供，也可以作为具有 `name` 和 `url` 的环境对象提供。 URL 将映射到部署 API 中的 `environment_url`。 有关部署 API 的详细信息，请参阅“[部署](/rest/reference/repos#deployments)”。

### 使用单一环境名称的示例
{% raw %}
```yaml
environment: staging_environment
```
{% endraw %}

### 使用环境名称和 URL 的示例

```yaml
environment:
  name: production_environment
  url: https://github.com
```

URL 可以是表达式，并且可以使用除 [`secrets` 上下文](/actions/learn-github-actions/contexts#contexts)以外的任何上下文。 有关表达式的更多信息，请参阅“[表达式](/actions/learn-github-actions/expressions)”。

### 将输出用作 URL 的示例
{% raw %}
```yaml
environment:
  name: production_environment
  url: ${{ steps.step_id.outputs.url_output }}
```
{% endraw %}
