---
title: 日志转发
intro: '{% data variables.product.product_name %} uses `syslog-ng` to forward {% if enterpriseServerVersions contains currentVersion %}system{% elsif currentVersion == "github-ae@latest" %}Git{% endif %} and application logs to the server you specify.'
redirect_from:
  - /enterprise/admin/articles/log-forwarding/
  - /enterprise/admin/installation/log-forwarding
  - /enterprise/admin/enterprise-management/log-forwarding
  - /admin/enterprise-management/log-forwarding
versions:
  enterprise-server: '*'
  github-ae: '*'
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
1. Under {% octicon "gear" aria-label="The Settings gear" %} **Settings**, click **Log forwarding**. ![Log forwarding tab](/assets/images/enterprise/business-accounts/log-forwarding-tab.png)
1. Under "Log forwarding", select **Enable log forwarding**. ![Checkbox to enable log forwarding](/assets/images/enterprise/business-accounts/enable-log-forwarding-checkbox.png)
1. Under "Server address", enter the address of the server you want to forward logs to. ![Server address field](/assets/images/enterprise/business-accounts/server-address-field.png)
1. Use the "Protocol" drop-down menu, and select a protocol. ![Protocol drop-down menu](/assets/images/enterprise/business-accounts/protocol-drop-down-menu.png)
1. Optionally, to enable TLS encrypted communication between syslog endpoints, select **Enable TLS**. ![Checkbox to enable TLS](/assets/images/enterprise/business-accounts/enable-tls-checkbox.png)
1. Under "Public certificate", paste your x509 certificate. ![Text box for public certificate](/assets/images/enterprise/business-accounts/public-certificate-text-box.png)
1. 单击 **Save（保存）**。 ![Save button for log forwarding](/assets/images/enterprise/business-accounts/save-button-log-forwarding.png)
{% endif %}

{% if enterpriseServerVersions contains currentVersion %}
### 疑难解答
If you run into issues with log forwarding, contact

{% data variables.contact.contact_ent_support %} and attach the output file from `http(s)://[hostname]/setup/diagnostics` to your email.
{% endif %}
