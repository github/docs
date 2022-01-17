如果您使用允许列表，还可以选择将为企业中安装的 {% data variables.product.prodname_github_apps %} 配置的任何 IP 地址自动添加到允许列表中。

{% data reusables.identity-and-permissions.ip-allow-lists-address-inheritance %}

{% data reusables.apps.ip-allow-list-only-apps %}

有关如何为您创建的 {% data variables.product.prodname_github_app %} 创建允许列表的更多信息，请参阅“[管理 GitHub 应用程序允许的 IP 地址](/developers/apps/building-github-apps/managing-allowed-ip-addresses-for-a-github-app)”。

为 {% data variables.product.prodname_github_apps %} 启用自动添加 IP 地址：

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.settings-tab %}
{% data reusables.enterprise-accounts.security-tab %}
1. 在“IP allow list（IP允许列表）”下，选择 **Enable IP allow list configuration for installed GitHub Apps（启用已安装 GitHub 应用程序的 IP 允许列表配置）**。 ![允许 GitHub 应用程序 IP 地址的复选框](/assets/images/help/security/enable-ip-allowlist-githubapps-checkbox.png)
1. 单击 **Save（保存）**。
