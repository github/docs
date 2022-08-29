{% data variables.product.prodname_codespaces %}は、コンピュートとストレージの使用量に応じて米ドル（USD）で課金されます。

### コンピュートの使用量の計算
コンピュートの使用量は、{% data variables.product.prodname_github_codespaces %}インスタンスがアクティブな稼働時間の分の合計として定義されます。 コンピュートの使用量は、すべてのCodespacesが使用した実際の分数を合計することによって計算されます。 それらの合計は、日次で支払いサービスに報告され、月次で課金されます。

稼働時間はcodespaceを停止することによって制御でき、この停止は手動で行うことも、あるいは開発者が非アクティブな期間を指定したあとで自動的に行うこともできます。 詳しい情報については「[codespaceのクローズもしくは停止](/codespaces/getting-started/deep-dive#closing-or-stopping-your-codespace)」を参照してください。

### ストレージの使用量の計算
{% data variables.product.prodname_github_codespaces %}の支払いにおいては、アカウントのすべてのCodespacesが使用するすべてのストレージが含まれます。 これには、Codespacesが使うあらゆるファイル、中でもクローンされたリポジトリ、設定ファイル、機能拡張などが含まれます。 それらの合計は、日次で支払いサービスに報告され、月次で課金されます。 月末に、{% data variables.product.prodname_dotcom %}はストレージ使用量を最も近いGBに丸めます。 
