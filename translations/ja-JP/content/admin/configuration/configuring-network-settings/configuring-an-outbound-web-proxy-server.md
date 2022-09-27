---
title: アウトバウンドの Web プロキシ サーバーの設定
intro: 'プロキシ サーバーは、{% data variables.product.product_location %} に追加のセキュリティのレベルをもたらしてくれます。'
redirect_from:
  - /enterprise/admin/guides/installation/configuring-a-proxy-server
  - /enterprise/admin/installation/configuring-an-outbound-web-proxy-server
  - /enterprise/admin/configuration/configuring-an-outbound-web-proxy-server
  - /admin/configuration/configuring-an-outbound-web-proxy-server
versions:
  ghes: '*'
type: how_to
topics:
  - Enterprise
  - Fundamentals
  - Infrastructure
  - Networking
shortTitle: Configure an outbound proxy
ms.openlocfilehash: 4285f24dd45d127efec4ace66729bf6fd1f188c5
ms.sourcegitcommit: 9a7b3a9ccb983af5df2cd94da7fecf7a8237529b
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/09/2022
ms.locfileid: '147878391'
---
## {% data variables.product.product_name %} のプロキシについて

{% data variables.product.product_location %} に対してプロキシ サーバーが有効である場合、宛先ホストが HTTP プロキシ除外として追加されていない限り、{% data variables.product.prodname_ghe_server %} によって送信されたアウトバウンド メッセージがプロキシ サーバーを経由してまず最初に送信されます。 アウトバウンドのメッセージの種類には、webhook、Bundleのアップロード、レガシーのアバターのフェッチが含まれます。 プロキシ サーバーの URL は、たとえば `http://127.0.0.1:8123` といったように、プロトコル、ドメイン、または IP アドレスにポート番号を加えたものです。

{% note %}

**メモ:** {% data variables.product.product_location %} を {% data variables.product.prodname_dotcom_the_website %} に接続するには、プロキシ構成で `github.com` と `api.github.com` への接続を許可する必要があります。 詳細については、「[Enterprise アカウントを {% data variables.product.prodname_dotcom_the_website %} に接続する](/admin/configuration/managing-connections-between-your-enterprise-accounts/connecting-your-enterprise-account-to-github-enterprise-cloud)」を参照してください。

{% endnote %}

{% data reusables.actions.proxy-considerations %} {% data variables.product.prodname_ghe_server %} での {% data variables.product.prodname_actions %} の使用の詳細については、「[{% data variables.product.prodname_ghe_server %} 向けの {% data variables.product.prodname_actions %} の概要](/admin/github-actions/enabling-github-actions-for-github-enterprise-server/getting-started-with-github-actions-for-github-enterprise-server)」を参照してください。

## アウトバウンドの Web プロキシ サーバーの設定

{% data reusables.enterprise_site_admin_settings.access-settings %} {% data reusables.enterprise_site_admin_settings.management-console %} {% data reusables.enterprise_management_console.privacy %}
1. **[HTTP プロキシ サーバー]** で、プロキシ サーバーの URL を入力します。
  ![HTTP プロキシ サーバーの URL を入力するためのフィールド](/assets/images/enterprise/management-console/http-proxy-field.png)
  
5. オプションで、プロキシのアクセスを必要としないホストがあれば **[HTTP プロキシの除外]** の下にカンマ区切りで入力します。 ドメイン内のすべてのホストをプロキシ アクセスの要求から除外するには、`.` をワイルドカード プレフィックスとして使用できます。  例: `.octo-org.tentacle`
  ![HTTP プロキシの除外を入力するためのフィールド](/assets/images/enterprise/management-console/http-proxy-exclusion-field.png)

{% data reusables.enterprise_management_console.save-settings %}
