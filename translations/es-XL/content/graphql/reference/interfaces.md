---
title: Interfaces
redirect_from:
  - /v4/interface
  - /v4/reference/interface
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
  - API
---

### Acerca de las interfaces

Las [interfaces](https://graphql.github.io/graphql-spec/June2018/#sec-Interfaces) sirven como objetos padre de los cuales obtendrán sus herencias los demás objetos.

Por ejemplo, [`Lockable`](/v4/interface/lockable/) es una interface, ya que tanto los objetos [`Issue`](/v4/object/issue/) como los objetos [`PullRequest`](/v4/object/pullrequest/) se pueden fijar. Una interface tiene su propia lista de campos nombrados que se comparte mediante objetos de implementación.

Para obtener más información, consulta la sección "[Implementación](/v4/guides/intro-to-graphql#implementation)".

{% for item in graphql.schemaForCurrentVersion.interfaces %}
  {% include graphql-interface %}
{% endfor %}
