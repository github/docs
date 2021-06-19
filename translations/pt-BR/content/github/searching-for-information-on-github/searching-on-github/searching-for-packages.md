---
title: Pesquisar pacotes
intro: 'Você pode procurar pacotes no {% data variables.product.product_name %} e limitar os resultados usando qualificadores de pesquisa.'
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

### Sobre a procura de pacotes

É possível procurar pacotes globalmente em todos os {% data variables.product.product_name %} ou pesquisar pacotes dentro de uma determinada organização. Para obter mais informações, consulte "[Sobre a pesquisa no {% data variables.product.prodname_dotcom %}](/articles/about-searching-on-github)".

{% if enterpriseServerVersions contains currentVersion %}
Você só pode procurar por pacotes em {% data variables.product.product_name %}, não {% data variables.product.prodname_dotcom_the_website %}, mesmo se {% data variables.product.prodname_github_connect %} estiver habilitado.
{% endif %}

{% data reusables.search.syntax_tips %}

### Procurar pacotes do usuário ou da organização

Para encontrar pacotes que pertencem a um determinado usuário ou organização, use o `usuário` ou `org` qualificador.

| Qualifier                 | Exemplo                                                                                                                                                                          |
| ------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <code>user:<em>USERNAME</em></code> | [**user:codertocat**](https://github.com/search?q=user%3Acodertocat&type=RegistryPackages) corresponde pacotes que pertencem ao @codertocat                                      |
| <code>org:<em>ORGNAME</em></code> | [**org:github**](https://github.com/search?q=org%3Agithub&type=RegistryPackages) corresponde pacotes que pertencem à organização do {% data variables.product.prodname_dotcom %}

### Filtrar por visibilidade do pacote

Para filtrar sua pesquisa pelo status público ou privado do pacote, use o qualificador `is`.

| Qualifier    | Exemplo                                                                                                                                                      |
| ------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `is:public`  | [**is:public angular**](https://github.com/search?q=is%3Apublic+angular&type=RegistryPackages) corresponde a pacotes públicos que contêm a palavra "angular" |
| `is:private` | [**is:private php**](https://github.com/search?q=is%3Aprivate+php&type=RegistryPackages) corresponde pacotes privados que contêm a palavra "php"             |
