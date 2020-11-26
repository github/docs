---
title: 限制到企业的网络流量
shortTitle: 限制网络流量
intro: '您可以将企业访问权限限制为来自指定 IP 地址的连接。'
versions:
  github-ae: '*'
---

默认情况下，授权用户可以从任何 IP 地址访问您的企业。 您可以通过联系支持来限制对特定 IP 地址的访问，如您的办公地点。

通过应该可以访问企业的 IP 地址联系 {% data variables.contact.github_support %}。 使用标准 CIDR（无类域间路由）格式指定地址范围。 {% data variables.contact.github_support %} 将为您的企业配置合适的防火墙规则，以限制 HTTP、SSH、HTTPS 和 SMTP 网络访问。 更多信息请参阅“[从 {% data variables.contact.github_support %} 获取帮助](/enterprise/admin/guides/enterprise-support/receiving-help-from-github-support)”。
