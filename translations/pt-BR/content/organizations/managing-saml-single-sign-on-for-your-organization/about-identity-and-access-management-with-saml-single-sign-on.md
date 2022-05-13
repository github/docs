---
title: Sobre o gerenciamento de identidade e acesso com o SAML de logon único
intro: 'Se você gerencia centralmente as identidades e aplicativos dos seus usuários com um provedor de identidade (IdP), você pode configurar o Logon Único (SSO) da Linguagem de Markup de Declaração de Segurança (SAML) para proteger os recursos da sua organização em {% data variables.product.prodname_dotcom %}.'
redirect_from:
  - /articles/about-identity-and-access-management-with-saml-single-sign-on
  - /github/setting-up-and-managing-organizations-and-teams/about-identity-and-access-management-with-saml-single-sign-on
versions:
  ghec: '*'
topics:
  - Organizations
  - Teams
shortTitle: IAM com SSO do SAML
---

{% data reusables.enterprise-accounts.emu-saml-note %}

## Sobre o SAML SSO

{% data reusables.saml.dotcom-saml-explanation %}

{% data reusables.saml.ghec-only %}

{% data reusables.saml.saml-accounts %}

Os proprietários da organização podem aplicar o SSO do SAML para uma organização individual ou os proprietários corporativos podem aplicar o SSO do SAML para todas as organizações em uma conta corporativa. Para obter mais informações, consulte "[Configurar logon único SAML para a sua empresa](/enterprise-cloud@latest/admin/authentication/managing-identity-and-access-for-your-enterprise/configuring-saml-single-sign-on-for-your-enterprise)".

{% data reusables.saml.outside-collaborators-exemption %}

Antes de ativar o SAML SSO para sua organização, é necessário conectar seu IdP à sua organização. Para obter mais informações, consulte "[Conectar o provedor de identidade à sua organização](/organizations/managing-saml-single-sign-on-for-your-organization/connecting-your-identity-provider-to-your-organization)".

Para uma organização, o SAML SSO pode ser desabilitado, habilitado, mas não aplicado, ou habilitado e aplicado. Depois de ativar o SSO SAML para a sua organização e os integrantes da sua organização efetuarem a autenticação com sucesso com o seu IdP, você poderá aplicar a configuração SAML SSO. Para obter mais informações sobre a aplicação de SAML SSO para a sua organização do {% data variables.product.prodname_dotcom %}, consulte "[Aplicando logon único SAML para a sua organização](/articles/enforcing-saml-single-sign-on-for-your-organization)".

Os integrantes devem efetuar a autenticação periodicamente com seu IdP para efetuar a autenticação e obter acesso aos recursos da sua organização. A duração desse período de login é especificado pelo seu IdP e geralmente é de 24 horas. Esse requisito de login periódico limita a duração do acesso e exige que os usuários identifiquem-se novamente para continuar.

Para acessar os recursos protegidos da organização que usam a API e o Git na linha de comando, os integrantes devem autorizar e efetuar a autenticação com um token de acesso pessoal ou chave SSH. Para mais informações consulte "[Autorizar um token de acesso pessoal para usar com o logon único SAML](/github/authenticating-to-github/authorizing-a-personal-access-token-for-use-with-saml-single-sign-on)" e "[Autorizar uma chave SSH para uso com o logon único SAML](/github/authenticating-to-github/authorizing-an-ssh-key-for-use-with-saml-single-sign-on)."

Na primeira vez que um integrante utiliza o SAML SSO para acessar sua organização, {% data variables.product.prodname_dotcom %} cria automaticamente um registro que vincula a sua organização, a conta do integrante no {% data variables.product.product_location %} e a conta do integrante no seu IdP. Você pode visualizar e revogar a identidade de SAML vinculada, as sessões ativas e credenciais autorizadas para integrantes da sua empresa ou conta corporativa. Para obter mais informações consulte "[Visualizar e gerenciar o acesso de SAML de um integrante da sua organização](/organizations/granting-access-to-your-organization-with-saml-single-sign-on/viewing-and-managing-a-members-saml-access-to-your-organization)" e "[Visualizar e gerenciar o acesso de SAML de um usuário à conta corporativa](/enterprise-cloud@latest/admin/user-management/managing-users-in-your-enterprise/viewing-and-managing-a-users-saml-access-to-your-enterprise)".

Se os integrantes estiverem conectados com uma sessão SAML SSO, ao criarem um novo repositório, a visibilidade-padrão desse repositório será privada. Caso contrário, a visibilidade-padrão será pública. Para obter mais informações sobre a visibilidade do repositório, consulte "[Sobre repositórios](/repositories/creating-and-managing-repositories/about-repositories#about-repository-visibility)".

Os integrantes da organização também devem ter uma sessão de SAML ativa para autorizar um {% data variables.product.prodname_oauth_app %}. Você pode optar por não participar deste requisito entrando em contato com {% data variables.contact.contact_support %}. {% data variables.product.product_name %} não recomenda a exclusão deste requisito, o que irá expor sua organização a um maior risco de aquisições de conta e perda potencial de dados.

{% data reusables.saml.saml-single-logout-not-supported %}

## Serviços SAML compatíveis

{% data reusables.saml.saml-supported-idps %}

Alguns IdPs são compatíveis com o o provisionamento de acesso a uma organização {% data variables.product.prodname_dotcom %} via SCIM. Para obter mais informações, consulte "[Sobre SCIM para as organizações](/organizations/managing-saml-single-sign-on-for-your-organization/about-scim-for-organizations)".

{% data reusables.scim.enterprise-account-scim %}

## Adicionar integrantes a uma organização usando SAML SSO

Depois que o SAML SSO é habilitado, há várias maneiras possíveis de adicionar novos integrantes à organização. Os proprietários da organização podem convidar novos integrantes manualmente no {% data variables.product.product_name %} ou usando a API. Para obter mais informações, consulte "[Convidar usuários para juntar-se à sua organização](/articles/inviting-users-to-join-your-organization)" e "[Integrantes](/rest/reference/orgs#add-or-update-organization-membership)".

Para provisionar novos usuários sem o convite de um proprietário da organização, você pode usar a URL `https://github.com/orgs/ORGANIZATION/sso/sign_up`, substituindo _ORGANIZATION_ pelo nome da sua organização. Por exemplo, é possível configurar o IdP para que qualquer pessoa que tenha acesso possa clicar em um link no painel do IdP para ingressar na sua organização do {% data variables.product.prodname_dotcom %}.

Se o seu IdP é compatível com o SCIM, o {% data variables.product.prodname_dotcom %} poderá convidar automaticamente integrantes para participarem da sua organização ao conceder acesso no seu IdP. Se você remover o acesso de um integrante à organização do seu {% data variables.product.prodname_dotcom %} no seu IdP de SAML, o integrante será removido automaticamente da organização de {% data variables.product.prodname_dotcom %}. Para obter mais informações, consulte "[Sobre SCIM para as organizações](/organizations/managing-saml-single-sign-on-for-your-organization/about-scim-for-organizations)".

{% data reusables.organizations.team-synchronization %}

{% data reusables.saml.saml-single-logout-not-supported %}

## Leia mais

- "[SAML configuration reference](/admin/identity-and-access-management/using-saml-for-enterprise-iam/saml-configuration-reference)"
- "[Sobre a autenticação de dois fatores e o SAML de logon único](/articles/about-two-factor-authentication-and-saml-single-sign-on)"
- "[Sobre a autenticação com logon único SAML](/github/authenticating-to-github/about-authentication-with-saml-single-sign-on)"
