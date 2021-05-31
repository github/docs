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
1. After confirming your TXT record is added to your DNS, follow steps one through four above to navigate to your enterprise account's approved and verified domains.
{% data reusables.organizations.continue-verifying-domain %}
1. （可选）组织的资料上显示“Verified（已验证）”徽章后，从域托管服务的 DNS 记录中删除 TXT 条目。 ![已验证徽章](/assets/images/help/organizations/verified-badge.png)
