---
title: Administrar cuentas empresariales
intro: Puedes administrar tu cuenta empresarial y las organizaciones que le pertenecen con la API de GraphQL.
redirect_from:
  - /v4/guides/managing-enterprise-accounts
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
---

### Acerca de administrar cuentas empresariales con GraphQL

Para ayudarte a monitorear y hacer cambios en tu organización y mantener el cumplimiento, puedes utilizar la API de Cuentas Empresariales y la API de Bitácoras de Auditoría, las cuales se encuentran disponibles únicamente como API de GraphQL.

Las terminales de cuenta empresarial funcionan tanto para GitHub Enterprise Cloud y GitHub Enterprise Server.

GraphQL te permite solicitar y recuperar únicamente los datos que especificas. Por ejemplo, puedes crear una consulta de GraphQL, o hacer una solicitud de información, para ver todos los nuevos miembros que se agregaron a tu organización. O puedes hacer una mutación, o cambio, para invitar a un administrador a tu cuenta empresarial.

Con la API de Bitácoras de Auditoria, puedes monitorear cuando alguien:
- Accede a tu configuración de organización o de repositorio.
- Cambia los permisos.
- Agrega o elimina usuarios en una organización, repositorio, o equipo.
- Promueve algún usuario a administrador.
- Cambia los permisos de GitHub App.

La API de Bitácoras de Auditoría te permite mantener las copias de tus datos de bitácoras de auditoria. Para las consultas realizadas con la API de Bitácoras de Auditoria, la respuesta de GraphQL puede incluir datos de hasta 90 a 120 días. Para encontrar una lista de los campos disponibles con la API de Bitácoras de Auditoria, consulta la "[interface AuditEntry](/graphql/reference/interfaces#auditentry/)".

Con la API de Cuentas Empresariales puedes:
- Listar y revisar todas las organizaciones y repositorios que pertenecen a tu cuenta empresarial.
- Cambiar la configuración de la cuenta empresarial.
- Configurar políticas para la configuración en tu cuenta empresarial y sus organizaciones.
- Invitar administradores a tu cuenta empresarial.
- Crear nuevas organizaciones en tu cuenta empresarial.

Para encontrar una lista de los campos disponibles con la API de Cuentas Empresariales, consulta "[Campos y tipos de GraphQL para la API de cuenta empresarial](/graphql/guides/managing-enterprise-accounts#graphql-fields-and-types-for-the-enterprise-accounts-api)".

### Comenzar a utilizar GraphQL para cuentas empresariales

Sigue estos pasos para comenzar a utilizar GraphQL para administrar tus cuentas empresariales:
 - Autenticarte con un token de acceso personal
 - Elegir un cliente de GraphQL o utilizar el Explorador de GraphQL
 - Configurar Insomnia para utilizar la API de GraphQL

Para encontrar algunas consultas de ejemplo, visita la sección "[Una consulta de ejemplo utilizando la API de Cuentas Empresariales](#an-example-query-using-the-enterprise-accounts-api)".

#### 1. Autenticarte con tu token de acceso personal

1. Para autenticarte con GraphQL, necesitas generar un token de acceso personal (PAT) desde la configuración de desarrollador. Para obtener más información, consulta la sección "[Crear un token de acceso personal](/github/authenticating-to-github/creating-a-personal-access-token)".

2. Porporciona permisos de control total a tu token de acceso personal para las áreas de GHES a las que quisieras acceder. Para tener permiso total a los repositorios privados, organizaciones, equipos, datos de usuario y acceso a la facturación empresarial y datos de perfil, te recomendamos que selecciones estos alcances para tu token de acceso personal:
    - `repo`
    - `admin:org`
    - `usuario`
    - `admin:enterprise`

  Los alcances específicos para la cuenta empresarial son:
    - `admin:enterprise`: otorga control total de las empresas (incluye`manage_billing:enterprise` y `read:enterprise`)
    - `manage_billing:enterprise`: Lee y escribe datos de facturación de la empresa.
    - `read:enterprise`: Lee datos del perfil empresarial.

  ![Opciones de permisos para el token de acceso personal](/assets/images/developer/graphql/permissions-for-access-token.png)

4. Copia tu token de acceso personal y mantenlo en un lugar seguro hasta que lo agregues a tu cliente de GraphQL.

#### 2. Elige un cliente de GraphQL

Te recomendamos utilizar GraphiQL u otro cliente independiente de GraphQL que te permita configurar la URL base.

También podrás considerar utilizar estos clientes de GraphQL:
  - [Insomnia](https://insomnia.rest/graphql/)
  - [GraphiQL](https://www.gatsbyjs.org/docs/running-queries-with-graphiql/)
  - [Postman](https://learning.getpostman.com/docs/postman/sending_api_requests/graphql/)

Los siguientes pasos utilizarán Insomnia.

#### 3. Configurar Insomnia para utilizar la API de GraphQL de GitHub con cuentas empresariales

1. Agrega la url base y el método `POST` a tu cliente de GraphQL. Cuando utilices GraphQL para solicitar información (consultas), cambiar información (mutaciones), o transferir datos utilizando la API de GitHub, el método HTTP predeterminado es `POST` y la url base sigue esta sintaxis:
    - Para tu instancia empresarial: `https://<HOST>/api/graphql`
    - Para GitHub Enterprise Cloud: `https://api.github.com/graphql`

2. Para autenticarte, abre el menú de opciones de autenticación y selecciona **Token titular**. A continuación, agrega tu token de acceso personal, el cual habías copiado.

 ![Opciones de permisos para el token de acceso personal](/assets/images/developer/graphql/insomnia-base-url-and-pat.png)

 ![Opciones de permisos para el token de acceso personal](/assets/images/developer/graphql/insomnia-bearer-token-option.png)

3. Incluye la información del encabezado.
   - Agrega `Content-Type` como el encabezado y `application/json` como el valor. ![Encabezado estándar](/assets/images/developer/graphql/json-content-type-header.png) ![Encabezado con valor de vista previa para la API de Bitácoras de Auditoría](/assets/images/developer/graphql/preview-header-for-2.18.png)

Ahora estás listo para comenzar a hacer consultas.

### Un ejemplo de consulta utilizando la API de Cuentas Empresariales

Esta consulta de GraphQL solicita la cantidad total de repositorios `public` en cada una de las organizaciones de tus aplicativos utilizando la API de cuentas empresariales. Para personalizar esta consulta, reemplaza `<enterprise-account-name>` con el slug de tu instancia empresarial.

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

La siguiente consulta de GraphQL muestra lo retador que es recuperar la cantidad de repositorios `public` en cada organización sin utilizar la API de Cuenta Empresarial.  Nota que la API de Cuentas Empresariales de GraphQL ha hecho esta tarea más simple para las empresas, ya que solo necesitas personalizar una sola variable. Para personalizar esta consulta, reemplaza `<name-of-organization-one>` y `<name-of-organization-one>`, etc. con los nombres de organización en tu instancia.

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

### Consulta a cada organización por separado

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

Esta consulta de GraphQL solicita las últimas 5 entradas de bitácora para una organización empresarial. Para personalizar este query, reemplaza `<org-name>` y `<user-name>`.

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

Para obtener más información acerca de cómo comenzar con GraphQL, consulta las secciónes "[Introducción a GraphQL](/graphql/guides/introduction-to-graphql)" y "[Formar Llamados con GraphQL](/graphql/guides/forming-calls-with-graphql)".

### Campos y tipos de GraphQL para la API de Cuentas Empresariales

Aquí tienes un resumen de las nuevas consultas, mutaciones y tipos definidos por modelos disponibles para utilizarse con la API de Cuentas Empresariales.

Para obtener más detalles acerca de las nuevas consultas, mutaciones y tipos definidos por modelos disponibles para utilizarse con la API de Cuentas Empresariales, observa la barra lateral con las definiciones detalladas de GraphQL desde cualquier [página de referencia de GraphQL](/graphql).

Puedes acceder a los documentos de referencia desde dentro del explorador de GraphQL en GitHub. Para obtener más información, consulta la sección "[Utilizar el explorador](/graphql/guides/using-the-explorer#accessing-the-sidebar-docs)". Para obtener otro tipo de información, tal como los detalles de autenticación y el límite de tasas, revisa las [guías](/graphql/guides).
