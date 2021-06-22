---
title: ワークフローをキャンセルする
intro: '進行中のワークフロー実行をキャンセルできます。 ワークフロー実行をキャンセルすると、{% data variables.product.prodname_dotcom %} はそのワークフローの一部であるすべてのジョブとステップをキャンセルします。'
product: '{% data reusables.gated-features.actions %}'
versions:
  free-pro-team: '*'
  enterprise-server: '>=2.22'
  github-ae: '*'
---

{% data reusables.actions.enterprise-beta %}
{% data reusables.actions.enterprise-github-hosted-runners %}
{% data reusables.actions.ae-beta %}

{% data reusables.repositories.permissions-statement-write %}

### ワークフローの実行をキャンセルする

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.actions-tab %}
{% data reusables.repositories.navigate-to-workflow %}
1. ワークフローの実行のリストから、キャンセルしたい`queued`もしくは`in progress`の実行の名前をクリックしてください。 ![ワークフローの実行の名前](/assets/images/help/repository/in-progress-run.png)
1. ワークフローの右上隅にある [**Cancel workflow（ワークフローのキャンセル）**] をクリックします。
{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@3.0" or currentVersion == "github-ae@latest" %}
 ![[Cancel check suite] ボタン](/assets/images/help/repository/cancel-check-suite-updated.png)
{% else %}
 ![[Cancel check suite] ボタン](/assets/images/help/repository/cancel-check-suite.png)
{% endif %}

### ワークフロー実行をキャンセルするために {% data variables.product.prodname_dotcom %} が実行するステップ

ワークフローの実行をキャンセルする場合、ワークフローの実行に関連するリソースを使用する他のソフトウェアを実行している可能性があります。 ワークフロー実行に関連するリソースを解放するため、{% data variables.product.prodname_dotcom %} がワークフロー実行をキャンセルする際のステップを知っておくと役立つ場合があります。

1. ワークフローの実行をキャンセルするために、サーバーは現在実行中のすべてのジョブに対して`if`条件を再評価します。 条件が`true`に評価された場合、ジョブはキャンセルされません。 例えば、`if: always()`はtrueと評価され、ジョブの実行は継続されるでしょう。 条件がない場合は`if:success()`と等価なので、前のステップが正常に終了した場合にのみ実行されます。
2. キャンセルする必要があるジョブについては、サーバーは、キャンセルする必要があるジョブを持つすべてのランナー マシンにキャンセル メッセージを送信します。
3. 実行を継続するジョブの場合、サーバーは、未完了のステップの`if` 条件を再評価します。 条件が `true`に評価された場合、ステップは引き続き実行されます。
4. キャンセルが必要なステップの場合、ランナーマシンは、ステップのエントリープロセス（javascriptアクションの`node` 、コンテナアクションの`docker` 、ステップで`run` を使用する場合は `bash/cmd/pwd`）に `SIGINT/Ctrl-C` を送信します。 プロセスが7500ミリ秒以内に終了しない場合、ランナーは `SIGTERM/Ctrl-Break` をプロセスに送信し、プロセスが終了するまで2500ミリ秒待ちます。 プロセスがそれでも実行中のままなら、ランナーはプロセスツリーを強制終了します。
5. 5 分間のキャンセル タイムアウト期間が経過すると、サーバーは、実行を完了しないか、キャンセルプロセスを完了できなかったすべてのジョブとステップを強制的に終了します。
