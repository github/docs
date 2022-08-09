
### セルフホストランナーの追加に成功したことの確認

セルフホストランナーを追加するためのステップを完了すると、ランナーとそのステータスは{% ifversion fpt or ghec %}"Runners（ランナー）"{% elsif ghae or ghes %}"Self-hosted runners（セルフホストランナー）"{% endif %}の下にリストされます。

ジョブをランナーが受け付けるためには、セルフホストランナーアプリケーションが動作していなければなりません。 ランナーアプリケーションが{% data variables.product.product_name %}に接続され、ジョブを受け付ける準備ができると、以下のメッセージがマシンのターミナルに表示されます。

{% data reusables.actions.self-hosted-runner-connected-output %}
