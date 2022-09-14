---
title: Sobre usuários gerenciados pela empresa
shortTitle: About managed users
intro: 'Você pode gerenciar centralmente a identidade e o acesso dos integrantes da empresa em {% data variables.product.prodname_dotcom %} a partir do seu provedor de identidade.'
redirect_from:
  - /early-access/github/articles/get-started-with-managed-users-for-your-enterprise
  - /github/setting-up-and-managing-your-enterprise/managing-your-enterprise-users-with-your-identity-provider/about-enterprise-managed-users
  - /admin/authentication/managing-your-enterprise-users-with-your-identity-provider/about-enterprise-managed-users
  - /admin/identity-and-access-management/managing-iam-with-enterprise-managed-users/about-enterprise-managed-users
  - /admin/identity-and-access-management/using-enterprise-managed-users-and-saml-for-iam/about-enterprise-managed-users
versions:
  ghec: '*'
type: overview
topics:
  - Accounts
  - Authentication
  - Enterprise
  - SSO
ms.openlocfilehash: 0a71f698a11b8a0998d69dc0b8fb824378b2739b
ms.sourcegitcommit: 478f2931167988096ae6478a257f492ecaa11794
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/09/2022
ms.locfileid: '147687057'
---
## Sobre os {% data variables.product.prodname_emus %}

Com {% data variables.product.prodname_emus %}, você pode controlar as contas de usuário dos integrantes da empresa por meio do provedor de identidade (IdP). Os usuários atribuídos ao aplicativo {% data variables.product.prodname_emu_idp_application %} no seu IdP são provisionados como novas contas de usuário em {% data variables.product.prodname_dotcom %} e adicionados à sua empresa. Você controla nomes de usuários, dados de perfil, associações a equipes e acesso a repositórios das contas de usuário por meio do IdP.

No seu IdP, você pode dar a cada {% data variables.product.prodname_managed_user %} a função do proprietário da empresa, usuário ou gerente de cobrança. {% data variables.product.prodname_managed_users_caps %} pode possuir organizações dentro da sua empresa e pode adicionar outros {% data variables.product.prodname_managed_users %} às organizações e equipes internamente. Para obter mais informações, confira "[Funções em uma empresa](/github/setting-up-and-managing-your-enterprise/managing-users-in-your-enterprise/roles-in-an-enterprise)" e "[Sobre organizações](/organizations/collaborating-with-groups-in-organizations/about-organizations)".

As associações da organização podem ser gerenciadas manualmente ou atualizadas automaticamente à medida que os {% data variables.product.prodname_managed_users %} são adicionados aos grupos do IdP conectados às equipes da organização. Quando um {% data variables.product.prodname_managed_user %} é adicionado manualmente a uma organização, o cancelamento a atribuição do aplicativo de {% data variables.product.prodname_emu_idp_application %} no seu IdP irá suspender o usuário, mas não removê-lo da organização. Para obter mais informações sobre como gerenciar a organização e a associação de equipe automaticamente, confira "[Gerenciando associações de equipe com grupos de provedores de identidade](/admin/identity-and-access-management/managing-iam-with-enterprise-managed-users/managing-team-memberships-with-identity-provider-groups)".

{% ifversion oidc-for-emu %}

{% data reusables.enterprise-accounts.emu-cap-validates %} Para obter mais informações, confira "[Sobre o suporte à política de acesso condicional do IdP](/admin/identity-and-access-management/using-enterprise-managed-users-for-iam/about-support-for-your-idps-conditional-access-policy)".

{% endif %}

Você pode permitir que os {% data variables.product.prodname_managed_users %} acessem repositórios na empresa e contribuam neles, mas os {% data variables.product.prodname_managed_users %} não podem criar conteúdo público nem colaborar com outros usuários, organizações e empresas no restante do {% data variables.product.prodname_dotcom %}. Para obter mais informações, confira "[Habilidades e restrições de {% data variables.product.prodname_managed_users %}](#abilities-and-restrictions-of-enterprise-managed-users)".

Os nomes de usuário do {% data variables.product.prodname_managed_users %} da empresa e as suas informações de perfil como, por exemplo, nomes de exibição e endereços de e-mail, são definidos por meio do seu IdP e não podem ser alterados pelos próprios usuários. Para obter mais informações, confira "[Nomes de usuário e informações de perfil](#usernames-and-profile-information)".

Os proprietários de empresas podem auditar todas as ações de {% data variables.product.prodname_managed_users %}' em {% data variables.product.prodname_dotcom %}. Para obter mais informações, confira "[Eventos de log de auditoria da empresa](/admin/monitoring-activity-in-your-enterprise/reviewing-audit-logs-for-your-enterprise/audit-log-events-for-your-enterprise#about-audit-log-events-for-your-enterprise)".

Para usar {% data variables.product.prodname_emus %}, você precisa de um tipo de conta corporativa separado com {% data variables.product.prodname_emus %} habilitado. Para obter mais informações sobre como criar essa conta, confira "[Sobre empresas com usuários gerenciados](#about-enterprises-with-managed-users)".

{% note %}

**Observação:** há várias opções para gerenciamento de identidade e acesso com o {% data variables.product.prodname_ghe_cloud %}. O {% data variables.product.prodname_emus %} não é a melhor solução para todos os clientes. Para saber se o {% data variables.product.prodname_emus %} é adequado para sua empresa, confira "[Sobre autenticação na sua empresa](/admin/identity-and-access-management/managing-iam-for-your-enterprise/about-authentication-for-your-enterprise#identifying-the-best-authentication-method-for-your-enterprise)".

{% endnote %}

## Suporte do provedor de identidade

O {% data variables.product.prodname_emus %} dá suporte aos seguintes métodos de autenticação e IdPs{% ifversion oidc-for-emu %}:

|                                  | SAML                                          | OIDC (beta)                                   |
|----------------------------------|-----------------------------------------------|-----------------------------------------------|
| Azure Active Directory           | {% octicon "check" aria-label="Check icon" %} | {% octicon "check" aria-label="Check icon" %} |
| Okta                             | {% octicon "check" aria-label="Check icon" %} |                                               |
{% else %}:

{% data reusables.enterprise-accounts.emu-supported-idps %}

{% endif %}

## Habilidades e restrições de {% data variables.product.prodname_managed_users %}

O {% data variables.product.prodname_managed_users_caps %} só pode contribuir para repositórios privados e internos da sua empresa e repositórios privados pertencentes à sua conta de usuário. {% data variables.product.prodname_managed_users_caps %} tem acesso somente leitura a toda a comunidade de {% data variables.product.prodname_dotcom %} em geral. Estas restrições de acesso e visibilidade para usuários e conteúdo aplicam-se a todas as solicitações, incluindo solicitações da API.

* Os {% data variables.product.prodname_managed_users_caps %} não podem ser convidados para organizações ou repositórios fora da empresa, nem {% data variables.product.prodname_managed_users %} podem ser convidados para outras empresas. 
* Os colaboradores externos não são compatíveis com {% data variables.product.prodname_emus %}.
* {% data variables.product.prodname_managed_users_caps %} não pode criar problemas ou pull requests, comentar ou adicionar reações, nem estrelas, inspeção ou repositórios de bifurcação fora da empresa.
* {% data variables.product.prodname_managed_users_caps %} pode visualizar todos os repositórios públicos em {% data variables.product.prodname_dotcom_the_website %}, mas não pode fazer push de código para repositórios fora da empresa.
* {% data variables.product.prodname_managed_users_caps %} e o conteúdo que criaa é visível apenas para outros integrantes da empresa. 
* {% data variables.product.prodname_managed_users_caps %} não pode seguir os usuários fora da empresa.
* {% data variables.product.prodname_managed_users_caps %} não pode criar gists ou comentários em gists.
* {% data variables.product.prodname_managed_users_caps %} não pode instalar {% data variables.product.prodname_github_apps %} nas suas contas de usuário.
* Outros usuários de {% data variables.product.prodname_dotcom %} não podem ver, mencionar ou convidar um {% data variables.product.prodname_managed_user %} para colaborar.
* Você pode escolher se os {% data variables.product.prodname_managed_users %} são capazes de criar repositórios pertencentes às contas de usuário deles. Para obter mais informações, confira "[Como impor políticas de gerenciamento de repositório na sua empresa](/admin/policies/enforcing-policies-for-your-enterprise/enforcing-repository-management-policies-in-your-enterprise#enforcing-a-policy-for-repository-creation)".
* Se você permitir que os {% data variables.product.prodname_managed_users %} criem repositórios pertencentes às contas de usuário deles, eles só poderão ter repositórios privados e só poderão convidar outros membros corporativos para colaborar em seus repositórios de propriedade do usuário.
* {% data reusables.enterprise-accounts.emu-forks %}
* Apenas repositórios privados e internos podem ser criados em organizações pertencentes a um {% data variables.product.prodname_emu_enterprise %}, dependendo das configurações de visibilidade da organização e do repositório corporativo. 
* {% data variables.product.prodname_managed_users_caps %} são limitados no uso de {% data variables.product.prodname_pages %}. Para obter mais informações, confira "[Sobre o {% data variables.product.prodname_pages %}](/pages/getting-started-with-github-pages/about-github-pages#limitations-for-enterprise-managed-users)".

## Introdução aos {% data variables.product.prodname_emus %}

Para que os desenvolvedores possam usar o {% data variables.product.prodname_ghe_cloud %} com o {% data variables.product.prodname_emus %}, você precisa seguir uma série de etapas de configuração.

1. Para usar {% data variables.product.prodname_emus %}, você precisa de um tipo de conta corporativa separado com {% data variables.product.prodname_emus %} habilitado. Para experimentar {% data variables.product.prodname_emus %} ou para discutir opções para a migração da sua empresa existente, entre em contato com a [Equipe de vendas do {% data variables.product.prodname_dotcom %}](https://enterprise.github.com/contact).
  
  Seu contato na equipe do GitHub de vendas vai trabalhar com você para criar seu novo {% data variables.product.prodname_emu_enterprise %}. Você deverá fornecer o endereço de e-mail para o usuário que irá configurar sua empresa e um código curto que será usado como sufixo para os nomes de usuários da sua empresa. {% data reusables.enterprise-accounts.emu-shortcode %} Para obter mais informações, confira "[Nomes de usuário e informações de perfil](#usernames-and-profile-information)".
  
2. Após criarmos sua empresa, você receberá um e-mail de {% data variables.product.prodname_dotcom %} convidando você a escolher uma senha para o usuário de configuração da sua empresa, que será o primeiro proprietário da empresa. Use uma janela de navegação anônima ou privada ao definir a senha. O usuário de configuração é usado apenas para configurar a integração entre o logon único e o provisionamento do SCIM para a empresa. Ele não terá mais acesso para administrar a conta empresarial quando o SSO for habilitado com sucesso. O nome do usuário de configuração é o código curto da sua empresa com o sufixo `_admin`. 
  
  {% note %}
  
  {% data reusables.enterprise-accounts.emu-password-reset-session %}
  
  {% endnote %}
  
3. Depois que você entrar como o usuário de configuração, recomendamos que habilite a autenticação de dois fatores. Para obter mais informações, confira "[Como configurar a autenticação de dois fatores](/authentication/securing-your-account-with-two-factor-authentication-2fa/configuring-two-factor-authentication)".

1. Para começar, configure {% ifversion oidc-for-emu %}como os membros serão autenticados. Se você estiver usando o Azure Active Directory como provedor de identidade, poderá escolher entre o OIDC (OpenID Connect) e o SAML (Security Assertion Markup Language). As duas opções oferecem uma experiência de entrada perfeita aos membros, mas apenas o OIDC inclui suporte para CAP (políticas de acesso condicional). Se você estiver usando o Okta como provedor de identidade, poderá usar o SAML para autenticar os membros.{% else %} SSO do SAML para sua empresa. Para obter mais informações, confira "[Como configurar o logon único do SAML para usuários empresariais gerenciados](/admin/identity-and-access-management/managing-iam-with-enterprise-managed-users/configuring-saml-single-sign-on-for-enterprise-managed-users)."{% endif %}
  
  {% ifversion oidc-for-emu %}
  
  Para começar, leia o guia do método de autenticação escolhido.
  
    - "[Como configurar o OIDC para usuários empresariais gerenciados](/admin/identity-and-access-management/using-enterprise-managed-users-for-iam/configuring-oidc-for-enterprise-managed-users)".
    - "[Como configurar o logon único do SAML para usuários empresariais gerenciados](/admin/identity-and-access-management/managing-iam-with-enterprise-managed-users/configuring-saml-single-sign-on-for-enterprise-managed-users)".
  
  {% endif %}
  
4. Depois de configurar o SSO, você poderá configurar o provisionamento do SCIM. O SCIM é usado pelo provedor de identidade para provisionar e gerenciar contas e equipes de membros no {% data variables.product.prodname_dotcom_the_website %}. Para obter mais informações de como configurar o provisionamento do SCIM, confira "[Como configurar o provisionamento do SCIM para usuários empresariais gerenciados](/admin/identity-and-access-management/managing-iam-with-enterprise-managed-users/configuring-scim-provisioning-for-enterprise-managed-users)".
  
5. Depois que a autenticação e o provisionamento forem configurados, você poderá começar a provisionar membros e gerenciar equipes. Para obter mais informações, confira "[Como gerenciar associações à equipe com grupos de provedores de identidade](/admin/identity-and-access-management/using-enterprise-managed-users-for-iam/managing-team-memberships-with-identity-provider-groups)".

Se os membros da sua empresa precisarem usar uma estação de trabalho para contribuir com repositórios em {% data variables.product.product_location %} por meio de um {% data variables.product.prodname_managed_user %} e de uma conta pessoal, você poderá fornecer suporte. Para obter mais informações, confira "[Suporte a desenvolvedores com várias contas de usuário em {% data variables.product.prodname_dotcom_the_website %}](#supporting-developers-with-multiple-user-accounts-on-githubcom)".

## Efetuar a autenticação um {% data variables.product.prodname_managed_user %}

{% data variables.product.prodname_managed_users_caps %} deve efetuar a autenticação por meio de seu provedor de identidade. Para efetuar a autenticação, um {% data variables.product.prodname_managed_user %} pode acessar o seu portal de aplicativo do IdP ou usar a página de login no {% data variables.product.prodname_dotcom_the_website %}.

{% data reusables.enterprise-accounts.about-recovery-codes %} Para obter mais informações, confira "[Como gerenciar códigos de recuperação para sua empresa](/admin/identity-and-access-management/managing-recovery-codes-for-your-enterprise)".

### Efetuando a autenticação como {% data variables.product.prodname_managed_user %} por meio de {% data variables.product.prodname_dotcom_the_website %}

1. Navegue até [https://github.com/login](https://github.com/login).
1. Na caixa de texto "Nome de usuário ou endereço de e-mail", insira seu nome de usuário, incluindo o sublinhado e o código curto.
  ![Captura de tela mostrando o formulário de logon](/assets/images/help/enterprises/emu-login-username.png) Ao reconhecer seu nome de usuário, o formulário será atualizado. Você não precisa digitar sua senha neste formulário.
1. Para continuar acessando o provedor de identidade, clique em **Entrar com seu provedor de identidade**.
  ![Captura de tela mostrando o botão "Entrar com seu provedor de identidade"](/assets/images/help/enterprises/emu-login-submit.png)

## Nome de usuário e informações de perfil

O {% data variables.product.product_name %} cria automaticamente um nome de usuário para cada pessoa normalizando um identificador fornecido pelo IdP. Para obter mais informações, confira "[Considerações de nome de usuário para autenticação externa](/admin/identity-and-access-management/managing-iam-for-your-enterprise/username-considerations-for-external-authentication)".

Um conflito poderá ocorrer ao provisionar usuários se as partes exclusivas do identificador fornecidas pelo IdP forem removidas durante a normalização. Se você não puder provisionar um usuário devido a um conflito de nome de usuário, você deverá modificar o nome de usuário fornecido pelo IdP. Para obter mais informações, confira "[Resolvendo conflitos de nome de usuário](/admin/identity-and-access-management/managing-iam-for-your-enterprise/username-considerations-for-external-authentication#resolving-username-conflicts)".

O nome do perfil e endereço de email de um {% data variables.product.prodname_managed_user %} também é fornecido pelo IdP. {% data variables.product.prodname_managed_users_caps %} não podem alterar o nome de perfil nem o endereço de email no {% data variables.product.prodname_dotcom %} e IdP pode fornecer um só endereço de email.

## Suporte a desenvolvedores com várias contas de usuário em {% data variables.product.product_location %}

Pessoas da sua equipe talvez precisem contribuir com recursos em {% data variables.product.product_location %} que estão fora da sua {% data variables.product.prodname_emu_enterprise %}. Por exemplo, talvez você deseje manter uma empresa separada para os projetos de código aberto da sua empresa. Como um {% data variables.product.prodname_managed_user %} não pode contribuir com recursos públicos, os usuários precisarão manter uma conta pessoal separada para esse trabalho.

Pessoas que devem contribuir com duas contas de usuário em {% data variables.product.product_location %} usando uma estação de trabalho podem configurar o Git para simplificar o processo. Para obter mais informações, confira "[Como gerenciar várias contas](/account-and-profile/setting-up-and-managing-your-personal-account-on-github/managing-your-personal-account/managing-multiple-accounts)".
