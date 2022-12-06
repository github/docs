---
title: Sobre a autenticação para sua empresa
shortTitle: About authentication
intro: 'Você {% ifversion ghae %}precisa configurar o SSO (logon único) de SAML para que as pessoas possam{% else %}pode escolher como as pessoas podem{% endif %} se autenticar para acessar {% ifversion ghec %}os recursos da empresa no {% data variables.product.product_name %}{% elsif ghes %}em {% data variables.location.product_location %}{% elsif ghae %}a empresa no {% data variables.product.product_name %}{% endif %}.'
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
ms.openlocfilehash: 16b5bdd98e37db2eef6fe7e4e02da1a4ce8fd406
ms.sourcegitcommit: 34d500fe45b362043b4b4685d6705a7bfb484d11
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 11/15/2022
ms.locfileid: '148164369'
---
## Sobre a autenticação para sua empresa

{% ifversion ghec %}

Proprietários do Enterprise no {% data variables.product.product_name %} podem controlar os requisitos de autenticação e acesso aos recursos da empresa. 

{% data reusables.enterprise.ghec-authentication-options %}

Depois de conhecer melhor essas opções, para determinar qual método é melhor para sua empresa, confira "[Como identificar o melhor método de autenticação para sua empresa](#identifying-the-best-authentication-method-for-your-enterprise)".

## Métodos de autenticação para {% data variables.product.product_name %}

As opções a seguir estão disponíveis para gerenciamento e autenticação de conta no {% data variables.product.product_name %}.

- [Autenticação por meio de {% data variables.location.product_location %}](#authentication-through-githubcom)
- [Autenticação por meio de {% data variables.location.product_location %} com restrição adicional de acesso SAML](#authentication-through-githubcom-with-additional-saml-access-restriction)
- [Autenticação com {% data variables.product.prodname_emus %} e federação](#authentication-with-enterprise-managed-users-and-federation)

### Autenticação por meio de {% data variables.location.product_location %}

Por padrão, cada membro precisa criar uma conta pessoal em {% data variables.location.product_location %}. Você permite acesso à empresa para que o membro possa acessar os recursos corporativos depois de entrar na conta em {% data variables.location.product_location %}. O membro gerencia a conta e pode contribuir com outras empresas, organizações e repositórios em {% data variables.location.product_location %}.

### Autenticação por meio de {% data variables.location.product_location %} com restrição adicional de acesso SAML

Se você configurar uma restrição adicional de acesso SAML, cada membro precisará criar e gerenciar uma conta pessoal em {% data variables.location.product_location %}. Você permite acesso à empresa, e o membro pode acessar os recursos dela depois de entrar na conta em {% data variables.location.product_location %} e se autenticar com êxito no IdP (provedor de identidade) de SAML. O membro pode contribuir com outras empresas, organizações e repositórios em {% data variables.location.product_location %} usando a respectiva conta pessoal. Para obter mais informações sobre como exigir a autenticação SAML para todos os recursos da sua empresa, confira "[Sobre o SAML para IAM corporativo](/admin/identity-and-access-management/using-saml-for-enterprise-iam/about-saml-for-enterprise-iam)".

Se você usar uma organização autônoma com o {% data variables.product.product_name %} ou se não quiser usar a autenticação SAML para todas as organizações da sua empresa, poderá configurar o SAML para uma organização individual. Para obter mais informações, confira "[Sobre o gerenciamento de identidades e acesso com o logon único do SAML](/organizations/managing-saml-single-sign-on-for-your-organization/about-identity-and-access-management-with-saml-single-sign-on)".

### Autenticação com {% data variables.product.prodname_emus %} e federação

Se você precisar de mais controle das contas para os membros da empresa em {% data variables.location.product_location %}, use {% data variables.product.prodname_emus %}. Com o {% data variables.product.prodname_emus %}, você provisiona e gerencia contas para os membros da empresa em {% data variables.location.product_location %} usando o IdP. Cada membro entra em uma conta que você cria, e sua empresa gerencia a conta. As contribuições para o restante do {% data variables.product.prodname_dotcom_the_website %} são restritas. Para obter mais informações, confira "[Sobre as {% data variables.product.prodname_emus %}](/admin/identity-and-access-management/using-enterprise-managed-users-and-saml-for-iam/about-enterprise-managed-users)".

## Como identificar o melhor método de autenticação para sua empresa

O SSO do SAML e {% data variables.product.prodname_emus %} aumentam a segurança dos recursos da empresa. Os {% data variables.product.prodname_emus %} também permitem que você controle as contas de usuário dos membros da empresa e restringe o que as contas podem fazer. No entanto, essas restrições poderão ser inaceitáveis para sua empresa se atrapalharem os fluxos de trabalho dos desenvolvedores.

Para determinar qual opção seria melhor para sua empresa, o SSO do SAML ou os {% data variables.product.prodname_emus %}, faça estas perguntas a si mesmo.

- [Você quer controlar as contas dos usuários?](#do-you-want-to-control-the-user-accounts-for-your-users)
- [Qual provedor de identidade a empresa usa?](#which-identity-provider-does-your-enterprise-use)
- [Os desenvolvedores trabalham em repositórios públicos, gists ou sites do {% data variables.product.prodname_pages %}?](#do-your-developers-work-in-public-repositories-gists-or-github-pages-sites)
- [Os desenvolvedores dependem de colaboração fora da empresa?](#do-your-developers-rely-on-collaboration-outside-of-your-enterprise)
- [A empresa depende de colaboradores externos?](#does-your-enterprise-rely-on-outside-collaborators)
- [A empresa pode arcar com custos de migração?](#can-your-enterprise-tolerate-migration-costs)

### Você quer controlar as contas dos usuários?

Os {% data variables.product.prodname_emus %} são adequados para a empresa se você não quer que os membros da empresa usem as próprias contas pessoais no {% data variables.product.prodname_dotcom_the_website %} para acessar os recursos da empresa. 

Com o SSO do SAML, os desenvolvedores criam e gerenciam as próprias contas pessoais e cada conta é vinculada a uma identidade do SAML no IdP. Os {% data variables.product.prodname_emus %} funcionam mais como outras soluções de SSO conhecidas, pois você provisiona as contas para os usuários. Você também pode garantir que as contas de usuário estejam em conformidade com a identidade da empresa controlando os nomes de usuário e os endereços de email associados às contas. 

Se, no momento, você exige que os usuários criem uma conta no {% data variables.product.prodname_dotcom_the_website %} para usar somente com sua empresa, os {% data variables.product.prodname_emus %} podem ser uma opção adequada. No entanto, o SSO do SAML pode ser uma opção melhor se você usa o IdP como fonte de verdade para o usuário e o uso do gerenciamento de acesso seria muito complexo. Por exemplo, talvez a empresa não tenha um processo estabelecido para integrar novos usuários ao IdP.

### Qual provedor de identidade a empresa usa?

Há suporte para {% data variables.product.prodname_emus %} em um número limitado de IdPs, enquanto o SSO do SAML dá suporte completo a um número maior de IdPs, além de suporte limitado a todos os IdPs que implementam o padrão SAML 2.0. Para obter a lista de IdPs com suporte para cada opção, confira "[Sobre {% data variables.product.prodname_emus %}](/admin/identity-and-access-management/using-enterprise-managed-users-and-saml-for-iam/about-enterprise-managed-users#identity-provider-support)" e "[Sobre o SAML para IAM empresarial](/admin/identity-and-access-management/using-saml-for-enterprise-iam/about-saml-for-enterprise-iam#supported-idps)".

Você pode usar {% data variables.product.prodname_emus %} com um IdP sem suporte somente ao federar o IdP sem suporte a um IdP com suporte a ser usado como um ponto de integração. Para evitar essa complexidade extra, o SSO do SAML pode ser uma solução melhor.

### Os desenvolvedores trabalham em repositórios públicos, gists ou sites do {% data variables.product.prodname_pages %}?

Para impedir que os membros da empresa vazem acidentalmente conteúdo empresarial para o público no {% data variables.product.prodname_dotcom_the_website %}, os {% data variables.product.prodname_emus %} impõem restrições fortes sobre o que os usuários podem fazer. Por exemplo, {% data variables.enterprise.prodname_managed_users %} não podem criar repositórios públicos, gists de qualquer visibilidade nem sites do {% data variables.product.prodname_pages %} visíveis fora da empresa. Para obter uma lista completa de restrições, confira "[Habilidades e restrições de {% data variables.enterprise.prodname_managed_users %}](/admin/identity-and-access-management/using-enterprise-managed-users-and-saml-for-iam/about-enterprise-managed-users#abilities-and-restrictions-of-managed-users)".

Essas restrições são inaceitáveis para algumas empresas. Para determinar se os {% data variables.product.prodname_emus %} funcionarão no seu caso, examine as restrições com os desenvolvedores e confirme se alguma delas dificultará os fluxos de trabalho existentes. Se dificultarem, o SSO do SAML poderá ser uma opção melhor para sua empresa.

### Os desenvolvedores dependem de colaboração fora da empresa?

{% data variables.enterprise.prodname_managed_users_caps %} apenas podem contribuir em repositórios dentro da empresa. Se os desenvolvedores precisarem contribuir para repositórios dentro e fora da empresa, incluindo repositórios privados, {% data variables.product.prodname_emus %} podem não ser adequados para sua empresa. O SSO do SAML pode ser uma solução melhor.

Algumas empresas mantêm repositórios em uma empresa existente usando o SSO de SAML em {% data variables.location.product_location %} e também criam uma {% data variables.enterprise.prodname_emu_enterprise %}. Os desenvolvedores que contribuem em repositórios pertencentes a ambas as empresas por meio de uma só estação de trabalho precisam alternar entre as contas em {% data variables.location.product_location %} em um só navegador ou usar um navegador diferente para cada conta. O desenvolvedor também pode precisar personalizar a configuração do Git da estação de trabalho para acomodar as duas contas. A complexidade desse fluxo de trabalho pode aumentar o risco de vazamento de código interno por engano para o público.

Se você decidir criar uma {% data variables.enterprise.prodname_emu_enterprise %} mas exigir que os desenvolvedores contribuam para recursos fora da empresa usando apenas uma estação de trabalho, dê suporte para alternância entre contas na configuração do Git local do desenvolvedor. Para obter mais informações, confira "[Sobre as {% data variables.product.prodname_emus %}](/admin/identity-and-access-management/using-enterprise-managed-users-for-iam/about-enterprise-managed-users#supporting-developers-with-multiple-user-accounts-on-githubcom)".

### A empresa depende de colaboradores externos?

Com o SSO do SAML, você pode dar acesso a repositórios específicos para pessoas que não são membros do diretório do IdP usando a função de colaborador externo. Isso pode ser útil principalmente para colaboradores externos, como prestadores de serviços. Para obter mais informações, confira "[Como adicionar colaboradores externos aos repositórios da organização](/organizations/managing-access-to-your-organizations-repositories/adding-outside-collaborators-to-repositories-in-your-organization)".

Com {% data variables.product.prodname_emus %}, a função de colaborador externo não existe. Os recursos da empresa só podem ser acessados pelos {% data variables.enterprise.prodname_managed_users %} que são sempre provisionados pelo IdP. Para dar aos colaboradores externos acesso à empresa, seria necessário usar contas de convidado no IdP. Se você estiver interessado em {% data variables.product.prodname_emus %}, confirme com os desenvolvedores se isso dificultará algum dos fluxos de trabalho existentes. Se for dificultar, o SSO do SAML será uma solução melhor.

### A empresa pode arcar com custos de migração?

Se a empresa começou a usar o {% data variables.product.prodname_dotcom_the_website %} recentemente, a adoção do SSO do SAML ou dos {% data variables.product.prodname_emus %} terá o mesmo nível de facilidade.

Se você já estiver usando o {% data variables.product.prodname_dotcom_the_website %} com os desenvolvedores gerenciando as próprias contas de usuário, a adoção de {% data variables.product.prodname_emus %} exigirá a migração para uma nova conta empresarial. Para obter mais informações, confira "[Sobre empresas com {% data variables.enterprise.prodname_managed_users %}](/admin/identity-and-access-management/using-enterprise-managed-users-and-saml-for-iam/about-enterprise-managed-users#about-enterprises-with-managed-users)".

Embora o uso de {% data variables.product.prodname_emus %} seja gratuito, o processo de migração pode exigir tempo ou custo da equipe. Confirme se esse processo de migração é aceitável para a empresa e os desenvolvedores. Se não for aceitável, o SSO do SAML será a melhor opção para você.

{% elsif ghes %}

Os administradores do site podem decidir como as pessoas se autenticam para acessar uma instância do {% data variables.product.product_name %}. Você pode usar autenticação interna do {% data variables.product.product_name %} ou, se quiser centralizar o gerenciamento de identidade e acesso para os aplicativos Web que sua equipe usa, você pode configurar um método de autenticação externa.

## Métodos de autenticação para {% data variables.product.product_name %}

Os métodos de autenticação a seguir estão disponíveis para {% data variables.product.product_name %}.

- [Autenticação interna](#built-in-authentication)
- [Autenticação externa](#external-authentication)

### Autenticação interna

{% data reusables.enterprise_user_management.built-in-authentication-new-accounts %} Para acessar sua instância, as pessoas se autenticam com as credenciais da conta. Para obter mais informações, confira "[Configurar a autenticação interna](/admin/identity-and-access-management/using-built-in-authentication/configuring-built-in-authentication)".

### Autenticação externa

Se você usa um diretório externo ou IdP (provedor de identidade) para centralizar o acesso a vários aplicativos Web, configure a autenticação externa para {% data variables.location.product_location %}. Para obter mais informações, consulte os seguintes artigos.

- "[Usar CAS para IAM empresarial](/admin/identity-and-access-management/using-cas-for-enterprise-iam)"
- "[Usar LDAP para IAM empresarial](/admin/identity-and-access-management/using-ldap-for-enterprise-iam)"
- "[Usar SAML para IAM empresarial](/admin/identity-and-access-management/using-saml-for-enterprise-iam)"

Se você optar por usar a autenticação externa, também poderá configurar a autenticação de fallback para pessoas que não têm uma conta em seu provedor de autenticação externa. Por exemplo, talvez você queira conceder acesso a um usuário de contrato ou de computador. Para obter mais informações, confira "[Como permitir a autenticação interna para usuários fora do seu provedor](/admin/identity-and-access-management/managing-iam-for-your-enterprise/allowing-built-in-authentication-for-users-outside-your-provider)".

{% ifversion scim-for-ghes %}

Se você usa o SSO de SAML para autenticação, também pode provisionar usuários e mapear grupos do IdP para equipes usando o SCIM. Para obter mais informações, confira "[Como configurar o provisionamento de usuários com o SCIM na empresa](/admin/identity-and-access-management/using-saml-for-enterprise-iam/configuring-user-provisioning-with-scim-for-your-enterprise)".

{% endif %}

{% elsif ghae %}

{% data variables.product.product_name %} usa o SAML SSO para autenticação. Proprietários do Enterprise devem configurar o SSO do SAML com um IdP (provedor de identidade) do SAML durante a inicialização. Para obter mais informações, confira "[Sobre o SAML para IAM empresarial](/admin/identity-and-access-management/using-saml-for-enterprise-iam/about-saml-for-enterprise-iam)".

{% endif %}

## Leitura adicional

- "[Tipos de contas do {% data variables.product.company_short %}](/get-started/learning-about-github/types-of-github-accounts)"
- "[Sobre contas empresariais](/admin/overview/about-enterprise-accounts)" {%- ifversion ghec %}
- "[Posso criar contas para pessoas na minha organização?](/organizations/managing-membership-in-your-organization/can-i-create-accounts-for-people-in-my-organization)"
{% endif %}
