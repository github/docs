---
title: Enterprise 向けのデータ暗号化を設定する
shortTitle: データ暗号化を設定する
intro: 保存時の暗号化時、独自の暗号化キーを提供し、暗号化ポリシーに基づいてデータを暗号化できます。
versions:
  github-ae: '*'
type: how_to
topics:
  - Enterprise
  - Fundamentals
  - Security
redirect_from:
  - /admin/configuration/configuring-data-encryption-for-your-enterprise
---

{% note %}

**注釈:** お客様が管理するキーを使用した保存時の暗号化設定は現在ベータであり、変更される可能性があります。

{% endnote %}

### データ暗号化について

高レベルのセキュリティを提供するため、{% data variables.product.product_name %} は、データセンターでの保存中、およびユーザのマシンとデータセンター間でのデータの転送中にデータを暗号化します。

転送中の暗号化では、{% data variables.product.product_name %} は Transport Layer Security (TLS) を使用します。 保存データの暗号化では、{% data variables.product.product_name %} がデフォルトの RSA キーを提供します。
