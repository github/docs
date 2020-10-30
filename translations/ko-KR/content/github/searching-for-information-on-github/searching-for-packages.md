---
title: Searching for packages
intro: 'You can search for packages on {% data variables.product.product_name %} and narrow the results using search qualifiers.'
product: '{% data reusables.gated-features.packages %}'
permissions: Anyone can search for packages they have access to.
versions:
  free-pro-team: '*'
  enterprise-server: '>=2.22'
---

{% data reusables.package_registry.packages-ghes-release-stage %}

### About searching for packages

You can search for packages globally across all of {% data variables.product.product_name %}, or search for packages within a particular organization. For more information, see "[About searching on {% data variables.product.prodname_dotcom %}](/articles/about-searching-on-github)."

{% if currentVersion != "free-pro-team@latest" %}
You can only search for packages on {% data variables.product.product_location_enterprise %}, not {% data variables.product.prodname_dotcom_the_website %}, even if {% data variables.product.prodname_github_connect %} is enabled.
{% endif %}

{% data reusables.search.syntax_tips %}

### Searching within a user's or organization's packages

To find packages owned by a certain user or organization, use the `user` or `org` qualifier.

| Qualifier                 | 예시                                                                                                                                                                            |
| ------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <code>user:<em>USERNAME</em></code> | [**user:codertocat**](https://github.com/search?q=user%3Acodertocat&type=RegistryPackages) matches packages owned by @codertocat                                              |
| <code>org:<em>ORGNAME</em></code> | [**org:github**](https://github.com/search?q=org%3Agithub&type=RegistryPackages) matches packages owned by the {% data variables.product.prodname_dotcom %} organization |

### Filtering by package visibility

To filter your search by whether a package is public or private, use the `is` qualifier.

| Qualifier    | 예시                                                                                                                                                     |
| ------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `is:public`  | [**is:public angular**](https://github.com/search?q=is%3Apublic+angular&type=RegistryPackages) matches public packages that contain the word "angular" |
| `is:private` | [**is:private php**](https://github.com/search?q=is%3Aprivate+php&type=RegistryPackages) matches private packages that contain the word "php"          |
