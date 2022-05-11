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

{% ifversion ghec %}
{% note %}

**Note:** This article only applies to {% data variables.product.prodname_emus %}. If you use {% data variables.product.prodname_ghe_cloud %} without {% data variables.product.prodname_emus %}, usernames are created by users, not {% data variables.product.prodname_dotcom %}.

{% endnote %}
{% endif %}

## Sobre nomes de usuário com autenticação externa

{% ifversion ghes %}

Você pode configurar a autenticação externa para {% data variables.product.product_name %}, usando o CAS, LDAP ou SAML. Para obter mais informações, consulte "[Sobre a autenticação para sua empresa](/admin/identity-and-access-management/managing-iam-for-your-enterprise/about-authentication-for-your-enterprise#authentication-methods-for-github-enterprise-server)".

Ao usar a autenticação externa, {% data variables.product.product_location %} cria automaticamente um nome de usuário para cada pessoa quando esta efetua o login em {% data variables.product.product_location %} por meio do seu sistema de autenticação externa pela primeira vez.

{% elsif ghec %}

Se você usar uma empresa com {% data variables.product.prodname_emus %}, os integrantes da sua empresa irão efetuar a autenticação para acessar {% data variables.product.prodname_dotcom %} por meio do seu provedor de identidade (IdP) do SAML. For more information, see "[About {% data variables.product.prodname_emus %}](/admin/identity-and-access-management/using-enterprise-managed-users-and-saml-for-iam/about-enterprise-managed-users)" and "[About authentication for your enterprise](/admin/identity-and-access-management/managing-iam-for-your-enterprise/about-authentication-for-your-enterprise#authentication-methods-for-github-enterprise-server)."

{% data variables.product.product_name %} automatically creates a username for each person when their user account is provisioned via SCIM, by normalizing an identifier provided by your IdP. If multiple identifiers are normalized into the same username, a username conflict occurs, and only the first user account is created. You can resolve username conflicts by making a change in your IdP so that the normalized usernames will be unique.

{% elsif ghae %}

{% data variables.product.product_name %} usa o SAML SSO para autenticação e cria automaticamente um nome de usuário para cada pessoa quando efetua o login por meio do seu provedor de identidade (IdP) pela primeira vez.

{% endif %}

{% ifversion ghec %}
## About usernames for {% data variables.product.prodname_managed_users %}

When your {% data variables.product.prodname_emu_enterprise %} is created, you will choose a short code that will be used as the suffix for your enterprise members' usernames. {% data reusables.enterprise-accounts.emu-shortcode %} O usuário configurado que configurar o SAML SSO terá um nome de usuário no formato de **@<em>SHORT-CODE</em>_admin**.

Ao fornecer um novo usuário a partir do provedor de identidade, o novo {% data variables.product.prodname_managed_user %} terá um nome de usuário de {% data variables.product.prodname_dotcom %} no formato de **@<em>IDP-USERNAME</em>_<em>SHORT-CODE</em>**. The <em>IDP-USERNAME</em> component is formed by normalizing the SCIM `userName` attribute value sent from the IdP.

| Provedor de identidade            | Nome de usuário de {% data variables.product.prodname_dotcom %}
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

## Sobre a normalização de usuário

Os nomes de usuário para contas de usuário em {% ifversion ghes or ghae %}{% data variables.product.product_name %}{% elsif ghec %}{% data variables.product.prodname_dotcom_the_website %}{% endif %} podem conter apenas caracteres alfanuméricos e traços (`-`).

{% ifversion ghec %}
When you configure SAML authentication, {% data variables.product.product_name %} uses the SCIM `userName` attribute value sent from the IdP to determine the username for the corresponding user account on {% data variables.product.prodname_dotcom_the_website %}. If this value includes unsupported characters, {% data variables.product.product_name %} will normalize the username per the following rules.
{% elsif ghes %}
When you configure CAS, LDAP, or SAML authentication, {% data variables.product.product_name %} uses an identifier from the user account on your external authentication provider to determine the username for the corresponding user account on {% data variables.product.product_name %}. If the identifier includes unsupported characters, {% data variables.product.product_name %} will normalize the username per the following rules.
{% elsif ghae %}
When you configure SAML authentication, {% data variables.product.product_name %} uses an identifier from the user account on your IdP to determine the username for the corresponding user account on {% data variables.product.product_name %}. If the identifier includes unsupported characters, {% data variables.product.product_name %} will normalize the username per the following rules.
{% endif %}

1. {% data variables.product.product_name %} normalizará qualquer caractere não alfanumérico do nome de usuário da sua conta em um traço. Por exemplo, um nome de usuário de `mona.the.octocat` será normalizado para `mona-the-octocat`. Observe que nomes de usuários normalizados também não podem iniciar ou terminar com um traço. Eles também não podem conter dois traços consecutivos.

1. Nomes de usuário criados a partir de endereços de e-mail são criados a partir dos caracteres normalizados que precedem o caractere `@`.

1. Se várias contas forem normalizadas para o mesmo nome de usuário {% data variables.product.product_name %}, será criada apenas a primeira conta de usuário. Usuários subsequentes com o mesmo nome de usuário não serão capazes de fazer o login. {% ifversion ghec %}For more information, see "[Resolving username conflicts](#resolving-username-conflicts)."{% endif %}

### Exemplos de normalização de nome de usuário

| Identificador no provedor                                     | Normalized username on {% data variables.product.prodname_dotcom %}                         | Resultado                                                                                           |
|:------------------------------------------------------------- |:------------------------------------------------------------------------------------------- |:--------------------------------------------------------------------------------------------------- |
| The.Octocat                                                   | `the-octocat{% ifversion ghec %}_SHORT-CODE{% endif %}`                                     | Nome de usuário criado com sucesso.                                                                 |
| !The.Octocat                                                  | `-the-octocat{% ifversion ghec %}_SHORT-CODE{% endif %}`                                    | Este nome de usuário não é criado, porque começa com um traço.                                      |
| The.Octocat!                                                  | `the-octocat-{% ifversion ghec %}_SHORT-CODE{% endif %}`                                    | Este nome de usuário não é criado, porque termina com um traço.                                     |
| The!!Octocat                                                  | `the--octocat{% ifversion ghec %}_SHORT-CODE{% endif %}`                                    | Este nome de usuário não é criado, porque contém dois traços consecutivos.                          |
| The!Octocat                                                   | `the-octocat{% ifversion ghec %}_SHORT-CODE{% endif %}`                                     | Este nome de usuário não é criado. Embora o nome de usuário normalizado seja válido, ele já existe. |
| `The.Octocat@example.com`                                     | `the-octocat{% ifversion ghec %}_SHORT-CODE{% endif %}`                                     | Este nome de usuário não é criado. Embora o nome de usuário normalizado seja válido, ele já existe. |
| `mona.lisa.the.octocat.from.github.united.states@example.com` | `mona-lisa-the-octocat-from-github-united-states{% ifversion ghec %}_SHORT-CODE{% endif %}` | This username is not created, because it exceeds the 39-character limit.                            |

{% ifversion not ghec %}
### Sobre a normalização de usuário com SAML

{% ifversion ghes %}If you configure SAML authentication for {% data variables.product.product_location %}, {% endif %}{% data variables.product.product_name %} determines each person's username by one of the following assertions in the SAML response, ordered by descending priority.

1. O atributo `de nome de usuário` personalizado, se definido e presente
1. Declaração `http://schemas.xmlsoap.org/ws/2005/05/identity/claims/name`, se houver;
1. Declaração `http://schemas.xmlsoap.org/ws/2005/05/identity/claims/emailaddress`, se houver;
1. Elemento `NameID`.

{% data variables.product.product_name %} exige o elemento `NameID` mesmo que outros atributos estejam presentes. Para obter mais informações, consulte "[Referência de configuração do SAML](/admin/identity-and-access-management/using-saml-for-enterprise-iam/saml-configuration-reference#saml-attributes)".

{% data variables.product.product_name %} cria um mapeamento entre `NameID` do IdP e o nome de usuário {% ifversion ghae %}em{% else %}em{% endif %} {% data variables.product.product_location %}. Portanto, o `NameID` deve ser persistente, único e não sujeito a alterações para o ciclo de vida do usuário.

{% ifversion ghes %}
{% note %}

**Note**: If the `NameID` for a user does change on the IdP, the person will see an error message when signing into {% data variables.product.product_location %}. Para restaurar o acesso da pessoa, você deverá atualizar o mapeamento de `NameID` da conta do usuário. Para obter mais informações, consulte "[Atualizando `NameID`](/admin/identity-and-access-management/using-saml-for-enterprise-iam/updating-a-users-saml-nameid) do SAML de um usuário."

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
1. Clique em **Iniciar sessão em**.
1. In the "Settings" section, click **Edit**.
1. Update the "Application username format."
{% endif %}
