---
title: GitHubのIPアドレスについて
intro: '{% data variables.product.product_name %}は複数のIPアドレスの範囲からアプリケーションを提供します。この範囲は、APIを通じて取得できます。'
redirect_from:
  - /articles/what-ip-addresses-does-github-use-that-i-should-whitelist
  - /categories/73/articles
  - /categories/administration
  - /articles/github-s-ip-addresses
  - /articles/about-github-s-ip-addresses
  - /articles/about-githubs-ip-addresses
  - /github/authenticating-to-github/about-githubs-ip-addresses
  - /github/authenticating-to-github/keeping-your-account-and-data-secure/about-githubs-ip-addresses
versions:
  fpt: '*'
  ghec: '*'
topics:
  - Identity
  - Access management
shortTitle: GitHub's IP addresses
ms.openlocfilehash: ab598fa408512a43ab07c069119480b5ae03278e
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/10/2022
ms.locfileid: '145119982'
---
{% data variables.product.prodname_dotcom %} の IP アドレスのリストは、[メタ](https://api.github.com/meta) API エンドポイントから取得できます。 詳しくは、「[メタ](/rest/reference/meta)」をご覧ください。

{% note %}

**注:** Meta API によって返される {% data variables.product.prodname_dotcom %} の IP アドレスのリストは、完全なリストではありません。 たとえば、LFS や {% data variables.product.prodname_registry %} など、一部の {% data variables.product.prodname_dotcom %} サービスの IP アドレスがリストにない場合があります。

{% endnote %}

これらの IP アドレスは、{% data variables.product.prodname_dotcom %} によって、コンテンツの提供、Webhook の配信、ホストされた {% data variables.product.prodname_actions %} ビルドの実行に使われます。

これらの範囲は [CIDR 表記](https://en.wikipedia.org/wiki/Classless_Inter-Domain_Routing#CIDR_notation)になっています。 オンライン変換ツールを使って、CIDR 表記から IP アドレス範囲に変換できます (例: [CIDR から IPv4 への変換サイト](https://www.ipaddressguide.com/cidr))。

GitHub の IP アドレスはときどき変更されます。 IP アドレスによる許可はお勧めしませんが、これらの IP 範囲を使用する場合は、API を定期的にモニタリングすることを強くお勧めします。

アプリケーションが機能するためには、`github.com` の IP の範囲について TCP ポート 22、80、443、9418 を許可する必要があります。

## 参考資料

- 「[Troubleshooting connectivity problems](/articles/troubleshooting-connectivity-problems)」 (接続問題のトラブルシューティング)
