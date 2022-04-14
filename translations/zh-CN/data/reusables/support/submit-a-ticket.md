1. Select the **Account or organization** dropdown menu and click the name of the account your support ticket is regarding. ![Screenshot of the "Account or organization" dropdown menu.](/assets/images/help/support/account-field.png)
1. Select the **From** drop-down menu and click the email address you'd like {% data variables.contact.github_support %} to contact. ![Screenshot of the "From" dropdown menu.](/assets/images/help/support/from-field.png)
{%- ifversion ghec or ghes %}
1. Select the **Product** dropdown menu and click {% ifversion ghes %}**GitHub Enterprise Server (self-hosted)**{% else %}**GitHub Enterprise Cloud**{% endif %}.
{% ifversion ghec %}![Screenshot of the "Product" dropdown menu.](/assets/images/help/support/product-field-ghec.png){% else %}![Screenshot of the "Product" dropdown menu.](/assets/images/help/support/product-field.png){% endif %}
{%- endif %}
{%- ifversion ghes %}
1. If prompted, select the **Server installation** dropdown menu and click the installation your support ticket is regarding. If the installation is not listed, click **Other**. ![Screenshot of the "Server Installation" dropdown menu](/assets/images/help/support/installation-field.png)
{%- endif %}
{%- ifversion ghes %}
1. Select the **Release series** dropdown menu and click the release {% data variables.product.product_location_enterprise %} is running. ![Screenshot of the "Release series" dropdown menu](/assets/images/help/support/release-field.png)
{%- endif %}
{%- ifversion ghes or ghec %}
1. Select the **Priority** dropdown menu and click the appropriate urgency. For more information, see "[About ticket priority](/support/learning-about-github-support/about-ticket-priority)." ![Screenshot of the "Priority" dropdown menu.](/assets/images/help/support/priority-field.png)
{%- endif %}
{%- ifversion ghes %}
    - 选择 **{% data variables.product.support_ticket_priority_urgent %}** 以报告{% ifversion fpt or ghec %}关键系统故障{% else %}致命系统故障、影响关键系统运行的中断、安全事件和许可证过期{% endif %}。
    - 选择 **{% data variables.product.support_ticket_priority_high %}** 以报告影响业务运营的问题，包括 {% ifversion fpt or ghec %}从您自己的帐户和组织还原中删除敏感数据（提交、议题、拉取请求、上传的附件）{% else %}系统性能问题{% endif %}，或报告严重漏洞。
    - 选择 **{% data variables.product.support_ticket_priority_normal %}** 以{% ifversion fpt or ghec %}请求帐户恢复或垃圾邮件取消标识、报告用户登录问题{% else %}发出技术请求，如配置更改和第三方集成{% endif %}，以及报告非关键漏洞。
    - 选择 **{% data variables.product.support_ticket_priority_low %}** 以提出一般问题和提交有关新功能、购买、培训或状态检查的请求。
{%- endif %}
{%- ifversion ghes or ghec %}
1. Optionally, if your account includes {% data variables.contact.premium_support %} and your ticket is {% ifversion ghes %}urgent or high{% elsif ghec %}high{% endif %} priority, you can request a callback in English. Select **Request a callback from GitHub Support**, select the country code dropdown menu to choose your country, and enter your phone number. ![Screenshot of the "Request callback" checkbox, "Country code" dropdown menu, and "Phone number" text box.](/assets/images/help/support/request-callback.png)
{%- endif %}
1. 在“Subject（主题）”下，为您遇到的问题输入描述性标题。 ![Screenshot of the "Subject" text box.](/assets/images/help/support/subject-field.png)
1. 在“How can we help（我们如何提供帮助）”下，提供将帮助支持团队对问题进行故障排除的任何其他信息。 You can use markdown to format your message. ![Screenshot of the "How can we help" text area.](/assets/images/help/support/how-can-we-help-field.png) Helpful information may include:
    - 重现问题的步骤
    - 与发现问题相关的任何特殊情况（例如，首次发生或特定活动后发生、发生频率、问题的业务影响以及建议的紧迫程度）
    - 错误消息的准确表述
{%- ifversion ghes %}
1. Optionally, attach diagnostics files and other files by dragging and dropping, uploading, or pasting from the clipboard.
{%- endif %}
1. 单击 **Send request（发送请求）**。 ![Screenshot of the "Send request" button.](/assets/images/help/support/send-request-button.png)
