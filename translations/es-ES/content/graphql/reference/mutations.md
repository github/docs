---
title: Mutaciones
redirect_from:
  - /v4/mutation
  - /v4/reference/mutation
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
---

### Acerca de las mutaciones

Cada modelo de GraphQL tiene un tipo de raíz tanto para consultas como para mutaciones. El [tipo mutación](https://graphql.github.io/graphql-spec/June2018/#sec-Type-System) define las operaciones de GraphQL que cambian los datos en el servidor. Es análogo a realizar verbos HTTP tales como `POST`, `PATCH`, y `DELETE`.

Para obtener más información, consulta la sección "[Acerca de las mutaciones](/graphql/guides/forming-calls-with-graphql#about-mutations)".

{% for item in graphql.schemaForCurrentVersion.mutations %}
  {% include graphql-mutation %}
{% endfor %}
