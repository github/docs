---
title: アプライアンスのシークレットスキャンを設定する
shortTitle: Configuring secret scanning
intro: '{% data variables.product.product_location %} の {% data variables.product.prodname_secret_scanning %} を有効化、設定、無効化できます。 {% data variables.product.prodname_secret_scanning_caps %} を使用すると、ユーザはコードをスキャンして、誤ってコミットされたシークレットを探すことができます。'
product: '{% data reusables.gated-features.secret-scanning %}'
miniTocMaxHeadingLevel: 3
redirect_from:
  - /admin/configuration/configuring-secret-scanning-for-your-appliance
  - /admin/advanced-security/configuring-secret-scanning-for-your-appliance
versions:
  ghes: '*'
type: how_to
topics:
  - Advanced Security
  - Enterprise
  - Secret scanning
  - Security
ms.openlocfilehash: c44d724293b970ff3075deb1befb2f0eae427d5c
ms.sourcegitcommit: 5f9527483381cfb1e41f2322f67c80554750a47d
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/11/2022
ms.locfileid: '147066322'
---
{% data reusables.secret-scanning.beta %}

## {% data variables.product.prodname_secret_scanning %}について

既知のパターンを持つシークレットを誰かがリポジトリにチェックインすると、{% data variables.product.prodname_secret_scanning %} ではチェックイン時にシークレットをキャッチするため、リークの影響を軽減するのに役立ちます。 リポジトリ管理者は、シークレットを含むコミットについて通知され、リポジトリのセキュリティタブですべての検出されたシークレットを素早く見ることができます。 詳細については、「[{% data variables.product.prodname_secret_scanning %} について](/code-security/secret-scanning/about-secret-scanning)」を参照してください。

## ライセンスに {% data variables.product.prodname_GH_advanced_security %} が含まれているかどうかを確認する

{% data reusables.advanced-security.check-for-ghas-license %}

## {% data variables.product.prodname_secret_scanning %} の前提条件

- {% data variables.product.product_location %} を実行する VM/KVM で [SSSE3](https://www.intel.com/content/dam/www/public/us/en/documents/manuals/64-ia-32-architectures-optimization-manual.pdf#G3.1106470) (Supplemental Streaming SIMD Extensions 3) CPU フラグを有効にする必要があります。

- {% data variables.product.prodname_GH_advanced_security %} のライセンス{% ifversion ghes %} (「[{% data variables.product.prodname_GH_advanced_security %} の課金について](/billing/managing-billing-for-github-advanced-security/about-billing-for-github-advanced-security)」を参照){% endif %}

- 管理コンソールで {% data variables.product.prodname_secret_scanning_caps %} が有効になっている (「[エンタープライズで {% data variables.product.prodname_GH_advanced_security %} を有効にする](/admin/advanced-security/enabling-github-advanced-security-for-your-enterprise)」を参照)

### vCPU での SSSE3 フラグのサポートを確認する

{% data variables.product.prodname_secret_scanning %} はハードウェアアクセラレーションによるパターンマッチングを利用して、{% data variables.product.prodname_dotcom %} リポジトリにコミットされた潜在的な認証情報を見つけるため、SSSE3 の一連の命令が必要です。 SSSE3 は、ほとんどの最新の CPU で有効になっています。 {% data variables.product.prodname_ghe_server %} インスタンスで使用可能な vCPU に対して SSSE3 が有効になっているかどうかを確認できます。

1. {% data variables.product.prodname_ghe_server %} インスタンスの管理シェルに接続します。 詳細については、「[管理シェル (SSH) にアクセスする](/admin/configuration/accessing-the-administrative-shell-ssh)」を参照してください。
2. 次のコマンドを入力します。

   ```shell
   grep -iE '^flags.*ssse3' /proc/cpuinfo >/dev/null | echo $?
   ```

   これで値 `0` が返される場合は、SSSE3 フラグが使用可能で有効になっていることを示します。 その後、{% data variables.product.product_location %} に対して {% data variables.product.prodname_secret_scanning %} を有効化できます。 詳細については、「[{% data variables.product.prodname_secret_scanning %} の有効化](#enabling-secret-scanning)」を参照してください。

   これで `0` が返されない場合、SSSE3 は VM/KVM で有効になっていません。 フラグを有効化する方法、またはゲスト VM で使用可能にする方法については、ハードウェア/ハイパーバイザーのドキュメントを参照する必要があります。

## {% data variables.product.prodname_secret_scanning %} の有効化

{% data reusables.enterprise_management_console.enable-disable-security-features %}

{% data reusables.enterprise_site_admin_settings.access-settings %} {% data reusables.enterprise_site_admin_settings.management-console %} {% data reusables.enterprise_management_console.advanced-security-tab %}
1. [セキュリティ] で、 **[{% data variables.product.prodname_secret_scanning_caps %}]** をクリックします。
![{% data variables.product.prodname_secret_scanning %} を有効または無効にするチェックボックス](/assets/images/enterprise/management-console/enable-secret-scanning-checkbox.png) {% data reusables.enterprise_management_console.save-settings %}

## {% data variables.product.prodname_secret_scanning %} の無効化

{% data reusables.enterprise_management_console.enable-disable-security-features %}

{% data reusables.enterprise_site_admin_settings.access-settings %} {% data reusables.enterprise_site_admin_settings.management-console %} {% data reusables.enterprise_management_console.advanced-security-tab %}
1. [セキュリティ] で、 **[{% data variables.product.prodname_secret_scanning_caps %}]** の選択を解除します。
![{% data variables.product.prodname_secret_scanning %} を有効または無効にするチェックボックス](/assets/images/enterprise/management-console/secret-scanning-disable.png) {% data reusables.enterprise_management_console.save-settings %}
