---
title: 企業の依存関係グラフの有効化
intro: 依存関係グラフを有効にすることで、ユーザーはプロジェクトの依存関係を識別できます。
shortTitle: Enable dependency graph
permissions: Site administrators can enable the dependency graph.
versions:
  ghes: '*'
type: how_to
topics:
  - Enterprise
  - Security
  - Dependency graph
ms.openlocfilehash: 39fb5e8eb74518dc4614d5494ec04427b5e12399
ms.sourcegitcommit: 6bd8fe6d49214743f82fa2dc71847c241f140c87
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 11/07/2022
ms.locfileid: '148135680'
---
## 依存関係グラフについて

{% data reusables.dependabot.about-the-dependency-graph %} 詳細については、「[About the dependency graph](/github/visualizing-repository-data-with-graphs/about-the-dependency-graph)」 (依存関係グラフについて) を参照してください。

{% data reusables.dependency-review.dependency-review-enabled-ghes %}

Enterprise に対して依存関係グラフを有効にすると、{% data variables.product.prodname_dependabot %} を有効にして、リポジトリ内のセキュリティで保護されていない依存関係を検出{% ifversion ghes %}し、その脆弱性を自動的に修正{% endif %}することができます。 詳細については、「[企業に対する {% data variables.product.prodname_dependabot %} の有効化](/admin/configuration/configuring-github-connect/enabling-dependabot-for-your-enterprise)」を参照してください。

{% ifversion ghes %}{% data variables.enterprise.management_console %} または管理シェルを使用して、依存関係グラフを有効にすることができます。 {% data variables.location.product_location %}でクラスタリングを使っていない場合は、{% data variables.enterprise.management_console %} を使うことをお勧めします。

## {% data variables.enterprise.management_console %} を使用した依存関係グラフの有効化

{% data variables.location.product_location %}でクラスタリングを使っている場合は、{% data variables.enterprise.management_console %} で依存関係グラフを有効にすることはできず、代わりに管理シェルを使う必要があります。 詳細については、「[Enabling the dependency graph via the administrative shell](#enabling-the-dependency-graph-via-the-administrative-shell)」 (管理シェルを使用した依存関係グラフの有効化) を参照してください。

{% data reusables.enterprise_site_admin_settings.sign-in %} {% data reusables.enterprise_site_admin_settings.access-settings %} {% data reusables.enterprise_site_admin_settings.management-console %} {% data reusables.enterprise_management_console.advanced-security-tab %}
1. [Security]\(セキュリティ) で、 **[Dependency graph]\(依存関係グラフ)** をクリックします。
![依存関係グラフを有効または無効にするチェックボックス](/assets/images/enterprise/3.2/management-console/enable-dependency-graph-checkbox.png) {% data reusables.enterprise_management_console.save-settings %}
1. **[Visit your instance]\(インスタンスにアクセスする)** をクリックします。

## 管理シェルを使用した依存関係グラフの有効化

{% endif %} {% data reusables.enterprise_site_admin_settings.sign-in %}
1. 管理シェルで、{% data variables.location.product_location %} の依存関係グラフを有効にします: {% ifversion ghes %}```shell  ghe-config app.dependency-graph.enabled true
    ```
    {% else %}```shell
    ghe-config app.github.dependency-graph-enabled true
  ghe-config app.github.vulnerability-alerting-and-settings-enabled true
    ```{% endif %}
   {% note %}

   **Note**: For more information about enabling access to the administrative shell via SSH, see "[Accessing the administrative shell (SSH)](/enterprise/admin/configuration/accessing-the-administrative-shell-ssh)."

   {% endnote %}
2. Apply the configuration.
    ```shell
    $ ghe-config-apply
    ```
3. {% data variables.product.prodname_ghe_server %}に戻ります。
