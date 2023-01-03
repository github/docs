---
title: Considerações de nome de usuário para autenticação externa
shortTitle: Username considerations
intro: '{% ifversion ghes or ghec %}Quando você usa {% ifversion ghes %}CAS, LDAP ou SAML para autenticação{% elsif ghec %}{% data variables.product.prodname_emus %}{% endif %}, {% endif %}{% data variables.product.product_name %} segue certas regras para determinar o nome de usuário para cada conta de usuário {% ifversion ghec or ghae %}em sua empresa{% elsif ghes %}em sua instância{% endif %}.'
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
ms.openlocfilehash: 8a330fe790665ef360bc5a5841e20ec8df002eb0
ms.sourcegitcommit: 00814c80b0f5fa76188c378a1196ef8fc5288113
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 10/31/2022
ms.locfileid: '148120748'
---
{% ifversion ghec %} {% note %}

**Observação:** este artigo se aplica somente ao {% data variables.product.prodname_emus %}. Se você usar {% data variables.product.prodname_ghe_cloud %} sem {% data variables.product.prodname_emus %}, os nomes de usuário serão criados pelos usuários, e não {% data variables.product.prodname_dotcom %}.

{% endnote %} {% endif %}

## Sobre nomes de usuário com autenticação externa

{% ifversion ghes %}

Você pode configurar a autenticação externa para {% data variables.product.product_name %} usando CAS, LDAP ou SAML. Para obter mais informações, confira "[Sobre a autenticação em sua empresa](/admin/identity-and-access-management/managing-iam-for-your-enterprise/about-authentication-for-your-enterprise#authentication-methods-for-github-enterprise-server)".

Quando você usa a autenticação externa, o {% data variables.location.product_location %} cria automaticamente um nome de usuário para cada pessoa quando ela entra no {% data variables.location.product_location %} por meio do sistema de autenticação externa pela primeira vez.

{% elsif ghec %}

Se você usar uma empresa com {% data variables.product.prodname_emus %}, os membros da sua empresa se autenticarão para acessar dados do {% data variables.product.prodname_dotcom %} por meio de seu IdP (provedor de identidade) do SAML. Para obter mais informações, confira "[Sobre {% data variables.product.prodname_emus %}](/admin/identity-and-access-management/using-enterprise-managed-users-and-saml-for-iam/about-enterprise-managed-users)" e "[Sobre a autenticação para sua empresa](/admin/identity-and-access-management/managing-iam-for-your-enterprise/about-authentication-for-your-enterprise#authentication-methods-for-github-enterprise-server)".

O {% data variables.product.prodname_dotcom %} cria automaticamente um nome de usuário para cada pessoa quando a conta de usuário é provisionada via SCIM, normalizando um identificador fornecido pelo IdP e adicionando um sublinhado e um código curto. Se vários identificadores forem normalizados no mesmo nome de usuário, ocorrerá um conflito de nomes de usuário e somente a primeira conta de usuário será criada. Resolva problemas de nomes de usuário fazendo uma alteração no IdP para que os nomes de usuário normalizados sejam exclusivos e dentro do limite de 39 caracteres.

{% data reusables.enterprise-accounts.emu-only-emails-within-the-enterprise-can-conflict %}

{% elsif ghae %}

O {% data variables.product.product_name %} usa o SSO do SAML para autenticação e cria automaticamente um nome de usuário para cada pessoa quando a ela entra por meio de seu IdP (provedor de identidade) pela primeira vez.

{% endif %}

{% ifversion ghec %}
## Sobre nomes de usuário no {% data variables.enterprise.prodname_managed_users %}

Quando o {% data variables.enterprise.prodname_emu_enterprise %} for criado, você escolherá um código curto que será usado como sufixo para os nomes de usuários dos membros da sua empresa. {% data reusables.enterprise-accounts.emu-shortcode %} O usuário de instalação que configura o SSO do SAML tem um nome de usuário no formato **@<em>SHORT-CODE</em>_admin**. 

Quando você provisiona um novo usuário do provedor de identidade, o novo {% data variables.enterprise.prodname_managed_user %} terá um nome de usuário {% data variables.product.prodname_dotcom %} no formato **@<em>IDP-USERNAME</em>_<em>SHORT-CODE</em>** . O componente <em>IDP-USERNAME</em> é formado pela normalização do valor do atributo `userName` do SCIM enviado pelo IdP. 

| Provedor de identidade                 | Nome de usuário de {% data variables.product.prodname_dotcom %}  |
|-----------------------------------|----------------------|
| Active Directory do Azure (Azure AD) | O _IDP-USERNAME_ é formado pela normalização dos caracteres anteriores ao caractere `@` no UPN (nome UPN), que não inclui o `#EXT#` para contas de convidado. |
| Okta                              | __IDP-USERNAME__ é o atributo de nome de usuário normalizado fornecido pelo IdP.               |

Essas regras podem fazer com que seu IdP forneça o mesmo _IDP-USERNAME_ para vários usuários. Por exemplo, no Azure AD, os seguintes UPNs resultarão no mesmo nome de usuário:

- `bob@contoso.com`
- `bob@fabrikam.com`
- `bob#EXT#fabrikamcom@contoso.com`

Isso causará um conflito de nome de usuário e somente o primeiro usuário será provisionado. Para obter mais informações, confira "[Como resolver problemas de nome de usuário](#resolving-username-problems)".
{% endif %}

Nomes de usuário{% ifversion ghec %}, incluindo sublinhado e código curto,{% endif %} não devem exceder 39 caracteres.

## Sobre a normalização de nome de usuário

Nomes de usuário de contas de usuário no {% ifversion ghes or ghae %}{% data variables.product.product_name %}{% elsif ghec %}{% data variables.product.prodname_dotcom_the_website %}{% endif %} só podem conter caracteres alfanuméricos e traços (`-`).

{% ifversion ghec %} Quando você configura a autenticação SAML, o {% data variables.product.product_name %} usa o valor do atributo `userName` do SCIM enviado do IdP para determinar o nome de usuário da conta de usuário correspondente no {% data variables.product.prodname_dotcom_the_website %}. Se esse valor incluir caracteres sem suporte, o {% data variables.product.product_name %} normalizará o nome de usuário de acordo com as regras a seguir.
{% elsif ghes %} Quando você configura a autenticação por CAS, LDAP ou SAML, o {% data variables.product.product_name %} usa um identificador da conta de usuário em seu provedor de autenticação externo para determinar o nome de usuário da conta de usuário correspondente no {% data variables.product.product_name %}. Se o identificador incluir caracteres sem suporte, o {% data variables.product.product_name %} normalizará o nome de usuário de acordo com as regras a seguir.
{% elsif ghae %} Quando você configura a autenticação por SAML, o {% data variables.product.product_name %} usa um identificador da conta de usuário em seu IdP para determinar o nome de usuário da conta de usuário correspondente no {% data variables.product.product_name %}. Se o identificador incluir caracteres sem suporte, o {% data variables.product.product_name %} normalizará o nome de usuário de acordo com as regras a seguir.
{% endif %}

1. O {% data variables.product.product_name %} normalizará qualquer caractere não alfanumérico do nome de usuário da sua conta em um traço. Por exemplo, um nome de usuário `mona.the.octocat` será normalizado como `mona-the-octocat`. Observe que nomes de usuários normalizados também não podem iniciar ou terminar com um traço. Eles também não podem conter dois traços consecutivos.

1. Nomes de usuário criados com base em endereços de email são criados com caracteres normalizados que precedem o caractere `@`.

1. Os nomes de usuário criados a partir de contas de domínio são criados com base nos caracteres normalizados após o separador `\\`. 

1. Se várias contas forem normalizadas no mesmo nome de usuário do {% data variables.product.product_name %} apenas a primeira conta de usuário será criada. Usuários subsequentes com o mesmo nome de usuário não serão capazes de fazer o login. {% ifversion ghec %}Para obter mais informações, confira "[Resolvendo problemas de nome de usuário](#resolving-username-problems)". {% endif %}

### Exemplos de normalização de nome de usuário

| Identificador no provedor | Nome de usuário normalizado no {% data variables.product.prodname_dotcom %} | Result |
| :- | :- | :- |
| The.Octocat | `the-octocat{% ifversion ghec %}_SHORT-CODE{% endif %}` | Nome de usuário criado com sucesso. |
| !The.Octocat | `-the-octocat{% ifversion ghec %}_SHORT-CODE{% endif %}` | Este nome de usuário não é criado, porque começa com um traço. |
| The.Octocat! | `the-octocat-{% ifversion ghec %}_SHORT-CODE{% endif %}` | Este nome de usuário não é criado, porque termina com um traço. |
| The!!Octocat | `the--octocat{% ifversion ghec %}_SHORT-CODE{% endif %}` | Este nome de usuário não é criado, porque contém dois traços consecutivos. |
| The!Octocat | `the-octocat{% ifversion ghec %}_SHORT-CODE{% endif %}` | Este nome de usuário não é criado. Embora o nome de usuário normalizado seja válido, ele já existe. |
| `The.Octocat@example.com` | `the-octocat{% ifversion ghec %}_SHORT-CODE{% endif %}` | Este nome de usuário não é criado. Embora o nome de usuário normalizado seja válido, ele já existe. |
| `internal\\The.Octocat` | `the-octocat{% ifversion ghec %}_SHORT-CODE{% endif %}` | Este nome de usuário não é criado. Embora o nome de usuário normalizado seja válido, ele já existe. |
| `mona.lisa.the.octocat.from.github.united.states@example.com` | `mona-lisa-the-octocat-from-github-united-states{% ifversion ghec %}_SHORT-CODE{% endif %}` | Esse nome de usuário não é criado, pois excede o limite de 39 caracteres. |

{% ifversion not ghec %}
### Sobre a normalização de nome de usuário com o SAML

{% ifversion ghes %}Se você configurar a autenticação do SAML para {% data variables.location.product_location %}, o {% endif %}{% data variables.product.product_name %} determinará o nome de usuário de cada pessoa por uma das seguintes declarações na resposta SAML, ordenada por prioridade decrescente.

1. O atributo personalizado `username`, se definido e estiver presente
1. Uma declaração `http://schemas.xmlsoap.org/ws/2005/05/identity/claims/name`, se presente
1. Uma declaração `http://schemas.xmlsoap.org/ws/2005/05/identity/claims/emailaddress`, se presente
1. O elemento `NameID`

O {% data variables.product.product_name %} exige o elemento `NameID` mesmo se outros atributos estiverem presentes. Para obter mais informações, confira "[Referência de configuração do SAML](/admin/identity-and-access-management/using-saml-for-enterprise-iam/saml-configuration-reference#saml-attributes)".

O {% data variables.product.product_name %} cria um mapeamento entre o `NameID` do IdP e o nome de usuário {% ifversion ghae %}in{% else %}on{% endif %} {% data variables.location.product_location %}, portanto, a `NameID` devem ser persistente, exclusiva e não sujeita a alterações no ciclo de vida do usuário.

{% ifversion ghes %} {% note %}

**Observação**: se a `NameID` de um usuário mudar no IdP, a pessoa verá uma mensagem de erro ao entrar no {% data variables.location.product_location %}. Para restaurar o acesso da pessoa, atualize o mapeamento da `NameID` da conta do usuário. Para obter mais informações, confira "[Como atualizar a `NameID` do SAML de um usuário](/admin/identity-and-access-management/using-saml-for-enterprise-iam/updating-a-users-saml-nameid)".

{% endnote %} {% endif %} {% endif %}

{% ifversion ghec %}
## Resolvendo problemas de nome de usuário

Quando um novo usuário está sendo provisionado, se o nome de usuário tiver mais de 39 caracteres (incluindo sublinhado e código curto) ou estiver em conflito com um usuário existente na empresa, a tentativa de provisionamento falhará com um erro `409`. 

Para resolver esse problema, você deverá fazer uma das seguintes alterações no IdP para que todos os nomes de usuário normalizados estejam dentro do limite de caracteres e exclusivos.
- Alterar o valor do atributo `userName` para usuários individuais que estão causando problemas
- Alterar o mapeamento do atributo `userName` para todos os usuários
- Configurar um atributo personalizado `userName` para todos os usuários

Quando você altera o mapeamento de atributo, os nomes de usuário dos {% data variables.enterprise.prodname_managed_users %} são atualizados, mas nada mais relativo às contas é alterado, incluindo o histórico de atividades.

{% note %}

**Observação:** {% data variables.contact.github_support %} não pode fornecer assistência para personalizar mapeamentos de atributo nem configurar expressões personalizadas. Entre em contato com seu IdP com qualquer pergunta.

{% endnote %}

### Resolvendo problemas de nome de usuário com o Azure AD

Para resolver problemas de nome de usuário no Azure AD, modifique o valor do nome UPN do usuário conflitante ou modifique o mapeamento de atributo para o atributo `userName`. Se você modificar o mapeamento de atributo, poderá escolher um atributo existente ou usar uma expressão para garantir que todos os usuários provisionados tenham um alias normalizado exclusivo.

1. No Azure AD, abra o aplicativo {% data variables.product.prodname_emu_idp_application %}.
1. Na barra lateral esquerda, clique em **Provisionamento**.
1. Clique em **Editar Provisionamento**.
1. Expanda **Mapeamentos** e clique em **Provisionar Usuários do Azure Active Directory**.
1. Clique no mapeamento do atributo `userName` {% data variables.product.prodname_dotcom %}. 
1. Altere o mapeamento de atributos.
   - Para mapear um atributo existente no Azure AD para o atributo `userName` no {% data variables.product.prodname_dotcom %}, clique no campo de atributo desejado. Em seguida, salve e aguarde um ciclo de provisionamento que vai ocorrer em cerca de 40 minutos.
   - Para usar uma expressão em vez de um atributo existente, altere o tipo de mapeamento para "Expressão" e adicione uma expressão personalizada que tornará esse valor exclusivo para todos os usuários. Por exemplo, você pode usar `[FIRST NAME]-[LAST NAME]-[EMPLOYEE ID]`. Para saber mais, confira [Referência para escrever expressões para mapeamentos de atributo no Azure Active Directory](https://docs.microsoft.com/en-us/azure/active-directory/app-provisioning/functions-for-customizing-application-data) no Microsoft Docs.

### Resolvendo problemas de nome de usuário com Okta

Para resolver problemas de nome de usuário no Okta, atualize as configurações de mapeamento de atributo para o aplicativo {% data variables.product.prodname_emu_idp_application %}.

1. No Okta, abra o aplicativo {% data variables.product.prodname_emu_idp_application %}.
1. Clique em **Entrar**.
1. Na seção "Configurações", clique em **Editar**.
1. Atualize o "Formato de nome de usuário do aplicativo".
{% endif %}
