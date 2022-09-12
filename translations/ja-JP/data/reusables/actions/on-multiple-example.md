---
ms.openlocfilehash: de2ab71ca5c93229329c2887dc71685aa92e199d
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/05/2022
ms.locfileid: "145068189"
---
1 つのイベントまたは複数のイベントを指定できます。 たとえば、次の `on` の値を持つワークフローは、ワークフローのリポジトリ内の任意のブランチにプッシュが行われるとき、または誰かがリポジトリをフォークしたときに実行されます。

```yaml
on: [push, fork]
```

複数のイベントを指定する場合、ワークフローをトリガーするために必要なイベントは 1 つだけです。 ワークフローの複数のトリガー イベントが同時に発生した場合、複数のワークフロー実行がトリガーされます。
