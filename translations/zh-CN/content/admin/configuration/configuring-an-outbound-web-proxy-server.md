---
title: 配置出站 Web 代理服务器
intro: '代理服务器为 {% data variables.product.product_location %} 额外提供了一级安全性。'
redirect_from:
  - /enterprise/admin/guides/installation/configuring-a-proxy-server/
  - /enterprise/admin/installation/configuring-an-outbound-web-proxy-server
  - /enterprise/admin/configuration/configuring-an-outbound-web-proxy-server
versions:
  enterprise-server: '*'
topics:
  - 企业
---

为 {% data variables.product.product_location %} 启用代理服务器后，除非已将目标主机添加为 HTTP 代理排除项，否则会先通过代理服务器发送由 {% data variables.product.prodname_ghe_server %} 发送的出站消息。 出站消息类型包括传出 web 挂钩、上传包和提取旧头像。 代理服务器的 URL 为协议、域或 IP 地址外加端口号，例如 `http://127.0.0.1:8123`。

{% note %}

**注**：要将 {% data variables.product.product_location %} 连接到 {% data variables.product.prodname_dotcom_the_website %}，您的代理配置必须允许连接到 `github.com` 和 `api.github.com`。 更多信息请参阅“[将 {% data variables.product.prodname_ghe_server %} 连接到 {% data variables.product.prodname_dotcom_the_website %}](/enterprise/{{ currentVersion }}/admin/guides/developer-workflow/connecting-github-enterprise-server-to-github-com)”。

{% endnote %}

{% data reusables.enterprise_site_admin_settings.access-settings %}
{% data reusables.enterprise_site_admin_settings.management-console %}
{% data reusables.enterprise_management_console.privacy %}
4. 在 **HTTP Proxy Server** 下，输入代理服务器的 URL。 ![用于输入 HTTP 代理服务器 URL 的字段](/assets/images/enterprise/management-console/http-proxy-field.png)

5. 或者在 **HTTP Proxy Exclusion** 下输入不需要进行代理访问的任意主机，并以逗号分隔主机。 要将域中的所有主机排除在需要代理访问权限之外，您可以使用 `.` 作为通配符前缀。  例如：`.octo-org.tentacle` ![输入任何 HTTP 代理排除项的字段](/assets/images/enterprise/management-console/http-proxy-exclusion-field.png)

{% data reusables.enterprise_management_console.save-settings %}
