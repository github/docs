---
title: Solución de problemas de administración de acceso e identidad para la organización
intro: 'Revisa y resuelve los errores comunes de las soluciones de problemas para administrar el SSO de SAML de tu organización, la sincronización de equipos o la conexión con el proveedor de identidad (IdP).'
versions:
  ghec: '*'
topics:
  - Organizations
  - Teams
shortTitle: Troubleshooting access
redirect_from:
  - /organizations/managing-saml-single-sign-on-for-your-organization/troubleshooting-identity-and-access-management
ms.openlocfilehash: d3110d61fb511f55aa840d0911c036dd342fa833
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 10/25/2022
ms.locfileid: '148106977'
---
{% data reusables.saml.current-time-earlier-than-notbefore-condition %}

{% data reusables.saml.authentication-loop %}

## Algunos usuarios no están aprovisionados o desaprovisionados por SCIM

Cuando encuentras problemas de aprovisionamiento con los usuarios, te recomendamos que verifiques si estos no tienen metadatos de SCIM. 

{% data reusables.scim.changes-should-come-from-idp %}

Si a un miembro de la organización el faltan metadatos de SCIM, entonces puedes volver a aprovisionar el SCIM para este de forma manual mediante tu IdP.

### Auditar usarios para los metadatos perdidos de SCIM

Si sospechas o notas que cualquier usuario no se aprovisionó o desaprovisionó como lo esperabas, te recomendamos que audites a todos los usuarios de tu organización.

Para verificar si los usuarios tienen una identidad de SCIM (metadatos de SCIM) en su identidad externa, puedes revisar los metadatos de SCIM un miembro de la organización a la vez en {% data variables.product.prodname_dotcom %} o puedes revisar con programación a todos los miembros utilizando la API de {% data variables.product.prodname_dotcom %}.

#### Auditar a los miembros de tu organización en {% data variables.product.prodname_dotcom %}

Como propietario de la organización, para confirmar que existen metadatos de SCIM para un único miembro de la organización, visita esta dirección URL, reemplazando `<organization>` y `<username>`: 

> `https://github.com/orgs/<organization>/people/<username>/sso`

Si la identidad externa del usuario incluye metadatos de SCIM, el propietario de la organización debería ver una sección de identidad de SCIM en esa página. Si su identidad externa no incluye cualquier metadato de SCIM, la sección de identidad de SCIM no existirá.

#### Auditar a los miembros de la organización mediante la API de {% data variables.product.prodname_dotcom %}

Como propietario de la organización, también puedes consultar la API de REST de SCIM o GraphQL para que listen todas las identidades de SCIM aprovisionadas en una organización. 

#### Mediante la API de REST

La API de REST de SCIM solo devolverá datos para los usuarios que tengan metadatos de SCIM ya llenos en sus identidades externas. Te recomendamos comparar una lista de identidades aprovisionadas de SCIM con una lista de todos tus miembros organizacionales.

Para más información, consulte:
  - "[Enumerar las identidades aprovisionadas de SCIM](/rest/reference/scim#list-scim-provisioned-identities)"
  - "[Enumerar los miembros de la organización](/rest/reference/orgs#list-organization-members)"

#### Utilizar GraphQL

Esta consulta de GraphQL muestra el `NameId` de SAML, el `UserName` de SCIM y el nombre de usuario de {% data variables.product.prodname_dotcom %} (`login`) de cada usuario en la organización. Para usar esta consulta, reemplaza `ORG` por el nombre de la organización. 

```graphql
{
  organization(login: "ORG") {
    samlIdentityProvider {
      ssoUrl
      externalIdentities(first: 100) {
        edges {
          node {
            samlIdentity {
              nameId
            }
            scimIdentity {
              username
            }
            user {
              login
            }
          }
        }
      }
    }
  }
}
```

```shell
curl -X POST -H "Authorization: Bearer YOUR_TOKEN" -H "Content-Type: application/json" -d '{ "query": "{ organization(login: \"ORG\") { samlIdentityProvider { externalIdentities(first: 100) { pageInfo { endCursor startCursor hasNextPage } edges { cursor node { samlIdentity { nameId } scimIdentity {username}  user { login } } } } } } }" }'  https://api.github.com/graphql
```

Para obtener más información sobre cómo utilizar la API de GraphQL, consulta: 
   - "[Guías de GraphQL](/graphql/guides)"
   - "[GraphQL Explorer](/graphql/overview/explorer)"

### Volver a aprovisionar SCIM para los usuarios mediante tu proveedor de identidad

Puedes volver a aprovisionar SCIM para los usuarios manualmente a través de tu IdP. Por ejemplo, para resolver los errores de aprovisionamiento para Okta, en el portal de administración de Okta, puedes desasignar y reasignar usuarios a la app de {% data variables.product.prodname_dotcom %}. Esto debería activar a Okta para hacer una llamada a la API para llenar los metadatos de SCIM para estos usuarios en {% data variables.product.prodname_dotcom %}. Para obtener más información, consulta "[Cancelar la asignación de usuarios de aplicaciones](https://help.okta.com/en/prod/Content/Topics/users-groups-profiles/usgp-unassign-apps.htm)" o "[Asignar usuarios a aplicaciones](https://help.okta.com/en/prod/Content/Topics/users-groups-profiles/usgp-assign-apps.htm)" en la documentación de Okta.

Para confirmar que la identidad de SCIM de un usuario se creó, te recomendamos probar este proceso con un solo miembro organizacional de quien hayas confirmado que no existe una identidad externa de SCIM. Después de actualizar los usuarios manualmente en tu IdP, puedes verificar si la identidad de SCIM del usuario se creó utilizando la API de SCIM o en {% data variables.product.prodname_dotcom %}. Para obtener más información, consulta "[Auditoría de usuarios para los metadatos de SCIM ausentes](#auditing-users-for-missing-scim-metadata)" o el punto de conexión de la API de REST "[Obtención de la información de aprovisionamiento de SCIM para un usuario](/rest/reference/scim#get-scim-provisioning-information-for-a-user)".

Si volver a aprovisionar el SCIM para los usuarios no funciona, por favor, contacta al Soporte de {% data variables.product.prodname_dotcom %}.

## Información adicional

- "[Solución de problemas de administración de acceso e identidad para la empresa](/admin/identity-and-access-management/managing-iam-for-your-enterprise/troubleshooting-identity-and-access-management-for-your-enterprise)"
