---
title: Interfaces
redirect_from:
  - /v4/interface
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
---

### Sobre interfaces

As [Interfaces](https://graphql.github.io/graphql-spec/June2018/#sec-Interfaces) servem como objetos principais dos quais outros objetos receberão sua herança.

Por exemplo, [`Bloqueável`](/v4/interface/lockable/) é uma interface porque os objetos [`problema`](/v4/object/issue/) e [`PullRequest`](/v4/object/pullrequest/) objetos podem ser bloqueados. Uma interface possui sua própria lista de campos nomeados que são compartilhados mediante os objetos de implementação.

Para obter mais informações, consulte "[Implementação](/v4/guides/intro-to-graphql#implementation)".

{% for item in graphql.schemaForCurrentVersion.interfaces %}
  {% include graphql-interface %}
{% endfor %}
