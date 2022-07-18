---
title: Username considerations for external authentication
shortTitle: Username considerations
intro: '{% ifversion ghes or ghec %}Cuando utilizas {% ifversion ghes %}CAS, LDAP o SAML para la autenticación{% elsif ghec %}{% data variables.product.prodname_emus %}{% endif %}, {% endif %}{% data variables.product.product_name %} sigue reglas específicas para determinar el nombre de usuario de cada cuenta de usuario {% ifversion ghec or ghae %}en tu empresa{% elsif ghes %}en tu instancia{% endif %}.'
miniTocMaxHeadingLevel: 3
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

{% ifversion ghec %}
{% note %}

**Note:** This article only applies to {% data variables.product.prodname_emus %}. If you use {% data variables.product.prodname_ghe_cloud %} without {% data variables.product.prodname_emus %}, usernames are created by users, not {% data variables.product.prodname_dotcom %}.

{% endnote %}
{% endif %}

## About usernames with external authentication

{% ifversion ghes %}

You can configure external authentication for {% data variables.product.product_name %} using CAS, LDAP, or SAML. Para obtener más información, consulta la sección "[Acerca de la autenticación para tu empresa](/admin/identity-and-access-management/managing-iam-for-your-enterprise/about-authentication-for-your-enterprise#authentication-methods-for-github-enterprise-server)".

When you use external authentication, {% data variables.product.product_location %} automatically creates a username for each person when the person signs into {% data variables.product.product_location %} through your external authentication system for the first time.

{% elsif ghec %}

If you use an enterprise with {% data variables.product.prodname_emus %}, members of your enterprise authenticate to access {% data variables.product.prodname_dotcom %} through your SAML identity provider (IdP). Para obtener más información, consulta las secciones"[Acerca de las {% data variables.product.prodname_emus %}](/admin/identity-and-access-management/using-enterprise-managed-users-and-saml-for-iam/about-enterprise-managed-users)" y "[Acerca de la autenticación para tu empresa](/admin/identity-and-access-management/managing-iam-for-your-enterprise/about-authentication-for-your-enterprise#authentication-methods-for-github-enterprise-server)".

{% data variables.product.product_name %} automatically creates a username for each person when their user account is provisioned via SCIM, by normalizing an identifier provided by your IdP. If multiple identifiers are normalized into the same username, a username conflict occurs, and only the first user account is created. You can resolve username conflicts by making a change in your IdP so that the normalized usernames will be unique.

{% elsif ghae %}

{% data variables.product.product_name %} uses SAML SSO for authentication, and automatically creates a username for each person when the person signs in through your identity provider (IdP) for the first time.

{% endif %}

{% ifversion ghec %}
## About usernames for {% data variables.product.prodname_managed_users %}

When your {% data variables.product.prodname_emu_enterprise %} is created, you will choose a short code that will be used as the suffix for your enterprise members' usernames. {% data reusables.enterprise-accounts.emu-shortcode %} El usuario de configuración que configure el SSO de SAML tendrá un nombre de usuario en el formato **@<em>SHORT-CODE</em>_admin**.

Cuando aprovisionas un usuario nuevo desde tu proveedor de identidad, el {% data variables.product.prodname_managed_user %} nuevo tendrá un nombre de usuario de {% data variables.product.prodname_dotcom %} en el formato de **@<em>IDP-USERNAME</em>_<em>SHORT-CODE</em>**. The <em>IDP-USERNAME</em> component is formed by normalizing the SCIM `userName` attribute value sent from the IdP.

| Proveedor de identidad            | Nombre de usuario de {% data variables.product.prodname_dotcom %}
| --------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Azure Active Directory (Azure AD) | _IDP-USERNAME_ is formed by normalizing the characters preceding the `@` character in the UPN (User Principal Name), which does not include the `#EXT#` for guest accounts. |
| Okta                              | _IDP-USERNAME_ is the normalized username attribute provided by the IdP.                                                                                                    |

These rules may result in your IdP providing the same _IDP-USERNAME_ for multiple users. For example, for Azure AD, the following UPNs will result in the same username:

- `bob@contoso.com`
- `bob@fabrikam.com`
- `bob#EXT#fabrikamcom@contoso.com`

This will cause a username conflict, and only the first user will be provisioned. For more information, see "[Resolving username conflicts](#resolving-username-conflicts)."
{% endif %}

Usernames{% ifversion ghec %}, including underscore and short code,{% endif %} must not exceed 39 characters.

## About username normalization

Usernames for user accounts on {% ifversion ghes or ghae %}{% data variables.product.product_name %}{% elsif ghec %}{% data variables.product.prodname_dotcom_the_website %}{% endif %} can only contain alphanumeric characters and dashes (`-`).

{% ifversion ghec %}
When you configure SAML authentication, {% data variables.product.product_name %} uses the SCIM `userName` attribute value sent from the IdP to determine the username for the corresponding user account on {% data variables.product.prodname_dotcom_the_website %}. If this value includes unsupported characters, {% data variables.product.product_name %} will normalize the username per the following rules.
{% elsif ghes %}
When you configure CAS, LDAP, or SAML authentication, {% data variables.product.product_name %} uses an identifier from the user account on your external authentication provider to determine the username for the corresponding user account on {% data variables.product.product_name %}. If the identifier includes unsupported characters, {% data variables.product.product_name %} will normalize the username per the following rules.
{% elsif ghae %}
When you configure SAML authentication, {% data variables.product.product_name %} uses an identifier from the user account on your IdP to determine the username for the corresponding user account on {% data variables.product.product_name %}. If the identifier includes unsupported characters, {% data variables.product.product_name %} will normalize the username per the following rules.
{% endif %}

1. El {% data variables.product.product_name %} convertirá en raya cualquier caracter no alfanumérico en el nombre de tu cuenta de usuario. For example, a username of `mona.the.octocat` will be normalized to `mona-the-octocat`. Nota que los nombres de usuarios normalizados tampoco pueden comenzar o terminar con una raya. Tampoco pueden contener dos rayas seguidas.

1. Los nombres de usuarios creados a partir de direcciones de correo electrónico se crean con los caracteres normalizados que preceden al caracter `@`.

1. Si múltiples cuentas se normalizan en el mismo nombre de usuario de {% data variables.product.product_name %}, solo se crea la primera cuenta de usuario. Los siguientes usuarios con el mismo nombre de usuario no podrán registrarse. {% ifversion ghec %}For more information, see "[Resolving username conflicts](#resolving-username-conflicts)."{% endif %}

### Examples of username normalization

| Identifier on provider                                        | Normalized username on {% data variables.product.prodname_dotcom %}                         | Resultado                                                                                                 |
|:------------------------------------------------------------- |:------------------------------------------------------------------------------------------- |:--------------------------------------------------------------------------------------------------------- |
| The.Octocat                                                   | `the-octocat{% ifversion ghec %}_SHORT-CODE{% endif %}`                                     | El nombre de usuario se crea correctamente.                                                               |
| !The.Octocat                                                  | `-the-octocat{% ifversion ghec %}_SHORT-CODE{% endif %}`                                    | No se crea este nombre de usuario debido a que comienza con una raya.                                     |
| The.Octocat!                                                  | `the-octocat-{% ifversion ghec %}_SHORT-CODE{% endif %}`                                    | No se crea este nombre de usuario debido a que termina con una raya.                                      |
| The!!Octocat                                                  | `the--octocat{% ifversion ghec %}_SHORT-CODE{% endif %}`                                    | No se crea este nombre de usuario debido a que contiene dos rayas seguidas.                               |
| The!Octocat                                                   | `the-octocat{% ifversion ghec %}_SHORT-CODE{% endif %}`                                     | No se crea este nombre de usuario. A pesar de que el nombre de usuario normalizado es válido, ya existía. |
| `The.Octocat@example.com`                                     | `the-octocat{% ifversion ghec %}_SHORT-CODE{% endif %}`                                     | No se crea este nombre de usuario. A pesar de que el nombre de usuario normalizado es válido, ya existía. |
| `mona.lisa.the.octocat.from.github.united.states@example.com` | `mona-lisa-the-octocat-from-github-united-states{% ifversion ghec %}_SHORT-CODE{% endif %}` | This username is not created, because it exceeds the 39-character limit.                                  |

{% ifversion not ghec %}
### About username normalization with SAML

{% ifversion ghes %}If you configure SAML authentication for {% data variables.product.product_location %}, {% endif %}{% data variables.product.product_name %} determines each person's username by one of the following assertions in the SAML response, ordered by descending priority.

1. The custom `username` attribute, if defined and present
1. Una aserción `http://schemas.xmlsoap.org/ws/2005/05/identity/claims/name`, si hay una.
1. Una aserción `http://schemas.xmlsoap.org/ws/2005/05/identity/claims/emailaddress` assertion, si hay una.
1. El elemento `NameID`.

{% data variables.product.product_name %} requires the `NameID` element even if other attributes are present. For more information, see "[SAML configuration reference](/admin/identity-and-access-management/using-saml-for-enterprise-iam/saml-configuration-reference#saml-attributes)."

{% data variables.product.product_name %} crea un mapeo entre la `NameID` del IdP y el nombre de usuario {% ifversion ghae %}en{% else %}en{% endif %} {% data variables.product.product_location %}, así que la `NameID` debería ser persistente, única y no estar sujeta a los cambios durante el ciclo de vida del usuario.

{% ifversion ghes %}
{% note %}

**Note**: If the `NameID` for a user does change on the IdP, the person will see an error message when signing into {% data variables.product.product_location %}. To restore the person's access, you'll need to update the user account's `NameID` mapping. Para obtener más información, consulta la sección "[Actualizar la `NameID` de SAML de un usuario](/admin/identity-and-access-management/using-saml-for-enterprise-iam/updating-a-users-saml-nameid)".

{% endnote %}
{% endif %}
{% endif %}

{% ifversion ghec %}
## Resolving username conflicts

When a new user is being provisioned, if the user's normalized username conflicts with an existing user in the enterprise, the provisioning attempt will fail with a `409` error.

To resolve this problem, you must make a change in your IdP so that the normalized usernames will be unique. If you cannot change the identifier that's being normalized, you can change the attribute mapping for the `userName` attribute. If you change the attribute mapping, usernames of existing {% data variables.product.prodname_managed_users %} will be updated, but nothing else about the accounts will change, including activity history.

{% note %}

**Note:** {% data variables.contact.github_support %} cannot provide assistance with customizing attribute mappings or configuring custom expressions. You can contact your IdP with any questions.

{% endnote %}

### Resolving username conflicts with Azure AD

To resolve username conflicts in Azure AD, either modify the User Principal Name value for the conflicting user or modify the attribute mapping for the `userName` attribute. If you modify the attribute mapping, you can choose an existing attribute or use an expression to ensure that all provisioned users have a unique normalized alias.

1. In Azure AD, open the {% data variables.product.prodname_emu_idp_application %} application.
1. In the left sidebar, click **Provisioning**.
1. Click **Edit Provisioning**.
1. Expand **Mappings**, then click **Provision Azure Active Directory Users**.
1. Click the {% data variables.product.prodname_dotcom %} `userName` attribute mapping.
1. Change the attribute mapping.
   - To map an existing attribute in Azure AD to the `userName` attribute in {% data variables.product.prodname_dotcom %}, click your desired attribute field. Then, save and wait for a provisioning cycle to occur within about 40 minutes.
   - To use an expression instead of an existing attribute, change the Mapping type to "Expression", then add a custom expression that will make this value unique for all users. For example, you could use `[FIRST NAME]-[LAST NAME]-[EMPLOYEE ID]`. For more information, see [Reference for writing expressions for attribute mappings in Azure Active Directory](https://docs.microsoft.com/en-us/azure/active-directory/app-provisioning/functions-for-customizing-application-data) in Microsoft Docs.

### Resolving username conflicts with Okta

To resolve username conflicts in Okta, update the attribute mapping settings for the {% data variables.product.prodname_emu_idp_application %} application.

1. In Okta, open the {% data variables.product.prodname_emu_idp_application %} application.
1. Haz clic en **Iniciar sesión**.
1. In the "Settings" section, click **Edit**.
1. Update the "Application username format."
{% endif %}
