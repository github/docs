---
ms.openlocfilehash: bca2838e65fedf0ec5d512a21891b594dc90c1f6
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/10/2022
ms.locfileid: "147521531"
---
`jobs.<job_id>.runs-on` を使って、ジョブを実行するマシンの種類を定義します。 {% ifversion fpt or ghec %}マシンは {% data variables.product.prodname_dotcom %} ホステッド ランナーかセルフホステッド ランナーのいずれかです。{% endif %}`runs-on` は単一の文字列か、文字列の配列として指定できます。 文字列の配列を指定した場合、ワークフローは、ラベルが指定された `runs-on` 値のすべてに一致するセルフホステッド ランナーで実行されます (使用可能な場合)。 複数のマシンでワークフローを実行する場合は、[`jobs.<job_id>.strategy`](/actions/learn-github-actions/workflow-syntax-for-github-actions#jobsjob_idstrategy) を使います。


{% ifversion fpt or ghec or ghes %} {% data reusables.actions.enterprise-github-hosted-runners %}

### {% data variables.product.prodname_dotcom %} ホステッド ランナーの選択

{% data variables.product.prodname_dotcom %} ホステッド ランナーを使うと、各ジョブは `runs-on` で指定したランナー イメージの新しいインスタンスで実行されます。

利用可能な{% data variables.product.prodname_dotcom %}ホストランナーの種類は以下のとおりです。

{% data reusables.actions.supported-github-runners %}

#### 例: オペレーティング システムの指定

```yaml
runs-on: ubuntu-latest
```

詳細については、「[{% data variables.product.prodname_dotcom %} ホステッド ランナーの概要](/actions/using-github-hosted-runners/about-github-hosted-runners)」を参照してください。
{% endif %}

{% ifversion fpt or ghec or ghes %}
### セルフホステッド ランナーの選択
{% endif %}

{% data reusables.actions.self-hosted-runner-labels-runs-on %}

#### 例: ランナー選択のためのラベルの使用

```yaml
runs-on: [self-hosted, linux]
```

詳細については、「[セルフホステッド ランナーについて](/github/automating-your-workflow-with-github-actions/about-self-hosted-runners)」と「[ワークフローでのセルフホステッド ランナーの使用](/github/automating-your-workflow-with-github-actions/using-self-hosted-runners-in-a-workflow)」を参照してください。
