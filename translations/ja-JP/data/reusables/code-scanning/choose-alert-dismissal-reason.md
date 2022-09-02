クエリが将来の分析に含まれ続けるかに影響することがあるので、ドロップダウンメニューから適切な理由を選択することは重要です。
{% ifversion comment-dismissed-code-scanning-alert %}あるいは、アラートの却下に関するコンテキストを記録するために、却下の際にコメントすることができます。 却下のコメントはアラートのタイムラインに追加され、監査とレポートの際の正当性として利用できます。 コードスキャンニングのREST APIを使用して、コメントの取得や設定ができます。 コメントは、`alerts/{alert_number}`エンドポイントの`dismissed_comment`に含まれています。 詳しい情報については「[Code scanning](/rest/code-scanning#update-a-code-scanning-alert)」を参照してください。
{% endif %}
