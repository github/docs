---
title: 日志转发
intro: '{% data variables.product.product_name %} 使用 `syslog-ng` 将 {% if enterpriseServerVersions contains currentVersion %}系统{% elsif currentVersion == "github-ae@latest" %}Git{% endif %} 和应用程序日志转发到您指定的服务器。'
redirect_from:
  - /enterprise/admin/articles/log-forwarding/
  - /enterprise/admin/installation/log-forwarding
  - /enterprise/admin/enterprise-management/log-forwarding
  - /admin/enterprise-management/log-forwarding
  - /admin/user-management/log-forwarding
versions:
  enterprise-server: '*'
  github-ae: '*'
type: how_to
topics:
  - Auditing
  - Enterprise
  - Logging
  - Security
---
支持使用任何支持 syslog-style 日志流的日志收集系统（例如 [Logstash](http://logstash.net/) 和 [Splunk](http://docs.splunk.com/Documentation/Splunk/latest/Data/Monitornetworkports)）。

### 启用日志转发

{% if enterpriseServerVersions contains currentVersion %}
1. 在 {% data variables.enterprise.management_console %} 设置页面的左侧边栏中，单击 **Monitoring**。
1. 选择 **Enable log forwarding**。
1. 在 **Server address** 字段中，输入要将日志转发到的服务器的地址。 您可以在以逗号分隔的列表中指定多个地址。
1. 在 Protocol 下拉菜单中，选择用于与日志服务器通信的协议。 该协议将应用到所有指定的日志目标。
1. 选择 **Enable TLS**。
1. 单击 **Choose File** 并选择用于加密 syslog 端点间通信的 CA 证书。 将对整个证书链进行验证，且证书链必须以根证书结束。 更多信息请参阅 [syslog-ng 文档中的 TLS 选项](https://support.oneidentity.com/technical-documents/syslog-ng-open-source-edition/3.16/administration-guide/56#TOPIC-956599)。
{% elsif currentVersion == "github-ae@latest" %}
{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.settings-tab %}
1. 在 {% octicon "gear" aria-label="The Settings gear" %} **Settings（设置）**下，单击 **Log forwarding（日志转发）**。 ![日志转发选项卡](/assets/images/enterprise/business-accounts/log-forwarding-tab.png)
1. 在“Log forwarding（日志转发）”下，选择 **Enable log forwarding（启用日志转发）**。 ![启用日志转发的复选框](/assets/images/enterprise/business-accounts/enable-log-forwarding-checkbox.png)
1. 在“Server address（服务器地址）”下，输入您想要日志转发到的服务器地址。 ![服务器地址字段](/assets/images/enterprise/business-accounts/server-address-field.png)
1. 使用“Protocol（协议）”下拉菜单选择一个协议。 ![协议下拉菜单](/assets/images/enterprise/business-accounts/protocol-drop-down-menu.png)
1. （可选）要在系统日志端点之间的训用 TLS 加密通信，请选择 **Enable TLS（启用 TLS）**。 ![启用 TLS 的复选框](/assets/images/enterprise/business-accounts/enable-tls-checkbox.png)
1. 在“Public certificate（公共证书）”下，粘贴您的 x509 证书。 ![公共证书文本框](/assets/images/enterprise/business-accounts/public-certificate-text-box.png)
1. 单击 **Save（保存）**。 ![用于日志转发的 Save（保存）按钮](/assets/images/enterprise/business-accounts/save-button-log-forwarding.png)
{% endif %}

{% if enterpriseServerVersions contains currentVersion %}
### 疑难解答
如果遇到日志转发问题，请联系

{% data variables.contact.contact_ent_support %} 并在您的电子邮件中附上 `http(s)://[hostname]/setup/diagnostics` 的输出文件。
{% endif %}
