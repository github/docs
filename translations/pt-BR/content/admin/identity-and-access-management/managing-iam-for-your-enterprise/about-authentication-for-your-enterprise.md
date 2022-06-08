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

Os proprietários das empresas em {% data variables.product.product_name %} podem controlar os requisitos de autenticação e acesso aos recursos da empresa.

Você pode optar por permitir que os integrantes criem e gerenciem contas de usuário, ou sua empresa pode criar e gerenciar contas para integrantes com {% data variables.product.prodname_emus %}. Se você permitir que os integrantes gerenciem suas próprias contas, você também pode configurar a autenticação SAML para aumentar a segurança e centralizar a identidade e o acesso dos aplicativos web que sua equipe usa.

After learning more about these options, to determine which method is best for your enterprise, see "[Identifying the best authentication method for your enterprise](#identifying-the-best-authentication-method-for-your-enterprise)."

## Métodos de autenticação para {% data variables.product.product_name %}

As seguintes opções estão disponíveis para gerenciamento de conta e autenticação em {% data variables.product.product_name %}.

- [Autenticação por meio de {% data variables.product.product_location %}](#authentication-through-githubcom)
- [Autenticação por meio de {% data variables.product.product_location %} com restrição de acesso SAML adicional](#authentication-through-githubcom-with-additional-saml-access-restriction)
- [Authentication with {% data variables.product.prodname_emus %} and federation](#authentication-with-enterprise-managed-users-and-federation)

### Autenticação por meio de {% data variables.product.product_location %}

Por padrão, cada intergrante deve criar uma conta pessoal em {% data variables.product.product_location %}. Você concede acesso à sua empresa e o integrante pode acessar os recursos da sua empresa após efetuar o login na conta em {% data variables.product.product_location %}. O integrante gerencia a conta e pode contribuir para outras empresas, organizações e repositórios em {% data variables.product.product_location %}.

### Autenticação por meio de {% data variables.product.product_location %} com restrição de acesso SAML adicional

Se você configurar restrições de acesso ao SAML adicionais, cada integrante deverá criar e gerenciar uma conta pessoal em {% data variables.product.product_location %}. Você concede acesso à sua empresa, e o integrante pode acessar os recursos da sua empresa após ambos efetuarem o login na conta em {% data variables.product.product_location %} e efetuarem a autenticação com sucesso com o seu provedor de identidade SAML (IdP). O integrante pode contribuir para outras empresas, organizações e repositórios em {% data variables.product.product_location %} usando sua conta pessoal. Para obter mais informações sobre a exigência de autenticação SAML para todos os acessos aos recursos da sua empresa, consulte[Sobre o SAML para o IAM corporativo](/admin/identity-and-access-management/using-saml-for-enterprise-iam/about-saml-for-enterprise-iam)".

Se você usa uma organização autônoma com {% data variables.product.product_name %}, ou se você não deseja usar a autenticação do SAML para cada organização em sua empresa, você poderá configurar o SAML para uma organização individual. Para obter mais informações, consulte "[Sobre identidade e gerenciamento de acesso com o logon único SAML](/organizations/managing-saml-single-sign-on-for-your-organization/about-identity-and-access-management-with-saml-single-sign-on)".

### Authentication with {% data variables.product.prodname_emus %} and federation

Se você precisar de mais controle das contas dos integrantes da empresa em {% data variables.product.product_location %}, você poderá usar {% data variables.product.prodname_emus %}. Com o {% data variables.product.prodname_emus %}, você disponibiliza e gerencia contas para os integrantes da empresa em {% data variables.product.product_location %} usando seu IdP. Cada membro efetua o login em uma conta que você cria e sua empresa gerencia a conta. Contribuições para o resto de {% data variables.product.prodname_dotcom_the_website %} são restritas. Para obter mais informações, consulte "[Sobre {% data variables.product.prodname_emus %}](/admin/identity-and-access-management/using-enterprise-managed-users-and-saml-for-iam/about-enterprise-managed-users)."

## Identifying the best authentication method for your enterprise

Both SAML SSO and {% data variables.product.prodname_emus %} increase security for your enterprise's resources. {% data variables.product.prodname_emus %} additionally allows you to control the user accounts for your enterprise members and restricts what the accounts are able to do. However, those restrictions may be unacceptable for your enterprise if they obstruct your developers' workflows.

To determine whether your enterprise would benefit more from SAML SSO or {% data variables.product.prodname_emus %}, ask yourself these questions.

- [Do you want to control the user accounts for your users?](#do-you-want-to-control-the-user-accounts-for-your-users)
- [Which identity provider does your enterprise use?](#which-identity-provider-does-your-enterprise-use)
- [Do your developers work in public repositories, gists, or {% data variables.product.prodname_pages %} sites?](#do-your-developers-work-in-public-repositories-gists-or-github-pages-sites)
- [Do your developers rely on collaboration outside of your enterprise?](#do-your-developers-rely-on-collaboration-outside-of-your-enterprise)
- [Does your enterprise rely on outside collaborators?](#does-your-enterprise-rely-on-outside-collaborators)
- [Can your enterprise tolerate migration costs?](#can-your-enterprise-tolerate-migration-costs)

### Do you want to control the user accounts for your users?

{% data variables.product.prodname_emus %} may be right for your enterprise if you don't want enterprise members to use their own personal accounts on {% data variables.product.prodname_dotcom_the_website %} to access your enterprise's resources.

With SAML SSO, developers create and manage their own personal accounts, and each account is linked to a SAML identity in your IdP. {% data variables.product.prodname_emus %} functions more like other familiar SSO solutions, as you will provision the accounts for your users. You can also ensure user accounts conform with your company identity, by controlling usernames and the email addresses associated with the accounts.

If you currently require your users to create a new account on {% data variables.product.prodname_dotcom_the_website %} to use with your enterprise only, {% data variables.product.prodname_emus %} might be right for you. However, SAML SSO may be a better option if using your IdP as the source of truth for your user and access management would add too much complexity. For example, perhaps your enterprise does not have an established process for onboarding new users in your IdP.

### Which identity provider does your enterprise use?

{% data variables.product.prodname_emus %} is supported for a limited number of IdPs, while SAML SSO offers full support for a larger number of IdPs, plus limited support for all IdPs that implement the SAML 2.0 standard. For the list of supported IdPs for each option, see "[About {% data variables.product.prodname_emus %}](/admin/identity-and-access-management/using-enterprise-managed-users-and-saml-for-iam/about-enterprise-managed-users#identity-provider-support)" and "[About SAML for enterprise IAM](/admin/identity-and-access-management/using-saml-for-enterprise-iam/about-saml-for-enterprise-iam#supported-idps)."

You can use {% data variables.product.prodname_emus %} with an unsupported IdP only if you federate the unsupported IdP to a supported IdP to use as an integration point. If you wish to avoid this extra complexity, SAML SSO may be a better solution for you.

### Do your developers work in public repositories, gists, or {% data variables.product.prodname_pages %} sites?

To prevent enterprise members from accidentally leaking corporate-owned content to the public on {% data variables.product.prodname_dotcom_the_website %}, {% data variables.product.prodname_emus %} imposes strong restrictions on what users can do. For example, {% data variables.product.prodname_managed_users %} cannot create public repositories, gists of any visibility, or {% data variables.product.prodname_pages %} sites that are visible outside the enterprise. For a full list of restrictions, see "[Abilities and restrictions of {% data variables.product.prodname_managed_users %}](/admin/identity-and-access-management/using-enterprise-managed-users-and-saml-for-iam/about-enterprise-managed-users#abilities-and-restrictions-of-managed-users)."

These restrictions are unacceptable for some enterprises. To determine whether {% data variables.product.prodname_emus %} will work for you, review the restrictions with your developers, and confirm whether any of the restrictions will hinder your existing workflows. If so, SAML SSO may be a better choice for your enterprise.

### Do your developers rely on collaboration outside of your enterprise?

{% data variables.product.prodname_managed_users_caps %} can only contribute to repositories within your enterprise. If your developers need to collaborate in repositories outside your enterprise, even private repositories, to complete their work, {% data variables.product.prodname_emus %} may not be right for your enterprise, and SAML SSO may be a better solution.

### Does your enterprise rely on outside collaborators?

With SAML SSO, you can give access to specific repositories to people who are not members of your IdP's directory, by using the outside collaborator role. This can be especially useful for collaborators that are external to your business, such as contractors. For more information, see "[Adding outside collaborators to repositories in your organization](/organizations/managing-access-to-your-organizations-repositories/adding-outside-collaborators-to-repositories-in-your-organization)."

With {% data variables.product.prodname_emus %}, the outside collaborator role does not exist. Your enterprise's resources can only be accessed by {% data variables.product.prodname_managed_users %}, which are always provisioned by your IdP. To give external collaborators access to your enterprise, you would have to use guest accounts in your IdP. If you're interested in {% data variables.product.prodname_emus %}, confirm with your developers whether this will hinder any of their existing workflows. If so, SAML SSO may be a better solution.

### Can your enterprise tolerate migration costs?

If your enterprise is new to {% data variables.product.prodname_dotcom_the_website %}, SAML SSO and {% data variables.product.prodname_emus %} are equally easy to adopt.

If you're already using {% data variables.product.prodname_dotcom_the_website %} with developers managing their own user accounts, adopting {% data variables.product.prodname_emus %} requires migrating to a new enterprise account. For more information, see "[About enterprises with {% data variables.product.prodname_managed_users %}](/admin/identity-and-access-management/using-enterprise-managed-users-and-saml-for-iam/about-enterprise-managed-users#about-enterprises-with-managed-users)."

Although {% data variables.product.prodname_emus %} is free, the migration process may require time or cost from your team. Confirm that this migration process is acceptable to your business and your developers. If not, SAML SSO may be the better choice for you.

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

## Leia mais

- "[Tipos de conta do {% data variables.product.company_short %}](/get-started/learning-about-github/types-of-github-accounts)"
- "[Sobre contas corporativas](/admin/overview/about-enterprise-accounts)"
{%- ifversion ghec %}
- "[Posso criar contas para pessoas da minha organização?](/organizations/managing-membership-in-your-organization/can-i-create-accounts-for-people-in-my-organization)"
{% endif %}
