---
title: GitHub Enterprise Server と GitHub.com の間で統合コントリビューションを設定する
intro: '{{ site.data.variables.product.prodname_github_connect }}を有効化すると、{{ site.data.variables.product.prodname_ghe_cloud }}のメンバーがコントリビューション数を{{ site.data.variables.product.prodname_dotcom_the_website }}のプロフィールに送信して、{{ site.data.variables.product.prodname_ghe_server }}上の作業をハイライトできるようにできます。'
redirect_from:
  - /enterprise/admin/guides/developer-workflow/enabling-unified-contributions-between-github-enterprise-and-github-com/
  - /enterprise/admin/guides/developer-workflow/enabling-unified-contributions-between-github-enterprise-server-and-github-com/
  - /enterprise/admin/developer-workflow/enabling-unified-contributions-between-github-enterprise-server-and-githubcom/
  - /enterprise/admin/installation/enabling-unified-contributions-between-github-enterprise-server-and-githubcom
permissions: '接続された{{ site.data.variables.product.prodname_ghe_cloud }}のOrganizationあるいはEnterpriseアカウントの所有者でもある{{ site.data.variables.product.prodname_ghe_server }}のサイト管理者は、{{ site.data.variables.product.prodname_ghe_server }}と{{ site.data.variables.product.prodname_dotcom_the_website }}間の統合コントリビューションを有効化できます。'
versions:
  enterprise-server: '*'
---

サイト管理者は、{{ site.data.variables.product.prodname_ghe_server }} からの作業に対する匿名のコントリビューション数の {{ site.data.variables.product.prodname_dotcom_the_website }} コントリビューショングラフへの送信をエンドユーザに許可できます。

{{ site.data.variables.product.prodname_github_connect }} を有効化して双方の環境で {{ site.data.variables.product.prodname_unified_contributions }} を有効化した後、インスタンス上のエンドユーザは自分の {{ site.data.variables.product.prodname_dotcom_the_website }} アカウントに接続し、{{ site.data.variables.product.prodname_ghe_server }} からのコントリビューション数を {{ site.data.variables.product.prodname_dotcom_the_website }} に送信できます。 {{ site.data.reusables.github-connect.sync-frequency }} 詳細は「[{{ site.data.variables.product.prodname_ghe_server }} コントリビューションを {{ site.data.variables.product.prodname_dotcom_the_website }} プロフィールに送信する](/articles/sending-your-github-enterprise-server-contributions-to-your-github-com-profile)」を参照してください。

サイト管理者が機能を無効にするか、開発者が接続を拒否すると、{{ site.data.variables.product.prodname_ghe_server }} コントリビューション数は {{ site.data.variables.product.prodname_dotcom_the_website }} から削除されます。 開発者がプロフィールを無効にした後に再接続すると、過去 90 日間のコントリビューションカウントが復元されます。

{{ site.data.variables.product.prodname_ghe_server }} は、接続されているユーザーのコントリビューション数およびソース ({{ site.data.variables.product.prodname_ghe_server }}) **のみ**を送信します。 コントリビューションまたはその作成方法に関する情報は送信されません。

{{ site.data.variables.product.product_location_enterprise }}で {{ site.data.variables.product.prodname_unified_contributions }}を有効化する前に、{{ site.data.variables.product.product_location_enterprise }}を {{ site.data.variables.product.prodname_dotcom_the_website }}に接続する必要があります。 詳細は「[{{ site.data.variables.product.prodname_ghe_server }} を {{ site.data.variables.product.prodname_dotcom_the_website }} に接続する](/enterprise/{{ currentVersion }}/admin/guides/developer-workflow/connecting-github-enterprise-server-to-github-com)」を参照してください。

{{ site.data.reusables.github-connect.access-dotcom-and-enterprise }}
{{ site.data.reusables.enterprise_site_admin_settings.access-settings }}{{ site.data.reusables.enterprise_site_admin_settings.business }}
{{ site.data.reusables.enterprise-accounts.settings-tab }}
{{ site.data.reusables.enterprise-accounts.github-connect-tab }}
4. \[Users can share contribution counts to {{ site.data.variables.product.prodname_dotcom_the_website }}\] (ユーザは {{ site.data.variables.product.prodname_dotcom_the_website }} にコントリビューション数を共有できる) の下で、[**Request access**] (アクセスをリクエスト) をクリックします。 ![統合コントリビューションへのアクセスをリクエストするオプション](/assets/images/enterprise/site-admin-settings/dotcom-ghe-connection-request-access.png)
5. {{ site.data.variables.product.prodname_ghe_server }} サイトに[サインイン](https://enterprise.github.com/login)して、以降の指示を受けてください。

アクセスをリクエストすると、{{ site.data.variables.product.prodname_ghe_server }} サイトにリダイレクトされます。そこで現在の利用規約をお読みください。 {{ site.data.variables.product.product_location_enterprise }} が標準の利用規約を使用している場合、リクエストによって自動的に {{ site.data.variables.product.prodname_unified_contributions }} の有効化の手順にリダイレクトされます。 あなたがカスタム利用規約を利用している場合、弊社はリクエストを記録して、アクセスのセットアップのためにあなたに連絡します。
