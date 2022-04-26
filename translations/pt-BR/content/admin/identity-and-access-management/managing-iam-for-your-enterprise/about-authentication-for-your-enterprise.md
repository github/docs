---
title: Sobre a autenticação da sua empresa
shortTitle: Sobre a autenticação
intro: 'Você {% ifversion ghae %}deve configurar o logon único (SSO) do SAML para que as pessoas possam{% else %}escolher como as pessoas{% endif %} sefetuam a autenticação para acessar os recursos da sua empresa {% ifversion ghec %}em {% data variables.product.product_name %}{% elsif ghes %}{% data variables.product.product_location %}{% elsif ghae %}sua empresa em {% data variables.product.product_name %}{% endif %}.'
versions:
  ghec: '*'
  ghes: '*'
  ghae: '*'
type: overview
topics:
  - Accounts
  - Authentication
  - Enterprise
  - Identity
  - SSO
---

## Sobre a autenticação da sua empresa

{% ifversion ghec %}

Os proprietários das empresas em {% data variables.product.product_name %} podem controlar os requisitos de autenticação e acesso aos recursos da empresa. Você pode optar por permitir que os integrantescriem e gerenciem contas de usuário ou sua empresa pode criar e gerenciar contas para os integrantes. Se você permitir que os integrantes gerenciem suas próprias contas, você também pode configurar a autenticação SAML para aumentar a segurança e centralizar a identidade e o acesso dos aplicativos web que sua equipe usa. Se você optar por gerenciar as contas de usuário dos seus integrantes, será necessário configurar a autenticação SAML.

## Métodos de autenticação para {% data variables.product.product_name %}

As seguintes opções estão disponíveis para gerenciamento de conta e autenticação em {% data variables.product.product_name %}.

- [Autenticação por meio de {% data variables.product.product_location %}](#authentication-through-githubcom)
- [Autenticação por meio de {% data variables.product.product_location %} com restrição de acesso SAML adicional](#authentication-through-githubcom-with-additional-saml-access-restriction)
- [Autenticação com {% data variables.product.prodname_emus %} e SAML SSO](#authentication-with-enterprise-managed-users-and-saml-sso)

### Autenticação por meio de {% data variables.product.product_location %}

Por padrão, cada intergrante deve criar uma conta pessoal em {% data variables.product.product_location %}. Você concede acesso à sua empresa e o integrante pode acessar os recursos da sua empresa após efetuar o login na conta em {% data variables.product.product_location %}. O integrante gerencia a conta e pode contribuir para outras empresas, organizações e repositórios em {% data variables.product.product_location %}.

### Autenticação por meio de {% data variables.product.product_location %} com restrição de acesso SAML adicional

Se você configurar restrições de acesso ao SAML adicionais, cada integrante deverá criar e gerenciar uma conta pessoal em {% data variables.product.product_location %}. Você concede acesso à sua empresa, e o integrante pode acessar os recursos da sua empresa após ambos efetuarem o login na conta em {% data variables.product.product_location %} e efetuarem a autenticação com sucesso com o seu provedor de identidade SAML (IdP). O integrante pode contribuir para outras empresas, organizações e repositórios em {% data variables.product.product_location %} usando sua conta pessoal. Para obter mais informações sobre a exigência de autenticação SAML para todos os acessos aos recursos da sua empresa, consulte[Sobre o SAML para o IAM corporativo](/admin/identity-and-access-management/using-saml-for-enterprise-iam/about-saml-for-enterprise-iam)".

Se você usa uma organização autônoma com {% data variables.product.product_name %}, ou se você não deseja usar a autenticação do SAML para cada organização em sua empresa, você poderá configurar o SAML para uma organização individual. Para obter mais informações, consulte "[Sobre identidade e gerenciamento de acesso com o logon único SAML](/organizations/managing-saml-single-sign-on-for-your-organization/about-identity-and-access-management-with-saml-single-sign-on)".

### Autenticação com {% data variables.product.prodname_emus %} e SAML SSO

Se você precisar de mais controle das contas dos integrantes da empresa em {% data variables.product.product_location %}, você poderá usar {% data variables.product.prodname_emus %}. Com o {% data variables.product.prodname_emus %}, você disponibiliza e gerencia contas para os integrantes da empresa em {% data variables.product.product_location %} usando seu IdP. Cada membro efetua o login em uma conta que você cria e sua empresa gerencia a conta. Contribuições para o resto de {% data variables.product.prodname_dotcom_the_website %} são restritas. Para obter mais informações, consulte "[Sobre {% data variables.product.prodname_emus %}](/admin/identity-and-access-management/using-enterprise-managed-users-and-saml-for-iam/about-enterprise-managed-users)."

{% elsif ghes %}

Os administradores do site podem decidir como as pessoas efetuam a autenticação para acessar uma instância de {% data variables.product.product_name %}. Você pode usar a autenticação integrada do {% data variables.product.product_name %} ou, se você desejar centralizar o gerenciamento de identidade e acesso para os aplicativos web que a sua equipe usa, você pode configurar um método de autenticação externo.

## Métodos de autenticação para {% data variables.product.product_name %}

Os seguintes métodos de autenticação estão disponíveis para {% data variables.product.product_name %}.

- [Autenticação integrada](#built-in-authentication)
- [Autenticação externa](#external-authentication)

### Autenticação integrada

{% data reusables.enterprise_user_management.built-in-authentication-new-accounts %} Para acessar sua instância, as pessoas efetuam a autenticação com as credenciais para a conta. Para obter mais informações, consulte "[onfigurando a autenticação integrada](/admin/identity-and-access-management/using-built-in-authentication/configuring-built-in-authentication)".

### Autenticação externa

Se você usar um diretório ou provedor de identidade externo (IdP) para centralizar o acesso a vários aplicativos web, é possível que você possa configurar a autenticação externa para {% data variables.product.product_location %}. Para obter mais informações, consulte o seguinte.

- "[Usando CAS para IAM corporativo](/admin/identity-and-access-management/using-cas-for-enterprise-iam)"
- "[Usando LDAP para IAM corporativo](/admin/identity-and-access-management/using-ldap-for-enterprise-iam)"
- "[Usando SAML para IAM corporativo](/admin/identity-and-access-management/using-saml-for-enterprise-iam)"

Se você optar por usar a autenticação externa, você também poderá configurar a autenticação padrão para pessoas que não têm uma conta no seu provedor de autenticação externo. Por exemplo, você deverá conceder acesso a um contratante ou usuário de máquina. Para obter mais informações, consulte "[Permitir a autenticação integrada para usuários de fora do seu provedor](/admin/identity-and-access-management/managing-iam-for-your-enterprise/allowing-built-in-authentication-for-users-outside-your-provider)".

{% elsif ghae %}

{% data variables.product.product_name %} usa o SAML SSO para autenticação. Os proprietários de empresas devem configurar o SAML SSO com um provedor de identidade SAML (IdP) durante a inicialização. Para obter mais informações, consulte "[Sobre SAML para o IAM corporativo](/admin/identity-and-access-management/using-saml-for-enterprise-iam/about-saml-for-enterprise-iam)".

{% endif %}

## Sobre controle de acesso

{% ifversion ghec or ghae %}Integrantes da sua empresa{% elsif ghes %}Pessoas com acesso a {% data variables.product.product_location %}{% endif %} podem gerenciar o acesso aos {% ifversion ghec %}recursos da sua empresa{% elsif ghae %}recursos da sua empresa{% elsif ghes %}na sua instância{% endif %} usando a associação da organização, equipes e funções. Para obter mais informações, consulte o seguinte.

{%- ifversion ghec %}
- "[Convidar usuários para ingressar na organização](/organizations/managing-membership-in-your-organization/inviting-users-to-join-your-organization)"
{%- elsif ghes or ghae %}
- "[Adicionando pessoas à sua organização](/organizations/managing-membership-in-your-organization/adding-people-to-your-organization)"
{%- endif %}
- "[Funções em uma organização](/organizations/managing-peoples-access-to-your-organization-with-roles/roles-in-an-organization)"
- "[Sobre equipes](/organizations/organizing-members-into-teams/about-teams)"
- "[Funções do repositório para uma organização](/organizations/managing-access-to-your-organizations-repositories/repository-roles-for-an-organization)"
- "[Níveis de permissão do repositório de conta de usuário](/account-and-profile/setting-up-and-managing-your-github-user-account/managing-user-account-settings/permission-levels-for-a-user-account-repository)"

## Leia mais

- "[Tipos de conta do {% data variables.product.company_short %}](/get-started/learning-about-github/types-of-github-accounts)"
- "[Sobre contas corporativas](/admin/overview/about-enterprise-accounts)"
{%- ifversion ghec %}
- "[Posso criar contas para pessoas da minha organização?](/organizations/managing-membership-in-your-organization/can-i-create-accounts-for-people-in-my-organization)"
{% endif %}
