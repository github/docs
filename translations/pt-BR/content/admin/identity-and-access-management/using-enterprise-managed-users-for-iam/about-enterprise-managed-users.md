---
title: Sobre usuários gerenciados pela empresa
shortTitle: Sobre usuários gerenciados
intro: 'Você pode gerenciar centralmente a identidade e o acesso dos integrantes da empresa em {% data variables.product.prodname_dotcom %} a partir do seu provedor de identidade.'
product: '{% data reusables.gated-features.emus %}'
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
---

## Sobre o {% data variables.product.prodname_emus %}

Com {% data variables.product.prodname_emus %}, você pode controlar as contas de usuário dos integrantes da empresa por meio do provedor de identidade (IdP). You can simplify authentication with SAML{% if oidc-for-emu %} or OIDC{% endif %} single sign-on (SSO) and provision, update, and deprovision user accounts for your enterprise members. Os usuários atribuídos ao aplicativo {% data variables.product.prodname_emu_idp_application %} no seu IdP são provisionados como novas contas de usuário em {% data variables.product.prodname_dotcom %} e adicionados à sua empresa. Você controla nomes de usuários, dados de perfil, associação de equipe e acesso ao repositório a partir do seu IdP.

No seu IdP, você pode dar a cada {% data variables.product.prodname_managed_user %} a função do proprietário da empresa, usuário ou gerente de cobrança. {% data variables.product.prodname_managed_users_caps %} pode possuir organizações dentro da sua empresa e pode adicionar outros {% data variables.product.prodname_managed_users %} às organizações e equipes internamente. Para obter mais informações, consulte "[Funções em uma empresa](/github/setting-up-and-managing-your-enterprise/managing-users-in-your-enterprise/roles-in-an-enterprise)" e "[Sobre as organizações](/organizations/collaborating-with-groups-in-organizations/about-organizations)".

Os integrantes da organização podem ser gerenciados manualmente ou atualizados automaticamente, já que {% data variables.product.prodname_managed_users %} são adicionados aos grupos do IdP que estão conectados às equipes dentro da organização. Quando um {% data variables.product.prodname_managed_user %} é adicionado manualmente a uma organização, o cancelamento a atribuição do aplicativo de {% data variables.product.prodname_emu_idp_application %} no seu IdP irá suspender o usuário, mas não removê-lo da organização. Para obter mais informações sobre o gerenciamento da organização e a associação à equipe automaticamente, consulte "[Gerenciando associações de equipe com grupos de provedores de identidade](/admin/identity-and-access-management/managing-iam-with-enterprise-managed-users/managing-team-memberships-with-identity-provider-groups)".

{% if oidc-for-emu %}

{% data reusables.enterprise-accounts.emu-cap-validates %} For more information, see "[About support for your IdP's Conditional Access Policy](/admin/identity-and-access-management/using-enterprise-managed-users-for-iam/about-support-for-your-idps-conditional-access-policy)."

{% endif %}

Você pode conceder {% data variables.product.prodname_managed_users %} acesso e a capacidade de contribuir para repositórios na sua empresa, mas {% data variables.product.prodname_managed_users %} não pode criar conteúdo público ou colaborar com outros usuários, organizações e empresas no resto de {% data variables.product.prodname_dotcom %}. O {% data variables.product.prodname_managed_users %} provisionado para sua empresa não pode ser convidado para organizações ou repositórios fora da empresa, nem {% data variables.product.prodname_managed_users %} pode ser convidado para outras empresas. Os colaboradores externos não são compatíveis com {% data variables.product.prodname_emus %}.

Os nomes de usuário do {% data variables.product.prodname_managed_users %} da empresa e as suas informações de perfil como, por exemplo, nomes de exibição e endereços de e-mail, são definidos por meio do seu IdP e não podem ser alterados pelos próprios usuários. Para obter mais informações, consulte "[Nomes de usuário e informações do perfil](#usernames-and-profile-information)".

{% data reusables.enterprise-accounts.emu-forks %}

Os proprietários de empresas podem auditar todas as ações de {% data variables.product.prodname_managed_users %}' em {% data variables.product.prodname_dotcom %}. For more information, see "[Audit log events for your enterprise](/admin/monitoring-activity-in-your-enterprise/reviewing-audit-logs-for-your-enterprise/audit-log-events-for-your-enterprise#about-audit-log-events-for-your-enterprise)."

Para usar {% data variables.product.prodname_emus %}, você precisa de um tipo de conta corporativa separado com {% data variables.product.prodname_emus %} habilitado. Para obter mais informações sobre a criação desta conta, consulte "[Sobre empresas com usuários gerenciados](#about-enterprises-with-managed-users)".


## Suporte do provedor de identidade

{% data variables.product.prodname_emus %} supports the following IdPs{% if oidc-for-emu %} and authentication methods:

|                        | SAML                                          | OIDC (beta)                                   |
| ---------------------- | --------------------------------------------- | --------------------------------------------- |
| Azure Active Directory | {% octicon "check" aria-label="Check icon" %} | {% octicon "check" aria-label="Check icon" %}
| Okta                   | {% octicon "check" aria-label="Check icon" %} |                                               |
{% else %}:

{% data reusables.enterprise-accounts.emu-supported-idps %}

{% endif %}

## Habilidades e restrições de {% data variables.product.prodname_managed_users %}

O {% data variables.product.prodname_managed_users_caps %} só pode contribuir para repositórios privados e internos da sua empresa e repositórios privados pertencentes à sua conta de usuário. {% data variables.product.prodname_managed_users_caps %} tem acesso somente leitura a toda a comunidade de {% data variables.product.prodname_dotcom %} em geral. Estas restrições de acesso e visibilidade para usuários e conteúdo aplicam-se a todas as solicitações, incluindo solicitações da API.

* {% data variables.product.prodname_managed_users_caps %} não pode criar problemas ou pull requests, comentar ou adicionar reações, nem estrelas, inspeção ou repositórios de bifurcação fora da empresa.
* {% data variables.product.prodname_managed_users_caps %} pode visualizar todos os repositórios públicos em {% data variables.product.prodname_dotcom_the_website %}, mas não pode fazer push de código para repositórios fora da empresa.
* {% data variables.product.prodname_managed_users_caps %} e o conteúdo que criaa é visível apenas para outros integrantes da empresa.
* {% data variables.product.prodname_managed_users_caps %} não pode seguir os usuários fora da empresa.
* {% data variables.product.prodname_managed_users_caps %} não pode criar gists ou comentários em gists.
* {% data variables.product.prodname_managed_users_caps %} não pode instalar {% data variables.product.prodname_github_apps %} nas suas contas de usuário.
* Outros usuários de {% data variables.product.prodname_dotcom %} não podem ver, mencionar ou convidar um {% data variables.product.prodname_managed_user %} para colaborar.
* {% data variables.product.prodname_managed_users_caps %} só pode criar repositórios privados e {% data variables.product.prodname_managed_users %} só pode convidar outros integrantes da empresa para colaborar nos seus próprios repositórios.
* Apenas repositórios privados e internos podem ser criados em organizações pertencentes a um {% data variables.product.prodname_emu_enterprise %}, dependendo das configurações de visibilidade da organização e do repositório corporativo.
* {% data variables.product.prodname_managed_users_caps %} são limitados em seu uso de {% data variables.product.prodname_pages %}. Para obter mais informações, consulte "[Sobre {% data variables.product.prodname_pages %}](/pages/getting-started-with-github-pages/about-github-pages#limitations-for-enterprise-managed-users)".

## Getting started with {% data variables.product.prodname_emus %}

Before your developers can use {% data variables.product.prodname_ghe_cloud %} with {% data variables.product.prodname_emus %}, you must follow a series of configuration steps.

1. Para usar {% data variables.product.prodname_emus %}, você precisa de um tipo de conta corporativa separado com {% data variables.product.prodname_emus %} habilitado. Para experimentar {% data variables.product.prodname_emus %} ou para discutir opções para a migração da sua empresa existente, entre em contato com a [Equipe de vendas de {% data variables.product.prodname_dotcom %}](https://enterprise.github.com/contact).

  Seu contato na equipe do GitHub de vendas vai trabalhar com você para criar seu novo {% data variables.product.prodname_emu_enterprise %}. Você deverá fornecer o endereço de e-mail para o usuário que irá configurar sua empresa e um código curto que será usado como sufixo para os nomes de usuários da sua empresa. {% data reusables.enterprise-accounts.emu-shortcode %} Para obter mais informações, consulte "[Nomes de usuário e informações do perfil](#usernames-and-profile-information)"

2. Após criarmos sua empresa, você receberá um e-mail de {% data variables.product.prodname_dotcom %} convidando você a escolher uma senha para o usuário de configuração da sua empresa, que será o primeiro proprietário da empresa. Use uma janela de navegação anônima ou privada ao definir a senha. The setup user is only used to configure single sign-on and SCIM provisioning integration for the enterprise. It will no longer have access to administer the enterprise account once SSO is successfully enabled. O nome do usuário de configuração é o código curto da sua empresa com o sufixo `_admin`.

  {% note %}

  {% data reusables.enterprise-accounts.emu-password-reset-session %}

  {% endnote %}

3. After you log in to your setup user, get started by configuring {% if oidc-for-emu %}how your members will authenticate. If you are using Azure Active Directory as your identity provider, you can choose between OpenID Connect (OIDC) and Security Assertion Markup Language (SAML). Both options provide a seamless sign-in experience for your members, but only OIDC includes support for Conditional Access Policies (CAP). If you are using Okta as your identity provider, you can use SAML to authenticate your members.{% else %}SAML SSO for your enterprise. For more information, see "[Configuring SAML single sign-on for Enterprise Managed Users](/admin/identity-and-access-management/managing-iam-with-enterprise-managed-users/configuring-saml-single-sign-on-for-enterprise-managed-users)."{% endif %}

  {% if oidc-for-emu %}

  To get started, read the guide for your chosen authentication method.

    - "[Configuring OIDC for Enterprise Managed Users](/admin/identity-and-access-management/using-enterprise-managed-users-for-iam/configuring-oidc-for-enterprise-managed-users)."
    - "[Configuring SAML single sign-on for Enterprise Managed Users](/admin/identity-and-access-management/managing-iam-with-enterprise-managed-users/configuring-saml-single-sign-on-for-enterprise-managed-users)."

  {% endif %}

4. Once you have configured SSO, you can configure SCIM provisioning. SCIM is how your identity provider will provision and manage member accounts and teams on {% data variables.product.prodname_dotcom_the_website %}. For more information on configuring SCIM provisioning, see "[Configuring SCIM provisioning for enterprise managed users](/admin/identity-and-access-management/managing-iam-with-enterprise-managed-users/configuring-scim-provisioning-for-enterprise-managed-users)."

5. Once authentication and provisioning are configured, you can start provisioning members and managing teams. Para obter mais informações, consulte "[Gerenciar associações de equipe com grupos de provedor de identidade](/admin/identity-and-access-management/using-enterprise-managed-users-for-iam/managing-team-memberships-with-identity-provider-groups)".

## Efetuar a autenticação um {% data variables.product.prodname_managed_user %}

{% data variables.product.prodname_managed_users_caps %} deve efetuar a autenticação por meio de seu provedor de identidade. Para efetuar a autenticação, um {% data variables.product.prodname_managed_user %} pode acessar o seu portal de aplicativo do IdP ou usar a página de login no {% data variables.product.prodname_dotcom_the_website %}.

{% data reusables.enterprise-accounts.about-recovery-codes %} Para obter mais informações, consulte "[Gerenciar a códigos de recuperação para a sua empresa](/admin/identity-and-access-management/managing-recovery-codes-for-your-enterprise)".

### Efetuando a autenticação como {% data variables.product.prodname_managed_user %} por meio de {% data variables.product.prodname_dotcom_the_website %}

1. Acesse [https://github.com/login](https://github.com/login).
1. Na caixa de texto "Nome de usuário ou endereço de e-mail", insira seu nome de usuário, incluindo o sublinhado e o código curto. ![Screenshot showing login form](/assets/images/help/enterprises/emu-login-username.png) Quando o formulário reconhece o seu nome de usuário, o formulário será atualizado. Você não precisa digitar sua senha neste formulário.
1. Para continuar acessando o seu provedor de identidade, clique em **Efetuar o login com seu provedor de identidade**. ![Captura de tela que mostra o botão "Efetuar o login com seu provedor de identidade"](/assets/images/help/enterprises/emu-login-submit.png)

## Nome de usuário e informações de perfil

{% data variables.product.product_name %} cria automaticamente um nome de usuário para cada pessoa normalizando um identificador fornecido pelo seu IdP. Para obter mais informações, consulte "[Considerações de nome de usuário para autenticação externa](/admin/identity-and-access-management/managing-iam-for-your-enterprise/username-considerations-for-external-authentication)".

Um conflito pode ocorrer quando os usuários de provisionamento das partes únicas do identificador fornecido pelo IdP são removidos durante a normalização. Se você não puder provisionar um usuário devido a um conflito de nome de usuário, você deverá modificar o nome de usuário fornecido pelo seu IdP. Para obter mais informações, consulte "[Resolvendo conflitos de nome de usuário](/admin/identity-and-access-management/managing-iam-for-your-enterprise/username-considerations-for-external-authentication#resolving-username-conflicts). "

O nome do perfil e endereço de email de um {% data variables.product.prodname_managed_user %} também é fornecido pelo IdP. {% data variables.product.prodname_managed_users_caps %} não pode alterar seu nome de perfil ou endereço de e-mail em {% data variables.product.prodname_dotcom %}.
