---
title: 日志转发
intro: '{% data variables.product.prodname_enterprise %} 使用“syslog-ng”将系统和应用程序日志转发到您在 {% data variables.enterprise.management_console %} 设置中指定的服务器。'
redirect_from:
  - /enterprise/admin/articles/log-forwarding/
  - /enterprise/admin/installation/log-forwarding
  - /enterprise/admin/enterprise-management/log-forwarding
versions:
  enterprise-server: '*'
---

支持使用任何支持 syslog-style 日志流的日志收集系统（例如 [Logstash](http://logstash.net/) 和 [Splunk](http://docs.splunk.com/Documentation/Splunk/latest/Data/Monitornetworkports)）。

### 启用日志转发

1. 在 {% data variables.enterprise.management_console %} 设置页面的左侧边栏中，单击 **Monitoring**。
1. 选择 **Enable log forwarding**。
1. 在 **Server address** 字段中，输入要将日志转发到的服务器的地址。 您可以在以逗号分隔的列表中指定多个地址。
1. 在 Protocol 下拉菜单中，选择用于与日志服务器通信的协议。 该协议将应用到所有指定的日志目标。
1. 选择 **Enable TLS**。
1. 单击 **Choose File** 并选择用于加密 syslog 端点间通信的 CA 证书。 将对整个证书链进行验证，且证书链必须以根证书结束。 更多信息请参阅 [syslog-ng 文档中的 TLS 选项](https://support.oneidentity.com/technical-documents/syslog-ng-open-source-edition/3.16/administration-guide/56#TOPIC-956599)。

### 疑难解答

如果您遇到日志转发方面的问题，请联系 {% data variables.contact.contact_ent_support %} 并在您的电子邮件中附上 `http(s)://[hostname]/setup/diagnostics` 的输出文件。
