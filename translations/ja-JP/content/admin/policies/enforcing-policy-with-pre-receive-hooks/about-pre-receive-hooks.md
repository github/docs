---
title: pre-receiveフックについて
intro: '*pre-receive フック*は {% data variables.product.prodname_ghe_server %} アプライアンス上で動作するスクリプトで、品質チェックを実装するために利用できます。'
redirect_from:
  - /enterprise/admin/developer-workflow/about-pre-receive-hooks
  - /enterprise/admin/policies/about-pre-receive-hooks
  - /admin/policies/about-pre-receive-hooks
versions:
  enterprise-server: '*'
type: overview
topics:
  - Enterprise
  - Policies
  - Pre-receive hooks
---
プッシュが行われると、各スクリプトは分離された環境で実行され、プッシュの内容についてのチェックを実行できます。 このスクリプトの終了ステータスが0ならプッシュは受け付けられ、0以外なら拒否されることになります。

### 利用のシナリオ
pre-receiveフックは、ビジネスルールを満たしたり、規制の遵守を強制したり、一般的なミスを避けたりするために利用してください。

pre-receiveフックの利用方法の例：

- 正当なチケット番号を含めたり、一定以上の長さでなければならなかったりといった特定のパターンやフォーマットに伴うコミットメッセージを要求する。
- すべてのプッシュを拒否する事でブランチまたはリポジトリをロックする。
- キーワード、パターン、またはファイルタイプをブロックすることにより、機密データがリポジトリに追加されないようする。
- PRの作者が自身の変更をマージしないようにする。

### パフォーマンスとワークフローへの影響
開発者と開発者のワークフローへの影響は大きくなりうるので、注意深く検討することが必要です。 ビジネス上の要求に基づき、思慮深く実装されたpre-receiveフックは、全体として組織に最大のメリットをもたらします。

pre-receiveフックは{% data variables.product.product_location %}のパフォーマンスに意図しない影響をもたらすことがあり、慎重に実装され、レビューされなければなりません。
