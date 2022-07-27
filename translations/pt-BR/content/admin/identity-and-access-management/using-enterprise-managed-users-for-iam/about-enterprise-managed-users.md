---
title: Sobre usuários gerenciados pela empresa
shortTitle: Sobre usuários gerenciados
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
---

## Sobre o {% data variables.product.prodname_emus %}

Com {% data variables.product.prodname_emus %}, você pode controlar as contas de usuário dos integrantes da empresa por meio do provedor de identidade (IdP). Os usuários atribuídos ao aplicativo {% data variables.product.prodname_emu_idp_application %} no seu IdP são provisionados como novas contas de usuário em {% data variables.product.prodname_dotcom %} e adicionados à sua empresa. Você controla nomes de usuário, dados de perfil, integrantes da equipe e acesso ao repositório para as contas de usuário do seu IdP.

No seu IdP, você pode dar a cada {% data variables.product.prodname_managed_user %} a função do proprietário da empresa, usuário ou gerente de cobrança. {% data variables.product.prodname_managed_users_caps %} pode possuir organizações dentro da sua empresa e pode adicionar outros {% data variables.product.prodname_managed_users %} às organizações e equipes internamente. Para obter mais informações, consulte "[Funções em uma empresa](/github/setting-up-and-managing-your-enterprise/managing-users-in-your-enterprise/roles-in-an-enterprise)" e "[Sobre as organizações](/organizations/collaborating-with-groups-in-organizations/about-organizations)".

A adesão à organização pode ser gerenciada manualmente ou você pode atualizar a assinatura automaticamente à medida que {% data variables.product.prodname_managed_users %} é adicionado a grupos de IdP que estão conectados a equipes dentro da organização. Quando um {% data variables.product.prodname_managed_user %} é adicionado manualmente a uma organização, o cancelamento a atribuição do aplicativo de {% data variables.product.prodname_emu_idp_application %} no seu IdP irá suspender o usuário, mas não removê-lo da organização. Para obter mais informações sobre o gerenciamento da organização e a associação à equipe automaticamente, consulte "[Gerenciando associações de equipe com grupos de provedores de identidade](/admin/identity-and-access-management/managing-iam-with-enterprise-managed-users/managing-team-memberships-with-identity-provider-groups)".

{% ifversion oidc-for-emu %}

{% data reusables.enterprise-accounts.emu-cap-validates %} Para obter mais informações, consulte "[Sobre o suporte à política de acesso condicional do seu IdP](/admin/identity-and-access-management/using-enterprise-managed-users-for-iam/about-support-for-your-idps-conditional-access-policy)."

{% endif %}

Você pode conceder {% data variables.product.prodname_managed_users %} acesso e a capacidade de contribuir para repositórios na sua empresa, mas {% data variables.product.prodname_managed_users %} não pode criar conteúdo público ou colaborar com outros usuários, organizações e empresas no resto de {% data variables.product.prodname_dotcom %}. Para obter mais informações, consulte "[Habilidades e restrições de {% data variables.product.prodname_managed_users %}](#abilities-and-restrictions-of-enterprise-managed-users)".

Os nomes de usuário do {% data variables.product.prodname_managed_users %} da empresa e as suas informações de perfil como, por exemplo, nomes de exibição e endereços de e-mail, são definidos por meio do seu IdP e não podem ser alterados pelos próprios usuários. Para obter mais informações, consulte "[Nomes de usuário e informações do perfil](#usernames-and-profile-information)".

{% data reusables.enterprise-accounts.emu-forks %}

Os proprietários de empresas podem auditar todas as ações de {% data variables.product.prodname_managed_users %}' em {% data variables.product.prodname_dotcom %}. Para obter mais informações, consulte "[Eventos de log de auditoria para a sua empresa](/admin/monitoring-activity-in-your-enterprise/reviewing-audit-logs-for-your-enterprise/audit-log-events-for-your-enterprise#about-audit-log-events-for-your-enterprise)".

Para usar {% data variables.product.prodname_emus %}, você precisa de um tipo de conta corporativa separado com {% data variables.product.prodname_emus %} habilitado. Para obter mais informações sobre a criação desta conta, consulte "[Sobre empresas com usuários gerenciados](#about-enterprises-with-managed-users)".

{% note %}

**Nota:** Há várias opções para gestão de identidade e acesso com {% data variables.product.prodname_ghe_cloud %} e {% data variables.product.prodname_emus %} não é a melhor solução para cada cliente. Para obter mais informações sobre se o {% data variables.product.prodname_emus %} está certo para a sua empresa, consulte "[Sobre a autenticação para a sua empresa](/admin/identity-and-access-management/managing-iam-for-your-enterprise/about-authentication-for-your-enterprise#identifying-the-best-authentication-method-for-your-enterprise)".

{% endnote %}

## Suporte do provedor de identidade

{% data variables.product.prodname_emus %} é compatível com os seguintes IdPs{% ifversion oidc-for-emu %} e métodos de autenticação:

|                          | SAML                                          | OIDC (beta)                                   |
| ------------------------ | --------------------------------------------- | --------------------------------------------- |
| Diretório Ativo do Azure | {% octicon "check" aria-label="Check icon" %} | {% octicon "check" aria-label="Check icon" %}
| Okta                     | {% octicon "check" aria-label="Check icon" %} |                                               |
{% else %}:

{% data reusables.enterprise-accounts.emu-supported-idps %}

{% endif %}

## Habilidades e restrições de {% data variables.product.prodname_managed_users %}

O {% data variables.product.prodname_managed_users_caps %} só pode contribuir para repositórios privados e internos da sua empresa e repositórios privados pertencentes à sua conta de usuário. {% data variables.product.prodname_managed_users_caps %} tem acesso somente leitura a toda a comunidade de {% data variables.product.prodname_dotcom %} em geral. Estas restrições de acesso e visibilidade para usuários e conteúdo aplicam-se a todas as solicitações, incluindo solicitações da API.

* {% data variables.product.prodname_managed_users %} não pode ser convidado para organizações ou repositórios fora da empresa, nem o {% data variables.product.prodname_managed_users %} pode ser convidado para outras empresas.
* Os colaboradores externos não são compatíveis com {% data variables.product.prodname_emus %}.
* {% data variables.product.prodname_managed_users_caps %} não pode criar problemas ou pull requests, comentar ou adicionar reações, nem estrelas, inspeção ou repositórios de bifurcação fora da empresa.
* {% data variables.product.prodname_managed_users_caps %} pode visualizar todos os repositórios públicos em {% data variables.product.prodname_dotcom_the_website %}, mas não pode fazer push de código para repositórios fora da empresa.
* {% data variables.product.prodname_managed_users_caps %} e o conteúdo que criaa é visível apenas para outros integrantes da empresa.
* {% data variables.product.prodname_managed_users_caps %} não pode seguir os usuários fora da empresa.
* {% data variables.product.prodname_managed_users_caps %} não pode criar gists ou comentários em gists.
* {% data variables.product.prodname_managed_users_caps %} não pode instalar {% data variables.product.prodname_github_apps %} nas suas contas de usuário.
* Outros usuários de {% data variables.product.prodname_dotcom %} não podem ver, mencionar ou convidar um {% data variables.product.prodname_managed_user %} para colaborar.
* {% data variables.product.prodname_managed_users_caps %} só pode criar repositórios privados e {% data variables.product.prodname_managed_users %} só pode convidar outros integrantes da empresa para colaborar nos seus próprios repositórios.
* {% data reusables.enterprise-accounts.emu-forks %}
* Apenas repositórios privados e internos podem ser criados em organizações pertencentes a um {% data variables.product.prodname_emu_enterprise %}, dependendo das configurações de visibilidade da organização e do repositório corporativo.
* {% data variables.product.prodname_managed_users_caps %} são limitados em seu uso de {% data variables.product.prodname_pages %}. Para obter mais informações, consulte "[Sobre {% data variables.product.prodname_pages %}](/pages/getting-started-with-github-pages/about-github-pages#limitations-for-enterprise-managed-users)".

## Primeiros passos com {% data variables.product.prodname_emus %}

Antes que seus desenvolvedores possam usar {% data variables.product.prodname_ghe_cloud %} com {% data variables.product.prodname_emus %}, você deve seguir uma série de etapas de configuração.

1. Para usar {% data variables.product.prodname_emus %}, você precisa de um tipo de conta corporativa separado com {% data variables.product.prodname_emus %} habilitado. Para experimentar {% data variables.product.prodname_emus %} ou para discutir opções para a migração da sua empresa existente, entre em contato com a [Equipe de vendas de {% data variables.product.prodname_dotcom %}](https://enterprise.github.com/contact).

  Seu contato na equipe do GitHub de vendas vai trabalhar com você para criar seu novo {% data variables.product.prodname_emu_enterprise %}. Você deverá fornecer o endereço de e-mail para o usuário que irá configurar sua empresa e um código curto que será usado como sufixo para os nomes de usuários da sua empresa. {% data reusables.enterprise-accounts.emu-shortcode %} Para obter mais informações, consulte "[Nomes de usuário e informações do perfil](#usernames-and-profile-information)"

2. Após criarmos sua empresa, você receberá um e-mail de {% data variables.product.prodname_dotcom %} convidando você a escolher uma senha para o usuário de configuração da sua empresa, que será o primeiro proprietário da empresa. Use uma janela de navegação anônima ou privada ao definir a senha. O usuário de configuração é usado apenas para configurar a integração do logon único e provisionamento do SCIM para a empresa. Ele não terá mais acesso para administrar a conta corporativa assim que o SSO for habilitado com sucesso. O nome do usuário de configuração é o código curto da sua empresa com o sufixo `_admin`.

  {% note %}

  {% data reusables.enterprise-accounts.emu-password-reset-session %}

  {% endnote %}

3. Depois de fazer login como usuário de configuração, recomendamos habilitar a autenticação de dois fatores. Para obter mais informações, consulte "[Configurar autenticação de dois fatores](/authentication/securing-your-account-with-two-factor-authentication-2fa/configuring-two-factor-authentication)".

1. Para começar, configure {% ifversion oidc-for-emu %}como seus membros efetuarão a autenticação. Se você estiver usando o Diretório Ativo do Azure como seu provedor de identidade, você poderá escolher entre o OpenID Connect (OIDC) e o Security Assertion Markup Language (SAML). Ambas as opções fornecem uma experiência perfeita de login para seus integrantes, mas apenas o OIDC inclui suporte para políticas de acesso condicional (CAP). Se você estiver usando o Okta como seu provedor de identidade, você pode usar o SAML para autenticar seus integrantes .{% else %}SAML SSO para sua empresa. Para obter mais informações, consulte "[Configurando o logon único SAML para Usuários Gerenciados pela Empresa](/admin/identity-and-access-management/managing-iam-with-enterprise-managed-users/configuring-saml-single-sign-on-for-enterprise-managed-users)."{% endif %}

  {% ifversion oidc-for-emu %}

  Para começar, leia o guia do método de autenticação escolhido.

    - "[Configurando OIDC para usuários gerenciados por empresas](/admin/identity-and-access-management/using-enterprise-managed-users-for-iam/configuring-oidc-for-enterprise-managed-users)."
    - "[Configurando o logon único SAML para Usuários Gerenciados pela Empresa](/admin/identity-and-access-management/managing-iam-with-enterprise-managed-users/configuring-saml-single-sign-on-for-enterprise-managed-users)."

  {% endif %}

4. Uma vez configurado SSO, você poderá configurar o provisionamento do SCIM. O SCIM é como seu provedor de identidade irá prover e gerenciar contas de integrantes e equipes em {% data variables.product.prodname_dotcom_the_website %}. Para obter mais informações sobre como configurar o provisionamento do SCIM, consulte "[Configurando o provisionamento de SCIM para usuários gerenciados pela empresa](/admin/identity-and-access-management/managing-iam-with-enterprise-managed-users/configuring-scim-provisioning-for-enterprise-managed-users)".

5. Uma vez configurados a autenticação e provisionamento, você pode começar a provisionar os integrantes e gerenciar as equipes. Para obter mais informações, consulte "[Gerenciar associações de equipe com grupos de provedor de identidade](/admin/identity-and-access-management/using-enterprise-managed-users-for-iam/managing-team-memberships-with-identity-provider-groups)".

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

O nome do perfil e endereço de email de um {% data variables.product.prodname_managed_user %} também é fornecido pelo IdP. {% data variables.product.prodname_managed_users_caps %} não pode alterar seu nome de perfil ou endereço de e-mail em {% data variables.product.prodname_dotcom %}, e o IdP só pode fornecer um único endereço de e-mail.
