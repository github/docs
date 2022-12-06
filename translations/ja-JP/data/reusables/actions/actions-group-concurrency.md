---
ms.openlocfilehash: a9f12214edcef8a107ad9c447fea7207cfdc48f4
ms.sourcegitcommit: 7a74d5796695bb21c30e4031679253cbc16ceaea
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 11/28/2022
ms.locfileid: "148184087"
---
並行ジョブかワークフローがキューに入っている場合、リポジトリ内の同じ並行グループを使う他のジョブかワークフローが進行中だと、キューイングされたジョブかワークフローは `pending` になります。 この並行グループ内の以前の保留中のジョブもしくはワークフローは、キャンセルされます。 同じコンカレンシー グループ内の現在実行中のジョブかワークフローもキャンセルするには、`cancel-in-progress: true` を指定します。

### 並行性とデフォルトの動作の使用例

{% raw %}
```yaml
concurrency: staging_environment
```
{% endraw %}

{% raw %}
```yaml
concurrency: ci-${{ github.ref }}
```
{% endraw %}

### 並行性を使って進行中のジョブもしくは実行をキャンセルする例

{% raw %}
```yaml
concurrency:
  group: ${{ github.ref }}
  cancel-in-progress: true
```
{% endraw %}

### 例: フォールバック値の使用

特定のイベントにのみ定義されるプロパティでグループ名を作成する場合、フォールバック値を使用できます。 たとえば、`github.head_ref` は `pull_request` イベントにのみ定義されます。 ワークフローが `pull_request` イベントに加えて他のイベントにも応答する場合、構文エラーを回避するためにフォールバックを指定する必要があります。 次のコンカレンシー グループは、`pull_request` イベントで進行中のジョブか実行のみを取り消します。`github.head_ref` が未定義の場合、コンカレンシー グループは実行 ID にフォールバックします。これは、一意であり、実行に対して定義されていることが保証されています。

{% raw %}
```yaml
concurrency:
  group: ${{ github.head_ref || github.run_id }}
  cancel-in-progress: true
```
{% endraw %}


### 例: 現在のワークフローで進行中のジョブまたは実行のみを取り消します

 同じリポジトリに複数のワークフローがある場合、他のワークフローの進行中のジョブまたは実行が取り消されないように、コンカレンシー グループ名はワークフロー間で一意である必要があります。 そうでない場合、ワークフローに関係なく、以前に進行中または保留中のジョブが取り消されます。

同じワークフローの進行中の実行だけを取り消すには、`github.workflow` プロパティを使ってコンカレンシー グループを構築します。

{% raw %}
```yaml
concurrency:
  group: ${{ github.workflow }}-${{ github.ref }}
  cancel-in-progress: true
```
{% endraw %}

