---
ms.openlocfilehash: b7f16729209b711d9ea95d059f5868ae867fa040
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/05/2022
ms.locfileid: "147419879"
---
1. 选择“帐户或组织”下拉菜单，然后单击你的支持票证所涉及的帐户名称。
![“帐户或组织”下拉菜单的屏幕截图。](/assets/images/help/support/account-field.png)
1. 选择“发件人”下拉菜单并单击你希望 {% data variables.contact.github_support %} 联系的电子邮件地址。
![“发件人”下拉菜单的屏幕截图。](/assets/images/help/support/from-field.png)
{%- ifversion ghec or ghes %}
1. 选择“产品”下拉菜单并单击 {% ifversion ghes %}GitHub Enterprise Server(自托管){% else %}GitHub Enterprise Cloud{% endif %}  。
{% ifversion ghec %}![“产品”下拉菜单的屏幕截图。](/assets/images/help/support/product-field-ghec.png){% else %}![“产品”下拉菜单的屏幕截图。](/assets/images/help/support/product-field.png){% endif %} {%- endif %} {%- ifversion ghes %}
1. 如果出现提示，请选择“服务器安装”下拉菜单，然后单击支持票证所涉及的安装。 如果安装未列出，请单击“其他”。
![“服务器安装”下拉菜单的屏幕截图](/assets/images/help/support/installation-field.png) {%- endif %} {%- ifversion ghes %}
1. 选择“发布系列”下拉菜单并单击发布 {% data variables.product.product_location_enterprise %} 正在运行。
![发布系列”下拉菜单的屏幕截图](/assets/images/help/support/release-field.png) {%- endif %} {%- ifversion ghes or ghec %}
1. 选择“优先级”下拉菜单并单击适当的紧迫性。 有关详细信息，请参阅“[关于票证优先级](/support/learning-about-github-support/about-ticket-priority)。”
  ![“优先级”下拉菜单的屏幕截图。](/assets/images/help/support/priority-field.png)
{%- endif %} {%- ifversion ghes %}
    - 选择 {% data variables.product.support_ticket_priority_urgent %} 以报告 {% ifversion fpt or ghec %}严重系统故障{% else %} 致命系统故障、影响关键系统操作、安全事件和过期许可证的中断{% endif %}。
    - 选择 {% data variables.product.support_ticket_priority_high %} 报告影响业务运营的问题，包括 {% ifversion fpt or ghec %}从你自己的帐户和组织还原中删除敏感数据（提交、议题、拉取请求、上传的附件）{% else %}系统性能问题{% endif %}，或报告严重错误。
    - 选择 {% data variables.product.support_ticket_priority_normal %} 以 {% ifversion fpt or ghec %}请求帐户恢复或垃圾邮件取消标识、报告用户登录问题{% else %}发出技术请求，如配置更改和第三方集成{% endif %}，以及报告非关键 bug。
    - 选择 {% data variables.product.support_ticket_priority_low %} 以提出一般问题和提交有关新功能、购买、培训或状态检查的请求。
{%- endif %} {%- ifversion ghes or ghec %}
1. 或者，如果帐户包含 {% data variables.contact.premium_support %} 并且票证优先级为{% ifversion ghes %}紧急或高{% elsif ghec %}高{% endif %}，则可以用英语请求回叫。 选择“从 GitHub 支持请求回叫”，选择“国家代码”下拉菜单以选择国家，然后输入电话号码。
![“请求回叫”复选框、“国家/地区代码”下拉菜单和“电话号码”文本框的屏幕截图。](/assets/images/help/support/request-callback.png)
{%- endif %}
1. 在“Subject（主题）”下，为您遇到的问题输入描述性标题。
![主题”文本框的屏幕截图。](/assets/images/help/support/subject-field.png)
1. 在“How can we help（我们如何提供帮助）”下，提供将帮助支持团队对问题进行故障排除的任何其他信息。 你可以使用 Markdown 格式化消息。
  ![“如何帮助”文本区域的屏幕截图。](/assets/images/help/support/how-can-we-help-field.png)
   有用的信息可能包括：
    - 重现问题的步骤
    - 与问题发现有关的任何特殊情况（例如，第一次出现或特定事件之后出现、出现频率、问题的业务影响和建议的紧急级别）
    - 错误消息的准确表述 {% indented_data_reference reusables.repositories.anyone-can-view-anonymized-url spaces=3 %}

{%- ifversion ghes %}
1. 或者，通过拖放、上传或从剪贴板粘贴来附加诊断文件和其他文件。
{%- endif %}
1. 单击“发送请求”。
![“发送请求”按钮的屏幕截图。](/assets/images/help/support/send-request-button.png)
