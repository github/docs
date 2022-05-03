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

## About usernames with external authentication

{% ifversion ghes %}

You can configure external authentication for {% data variables.product.product_name %} using CAS, LDAP, or SAML. For more information, see "[About authentication for your enterprise](/admin/identity-and-access-management/managing-iam-for-your-enterprise/about-authentication-for-your-enterprise#authentication-methods-for-github-enterprise-server)."

When you use external authentication, {% data variables.product.product_location %} automatically creates a username for each person when the person signs into {% data variables.product.product_location %} through your external authentication system for the first time.

{% elsif ghec %}

If you use an enterprise with {% data variables.product.prodname_emus %}, members of your enterprise authenticate to access {% data variables.product.prodname_dotcom %} through your SAML identity provider (IdP). Para obtener más información, consulta la sección "[Acerca de la autenticación para tu empresa](/admin/identity-and-access-management/managing-iam-for-your-enterprise/about-authentication-for-your-enterprise#authentication-methods-for-github-enterprise-server)".

{% data variables.product.product_name %} automatically creates a username for each person when the person signs in through your IdP for the first time.

{% elsif ghae %}

{% data variables.product.product_name %} uses SAML SSO for authentication, and automatically creates a username for each person when the person signs in through your identity provider (IdP) for the first time.

{% endif %}

## About username normalization

Usernames for user accounts on {% ifversion ghes or ghae %}{% data variables.product.product_name %}{% elsif ghec %}{% data variables.product.prodname_dotcom_the_website %}{% endif %} can only contain alphanumeric characters and dashes (`-`).

{% ifversion ghec or ghes %}Cuando configuras la autenticación con {% ifversion ghes %}CAS, LDAP o {% endif %}SAML, {% endif %}{% data variables.product.product_name %} utiliza un identificador desde la cuenta de usuario en tu {% ifversion ghes %}proveedor de autenticación externo{% elsif ghec or ghae %}IdP{% endif %} para determinar el nombre de usuario de la cuenta del usuario correspondiente en {% ifversion ghes or ghae %}{% data variables.product.product_name %}{% elsif ghec %}{% data variables.product.prodname_dotcom_the_website %}{% endif %}. If the identifier for the account on your provider includes unsupported characters, {% data variables.product.product_name %} will normalize the username per the following rules.

1. {% data variables.product.product_name %} will normalize any non-alphanumeric character in your account's username into a dash. For example, a username of `mona.the.octocat` will be normalized to `mona-the-octocat`. Nota que los nombres de usuarios normalizados tampoco pueden comenzar o terminar con una raya. Tampoco pueden contener dos rayas seguidas.

1. Los nombres de usuarios creados a partir de direcciones de correo electrónico se crean con los caracteres normalizados que preceden al caracter `@`.

1. If multiple accounts are normalized into the same {% data variables.product.product_name %} username, only the first user account is created. Los siguientes usuarios con el mismo nombre de usuario no podrán registrarse.

### Examples of username normalization

| Identifier on provider  | Normalized username for {% data variables.product.product_location %} | Resultado                                                                                                 |
|:----------------------- |:--------------------------------------------------------------------- |:--------------------------------------------------------------------------------------------------------- |
| The.Octocat             | `the-octocat`                                                         | El nombre de usuario se crea correctamente.                                                               |
| !The.Octocat            | `-the-octocat`                                                        | No se crea este nombre de usuario debido a que comienza con una raya.                                     |
| The.Octocat!            | `the-octocat-`                                                        | No se crea este nombre de usuario debido a que termina con una raya.                                      |
| The!!Octocat            | `the--octocat`                                                        | No se crea este nombre de usuario debido a que contiene dos rayas seguidas.                               |
| The!Octocat             | `the-octocat`                                                         | No se crea este nombre de usuario. A pesar de que el nombre de usuario normalizado es válido, ya existía. |
| The.Octocat@example.com | `the-octocat`                                                         | No se crea este nombre de usuario. A pesar de que el nombre de usuario normalizado es válido, ya existía. |

### About username normalization with SAML

{% ifversion ghec or ghes %}If you {% ifversion ghec %}use an enterprise with {% data variables.product.prodname_emus %}, you must use SAML authentication. {% else %}configure SAML authentication for {% data variables.product.product_location %}, {% endif %}{% endif %}{% data variables.product.product_name %} determines each person's username by one of the following assertions in the SAML response, ordered by priority.

1. The custom `username` attribute, if defined and present
1. Una aserción `http://schemas.xmlsoap.org/ws/2005/05/identity/claims/name`, si hay una.
1. Una aserción `http://schemas.xmlsoap.org/ws/2005/05/identity/claims/emailaddress` assertion, si hay una.
1. El elemento `NameID`.

{% data variables.product.product_name %} requires the `NameID` element even if other attributes are present. For more information, see "[SAML configuration reference](/admin/identity-and-access-management/using-saml-for-enterprise-iam/saml-configuration-reference#saml-attributes)."

{% data variables.product.product_name %} crea un mapeo entre la `NameID` del IdP y el nombre de usuario {% ifversion ghec or ghae %}en{% elsif ghes %}en{% endif %} {% data variables.product.product_location %}, así que la `NameID` debería ser persistente, única y no estar sujeta a los cambios durante el ciclo de vida del usuario.

{% ifversion ghes %}
{% note %}

**Note**: If the `NameID` for a user does change on the IdP, the person will see an error message when {% ifversion ghec %}authenticating through your IdP to access your resources on{% else %}signing into{% endif} {% data variables.product.product_location %}. To restore the person's access, you'll need to update the user account's `NameID` mapping. For more information, see "[Updating a user's SAML `NameID`](/admin/identity-and-access-management/using-saml-for-enterprise-iam/updating-a-users-saml-nameid)."

{% endnote %}
{% endif %}
