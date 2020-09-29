---
title: 验证组织的域
intro: '您可以验证组织控制的域来确认组织在 {% data variables.product.product_name %} 上的身份。'
redirect_from:
  - /articles/verifying-your-organization-s-domain
  - /articles/verifying-your-organizations-domain
versions:
  free-pro-team: '*'
---

要在 {% data variables.product.product_name %} 上验证域，您必须拥有组织中的所有者权限。 更多信息请参阅“[组织的权限级别](/articles/permission-levels-for-an-organization)”。 您还需要访问权限以使用您的域托管服务修改域记录。

验证组织域的所有权后，将在组织的资料中显示“Verified（已验证）”徽章。 如果您的组织位于 {% data variables.product.prodname_ghe_cloud %} 上并且已同意公司服务条款，则组织所有者将能够通过查看验证域内每个成员的电子邮件地址来验证组织成员的身份。 更多信息请参阅“[关于组织的资料页面](/articles/about-your-organization-s-profile/)”和“[升级到公司服务条款](/articles/upgrading-to-the-corporate-terms-of-service)”。

要显示“Verified（已验证）”徽章，组织资料中显示的网站和电子邮件信息必须匹配经验证的一个或多个域。 如果组织资料中显示的网站和电子邮件地址在不同的域中托管，则必须验证两个域。

{% note %}

**注：**如果组织资料中显示的电子邮件地址和网站使用同一个域的变体，则必须验证两种变体。 例如，如果组织的资料显示网站 `www.example.com` 和电子邮件地址 `info@example.com`，您需要验证 `www.example.com` 和 `example.com`。

{% endnote %}

在 {% data variables.product.prodname_ghe_cloud %} 上，验证组织域的所有权后，您可以将组织的电子邮件通知限制为该域。 更多信息请参阅“[将电子邮件通知限于经批准的域](/articles/restricting-email-notifications-to-an-approved-domain)”。

{% data reusables.profile.access_profile %}
{% data reusables.profile.access_org %}
{% data reusables.organizations.org_settings %}
{% data reusables.organizations.verified-domains %}
5. 单击 **Add a domain（添加域）**。 ![添加域按钮](/assets/images/help/organizations/add-a-domain-button.png)
6. 在域字段中，输入您想要验证的域，然后单击 **Add domain（添加域）**。 ![添加域字段](/assets/images/help/organizations/add-domain-field.png)
7. 按照 **Add a DNS TXT record（添加 DNS TXT 记录）**下的说明操作，使用您的域托管服务创建 DNS TXT 记录。 您的 DNS 配置可能需要 72 小时才能更改。 DNS 配置更改后，继续下一步。 ![创建 DNS txt 记录的说明](/assets/images/help/organizations/create-dns-txt-record-instructions.png)

   {% tip %}

   **提示：**您可通过在命令行中运行 `dig` 命令来确认 DNS 配置已更改。 在示例命令中，将 `ORGANIZATION` 替换为您组织的名称，将 `example.com` 替换为您想要验证的域。 您应看到命令输出中列出的新 TXT 记录。

   ```shell
   $ dig _github-challenge-<em>ORGANIZATION</em>.<em>example.com</em> +nostats +nocomments +nocmd TXT
   ```

   {% endtip %}

8. 确认您的 TXT 记录添加到 DNS 后，导航到组织设置中的 Verified domains（已验证的域）选项卡。 您可以按照上面的步骤 1 至 4 操作找到 Verified domains（已验证的域）选项卡。 ![验证含有待定域的域设置页面](/assets/images/help/organizations/pending-domain-verification.png)
9. 在待验证的域旁边，单击 {% octicon "kebab-horizontal" aria-label="The horizontal kebab icon" %}，然后单击 **Continue verifying（继续验证）**。 ![继续验证域按钮](/assets/images/help/organizations/continue-verifying-domain.png)
10. 单击 **Verify domain（验证域）**。 ![验证域按钮](/assets/images/help/organizations/verify-domain-final-button.png)
11. （可选）组织的资料页面中显示“Verified（已验证）”徽章后，您可以从域托管服务的 DNS 记录中删除 TXT 条目。 ![已验证徽章](/assets/images/help/organizations/verified-badge.png)
