---
ms.openlocfilehash: ec6ab3ed5541819ee7578b34ce61fc11de31b51f
ms.sourcegitcommit: d0cea547f6a5d991a28c310257cafd616235889f
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 11/01/2022
ms.locfileid: "148120917"
---

{% ifversion target-runner-groups %}{% ifversion ghec or ghae or ghes %}
## ランナー グループに一意の名前を使用する

{% data variables.product.prodname_actions %} では、ランナー グループ名が Organization レベルで一意である必要があります。 つまり、Organization は、Enterprise 内のランナー グループと同じ名前を持つものを作成できなくなります。 さらに、ユーザーには、Enterprise 内のグループと同じ名前を共有するすべてのランナー グループに、Organization グループの名前を変更することを提案する警告バナーが表示されます。

あいまいさを回避するために、Organization と Enterprise に重複するランナー グループがある場合、ワークフローは失敗します。 これに対処するには、Organization 内または Enterprise のいずれかのランナー グループの名前を変更するか、ワークフロー ファイルを更新してランナー グループ名にプレフィックスを追加します。

- `org/` または `organization/`
- `ent/` または `enterprise/`

### 例: プレフィックスを使用してランナー グループを区別する

たとえば、Organization 内に `my-group` という名前のランナー グループがあり、Enterprise 内に `my-group` という名前のランナー グループがある場合は、ワークフロー ファイルを更新して、`org/my-group` または `ent/my-group` を使用して 2 つを区別できます。

`org/`の使用

```yaml
runs-on:
  group: org/my-group
  labels: [ self-hosted, label-1 ]
```

`ent/`の使用

```yaml
runs-on:
  group: ent/my-group
  labels: [ self-hosted, label-1 ]
```

{% endif %}

{% endif %}
