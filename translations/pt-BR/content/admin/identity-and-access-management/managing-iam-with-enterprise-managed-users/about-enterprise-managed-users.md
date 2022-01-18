---
title: Sobre usuários gerenciados pela empresa
shortTitle: Sobre usuários gerenciados
intro: 'Você pode gerenciar centralmente a identidade e o acesso dos integrantes da empresa em {% data variables.product.prodname_dotcom %} a partir do seu provedor de identidade.'
product: '{% data reusables.gated-features.emus %}'
redirect_from:
  - /early-access/github/articles/get-started-with-managed-users-for-your-enterprise
  - /github/setting-up-and-managing-your-enterprise/managing-your-enterprise-users-with-your-identity-provider/about-enterprise-managed-users
  - /admin/authentication/managing-your-enterprise-users-with-your-identity-provider/about-enterprise-managed-users
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

Com {% data variables.product.prodname_emus %}, você pode controlar as contas de usuário dos integrantes da empresa por meio do provedor de identidade (IdP). Você pode simplificar a autenticação com o logon único SAML (SSO) e provisionar atualizar e cancelar o provisionamento das contas de usuário para os membors da sua empresa. Os usuários atribuídos ao aplicativo {% data variables.product.prodname_emu_idp_application %} no seu IdP são provisionados como novas contas de usuário em {% data variables.product.prodname_dotcom %} e adicionados à sua empresa. Você controla nomes de usuários, dados de perfil, associação de equipe e acesso ao repositório a partir do seu IdP.

No seu IdP, você pode dar a cada {% data variables.product.prodname_managed_user %} a função do proprietário da empresa, usuário ou gerente de cobrança. {% data variables.product.prodname_managed_users_caps %} pode possuir organizações dentro da sua empresa e pode adicionar outros {% data variables.product.prodname_managed_users %} às organizações e equipes internamente. Para obter mais informações, consulte "[Funções em uma empresa](/github/setting-up-and-managing-your-enterprise/managing-users-in-your-enterprise/roles-in-an-enterprise)" e "[Sobre as organizações](/organizations/collaborating-with-groups-in-organizations/about-organizations)".

Organization membership can be managed manually or updated automatically as {% data variables.product.prodname_managed_users %} are added to IdP groups that are connected to teams within the organization. When a {% data variables.product.prodname_managed_user %} is manually added to an organization, unassigning them from the {% data variables.product.prodname_emu_idp_application %} application on your IdP will suspend the user but not remove them from the organization. For more information about managing organization and team membership automatically, see "[Managing team memberships with identity provider groups](/github/setting-up-and-managing-your-enterprise/managing-your-enterprise-users-with-your-identity-provider/managing-team-memberships-with-identity-provider-groups)."

Você pode conceder {% data variables.product.prodname_managed_users %} acesso e a capacidade de contribuir para repositórios na sua empresa, mas {% data variables.product.prodname_managed_users %} não pode criar conteúdo público ou colaborar com outros usuários, organizações e empresas no resto de {% data variables.product.prodname_dotcom %}. O {% data variables.product.prodname_managed_users %} provisionado para sua empresa não pode ser convidado para organizações ou repositórios fora da empresa, nem {% data variables.product.prodname_managed_users %} pode ser convidado para outras empresas. Os colaboradores externos não são compatíveis com {% data variables.product.prodname_emus %}.

Os nomes de usuário do {% data variables.product.prodname_managed_users %} da empresa e as suas informações de perfil como, por exemplo, nomes de exibição e endereços de e-mail, são definidos por meio do seu IdP e não podem ser alterados pelos próprios usuários. Para obter mais informações, consulte "[Nomes de usuário e informações do perfil](#usernames-and-profile-information)".

{% data reusables.enterprise-accounts.emu-forks %}

Os proprietários de empresas podem auditar todas as ações de {% data variables.product.prodname_managed_users %}' em {% data variables.product.prodname_dotcom %}.

Para usar {% data variables.product.prodname_emus %}, você precisa de um tipo de conta corporativa separado com {% data variables.product.prodname_emus %} habilitado. Para obter mais informações sobre a criação desta conta, consulte "[Sobre empresas com usuários gerenciados](#about-enterprises-with-managed-users)".


## Suporte do provedor de identidade

{% data variables.product.prodname_emus %} é compatível com os seguintes IdPs:

{% data reusables.enterprise-accounts.emu-supported-idps %}

## Habilidades e restrições de {% data variables.product.prodname_managed_users %}

O {% data variables.product.prodname_managed_users_caps %} só pode contribuir para repositórios privados e internos da sua empresa e repositórios privados pertencentes à sua conta de usuário. {% data variables.product.prodname_managed_users_caps %} tem acesso somente leitura a toda a comunidade de {% data variables.product.prodname_dotcom %} em geral. These visibility and access restrictions for users and content apply to all requests, including API requests.

* {% data variables.product.prodname_managed_users_caps %} não pode criar problemas ou pull requests, comentar ou adicionar reações, nem estrelas, inspeção ou repositórios de bifurcação fora da empresa.
* {% data variables.product.prodname_managed_users_caps %} pode visualizar todos os repositórios públicos em {% data variables.product.prodname_dotcom_the_website %}, mas não pode fazer push de código para repositórios fora da empresa.
* {% data variables.product.prodname_managed_users_caps %} e o conteúdo que criaa é visível apenas para outros integrantes da empresa.
* {% data variables.product.prodname_managed_users_caps %} não pode seguir os usuários fora da empresa.
* {% data variables.product.prodname_managed_users_caps %} não pode criar gists ou comentários em gists.
* {% data variables.product.prodname_managed_users_caps %} não pode instalar {% data variables.product.prodname_github_apps %} nas suas contas de usuário.
* Outros usuários de {% data variables.product.prodname_dotcom %} não podem ver, mencionar ou convidar um {% data variables.product.prodname_managed_user %} para colaborar.
* {% data variables.product.prodname_managed_users_caps %} só pode criar repositórios privados e {% data variables.product.prodname_managed_users %} só pode convidar outros integrantes da empresa para colaborar nos seus próprios repositórios.
* Apenas repositórios privados e internos podem ser criados em organizações pertencentes a um {% data variables.product.prodname_emu_enterprise %}, dependendo das configurações de visibilidade da organização e do repositório corporativo.

## Sobre empresas com usuários gerenciados

Para usar {% data variables.product.prodname_emus %}, você precisa de um tipo de conta corporativa separado com {% data variables.product.prodname_emus %} habilitado. Para experimentar {% data variables.product.prodname_emus %} ou para discutir opções para a migração da sua empresa existente, entre em contato com a [Equipe de vendas de {% data variables.product.prodname_dotcom %}](https://enterprise.github.com/contact).

Seu contato na equipe do GitHub de vendas vai trabalhar com você para criar seu novo {% data variables.product.prodname_emu_enterprise %}. Você deverá fornecer o endereço de e-mail para o usuário que irá configurar sua empresa e um código curto que será usado como sufixo para os nomes de usuários da sua empresa. {% data reusables.enterprise-accounts.emu-shortcode %} Para obter mais informações, consulte "[Nomes de usuário e informações do perfil](#usernames-and-profile-information)"

Após criarmos sua empresa, você receberá um e-mail de {% data variables.product.prodname_dotcom %} convidando você a escolher uma senha para o usuário de configuração da sua empresa, que será o primeiro proprietário da empresa. Use uma janela de navegação anônima ou privada ao definir a senha. O usuário de configuração é usado apenas para configurar o logon único SAML e o provisionamento do SCIM para a empresa. Ele não terá mais acesso para administrar a conta corporativa assim que o SAML for habilitado com sucesso.

O nome do usuário de configuração é o código curto da sua empresa com o sufixo `_admin`. Depois de efetuar o login no seu usuário de configuração, você pode começar configurando o SAML SSO para a sua empresa. Para obter mais informações, consulte "[Configurando o logon único SAML para Usuários Gerenciados pela Empresa](/github/setting-up-and-managing-your-enterprise/managing-your-enterprise-users-with-your-identity-provider/configuring-saml-single-sign-on-for-enterprise-managed-users)."

{% note %}

{% data reusables.enterprise-accounts.emu-password-reset-session %}

{% endnote %}

## Efetuar a autenticação um {% data variables.product.prodname_managed_user %}

{% data variables.product.prodname_managed_users_caps %} deve efetuar a autenticação por meio de seu provedor de identidade. To authenticate, a {% data variables.product.prodname_managed_user %} can visit their IdP application portal or use the login page on {% data variables.product.prodname_dotcom_the_website %}.

### Authenticating as a {% data variables.product.prodname_managed_user %} via {% data variables.product.prodname_dotcom_the_website %}

1. Navigate to [https://github.com/login](https://github.com/login).
1. In the "Username or email address" text box, enter your username including the underscore and short code. ![Screenshot showing login form](/assets/images/help/enterprises/emu-login-username.png) When the form recognizes your username, the form will update. You do not need to enter your password on this form.
1. To continue to your identity provider, click **Sign in with your identity provider**. ![Screenshot showing "Sign in with your identity provider" button](/assets/images/help/enterprises/emu-login-submit.png)

## Nome de usuário e informações de perfil

Quando o seu {% data variables.product.prodname_emu_enterprise %} for criado, você escolherá um código curto que será usado como sufixo para os nomes de usuários da sua empresa. {% data reusables.enterprise-accounts.emu-shortcode %} O usuário configurado que configurar o SAML SSO terá um nome de usuário no formato de **@<em>SHORT-CODE</em>_admin**.

Ao fornecer um novo usuário a partir do provedor de identidade, o novo {% data variables.product.prodname_managed_user %} terá um nome de usuário de {% data variables.product.prodname_dotcom %} no formato de **@<em>IDP-USERNAME</em>_<em>SHORT-CODE</em>**.

| Identity provider                 | {% data variables.product.prodname_dotcom %} username |
| --------------------------------- | ----------------------------------------------------- |
| Azure Active Directory (Azure AD) | <ul><li>_IDP-USERNAME_ is formed by normalizing the characters preceding the `@` character in the UPN (User Principal Name).</li><li>Guest accounts will have `#EXT` removed from the UPN.</li></ul>                             |
| Okta                              | <ul><li>_IDP-USERNAME_ is the normalized username attribute provided by the IdP.</li></ul>                             |

It's possible for a conflict to occur when provisioning users if the unique parts of the username provided by your IdP are removed when it is normalized. If you are unable to provision a user due to a username conflict, you should modify the username provided by your IdP.

O nome de usuário da nova conta provisionada em {% data variables.product.prodname_dotcom %}, incluindo sublinhado e código curto, não deverá exceder 39 caracteres.

O nome do perfil e endereço de email de um {% data variables.product.prodname_managed_user %} também é fornecido pelo IdP. {% data variables.product.prodname_managed_users_caps %} não pode alterar seu nome de perfil ou endereço de e-mail em {% data variables.product.prodname_dotcom %}.
