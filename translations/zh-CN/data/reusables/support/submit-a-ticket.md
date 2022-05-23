1. 选择 **Account or organization（帐户或组织）**下拉菜单，然后单击支持事件单所涉及的帐户的名称。 !["帐户或组织"的下拉菜单屏幕截图。](/assets/images/help/support/account-field.png)
1. 选择 **From（发件人）**下拉菜单，然后点击您希望 {% data variables.contact.github_support %} 联系的电子邮件地址。 !["发件人"下拉菜单的屏幕截图。](/assets/images/help/support/from-field.png)
{%- ifversion ghec or ghes %}
1. 选择 **Product（产品）**下拉菜单，然后单击 {% ifversion ghes %}**GitHub Enterprise Server（自托管）**{% else %}**GitHub Enterprise Cloud**{% endif %}。
{% ifversion ghec %}![Screenshot of the "Product" dropdown menu.](/assets/images/help/support/product-field-ghec.png){% else %}![Screenshot of the "Product" dropdown menu.](/assets/images/help/support/product-field.png){% endif %}
{%- endif %}
{%- ifversion ghes %}
1. 如果出现提示，请选择 **Server installation（服务器安装）**下拉菜单，然后单击支持事件单所涉及的安装。 如果未列出安装，请单击 **Other（其他）**。 !["服务器安装"下拉菜单的屏幕截图](/assets/images/help/support/installation-field.png)
{%- endif %}
{%- ifversion ghes %}
1. 选择 **Release series（版本系列）**下拉菜单，然后单击正在运行的版本 {% data variables.product.product_location_enterprise %}。 !["版本系列"下拉菜单的屏幕截图](/assets/images/help/support/release-field.png)
{%- endif %}
{%- ifversion ghes or ghec %}
1. 选择 **Priority（优先级）**下拉菜单，然后单击适当的紧急程度。 更多信息请参阅“[关于事件单优先级](/support/learning-about-github-support/about-ticket-priority)”。 !["优先级" 下拉菜单的屏幕截图。](/assets/images/help/support/priority-field.png)
{%- endif %}
{%- ifversion ghes %}
    - 选择 **{% data variables.product.support_ticket_priority_urgent %}** 以报告{% ifversion fpt or ghec %}关键系统故障{% else %}致命系统故障、影响关键系统运行的中断、安全事件和许可证过期{% endif %}。
    - 选择 **{% data variables.product.support_ticket_priority_high %}** 以报告影响业务运营的问题，包括 {% ifversion fpt or ghec %}从您自己的帐户和组织还原中删除敏感数据（提交、议题、拉取请求、上传的附件）{% else %}系统性能问题{% endif %}，或报告严重漏洞。
    - 选择 **{% data variables.product.support_ticket_priority_normal %}** 以{% ifversion fpt or ghec %}请求帐户恢复或垃圾邮件取消标识、报告用户登录问题{% else %}发出技术请求，如配置更改和第三方集成{% endif %}，以及报告非关键漏洞。
    - 选择 **{% data variables.product.support_ticket_priority_low %}** 以提出一般问题和提交有关新功能、购买、培训或状态检查的请求。
{%- endif %}
{%- ifversion ghes or ghec %}
1. （可选）如果您的帐户包含 {% data variables.contact.premium_support %} 并且您的事件单为 {% ifversion ghes %}紧急或高{% elsif ghec %}高{% endif %} 优先级，则可以请求英语回电。 选择 **Request a callback from GitHub Support（请求 GitHub 支持回电）**，选择国家/地区代码下拉菜单以选择您所在的国家/地区，然后输入您的电话号码。 !["请求回叫"复选框、 "国家/地区代码"下拉菜单和"电话号码"文本框的屏幕截图。](/assets/images/help/support/request-callback.png)
{%- endif %}
1. 在“Subject（主题）”下，为您遇到的问题输入描述性标题。 !["主题"文本框的屏幕截图。](/assets/images/help/support/subject-field.png)
1. 在“How can we help（我们如何提供帮助）”下，提供将帮助支持团队对问题进行故障排除的任何其他信息。 您可以使用 Markdown 格式化消息。 ![Screenshot of the "How can we help" text area.](/assets/images/help/support/how-can-we-help-field.png) 有用的信息可能包括：
    - 重现问题的步骤
    - 与发现问题相关的任何特殊情况（例如，首次发生或特定活动后发生、发生频率、问题的业务影响以及建议的紧迫程度）
    - 错误消息的准确表述
{%- ifversion ghes %}
1. （可选）通过拖放、上传或从剪贴板粘贴来附加诊断文件及其他文件。
{%- endif %}
1. 单击 **Send request（发送请求）**。 !["发送请求"按钮的屏幕截图。](/assets/images/help/support/send-request-button.png)
