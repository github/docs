---
title: Administrar cuentas empresariales
intro: Puedes administrar tu cuenta empresarial y las organizaciones que le pertenecen con la API de GraphQL.
redirect_from:
  - /v4/guides/managing-enterprise-accounts
versions:
  ghec: '*'
  ghes: '*'
  ghae: '*'
topics:
  - API
shortTitle: Manage enterprise accounts
ms.openlocfilehash: c55a2b23ff88214739402f78f00c2682c97df93b
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 10/25/2022
ms.locfileid: '148106785'
---
## Acerca de administrar cuentas empresariales con GraphQL

Para ayudarte a monitorear y hacer cambios en tu organización y mantener el cumplimiento, puedes utilizar la API de Cuentas Empresariales y la API de Bitácoras de Auditoría, las cuales se encuentran disponibles únicamente como API de GraphQL.

Las terminales de cuenta empresarial funcionan tanto para GitHub Enterprise Cloud y GitHub Enterprise Server.

GraphQL permite solicitar y devolver solo los datos que especifique. Por ejemplo, puede crear una consulta GraphQL o solicitar información para ver los nuevos miembros que se han agregado a su organización. O bien puede realizar un cambio para invitar a un administrador a su cuenta empresarial.

Con Audit Log API, puede supervisar si alguien hace lo siguiente:
- Accede a la configuración de la organización o del repositorio.
- Cambia los permisos.
- Agrega o quita usuarios de una organización, un repositorio o un equipo.
- Promueve usuarios a administradores.
- Cambia los permisos de una aplicación de GitHub Apps.

Audit Log API permite mantener copias de los datos de los registros de auditoría. Para las consultas realizadas con la API de Bitácoras de Auditoria, la respuesta de GraphQL puede incluir datos de hasta 90 a 120 días. Para obtener una lista de los campos disponibles con Audit Log API, vea la "[Interfaz AuditEntry](/graphql/reference/interfaces#auditentry/)".

Con la API de Cuentas Empresariales puedes:
- Listar y revisar todas las organizaciones y repositorios que pertenecen a tu cuenta empresarial.
- Cambiar la configuración de la cuenta empresarial.
- Configurar políticas para la configuración en tu cuenta empresarial y sus organizaciones.
- Invitar administradores a tu cuenta empresarial.
- Crear nuevas organizaciones en tu cuenta empresarial.

Para obtener una lista de los campos disponibles con Enterprise Accounts API, vea "[Campos y tipos de GraphQL para Enterprise Accounts API](/graphql/guides/managing-enterprise-accounts#graphql-fields-and-types-for-the-enterprise-accounts-api)".

## Comenzar a utilizar GraphQL para cuentas empresariales

Sigue estos pasos para comenzar a utilizar GraphQL para administrar tus cuentas empresariales:
 - Autenticación con un {% data variables.product.pat_generic %}
 - Elegir un cliente de GraphQL o utilizar el Explorador de GraphQL
 - Configurar Insomnia para utilizar la API de GraphQL

Para obtener algunas consultas de ejemplo, vea "[Una consulta de ejemplo con Enterprise Accounts API](#an-example-query-using-the-enterprise-accounts-api)".

### 1. Autenticarse con el {% data variables.product.pat_generic %}

{% data reusables.user-settings.graphql-classic-pat-only %}

1. Para autenticarte con GraphQL, debes generar un {% data variables.product.pat_generic %} desde la configuración de desarrollador. Para obtener más información, consulta "[Creación de un {% data variables.product.pat_generic %}](/github/authenticating-to-github/creating-a-personal-access-token)".

2. Concede permisos de control total a tu {% data variables.product.pat_generic %} para las áreas de GHES a las que quieras acceder. Para tener permiso total en los repositorios privados, organizaciones, equipos, datos de usuario y acceso a la facturación empresarial y datos de perfil, te recomendamos que selecciones estos ámbitos para tu {% data variables.product.pat_generic %}:
    - `repo`
    - `admin:org`
    - `user`
    - `admin:enterprise`

  Los alcances específicos para la cuenta empresarial son:
    - `admin:enterprise`: proporciona control total de las empresas (incluye `manage_runners:enterprise`, `manage_billing:enterprise` y `read:enterprise`)
    - `manage_billing:enterprise`: lectura y escritura de datos de facturación de la empresa.{% ifversion ghes or ghae %}
    - `manage_runners:enterprise`: acceso para administrar ejecutores y grupos de ejecutores de empresa de Acciones de GitHub.{% endif %}
    - `read:enterprise`: lectura de datos del perfil de empresa.

3. Copia tu {% data variables.product.pat_generic %} y mantenlo en un lugar seguro hasta que lo agregues a tu cliente de GraphQL.

### 2. Elección de un cliente de GraphQL

Te recomendamos utilizar GraphiQL u otro cliente independiente de GraphQL que te permita configurar la URL base.

También podrás considerar utilizar estos clientes de GraphQL:
  - [Insomnia](https://support.insomnia.rest/article/176-graphql-queries)
  - [GraphiQL](https://www.gatsbyjs.org/docs/running-queries-with-graphiql/)
  - [Postman](https://learning.getpostman.com/docs/postman/sending_api_requests/graphql/)

Los siguientes pasos utilizarán Insomnia.

### 3. Configuración de Insomnia para usar GraphQL API de GitHub con cuentas de empresa

1. Agregue la URL base y el método `POST` al cliente de GraphQL. Cuando use GraphQL para solicitar información (consultas), cambiar información (mutaciones), o transferir datos mediante la API de GitHub, el método HTTP predeterminado es `POST` y la URL base sigue esta sintaxis:
    - Para la instancia empresarial: `https://<HOST>/api/graphql`
    - Para GitHub Enterprise Cloud: `https://api.github.com/graphql`

2. Para la autenticación, abra el menú de opciones de autenticación y seleccione **Token de portador**. Luego, agrega el {% data variables.product.pat_generic %} que copiaste anteriormente.

 ![Opciones de permisos de {% data variables.product.pat_generic %}](/assets/images/developer/graphql/insomnia-base-url-and-pat.png)

 ![Opciones de permisos de {% data variables.product.pat_generic %}](/assets/images/developer/graphql/insomnia-bearer-token-option.png)

3. Incluye la información del encabezado.
   - Agregue `Content-Type` como encabezado y `application/json` como valor.
   ![Encabezado estándar](/assets/images/developer/graphql/json-content-type-header.png)
   ![Encabezado con valor de versión preliminar para Audit Log API](/assets/images/developer/graphql/preview-header-for-2.18.png)

Ahora estás listo para comenzar a hacer consultas.

## Un ejemplo de consulta utilizando la API de Cuentas Empresariales

Esta consulta de GraphQL solicita la cantidad total de repositorios de {% ifversion not ghae %}`public`{% else %}`private`{% endif %} en cada una de las organizaciones del dispositivo mediante Enterprise Accounts API. Para personalizar esta consulta, reemplace `<enterprise-account-name>` por el identificador de la cuenta de empresa. Por ejemplo, si la cuenta de empresa se encuentra en `https://github.com/enterprises/octo-enterprise`, reemplace `<enterprise-account-name>` por `octo-enterprise`.

{% ifversion not ghae %}

```graphql
query publicRepositoriesByOrganization($slug: String!) {
  enterprise(slug: $slug) {
    ...enterpriseFragment
  }
}

fragment enterpriseFragment on Enterprise {
  ... on Enterprise{
    name
    organizations(first: 100){
      nodes{
        name
        ... on Organization{
          name
          repositories(privacy: PUBLIC){
            totalCount
          }
        }
      }
    }
  }
}

# Passing our Enterprise Account as a variable
variables {
  "slug": "<enterprise-account-name>"
}
```

{% else %}

```graphql
query privateRepositoriesByOrganization($slug: String!) {
  enterprise(slug: $slug) {
    ...enterpriseFragment
  }
}

fragment enterpriseFragment on Enterprise {
  ... on Enterprise{
    name
    organizations(first: 100){
      nodes{
        name
        ... on Organization{
          name
          repositories(privacy: PRIVATE){
            totalCount
          }
        }
      }
    }
  }
}

# Passing our Enterprise Account as a variable
variables {
  "slug": "<enterprise-account-name>"
}
```
{% endif %}

En la siguiente consulta de GraphQL se muestra lo complicado que es recuperar la cantidad de repositorios {% ifversion not ghae %}`public`{% else %}`private`{% endif %} en cada organización sin usar Enterprise Account API.  Nota que la API de Cuentas Empresariales de GraphQL ha hecho esta tarea más simple para las empresas, ya que solo necesitas personalizar una sola variable. Para personalizar esta consulta, reemplace `<name-of-organization-one>` y `<name-of-organization-two>`, etc., por los nombres de la organización en la instancia.

{% ifversion not ghae %}
```graphql
# Each organization is queried separately
{
  organizationOneAlias: organization(login: "nameOfOrganizationOne") {
    # How to use a fragment
    ...repositories
  }
  organizationTwoAlias: organization(login: "nameOfOrganizationTwo") {
    ...repositories
  }
  # organizationThreeAlias ... and so on up-to lets say 100
}

## How to define a fragment
fragment repositories on Organization {
  name
  repositories(privacy: PUBLIC){
    totalCount
  }
}
```
{% else %}
```graphql
# Each organization is queried separately
{
  organizationOneAlias: organization(login: "name-of-organization-one") {
    # How to use a fragment
    ...repositories
  }
  organizationTwoAlias: organization(login: "name-of-organization-two") {
    ...repositories
  }
  # organizationThreeAlias ... and so on up-to lets say 100
}

## How to define a fragment
fragment repositories on Organization {
  name
  repositories(privacy: PRIVATE){
    totalCount
  }
}
```
{% endif %}

## Consulta a cada organización por separado

{% ifversion not ghae %}

```graphql
query publicRepositoriesByOrganization {
  organizationOneAlias: organization(login: "<name-of-organization-one>") {
    # How to use a fragment
    ...repositories
  }
  organizationTwoAlias: organization(login: "<name-of-organization-two>") {
    ...repositories
  }
  # organizationThreeAlias ... and so on up-to lets say 100
}
# How to define a fragment
fragment repositories on Organization {
  name
  repositories(privacy: PUBLIC){
    totalCount
  }
}
```

{% else %}

```graphql
query privateRepositoriesByOrganization {
  organizationOneAlias: organization(login: "<name-of-organization-one>") {
    # How to use a fragment
    ...repositories
  }
  organizationTwoAlias: organization(login: "<name-of-organization-two>") {
    ...repositories
  }
  # organizationThreeAlias ... and so on up-to lets say 100
}
# How to define a fragment
fragment repositories on Organization {
  name
  repositories(privacy: PRIVATE){
    totalCount
  }
}
```

{% endif %}

Esta consulta de GraphQL solicita las últimas 5 entradas de bitácora para una organización empresarial. Para personalizar esta consulta, reemplace `<org-name>` y `<user-name>`.

```graphql
{
  organization(login: "<org-name>") {
    auditLog(last: 5, query: "actor:<user-name>") {
      edges {
        node {
          ... on AuditEntry {
# Get Audit Log Entry by 'Action'
            action
            actorLogin
            createdAt
# User 'Action' was performed on
           user{
              name
                email
            }
          }
        }
      }
    }
  }
}
```

Para más información sobre cómo empezar a trabajar con GraphQL, vea "[Introducción a GraphQL](/graphql/guides/introduction-to-graphql)" y "[Formación de llamadas con GraphQL](/graphql/guides/forming-calls-with-graphql)".

## Campos y tipos de GraphQL para la API de Cuentas Empresariales

Aquí tienes un resumen de las nuevas consultas, mutaciones y tipos definidos por modelos disponibles para utilizarse con la API de Cuentas Empresariales.

Para más información sobre as nuevas consultas, mutaciones y tipos definidos por el esquema disponibles para usar con Enterprise Accounts API, vea la barra lateral con definiciones detalladas de GraphQL desde cualquier [página de referencia de GraphQL](/graphql).

Puedes acceder a los documentos de referencia desde dentro del explorador de GraphQL en GitHub. Para más información, vea "[Uso del explorador](/graphql/guides/using-the-explorer#accessing-the-sidebar-docs)".
Para obtener otra información, como los detalles de autenticación y límite de frecuencia, consulte las [guías](/graphql/guides).
