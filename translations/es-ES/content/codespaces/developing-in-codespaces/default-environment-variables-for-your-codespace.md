---
title: Variables de ambiente predeterminadas para tu codespace
shortTitle: Variables de entorno predeterminadas
product: '{% data reusables.gated-features.codespaces %}'
permissions: '{% data reusables.codespaces.availability %}'
intro: '{% data variables.product.prodname_dotcom %} configura variables de ambiente predeterminadas para cada codespace.'
versions:
  fpt: '*'
  ghec: '*'
type: overview
topics:
  - Codespaces
  - Fundamentals
  - Developer
---

## Acerca de las variables de ambiente predeterminadas

{% data variables.product.prodname_dotcom %} configura variables de ambiente predeterminadas para cada codespace. Los comandos que se ejecutan en los codespaces pueden crear, leer y modificar las variables de ambiente.

{% note %}

**Nota**: Las variables de ambiente distinguen entre mayúsculas y minúsculas.

{% endnote %}

## Lista de variables de ambiente predeterminadas

| Variable de entorno   | Descripción                                                                                                                                                                                                                                                                                 |
| --------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `CODESPACE_NAME`      | El nombre del codespace, por ejemplo, `monalisa-github-hello-world-2f2fsdf2e`                                                                                                                                                                                                               |
| `CODESPACES`          | Siempre `true` si está en un codespace                                                                                                                                                                                                                                                      |
| `GIT_COMMITTER_EMAIL` | El correo electrónico del campo de "autor" de las confirmaciones de `git` futuras.                                                                                                                                                                                                          |
| `GIT_COMMITTER_NAME`  | El nombre del campo "confirmante" de las confirmaciones de `git` futuras.                                                                                                                                                                                                                   |
| `GITHUB_API_URL`      | Devuelve la URL de la API. Por ejemplo, `{% data variables.product.api_url_code %}`.                                                                                                                                                                                                        |
| `GITHUB_GRAPHQL_URL`  | Devuelve la URL de la API de GraphQL. Por ejemplo, `{% data variables.product.graphql_url_code %}`.                                                                                                                                                                                         |
| `GITHUB_REPOSITORY`   | El nombre del repositorio y del propietario. Por ejemplo, `octocat/Hello-World`.                                                                                                                                                                                                            |
| `GITHUB_SERVER_URL`   | Devuelve la URL del servidor de {% data variables.product.product_name %}. Por ejemplo, `https://{% data variables.product.product_url %}`.                                                                                                                                                 |
| `GITHUB_TOKEN`        | Un token de autenticación que representa al usuario en el codespace. Puedes utilizar esto para hacer llamadas autenticadas a la API de GitHub. Para obtener más información, consulta la sección "[Autenticación](/codespaces/codespaces-reference/security-in-codespaces#authentication)". |
| `GITHUB_USER`         | El nombre del usuario que inició el codespace. Por ejemplo, `octocat`.                                                                                                                                                                                                                      |
