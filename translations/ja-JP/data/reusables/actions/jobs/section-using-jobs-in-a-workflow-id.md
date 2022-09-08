---
ms.openlocfilehash: dd25f74bf039724130494c7bd4d55e44760f620b
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/05/2022
ms.locfileid: "145114229"
---
ジョブへの一意の識別子の指定には、`jobs.<job_id>` を使います。 `job_id` キーは文字列で、その値はジョブの設定データのマップです。 `<job_id>` は、`jobs` オブジェクトに固有の文字列に置き換える必要があります。 `<job_id>` は文字または `_` で始まり、英数字、`-`、あるいは `_` のみを含める必要があります。

#### 例: ジョブを作成する

この例では、`job_id` 値が `my_first_job` と `my_second_job` の 2 つのジョブが作成されました。

```yaml
jobs:
  my_first_job:
    name: My first job
  my_second_job:
    name: My second job
```
