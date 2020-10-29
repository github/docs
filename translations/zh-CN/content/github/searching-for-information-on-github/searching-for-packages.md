---
title: 搜索包
intro: '您可以在 {% data variables.product.product_name %} 上搜索包，并使用搜索限定符缩小结果范围。'
product: '{% data reusables.gated-features.packages %}'
permissions: 任何人都可以搜索他们有权访问的包。
versions:
  free-pro-team: '*'
  enterprise-server: '>=2.22'
---

{% data reusables.package_registry.packages-ghes-release-stage %}

### 关于搜索包

您可以在所有 {% data variables.product.product_name %} 中全局搜索包，也可以在特定组织内搜索包。 更多信息请参阅“[关于在 {% data variables.product.prodname_dotcom %} 上搜索](/articles/about-searching-on-github)”。

{% if enterpriseServerVersions contains currentVersion %}
You can only search for packages on
{% data variables.product.product_location_enterprise %}, not {% data variables.product.prodname_dotcom_the_website %}, even if {% data variables.product.prodname_github_connect %} is enabled.
{% endif %}

{% data reusables.search.syntax_tips %}

### 搜索用户或组织的包

要查找特定用户或组织拥有的包，请使用 `user` 或 `org` 限定符。

| 限定符                       | 示例                                                                                                                                      |
| ------------------------- | --------------------------------------------------------------------------------------------------------------------------------------- |
| <code>user:<em>USERNAME</em></code> | [**user:codertocat**](https://github.com/search?q=user%3Acodertocat&type=RegistryPackages) 匹配 @codertocat 拥有的包                          |
| <code>org:<em>ORGNAME</em></code> | [**org:github**](https://github.com/search?q=org%3Agithub&type=RegistryPackages) 匹配 {% data variables.product.prodname_dotcom %} 组织拥有的包 |

### 按包可见性过滤

要按包是公共还是私有来过滤搜索，请使用 `is` 限定符。

| 限定符          | 示例                                                                                                                   |
| ------------ | -------------------------------------------------------------------------------------------------------------------- |
| `is:public`  | [**is:public angular**](https://github.com/search?q=is%3Apublic+angular&type=RegistryPackages) 匹配含有文字 "angular" 的公共包 |
| `is:private` | [**is:private php**](https://github.com/search?q=is%3Aprivate+php&type=RegistryPackages) 匹配含有文字 "php" 的私有包           |
