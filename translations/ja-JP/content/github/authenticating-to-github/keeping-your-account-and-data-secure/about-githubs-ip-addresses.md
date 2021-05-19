---
title: GitHubのIPアドレスについて
intro: '{% data variables.product.product_name %}は複数のIPアドレスの範囲からアプリケーションを提供します。この範囲は、APIを通じて取得できます。'
redirect_from:
  - /articles/what-ip-addresses-does-github-use-that-i-should-whitelist/
  - /categories/73/articles/
  - /categories/administration/
  - /articles/github-s-ip-addresses/
  - /articles/about-github-s-ip-addresses
  - /articles/about-githubs-ip-addresses
  - /github/authenticating-to-github/about-githubs-ip-addresses
versions:
  free-pro-team: '*'
topics:
  - Identity
  - Access management
---
{% data variables.product.prodname_dotcom %}のIPアドレスのリストは、[メタ](https://api.github.com/meta)APIエンドポイントから取得できます。 詳しい情報については、「[メタ](/rest/reference/meta)」を参照してください。

これらの範囲は[CIDR表記](https://en.wikipedia.org/wiki/Classless_Inter-Domain_Routing#CIDR_notation)になっています。 [CIDR / VLSM Supernet Calculator](http://www.subnet-calculator.com/cidr.php)のようなツールを使って、CIDR表記をIPアドレスの範囲に変換できます。

弊社のIPアドレスは時間と共に変更されますが、このAPIは最新の状態が保たれます。 IP アドレスによる許可はお勧めしませんが、これらの IP 範囲を使用する場合は、API を定期的にモニタリングすることを強くお勧めします。

アプリケーションが機能するためには、`github.com`のIPの範囲についてTCPポートの22、80、443、9418を許可しなければなりません。

### 参考リンク

- [接続の問題のトラブルシューティング](/articles/troubleshooting-connectivity-problems)
