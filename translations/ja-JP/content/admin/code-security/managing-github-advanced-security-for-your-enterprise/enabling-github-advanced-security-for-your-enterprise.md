---
title: 自社で GitHub Advanced Security を有効にする
shortTitle: Enabling GitHub Advanced Security
intro: '{% data variables.product.product_name %} を構成して、{% data variables.product.prodname_GH_advanced_security %} を含めることができます。 これにより、ユーザーがコード内のセキュリティ問題を検出して修正するのに役立つ追加機能が提供されます。'
product: '{% data reusables.gated-features.ghas %}'
redirect_from:
  - /admin/advanced-security/enabling-github-advanced-security-for-your-enterprise
versions:
  ghes: '*'
type: how_to
topics:
  - Advanced Security
  - Code scanning
  - Enterprise
  - Secret scanning
  - Security
ms.openlocfilehash: bc516af0c0788eeafe1b833c5627e471982e1c05
ms.sourcegitcommit: ac00e2afa6160341c5b258d73539869720b395a4
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/09/2022
ms.locfileid: '147878567'
---
## {% data variables.product.prodname_GH_advanced_security %} の有効化について

{% data reusables.advanced-security.ghas-helps-developers %}

{% ifversion ghes %} 企業の {% data variables.product.prodname_GH_advanced_security %} を有効にすると、アクセスを制限するポリシーを設定しない限り、すべての組織のリポジトリ管理者が機能を有効にできます。 詳細については、「[Enforcing policies for {% data variables.product.prodname_advanced_security %} in your enterprise (エンタープライズで GitHub Actions のポリシーを適用する)](/admin/policies/enforcing-policies-for-advanced-security-in-your-enterprise)」を参照してください。
{% else %} 企業の {% data variables.product.prodname_GH_advanced_security %} を有効にすると、すべての組織のリポジトリ管理者が機能を有効にできます。 {% endif %}

{% ifversion ghes %} GitHub Advanced Security の段階的なデプロイのガイダンスについては、「[GitHub Advanced Security の大規模な導入の概要](/code-security/adopting-github-advanced-security-at-scale/introduction-to-adopting-github-advanced-security-at-scale)」を参照してください。
{% endif %}

## ライセンスに {% data variables.product.prodname_GH_advanced_security %} が含まれているかどうかを確認する

{% ifversion ghes %} {% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.settings-tab %} {% data reusables.enterprise-accounts.license-tab %}
1. お使いのライセンスに {% data variables.product.prodname_GH_advanced_security %} が含まれている場合、ライセンス ページには現在の使用状況を詳しく示すセクションが含まれます。
![エンタープライズ ライセンスの {% data variables.product.prodname_GH_advanced_security %} セクション](/assets/images/help/billing/ghas-orgs-list-enterprise-ghes.png) {% endif %}

## {% data variables.product.prodname_GH_advanced_security %} の有効化の前提条件

1. {% data variables.product.product_name %} のライセンスをアップグレードして {% data variables.product.prodname_GH_advanced_security %} を含めます。{% ifversion ghes %} ライセンスの詳細については、「[{% data variables.product.prodname_GH_advanced_security %} の課金について](/billing/managing-billing-for-github-advanced-security/about-billing-for-github-advanced-security)」を参照してください。{% endif %}
2. 次に、新しいライセンス ファイルをダウンロードします。 詳細については、[{% data variables.product.prodname_enterprise %} のライセンスのダウンロード](/billing/managing-your-license-for-github-enterprise/downloading-your-license-for-github-enterprise)に関する記事を参照してください。
3. 新しいライセンス ファイルを {% data variables.product.product_location %} にアップロードします。 詳細については、「[{% data variables.product.prodname_ghe_server %} への新しいライセンスのアップロード](/billing/managing-your-license-for-github-enterprise/uploading-a-new-license-to-github-enterprise-server)」を参照してください。{% ifversion ghes %}
4. 有効にする機能の前提条件を確認します。

    - {% data variables.product.prodname_code_scanning_capc %} については、「[アプライアンスでの {% data variables.product.prodname_code_scanning %} の構成](/admin/advanced-security/configuring-code-scanning-for-your-appliance#prerequisites-for-code-scanning)」を参照してください。
    - {% data variables.product.prodname_secret_scanning_caps %} については、「[アプライアンスの {% data variables.product.prodname_secret_scanning %} での構成](/admin/advanced-security/configuring-secret-scanning-for-your-appliance#prerequisites-for-secret-scanning)」を参照してください。{% endif %}
    - {% data variables.product.prodname_dependabot %} については、「[エンタープライズの {% data variables.product.prodname_dependabot %} の有効化](/admin/configuration/configuring-github-connect/enabling-dependabot-for-your-enterprise)」を参照してください。 

## {% data variables.product.prodname_GH_advanced_security %} 機能の有効化と無効化

{% data reusables.enterprise_management_console.enable-disable-security-features %}

{% data reusables.enterprise_site_admin_settings.access-settings %} {% data reusables.enterprise_site_admin_settings.management-console %} {% data reusables.enterprise_management_console.advanced-security-tab %}{% ifversion ghes %}
1. [セキュリティ] で、有効にする機能を選び、無効にする機能は選択を解除してください。
{% ifversion ghes %}![{% data variables.product.prodname_advanced_security %} 機能を有効または無効にするチェックボックス](/assets/images/enterprise/3.2/management-console/enable-security-checkboxes.png){% else %}![{% data variables.product.prodname_advanced_security %} 機能を有効または無効にするチェックボックス](/assets/images/enterprise/management-console/enable-advanced-security-checkboxes.png){% endif %}{% else %}
1. [{% data variables.product.prodname_advanced_security %}] で、 **[{% data variables.product.prodname_code_scanning_capc %}]** をクリックします。
![{% data variables.product.prodname_code_scanning %} を有効または無効にするチェックボックス](/assets/images/enterprise/management-console/enable-code-scanning-checkbox.png){% endif %} {% data reusables.enterprise_management_console.save-settings %}

{% data variables.product.product_name %} の再起動が終了したら、新しく有効になった機能に必要な追加リソースを設定する準備は完了です。 詳細については、「[アプライアンスでの {% data variables.product.prodname_code_scanning %} の構成](/admin/advanced-security/configuring-code-scanning-for-your-appliance)」を参照してください。

## 管理シェル (SSH) を介した {% data variables.product.prodname_GH_advanced_security %} の有効化または無効化

{% data variables.product.product_location %} に対しプログラムで機能を有効または無効にすることができます。 {% data variables.product.prodname_ghe_server %} の管理シェルおよびコマンドライン ユーティリティの詳細については、「[管理シェル (SSH) にアクセスする](/admin/configuration/accessing-the-administrative-shell-ssh)」および「[コマンドライン ユーティリティ](/admin/configuration/command-line-utilities#ghe-config)」を参照してください。

たとえば、ステージングまたはディザスター リカバリーのためにインスタンスをデプロイする場合は、コードとしてのインフラストラクチャ ツールを使用して、{% data variables.product.prodname_GH_advanced_security %} 機能を有効にすることができます。

1. {% data variables.product.product_location %} に SSH でアクセスします。
1. {% data variables.product.prodname_GH_advanced_security %} の機能を有効にします。

    - {% data variables.product.prodname_code_scanning_capc %} を有効にするには、次のコマンドを入力します。
    ```shell
    ghe-config app.minio.enabled true
    ghe-config app.code-scanning.enabled true
    ```
    - {% data variables.product.prodname_secret_scanning_caps %} を有効にするには、次のコマンドを入力します。
    ```shell
    ghe-config app.secret-scanning.enabled true
    ```
    - 依存関係グラフを有効にするには、次の {% ifversion ghes %}コマンド{% else %}コマンド{% endif %}を入力します。
    {% ifversion ghes %}```shell ghe-config app.dependency-graph.enabled true
    ```
    {% else %}```shell
    ghe-config app.github.dependency-graph-enabled true
    ghe-config app.github.vulnerability-alerting-and-settings-enabled true
    ```{% endif %}
2. Optionally, disable features for {% data variables.product.prodname_GH_advanced_security %}.

    - To disable {% data variables.product.prodname_code_scanning %}, enter the following commands.
    ```shell
    ghe-config app.minio.enabled false
    ghe-config app.code-scanning.enabled false
    ```
    - {% data variables.product.prodname_secret_scanning %} を無効にするには、次のコマンドを入力します。
    ```shell
    ghe-config app.secret-scanning.enabled false
    ```
    - 依存関係グラフを無効にするには、次の {% ifversion ghes %}コマンド{% else %}コマンド{% endif %}を入力します。
    {% ifversion ghes %}```shell ghe-config app.dependency-graph.enabled false
    ```
    {% else %}```shell
    ghe-config app.github.dependency-graph-enabled false
    ghe-config app.github.vulnerability-alerting-and-settings-enabled false
    ```{% endif %}
3. Apply the configuration.
    ```shell
    ghe-config-apply
    ```
