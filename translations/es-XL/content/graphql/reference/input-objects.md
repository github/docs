---
title: Objetos de entrada
redirect_from:
  - /v4/input_object
versions:
  free-pro-team: '*'
  enterprise-server: '*'
---

### Acerca de los objetos de entrada

Los [objetos de entrada](https://graphql.github.io/graphql-spec/June2018/#sec-Input-Objects) pueden describirse como "objetos estructurables" ya que incluyen un conjunto de campos de entrada que definen al objeto.

Por ejemplo, [`CommitAuthor`](/v4/input_object/commitauthor/) toma un campo llamado `emails`. Proporcionar un valor para `emails` transforma a `CommitAuthor` en una lista de objetos `User` que contienen esa dirección de correo electrónico. Nota que los [objetos](/v4/object) **podrían** tener objetos de entrada, mientras que las [mutaciones](/v4/mutation) **requieren** objetos de entrada.

Para obtener más información, consulta la sección "[Acerca de las mutaciones](/v4/guides/forming-calls#about-mutations)".

{% for item in graphql.schemaForCurrentVersion.inputObjects %}
  {% include graphql-input-object %}
{% endfor %}
