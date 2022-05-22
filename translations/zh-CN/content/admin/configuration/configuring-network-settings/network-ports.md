---
title: 网络端口
redirect_from:
  - /enterprise/admin/articles/configuring-firewalls/
  - /enterprise/admin/articles/firewall/
  - /enterprise/admin/guides/installation/network-configuration/
  - /enterprise/admin/guides/installation/network-ports-to-open/
  - /enterprise/admin/installation/network-ports
  - /enterprise/admin/configuration/network-ports
  - /admin/configuration/network-ports
intro: 根据您需要为管理员、最终用户和电子邮件支持显示的网络服务有选择地打开网络端口。
versions:
  enterprise-server: '*'
type: reference
topics:
  - Enterprise
  - Infrastructure
  - Networking
  - Security
---
### 管理端口

需要使用一些管理端口来配置 {% data variables.product.product_location %} 和运行某些功能。 最终用户在使用基本应用程序时不需要管理端口。

| 端口       | 服务    | 描述                                                                                                                               |
| -------- | ----- | -------------------------------------------------------------------------------------------------------------------------------- |
| 8443     | HTTPS | 基于安全 Web 的 {% data variables.enterprise.management_console %}。 进行基本安装和配置时需要。                                                     |
| 8080     | HTTP  | 基于纯文本 Web 的 {% data variables.enterprise.management_console %}。 除非手动禁用 SSL，否则不需要。                                                |
| 122      | SSH   | 对 {% data variables.product.product_location %} 进行 Shell 访问。 对来自高可用性配置中的其他所有节点的传入连接开放时需要。 默认 SSH 端口 (22) 专用于 Git 和 SSH 应用程序网络流量。 |
| 1194/UDP | VPN   | 采用高可用性配置的安全复制网络隧道。 对配置中的其他所有节点开放时需要。                                                                                             |
| 123/UDP  | NTP   | 为时间协议操作所需。                                                                                                                       |
| 161/UDP  | SNMP  | 为网络监视协议操作所需。                                                                                                                     |

### 最终用户的应用程序端口

应用程序端口为最终用户提供 Web 应用程序和 Git 访问。

| 端口   | 服务    | 描述                                                                                                  |
| ---- | ----- | --------------------------------------------------------------------------------------------------- |
| 443  | HTTPS | 通过 HTTPS 访问 Web 应用程序和 Git。                                                                          |
| 80   | HTTP  | 访问 Web 应用程序。 当 SSL 启用时，所有请求都会重定向到 HTTPS 端口。                                                         |
| 22   | SSH   | 通过 SSH 访问 Git。 支持对公共和私有仓库执行克隆、提取和推送操作。                                                              |
| 9418 | Git   | Git 协议端口支持通过未加密网络通信对公共仓库执行克隆和提取操作。 {% data reusables.enterprise_installation.when-9418-necessary %}

{% data reusables.enterprise_installation.terminating-tls %}

### 电子邮件端口

电子邮件端口必须可直接访问或通过中继访问，以便为最终用户提供入站电子邮件支持。

| 端口 | 服务   | 描述                       |
| -- | ---- | ------------------------ |
| 25 | SMTP | 支持采用加密的 SMTP (STARTTLS)。 |
