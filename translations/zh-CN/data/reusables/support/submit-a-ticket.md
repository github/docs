1. Select the **Account or organization** drop-down menu and click the name of your enterprise. ![Account field](/assets/images/help/support/account-field.png)
1. Select the **From** drop-down menu and click the email address you'd like {% data variables.contact.github_support %} to contact. ![电子邮件字段](/assets/images/help/support/from-field.png)
1. Select the **Product** drop-down menu and click **GitHub Enterprise Server (self-hosted)**. ![Product field](/assets/images/help/support/product-field.png)
1. Select the **Release series** drop-down menu and click the release {% data variables.product.product_location_enterprise %} is running. ![Release field](/assets/images/help/support/release-field.png)
1. Select the **Priority** drop-down menu and click the appropriate urgency. For more information, see "[Assigning a priority to a support ticket](/admin/enterprise-support/overview/about-github-enterprise-support#assigning-a-priority-to-a-support-ticket)." ![Priority field](/assets/images/help/support/priority-field.png)
    - 选择 **{% data variables.product.support_ticket_priority_urgent %}** 以报告{% ifversion fpt or ghec %}关键系统故障{% else %}致命系统故障、影响关键系统运行的中断、安全事件和许可证过期{% endif %}。
    - 选择 **{% data variables.product.support_ticket_priority_high %}** 以报告影响业务运营的问题，包括 {% ifversion fpt or ghec %}从您自己的帐户和组织还原中删除敏感数据（提交、议题、拉取请求、上传的附件）{% else %}系统性能问题{% endif %}，或报告严重漏洞。
    - 选择 **{% data variables.product.support_ticket_priority_normal %}** 以{% ifversion fpt or ghec %}请求帐户恢复或垃圾邮件取消标识、报告用户登录问题{% else %}发出技术请求，如配置更改和第三方集成{% endif %}，以及报告非关键漏洞。
    - 选择 **{% data variables.product.support_ticket_priority_low %}** 以提出一般问题和提交有关新功能、购买、培训或状态检查的请求。
1. 在“Subject（主题）”下，为您遇到的问题输入描述性标题。 ![主题字段](/assets/images/help/support/subject-field.png)
5. 在“How can we help（我们如何提供帮助）”下，提供将帮助支持团队对问题进行故障排除的任何其他信息。 有用的信息可能包括： ![我们如何提供帮助字段](/assets/images/help/support/how-can-we-help-field.png)
    - 重现问题的步骤
    - 与发现问题相关的任何特殊情况（例如，首次发生或特定活动后发生、发生频率、问题的业务影响以及建议的紧迫程度）
    - 错误消息的准确表述
6. Optionally, attach diagnostics files and other files by dragging and dropping, uploading, or pasting from the clipboard.
7. 单击 **Send request（发送请求）**。 ![发送请求按钮](/assets/images/help/support/send-request-button.png)