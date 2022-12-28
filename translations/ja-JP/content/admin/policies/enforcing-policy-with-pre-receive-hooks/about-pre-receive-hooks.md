---
title: pre-receiveフックについて
intro: '*"pre-receive フック"* は {% data variables.product.prodname_ghe_server %} アプライアンス上で動作するスクリプトで、品質チェックを実装するために利用できます。'
redirect_from:
  - /enterprise/admin/developer-workflow/about-pre-receive-hooks
  - /enterprise/admin/policies/about-pre-receive-hooks
  - /admin/policies/about-pre-receive-hooks
versions:
  ghes: '*'
type: overview
topics:
  - Enterprise
  - Policies
  - Pre-receive hooks
ms.openlocfilehash: a62d5391f9733c4a79ea8ba5d5f8f0d821d47d5c
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/11/2022
ms.locfileid: '145112518'
---
プッシュが行われると、各スクリプトは分離された環境で実行され、プッシュの内容についてのチェックを実行できます。 このスクリプトの終了ステータスが0ならプッシュは受け付けられ、0以外なら拒否されることになります。

## 使用シナリオ
pre-receiveフックは、ビジネスルールを満たしたり、規制の遵守を強制したり、一般的なミスを避けたりするために利用してください。

pre-receiveフックの利用方法の例：

- 正当なチケット番号を含めたり、一定以上の長さでなければならなかったりといった特定のパターンやフォーマットに伴うコミットメッセージを要求する。
- すべてのプッシュを拒否する事でブランチまたはリポジトリをロックする。
- キーワード、パターン、またはファイルタイプをブロックすることにより、機密データがリポジトリに追加されないようする。
- PRの作者が自身の変更をマージしないようにする。

## パフォーマンスとワークフローへの影響
開発者と開発者のワークフローへの影響は大きくなりうるので、注意深く検討することが必要です。 ビジネス上の要求に基づき、思慮深く実装されたpre-receiveフックは、全体として組織に最大のメリットをもたらします。

pre-receive フックは {% data variables.product.product_location %} のパフォーマンスに意図しない影響をもたらすことがあるため、慎重に実装して確認する必要があります。
