---
title: SAML configuration reference
shortTitle: SAML reference
intro: 'Puedes ver los metadatos de SAML para {% ifversion ghec %}tu organización o empresa en {% data variables.product.product_name %}{% elsif ghes %}{% data variables.product.product_location %}{% elsif ghae %}tu empresa en {% data variables.product.product_name %}{% endif %} y puedes aprender más sobre los atributos disponibles de SAML y los requisitos de respuesta.'
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
---

## About SAML configuration

Para utilizar el inicio de sesión único (SSO) de SAML para autenticarse en {% data variables.product.product_name %}, debes configurar tanto tu proveedor de identidad (IdP) externo de SAML como {% ifversion ghes %}{% data variables.product.product_location %}{% elsif ghec %}tu empresa u organización en {% data variables.product.product_location %}{% elsif ghae %}tu empresa en {% data variables.product.product_name %}{% endif %}. In a SAML configuration, {% data variables.product.product_name %} functions as a SAML service provider (SP).

You must enter unique values from your SAML IdP when configuring SAML SSO for {% data variables.product.product_name %}, and you must also enter unique values from {% data variables.product.product_name %} on your IdP. Para obtener más información sobre la configuración del SSO de SAML para {% data variables.product.product_name %}, consulta la sección "[Configurar el inicio de sesión único de SAML para tu empresa](/admin/identity-and-access-management/managing-iam-for-your-enterprise/configuring-saml-single-sign-on-for-your-enterprise){% ifversion ghes or ghae %}{% elsif ghec %}" o "[Habilitar y probar el inicio de sesión único de SAML para tu organización](/organizations/managing-saml-single-sign-on-for-your-organization/enabling-and-testing-saml-single-sign-on-for-your-organization){% endif %}".

## Metadatos SAML

{% ifversion ghec %}

The SP metadata for {% data variables.product.product_name %} is available for either organizations or enterprises with SAML SSO. {% data variables.product.product_name %} uses the `urn:oasis:names:tc:SAML:2.0:bindings:HTTP-POST` binding.

### Organizaciones

You can configure SAML SSO for an individual organization in your enterprise. You can also configure SAML SSO for an organization if you use an individual organization on {% data variables.product.product_name %} and do not use an enterprise account. For more information, see "[Managing SAML single sign-on for your organization](/organizations/managing-saml-single-sign-on-for-your-organization)."

The SP metadata for an organization on {% data variables.product.product_location %} is available at `https://github.com/orgs/ORGANIZATION/saml/metadata`, where **ORGANIZATION** is the name of your organization on {% data variables.product.product_location %}.

| Valor                                                     | Otros nombres                        | Descripción                                                                              | Ejemplo                                             |
|:--------------------------------------------------------- |:------------------------------------ |:---------------------------------------------------------------------------------------- |:--------------------------------------------------- |
| ID de Entidad de SP                                       | SP URL, audience restriction         | The top-level URL for your organization on {% data variables.product.product_location %} | `https://github.com/orgs/ORGANIZATION`              |
| URL del Servicio de Consumidor de Aserciones (ACS) del SP | Reply, recipient, or destination URL | URL a la que el IdP enviará respuestas de SAML                                           | `https://github.com/orgs/ORGANIZATION/saml/consume` |
| URL de inicio de sesión único (SSO) del SP                |                                      | URL en donde el IdP comienza con SSO                                                     | `https://github.com/orgs/ORGANIZATION/saml/sso`     |

### Enterprises

The SP metadata for an enterprise on {% data variables.product.product_location %} is available at `https://github.com/enterprises/ENTERPRISE/saml/metadata`, where **ENTERPRISE** is the name of your enterprise on {% data variables.product.product_location %}.

| Valor                                                     | Otros nombres                            | Descripción                                                                            | Ejemplo                                                  |
|:--------------------------------------------------------- |:---------------------------------------- |:-------------------------------------------------------------------------------------- |:-------------------------------------------------------- |
| ID de Entidad de SP                                       | URL de SP, restricción de la audiencia   | The top-level URL for your enterprise on {% data variables.product.product_location %} | `https://github.com/enterprises/ENTERPRISE`              |
| URL del Servicio de Consumidor de Aserciones (ACS) del SP | URL de respuesta, receptora o de destino | URL a la que el IdP enviará respuestas de SAML                                         | `https://github.com/enterprises/ENTERPRISE/saml/consume` |
| URL de inicio de sesión único (SSO) del SP                |                                          | URL en donde el IdP comienza con SSO                                                   | `https://github.com/enterprises/ENTERPRISE/saml/sso`     |

{% elsif ghes %}

The SP metadata for {% data variables.product.product_location %} is available at `http(s)://HOSTNAME/saml/metadata`, where **HOSTNAME** is the hostname for your instance. {% data variables.product.product_name %} utiliza el enlace `urn:oasis:names:tc:SAML:2.0:bindings:HTTP-POST`.

| Valor                                                     | Otros nombres                            | Descripción                                                      | Ejemplo                           |
|:--------------------------------------------------------- |:---------------------------------------- |:---------------------------------------------------------------- |:--------------------------------- |
| ID de Entidad de SP                                       | URL de SP, restricción de la audiencia   | Your top-level URL for {% data variables.product.product_name %} | `http(s)://HOSTNAME`              |
| URL del Servicio de Consumidor de Aserciones (ACS) del SP | URL de respuesta, receptora o de destino | URL a la que el IdP enviará respuestas de SAML                   | `http(s)://HOSTNAME/saml/consume` |
| URL de inicio de sesión único (SSO) del SP                |                                          | URL en donde el IdP comienza con SSO                             | `http(s)://HOSTNAME/sso`          |

{% elsif ghae %}

The SP metadata for your enterprise on {% data variables.product.product_name %} is available at `https://HOSTNAME/saml/metadata`, where **HOSTNAME** is the hostname for your enterprise on {% data variables.product.product_name %}. {% data variables.product.product_name %} utiliza el enlace `urn:oasis:names:tc:SAML:2.0:bindings:HTTP-POST`.

| Valor                                                     | Otros nombres                            | Descripción                                                             | Ejemplo                         |
|:--------------------------------------------------------- |:---------------------------------------- |:----------------------------------------------------------------------- |:------------------------------- |
| ID de Entidad de SP                                       | URL de SP, restricción de la audiencia   | Tu URL de más alto nivel para {% data variables.product.product_name %} | `https://HOSTNAME`              |
| URL del Servicio de Consumidor de Aserciones (ACS) del SP | URL de respuesta, receptora o de destino | URL a la que el IdP enviará respuestas de SAML                          | `https://HOSTNAME/saml/consume` |
| URL de inicio de sesión único (SSO) del SP                |                                          | URL en donde el IdP comienza con SSO                                    | `https://HOSTNAME/sso`          |

{% endif %}

## Atributos de SAML

The following SAML attributes are available for {% data variables.product.product_name %}.{% ifversion ghes %} You can change the attribute names in the management console, with the exception of the `administrator` attribute. For more information, see "[Accessing the management console](/admin/configuration/configuring-your-enterprise/accessing-the-management-console)."{% endif %}

| Nombre                | Required? | Descripción                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
|:--------------------- |:--------- |:------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `ID del nombre`       | Sí        | Un identificador de usuario persistente. Se puede usar cualquier formato de identificador de nombre persistente. {% ifversion ghec %}If you use an enterprise with {% data variables.product.prodname_emus %}, {% endif %}{% data variables.product.product_name %} will normalize the `NameID` element to use as a username unless one of the alternative assertions is provided. Para obtener más información, consulta la sección "[Consideraciones de nombre de usuario para la autenticación externa](/admin/identity-and-access-management/managing-iam-for-your-enterprise/username-considerations-for-external-authentication)". |
| `SessionNotOnOrAfter` | No        | The date that {% data variables.product.product_name %} invalidates the associated session. After invalidation, the person must authenticate once again to access {% ifversion ghec or ghae %}your enterprise's resources{% elsif ghes %}{% data variables.product.product_location %}{% endif %}. For more information, see "[Session duration and timeout](#session-duration-and-timeout)."                                                                                                                                                                                                                                            |
{%- ifversion ghes or ghae %}
| `administrator` | No | When the value is `true`, {% data variables.product.product_name %} will automatically promote the user to be a {% ifversion ghes %}site administrator{% elsif ghae %}enterprise owner{% endif %}. Any other value or a non-existent value will demote the account and remove administrative access. | | `username` | No | The username for {% data variables.product.product_location %}. |
{%- endif %}
| `full_name` | No | {% ifversion ghec %}If you configure SAML SSO for an enterprise and you use {% data variables.product.prodname_emus %}, the{% else %}The{% endif %} full name of the user to display on the user's profile page. | | `emails` | No | Las direcciones de correo electrónico del usuario.{% ifversion ghes or ghae %} Puedes especificar más de una dirección.{% endif %}{% ifversion ghec or ghes %} Si sincronizas el uso de licencias entre {% data variables.product.prodname_ghe_server %} y {% data variables.product.prodname_ghe_cloud %}, {% data variables.product.prodname_github_connect %} utiliza `emails` para identificar a los usuarios únicos entre los productos. Para obtener más información, consulta la sección "[Sincronizar el uso de licencias entre {% data variables.product.prodname_ghe_server %} y {% data variables.product.prodname_ghe_cloud %}](/billing/managing-your-license-for-github-enterprise/syncing-license-usage-between-github-enterprise-server-and-github-enterprise-cloud)".{% endif %} | | `public_keys` | No | {% ifversion ghec %}Si configuras el SSO de SAML para una empresa y utilizas {% data variables.product.prodname_emus %}, las{% else %}Las{% endif %}llaves SSH públicas para el usuario. You can specify more than one key. | | `gpg_keys` | No | {% ifversion ghec %}If you configure SAML SSO for an enterprise and you use {% data variables.product.prodname_emus %}, the{% else %}The{% endif %} GPG keys for the user. Puedes especificar más de una clave. |

Para especificar más de un valor para un atributo, utiliza elementos múltiples de `<saml2:AttributeValue>`.

```xml
<saml2:Attribute FriendlyName="public_keys" Name="urn:oid:1.2.840.113549.1.1.1" NameFormat="urn:oasis:names:tc:SAML:2.0:attrname-format:uri">
    <saml2:AttributeValue>ssh-rsa LONG KEY</saml2:AttributeValue>
    <saml2:AttributeValue>ssh-rsa LONG KEY 2</saml2:AttributeValue>
</saml2:Attribute>
```

## SAML response requirements

{% data variables.product.product_name %} requires that the response message from your IdP fulfill the following requirements.

- Your IdP must provide the `<Destination>` element on the root response document and match the ACS URL only when the root response document is signed. If your IdP signs the assertion, {% data variables.product.product_name %} will ignore the assertion.
- Your IdP must always provide the `<Audience>` element as part of the `<AudienceRestriction>` element. El valor debe empatar con tu `EntityId` para {% data variables.product.product_name %}.{% ifversion ghes or ghae %} Este valor es la URL en donde accedes a {% data variables.product.product_location %}, tal como {% ifversion ghes %}`http(s)://HOSTNAME`{% elsif ghae %}`https://SUBDOMAIN.githubenterprise.com`, `https://SUBDOMAIN.github.us` o `https://SUBDOMAIN.ghe.com`{% endif %}.{% endif %}

  {%- ifversion ghec %}
  - If you configure SAML for an organization, this value is `https://github.com/orgs/ORGANIZATION`.
  - If you configure SAML for an enterprise, this URL is `https://github.com/enterprises/ENTERPRISE`.
  {%- endif %}
- Your IdP must protect each assertion in the response with a digital signature. You can accomplish this by signing each individual `<Assertion>` element or by signing the `<Response>` element.
- Your IdP must provide a `<NameID>` element as part of the `<Subject>` element. You may use any persistent name identifier format.
- Your IdP must include the `Recipient` attribute, which must be set to the ACS URL. The following example demonstrates the attribute.

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

## Session duration and timeout

Para prevenir que una persona se autentique con tu IdP y se mantenga autorizad por tiempo indefinido, {% data variables.product.product_name %} invalida con frecuencia la sesión de cada cuenta de usuario con acceso a {% ifversion ghec or ghae %}los recursos de tu empresa{% elsif ghes %}{% data variables.product.product_location %}{% endif %}. After invalidation, the person must authenticate with your IdP once again. By default, if your IdP does not assert a value for the `SessionNotOnOrAfter` attribute, {% data variables.product.product_name %} invalidates a session {% ifversion ghec %}24 hours{% elsif ghes or ghae %}one week{% endif %} after successful authentication with your IdP.

To customize the session duration, you may be able to define the value of the `SessionNotOnOrAfter` attribute on your IdP. If you define a value less than 24 hours, {% data variables.product.product_name %} may prompt people to authenticate every time {% data variables.product.product_name %} initiates a redirect.

{% note %}

**Notas**:

- For Azure AD, the configurable lifetime policy for SAML tokens does not control session timeout for {% data variables.product.product_name %}.
- Okta does not currently send the `SessionNotOnOrAfter` attribute during SAML authentication with {% data variables.product.product_name %}. For more information, contact Okta.

{% endnote %}
