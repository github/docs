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
ms.openlocfilehash: f2e8bdfb4a764c291ab7687c4226f24f7dacce9c
ms.sourcegitcommit: 478f2931167988096ae6478a257f492ecaa11794
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/09/2022
ms.locfileid: '147773179'
---
## 依存関係グラフについて

{% data reusables.dependabot.about-the-dependency-graph %} 詳細については、「[About the dependency graph](/github/visualizing-repository-data-with-graphs/about-the-dependency-graph)」 (依存関係グラフについて) を参照してください。

企業に対して依存関係グラフを有効にすると、{% data variables.product.prodname_dependabot %} を有効にして、リポジトリ内のセキュリティで保護されていない依存関係を検出する{% ifversion ghes > 3.2 %}ことや、その脆弱性を自動的に修正する{% endif %}ことができます。 詳細については、「[企業に対する {% data variables.product.prodname_dependabot %} の有効化](/admin/configuration/configuring-github-connect/enabling-dependabot-for-your-enterprise)」を参照してください。

{% ifversion ghes %}{% data variables.enterprise.management_console %} または管理シェルを使用して、依存関係グラフを有効にすることができます。 {% data variables.product.product_location %} でクラスタリングを使用していなければ、{% data variables.enterprise.management_console %} を使用することをお勧めします。

## {% data variables.enterprise.management_console %} を使用した依存関係グラフの有効化

{% data variables.product.product_location %} でクラスタリングを使っている場合、{% data variables.enterprise.management_console %} では依存関係グラフを有効にすることができず、代わりに管理シェルを使わなくてはいけません。 詳細については、「[Enabling the dependency graph via the administrative shell](#enabling-the-dependency-graph-via-the-administrative-shell)」 (管理シェルを使用した依存関係グラフの有効化) を参照してください。

{% data reusables.enterprise_site_admin_settings.sign-in %} {% data reusables.enterprise_site_admin_settings.access-settings %} {% data reusables.enterprise_site_admin_settings.management-console %} {% data reusables.enterprise_management_console.advanced-security-tab %}
1. [Security]\(セキュリティ) で、 **[Dependency graph]\(依存関係グラフ)** をクリックします。
![依存関係グラフを有効または無効にするチェックボックス](/assets/images/enterprise/3.2/management-console/enable-dependency-graph-checkbox.png) {% data reusables.enterprise_management_console.save-settings %}
1. **[Visit your instance]\(インスタンスにアクセスする)** をクリックします。

## 管理シェルを使用した依存関係グラフの有効化

{% endif %} {% data reusables.enterprise_site_admin_settings.sign-in %}
1. 管理シェルで、{% data variables.product.product_location %} の依存関係グラフを有効にします:  {% ifversion ghes %}```shell  ghe-config app.dependency-graph.enabled true
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
