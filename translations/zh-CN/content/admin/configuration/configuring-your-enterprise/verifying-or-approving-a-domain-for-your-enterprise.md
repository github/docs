---
title: 验证或批准您企业的域
shortTitle: 验证或批准域
intro: '您可以通过 {% data variables.product.company_short %} 验证您对域的所有权，确认您企业帐户拥有的组织身份。 您也可以批准组织成员可以接收电子邮件通知的域名。'
product: '{% data reusables.gated-features.verify-and-approve-domain %}'
versions:
  ghec: '*'
  ghes: '>=3.2'
permissions: Enterprise owners can verify or approve a domain for an enterprise account.
type: how_to
topics:
  - Enterprise
  - Notifications
  - Organizations
  - Policy
redirect_from:
  - /admin/configuration/configuring-your-enterprise/verifying-or-approving-a-domain-for-your-enterprise-account
  - /github/setting-up-and-managing-your-enterprise/managing-your-enterprise-account/verifying-or-approving-a-domain-for-your-enterprise-account
  - /admin/configuration/verifying-or-approving-a-domain-for-your-enterprise
  - /github/setting-up-and-managing-your-enterprise/verifying-your-enterprise-accounts-domain
  - /github/articles/verifying-your-enterprise-accounts-domain
  - /early-access/github/articles/verifying-your-enterprise-accounts-domain
  - /github/setting-up-and-managing-your-enterprise/verifying-or-approving-a-domain-for-your-enterprise-account
  - /admin/policies/verifying-or-approving-a-domain-for-your-enterprise
---

## 关于域名验证

您可以通过验证域，确认企业控制的企业帐户所拥有的任何组织资料中列出的网站和电子邮件地址。 企业帐户的已验证域适用于该企业帐户拥有的每个组织。

验证企业帐户域的所有权后，每个在其资料中列出域的组织资料中将显示"已验证"徽章。 {% data reusables.organizations.verified-domains-details %}

对于在企业级别配置的域，企业所有者可以通过查看已验证域中每个成员的电子邮件地址来验证组织成员的身份。 企业所有者也可以查看与其在 {% data variables.product.prodname_dotcom %} 上的用户帐户关联的已验证域中没有电子邮件地址的企业成员列表。 更多信息请参阅“[查看来自已验证域的电子邮件地址的成员](/admin/user-management/managing-users-in-your-enterprise/viewing-people-in-your-enterprise#viewing-members-without-an-email-address-from-a-verified-domain)”。

验证企业帐户的域后，您可以将企业帐户拥有的所有组织的电子邮件通知限制为已验证域。 更多信息请参阅“[限制企业的电子邮件通知](/admin/policies/enforcing-policies-for-your-enterprise/restricting-email-notifications-for-your-enterprise)”。

即使您不限制企业帐户的电子邮件通知，但如果组织所有者限制了组织的电子邮件通知，则组织成员除了能够接收来自组织的任何已验证或已批准域的通知之外，还能够接收来自企业帐户的任何已验证或已批准域的通知。 有关限制组织通知的更多信息，请参阅“[限制组织的电子邮件通知](/organizations/keeping-your-organization-secure/restricting-email-notifications-for-your-organization)”。

组织所有者还可以验证其组织的其他域。 更多信息请参阅“[验证或批准组织的域](/organizations/managing-organization-settings/verifying-or-approving-a-domain-for-your-organization)”。

## 关于域的批准

{% data reusables.enterprise-accounts.approved-domains-beta-note %}

{% data reusables.enterprise-accounts.approved-domains-about %}

批准企业帐户的域后，您可以将有关企业帐户中活动的电子邮件通知限制为在已验证或已批准域中具有已验证电子邮件地址的用户。 更多信息请参阅“[限制企业的电子邮件通知](/admin/policies/enforcing-policies-for-your-enterprise/restricting-email-notifications-for-your-enterprise)”。

{% ifversion ghec %}要接收电子邮件通知，用户帐户的所有者必须验证 {% data variables.product.product_name %} 中的电子邮件地址。 更多信息请参阅“[验证电子邮件地址](/github/getting-started-with-github/verifying-your-email-address)”。{% endif %}

组织所有者无法查看电子邮件地址，也无法查看哪个用户帐户与已批准域中的电子邮件地址相关联。

组织所有者还可以批准其组织的其他域。 更多信息请参阅“[验证或批准组织的域](/organizations/managing-organization-settings/verifying-or-approving-a-domain-for-your-organization)”。

## 验证企业帐户的域名

要验证企业帐户的域，您必须具有使用域托管服务修改域记录的权限。

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.settings-tab %}
{% data reusables.enterprise-accounts.verified-domains-tab %}
{% data reusables.enterprise-accounts.add-a-domain %}
{% data reusables.organizations.add-domain %}
{% data reusables.organizations.add-dns-txt-record %}
1. 等待 DNS 配置更改，最多可能需要 72 小时。 您可以通过在命令行上运行 `dig` 命令来确认您的 DNS 配置已更改，将 `ENTERPRISE-ACCOUNT` 替换为您企业帐户的名称，将 `example.com` 替换为要验证的域。 您应看到命令输出中列出的新 TXT 记录。
   ```shell
   dig _github-challenge-<em>ENTERPRISE-ACCOUNT</em>.<em>example.com</em> +nostats +nocomments +nocmd TXT
   ```
1. 确认您的 TXT 记录已添加到 DNS 后，请按照上面的步骤 1 至 4 导航到您企业帐户的已批准和已验证域。
{% data reusables.enterprise-accounts.continue-verifying-domain %}
1. （可选）组织的资料上显示“Verified（已验证）”徽章后，从域托管服务的 DNS 记录中删除 TXT 条目。 ![已验证徽章](/assets/images/help/organizations/verified-badge.png)

## 批准企业帐户的域名

{% data reusables.enterprise-accounts.approved-domains-beta-note %}

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.settings-tab %}
{% data reusables.enterprise-accounts.verified-domains-tab %}
{% data reusables.enterprise-accounts.add-a-domain %}
{% data reusables.organizations.add-domain %}
{% data reusables.organizations.domains-approve-it-instead %}
{% data reusables.organizations.domains-approve-domain %}

## 删除已批准或已验证的域

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.settings-tab %}
{% data reusables.enterprise-accounts.verified-domains-tab %}
1. 在要删除的域的右侧，单击 {% octicon "kebab-horizontal" aria-label="The horizontal kebab icon" %}，然后单击 ** Delete（删除）**。 ![域的"删除"](/assets/images/help/organizations/domains-delete.png)
