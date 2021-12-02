---
title: アプライアンスのシークレットスキャンを設定する
shortTitle: シークレットスキャンを設定する
intro: '{% data variables.product.product_location %} の {% data variables.product.prodname_secret_scanning %} を有効化、設定、無効化できます。 {% data variables.product.prodname_secret_scanning_caps %} を使用すると、ユーザはコードをスキャンして、誤ってコミットされたシークレットを探すことができます。'
product: '{% data reusables.gated-features.secret-scanning %}'
miniTocMaxHeadingLevel: 3
redirect_from:
  - /admin/configuration/configuring-secret-scanning-for-your-appliance
versions:
  ghes: '*'
type: how_to
topics:
  - Advanced Security
  - Enterprise
  - Secret scanning
  - Security
---

{% data reusables.secret-scanning.beta %}

## {% data variables.product.prodname_secret_scanning %} について

{% data reusables.secret-scanning.about-secret-scanning %} For more information, see "[About {% data variables.product.prodname_secret_scanning %}](/github/administering-a-repository/about-secret-scanning)."

## Prerequisites for {% data variables.product.prodname_secret_scanning %}


- [SSSE3](https://www.intel.com/content/dam/www/public/us/en/documents/manuals/64-ia-32-architectures-optimization-manual.pdf#G3.1106470) (Supplemental Streaming SIMD Extensions 3) CPU フラグは、{% data variables.product.product_location %} を実行するVM/KVMで有効にする必要があります。

- A license for {% data variables.product.prodname_GH_advanced_security %}{% ifversion ghes > 3.0 %} (see "[About billing for {% data variables.product.prodname_GH_advanced_security %}](/billing/managing-billing-for-github-advanced-security/about-billing-for-github-advanced-security)"){% endif %}

- {% data variables.product.prodname_secret_scanning_caps %} enabled in the management console (see "[Enabling {% data variables.product.prodname_GH_advanced_security %} for your enterprise](/admin/advanced-security/enabling-github-advanced-security-for-your-enterprise)")

## vCPU での SSSE3 フラグのサポートを確認する

{% data variables.product.prodname_secret_scanning %} はハードウェアアクセラレーションによるパターンマッチングを利用して、{% data variables.product.prodname_dotcom %} リポジトリにコミットされた潜在的な認証情報を見つけるため、SSSE3 の一連の命令が必要です。 SSSE3 は、ほとんどの最新の CPU で有効になっています。 {% data variables.product.prodname_ghe_server %} インスタンスで使用可能な vCPU に対して SSSE3 が有効になっているかどうかを確認できます。

1. {% data variables.product.prodname_ghe_server %} インスタンスの管理シェルに接続します。 詳しい情報については「[管理シェル（SSH）にアクセスする](/admin/configuration/accessing-the-administrative-shell-ssh)」を参照してください。
2. 次のコマンドを入力します。

```shell
grep -iE '^flags.*ssse3' /proc/cpuinfo >/dev/null | echo $?
```

これで値 `0` が返される場合は、SSSE3 フラグが使用可能で有効になっていることを示します。 その後、{% data variables.product.product_location %} に対して {% data variables.product.prodname_secret_scanning %} を有効化できます。 For more information, see "[Enabling {% data variables.product.prodname_secret_scanning %}](#enabling-secret-scanning)" below.

これで `0` が返されない場合、SSSE3 は VM/KVM で有効になっていません。 フラグを有効化する方法、またはゲスト VM で使用可能にする方法については、ハードウェア/ハイパーバイザーのドキュメントを参照する必要があります。

### {% data variables.product.prodname_advanced_security %} ライセンスがあるかどうかを確認する

{% data reusables.enterprise_site_admin_settings.access-settings %}
{% data reusables.enterprise_site_admin_settings.management-console %}
1. Check if there is {% ifversion ghes < 3.2 %}an **{% data variables.product.prodname_advanced_security %}**{% else %}a **Security**{% endif %} entry in the left sidebar.
{% ifversion ghes < 3.2 %}
   ![[Advanced Security] サイドバー](/assets/images/enterprise/management-console/sidebar-advanced-security.png)
{% else %}
   ![Security sidebar](/assets/images/enterprise/3.2/management-console/sidebar-security.png)
{% endif %}

{% data reusables.enterprise_management_console.advanced-security-license %}

## {% data variables.product.prodname_secret_scanning %} の有効化

{% data reusables.enterprise_management_console.enable-disable-security-features %}

{% data reusables.enterprise_site_admin_settings.access-settings %}
{% data reusables.enterprise_site_admin_settings.management-console %}
{% data reusables.enterprise_management_console.advanced-security-tab %}
1. Under "{% ifversion ghes < 3.2 %}{% data variables.product.prodname_advanced_security %}{% else %}Security{% endif %}," click **{% data variables.product.prodname_secret_scanning_caps %}**. ![{% data variables.product.prodname_secret_scanning %} を有効化または無効化するチェックボックス](/assets/images/enterprise/management-console/enable-secret-scanning-checkbox.png)
{% data reusables.enterprise_management_console.save-settings %}

## {% data variables.product.prodname_secret_scanning %} を無効にする

{% data reusables.enterprise_management_console.enable-disable-security-features %}

{% data reusables.enterprise_site_admin_settings.access-settings %}
{% data reusables.enterprise_site_admin_settings.management-console %}
{% data reusables.enterprise_management_console.advanced-security-tab %}
1. Under "{% ifversion ghes < 3.2 %}{% data variables.product.prodname_advanced_security %}{% else %}Security{% endif %}," unselect **{% data variables.product.prodname_secret_scanning_caps %}**. ![{% data variables.product.prodname_secret_scanning %} を有効化または無効化するチェックボックス](/assets/images/enterprise/management-console/secret-scanning-disable.png)
{% data reusables.enterprise_management_console.save-settings %}
