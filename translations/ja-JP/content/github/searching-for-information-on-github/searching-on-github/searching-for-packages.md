---
title: パッケージを検索する
intro: '{% data variables.product.product_name %} 上のパッケージを検索し、検索修飾子を使用して検索結果を絞ることができます。'
product: '{% data reusables.gated-features.packages %}'
permissions: Anyone can search for packages they have access to.
versions:
  free-pro-team: '*'
  enterprise-server: '>=2.22'
  github-ae: '*'
topics:
  - GitHub search
redirect_from:
  - /github/searching-for-information-on-github/searching-for-packages
---

{% data reusables.package_registry.packages-ghes-release-stage %}

### パッケージの検索について

{% data variables.product.product_name %} 全体にわたってグローバルにパッケージを検索できます。あるいは、特定の Organization のみのパッケージの検索もできます。 詳細は「[{% data variables.product.prodname_dotcom %} での検索について](/articles/about-searching-on-github)」を参照してください。

{% if enterpriseServerVersions contains currentVersion %}
You can only search for packages on {% data variables.product.product_name %}, not {% data variables.product.prodname_dotcom_the_website %}, even if {% data variables.product.prodname_github_connect %} is enabled.
{% endif %}

{% data reusables.search.syntax_tips %}

### ユーザまたは Organization のパッケージ内の検索

特定のユーザまたは Organization が所有するパッケージを検索するには、`user` 修飾子または `org` 修飾子を使います。

| 修飾子                       | サンプル                                                                                                                                                            |
| ------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <code>user:<em>USERNAME</em></code> | [**user:codertocat**](https://github.com/search?q=user%3Acodertocat&type=RegistryPackages) は、@codertocat が所有するパッケージにマッチします。                                     |
| <code>org:<em>ORGNAME</em></code> | [**org:github**](https://github.com/search?q=org%3Agithub&type=RegistryPackages) は、{% data variables.product.prodname_dotcom %} Organization が所有するパッケージにマッチします。 |

### パッケージの可視性によるフィルタリング

パッケージがパブリックかプライベートかを基準に検索をフィルタリングするには、`is` 修飾子を使用します。

| 修飾子          | サンプル                                                                                                                                 |
| ------------ | ------------------------------------------------------------------------------------------------------------------------------------ |
| `is:public`  | [**is:public angular**](https://github.com/search?q=is%3Apublic+angular&type=RegistryPackages) は、「angular」という単語を含むパブリックパッケージにマッチします。 |
| `is:private` | [**is:private php**](https://github.com/search?q=is%3Aprivate+php&type=RegistryPackages) は、「php」という単語を含むプライベートパッケージにマッチします。          |
