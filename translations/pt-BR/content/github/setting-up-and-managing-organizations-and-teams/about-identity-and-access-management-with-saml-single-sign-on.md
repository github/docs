---
title: Sobre o gerenciamento de identidade e acesso com o SAML de logon único
intro: 'Se você gerencia centralmente as identidades e aplicativos dos seus usuários com um provedor de identidade (IdP), você pode configurar o Logon Único (SSO) da Linguagem de Markup de Declaração de Segurança (SAML) para proteger os recursos da sua organização em {% data variables.product.prodname_dotcom %}.'
product: '{% data reusables.gated-features.saml-sso %}'
redirect_from:
  - /articles/about-identity-and-access-management-with-saml-single-sign-on
versions:
  free-pro-team: '*'
---

### Sobre o SAML SSO

{% data reusables.saml.dotcom-saml-explanation %}

Depois de configurar o SAML SSO, os integrantes da sua organização de {% data variables.product.prodname_dotcom %} continuarão a fazer login em suas contas de usuário no {% data variables.product.prodname_dotcom %}. Quando um membro acessa recursos dentro de sua organização que usa o SAML SSO, o {% data variables.product.prodname_dotcom %} redireciona o integrante para o seu IdP para efetuar a autenticação. Após a autenticação bem-sucedida, seu IdP redireciona o integrante para {% data variables.product.prodname_dotcom %}, onde poderá acessar os recursos da sua organização.

Os proprietários da organização podem aplicar o SSO do SAML para uma organização individual ou os proprietários corporativos podem aplicar o SSO do SAML para todas as organizações em uma conta corporativa. Para obter mais informações, consulte "[Habilitar o logon único SAML para organizações na conta corporativa](/github/setting-up-and-managing-your-enterprise/enabling-saml-single-sign-on-for-organizations-in-your-enterprise-account)".

{% data reusables.saml.outside-collaborators-exemption %}

Antes de ativar o SAML SSO para sua organização, é necessário conectar seu IdP à sua organização. Para obter mais informações, consulte "[Conectar o provedor de identidade à sua organização](/github/setting-up-and-managing-organizations-and-teams/connecting-your-identity-provider-to-your-organization)".

Para uma organização, o SAML SSO pode ser desabilitado, habilitado, mas não aplicado, ou habilitado e aplicado. Depois de ativar o SSO SAML para a sua organização e os integrantes da sua organização efetuarem a autenticação com sucesso com o seu IdP, você poderá aplicar a configuração SAML SSO. Para obter mais informações sobre a aplicação de SAML SSO para a sua organização do {% data variables.product.prodname_dotcom %}, consulte "[Aplicando logon único SAML para a sua organização](/articles/enforcing-saml-single-sign-on-for-your-organization)".

Os integrantes devem efetuar a autenticação periodicamente com seu IdP para efetuar a autenticação e obter acesso aos recursos da sua organização. A duração desse período de login é especificado pelo seu IdP e geralmente é de 24 horas. Esse requisito de login periódico limita a duração do acesso e exige que os usuários identifiquem-se novamente para continuar.

Para acessar os recursos protegidos da organização que usam a API e o Git na linha de comando, os integrantes devem autorizar e efetuar a autenticação com um token de acesso pessoal ou chave SSH. Para mais informações consulte "[Autorizar um token de acesso pessoal para usar com o logon único SAML](/github/authenticating-to-github/authorizing-a-personal-access-token-for-use-with-saml-single-sign-on)" e "[Autorizar uma chave SSH para uso com o logon único SAML](/github/authenticating-to-github/authorizing-an-ssh-key-for-use-with-saml-single-sign-on)."

A primeira vez que um membro usar o SAML SSO para acessar sua organização, o {% data variables.product.prodname_dotcom %} criará automaticamente um registro que irá vincular a sua organização, a conta do {% data variables.product.prodname_dotcom %} do integrante e a conta do integrante no seu IdP. Você pode visualizar e revogar a identidade de SAML vinculada, as sessões ativas e credenciais autorizadas para integrantes da sua empresa ou conta corporativa. Para obter mais informações consulte "[Visualizar e gerenciar o acesso de SAML de um integrante da sua organização](/github/setting-up-and-managing-organizations-and-teams/viewing-and-managing-a-members-saml-access-to-your-organization)" e "[Visualizar e gerenciar o acesso de SAML de um usuário à conta corporativa](/github/setting-up-and-managing-your-enterprise/viewing-and-managing-a-users-saml-access-to-your-enterprise-account)".

Se os integrantes estiverem conectados com uma sessão SAML SSO, ao criarem um novo repositório, a visibilidade-padrão desse repositório será privada. Caso contrário, a visibilidade-padrão será pública. Para obter mais informações sobre a visibilidade de repositório, consulte "[Sobre a visibilidade do repositório](/github/creating-cloning-and-archiving-repositories/about-repository-visibility)".

Os integrantes da organização também devem ter uma sessão de SAML ativa para autorizar um {% data variables.product.prodname_oauth_app %}. Você pode optar por não participar deste requisito entrando em contato com {% data variables.contact.contact_support %}. {% data variables.product.product_name %} não recomenda a exclusão deste requisito, o que irá expor sua organização a um maior risco de aquisições de conta e perda potencial de dados.

{% data reusables.saml.saml-single-logout-not-supported %}

### Serviços SAML compatíveis

{% data reusables.saml.saml-supported-idps %}

Alguns IdPs suportam acesso de provisionamento a uma organização do {% data variables.product.prodname_dotcom %} via SCIM. Para obter mais informações, consulte "[Sobre o SCIM](/github/setting-up-and-managing-organizations-and-teams/about-scim)".

### Adicionar integrantes a uma organização usando SAML SSO

Depois que o SAML SSO é habilitado, há várias maneiras possíveis de adicionar novos integrantes à organização. Os proprietários da organização podem convidar novos integrantes manualmente no {% data variables.product.product_name %} ou usando a API. Para obter mais informações, consulte "[Convidar usuários para juntar-se à sua organização](/articles/inviting-users-to-join-your-organization)" e "[Integrantes](/rest/reference/orgs#add-or-update-organization-membership)".

Para provisionar novos usuários sem o convite de um proprietário da organização, você pode usar a URL `https://github.com/orgs/ORGANIZATION/sso/sign_up`, substituindo _ORGANIZATION_ pelo nome da sua organização. Por exemplo, é possível configurar o IdP para que qualquer pessoa que tenha acesso possa clicar em um link no painel do IdP para ingressar na sua organização do {% data variables.product.prodname_dotcom %}.

Se o seu IdP é compatível com o SCIM, o {% data variables.product.prodname_dotcom %} poderá convidar automaticamente integrantes para participarem da sua organização ao conceder acesso no seu IdP. Se você remover o acesso de um integrante à organização do seu {% data variables.product.prodname_dotcom %} no seu IdP de SAML, o integrante será removido automaticamente da organização de {% data variables.product.prodname_dotcom %}. Para obter mais informações, consulte "[Sobre o SCIM](/github/setting-up-and-managing-organizations-and-teams/about-scim)".

{% data reusables.organizations.team-synchronization %}

{% data reusables.saml.saml-single-logout-not-supported %}

### Leia mais

- "[Sobre a autenticação de dois fatores e o SAML de logon único](/articles/about-two-factor-authentication-and-saml-single-sign-on)"
- "[Sobre a autenticação com logon único SAML](/github/authenticating-to-github/about-authentication-with-saml-single-sign-on)"
