許可リストを使っているなら、Enterpriseにインストールした{% data variables.product.prodname_github_apps %}に設定されたIPアドレスを自動的に許可リストに追加するかも選択できます。

{% data reusables.identity-and-permissions.ip-allow-lists-address-inheritance %}

{% data reusables.apps.ip-allow-list-only-apps %}

作成した{% data variables.product.prodname_github_app %}に許可リストを作成する方法に関する詳しい情報については「[GitHub Appに対して許可されたIPアドレスの管理](/developers/apps/building-github-apps/managing-allowed-ip-addresses-for-a-github-app)」を参照してください。

{% data variables.product.prodname_github_apps %}のIPアドレスの自動追加を有効化するには:

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.settings-tab %}
{% data reusables.enterprise-accounts.security-tab %}
1. "IP allow list（IP許可リスト）"の下で、**Enable IP allow list configuration for installed GitHub Apps（インストールされたGitHub AppsのIP許可リスト設定の有効化）**を選択してください。 ![GitHub AppにIPアドレスを許可するチェックボックス](/assets/images/help/security/enable-ip-allowlist-githubapps-checkbox.png)
1. [**Save**] をクリックします。
