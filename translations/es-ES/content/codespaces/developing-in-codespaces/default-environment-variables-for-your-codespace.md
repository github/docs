---
title: Variables de ambiente predeterminadas para tu codespace
shortTitle: Default environment variables
product: '{% data reusables.gated-features.codespaces %}'
intro: '{% data variables.product.prodname_dotcom %} configura variables de ambiente predeterminadas para cada codespace.'
versions:
  fpt: '*'
  ghec: '*'
type: overview
topics:
  - Codespaces
  - Fundamentals
  - Developer
ms.openlocfilehash: bcff0f06aad7eb930b47f4b9cb32e42c067d07cf
ms.sourcegitcommit: 478f2931167988096ae6478a257f492ecaa11794
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/09/2022
ms.locfileid: '147614347'
---
## Acerca de las variables de ambiente predeterminadas

{% data variables.product.prodname_dotcom %} configura variables de ambiente predeterminadas para cada codespace. Los comandos que se ejecutan en los codespaces pueden crear, leer y modificar las variables de ambiente.

{% note %}

**Nota**: Las variables de entorno distinguen mayúsculas de minúsculas.

{% endnote %}

## Lista de variables de ambiente predeterminadas

| Variable de entorno | Descripción |
| ---------------------|------------ |
| `CODESPACE_NAME` | Nombre del codespace, por ejemplo, `monalisa-github-hello-world-2f2fsdf2e` |
| `CODESPACES` | Siempre `true` en un codespace |
| `GIT_COMMITTER_EMAIL` | Correo electrónico del campo de "creador" de las confirmaciones de `git` futuras. |
| `GIT_COMMITTER_NAME` | Nombre del campo de "responsable de la confirmación" de las confirmaciones de `git` futuras. |
| `GITHUB_API_URL` | Devuelve la URL de la API. Por ejemplo, `{% data variables.product.api_url_code %}`. |
| `GITHUB_GRAPHQL_URL` | Devuelve la URL de la API de GraphQL. Por ejemplo, `{% data variables.product.graphql_url_code %}`. |
| `GITHUB_REPOSITORY` | El nombre del repositorio y del propietario. Por ejemplo, `octocat/Hello-World`. |
| `GITHUB_SERVER_URL`| Devuelve la URL del servidor de {% data variables.product.product_name %}. Por ejemplo, `https://{% data variables.product.product_url %}`. |
| `GITHUB_TOKEN` | Un token de autenticación que representa al usuario en el codespace. Puedes utilizar esto para hacer llamadas autenticadas a la API de GitHub. Para más información, vea "[Autenticación](/codespaces/codespaces-reference/security-in-codespaces#authentication)".  |
| `GITHUB_USER` | El nombre del usuario que inició el codespace. Por ejemplo, `octocat`. |
