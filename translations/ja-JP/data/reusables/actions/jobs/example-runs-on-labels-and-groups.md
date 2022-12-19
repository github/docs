---
ms.openlocfilehash: 718f58c2013f7deda31fd2a300a5a2b3f7e4b5ec
ms.sourcegitcommit: d0cea547f6a5d991a28c310257cafd616235889f
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 11/01/2022
ms.locfileid: "148120920"
---
グループとラベルを組み合わせる場合、ランナーはジョブを実行する資格を得るために両方の要件を満たす必要があります。

この例では、`ubuntu-runners` というランナー グループに、ラベル `ubuntu-20.04-16core` も割り当てられている Ubuntu 16 コア ランナーが設定されています。 `runs-on` キーは `group` と `labels` を組み合わせて、ラベルが一致するグループ内の使用可能な任意のランナーにジョブがルーティングされるようにします。

```yaml
name: learn-github-actions
on: [push]
jobs:
  check-bats-version:
    runs-on:
      group: ubuntu-runners
      labels: ubuntu-20.04-16core
    steps:
      - uses: {% data reusables.actions.action-checkout %}
      - uses: {% data reusables.actions.action-setup-node %}
        with:
          node-version: '14'
      - run: npm install -g bats
      - run: bats -v
```
