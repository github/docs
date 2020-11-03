---
title: Objetos de entrada
redirect_from:
  - /v4/input_object
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
---

### Sobre objetos de entrada

[Objetos de entrada](https://graphql.github.io/graphql-spec/June2018/#sec-Input-Objects) podem ser descritos como "objetos estruturáveis", pois incluem um conjunto de campos de entrada que definem o objeto.

Por exemplo, [`CommitAuthor`](/v4/input_object/commitauthor/) toma um campo denominado `e-mails`. Fornecer um valor para `e-mails` transforma `CommitAuthor` em uma lista de objetos de `usuário` que contém esse endereço de e-mail. Observe que [objetos](/v4/object) **pode ter** objetos de entrada, enquanto [mutações](/v4/mutation) **exigem** objetos de entrada.

Para obter mais informações, consulte "[Sobre mutações](/v4/guides/forming-calls#about-mutations)".

{% for item in graphql.schemaForCurrentVersion.inputObjects %}
  {% include graphql-input-object %}
{% endfor %}
