---
title: Uniões
redirect_from:
  - /v4/union
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
---

### Sobre uniões

Uma [união](https://graphql.github.io/graphql-spec/June2018/#sec-Unions) é um tipo de objeto que representa muitos objetos.

Por exemplo, um campo marcado como um [`ProjectCardItem`](/v4/union/projectcarditem/) pode ser um [`problema`](/v4/object/issue/) ou um [`PullRequest`](/v4/object/pullrequest/), pois cada um desses objetos pode estar dentro de um cartão de projeto. Usar uma união em vez de um objeto dá flexibilidade.

Para obter mais informações, consulte "[Introdução ao GraphQL](/v4/guides/intro-to-graphql)".

{% for item in graphql.schemaForCurrentVersion.unions %}
  {% include graphql-union %}
{% endfor %}
