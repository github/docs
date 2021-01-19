{% data variables.product.prodname_actions %}に対するメールあるいはWeb通知を有効化すると、あなたが起動したワークフローランが完了すると通知されます。 この通知には、ワークフローランのステータス（成功、失敗、ニュートラル、キャンセルされたランが含まれます）が含まれます。 ワークフローランが失敗したときにだけ通知を受けるようにすることもできます。

Notifications for scheduled workflows are sent to the user who initially created the workflow. If a different user updates the cron syntax in the workflow file, subsequent notifications will be sent to that user instead.{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.22" %} If a scheduled workflow is disabled and then re-enabled, notifications will be sent to the user who re-enabled the workflow rather than the user who last modified the cron syntax.{% endif %}

リポジトリのActionsタブでワークフローランのステータスを見ることもできます。 詳細については、「[ワークフロー実行の管理](/actions/automating-your-workflow-with-github-actions/managing-a-workflow-run)」を参照してください。
