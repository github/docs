---
title: ワークフローをキャンセルする
intro: '進行中のワークフロー実行をキャンセルできます。 ワークフロー実行をキャンセルすると、{% data variables.product.prodname_dotcom %} はそのワークフローの一部であるすべてのジョブとステップをキャンセルします。'
product: '{% data reusables.gated-features.actions %}'
versions:
  free-pro-team: '*'
  enterprise-server: '>=2.22'
---

{% data variables.product.prodname_actions %} の支払いを管理する
{% data variables.product.prodname_dotcom %}は、macOSランナーのホストに[MacStadium](https://www.macstadium.com/)を使用しています。

{% data reusables.repositories.permissions-statement-write %}

### ワークフローの実行をキャンセルする

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.actions-tab %}
{% data reusables.repositories.navigate-to-workflow %}
{% data reusables.repositories.view-run %}
1. ワークフローの右上隅にある [**ワークフローのキャンセル**] をクリックします。 ![[Cancel check suite] ボタン](/assets/images/help/repository/cancel-check-suite.png)

### ワークフロー実行をキャンセルするために {% data variables.product.prodname_dotcom %} が実行するステップ

ワークフローの実行をキャンセルする場合、ワークフローの実行に関連するリソースを使用する他のソフトウェアを実行している可能性があります。 ワークフロー実行に関連するリソースを解放するため、{% data variables.product.prodname_dotcom %} がワークフロー実行をキャンセルする際のステップを知っておくと役立つ場合があります。

1. ワークフローの実行をキャンセルするには、現在実行中のすべてのジョブに対して条件</code> `を再評価します。 条件が true`に評価 `場合、ジョブはキャンセルされません。 例えば、条件 <code>: always()` が true と評価され、ジョブの実行が継続されます。 条件がない場合、前のステップが正常に終了した場合にのみ実行される条件 `の条件と同等です`。
2. キャンセルする必要があるジョブについては、サーバーは、キャンセルする必要があるジョブを持つすべてのランナー マシンにキャンセル メッセージを送信します。
3. 実行を継続するジョブの場合、サーバーは、未完了のステップの条件</code> 場合、 `を再評価します。 条件が true`に `評価された場合、ステップは引き続き実行されます。</li>
<li>キャンセルが必要なステップの場合、ランナーマシンは、ステップのエントリープロセスに <code>SIGINT/Ctrl-C` を送信します(javascriptアクションの`ノード` 、コンテナアクションのドッカー</code> を `、ステップで実行` `を使用する場合は <code>のbash/cmd/pwd` を送信します)。 プロセスが 7500 ミリ秒以内に終了しない場合、ランナーは `SIGTERM/Ctrl-Break` をプロセスに送信し、プロセスが終了するまで 2500 ミリ秒待ちます。 プロセスがまだ実行中の場合、ランナーはプロセスツリーを強制終了します。
5. 5 分間のキャンセル タイムアウト期間が経過すると、サーバーは、実行を完了しないか、キャンセルプロセスを完了できなかったすべてのジョブとステップを強制的に終了します。
