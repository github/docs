---
ms.openlocfilehash: 5b827a2f598a6067ae3c486dbe046effda95bb7f
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/11/2022
ms.locfileid: "145089472"
---
ジョブが参照する環境を定義するには、`jobs.<job_id>.environment` を使います。 環境を参照するジョブがランナーに送られる前に、その環境のすべて保護ルールはパスしなければなりません。 詳細については、「[デプロイに環境を使用する](/actions/deployment/using-environments-for-deployment)」を参照してください。

環境 `name` のみ、または `name` と `url` を含む環境オブジェクトという形式で環境を指定できます。 URL はデプロイ API の `environment_url` にマップされます。 デプロイ API の詳細については、「[デプロイ](/rest/reference/repos#deployments)」を参照してください。

### 例: 1 つの環境名を使う
{% raw %}
```yaml
environment: staging_environment
```
{% endraw %}

### 例: 環境名と URL を使う

```yaml
environment:
  name: production_environment
  url: https://github.com
```

URL は式で指定できます。また、[`secrets` コンテキスト](/actions/learn-github-actions/contexts#contexts)を除く任意のコンテキストを使用できます。 式の詳細については、「[式](/actions/learn-github-actions/expressions)」を参照してください。

### 例: 出力を URL として使う
{% raw %}
```yaml
environment:
  name: production_environment
  url: ${{ steps.step_id.outputs.url_output }}
```
{% endraw %}
