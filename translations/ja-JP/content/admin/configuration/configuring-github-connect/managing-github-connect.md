---
title: Managing GitHub Connect
shortTitle: Manage GitHub Connect
intro: 'You can enable {% data variables.product.prodname_github_connect %} to access additional features and workflows for {% data variables.product.product_location %}.'
redirect_from:
  - /enterprise/admin/guides/developer-workflow/connecting-github-enterprise-to-github-com
  - /enterprise/admin/guides/developer-workflow/connecting-github-enterprise-server-to-github-com
  - /enterprise/admin/developer-workflow/connecting-github-enterprise-server-to-githubcom
  - /enterprise/admin/installation/connecting-github-enterprise-server-to-github-enterprise-cloud
  - /enterprise/admin/configuration/connecting-github-enterprise-server-to-github-enterprise-cloud
  - /admin/configuration/connecting-github-enterprise-server-to-github-enterprise-cloud
  - /admin/configuration/managing-connections-between-github-enterprise-server-and-github-enterprise-cloud/connecting-github-enterprise-server-to-github-enterprise-cloud
  - /admin/configuration/managing-connections-between-your-enterprise-accounts/connecting-your-enterprise-account-to-github-enterprise-cloud
versions:
  ghes: '*'
  ghae: '*'
type: how_to
topics:
  - Enterprise
  - GitHub Connect
  - Infrastructure
  - Networking
---

{% data reusables.github-connect.beta %}

## {% data variables.product.prodname_github_connect %} について

You can access additional features and workflows on {% data variables.product.product_location %} by enabling {% data variables.product.prodname_github_connect %}. 詳しい情報については、「[{% data variables.product.prodname_github_connect %} について](/admin/configuration/configuring-github-connect/about-github-connect)」を参照してください。

When you enable {% data variables.product.prodname_github_connect %}, you configure a connection between {% data variables.product.product_location %} and an organization or enterprise account on {% data variables.product.prodname_ghe_cloud %}. Enabling {% data variables.product.prodname_github_connect %} creates a {% data variables.product.prodname_github_app %} owned by the organization or enterprise account on {% data variables.product.prodname_ghe_cloud %}. {% data variables.product.product_name %} は {% data variables.product.prodname_github_app %} のクレデンシャルを使って {% data variables.product.prodname_ghe_cloud %} へのリクエストを発行します。

{% ifversion ghes %}
{% data variables.product.prodname_ghe_server %} は {% data variables.product.prodname_github_app %} からのクレデンシャルを保存します。 The following credentials will be replicated to all nodes in a high availability or cluster environment, and stored in any backups, including snapshots created by {% data variables.product.prodname_enterprise_backup_utilities %}.
- 1 時間にわたって有効な認証トークン
- 新しい認証トークンを生成するのに使われる秘密鍵
{% endif %}

## 必要な環境

To use {% data variables.product.prodname_github_connect %}, you must have an organization or enterprise account on {% data variables.product.prodname_dotcom_the_website %} that uses {% data variables.product.prodname_ghe_cloud %}. You may already have {% data variables.product.prodname_ghe_cloud %} included in your plan. {% data reusables.enterprise.link-to-ghec-trial %}

{% ifversion ghes %}
If your organization or enterprise account on {% data variables.product.prodname_dotcom_the_website %} uses IP allow lists, you must add the IP address or network for {% data variables.product.product_location %} to your IP allow list on {% data variables.product.prodname_dotcom_the_website %}. For more information, see "[Managing allowed IP addresses for your organization](/enterprise-cloud@latest/organizations/keeping-your-organization-secure/managing-security-settings-for-your-organization/managing-allowed-ip-addresses-for-your-organization)" and "[Enforcing policies for security settings in your enterprise](/enterprise-cloud@latest/admin/policies/enforcing-policies-for-your-enterprise/enforcing-policies-for-security-settings-in-your-enterprise#managing-allowed-ip-addresses-for-organizations-in-your-enterprise)" in the {% data variables.product.prodname_ghe_cloud %} documentation.

To configure a connection, your proxy configuration must allow connectivity to `github.com`, `api.github.com`, and `uploads.github.com`. For more information, see "[Configuring an outbound web proxy server](/enterprise/admin/guides/installation/configuring-an-outbound-web-proxy-server)."
{% endif %}

## {% data variables.product.prodname_github_connect %} の有効化

Enterprise owners who are also owners of an organization or enterprise account that uses {% data variables.product.prodname_ghe_cloud %} can enable {% data variables.product.prodname_github_connect %}.

If you're connecting {% data variables.product.product_location %} to an organization on {% data variables.product.prodname_ghe_cloud %} that is not owned by an enterprise account, you must sign into {% data variables.product.prodname_dotcom_the_website %} as an organization owner.

If you're connecting {% data variables.product.product_location %} to an organization on {% data variables.product.prodname_ghe_cloud %} that is owned by an enterprise account or to an enterprise account itself, you must sign into {% data variables.product.prodname_dotcom_the_website %} as an enterprise owner.

{% ifversion ghes %}
1. {% data variables.product.product_location %}と{% data variables.product.prodname_dotcom_the_website %}にサインインしてください。
{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.github-connect-tab %}{% else %}
1. {% data variables.product.product_location %}と{% data variables.product.prodname_dotcom_the_website %}にサインインしてください。
{% data reusables.enterprise-accounts.access-enterprise %}{% data reusables.enterprise-accounts.github-connect-tab %}{% endif %}
1. 「{% data variables.product.prodname_github_connect %} is not enabled yet」の下で、「**Enable{% data variables.product.prodname_github_connect %}**」をクリックします。 By clicking **Enable {% data variables.product.prodname_github_connect %}**, you agree to the "<a href="/github/site-policy/github-terms-for-additional-products-and-features#connect" class="dotcom-only">{% data variables.product.prodname_dotcom %} Terms for Additional Products and Features</a>."
{% ifversion ghes %}
![Enable GitHub Connect button](/assets/images/enterprise/business-accounts/enable-github-connect-button.png){% else %}
![Enable GitHub Connect button](/assets/images/enterprise/github-ae/enable-github-connect-button.png)
{% endif %}
1. 接続したいEnterpriseアカウントまたはOrganizationの横にある「**Connect**」をクリックします。 ![Enterprise アカウントまたはビジネスアカウントの横にある [Connect] ボタン](/assets/images/enterprise/business-accounts/choose-enterprise-or-org-connect.png)

## {% data variables.product.prodname_github_connect %} を無効にする

Enterprise owners can disable {% data variables.product.prodname_github_connect %}.

When you disconnect from {% data variables.product.prodname_ghe_cloud %}, the {% data variables.product.prodname_github_connect %} {% data variables.product.prodname_github_app %} is deleted from your enterprise account or organization and credentials stored on {% data variables.product.product_location %} are deleted.

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.github-connect-tab %}
1. 切断しようとするEnterpriseアカウントまたはOrganizationの横にある「**Disable {% data variables.product.prodname_github_connect %}**」をクリックします。
{% ifversion ghes %}
  ![EnterpriseアカウントまたはOrganization名の横にある「Disable GitHub Connect」ボタン](/assets/images/enterprise/business-accounts/disable-github-connect-button.png)
1. 切断に関する情報を読み、「 **Disable {% data variables.product.prodname_github_connect %}**」をクリックします。 ![切断に関する警告情報が表示され確定ボタンがあるモーダル](/assets/images/enterprise/business-accounts/confirm-disable-github-connect.png)
{% else %}
  ![EnterpriseアカウントまたはOrganization名の横にある「Disable GitHub Connect」ボタン](/assets/images/enterprise/github-ae/disable-github-connect-button.png)
1. 切断に関する情報を読み、「 **Disable {% data variables.product.prodname_github_connect %}**」をクリックします。 ![切断に関する警告情報が表示され確定ボタンがあるモーダル](/assets/images/enterprise/github-ae/confirm-disable-github-connect.png)
{% endif %} 
