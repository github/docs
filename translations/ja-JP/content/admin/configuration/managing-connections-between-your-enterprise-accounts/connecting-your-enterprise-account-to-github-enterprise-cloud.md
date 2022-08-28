---
title: Connecting your enterprise account to GitHub Enterprise Cloud
shortTitle: Connect enterprise accounts
intro: '{% data variables.product.prodname_github_connect %}を有効化すると、特定の機能やワークフローを{% data variables.product.product_location %}と{% data variables.product.prodname_ghe_cloud %}のOrganizationの間で共有できます。'
redirect_from:
  - /enterprise/admin/guides/developer-workflow/connecting-github-enterprise-to-github-com/
  - /enterprise/admin/guides/developer-workflow/connecting-github-enterprise-server-to-github-com
  - /enterprise/admin/developer-workflow/connecting-github-enterprise-server-to-githubcom/
  - /enterprise/admin/installation/connecting-github-enterprise-server-to-github-enterprise-cloud
  - /enterprise/admin/configuration/connecting-github-enterprise-server-to-github-enterprise-cloud
  - /admin/configuration/connecting-github-enterprise-server-to-github-enterprise-cloud
  - /admin/configuration/managing-connections-between-github-enterprise-server-and-github-enterprise-cloud/connecting-github-enterprise-server-to-github-enterprise-cloud
permissions: 'Enterprise owners who are also owners of a {% data variables.product.prodname_ghe_cloud %} organization or enterprise account can enable {% data variables.product.prodname_github_connect %}.'
versions:
  ghes: '*'
  ghae: next
type: how_to
topics:
  - Enterprise
  - GitHub Connect
  - Infrastructure
  - Networking
---

{% data reusables.github-connect.beta %}

## {% data variables.product.prodname_github_connect %} について

{% data variables.product.prodname_github_connect %}を有効化するには、{% data variables.product.product_location %}と{% data variables.product.prodname_ghe_cloud %} のOrganizationまたはEnterpriseアカウントの両方で接続を設定しなければなりません。

{% ifversion ghes %}
接続を設定するには、プロキシの設定で`github.com` および `api.github.com` への接続が許可されていなければなりません。 詳細は「[アウトバウンド Web プロキシサーバーを設定する](/enterprise/{{ currentVersion }}/admin/guides/installation/configuring-an-outbound-web-proxy-server)」を参照してください。
{% endif %}

{% data variables.product.prodname_github_connect %}を有効化すると、Unified Searchや統合コントリビューションといった機能を使用できるようになります。 For more information about all of the features available, see "[Managing connections between your enterprise accounts](/admin/configuration/managing-connections-between-your-enterprise-accounts)."

{% data variables.product.product_location %}を{% data variables.product.prodname_ghe_cloud %}に接続すると、{% data variables.product.prodname_dotcom_the_website %}上のレコードに、接続に関する情報が保存されます:
{% ifversion ghes %}
- {% data variables.product.prodname_ghe_server %} ライセンスの公開鍵の部分
- {% data variables.product.prodname_ghe_server %} ライセンスのハッシュ
- {% data variables.product.prodname_ghe_server %} ライセンスの顧客名
- The version of {% data variables.product.product_location_enterprise %}{% endif %}
- The hostname of your {% data variables.product.product_name %} instance
- {% data variables.product.product_location %}に接続している{% data variables.product.prodname_dotcom_the_website %}上のOrganizationまたはEnterpriseアカウント
- {% data variables.product.prodname_dotcom_the_website %} へのリクエストの発行に {% data variables.product.product_location %} が使用する認証トークン

{% data variables.product.prodname_github_connect %}を有効化すると、{% data variables.product.prodname_ghe_cloud %}のOrganizationまたはEnterpriseアカウントが所有している{% data variables.product.prodname_github_app %}も作成されます。 {% data variables.product.product_name %} は {% data variables.product.prodname_github_app %} のクレデンシャルを使って {% data variables.product.prodname_dotcom_the_website %} へのリクエストを発行します。
{% ifversion ghes %}
{% data variables.product.prodname_ghe_server %} は {% data variables.product.prodname_github_app %} からのクレデンシャルを保存します。 以下のクレデンシャルは、High Availability あるいはクラスタリング環境ではレプリケーションされ、{% data variables.product.prodname_enterprise_backup_utilities %} が作成するスナップショットを含むあらゆるバックアップに保存されます。
- 1 時間にわたって有効な認証トークン
- 新しい認証トークンを生成するのに使われる秘密鍵
{% endif %}

{% data variables.product.prodname_github_connect %} を有効化しても、{% data variables.product.prodname_dotcom_the_website %} のユーザは {% data variables.product.product_name %} を変更できるようになりません。

GraphQL APIを利用したEnterpriseアカウントの管理に関する詳しい情報については、「[Enterprise アカウント](/graphql/guides/managing-enterprise-accounts)」を参照してください。
## {% data variables.product.prodname_github_connect %} の有効化

{% ifversion ghes %}
1. {% data variables.product.product_location %}と{% data variables.product.prodname_dotcom_the_website %}にサインインしてください。
{% data reusables.enterprise-accounts.access-enterprise %}{% ifversion ghes < 3.1 %}{% data reusables.enterprise-accounts.settings-tab %}{% endif %}{% data reusables.enterprise-accounts.github-connect-tab %}{% else %}
1. {% data variables.product.product_location %}と{% data variables.product.prodname_dotcom_the_website %}にサインインしてください。
{% data reusables.enterprise-accounts.access-enterprise %}{% data reusables.enterprise-accounts.github-connect-tab %}{% endif %}
1. 「{% data variables.product.prodname_github_connect %} is not enabled yet」の下で、「**Enable{% data variables.product.prodname_github_connect %}**」をクリックします。 By clicking **Enable {% data variables.product.prodname_github_connect %}**, you agree to the "<a href="/github/site-policy/github-terms-for-additional-products-and-features#connect" class="dotcom-only">{% data variables.product.prodname_dotcom %} Terms for Additional Products and Features</a>."
{% ifversion ghes %}
![Enable GitHub Connect button](/assets/images/enterprise/business-accounts/enable-github-connect-button.png){% else %}
![Enable GitHub Connect button](/assets/images/enterprise/github-ae/enable-github-connect-button.png)
{% endif %}
1. 接続したいEnterpriseアカウントまたはOrganizationの横にある「**Connect**」をクリックします。 ![Enterprise アカウントまたはビジネスアカウントの横にある [Connect] ボタン](/assets/images/enterprise/business-accounts/choose-enterprise-or-org-connect.png)

## Disconnecting a {% data variables.product.prodname_ghe_cloud %} organization or enterprise account from your enterprise account

{% data variables.product.prodname_ghe_cloud %}から切断すると、EnterpriseアカウントまたはOrganizationから{% data variables.product.prodname_github_connect %}{% data variables.product.prodname_github_app %}が削除され、{% data variables.product.product_location %}に保存されているクレデンシャルが削除されます。

{% data reusables.enterprise-accounts.access-enterprise %}{% ifversion ghes < 3.1 %}{% data reusables.enterprise-accounts.settings-tab %}{% endif %}{% data reusables.enterprise-accounts.github-connect-tab %}
1. 切断しようとするEnterpriseアカウントまたはOrganizationの横にある「**Disable {% data variables.product.prodname_github_connect %}**」をクリックします。
{% ifversion ghes %}
  ![EnterpriseアカウントまたはOrganization名の横にある「Disable GitHub Connect」ボタン](/assets/images/enterprise/business-accounts/disable-github-connect-button.png)
1. 切断に関する情報を読み、「 **Disable {% data variables.product.prodname_github_connect %}**」をクリックします。 ![切断に関する警告情報が表示され確定ボタンがあるモーダル](/assets/images/enterprise/business-accounts/confirm-disable-github-connect.png)
{% else %}
  ![EnterpriseアカウントまたはOrganization名の横にある「Disable GitHub Connect」ボタン](/assets/images/enterprise/github-ae/disable-github-connect-button.png)
1. 切断に関する情報を読み、「 **Disable {% data variables.product.prodname_github_connect %}**」をクリックします。 ![切断に関する警告情報が表示され確定ボタンがあるモーダル](/assets/images/enterprise/github-ae/confirm-disable-github-connect.png)
{% endif %} 
