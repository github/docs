| 端口       | 服务    | 描述                                                                                                        |
| -------- | ----- | --------------------------------------------------------------------------------------------------------- |
| 22       | SSH   | Git over SSH 访问。 支持克隆、获取和推送操作到公共/私有仓库。                                                                    |
| 25       | SMTP  | 支持加密 (STARTTLS) 的 SMTP。                                                                                   |
| 80       | HTTP  | Web 应用程序访问。 *当 SSL 启用时，所有请求都会重定向到 HTTPS 端口。*                                                              |
| 122      | SSH   | 实例 shell 访问。 *默认 SSH 端口 (22) 专用于应用程序 git+ssh 网络流量。*                                                       |
| 161/UDP  | SNMP  | 为网络监视协议操作所需。                                                                                              |
| 443      | HTTPS | Web 应用程序和 Git over HTTPS 访问。                                                                              |
| 1194/UDP | VPN   | 采用高可用性配置的安全复制网络隧道。                                                                                        |
| 8080     | HTTP  | 基于纯文本 Web 的 {% data variables.enterprise.management_console %}。 *除非手动禁用 SSL，否则不需要。*                       |
| 8443     | HTTPS | 基于安全 Web 的 {% data variables.enterprise.management_console %}。 *进行基本安装和配置时需要。*                            |
| 9418     | Git   | 简单的 Git 协议端口。 仅克隆和获取操作到公共仓库。 *未加密的网络通信。* {% data reusables.enterprise_installation.when-9418-necessary %}
