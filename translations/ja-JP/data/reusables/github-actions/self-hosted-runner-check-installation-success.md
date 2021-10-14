
### セルフホストランナーの追加に成功したことの確認

After completing the steps to add a self-hosted runner, the runner and its status are now listed under {% ifversion fpt %}"Runners"{% elsif ghae or ghes %}"Self-hosted runners"{% endif %}.

ジョブをランナーが受け付けるためには、セルフホストランナーアプリケーションが動作していなければなりません。 ランナーアプリケーションが{% data variables.product.product_name %}に接続してジョブの受信準備ができたなら、以下のメッセージがマシンのターミナルに表示されます。

{% data reusables.github-actions.self-hosted-runner-connected-output %}

詳しい情報については「[セルフホストランナーのモニタリングとトラブルシューティング](/actions/hosting-your-own-runners/monitoring-and-troubleshooting-self-hosted-runners)」を参照してください。
