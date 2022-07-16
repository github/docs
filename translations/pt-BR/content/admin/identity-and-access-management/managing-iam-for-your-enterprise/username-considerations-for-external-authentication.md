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

**Observação:** Este artigo aplica-se apenas a {% data variables.product.prodname_emus %}. Se você usa {% data variables.product.prodname_ghe_cloud %} sem {% data variables.product.prodname_emus %}, os nomes de usuário são criados por usuários, não por {% data variables.product.prodname_dotcom %}.

{% endnote %}
{% endif %}

## Sobre nomes de usuário com autenticação externa

{% ifversion ghes %}

Você pode configurar a autenticação externa para {% data variables.product.product_name %}, usando o CAS, LDAP ou SAML. Para obter mais informações, consulte "[Sobre a autenticação para sua empresa](/admin/identity-and-access-management/managing-iam-for-your-enterprise/about-authentication-for-your-enterprise#authentication-methods-for-github-enterprise-server)".

Ao usar a autenticação externa, {% data variables.product.product_location %} cria automaticamente um nome de usuário para cada pessoa quando esta efetua o login em {% data variables.product.product_location %} por meio do seu sistema de autenticação externa pela primeira vez.

{% elsif ghec %}

Se você usar uma empresa com {% data variables.product.prodname_emus %}, os integrantes da sua empresa irão efetuar a autenticação para acessar {% data variables.product.prodname_dotcom %} por meio do seu provedor de identidade (IdP) do SAML. Para obter mais informações, consulte "[Sobre {% data variables.product.prodname_emus %}](/admin/identity-and-access-management/using-enterprise-managed-users-and-saml-for-iam/about-enterprise-managed-users)" e "[Sobre autenticação para a sua empresa](/admin/identity-and-access-management/managing-iam-for-your-enterprise/about-authentication-for-your-enterprise#authentication-methods-for-github-enterprise-server)".

{% data variables.product.product_name %} cria automaticamente um nome de usuário para cada pessoa quando sua conta de usuário é provisionada via SCIM, normalizando um identificador fornecido pelo seu IdP. Se vários identificadores forem normalizados para o mesmo nome de usuário, ocorre um conflito de nome de usuário, e apenas a primeira conta de usuário será criada. Você pode resolver conflitos de nome de usuário fazendo mudanças no seu IdP para que os nomes de usuários normalizados sejam únicos.

{% elsif ghae %}

{% data variables.product.product_name %} usa o SAML SSO para autenticação e cria automaticamente um nome de usuário para cada pessoa quando efetua o login por meio do seu provedor de identidade (IdP) pela primeira vez.

{% endif %}

{% ifversion ghec %}
## Sobre nomes de usuário para {% data variables.product.prodname_managed_users %}

Quando o seu {% data variables.product.prodname_emu_enterprise %} for criado, você escolherá um código curto que será usado como sufixo para os nomes de usuários dos integrantes da sua empresa. {% data reusables.enterprise-accounts.emu-shortcode %} O usuário configurado que configurar o SAML SSO terá um nome de usuário no formato de **@<em>SHORT-CODE</em>_admin**.

Ao fornecer um novo usuário a partir do provedor de identidade, o novo {% data variables.product.prodname_managed_user %} terá um nome de usuário de {% data variables.product.prodname_dotcom %} no formato de **@<em>IDP-USERNAME</em>_<em>SHORT-CODE</em>**. O componente de <em>IDP-USERNAME</em> é formado normalizando o valor do atributo SCIM `userName` enviado a partir do IdP.

| Provedor de identidade            | Nome de usuário de {% data variables.product.prodname_dotcom %}
| --------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Azure Active Directory (Azure AD) | _IDP-USERNAME_ é formado normalizando os caracteres anteriores ao caractere `@` no UPN (nome principal do usuário), o que não inclui o `#EXT#` para contas convidadas. |
| Okta                              | _IDP-USERNAME_ é o atributo de nome de usuário normalizado fornecido pelo IdP.                                                                                         |

Essas regras podem fazer com que o seu IdP forneça o mesmo _IDP-USERNAME_ para vários usuários. Por exemplo, para o Azure AD, os seguintes UPNs resultarão no mesmo nome de usuário:

- `bob@contoso.com`
- `bob@fabrikam.com`
- `bob#EXT#fabrikamcom@contoso.com`

Isto causará um conflito de nome de usuário e apenas o primeiro usuário será provisionado. Para obter mais informações, consulte "[Resolvendo conflitos de nome de usuário](#resolving-username-conflicts). "
{% endif %}

Os nomes de usuário{% ifversion ghec %}, incluindo sublinhado e código curto,{% endif %} não deve exceder 39 caracteres.

## Sobre a normalização de usuário

Os nomes de usuário para contas de usuário em {% ifversion ghes or ghae %}{% data variables.product.product_name %}{% elsif ghec %}{% data variables.product.prodname_dotcom_the_website %}{% endif %} podem conter apenas caracteres alfanuméricos e traços (`-`).

{% ifversion ghec %}
Ao configurar a autenticação do SAML, {% data variables.product.product_name %} usa `nome de usuário` do SCIM e valor de atributo enviado a partir do IdP para determinar o nome de usuário para a conta de usuário correspondente em {% data variables.product.prodname_dotcom_the_website %}. Se este valor incluir caracteres não compatíveis, {% data variables.product.product_name %} normalizará o nome de usuário para cada uma das seguintes regras.
{% elsif ghes %}
Ao configurar o CAS, LDAP ou autenticação SAML, {% data variables.product.product_name %} usa um identificador da conta do usuário no provedor de autenticação externo para determinar o nome de usuário correspondente em {% data variables.product.product_name %}. Se o identificador incluir caracteres não compatíveis, {% data variables.product.product_name %} normalizará o nome de usuário para cada uma das seguintes regras.
{% elsif ghae %}
Ao configurar a autenticação do SAML, {% data variables.product.product_name %} usará um identificador da conta de usuário no seu IdP para determinar o nome de usuário correspondente na conta de usuário em {% data variables.product.product_name %}. Se o identificador incluir caracteres não compatíveis, {% data variables.product.product_name %} normalizará o nome de usuário para cada uma das seguintes regras.
{% endif %}

1. {% data variables.product.product_name %} normalizará qualquer caractere não alfanumérico do nome de usuário da sua conta em um traço. Por exemplo, um nome de usuário de `mona.the.octocat` será normalizado para `mona-the-octocat`. Observe que nomes de usuários normalizados também não podem iniciar ou terminar com um traço. Eles também não podem conter dois traços consecutivos.

1. Nomes de usuário criados a partir de endereços de e-mail são criados a partir dos caracteres normalizados que precedem o caractere `@`.

1. Se várias contas forem normalizadas para o mesmo nome de usuário {% data variables.product.product_name %}, será criada apenas a primeira conta de usuário. Usuários subsequentes com o mesmo nome de usuário não serão capazes de fazer o login. {% ifversion ghec %}Para obter mais informações, consulte "[Resolvendo conflitos de nomes de usuário](#resolving-username-conflicts)"{% endif %}

### Exemplos de normalização de nome de usuário

| Identificador no provedor                                     | Nome de usuário normalizado em {% data variables.product.prodname_dotcom %}                 | Resultado                                                                                           |
|:------------------------------------------------------------- |:------------------------------------------------------------------------------------------- |:--------------------------------------------------------------------------------------------------- |
| The.Octocat                                                   | `the-octocat{% ifversion ghec %}_SHORT-CODE{% endif %}`                                     | Nome de usuário criado com sucesso.                                                                 |
| !The.Octocat                                                  | `-the-octocat{% ifversion ghec %}_SHORT-CODE{% endif %}`                                    | Este nome de usuário não é criado, porque começa com um traço.                                      |
| The.Octocat!                                                  | `the-octocat-{% ifversion ghec %}_SHORT-CODE{% endif %}`                                    | Este nome de usuário não é criado, porque termina com um traço.                                     |
| The!!Octocat                                                  | `the--octocat{% ifversion ghec %}_SHORT-CODE{% endif %}`                                    | Este nome de usuário não é criado, porque contém dois traços consecutivos.                          |
| The!Octocat                                                   | `the-octocat{% ifversion ghec %}_SHORT-CODE{% endif %}`                                     | Este nome de usuário não é criado. Embora o nome de usuário normalizado seja válido, ele já existe. |
| `The.Octocat@example.com`                                     | `the-octocat{% ifversion ghec %}_SHORT-CODE{% endif %}`                                     | Este nome de usuário não é criado. Embora o nome de usuário normalizado seja válido, ele já existe. |
| `mona.lisa.the.octocat.from.github.united.states@example.com` | `mona-lisa-the-octocat-from-github-united-states{% ifversion ghec %}_SHORT-CODE{% endif %}` | Este nome de usuário não é criado, porque excede o limite de 39 caracteres.                         |

{% ifversion not ghec %}
### Sobre a normalização de usuário com SAML

{% ifversion ghes %}Se você configurar a autenticação do SAML para {% data variables.product.product_location %}, {% endif %}{% data variables.product.product_name %} determinará o nome de usuário de cada pessoa por uma das seguintes afirmações na resposta SAML, em ordem decrescente.

1. O atributo `de nome de usuário` personalizado, se definido e presente
1. Declaração `http://schemas.xmlsoap.org/ws/2005/05/identity/claims/name`, se houver;
1. Declaração `http://schemas.xmlsoap.org/ws/2005/05/identity/claims/emailaddress`, se houver;
1. Elemento `NameID`.

{% data variables.product.product_name %} exige o elemento `NameID` mesmo que outros atributos estejam presentes. Para obter mais informações, consulte "[Referência de configuração do SAML](/admin/identity-and-access-management/using-saml-for-enterprise-iam/saml-configuration-reference#saml-attributes)".

{% data variables.product.product_name %} cria um mapeamento entre `NameID` do IdP e o nome de usuário {% ifversion ghae %}em{% else %}em{% endif %} {% data variables.product.product_location %}. Portanto, o `NameID` deve ser persistente, único e não sujeito a alterações para o ciclo de vida do usuário.

{% ifversion ghes %}
{% note %}

**Observação**: Se o `NameID` para um usuário for alterado no IdP, a pessoa verá uma mensagem de erro ao efetuar o login em {% data variables.product.product_location %}. Para restaurar o acesso da pessoa, você deverá atualizar o mapeamento de `NameID` da conta do usuário. Para obter mais informações, consulte "[Atualizando `NameID`](/admin/identity-and-access-management/using-saml-for-enterprise-iam/updating-a-users-saml-nameid) do SAML de um usuário."

{% endnote %}
{% endif %}
{% endif %}

{% ifversion ghec %}
## Resolvendo conflitos de usuário

Quando um novo usuário é provisionado, se o usuário normalizado entrar em conflito com um usuário existente na empresa, a tentativa de provisionamento falhará com o erro `409`.

Para resolver esse problema, você deve fazer uma alteração no seu IdP para que os nomes de usuários normalizados sejam únicos. Se você não puder alterar o identificador que está sendo normalizado, você pode alterar o mapeamento de atributos para o atributo `nome de usuário`. Se você alterar o mapeamento de atributos, os nomes de usuários de {% data variables.product.prodname_managed_users %} existente serão atualizados, mas nada mais sobre as contas será alterado, incluindo o histórico de atividades.

{% note %}

**Observação:** {% data variables.contact.github_support %} não pode oferecer assistência com a personalização de mapeamentos de atributo ou configuração de expressões personalizadas. Você pode entrar em contato com seu IdP em caso de dúvidas.

{% endnote %}

### Resolvendo os conflitos de nome de usuário com o Azure AD

Para resolver conflitos de nome de usuário no Azure AD, modifique o Nome Principal do Usuário para o usuário conflitante ou modifique o mapeamento de atributo para o atributo `nome de usuário`. Se você modificar o mapeamento do atributo, você pode escolher um atributo existente ou usar uma expressão para garantir que todos os usuários provisionados tenham um alias normalizado único.

1. No Azure AD, abra o aplicativo de {% data variables.product.prodname_emu_idp_application %}.
1. Na barra lateral esquerda, clique em **Provisionando**.
1. Clique **Editar provisionamento**.
1. Expanda **mapeamentos** e, em seguida, clique em **Provisão dos usuáriods do diretório ativo do Azure**.
1. Clique no mapeamento do atributo {% data variables.product.prodname_dotcom %} `nome de usuário`.
1. Alterando o mapeamento dos atributos.
   - Para mapear um atributo existente no Azure AD para o atributo `userName` em {% data variables.product.prodname_dotcom %}, clique no campo do atributo desejado. Em seguida, salve e espere que um ciclo de abastecimento ocorra dentro de cerca de 40 minutos.
   - Para usar uma expressão em vez de um atributo existente, altere o tipo de mapeamento para "Expressão" e, em seguida, adicione uma expressão personalizada que tornará esse valor único para todos os usuários. Por exemplo, você poderia usar `[FIRST NAME]-[LAST NAME]-[EMPLOYEE ID]`. Para obter mais informações, consulte [Referência para escrever expressões para mapeamentos de atributos no diretório ativo do Azure](https://docs.microsoft.com/en-us/azure/active-directory/app-provisioning/functions-for-customizing-application-data) na documentação da Microsoft.

### Resolução de conflitos de nome de usuário com o Okta

Para resolver conflitos de nome de usuário no Okta, atualize as configurações de mapeamento de atributos para o aplicativo de {% data variables.product.prodname_emu_idp_application %}.

1. No Okta, abra o aplicativo de {% data variables.product.prodname_emu_idp_application %}.
1. Clique em **Iniciar sessão em**.
1. Na seção "Configurações", clique em **Editar**.
1. Atualize o "Formato de nome de usuário do aplicativo".
{% endif %}
