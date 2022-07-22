---
title: Enabling the dependency graph for your enterprise
intro: 依存関係グラフを有効にすることによって、ユーザが自分のプロジェクトの依存関係を特定できるようになります。
shortTitle: Enable dependency graph
permissions: Site administrators can enable the dependency graph.
versions:
  ghes: '*'
type: how_to
topics:
  - Enterprise
  - Security
  - Dependency graph
---

## 依存関係グラフについて

{% data reusables.dependabot.about-the-dependency-graph %} For more information, see "[About the dependency graph](/github/visualizing-repository-data-with-graphs/about-the-dependency-graph)"

After you enable the dependency graph for your enterprise, you can enable {% data variables.product.prodname_dependabot %} to detect insecure dependencies in your repository{% ifversion ghes > 3.2 %} and automatically fix the vulnerabilities{% endif %}. 詳しい情報については「[Enterpriseでの{% data variables.product.prodname_dependabot %}の有効化](/admin/configuration/configuring-github-connect/enabling-dependabot-for-your-enterprise)」を参照してください。

{% ifversion ghes %}
You can enable the dependency graph via the {% data variables.enterprise.management_console %} or the administrative shell. We recommend using the {% data variables.enterprise.management_console %} unless {% data variables.product.product_location %} uses clustering.

## Enabling the dependency graph via the {% data variables.enterprise.management_console %}

If your {% data variables.product.product_location %} uses clustering, you cannot enable the dependency graph with the {% data variables.enterprise.management_console %} and must use the administrative shell instead. For more information, see "[Enabling the dependency graph via the administrative shell](#enabling-the-dependency-graph-via-the-administrative-shell)."

{% data reusables.enterprise_site_admin_settings.sign-in %}
{% data reusables.enterprise_site_admin_settings.access-settings %}
{% data reusables.enterprise_site_admin_settings.management-console %}
{% data reusables.enterprise_management_console.advanced-security-tab %}
1. Under "Security," click **Dependency graph**. ![Checkbox to enable or disable the dependency graph](/assets/images/enterprise/3.2/management-console/enable-dependency-graph-checkbox.png)
{% data reusables.enterprise_management_console.save-settings %}
1. **Visit your instance（インスタンスへのアクセス）**をクリックしてください。

## Enabling the dependency graph via the administrative shell

{% endif %}
{% data reusables.enterprise_site_admin_settings.sign-in %}
1. In the administrative shell, enable the dependency graph on {% data variables.product.product_location %}:
    {% ifversion ghes %}```shell
    ghe-config app.dependency-graph.enabled true
    ```
    {% else %}```shell
    ghe-config app.github.dependency-graph-enabled true
  ghe-config app.github.vulnerability-alerting-and-settings-enabled true
    ```{% endif %}
   {% note %}

   **Note**: For more information about enabling access to the administrative shell via SSH, see "[Accessing the administrative shell (SSH)](/enterprise/admin/configuration/accessing-the-administrative-shell-ssh)."

   {% endnote %}
2. 設定を適用します。
    ```shell
    $ ghe-config-apply
    ```
3. {% data variables.product.prodname_ghe_server %}に戻ります。
