{% tip %}

**提示：**如果您同时接收 Web 和电子邮件通知，您可以自动同步通知的已读或未读状态，以便在您阅读相应的电子邮件通知后，Web 通知自动标记为已读。 要启用此同步，您的电子邮件客户端必须能够查看来自 {% if currentVersion == "free-pro-team@latest" %}`notifications@github.com`{% else %} `无需回复`电子邮件地址 {% if currentVersion == "github-ae@latest" %}您的 {% data variables.product.product_name %} 主机名{% elsif enterpriseServerVersions contains currentVersion %}您的 {% data variables.product.product_location %}（您的站点管理员可以配置）{% endif %}{% endif %}的图像。

{% endtip %}
