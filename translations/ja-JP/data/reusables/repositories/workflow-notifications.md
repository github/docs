{% data variables.product.prodname_actions %}に対するメールあるいはWeb通知を有効化すると、あなたが起動したワークフローの実行が完了すると通知されます。 この通知には、ワークフローの実行のステータス（成功、失敗、ニュートラル、キャンセルされた実行が含まれます）が含まれます。 ワークフローの実行が失敗したときにだけ通知を受けるようにすることもできます。

スケジュールされたワークフローに関する通知は、最初にワークフローを作成したユーザに送信されます。 ワークフローファイルのcron構文を他のユーザが更新した場合、それ以降の通知はそのユーザに送られるようになります。{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.22" %}スケジュールされたワークフローが無効化され、その後に有効化されると、通知は最後にcron構文を変更したユーザではなく、ワークフローを再有効化したユーザに送られるようになります。{% endif %}

リポジトリのActionsタブでワークフローの実行のステータスを見ることもできます。 詳細については、「[ワークフロー実行の管理](/actions/automating-your-workflow-with-github-actions/managing-a-workflow-run)」を参照してください。
