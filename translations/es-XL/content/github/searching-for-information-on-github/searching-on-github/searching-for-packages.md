---
title: Buscar paquetes
intro: 'Puedes buscar paquetes en {% data variables.product.product_name %} y acotar los resultados utilizando los calificadores de búsqueda.'
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

### Acerca de la búsqueda de paquetes

Puedes buscar paquetes globalmente a través de todo {% data variables.product.product_name %}, o buscarlos dentro de una organización en particular. Para obtener más información, consulta [Acerca de buscar en {% data variables.product.prodname_dotcom %}](/articles/about-searching-on-github)".

{% if currentVersion != "free-pro-team@latest" %}
Para encontrar paquetes que sean propiedad de cierto usuario u organización, utiliza el calificador `user` u `org`.
{% endif %}

{% data reusables.search.syntax_tips %}

### Buscar dentro de los paquetes de una organización o usuario

Para encontrar paquetes que sean propiedad de cierto usuario u organización, utiliza el calificador `user` u `org`.

| Qualifier                 | Ejemplo                                                                                                                                                                                          |
| ------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| <code>user:<em>USERNAME</em></code> | [**user:codertocat**](https://github.com/search?q=user%3Acodertocat&type=RegistryPackages) coincidirá con paquetes que sean propiedad de @codertocat                                             |
| <code>org:<em>ORGNAME</em></code> | [**org:github**](https://github.com/search?q=org%3Agithub&type=RegistryPackages) coincidirá con paquetes que sean propiedad de la organización {% data variables.product.prodname_dotcom %} |

### Filtrar por visibilidad del paquete

Para filtrar tu búsqueda por el criterio de si el paquete es público o privado, utiliza el calificador `is`.

| Qualifier    | Ejemplo                                                                                                                                                                |
| ------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `is:public`  | [**is:public angular**](https://github.com/search?q=is%3Apublic+angular&type=RegistryPackages) coincidirá con los paquetes públicos que contengan la palabra "angular" |
| `is:private` | [**is:private php**](https://github.com/search?q=is%3Aprivate+php&type=RegistryPackages) coincidirá con los paquetes privados que contengan la palabra "php"           |
