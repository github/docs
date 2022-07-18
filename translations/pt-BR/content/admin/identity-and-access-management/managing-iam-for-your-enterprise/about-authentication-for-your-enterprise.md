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

Depois de aprender mais sobre essas opções, para determinar qual é o melhor método para sua empresa, consulte "[Identificando o melhor método de autenticação para sua empresa](#identifying-the-best-authentication-method-for-your-enterprise)."

## Métodos de autenticação para {% data variables.product.product_name %}

As seguintes opções estão disponíveis para gerenciamento de conta e autenticação em {% data variables.product.product_name %}.

- [Autenticação por meio de {% data variables.product.product_location %}](#authentication-through-githubcom)
- [Autenticação por meio de {% data variables.product.product_location %} com restrição de acesso SAML adicional](#authentication-through-githubcom-with-additional-saml-access-restriction)
- [Autenticação com {% data variables.product.prodname_emus %} e federação](#authentication-with-enterprise-managed-users-and-federation)

### Autenticação por meio de {% data variables.product.product_location %}

Por padrão, cada intergrante deve criar uma conta pessoal em {% data variables.product.product_location %}. Você concede acesso à sua empresa e o integrante pode acessar os recursos da sua empresa após efetuar o login na conta em {% data variables.product.product_location %}. O integrante gerencia a conta e pode contribuir para outras empresas, organizações e repositórios em {% data variables.product.product_location %}.

### Autenticação por meio de {% data variables.product.product_location %} com restrição de acesso SAML adicional

Se você configurar restrições de acesso ao SAML adicionais, cada integrante deverá criar e gerenciar uma conta pessoal em {% data variables.product.product_location %}. Você concede acesso à sua empresa, e o integrante pode acessar os recursos da sua empresa após ambos efetuarem o login na conta em {% data variables.product.product_location %} e efetuarem a autenticação com sucesso com o seu provedor de identidade SAML (IdP). O integrante pode contribuir para outras empresas, organizações e repositórios em {% data variables.product.product_location %} usando sua conta pessoal. Para obter mais informações sobre a exigência de autenticação SAML para todos os acessos aos recursos da sua empresa, consulte[Sobre o SAML para o IAM corporativo](/admin/identity-and-access-management/using-saml-for-enterprise-iam/about-saml-for-enterprise-iam)".

Se você usa uma organização autônoma com {% data variables.product.product_name %}, ou se você não deseja usar a autenticação do SAML para cada organização em sua empresa, você poderá configurar o SAML para uma organização individual. Para obter mais informações, consulte "[Sobre identidade e gerenciamento de acesso com o logon único SAML](/organizations/managing-saml-single-sign-on-for-your-organization/about-identity-and-access-management-with-saml-single-sign-on)".

### Autenticação com {% data variables.product.prodname_emus %} e federação

Se você precisar de mais controle das contas dos integrantes da empresa em {% data variables.product.product_location %}, você poderá usar {% data variables.product.prodname_emus %}. Com o {% data variables.product.prodname_emus %}, você disponibiliza e gerencia contas para os integrantes da empresa em {% data variables.product.product_location %} usando seu IdP. Cada membro efetua o login em uma conta que você cria e sua empresa gerencia a conta. Contribuições para o resto de {% data variables.product.prodname_dotcom_the_website %} são restritas. Para obter mais informações, consulte "[Sobre {% data variables.product.prodname_emus %}](/admin/identity-and-access-management/using-enterprise-managed-users-and-saml-for-iam/about-enterprise-managed-users)."

## Identificando o melhor método de autenticação para sua empresa

Tanto o SAML SSO quanto o {% data variables.product.prodname_emus %} aumentam a segurança dos recursos da sua empresa. Além disso, {% data variables.product.prodname_emus %} permite que você controle as contas de usuário dos integrantes corporativos e restringe o que as contas podem fazer. No entanto, essas restrições podem ser inaceitáveis para sua empresa se obstruírem os fluxos de trabalho de seus desenvolvedores.

Para determinar se sua empresa se beneficiaria mais com o SAML SSO ou {% data variables.product.prodname_emus %}, faça essas perguntas a si mesmo.

- [Você quer controlar as contas de usuário de seus usuários?](#do-you-want-to-control-the-user-accounts-for-your-users)
- [Qual provedor de identidade a sua empresa usa?](#which-identity-provider-does-your-enterprise-use)
- [Seus desenvolvedores trabalham em repositórios públicos, gists ou sites de {% data variables.product.prodname_pages %}?](#do-your-developers-work-in-public-repositories-gists-or-github-pages-sites)
- [Seus desenvolvedores dependem da colaboração fora da sua empresa?](#do-your-developers-rely-on-collaboration-outside-of-your-enterprise)
- [A sua empresa conta com colaboradores externos?](#does-your-enterprise-rely-on-outside-collaborators)
- [Você pode tolerar custos de migração?](#can-your-enterprise-tolerate-migration-costs)

### Você quer controlar as contas de usuário de seus usuários?

{% data variables.product.prodname_emus %} pode estar certo para a sua empresa se você não quiser que os integrantes corporativos usem suas próprias contas pessoais em {% data variables.product.prodname_dotcom_the_website %} para acessar os recursos da sua empresa.

Com o SSO SAML, os desenvolvedores criam e gerenciam suas próprias contas pessoais e cada conta está vinculada a uma identidade SAML no seu IdP. {% data variables.product.prodname_emus %} funciona como outras soluções de SSO familiares, já que você fornecerá as contas para seus usuários. Você também pode garantir que as contas de usuário estejam em conformidade com a identidade da sua empresa, controlando os nomes de usuário e os endereços de e-mail associados às contas.

Se você atualmente precisa de seus usuários para criar uma nova conta em {% data variables.product.prodname_dotcom_the_website %} para usar apenas com sua empresa, {% data variables.product.prodname_emus %} pode estar certo para você. No entanto, o SAML SSO pode ser uma opção melhor se usar seu IdP como fonte de verdade para o seu usuário e gestão de acesso adicionaria muita complexidade. Por exemplo, talvez a sua empresa não tenha um processo estabelecido para integrar novos usuários no seu IdP.

### Qual provedor de identidade a sua empresa usa?

{% data variables.product.prodname_emus %} é compatível com um número limitado de IdPs, enquanto SAML SSO oferece suporte total para um maior número de IdPs, além de suporte limitado para todos os IdPs que implementam o SAML 2.0 padrão. Para obter a lista de IdPs compatíveis para cada opção, consulte "[Sobre {% data variables.product.prodname_emus %}](/admin/identity-and-access-management/using-enterprise-managed-users-and-saml-for-iam/about-enterprise-managed-users#identity-provider-support)" e "[Sobre o SAML para a empresa IAM](/admin/identity-and-access-management/using-saml-for-enterprise-iam/about-saml-for-enterprise-iam#supported-idps)".

Você só pode usar {% data variables.product.prodname_emus %} com um IdP não compatível se você federar o IdP não compatível para um IdP compatível para usar como um ponto de integração. Se você deseja evitar essa complexidade extra, o SSO SAML pode ser uma solução melhor para você.

### Seus desenvolvedores trabalham em repositórios públicos, gists ou sites de {% data variables.product.prodname_pages %}?

Para evitar que os integrantes da empresa vazem acidentalmente conteúdo de propriedade corporativa para o público em {% data variables.product.prodname_dotcom_the_website %}, {% data variables.product.prodname_emus %} impõe fortes restrições sobre o que os usuários podem fazer. Por exemplo, {% data variables.product.prodname_managed_users %} não pode criar repositórios públicos, gists de qualquer visibilidade ou sites de {% data variables.product.prodname_pages %} visíveis fora da empresa. Para uma lista completa de restrições, consulte "[Habilidades e restrições de {% data variables.product.prodname_managed_users %}](/admin/identity-and-access-management/using-enterprise-managed-users-and-saml-for-iam/about-enterprise-managed-users#abilities-and-restrictions-of-managed-users)".

Estas restrições são inaceitáveis para algumas empresas. Para determinar se {% data variables.product.prodname_emus %} funcionará para você, revise as restrições com seus desenvolvedores e confirme se alguma das restrições irá dificultar seus fluxos de trabalho existentes. Em caso afirmativo, o SAML SSO pode ser uma melhor escolha para sua empresa.

### Seus desenvolvedores dependem da colaboração fora da sua empresa?

{% data variables.product.prodname_managed_users_caps %} só pode contribuir para repositórios dda sua empresa. Se seus desenvolvedores precisarem colaborar em repositórios fora da sua empresa, mesmo em repositórios privados, para concluir o trabalho deles, {% data variables.product.prodname_emus %} pode não estar certo para a sua empresa e o SAML SSO pode ser uma solução melhor.

### A sua empresa conta com colaboradores externos?

Com o SSO do SAML, é possível conceder acesso a repositórios específicos a pessoas que não são integrantes do diretório do seu IdP, usando a função de colaborador externo. Isso pode ser especialmente útil para colaboradores externos ao seu negócio, como contratados. Para obter mais informações, consulte "[Adicionando colaboradores externos aos repositórios da organização](/organizations/managing-access-to-your-organizations-repositories/adding-outside-collaborators-to-repositories-in-your-organization)".

Com {% data variables.product.prodname_emus %}, a função de colaborador externo não existe. Os recursos da sua empresa só podem ser acessados por {% data variables.product.prodname_managed_users %}, que são sempre provisionados pelo seu IdP. Para dar aos colaboradores externos acesso à sua empresa, você teria que usar contas de convidados no seu IdP. Se você estiver interessado em {% data variables.product.prodname_emus %}, confirme com seus desenvolvedores se isso irá dificultar qualquer um de seus fluxos de trabalho existentes. Em caso afirmativo, o SAML SSO pode ser uma solução melhor.

### Você pode tolerar custos de migração?

Se sua empresa é nova para {% data variables.product.prodname_dotcom_the_website %}, o SAML SSO e o {% data variables.product.prodname_emus %} são igualmente fáceis de adotar.

Se você já está usando {% data variables.product.prodname_dotcom_the_website %} com desenvolvedores gerindo suas próprias contas de usuário, adotar {% data variables.product.prodname_emus %} exige a migração para uma nova conta corporativa. Para obter mais informações, consulte "[Sobre empresas com {% data variables.product.prodname_managed_users %}](/admin/identity-and-access-management/using-enterprise-managed-users-and-saml-for-iam/about-enterprise-managed-users#about-enterprises-with-managed-users)".

Embora {% data variables.product.prodname_emus %} seja grátis, o processo de migração pode exigir tempo ou custo da sua equipe. Confirme que este processo de migração é aceitável para o seu negócio e para os seus desenvolvedores. Em caso negativo, p SAML SSO pode ser a melhor opção para você.

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
