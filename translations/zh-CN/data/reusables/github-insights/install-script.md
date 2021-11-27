4. 运行 shell 脚本 `install.sh`。
5. 要启用 SSL，请输入 SSL 证书 (`.crt/.cer/.pem`)。 如果不想启用 SSL，请留空。
6. 如果选择启用 SSL，请输入 SSL 密钥 (`.key`)。 否则，请留空。
5. 输入主机名，即创建 {% data variables.product.prodname_github_app %} 时用于应用程序服务器的 URL。
6. 安装的运行需要几分钟。 完成后，您将看到终端上显示一条消息。
    ```
    安装完成
    运行 /opt/insights/scripts/start.sh 以启动 GitHub Insights
    ```
