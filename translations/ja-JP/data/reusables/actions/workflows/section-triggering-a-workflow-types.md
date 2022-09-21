---
ms.openlocfilehash: 67b4dd3749936efb6a7eef53fc38543c3c8a6451
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/10/2022
ms.locfileid: "147878850"
---
`on.<event_name>.types` を使用して、ワークフロー実行をトリガーするアクティビティの種類を定義します。 ほとんどの GitHub イベントは、2 つ以上のアクティビティタイプからトリガーされます。  たとえば、`label` は、ラベルが `created`、`edited`、または `deleted` の場合にトリガーされます。 `types` キーワードを使用すると、ワークフローを実行させるアクティビティの範囲を狭くすることができます。 Webhook イベントをトリガーするアクティビティの種類が 1 つのみの場合、`types` キーワードは不要です。

イベント `types` の配列を使用できます。 各イベントとそのアクティビティの種類の詳細については、「[ワークフローをトリガーするイベント](/actions/using-workflows/events-that-trigger-workflows#available-events)」を参照してください。

```yaml
on:
  label:
    types: [created, edited]
```
