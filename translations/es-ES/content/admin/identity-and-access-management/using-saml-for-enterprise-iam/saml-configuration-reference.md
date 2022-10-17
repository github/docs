---
title: Referencia de configuración de SAML
shortTitle: SAML reference
intro: 'Puedes ver los metadatos de SAML para {% ifversion ghec %}tu organización o empresa en {% data variables.product.product_name %}{% elsif ghes %}{% data variables.product.product_location %}{% elsif ghae %}your enterprise on {% data variables.product.product_name %}{% endif %} y puedes obtener más información sobre los atributos SAML disponibles y los requisitos de respuesta.'
versions:
  ghec: '*'
  ghes: '*'
  ghae: '*'
type: reference
topics:
  - Accounts
  - Authentication
  - Enterprise
  - Identity
  - SSO
ms.openlocfilehash: 896d1281d28268f669957bfbf0df43d3a1d6a76e
ms.sourcegitcommit: 478f2931167988096ae6478a257f492ecaa11794
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/09/2022
ms.locfileid: '147683723'
---
## Acerca de la configuración de SAML

Para utilizar el inicio de sesión único (SSO) de SAML para la autenticación en {% data variables.product.product_name %}, debes configurar tanto el proveedor de identidades (IdP) de SAML externo como {% ifversion ghes %}{% data variables.product.product_location %}{% elsif ghec %}la empresa u organización en {% data variables.product.product_location %}{% elsif ghae %}la empresa en {% data variables.product.product_name %}{% endif %}. En una configuración de SAML, {% data variables.product.product_name %} funciona como un proveedor de servicios (SP) de SAML.

Debes especificar valores únicos para el IdP de SAML al configurar el inicio de sesión único de SAML para {% data variables.product.product_name %}, y también valores únicos de {% data variables.product.product_name %} en el IdP. Para más información sobre la configuración del inicio de sesión único de SAML para {% data variables.product.product_name %}, consulta "[Configuración del inicio de sesión único de SAML para tu empresa](/admin/identity-and-access-management/managing-iam-for-your-enterprise/configuring-saml-single-sign-on-for-your-enterprise){% ifversion ghes or ghae %}{% elsif ghec %}" o "[Habilitación y prueba del inicio de sesión único de SAML para tu organización](/organizations/managing-saml-single-sign-on-for-your-organization/enabling-and-testing-saml-single-sign-on-for-your-organization){% endif %}".

## Metadatos SAML

{% ifversion ghec %}

Los metadatos del proveedor de servicios para {% data variables.product.product_name %} están disponibles para organizaciones o empresas con el inicio de sesión único de SAML. {% data variables.product.product_name %} utiliza el enlace `urn:oasis:names:tc:SAML:2.0:bindings:HTTP-POST`.

### Las organizaciones

Puedes configurar el inicio de sesión único de SAML para una organización individual en la empresa. También puedes configurarlo para una organización si usas una organización individual en {% data variables.product.product_name %} y no una cuenta empresarial. Para más información, vea "[Administración del inicio de sesión único de SAML para la organización](/organizations/managing-saml-single-sign-on-for-your-organization)".

Los metadatos del proveedor de servicios para una organización en {% data variables.product.product_location %} están disponibles en `https://github.com/orgs/ORGANIZATION/saml/metadata`, donde **ORGANIZATION** es el nombre de la organización en {% data variables.product.product_location %}.

| Value | Otros nombres | Descripción | Ejemplo |
| :- | :- | :- | :- |
| ID de Entidad de SP | URL de SP, restricción de público | URL de nivel superior para la organización en {% data variables.product.product_location %} | `https://github.com/orgs/ORGANIZATION` |
| URL del Servicio de Consumidor de Aserciones (ACS) del SP | URL de destino, destinatario o respuesta | URL a la que el IdP enviará respuestas de SAML | `https://github.com/orgs/ORGANIZATION/saml/consume` |
| URL de inicio de sesión único (SSO) del SP | | URL en donde el IdP comienza con SSO |  `https://github.com/orgs/ORGANIZATION/saml/sso` |

### Empresas

Los metadatos del proveedor de servicios para una empresa en {% data variables.product.product_location %} están disponibles en `https://github.com/enterprises/ENTERPRISE/saml/metadata`, donde **ENTERPRISE** es el nombre de la empresa en {% data variables.product.product_location %}.

| Value | Otros nombres | Descripción | Ejemplo |
| :- | :- | :- | :- |
| ID de Entidad de SP | URL de SP, restricción de público | URL de nivel superior para la empresa en {% data variables.product.product_location %} | `https://github.com/enterprises/ENTERPRISE` |
| URL del Servicio de Consumidor de Aserciones (ACS) del SP | URL de destino, destinatario o respuesta | URL a la que el IdP enviará respuestas de SAML | `https://github.com/enterprises/ENTERPRISE/saml/consume` |
| URL de inicio de sesión único (SSO) del SP | | URL en donde el IdP comienza con SSO |  `https://github.com/enterprises/ENTERPRISE/saml/sso` |

{% elsif ghes %}

Los metadatos del proveedor de servicios para {% data variables.product.product_location %} están disponibles en `http(s)://HOSTNAME/saml/metadata`, donde **HOSTNAME** es el nombre de host de la instancia. {% data variables.product.product_name %} utiliza el enlace `urn:oasis:names:tc:SAML:2.0:bindings:HTTP-POST`.

| Value | Otros nombres | Descripción | Ejemplo |
| :- | :- | :- | :- |
| ID de Entidad de SP | URL de SP, restricción de público | URL de nivel superior para {% data variables.product.product_name %} | `http(s)://HOSTNAME`
| URL del Servicio de Consumidor de Aserciones (ACS) del SP | URL de destino, destinatario o respuesta | URL a la que el IdP enviará respuestas de SAML | `http(s)://HOSTNAME/saml/consume` |
| URL de inicio de sesión único (SSO) del SP | | URL en donde el IdP comienza con SSO |  `http(s)://HOSTNAME/sso` |

{% elsif ghae %}

Los metadatos del proveedor de servicios para la empresa {% data variables.product.product_name %} están disponibles en `https://HOSTNAME/saml/metadata`, donde **HOSTNAME** es el nombre de host para la empresa en {% data variables.product.product_name %}. {% data variables.product.product_name %} utiliza el enlace `urn:oasis:names:tc:SAML:2.0:bindings:HTTP-POST`.

| Value | Otros nombres | Descripción | Ejemplo |
| :- | :- | :- | :- |
| ID de Entidad de SP | URL de SP, restricción de público | URL de nivel superior para {% data variables.product.product_name %} | `https://HOSTNAME` |
| URL del Servicio de Consumidor de Aserciones (ACS) del SP | URL de destino, destinatario o respuesta | URL a la que el IdP enviará respuestas de SAML | `https://HOSTNAME/saml/consume` |
| URL de inicio de sesión único (SSO) del SP | | URL en donde el IdP comienza con SSO |  `https://HOSTNAME/sso` |

{% endif %}

## Atributos de SAML

Los atributos de SAML siguientes están disponibles para {% data variables.product.product_name %}.{% ifversion ghes %} Puedes cambiar los nombres de los atributos en la consola de administración, con la excepción del atributo `administrator`. Para más información, consulta "[Acceso a la consola de administración](/admin/configuration/configuring-your-enterprise/accessing-the-management-console)".{% endif %}

| Nombre | ¿Necesario? | Descripción |
| :- | :- | :- |
| `NameID` | Sí | Un identificador de usuario persistente. Se puede usar cualquier formato de identificador de nombre persistente. {% ifversion ghec %}Si usas una empresa con {% data variables.product.prodname_emus %}, {% endif %}{% data variables.product.product_name %} normalizará el elemento `NameID` para utilizarlo como nombre de usuario a menos que se proporcione una de las aserciones alternativas. Para más información, consulta "[Consideraciones sobre el nombre de usuario para la autenticación externa](/admin/identity-and-access-management/managing-iam-for-your-enterprise/username-considerations-for-external-authentication)".<br><br>{% note %} **Nota:** Es importante usar un identificador persistente y legible. El uso de un formato de identificador transitorio, como `urn:oasis:names:tc:SAML:2.0:nameid-format:transient`, volverá a vincular las cuentas en cada inicio de sesión, lo que puede ser perjudicial para la administración de la autorización.{% endnote %}  |
| `SessionNotOnOrAfter` | No | La fecha en que {% data variables.product.product_name %} invalida la sesión asociada. Después de la invalidación, la persona se debe autenticar nuevamente para acceder a {% ifversion ghec or ghae %}los recursos de la empresa{% elsif ghes %}{% data variables.product.product_location %}{% endif %}. Para más información, consulta "[Duración y tiempo de espera de la sesión](#session-duration-and-timeout)". |
{%- ifversion ghes or ghae %} | `administrator` | No | Cuando el valor es `true`, {% data variables.product.product_name %} promoverá automáticamente al usuario para que sea {% ifversion ghes %}administrador del sitio{% elsif ghae %}propietario de la empresa{% endif %}. Establecer este atributo en cualquier valor, excepto `true`, generará una disminución de nivel, siempre que el valor no esté en blanco. Omitir este atributo o dejar el valor en blanco no cambiará el rol del usuario. | | `username` | No | El nombre de usuario para {% data variables.product.product_location %}. | {%- endif %} | `full_name` | No | {% ifversion ghec %}Si configuras el inicio de sesión único de SAML para una empresa y utilizas {% data variables.product.prodname_emus %}, el {% else %}El{% endif %} nombre completo del usuario que se va a mostrar en la página de perfil del usuario. | | `emails` | No | Las direcciones de correo electrónico del usuario.{% ifversion ghes or ghae %} Puedes especificar más de una dirección.{% endif %}{% ifversion ghec or ghes %} Si sincronizas el uso de licencias entre {% data variables.product.prodname_ghe_server %} y {% data variables.product.prodname_ghe_cloud %}, {% data variables.product.prodname_github_connect %} utiliza `emails` para identificar usuarios únicos entre productos. Para más información, consulta "[Sincronización del uso de licencias entre {% data variables.product.prodname_ghe_server %} y {% data variables.product.prodname_ghe_cloud %}](/billing/managing-your-license-for-github-enterprise/syncing-license-usage-between-github-enterprise-server-and-github-enterprise-cloud)".{% endif %} | | `public_keys` | No | {% ifversion ghec %}Si configuras el inicio de sesión único de SAML para una empresa y utilizas {% data variables.product.prodname_emus %}, las{% else %}Las{% endif %} claves SSH públicas para el usuario. Puedes especificar más de una clave. | | `gpg_keys` | No | {% ifversion ghec %}Si configuras el inicio de sesión único de SAML para una empresa y utilizas {% data variables.product.prodname_emus %}, las{% else %}Las{% endif %} claves GPG para el usuario. Puedes especificar más de una clave. |

A fin de especificar más de un valor para un atributo, use varios elementos `<saml2:AttributeValue>`.

```xml
<saml2:Attribute FriendlyName="public_keys" Name="urn:oid:1.2.840.113549.1.1.1" NameFormat="urn:oasis:names:tc:SAML:2.0:attrname-format:uri">
    <saml2:AttributeValue>ssh-rsa LONG KEY</saml2:AttributeValue>
    <saml2:AttributeValue>ssh-rsa LONG KEY 2</saml2:AttributeValue>
</saml2:Attribute>
```

## Requisitos de respuesta de SAML

{% data variables.product.product_name %} requiere que el mensaje de respuesta del IdP cumpla con los requisitos siguientes.

- El IdP debe proporcionar el elemento `<Destination>` en el documento de respuesta raíz y hacer coincidir la URL de ACS únicamente cuando se firme este documento. Si el IdP firma la aserción, {% data variables.product.product_name %} la omitirá.
- El IdP siempre debe proporcionar el elemento `<Audience>` como parte del elemento `<AudienceRestriction>`. El valor debe coincidir con `EntityId` para {% data variables.product.product_name %}.{% ifversion ghes or ghae %} Este valor es la dirección URL en la que accedes a {% data variables.product.product_location %}, como {% ifversion ghes %}`http(s)://HOSTNAME`{% elsif ghae %}`https://SUBDOMAIN.githubenterprise.com`, `https://SUBDOMAIN.github.us` o `https://SUBDOMAIN.ghe.com`{% endif %}.{% endif %}
  
  {%- ifversion ghec %}
  - Si configuras SAML para una organización, este valor es `https://github.com/orgs/ORGANIZATION`.
  - Si configuras SAML para una empresa, esta dirección URL es `https://github.com/enterprises/ENTERPRISE`.
  {%- endif %}
- El IdP debe proteger cada aserción de la respuesta con una firma digital. Esto se puede lograr si se firma cada elemento `<Assertion>` individual o si se firma el elemento `<Response>`.
- El IdP debe proporcionar un elemento `<NameID>` como parte del elemento `<Subject>`. Puedes utilizar cualquier formato de identificador de nombre persistente.
- El IdP debe incluir el atributo `Recipient`, que se debe establecer en la URL de ACS. En el ejemplo siguiente, se muestra el atributo.

     ```xml
     <samlp:Response ...>
       <saml:Assertion ...>
         <saml:Subject>
           <saml:NameID ...>...</saml:NameID>
           <saml:SubjectConfirmation ...>
             <saml:SubjectConfirmationData Recipient="https://{% ifversion ghec %}github.com/enterprises/ENTERPRISE{% elsif ghes %}HOSTNAME{% elsif ghae %}SUBDOMAIN.ghe.com{% endif %}/saml/consume" .../>
           </saml:SubjectConfirmation>
         </saml:Subject>
         <saml:AttributeStatement>
           <saml:Attribute FriendlyName="USERNAME-ATTRIBUTE" ...>
             <saml:AttributeValue>monalisa</saml:AttributeValue>
           </saml:Attribute>
         </saml:AttributeStatement>
       </saml:Assertion>
     </samlp:Response>
     ```

## Duración y tiempo de espera de la sesión

Para evitar que una persona se autentique con el IdP y permanezca autorizada indefinidamente, {% data variables.product.product_name %} invalida periódicamente la sesión de cada cuenta de usuario con acceso a {% ifversion ghec or ghae %}los recursos de la empresa{% elsif ghes %}{% data variables.product.product_location %}{% endif %}. Después de la invalidación, la persona se debe volver a autenticar con el IdP. De manera predeterminada, si el IdP no declara un valor para el atributo `SessionNotOnOrAfter`, {% data variables.product.product_name %} invalida una sesión {% ifversion ghec %}24 horas{% elsif ghes or ghae %}una semana{% endif %} después de una autenticación correcta con el IdP.

Para personalizar la duración de la sesión, puedes definir el valor del atributo `SessionNotOnOrAfter` en el IdP. Si defines un valor inferior a 24 horas, {% data variables.product.product_name %} puede solicitarle a los usuarios que se autentiquen cada vez que {% data variables.product.product_name %} inicia un redireccionamiento.

{% ifversion ghec %} Para evitar errores de autenticación, se recomienda una duración de sesión mínima de 4 horas. Para obtener más información, consulta "[Solución de problemas de autenticación SAML](/admin/identity-and-access-management/using-saml-for-enterprise-iam/troubleshooting-saml-authentication#users-are-repeatedly-redirected-to-authenticate)".
{% endif %}

{% note %}

**Notas**:

- Para Azure AD, la directiva de duración configurable para los tokens SAML no controla el tiempo de espera de sesión para {% data variables.product.product_name %}.
- Actualmente, Okta no envía el atributo `SessionNotOnOrAfter` durante la autenticación SAML con {% data variables.product.product_name %}. Para más información, ponte en contacto con Okta.

{% endnote %}
