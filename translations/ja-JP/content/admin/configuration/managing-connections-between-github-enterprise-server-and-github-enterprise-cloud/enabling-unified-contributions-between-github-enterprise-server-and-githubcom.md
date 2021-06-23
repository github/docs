---
title: GitHub Enterprise Server と GitHub.com の間で統合コントリビューションを設定する
intro: '{% data variables.product.prodname_github_connect %}を有効化すると、{% data variables.product.prodname_ghe_cloud %}のメンバーがコントリビューション数を{% data variables.product.prodname_dotcom_the_website %}のプロフィールに送信して、{% data variables.product.prodname_ghe_server %}上の作業をハイライトできるようにできます。'
redirect_from:
  - /enterprise/admin/guides/developer-workflow/enabling-unified-contributions-between-github-enterprise-and-github-com/
  - /enterprise/admin/guides/developer-workflow/enabling-unified-contributions-between-github-enterprise-server-and-github-com/
  - /enterprise/admin/developer-workflow/enabling-unified-contributions-between-github-enterprise-server-and-githubcom/
  - /enterprise/admin/installation/enabling-unified-contributions-between-github-enterprise-server-and-githubcom
  - /enterprise/admin/configuration/enabling-unified-contributions-between-github-enterprise-server-and-githubcom
  - /admin/configuration/enabling-unified-contributions-between-github-enterprise-server-and-githubcom
permissions: 'Site administrators for {% data variables.product.prodname_ghe_server %} who are also owners of the connected {% data variables.product.prodname_ghe_cloud %} organization or enterprise account can enable unified contributions between {% data variables.product.prodname_ghe_server %} and {% data variables.product.prodname_dotcom_the_website %}.'
versions:
  enterprise-server: '*'
type: how_to
topics:
  - Enterprise
  - GitHub Connect
---

サイト管理者は、{% data variables.product.prodname_ghe_server %} からの作業に対する匿名のコントリビューション数の {% data variables.product.prodname_dotcom_the_website %} コントリビューショングラフへの送信をエンドユーザに許可できます。

{% data variables.product.prodname_github_connect %} を有効化して双方の環境で {% data variables.product.prodname_unified_contributions %} を有効化した後、インスタンス上のエンドユーザは自分の {% data variables.product.prodname_dotcom_the_website %} アカウントに接続し、{% data variables.product.prodname_ghe_server %} からのコントリビューション数を {% data variables.product.prodname_dotcom_the_website %} に送信できます。 {% data reusables.github-connect.sync-frequency %} 詳細は「[{% data variables.product.prodname_ghe_server %} コントリビューションを {% data variables.product.prodname_dotcom_the_website %} プロフィールに送信する](/articles/sending-your-github-enterprise-server-contributions-to-your-github-com-profile)」を参照してください。

サイト管理者が機能を無効にするか、開発者が接続を拒否すると、{% data variables.product.prodname_ghe_server %} コントリビューション数は {% data variables.product.prodname_dotcom_the_website %} から削除されます。 開発者がプロフィールを無効にした後に再接続すると、過去 90 日間のコントリビューションカウントが復元されます。

{% data variables.product.prodname_ghe_server %} は、接続されているユーザーのコントリビューション数およびソース ({% data variables.product.prodname_ghe_server %}) **のみ**を送信します。 コントリビューションまたはその作成方法に関する情報は送信されません。

{% data variables.product.product_location_enterprise %}で {% data variables.product.prodname_unified_contributions %}を有効化する前に、{% data variables.product.product_location_enterprise %}を {% data variables.product.prodname_dotcom_the_website %}に接続する必要があります。 詳細は「[{% data variables.product.prodname_ghe_server %} を {% data variables.product.prodname_dotcom_the_website %} に接続する](/enterprise/{{ currentVersion }}/admin/guides/developer-workflow/connecting-github-enterprise-server-to-github-com)」を参照してください。

{% data reusables.github-connect.access-dotcom-and-enterprise %}
{% data reusables.enterprise_site_admin_settings.access-settings %}{% data reusables.enterprise_site_admin_settings.business %}
{% data reusables.enterprise-accounts.settings-tab %}
{% data reusables.enterprise-accounts.github-connect-tab %}
4. \[Users can share contribution counts to {% data variables.product.prodname_dotcom_the_website %}\] (ユーザは {% data variables.product.prodname_dotcom_the_website %} にコントリビューション数を共有できる) の下で、[**Request access**] (アクセスをリクエスト) をクリックします。 ![統合コントリビューションへのアクセスをリクエストするオプション](/assets/images/enterprise/site-admin-settings/dotcom-ghe-connection-request-access.png)
5. {% data variables.product.prodname_ghe_server %} サイトに[サインイン](https://enterprise.github.com/login)して、以降の指示を受けてください。

アクセスをリクエストすると、{% data variables.product.prodname_ghe_server %} サイトにリダイレクトされます。そこで現在の利用規約をお読みください。 {% data variables.product.product_location_enterprise %} が標準の利用規約を使用している場合、リクエストによって自動的に {% data variables.product.prodname_unified_contributions %} の有効化の手順にリダイレクトされます。 あなたがカスタム利用規約を利用している場合、弊社はリクエストを記録して、アクセスのセットアップのためにあなたに連絡します。
