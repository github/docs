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

{% ifversion ghec or ghes %}Ao configurar {% ifversion ghes %}autenticação de CAS, LDAP ou {% endif %}SAML, {% endif %}{% data variables.product.product_name %} usa um identificador da conta de usuário em seu provedor de autenticação externa {% ifversion ghes %}{% elsif ghec or ghae %}IdP{% endif %} para determinar o nome de usuário da conta de usuário correspondente em {% ifversion ghes or ghae %}{% data variables.product.product_name %}{% elsif ghec %}{% data variables.product.prodname_dotcom_the_website %}{% endif %}. Se o identificador da conta no seu provedor incluir caracteres não compatíveis, {% data variables.product.product_name %} normalizará o nome de usuário por cada regra a seguir.

1. {% data variables.product.product_name %} normalizará qualquer caractere não alfanumérico do nome de usuário da sua conta em um traço. Por exemplo, um nome de usuário de `mona.the.octocat` será normalizado para `mona-the-octocat`. Observe que nomes de usuários normalizados também não podem iniciar ou terminar com um traço. Eles também não podem conter dois traços consecutivos.

1. Nomes de usuário criados a partir de endereços de e-mail são criados a partir dos caracteres normalizados que precedem o caractere `@`.

1. Se várias contas forem normalizadas para o mesmo nome de usuário {% data variables.product.product_name %}, será criada apenas a primeira conta de usuário. Usuários subsequentes com o mesmo nome de usuário não serão capazes de fazer o login.

### Exemplos de normalização de nome de usuário

| Identificador no provedor | Nome de usuário normalizado para {% data variables.product.product_location %} | Resultado                                                                                           |
|:------------------------- |:------------------------------------------------------------------------------ |:--------------------------------------------------------------------------------------------------- |
| The.Octocat               | `the-octocat`                                                                  | Nome de usuário criado com sucesso.                                                                 |
| !The.Octocat              | `-the-octocat`                                                                 | Este nome de usuário não é criado, porque começa com um traço.                                      |
| The.Octocat!              | `the-octocat-`                                                                 | Este nome de usuário não é criado, porque termina com um traço.                                     |
| The!!Octocat              | `the--octocat`                                                                 | Este nome de usuário não é criado, porque contém dois traços consecutivos.                          |
| The!Octocat               | `the-octocat`                                                                  | Este nome de usuário não é criado. Embora o nome de usuário normalizado seja válido, ele já existe. |
| The.Octocat@example.com   | `the-octocat`                                                                  | Este nome de usuário não é criado. Embora o nome de usuário normalizado seja válido, ele já existe. |

### Sobre a normalização de usuário com SAML

{% ifversion ghec or ghes %}Se você {% ifversion ghec %}usar uma empresa com {% data variables.product.prodname_emus %}, você deverá usar a autenticação do SAML. {% else %}A configuração da autenticação do SAML para {% data variables.product.product_location %}, {% endif %}{% endif %}{% data variables.product.product_name %} determina o nome de usuário de cada pessoa por uma das seguintes afirmações na resposta SAML, ordenada por prioridade.

1. O atributo `de nome de usuário` personalizado, se definido e presente
1. Declaração `http://schemas.xmlsoap.org/ws/2005/05/identity/claims/name`, se houver;
1. Declaração `http://schemas.xmlsoap.org/ws/2005/05/identity/claims/emailaddress`, se houver;
1. Elemento `NameID`.

{% data variables.product.product_name %} exige o elemento `NameID` mesmo que outros atributos estejam presentes. Para obter mais informações, consulte "[Referência de configuração do SAML](/admin/identity-and-access-management/using-saml-for-enterprise-iam/saml-configuration-reference#saml-attributes)".

{% data variables.product.product_name %} cria um mapeamento entre `NameID` do IdP e o nome de usuário {% ifversion ghec or ghae %}em{% elsif ghes %}em{% endif %} {% data variables.product.product_location %}. Portanto, o `NameID` deve ser persistente, único e não sujeito a alterações para o ciclo de vida do usuário.

{% ifversion ghes %}
{% note %}

**Observação**: Se `NameID` para um usuário for alterado no IdP, a pessoa verá uma mensagem de erro ao {% ifversion ghec %}efetuar a autenticação através do seu IdP para acessar seus recursos ao{% else %}efetuar o login em{% endif} {% data variables.product.product_location %}. Para restaurar o acesso da pessoa, você deverá atualizar o mapeamento de `NameID` da conta do usuário. Para obter mais informações, consulte "[Atualizando `NameID`](/admin/identity-and-access-management/using-saml-for-enterprise-iam/updating-a-users-saml-nameid) do SAML de um usuário."

{% endnote %}
{% endif %}
