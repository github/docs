---
title: Enterprise 向けのパッケージエコシステムサポートを設定する
intro: '{% ifversion ghes > 3.4 %}{% data variables.product.prodname_container_registry %}、{% endif %}Docker、npm など、Enterprise の個々のパッケージ エコシステムをグローバルに有効または無効にすることで、Enterprise の {% data variables.product.prodname_registry %} を構成できます。 特定のパッケージエコシステムをサポートするための他の設定要件について学びます。'
redirect_from:
  - /enterprise/admin/packages/configuring-packages-support-for-your-enterprise
  - /admin/packages/configuring-packages-support-for-your-enterprise
versions:
  ghes: '*'
type: how_to
topics:
  - Enterprise
  - Packages
shortTitle: Configure package ecosystems
ms.openlocfilehash: 83de80e4233f671a7a923394d2fd3f6e554bba10
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/11/2022
ms.locfileid: '147062547'
---
{% data reusables.package_registry.packages-ghes-release-stage %}

## 個々のパッケージエコシステムの有効化または無効化

新しいパッケージがアップロードされないようにするには、以前に有効にしたエコシステムを **読み取り専用** に設定し、既存のパッケージをダウンロードできるようにします。

{% data reusables.enterprise_site_admin_settings.access-settings %} {% data reusables.enterprise_site_admin_settings.management-console %} {% data reusables.enterprise_site_admin_settings.packages-tab %}
1. [エコシステムの切り替え] で、パッケージの種類ごとに **[有効]** 、 **[読み取り専用]** 、または **[無効]** を選びます。
   {%- ifversion ghes > 3.4 %}{% note -%} **注**: {% data variables.product.prodname_container_registry %} オプションを切り替えるには、サブドメイン分離を有効にする必要があります。
   {%- endnote %}{%- endif %}{%- ifversion ghes %} ![エコシステムの切り替え](/assets/images/enterprise/site-admin-settings/ecosystem-toggles.png){% else %} ![エコシステムの切り替え](/assets/images/enterprise/3.1/site-admin-settings/ecosystem-toggles.png){% endif %} {% data reusables.enterprise_management_console.save-settings %}

{% ifversion ghes %}
## 公式 npm レジストリに接続する

Enterprise で npm パッケージを有効にしていて、公式の npm レジストリと {% data variables.product.prodname_registry %} npm レジストリへのアクセスを許可する場合は、追加の設定を実行する必要があります。

{% data variables.product.prodname_registry %} は、`registry.npmjs.com` の公式 npm レジストリに接続するネットワークトラフィックに透過プロキシを使用します。 プロキシはデフォルトで有効になっており、無効にすることはできません。

npm レジストリへのネットワーク接続を許可するには、{% data variables.product.prodname_ghe_server %} がポート 443 を介して `registry.npmjs.com` に HTTPS トラフィックを送信できるようにするネットワーク ACL を設定する必要があります。

| source | 宛先 | Port | 型 |
|---|---|---|---|
| {% data variables.product.prodname_ghe_server %} | `registry.npmjs.com` | TCP/443 | HTTPS |

`registry.npmjs.com` への接続は Cloudflare ネットワークを通過します。その後、1 つの固定 IP アドレスに接続することはありません。その代わり、 https://www.cloudflare.com/ips/ にリストアップされている CIDR 範囲内の IP アドレスへの接続が行われます。

npm アップストリーム ソースを有効にする場合、`npm upstreaming` には `Enabled` を選択します。

{% endif %}

## 次の手順

次のステップとして、パッケージのホスト URL の TLS 証明書を更新またはアップロードする必要があるかどうかを確認することをお勧めします。 詳細については、「[エンタープライズ向けの GitHub パッケージの概要](/admin/packages/getting-started-with-github-packages-for-your-enterprise)」を参照してください。
