---
title: Considerações de nome de usuário para autenticação externa
shortTitle: Considerações de nome de usuário
intro: '{% ifversion ghes or ghec %}Ao usar {% ifversion ghes %}CAS, LDAP ou SAML para autenticação{% elsif ghec %}{% data variables.product.prodname_emus %}{% endif %}, {% endif %}{% data variables.product.product_name %} irá seguir certas regras para determinar o nome de usuário para cada conta {% ifversion ghec or ghae %}na sua empresa{% elsif ghes %}na sua instância{% endif %}.'
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

## Sobre nomes de usuário com autenticação externa

{% ifversion ghes %}

Você pode configurar a autenticação externa para {% data variables.product.product_name %}, usando o CAS, LDAP ou SAML. Para obter mais informações, consulte "[Sobre a autenticação para sua empresa](/admin/identity-and-access-management/managing-iam-for-your-enterprise/about-authentication-for-your-enterprise#authentication-methods-for-github-enterprise-server)".

Ao usar a autenticação externa, {% data variables.product.product_location %} cria automaticamente um nome de usuário para cada pessoa quando esta efetua o login em {% data variables.product.product_location %} por meio do seu sistema de autenticação externa pela primeira vez.

{% elsif ghec %}

Se você usar uma empresa com {% data variables.product.prodname_emus %}, os integrantes da sua empresa irão efetuar a autenticação para acessar {% data variables.product.prodname_dotcom %} por meio do seu provedor de identidade (IdP) do SAML. Para obter mais informações, consulte "[Sobre a autenticação para sua empresa](/admin/identity-and-access-management/managing-iam-for-your-enterprise/about-authentication-for-your-enterprise#authentication-methods-for-github-enterprise-server)".

{% data variables.product.product_name %} cria automaticamente um nome de usuário para cada pessoa quando esta efetua o login pelo seu IdP pela primeira vez.

{% elsif ghae %}

{% data variables.product.product_name %} usa o SAML SSO para autenticação e cria automaticamente um nome de usuário para cada pessoa quando efetua o login por meio do seu provedor de identidade (IdP) pela primeira vez.

{% endif %}

## Sobre a normalização de usuário

Os nomes de usuário para contas de usuário em {% ifversion ghes or ghae %}{% data variables.product.product_name %}{% elsif ghec %}{% data variables.product.prodname_dotcom_the_website %}{% endif %} podem conter apenas caracteres alfanuméricos e traços (`-`).

{% ifversion ghec or ghes %}Ao configurar {% ifversion ghes %}autenticação de CAS, LDAP ou {% endif %}SAML, {% endif %}{% data variables.product.product_name %} usa um identificador da conta de usuário em seu provedor de autenticação externa {% ifversion ghes %}{% elsif ghec or ghae %}IdP{% endif %} para determinar o nome de usuário da conta de usuário correspondente em {% ifversion ghes or ghae %}{% data variables.product.product_name %}{% elsif ghec %}{% data variables.product.prodname_dotcom_the_website %}{% endif %}. If the identifier for the account on your provider includes unsupported characters, {% data variables.product.product_name %} will normalize the username per the following rules.

1. {% data variables.product.product_name %} will normalize any non-alphanumeric character in your account's username into a dash. For example, a username of `mona.the.octocat` will be normalized to `mona-the-octocat`. Observe que nomes de usuários normalizados também não podem iniciar ou terminar com um traço. Eles também não podem conter dois traços consecutivos.

1. Nomes de usuário criados a partir de endereços de e-mail são criados a partir dos caracteres normalizados que precedem o caractere `@`.

1. If multiple accounts are normalized into the same {% data variables.product.product_name %} username, only the first user account is created. Usuários subsequentes com o mesmo nome de usuário não serão capazes de fazer o login.

### Examples of username normalization

| Identifier on provider  | Normalized username for {% data variables.product.product_location %} | Resultado                                                                                           |
|:----------------------- |:--------------------------------------------------------------------- |:--------------------------------------------------------------------------------------------------- |
| The.Octocat             | `the-octocat`                                                         | Nome de usuário criado com sucesso.                                                                 |
| !The.Octocat            | `-the-octocat`                                                        | Este nome de usuário não é criado, porque começa com um traço.                                      |
| The.Octocat!            | `the-octocat-`                                                        | Este nome de usuário não é criado, porque termina com um traço.                                     |
| The!!Octocat            | `the--octocat`                                                        | Este nome de usuário não é criado, porque contém dois traços consecutivos.                          |
| The!Octocat             | `the-octocat`                                                         | Este nome de usuário não é criado. Embora o nome de usuário normalizado seja válido, ele já existe. |
| The.Octocat@example.com | `the-octocat`                                                         | Este nome de usuário não é criado. Embora o nome de usuário normalizado seja válido, ele já existe. |

### About username normalization with SAML

{% ifversion ghec or ghes %}If you {% ifversion ghec %}use an enterprise with {% data variables.product.prodname_emus %}, you must use SAML authentication. {% else %}configure SAML authentication for {% data variables.product.product_location %}, {% endif %}{% endif %}{% data variables.product.product_name %} determines each person's username by one of the following assertions in the SAML response, ordered by priority.

1. The custom `username` attribute, if defined and present
1. Declaração `http://schemas.xmlsoap.org/ws/2005/05/identity/claims/name`, se houver;
1. Declaração `http://schemas.xmlsoap.org/ws/2005/05/identity/claims/emailaddress`, se houver;
1. Elemento `NameID`.

{% data variables.product.product_name %} requires the `NameID` element even if other attributes are present. For more information, see "[SAML configuration reference](/admin/identity-and-access-management/using-saml-for-enterprise-iam/saml-configuration-reference#saml-attributes)."

{% data variables.product.product_name %} creates a mapping between the `NameID` from the IdP and the username {% ifversion ghec or ghae %}in{% elsif ghes %}on{% endif %} {% data variables.product.product_location %}, so the `NameID` should be persistent, unique, and not subject to change for the lifecycle of the user.

{% ifversion ghes %}
{% note %}

**Note**: If the `NameID` for a user does change on the IdP, the person will see an error message when {% ifversion ghec %}authenticating through your IdP to access your resources on{% else %}signing into{% endif} {% data variables.product.product_location %}. To restore the person's access, you'll need to update the user account's `NameID` mapping. For more information, see "[Updating a user's SAML `NameID`](/admin/identity-and-access-management/using-saml-for-enterprise-iam/updating-a-users-saml-nameid)."

{% endnote %}
{% endif %}
