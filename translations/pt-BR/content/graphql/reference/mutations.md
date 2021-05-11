---
title: Mutações
redirect_from:
  - /v4/mutation
  - /v4/reference/mutation
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
  - API
---

### Sobre as mutações

Cada esquema de GraphQL tem um tipo de raiz para consultas e mutações. O [tipo de mutação](https://graphql.github.io/graphql-spec/June2018/#sec-Type-System) define operações do GraphQL que alteram dados no servidor. É análogo a executar verbos HTTP como `POST`, `PATCH` e `DELETE`.

Para obter mais informações, consulte "[Sobre mutações](/graphql/guides/forming-calls-with-graphql#about-mutations)".

{% for item in graphql.schemaForCurrentVersion.mutations %}
  {% include graphql-mutation %}
{% endfor %}
