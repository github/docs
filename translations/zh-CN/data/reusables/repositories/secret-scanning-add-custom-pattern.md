1. 在“{% data variables.product.prodname_secret_scanning_caps %}”下，单击**添加 {% data variables.product.prodname_secret_scanning %} 自定义模式**。

   ![添加 {% data variables.product.prodname_secret_scanning %} 自定义模式](/assets/images/help/repository/secret-scanning-add-custom-pattern.png)
1. 输入新自定义模式的详细信息：
   1. 您至少必须提供模式的名称，以及秘密模式格式的正则表达式。
   1. 您可以点击**更多选项 {% octicon "chevron-down" aria-label="down" %}** 来提供密钥格式的其他周围内容或额外匹配要求。
   1. 您可以提供示例测试字符串，然后单击 **Test（测试）**按钮，以确保您的配置与预期的模式匹配。

   ![创建自定义 {% data variables.product.prodname_secret_scanning %} 模式表](/assets/images/help/repository/secret-scanning-create-custom-pattern.png)
1. 当您对新自定义模式满意时，点击 **Create custom pattern（创建自定义模式）**。
