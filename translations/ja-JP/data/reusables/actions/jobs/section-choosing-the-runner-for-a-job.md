---
ms.openlocfilehash: 89c3ed1592c000322cf4f0d6915e355bc81014ed
ms.sourcegitcommit: d0cea547f6a5d991a28c310257cafd616235889f
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 11/01/2022
ms.locfileid: "148120926"
---
`jobs.<job_id>.runs-on` を使って、ジョブを実行するマシンの種類を定義します。 

{% ifversion fpt or ghec %}- 宛先マシンには [、{% data variables.product.prodname_dotcom %}ホステッド ランナー](#choosing-github-hosted-runners)、[{% data variables.actions.hosted_runner %}](#choosing-runners-in-a-group)、または[セルフホステッド ランナー](#choosing-self-hosted-runners)のいずれかを指定できます。{% else %}
- 宛先マシンは、[セルフホステッド ランナー](#choosing-self-hosted-runners)にすることができます。{% endif %}{% ifversion target-runner-groups %} - ランナーに割り当てられたラベル、またはそのグループ メンバーシップ、またはこれらの組み合わせに基づいてランナーをターゲットにすることができます。{% else %}
- ランナーに割り当てられたラベルに基づいてランナーをターゲットにすることができます。{% endif %}
- 1 つの文字列として、または文字列の配列として `runs-on` を指定できます。 
- 文字列の配列を指定すると、指定したすべての `runs-on` 値に一致するすべてのランナーでワークフローが実行されます。 
- 複数のマシンでワークフローを実行する場合は、[`jobs.<job_id>.strategy`](/actions/learn-github-actions/workflow-syntax-for-github-actions#jobsjob_idstrategy) を使います。

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

{% ifversion target-runner-groups %}

### グループ内のランナーを選ぶ

`runs-on` を使用してランナー グループをターゲットにして、そのグループのメンバーである任意のランナーでジョブが実行されるようにすることができます。 よりきめ細かく制御するには、ランナー グループとラベルを組み合わせることもできます。

ランナー グループは、[{% data variables.actions.hosted_runner %}](/actions/using-github-hosted-runners/using-larger-runners) または[セルフホステッド ランナー](/actions/hosting-your-own-runners)のみをメンバーとして持つことができます。

#### 例: グループを使用してジョブの実行場所を制御する

{% data reusables.actions.jobs.example-runs-on-groups %}

#### 例: グループとラベルの組み合わせ

{% data reusables.actions.jobs.example-runs-on-labels-and-groups %}

{% endif %}