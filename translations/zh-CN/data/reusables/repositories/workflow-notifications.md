如果为 {% data variables.product.prodname_actions %} 启用电子邮件或 web 通知，则在触发的任何工作流程运行完成时，您将收到通知。 通知将包括工作流程运行的状态（包括成功、失败、中立和取消的运行）。 您也可以选择仅在工作流程运行失败时接收通知。

Notifications for scheduled workflows are sent to the user who initially created the workflow. If a different user updates the cron syntax in the workflow file, subsequent notifications will be sent to that user instead.{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.22" %} If a scheduled workflow is disabled and then re-enabled, notifications will be sent to the user who re-enabled the workflow rather than the user who last modified the cron syntax.{% endif %}

您也可以在仓库的 Actions（操作）选项卡上查看工作流程的状态。 更多信息请参阅“[管理工作流程运行](/actions/automating-your-workflow-with-github-actions/managing-a-workflow-run)”。
