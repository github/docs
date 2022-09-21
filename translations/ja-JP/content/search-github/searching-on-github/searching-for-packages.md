---
title: パッケージを検索する
intro: '{% data variables.product.product_name %} 上のパッケージを検索し、検索修飾子を使用して検索結果を絞ることができます。'
product: '{% data reusables.gated-features.packages %}'
permissions: Anyone can search for packages they have access to.
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - GitHub search
redirect_from:
  - /github/searching-for-information-on-github/searching-for-packages
  - /github/searching-for-information-on-github/searching-on-github/searching-for-packages
ms.openlocfilehash: de7a348b20f18315c58ab13b2e19f0b162b9b792
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/11/2022
ms.locfileid: '145118894'
---
{% data reusables.package_registry.packages-ghes-release-stage %}

## パッケージの検索について

{% data variables.product.product_name %} 全体にわたってグローバルにパッケージを検索できます。あるいは、特定の Organization のみのパッケージの検索もできます。 詳細については、「[{% data variables.product.prodname_dotcom %} での検索について](/search-github/getting-started-with-searching-on-github/about-searching-on-github)」を参照してください。

{% ifversion ghes %} パッケージは、{% data variables.product.prodname_github_connect %} が有効になっている場合であっても、{% data variables.product.prodname_dotcom_the_website %} ではなく、{% data variables.product.product_name %} でのみ検索できます。
{% endif %}

{% data reusables.search.syntax_tips %}

## ユーザまたは Organization のパッケージ内の検索

特定のユーザーまたは Organization が所有するパッケージを見つけるには、`user` または `org` 修飾子を使用します。

| 修飾子        | 例
| ------------- | -------------
| <code>user:<em>USERNAME</em></code> | [ **`user:codertocat`**](https://github.com/search?q=user%3Acodertocat&type=RegistryPackages) は、@codertocat が所有するパッケージに一致します
| <code>org:<em>ORGNAME</em></code> | [ **`org:github`**](https://github.com/search?q=org%3Agithub&type=RegistryPackages) は、{% data variables.product.prodname_dotcom %} Organization が所有するパッケージに一致します

## パッケージの可視性によるフィルタリング

パッケージがパブリックかプライベートかを基準に検索をフィルター処理するには、`is` 修飾子を使用します。

| 修飾子  | 例 |
| ------------- | -------------
| `is:public`| [**is:public angular**](https://github.com/search?q=is%3Apublic+angular&type=RegistryPackages) は、「angular」という単語を含むパブリック パッケージに一致します
| `is:private`| [**is:private php**](https://github.com/search?q=is%3Aprivate+php&type=RegistryPackages) は、「php」という単語を含むプライベート パッケージに一致します
