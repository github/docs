---
title: 验证组织的域
intro: '您可以验证组织控制的域来确认组织在 {% data variables.product.product_name %} 上的身份。'
redirect_from:
  - /articles/verifying-your-organization-s-domain
  - /articles/verifying-your-organizations-domain
versions:
  free-pro-team: '*'
---

### About domain verification

要在 {% data variables.product.product_name %} 上验证域，您必须拥有组织中的所有者权限。 更多信息请参阅“[组织的权限级别](/articles/permission-levels-for-an-organization)”。 您还需要访问权限以使用您的域托管服务修改域记录。

验证组织域的所有权后，将在组织的资料中显示“Verified（已验证）”徽章。 如果您的组织位于 {% data variables.product.prodname_ghe_cloud %} 上并且已同意公司服务条款，则组织所有者将能够通过查看验证域内每个成员的电子邮件地址来验证组织成员的身份。 更多信息请参阅“[关于组织的资料页面](/articles/about-your-organization-s-profile/)”和“[升级到公司服务条款](/articles/upgrading-to-the-corporate-terms-of-service)”。

If your organization is owned by an enterprise account, a "Verified" badge will display on your organization's profile for any domains verified for the enterprise account, in addition to any domains verified for the organization. For more information, see "[Verifying your enterprise account's domain](/github/setting-up-and-managing-your-enterprise/verifying-your-enterprise-accounts-domain)."

{% data reusables.organizations.verified-domains-details %}

在 {% data variables.product.prodname_ghe_cloud %} 上，验证组织域的所有权后，您可以将组织的电子邮件通知限制为该域。 更多信息请参阅“[将电子邮件通知限于经批准的域](/articles/restricting-email-notifications-to-an-approved-domain)”。

### 验证组织的域

{% data reusables.profile.access_profile %}
{% data reusables.profile.access_org %}
{% data reusables.organizations.org_settings %}
{% data reusables.organizations.verified-domains %}
5. 单击 **Add a domain（添加域）**。 ![添加域按钮](/assets/images/help/organizations/add-a-domain-button.png)
{% data reusables.organizations.add-domain %}
{% data reusables.organizations.add-dns-txt-record %}
1. Wait for your DNS configuration to change, which may take up to 72 hours. You can confirm your DNS configuration has changed by running the `dig` command on the command line, replacing `ORGANIZATION` with the name of your organization and `example.com` with the domain you'd like to verify. 您应看到命令输出中列出的新 TXT 记录。
   ```shell
   $ dig _github-challenge-<em>ORGANIZATION</em>.<em>example.com</em> +nostats +nocomments +nocmd TXT
   ```
8. 确认您的 TXT 记录添加到 DNS 后，导航到组织设置中的 Verified domains（已验证的域）选项卡。 您可以按照上面的步骤 1 至 4 操作找到 Verified domains（已验证的域）选项卡。 ![验证含有待定域的域设置页面](/assets/images/help/organizations/pending-domain-verification.png)
{% data reusables.organizations.continue-verifying-domain %}
11. （可选）组织的资料页面中显示“Verified（已验证）”徽章后，您可以从域托管服务的 DNS 记录中删除 TXT 条目。 ![已验证徽章](/assets/images/help/organizations/verified-badge.png)
