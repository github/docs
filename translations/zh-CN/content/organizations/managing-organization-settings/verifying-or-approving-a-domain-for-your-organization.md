---
title: 验证或批准您组织的域
intro: '您可以通过 {% data variables.product.company_short %} 验证您对域的所有权，确认您的组织身份。 您也可以批准 {% data variables.product.company_short %} 可以为您的组织成员发送电子邮件通知的域名。'
redirect_from:
  - /articles/verifying-your-organization-s-domain
  - /articles/verifying-your-organizations-domain
  - /github/setting-up-and-managing-organizations-and-teams/verifying-your-organizations-domain
  - /organizations/managing-organization-settings/verifying-your-organizations-domain
permissions: Organization owners can verify or approve a domain for an organization.
versions:
  ghes: '>=3.2'
  ghec: '*'
type: how_to
topics:
  - Enterprise
  - Notifications
  - Organizations
  - Policy
shortTitle: 验证或批准域
---

## 关于域验证

验证组织域的所有权后，将在组织的资料中显示“Verified（已验证）”徽章。 {% ifversion ghec %}If your organization has agreed to the Corporate Terms of Service, organization owners will be able to verify the identity of organization members by viewing each member's email address within the verified domain. 更多信息请参阅“[关于组织的资料页面](/articles/about-your-organization-s-profile/)”和“<a href="/articles/upgrading-to-the-corporate-terms-of-service" class="dotcom-only">升级到公司服务条款</a>”。{% endif %}

{% ifversion ghec %}如果您的组织由企业帐户拥有，则{% elsif ghes %}{% endif %}“已验证”徽章将显示在组织的基本资料上，除了显示组织的任何已验证域之外，还能够显示企业帐户的任何已验证域。 组织所有者可以查看企业所有者已验证或批准的任何域，如果组织所有者也是企业所有者，则可以编辑域名。 更多信息请参阅“[验证或批准企业的域](/admin/configuration/configuring-your-enterprise/verifying-or-approving-a-domain-for-your-enterprise)”。

{% ifversion ghec %}
{% note %}

**Note:** To verify or approve domains, your organization must use {% data variables.product.prodname_ghe_cloud %}. {% data reusables.enterprise.link-to-ghec-trial %}

{% endnote %}
{% endif %}

{% data reusables.organizations.verified-domains-details %}

{% ifversion ghec or ghes > 3.1 %}
After verifying ownership of your organization's domain, you can restrict email notifications for the organization to that domain. 更多信息请参阅“[限制组织的电子邮件通知](/organizations/keeping-your-organization-secure/restricting-email-notifications-for-your-organization)”。
{% endif %}

{% ifversion ghec %}您还可以验证用于 {% data variables.product.prodname_pages %} 的自定义域，以防止在自定义域保持配置状态但您的 {% data variables.product.prodname_pages %} 站点被禁用或不再使用该域时域接管。 更多信息请参阅“[验证 {% data variables.product.prodname_pages %} 的自定义域](/pages/configuring-a-custom-domain-for-your-github-pages-site/verifying-your-custom-domain-for-github-pages)”。{% endif %}

## 关于域批准

{% data reusables.enterprise-accounts.approved-domains-beta-note %}

{% data reusables.enterprise-accounts.approved-domains-about %}

批准组织域名后，您可以将组织内活动的电子邮件通知限制为已验证或批准的域内具有已验证电子邮件地址的用户。 更多信息请参阅“[限制组织的电子邮件通知](/organizations/keeping-your-organization-secure/restricting-email-notifications-for-your-organization)”。

企业所有者无法看到哪个组织成员或电子邮件地址在已批准的域内接收通知。

企业所有者也可以批准企业拥有的其他组织的域名。 {% ifversion ghec %}更多信息请参阅“[验证或批准企业的域](/enterprise-cloud@latest/admin/configuration/configuring-your-enterprise/verifying-or-approving-a-domain-for-your-enterprise)”。{% endif %}{% ifversion ghes > 3.1 %}更多信息请参阅“[验证或批准企业的域](/admin/configuration/configuring-your-enterprise/verifying-or-approving-a-domain-for-your-enterprise)”。{% endif %}

## 验证组织的域

要验证域，您必须有权使用域托管服务修改域记录。

{% data reusables.profile.access_org %}
{% data reusables.profile.org_settings %}
{% data reusables.organizations.verified-domains %}
{% data reusables.organizations.add-a-domain %}
{% data reusables.organizations.add-domain %}
{% data reusables.organizations.add-dns-txt-record %}
1. 等待 DNS 配置更改，最多可能需要 72 小时。 您可以通过在命令行上运行 `dig` 命令来确认您的 DNS 配置已更改，将 `ORGANIZATION` 替换为您组织的名称，将 `example.com` 替换为要验证的域。 您应看到命令输出中列出的新 TXT 记录。
   ```shell
   $ dig _github-challenge-<em>ORGANIZATION</em>.<em>example.com</em> +nostats +nocomments +nocmd TXT
   ```
1. 确认您的 TXT 记录已添加到 DNS 后，请按照上述步骤一至三导航到组织批准和验证的域。
{% data reusables.organizations.continue-verifying-domain %}
11. （可选）组织的资料页面中显示“Verified（已验证）”徽章后，您可以从域托管服务的 DNS 记录中删除 TXT 条目。 ![已验证徽章](/assets/images/help/organizations/verified-badge.png)

## Approving a domain for your organization

{% data reusables.enterprise-accounts.approved-domains-beta-note %}

{% data reusables.profile.access_org %}
{% data reusables.profile.org_settings %}
{% data reusables.organizations.verified-domains %}
{% data reusables.organizations.add-a-domain %}
{% data reusables.organizations.add-domain %}
{% data reusables.organizations.domains-approve-it-instead %}
{% data reusables.organizations.domains-approve-domain %}

## 删除已批准或已验证的域

{% data reusables.profile.access_org %}
{% data reusables.profile.org_settings %}
{% data reusables.organizations.verified-domains %}
1. 在要删除的域的右侧，单击 {% octicon "kebab-horizontal" aria-label="The horizontal kebab icon" %}，然后单击 ** Delete（删除）**。 ![域的"删除"](/assets/images/help/organizations/domains-delete.png)
