---
ms.openlocfilehash: 03c7480afe114a1f9fa676f6872be9081289295a
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/05/2022
ms.locfileid: "146688934"
---
一部のイベントには、ワークフローを実行するタイミングをより細かく制御できるアクティビティの種類があります。 `on.<event_name>.types` を使用して、ワークフロー実行をトリガーするイベント アクティビティの種類を定義します。

たとえば、`issue_comment` イベントには、`created`、`edited`、`deleted` のアクティビティの種類があります。 `label` イベントでワークフローがトリガーされる場合、ラベルが作成、編集、または削除されるたびにワークフローが実行されます。 `label` イベントに `created` アクティビティの種類を指定すると、ワークフローはラベルの作成時に実行されますが、ラベルの編集または削除時には実行されません。

```yaml
on:
  label:
    types:
      - created
```

複数のアクティビティの種類を指定した場合、ワークフローをトリガーするために発生する必要があるのは、それらのイベント アクティビティの種類のうちの 1 つだけです。 ワークフローの複数のトリガー イベント アクティビティの種類が同時に発生した場合、複数のワークフロー実行がトリガーされます。 たとえば、次のワークフローは、Issue がオープンされた場合またはラベル付けされた場合にトリガーされます。 2 つのラベルを持つ Issue がオープンされると、3 つのワークフロー実行 (1 つは Issue がオープンされたイベント用、2 つは Issue のラベルが付いたイベント用) が開始されます。

```yaml
on:
  issues:
    types:
      - opened
      - labeled
```

各イベントとそのアクティビティの種類の詳細については、「[ワークフローをトリガーするイベント](/actions/using-workflows/events-that-trigger-workflows)」を参照してください。
