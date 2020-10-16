---
title: GitHub Enterprise ServerからGitHub Enterprise Cloudに接続する
intro: '{% data variables.product.prodname_github_connect %}を有効化すると、特定の機能やワークフローを{% data variables.product.product_location_enterprise %}と{% data variables.product.prodname_ghe_cloud %}のOrganizationの間で共有できます。'
redirect_from:
  - /enterprise/admin/guides/developer-workflow/connecting-github-enterprise-to-github-com/
  - /enterprise/admin/guides/developer-workflow/connecting-github-enterprise-server-to-github-com
  - /enterprise/admin/developer-workflow/connecting-github-enterprise-server-to-githubcom/
  - /enterprise/admin/installation/connecting-github-enterprise-server-to-github-enterprise-cloud
  - /enterprise/admin/configuration/connecting-github-enterprise-server-to-github-enterprise-cloud
permissions: '{% data variables.product.prodname_ghe_cloud %}のOrganizationあるいはEnterpriseアカウントの所有者でもある{% data variables.product.prodname_ghe_server %}のサイト管理者は、{% data variables.product.prodname_github_connect %}を有効化できます。'
versions:
  enterprise-server: '*'
---

### {% data variables.product.prodname_github_connect %} について

{% data variables.product.prodname_github_connect %}を有効化するには、{% data variables.product.product_location_enterprise %}と{% data variables.product.prodname_ghe_cloud %} のOrganizationまたはEnterpriseアカウントの両方で接続を設定しなければなりません。

接続を設定するには、プロキシの設定で`github.com` および `api.github.com` への接続が許可されていなければなりません。 詳細は「[アウトバウンド Web プロキシサーバーを設定する](/enterprise/{{ currentVersion }}/admin/guides/installation/configuring-an-outbound-web-proxy-server)」を参照してください。

{% data variables.product.prodname_github_connect %}を有効化すると、Unified Searchや統合コントリビューションといった機能を使用できるようになります。 使用できるすべての機能についての詳細は、「[ {% data variables.product.prodname_ghe_server %}と{% data variables.product.prodname_ghe_cloud %}の間の接続を管理する](/enterprise/{{ currentVersion }}/admin/installation/managing-connections-between-github-enterprise-server-and-github-enterprise-cloud)」を参照してください。

{% data variables.product.product_location_enterprise %}を{% data variables.product.prodname_ghe_cloud %}に接続すると、{% data variables.product.prodname_dotcom_the_website %}上のレコードに、接続に関する情報が保存されます:
- {% data variables.product.prodname_ghe_server %} ライセンスの公開鍵の部分
- {% data variables.product.prodname_ghe_server %} ライセンスのハッシュ
- {% data variables.product.prodname_ghe_server %} ライセンスの顧客名
- {% data variables.product.product_location_enterprise %} のホスト名
- {% data variables.product.product_location_enterprise %} のバージョン
- {% data variables.product.product_location_enterprise %}に接続している{% data variables.product.prodname_dotcom_the_website %}上のOrganizationまたはEnterpriseアカウント
- {% data variables.product.prodname_dotcom_the_website %} へのリクエストの発行に {% data variables.product.product_location_enterprise %} が使用する認証トークン

{% data variables.product.prodname_github_connect %}を有効化すると、{% data variables.product.prodname_ghe_cloud %}のOrganizationまたはEnterpriseアカウントが所有している{% data variables.product.prodname_github_app %}も作成されます。 {% data variables.product.prodname_ghe_server %} は {% data variables.product.prodname_github_app %} のクレデンシャルを使って {% data variables.product.prodname_dotcom_the_website %} へのリクエストを発行します。

{% data variables.product.prodname_ghe_server %} は {% data variables.product.prodname_github_app %} からのクレデンシャルを保存します。 以下のクレデンシャルは、High Availability あるいはクラスタリング環境ではレプリケーションされ、{% data variables.product.prodname_enterprise_backup_utilities %} が作成するスナップショットを含むあらゆるバックアップに保存されます。
- 1 時間にわたって有効な認証トークン
- 新しい認証トークンを生成するのに使われる秘密鍵

{% data variables.product.prodname_github_connect %} を有効化しても、{% data variables.product.prodname_dotcom_the_website %} のユーザは {% data variables.product.prodname_ghe_server %} を変更できるようになりません。

GraphQL APIを利用したEnterpriseアカウントの管理に関する詳しい情報については、「[Enterprise アカウント](/v4/guides/managing-enterprise-accounts)」を参照してください。
### {% data variables.product.prodname_github_connect %} の有効化

1. Sign in to

{% data variables.product.product_location_enterprise %} and {% data variables.product.prodname_dotcom_the_website %}.
{% data reusables.enterprise_site_admin_settings.access-settings %}
{% data reusables.enterprise_site_admin_settings.business %}
{% data reusables.enterprise-accounts.settings-tab %}
{% data reusables.enterprise-accounts.github-connect-tab %}
5. 「{% data variables.product.prodname_dotcom_the_website %} is not enabled yet」の下で、「**Enable{% data variables.product.prodname_github_connect %}**」をクリックします。 「**Enable {% data variables.product.prodname_github_connect %}**,」をクリックすると、 <a href="/articles/github-connect-addendum-to-the-github-enterprise-license-agreement/" class="dotcom-only">{% data variables.product.prodname_enterprise %} ライセンスアグリーメントの {% data variables.product.prodname_github_connect %} に関する補遺</a>に合意したことになります。 ![「Enable GitHub Connect」ボタン](/assets/images/enterprise/business-accounts/enable-github-connect-button.png)
6. 接続したいEnterpriseアカウントまたはOrganizationの横にある「**Connect**」をクリックします。 ![Enterprise アカウントまたはビジネスアカウントの横にある [Connect] ボタン](/assets/images/enterprise/business-accounts/choose-enterprise-or-org-connect.png)

### {% data variables.product.product_location_enterprise %}{% data variables.product.prodname_ghe_cloud %}OrganizationまたはEnterpriseアカウントを切断する

{% data variables.product.prodname_ghe_cloud %}から切断すると、EnterpriseアカウントまたはOrganizationから{% data variables.product.prodname_github_connect %}{% data variables.product.prodname_github_app %}が削除され、{% data variables.product.product_location_enterprise %}に保存されているクレデンシャルが削除されます。

{% data reusables.enterprise_site_admin_settings.access-settings %}
{% data reusables.enterprise_site_admin_settings.business %}
{% data reusables.enterprise-accounts.settings-tab %}
{% data reusables.enterprise-accounts.github-connect-tab %}
5. 切断しようとするEnterpriseアカウントまたはOrganizationの横にある「**Disable {% data variables.product.prodname_github_connect %}**」をクリックします。 ![EnterpriseアカウントまたはOrganization名の横にある「Disable GitHub Connect」ボタン](/assets/images/enterprise/business-accounts/disable-github-connect-button.png)
6. 切断に関する情報を読み、「 **Disable {% data variables.product.prodname_github_connect %}**」をクリックします。 ![切断に関する警告情報が表示され確定ボタンがあるモーダル](/assets/images/enterprise/business-accounts/confirm-disable-github-connect.png)

