---
title: Uploading a new license to GitHub Enterprise Server
intro: 'You can upload your license file for {% data variables.product.prodname_enterprise %} to {% data variables.product.product_location_enterprise %} to validate your application.'
versions:
  ghes: '*'
type: how_to
topics:
  - Enterprise
  - Licensing
shortTitle: Upload a new license
---

## About license files for {% data variables.product.prodname_enterprise %}

After you purchase or upgrade a license for {% data variables.product.prodname_enterprise %} from {% data variables.contact.contact_enterprise_sales %}, you must upload the new license file to {% data variables.product.product_location_enterprise %} to unlock your new user licenses. For more information about licenses for {% data variables.product.product_name %}, see "[About licenses for {% data variables.product.prodname_enterprise %}](/billing/managing-your-license-for-github-enterprise/about-licenses-for-github-enterprise)" and "[Downloading your license for {% data variables.product.prodname_enterprise %}](/billing/managing-your-license-for-github-enterprise/downloading-your-license-for-github-enterprise)."

{% data reusables.enterprise-licensing.contact-sales-for-renewals-or-seats %}

## Uploading your license to {% data variables.product.product_location_enterprise %}

1. サイト管理者として {% data variables.product.product_location_enterprise %} にサインインします。
{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.settings-tab %}
{% data reusables.enterprise-accounts.license-tab %}
1. [Quick links] で [**Update license**] をクリックする。 ![ライセンス更新のリンク](/assets/images/enterprise/business-accounts/update-license-link.png)
1. ライセンスを選択するには、[**License file**] をクリックするか、ライセンスファイルを [**License file**] にドラッグします。 ![ライセンスファイルのアップロード](/assets/images/enterprise/management-console/upload-license.png)
1. [**Upload**] をクリックします。 ![アップロード開始](/assets/images/enterprise/management-console/begin-upload.png)

{% ifversion ghes < 3.0 %}

If the web UI for {% data variables.product.prodname_ghe_server %} doesn't reflect your updated license immediately, see "[Troubleshooting](#troubleshooting)."

## トラブルシューティング

一部のシナリオでは、{% data variables.product.prodname_ghe_server %} の Web UI が新しいライセンスをすぐに反映しない場合があります。 2 つのシステムサービスを再起動することにより、システムにライセンスを強制的に検出させることができます。

{% data reusables.enterprise_installation.ssh-into-instance %}
1. Git 認証と HTTP サーバーのサービスを再起動します。

    {% warning %}

    **Warning**: 次のコマンドを実行すると、{% data variables.product.prodname_ghe_server %} のダウンタイムが数分発生します。 注意してコマンドを実行してください。

    {% endwarning %}
   
        sudo systemctl restart github-gitauth github-unicorn
1. {% data variables.product.prodname_ghe_server %} がプロンプトに戻ったら、コマンドラインまたは Web UI を介して {% data variables.product.prodname_ghe_server %} に再度アクセスしてみてください。

{% endif %}
