---
title: 验证企业帐户的域
intro: '您可以通过使用 {% data variables.product.company_short %} 验证域名所有权来确认企业帐户拥有的组织的身份。'
product: '{% data reusables.gated-features.enterprise-accounts %}'
versions:
  free-pro-team: '*'
permissions: 企业所有者可以验证企业帐户的域。
redirect_from:
  - /github/articles/verifying-your-enterprise-accounts-domain
  - /early-access/github/articles/verifying-your-enterprise-accounts-domain
topics:
  - 企业
---

### 关于域验证

您可以通过验证域，确认企业控制的企业帐户所拥有的任何组织资料中列出的网站和电子邮件地址。 企业帐户的已验证域适用于企业帐户拥有的每个组织，组织所有者可以验证其组织的其他域。 更多信息请参阅“[验证组织的域](/organizations/managing-organization-settings/verifying-your-organizations-domain)”。

验证企业帐户域的所有权后，每个在其资料中列出域的组织资料中将显示"已验证"徽章。 {% data reusables.organizations.verified-domains-details %}

组织所有者将能够通过查看已验证域中的每个成员的电子邮件地址来验证组织成员的身份。

验证企业帐户的域后，您可以将企业帐户拥有的所有组织的电子邮件通知限制为已验证域。 更多信息请参阅“[将企业帐户的电子邮件通知限制为已批准的域](/github/setting-up-and-managing-your-enterprise/restricting-email-notifications-for-your-enterprise-account-to-approved-domains)”。

即使您不限制企业帐户的电子邮件通知，但如果组织所有者限制了组织的电子邮件通知，则组织成员除了能够接收来自组织的任何已验证域的通知之外，还能够接收来自企业帐户的任何已验证域的通知。 有关限制组织通知的更多信息，请参阅“[将电子邮件通知限制为已批准的域](/organizations/keeping-your-organization-secure/restricting-email-notifications-to-an-approved-domain)”。

### 验证企业帐户的域

要验证企业帐户的域，您必须具有使用域托管服务修改域记录的权限。

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.settings-tab %}
{% data reusables.enterprise-accounts.verified-domains-tab %}
1. 单击 **Add a domain（添加域）**。 ![添加域按钮](/assets/images/help/enterprises/add-a-domain-button.png)
{% data reusables.organizations.add-domain %}
{% data reusables.organizations.add-dns-txt-record %}
1. 等待 DNS 配置更改，最多可能需要 72 小时。 您可以通过在命令行上运行 `dig` 命令来确认您的 DNS 配置已更改，将 `ENTERPRISE-ACCOUNT` 替换为您企业帐户的名称，将 `example.com` 替换为要验证的域。 您应看到命令输出中列出的新 TXT 记录。
   ```shell
   dig _github-challenge-<em>ENTERPRISE-ACCOUNT</em>.<em>example.com</em> +nostats +nocomments +nocmd TXT
   ```
{% data reusables.organizations.continue-verifying-domain %}
1. （可选）组织的资料上显示“Verified（已验证）”徽章后，从域托管服务的 DNS 记录中删除 TXT 条目。 ![已验证徽章](/assets/images/help/organizations/verified-badge.png)
