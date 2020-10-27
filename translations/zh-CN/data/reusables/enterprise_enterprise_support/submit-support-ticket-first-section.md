1. 在“Your email address（您的电子邮件地址）”下，输入与您的 {% data variables.product.product_name %} 帐户相关的电子邮件地址。 ![您的电子邮件地址字段](/assets/images/enterprise/support/support-ticket-email-address-field.png)
1. 在“Subject（主题）”下，输入议题的描述性标题。 ![主题字段](/assets/images/enterprise/support/support-ticket-subject-field.png)
1. 在“Description（描述）”下，提供有助于 {% data variables.contact.enterprise_support %} 团队对问题进行故障排除的任何其他信息。 有用的信息可能包括： ![描述字段](/assets/images/enterprise/support/support-ticket-description-field.png)
    - 重现问题的步骤
    - 与发现问题相关的任何特殊情况（例如，首次发生或特定活动后发生、发生频率、问题的业务影响以及建议的紧迫程度）
    - 错误消息的准确表述
1. From the {% data variables.product.prodname_enterprise %} Product drop-down menu, select {% if currentVersion == "free-pro-team@latest" %}{% data variables.product.prodname_ghe_cloud %}{% else %}{% data variables.product.prodname_ghe_server %}{% endif %}. ![优先级下拉菜单](/assets/images/enterprise/support/support-ticket-ghe-product.png)
1. 从“Priority（优先级）”下拉菜单，选择适当的紧迫程度。 For more information, see "[Assigning a priority to a support ticket]{% if currentVersion == "free-pro-team@latest" %}(/articles/about-github-premium-support-for-github-enterprise-cloud#assigning-a-priority-to-a-support-ticket){% else %}(/enterprise/admin/guides/enterprise-support/about-github-enterprise-support#assigning-a-priority-to-a-support-ticket){% endif %}." ![优先级下拉菜单](/assets/images/enterprise/support/support-ticket-priority.png)
    - Choose **{% data variables.product.support_ticket_priority_urgent %}** to report {% if currentVersion == "free-pro-team@latest" %}critical system failure{% else %}fatal system failures, outages impacting critical system operations, security incidents, and expired licenses{% endif %}.
    - Choose **{% data variables.product.support_ticket_priority_high %}** to report issues impacting business operations, including {% if currentVersion == "free-pro-team@latest" %}removing sensitive data (commits, issues, pull requests, uploaded attachments) from your own accounts and organization restorations{% else %}system performance issues{% endif %}, or to report critical bugs.
    - Choose **{% data variables.product.support_ticket_priority_normal %}** to {% if currentVersion == "free-pro-team@latest" %}request account recovery or spam unflagging, report user login issues{% else %}make technical requests like configuration changes and third-party integrations{% endif %}, and to report non-critical bugs.
    - 选择 **{% data variables.product.support_ticket_priority_low %}**，提出一般问题并提交关于新功能、购买、培训或状态检查的请求。{% if enterpriseServerVersions contains currentVersion %}
1. From the "
{% data variables.product.prodname_enterprise %} Series" drop-down menu, select the version of {% data variables.product.prodname_ghe_server %} you're using.
  ![{% data variables.product.prodname_enterprise %} 系列下拉菜单](/assets/images/enterprise/support/support-ticket-ghes-series.png)
{% endif %}
1. 从“Global Region（全球区域）”下拉菜单，选择 APAC（亚太地区）、EMEA（欧洲、中东和非洲）或美洲作为您的区域。 ![全球区域下拉菜单](/assets/images/enterprise/support/support-ticket-global-region.png)
1. 单击 **Add file（添加文件）**，然后附上您下载的诊断文件，以囊括关于支持事件单的诊断信息。 ![添加文件按钮](/assets/images/enterprise/support/support-ticket-add-file.png)
