---
title: Uniões
redirect_from:
  - /v4/union
  - /v4/reference/union
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
---

### Sobre uniões

Uma [união](https://graphql.github.io/graphql-spec/June2018/#sec-Unions) é um tipo de objeto que representa muitos objetos.

Por exemplo, um campo marcado como um [`ProjectCardItem`](/graphql/reference/unions#projectcarditem) pode ser um [`problema`](/graphql/reference/objects#issue) ou um [`PullRequest`](/graphql/reference/objects#pullrequest), pois cada um desses objetos pode estar dentro de um cartão de projeto. Usar uma união em vez de um objeto dá flexibilidade.

Para obter mais informações, consulte "[Introdução ao GraphQL](/graphql/guides/introduction-to-graphql)".

{% for item in graphql.schemaForCurrentVersion.unions %}
  {% include graphql-union %}
{% endfor %}
