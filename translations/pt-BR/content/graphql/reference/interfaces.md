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

### Sobre interfaces

As [Interfaces](https://graphql.github.io/graphql-spec/June2018/#sec-Interfaces) servem como objetos principais dos quais outros objetos receberão sua herança.

Por exemplo, [`Bloqueável`](/graphql/reference/interfaces#lockable) é uma interface porque os objetos [`problema`](/graphql/reference/objects#issue) e [`PullRequest`](/graphql/reference/objects#pullrequest) objetos podem ser bloqueados. Uma interface possui sua própria lista de campos nomeados que são compartilhados mediante os objetos de implementação.

Para obter mais informações, consulte "[Implementação](/graphql/guides/introduction-to-graphql#implementation)".

{% for item in graphql.schemaForCurrentVersion.interfaces %}
  {% include graphql-interface %}
{% endfor %}
