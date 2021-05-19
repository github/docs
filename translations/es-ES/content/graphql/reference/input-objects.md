---
title: Objetos de entrada
redirect_from:
  - /v4/input_object
  - /v4/reference/input_object
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
  - API
---

### Acerca de los objetos de entrada

Los [objetos de entrada](https://graphql.github.io/graphql-spec/June2018/#sec-Input-Objects) pueden describirse como "objetos estructurables" ya que incluyen un conjunto de campos de entrada que definen al objeto.

Por ejemplo, [`CommitAuthor`](/graphql/reference/input-objects#commitauthor) toma un campo llamado `emails`. Proporcionar un valor para `emails` transforma a `CommitAuthor` en una lista de objetos `User` que contienen esa dirección de correo electrónico. Nota que los [objetos](/graphql/reference/objects) **podrían** tener objetos de entrada, mientras que las [mutaciones](/graphql/reference/mutations) **requieren** objetos de entrada.

Para obtener más información, consulta la sección "[Acerca de las mutaciones](/graphql/guides/forming-calls-with-graphql#about-mutations)".

<!-- this page is pre-rendered by scripts because it's too big to load dynamically -->
<!-- see lib/graphql/static/prerendered-input-objects.json -->
