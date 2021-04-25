如果为 {% data variables.product.prodname_actions %} 启用电子邮件或 web 通知，则在触发的任何工作流程运行完成时，您将收到通知。 通知将包括工作流程运行的状态（包括成功、失败、中立和取消的运行）。 您也可以选择仅在工作流程运行失败时接收通知。

计划工作流程的通知将发送给最初创建该工作流程的用户。 如有不同的用户更新工作流程文件中的计划任务语法，后续通知将改为发送给该用户。{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.22" %} 如果预定的工作流程禁用后重新启用， 通知将发送给重新启用工作流程的用户，而不是最后修改计划任务语法的用户。{% endif %}

您也可以在仓库的 Actions（操作）选项卡上查看工作流程的状态。 更多信息请参阅“[管理工作流程运行](/actions/automating-your-workflow-with-github-actions/managing-a-workflow-run)”。
