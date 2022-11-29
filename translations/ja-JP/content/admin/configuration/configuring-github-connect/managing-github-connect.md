---
title: GitHub Connect の管理
shortTitle: Manage GitHub Connect
intro: '{% data variables.product.prodname_github_connect %} を有効にすると、{% data variables.location.product_location %}の追加の機能とワークフローにアクセスできます。'
redirect_from:
  - /enterprise/admin/guides/developer-workflow/connecting-github-enterprise-to-github-com
  - /enterprise/admin/guides/developer-workflow/connecting-github-enterprise-server-to-github-com
  - /enterprise/admin/developer-workflow/connecting-github-enterprise-server-to-githubcom
  - /enterprise/admin/installation/connecting-github-enterprise-server-to-github-enterprise-cloud
  - /enterprise/admin/configuration/connecting-github-enterprise-server-to-github-enterprise-cloud
  - /admin/configuration/connecting-github-enterprise-server-to-github-enterprise-cloud
  - /admin/configuration/managing-connections-between-github-enterprise-server-and-github-enterprise-cloud/connecting-github-enterprise-server-to-github-enterprise-cloud
  - /admin/configuration/managing-connections-between-your-enterprise-accounts/connecting-your-enterprise-account-to-github-enterprise-cloud
versions:
  ghes: '*'
  ghae: '*'
type: how_to
topics:
  - Enterprise
  - GitHub Connect
  - Infrastructure
  - Networking
ms.openlocfilehash: 30a170543b63c390aa8975b1ca57c265bc7fa8fa
ms.sourcegitcommit: d82f268a6f0236d1f4d2bf3d049974ada0170402
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 11/10/2022
ms.locfileid: '148160650'
---
{% data reusables.github-connect.beta %}

## {% data variables.product.prodname_github_connect %} について

{% data variables.product.prodname_github_connect %} を有効にすると、{% data variables.location.product_location %}の追加の機能とワークフローにアクセスできます。 詳しい情報については、「[{% data variables.product.prodname_github_connect %} について](/admin/configuration/configuring-github-connect/about-github-connect)」を参照してください。

{% data variables.product.prodname_github_connect %} を有効にするときに、{% data variables.location.product_location %}と {% data variables.product.prodname_ghe_cloud %} の Organization または Enterprise アカウントとの間の接続を構成します。 {% data reusables.github-connect.connection-port-protocol %}

{% data variables.product.prodname_github_connect %} を有効にすると、Organization または Enterprise アカウントによって所有された {% data variables.product.prodname_github_app %} が {% data variables.product.prodname_ghe_cloud %} 上に作成されます。 {% data variables.product.product_name %} で {% data variables.product.prodname_github_app %} の資格情報を使って {% data variables.product.prodname_ghe_cloud %} への要求が発行されます。

{% ifversion ghes %}{% data variables.product.prodname_ghe_server %} で {% data variables.product.prodname_github_app %} からの資格情報が保存されます。 次の資格情報が高可用性またはクラスター環境のすべてのノードにレプリケートされ、{% data variables.product.prodname_enterprise_backup_utilities %} によって作成されたスナップショットを含むすべてのバックアップに保存されます。
- 1 時間にわたって有効な認証トークン
- 新しい認証トークンを生成するために使われる秘密キー {% endif %}

## 前提条件

{% data variables.product.prodname_github_connect %} を使うには、{% data variables.product.prodname_dotcom_the_website %} で {% data variables.product.prodname_ghe_cloud %} を使う Organization または Enterprise アカウントを持っている必要があります。 {% data variables.product.prodname_ghe_cloud %} は、ご利用のプランに既に含まれている場合があります。 {% data reusables.enterprise.link-to-ghec-trial %}

{% ifversion ghes %}{% data variables.product.prodname_dotcom_the_website %} の Organization または Enterprise アカウントで IP 許可リストを使う場合は、{% data variables.location.product_location %}の IP アドレスまたはネットワークを {% data variables.product.prodname_dotcom_the_website %} の IP 許可リストに追加する必要があります。 詳しい情報については、{% data variables.product.prodname_ghe_cloud %} のドキュメントで「[Organization に対する許可 IP アドレスを管理する](/enterprise-cloud@latest/organizations/keeping-your-organization-secure/managing-security-settings-for-your-organization/managing-allowed-ip-addresses-for-your-organization)」と「[Enterprise でセキュリティ設定のポリシーを適用する](/enterprise-cloud@latest/admin/policies/enforcing-policies-for-your-enterprise/enforcing-policies-for-security-settings-in-your-enterprise#managing-allowed-ip-addresses-for-organizations-in-your-enterprise)」を参照してください。

接続を構成するには、プロキシ構成で `github.com`、`api.github.com`、`uploads.github.com` への接続が許可されている必要があります。 詳しい情報については、「[アウトバウンドの Web プロキシ サーバーの構成](/enterprise/admin/guides/installation/configuring-an-outbound-web-proxy-server)」を参照してください。
{% endif %}

## {% data variables.product.prodname_github_connect %} の有効化

{% data variables.product.prodname_ghe_cloud %} を使う Organization または Enterprise アカウントの所有者でもある Enterprise 所有者は、{% data variables.product.prodname_github_connect %} を有効にすることができます。

{% data variables.location.product_location %}を、Enterprise アカウントで所有していない {% data variables.product.prodname_ghe_cloud %} の Organization に接続する場合は、Organization 所有者として {% data variables.product.prodname_dotcom_the_website %} にサインインする必要があります。

{% data variables.location.product_location %}を、Enterprise アカウントで所有している {% data variables.product.prodname_ghe_cloud %} の Organization に、またはその Enterprise アカウント自体に接続する場合は、Enterprise 所有者として {% data variables.product.prodname_dotcom_the_website %} にサインインする必要があります。

{% ifversion ghes %}
1. {% data variables.location.product_location %}と {% data variables.product.prodname_dotcom_the_website %} にサインインします。
{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.github-connect-tab %}{% else %}
1. {% data variables.location.product_location %}と {% data variables.product.prodname_dotcom_the_website %} にサインインします。
{% data reusables.enterprise-accounts.access-enterprise %}{% data reusables.enterprise-accounts.github-connect-tab %}{% endif %}
1. [{% data variables.product.prodname_github_connect %} はまだ有効になっていません] で、 **[{% data variables.product.prodname_github_connect %} を有効にする]** をクリックします。 **[{% data variables.product.prodname_github_connect %} を有効にする]** をクリックすると、「<a href="/github/site-policy/github-terms-for-additional-products-and-features#connect" class="dotcom-only">{% data variables.product.prodname_dotcom %} 追加製品および機能の利用規約</a>」に同意したことになります。
{% ifversion ghes %} ![GitHub Connect を有効にするボタン](/assets/images/enterprise/business-accounts/enable-github-connect-button.png){% else %} ![GitHub Connect を有効にするボタン](/assets/images/enterprise/github-ae/enable-github-connect-button.png) {% endif %}
1. 接続しようとする Enterprise アカウントまたは Organization の横にある **[接続]** をクリックします。
  ![Enterprise アカウントまたはビジネスの横にある接続ボタン](/assets/images/enterprise/business-accounts/choose-enterprise-or-org-connect.png)

## {% data variables.product.prodname_github_connect %} を無効にする

Enterprise 所有者は {% data variables.product.prodname_github_connect %} を無効にすることができます。

{% data variables.product.prodname_ghe_cloud %} から切断すると、Enterprise アカウントまたは Organization から {% data variables.product.prodname_github_connect %} {% data variables.product.prodname_github_app %} が削除され、{% data variables.location.product_location %}に保存されている資格情報が削除されます。

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.github-connect-tab %}
1. 切断しようとする Enterprise アカウントまたは Organization の横にある **[{% data variables.product.prodname_github_connect %} を無効にする]** をクリックします。
{% ifversion ghes %} ![Enterprise アカウントまたは Organization 名の横にある GitHub Connect を無効にするボタン](/assets/images/enterprise/business-accounts/disable-github-connect-button.png)
1. 切断に関する情報を読み、 **[{% data variables.product.prodname_github_connect %} を無効にする]** をクリックします。
  ![切断に関する警告情報が表示され確認ボタンがあるモーダル](/assets/images/enterprise/business-accounts/confirm-disable-github-connect.png)  
{% else %} ![Enterprise アカウントまたは Organization 名の横にある GitHub Connect を無効にするボタン](/assets/images/enterprise/github-ae/disable-github-connect-button.png)
1. 切断に関する情報を読み、 **[{% data variables.product.prodname_github_connect %} を無効にする]** をクリックします。
  ![切断に関する警告情報が表示され確認ボタンがあるモーダル](/assets/images/enterprise/github-ae/confirm-disable-github-connect.png) {% endif %} 
