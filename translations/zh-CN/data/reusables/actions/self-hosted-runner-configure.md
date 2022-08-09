1. 选择自托管运行器机器的操作系统映像和架构。
1. 您将看到指示您如何下载运行器应用程序并安装到自托管运行器机器上的说明。

   在自托管运行器机器上打开 shell，并按显示的顺序运行每个 shell 命令。

   {% note %}

   **注意：** 在 Windows上，如果要将自托管运行器应用程序安装为服务，必须打开具有管理员权限的 shell。 我们还建议您使用 `C:\actions-runner` 作为自托管运行器应用程序的目录，以便 Windows 系统帐户可以访问运行器目录。

   {% endnote %}

   这些说明将指导您完成以下任务：
   - 下载并提取自托管运行器应用程序。
   - 运行 `config` 脚本配置自托管运行器应用程序，并向 {% data variables.product.prodname_actions %} 注册。 `config` 脚本需要目标 URL 和自动生成的时间限制令牌来验证请求。
     - 在 Windows上，`config` 脚本还会询问您是否想将自托管运行器应用程序安装为服务。 对于 Linux 和 macOS，您可以在完成添加运行器后安装服务。 更多信息请参阅“[将自托管运行器应用程序配置为服务](/actions/automating-your-workflow-with-github-actions/configuring-the-self-hosted-runner-application-as-a-service)”。
   - 运行自托管运行器应用程序以将机器连接到 {% data variables.product.prodname_actions %}。
